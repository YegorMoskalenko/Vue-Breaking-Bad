<template>
  <main class="main">
    <EpisodesTabs
      :seasonNumUrlParam="seasonNumUrlParam"
    />
  </main>
</template>

<script>
import '@/components/seasonPage/episodes/styles/episodes.less'
import EpisodesTabs from '@/components/seasonPage/episodes/EpisodesTabs';
import {mapGetters} from "vuex";
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [animateItems],
  components: {
    EpisodesTabs
  },
  data(){
    return {
      seasonNumUrlParam: +this.$route.params.seasonNum
    }
  },
  computed: {
    ...mapGetters('storeBreakingBad', ['getSeasons'])
  },
  methods: {
    pushingToErrorPage: function () {
      if(this.seasonNumUrlParam < 1 || this.seasonNumUrlParam > Object.entries(this.getSeasons).length){
        this.$router.push('/error')
      }
    }
  },
  mounted() {
    this.pushingToErrorPage()
  }
}
</script>
