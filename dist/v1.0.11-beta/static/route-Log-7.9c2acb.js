webpackJsonp([7],{586:function(e,t,a){"use strict";function Log(e){var t=e.dispatch,n=e.log,r=e.app,l={breadcrumbs:[{name:"首页"},{name:"日志管理"}]},o={selectChannels:r.selectChannels,buttonResetLoading:n.buttonResetLoading,buttonSearchLoading:n.buttonSearchLoading,onSearch:function(e){a.i(p.a)(function(){return t(a.i(E.g)(e))})},onReset:function(e){a.i(p.a)(function(){return t(a.i(E.h)(e))})}},u={loading:n.buttonAddLoading,onClick:function(){b.b.push("/log/add")}},m={dataSource:n.tableData,loading:n.tableLoading,onConfirmDelete:function(e){a.i(p.a)(function(){return t(a.i(E.i)(e))})},toggleStatus:function(e,n){a.i(p.a)(function(){return t(a.i(E.j)(e,n))})},onEdit:function(e){b.b.push("/log/edit"),t(a.i(E.k)(e))}},y={className:"y-card-pagination",showQuickJumper:!0,showTotal:function(e,t){return"共搜索到 "+n.tableTotals+" 条数据"},defaultCurrent:1,current:n.tableCurrent,defaultPageSize:10,total:n.tableTotals,onChange:function(e){t(a.i(E.l)({tableCurrent:e}))}};return c.a.createElement("div",null,c.a.createElement(d.a,l),c.a.createElement(g.a,o),c.a.createElement(i.a,{className:"y-m-b-40"},c.a.createElement(h.a,u),c.a.createElement(f.a,m),c.a.createElement(s.a,y)))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(599),r=(a.n(n),a(598)),i=a.n(r),l=a(623),o=(a.n(l),a(622)),s=a.n(o),u=a(0),c=a.n(u),m=a(135),p=a(242),d=(a(12),a(594)),f=a(758),g=(a(756),a(757)),h=a(759),b=a(35),E=a(137);t.default=a.i(m.a)(function(e){return{log:e.log,app:e.app}})(Log)},594:function(e,t,a){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return o.a.createElement(i.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return o.a.createElement(i.a.Item,{key:t},u.a.isStringNotEmpty(e.href)?o.a.createElement(s.Link,{to:e.href},e.name):e.name)}))}var n=a(605),r=(a.n(n),a(604)),i=a.n(r),l=a(0),o=a.n(l),s=a(73),u=a(12);t.a=newBreadcrumb},602:function(e,t,a){"use strict";var n=a(12);a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return o});var r=function(e,t){return n.a.isStringEmpty(e)?"--":e},i=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.status)?"显示":"隐藏"},l=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"频道":"链接"},o=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"视频":"图文"}},756:function(e,t,a){"use strict";var n=a(244),r=(a.n(n),a(243)),i=a.n(r),l=a(612),o=(a.n(l),a(611)),s=a.n(o),u=a(607),c=(a.n(u),a(606)),m=a.n(c),p=a(610),d=(a.n(p),a(609)),f=a.n(d),g=a(601),h=(a.n(g),a(600)),b=a.n(h),E=a(596),y=(a.n(E),a(595)),v=a.n(y),k=a(1),C=a.n(k),S=a(593),w=(a.n(S),a(597)),I=a.n(w),x=a(134),N=(a.n(x),a(43)),_=a.n(N),L=a(14),T=(a.n(L),a(13)),F=a.n(T),D=a(240),z=a.n(D),O=a(29),M=a.n(O),P=a(241),U=a.n(P),j=a(31),q=a.n(j),V=a(30),B=a.n(V),R=a(0),A=a.n(R),H=(a(137),function(e){function newModal(e){M()(this,newModal);var t=q()(this,(newModal.__proto__||z()(newModal)).call(this,e));return t.state={name:"",file:"",previewImage:"",previewVisible:"",isUpload:!0},t.props.img_url&&(t.state.isUpload=!1),t}return B()(newModal,e),U()(newModal,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFields(function(t,a){if(!t){var n=[];n=void 0!=a.img_url[0].response?a.img_url[0].response.data.imgPath+a.img_url[0].response.data.message:a.img_url[0].url;var r=e.props.id;[][0]=a.communitys,e.props.onOk({id:r,ad_size:a.ad_size,type:a.type,img_url:n,name:a.name,status:a.status},e.props.form.resetFields)}})}},{key:"handleCancel",value:function(){this.props.onCancel(),this.props.form.resetFields(),this.setState({isUpload:!0})}},{key:"handlePreview",value:function(e){this.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}},{key:"beforeUpload",value:function(e){var t="image/jpeg"===e.type,a="image/png"===e.type;if("image/jpg"!==e.type&&!t&&!a)return F.a.error("只能上传.jpeg,.jpg,.png图片"),!1;if(!(e.size/1024/1024<2))return F.a.error("请上传小于 2MB 的图片!"),!1;var n=(new Date).getTime(),r=e.type.split("/");this.setState({name:"jiazhuanghoutai/"+n+"."+r[1],files:e})}},{key:"normFile",value:function(e){return Array.isArray(e)?e:e&&e.fileList}},{key:"handImgChange",value:function(e){e.fileList.length?this.props.uploadImg(!1):this.props.uploadImg(!0),"error"==e.file.status&&F.a.error("很遗憾...这次上传失败了。")}},{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:18}},t=A.a.createElement("div",null,A.a.createElement(_.a,{type:"plus"}),A.a.createElement("div",{className:"ant-upload-text"},"选择图片"));return A.a.createElement(i.a,{title:this.props.title,visible:this.props.visible,confirmLoading:this.props.confirmLoading,okText:"确定",cancelText:"取消",onOk:this.handleSubmit.bind(this),onCancel:this.handleCancel.bind(this)},A.a.createElement(s.a,{tip:"获取数据中...",spinning:!!this.props.modalLoading&&this.props.modalLoading},A.a.createElement(v.a,null,A.a.createElement(v.a.Item,C()({label:"广告位名称"},e),this.props.form.getFieldDecorator("name",{initialValue:this.props.name,rules:[{required:!0,message:"请输入广告名称!"}]})(A.a.createElement(I.a,{placeholder:"请输入广告位名称"}))),A.a.createElement(v.a.Item,C()({label:"广告类型"},e),this.props.form.getFieldDecorator("type",{initialValue:this.props.type,rules:[{required:!0,message:"广告类型!"}]})(A.a.createElement(b.a,{placeholder:"请选择广告类型"},this.props.positionType.map(function(e,t){return A.a.createElement(b.a.Option,{key:t,value:e.key.toString()},e.value)})))),A.a.createElement(v.a.Item,C()({label:"广告位示例"},e),this.props.form.getFieldDecorator("img_url",{initialValue:this.props.img_url,rules:[{required:!0,message:"请上传广告位示例图片!"}],valuePropName:"fileList",normalize:this.normFile,onChange:this.handImgChange.bind(this)})(A.a.createElement(f.a,{action:"http://up.qiniu.com/",data:{token:this.props.uploadToken,key:this.state.name,file:this.state.files},onPreview:this.handlePreview.bind(this),listType:"picture-card",beforeUpload:this.beforeUpload.bind(this)},this.props.isUpload?t:null))),A.a.createElement(v.a.Item,C()({label:"广告位大小"},e),this.props.form.getFieldDecorator("ad_size",{initialValue:this.props.ad_size,rules:[{required:!0,message:"请输入广告位大小!"}]})(A.a.createElement(I.a,{placeholder:"请输入广告位大小"}))),A.a.createElement(v.a.Item,C()({},e,{label:"广告状态",required:!0}),this.props.form.getFieldDecorator("status",{rules:[{required:!0,message:"请选择状态"}],initialValue:this.props.status})(A.a.createElement(m.a.Group,null,A.a.createElement(m.a,{value:1},"显示"),A.a.createElement(m.a,{value:2},"隐藏")))))))}}]),newModal}(A.a.Component));H=v.a.create({})(H)},757:function(e,t,a){"use strict";function Search(e){var t=e.form,a=e.onSearch,n=e.onReset,r=(e.adBlowOptions,e.buttonSearchLoading),l=e.buttonResetLoading,o=(e.reset,e.selectChannels),u={labelCol:{span:9},wrapperCol:{span:15}},c=function(e){return t.validateFields(function(t,n){e.preventDefault(),t||a(n)})},p=function(){t.resetFields(),n({adNum:"",adName:"",adStatus:"",searchchannelid:"",tableCurrent:1,tablePageSize:10})};return k.a.createElement(i.a,{className:"y-m-b-20"},k.a.createElement(m.a,{layout:"inline",className:S.a.form},k.a.createElement(m.a.Item,d()({label:"日志编号"},u),t.getFieldDecorator("adNum")(k.a.createElement(h.a,{type:"text",placeholder:"请输入日志编号"}))),k.a.createElement(m.a.Item,d()({label:"日志标题"},u),t.getFieldDecorator("adName")(k.a.createElement(h.a,{type:"text",placeholder:"请输入日志标题"}))),k.a.createElement(m.a.Item,d()({label:"所属频道"},u),t.getFieldDecorator("searchchannelid")(k.a.createElement(y.a,{placeholder:"请选择"},k.a.createElement(y.a.Option,{value:""},"全部"),o.map(function(e,t){return k.a.createElement(y.a.Option,{key:t,value:String(e.channel_id)},e.channel_name)})))),k.a.createElement(m.a.Item,d()({label:"日志状态"},u,{style:{width:"240px"}}),t.getFieldDecorator("adStatus")(k.a.createElement(y.a,{placeholder:"请选择"},k.a.createElement(y.a.Option,{value:""},"全部"),k.a.createElement(y.a.Option,{value:"1"},"显示"),k.a.createElement(y.a.Option,{value:"2"},"隐藏")))),k.a.createElement(m.a.Item,{wrapperCol:{span:15,offset:9}},k.a.createElement(s.a,{type:"primary",onClick:c,loading:r},"搜索"),k.a.createElement(s.a,{className:"y-m-l-10",onClick:p,loading:l},"重置"))))}var n=a(599),r=(a.n(n),a(598)),i=a.n(r),l=a(133),o=(a.n(l),a(90)),s=a.n(o),u=a(596),c=(a.n(u),a(595)),m=a.n(c),p=a(1),d=a.n(p),f=a(593),g=(a.n(f),a(597)),h=a.n(g),b=a(601),E=(a.n(b),a(600)),y=a.n(E),v=a(0),k=a.n(v),C=(a(12),a(819)),S=a.n(C);y.a.Option;Search=m.a.create({})(Search),t.a=Search},758:function(e,t,a){"use strict";function NewTable(e){var t=e.loading,a=e.dataSource,n=e.onConfirmDelete,r=e.toggleStatus,l=e.onEdit,o=[{key:"1",title:"日志编号",dataIndex:"serial_no",render:m.a},{key:"8",title:"发布者",dataIndex:"name",render:m.a},{key:"2",title:"日志标题",dataIndex:"title",render:m.a},{key:"3",title:"所属频道",dataIndex:"channels",render:function(e,t){return c.a.createElement("span",null,e.name)}},{key:"4",title:"所属栏目",dataIndex:"columns",render:function(e,t){return c.a.createElement("span",null,e.name)}},{key:"5",title:"排序",dataIndex:"sort_order",render:m.a},{key:"6",title:"状态",dataIndex:"status",render:function(e,t){return c.a.createElement("span",null,"1"==e?"显示":"隐藏")}},{key:"7",title:"操作",dataIndex:"option",render:function(e,t){return c.a.createElement("span",null,c.a.createElement(s.a,{title:"确定要"+(1===Number(t.status)?"隐藏":"显示")+"吗?",onConfirm:function(){return r(t.id,1===Number(t.status)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},c.a.createElement("a",{className:"table-operating"},1===Number(t.status)?"隐藏":"显示")),c.a.createElement("a",{onClick:function(){return l(t.id)},className:"table-operating"},"编辑"),c.a.createElement(s.a,{title:"确定要删除吗?",onConfirm:function(){return n(t.id)},onCancel:!1,okText:"确定",cancelText:"取消"},c.a.createElement("a",{className:"table-operating"},"删除")))}}];return c.a.createElement(i.a,{className:"y-table",rowKey:function(e){return e.id},columns:o,bordered:!0,loading:t,dataSource:a,pagination:!1})}var n=a(617),r=(a.n(n),a(616)),i=a.n(r),l=a(619),o=(a.n(l),a(618)),s=a.n(o),u=a(0),c=a.n(u),m=a(602);t.a=NewTable},759:function(e,t,a){"use strict";function TableHeader(e){var t=e.loading,a=e.onClick;return o.a.createElement(i.a,{type:"primary",loading:t,onClick:a,style:{marginBottom:"20px"}},"新增日志")}var n=a(133),r=(a.n(n),a(90)),i=a.n(r),l=a(0),o=a.n(l);t.a=TableHeader},804:function(e,t,a){t=e.exports=a(41)(!1),t.push([e.i,".form-g_ezeY .ant-form-item{width:240px;margin-bottom:20px}",""]),t.locals={form:"form-g_ezeY"}},819:function(e,t,a){var n=a(804);"string"==typeof n&&(n=[[e.i,n,""]]);a(42)(n,{});n.locals&&(e.exports=n.locals)}});