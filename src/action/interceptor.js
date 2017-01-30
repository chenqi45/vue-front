import { showMsg } from './action'
import Status from '../constants/status'

export function interResponse(store, response) {
    if(response.status == Status.ERROR){
      store.router.go({path: '/error'})
      return true
    }else if(response.status == Status.FAILED){
      showMsg(store, '保存错误!')
      return true
    }else if(response.status == Status.INVALID_TOKEN){
      store.router.go({path: '/login'})
      return true
    }
    return false
}
