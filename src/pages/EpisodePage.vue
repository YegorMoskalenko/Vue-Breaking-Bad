<template>
  <main class="main">
    <div class="episodes">
      <div class="episodes__content">
        <EpisodeTab
            :episode="this.getEpisodes[episodeNumParam - 1]"
        />
      </div>
    </div>
  </main>
</template>

<script>
import '@/components/seasonPage/episodes/styles/episodes.less'
import EpisodeTab from "@/components/seasonPage/episodes/EpisodeTab";
import {mapGetters} from "vuex";
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [animateItems],
  data(){
    return {
      episodeNumParam: +this.$route.params.episodeId
    }
  },
  components: {
    EpisodeTab
  },
  computed: {
    ...mapGetters('storeBreakingBad', ['getSeasons', 'getEpisodes'])
  }
}
</script>

<style lang="less" scoped>
.episodes{
  .episodes__content{
    .episode-tab{
      width: 1000px;
      margin: 30px 0 60px 0;

      &:hover{
        transform: scale(1.02);
      }
    }
  }
}
</style>