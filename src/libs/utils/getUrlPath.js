/* eslint-disable no-undef */

// get page type
const getpagetype = () => {
  let pagetype = 'page'
  if (frames && parent && frames.length !== parent.frames.length) {
    pagetype = 'iframe'
  }
  return pagetype
}

export default () => {
  if (location) {
    const { href, pathname, hostname, port, protocol, hash, search } = location
    return { href, pathname, hostname, port, protocol, hash, search, pagetype: getpagetype() }
  } else {
    return {}
  }
}
