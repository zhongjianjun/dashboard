import React from 'react'
import { Table, Card, Popconfirm } from 'antd'
import { validator } from '../../../util/validator'
import { renderColumns, renderStatus, renderLiveType, renderRecommendation } from '../../../Components/Table/index.jsx'

function NewTable({ loading, dataSource, toggleRecommendation, toggleStatus, onEdit, onPreview, onConfirmDelete }) {

  const columns = [{
    key: 'identifier',
    title: '商品编码',
    dataIndex: 'identifier',
    render: renderColumns
  }, {
    key: 'name',
    title: '商品名称',
    dataIndex: 'name',
    render: renderColumns
  }, {
    key: 'price',
    title: '商品价格(元）',
    dataIndex: 'price',
    render: renderColumns
  }, {
    key: 'image',
    title: '商品图片',
    dataIndex: 'image',
    render: (text, record) =>
      <img src={text} style={{ width: '60px' }} />
  }, {
    key: 'content',
    title: '备注',
    dataIndex: 'content',
    render: renderColumns,
    width: '16%'
  }, {
    key: 'option',
    title: '操作',
    dataIndex: 'option',
    render: (text, record) =>
      <span>
        <a onClick={() => onEdit(record.id)} className="table-operating">编辑</a>
        <Popconfirm title={`确定要删除吗?`}
          onConfirm={() => onConfirmDelete(record.id)}
          onCancel={false}
          okText="确定"
          cancelText="取消">
          <a className="table-operating">删除</a>
        </Popconfirm>
      </span>
  }]

  return (
    <Table
      className='y-table'
      rowKey={record => record.id}
      columns={columns}
      bordered={true}
      loading={loading}
      dataSource={dataSource}
      pagination={false}
    />
  )
}

export default NewTable

