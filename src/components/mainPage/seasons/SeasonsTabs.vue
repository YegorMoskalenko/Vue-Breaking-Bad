<template>
  <div class="seasons anim-items">
    <SeasonTab
        v-for="(seasonContent, seasonNum) of this.getSeasons"
        :seasonNum="+seasonNum"
        :key="seasonNum"
    />
  </div>
</template>

<script>
import SeasonTab from '@/components/mainPage/seasons/SeasonTab'
import {mapGetters} from 'vuex'
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [animateItems],
  components: {
    SeasonTab
  },
  computed: {
    ...mapGetters('storeBreakingBad', ['getSeasons'])
  }
}
</script>