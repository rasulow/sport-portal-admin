"use strict";(self["webpackChunksport_portal_admin"]=self["webpackChunksport_portal_admin"]||[]).push([[409],{6409:function(t,e,i){i.r(e),i.d(e,{default:function(){return $}});var s=i(998),a=i(4562),n=i(4145),o=i(1625),l=i(4324),r=i(5495),h=i(7637),c=i(1713),u=i(9449),d=i(3687),p=i(2648),m=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(s.Z,{style:{background:t.$vuetify.theme.themes.dark.background}},[e("div",{staticStyle:{margin:"20px"}},[e(n.Z,{staticStyle:{"border-radius":"10px",padding:"15px"},attrs:{elevation:"0",color:"white",width:"100%"}},[e(c.Z,{attrs:{"no-gutters":""}},[e(d.Z),e(a.Z,{staticStyle:{color:"#0088FF",border:"1px solid #0088FF","background-color":"transparent"},attrs:{elevation:"0"},on:{click:function(e){t.drawer=!t.drawer}}},[e(l.Z,{attrs:{color:"#0088FF"}},[t._v(" mdi-flag-variant-outline ")]),t._v(" + ")],1)],1)],1),e(n.Z,{staticStyle:{"border-radius":"10px","margin-top":"20px"},attrs:{elevation:"0",color:"white",width:"100%"}},[e(u.Z,{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",t._l(t.headers,(function(i,s){return e("th",{key:s},[t._v(" "+t._s(i)+" ")])})),0)]),e("tbody",t._l(t.federations,(function(i,s){return e("tr",{key:s,staticClass:"table-row",style:s%2==0?"background-color: #F2F2F7":""},[e("td",[t._v(t._s(s+1))]),e("td",[t._v(t._s(i.nameTm))]),e("td",[t._v(t._s(i.nameRu))]),e("td",[e(r.Z,{attrs:{src:i.imagePath,"max-width":"50"}})],1),e("td",{staticStyle:{width:"100px"}},[e(a.Z,{attrs:{icon:"","x-small":""},on:{click:function(e){return t.updateFederation(i)}}},[e(l.Z,{attrs:{color:"orange",size:"20"}},[t._v("mdi-pencil-outline")])],1),e(a.Z,{attrs:{icon:"","x-small":""},on:{click:function(e){return t.deleteFederation(i.id)}}},[e(l.Z,{attrs:{color:"red",size:"20"}},[t._v("mdi-delete-outline")])],1)],1)])})),0)]},proxy:!0}])})],1),e(h.Z,{staticClass:"pa-8",attrs:{absolute:"",temporary:"",right:"",width:"400"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("div",{staticStyle:{"font-size":"20px","margin-bottom":"10px","font-weight":"500"}},[t._v("Add Federation")]),e(p.Z,{staticClass:"mt-1 mb-n1",attrs:{dense:"",outlined:"",label:"nameTm"},model:{value:t.federation.nameTm,callback:function(e){t.$set(t.federation,"nameTm",e)},expression:"federation.nameTm"}}),e(p.Z,{staticClass:"mb-n1",attrs:{dense:"",outlined:"",label:"nameRu"},model:{value:t.federation.nameRu,callback:function(e){t.$set(t.federation,"nameRu",e)},expression:"federation.nameRu"}}),e(o.Z,{staticClass:"mb-6",attrs:{color:"deep-purple accent-4",label:"logo","prepend-icon":"mdi-camera",outlined:"","hide-details":"",dense:""},model:{value:t.photo,callback:function(e){t.photo=e},expression:"photo"}}),e(a.Z,{staticStyle:{"background-color":"transparent",border:"1px solid #0088FF",color:"#0088FF","font-size":"18px","font-weight":"300"},attrs:{dense:"",elevation:"0",width:"100%"},on:{click:t.saveFederation}},[t._v(" Save ")])],1)],1)])},f=[],g=i(3080),v=i(6154),y=i(6455),b=i.n(y),w={data:()=>({drawer:!1,headers:["id","name TM","name RU","logo","action"],federations:[],federation:{},Toast:b().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",b().stopTimer),t.addEventListener("mouseleave",b().resumeTimer)}}),photo:null}),created(){this.getFederations()},methods:{async getFederations(){await v.Z.get("/federations/",{params:{take:100}}).then((t=>{this.federations=t.data.data})).catch((t=>{console.log(t)}))},async updateFederation(t){this.federation.id=t.id,this.federation.nameTm=t.nameTm,this.federation.nameRu=t.nameRu,this.drawer=!this.drawer},async saveFederation(){let t=new FormData;t.append("nameTm",this.federation.nameTm),t.append("nameRu",this.federation.nameRu),t.append("photo",this.photo),await v.Z.post("/federations/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{this.Toast.fire({icon:"success",title:"Successfully saved"}),this.federation={},this.getFederations(),this.drawer=!this.drawer})).catch((t=>{console.log(t),this.federation={},this.Toast.fire({icon:"error",title:"Something went wrong"})}))},async deleteFederation(t){b().fire({title:"Are you sure?",icon:"question",showCancelButton:!0,confirmButtonColor:"#7FBA5E",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((e=>{e.isConfirmed&&v.Z.delete("/federations/"+t+"/").then((()=>{this.getFederations(),this.Toast.fire({icon:"success",title:"Successfully deleted"})})).catch((t=>{console.log(t),this.Toast.fire({icon:"error",title:"Something went wrong"})}))}))}},components:{SideBar:g.Z}},x=w,S=i(1001),C=(0,S.Z)(x,m,f,!1,null,"452d66bf",null),$=C.exports},4127:function(t,e,i){i.d(e,{Z:function(){return p}});i(7658);var s=i(7678),a=i(7394),n=i(2240),o=i(6878),l=i(3037),r=i(6669),h=i(1444),c=i(8860),u=i(4338),d=i(4101),p=(0,s.Z)(o.Z,u.Z,c.Z,r.Z,(0,l.d)("chipGroup"),(0,h.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...c.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(c.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,d.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(n.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a.Zq,t)},genClose(){return this.$createElement(n.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,s),e)}})},9449:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(5352),a=i(6669),n=i(7678),o=(0,n.Z)(a.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,s.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},1625:function(t,e,i){i.d(e,{Z:function(){return h}});i(7658);var s=i(7808),a=s.Z,n=i(4127),o=i(5352),l=i(4101),r=i(1767),h=a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,o.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...a.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,o.XE)(e,1024===this.base))},internalArrayValue(){return(0,o.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:i=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${(0,o.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,l.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,o.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(n.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,r.y0)(t.data.style,{display:"none"})),t},genInput(){const t=a.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=a.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:t=>{t.target&&"LABEL"===t.target.nodeName||this.$refs.input.click()}},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},3687:function(t,e,i){i(9027);var s=i(5352);e.Z=(0,s.Ji)("spacer","div","v-spacer")},2648:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(7808),a=i(7678);const n=(0,a.Z)(s.Z);var o=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=s.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=409.3c6cd6f4.js.map