import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import Screenshots from '../../components/Screenshots'
import Slider from '../../components/Slider'
import RawgService from '../../rawg-service'


const GameWrapper = styled.div`
    padding: 35px 0;
`

const GameMainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
    @media only screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`

const GamePoster = styled.div`
    min-width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    padding-bottom: calc(4/3 * 50%);

    ${props => props.imageUrl && `
        background-image: url(${props.imageUrl});
        background-size: cover;
        background-position: center;
    `}


    @media only screen and (min-width: 768px) {
        min-width: 30%;
        padding-bottom: calc(4/3 * 30%);
        margin-right: 3%;
    }



`



const GameInfo = styled.div`
    min-width: 100%;
    @media only screen and (min-width: 768px) {
        min-width: 67%;
    }

`

const GameTitle = styled.h1`
    font-size: 50px;
    margin-bottom: 15px;
`

const GameMetaList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const GameDescription = styled.div`


`

const GameMetaItem = styled.div`
    margin-right: 25px;
    margin-bottom: 20px;
    :last-child {
        margin-right: 0;
    }

`
const GameMetaTitle = styled.div`
    color: var(--pale-text);

`
const GameWebsite = styled.a`
    border-bottom: 1px solid var(--pale-text);
    :hover {
        border-bottom: 1px solid var(--white);
    }

`

const GameMetaText = styled.div`

`

const GameSlider = styled.div`

`


const GameScreenshot = styled.div`
    width: 300px;
    height: 400px;
    ${props => props.url && `
        background-image: url(${props.url})
    `}
`

const BackWrapper = styled(props => <Link {...props}></Link>)`
`

const Back = styled.span`
    border-bottom: 1px solid var(--pale-text);
    font-size: 20px;
    :hover {
        cursor: pointer;
        border-bottom: 1px solid var(--white);
    }
`




const rawgService = new RawgService()




const GamePage = ({game, screenshots}) => {

    // {console.log('query', game)}
    // {console.log('screenshots', screenshots)}

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    const formattedDate = formatDate(game.released)


    return (
        <Layout title={game.name}>
            <BackWrapper href="/"><Back role="button" tabIndex="0">← Back</Back>
            </BackWrapper>
            <GameWrapper>
                <GameMainInfo>
                    <GamePoster imageUrl={game.background_image}></GamePoster>
                    <GameInfo>
                        <GameTitle>
                            {game.name}
                        </GameTitle>
                        <GameMetaList>
                            {game.released && (
                                <GameMetaItem>
                                    <GameMetaTitle>
                                        Release date:
                                    </GameMetaTitle>
                                    <GameMetaText>
                                        {formattedDate}
                                    </GameMetaText>
                                </GameMetaItem>
                            )}
                            <GameMetaItem>
                                <GameMetaTitle>
                                    Rating:
                                </GameMetaTitle>
                                <GameMetaText>
                                    {game.rating}
                                </GameMetaText>
                            </GameMetaItem>
                            {game.website && (
                                <GameMetaItem>
                                    <GameMetaTitle>
                                        Website:
                                    </GameMetaTitle>
                                    <GameWebsite target="_blank" href={game.website}>
                                        {game.website}
                                    </GameWebsite>
                                </GameMetaItem>
                            )}
                        </GameMetaList>
                        <GameDescription>
                            {game.description_raw}
                        </GameDescription>
                    </GameInfo>
                </GameMainInfo>
                {screenshots.results && (
                    <Screenshots screenshots={screenshots.results}/>
                )}
            </GameWrapper>
        </Layout>
    )
}

export default GamePage


export const getServerSideProps = async ({query}) => {

    const game = await rawgService.getGame(query.game_id)
    const screenshots = await rawgService.getGameScreenshots(query.game_id)

    return {
        props: { game, screenshots }
    }
}
