import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


const GameListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px;
    width: 100%;
    @media only screen and (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const GameLink = styled(props => <Link {...props}></Link>)`

`

const GameCard = styled.div`
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    padding-bottom: calc(4 / 3 * 100%);
    box-shadow: 0 2px 15px rgba(0,0,0,0.5);
    overflow: hidden;
    :hover {
        cursor: pointer;
        transform: translateY(-3%);
    }
    ${props => props.imageUrl && `
        background-image: url(${props.imageUrl});
        background-size: cover;
        background-position: center;
    `}
`

const GameShadow = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(360deg, rgba(14,25,44, 1) 0%, rgba(14,25,44, 0.5) 40%, rgba(14,25,44, 0) 100%);
    height: 100%;
    width: 100%;
`

const GameInfo = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 10px;
    color: white;
`

const GameTitle = styled.div`
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 5px;
`

const GameDate = styled.div`
    color: var(--pale-text);
`

const GameRating = styled.div`
    position: absolute;
    font-size: 14px;
    color: var(--blue);
    background: var(--background-dark-blue);
    right: 12px;
    bottom: 12px;
    width: 40px;
    padding: 3px 0;
    border: 1px solid var(--blue);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const GameList = ({games}) => {

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }


    return (
        <GameListWrapper>
            {games.map((game) => {
                const releaseDate = formatDate(game.released)
                return (
                    <GameLink key={game.id} href={`/games/${game.slug}`}>
                        <GameCard imageUrl={game.background_image}>
                            <GameShadow/>
                            <GameInfo>
                                <GameTitle>{game.name}</GameTitle>
                                <GameDate>{releaseDate}</GameDate>
                                
                            </GameInfo>
                            <GameRating>{game.rating}</GameRating>
                        </GameCard>
                    </GameLink>
                )
            })}
        </GameListWrapper>
    )
}

export default GameList
