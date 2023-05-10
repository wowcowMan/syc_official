import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
// import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import en from '@vee-validate/i18n/dist/locale/en.json'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

const app = createApp(App)

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ en }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.use(VueAxios, axios)
app.use(router)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', Loading)
app.mount('#app')
