(window.webpackJsonp=window.webpackJsonp||[]).push([["admin.moduleinfo"],{"8c17":function(e,n,t){"use strict";t.r(n);var o=t("b4a5"),s=[{name:"id",label:"编号",width:240,show:!1},{name:"name",label:"名称"},{name:"code",label:"编码",width:150},{name:"version",label:"版本号",width:150},{name:"remarks",label:"备注"},{name:"creator",label:"创建人",width:100,show:!1},{name:"createdTime",label:"创建时间",width:150,show:!1}],a=$api.admin.moduleInfo,l={name:o.default.name,data:function(){return{list:{title:o.default.title,cols:s,action:a.query,model:{name:""}},removeAction:a.remove,buttons:o.default.buttons}},methods:{refresh:function(){this.$refs.list.refresh()},sync:function(){var n=this;this._confirm("您确认要同步模块信息吗","同步模块信息").then(function(){a.sync().then(function(e){n._success("同步成功"),n.refresh()})})}}},r=t("2877"),i=Object(r.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nm-container",[o("nm-list",t._b({ref:"list",scopedSlots:t._u([{key:"querybar",fn:function(){return[o("el-form-item",{attrs:{label:"名称：",prop:"name"}},[o("el-input",{attrs:{clearable:""},model:{value:t.list.model.name,callback:function(e){t.$set(t.list.model,"name",e)},expression:"list.model.name"}})],1)]},proxy:!0},{key:"querybar-buttons",fn:function(){return[o("nm-button-has",{attrs:{options:t.buttons.sync},on:{click:t.sync}})]},proxy:!0},{key:"col-isShow",fn:function(e){var n=e.row;return[t._v(t._s(n.isShow?"是":"否"))]}},{key:"col-operation",fn:function(e){var n=e.row;return[o("nm-button-delete",{attrs:{options:t.buttons.del,action:t.removeAction,id:n.id},on:{success:t.refresh}})]}}])},"nm-list",t.list,!1))],1)},[],!1,null,null,null);n.default=i.exports}}]);