import {useState, useEffect} from 'react'
import styled from 'styled-components'
import RawgService from '../rawg-service'
import Link from 'next/link'
import LookingGlassIcon from '../assets/glass.svg'
import {useClickOutside, useDebounce} from '../hooks'



const LookingGlass = styled(props => <LookingGlassIcon {...props}/>)`
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    :hover {
        cursor: pointer;
    }
    

`


const SearchForm = styled.form`
    position: relative;
    margin-bottom: 20px;
`

const SearchInput = styled.input`
    padding: 15px 20px 15px 45px;
    width: 100%;
    background: var(--pale-blue);
    outline: none;
    border: none;
    color: var(--white);
    border-radius: 50px;
    ::placeholder {
        color: var(--pale-text);
        font-size: 15px;
    }

`

const SearchDropdown = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 10px;
    position: absolute;
    top: 55px;
    left: 0;
    z-index: 2;
    width: 100%;
    background: var(--dark);
    box-shadow: 0 5px 10px rgba(0,0,0,0.5);
`



const SearchDropdownItem = styled.a`
    display: block;
    padding: 10px;
    border-radius: 5px;
    :hover {
        cursor: pointer;
        background: var(--background-dark-blue);
    }
`

const rawgService = new RawgService()


const SearchField = ({searchGames, loading}) => {
    const [inputText, setInputText] = useState('')
    const [dropdownResults, setDropdownResults] = useState([])
    const [dropdownActive, setDropdownActive] = useState(true)

    const dropdownRef = useClickOutside(() => {
        setDropdownActive(false)
    })

    const debouncedText = useDebounce(inputText, 250);


    useEffect(() => {
          if (debouncedText) {
            searchDropdownResults(debouncedText).then(results => setDropdownResults(results));
          } else {
            setDropdownResults([]);
          }
        },
        [debouncedText]
    );


    const searchDropdownResults = async (value) => {
        try {
            const searchPreview = await rawgService.getSearchPreviewResults(value, 7)
            return searchPreview.results
        } catch(e) {
            console.log(e)
        }
    }


    const handleChange = async (e) => {
        setInputText(e.target.value)
        setDropdownActive(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!inputText) {
            return
        }
        setDropdownActive(false)
        setDropdownResults([])
        setInputText('')
        searchGames(inputText)
    }

    const handleDropdownResultClick = () => {
        setDropdownResults([])
        setDropdownActive(false)
        setInputText('')
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            <LookingGlass onClick={handleSubmit}/>
            <SearchInput 
                disabled={loading}
                placeholder="Search here..." 
                type="text"
                onChange={handleChange}
                value={inputText}/>
            {dropdownActive && dropdownResults.length > 0 && (
                <SearchDropdown ref={dropdownRef}>
                    {dropdownResults.map((result) => {
                        return (
                            <Link key={result.id}  href={`/games/${result.slug}`} passHref>
                                <SearchDropdownItem role="button" tabIndex="0" onClick={handleDropdownResultClick}>
                                    {result.name}
                                </SearchDropdownItem>
                            </Link>
                        )
                    })}
                </SearchDropdown>

            )}



        </SearchForm>
    )
}

export default SearchField
