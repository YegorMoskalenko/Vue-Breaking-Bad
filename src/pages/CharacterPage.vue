<template>
  <main class="main">
    <Character
      :characterStrName="$route.params.characterName.replaceAll('-', ' ')"
    />
  </main>
</template>

<script>
import '@/components/characterPage/styles/character.less'
import Character from "@/components/characterPage/Character";
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [animateItems],
  components: {
    Character
  }
}
</script>