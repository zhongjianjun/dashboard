webpackJsonp([15],{593:function(e,n,a){"use strict";function Navigation(e){var n=e.dispatch,t=e.app,r=e.navigation,i={breadcrumbs:[{name:"首页"},{name:"页面管理"},{name:"导航管理"}]},c={selectChannels:t.selectChannels,buttonResetLoading:r.buttonResetLoading,buttonSearchLoading:r.buttonSearchLoading,onSearch:function(e){a.i(p.a)(function(){return n(a.i(y.a)(e))})},onReset:function(e){console.log(e,111),a.i(p.a)(function(){return n(a.i(y.b)(e))})}},m={loading:r.buttonAddLoading,onClick:function(){n(a.i(y.c)())}},s={dataSource:r.tableData,loading:r.tableLoading,onConfirmDelete:function(e){a.i(p.a)(function(){return n(a.i(y.d)(e))})},toggleStatus:function(e,t){a.i(p.a)(function(){return n(a.i(y.e)(e,t))})},onEdit:function(e){n(a.i(y.f)(e))}},v=(r.tableCurrent,r.tableTotals,{title:"新增导航",selectChannels:t.selectChannels,visible:r.modalAddVisible,navTypes:r.navTypes,modalType:r.modalType,confirmLoading:r.modalAddConfirmLoading,onOk:function(e,t){var r=this;return u()(o.a.mark(function _callee(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(p.a)(function(){return n(a.i(y.h)(e))});case 2:t();case 3:case"end":return r.stop()}},_callee,r)}))()},onCancel:function(){n(a.i(y.i)())},onChange:function(e){n(a.i(y.j)(e))}}),C={title:"编辑导航",selectChannels:t.selectChannels,visible:r.modalEditVisible,navTypes:r.navTypes,confirmLoading:r.modalEditConfirmLoading,modalLoading:r.modalLoading,modalChannelId:r.modalChannelId,modalLinkUrl:r.modalLinkUrl,modalName:r.modalName,modalSort:r.modalSort,modalType:r.modalType,modalChannel:r.modalChannel,onOk:function(e,t){var r=this;return u()(o.a.mark(function _callee2(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(p.a)(function(){return n(a.i(y.k)(e))});case 2:t();case 3:case"end":return r.stop()}},_callee2,r)}))()},onCancel:function(){n(a.i(y.i)())},onChange:function(e){n(a.i(y.j)(e))}};return d.a.createElement("div",null,d.a.createElement(f.a,i),d.a.createElement(E.a,c),d.a.createElement(l.a,{className:"y-m-b-40"},d.a.createElement(h.a,m),d.a.createElement(g.a,s)),d.a.createElement(b.a,v),d.a.createElement(b.a,C))}Object.defineProperty(n,"__esModule",{value:!0});var t=a(606),r=(a.n(t),a(605)),l=a.n(r),i=a(7),o=a.n(i),c=a(6),u=a.n(c),m=a(0),d=a.n(m),s=a(135),f=(a(11),a(604)),p=a(246),g=(a(33),a(772)),b=a(770),E=a(771),h=a(773),y=a(149);n.default=a.i(s.a)(function(e){return{navigation:e.navigation,app:e.app}})(Navigation)},604:function(e,n,a){"use strict";function newBreadcrumb(e){var n=e.breadcrumbs;return o.a.createElement(l.a,{separator:">",style:{marginBottom:"20px"}},n.map(function(e,n){return o.a.createElement(l.a.Item,{key:n},u.a.isStringNotEmpty(e.href)?o.a.createElement(c.Link,{to:e.href},e.name):e.name)}))}var t=a(611),r=(a.n(t),a(610)),l=a.n(r),i=a(0),o=a.n(i),c=a(73),u=a(11);n.a=newBreadcrumb},609:function(e,n,a){"use strict";var t=a(11);a.d(n,"a",function(){return r}),a.d(n,"d",function(){return l}),a.d(n,"e",function(){return i}),a.d(n,"c",function(){return o}),a.d(n,"b",function(){return c});var r=function(e){return t.a.isStringEmpty(e)?"--":e},l=function(e,n){return t.a.isStringEmpty(e)?"--":1===Number(n.status)?"显示":"隐藏"},i=function(e,n){return t.a.isStringEmpty(e)?"--":1===Number(n.type)?"频道":"链接"},o=function(e,n){return t.a.isStringEmpty(e)?"--":1===Number(n.type)?"视频":"图文"},c=function(e,n){return t.a.isStringEmpty(e)?"--":1===Number(n.is_reco)?"已推荐":"未推荐"}},770:function(e,n,a){"use strict";function newModal(e){var n=e.form,a=e.visible,t=e.confirmLoading,r=e.onOk,i=e.onCancel,o=e.onChange,u=e.title,m=e.selectChannels,s=e.modalLoading,f=e.modalChannel,g=(e.modalChannelId,e.modalLinkUrl),E=e.modalName,h=e.modalSort,v=e.modalType,k=e.navTypes,S={labelCol:{span:6},wrapperCol:{span:14}},N=function(){n.validateFields(function(e,a){e||(console.log("Received values of form: ",a),r(a,n.resetFields))})},L=function(){i(),n.resetFields()},T=function(e){o(e)};return C.a.createElement(l.a,{title:u,visible:a,confirmLoading:t,okText:"确定",cancelText:"取消",onOk:N,onCancel:L},C.a.createElement(c.a,{tip:"获取数据中...",spinning:s||!1},C.a.createElement(p.a,null,C.a.createElement(p.a.Item,b()({label:"导航名称"},S),n.getFieldDecorator("modalName",{initialValue:E,rules:[{required:!0,message:"请输入导航名称!"}]})(C.a.createElement(y.a,{placeholder:"请输入导航名称"}))),C.a.createElement(p.a.Item,b()({label:"导航排序"},S),n.getFieldDecorator("modalSort",{initialValue:h,rules:[{required:!0,message:"请输入导航排序!"}]})(C.a.createElement(y.a,{placeholder:"请输入导航排序"}))),C.a.createElement(p.a.Item,b()({label:"导航类型"},S),n.getFieldDecorator("modalType",{initialValue:v,rules:[{required:!0,message:"请选择导航类型!"}]})(C.a.createElement(d.a,{placeholder:"请选择一个导航类型",onChange:T},k.length?k.map(function(e,n){return C.a.createElement(d.a.Option,{key:n,value:String(e.key)},e.value)}):"渲染中..."))),"2"===v?C.a.createElement(p.a.Item,b()({label:"链接地址"},S),n.getFieldDecorator("modalLinkUrl",{initialValue:g,rules:[{required:!0,message:"请输入链接地址!"}]})(C.a.createElement(y.a,{placeholder:"请输入链接地址"}))):C.a.createElement(p.a.Item,b()({label:"所属频道"},S),n.getFieldDecorator("modalChannel",{initialValue:f,rules:[{required:!0,message:"请选择所属频道!"}]})(C.a.createElement(d.a,{placeholder:"请选择一个频道"},m.map(function(e,n){return C.a.createElement(d.a.Option,{key:n,value:String(e.channel_id)},e.channel_name)})))))))}var t=a(245),r=(a.n(t),a(244)),l=a.n(r),i=a(622),o=(a.n(i),a(621)),c=a.n(o),u=a(608),m=(a.n(u),a(607)),d=a.n(m),s=a(602),f=(a.n(s),a(601)),p=a.n(f),g=a(1),b=a.n(g),E=a(600),h=(a.n(E),a(603)),y=a.n(h),v=a(0),C=a.n(v);a(11);newModal=p.a.create({})(newModal),n.a=newModal},771:function(e,n,a){"use strict";function Search(e){var n=e.form,a=e.onSearch,t=e.onReset,r=e.buttonSearchLoading,i=e.buttonResetLoading,o={labelCol:{span:9},wrapperCol:{span:15}},u=function(e){return n.validateFields(function(n,t){e.preventDefault(),n||a(t)})},m=function(){n.resetFields(),t({tableCurrent:1,tablePageSize:10,searchName:""})};return h.a.createElement(l.a,{className:"y-m-b-20"},h.a.createElement(d.a,{layout:"inline"},h.a.createElement(d.a.Item,f()({label:"导航名称"},o),n.getFieldDecorator("searchName")(h.a.createElement(b.a,{type:"text",placeholder:"请输入导航名称"}))),h.a.createElement(d.a.Item,null,h.a.createElement(c.a,{type:"primary",className:"y-m-l-10",onClick:u,loading:r},"搜索"),h.a.createElement(c.a,{className:"y-m-l-10",onClick:m,loading:i},"重置"))))}var t=a(606),r=(a.n(t),a(605)),l=a.n(r),i=a(133),o=(a.n(i),a(90)),c=a.n(o),u=a(602),m=(a.n(u),a(601)),d=a.n(m),s=a(1),f=a.n(s),p=a(600),g=(a.n(p),a(603)),b=a.n(g),E=a(0),h=a.n(E);a(11);Search=d.a.create({})(Search),n.a=Search},772:function(e,n,a){"use strict";function NewTable(e){var n=e.loading,a=e.dataSource,t=e.onConfirmDelete,r=e.toggleStatus,i=e.onEdit,o=[{key:"1",title:"编号",dataIndex:"serial_no",render:d.a},{key:"2",title:"导航名称",dataIndex:"name",render:d.a},{key:"3",title:"导航类型",dataIndex:"type",render:d.e},{key:"4",title:"状态",dataIndex:"status",render:d.d},{key:"5",title:"排序",dataIndex:"sort_order",render:d.a},{key:"6",title:"操作",dataIndex:"option",render:function(e,n){return m.a.createElement("span",null,m.a.createElement(c.a,{title:"确定要"+(1===Number(n.status)?"隐藏":"显示")+"吗?",onConfirm:function(){return r(n.id,1===Number(n.status)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},m.a.createElement("a",{className:"table-operating"},1===Number(n.status)?"隐藏":"显示")),m.a.createElement("a",{onClick:function(){return i(n.id)},className:"table-operating"},"编辑"),m.a.createElement(c.a,{title:"确定要删除吗?",onConfirm:function(){return t(n.id)},onCancel:!1,okText:"确定",cancelText:"取消"},m.a.createElement("a",{className:"table-operating"},"删除")))}}];return m.a.createElement(l.a,{className:"y-table",rowKey:function(e){return e.channel_id},columns:o,bordered:!0,loading:n,dataSource:a,pagination:!1})}var t=a(627),r=(a.n(t),a(626)),l=a.n(r),i=a(629),o=(a.n(i),a(628)),c=a.n(o),u=a(0),m=a.n(u),d=a(609);a(258);n.a=NewTable},773:function(e,n,a){"use strict";function TableHeader(e){var n=e.loading,a=e.onClick;return o.a.createElement(l.a,{type:"primary",loading:n,onClick:a,style:{marginBottom:"20px"}},"新增导航")}var t=a(133),r=(a.n(t),a(90)),l=a.n(r),i=a(0),o=a.n(i);n.a=TableHeader}});