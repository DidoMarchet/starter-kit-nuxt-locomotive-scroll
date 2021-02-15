<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      tablet: {
        smooth: true,
        direction: 'vertical',
      },
    }"
  >
    <div class="example vertical">
      <header data-scroll-section>
        <h1>
          Image<br />
          Loads
        </h1>
        <p>(Images are loaded after 2.5s and the scroll refreshed)</p>
      </header>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-image" data-scroll data-scroll-speed="-0.5">
            <img
              data-src="https://via.placeholder.com/1000x1000"
              alt="No width hegiht image"
            />
          </div>
          <div
            class="example-small-square"
            data-scroll
            data-scroll-speed="2.5"
          />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div
            class="example-small-square"
            data-scroll
            data-scroll-speed="2.5"
          />
          <div class="example-big-image" data-scroll data-scroll-speed="-0.5">
            <img
              data-src="https://via.placeholder.com/1000x1000"
              alt="No width hegiht image"
            />
          </div>
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-image" data-scroll data-scroll-speed="-0.5">
            <img
              data-src="https://via.placeholder.com/1000x1000"
              alt="No width hegiht image"
            />
          </div>
          <div
            class="example-small-square"
            data-scroll
            data-scroll-speed="2.5"
          />
        </div>
      </div>
      <footer data-scroll-section>
        <nuxt-link to="/on-call/"> Go to On Call Function </nuxt-link>
      </footer>
    </div>
  </LocomotiveScroll>
</template>

<script>
export default {
  mounted() {
    const images = document.querySelectorAll('img')
    setTimeout(() => {
      images.forEach((image) => {
        image.onload = () => {
          this.$nuxt.$emit('update-locomotive')
        }
        image.src = image.dataset.src
      })
    }, 2500)
  },
}
</script>

<style lang="scss">
@import './demo.scss';
</style>
