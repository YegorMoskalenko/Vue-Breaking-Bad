<template>
  <header class="header anim-items" :class="startMount === false ? 'anim-active' : ''">
    <div class="header__left-side">
      <button v-if="$route.path !== '/'" @click="$router.push('/')" class="header__content__links">Go home</button>
      <button @click="$router.push('/top-deaths')" class="header__content__links">Top 5 Deaths</button>
      <button @click="routeParamsEpisodeId = +$route.params.episodeId; pushingToPreviousPage()" v-if="$route.path === `/episode/${$route.params.episodeId}`" class="header__content__links">Back to episodes</button>
    </div>
    <div class="header__right-side">
      <button @click="$router.push('/serial-info')" class="header__content__links">Serial info</button>
      <button @click="$router.push('/occupations')" class="header__content__links">Occupations</button>
      <button @click="$router.push('/favorites-characters')" class="header__content__links">Favorites</button>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  data(){
    return {
      startMount: null,
      episodeOfSeason: null,
      routeParamsEpisodeId: null
    }
  },
  computed: {
    ...mapGetters('storeBreakingBad', ['getSeasons'])
  },
  methods: {
    pushingToPreviousPage: function () {
      Object.entries(this.getSeasons).forEach((season, index) => {
        let newIndex = index + 1
        season[1].filter(episode => episode.episode_id === this.routeParamsEpisodeId ? this.episodeOfSeason = newIndex : false)
      })

      return this.$router.push(`/season/${this.episodeOfSeason}`)
    }
  },
  mounted() {
    this.startMount = true

    setTimeout(() => {
      this.startMount = false
    }, 300)
  }
}
</script>

<style lang="less">
@import "styles/header";
</style>