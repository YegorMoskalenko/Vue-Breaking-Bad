<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from '@/components/UI/header/Header'
import '@/assets/styles/main.less'
export default {
  components: {
    Header
  }
}
</script>
