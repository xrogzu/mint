webpackJsonp([57],{CLyK:function(t,e,a){"use strict";function o(t){a("SWea")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("EDr8"),r=a("qZKC"),i=a("/Xao"),s=o,l=i(n.a,r.a,!1,s,"data-v-0a9ccdd6",null);e.default=l.exports},DrUK:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".border-all[data-v-0a9ccdd6]{border:1px solid #eee}.w280[data-v-0a9ccdd6]{width:320px;margin:0 auto}.img-w50[data-v-0a9ccdd6]{display:block;width:50px;height:50px;margin:7px 10px 7px 0;float:left}.img-title[data-v-0a9ccdd6]{float:left;line-height:20px;text-align:left;color:#1276c3;width:260px;margin-top:7px;text-overflow:ellipsis}.pro-table[data-v-0a9ccdd6]{width:100%;margin-top:24px}.w-80[data-v-0a9ccdd6]{width:80px}.pro-table th[data-v-0a9ccdd6]{border-top:1px solid #eee;border-bottom:2px solid #eee;height:50px;font-size:14px;color:#8a8e98;text-align:center}.pro-table td[data-v-0a9ccdd6]{border-bottom:1px solid #eee;font-size:14px;color:#353535;text-align:center;padding:0 12px}.more-info[data-v-0a9ccdd6]{padding-left:0;margin-top:22px;margin-bottom:0}",""])},EDr8:function(t,e,a){"use strict";(function(t){var o=a("FWz8");e.a={data:function(){return{centerDialogVisible:!1,centerDialogVisible1:!1,loading:!0,type:this.$route.query.type,id:this.$route.query.id,info:{},saveOrder:{orderId:0,id:"",waybill:"",comment:""},payOrderInfo:{orderId:0,bank:"",accounts:"",money:"",drawee:"",comment:""},shipmentsList:[],orderInfoState:!0,userInfoState:!0,typeList:[],count:[],countPrice:"",productList:[],url:this.$store.state.sys.baseUrl,pathUrl:"",rules:{name:[{required:!0,message:"此项必填",trigger:"blur"}]}}},methods:{getInfo:function(t){var e=this;o.j({id:t}).then(function(t){e.info=t.body,e.productList=t.body.product,e.loading=!1}),o.q({pageNo:1,pageSize:10}).then(function(t){e.saveOrder.id=t.body[0].id,e.shipmentsList=t.body})},payOrder:function(){var t=this;this.payOrderInfo.orderId=this.id,o.s(this.payOrderInfo).then(function(e){200==e.code&&(t.successMessage("订单支付成功"),t.centerDialogVisible1=!1,t.getInfo(t.id))})},enterOrder:function(){var t=this;this.$confirm("是否确认订单？","提示",{type:"warning"}).then(function(e){o.i({id:t.info.id}).then(function(e){200==e.code&&(t.successMessage("订单确认成功!"),t.getInfo(t.id))})}).catch(function(t){})},cannelOrder:function(){var t=this;this.$confirm("是否取消订单？","提示",{type:"warning"}).then(function(e){o.c({orderId:t.id}).then(function(e){200==e.code&&(t.successMessage("订单取消成功!"),t.getInfo(t.id))})}).catch(function(t){})},doneOrder:function(){var t=this;this.$confirm("是否确认完成订单","提示",{type:"warning"}).then(function(e){o.h({id:t.info.id}).then(function(e){200==e.code&&(t.successMessage("订单完成成功!"),t.getInfo(t.id))})}).catch(function(t){})},saveOrderInfo:function(){var t=this;this.saveOrder.orderId=this.id,o.v(this.saveOrder).then(function(e){200==e.code&&(t.successMessage("发货成功!"),t.centerDialogVisible=!1,t.getInfo(t.id))})},toggleMore1:function(){1==this.orderInfoState?(this.orderInfoState=!1,t(".more-info1").find("i").removeClass("el-icon-caret-top").addClass("el-icon-caret-bottom")):(t(".more-info1").find("i").removeClass("el-icon-caret-bottom").addClass("el-icon-caret-top"),this.orderInfoState=!0)},toggleMore2:function(){1==this.userInfoState?(this.userInfoState=!1,t(".more-info2").find("i").removeClass("el-icon-caret-top").addClass("el-icon-caret-bottom")):(t(".more-info2").find("i").removeClass("el-icon-caret-bottom").addClass("el-icon-caret-top"),this.userInfoState=!0)},restForm:function(){this.$refs.form.resetFields(),this.getInfo(this.id),this.pathUrl=""}},watch:{productList:{handler:function(t,e){this.payOrderInfo.drawee=this.info.receiveName,this.payOrderInfo.money=this.info.total;for(var a in t)this.count[a]=t[a].itemPrice*t[a].itemCount;var o=0;for(var n in this.count)o+=this.count[n];this.countPrice=o},deep:!0}},created:function(){this.getInfo(this.id)}}}).call(e,a("tra3"))},FWz8:function(t,e,a){"use strict";function o(t){return Object(C.a)({url:j.a.getOrderList,method:"post",data:t,signValidate:!0})}function n(t){return Object(C.a)({url:j.a.getOrderInfo,method:"post",data:t,signValidate:!0})}function r(t){return Object(C.a)({url:j.a.updateOrderInfo,method:"post",data:t,signValidate:!0})}function i(t){return Object(C.a)({url:j.a.deleteOrderInfo,method:"post",data:t,signValidate:!0})}function s(t){return Object(C.a)({url:j.a.enterOrderInfo,method:"post",data:t,signValidate:!0})}function l(t){return Object(C.a)({url:j.a.doneOrderInfo,method:"post",data:t,signValidate:!0})}function d(t){return Object(C.a)({url:j.a.saveOrderInfo,method:"post",data:t,signValidate:!0})}function c(t){return Object(C.a)({url:j.a.payOrderInfo,method:"post",data:t,signValidate:!0})}function f(t){return Object(C.a)({url:j.a.cannelOrderInfo,method:"post",data:t,signValidate:!0})}function u(t){return Object(C.a)({url:j.a.getOrderReturnList,method:"post",data:t,signValidate:!0})}function m(t){return Object(C.a)({url:j.a.getOrderReturnInfo,method:"post",data:t,signValidate:!0})}function p(t){return Object(C.a)({url:j.a.deleteOrderReturnInfo,method:"post",data:t,signValidate:!0})}function v(t){return Object(C.a)({url:j.a.affirmOrderReturnInfo,method:"post",data:t,signValidate:!0})}function _(t){return Object(C.a)({url:j.a.sendbackOrderReturnInfo,method:"post",data:t,signValidate:!0})}function b(t){return Object(C.a)({url:j.a.receiveOrderReturnInfo,method:"post",data:t,signValidate:!0})}function h(t){return Object(C.a)({url:j.a.refundOrderReturnInfo,method:"post",data:t,signValidate:!0})}function g(t){return Object(C.a)({url:j.a.getShopShipmentsList,method:"post",data:t,signValidate:!0})}function O(t){return Object(C.a)({url:j.a.getShopShipmentsInfo,method:"post",data:t,signValidate:!0})}function y(t){return Object(C.a)({url:j.a.addShopShipmentsInfo,method:"post",data:t,signValidate:!0})}function I(t){return Object(C.a)({url:j.a.updateShopShipmentsInfo,method:"post",data:t,signValidate:!0})}function x(t){return Object(C.a)({url:j.a.deleteShopShipmentsInfo,method:"post",data:t,signValidate:!0})}function S(t){return Object(C.a)({url:j.a.getShipmentsList,method:"post",data:t,signValidate:!0})}function w(t){return Object(C.a)({url:j.a.getShipmentsInfo,method:"post",data:t,signValidate:!0})}function V(t){return Object(C.a)({url:j.a.isPrintShipmentsInfo,method:"post",data:t,signValidate:!0})}function k(t){return Object(C.a)({url:j.a.deleteShipmentsInfo,method:"post",data:t,signValidate:!0})}e.k=o,e.j=n,e.x=r,e.d=i,e.i=s,e.h=l,e.v=d,e.s=c,e.c=f,e.m=u,e.l=m,e.e=p,e.b=v,e.w=_,e.t=b,e.u=h,e.q=g,e.p=O,e.a=y,e.y=I,e.g=x,e.o=S,e.n=w,e.r=V,e.f=k;var C=a("yYIz"),j=a("z+6n")},SWea:function(t,e,a){var o=a("DrUK");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("8bSs")("7942a57a",o,!0)},qZKC:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"forum-module"},[a("div",{staticClass:"forum-header"},[a("span",{staticClass:"forum-name"},[t._v(t._s(t.$route.name))]),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-button",{staticClass:"back",on:{click:function(e){t.routerLink("/order","list")}}},[t._v("返回列表")])],1)]),t._v(" "),a("div",{staticStyle:{"margin-top":"24px","padding-left":"24px"}},[a("el-button",{attrs:{disabled:!(1==t.info.orderStatus)},on:{click:t.enterOrder}},[t._v("确认")]),t._v(" "),a("el-button",{attrs:{disabled:!(2==t.info.orderStatus&&1==t.info.paymentStatus&&1!=t.info.paymentId)},on:{click:function(e){t.centerDialogVisible1=!0}}},[t._v("支付")]),t._v(" "),a("el-button",{attrs:{disabled:!(2==t.info.orderStatus&&1==t.info.shippingStatus&&1!=t.info.paymentId)},on:{click:function(e){t.centerDialogVisible=!0}}},[t._v("发货")]),t._v(" "),a("el-button",{attrs:{disabled:!(2==t.info.paymentStatus&&2==t.info.shippingStatus&&4!=t.info.orderStatus)},on:{click:t.doneOrder}},[t._v("完成")]),t._v(" "),a("el-button",{attrs:{disabled:!(1!=t.info.paymentId&&1==t.info.shippingStatus&&1==t.info.paymentStatus&&3!=t.info.orderStatus||1==t.info.paymentId&&1==t.info.paymentStatus&&3!=t.info.orderStatus)},on:{click:t.cannelOrder}},[t._v("取消")])],1),t._v(" "),a("el-dialog",{attrs:{title:"填写发货信息",visible:t.centerDialogVisible,width:"50%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("el-form",{attrs:{model:t.saveOrder}},[a("el-form-item",{attrs:{label:"快递单号:"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.saveOrder.waybill,callback:function(e){t.$set(t.saveOrder,"waybill",e)},expression:"saveOrder.waybill"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发货人信息:"}},[a("table",{staticClass:"pro-table border-all",staticStyle:{width:"100%"}},[a("tr",[a("td",[t._v("选择")]),t._v(" "),a("td",[t._v("姓名")]),t._v(" "),a("td",[t._v("电话")]),t._v(" "),a("td",[t._v("地址")])]),t._v(" "),t._l(t.shipmentsList,function(e,o){return a("tr",{key:o},[a("td",[a("el-radio",{attrs:{label:e.id},model:{value:t.saveOrder.id,callback:function(e){t.$set(t.saveOrder,"id",e)},expression:"saveOrder.id"}},[t._v(" ")])],1),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.mobile))]),t._v(" "),a("td",[t._v(t._s(e.address))])])})],2)]),t._v(" "),a("el-form-item",{attrs:{label:"备注:"}},[a("el-input",{attrs:{"auto-complete":"off",type:"textarea"},model:{value:t.saveOrder.comment,callback:function(e){t.$set(t.saveOrder,"comment",e)},expression:"saveOrder.comment"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveOrderInfo}},[t._v("确 定")]),t._v(" "),a("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"填写支付信息",visible:t.centerDialogVisible1,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible1=e}}},[a("el-form",{attrs:{model:t.payOrderInfo}},[a("el-form-item",{attrs:{label:"银行:","label-width":"80px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.payOrderInfo.bank,callback:function(e){t.$set(t.payOrderInfo,"bank",e)},expression:"payOrderInfo.bank"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"账号:","label-width":"80px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.payOrderInfo.accounts,callback:function(e){t.$set(t.payOrderInfo,"accounts",e)},expression:"payOrderInfo.accounts"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"金额:","label-width":"80px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.payOrderInfo.money,callback:function(e){t.$set(t.payOrderInfo,"money",e)},expression:"payOrderInfo.money"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"付款人:","label-width":"80px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.payOrderInfo.drawee,callback:function(e){t.$set(t.payOrderInfo,"drawee",e)},expression:"payOrderInfo.drawee"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注:","label-width":"80px"}},[a("el-input",{attrs:{"auto-complete":"off",type:"textarea"},model:{value:t.payOrderInfo.comment,callback:function(e){t.$set(t.payOrderInfo,"comment",e)},expression:"payOrderInfo.comment"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.payOrder}},[t._v("支付")]),t._v(" "),a("el-button",{on:{click:function(e){t.centerDialogVisible1=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("table",{staticClass:"pro-table"},[t._m(0,!1,!1),t._v(" "),t._l(t.productList,function(e,o){return a("tr",{key:o},[a("td",[t._v(t._s(e.productCode))]),t._v(" "),a("td",[a("div",{staticClass:"w280"},[a("img",{staticClass:"img-w50",attrs:{src:t.url+e.coverImg,alt:""}}),t._v(" "),a("span",{staticClass:"img-title"},[t._v(t._s(e.productName))])])]),t._v(" "),a("td",[a("span",[t._v(t._s(e.itemPrice))])]),t._v(" "),a("td",[t._v(t._s(e.itemWeight))]),t._v(" "),a("td",[a("span",[t._v(t._s(e.itemPrice))])]),t._v(" "),a("td",[t._v(t._s(t.count[o]))])])})],2),t._v(" "),a("el-form",{ref:"form",staticClass:"table-body",attrs:{"label-width":"160px",model:t.info,rules:t.rules}},[a("div",{staticClass:"more-info  more-info1",on:{click:t.toggleMore1}},[t._v("订单信息"),a("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),t.orderInfoState?a("el-row",{staticClass:"form-group"},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"订单编号"}},[t._v("\n              "+t._s(t.info.code)+"\n         ")])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"下单日期"}},[t._v("\n              "+t._s(t.info.createTime)+"\n         ")])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"订单状态"}},[1==t.info.orderStatus?a("span",[t._v("未确认")]):t._e(),t._v(" "),2==t.info.orderStatus?a("span",[t._v("已确认")]):t._e(),t._v(" "),3==t.info.orderStatus?a("span",[t._v("已取消")]):t._e(),t._v(" "),4==t.info.orderStatus?a("span",[t._v("已完成")]):t._e()])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"支付状态"}},[1==t.info.paymentStatus?a("span",[t._v("未支付")]):t._e(),t._v(" "),2==t.info.paymentStatus?a("span",[t._v("已支付")]):t._e(),t._v(" "),3==t.info.paymentStatus?a("span",[t._v("已退款")]):t._e()])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"配送状态"}},[1==t.info.shippingStatus?a("span",[t._v("未发货")]):t._e(),t._v(" "),2==t.info.shippingStatus?a("span",[t._v("已发货")]):t._e(),t._v(" "),3==t.info.shippingStatus?a("span",[t._v("已退货")]):t._e()])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"配送方式"}},[a("span",[t._v("\n                          "+t._s(t.info.shippingName)+"\n                      ")])])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"商品总金额"}},[t._v("\n                   "+t._s(t.countPrice)+"\n               ")])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"运费"}},[a("span",[t._v("\n                          "+t._s(t.info.freight)+"\n                      ")])])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"订单总金额"}},[t._v("\n                   "+t._s(t.countPrice)+"\n               ")])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"支付方式"}},[a("span",[t._v(t._s(t.info.paymentName))])])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"more-info more-info2 ",on:{click:t.toggleMore2}},[t._v("收货人信息"),a("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),t.userInfoState?a("el-row",{staticClass:"form-group"},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"收货人姓名"}},[a("span",[t._v(t._s(t.info.receiveName))])])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"收货人手机号"}},[a("span",[t._v(t._s(t.info.receiveMobile))])])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"收货人固定电话"}},[a("span",[t._v(t._s(t.info.receivePhone))])])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12}},[a("el-form-item",{attrs:{label:"收货人邮编"}},[a("span",[t._v(t._s(t.info.receiveZip))])])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[a("el-form-item",{attrs:{label:"收货人地址"}},[a("span",[t._v(t._s(t.info.receiveAddress))])])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[a("el-form-item",{attrs:{label:"客户留言"}},[t._v("\n                       "+t._s(t.info.comments)+"\n\n                   ")])],1)],1):t._e()],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("商品编号")]),t._v(" "),a("th",[t._v("商品名称")]),t._v(" "),a("th",[t._v("成交价")]),t._v(" "),a("th",[t._v("单重")]),t._v(" "),a("th",[t._v("购买数量")]),t._v(" "),a("th",[t._v("小记")])])}],r={render:o,staticRenderFns:n};e.a=r}});