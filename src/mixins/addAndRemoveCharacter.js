import {mapMutations, mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters('storeBreakingBad', ['getFavoritesCharacters'])
    },
    methods: {
        ...mapMutations('storeBreakingBad', ['SET_FAVORITES_CHARACTERS']),

        addCharacterToFavorites: function (characterName) {
            const favoritesCharactersNew = [...this.getFavoritesCharacters]
            favoritesCharactersNew.push(characterName)

            return this.SET_FAVORITES_CHARACTERS(favoritesCharactersNew)
        },

        removeCharacterFromFavorites: function (characterIndex) {
            let favoritesCharactersNew = [...this.getFavoritesCharacters]
            favoritesCharactersNew = favoritesCharactersNew.filter((favoritesCharacterNew, index) => favoritesCharactersNew[index] !== favoritesCharactersNew[characterIndex])

            return this.SET_FAVORITES_CHARACTERS(favoritesCharactersNew)
        }
    }
}
