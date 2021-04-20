import axios from "axios";

export default class RawgService {
  _apiBase = "https://api.rawg.io/api";
  _apiKey = "fe9b931b458244c09e6a4e4d617eda5e";

  getGameResults = async (
    platformQuery = "",
    sortQuery = "",
    searchQuery = ""
  ) => {
    const res = await axios.get(
      `${this._apiBase}/games?key=${this._apiKey}${platformQuery}${sortQuery}${searchQuery}`
    );
    if (!res.statusText === "OK") {
      throw new Error("Could not fetch games");
    }
    console.log(res);
    return res.data;
  };

  getMoreGames = async (query) => {
    const res = await axios.get(query);
    if (!res.statusText === "OK") {
      throw new Error("Could not fetch more games");
    }
    return res.data;
  };

  getGame = async (slug) => {
    const res = await axios.get(
      `${this._apiBase}/games/${slug}?key=${this._apiKey}`
    );
    if (!res.statusText === "OK") {
      throw new Error("Could not fetch game");
    }
    return res.data;
  };

  getGameScreenshots = async (slug) => {
    const res = await axios.get(
      `${this._apiBase}/games/${slug}/screenshots?key=${this._apiKey}`
    );
    if (!res.statusText === "OK") {
      throw new Error("Could not fetch screenshots");
    }
    return res.data;
  };

  getSearchPreviewResults = async (text, resultsNum) => {
    const res = await axios.get(
      `${this._apiBase}/games?key=${this._apiKey}&page_size=${resultsNum}&search=${text}`
    );
    if (!res.statusText === "OK") {
      throw new Error("Could not fetch search result");
    }
    return res.data;
  };
}
