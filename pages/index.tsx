import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import styled from "styled-components";
import RawgService from "../rawg-service";
import SearchField from "../components/search-field";
import GameList from "../components/game-list";
import LoadMore from "../components/load-more";
import Spinner from "../components/Spinner";
import CrossIcon from "../assets/cross.svg";
import Filters from "../components/filters";

const HomePageContent = styled.div`
  min-height: 900px;
`;

const NotFound = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 150px;
  color: var(--pale-text);
`;

const SearchResultsHeading = styled.div`
  display: flex;
  align-items: center;
`;

const SearchResultsTitle = styled.h1`
  width: 100%;
`;

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
`;

const HeadingTitle = styled.h1`
  font-size: 65px;
  margin-bottom: 25px;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 150px;
  color: var(--pale-text);
`;

const rawgService = new RawgService();

const HomePage = ({ serverGames }) => {
  const [games, setGames] = useState(serverGames);
  const [vidLink, setVidLink] = useState("")
  const [urlFull, setUrlFull] = useState("")

  const [selectedHeading, setSelectedHeading] = useState("All games");
  const [searchMode, setSearchMode] = useState(false);
  const [searchResultsTitle, setSearchResultsTitle] = useState("");

  const [platformQuery, setPlatformQuery] = useState("");
  const [orderQuery, setOrderQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const [error, setError] = useState(false);

  const selectPlatform = (platformId, platformName) => {
    setSelectedHeading(platformName);
    if (platformName === "All games") {
      setPlatformQuery("");
      fetchGames("", orderQuery, searchQuery);
    } else {
      setPlatformQuery(`&platforms=${platformId}`);
      fetchGames(`&platforms=${platformId}`, orderQuery, searchQuery);
    }
  };

  const selectOrder = (order) => {
    setOrderQuery(`&ordering=${order}`);
    fetchGames(platformQuery, `&ordering=${order}`, searchQuery);
  };

  const searchGames = (query) => {
    setSearchQuery(`&search=${query}`);
    setSearchMode(true);
    setSearchResultsTitle(`Results for: «` + query + "»");
    fetchGames(platformQuery, orderQuery, `&search=${query}`);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setSearchMode(false);
    setSearchResultsTitle("");
    fetchGames(platformQuery, orderQuery, "");
  };

  useEffect(() => {
    const parsedUrl = new URL(String(window.location));

    const videolink = parsedUrl.searchParams.get('videolink');
    if (videolink) {
      setVidLink(decodeURIComponent(videolink))
      setUrlFull(String(parsedUrl))
      // history.push(`/play/${youtubeParser(videolink)}/`);
    }
  }, [])

  const fetchGames = async (platform, order, search) => {
    setLoading(true);
    try {
      const gameResults = await rawgService.getGameResults(
        platform,
        order,
        search
      );
      setGames(gameResults);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  const fetchMoreGames = async () => {
    setFetchMoreLoading(true);
    try {
      const gameResults = await rawgService.getMoreGames(games.next);
      setGames((state) => {
        return {
          ...state,
          next: gameResults.next,
          results: [...state.results, ...gameResults.results],
        };
      });
    } catch (e) {
      setError(true);
    }
    setFetchMoreLoading(false);
  };

  if (error || serverGames.error) {
    return (
      <Layout>
        <ErrorMessage>Error!</ErrorMessage>
      </Layout>
    );
  }

  if (vidLink) {
    return (
      <div style={{background: "red", height: "100px", fontSize: "20px", padding: "30px", color: "white"}}>
        <div>{vidLink}</div>
        <div>{urlFull}</div>
             
      </div>
    );
  }

  return (
    <Layout>
      <HomePageContent>
        <SearchField searchGames={searchGames} loading={loading} />
        {searchMode ? (
          <SearchResultsHeading>
            <SearchResultsTitle>{searchResultsTitle}</SearchResultsTitle>
            <SearchReset onClick={resetSearch}>
              <CrossIcon />
            </SearchReset>
          </SearchResultsHeading>
        ) : (
          <HeadingTitle>{selectedHeading}</HeadingTitle>
        )}

        {games.results.length === 0 && searchMode ? (
          <NotFound>Nothing :(</NotFound>
        ) : (
          <>
            <Filters
              loading={loading}
              selectPlatform={selectPlatform}
              selectOrder={selectOrder}
            />
            {loading ? <Spinner /> : <GameList games={games.results} />}
          </>
        )}

        {games.next && !loading && (
          <LoadMore
            fetchMoreGames={fetchMoreGames}
            fetchMoreLoading={fetchMoreLoading}
          />
        )}
      </HomePageContent>
    </Layout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const serverGames = await rawgService.getGameResults(
      "",
      "&ordering=-added",
      ""
    );

    return {
      props: { serverGames: serverGames },
    };
  } catch {
    return {
      props: { serverGames: { results: [], error: "Error!" } },
    };
  }
};
