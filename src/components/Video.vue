<template>
    <div>
        <div v-for="video in videoId" :key="video.poster">
            {{video.video}}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data(){
        return{
            videos:[]
        }
    },
    mounted(){
        this.videoId();
    },
    methods: {
       fetchVideo(){
            axios.get('http://hybridtv.ss7.tv/techtest/movies.json')
                .then(response => {
                    console.log(response.data.data);
                    this.videos = response.data.data
                })
        },
        videoId() {
            return this.videos.find((video => {
                return video.poster === this.id;
            }))
        }
    }
}
</script>

<style>

</style>