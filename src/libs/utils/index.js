/* eslint-disable no-undef */
export const setLocal = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

export const parse = (dataStr) => {
  return JSON.parse(dataStr)
}
