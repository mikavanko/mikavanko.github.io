(self["webpackChunkksk"]=self["webpackChunkksk"]||[]).push([[12],{9288:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("loading-icon",{staticClass:"loading"})},i=[],n=s(4043),o=s.n(n),r={name:"VLoading",components:{LoadingIcon:o()}},l=r,c=s(1001),d=(0,c.Z)(l,a,i,!1,null,null,null),u=d.exports},5689:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return t.isModalVisible?e("div",{ref:"modal",staticClass:"modal",style:{"--left":t.modalCoords.x+"px","--top":t.modalCoords.y+"px"},on:{click:t.remove}},[e("trash-icon",{staticClass:"modal-icon"}),e("span",{staticClass:"modal-text"},[t._v("удалить")])],1):t._e()},i=[],n=s(3570),o=s.n(n),r={name:"VModal",components:{TrashIcon:o()},props:{value:{type:Boolean,default:!1}},data(){return{modalCoords:{x:0,y:0}}},computed:{isModalVisible:{get(){return this.$props.value},set(t){this.$emit("input",t)}}},watch:{isModalVisible(t){t&&document.addEventListener("click",this.hideModalTarget,!0)}},mounted(){document.addEventListener("click",this.setCoords)},destroyed(){document.removeEventListener("click",this.setCoords)},methods:{hideModalTarget(t){this.$refs.modal.contains(t.target)||this.hideModal(),document.removeEventListener("click",this.hideModalTarget,!0)},hideModal(){this.isModalVisible=!1},remove(){this.$nextTick((()=>this.hideModal())),this.$emit("remove")},setCoords(t){this.modalCoords={x:t.clientX,y:t.clientY}}}},l=r,c=s(1001),d=(0,c.Z)(l,a,i,!1,null,null,null),u=d.exports},1631:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cards-view"},[t.cards?e("div",{staticClass:"cards"},t._l(t.cards,(function(s){return e("v-card",t._b({key:s.id,on:{"remove-item-id":t.removeCardById}},"v-card",s,!1))})),1):e("Loading")],1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"card-header__title"},[t._v(" "+t._s(t.id)+" ")]),e("div",{class:["more",{active:t.isModalVisible}],on:{click:t.showModal}},[e("more-icon",{staticClass:"more-icon"})],1)]),e("div",{staticClass:"card-body"},t._l(t.cardData,(function(s,a){return e("div",{key:a,staticClass:"card-body__row"},[e("div",{staticClass:"card-body__title"},[t._v(" "+t._s(s.title)+" ")]),e("div",{staticClass:"card-body__text"},[t._v(" "+t._s(s.text)+" ")])])})),0),e("v-modal",{on:{remove:t.removeItem},model:{value:t.isModalVisible,callback:function(e){t.isModalVisible=e},expression:"isModalVisible"}})],1)},o=[],r=s(5689),l=s(5667),c=s.n(l),d=s(2062),u={name:"VCard",components:{MoreIcon:c(),VModal:r.Z},props:{id:{type:String,default:""},number:{type:String,default:""},type:{type:String,default:""},creationDate:{type:String,default:""}},data(){return{isModalVisible:!1,isActive:!1,cardData:[{title:"Номер накладной:",text:this.$props.number},{title:"Тип заказа:",text:d.Z[this.$props.type]},{title:"Дата создания:",text:this.$props.creationDate}]}},methods:{removeItem(){this.$emit("remove-item-id",this.$props.id)},showModal(){this.isModalVisible=!0}}},m=u,v=s(1001),h=(0,v.Z)(m,n,o,!1,null,null,null),p=h.exports,y=s(9288),f={components:{VCard:p,Loading:y.Z},computed:{cards(){return this.$store.getters.getFilteredCards}},mounted(){},methods:{removeCardById(t){this.$store.dispatch("removeCardById",t)}}},C=f,g=(0,v.Z)(C,a,i,!1,null,null,null),_=g.exports},4043:function(t){t.exports={functional:!0,render(t,e){const{_c:s,_v:a,data:i,children:n=[]}=e,{class:o,staticClass:r,style:l,staticStyle:c,attrs:d={},...u}=i;return s("svg",{class:[o,r],style:[{margin:"auto",background:"0 0","animation-play-state":"running","animation-delay":"0s"},l,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",style:"margin:auto;background:0 0;animation-play-state:running;animation-delay:0s",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",display:"block"},d),...u},n.concat([s("circle",{staticStyle:{"animation-play-state":"running","animation-delay":"0s"},attrs:{cx:"50",cy:"50",fill:"none",stroke:"currentColor","stroke-width":"10",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})])]))}}},5667:function(t){t.exports={functional:!0,render(t,e){const{_c:s,_v:a,data:i,children:n=[]}=e,{class:o,staticClass:r,style:l,staticStyle:c,attrs:d={},...u}=i;return s("svg",{class:[o,r],style:[l,c],attrs:Object.assign({viewBox:"0 0 4 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),...u},n.concat([s("path",{attrs:{d:"M4 1.75C4 .787 3.1 0 2 0S0 .787 0 1.75C0 2.712.9 3.5 2 3.5s2-.788 2-1.75zm0 10.5c0-.963-.9-1.75-2-1.75s-2 .787-2 1.75S.9 14 2 14s2-.787 2-1.75zM4 7c0-.963-.9-1.75-2-1.75S0 6.037 0 7s.9 1.75 2 1.75S4 7.963 4 7z",fill:"currentColor"}})]))}}},3570:function(t){t.exports={functional:!0,render(t,e){const{_c:s,_v:a,data:i,children:n=[]}=e,{class:o,staticClass:r,style:l,staticStyle:c,attrs:d={},...u}=i;return s("svg",{class:[o,r],style:[l,c],attrs:Object.assign({viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),...u},n.concat([s("path",{attrs:{d:"M8.943 3.333H1.057c-.239 0-.432.181-.432.405v6.315c0 1.074.933 1.947 2.08 1.947h4.59c1.147 0 2.08-.873 2.08-1.947V3.738c0-.224-.193-.405-.432-.405zM3.961 9.565c0 .274-.237.497-.53.497-.294 0-.531-.223-.531-.497V5.768c0-.274.237-.496.53-.496.294 0 .531.222.531.496v3.797zm3.14 0c0 .274-.238.497-.531.497-.294 0-.531-.223-.531-.497V5.768c0-.274.237-.496.53-.496.294 0 .531.222.531.496v3.797zM8.643.58H6.69V.44C6.69.196 6.453 0 6.16 0H3.84c-.292 0-.529.197-.529.44v.14H1.357C.609.58 0 1.087 0 1.71v.723c0 .13.126.235.282.235h9.436c.156 0 .282-.105.282-.235V1.71C10 1.087 9.391.58 8.643.58z",fill:"currentColor"}})]))}}}}]);
//# sourceMappingURL=cards.d38aa664.js.map