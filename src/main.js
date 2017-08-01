window.REM_UNIT = 75 // NEED CONFIG IN EACH PROJECT
window.CDN_URL = require('../images/cdnurl.json')

import Vue from 'vue'
import App from './main.vue'
import router from './router'

let app = new Vue(Vue.util.extend({ el: '#app', router }, App))
