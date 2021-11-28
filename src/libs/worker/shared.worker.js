/* eslint-disable no-undef */
const portLists = []
const idLists = []

// send message
const sendMsg = (id, data) => {
  portLists.forEach(port => {
    port.postMessage([id, data])
  })
}

onconnect = function (e) {
  const [port] = e.ports
  port.addEventListener('message', (e) => {
    if (e.data.id) {
      const index = idLists.indexOf(e.data.id)
      // add port list
      if (index < 0) {
        portLists.push(port)
        idLists.push(e.data.id)
      } else {
        // close prev connect
        portLists[index].close()
        portLists[index] = port
      }
    } else {
      sendMsg(e.data[0], e.data[1])
    }
  })
  port.start()
}
