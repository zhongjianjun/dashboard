webpackJsonp([9],{583:function(e,t,a){"use strict";function Link(e){var t=e.dispatch,n=e.link;console.log("linkProps: ",n);var r={breadcrumbs:[{name:"首页"},{name:"页面管理"},{name:"友情链接管理"}]},o={buttonResetLoading:n.buttonResetLoading,buttonSearchLoading:n.buttonSearchLoading,onSearch:function(e){a.i(h.a)(function(){return t(a.i(w.a)(e))})},onReset:function(e){a.i(h.a)(function(){return t(a.i(w.b)(e))})}},l={loading:n.buttonAddLoading,onClick:function(){t(a.i(w.c)())}},u={dataSource:n.tableData,loading:n.tableLoading,onConfirmDelete:function(e){a.i(h.a)(function(){return t(a.i(w.d)(e))})},toggleStatus:function(e,n){a.i(h.a)(function(){return t(a.i(w.e)(e,n))})},onEdit:function(e){t(a.i(w.f)(e))}},m={className:"y-card-pagination",showQuickJumper:!0,showTotal:function(e,t){return"共搜索到 "+n.tableTotals+" 条数据"},defaultCurrent:1,current:n.tableCurrent,defaultPageSize:10,total:n.tableTotals,onChange:function(e){t(a.i(w.g)({tableCurrent:e}))}},d={title:"新增友情链接",visible:n.modalAddVisible,confirmLoading:n.modalAddConfirmLoading,positionType:n.positionType,type:n.type,status:n.status,uploadToken:n.uploadToken,isUpload:n.isUpload,imgShow:n.imgShow,onOk:function(e,n){var r=this;return p()(c.a.mark(function _callee(){return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(h.a)(function(){return t(a.i(w.h)(e))});case 2:n();case 3:case"end":return r.stop()}},_callee,r)}))()},onCancel:function(){t(a.i(w.i)())},uploadImg:function(e){t(a.i(w.j)(e))},showchange:function(e){var r="";r=""==n.image||void 0==n.image,t(a.i(w.k)(e,r))}},g={title:"编辑友情链接",visible:n.modalEditVisible,modalLoading:n.modalLoading,confirmLoading:n.modalEditConfirmLoading,image:n.image,link_url:n.link_url,name:n.name,type:n.type,status:n.status,sort_order:n.sort_order,positionType:n.positionType,uploadToken:n.uploadToken,isUpload:n.isUpload,imgShow:n.imgShow,id:n.id,onOk:function(e,n){var r=this;return p()(c.a.mark(function _callee2(){return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(h.a)(function(){return t(a.i(w.l)(e))});case 2:n();case 3:case"end":return r.stop()}},_callee2,r)}))()},onCancel:function(){t(a.i(w.i)())},uploadImg:function(e){t(a.i(w.j)(e))},showchange:function(e){var r="";r=""==n.image||void 0==n.image,t(a.i(w.k)(e,r))}};return f.a.createElement("div",null,f.a.createElement(b.a,r),f.a.createElement(E.a,o),f.a.createElement(i.a,{className:"y-m-b-40"},f.a.createElement(k.a,l),f.a.createElement(v.a,u),f.a.createElement(s.a,m)),f.a.createElement(y.a,d),f.a.createElement(y.a,g))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(604),r=(a.n(n),a(603)),i=a.n(r),o=a(633),l=(a.n(o),a(632)),s=a.n(l),u=a(8),c=a.n(u),m=a(7),p=a.n(m),d=a(0),f=a.n(d),g=a(136),h=a(248),b=(a(12),a(602)),v=a(758),y=a(756),E=a(757),k=a(759),w=a(146);t.default=a.i(g.a)(function(e){return{link:e.link}})(Link)},602:function(e,t,a){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return l.a.createElement(i.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return l.a.createElement(i.a.Item,{key:t},u.a.isStringNotEmpty(e.href)?l.a.createElement(s.Link,{to:e.href},e.name):e.name)}))}var n=a(609),r=(a.n(n),a(608)),i=a.n(r),o=a(0),l=a.n(o),s=a(75),u=a(12);t.a=newBreadcrumb},607:function(e,t,a){"use strict";var n=a(12);a.d(t,"a",function(){return r}),a.d(t,"d",function(){return i}),a.d(t,"e",function(){return o}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return s});var r=function(e){return n.a.isStringEmpty(e)?"--":e},i=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.status)?"显示":"隐藏"},o=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"频道":"链接"},l=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"视频":"图文"},s=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.is_reco)?"已推荐":"未推荐"}},756:function(e,t,a){"use strict";var n=a(247),r=(a.n(n),a(246)),i=a.n(r),o=a(621),l=(a.n(o),a(620)),s=a.n(l),u=a(617),c=(a.n(u),a(616)),m=a.n(c),p=a(598),d=(a.n(p),a(601)),f=a.n(d),g=a(600),h=(a.n(g),a(599)),b=a.n(h),v=a(1),y=a.n(v),E=a(613),k=(a.n(E),a(612)),w=a.n(k),C=a(135),S=(a.n(C),a(45)),_=a.n(S),I=a(15),x=(a.n(I),a(14)),L=a.n(x),T=a(245),N=a.n(T),z=a(19),F=a.n(z),U=a(244),D=a.n(U),q=a(21),M=a.n(q),V=a(20),j=a.n(V),P=a(0),O=a.n(P),B=(a(146),function(e){function newModal(e){F()(this,newModal);var t=M()(this,(newModal.__proto__||N()(newModal)).call(this,e));return t.state={name:"",file:"",previewImage:"",previewVisible:"",isUpload:!0},t.props.img_url&&(t.state.isUpload=!1),console.log(t.props.type),t}return j()(newModal,e),D()(newModal,[{key:"componentDidMount",value:function(){console.log("isUpload",this.state.isUpload)}},{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFields(function(t,a){if(!t){var n;void 0!=a.image&&void 0!=a.image[0].response?n=a.image[0].response.data.imgPath+a.image[0].response.data.message:void 0!=a.image&&(n=a.image[0].url);var r=e.props.id;[][0]=a.communitys,e.props.onOk({id:r,link_url:a.link_url,type:a.type,image:n,name:a.name,status:a.status,sort_order:a.sort_order},e.props.form.resetFields)}})}},{key:"handleCancel",value:function(){this.props.onCancel(),this.props.form.resetFields(),this.setState({isUpload:!0})}},{key:"handlePreview",value:function(e){this.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}},{key:"beforeUpload",value:function(e){var t="image/jpeg"===e.type,a="image/png"===e.type;if("image/jpg"!==e.type&&!t&&!a)return L.a.error("只能上传.jpeg,.jpg,.png图片"),!1;if(!(e.size/1024/1024<2))return L.a.error("请上传小于 2MB 的图片!"),!1;var n=(new Date).getTime(),r=e.type.split("/");this.setState({name:"jiazhuanghoutai/"+n+"."+r[1],files:e})}},{key:"normFile",value:function(e){return Array.isArray(e)?e:e&&e.fileList}},{key:"handImgChange",value:function(e){e.fileList.length?this.props.uploadImg(!1):this.props.uploadImg(!0),"error"==e.file.status&&L.a.error("很遗憾...这次上传失败了。")}},{key:"typeChange",value:function(e){1==e.target.value?this.props.showchange(!1):this.props.showchange(!0)}},{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:18}},t=O.a.createElement("div",null,O.a.createElement(_.a,{type:"plus"}),O.a.createElement("div",{className:"ant-upload-text"},"选择图片"));return O.a.createElement(i.a,{title:this.props.title,visible:this.props.visible,confirmLoading:this.props.confirmLoading,okText:"确定",cancelText:"取消",onOk:this.handleSubmit.bind(this),onCancel:this.handleCancel.bind(this)},O.a.createElement(s.a,{tip:"获取数据中...",spinning:!!this.props.modalLoading&&this.props.modalLoading},O.a.createElement(b.a,null,O.a.createElement(b.a.Item,y()({},e,{label:"链接类型",required:!0}),this.props.form.getFieldDecorator("type",{rules:[{required:!0,message:"请选择链接类型"}],initialValue:this.props.type})(O.a.createElement(w.a.Group,{onChange:this.typeChange.bind(this)},O.a.createElement(w.a,{value:"1"},"文字"),O.a.createElement(w.a,{value:"2"},"图片")))),O.a.createElement(b.a.Item,y()({label:"链接名称"},e),this.props.form.getFieldDecorator("name",{initialValue:this.props.name,rules:[{required:!0,message:"请输入链接名称!"}]})(O.a.createElement(f.a,{placeholder:"请输入链接名称"}))),this.props.imgShow?O.a.createElement(b.a.Item,y()({label:"链接图片"},e),this.props.form.getFieldDecorator("image",{initialValue:this.props.image,rules:[{required:!0,message:"请上传链接图片!"}],valuePropName:"fileList",normalize:this.normFile,onChange:this.handImgChange.bind(this)})(O.a.createElement(m.a,{action:"http://up.qiniu.com/",data:{token:this.props.uploadToken,key:this.state.name,file:this.state.files},onPreview:this.handlePreview.bind(this),listType:"picture-card",beforeUpload:this.beforeUpload.bind(this)},this.props.isUpload?t:null))):"",O.a.createElement(b.a.Item,y()({label:"链接地址"},e),this.props.form.getFieldDecorator("link_url",{initialValue:this.props.link_url,rules:[{required:!0,type:"string",pattern:/^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/,message:"请输入正确链接地址!"}]})(O.a.createElement(f.a,{placeholder:"请输入链接地址"}))),O.a.createElement(b.a.Item,y()({label:"排序"},e),this.props.form.getFieldDecorator("sort_order",{initialValue:this.props.sort_order,rules:[{required:!0,pattern:/^[0-9]*[1-9][0-9]*$/,message:"请输入正确排序!"}]})(O.a.createElement(f.a,{placeholder:"请输入排序"}))),O.a.createElement(b.a.Item,y()({},e,{label:"链接状态",required:!0}),this.props.form.getFieldDecorator("status",{rules:[{required:!0,message:"请选择状态"}],initialValue:this.props.status})(O.a.createElement(w.a.Group,null,O.a.createElement(w.a,{value:"1"},"显示"),O.a.createElement(w.a,{value:"2"},"隐藏")))))))}}]),newModal}(O.a.Component));B=b.a.create({})(B),t.a=B},757:function(e,t,a){"use strict";function Search(e){var t=e.form,a=e.onSearch,n=e.onReset,r=(e.adBlowOptions,e.buttonSearchLoading),o=e.buttonResetLoading,l=(e.reset,{labelCol:{span:9},wrapperCol:{span:15}}),u=function(e){return t.validateFields(function(t,n){e.preventDefault(),t||(console.log("Received values of form: ",n),a(n))})},c=function(){t.resetFields(),n({adName:"",tableCurrent:1,tablePageSize:10})};return k.a.createElement(i.a,{className:"y-m-b-20"},k.a.createElement(m.a,{layout:"inline",className:C.a.form},k.a.createElement(m.a.Item,d()({label:"友情链接名称"},l),t.getFieldDecorator("adName")(k.a.createElement(h.a,{type:"text",placeholder:"请输入友情链接名称"}))),k.a.createElement(m.a.Item,{wrapperCol:{span:15,offset:9}},k.a.createElement(s.a,{type:"primary",onClick:u,loading:r},"搜索"),k.a.createElement(s.a,{className:"y-m-l-10",onClick:c,loading:o},"重置"))))}var n=a(604),r=(a.n(n),a(603)),i=a.n(r),o=a(134),l=(a.n(o),a(92)),s=a.n(l),u=a(600),c=(a.n(u),a(599)),m=a.n(c),p=a(1),d=a.n(p),f=a(598),g=(a.n(f),a(601)),h=a.n(g),b=a(606),v=(a.n(b),a(605)),y=a.n(v),E=a(0),k=a.n(E),w=(a(12),a(847)),C=a.n(w);y.a.Option;Search=m.a.create({})(Search),t.a=Search},758:function(e,t,a){"use strict";function NewTable(e){var t=e.loading,a=e.dataSource,n=e.onConfirmDelete,r=e.toggleStatus,o=e.onEdit,l=[{key:"1",title:"编号",dataIndex:"serial_no",render:m.a},{key:"2",title:"友情链接名称",dataIndex:"name",render:m.a},{key:"3",title:"链接类型",dataIndex:"type_name",render:m.a},{key:"4",title:"链接地址",dataIndex:"link_url",render:m.a},{key:"6",title:"广告位状态",dataIndex:"status",render:function(e,t){return c.a.createElement("span",null,"1"==e?"显示":"隐藏")}},{key:"5",title:"排序",dataIndex:"sort_order",render:m.a},{key:"7",title:"操作",dataIndex:"option",render:function(e,t){return c.a.createElement("span",null,c.a.createElement(s.a,{title:"确定要"+(1===Number(t.status)?"隐藏":"显示")+"吗?",onConfirm:function(){return r(t.id,1===Number(t.status)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},c.a.createElement("a",{className:"table-operating"},1===Number(t.status)?"隐藏":"显示")),c.a.createElement("a",{onClick:function(){return o(t.id)},className:"table-operating"},"编辑"),c.a.createElement(s.a,{title:"确定要删除吗?",onConfirm:function(){return n(t.id)},onCancel:!1,okText:"确定",cancelText:"取消"},c.a.createElement("a",{className:"table-operating"},"删除")))}}];return c.a.createElement(i.a,{className:"y-table",rowKey:function(e){return e.id},columns:l,bordered:!0,loading:t,dataSource:a,pagination:!1})}var n=a(627),r=(a.n(n),a(626)),i=a.n(r),o=a(629),l=(a.n(o),a(628)),s=a.n(l),u=a(0),c=a.n(u),m=a(607);t.a=NewTable},759:function(e,t,a){"use strict";function TableHeader(e){var t=e.loading,a=e.onClick;return l.a.createElement(i.a,{type:"primary",loading:t,onClick:a,style:{marginBottom:"20px"}},"新增友情链接")}var n=a(134),r=(a.n(n),a(92)),i=a.n(r),o=a(0),l=a.n(o);t.a=TableHeader},828:function(e,t,a){t=e.exports=a(43)(!1),t.push([e.i,".form-gqIwza .ant-form-item{width:240px;margin-bottom:20px}",""]),t.locals={form:"form-gqIwza"}},847:function(e,t,a){var n=a(828);"string"==typeof n&&(n=[[e.i,n,""]]);a(44)(n,{});n.locals&&(e.exports=n.locals)}});