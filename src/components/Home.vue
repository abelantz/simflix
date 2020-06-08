<template>
  <div >
      <carousel-3d class="carousel" style="height: 600px">
          <slide v-for="(video, i) in videos" :index="i" :key="i" class="slide">
            <template slot-scope="{index, isCurrent, leftIndex, rightIndex}">
                <router-link :to="'/video/' + video.title"> 
                    <img class="img" :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="video.poster">
                </router-link>
            </template>
          </slide>
      </carousel-3d>
  </div>
</template>

<script>

import {Carousel3d, Slide} from 'vue-carousel-3d';


export default {
    name: 'home',
    components:{
        Carousel3d,
        Slide
    },
    computed: {
        videos(){
            return this.$store.state.videos;
        }
    }
}
</script>

<style scoped>
    .slide {
        height: 540px !important; 
        border: 0;
        -webkit-box-shadow: 0px 15px 30px 2px rgba(107, 107, 107, 0.5);
        -moz-box-shadow: 0px 15px 30px 2px rgba(107, 107, 107, 0.5);
        box-shadow: 0px 15px 30px 2px rgba(107, 107, 107, 0.5);
    }

</style>