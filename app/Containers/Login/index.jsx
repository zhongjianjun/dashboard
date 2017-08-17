import React from 'react'
import connect from 'react-redux/es/connect/connect'
import Background from './Components/Background.jsx'
import Form from './Components/Form.jsx'
import { LazilyLoadFactory } from '../../Components/LazilyLoad/index.jsx'
import { login as taskLogin } from './task'

/**
 *  Todo
 *  https://www.zhihu.com/#signin
 *
 */

function Login({ dispatch, login, app }) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('LoginProps: ', login)
  }

  const BackgroundProps = {
    title: app.title
  }

  const FormProps = {
    loading: login.LoginLoading,
    hasRegister: login.hasRegister,
    onSubmit(values) {
      dispatch(taskLogin(values))
    }
  }

  return (
    <Background {...BackgroundProps}>
      <Form {...FormProps} />
    </Background>
  )
}

export default connect(state => {
  return {
    app: state.app,
    login: state.login,
  }
})(Login)
