<template>
  <div>
      <carousel-3d class="carousel">
          <slide v-for="(video, i) in videos" :index="i" :key="i">
            <template class="tmp" slot-scope="{index, isCurrent, leftIndex, rightIndex}">
               <img class="img" :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="video.poster">
            </template>
          </slide>
      </carousel-3d>
  </div>
</template>

<script>

import {Carousel3d, Slide} from 'vue-carousel-3d';
import axios from 'axios';


export default {
    components:{
        Carousel3d,
        Slide
    },
    mounted(){
        console.log('mounted')
        this.fetchVideos();
    },
    data(){
        return{
            videos:[]
        }
    },
    methods:{
        fetchVideos(){
            axios.get('http://hybridtv.ss7.tv/techtest/movies.json')
                .then(response => {
                    console.log(response.data.data);
                    this.videos = response.data.data
                })
        }
    }
}
</script>

<style scoped>

    .img{
        height: 600px !important
    }

</style>