import {validator} from '../../util/validator'
import {getCookie} from '../../util/cookie'
import {history} from '../../redux/store'
import {config} from '../../config'
const {cookie} = config()

let awaitStatus = true

const timer = () => new Promise((resolve) => setTimeout(resolve, 1000))

async function notRepeating(fun) {
  if (awaitStatus) {
    awaitStatus = false
    fun()
    await timer()
    awaitStatus = true
  }
}

function downLoad(url) {
  if (validator.isStringNotEmpty(url)) {
    let a = document.createElement('a')
    a.href = encodeURI(url)
    a.download = 'excel'
    a.id = 'downLoad'
    a.style.display = 'none'
    // a.click()
    document.body.appendChild(a)
    document.getElementById('downLoad').click()
    document.body.removeChild(document.getElementById('downLoad'))
    a = null
  } else {
    console.error('function downLoad url should be a not empty string')
  }
}

function checkToken() {
  if (!getCookie(cookie.token) && history.location.pathname !== '/login') {
    // 提示信息失效请登录
    history.push('/login')
  }
}

export {notRepeating, downLoad, checkToken}
