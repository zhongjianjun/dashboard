import React from 'react'
import { Radio, Form, Button, Input, message, Icon, Select, Row, Col, Slider, Upload, Checkbox, Modal } from 'antd'
import styles from './Form.pcss'
import PicturesWall from '../../../Components/Upload/PicturesWall.jsx'//上传图片

function Component({
  form, buttonOkDisabled, buttonOkLoading,
    name, identifier, image, price, num, content, id, onCancel,
    onOk, changeFormClass
 }) {

    console.log(image, "图片的值");
    //返回
    const handleCancel = () => {
        form.resetFields()
        onCancel({ ...form.getFieldsValue() })
    }
    //保存
    const handleOk = (e) =>
        form.validateFields((err, values) => {
            e.preventDefault()
            console.warn('handleOk: ', {
                ...values,
                create_id: 1
            })
            if (!err) {
                onOk({
                    ...values,
                    create_id: 1
                })
            }
        })
    //布局
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        style: { maxWidth: '600px' }
    }

    const handleChangeImage = (urls) => urls

    return (
        <Form layout='horizontal' className={styles.form}>

            <Form.Item label="产品名称" {...formItemLayout}>
                {form.getFieldDecorator('name', {
                    initialValue: name,
                    rules: [{ required: true, message: '请输入产品名称!' }],
                })(
                    <Input type="text" placeholder="请输入产品名称" maxLength={30} />
                    )}
            </Form.Item>

            <Form.Item label="产品编号" {...formItemLayout}>
                {form.getFieldDecorator('identifier', {
                    initialValue: identifier,
                    rules: [{ required: true, message: '请输入产品编号!' }, { pattern: /^[0-9a-zA-Z]*$/g, message: "请输入产品编号格式有误!" }],
                })(
                    <Input type="text" placeholder="请输入产品编号" maxLength={30} />
                    )}
            </Form.Item>

            <Form.Item label="产品图片" {...formItemLayout}>
                {console.log('test image',image)}
                {form.getFieldDecorator('image', {
                    initialValue: image,
                    getValueFromEvent: handleChangeImage,
                    rules: [{ required: true, message: '请上传产品图片!' }],
                })(
                    <PicturesWall onChange={handleChangeImage} />
                    )}
            </Form.Item>

            <Form.Item label="产品价格" {...formItemLayout}>
                {form.getFieldDecorator('price', {
                    initialValue: price,
                    rules: [{ required: true, message: '请输入产品价格!' }, { pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/, message: "请输入产品价格格式有误!" }],
                })(
                    <Input type="text" addonAfter="元" placeholder="请输入产品价格" />
                    )}
            </Form.Item>

            <Form.Item label="产品数量" {...formItemLayout}>
                {form.getFieldDecorator('num', {
                    initialValue: num,
                    rules: [{ required: true, message: '请输入产品数量!' }, { pattern: /^\+?[1-9]\d*$/, message: "请输入产品数量格式有误!" }],
                })(
                    <Input type="text" placeholder="请输入产品数量" max={30} />
                    )}
            </Form.Item>

            <Form.Item label="备注" {...formItemLayout}>
                {form.getFieldDecorator('content', {
                    initialValue: content,
                })(
                    <Input type="textarea" placeholder="请输入备注" maxLength={100} />
                    )}
            </Form.Item>

            <Form.Item style={{ maxWidth: '600px' }} wrapperCol={{ span: 8, offset: 4 }}>
                <Button
                    type="primary"
                    onClick={handleOk}
                    loading={buttonOkLoading}
                    disabled={buttonOkDisabled}
                >{(buttonOkDisabled) ? '已保存' : '保存'}
                </Button>
                <Button
                    className="y-m-l-10"
                    onClick={handleCancel}
                >取消</Button>
            </Form.Item>

        </Form>
    )
}

Component = Form.create({})(Component)
export default Component
