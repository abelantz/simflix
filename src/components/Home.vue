<template>
  <div class="container">
      <carousel-3d class="carousel" style="height: 600px">
          <slide v-for="(video, i) in videos" :index="i" :key="i" class="slide">
            <template slot-scope="{index, isCurrent, leftIndex, rightIndex}">
                <router-link :to="'/video/' + video.title"> 
                    <img class="img" :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 1), onRight: (rightIndex >= 1) }" :src="video.poster">
                </router-link>
            </template>
          </slide>
      </carousel-3d>
  </div>
</template>

<script>

import {Carousel3d, Slide} from 'vue-carousel-3d';
import axios from 'axios';


export default {
    name: 'home',

    mounted(){
        console.log('mounted home')
        this.fetchVideos();
    },
    components:{
        Carousel3d,
        Slide
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

    .slide {
        height: 540px !important; 
        border: 0;
        -webkit-box-shadow: 0px 15px 30px 2px rgba(107, 107, 107, 0.5);
        -moz-box-shadow: 0px 15px 30px 2px rgba(107, 107, 107, 0.5);
        box-shadow: 0px 15px 30px 2px rgba(107, 107, 107, 0.5);
    }

</style>