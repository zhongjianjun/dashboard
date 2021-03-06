import ajax from  '../../util/ajax'
import {updateState} from './task'

/**
 * Todo Mapping Parameters
 *
 * @param {object} params
 * @param {function} dispatch
 */

async function ajaxLogin(params, dispatch) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/user/login',
      {
        username: params.LoginName,
        password: params.LoginPassword,
      },
      reject, reject,
      (response) => {
        resolve()
        return dispatch(updateState({
          userId: response.data.id,
          userName: response.data.username,
          token: response.data.token
        }))
      }
    )
  )
}

async function ajaxLogout(params, dispatch) {
  await new Promise((resolve) =>
    ajax(
      'website/user/logout',
      {
        name: params.LoginName,
        password: params.LoginPassword,
      },
      resolve,
      resolve,
      (response) => {
        return resolve()
      }
    )
  )
}

export {ajaxLogin, ajaxLogout}
