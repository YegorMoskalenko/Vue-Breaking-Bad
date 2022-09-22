<template>
  <main class="main">
    <div class="search-episodes anim-items">
      <input v-model="searchEpisodeValue" class="search-episodes__input" type="text" placeholder="Search episode..."/>
    </div>
    <SearchedEpisodesTabs
        v-if="searchEpisodeValue.length > 0"
        :searchEpisodeValue="searchEpisodeValue"
    />
    <SeasonsTabs />
  </main>
</template>

<script>
import SeasonsTabs from '@/components/mainPage/seasons/SeasonsTabs'
import '@/components/mainPage/seasons/styles/seasons.less'
import SearchedEpisodesTabs from "@/components/mainPage/searchedEpisodesTabs/SearchedEpisodesTabs";
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [animateItems],
  data(){
    return {
      searchEpisodeValue: ''
    }
  },
  components: {
    SearchedEpisodesTabs,
    SeasonsTabs
  }
}
</script>

<style lang="less">
.search-episodes.anim-active{
  opacity: 1;
  transform: translate(0, 0);
}
.search-episodes{
  display: flex;
  justify-content: center;

  opacity: 0;
  transform: translate(450px, 0);
  transition: all 1.2s ease 0s;

  .search-episodes__input{
    border: 2px solid #006f46;
    border-radius: 10px;
    padding: 10px 15px;
    margin-bottom: 25px;
    width: 500px;
  }
}
</style>