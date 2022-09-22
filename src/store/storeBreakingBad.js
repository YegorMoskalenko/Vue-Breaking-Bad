export const storeBreakingBad = {
    state: () => ({
        episodes: [],
        seasons: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        },
        characters: {},
        deaths: {},
        quotes: {},
        favoritesCharacters: [],
        occupations: {},
        serialInfo: {},

        // index for seasons Array
        seasonNum: null,
    }),

    getters: {
        getEpisodes(state){
            return state.episodes
        },
        getSeasons(state){
            return state.seasons
        },
        getCharacters(state){
            return state.characters
        },
        getDeaths(state){
            return state.deaths
        },
        getQuotes(state){
            return state.deaths
        },
        getFavoritesCharacters(state){
            return state.favoritesCharacters
        },
        getOccupations(state){
            return state.occupations
        },
        getSerialInfo(state){
            return state.serialInfo
        }
    },

    mutations: {
        SET_EPISODES(state, episodes){
            state.episodes = episodes
        },
        SET_SEASON(state, season){
            if(state.seasonNum !== null){
                state.seasons[state.seasonNum].push(season)
            }
        },
        SET_SEASON_NUM(state, seasonNum){
            state.seasonNum = seasonNum
        },
        SET_CHARACTERS(state, characters){
            state.characters = characters
        },
        SET_DEATHS(state, deaths){
            state.deaths = deaths
        },
        SET_QUOTES(state, quotes){
            state.quotes = quotes
        },
        SET_FAVORITES_CHARACTERS(state, favoritesCharacters){
            state.favoritesCharacters = favoritesCharacters
        },
        SET_OCCUPATIONS(state, occupations){
            state.occupations = occupations
        },
        SET_SERIAL_INFO(state, serialInfo){
            state.serialInfo = serialInfo
        }
    },
    namespaced: true
}