<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'horizontal',
      smartphone: {
        smooth: true,
        direction: 'horizontal'
      },
      tablet: {
        smooth: true,
        direction: 'horizontal'
      }
    }"
  >
    <div class="example horizontal">
      <header data-scroll-section>
        <h1>Horizontal<br> Scroll</h1>
      </header>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-square" data-scroll data-scroll-speed="-0.5" />
          <div class="example-small-square" data-scroll data-scroll-speed="2" />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-square" data-scroll data-scroll-speed="-0.5" />
          <div class="example-small-square" data-scroll data-scroll-speed="2" />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-square" data-scroll data-scroll-speed="-0.5" />
          <div class="example-small-square" data-scroll data-scroll-speed="2" />
        </div>
      </div>
      <footer data-scroll-section>
        <nuxt-link to="/scroll-trigger/">
          Go to Gsap Scroll Trigger
        </nuxt-link>
      </footer>
    </div>
  </LocomotiveScroll>
</template>

<script>
export default {
  mounted () {}
}
</script>

<style lang="scss">
  @import './demo.scss';
</style>
