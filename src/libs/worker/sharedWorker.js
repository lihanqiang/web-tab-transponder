/* eslint-disable no-undef */
const s = self
s.onmessage = (ev) => {
  s.postMessage('ok')
}
