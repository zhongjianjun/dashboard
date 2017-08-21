import React from 'react'
import { Card, Pagination, Button } from 'antd'
import connect from 'react-redux/es/connect/connect'
import { notRepeating } from '../App/util'
import { history } from '../../redux/store'
import { validator } from '../../util/validator'
import { selectChannels, selectColumns, getLabels } from '../App/task'
import Breadcrumb from '../../Components/Breadcrumb/index.jsx'
import Header from './Components/Header.jsx'
import From from './Components/Form.jsx'
import FormStyles from './Components/FormStyles.jsx'
import ModalIntro from './Components/ModalIntro.jsx'
import ModalColumns from './Components/ModalColumns.jsx'
import ModalCommodity from './Components/ModalCommodity.jsx';//选择商品弹框
import styles from './Components/index.pcss'
import {
  updateState, preview, toggleStatus, toggleRecommendation, add, edit,
  selectColumnsStyle, addColumn, editColumn, deleteColumn, showTable, searchAdList, resetAdList, selectGoodsList,
} from './task'

function Component({ dispatch, props, app }) {
  process.env.NODE_ENV === 'production' || console.log('PackagesProps: ', props)

  const breadcrumbProps = {
    breadcrumbs: [{
      name: '内容管理',
    }, {
      name: '套餐管理',
    }, {
      name: props.formType === 'edit' ? '编辑' : '新增',
    }]
  }
  const headerProps = {
    status: props.formStatus,
    isReco: props.formIsReco,
    packageId: props.packageId,
    headerPreviewDisabled: props.headerPreviewDisabled,
    headerOnlineDisabled: props.headerOnlineDisabled,
    headerRecommendDisabled: props.headerRecommendDisabled,
    onPreview() {
      dispatch(preview())
    },
    toggleStatus(id, status) {
      console.log(id, status)
      notRepeating(() => dispatch(toggleStatus(id, status)))
    },
    toggleRecommendation(id, status) {
      console.log(id, status)
      notRepeating(() => dispatch(toggleRecommendation(id, status)))
    },
    openIntro() {
      dispatch(updateState({ modalIntroVisible: true }))
    },
    onBack() {
      history.push('/packages')
    }
  }
  const formProps = {
    formClass: props.formClass,
    formClasses: props.formClasses,
    formUrl: props.formUrl,
    formName: props.formName,
    formSort: props.formSort,
    formImage: props.formImage,
    formPrice: props.formPrice,
    formQuota: props.formQuota,
    formSurplus: props.formSurplus,
    buttonOkLoading: props.formSaveLoading,
    buttonOkDisabled: props.formSaveDisabled,
    formFurniturePrice: props.formFurniturePrice,//家居价格
    formFurnitureNum: props.formFurnitureNum,//家居件数
    selectedGoods: props.selectedGoods,//选择的商品数据
    unit_price: props.unit_price,//套餐价格
    // buttonCancelLoading: props.buttonResetLoading,
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
    changeFormClass(value) {
      dispatch(updateState(value))
    },
    onCancel(value) {
      console.log('onCancel')
    },
    onOpenModal(){//点击显示弹框
      notRepeating(() => dispatch(showTable()))
      dispatch(updateState({ modalCommodityVisible: true }))
    }
  }

  const buttonProps = {
    className: styles.button,
    type: "primary",
    onClick() {
      notRepeating(() => dispatch(updateState({ modalColumsVisible: true })))
    },
    loading: false
  }

  const modalIntroProps = {
    visible: props.modalIntroVisible,
    onOK() {
      dispatch(updateState({ modalIntroVisible: false }))
    }
  }

  const modalColumnsProps = {
    id: props.modalColumsId,
    data: props.modalColumnsStyles,
    visible: props.modalColumsVisible,
    onOK() {
      dispatch(selectColumnsStyle())
    },
    onCancel() {
      dispatch(updateState({ modalColumsVisible: false }))
    },
    onChange(id) {
      dispatch(updateState({ modalColumsId: id }))
    },
  }

  const formStylesProps = {
    formType: props.formType,
    columnsStyles: props.columnsStyles,
    onOk(value) {
      notRepeating(
        () => {
          if (value.formId > 80000) {
            dispatch(addColumn(value))
          } else {
            dispatch(editColumn(value))
          }
        }
      )
    },
    onCancel(value) {
      notRepeating(() => dispatch(deleteColumn(value)))
    },
  }

//选择商品弹框
  const ModalCommodityProps = {
    visible: props.modalCommodityVisible,
    buttonResetLoading: props.buttonResetLoading,
    buttonSearchLoading: props.buttonSearchLoading,
    dataSource: props.tableData2,
    loading: props.tableLoading,
    onOK(values) {
      dispatch(selectGoodsList(values))
    },
    onCancel() {
      dispatch(updateState({ modalCommodityVisible: false }))
    },
    onSearch(values) {
      notRepeating(() => dispatch(searchAdList(values)))
    },
    onReset(values) {
      notRepeating(() => dispatch(resetAdList(values)))
    },
    onChange(selectedRowKeys, selectedRows){
      dispatch(updateState({ selectedRows: selectedRows }))
    }
  }

  return (
    <div>
      <Breadcrumb {...breadcrumbProps} />
      <Card className="y-m-b-40">
        <Header {...headerProps}></Header>
        <From {...formProps} />
        <hr className={styles.hr} />
        <FormStyles {...formStylesProps} />
        <Button {...buttonProps}>新增栏目</Button>
        <ModalIntro {...modalIntroProps} />
        <ModalColumns {...modalColumnsProps} />
        <ModalCommodity {...ModalCommodityProps} />
      </Card>
    </div>
  )
}

export default connect(state => {
  console.log(state.packages,123456);
  return {
    app: state.app,
    props: state.packages,
  }
})(Component)
