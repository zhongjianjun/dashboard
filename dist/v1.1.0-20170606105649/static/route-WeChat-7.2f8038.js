webpackJsonp([7],{597:function(e,t,a){"use strict";function Wechat(e){var t=e.dispatch,n=e.weChat,r={breadcrumbs:[{name:"内容管理"},{name:"微信群管理"}]},o={buttonResetLoading:n.buttonResetLoading,buttonSearchLoading:n.buttonSearchLoading,onSearch:function(e){a.i(m.a)(function(){return t(a.i(y.a)(e))})},onReset:function(e){a.i(m.a)(function(){return t(a.i(y.b)(e))})}},s={loading:n.buttonAddLoading,onClick:function(){t(a.i(y.c)())}},u={dataSource:n.tableData,loading:n.tableLoading,onConfirmDelete:function(e){a.i(m.a)(function(){return t(a.i(y.d)(e))})},toggleStatus:function(e,n){a.i(m.a)(function(){return t(a.i(y.e)(e,n))})},onEdit:function(e){t(a.i(y.f)(e))}},p={title:"新增微信群",visible:n.modalAddVisible,confirmLoading:n.modalAddConfirmLoading,positionType:n.positionType,status:n.status,uploadToken:n.uploadToken,isUpload:n.isUpload,imgShow:n.imgShow,onOk:function(e,n){var r=this;return c()(l.a.mark(function _callee(){return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(m.a)(function(){return t(a.i(y.g)(e))});case 2:n();case 3:case"end":return r.stop()}},_callee,r)}))()},onCancel:function(){t(a.i(y.h)())},uploadImg:function(e){t(a.i(y.i)(e))}},E={title:"编辑微信群",visible:n.modalEditVisible,modalLoading:n.modalLoading,confirmLoading:n.modalEditConfirmLoading,intro:n.intro,page_id:n.page_id,name:n.name,status:n.status,sort_order:n.sort_order,qr_code:n.qr_code,positionType:n.positionType,uploadToken:n.uploadToken,isUpload:n.isUpload,imgShow:n.imgShow,id:n.id,onOk:function(e,n){var r=this;return c()(l.a.mark(function _callee2(){return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(m.a)(function(){return t(a.i(y.j)(e))});case 2:n();case 3:case"end":return r.stop()}},_callee2,r)}))()},onCancel:function(){t(a.i(y.h)())},uploadImg:function(e){t(a.i(y.i)(e))}};return d.a.createElement("div",null,d.a.createElement(f.a,r),d.a.createElement(b.a,o),d.a.createElement(i.a,{className:"y-m-b-40"},d.a.createElement(v.a,s),d.a.createElement(h.a,u)),d.a.createElement(g.a,p),d.a.createElement(g.a,E))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(604),r=(a.n(n),a(603)),i=a.n(r),o=a(8),l=a.n(o),s=a(7),c=a.n(s),u=a(0),d=a.n(u),p=a(136),m=a(248),f=(a(12),a(602)),h=a(794),g=a(792),b=a(793),v=a(795),y=a(148);t.default=a.i(p.a)(function(e){return{weChat:e.weChat}})(Wechat)},602:function(e,t,a){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return l.a.createElement(i.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return l.a.createElement(i.a.Item,{key:t},c.a.isStringNotEmpty(e.href)?l.a.createElement(s.Link,{to:e.href},e.name):e.name)}))}var n=a(609),r=(a.n(n),a(608)),i=a.n(r),o=a(0),l=a.n(o),s=a(75),c=a(12);t.a=newBreadcrumb},607:function(e,t,a){"use strict";var n=a(12);a.d(t,"a",function(){return r}),a.d(t,"d",function(){return i}),a.d(t,"e",function(){return o}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return s});var r=function(e){return n.a.isStringEmpty(e)?"--":e},i=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.status)?"显示":"隐藏"},o=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"频道":"链接"},l=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"视频":"图文"},s=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.is_reco)?"已推荐":"未推荐"}},792:function(e,t,a){"use strict";var n=a(247),r=(a.n(n),a(246)),i=a.n(r),o=a(621),l=(a.n(o),a(620)),s=a.n(l),c=a(613),u=(a.n(c),a(610)),d=a.n(u),p=a(606),m=(a.n(p),a(605)),f=a.n(m),h=a(617),g=(a.n(h),a(616)),b=a.n(g),v=a(600),y=(a.n(v),a(599)),E=a.n(y),w=a(1),k=a.n(w),_=a(598),C=(a.n(_),a(601)),x=a.n(C),S=a(135),I=(a.n(S),a(45)),L=a.n(I),T=a(15),q=(a.n(T),a(14)),N=a.n(q),F=a(245),D=a.n(F),U=a(19),M=a.n(U),V=a(244),O=a.n(V),j=a(21),B=a.n(j),P=a(20),A=a.n(P),R=a(0),z=a.n(R),H=(a(148),function(e){function newModal(e){M()(this,newModal);var t=B()(this,(newModal.__proto__||D()(newModal)).call(this,e));return t.state={name:"",file:"",previewImage:"",previewVisible:"",isUpload:!0},t.props.img_url&&(t.state.isUpload=!1),t}return A()(newModal,e),O()(newModal,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFields(function(t,a){if(!t){var n;void 0!=a.qr_code&&void 0!=a.qr_code[0].response?n=a.qr_code[0].response.data.imgPath+a.qr_code[0].response.data.message:void 0!=a.qr_code&&(n=a.qr_code[0].url);var r=e.props.id;[][0]=a.communitys,e.props.onOk({id:r,intro:a.intro,page_id:a.page_id,qr_code:n,name:a.name,status:a.status,sort_order:a.sort_order},e.props.form.resetFields)}})}},{key:"handleCancel",value:function(){this.props.onCancel(),this.props.form.resetFields(),this.setState({isUpload:!0})}},{key:"handlePreview",value:function(e){this.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}},{key:"beforeUpload",value:function(e){var t="image/jpeg"===e.type,a="image/png"===e.type;if("image/jpg"!==e.type&&!t&&!a)return N.a.error("只能上传.jpeg,.jpg,.png图片"),!1;if(!(e.size/1024/1024<2))return N.a.error("请上传小于 2MB 的图片!"),!1;var n=(new Date).getTime(),r=e.type.split("/");this.setState({name:"jiazhuanghoutai/"+n+"."+r[1],files:e})}},{key:"normFile",value:function(e){return Array.isArray(e)?e:e&&e.fileList}},{key:"handImgChange",value:function(e){e.fileList.length?this.props.uploadImg(!1):this.props.uploadImg(!0),"error"==e.file.status&&N.a.error("很遗憾...这次上传失败了。")}},{key:"typeChange",value:function(e){1==e.target.value?this.props.showchange(!1):this.props.showchange(!0)}},{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:18}},t=z.a.createElement("div",null,z.a.createElement(L.a,{type:"plus"}),z.a.createElement("div",{className:"ant-upload-text"},"选择图片"));return z.a.createElement(i.a,{title:this.props.title,visible:this.props.visible,confirmLoading:this.props.confirmLoading,okText:"确定",cancelText:"取消",onOk:this.handleSubmit.bind(this),onCancel:this.handleCancel.bind(this)},z.a.createElement(s.a,{tip:"获取数据中...",spinning:!!this.props.modalLoading&&this.props.modalLoading},z.a.createElement(E.a,null,z.a.createElement(E.a.Item,k()({label:"群名称"},e),this.props.form.getFieldDecorator("name",{initialValue:this.props.name,rules:[{required:!0,message:"请输入群名称!"}]})(z.a.createElement(x.a,{maxLength:10,placeholder:"请输入群名称"}))),z.a.createElement(E.a.Item,k()({label:"二维码"},e),this.props.form.getFieldDecorator("qr_code",{initialValue:this.props.qr_code,rules:[{required:!0,message:"请上传二维码!"}],valuePropName:"fileList",normalize:this.normFile,onChange:this.handImgChange.bind(this)})(z.a.createElement(b.a,{action:"http://up.qiniu.com/",data:{token:this.props.uploadToken,key:this.state.name,file:this.state.files},onPreview:this.handlePreview.bind(this),listType:"picture-card",beforeUpload:this.beforeUpload.bind(this)},this.props.isUpload?t:null))),z.a.createElement(E.a.Item,k()({label:"展示位置"},e),this.props.form.getFieldDecorator("page_id",{initialValue:this.props.page_id,rules:[{required:!0,message:"请选择展示位置!"}]})(z.a.createElement(f.a,{placeholder:"请选择"},this.props.positionType.map(function(e,t){return z.a.createElement(f.a.Option,{key:t,value:e.id.toString()},e.name)})))),z.a.createElement(E.a.Item,k()({label:"微信群说明"},e),this.props.form.getFieldDecorator("intro",{initialValue:this.props.intro,rules:[{required:!0,type:"string",message:"请输入微信群说明!"}]})(z.a.createElement(x.a,{type:"textarea",maxLength:200,rows:4,placeholder:"请输入微信群说明"}))),z.a.createElement(E.a.Item,k()({label:"排序"},e),this.props.form.getFieldDecorator("sort_order",{initialValue:this.props.sort_order,rules:[{required:!0,pattern:/^[0-9]*[1-9][0-9]*$/,message:"请输入正确排序!"}]})(z.a.createElement(x.a,{placeholder:"请输入排序"}))),z.a.createElement(E.a.Item,k()({},e,{label:"状态",required:!0}),this.props.form.getFieldDecorator("status",{rules:[{required:!0,message:"请选择状态"}],initialValue:this.props.status})(z.a.createElement(d.a.Group,null,z.a.createElement(d.a,{value:"1"},"显示"),z.a.createElement(d.a,{value:"2"},"隐藏")))))))}}]),newModal}(z.a.Component));H=E.a.create({})(H),t.a=H},793:function(e,t,a){"use strict";function Search(e){var t=e.form,a=e.onSearch,n=e.onReset,r=(e.adBlowOptions,e.buttonSearchLoading),o=e.buttonResetLoading,l=(e.reset,{labelCol:{span:9},wrapperCol:{span:15}}),c=function(e){return t.validateFields(function(t,n){e.preventDefault(),t||a(n)})},u=function(){t.resetFields(),n({wxname:""})};return w.a.createElement(i.a,{className:"y-m-b-20"},w.a.createElement(d.a,{layout:"inline",className:_.a.form},w.a.createElement(d.a.Item,m()({label:"微信群名称"},l),t.getFieldDecorator("wxname")(w.a.createElement(g.a,{type:"text",placeholder:"请输入微信群名称"}))),w.a.createElement(d.a.Item,{wrapperCol:{span:15,offset:9}},w.a.createElement(s.a,{type:"primary",onClick:c,loading:r},"搜索"),w.a.createElement(s.a,{className:"y-m-l-10",onClick:u,loading:o},"重置"))))}var n=a(604),r=(a.n(n),a(603)),i=a.n(r),o=a(134),l=(a.n(o),a(92)),s=a.n(l),c=a(600),u=(a.n(c),a(599)),d=a.n(u),p=a(1),m=a.n(p),f=a(598),h=(a.n(f),a(601)),g=a.n(h),b=a(606),v=(a.n(b),a(605)),y=a.n(v),E=a(0),w=a.n(E),k=(a(12),a(855)),_=a.n(k);y.a.Option;Search=d.a.create({})(Search),t.a=Search},794:function(e,t,a){"use strict";function NewTable(e){var t=e.loading,a=e.dataSource,n=e.onConfirmDelete,r=e.toggleStatus,o=e.onEdit,l=[{key:"1",title:"编号",dataIndex:"serial_no",render:d.a},{key:"2",title:"微信群名称",dataIndex:"name",render:d.a},{key:"8",title:"二维码",dataIndex:"qr_code",render:function(e,t){return u.a.createElement("img",{src:e,style:{width:"60px",height:"60px"}})}},{key:"6",title:"状态",dataIndex:"status",render:function(e,t){return u.a.createElement("span",null,"1"==e?"显示":"隐藏")}},{key:"4",title:"位置",dataIndex:"page_name",render:d.a},{key:"5",title:"排序",dataIndex:"sort_order",render:d.a},{key:"7",title:"操作",dataIndex:"option",render:function(e,t){return u.a.createElement("span",null,u.a.createElement(s.a,{title:"确定要"+(1===Number(t.status)?"隐藏":"显示")+"吗?",onConfirm:function(){return r(t.id,1===Number(t.status)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},u.a.createElement("a",{className:"table-operating"},1===Number(t.status)?"隐藏":"显示")),u.a.createElement("a",{onClick:function(){return o(t.id)},className:"table-operating"},"编辑"),u.a.createElement(s.a,{title:"确定要删除吗?",onConfirm:function(){return n(t.id)},onCancel:!1,okText:"确定",cancelText:"取消"},u.a.createElement("a",{className:"table-operating"},"删除")))}}];return u.a.createElement(i.a,{className:"y-table",rowKey:function(e){return e.id},columns:l,bordered:!0,loading:t,dataSource:a,pagination:!1})}var n=a(627),r=(a.n(n),a(626)),i=a.n(r),o=a(629),l=(a.n(o),a(628)),s=a.n(l),c=a(0),u=a.n(c),d=a(607);t.a=NewTable},795:function(e,t,a){"use strict";function TableHeader(e){var t=e.loading,a=e.onClick;return l.a.createElement(i.a,{type:"primary",loading:t,onClick:a,style:{marginBottom:"20px"}},"新增微信群")}var n=a(134),r=(a.n(n),a(92)),i=a.n(r),o=a(0),l=a.n(o);t.a=TableHeader},838:function(e,t,a){t=e.exports=a(43)(!1),t.push([e.i,".form-3lfFu_ .ant-form-item{width:240px;margin-bottom:20px}",""]),t.locals={form:"form-3lfFu_"}},855:function(e,t,a){var n=a(838);"string"==typeof n&&(n=[[e.i,n,""]]);a(44)(n,{});n.locals&&(e.exports=n.locals)}});