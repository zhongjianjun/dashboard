import React from 'react'
import { Card, Pagination } from 'antd'
import connect from 'react-redux/es/connect/connect'
import { history } from '../../redux/store'
import { validator } from '../../util/validator'
import Breadcrumb from '../../Components/Breadcrumb/index.jsx';//面包屑
import { notRepeating } from '../App/util'
import Table from './Components/Table.jsx';//表格
import TableHeader from './Components/TableHeader.jsx';//新增按钮
import {
  preview, toggleRecommendation, toggleStatus,
  searchLiveList, changeSearchChannel, resetLiveList, changePage, toEdit
} from './task'

function Component({ dispatch, props, app }) {
  console.log('PackageProps: ', props, app)
  //面包屑
  const breadcrumbProps = {
    breadcrumbs: [{
      name: '内容管理',
    }, {
      name: '套餐管理',
    }]
  }
  //新增按钮
  const tableHeaderProps = {
    onClick() {
      history.push('/packages/add')
    }
  }
  //表格操作
  const tableProps = {
    dataSource: props.tableData,
    loading: props.tableLoading,
    toggleStatus(id, status) {
      notRepeating(() => dispatch(toggleStatus(id, status)))
    },
    toggleRecommendation(id, status) {
      notRepeating(() => dispatch(toggleRecommendation(id, status)))
    },
    onEdit(id) {
      notRepeating(() => dispatch(toEdit(id)))
    },
    onPreview(id) {
      notRepeating(() => dispatch(preview(id)))
    }
  }

  return (
    <div>
      <Breadcrumb {...breadcrumbProps} />
      <Card className="y-m-b-40">
        <TableHeader {...tableHeaderProps} />
        <Table {...tableProps} />
      </Card>
    </div>
  )
}

export default connect(state => {
  return {
    app: state.app,
    props: state.packages,
  }
})(Component)
