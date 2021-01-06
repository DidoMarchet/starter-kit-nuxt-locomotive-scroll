<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true,
        direction: 'vertical'
      },
      tablet: {
        smooth: true,
        direction: 'vertical'
      }
    }"
  >
    <div class="example vertical">
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-square" data-scroll data-scroll-speed="-0.5" />
          <div class="example-small-square" data-scroll data-scroll-speed="2.5" />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-small-square" data-scroll data-scroll-speed="2.5" />
          <div class="example-big-square" data-scroll data-scroll-speed="-0.5" />
        </div>
      </div>

      <div class="example-section" data-scroll-section>
        <Test />
      </div>

      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-square" data-scroll data-scroll-speed="-0.5" />
          <div class="example-small-square" data-scroll data-scroll-speed="2.5" />
        </div>
      </div>

      <nuxt />
    </div>
  </LocomotiveScroll>
</template>

<script>
import { gsap } from 'gsap'

export default {
  components: {
    Test: () => import(/* webpackPrefetch: true */ '@/components/Test.vue')
  },
  mounted () {
    const locomotive = this.$refs.scroller.locomotive
    locomotive.on('call', (value, way, obj) => {
      switch (value) {
        case 'titleStagger': {
          console.log(obj.el.firstChild) // Exist
          const child = obj.el.firstChild
          gsap.to(child, {
            duration: 2.5,
            ease: 'expo.out',
            opacity: 0.25
          })
          break
        }

        default:
          break
      }
    })
  }
}
</script>

<style lang="scss">
  @import './pages/demo.scss';
</style>
