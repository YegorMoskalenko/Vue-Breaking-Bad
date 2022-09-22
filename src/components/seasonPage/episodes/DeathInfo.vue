<template>
  <div class="episode-tab__deaths episode-tab__child">
    <p class="numerable">{{number}}.</p>
    <div class="episode-tab__child__texts">
      <p class="episode-tab__child__texts__title">Death:</p>
      <p class="episode-tab__child__texts__text">{{death.death}}</p>
    </div>
    <div class="episode-tab__child__texts">
      <p class="episode-tab__child__texts__title">Cause:</p>
      <p class="episode-tab__child__texts__text">{{death.cause}}</p>
    </div>
    <div class="episode-tab__child__texts">
      <p class="episode-tab__child__texts__title">Responsible:</p>
      <p class="episode-tab__child__texts__text">{{death.responsible}}</p>
    </div>
    <div class="episode-tab__child__texts">
      <p class="episode-tab__child__texts__title">Last words:</p>
      <p class="episode-tab__child__texts__text">{{death.last_words}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    death: Object,
    number: Number
  }
}
</script>