import ajax from '../../util/ajax'
import { updateState } from './task'
import { updateState as updateAppState } from '../App/task'

//商品列表
async function ajaxGoodsList(dispatch, params) {
  await new Promise((resolve) =>
    ajax(
      'website/goods/list',
      {
        identifier: params.identifier,
        name: params.name,
        status: params.status,
        page: params.tableCurrent,
        pagesize: 10,
      },
      resolve,
      resolve,
      (response) => {
        resolve()
        dispatch(updateState({
          tableData: response.data.list,
          tableTotals: (response.data.totals) ? Number(response.data.totals) : 0,
        }))
      }
    )
  )
}

//商品新增
async function ajaxAdd(dispatch, value) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/goods/add', {
        name: value.name,
        identifier: value.identifier,
        image: (value.image) ? value.image[0] : '',
        price: value.price,
        num: value.num,
        content: value.content,
        create_id: 1,
      },
      reject, reject, resolve
    )
  )
}

//商品详情
async function ajaxEditInfo(dispatch, id) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/goods/detail', {
        id: id
      },
      reject, reject,
      (response) => {
        // if(response.data.image){
        //   var img=[{
        //     uid:'-1',
        //     url:response.data.image
        //   }]
        // }else{
        //   var img=[]
        // }
        
        dispatch(updateState({
          name: response.data.name,
          identifier: response.data.identifier,
          image: response.data.image ? [response.data.image] : [],
          price: response.data.price,
          num: response.data.num,
          content: response.data.content,
          id: response.data.id,
          formSaveLoading: false,
          formAddColumnLoading: false,
        }))
        resolve()
      }
    )
  )
}

//商品编辑
async function ajaxEdit(dispatch, value) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/goods/edit', {
        name: value.name,
        identifier: value.identifier,
        image: (value.image) ? value.image[0] : '',
        price: value.price,
        num: value.num,
        content: value.content,
        create_id: 1,

        id: value.id,
        status: 1
      },
      reject, reject, resolve
    )
  )
}

//商品删除
async function ajaxDelete(id) {
  await new Promise((resolve) =>
    ajax(
      'website/goods/del', {id: id, status: 2}, resolve, resolve, resolve
    )
  )
}

export {
  ajaxGoodsList,
  ajaxEditInfo,
  ajaxAdd,
  ajaxEdit,
  ajaxDelete,
}