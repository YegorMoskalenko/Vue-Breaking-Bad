<template>
  <div class="character" v-if="this.getCharacters[characterStrName]">
    <div class="character__title anim-items">
      <p>{{characterStrName}}</p>
    </div>
    <div class="character__info anim-items">
      <div class="add-to-favor">
        <button class="add-to-favor__btn" @click="this.addCharacterToFavorites(characterStrName)" v-if="!this.getFavoritesCharacters.includes(characterStrName)">Add to favorites</button>
        <div class="remove-from-favor__div" v-else>
          <p class="remove-from-favor__text">Already in favorites</p>
          <button class="remove-from-favor__btn" @click="this.removeCharacterFromFavorites(this.getFavoritesCharacters.indexOf(characterStrName))">Remove from favorites</button>
        </div>
      </div>
      <p class="character__info__status">
        Status: {{this.getCharacters[characterStrName].status}}
      </p>
      <p class="character__info__birthday">
        Birthday: {{this.getCharacters[characterStrName].birthday}}
      </p>
      <div class="character__info__content character__info__quotes">
        <p class="character__info__content__title">Quotes:</p>
        <ul class="quotes" v-if="this.getCharacters[characterStrName].quotes">
          <li class="quote" v-for="(quote, index) of this.getCharacters[characterStrName].quotes" :key="index">{{index + 1}}. {{quote.quote}}</li>
        </ul>
        <p class="quotes" v-else>None quotes</p>
      </div>
      <div class="character__info__content character__info__deaths">
        <div class="season-number">
          <p class="season-number__title character__info__content__title">Season:</p>
          <p class="season-number__num" v-if="this.getDeaths[characterStrName]">{{this.getDeaths[characterStrName].season}}</p>
          <p class="season-number__num" v-else>None info</p>
        </div>
        <div class="responsible">
          <p class="responsible__title character__info__content__title">Responsible in his/her death:</p>
          <p class="responsible__info" v-if="this.getDeaths[characterStrName]">{{this.getDeaths[characterStrName].responsible}}</p>
          <p class="responsible__info" v-else>None</p>
        </div>
        <div class="character-is-responsible">
          <p class="character-is-responsible__title character__info__content__title">The character is responsible in deaths:</p>
          <ul class="character-is-responsible__info" v-if="responsibleNew.length > 0">
            <li class="character-is-responsible__info__li" v-for="responsibleStr of responsibleNew" :key="responsibleStr">{{responsibleStr}}</li>
          </ul>
          <p class="character-is-responsible__info" v-else>None</p>
        </div>
        <div class="character-in-episodes">
          <p class="character-in-episodes__title character__info__content__title">Episodes with {{characterStrName}}:</p>
          <ul class="episodes__titles">
            <li class="episodes__title" v-for="episodeTitle of characterInEpisodes" :key="episodeTitle">"{{episodeTitle}}"</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="not-info-about-character" v-else>None info about character</div>
</template>

<script>
import {mapGetters} from "vuex";
import addAndRemoveCharacter from "@/mixins/addAndRemoveCharacter";
export default {
  mixins: [addAndRemoveCharacter],
  data(){
    return {
      characterInEpisodes: [],
      responsibleNew: []
    }
  },
  props: {
    characterStrName: String
  },
  computed: {
    ...mapGetters('storeBreakingBad', ['getDeaths', 'getEpisodes', 'getCharacters', 'getFavoritesCharacters'])
  },
  methods: {
    setCharacterInEpisodesModel: function () {
      this.getEpisodes.forEach(episode =>
          episode.characters.filter(character => character === this.characterStrName ? this.characterInEpisodes.push(episode.title) : false)
      )
    },
    setResponsibleNewModel: function () {
      Object.entries(this.getDeaths).filter(death =>
          death[1].responsible.includes(this.characterStrName) ? this.responsibleNew.push(death[1].responsible) : false
      )
      return this.responsibleNew = [...new Set(this.responsibleNew)]
    }
  },
  mounted() {
    this.setCharacterInEpisodesModel()
    this.setResponsibleNewModel()
  }
}
</script>