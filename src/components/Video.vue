<template>

    <div class="container">
        <h2 class="title" >{{video[0].title}}</h2>
            <videoPlayer class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
            />

    </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
    props: ['vId'],
    name:'Video',
    components: {
        videoPlayer
    },
    data(){
        return {
            playerOptions:{
                sources:[{
                    src: ''
                }],
                poster: '',
                height: '600px',
                
            }
        }
    },
    computed:{
        video(){
            return this.$store.state.videos.filter(video => {
                return video.title === this.vId
            })
        }
    },
}
</script>
<style>
    .title{
        text-align: center;
        color: black
    }
    .video-player-box{
        margin: auto !important;
        padding-left:13% 
    }
</style>