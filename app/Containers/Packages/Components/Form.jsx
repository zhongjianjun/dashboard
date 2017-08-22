import React from 'react'
import { Radio, Form, Button, Input, message, Icon, Select, Row, Col, Slider, Upload, Checkbox, Modal } from 'antd'
import { validator } from '../../../util/validator'
import PicturesWall from '../../../Components/Upload/PicturesWall.jsx'
import styles from './Form.pcss'

function Component({
  form, buttonOkDisabled, buttonOkLoading,
  formName, formImage, formQuota, formPrice, formSurplus, formSort, formClass, formClasses, formUrl, formFurniturePrice, formFurnitureNum, formRenovationPrice, formGoods,
  onOk, changeFormClass, onOpenModal
 }) {
  process.env.NODE_ENV === 'production' || console.log(formClasses)

  const formItemLayout2 = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 21,
        offset: 3,
      },
    },
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 3 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 21 },
    },
  }

  const generateImagesArray = (values) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('generateImagesArray', values)
    }

    let array = [];
    for(var i =0;i< formGoods.length; i++ ){
      if (values[`tc_num${i}`]) {
        array.push({
          goods_id: formGoods[i].id,
          num: values[`tc_num${i}`],
        })
      }
    }
    return array
  }

  const handleOk = (e) =>
    form.validateFields((err, values) => {
      e.preventDefault()
      console.warn('handleOk: ', {
        ...values,
        formGoods: generateImagesArray(values),
      })
      
      if (values.formQuota < values.formSurplus) {
        message.warn('剩余不能比限额多')
        return
      }
      if (!err) {
        onOk({
          ...values,
          formGoods: generateImagesArray(values),
        })
      }
    })

  const handleChangeFormClass = (e) => {
    process.env.NODE_ENV === 'production' || console.log(e)

    changeFormClass({ formClass: e.target.value })
  }


  const handleChangeImage = (urls) => urls


  return (

    < div >
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
            <Input type="text" placeholder="请输入套餐名称" style={{ maxWidth: '50%' }} />
            )}
        </Form.Item>

        <Form.Item label="排序" {...formItemLayout}>
          {form.getFieldDecorator('formSort', {
            initialValue: formSort,
            rules: [{ required: true, message: '请输入排序!' }],
          })(
            <Input type="text" placeholder="请输入排序" style={{ maxWidth: '50%' }} />
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
        {/*家装*/}
        {
          formClass === '1'
            ? <Form.Item label="套餐单价" {...formItemLayout}>
              {form.getFieldDecorator('formPrice', {
                initialValue: formPrice,
                rules: [
                  { type: "string", pattern: /^[1-9]\d{0,5}$/, required: true, message: '最多输入六位正整数!' },
                ],
              })(
                <Input type="text" addonAfter="元/㎡" placeholder="请输入套餐单价" style={{ maxWidth: '50%' }} />
                )}
            </Form.Item>
            : null
        }
        {/*家居*/}
        {
          formClass === '2'
            ?
            <div>

            <Form.Item label="家居价格" {...formItemLayout}>
                {form.getFieldDecorator('formFurniturePrice', {
                  initialValue: formFurniturePrice,
                  rules: [{ required: true, message: '请输入家居价格!' }],
                })(
                  <Input type="text" addonAfter="元" placeholder="请输入家居价格" style={{ maxWidth: '50%' }} />
                  )}
              </Form.Item>

              <Form.Item label="家居件数" {...formItemLayout}>
                {form.getFieldDecorator('formFurnitureNum', {
                  initialValue: formFurnitureNum,
                  rules: [{ required: true, message: '请输入家居件数!' }],
                })(
                  <Input type="text" addonAfter="件" placeholder="请输入家居件数" style={{ maxWidth: '50%' }} />
                  )}
              </Form.Item>
              
              <Form.Item label="URL" {...formItemLayout}>
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
                  <Input type="text" placeholder="请输入url" style={{ maxWidth: '50%' }} />
                  )}
              </Form.Item>

              <Form.Item label="家居产品" {...formItemLayout}>
                  <div>
                    <Button onClick={onOpenModal}>选择商品</Button>
                    <Row gutter={16} className={styles.goodslistbox}>
                      {
                        formGoods.map((value, index) =>
                          <Col span={6} key={index} className={styles.goodslist}>
                            <img src={value.image} alt={value.name} className={styles.goodsimg} />
                            <div className={styles.goodsname}>{value.name}</div>
                            <div className={styles.goodsnum}>数量：
                            {form.getFieldDecorator(`tc_num${index}`, {
                                rules: [{ required: true, message: '请输入数量!' }],
                                initialValue: value.tc_num
                              })(
                              <Input type="text" placeholder="请输入数量" style={{ width: '40%' }} />
                            )}
                            </div>
                          </Col>
                        )
                      }
                    </Row>
                  </div>
              </Form.Item>
              
            </div>
            : null
        }
        {/*家装+家居*/}
        {
          formClass === '3'
            ?
            <div>

              <Form.Item label="套餐价格" {...formItemLayout}>
                {form.getFieldDecorator('formPrice', {
                  initialValue: formPrice,
                  rules: [
                    { type: "string", pattern: /^[1-9]\d{0,5}$/, required: true, message: '最多输入六位正整数!' },
                  ],
                })(
                  <Input type="text" addonAfter="元/㎡" placeholder="请输入套餐价格" style={{ maxWidth: '50%' }} />
                  )}
              </Form.Item>

              <Form.Item label="家装价格" {...formItemLayout}>
                {form.getFieldDecorator('formRenovationPrice', {
                  initialValue: formRenovationPrice,
                  rules: [
                    { type: "string", pattern: /^[1-9]\d{0,5}$/, required: true, message: '最多输入六位正整数!' },
                  ],
                })(
                  <Input type="text" addonAfter="元/㎡" placeholder="请输入家装价格" style={{ maxWidth: '50%' }} />
                  )}
              </Form.Item>

              <Form.Item label="家居价格" {...formItemLayout}>
                {form.getFieldDecorator('formFurniturePrice', {
                  initialValue: formFurniturePrice,
                  rules: [{ required: true, message: '请输入家居价格!' }],
                })(
                  <Input type="text" addonAfter="元" placeholder="请输入家居价格" style={{ maxWidth: '50%' }} />
                  )}
              </Form.Item>

              <Form.Item label="家居件数" {...formItemLayout}>
                {form.getFieldDecorator('formFurnitureNum', {
                  initialValue: formFurnitureNum,
                  rules: [{ required: true, message: '请输入家居件数!' }],
                })(
                  <Input type="text" addonAfter="件" placeholder="请输入家居件数" style={{ maxWidth: '50%' }} />
                  )}
              </Form.Item>

              <Form.Item label="URL" {...formItemLayout}>
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
                  <Input type="text" placeholder="请输入url" style={{ maxWidth: '50%' }} />
                  )}
              </Form.Item>

              <Form.Item label="家居产品" {...formItemLayout}>
                  <div>
                    <Button onClick={onOpenModal}>选择商品</Button>
                    <Row gutter={16} className={styles.goodslistbox}>
                      {
                        formGoods.map((value, index) =>
                          <Col span={6} key={index} className={styles.goodslist}>
                            <img src={value.image} alt={value.name} className={styles.goodsimg} />
                            <div className={styles.goodsname}>{value.name}</div>
                            <div className={styles.goodsnum}>数量：
                            {form.getFieldDecorator(`tc_num${index}`, {
                                rules: [{ required: true, message: '请输入数量!' }],
                                initialValue: value.tc_num
                              })(
                              <Input type="text" placeholder="请输入数量" style={{ width: '40%' }} />
                            )}
                            </div>
                          </Col>
                        )
                      }
                    </Row>
                  </div>
              </Form.Item>

{/* 
              <Form.Item label="家居产品" {...formItemLayout}>
                {form.getFieldDecorator('formGoods', {
                  rules: [{ required: true, message: '请选择商品!' }],
                })(
                  <div>
                    <Button onClick={onOpenModal}>选择商品</Button>
                    <Row gutter={16} className={styles.goodslistbox}>
                      {
                        formGoods.map((value, index) =>
                          <Col span={6} key={index} className={styles.goodslist}>
                            <img src={value.image} alt={value.name} className={styles.goodsimg} />
                            <div className={styles.goodsname}>{value.name}</div>
                            <div className={styles.goodsnum}>数量：<Input type="text" placeholder="请输入数量" defaultValue={value.tc_num} style={{ width: '40%' }} /></div>
                          </Col>
                        )
                      }
                    </Row>
                  </div>
                  )}
              </Form.Item> */}

            </div>
            : null
        }

        <Form.Item label="限额" {...formItemLayout}>
          {form.getFieldDecorator('formQuota', {
            initialValue: formQuota,
          })(
            <Input type="text" placeholder="请输入限额" style={{ maxWidth: '50%' }} />
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
            <Input type="text" placeholder="请输入剩余数量" style={{ maxWidth: '50%' }} />
            )}
        </Form.Item>
        <Form.Item  {...formItemLayout2}>
          <Button
            type="primary"
            onClick={handleOk}
            loading={buttonOkLoading}
            disabled={buttonOkDisabled}
          >{(buttonOkDisabled) ? '已保存' : '保存'}
          </Button>
        </Form.Item>
      </Form>


    </div >
  );
}

Component = Form.create({})(Component)

export default Component
