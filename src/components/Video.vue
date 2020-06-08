<template>
    <div class="container">
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
                    src: this.video.video
                }],
                poster: this.video.poster,
                width: '1600px',
                margin: '40px'
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
    .container{
        width: 100%;
        height: 100vh;
    }
</style>