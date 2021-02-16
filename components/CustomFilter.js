import {useState} from 'react'
import styled from 'styled-components'
import ArrowIcon from '../assets/arrow.svg'
import { useClickOutside } from '../hooks'

const Arrow = styled(props => <ArrowIcon {...props}/>)`

`


const FilterSelect = styled.div`
    background: var(--pale-blue);
    padding: 10px;
    color: var(--pale-text);
    border-radius: 10px;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

    svg {
        width: 10px;
        height: 10px;
        margin-right: 3px;
        margin-left: 10px;
    }
    :hover {
        cursor: pointer;
    }
    ${props => props.isLoading && `
        :hover {
            cursor: default;
        }
    `}

`

const FilterSelectTitle = styled.div`
    span {
        color: var(--white);
    }
    ${props => props.isLoading && `
        span {
            color: var(--pale-text);
        }
    `}
`





const FilterOptionList = styled.div`
    width: 100%;
    background: var(--dark);
    padding: 15px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

`
const FilterOption = styled.div`
    padding: 5px;
    border-radius: 5px;
    :hover {
        background: var(--background-dark-blue);
        cursor: pointer;
    }
    ${props => props.selectStyle && `
        background: var(--background-dark-blue);
    `}



`

const FilterSelectWrapper = styled.div`
    position: relative;
    min-width: 250px;
    margin-right: 10px;
    margin-bottom: 10px;
    :last-child {
        margin-right: 0;
    }

`





const CustomFilter = ({selectFilter, filterList, defaultOption, loading, name}) => {

    const [dropdown, setDropdownActive] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultOption)

    const dropdownRef = useClickOutside(() => {
        setDropdownActive(false)
    })


    const toggleDropdown = () => {
        if (loading) return
        setDropdownActive((state) => !state)
    }

    const handleClick = (value, name) => {
        if (loading) return
        toggleDropdown()
        selectFilter(value, name)
        setSelectedOption(name)

    }


    return (
        <FilterSelectWrapper>
            <FilterSelect 
                isLoading={loading} 
                onClick={toggleDropdown} 
                onKeyPress={toggleDropdown}
                role="button" 
                tabIndex="0" >
                <FilterSelectTitle isLoading={loading} >
                    {name} <span>{selectedOption}</span>
                </FilterSelectTitle>
                <Arrow/>
            </FilterSelect>
            {dropdown && (
                <FilterOptionList ref={dropdownRef}>
                    {filterList.map((ordering) => {
                        const selectStyle = ordering.name === selectedOption ? true : false
                        return (
                            <FilterOption 
                                selectStyle={selectStyle}
                                key={ordering.value} 
                                value={ordering.value}
                                onClick={() => handleClick(ordering.value, ordering.name)}
                                onKeyPress={() => handleClick(ordering.value, ordering.name)}
                                role="button" 
                                tabIndex="0"
                            >
                                {ordering.name}
                            </FilterOption>
                        )
                    })}
                </FilterOptionList>
            )}

        </FilterSelectWrapper>


    )
}

export default CustomFilter
