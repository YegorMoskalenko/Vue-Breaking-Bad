<template>
  <div class="favorites-characters anim-items">
    <TransitionGroup name="list" tag="ul" class="favorites-characters__ul" v-if="this.getFavoritesCharacters.length > 0">
      <li class="favorites-characters__li" v-for="(favoriteCharacter, index) of this.getFavoritesCharacters" :key="favoriteCharacter">
        <p class="favorites-characters__name" @click="$router.push(`/character/${favoriteCharacter.replaceAll(' ', '-')}`)">{{favoriteCharacter}}</p>
        <button class="favorites-characters__btn" @click="this.removeCharacterFromFavorites(index)">Remove from favorites</button>
      </li>
    </TransitionGroup>
    <p class="favorites-characters__none" v-else>None favorites !</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import addAndRemoveCharacter from "@/mixins/addAndRemoveCharacter";
export default {
  mixins: [addAndRemoveCharacter],
  computed: {
    ...mapGetters('storeBreakingBad', ['getFavoritesCharacters'])
  }
}
</script>