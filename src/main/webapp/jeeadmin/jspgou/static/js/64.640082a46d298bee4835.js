webpackJsonp([64],{"2xNl":function(t,e,a){var n=a("oZaT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("6663170b",n,!0)},"5kTn":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"forum-module"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"table-top-bar clearfix"},[a("div",{staticClass:"query-inline-box flex-between"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.routerLink("/customerService/save","save",0)}}},[t._v("添加客服")])],1)]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.items,stripe:""},on:{"selection-change":t.checkIds}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:68}}),t._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"type",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"客服名称",prop:"name",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"客服账号",prop:"content",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"排列顺序",prop:"priority",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"w50",attrs:{type:"number",min:"0"},model:{value:e.row.priority,callback:function(a){t.$set(e.row,"priority",a)},expression:"scope.row.priority"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否禁用",prop:"disabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.disabled?a("span",{staticClass:"red"},[t._v("是")]):a("span",[t._v("否")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"t-edit",attrs:{title:"修改"},on:{click:function(a){t.routerLink("/customerService/update","update",e.row.id)}}}),t._v(" "),a("a",{staticClass:"t-del",attrs:{title:"删除"},on:{click:function(a){t.deleteItems(e.row.id)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"table-bottom-bar"},[a("div",{staticClass:"pull-left"},[a("el-button",{on:{click:t.savePriority}},[t._v("保存排序")]),t._v(" "),a("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){t.deleteItems(t.ids)}}},[t._v("批量删除")]),t._v(" "),a("span",{staticClass:"ml-48"},[t._v("每页显示\n                  "),a("el-input",{staticClass:"input-sm",attrs:{type:"number",min:"1",max:"50"},on:{blur:t.changeSize},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.changeSize(e)}},model:{value:t.pagination.changePageSize,callback:function(e){t.$set(t.pagination,"changePageSize",e)},expression:"pagination.changePageSize"}}),t._v("\n                   条,输入后按回车\n                   ")],1)],1),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{layout:"total, prev, pager, next",total:t.pagination.total,"page-size":t.params.pageSize,"current-page":t.pagination.currentPage},on:{"update:currentPage":function(e){t.$set(t.pagination,"currentPage",e)},"current-change":t.getPage,"size-change":t.getSize}})],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forum-header"},[a("span",{staticClass:"forum-name"},[t._v("在线客服列表")])])}],o={render:n,staticRenderFns:i};e.a=o},VB45:function(t,e,a){"use strict";function n(t){a("2xNl")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("x85Z"),o=a("5kTn"),s=a("/Xao"),r=n,l=s(i.a,o.a,!1,r,null,null);e.default=l.exports},oZaT:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,"",""])},simw:function(t,e,a){"use strict";function n(t){return Object(T.a)({url:B.a.getAdminList,method:"post",data:t,signValidate:!0})}function i(t){return Object(T.a)({url:B.a.getAdminInfo,method:"post",data:t,signValidate:!0})}function o(t){return Object(T.a)({url:B.a.addAdminInfo,method:"post",data:t,signValidate:!0,nonceStr:!0})}function s(t){return Object(T.a)({url:B.a.deleteAdminInfo,method:"post",data:t,nonceStr:!0,signValidate:!0})}function r(t){return Object(T.a)({url:B.a.updateAdminInfo,method:"post",data:t,signValidate:!0})}function l(t){return Object(T.a)({url:B.a.getRoleList,method:"post",data:t,signValidate:!0})}function u(t){return Object(T.a)({url:B.a.getRoleInfo,method:"post",data:t,signValidate:!0})}function c(t){return Object(T.a)({url:B.a.addRoleInfo,method:"post",data:t,nonceStr:!0,signValidate:!0})}function d(t){return Object(T.a)({url:B.a.updateRoleInfo,method:"post",data:t,nonceStr:!0,signValidate:!0})}function g(t){return Object(T.a)({url:B.a.deleteRoleInfo,method:"post",data:t,signValidate:!0})}function p(t){return Object(T.a)({url:B.a.getCouponList,method:"post",data:t,signValidate:!0})}function f(t){return Object(T.a)({url:B.a.getCouponInfo,method:"post",data:t,signValidate:!0})}function m(t){return Object(T.a)({url:B.a.addCouponInfo,method:"post",data:t,signValidate:!0})}function h(t){return Object(T.a)({url:B.a.deleteCouponInfo,method:"post",data:t,signValidate:!0})}function b(t){return Object(T.a)({url:B.a.disabledCouponInfo,method:"post",data:t,nonceStr:!0,signValidate:!0})}function v(t){return Object(T.a)({url:B.a.getCustomerServiceList,method:"post",data:t,signValidate:!0})}function I(t){return Object(T.a)({url:B.a.getCustomerServiceInfo,method:"post",data:t,signValidate:!0})}function S(t){return Object(T.a)({url:B.a.addCustomerServiceInfo,method:"post",data:t,signValidate:!0})}function j(t){return Object(T.a)({url:B.a.updateCustomerServiceInfo,method:"post",data:t,signValidate:!0})}function O(t){return Object(T.a)({url:B.a.deleteCustomerServiceInfo,method:"post",data:t,signValidate:!0})}function V(t){return Object(T.a)({url:B.a.priorityCustomerServiceInfo,method:"post",data:t,signValidate:!0})}function _(t){return Object(T.a)({url:B.a.getPosterList,method:"post",data:t,signValidate:!0})}function y(t){return Object(T.a)({url:B.a.updatePosterInfo,method:"post",data:t,signValidate:!0})}function C(t){return Object(T.a)({url:B.a.getLogList,method:"post",data:t,signValidate:!0})}function k(t){return Object(T.a)({url:B.a.getAdspaceList,method:"post",data:t,signValidate:!0})}function z(t){return Object(T.a)({url:B.a.getAdspaceInfo,method:"post",data:t,signValidate:!0})}function P(t){return Object(T.a)({url:B.a.addAdspaceInfo,method:"post",data:t,signValidate:!0})}function w(t){return Object(T.a)({url:B.a.updateAdspaceInfo,method:"post",data:t,signValidate:!0})}function x(t){return Object(T.a)({url:B.a.deleteAdspaceInfo,method:"post",data:t,signValidate:!0})}function A(t){return Object(T.a)({url:B.a.getAdvertiseList,method:"post",data:t,signValidate:!0})}function L(t){return Object(T.a)({url:B.a.getAdvertiseInfo,method:"post",data:t,signValidate:!0})}function N(t){return Object(T.a)({url:B.a.addAdvertiseInfo,method:"post",data:t,signValidate:!0})}function R(t){return Object(T.a)({url:B.a.updateAdvertiseInfo,method:"post",data:t,signValidate:!0})}function $(t){return Object(T.a)({url:B.a.deleteAdvertiseInfo,method:"post",data:t,signValidate:!0})}e.o=n,e.n=i,e.a=o,e.g=s,e.C=r,e.A=l,e.z=u,e.f=c,e.H=d,e.l=g,e.u=p,e.t=f,e.d=m,e.j=h,e.m=b,e.w=v,e.v=I,e.e=S,e.F=j,e.k=O,e.B=V,e.y=_,e.G=y,e.x=C,e.q=k,e.p=z,e.b=P,e.D=w,e.h=x,e.s=A,e.r=L,e.c=N,e.E=R,e.i=$;var T=a("yYIz"),B=a("z+6n")},x85Z:function(t,e,a){"use strict";var n=a("simw");e.a={data:function(){return{loading:!0,items:[],ids:"",params:{pageNo:1,pageSize:10},disabled:!0,pagination:{total:0,currentPage:1,changePageSize:localStorage.getItem("PageSize")}}},methods:{getItems:function(){var t=this;n.w(this.params).then(function(e){t.pagination.total=e.totalCount,t.items=e.body,t.loading=!1})},savePriority:function(){var t=this;this.loading=!0;var e=[],a=[];for(var i in this.items)e.push(this.items[i].id),a.push(this.items[i].priority);e=e.join(","),a=a.join(",");var o={ids:e,priority:a};n.B(o).then(function(e){t.loading=!1,200==e.code&&t.successMessage("修改排序成功"),t.getItems()})},deleteItems:function(t){var e=this;this.$confirm("确定要删除吗?","警告",{type:"error"}).then(function(a){n.k({ids:t}).then(function(t){200==t.code&&e.successMessage("删除成功"),e.getItems()})}).catch(function(t){})},checkIds:function(t){for(var e=[],a=0;a<t.length;a++)e.push(t[a].id);0==e.length?(this.ids="",this.disabled=!0):(this.ids=e.join(","),this.disabled=!1)},query:function(){this.getItems()},getPage:function(t){this.loading=!0,this.params.pageNo=t,this.getItems()},getSize:function(t){this.loading=!0,this.params.pageNo=t,this.getItems()},changeSize:function(t){var e=t.target.value;e<1?(localStorage.setItem("PageSize",15),e=15):localStorage.setItem("PageSize",e),this.loading=!0,this.params.pageSize=parseInt(e),this.params.pageNo=1,this.pagination.currentPage=1,this.getItems()},getLocalPage:function(){var t=localStorage.getItem("PageSize");null!=t?this.params.pageSize=parseInt(t):this.changePageSize=20,this.getItems()}},created:function(){this.getLocalPage()}}}});