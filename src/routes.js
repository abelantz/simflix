import Home from './components/Home.vue';
import Video from './components/Video.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/video/:id',
        name: 'video',
        component: Video,
        props: true
    }
]

export default routes