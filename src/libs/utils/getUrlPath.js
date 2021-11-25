/* eslint-disable no-undef */
export default () => {
  if (location) {
    const { href, pathname } = location
    return { href, pathname }
  } else {
    return {}
  }
}
