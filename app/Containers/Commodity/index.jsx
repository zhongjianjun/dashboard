import React from 'react'
import { Card, Pagination } from 'antd'

import connect from 'react-redux/es/connect/connect'//连接
import { notRepeating } from '../App/util' //组件
import { history } from '../../redux/store'//链接跳转

import Breadcrumb from '../../Components/Breadcrumb/index.jsx'//面包屑
import Search from './Components/Search.jsx'//顶部筛选
import TableHeader from './Components/TableHeader.jsx'//新增按钮
import Table from './Components/Table.jsx'//表格
import {
  searchAdList,
  resetAdList,
  toEdit,
  confirmDelete
} from './task'//

function Component({ dispatch, props, app }) {

  //分页
  const paginationProps = {
    className: 'y-card-pagination',
    showQuickJumper: true,
    showTotal: (total, range) => `共搜索到 ${props.tableTotals} 条数据`,
    defaultCurrent: 1,
    current: props.tableCurrent,
    defaultPageSize: 10,
    total: props.tableTotals,
    onChange(page) {
      dispatch(changePage({ tableCurrent: page }))
    }
  }
  //表格数据
  const tableProps = {
    dataSource: props.tableData,
    loading: props.tableLoading,
    onEdit(id) {
      notRepeating(() => dispatch(toEdit(id)))
    },
    onConfirmDelete(id) {
      notRepeating(() => dispatch(confirmDelete(id)))
    },
  }
  //新增
  const tableHeaderProps = {
    onClick() {
      history.push('/commodity/add')
    }
  }
  //筛选
  const searchProps = {
    buttonResetLoading: props.buttonResetLoading,
    buttonSearchLoading: props.buttonSearchLoading,
    onSearch(values) {
      notRepeating(() => dispatch(searchAdList(values)))
    },
    onReset(values) {
      notRepeating(() => dispatch(resetAdList(values)))
    }
  }
  //面包屑
  const breadcrumbProps = {
    breadcrumbs: [{
      name: '内容管理',
    }, {
      name: '商品管理',
    }]
  }

  return (
    <div>
      <Breadcrumb {...breadcrumbProps} />
      <Search {...searchProps} />
      <Card className="y-m-b-40">
        <TableHeader {...tableHeaderProps} />
        <Table {...tableProps} />
        <Pagination {...paginationProps} />
      </Card>
    </div>
  )
}

export default connect(state => {
  return {
    app: state.app,
    props: state.commodity
  }
})(Component)
