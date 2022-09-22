<template>
  <div class="occupations anim-items">
    <ul class="occupations__ul">
      <li class="occupations__li" v-for="(occups, value) of this.getOccupations" :key="value">
        <p class="occupations__li__value">{{value}}:</p>
        <ul class="occupations__li__occup-ul">
          <li class="occupations__li__occup-li" v-for="(occupOne, index) of occups" :key="index">{{occupOne}};</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters('storeBreakingBad', ['getOccupations'])
  }
}
</script>