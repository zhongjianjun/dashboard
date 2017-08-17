import React from 'react'
import { Card, Pagination } from 'antd'
import { notRepeating } from '../App/util'
import { selectChannels, selectColumns, getLabels } from '../App/task'

import connect from 'react-redux/es/connect/connect'//连接
import Breadcrumb from '../../Components/Breadcrumb/index.jsx'//面包屑
import From from './Components/Form.jsx'//表单
import {
  add,
  edit,
  resetFormAdd
} from './task'

function Component({ dispatch, props, app }) {
  process.env.NODE_ENV === 'production' || console.log('commodityProps: ', props)
  //表单传参
  const formProps = {
    name: props.name,
    identifier: props.identifier,
    image: props.image,
    price: props.price,
    num: props.num,
    content: props.content,
    id: props.id,
    onOk(value) {
      notRepeating(
        () => {
          if (props.formType === 'add') {
            dispatch(add(value))
          } else if (props.formType === 'edit') {
            dispatch(edit(value))
          } else {
            console.error('onOk fail!')
          }
        }
      )
    },
    onCancel(values){
      notRepeating(() => dispatch(resetFormAdd(values)))
    },
  }
  //面包屑
  const breadcrumbProps = {
    breadcrumbs: [{
      name: '内容管理',
    }, {
      name: '商品管理',
    }, {
      name: props.formType === 'edit' ? '编辑' : '新增',
    }]
  }

  return (
    <div>
      <Breadcrumb {...breadcrumbProps} />
      <Card className="y-m-b-40">
        <From {...formProps} />
      </Card>
    </div>
  )
}

export default connect(state => {
  return {
    app: state.app,
    props: state.commodity,
  }
})(Component)
