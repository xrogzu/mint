webpackJsonp([83],{D55l:function(t,e,n){"use strict";function a(t){n("oAmR")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("eYBq"),r=n("WIWV"),i=n("46Yf"),s=a,d=i(o.a,r.a,!1,s,null,null);e.default=d.exports},WIWV:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"forum-module"},[n("div",{staticClass:"forum-header"},[n("span",{staticClass:"forum-name"},[t._v(t._s(t.$route.name))]),t._v(" "),n("div",{staticClass:"pull-right"},[n("el-button",{staticClass:"back",on:{click:function(e){t.routerLink("/typeList","list")}}},[t._v("返回列表")])],1)]),t._v(" "),n("el-form",{ref:"form",staticClass:"table-body",attrs:{"label-width":"160px",model:t.info,rules:t.rules}},[n("el-row",{staticClass:"form-group"},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[n("el-col",{staticClass:"border-none",attrs:{span:12}},[n("el-form-item",{attrs:{label:"类型名称",prop:"name"}},[n("el-input",{staticClass:"w192",model:{value:t.info.name,callback:function(e){t.$set(t.info,"name",e)},expression:"info.name"}})],1)],1)],1),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[n("el-form-item",{attrs:{label:"商品分类模板前缀",prop:"channelPrefix"}},[n("el-input",{staticClass:"w192",model:{value:t.info.channelPrefix,callback:function(e){t.$set(t.info,"channelPrefix",e)},expression:"info.channelPrefix"}})],1)],1),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[n("el-form-item",{attrs:{label:"商品内容模板前缀",prop:"contentPrefix"}},[n("el-input",{staticClass:"w192",model:{value:t.info.contentPrefix,callback:function(e){t.$set(t.info,"contentPrefix",e)},expression:"info.contentPrefix"}})],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"form-bottom-bar"},["save"==t.type?n("el-button",{attrs:{type:"warning"},on:{click:function(e){t.saveForm(!0)}}},[t._v("提交并继续添加")]):t._e(),t._v(" "),"save"==t.type?n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.saveForm(!1)}}},[t._v("添加")]):t._e(),t._v(" "),"update"==t.type?n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.updateForm()}}},[t._v("修改")]):t._e(),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:function(e){t.restForm()}}},[t._v("重置")]),t._v(" "),"save"==t.type?n("div",{staticClass:"help-info"},[t._v("选择“提交并继续添加”按钮会停留在添加页面；选择“添加”按钮后将跳转到对应的列表页。")]):t._e()],1)],1)},o=[],r={render:a,staticRenderFns:o};e.a=r},eYBq:function(t,e,n){"use strict";var a=n("wc4o");e.a={data:function(){return{loading:!0,type:this.$route.query.type,id:this.$route.query.id,info:{},categoryIdList:[],rules:{name:[{required:!0,message:"请输入类型名",trigger:"blur"}],path:[{required:!0,message:"请输入路径",trigger:"blur"}],channelPrefix:[{required:!0,message:"此项必填",trigger:"blur"}],contentPrefix:[{required:!0,message:"此项必填",trigger:"blur"}]}}},methods:{getInfo:function(t){var e=this;a.K({id:t}).then(function(t){e.info=t.body,e.loading=!1})},updateForm:function(){var t=this;this.$refs.form.validate(function(e){e&&(t.loading=!0,a.U(t.info).then(function(e){t.loading=!1,200==e.code&&(t.successMessage("修改成功"),setTimeout(function(){t.routerLink("/typeList","list")},1e3))}))})},saveForm:function(t){var e=this;this.$refs.form.validate(function(n){n&&(e.loading=!0,a.e(e.info).then(function(n){e.loading=!1,200==n.code&&(e.successMessage("添加成功"),t?(e.imagePath="",e.getInfo(e.id)):setTimeout(function(){e.routerLink("/typeList","list")},1e3))}))})},restForm:function(){this.$refs.form.resetFields(),this.getInfo(0)},getPath:function(t){this.info.logoPath=t}},created:function(){this.getInfo(this.id)}}},oAmR:function(t,e,n){var a=n("x79d");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("cb7da164",a,!0)},wc4o:function(t,e,n){"use strict";function a(t){return Object(G.a)({url:Q.a.getProductList,method:"post",data:t,nonceStr:!0,signValidate:!0})}function o(t){return Object(G.a)({url:Q.a.getProductInfo,method:"post",data:t,nonceStr:!0,signValidate:!0})}function r(t){return Object(G.a)({url:Q.a.getBrandListByCategoryId,method:"post",data:t,nonceStr:!0,signValidate:!0})}function i(t){return Object(G.a)({url:Q.a.addProductList,method:"post",data:t,nonceStr:!0,signValidate:!0})}function s(t){return Object(G.a)({url:Q.a.updateProductList,method:"post",data:t,nonceStr:!0,signValidate:!0})}function d(t){return Object(G.a)({url:Q.a.deleteProductList,method:"post",data:t,nonceStr:!0,signValidate:!0})}function u(t){return Object(G.a)({url:Q.a.getCommodityCategoryTree,method:"post",data:t,signValidate:!0})}function c(t){return Object(G.a)({url:Q.a.getCommodityCategoryList,method:"post",data:t,signValidate:!0})}function l(t){return Object(G.a)({url:Q.a.getCommodityCategoryInfo,method:"post",data:t,signValidate:!0})}function f(t){return Object(G.a)({url:Q.a.getHotList,method:"post",data:t,signValidate:!0})}function m(t){return Object(G.a)({url:Q.a.getSaleChatList,method:"post",data:t,signValidate:!0})}function g(t){return Object(G.a)({url:Q.a.addCommodityCategoryInfo,method:"post",data:t,nonceStr:!0,signValidate:!0})}function p(t){return Object(G.a)({url:Q.a.updateCommodityCategoryInfo,method:"post",data:t,nonceStr:!0,signValidate:!0})}function h(t){return Object(G.a)({url:Q.a.getCommodityTopCategory,method:"post",data:t,signValidate:!0})}function b(t){return Object(G.a)({url:Q.a.getCommodityTemplate,method:"post",data:t,signValidate:!0})}function y(t){return Object(G.a)({url:Q.a.getCommodityBrand,method:"post",nonceStr:!0,data:t,signValidate:!0})}function S(t){return Object(G.a)({url:Q.a.getCommodityStandardType,method:"post",nonceStr:!0,data:t,signValidate:!0})}function j(t){return Object(G.a)({url:Q.a.getBrandList,method:"post",nonceStr:!0,data:t,signValidate:!0})}function O(t){return Object(G.a)({url:Q.a.getBrandInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function V(t){return Object(G.a)({url:Q.a.getBrandTypeInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function v(t){return Object(G.a)({url:Q.a.addBrandInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function C(t){return Object(G.a)({url:Q.a.updateBrandInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function I(t){return Object(G.a)({url:Q.a.deleteBrandInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function _(t){return Object(G.a)({url:Q.a.priorityBrandInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function x(t){return Object(G.a)({url:Q.a.deleteCommodityCategoryInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function L(t){return Object(G.a)({url:Q.a.priorityCommodityCategoryInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function P(t){return Object(G.a)({url:Q.a.getStandardList,method:"post",nonceStr:!0,data:t,signValidate:!0})}function k(t){return Object(G.a)({url:Q.a.getStandardInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function B(t){return Object(G.a)({url:Q.a.addStandardInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function T(t){return Object(G.a)({url:Q.a.updateStandardInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function w(t){return Object(G.a)({url:Q.a.deleteStandardInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function F(t){return Object(G.a)({url:Q.a.priorityStandardInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function $(t){return Object(G.a)({url:Q.a.getTypeInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function q(t){return Object(G.a)({url:Q.a.addTypeInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function M(t){return Object(G.a)({url:Q.a.updateTypeInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function D(t){return Object(G.a)({url:Q.a.deleteTypeInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function A(t){return Object(G.a)({url:Q.a.getModelList,method:"post",nonceStr:!0,data:t,signValidate:!0})}function R(t){return Object(G.a)({url:Q.a.getModelListAll,method:"post",nonceStr:!0,data:t,signValidate:!0})}function W(t){return Object(G.a)({url:Q.a.getModelInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function Y(t){return Object(G.a)({url:Q.a.getConsultList,method:"post",nonceStr:!0,data:t,signValidate:!0})}function z(t){return Object(G.a)({url:Q.a.getConsultInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function J(t){return Object(G.a)({url:Q.a.updateConsultInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function E(t){return Object(G.a)({url:Q.a.deleteConsultInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function H(t){return Object(G.a)({url:Q.a.getDiscussList,method:"post",nonceStr:!0,data:t,signValidate:!0})}function K(t){return Object(G.a)({url:Q.a.getDiscussInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function N(t){return Object(G.a)({url:Q.a.updateDiscussInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}function U(t){return Object(G.a)({url:Q.a.deleteDiscussInfo,method:"post",nonceStr:!0,data:t,signValidate:!0})}e.G=a,e.F=o,e.o=r,e.c=i,e.S=s,e.j=d,e.t=u,e.s=c,e.r=l,e.B=f,e.H=m,e.b=g,e.P=p,e.w=h,e.v=b,e.q=y,e.u=S,e.n=j,e.m=O,e.p=V,e.a=v,e.O=C,e.f=I,e.L=_,e.g=x,e.M=L,e.J=P,e.I=k,e.d=B,e.T=T,e.k=w,e.N=F,e.K=$,e.e=q,e.U=M,e.l=D,e.D=A,e.E=R,e.C=W,e.y=Y,e.x=z,e.Q=J,e.h=E,e.A=H,e.z=K,e.R=N,e.i=U;var G=n("yYIz"),Q=n("z+6n")},x79d:function(t,e,n){e=t.exports=n("BkJT")(!1),e.push([t.i,"",""])}});