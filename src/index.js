/* eslint-disable no-undef */
import WorkerTransponder from './libs/worker'
import StorageTransponder from './libs/localStorage'

const Transponder = () => {
  let Transponder
  if (typeof SharedWorker === 'function') {
    Transponder = WorkerTransponder
  } else if (typeof localStorage === 'object') {
    Transponder = StorageTransponder
  }
  if (!Transponder) {
    throw new Error('this tool does not support this environment!')
  }
  return Transponder
}

export default Transponder()
