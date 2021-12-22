import Vue from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'

Vue.config.productionTip = false

const hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')
require('viewport-units-buggyfill').init({
  hacks: hacks
})

import * as echarts from 'echarts/core'
import {
  ScatterChart,
  EffectScatterChart,
  MapChart
} from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  GeoComponent,
  LegendComponent,
  GraphicComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  EffectScatterChart,
  ScatterChart,
  MapChart,
  GeoComponent,
  LegendComponent,
  CanvasRenderer,
  GraphicComponent
])

Vue.prototype.$echarts = echarts

new Vue({
  render: (h) => h(App)
}).$mount('#app')
