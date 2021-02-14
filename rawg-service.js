export default class RawgService {
    _apiBase = 'https://api.rawg.io/api'
    _apiKey = 'fe9b931b458244c09e6a4e4d617eda5e'

    getGameResults = async (platformQuery = '', sortQuery = '', searchQuery = '') => {
        const res = await fetch(`${this._apiBase}/games?key=${this._apiKey}${platformQuery}${sortQuery}${searchQuery}`)
        if (!res.ok) {
            throw new Error('Could not fetch games')
        }
        return await res.json()
    }

    getMoreGames = async (query) => {
        const res = await fetch(query)
        if (!res.ok) {
            throw new Error('Could not fetch more games')
        }
        return await res.json()
    }

    getGame = async (slug) => {
        const res = await fetch(`${this._apiBase}/games/${slug}?key=${this._apiKey}`)
        if (!res.ok) {
            throw new Error('Could not fetch game')
        }
        return await res.json()
    }

    getGameScreenshots = async (slug) => {
        const res = await fetch(`${this._apiBase}/games/${slug}/screenshots?key=${this._apiKey}`)
        if (!res.ok) {
            throw new Error('Could not fetch screenshots')
        }
        return await res.json()
    }

    getSearchResults = async (text, resultsNum) => {
        const res = await fetch(`${this._apiBase}/games?key=${this._apiKey}&page_size=${resultsNum}&search=${text}`)
        if (!res.ok) {
            throw new Error('Could not fetch search result')
        }
        return await res.json()
    }
}