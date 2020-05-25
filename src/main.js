// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Feature from '~/components/Feature.vue'
import BlogArticle from '~/components/BlogArticle.vue'
import ArticleOverview from '~/components/ArticleOverview.vue'
import CallToAction from '~/components/CallToAction.vue'
import Grid from '~/components/Grid.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // register components
  Vue.component('Page', Page)
  Vue.component('Teaser', Teaser)
  Vue.component('Feature', Feature)
  Vue.component('BlogArticle', BlogArticle)
  Vue.component('article_overview', ArticleOverview)
  Vue.component('call_to_action', CallToAction)
  Vue.component('Grid', Grid)
}
