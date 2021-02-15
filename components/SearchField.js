import React, {useState, useCallback, useRef} from 'react'
import styled from 'styled-components'
import RawgService from '../rawg-service'
import Link from 'next/link'
import {debounce} from 'lodash'
import LookingGlassIcon from '../assets/glass.svg'
import {useClickOutside} from '../hooks'
// import { useGamesContext } from '../pages/context'


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




const SearchDropdownItemLink = styled(props => <Link {...props}></Link>)`
    display: block;
    width: 100%;
    :hover {
        background: rgba(0,0,0,0.2);
    }
`

const SearchDropdownItem = styled.div`
    padding: 10px;
    border-radius: 5px;
    :hover {
        cursor: pointer;
        background: var(--background-dark-blue);
    }
`

const rawgService = new RawgService()


const SearchField = ({searchGames, loading}) => {
    const [text, setText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [dropdownActive, setDropdownActive] = useState(true)


    const dropdownRef = useClickOutside(() => {
        setDropdownActive(false)
    })


    const debounceOnChange = useCallback(
		debounce(async (value) => {
            if (value) {
                const games = await rawgService.getSearchResults(value, 7)
                setSearchResults(games.results)
            } else {
                setSearchResults([])
            }
        }, 200),
		[],
	);





    const handleChange = async (e) => {
        setText(e.target.value)
        setDropdownActive(true)
        debounceOnChange(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!text) {
            return
        }
        setDropdownActive(false)
        setSearchResults([])
        setText('')
        searchGames(text)
    }

    const handleDropdownResultClick = () => {
        setSearchResults([])
        setDropdownActive(false)
        setText('')
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            <LookingGlass onClick={handleSubmit}/>
            <SearchInput 
                disabled={loading}
                placeholder="Search here..." 
                type="text"
                onChange={handleChange}
                value={text}/>
            {dropdownActive && searchResults.length > 0 && (
                <SearchDropdown ref={dropdownRef}>
                    {searchResults.map((result) => {
                        return (
                            <SearchDropdownItemLink  key={result.id}  href={`/games/${result.slug}`} >
                                <SearchDropdownItem role="button" tabIndex="0" onClick={handleDropdownResultClick}>
                                    {result.name}
                                </SearchDropdownItem>
                            </SearchDropdownItemLink>
                        )
                    })}
                </SearchDropdown>

            )}



        </SearchForm>
    )
}

export default SearchField
