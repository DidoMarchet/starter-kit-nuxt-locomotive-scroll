# How to Locomotive Scroll and Nuxt

:heart:  Every one loves smooth scrolling!

:zzz:  But sometimes working with Javascript frameworks and DOM can be boring and love fades away.

:package:  With this simple starter kit you can have fun with [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) and [Nuxt](https://github.com/nuxt/nuxt.js) without giving it a second though. 


### Table of content:
- [Plugin](#plugin)
- [Component](#component)
  - [Markup](#markup)
  - [Directive](#directive)
- [Implementation](#implementation)
- [Gotchas](#gotchas)
- [Examples](#examples)

You can try this starter kit by cloning this repo and running:

``` bash
# install dependencies
$ npm install

# run dev enviroment
$ npm run dev

# generate static project
$ npm run generate
```

# Plugin
First of all we setup the plugin enabling Locomotive Scroll instance works globally both in our component and for your own purposes.

In [`/LocomotiveScroll/plugin/index.js`](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/LocomotiveScroll/plugin/index.js) we create the plugin:
```{js filename="ch1/test_one.py"}
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const install = (Vue) => {
  Vue.prototype.LocomotiveScroll = LocomotiveScroll
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
```
After the setup,  it will be used in [`/plugins/client.js`](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/plugins/client.js).

`/plugins/client.js` works with `mode: 'client'` in the Nuxt [plugins configuration](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/configuration/plugins/index.js) .

# Component
This component is an useful wrap for our Locomotive Scroll implementation.

Below are the main steps of the implementation.

Complete code can be found here [`/LocomotiveScroll/component/index.js`](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/LocomotiveScroll/component/index.vue).

### Markup
``` html
<div
  v-locomotive="{ options }}"
  class="js-locomotive"
>
  <slot />
</div>
```
The `v-locomotive` directive gets access to low-level DOM.

It takes one argument `options`.

`options` is a computed obtained merging the `defaultOption` data property with the `gettedOptions` prop.

`defaultOption` and `gettedOptions`contain the Locomotive Scroll [instance options](https://github.com/locomotivemtl/locomotive-scroll#instance-options).
```js
computed: {
  options () {
    // this.defaultOptions = { smooth: true }
    // this.gettedOptions = { offset: ['30%',0], direction: 'horizontal' }
    return { ...this.defaultOptions, ...this.gettedOptions }
  }
}
```

Through the `slot` element we're able to pass content to the component from each page.

### Directive

```js
directives: {
  locomotive: {
    inserted (el, binding, vnode) {
      vnode.context.locomotive = new vnode.context.LocomotiveScroll({ el, ...binding.value.options })
      vnode.context.locomotive.on('scroll', (e) => {
        vnode.context.onScroll(e)
        vnode.context.$emit('scroll')
      })
      vnode.context.$emit('init')
    },
    unbind (el, binding, vnode) {
      vnode.context.locomotive.destroy()
      vnode.context.locomotive = undefined
    }
  }
}
```
In the `inserted` hook we create the new instance of Locomotive Scroll from the [plugin](#plugin) previously created and we assign it to `locomotive` data property.
The `inserted` hook guarantees the parent presence.

Once initialized we listen to scroll event.

Each time scroll event is fired we call `onScroll` method.

`onScroll` takes as parameter the scroll instance and uses this data to fill the store ([`/store/app.js`](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/store/app.js)) making the state of the scroll accessible and usable in all our application.

```js
methods: {
  onScroll (e) {
    if (typeof this.$store._mutations['app/setScroll'] !== 'undefined') {
      this.$store.commit('app/setScroll', {
        isScrolling: this.locomotive.scroll.isScrolling,
        limit: { ...e.limit },
        ...e.scroll // x, y
      })
    }
  }
}
```

# Implementation
Before using our component in the page we declare it globally in [`/plugins/global.js`](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/plugins/client.js). 
`/plugins/global.js` is called in the Nuxt [plugins configuration](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/configuration/plugins/index.js).

Once the plugin is global we can use it in our page or components in this way ([`/pages/index.vue`](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/pages/index.vue)):

```html
<template>
  <LocomotiveScroll 
    ref="scroller" 
    :getted-options="{
      offset: ['30%',0],
      direction: 'horizontal'
      // Other options
    }">
  
    <!-- My Content:
    Html elements, Components...
    -->
    
  </LocomotiveScroll>
</template>
```
You can access to locomotive scroll instance using `this.$refs.scroller.locomotive`.

# Gotchas
Reactive elements alter the state of the application and DOM's elements could change.

This changes can take place in nested components and updating Locomotive Scroll could be complex.

We can use the [`$nuxt`](https://nuxtjs.org/docs/2.x/internals-glossary/$nuxt) helper and emit a global event 
```js
this.$nuxt.$emit('update-locomotive')
``` 
and listen it in the `mounted` hook in [`/LocomotiveScroll/component/index.vue`](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/LocomotiveScroll/component/index.vue) component:

``` js
mounted () {
  this.$nuxt.$on('update-locomotive', () => {
    this?.locomotive?.update() // ?. is the Optional Chaining operator (https://www.joshwcomeau.com/operator-lookup?match=optional-chaining)
  })
}
```

# Examples
### Basic Scroll
[https://starter-kit-nuxt-locomotive-scroll.netlify.app/](https://starter-kit-nuxt-locomotive-scroll.netlify.app/)
### Horizontal Scroll
[https://starter-kit-nuxt-locomotive-scroll.netlify.app/horizontal-scroll/](https://starter-kit-nuxt-locomotive-scroll.netlify.app/horizontal-scroll/)
### Gsap Scroll Trigger
[https://starter-kit-nuxt-locomotive-scroll.netlify.app/scroll-trigger/](https://starter-kit-nuxt-locomotive-scroll.netlify.app/scroll-trigger/)

### Image Loads
[https://starter-kit-nuxt-locomotive-scroll.netlify.app/image-loads/](https://starter-kit-nuxt-locomotive-scroll.netlify.app/image-loads/)

### On Call Function
[https://starter-kit-nuxt-locomotive-scroll.netlify.app/on-call/](https://starter-kit-nuxt-locomotive-scroll.netlify.app/on-call/)