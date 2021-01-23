<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      direction: 'vertical',
      smartphone: {
        direction: 'vertical'
      },
      tablet: {
        direction: 'vertical'
      }
    }"
  >
    <div class="example vertical">
      <header data-scroll-section>
        <h1>Gsap Scroll Trigger</h1>
      </header>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-square" />
          <div class="example-small-square" data-scroll-trigger />
        </div>
      </div>
      <BoxComponent />
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-square" />
          <div class="example-small-square" data-scroll-trigger />
        </div>
      </div>
      <footer data-scroll-section>
        <nuxt-link to="/image-loads">
          Go to Image Loads
        </nuxt-link>
      </footer>
    </div>
  </LocomotiveScroll>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    BoxComponent: () => import(/* webpackPrefetch: true */ '@/components/box-component.vue')
  },
  mounted () {
    this.initScrolltrigger()

    const elements = document.querySelectorAll('[data-scroll-trigger]')
    elements.forEach(element => this.elementAnimation(element))
  },
  methods: {
    initScrolltrigger () {
      const locomotive = this.$refs.scroller.locomotive
      locomotive.on('scroll', ScrollTrigger.update)
      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop (value) {
          return arguments.length ? locomotive.scrollTo(value, 0, 0) : locomotive.scroll.instance.scroll.y
        },
        getBoundingClientRect () {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        }
      })
    },
    elementAnimation (element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: 'top bottom',
          end: 'bottom center'
        },
        scaleY: 0,
        ease: 'none'
      })
    }
  }
}
</script>

<style lang="scss">
  @import './demo.scss';
</style>
