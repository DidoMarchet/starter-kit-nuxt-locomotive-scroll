export const state = () => ({
  scroll: {
    isScrolling: false,
    limit: 0,
    x: 0,
    y: 0
  }
})

export const mutations = {
  setScroll: (state, payload) => {
    state.scroll = Object.assign({}, state.scroll, payload)
  }
}
