webpackJsonp([19],{587:function(e,t,a){"use strict";function InformationAdd(e){var t=e.dispatch,n=e.log,i=e.app,l={breadcrumbs:[{name:"首页"},{name:"日志管理"},{name:"新增日志"}]},s={selectChannels:i.selectChannels,selectColumns:i.selectColumns,labellist:n.labellist,uploadToken:n.uploadToken,isUpload:n.isUpload,formSureButton:n.formSureButton,channel_id:n.channel_id,column_id:n.column_id,image:n.image,intro:n.intro,is_reco:n.is_reco,keywords:n.keywords,label_ids:n.label_ids,name:n.name,title:n.title,view_num:n.view_num,sort_order:n.sort_order,summary:n.summary,changeSelectChannels:function(e){t(a.i(c.d)(e)),t(a.i(h.a)(e)),a.i(m.a)(function(){return t(a.i(h.b)({channel_id:e,column_id:"0"}))})},changeSelectcolumn:function(e){console.log(e),a.i(m.a)(function(){return t(a.i(h.b)(e))})},uploadImg:function(e){t(a.i(h.c)(e))},onCancel:function(){u.b.push("/log")},onOk:function(e){a.i(m.a)(function(){return t(a.i(h.f)(e))})}};return o.a.createElement("div",null,o.a.createElement(p.a,l),o.a.createElement(r.a,{className:"y-m-b-40"},o.a.createElement(d.a,s)))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(604),i=(a.n(n),a(603)),r=a.n(i),l=a(0),o=a.n(l),s=a(136),m=a(248),c=(a(12),a(33)),p=a(602),u=a(31),d=a(648),h=a(139);t.default=a.i(s.a)(function(e){return{log:e.log,app:e.app}})(InformationAdd)},602:function(e,t,a){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return o.a.createElement(r.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return o.a.createElement(r.a.Item,{key:t},m.a.isStringNotEmpty(e.href)?o.a.createElement(s.Link,{to:e.href},e.name):e.name)}))}var n=a(609),i=(a.n(n),a(608)),r=a.n(i),l=a(0),o=a.n(l),s=a(75),m=a(12);t.a=newBreadcrumb},622:function(e,t,a){"use strict";var n=a(245),i=a.n(n),r=a(19),l=a.n(r),o=a(244),s=a.n(o),m=a(21),c=a.n(m),p=a(20),u=a.n(p),d=a(0),h=a.n(d),f=a(141),g=a(624),v=(a.n(g),a(4)),E=a(636),_=(a.n(E),void 0),b=function(e){function Editor(e){l()(this,Editor);var t=c()(this,(Editor.__proto__||i()(Editor)).call(this,e));return t.state={},t}return u()(Editor,e),s()(Editor,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;_=new wangEditor(t),_.config.menus=wangEditor.config.menus.map(function(e,t){return"video"===e?null:"location"===e?null:"insertcode"===e?null:e}),_.config.uploadImgUrl=a.i(v.b)()+"/property/image/upload",_.config.withCredentials=!1,_.create();var n=_;_.$txt.html(this.props.html),_.onchange=function(){var a=n.$txt.html();e.props.handleEditor(t,a)}}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=this.props.id,n=_;_.$txt.html(e.html),_.onchange=function(){var e=n.$txt.html();t.props.handleEditor(a,e)}}},{key:"render",value:function(){var e={width:"100%",height:"200px"};return h.a.createElement("div",null,h.a.createElement("div",{id:this.props.id,style:e,contentEditable:"true"}))}}]),Editor}(h.a.Component);t.a=a.i(f.connect)(function(e){return{editor:e.editor}})(b)},623:function(e,t,a){t=e.exports=a(43)(!1),t.push([e.i,"",""])},624:function(e,t,a){var n=a(623);"string"==typeof n&&(n=[[e.i,n,""]]);a(44)(n,{});n.locals&&(e.exports=n.locals)},648:function(e,t,a){"use strict";var n=a(134),i=(a.n(n),a(92)),r=a.n(i),l=a(613),o=(a.n(l),a(612)),s=a.n(o),m=a(247),c=(a.n(m),a(246)),p=a.n(c),u=a(617),d=(a.n(u),a(616)),h=a.n(d),f=a(598),g=(a.n(f),a(601)),v=a.n(g),E=a(600),_=(a.n(E),a(599)),b=a.n(_),y=a(1),k=a.n(y),w=a(135),C=(a.n(w),a(45)),I=a.n(C),F=a(606),S=(a.n(F),a(605)),D=a.n(S),V=a(15),x=(a.n(V),a(14)),A=a.n(x),U=a(245),q=a.n(U),P=a(19),B=a.n(P),j=a(244),L=a.n(j),O=a(21),$=a.n(O),T=a(20),M=a.n(T),N=a(0),z=a.n(N),R=(a(139),a(622)),W=[],G="",J=function(e){function InformationAdd(e){B()(this,InformationAdd);var t=$()(this,(InformationAdd.__proto__||q()(InformationAdd)).call(this,e));return t.state={name:"",file:"",previewImage:"",previewVisible:!1,isUpload:!0},t.props.img_url,G=t.props.intro,t}return M()(InformationAdd,e),L()(InformationAdd,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(e){var t=this;this.props.form.validateFields(function(a,n){if(e.preventDefault(),console.log(a,n),!a){var i="";0!=n.image.length&&(void 0!=n.image[0].response?i=n.image[0].response.data.imgPath+n.image[0].response.data.message:""!=n.image&&(i=n.image[0].url));var r=t.props.id,l="";if(G=G.replace(new RegExp("<p><br></p>"),""),l=G,""==G)return A.a.error("公告内容不能为空"),!1;t.props.onOk({log_id:r,image:i,channel_id:n.channel_id,column_id:n.column_id,intro:l,is_reco:n.is_reco,keywords:n.keywords,label_ids:n.label_ids,title:n.title,name:n.name,view_num:n.view_num,sort_order:n.sort_order,summary:n.summary},t.props.form.resetFields)}})}},{key:"handleCancel",value:function(){this.props.onCancel(),this.props.form.resetFields(),this.setState({isUpload:!0})}},{key:"handlePreview",value:function(e){this.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}},{key:"beforeUpload",value:function(e){var t="image/jpeg"===e.type,a="image/png"===e.type;if("image/jpg"!==e.type&&!t&&!a)return A.a.error("只能上传.jpeg,.jpg,.png图片"),!1;if(!(e.size/1024/1024<2))return A.a.error("请上传小于 2MB 的图片!"),!1;var n=(new Date).getTime(),i=e.type.split("/");this.setState({name:"jiazhuanghoutai/"+n+"."+i[1],files:e})}},{key:"modalCancel",value:function(){this.setState({previewVisible:!1})}},{key:"normFile",value:function(e){return Array.isArray(e)?e:e&&e.fileList}},{key:"handImgChange",value:function(e){e.fileList.length?this.props.uploadImg(!1):this.props.uploadImg(!0),"error"===e.file.status&&A.a.error("很遗憾...这次上传失败了。")}},{key:"handleChangeChannels",value:function(e){this.props.form.resetFields(["column_id","label_ids"]),this.props.changeSelectChannels(e)}},{key:"handleChangecolumn",value:function(e){var t=this.props.form.getFieldValue("channel_id");this.props.form.resetFields(["label_ids"]),this.props.changeSelectcolumn({channel_id:t,column_id:e})}},{key:"componentWillReceiveProps",value:function(e){this.props.intro!=e.intro&&(G=e.intro),W=[],e.labellist.map(function(e,t){return W.push(z.a.createElement(D.a.Option,{key:t,value:String(e.id)},e.name))})}},{key:"handleEditor",value:function(e,t){G=t}},{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:18}},t=z.a.createElement("div",null,z.a.createElement(I.a,{type:"plus"}),z.a.createElement("div",{className:"ant-upload-text"},"选择图片"));return z.a.createElement(b.a,null,z.a.createElement(b.a.Item,k()({label:"所属频道"},e),this.props.form.getFieldDecorator("channel_id",{initialValue:this.props.channel_id,rules:[{required:!0,message:"请选择所属频道!"}]})(z.a.createElement(D.a,{placeholder:"请选择",onChange:this.handleChangeChannels.bind(this)},this.props.selectChannels.map(function(e,t){return z.a.createElement(D.a.Option,{key:t,value:String(e.channel_id)},e.channel_name)})))),z.a.createElement(b.a.Item,k()({label:"所属栏目"},e),this.props.form.getFieldDecorator("column_id",{initialValue:this.props.column_id,rules:[{message:"请选择所属栏目!"}]})(z.a.createElement(D.a,{placeholder:"请先选择栏目",onChange:this.handleChangecolumn.bind(this)},this.props.selectColumns.map(function(e,t){return z.a.createElement(D.a.Option,{key:String(t),value:String(e.column_id)},e.column_name)})))),z.a.createElement(b.a.Item,k()({label:"关联标签"},e),this.props.form.getFieldDecorator("label_ids",{initialValue:this.props.label_ids})(z.a.createElement(D.a,{mode:"multiple",placeholder:"请先选择栏目"},W))),z.a.createElement(b.a.Item,k()({label:"日志标题"},e),this.props.form.getFieldDecorator("title",{initialValue:this.props.title,rules:[{required:!0,message:"请输入日志标题"}]})(z.a.createElement(v.a,{maxLength:20,placeholder:"请输入日志标题"}))),z.a.createElement(b.a.Item,k()({label:"发布者"},e),this.props.form.getFieldDecorator("name",{initialValue:this.props.name,rules:[{required:!0,message:"请输入发布者"}]})(z.a.createElement(v.a,{placeholder:"请输入发布者"}))),z.a.createElement(b.a.Item,k()({label:"日志主图"},e),this.props.form.getFieldDecorator("image",{initialValue:this.props.image,valuePropName:"fileList",normalize:this.normFile,onChange:this.handImgChange.bind(this),rules:[{required:!0,message:"请上传日志主图!"}]})(z.a.createElement(h.a,{action:"http://up.qiniu.com/",data:{token:this.props.uploadToken,key:this.state.name,file:this.state.files},onPreview:this.handlePreview.bind(this),listType:"picture-card",beforeUpload:this.beforeUpload.bind(this)},this.props.isUpload?t:null))),z.a.createElement(p.a,{visible:this.state.previewVisible,footer:null,onCancel:this.modalCancel.bind(this)},z.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),z.a.createElement(b.a.Item,k()({},e,{label:"日志内容",hasFeedback:!0,required:!0}),this.props.form.getFieldDecorator("editor1")(z.a.createElement(R.a,{html:G,handleEditor:this.handleEditor}))),z.a.createElement(b.a.Item,k()({label:"浏览量"},e),this.props.form.getFieldDecorator("view_num",{initialValue:this.props.view_num,rules:[{message:"请输入浏览量!",pattern:/^\d+$/}]})(z.a.createElement(v.a,{placeholder:"请输入浏览量"}))),z.a.createElement(b.a.Item,k()({label:"关键词"},e),this.props.form.getFieldDecorator("keywords",{initialValue:this.props.keywords,rules:[{message:"请输入关键词!"}]})(z.a.createElement(v.a,{placeholder:"请输入关键词"}))),z.a.createElement(b.a.Item,k()({},e,{label:"推荐到首页",required:!0}),this.props.form.getFieldDecorator("is_reco",{rules:[{required:!0,message:"请选择状态"}],initialValue:this.props.is_reco})(z.a.createElement(s.a.Group,null,z.a.createElement(s.a,{value:"1"},"是"),z.a.createElement(s.a,{value:"2"},"否")))),z.a.createElement(b.a.Item,k()({label:"排序"},e),this.props.form.getFieldDecorator("sort_order",{initialValue:this.props.sort_order,rules:[{required:!0,message:"请输入排序!",pattern:/^[0-9]*[1-9][0-9]*$/}]})(z.a.createElement(v.a,{placeholder:"请输入排序"}))),z.a.createElement(b.a.Item,{wrapperCol:{span:22,offset:3}},z.a.createElement(r.a,{type:"primary",onClick:this.handleSubmit.bind(this),loading:this.props.formSureButton},"提交"),z.a.createElement(r.a,{type:"ghost",style:{marginLeft:"30px"},onClick:this.handleCancel.bind(this)},"返回")))}}]),InformationAdd}(z.a.Component);J=b.a.create({})(J),t.a=J}});