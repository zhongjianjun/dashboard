import { message } from 'antd'
import { config } from '../../config'
import { history } from '../../redux/store'
import { validator } from '../../util/validator'
import { selectChannels, resetChannelsColumn } from '../App/task'
import { UpdateState } from './action'
import {
  ajaxGoodsList,
  ajaxEditInfo,
  ajaxAdd,
  ajaxEdit,
  ajaxDelete,
} from './ajax'
const { title, subTitle } = config()

/* ===== base =====*/
function updateState(data) {
  if (validator.isObject(data)) {
    return {
      type: UpdateState,
      payload: data
    }
  } else {
    console.error('action updateState params must be a object')
  }
}

//初始化
const initCommodity = (value) =>
  async (dispatch, getState) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('initCommodity', getState())
    }
    await dispatch(updateState({
      name: '',
      identifier: '',
      image: '',
      price: '',
      num: '',
      content: '',
      id: '',
    }))

    const params = getState().commodity
    const params2 = getState().app

    switch (value) {
      case 'add':
        dispatch(updateState({
          formType: 'add',
        }))
        break
      case 'edit':
        if (!params.formId) {//防编辑时刷新页面没有数据
          console.warn(params.formId, !params.formId)
          setTimeout(() => history.push('/commodity'))
          return
        }
        dispatch(checkColumn())
        dispatch(updateState({
          formType: 'edit',
        }))
        break
      default:
        dispatch(updateState({ tableLoading: true }))
        await ajaxGoodsList(dispatch, { ...params, ...params2 })
        dispatch(updateState({ tableLoading: false }))
        break
    }
  }
//筛选
const searchAdList = (values) =>
  async (dispatch, getState) => {
    console.log('searchAdList', getState(), values)
    dispatch(updateState({ ...values, tableLoading: true, buttonSearchLoading: true }))
    const params = getState().commodity
    await ajaxGoodsList(dispatch, { ...params })
    console.log('done!')
    dispatch(updateState({ tableLoading: false, buttonSearchLoading: false }))
  }
//重置
const resetAdList = (values) =>
  async (dispatch, getState) => {
    console.log('resetAdList', getState(), values)
    dispatch(updateState({ ...values, tableLoading: true, buttonResetLoading: true }))
    const params = getState().commodity
    await ajaxGoodsList(dispatch, { ...params })
    console.log('done!')
    dispatch(updateState({ tableLoading: false, buttonResetLoading: false }))
  }

/* ===== add/edit =====*/

const add = (value) =>
  async (dispatch, getState) => {
    process.env.NODE_ENV === 'production' || console.log('add', getState(), value)

    dispatch(updateState({ formSaveLoading: true }))
    const params = getState().commodity

    await ajaxAdd(dispatch, { ...value })
      .then(() => {
        dispatch(updateState({ formSaveDisabled: true }))
        message.success('新增成功')
        setTimeout(() => history.push('/commodity'), 1000)
      })
      .catch((err) => console.error(err))

    dispatch(updateState({
      formSaveLoading: false
    }))

  }

//编辑查看
const toEdit = (id) =>
  async (dispatch, getState) => {
    console.log('toEdit', getState(), id)

    dispatch(updateState({
      formId: id,
      formChannel: undefined,
      formColumn: undefined,
      formLabel: undefined,
    }))

    history.push('/commodity/edit')

    await ajaxEditInfo(dispatch, id)
      .then(() => {
        dispatch(checkColumn())
      })
      .catch((err) => console.error(err))
  }
//编辑
const edit = (value) =>
  async (dispatch, getState) => {
    console.log('edit', getState(), value)
    const id = getState().commodity.id

    dispatch(updateState({ formSaveLoading: true }))

    await ajaxEdit(dispatch, { ...value, id })
      .then(() => {
        dispatch(updateState({ formSaveDisabled: true }))
        message.success('编辑成功')
        setTimeout(() => history.push('/commodity'), 1000)
      })
      .catch((err) => console.error(err))

    dispatch(updateState({
      formSaveLoading: false,
    }))
  }

//删除
const confirmDelete = (id) =>
  async (dispatch, getState) => {
    console.log('deleteDate', getState(), id)
    dispatch(updateState({ tableLoading: true }))
    const params = getState().commodity

    await ajaxDelete(id)
    await ajaxGoodsList(dispatch, { ...params })

    dispatch(updateState({ tableLoading: false }))
  }
//返回
const resetFormAdd = (value) => (dispatch) => {
  dispatch(updateState({...value}))
  history.push('/commodity')
}

//
const checkColumn = () =>
  async (dispatch, getState) => {
    const columnsStyles = getState().commodity.columnsStyles
    console.warn('checkColumn\n', columnsStyles)
    if (columnsStyles && columnsStyles.length > 0) {
      dispatch(updateState({
        headerPreviewDisabled: false,
        headerOnlineDisabled: false,
        headerRecommendDisabled: false,
      }))
    } else {
      dispatch(updateState({
        headerPreviewDisabled: true,
        headerOnlineDisabled: true,
        headerRecommendDisabled: true,
      }))
    }
  }


export {
  updateState, initCommodity,
  searchAdList, resetAdList, toEdit, add, edit, confirmDelete, resetFormAdd, checkColumn
}