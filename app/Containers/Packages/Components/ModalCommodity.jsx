import React from 'react'
import { Modal, Button, Form, Input, Table, Popconfirm } from 'antd'
//import { Link } from 'react-router-dom';
import styles from './Modal.pcss'
import { renderColumns } from '../../../Components/Table/index.jsx'

function Component({ visible, onOK, onCancel, form, onSearch, onReset, buttonSearchLoading, buttonResetLoading, loading, dataSource, onEdit, onConfirmDelete, onChange }) {

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
    //多选按钮选择
    const rowSelection = {
        onChange: onChange,
    };

    const columns = [{
        key: 'identifier',
        title: '商品编码',
        dataIndex: 'identifier',
        render: renderColumns,
        width: '16%',
    }, {
        key: 'name',
        title: '商品名称',
        dataIndex: 'name',
        render: renderColumns,
        width: '16%',
    }, {
        key: 'price',
        title: '商品价格(元）',
        dataIndex: 'price',
        render: renderColumns,
        width: '16%',
    }, {
        key: 'image',
        title: '商品图片',
        dataIndex: 'image',
        render: (text, record) =>
            <img src={text} style={{ width: '60px' }} />,
        width: '16%',
    }, {
        key: 'content',
        title: '备注',
        dataIndex: 'content',
        render: renderColumns,
        width: '30%',
    }]

    return (
        <Modal
            title="选择商品"
            width={1000}
            visible={visible}
            onOk={onOK}
            onCancel={onCancel}
        >
            <div>
                <Form layout='inline' className={styles.form}>
                    <Form.Item label="商品名称" {...formItemLayout}>
                        {form.getFieldDecorator('name')(
                            <Input type="text" placeholder="请输入商品名称" />
                        )}
                    </Form.Item>

                    <Form.Item label="商品编码" {...formItemLayout}>
                        {form.getFieldDecorator('identifier')(
                            <Input type="text" placeholder="请输入商品编码" />
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

                <Table
                    className='y-table'
                    rowKey={record => record.id}
                    columns={columns}
                    bordered={true}
                    loading={loading}
                    dataSource={dataSource}
                    pagination={false}
                    scroll={{ y: 400 }}
                    rowSelection={ rowSelection }
                />
            </div>

        </Modal>
    )
}

Component = Form.create({})(Component)
export default Component