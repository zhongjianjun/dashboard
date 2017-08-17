import React from 'react'
import { Layout } from 'antd'
import { config } from '../../../config'
const { title, copyright, version } = config()

const Footer = () =>
  <Layout.Footer style={{ textAlign: 'center' }}>
    {title} ©2017 powered by {copyright} 当前呈现版本 {version}
  </Layout.Footer>

export default Footer
