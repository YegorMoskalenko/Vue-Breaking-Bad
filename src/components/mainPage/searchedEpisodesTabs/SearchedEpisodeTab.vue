<template>
  <div class="episode-tab anim-items" @click="$router.push(`/episode/${episode[1].episode_id}`)">
    <div class="episodes-tab__title episode-tab__child">
      <p class="episodes-tab__title__text episode-tab__child__p">{{episode[1].title}}</p>
    </div>
    <div class="episode-tab__date episode-tab__child">
      <div class="episode-tab__date__text episode-tab__child__p">
        <p>Release date:</p>
        <p>{{reverseAirDate}}</p>
      </div>
    </div>
    <div class="weather-info episode-tab__child" v-if="weatherModel !== null">
      <p class="weather-info__title">Description for {{reverseAirDate}}:</p>
      <p class="weather-info__description">{{weatherModel.description}}</p>
    </div>
    <div class="search-weather episode-tab__child" @click.stop>
      <input v-model="city" type="text" class="search-weather__input" placeholder="Write a city" @focus="errorFromFetch = false; errorFromCondition = false">
      <button class="search-weather__btn" @click="fetchWeather()">Get weather info</button>
      <p class="error-from-fetch" v-if="errorFromCondition">Write name of the city!</p>
      <p class="error-from-condition" v-if="errorFromFetch">Write correct name of the city or the city not found!</p>
    </div>
    <div class="episode-tab__characters episode-tab__child">
      <p class="episode-tab__characters__title">Characters:</p>
      <Characters
          @click.stop
          v-for="(characterName, index) of episode[1].characters"
          :characterName="characterName"
          :key="index"
      />
    </div>
    <DeathInfo
        v-if="$route.path === `/episode/${episode[1].episode_id}`"
        v-for="(death, index) of deaths"
        :key="index"
        :number="index + 1"
        :death="death[1]"
    />
  </div>
</template>

<script>
import DeathInfo from '@/components/seasonPage/episodes/DeathInfo'
import Characters from '@/components/seasonPage/episodes/characters/Characters'
import episodesTabs from "@/mixins/episodesTabs";
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [episodesTabs, animateItems],
  props: {
    episode: Object,
    index: Number
  },
  components: {
    Characters,
    DeathInfo
  },
  computed: {
    reverseAirDate: function () {
      return [this.episode[1].air_date.split('-')[2], this.episode[1].air_date.split('-')[0], this.episode[1].air_date.split('-')[1]].join('-')
    }
  },
  mounted() {
    this.setDeathsModel()
  }
}
</script>

<style lang="less" scoped>
.episode-tab.anim-active{
  transform: translate(0, 0) !important;
  opacity: 1 !important;
}
.episode-tab{
  transform: translate(0, 150px);
  opacity: 0;
  transition: all 0.5s ease 0s !important;

  &:hover{
    transform: scale(1.05) !important;
  }
}
</style>