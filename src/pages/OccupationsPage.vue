<template>
  <main class="main">
    <Occupations />
  </main>
</template>

<script>
import '@/components/occupationsPage/styles/occupations.less'
import Occupations from '@/components/occupationsPage/Occupations'
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [animateItems],
  components: {
    Occupations
  }
}
</script>