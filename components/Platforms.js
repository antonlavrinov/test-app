
import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowIcon from '../assets/arrow.svg'
import { useClickOutside } from '../hooks'


const Arrow = styled(props => <ArrowIcon {...props}/>)`

`


const PlatformSelect = styled.div`
    background: var(--pale-blue);
    padding: 10px;
    color: var(--pale-text);
    border-radius: 10px;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    margin-bottom: 10px;
    svg {
        width: 10px;
        height: 10px;
        margin-right: 3px;
        margin-left: 10px;
    }
    :hover {
        cursor: pointer;
    }

`

const PlatformSelectTitle = styled.div`
    span {
        color: var(--white);
    }
`

const PlatformOptionList = styled.div`
    width: 100%;
    background: var(--dark);
    padding: 15px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

`
const PlatformOption = styled.div`
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

const PlatformSelectWrapper = styled.div`
    position: relative;
    min-width: 250px;
    margin-right: 15px;
`





const Platform = ({selectPlatform}) => {

    const [dropdown, setDropdownActive] = useState(false)
    const [selectedPlatform, setSelectedPlatform] = useState('All games')

    const dropdownRef = useClickOutside(() => {
        setDropdownActive(false)
    })


    const platformList = [
        {name: 'All games', id: '100'},
        {name: 'PC', id: '4'},
        {name: 'PlayStation 4', id: '18'},
        {name: 'Xbox One', id: '1'},
        {name: 'Nintendo Switch', id: '7'},
        {name: 'iOS',  id: '3'},
        {name: 'Android',  id: '21'},
      ]

    const handleClick = (value, name) => {
        toggleDropdown()
        selectPlatform(value, name)
        setSelectedPlatform(name)

    }

    const toggleDropdown = () => {
        setDropdownActive((state) => !state)
    }

    return (
        <PlatformSelectWrapper>
            <PlatformSelect onClick={toggleDropdown}>
                <PlatformSelectTitle>
                    Platform: <span>{selectedPlatform}</span>
                </PlatformSelectTitle>
                <Arrow/>
            </PlatformSelect>
            {dropdown && (
                <PlatformOptionList ref={dropdownRef}>
                    {platformList.map((platform) => {
                        const selectStyle = platform.name === selectedPlatform ? true : false
                        return (
                            <PlatformOption 
                            selectStyle={selectStyle}
                            key={platform.id} 
                            value={platform.id}
                            onClick={() => handleClick(platform.id, platform.name)}
                            >
                                {platform.name}
                            </PlatformOption>
                        )
                    })}
                </PlatformOptionList>
            )}

        </PlatformSelectWrapper>


    )
}

export default Platform

