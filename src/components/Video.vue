<template>

    <div class="container">
        <h2 class="title" >{{video[0].title}}</h2>
            <div class="player">
                <vue-core-video-player controls :src="video[0].video" ></vue-core-video-player>
            </div>
        <div class="controls">
            <button v-show="paused" @click="play" >&#9654;</button>
            <button v-show="playing" @click="pause">&#9208;</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['vId'],
    name:'Video',
    data(){
        return {
            videoElement: null,
            paused: null
        }
    },
    computed:{
        video(){
            return this.$store.state.videos.filter(video => {
                return video.title === this.vId
            })
        },
    },
}
</script>
<style>
    .player{
        width: 900px;
        margin: auto;
        justify-content: center
        
    }
    .title{
        text-align: center;
        color: black
    }
    .video-player-box{
        margin: auto !important;
        padding-left:13% 
    }
</style>