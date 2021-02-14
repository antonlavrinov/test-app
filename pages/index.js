import {useState} from 'react'

import Layout from '../components/Layout'
import Platforms from '../components/Platforms'
import styled from 'styled-components'
import RawgService from '../rawg-service'
import SearchField from '../components/searchField'
import GameList from '../components/GameList'
import Ordering from '../components/Ordering'
import LoadMore from '../components/LoadMore'
import Spinner from '../components/Spinner'
import CrossIcon from '../assets/cross.svg'




const HomePageContent = styled.div`
    min-height: 900px;
`

const NotFound = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-top: 150px;
    color: var(--pale-text);
`


const SearchResultsHeading = styled.div`
    display: flex;
    align-items: center;
`

const SearchResultsTitle = styled.h1`

`

const SearchReset = styled.div`
    margin-top: 7px;
    svg {
        width: 50px;
        height: 50px;
        fill: var(--pale-text);
        :hover {
            fill: var(--white);
            cursor: pointer;
        }
    }
`


const HeadingTitle = styled.h1`
    font-size: 65px;
    margin-bottom: 25px;
`

const FiltersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

`


const rawgService = new RawgService()

const HomePage = ({serverGames}) => {

    const [games, setGames] = useState(serverGames)

    const [selectedHeading, setSelectedHeading] = useState('All games')
    const [searchMode, setSearchMode] = useState(false)
    const [searchResultsTitle, setSearchResultsTitle] = useState('')

    const [platformQuery, setPlatformQuery] = useState('')
    const [orderQuery, setOrderQuery] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const [loading, setLoading] = useState(false)
    const [fetchMoreLoading, setFetchMoreLoading] = useState(false)



    

    const selectPlatform = (platformId, platformName) => {
        setSelectedHeading(platformName)
        if (platformName === 'All games') {
            setPlatformQuery('')
            fetchGames('', orderQuery, searchQuery)
        } else {
            setPlatformQuery(`&platforms=${platformId}`)
            fetchGames(`&platforms=${platformId}`, orderQuery, searchQuery)
        }
    }

    const selectOrder = (order) => {
        setOrderQuery(`&ordering=${order}`)
        fetchGames(platformQuery, `&ordering=${order}`, searchQuery)
    }

    const searchGames = (query) => {
        setSearchQuery(`&search=${query}`)
        setSearchMode(true)
        setSearchResultsTitle(`Results for: «` + query + '»')
        fetchGames(platformQuery, orderQuery, `&search=${query}`)
    }

    const resetSearch = () => {
        setSearchQuery('')
        setSearchMode(false)
        setSearchResultsTitle('')
        fetchGames(platformQuery, orderQuery, '')
    }




    const fetchGames = async (platform, order, search) => {
        setLoading(true)
        const gameResults = await rawgService.getGameResults(platform, order, search)
        setGames(gameResults)
        setLoading(false)
    }

    const fetchMoreGames = async () => {
        setFetchMoreLoading(true)
        const gameResults = await rawgService.getMoreGames(games.next)
        setGames(state => {
            return {
                ...state,
                next: gameResults.next,
                results: [...state.results, ...gameResults.results] 
            }
        })
        console.log('results', gameResults)
        setFetchMoreLoading(false)

    }



    return (
        <Layout>
            <HomePageContent>
                <SearchField searchGames={searchGames}/>
                {searchMode ? (
                    <SearchResultsHeading>
                        <SearchResultsTitle>
                            {searchResultsTitle}
                        </SearchResultsTitle>
                        <SearchReset onClick={resetSearch}>
                            <CrossIcon/>
                        </SearchReset>
                    </SearchResultsHeading>
                ) : (
                    <HeadingTitle>
                        {selectedHeading}
                    </HeadingTitle>
                )}


                {games.results.length === 0 && searchMode ? (
                    <NotFound>Nothing :(</NotFound>
                ) : (
                    <>
                        <FiltersWrapper>
                            <Platforms selectPlatform={selectPlatform}/>
                            <Ordering selectOrder={selectOrder}/>
                        </FiltersWrapper>

                        {loading ? (
                            <Spinner/>
                        ) : (
                            <GameList games={games.results}/>
                        )}
                    </>
                )}

                {games.next && !loading && (
                    <LoadMore fetchMoreGames={fetchMoreGames} fetchMoreLoading={fetchMoreLoading} />
                )}

            </HomePageContent>
        </Layout>
        
    )
}

export default HomePage


export const getServerSideProps = async () => {

    const serverGames = await rawgService.getGameResults('', '&ordering=-added', '')

    return {
        props: { serverGames: serverGames }
    }
}