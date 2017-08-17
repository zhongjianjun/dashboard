import React from 'react'
import { Radio, Form, Button, Input, message, Icon, Select, Row, Col, Slider, Upload, Checkbox, Modal } from 'antd'
import { validator } from '../../../util/validator'
import PicturesWall from '../../../Components/Upload/PicturesWall.jsx'
import styles from './Form.pcss'

function Component({
  form, buttonOkDisabled, buttonOkLoading,
  formName, formImage, formQuota, formPrice, formSurplus, formSort, formClass, formClasses, formUrl,
  onOk, changeFormClass
 }) {
  process.env.NODE_ENV === 'production' || console.log(formClasses)

  console.log(formImage,"套餐图片");

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
    style: { maxWidth: '600px' }
  }

  const handleOk = (e) =>
    form.validateFields((err, values) => {
      e.preventDefault()
      console.warn('handleOk: ', {
        ...values,
      })
      if (values.formQuota < values.formSurplus) {
        message.warn('剩余不能比限额多')
        return
      }
      if (!err) {
        onOk({
          ...values,
        })
      }
    })

  const handleChangeFormClass = (e) => {
    process.env.NODE_ENV === 'production' || console.log(e)

    changeFormClass({ formClass: e.target.value })
  }

  const handleChangeImage = (urls) => urls

  return (
    <Form layout='horizontal' className={styles.form}>
      <Form.Item {...formItemLayout} label="套餐类型">
        {form.getFieldDecorator('formClass', {
          initialValue: formClass,
          rules: [{ required: true, message: '请选择套餐类型!' }],
        })(
          <Radio.Group onChange={handleChangeFormClass}>
            {formClasses.map((value, index) =>
              <Radio key={index}
                value={String(value.value)}
              >{value.name}</Radio>)
            }
          </Radio.Group>
          )}
      </Form.Item>
      <Form.Item label="套餐名称" {...formItemLayout}>
        {form.getFieldDecorator('formName', {
          initialValue: formName,
          rules: [{ required: true, message: '请输入套餐名称!' }],
        })(
          <Input type="text" placeholder="请输入套餐名称" />
          )}
      </Form.Item>
      <Form.Item label="排序" {...formItemLayout}>
        {form.getFieldDecorator('formSort', {
          initialValue: formSort,
          rules: [{ required: true, message: '请输入排序!' }],
        })(
          <Input type="text" placeholder="请输入排序" />
          )}
      </Form.Item>
      <Form.Item label="套餐首图" {...formItemLayout}>
        {form.getFieldDecorator('formImage', {
          initialValue: formImage,
          getValueFromEvent: handleChangeImage,
          rules: [{ required: true, message: '请上传套餐首图!' }],
        })(
          <PicturesWall onChange={handleChangeImage} />
          )}
      </Form.Item>
      {
        formClass === '1'
          ? <Form.Item label="套餐单价" {...formItemLayout}>
            {form.getFieldDecorator('formPrice', {
              initialValue: formPrice,
              rules: [
                { type: "string", pattern: /^[1-9]\d{0,5}$/, required: true, message: '最多输入六位正整数!' },
              ],
            })(
              <Input type="text" addonAfter="元/㎡" placeholder="请输入套餐单价" />
              )}
          </Form.Item>
          : null
      }  {
        formClass === '2'
          ? <Form.Item label="URL" {...formItemLayout}>
            {form.getFieldDecorator('formUrl', {
              initialValue: formUrl,
              rules: [
                { required: true, message: '值不能为空!' },
                {
                  pattern: /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g,
                  message: '请输入正确的url!'
                },
              ],
            })(
              <Input type="text" placeholder="请输入url" />
              )}
          </Form.Item>
          : null
      }
      <Form.Item label="限额" {...formItemLayout}>
        {form.getFieldDecorator('formQuota', {
          initialValue: formQuota,
        })(
          <Input type="text" placeholder="请输入限额" />
          )}
      </Form.Item>
      <Form.Item label="剩余" {...formItemLayout}>
        {form.getFieldDecorator('formSurplus', {
          initialValue: formSurplus,
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            validator: (rule, value, callback) => {
              if (value && value > form.getFieldValue('formQuota')) {
                callback('剩余不能比限额多!')
              }
              callback()
            },
            message: '剩余不能比限额多!'
          }],
        })(
          <Input type="text" placeholder="请输入剩余数量" />
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
      </Form.Item>
    </Form>
  )
}

Component = Form.create({})(Component)

export default Component
