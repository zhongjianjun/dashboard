import React from 'react'
import {Layout, Icon, Menu, Dropdown} from 'antd'
import {Modal} from  'antd'
import styles from '../index.pcss'
import {config} from '../../../config.js'
import {getCookie} from '../../../util/cookie.js'
let {cookie} = config()



function Header({collapsed, onToggleSide, onLogout}) {

  const menu = (
    <Menu>
      {/*<Menu.Item><span>修改密码</span></Menu.Item>*/}
      <Menu.Item><span onClick={showConfirm}>退出登录</span></Menu.Item>
    </Menu>
  )

  function showConfirm() {
    Modal.confirm({
      title: '确认退出该账号?',
      content: '',
      onOk() {
        return new Promise((resolve, reject) => {
          onLogout(resolve, reject)
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel() {

      },
    })
  }

  return (
    <Layout.Header style={{background: '#fff', padding: 0}}>
      <Icon
        className={styles.trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onToggleSide}
      />

      <Dropdown overlay={menu}>
        <div className={styles.name}>
          <a className="ant-dropdown-link">
            <Icon type="user"/> {
             getCookie(cookie.userName)
          }
          </a>
        </div>
      </Dropdown>
    </Layout.Header>
  )
}


export default Header
