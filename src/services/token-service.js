import config from '../config'
import jwtDecode from 'jwt-decode'

let _timeoutId
const _TEN_SECONDS_IN_MS = 10000

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    console.info('clearing the auth token')
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  parseJwt(jwt){
    return jwtDecode(jwt)
  },
  readJwtToken(){
    return TokenService.parseJwt(TokenService.getAuthToken())
  },
  _getMsUntilExpiry(payload){
    /* payload is from JWT
    exp value is in seconds, need to convert to ms
    calculates difference between now and when JWT will expire
    */
   return (payload.exp * 1000) - Date.now()
  },
  queueCallbackBeforeExpiry(callback){
    //number of ms from now until token expires
    const msUntilExpiry = TokenService._getMsUntilExpiry(
      TokenService.readJwtToken()
    )
    /*Queue callback that will happen 10 seconds before token expires
    the callback is passed in as an argument so could be anything,
    in this app, cb is for calling refresh endpoint */
    _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS)
  },
  clearCallbackBeforeExpiry(){
    console.log('clearcallbackbeforeexpiry')
    clearTimeout(_timeoutId)
  },
}

export default TokenService
