import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main.vue'
// import Content from '@/components/Content.vue'
import Log from '@/pages/Log.vue'
import Picture from '@/pages/Picture.vue'
import Experience from '@/pages/Experience.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: 'main'
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            children:[
                {
                    path:'log',
                    name:'log',
                    component: Log,
                },
                {
                    path:'picture',
                    name:'picture',
                    component: Picture,
                },
                {
                    path:'experience',
                    name:'experience',
                    component: Experience,
                }
            ]
        }
    ]
})

export default router