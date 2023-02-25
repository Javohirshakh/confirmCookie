import { checkAndRemove } from './remove-block'

export default class App {
  #cookieBlock
  constructor() {
    this.#cookieBlock = document.querySelector('.cookie-consent')
  }
  removeCookieBlock() {
    console.log('hs')
    checkAndRemove(this.#cookieBlock)
  }
}