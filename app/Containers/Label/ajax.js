import ajax from  '../../util/ajax'
import reqwest from 'reqwest'
import {updateState} from './task'
import {message} from 'antd'
import {config} from '../../config.js'
import {getCookie} from '../../util/cookie.js'
let {cookie} = config()

/**
 * Todo Mapping Parameters
 *
 * @param {object} params
 * @param {function} dispatch
 */

async function ajaxAdList(dispatch, params) {
  await new Promise((resolve) =>
    ajax(
      'website/channel/label-list',
      {
        page: params.tableCurrent,
        rows: 10,
        name: params.searchname,
        channel_id: params.searchid
      },
      resolve,
      resolve,
      (response) => {
        resolve()
        return dispatch(updateState({
          tableTotals: (response.data.totals) ? Number(response.data.totals) : 0,
          tableData: response.data.list,
          tableLoading: false
        }))
      }
    )
  )
}
//获取广告位类型
async function positionType(dispatch) {
  await new Promise((resolve) =>
    ajax(
      'website/channel/website-channels',
      {},
      resolve,
      resolve,
      (response) => {
        resolve()
        return dispatch(updateState({
          channeloption: response.data,
        }))
      }
    )
  )
}
async function ajaxDeleteNav(id) {
  await new Promise((resolve) =>
    ajax(
      'website/wxgroup/remove', {id: id}, resolve, resolve, resolve
    )
  )
}

async function ajaxEditStatus(id, status) {
  await new Promise((resolve) =>
    ajax(
      'website/channel/edit-status', {id: id, status: status}, resolve, resolve, resolve
    )
  )
}

async function ajaxAddNav(values) {
  if (process.env.NODE_ENV !== 'production'){
  onsole.log('\n', values)
  }

  await new Promise((resolve) =>
    ajax(
      'website/wxgroup/create',
      {
        intro: values.intro,
        qr_code: values.qr_code,
        page_id: values.page_id,
        name: values.name,
        status: values.status,
        sort_order: values.sort_order,
      },
      resolve, resolve, resolve
    )
  )
}

async function ajaxNavEditInfo(dispatch, id) {
  if (process.env.NODE_ENV !== 'production'){
  console.log('ajaxNavEditInfo', id)
  }

  await new Promise((resolve) =>
    ajax(
      'website/channel/view',
      {
        id: id
      },
      resolve, resolve,
      (response) => {
        dispatch(updateState({
          intro: response.data.intro,
          description: response.data.description,
          keyword: response.data.keyword,
          name: response.data.name,
          title: response.data.title,
        },))
        resolve()
      }
    )
  )
}
async function ajaxChannelEditInfo(dispatch, id) {
  if (process.env.NODE_ENV !== 'production'){
    console.log('ajaxChannelEditInfo', id)
  }
  await new Promise((resolve) =>
    ajax(
      'website/channel/website-config-view',
      {
        id: id
      },
      resolve, resolve,
      (response) => {
        dispatch(updateState({
          channelList: response.data,
        },))
        resolve()
      }
    )
  )
}
async function ajaxItemEditInfo(dispatch, value) {
  await new Promise((resolve) =>
    ajax(
      'website/channel/label-view',
      {
        channel_id: value.channel_id,
        column_id:value.column_id,
      },
      resolve, resolve,
      (response) => {
        if (process.env.NODE_ENV !== 'production'){
        console.log(value.channel_id,value.column_id)
        }

        dispatch(updateState({
          ItemlList: response.data.labels,
          channel_id: value.channel_id,
          column_id:value.column_id.toString(),
        },))
        resolve()
      }
    )
  )
}
async function ajaxEditNav(dispatch, values) {
  if (process.env.NODE_ENV !== 'production'){
  console.log('ajaxEditNav', values)
  }

  await new Promise((resolve) =>
    ajax(
      'website/channel/edit',
      {
        intro: values.intro,
        name: values.name,
        id: values.id,
        description: values.description,
        keyword: values.keyword,
        title: values.title,
      },
      resolve, resolve, resolve
    )
  )
}
async function ajaxChannelNav(dispatch, values) {
  if (process.env.NODE_ENV !== 'production'){
  console.log('ajaxChannelNav', values)
  }

  await new Promise((resolve) =>
    ajax(
      'website/channel/website-config',
      {
        id: values.id,
        child_channels: values.child_channels,
      },
      resolve, resolve, resolve
    )
  )
}
async function ajaxItemNav(dispatch, values) {
  if (process.env.NODE_ENV !== 'production'){
  console.log('ajaxEditNav', values)
  }

  await new Promise((resolve) =>
    ajax(
      'website/channel/label-edit',
      {
        channel_id:values.channel_id,
        column_id:values.column_id,
        labels: values.labels,
      },
      resolve, resolve, resolve
    )
  )
}
async function ajaxremoveitem(dispatch, values, channel) {
  if (process.env.NODE_ENV !== 'production'){
  console.log('ajaxEditNav', values)
  }

  await new Promise((resolve, reject) =>
    ajax(
      'website/channel/column-del-status',
      {
        id: values.id,
      },
      reject, reject,
      (response) => {
        if (response.data.can_del == "2") {
          message.info("该栏目关联了内容，不能删除；");
          reject()
          return
        }
        resolve()
      }
    )
  )
}
export {
  ajaxAdList,
  ajaxDeleteNav,
  ajaxEditStatus,
  ajaxAddNav,
  ajaxNavEditInfo,
  ajaxChannelEditInfo,
  ajaxEditNav,
  ajaxChannelNav,
  positionType,
  ajaxItemEditInfo,
  ajaxItemNav,
  ajaxremoveitem
}
