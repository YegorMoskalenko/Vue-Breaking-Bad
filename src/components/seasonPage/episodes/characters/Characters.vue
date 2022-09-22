<template>
  <p class="episode-tab__characters__text episode-tab__child__p" @click="pushingToCharacterPage()">{{characterName}}</p>
</template>

<script>
export default {
  data(){
    return {
      characterNameInUrl: null
    }
  },
  props: {
    characterName: String
  },
  methods: {
    pushingToCharacterPage: function () {
      this.characterNameInUrl = this.characterName.replaceAll(' ', '-')

      return this.$router.push(`/character/${this.characterNameInUrl}`)
    }
  }
}
</script>