webpackJsonp([10],{581:function(e,t,a){"use strict";function Information(e){var t=e.dispatch,n=e.information,r=e.app,l={breadcrumbs:[{name:"首页"},{name:"内容管理"},{name:"资讯管理"}]},o={selectChannels:r.selectChannels,buttonResetLoading:n.buttonResetLoading,buttonSearchLoading:n.buttonSearchLoading,onSearch:function(e){a.i(p.a)(function(){return t(a.i(E.g)(e))})},onReset:function(e){a.i(p.a)(function(){return t(a.i(E.h)(e))})}},u={loading:n.buttonAddLoading,onClick:function(){d.b.push("/information/add")}},m={dataSource:n.tableData,loading:n.tableLoading,onConfirmDelete:function(e){a.i(p.a)(function(){return t(a.i(E.i)(e))})},toggleStatus:function(e,n){a.i(p.a)(function(){return t(a.i(E.j)(e,n))})},onEdit:function(e){d.b.push("/information/edit"),t(a.i(E.k)(e))}},y={className:"y-card-pagination",showQuickJumper:!0,showTotal:function(e,t){return"共搜索到 "+n.tableTotals+" 条数据"},defaultCurrent:1,current:n.tableCurrent,defaultPageSize:10,total:n.tableTotals,onChange:function(e){t(a.i(E.l)({tableCurrent:e}))}};return c.a.createElement("div",null,c.a.createElement(f.a,l),c.a.createElement(g.a,o),c.a.createElement(i.a,{className:"y-m-b-40"},c.a.createElement(b.a,u),c.a.createElement(h.a,m),c.a.createElement(s.a,y)))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(604),r=(a.n(n),a(603)),i=a.n(r),l=a(633),o=(a.n(l),a(632)),s=a.n(o),u=a(0),c=a.n(u),m=a(136),p=a(248),d=a(31),f=(a(12),a(602)),h=a(750),g=(a(748),a(749)),b=a(751),E=a(137);t.default=a.i(m.a)(function(e){return{information:e.information,app:e.app}})(Information)},602:function(e,t,a){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return o.a.createElement(i.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return o.a.createElement(i.a.Item,{key:t},u.a.isStringNotEmpty(e.href)?o.a.createElement(s.Link,{to:e.href},e.name):e.name)}))}var n=a(609),r=(a.n(n),a(608)),i=a.n(r),l=a(0),o=a.n(l),s=a(75),u=a(12);t.a=newBreadcrumb},607:function(e,t,a){"use strict";var n=a(12);a.d(t,"a",function(){return r}),a.d(t,"d",function(){return i}),a.d(t,"e",function(){return l}),a.d(t,"c",function(){return o}),a.d(t,"b",function(){return s});var r=function(e){return n.a.isStringEmpty(e)?"--":e},i=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.status)?"显示":"隐藏"},l=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"频道":"链接"},o=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"视频":"图文"},s=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.is_reco)?"已推荐":"未推荐"}},748:function(e,t,a){"use strict";var n=a(247),r=(a.n(n),a(246)),i=a.n(r),l=a(621),o=(a.n(l),a(620)),s=a.n(o),u=a(613),c=(a.n(u),a(612)),m=a.n(c),p=a(617),d=(a.n(p),a(616)),f=a.n(d),h=a(606),g=(a.n(h),a(605)),b=a.n(g),E=a(600),y=(a.n(E),a(599)),v=a.n(y),k=a(1),C=a.n(k),S=a(598),w=(a.n(S),a(601)),I=a.n(w),N=a(135),x=(a.n(N),a(45)),_=a.n(x),T=a(15),F=(a.n(T),a(14)),L=a.n(F),D=a(245),O=a.n(D),M=a(19),U=a.n(M),z=a(244),j=a.n(z),q=a(21),P=a.n(q),V=a(20),B=a.n(V),R=a(0),A=a.n(R),H=(a(137),function(e){function newModal(e){U()(this,newModal);var t=P()(this,(newModal.__proto__||O()(newModal)).call(this,e));return t.state={name:"",file:"",previewImage:"",previewVisible:"",isUpload:!0},t.props.img_url&&(t.state.isUpload=!1),t}return B()(newModal,e),j()(newModal,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFields(function(t,a){if(!t){var n=[];n=void 0!=a.img_url[0].response?a.img_url[0].response.data.imgPath+a.img_url[0].response.data.message:a.img_url[0].url;var r=e.props.id;[][0]=a.communitys,e.props.onOk({id:r,ad_size:a.ad_size,type:a.type,img_url:n,name:a.name,status:a.status},e.props.form.resetFields)}})}},{key:"handleCancel",value:function(){this.props.onCancel(),this.props.form.resetFields(),this.setState({isUpload:!0})}},{key:"handlePreview",value:function(e){this.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}},{key:"beforeUpload",value:function(e){var t="image/jpeg"===e.type,a="image/png"===e.type;if("image/jpg"!==e.type&&!t&&!a)return L.a.error("只能上传.jpeg,.jpg,.png图片"),!1;if(!(e.size/1024/1024<2))return L.a.error("请上传小于 2MB 的图片!"),!1;var n=(new Date).getTime(),r=e.type.split("/");this.setState({name:"jiazhuanghoutai/"+n+"."+r[1],files:e})}},{key:"normFile",value:function(e){return Array.isArray(e)?e:e&&e.fileList}},{key:"handImgChange",value:function(e){e.fileList.length?this.props.uploadImg(!1):this.props.uploadImg(!0),"error"==e.file.status&&L.a.error("很遗憾...这次上传失败了。")}},{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:18}},t=A.a.createElement("div",null,A.a.createElement(_.a,{type:"plus"}),A.a.createElement("div",{className:"ant-upload-text"},"选择图片"));return A.a.createElement(i.a,{title:this.props.title,visible:this.props.visible,confirmLoading:this.props.confirmLoading,okText:"确定",cancelText:"取消",onOk:this.handleSubmit.bind(this),onCancel:this.handleCancel.bind(this)},A.a.createElement(s.a,{tip:"获取数据中...",spinning:!!this.props.modalLoading&&this.props.modalLoading},A.a.createElement(v.a,null,A.a.createElement(v.a.Item,C()({label:"广告位名称"},e),this.props.form.getFieldDecorator("name",{initialValue:this.props.name,rules:[{required:!0,message:"请输入广告名称!"}]})(A.a.createElement(I.a,{placeholder:"请输入广告位名称"}))),A.a.createElement(v.a.Item,C()({label:"广告类型"},e),this.props.form.getFieldDecorator("type",{initialValue:this.props.type,rules:[{required:!0,message:"广告类型!"}]})(A.a.createElement(b.a,{placeholder:"请选择广告类型"},this.props.positionType.map(function(e,t){return A.a.createElement(b.a.Option,{key:t,value:e.key.toString()},e.value)})))),A.a.createElement(v.a.Item,C()({label:"广告位示例"},e),this.props.form.getFieldDecorator("img_url",{initialValue:this.props.img_url,rules:[{required:!0,message:"请上传广告位示例图片!"}],valuePropName:"fileList",normalize:this.normFile,onChange:this.handImgChange.bind(this)})(A.a.createElement(f.a,{action:"http://up.qiniu.com/",data:{token:this.props.uploadToken,key:this.state.name,file:this.state.files},onPreview:this.handlePreview.bind(this),listType:"picture-card",beforeUpload:this.beforeUpload.bind(this)},this.props.isUpload?t:null))),A.a.createElement(v.a.Item,C()({label:"广告位大小"},e),this.props.form.getFieldDecorator("ad_size",{initialValue:this.props.ad_size,rules:[{required:!0,message:"请输入广告位大小!"}]})(A.a.createElement(I.a,{placeholder:"请输入广告位大小"}))),A.a.createElement(v.a.Item,C()({},e,{label:"广告状态",required:!0}),this.props.form.getFieldDecorator("status",{rules:[{required:!0,message:"请选择状态"}],initialValue:this.props.status})(A.a.createElement(m.a.Group,null,A.a.createElement(m.a,{value:1},"显示"),A.a.createElement(m.a,{value:2},"隐藏")))))))}}]),newModal}(A.a.Component));H=v.a.create({})(H)},749:function(e,t,a){"use strict";function Search(e){var t=e.form,a=e.onSearch,n=e.onReset,r=(e.adBlowOptions,e.buttonSearchLoading),l=e.buttonResetLoading,o=(e.reset,e.selectChannels),u={labelCol:{span:9},wrapperCol:{span:15}},c=function(e){return t.validateFields(function(t,n){e.preventDefault(),t||a(n)})},p=function(){t.resetFields(),n({adNum:"",adName:"",adStatus:"",searchchannelid:""})};return k.a.createElement(i.a,{className:"y-m-b-20"},k.a.createElement(m.a,{layout:"inline",className:S.a.form},k.a.createElement(m.a.Item,d()({label:"资讯编号"},u),t.getFieldDecorator("adNum")(k.a.createElement(g.a,{type:"text",placeholder:"请输入资讯编号"}))),k.a.createElement(m.a.Item,d()({label:"资讯标题"},u),t.getFieldDecorator("adName")(k.a.createElement(g.a,{type:"text",placeholder:"请输入资讯标题"}))),k.a.createElement(m.a.Item,d()({label:"所属频道"},u),t.getFieldDecorator("searchchannelid")(k.a.createElement(y.a,{placeholder:"请选择"},k.a.createElement(y.a.Option,{value:""},"全部"),o.map(function(e,t){return k.a.createElement(y.a.Option,{key:t,value:String(e.channel_id)},e.channel_name)})))),k.a.createElement(m.a.Item,d()({label:"资讯状态"},u,{style:{width:"240px"}}),t.getFieldDecorator("adStatus")(k.a.createElement(y.a,{placeholder:"请选择"},k.a.createElement(y.a.Option,{value:""},"全部"),k.a.createElement(y.a.Option,{value:"1"},"显示"),k.a.createElement(y.a.Option,{value:"2"},"隐藏")))),k.a.createElement(m.a.Item,{wrapperCol:{span:15,offset:9}},k.a.createElement(s.a,{type:"primary",onClick:c,loading:r},"搜索"),k.a.createElement(s.a,{className:"y-m-l-10",onClick:p,loading:l},"重置"))))}var n=a(604),r=(a.n(n),a(603)),i=a.n(r),l=a(134),o=(a.n(l),a(92)),s=a.n(o),u=a(600),c=(a.n(u),a(599)),m=a.n(c),p=a(1),d=a.n(p),f=a(598),h=(a.n(f),a(601)),g=a.n(h),b=a(606),E=(a.n(b),a(605)),y=a.n(E),v=a(0),k=a.n(v),C=(a(12),a(844)),S=a.n(C);y.a.Option;Search=m.a.create({})(Search),t.a=Search},750:function(e,t,a){"use strict";function NewTable(e){var t=e.loading,a=e.dataSource,n=e.onConfirmDelete,r=e.toggleStatus,l=e.onEdit,o=[{key:"1",title:"资讯编号",dataIndex:"serial_no",render:m.a},{key:"2",title:"资讯标题",dataIndex:"name",render:m.a},{key:"3",title:"所属频道",dataIndex:"channels",render:function(e,t){return c.a.createElement("span",null,e.name)}},{key:"4",title:"所属栏目",dataIndex:"columns",render:function(e,t){return c.a.createElement("span",null,e.name)}},{key:"5",title:"排序",dataIndex:"sort_order",render:m.a},{key:"6",title:"状态",dataIndex:"status",render:function(e,t){return c.a.createElement("span",null,"1"==e?"显示":"隐藏")}},{key:"7",title:"操作",dataIndex:"option",render:function(e,t){return c.a.createElement("span",null,c.a.createElement(s.a,{title:"确定要"+(1===Number(t.status)?"隐藏":"显示")+"吗?",onConfirm:function(){return r(t.id,1===Number(t.status)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},c.a.createElement("a",{className:"table-operating"},1===Number(t.status)?"隐藏":"显示")),c.a.createElement("a",{onClick:function(){return l(t.id)},className:"table-operating"},"编辑"),c.a.createElement(s.a,{title:"确定要删除吗?",onConfirm:function(){return n(t.id)},onCancel:!1,okText:"确定",cancelText:"取消"},c.a.createElement("a",{className:"table-operating"},"删除")))}}];return c.a.createElement(i.a,{className:"y-table",rowKey:function(e){return e.id},columns:o,bordered:!0,loading:t,dataSource:a,pagination:!1})}var n=a(627),r=(a.n(n),a(626)),i=a.n(r),l=a(629),o=(a.n(l),a(628)),s=a.n(o),u=a(0),c=a.n(u),m=a(607);t.a=NewTable},751:function(e,t,a){"use strict";function TableHeader(e){var t=e.loading,a=e.onClick;return o.a.createElement(i.a,{type:"primary",loading:t,onClick:a,style:{marginBottom:"20px"}},"新增资讯")}var n=a(134),r=(a.n(n),a(92)),i=a.n(r),l=a(0),o=a.n(l);t.a=TableHeader},825:function(e,t,a){t=e.exports=a(43)(!1),t.push([e.i,".form-3mU7u2 .ant-form-item{width:240px;margin-bottom:20px}",""]),t.locals={form:"form-3mU7u2"}},844:function(e,t,a){var n=a(825);"string"==typeof n&&(n=[[e.i,n,""]]);a(44)(n,{});n.locals&&(e.exports=n.locals)}});