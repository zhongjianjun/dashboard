webpackJsonp([22],{592:function(e,t,n){"use strict";function Component(e){var t=e.dispatch,a=e.props,r=e.app;console.log("PackageProps: ",a,r);var o={breadcrumbs:[{name:"首页"},{name:"内容管理"},{name:"套餐管理"}]},c={onClick:function(){l.b.push("/packages/add")}},b={dataSource:a.tableData,loading:a.tableLoading,toggleStatus:function(e,a){n.i(m.a)(function(){return t(n.i(p.b)(e,a))})},toggleRecommendation:function(e,a){n.i(m.a)(function(){return t(n.i(p.c)(e,a))})},onEdit:function(e){n.i(m.a)(function(){return t(n.i(p.k)(e))})},onPreview:function(e){n.i(m.a)(function(){return t(n.i(p.a)(e))})}};return u.a.createElement("div",null,u.a.createElement(s.a,o),u.a.createElement(i.a,{className:"y-m-b-40"},u.a.createElement(f.a,c),u.a.createElement(d.a,b)))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(604),r=(n.n(a),n(603)),i=n.n(r),o=n(0),u=n.n(o),c=n(136),l=n(31),s=(n(12),n(602)),m=n(248),d=n(786),f=n(787),p=n(147);t.default=n.i(c.a)(function(e){return{app:e.app,props:e.packages}})(Component)},602:function(e,t,n){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return u.a.createElement(i.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return u.a.createElement(i.a.Item,{key:t},l.a.isStringNotEmpty(e.href)?u.a.createElement(c.Link,{to:e.href},e.name):e.name)}))}var a=n(609),r=(n.n(a),n(608)),i=n.n(r),o=n(0),u=n.n(o),c=n(75),l=n(12);t.a=newBreadcrumb},607:function(e,t,n){"use strict";var a=n(12);n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return c});var r=function(e){return a.a.isStringEmpty(e)?"--":e},i=function(e,t){return a.a.isStringEmpty(e)?"--":1===Number(t.status)?"显示":"隐藏"},o=function(e,t){return a.a.isStringEmpty(e)?"--":1===Number(t.type)?"频道":"链接"},u=function(e,t){return a.a.isStringEmpty(e)?"--":1===Number(t.type)?"视频":"图文"},c=function(e,t){return a.a.isStringEmpty(e)?"--":1===Number(t.is_reco)?"已推荐":"未推荐"}},786:function(e,t,n){"use strict";function NewTable(e){var t=e.loading,n=e.dataSource,a=e.toggleRecommendation,r=e.toggleStatus,o=e.onEdit,u=e.onPreview,l=[{key:"sort_order",title:"套餐排序",dataIndex:"sort_order",render:d.a},{key:"name",title:"套餐名称",dataIndex:"name",render:d.a},{key:"is_reco",title:"是否推荐到首页",dataIndex:"is_reco",render:d.b},{key:"status",title:"状态",dataIndex:"status",render:function(e,t){return m.a.isStringEmpty(e)?"--":1===Number(t.status)?"上线":"下线"}},{key:"option",title:"操作",dataIndex:"option",render:function(e,t){return s.a.createElement("span",null,s.a.createElement("a",{onClick:function(){return u(t.id)},className:"table-operating"},"预览"),s.a.createElement("a",{onClick:function(){return o(t.id)},className:"table-operating"},"编辑"),s.a.createElement(c.a,{title:"确定要"+(1===Number(t.status)?"下线":"上线")+"吗?",onConfirm:function(){return r(t.id,1===Number(t.status)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},s.a.createElement("a",{className:"table-operating"},1===Number(t.status)?"下线":"上线")),s.a.createElement(c.a,{title:"确定要"+(1===Number(t.is_reco)?"取消推荐":"推荐首页")+"吗?",onConfirm:function(){return a(t.id,1===Number(t.is_reco)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},s.a.createElement("a",{className:"table-operating"},1===Number(t.is_reco)?"取消推荐":"推荐首页")))}}];return s.a.createElement(i.a,{className:"y-table",rowKey:function(e){return e.id},columns:l,bordered:!0,loading:t,dataSource:n,pagination:!1})}var a=n(627),r=(n.n(a),n(626)),i=n.n(r),o=n(629),u=(n.n(o),n(628)),c=n.n(u),l=n(0),s=n.n(l),m=n(12),d=n(607);t.a=NewTable},787:function(e,t,n){"use strict";function TableHeader(e){var t=e.loading,n=e.onClick;return u.a.createElement(i.a,{type:"primary",loading:t,onClick:n,style:{marginBottom:"20px"}},"新增套餐")}var a=n(134),r=(n.n(a),n(92)),i=n.n(r),o=n(0),u=n.n(o);t.a=TableHeader}});