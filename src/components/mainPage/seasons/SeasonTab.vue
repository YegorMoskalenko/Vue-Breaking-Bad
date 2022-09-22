<template>
  <div class="seasons__season" @click="$router.push(`/season/${seasonNum}`)">
    <div class="seasons__season__content">
      <p class="seasons__season__content__title">Season {{seasonNum}}</p>
      <p class="seasons__season__content__text">Go to info</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seasonNum: Number
  }
}
</script>