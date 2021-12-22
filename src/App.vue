<template>
  <div id="app">
    <div class="swiper-container filmswiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: #fff;">
          <div ref="mapRef" class="map" />
        </div>
        <div class="swiper-slide" style="background: green;">
          <div class="paras">
            <!-- <p class="f-animLineUp">测试文字</p> -->
            <p class="f-animLineUp" style="transition-delay: 0.2s;">测试文字</p>
            <p class="f-animLineUp" style="transition-delay: 0.3s;">测试文字</p>
            <p class="f-animLineUp" style="transition-delay: 0.4s;">测试文字</p>
            <p class="f-animLineUp" style="transition-delay: 0.5s;">测试文字</p>
          </div>
        </div>
        <div class="swiper-slide" style="background: blue;">Slide 3</div>
        <div class="swiper-slide" style="background: black;">Slide 4</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// import 'swiper/swiper-bundle.min.css'
import china from '@/assets/china.json'
import 'swiper/swiper.min.css'
export default {
  name: 'App',
  data() {
    return {
      mapChart: null
    }
  },
  mounted() {
    this.renderMap()
    const viewSpecial = document.querySelector('.paras')
    new Swiper('.filmswiper', {
      direction: 'vertical',
      centeredSlides: true,
      on: {
        slideChangeTransitionEnd: (d) => {
          if (d.activeIndex === 1) {
            viewSpecial.classList.add('z-enter')
          } else if (d.activeIndex === 0) {
            viewSpecial.classList.remove('z-enter')
            this.renderMap()
          } else {
            viewSpecial.classList.remove('z-enter')
          }
        }
      }
    })
  },
  methods: {
    renderMap() {
      if (this.mapChart) this.mapChart.dispose()
      this.$echarts.registerMap('china', china, {})
      this.mapChart = this.$echarts.init(this.$refs.mapRef)
      var mapName = 'china'
      const data = []
      this.$echarts.getMap(mapName).geoJson.features
      const option = {
        geo: {
          map: mapName,
          top: '11%',
          // left: '10%',
          // label: {
          //     show: true,
          //     fontSize: '10',
          //     color: 'rgba(0,0,0,0.7)'
          // },
          itemStyle: {
            shadowColor: 'rgba(0,54,255, 1)',
            shadowBlur: 100
          }
          // regions: [
          //   {
          //     name: '南海诸岛',
          //     value: 0
          //   }
          // ]
        },
        series: [
          {
            type: 'map',
            map: mapName,
            top: '11%',
            itemStyle: {
              normal: {
                // areaColor: '#006fff',
                borderColor: '#0145a4',
                borderWidth: 1
              },
              emphasis: {
                areaColor: '#fff'
              }
            }
          },
          // {
          //   name: '散点',
          //   type: 'scatter',
          //   coordinateSystem: 'geo',
          //   data: data,
          //   symbolSize: function(val) {
          //     return val[2] * 10
          //   },
          //   label: {
          //     formatter: '{b}',
          //     position: 'right',
          //     show: true
          //   },
          //   itemStyle: {
          //     color: '#05C3F9'
          //   }
          // },
          {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', // 气泡
            symbolSize: 65,
            label: {
              show: true,
              formatter: function(params) {
                return params.value[2]
              }
            },
            itemStyle: {
              color: '#F62157' // 标志颜色
            },
            zlevel: 1,
            data: data
          }
          // {
          //   name: 'Top 1',
          //   type: 'effectScatter',
          //   effectType: 'ripple',
          //   coordinateSystem: 'geo',
          //   data: data.slice(0, 1),
          //   symbolSize: function(val) {
          //     return val[2] * 10
          //   },
          //   showEffectOn: 'render',
          //   rippleEffect: {
          //     brushType: 'stroke'
          //   },
          //   emphasis: {
          //     scale: true
          //   },
          //   label: {
          //     formatter: '{b}',
          //     position: 'right',
          //     show: true
          //   },
          //   itemStyle: {
          //     color: 'yellow',
          //     shadowBlur: 10,
          //     shadowColor: 'yellow'
          //   },
          //   zlevel: 2
          // }
        ]
      }
      this.mapChart.setOption(option)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
}
p {
  margin: 0;
  font-size: 24px;
  padding-top: 50px;
  padding-left: 30px;
}

.swiper-wrapper {
  height: 100vh !important;
}
.swiper-slide {
  height: 100vh !important;
}
.z-enter .f-animLineUp {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1.2s, transform 1s;
}
.f-animLineUp {
  opacity: 0;
  transform: translateY(6px);
}
.map {
  height: 200px;
}
</style>
