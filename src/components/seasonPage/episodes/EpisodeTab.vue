<template>
  <div class="episode-tab anim-items" @click="$route.path === `/season/${seasonNumUrlParam}` ? $router.push(`/episode/${episode.episode_id}`) : false">
    <div class="episodes-tab__title episode-tab__child">
      <p class="episodes-tab__title__text episode-tab__child__p">{{episode.title}}</p>
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
      <p class="error-from-condition" v-if="errorFromCondition">Write name of the city!</p>
      <p class="error-from-fetch" v-if="errorFromFetch">Write correct name of the city or the city not found!</p>
    </div>
    <div class="episode-tab__characters episode-tab__child">
      <p class="episode-tab__characters__title">Characters:</p>
      <Characters
          v-for="(characterName, index) of episode.characters"
          :characterName="characterName"
          :key="index"
      />
    </div>
    <DeathInfo
        v-if="$route.path === `/episode/${episode.episode_id}`"
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
export default {
  mixins: [episodesTabs],
  components: {
    Characters,
    DeathInfo
  },
  props: {
    episode: Object,
    seasonNumUrlParam: Number
  },
  computed: {
    reverseAirDate: function () {
      return [this.episode.air_date.split('-')[2], this.episode.air_date.split('-')[0], this.episode.air_date.split('-')[1]].join('-')
    }
  },
  mounted() {
    this.setDeathsModel()
  }
}
</script>

<style lang="less">
.episode-tab{
  &:hover{
    .search-weather{
      .search-weather__btn{
        background: #ffffff;
      }
    }
    .weather-info{
      color: #000000;
    }
  }

  .weather-info{
    display: flex;
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    transition: all 0.6s ease 0s;

    .weather-info__description{
      margin-left: 10px;
    }
  }

  .search-weather{
    display: flex;
    flex-direction: column;

    .error-from-fetch{
      color: red;
      font-size: 14px;
      font-weight: 700;
    }
    .error-from-condition{
      color: red;
      font-size: 14px;
      font-weight: 700;
    }

    .search-weather__input{
      border: 2px solid #006f46;
      border-radius: 10px;
      padding: 5px;
    }

    .search-weather__btn{
      margin-top: 10px;
      width: 175px;
      text-transform: uppercase;
      border: 2px solid #006f46;
      border-radius: 7px;
      padding: 3px;
      font-size: 16px;
      font-weight: 600;
      color: #006f46;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.7);
      transition: all 0.3s ease 0s;

      &:hover{
        transform: scale(1.02);
        box-shadow: 0 0 5px green;
      }
    }
  }
}
@media (min-width: 600px) {
  .episode-tab{
    .weather-info{
      font-size: 16px;
      font-weight: 300;
    }
  }
}
</style>