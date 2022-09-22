<template>
  <div class="episodes">
    <div class="episodes__content">
      <EpisodeTab
        v-for="episode of this.getSeasons[seasonNumUrlParam]"
        :episode="episode"
        :seasonNumUrlParam="seasonNumUrlParam"
        :key="episode.episode_id"
      />
    </div>
  </div>
</template>

<script>
import EpisodeTab from '@/components/seasonPage/episodes/EpisodeTab';
import {mapGetters} from "vuex";
export default {
  components: {
    EpisodeTab
  },
  props: {
    seasonNumUrlParam: Number
  },
  computed: {
    ...mapGetters('storeBreakingBad', ['getSeasons'])
  }
}
</script>