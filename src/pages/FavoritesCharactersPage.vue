<template>
  <main class="main">
    <FavoritesCharacters />
  </main>
</template>

<script>
import '@/components/favoritesCharactersPage/styles/favoritesCharacters.less'
import FavoritesCharacters from '@/components/favoritesCharactersPage/FavoritesCharacters'
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [animateItems],
  components: {
    FavoritesCharacters
  }
}
</script>