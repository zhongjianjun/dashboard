import React from 'react'
import { Card, Form, Button, Input } from 'antd'
import styles from '../index.pcss'

function Search({ form, onSearch, onReset, adBlowOptions, buttonSearchLoading, buttonResetLoading, reset }) {
  //布局
  const formItemLayout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
  }
  //传值
  const handleSearch = (e) =>
    form.validateFields((err, values) => {
      e.preventDefault()
      if (!err) {
        console.log('Received values of form: ', values)
        onSearch(values)
      }
    })
  //清空默认
  const handleReset = () => {
    form.resetFields()
    onReset({
      name: "",
      identifier: ""
    })
  }

  return (
    <Card className="y-m-b-20">
      <Form layout='inline' className={styles.form}>

        <Form.Item label="产品名称" {...formItemLayout}>
          {form.getFieldDecorator('name')(
            <Input type="text" placeholder="请输入产品名称" />
          )}
        </Form.Item>

        <Form.Item label="产品编码" {...formItemLayout}>
          {form.getFieldDecorator('identifier')(
            <Input type="text" placeholder="请输入产品编码" />
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 15, offset: 9 }}>
          <Button
            type="primary"
            onClick={handleSearch}
            loading={buttonSearchLoading}
          >搜索</Button>
          <Button
            className="y-m-l-10"
            onClick={handleReset}
            loading={buttonResetLoading}
          >重置</Button>
        </Form.Item>
        
      </Form>
    </Card>
  )
}

Search = Form.create({})(Search)
export default Search
