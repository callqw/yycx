export default function ({ store, route }, next) {

  const isSide = ['index','wordpress']
  const isAsidePage = isSide.includes(route.name)
  next()
  // if (isAsidePage) {
  //   store.commit('SET_ERROR_PAGE', false)
  //   next()
  // }else {
  //   store.commit('SET_ERROR_PAGE', true)
  //   next()
  // }
}
