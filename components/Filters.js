import CustomFilter from "./CustomFilter"
import styled from 'styled-components'

const FiltersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 25px;

`

const Filters = ({selectPlatform, selectOrder, loading}) => {

    const orderingList = [
        {name: 'All', value: '-added'},
        {name: 'Date: ascending', value: '-released'},
        {name: 'Date: descending', value: 'released'},
        {name: 'Rating: ascending', value: '-rating'},
        {name: 'Rating: descending', value: 'rating'},
    ]

    const platformList = [
        {name: 'All games', value: '100'},
        {name: 'PC', value: '4'},
        {name: 'PlayStation 4', value: '18'},
        {name: 'Xbox One', value: '1'},
        {name: 'Nintendo Switch', value: '7'},
        {name: 'iOS',  value: '3'},
        {name: 'Android',  value: '21'},
    ]


    return (
        <FiltersWrapper>
            <CustomFilter 
                filterList={platformList} 
                selectFilter={selectPlatform}
                defaultOption={"All games"}
                loading={loading}
                name="Platform:"/>
            <CustomFilter 
                filterList={orderingList} 
                selectFilter={selectOrder}
                defaultOption={"All"}
                loading={loading}
                name="Order by:"/>
        </FiltersWrapper>
    )
}

export default Filters
