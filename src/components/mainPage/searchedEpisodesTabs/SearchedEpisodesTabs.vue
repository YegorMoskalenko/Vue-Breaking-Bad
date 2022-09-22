<template>
  <div class="episodes">
    <div class="episodes__content">
      <SearchedEpisodeTab
          v-for="(episode, index) of getSearchedEpisodes"
          :episode="episode"
          :index="index"
          :key="episode.episode_id"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import '@/components/seasonPage/episodes/styles/episodes.less'
import SearchedEpisodeTab from "@/components/mainPage/searchedEpisodesTabs/SearchedEpisodeTab";
export default {
  components: {
    SearchedEpisodeTab
  },
  props: {
    searchEpisodeValue: String
  },
  computed: {
    ...mapGetters('storeBreakingBad', ['getEpisodes']),

    getSearchedEpisodes: function () {
      return Object.entries(this.getEpisodes).filter(episode =>
          episode[1].title.toLowerCase().includes(this.searchEpisodeValue.toLowerCase()) ||
          episode[1].deaths.join(' ').toLowerCase().includes(this.searchEpisodeValue.toLowerCase()) ||
          episode[1].responsibles.join(' ').toLowerCase().includes(this.searchEpisodeValue.toLowerCase())
      )
    }
  }
}
</script>