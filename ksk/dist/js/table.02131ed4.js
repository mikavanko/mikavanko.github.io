(self["webpackChunkksk"]=self["webpackChunkksk"]||[]).push([[986],{9288:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("loading-icon",{staticClass:"loading"})},i=[],n=s(4043),l=s.n(n),r={name:"VLoading",components:{LoadingIcon:l()}},o=r,d=s(1001),c=(0,d.Z)(o,a,i,!1,null,null,null),u=c.exports},5689:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return t.isModalVisible?e("div",{ref:"modal",staticClass:"modal",style:{"--left":t.modalCoords.x+"px","--top":t.modalCoords.y+"px"},on:{click:t.remove}},[e("trash-icon",{staticClass:"modal-icon"}),e("span",{staticClass:"modal-text"},[t._v("удалить")])],1):t._e()},i=[],n=s(3570),l=s.n(n),r={name:"VModal",components:{TrashIcon:l()},props:{value:{type:Boolean,default:!1}},data(){return{modalCoords:{x:0,y:0}}},computed:{isModalVisible:{get(){return this.$props.value},set(t){this.$emit("input",t)}}},watch:{isModalVisible(t){t&&document.addEventListener("click",this.hideModalTarget,!0)}},mounted(){document.addEventListener("click",this.setCoords)},destroyed(){document.removeEventListener("click",this.setCoords)},methods:{hideModalTarget(t){this.$refs.modal.contains(t.target)||this.hideModal(),document.removeEventListener("click",this.hideModalTarget,!0)},hideModal(){this.isModalVisible=!1},remove(){this.$nextTick((()=>this.hideModal())),this.$emit("remove")},setCoords(t){this.modalCoords={x:t.clientX,y:t.clientY}}}},o=r,d=s(1001),c=(0,d.Z)(o,a,i,!1,null,null,null),u=c.exports},584:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return V}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-view"},[t.cards?e("v-table",{attrs:{data:t.cards},on:{"remove-item":t.removeCard}}):e("Loading")],1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",{staticClass:"tbody"},t._l(t.data,(function(s){return e("v-table-row",t._b({key:s.id},"v-table-row",s,!1),[e("div",{class:["more",{active:s.id===t.activeItem?.id}],on:{click:function(e){return t.showModal(e,s)}}},[e("more-icon",{staticClass:"more-icon"})],1)])})),1)]),e("v-modal",{on:{input:t.modalVisibleHandler,remove:t.removeItem},model:{value:t.isModalVisible,callback:function(e){t.isModalVisible=e},expression:"isModalVisible"}})],1)},l=[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead"},[e("tr",{staticClass:"thead-tr"},[e("td",{staticClass:"thead-td"},[t._v(" ID ")]),e("td",{staticClass:"thead-td"},[t._v(" Номер накладной ")]),e("td",{staticClass:"thead-td"},[t._v(" Тип заказа ")]),e("td",{staticClass:"thead-td"},[t._v(" Дата создания ")]),e("td",{staticClass:"thead-td"})])])}],r=function(){var t=this,e=t._self._c;return e("tr",{staticClass:"tr"},[e("td",{staticClass:"td"},[t._v(" "+t._s(t.id)+" ")]),e("td",{staticClass:"td"},[t._v(" "+t._s(t.number)+" ")]),e("td",{staticClass:"td"},[t._v(" "+t._s(t.CardDeliveryNames[t.type])+" ")]),e("td",{staticClass:"td"},[t._v(" "+t._s(t.creationDate)+" ")]),e("td",{staticClass:"td"},[t._t("default")],2)])},o=[],d=s(2062),c={name:"VTableRow",props:{id:{type:String,default:""},number:{type:String,default:""},type:{type:String,default:""},creationDate:{type:String,default:""}},data(){return{CardDeliveryNames:d.Z}}},u=c,m=s(1001),v=(0,m.Z)(u,r,o,!1,null,null,null),h=v.exports,p=s(5689),C=s(5667),f=s.n(C),y={name:"VTable",components:{VTableRow:h,MoreIcon:f(),VModal:p.Z},props:{data:{type:Array,default:()=>[]}},data(){return{isModalVisible:!1,activeItem:null}},methods:{removeItem(){this.$emit("remove-item",this.activeItem)},showModal(t,e){this.isModalVisible=!0,this.activeItem=e},modalVisibleHandler(t){t||(this.activeItem=null)}}},b=y,g=(0,m.Z)(b,n,l,!1,null,null,null),_=g.exports,w=s(9288),M={components:{VTable:_,Loading:w.Z},computed:{cards(){return this.$store.getters.getFilteredCards}},methods:{removeCard(t){this.$store.dispatch("removeCardById",t.id)}}},k=M,x=(0,m.Z)(k,a,i,!1,null,null,null),V=x.exports},4043:function(t){t.exports={functional:!0,render(t,e){const{_c:s,_v:a,data:i,children:n=[]}=e,{class:l,staticClass:r,style:o,staticStyle:d,attrs:c={},...u}=i;return s("svg",{class:[l,r],style:[{margin:"auto",background:"0 0","animation-play-state":"running","animation-delay":"0s"},o,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",style:"margin:auto;background:0 0;animation-play-state:running;animation-delay:0s",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",display:"block"},c),...u},n.concat([s("circle",{staticStyle:{"animation-play-state":"running","animation-delay":"0s"},attrs:{cx:"50",cy:"50",fill:"none",stroke:"currentColor","stroke-width":"10",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})])]))}}},5667:function(t){t.exports={functional:!0,render(t,e){const{_c:s,_v:a,data:i,children:n=[]}=e,{class:l,staticClass:r,style:o,staticStyle:d,attrs:c={},...u}=i;return s("svg",{class:[l,r],style:[o,d],attrs:Object.assign({viewBox:"0 0 4 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c),...u},n.concat([s("path",{attrs:{d:"M4 1.75C4 .787 3.1 0 2 0S0 .787 0 1.75C0 2.712.9 3.5 2 3.5s2-.788 2-1.75zm0 10.5c0-.963-.9-1.75-2-1.75s-2 .787-2 1.75S.9 14 2 14s2-.787 2-1.75zM4 7c0-.963-.9-1.75-2-1.75S0 6.037 0 7s.9 1.75 2 1.75S4 7.963 4 7z",fill:"currentColor"}})]))}}},3570:function(t){t.exports={functional:!0,render(t,e){const{_c:s,_v:a,data:i,children:n=[]}=e,{class:l,staticClass:r,style:o,staticStyle:d,attrs:c={},...u}=i;return s("svg",{class:[l,r],style:[o,d],attrs:Object.assign({viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c),...u},n.concat([s("path",{attrs:{d:"M8.943 3.333H1.057c-.239 0-.432.181-.432.405v6.315c0 1.074.933 1.947 2.08 1.947h4.59c1.147 0 2.08-.873 2.08-1.947V3.738c0-.224-.193-.405-.432-.405zM3.961 9.565c0 .274-.237.497-.53.497-.294 0-.531-.223-.531-.497V5.768c0-.274.237-.496.53-.496.294 0 .531.222.531.496v3.797zm3.14 0c0 .274-.238.497-.531.497-.294 0-.531-.223-.531-.497V5.768c0-.274.237-.496.53-.496.294 0 .531.222.531.496v3.797zM8.643.58H6.69V.44C6.69.196 6.453 0 6.16 0H3.84c-.292 0-.529.197-.529.44v.14H1.357C.609.58 0 1.087 0 1.71v.723c0 .13.126.235.282.235h9.436c.156 0 .282-.105.282-.235V1.71C10 1.087 9.391.58 8.643.58z",fill:"currentColor"}})]))}}}}]);
//# sourceMappingURL=table.02131ed4.js.map