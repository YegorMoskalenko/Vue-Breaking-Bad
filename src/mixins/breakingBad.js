import {mapMutations, mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters('storeBreakingBad', ['getSeasons', 'getEpisodes', 'getCharacters'])
    },
    methods: {
        ...mapMutations("storeBreakingBad", ["SET_EPISODES", 'SET_SEASON', 'SET_SEASON_NUM', 'SET_CHARACTERS', 'SET_DEATHS', 'SET_QUOTES', 'SET_OCCUPATIONS', 'SET_SERIAL_INFO']),

        // episodes && seasons && characters && info
        fetchAllDataBreakingBad: async function () {
            if(!window.localStorage.getItem('vuexStoreBreakingBad')){
                const response = await fetch('https://www.breakingbadapi.com/api/episodes')
                const episodes = await response.json()
                this.SET_EPISODES(episodes)

                return this.setSeasons() + await this.fetchCharacters() + await this.fetchDeaths() + await this.fetchQuotes() + await this.fetchImdb()
            }

            return false
        },

        // seasons
        setSeasons: function () {
            for(let seasonNum in this.getSeasons){
                this.SET_SEASON_NUM(seasonNum)
                this.getEpisodes.forEach(episode => {
                    if(episode.season === seasonNum){
                        this.SET_SEASON(episode)
                    }
                })
            }
            this.SET_SEASON_NUM(null)

            return this.getSeasons
        },

        // characters && occupations
        fetchCharacters: async function () {
            let charactersNewObj = {}
            let occupationsNewObj = {}

            const response = await fetch('https://www.breakingbadapi.com/api/characters')
            const characters = await response.json()
            characters.forEach(character => charactersNewObj[character.name] = {...character})

            Object.entries(charactersNewObj).forEach(char => {
                char[1].occupation.forEach(occOne => {
                    if(occupationsNewObj[occOne]){
                        occupationsNewObj[occOne].push(char[1].name)
                    }else {
                        occupationsNewObj[occOne] = []
                        occupationsNewObj[occOne].push(char[1].name)
                    }
                })
            })

            this.SET_OCCUPATIONS(occupationsNewObj)

            return this.SET_CHARACTERS(charactersNewObj)
        },

        // deaths && episodes
        fetchDeaths: async function () {
            let deathsNewObj = {}
            let charactersNewObj = {...this.getCharacters}
            const response = await fetch('https://www.breakingbadapi.com/api/deaths')
            const deaths = await response.json()
            deaths.forEach(death => {
                deathsNewObj[death.death] = {...death}
            })

            // set number of deaths and deaths to characters
            Object.entries(charactersNewObj).forEach(char => {
                charactersNewObj[char[0]].numOfDeaths = 0
                charactersNewObj[char[0]].deaths = []
                deaths.forEach(death => {
                    if(death.responsible.includes(char[0])){
                        charactersNewObj[char[0]].numOfDeaths = charactersNewObj[char[0]].numOfDeaths + 1
                        charactersNewObj[char[0]].deaths.push(death.death)
                    }
                })
            })

            //set deaths to episodes
            let episodesNewArray = [...this.getEpisodes]
            episodesNewArray.forEach((episode, index) => {
                episode.deaths = []
                episode.responsibles = []
                deaths.forEach(death => +episode.episode === death.episode ? episode.deaths.push(death.death) && episode.responsibles.push(death.responsible) : false)
            })

            this.SET_EPISODES(episodesNewArray)
            this.SET_CHARACTERS(charactersNewObj)

            return this.SET_DEATHS(deathsNewObj)
        },

        //quotes
        fetchQuotes: async function () {
            let charactersNewObj = {...this.getCharacters}
            const response = await fetch('https://www.breakingbadapi.com/api/quotes')
            const quotes = await response.json()
            Object.entries(charactersNewObj).forEach(character => {
                let arrOfQuotes = []
                quotes.forEach(quote => {
                    if(character[0] === quote.author){
                        arrOfQuotes.push(quote)
                    }
                })

                return arrOfQuotes.length > 0 ? charactersNewObj[character[0]].quotes = arrOfQuotes : false
            })

            return this.SET_CHARACTERS(charactersNewObj)
        },

        //serial info
        fetchImdb: async function () {
            let apikey = '88e836ce'
            const response = await fetch(`http://www.omdbapi.com/?t=Breaking+Bad&plot=full&apikey=${apikey}`)
            const result = await response.json()

            return this.SET_SERIAL_INFO(result)
        }
    }
}