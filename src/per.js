import router from './router'
router.beforeEach((to, from, next) => {
    // console.log(to, from, next)
    if (!localStorage.getItem('token')) {
        if (to.path === '/release') {
            next('/login')
        } else {
            next()
        }
    }else {
        next()
    }
})
