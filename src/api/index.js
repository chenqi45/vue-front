import Api from './api'

const api = new Api({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' + window.localStorage.token
  }
})

export default api
