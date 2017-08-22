import ajax from '../../util/ajax'
import { updateState } from './task'
import { updateState as updateAppState } from '../App/task'

/* ===== index =====*/
//套餐列表
async function ajaxList(dispatch, params) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/list', {}, reject, reject,
      (response) => {
        resolve()
        dispatch(updateState({
          tableData: response.data.list,
          tableTotals: (response.data.totals) ? Number(response.data.totals) : 0
        }))
      }
    )
  )
}

async function ajaxToggleStatus(id, status) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/edit-status', {
        package_id: id,
        status: status
      },
      reject, reject, resolve
    )
  )
}

async function ajaxToggleRecommendation(id, status) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/edit-record-status', {
        package_id: id,
        is_reco: status
      },
      reject, reject, resolve
    )
  )
}

async function ajaxPreview(dispatch, id) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/preview-url', {
        package_id: id
      },
      reject, reject,
      (response) => {
        dispatch(updateState({
          previewUrl: response.data.preview_url
        }))
        resolve()
      }
    )
  )
}

/* ===== add =====*/
//套餐新增
async function ajaxAdd(dispatch, value) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/add', {
        buy_url: value.formUrl,//家居url,type为2和3一定要填
        image: (value.formImage) ? value.formImage[0] : '',//套餐首图
        name: value.formName,//套餐名称
        quota: value.formQuota,//限额
        sort_order: value.formSort,//排序
        surplus: value.formSurplus,//剩余
        type: value.formClass,//套餐类型
        unit_price: value.formPrice ? value.formPrice : '1',//套餐价格,type为1和3的时候一定要填

        furniture_price: value.formFurniturePrice,//家居价格，type为2和3一定要填
        furniture_num: value.formFurnitureNum,//家居件数，type为2和3一定要填
        goods: value.formGoods,//家居关联商品
        renovation_price: value.formRenovationPrice,//家装价格，type为3时一定要填
      },
      reject, reject,
      (response) => {
        dispatch(updateState({
          packageId: String(response.data.package_id),
        }))
        resolve()
      }
    )
  )
}

/* ===== edit =====*/
//套餐查看
async function ajaxEditInfo(dispatch, id) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/view', {
        package_id: id
      },
      reject, reject,
      (response) => {
        dispatch(updateState({
          formName: response.data.name,//套餐名称
          formSort: response.data.sort_order,//排序
          formImage: response.data.image ? [response.data.image] : [],//套餐首图
          formUrl: response.data.buy_url,//家居套餐购买url,当type为2时，有返回值
          formClass: String(response.data.type),
          formPrice: String(response.data.unit_price),
          formQuota: String(response.data.quota),
          formSurplus: String(response.data.surplus),
          columnsStyles: response.data.columns,//套餐栏目
          formStatus: response.data.status,
          formIsReco: response.data.is_reco,
          formSaveLoading: false,
          formAddColumnLoading: false,

          formFurniturePrice: response.data.furniture_price,//家居价格
          formFurnitureNum: response.data.furniture_num,//家居件数
          formGoods: response.data.goods,//家居关联商品
          formRenovationPrice: response.data.renovation_price,//家装价格

        }))
        resolve()
      }
    )
  )
}

async function ajaxEdit(dispatch, value) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/edit', {
        package_id: value.id,
        buy_url: value.formUrl,
        name: value.formName,
        image: (value.formImage) ? value.formImage[0] : '',
        quota: value.formQuota,
        sort_order: value.formSort,
        surplus: value.formSurplus,
        type: value.formClass,
        unit_price: value.formPrice ? value.formPrice : '1',

        furniture_price: value.formFurniturePrice,//家居价格，type为2和3一定要填
        furniture_num: value.formFurnitureNum,//家居件数，type为2和3一定要填
        goods: value.formGoods,//家居关联商品
        renovation_price: value.formRenovationPrice,//家装价格，type为3时一定要填

      },
      reject, reject, resolve
    )
  )
}

/* ===== column =====*/
//套餐栏目类型
async function ajaxColumnStyles(dispatch) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/style-list', {}, reject, reject,
      (response) => {
        dispatch(updateState({
          modalColumnsStyles: response.data,
        }))
        resolve()
      }
    )
  )
}

async function ajaxAddColumn(dispatch, value) {
  (process.env.NODE_ENV === 'production') || console.log('ajaxAddColumn', value)

  await new Promise((resolve, reject) =>
    ajax(
      'website/package/add-column', {
        package_id: value.packageId,
        type_id: value.formColumnTypeId,
        c_name: value.formName,
        sort_order: value.formSort,
        n_name: value.formNav,
        content: value.formIntro,
        sub_title: value.formSubTitle,
        items: value.items,
        image_url: (value.formVideoImage) ? value.formVideoImage : '',
        video_url: value.formVideoUrl,
      },
      reject, reject,
      (response) => {

        //findIndex,updated

        const getColumnsStyles = () => {
          let arr = value.columnsStyles.concat([])
          return arr.map((v, index) => {
            if (v.id === value.formId) {
              v.id = response.data.column_id
              v.c_name = value.formName
              v.n_name = value.formNav
              v.content = value.formIntro
              v.sort_order = value.formSort
              v.sub_title = value.formSubTitle
              v.items = value.items
              v.image_url = value.formVideoImage
              v.video_url = value.formVideoUrl
              v.buttonOkDisabled = false
              return v
            } else {
              return v
            }
          })
        }

        console.log(value.columnsStyles, getColumnsStyles())

        dispatch(updateState({
          columnsStyles: getColumnsStyles()
        }))
        resolve()
      }
    )
  )
}

async function ajaxEditColumn(dispatch, value) {
  (process.env.NODE_ENV === 'production') || console.log('ajaxAddColumn', value)
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/edit-column', {
        package_id: value.packageId,
        column_id: value.formId,
        type_id: value.formColumnTypeId,
        c_name: value.formName,
        sort_order: value.formSort,
        n_name: value.formNav,
        content: value.formIntro,
        sub_title: value.formSubTitle,
        items: value.items,
        image_url: (value.formVideoImage) ? value.formVideoImage : '',
        video_url: value.formVideoUrl,
      },
      reject, reject,
      (response) => {
        const getColumnsStyles = () => {
          let arr = value.columnsStyles.concat([])
          return arr.map((v, index) => {
            if (v.id === value.formId) {
              v.id = response.data.column_id
              v.c_name = value.formName
              v.n_name = value.formNav
              v.content = value.formIntro
              v.sort_order = value.formSort
              v.sub_title = value.formSubTitle
              v.items = value.items
              v.image_url = value.formVideoImage
              v.video_url = value.formVideoUrl
              v.buttonOkDisabled = false
              return v
            } else {
              return v
            }
          })
        }

        console.log(value.columnsStyles, getColumnsStyles())

        dispatch(updateState({
          columnsStyles: getColumnsStyles()
        }))
        resolve()
      }
    )
  )
}

async function ajaxDeleteColumn(value) {
  await new Promise((resolve, reject) =>
    ajax(
      'website/package/del-column', {
        column_id: value,
      },
      reject, reject, resolve
    )
  )
}

//商品列表
async function ajaxGoodsList(dispatch, params) {
  await new Promise((resolve) =>
    ajax(
      'website/goods/list',
      {
        identifier: params.identifier,
        name: params.name,
        status: params.status
      },
      resolve,
      resolve,
      (response) => {
        resolve()
        dispatch(updateState({
          tableData2: response.data.list,
          tableTotals: (response.data.totals) ? Number(response.data.totals) : 0,
        }))
      }
    )
  )
}

export {
  ajaxList,
  ajaxPreview,
  ajaxToggleStatus,
  ajaxToggleRecommendation,
  ajaxColumnStyles,
  ajaxAddColumn,
  ajaxEditColumn,
  ajaxDeleteColumn,
  ajaxAdd,
  ajaxDeleteLive,
  ajaxEditInfo,
  ajaxEdit,
  ajaxGoodsList,
}