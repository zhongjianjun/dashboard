webpackJsonp([4],{582:function(e,n,t){"use strict";function Component(e){var n=e.dispatch,a=e.label,r=e.app,o={breadcrumbs:[{name:"首页"},{name:"页面管理"},{name:"标签管理"}]},c={selectChannels:r.selectChannels,buttonResetLoading:a.buttonResetLoading,buttonSearchLoading:a.buttonSearchLoading,onSearch:function(e){t.i(p.a)(function(){return n(t.i(y.a)(e))})},onReset:function(e){t.i(p.a)(function(){return n(t.i(y.b)(e))})}},m={dataSource:a.tableData,loading:a.tableLoading,itemEdit:function(e){n(t.i(y.c)(e))}},d={titles:"标签编辑",visible:a.modalEditVisible3,modalLoading:a.modalLoading3,confirmLoading:a.modalEditConfirmLoading3,channelList:a.ItemlList,channel_id:a.channel_id,column_id:a.column_id,onOk:function(e,a){var r=this;return s()(l.a.mark(function _callee(){return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.i(p.a)(function(){return n(t.i(y.d)(e))});case 2:a();case 3:case"end":return r.stop()}},_callee,r)}))()},onCancel:function(){n(t.i(y.e)())}};return u.a.createElement("div",null,u.a.createElement(f.a,o),u.a.createElement(b.a,c),u.a.createElement(i.a,{className:"y-m-b-40"},u.a.createElement(h.a,m)),u.a.createElement(g.a,d))}Object.defineProperty(n,"__esModule",{value:!0});var a=t(604),r=(t.n(a),t(603)),i=t.n(r),o=t(8),l=t.n(o),c=t(7),s=t.n(c),m=t(0),u=t.n(m),d=t(136),p=t(248),f=(t(12),t(602)),h=t(754),g=t(752),b=t(753),y=(t(755),t(145));n.default=t.i(d.a)(function(e){return{label:e.label,app:e.app}})(Component)},602:function(e,n,t){"use strict";function newBreadcrumb(e){var n=e.breadcrumbs;return l.a.createElement(i.a,{separator:">",style:{marginBottom:"20px"}},n.map(function(e,n){return l.a.createElement(i.a.Item,{key:n},s.a.isStringNotEmpty(e.href)?l.a.createElement(c.Link,{to:e.href},e.name):e.name)}))}var a=t(609),r=(t.n(a),t(608)),i=t.n(r),o=t(0),l=t.n(o),c=t(75),s=t(12);n.a=newBreadcrumb},607:function(e,n,t){"use strict";var a=t(12);t.d(n,"a",function(){return r}),t.d(n,"d",function(){return i}),t.d(n,"e",function(){return o}),t.d(n,"c",function(){return l}),t.d(n,"b",function(){return c});var r=function(e){return a.a.isStringEmpty(e)?"--":e},i=function(e,n){return a.a.isStringEmpty(e)?"--":1===Number(n.status)?"显示":"隐藏"},o=function(e,n){return a.a.isStringEmpty(e)?"--":1===Number(n.type)?"频道":"链接"},l=function(e,n){return a.a.isStringEmpty(e)?"--":1===Number(n.type)?"视频":"图文"},c=function(e,n){return a.a.isStringEmpty(e)?"--":1===Number(n.is_reco)?"已推荐":"未推荐"}},752:function(e,n,t){"use strict";var a=t(247),r=(t.n(a),t(246)),i=t.n(r),o=t(621),l=(t.n(o),t(620)),c=t.n(l),s=t(134),m=(t.n(s),t(92)),u=t.n(m),d=t(600),p=(t.n(d),t(599)),f=t.n(p),h=t(1),g=t.n(h),b=t(135),y=(t.n(b),t(45)),E=t.n(y),v=t(598),k=(t.n(v),t(601)),x=t.n(k),C=t(245),S=t.n(C),F=t(19),L=t.n(F),_=t(244),w=t.n(_),I=t(21),N=t.n(I),V=t(20),D=t.n(V),O=t(606),M=(t.n(O),t(605)),R=t.n(M),B=t(0),Q=t.n(B),T=t(845),q=t.n(T),j=(t(145),R.a.Option,0),z=function(e){function ItemEditModal(e){L()(this,ItemEditModal);var n=N()(this,(ItemEditModal.__proto__||S()(ItemEditModal)).call(this,e));return n.remove=function(e){var t=n.props.form,a=t.getFieldValue("keys");t.setFieldsValue({keys:a.filter(function(n){return n!==e})})},n.remove2=function(e){var t=n.props.form,a=t.getFieldValue("keys2");t.setFieldsValue({keys2:a.filter(function(n){return n.id!=e})})},n}return D()(ItemEditModal,e),w()(ItemEditModal,[{key:"add",value:function(){j++;var e=this.props.form,n=e.getFieldValue("keys"),t=n.concat(j);e.setFieldsValue({keys:t})}},{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFields(function(n,t){if(!n){var a=[];console.log(e.props.form.getFieldValue("keys2")),e.props.form.getFieldValue("keys2").map(function(e,n){var r={};r.id=e.id,r.name=t["name"+e.id],a.push(r)}),e.props.form.getFieldValue("keys").map(function(e,n){var r={};r.id="0",r.name=t["names"+e],a.push(r)});var r=e.props.channel_id,i=e.props.column_id;e.props.onOk({channel_id:r,column_id:i,labels:a},e.props.form.resetFields)}})}},{key:"handleCancel",value:function(){this.props.onCancel(),this.props.form.resetFields(),this.setState({num:[]})}},{key:"render",value:function(){var e=this,n=this.props.form,t=n.getFieldDecorator,a=n.getFieldValue,r={labelCol:{span:6},wrapperCol:{span:15}};t("keys2",{initialValue:this.props.channelList});var o=a("keys2"),l=o.map(function(n,t){return Q.a.createElement("div",{key:"divname"+t},Q.a.createElement(f.a.Item,g()({label:"标签名称"},r),e.props.form.getFieldDecorator("name"+n.id,{initialValue:n.name,rules:[{required:!0,message:"请输入标签名称!"}]})(Q.a.createElement(x.a,{maxLength:10,placeholder:"请输入标签名称",style:{width:"80%",marginRight:"30px"}})),Q.a.createElement(E.a,{className:q.a.delete,type:"minus-circle-o",onClick:function(){return e.remove2(n.id)}})))});t("keys",{initialValue:[]});var s=a("keys"),m=s.map(function(n,t){return Q.a.createElement("div",{key:"divnames"+n},Q.a.createElement(f.a.Item,g()({label:"标签名称"},r),e.props.form.getFieldDecorator("names"+n,{initialValue:"",rules:[{required:!0,message:"请输入标签名称!"}]})(Q.a.createElement(x.a,{maxLength:10,placeholder:"请输入标签名称",style:{width:"80%",marginRight:"30px"}})),Q.a.createElement(E.a,{className:q.a.delete,type:"minus-circle-o",onClick:function(){return e.remove(n)}})))});return Q.a.createElement(i.a,{title:this.props.titles,visible:this.props.visible,confirmLoading:this.props.confirmLoading,okText:"确定",cancelText:"取消",onOk:this.handleSubmit.bind(this),onCancel:this.handleCancel.bind(this)},Q.a.createElement(c.a,{tip:"获取数据中...",spinning:!!this.props.modalLoading&&this.props.modalLoading},Q.a.createElement(f.a,null,l,m,Q.a.createElement(f.a.Item,{wrapperCol:{span:16,offset:6}},Q.a.createElement(u.a,{type:"dashed",onClick:this.add.bind(this),style:{width:"95%"}},Q.a.createElement(E.a,{type:"plus"})," 新增标签")))))}}]),ItemEditModal}(Q.a.Component);z=f.a.create({})(z),n.a=z},753:function(e,n,t){"use strict";function Search(e){var n=e.form,t=e.onSearch,a=e.onReset,r=(e.adBlowOptions,e.buttonSearchLoading),o=e.buttonResetLoading,l=(e.reset,e.selectChannels),s={labelCol:{span:9},wrapperCol:{span:15}},m=function(e){return n.validateFields(function(n,a){e.preventDefault(),n||t(a)})},d=function(){n.resetFields(),a({searchname:"",searchid:""})};return k.a.createElement(i.a,{className:"y-m-b-20"},k.a.createElement(u.a,{layout:"inline",className:C.a.form},k.a.createElement(u.a.Item,p()({label:"标签名称"},s),n.getFieldDecorator("searchname")(k.a.createElement(g.a,{type:"text",placeholder:"请输入标签编号"}))),k.a.createElement(u.a.Item,p()({label:"所属频道"},s),n.getFieldDecorator("searchid",{initialValue:""})(k.a.createElement(E.a,{placeholder:"请选择一个频道"},l.map(function(e,n){return k.a.createElement(E.a.Option,{key:n,value:String(e.channel_id)},e.channel_name)})))),k.a.createElement(u.a.Item,{wrapperCol:{span:15,offset:9}},k.a.createElement(c.a,{type:"primary",onClick:m,loading:r},"搜索"),k.a.createElement(c.a,{className:"y-m-l-10",onClick:d,loading:o},"重置"))))}var a=t(604),r=(t.n(a),t(603)),i=t.n(r),o=t(134),l=(t.n(o),t(92)),c=t.n(l),s=t(600),m=(t.n(s),t(599)),u=t.n(m),d=t(1),p=t.n(d),f=t(598),h=(t.n(f),t(601)),g=t.n(h),b=t(606),y=(t.n(b),t(605)),E=t.n(y),v=t(0),k=t.n(v),x=(t(12),t(846)),C=t.n(x);E.a.Option;Search=u.a.create({})(Search),n.a=Search},754:function(e,n,t){"use strict";function NewTable(e){var n=e.loading,t=e.dataSource,a=(e.toggleStatus,e.onEdit,e.channelEdit,e.itemEdit),r=[{key:"1",title:"频道名称",dataIndex:"channel_name",render:m.a},{key:"2",title:"栏目名称",dataIndex:"column_name",render:m.a},{key:"4",title:"标签组",dataIndex:"labels",render:function(e,n){return s.a.createElement("div",{style:{maxWidth:"200px"}},e.map(function(e,n){return s.a.createElement("span",{style:{marginLeft:"5px"}}," ",e.name," ")}))}},{key:"6",title:"操作",dataIndex:"option",render:function(e,n){return s.a.createElement("span",null,s.a.createElement("a",{onClick:function(){return a(n)},className:"table-operating"},"编辑标签"))}}];return s.a.createElement(i.a,{className:"y-table",rowKey:function(e){return l()(e)},columns:r,bordered:!0,loading:n,dataSource:t,pagination:!1})}var a=t(627),r=(t.n(a),t(626)),i=t.n(r),o=t(253),l=t.n(o),c=t(0),s=t.n(c),m=t(607);n.a=NewTable},755:function(e,n,t){"use strict";var a=t(134),r=(t.n(a),t(92)),i=(t.n(r),t(0));t.n(i)},826:function(e,n,t){n=e.exports=t(43)(!1),n.push([e.i,".slider-3QQN3y{margin-bottom:40px;margin-right:10%;margin-left:15%}.hr-2BSwFu{margin-left:16%;margin-right:8%;margin-bottom:20px;border:1px solid #ccc}.delete-1bmoDa{cursor:pointer;position:relative;top:4px;font-size:24px;color:#999;transition:all .3s}.delete-1bmoDa:hover{color:#777}.delete-1bmoDa[disabled]{cursor:not-allowed;opacity:.5}",""]),n.locals={form:"form-2mqRCH",slider:"slider-3QQN3y",hr:"hr-2BSwFu",delete:"delete-1bmoDa"}},827:function(e,n,t){n=e.exports=t(43)(!1),n.push([e.i,".form-170dbO .ant-form-item{width:240px;margin-bottom:20px}",""]),n.locals={form:"form-170dbO"}},845:function(e,n,t){var a=t(826);"string"==typeof a&&(a=[[e.i,a,""]]);t(44)(a,{});a.locals&&(e.exports=a.locals)},846:function(e,n,t){var a=t(827);"string"==typeof a&&(a=[[e.i,a,""]]);t(44)(a,{});a.locals&&(e.exports=a.locals)}});