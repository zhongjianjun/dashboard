import React from 'react'
import {Card, Pagination} from 'antd'
import connect from 'react-redux/es/connect/connect'
import {notRepeating}from '../App/util'
import {validator}from '../../util/validator'
import {changeSelectChannels} from '../App/task'
import Breadcrumb from '../../Components/Breadcrumb/index.jsx'
import {history} from '../../redux/store'
import Formadd from './Components/Formadd.jsx'
import {
  searchlabelList,
  uploadImg,
  addNav,
  editNav
} from  './task'

function InformationEdit({dispatch, information, app}) {

  const breadcrumbProps = {
    breadcrumbs: [{
      name: '资讯管理',
    }, {
      name: '资讯编辑',
    }]
  }

  const formProps = {
    selectChannels: app.selectChannels,
    selectColumns: app.selectColumns,
    labellist: information.labellist, //关联标签
    uploadToken: information.uploadToken,
    isUpload: information.isUpload,
    formSureButton: information.formSureButton,
    channel_id: information.channel_id,
    column_id: information.column_id,
    image: information.image,
    intro: information.intro,
    is_reco: information.is_reco,
    keywords: information.keywords,
    label_ids: information.label_ids,
    name: information.name,
    shows: information.shows,
    sort_order: information.sort_order,
    summary: information.summary,
    id: information.id,
    changeSelectChannels(value){
      dispatch(changeSelectChannels(value))
      dispatch(changeChannelId(value))
      notRepeating(() => dispatch(searchlabelList({channel_id: value, column_id: "0"})))
    },
    changeSelectcolumn(value){
      notRepeating(() => dispatch(searchlabelList(value)))
    },
    uploadImg(value){
      dispatch(uploadImg(value))
    },
    onCancel(){
      history.push('/information')
    },
    onOk(values){
      notRepeating(() => dispatch(editNav(values)))
    }
  }


  return (
    <div>
      <Breadcrumb {...breadcrumbProps}/>
      <Card className="y-m-b-40">
        <Formadd {...formProps}/>
      </Card>
    </div>
  )
}

export default connect(state => {
  return {
    information: state.information,
    app: state.app,
  }
})(InformationEdit)
