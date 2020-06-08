<template>

    <div class="container">
        <h2 class="title" >{{video[0].title}}</h2>
            <div class="player">
                <vue-core-video-player id="videoElement" @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused" controls :src="video[0].video" > </vue-core-video-player>
                <div class="controls">
                    <button class="playbtn" v-show="paused" @click="play" >  PLAY </button>
                    <button class="pausebtn" v-show="playing" @click="pause">PAUSE</button>
                </div>
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
    methods: {
    updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    play() {
      this.videoElement.play();
    },
    pause() {
      this.videoElement.pause();
    }
  },
    computed:{
        video(){
            return this.$store.state.videos.filter(video => {
                return video.title === this.vId
            })
        },
        playing() { return !this.paused; }
    },
}
</script>
<style>
    .playbtn{
        background: url(http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png);
        width:50px;
        height: 50px;
    }
    .pausebtn{
        background: url(http://hybridtv.ss7.tv/techtest/assets/icons/btn-pause.png);
        width:50px;
        height: 50px;
    }
    .controls{
        text-align: center;
        padding: 10px
    }
    
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