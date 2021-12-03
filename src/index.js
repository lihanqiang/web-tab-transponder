/* eslint-disable no-undef */
// import WorkerTransponder from './libs/worker'
import StorageTransponder from './libs/localStorage'

const Transponder = () => {
  let Transponder
  if (typeof localStorage === 'object') {
    Transponder = StorageTransponder
  }
  // else if (typeof SharedWorker === 'function') {
  //   // worker has some problem in SPA TODO
  //   Transponder = WorkerTransponder
  // }
  if (!Transponder) {
    throw new Error('this tool does not support this environment!')
  }
  return Transponder
}

export default Transponder()
