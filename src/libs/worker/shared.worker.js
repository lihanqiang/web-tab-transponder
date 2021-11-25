const list = []
const listId = []
// eslint-disable-next-line no-undef
onconnect = function (e) {
  const port = e.ports[0]
  port.addEventListener('message', function (e) {
    if (e.data.id) {
      const index = listId.indexOf(e.data.id)
      if (index === -1) {
        list.push(port)
        listId.push(e.data.id)
      } else {
        // 关闭上个链接
        list[index].close()
        list[index] = port
      }
    } else {
      send(e.data[0], e.data[1])
    }
  })
  port.start()
}

const send = function (id, data) {
  const index = listId.indexOf(id)
  if (index !== -1) {
    list[index].postMessage([id, data])
  }
}
