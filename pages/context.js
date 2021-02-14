import { createContext, useContext, useState } from 'react';
import RawgService from '../rawg-service';

const GamesContext = createContext();
const rawgService = new RawgService()

export const GlobalContext = ({ children, platforms, gamesOrigin }) => {
  const [games, setGames] = useState(gamesOrigin)
  // const [queryParams, setQueryParams] = useState({
  //   platformQuery: '',
  //   sortQuery: ''
  // })

  // console.log('GLOBAL', platforms)

  const {platformQuery, sortQuery} = queryParams

  // const selectPlatform = async (platform) => {
  //   // setPlatformSelected(platform.name)
  //   setQueryParams((state) => {
  //       return {
  //           ...state,
  //           platformQuery: `&platforms=${platform.id}`
  //       }
  //   })
  //   const res = await rawgService.getAllGames(platformQuery, sortQuery)
  //   setGames(res.results)
  // }

  // const searchGames = async (text, resultsNum) => {
  //   const games = await rawgService.getSearchResults(text, resultsNum)
  //   setGames(games.results)
  // }

  const setGameList = (games) => {
    setGames(games)
  }

  return (
    <GamesContext.Provider value={{
        games,
        platforms,
        setGameList,
        selectPlatform,
        searchGames
    }}>
      {children}
    </GamesContext.Provider>
  );
}

export function useGamesContext() {
  return useContext(GamesContext);
}