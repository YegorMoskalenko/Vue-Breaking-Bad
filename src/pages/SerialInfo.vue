<template>
 <main class="main">
    <div class="serial-info">
      <div class="serial-info__left-side anim-items">
        <img :src="this.getSerialInfo.Poster" alt=""/>
      </div>
      <div class="serial-info__right-side anim-items">
        <ul class="serial-info__right-side__ul">
          <li class="serial-info__right-side__li" v-for="(oneSerialInfo, index) of this.getSerialInfo" :key="index">
            <div class="serial-info__all" v-if="typeof oneSerialInfo !== 'object'"><p class="serial-info__titles">{{index}}:</p><p class="serial-info__values">{{oneSerialInfo}}</p></div>
            <ul v-else>
              <li v-for="(oneInfoFromArr, oneIndex) of oneSerialInfo" :key="oneIndex">
                <div class="serial-info__all" v-if="typeof oneInfoFromArr !== 'object'"><p class="serial-info__titles">{{oneIndex}}:</p><p class="serial-info__values">{{oneInfoFromArr}}</p></div>
                <ul v-else>
                  <li v-for="(objVal, objIndex) of oneInfoFromArr" :key="objIndex"><div class="serial-info__all"><p class="serial-info__titles">{{objIndex}}:</p><p class="serial-info__values">{{objVal}}</p></div></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
 </main>
</template>

<script>
import {mapGetters} from "vuex";
import animateItems from "@/mixins/animations/animateItems";
export default {
  mixins: [animateItems],
  computed: {
    ...mapGetters('storeBreakingBad', ['getSerialInfo'])
  },
  mounted() {
    console.log(this.getSerialInfo)
  }
}
</script>

<style lang="less">
.serial-info{
  display: flex;
  justify-content: center;
  margin: 0 10%;

  .serial-info__left-side.anim-active{
    opacity: 1;
    transform: translate(0, 0);
  }
  .serial-info__left-side{
    opacity: 0;
    transform: translate(-150px, 0);
    transition: all 1.2s ease 0s;
  }

  .serial-info__right-side.anim-active{
    opacity: 1;
    transform: translate(0, 0);
  }
  .serial-info__right-side{
    margin-left: 15px;
    width: 60%;

    opacity: 0;
    transform: translate(150px, 0);
    transition: all 1.2s ease 0s;

    .serial-info__all{
      display: flex;

      .serial-info__titles{
        font-weight: 900;
      }
      .serial-info__values{
        margin-left: 10px;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
@media (max-width: 900px){
  .serial-info{
    flex-direction: column;

    .serial-info__left-side{
      display: flex;
      justify-content: center;
    }

    .serial-info__right-side{
      width: 100%;
      margin: 20px 0;
    }
  }
}
</style>