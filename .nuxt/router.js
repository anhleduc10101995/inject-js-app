import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b2617cc0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _43cd9eaa = () => interopDefault(import('../pages/Jokes/index.vue' /* webpackChunkName: "pages/Jokes/index" */))
const _14fdb9cc = () => interopDefault(import('../pages/test.html.vue' /* webpackChunkName: "pages/test.html" */))
const _72f1c736 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _b2617cc0,
    name: "about"
  }, {
    path: "/Jokes",
    component: _43cd9eaa,
    name: "Jokes"
  }, {
    path: "/test.html",
    component: _14fdb9cc,
    name: "test.html"
  }, {
    path: "/",
    component: _72f1c736,
    name: "index"
  }, {
    path: "/*",
    component: _14fdb9cc,
    name: "data-region-industry"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
