import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowIcon from '../assets/arrow.svg'
import { useClickOutside } from '../hooks'

const Arrow = styled(props => <ArrowIcon {...props}/>)`

`


const OrderingSelect = styled.div`
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

`

const OrderingSelectTitle = styled.div`
    span {
        color: var(--white);
    }
`





const OrderingOptionList = styled.div`
    width: 100%;
    background: var(--dark);
    padding: 15px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

`
const OrderingOption = styled.div`
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

const OrderingSelectWrapper = styled.div`
    position: relative;
    min-width: 250px;
    margin-bottom: 25px;
`





const Ordering = ({selectOrder}) => {

    const [dropdown, setDropdownActive] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState('All')

    const dropdownRef = useClickOutside(() => {
        setDropdownActive(false)
    })


    const orderingList = [
        {name: 'All', value: '-added'},
        {name: 'Date: ascending', value: '-released'},
        {name: 'Date: descending', value: 'released'},
        {name: 'Rating: ascending', value: '-rating'},
        {name: 'Rating: descending', value: 'rating'},
      ]

    const handleClick = (value, name) => {
        toggleDropdown()
        selectOrder(value)
        setSelectedOrder(name)

    }

    const toggleDropdown = () => {
        setDropdownActive((state) => !state)
    }

    return (
        <OrderingSelectWrapper>
            <OrderingSelect onClick={toggleDropdown}>
                <OrderingSelectTitle>
                    Order by: <span>{selectedOrder}</span>
                </OrderingSelectTitle>
                <Arrow/>
            </OrderingSelect>
            {dropdown && (
                <OrderingOptionList ref={dropdownRef}>
                    {orderingList.map((ordering) => {
                        const selectStyle = ordering.name === selectedOrder ? true : false
                        return (
                            <OrderingOption 
                                selectStyle={selectStyle}
                                key={ordering.value} 
                                value={ordering.value}
                                onClick={() => handleClick(ordering.value, ordering.name)}
                            >
                                {ordering.name}
                            </OrderingOption>
                        )
                    })}
                </OrderingOptionList>
            )}

        </OrderingSelectWrapper>


    )
}

export default Ordering
