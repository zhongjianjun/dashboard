webpackJsonp([5],{586:function(e,t,a){"use strict";function LiveEdit(e){var t=e.dispatch,n=e.live,r=e.app;console.log("LiveProps: ",n);var o={breadcrumbs:[{name:"页面管理"},{name:"直播管理"},{name:"编辑"}]},m={uploadToken:r.uploadToken,selectChannels:r.selectChannels,selectColumns:r.selectColumns,selectLabels:r.selectLabels,formId:n.formId,formChannel:n.formChannel,formColumn:n.formColumn,formLabel:n.formLabel,formAreas:n.formAreas,formHomes:n.formHomes,formTypes:n.formTypes,formSteps:n.formSteps,formTitle:n.formEditTitle,formMainImage:n.formEditMainImage,formCommunityName:n.formEditCommunityName,formAnnouncer:n.formEditAnnouncer,formDesignImage:n.formEditDesignImage,formImages:n.formEditImages,formSort:n.formEditSort,formStep:n.formEditStep,formArea:n.formEditArea,formHome:n.formEditHome,formType:n.formEditType,formIsDone:n.formEditIsDone,formIsHomepage:n.formEditIsHomepage,formVideoView:n.formEditVideoView,formVideoIntroduction:n.formEditVideoIntroduction,formVideoUrl:n.formEditVideoUrl,buttonOkLoading:n.formEditButtonSubmitLoading,buttonCancelLoading:n.buttonResetLoading,onOk:function(e){a.i(s.a)(function(){return t(a.i(p.b)(e))})},onCancel:function(e){a.i(s.a)(function(){return t(a.i(p.c)(e))})},changeSelectChannels:function(e){t(a.i(p.d)(e))},changeSelectColumns:function(e){t(a.i(d.c)(e))},changeFormType:function(e){},changeFormStep:function(e){t(a.i(p.e)(e))}};return i.a.createElement("div",null,i.a.createElement(c.a,o),i.a.createElement(l.a,{className:"y-m-b-40"},i.a.createElement(u.a,m)))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(604),r=(a.n(n),a(603)),l=a.n(r),o=a(0),i=a.n(o),m=a(136),s=a(248),c=(a(12),a(602)),u=a(645),p=a(138),d=a(33);t.default=a.i(m.a)(function(e){return{app:e.app,live:e.live}})(LiveEdit)},602:function(e,t,a){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return i.a.createElement(l.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return i.a.createElement(l.a.Item,{key:t},s.a.isStringNotEmpty(e.href)?i.a.createElement(m.Link,{to:e.href},e.name):e.name)}))}var n=a(609),r=(a.n(n),a(608)),l=a.n(r),o=a(0),i=a.n(o),m=a(75),s=a(12);t.a=newBreadcrumb},611:function(e,t,a){"use strict";var n=a(247),r=(a.n(n),a(246)),l=a.n(r),o=a(617),i=(a.n(o),a(616)),m=a.n(i),s=a(135),c=(a.n(s),a(45)),u=a.n(c),p=a(15),d=(a.n(p),a(14)),f=a.n(d),g=a(245),h=a.n(g),E=a(19),v=a.n(E),y=a(244),I=a.n(y),b=a(21),V=a.n(b),F=a(20),C=a.n(F),k=a(0),S=a.n(k),D=a(31),w=(a(138),a(12)),L=function(e){function PicturesWall(e){v()(this,PicturesWall);var t=V()(this,(PicturesWall.__proto__||h()(PicturesWall)).call(this,e));return t.handleCancel=function(){return t.setState({previewVisible:!1})},t.handlePreview=function(e){t.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},t.handleChange=function(e){var a=e.fileList,n=[];t.setState({fileList:a});for(var r=0;r<e.fileList.length;r++)if("done"===e.fileList[r].status&&w.a.isStringNotEmpty(e.fileList[r].url))n.push(e.fileList[r].url);else if("done"===e.fileList[r].status&&e.fileList[r].response){var l=e.fileList[r].response.data;n.push(l.imgPath+l.message)}console.log("urls",e,n),t.props.onChange(n)},t.beforeUpload=t.beforeUpload.bind(t),t.handleCancel=t.handleCancel.bind(t),t.handleChange=t.handleChange.bind(t),t.handlePreview=t.handlePreview.bind(t),t.state={previewVisible:!1,previewImage:"",fileList:t.getFileList(t.props.value)},t}return C()(PicturesWall,e),I()(PicturesWall,[{key:"getFileList",value:function(e){return Array.isArray(e)?e.map(function(e,t){return{uid:-t-1,status:"done",url:e}}):[]}},{key:"getInitialState",value:function(){}},{key:"componentWillMount",value:function(){console.log("componentWillMount",this.props)}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.props.value&&e.value&&e.value.length&&this.props.value!==e.value&&this.setState({fileList:this.getFileList(e.value)})}},{key:"componentWillUnmount",value:function(){}},{key:"beforeUpload",value:function(e,t){console.log("beforeUpload",e,t);var a="image/jpeg"===e.type,n="image/png"===e.type,r="image/jpg"===e.type,l=(new Date).getTime(),o=e.type.split("/");return r||a||n?e.size/1024/1024<2?void this.setState({name:"jiazhuanghoutai/"+(this.props.id?this.props.id:"")+"-"+l+"."+o[1],files:e}):(f.a.error("请上传小于 2MB 的图片!"),!1):(f.a.error("只能上传.jpeg,.jpg,.png图片"),!1)}},{key:"render",value:function(){var e=this.state,t=e.previewVisible,a=e.previewImage,n=e.fileList,r=this.props.max?this.props.max:1,o=!!n&&n.length>=r,i=S.a.createElement("div",null,S.a.createElement(u.a,{type:"upload"}),S.a.createElement("div",{className:"ant-upload-text"},"点击上传"));return S.a.createElement("div",{className:"clearfix",style:{minHeight:"104px"}},S.a.createElement(m.a,{action:"http://up.qiniu.com/",data:{token:D.a.getState().app.uploadToken,key:this.state.name,file:this.state.files},listType:"picture-card",fileList:n,beforeUpload:this.beforeUpload,onPreview:this.handlePreview,onChange:this.handleChange,onRemove:this.handleRemove,valuePropName:"fileList",accept:"image/jpeg,image/png,image/jpg,image/gif"},o?null:i),S.a.createElement(l.a,{visible:t,footer:null,onCancel:this.handleCancel},S.a.createElement("img",{alt:"example",style:{width:"100%"},src:a})))}}]),PicturesWall}(S.a.Component);t.a=L},631:function(e,t,a){var n=a(650);"string"==typeof n&&(n=[[e.i,n,""]]);a(44)(n,{});n.locals&&(e.exports=n.locals)},635:function(e,t,a){"use strict";var n=a(134),r=(a.n(n),a(92)),l=a.n(r),o=a(639),i=(a.n(o),a(637)),m=a.n(i),s=a(135),c=(a.n(s),a(45)),u=a.n(c),p=a(598),d=(a.n(p),a(601)),f=a.n(d),g=a(600),h=(a.n(g),a(599)),E=a.n(h),v=a(1),y=a.n(v),I=a(245),b=a.n(I),V=a(19),F=a.n(V),C=a(244),k=a.n(C),S=a(21),D=a.n(S),w=a(20),L=a.n(w),x=a(0),W=a.n(x),_=(a(12),a(611)),T=a(631),P=a.n(T),U=1,A={labelCol:{span:6},wrapperCol:{span:16},style:{maxWidth:"800px"}},q=function(e){function FormStep(e){F()(this,FormStep);var t=D()(this,(FormStep.__proto__||b()(FormStep)).call(this,e));return t.handleAddImage=function(){U++;var e=t.props.form.getFieldValue(t.props.step+"Keys"),a=e.concat(U);console.log(t.props.step,e,a),t.props.setFieldsValue(a)},t.handleRemoveImage=function(e){var a=t.props.form.getFieldValue(t.props.step+"Keys");t.props.setFieldsValue(a.filter(function(t){return t!==e}))},t.handleChangeImage=function(e){return e},t.handleAddImage=t.handleAddImage.bind(t),t.handleRemoveImage=t.handleRemoveImage.bind(t),t.handleChangeImage=t.handleChangeImage.bind(t),t.state={},e.form.getFieldDecorator(t.props.step+"Keys",{initialValue:[]}),t}return L()(FormStep,e),k()(FormStep,[{key:"setImages",value:function(e){e.images&&e.images.ext.forEach(function(t,a){U++;var n=e.form.getFieldValue(e.step+"Keys"),r=n.concat(U);e.setFieldsValue(r),e.form.getFieldDecorator(e.step+"ImageIntroduction"+U,{initialValue:t.intro}),e.form.getFieldDecorator(e.step+"ImageUpload"+U,{initialValue:t.image?[t.image]:[]}),console.warn("keys\n",n,"\nvalue:",t,t.intro,"\nother:",U,r)})}},{key:"componentDidMount",value:function(){console.log("FormStepComponentDidMount",this.props),this.setImages(this.props)}},{key:"componentWillUnmount",value:function(){console.log("PicturesWallComponentWillUnmount"),this.props.setFieldsValue([])}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldValue(this.props.step+"Keys"),a=t.map(function(t,a){return W.a.createElement("div",{key:a},W.a.createElement(E.a.Item,y()({label:"直播图片"},A,{key:t,required:!1}),e.props.form.getFieldDecorator(e.props.step+"ImageUpload"+t,{getValueFromEvent:e.handleChangeImage})(W.a.createElement(_.a,{onChange:e.handleChangeImage}))),W.a.createElement(E.a.Item,{label:"图片说明",labelCol:{span:6},wrapperCol:{span:16}},e.props.form.getFieldDecorator(e.props.step+"ImageIntroduction"+t,{})(W.a.createElement(f.a,{type:"text",placeholder:"请输入文字说明",style:{width:"80%",marginRight:8}})),W.a.createElement(u.a,{className:P.a.delete,type:"minus-circle-o",onClick:function(){return e.handleRemoveImage(t)}})))});return W.a.createElement("div",{style:this.props.style},W.a.createElement(E.a.Item,y()({label:this.props.title},A),this.props.form.getFieldDecorator(this.props.step,{initialValue:!0,rules:[{required:!0,message:"请选择类型!"}]})(W.a.createElement(m.a,{defaultChecked:!0,disabled:!0}))),W.a.createElement(E.a.Item,y()({label:"文字说明"},A),this.props.form.getFieldDecorator(this.props.step+"Introduction",{initialValue:this.props.images?this.props.images.intro:void 0})(W.a.createElement(f.a,{type:"textarea",placeholder:"请输入文字说明"}))),a,W.a.createElement(E.a.Item,{wrapperCol:{span:16,offset:6}},W.a.createElement(l.a,{type:"dashed",onClick:this.handleAddImage,style:{width:"60%"}},W.a.createElement(u.a,{type:"plus"})," 新增图片")),W.a.createElement("hr",{className:P.a.hr}))}}]),FormStep}(W.a.Component);t.a=q},645:function(e,t,a){"use strict";function newForm(e){var t=e.form,a=(e.children,e.buttonOkLoading),n=e.buttonCancelLoading,r=(e.uploadToken,e.selectChannels),o=e.selectColumns,i=e.selectLabels,s=(e.selectedChannel,e.selectedColumn,e.selectedLabels,e.onCancel),c=e.onOk,p=e.changeSelectChannels,d=(e.changeSelectColumns,e.changeFormType),g=e.changeFormStep,h=e.formChannel,v=e.formColumn,y=e.formLabel,b=e.formId,V=e.formTitle,C=e.formMainImage,S=e.formCommunityName,L=e.formAnnouncer,T=e.formDesignImage,P=e.formSort,U=e.formArea,A=e.formAreas,q=e.formHome,K=e.formHomes,M=e.formStep,N=(e.formSteps,e.formType),H=e.formTypes,O=e.formImages,j=e.formIsHomepage,R=e.formIsDone,B=e.formVideoView,z=e.formVideoIntroduction,X=e.formVideoUrl,G={labelCol:{span:6},wrapperCol:{span:16},style:{maxWidth:"800px"}},J={formItemLayout:G,form:t,formIsDone:R,formVideoUrl:X,formVideoView:B,formVideoIntroduction:z},Z={form:t,formImages:O,formStep:M,changeFormStep:g},Q=function(e){for(var t=[],a=1;a<6;a++)e["step"+a]&&t.push({type_id:a,live_img_id:function(e){return O[e]?O[e].live_img_id:""}(a-1),intro:e["step"+a+"Introduction"],ext:function(e,t){return e[t+"Keys"].map(function(a,n){return{intro:e[t+"ImageIntroduction"+a],image:function(){var n=e[t+"ImageUpload"+a];return n&&/\//g.test(n)?n[0]:""}()}})}(e,"step"+a)});return t},Y=function(e){return t.validateFields(function(a,n){e.preventDefault(),console.warn("handleOk: ",k()({},n,{formImages:Q(n),formMainImage:t.getFieldValue("formMainImage")[0]})),a||c(k()({},n,{formImages:Q(n),formMainImage:t.getFieldValue("formMainImage")[0]}))})},$=function(){t.resetFields(),s(k()({},t.getFieldsValue(),{formType:void 0}))},ee=function(e){p(e)},te=function(e){},ae=function(e){e.preventDefault(),d(e.target.value)},ne=function(e){return e};return D.a.createElement(I.a,{layout:"horizontal",className:x.a.form},D.a.createElement(m.a,null,D.a.createElement(u.a,{span:10},D.a.createElement(I.a.Item,k()({},G,{label:"直播类型"}),t.getFieldDecorator("formType",{initialValue:N,rules:[{required:!0,message:"请选择直播类型!"}]})(D.a.createElement(F.a.Group,{onChange:ae},H.map(function(e,t){return D.a.createElement(F.a,{key:t,value:String(e.id),disabled:!!b},e.name)})))),D.a.createElement(I.a.Item,k()({label:"所属频道"},G),t.getFieldDecorator("formChannel",{initialValue:h,rules:[{required:!0,message:"请选择所属频道!"}]})(D.a.createElement(E.a,{placeholder:"请选择一个频道",onChange:ee},r.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.channel_id)},e.channel_name)})))),D.a.createElement(I.a.Item,k()({label:"所属栏目"},G),t.getFieldDecorator("formColumn",{initialValue:v})(D.a.createElement(E.a,{placeholder:"请选择所属栏目",onChange:te},o.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.column_id)},e.column_name)})))),D.a.createElement(I.a.Item,k()({label:"关联标签"},G),t.getFieldDecorator("formLabel",{initialValue:y})(D.a.createElement(E.a,{mode:"multiple",placeholder:"请选择关联标签"},i.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.id)},e.name)})))),D.a.createElement(I.a.Item,k()({label:"户型大小"},G),t.getFieldDecorator("formArea",{initialValue:U,rules:[{required:!0,message:"请选择户型大小!"}]})(D.a.createElement(E.a,{placeholder:"请选择户型大小"},A.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.id)},e.name)})))),D.a.createElement(I.a.Item,k()({label:"房屋户型"},G),t.getFieldDecorator("formHome",{initialValue:q,rules:[{required:!0,message:"请选择房屋户型!"}]})(D.a.createElement(E.a,{placeholder:"请先选择房屋户型"},K.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.id)},e.name)})))),D.a.createElement(I.a.Item,k()({},G,{label:"推荐到首页"}),t.getFieldDecorator("formIsHomepage",{initialValue:j,rules:[{required:!0,message:"请选择是否推荐到首页!"}]})(D.a.createElement(F.a.Group,null,D.a.createElement(F.a,{value:"1"},"是"),D.a.createElement(F.a,{value:"2"},"否")))),D.a.createElement(I.a.Item,k()({label:"设计图"},G),t.getFieldDecorator("formDesignImage",{initialValue:T,getValueFromEvent:ne,rules:[{required:!0,message:"请上传设计图!"}]})(D.a.createElement(w.a,{onChange:ne,max:20}))),D.a.createElement(I.a.Item,k()({label:"直播主图"},G),t.getFieldDecorator("formMainImage",{initialValue:C,getValueFromEvent:ne,rules:[{required:!0,message:"请上传直播主图!"}]})(D.a.createElement(w.a,{onChange:ne}))),D.a.createElement(I.a.Item,k()({label:"直播标题"},G),t.getFieldDecorator("formTitle",{initialValue:V,rules:[{required:!0,message:"请选择直播标题!"}]})(D.a.createElement(f.a,{type:"text",placeholder:"请输入直播标题"}))),D.a.createElement(I.a.Item,k()({label:"小区名称"},G),t.getFieldDecorator("formCommunityName",{initialValue:S})(D.a.createElement(f.a,{type:"text",placeholder:"请输入小区名称"}))),D.a.createElement(I.a.Item,k()({label:"发布者"},G),t.getFieldDecorator("formAnnouncer",{initialValue:L,rules:[{required:!0,message:"请输入发布者!"}]})(D.a.createElement(f.a,{type:"text",placeholder:"请输入发布者"}))),D.a.createElement(I.a.Item,k()({label:"排序"},G),t.getFieldDecorator("formSort",{initialValue:P,rules:[{required:!0,message:"请输入排序!"}]})(D.a.createElement(f.a,{type:"text",placeholder:"请输入排序"})))),"1"===N?D.a.createElement(W.a,J):null,"2"===N?D.a.createElement(_.a,Z):null),D.a.createElement(I.a.Item,{wrapperCol:{span:21,offset:3}},D.a.createElement(l.a,{type:"primary",onClick:Y,loading:a},"提交"),D.a.createElement(l.a,{className:"y-m-l-10",onClick:$,loading:n},"取消")))}var n=a(134),r=(a.n(n),a(92)),l=a.n(r),o=a(625),i=(a.n(o),a(619)),m=a.n(i),s=a(615),c=(a.n(s),a(614)),u=a.n(c),p=a(598),d=(a.n(p),a(601)),f=a.n(d),g=a(606),h=(a.n(g),a(605)),E=a.n(h),v=a(600),y=(a.n(v),a(599)),I=a.n(y),b=a(613),V=(a.n(b),a(612)),F=a.n(V),C=a(1),k=a.n(C),S=a(0),D=a.n(S),w=(a(12),a(611)),L=a(631),x=a.n(L),W=(a(635),a(647)),_=a(646);newForm=I.a.create({})(newForm),t.a=newForm},646:function(e,t,a){"use strict";function FormImage(e){var t=e.form,a=e.formStep,n=e.formImages,r=e.changeFormStep;console.log("FormImage",n);var o={form:t,step:"step1",title:"水电改造",images:n[0],style:{display:a>=1?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step1Keys:e})}},i={form:t,step:"step2",title:"厨卫墙砖",images:n[1],style:{display:a>=2?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step2Keys:e})}},s={form:t,step:"step3",title:"木工/油漆工",images:n[2],style:{display:a>=3?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step3Keys:e})}},u={form:t,step:"step4",title:"安装环节",images:n[3],style:{display:a>=4?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step4Keys:e})}},f={form:t,step:"step5",title:"验房环节",images:n[4],style:{display:5===a?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step5Keys:e})}},g=function(e){r(e?e/20:0)};return c.a.createElement(l.a,{span:14},c.a.createElement(m.a,{step:20,defaultValue:20*a,className:p.a.slider,onChange:g,marks:{0:"未开工",20:"水电改造",40:"厨卫墙砖",60:"木工/油漆工",80:"安装环节",100:"验房环节"}}),c.a.createElement(d.a,o),c.a.createElement(d.a,i),c.a.createElement(d.a,s),c.a.createElement(d.a,u),c.a.createElement(d.a,f))}var n=a(615),r=(a.n(n),a(614)),l=a.n(r),o=a(662),i=(a.n(o),a(661)),m=a.n(i),s=a(0),c=a.n(s),u=(a(12),a(611),a(631)),p=a.n(u),d=a(635);t.a=FormImage},647:function(e,t,a){"use strict";function FormVideo(e){var t=e.form,a=e.formItemLayout,n=e.formIsDone,r=e.formVideoUrl,o=e.formVideoView,i=e.formVideoIntroduction;return v.a.createElement(l.a,{span:14},v.a.createElement(u.a.Item,d()({label:"是否完工"},a),t.getFieldDecorator("formIsDone",{initialValue:n,rules:[{required:!0,message:"请选择是否完工!"}]})(v.a.createElement(h.a.Group,null,v.a.createElement(h.a,{value:"1"},"是"),v.a.createElement(h.a,{value:"2"},"否")))),v.a.createElement(u.a.Item,d()({label:"直播地址"},a),t.getFieldDecorator("formVideoUrl",{initialValue:r,rules:[{required:!0,message:"请选择直播地址!"}]})(v.a.createElement(m.a,{type:"text",placeholder:"请输入直播地址"}))),v.a.createElement(u.a.Item,d()({label:"浏览量"},a),t.getFieldDecorator("formVideoView",{initialValue:o,rules:[{required:!0,message:"请输入浏览量!"}]})(v.a.createElement(m.a,{type:"text",placeholder:"请输入浏览量"}))),v.a.createElement(u.a.Item,d()({label:"直播说明"},a),t.getFieldDecorator("formVideoIntroduction",{initialValue:i})(v.a.createElement(m.a,{type:"textarea",placeholder:"请输入直播说明"}))))}var n=a(615),r=(a.n(n),a(614)),l=a.n(r),o=a(598),i=(a.n(o),a(601)),m=a.n(i),s=a(600),c=(a.n(s),a(599)),u=a.n(c),p=a(1),d=a.n(p),f=a(613),g=(a.n(f),a(612)),h=a.n(g),E=a(0),v=a.n(E),y=(a(12),a(611),a(631));a.n(y),a(635);t.a=FormVideo},650:function(e,t,a){t=e.exports=a(43)(!1),t.push([e.i,".slider-sHb_Ba{margin-bottom:40px!important;margin-right:10%!important;margin-left:15%!important}.hr-16jbu4{margin-left:16%;margin-right:8%;margin-bottom:20px;border:1px solid #ccc}.delete-Kk8WXv{cursor:pointer;position:relative;top:4px;font-size:24px;color:#999;transition:all .3s}.delete-Kk8WXv:hover{color:#777}.delete-Kk8WXv[disabled]{cursor:not-allowed;opacity:.5}",""]),t.locals={form:"form-1a9Z-v",slider:"slider-sHb_Ba",hr:"hr-16jbu4",delete:"delete-Kk8WXv"}}});