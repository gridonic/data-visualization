"use strict";(self.webpackChunkd3vue_cookbook=self.webpackChunkd3vue_cookbook||[]).push([[1014],{2541:(e,l,t)=>{t.r(l),t.d(l,{default:()=>p});var a=t(6252),u=t(3577),i=t(2262);const d=e=>((0,a.dD)("data-v-23d05a88"),e=e(),(0,a.Cn)(),e),n=["width","height"],r=["transform"],v={key:0,class:"boundary-container"},o=["width","height"],s=d((()=>(0,a._)("circle",{r:"2",cx:"0",cy:"0",fill:"grey"},null,-1))),h=d((()=>(0,a._)("text",{class:"info-text",x:"0",y:"0","text-anchor":"middle",dy:"-4"},"0/0",-1))),c=["cx"],g=["x"],w=["cy"],x=["y"],y=["cx","cy"],f=["x","y"],m=(0,a.aZ)({props:{width:{default:null},height:{default:null},class:{default:"base-component"},margin:{default:{top:50,left:50,right:50,bottom:50}},boundaries:{default:!1}},emits:["update:width","update:height"],setup(e,{emit:l}){const t=e,d=(0,i.iH)(null),m=(0,i.iH)(null),p=(0,i.iH)(null),_=(0,i.iH)(!0),b=(0,i.iH)(!0),k=(0,i.iH)(0),H=(0,i.iH)(0),z=(0,i.iH)(0),U=(0,i.iH)(0);(0,a.bv)((()=>{b.value=0===t.width||void 0===t.width||null===t.width,_.value=0===t.height||void 0===t.height||null===t.height,window.addEventListener("resize",I),I()}));const I=()=>{(0,a.Y3)((()=>{d.value&&(m.value=parseInt(window.getComputedStyle(d.value).width,10),p.value=parseInt(window.getComputedStyle(d.value).height,10))}))};(0,a.YP)(m,(()=>{S()})),(0,a.YP)(p,(()=>{S()})),(0,a.YP)(t,(()=>{S()}));const S=()=>{I(),d.value&&(b.value?(k.value=0,H.value=0,(0,a.Y3)((()=>{H.value=m.value,k.value=H.value-t.margin.left-t.margin.right,l("update:width",k.value)}))):(H.value=t.width+t.margin.left+t.margin.right,k.value=t.width),_.value?(z.value=0,U.value=0,(0,a.Y3)((()=>{U.value=p.value,z.value=U.value-t.margin.top-t.margin.bottom,l("update:height",z.value)}))):(U.value=t.height+t.margin.top+t.margin.bottom,z.value=t.height))};return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,u.C_)(t.class),ref_key:"root",ref:d},[((0,a.wg)(),(0,a.iD)("svg",{width:H.value,height:U.value,xmlns:"http://www.w3.org/2000/svg"},[(0,a.WI)(e.$slots,"defs"),(0,a.WI)(e.$slots,"right"),(0,a._)("g",{transform:`translate(${t.margin.top} ${t.margin.left})`},[t.boundaries||""===t.boundaries?((0,a.wg)(),(0,a.iD)("g",v,[(0,a._)("rect",{width:k.value,height:z.value,stroke:"lightgrey","stroke-width":"1","stroke-dasharray":"5","stroke-dashoffset":"2",fill:"none"},null,8,o),s,h,(0,a._)("circle",{r:"2",cx:k.value,cy:0,fill:"grey"},null,8,c),(0,a._)("text",{class:"info-text",x:k.value,y:0,"text-anchor":"middle",dy:"-4"},(0,u.zw)(k.value)+"/0",9,g),(0,a._)("circle",{r:"2",cx:"0",cy:z.value,fill:"grey"},null,8,w),(0,a._)("text",{class:"info-text",x:"0",y:z.value,"text-anchor":"middle",dy:"10"},"0/"+(0,u.zw)(z.value),9,x),(0,a._)("circle",{r:"2",cx:k.value,cy:z.value,fill:"grey"},null,8,y),(0,a._)("text",{class:"info-text",x:k.value,y:z.value,"text-anchor":"middle",dy:"10"},(0,u.zw)(k.value)+"/"+(0,u.zw)(z.value),9,f)])):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"default")],8,r)],8,n))],2))}}),p=(0,t(3744).Z)(m,[["__scopeId","data-v-23d05a88"]])},1014:(e,l,t)=>{t.r(l),t.d(l,{default:()=>c});var a=t(6252),u=t(3577),i=t(9963),d=t(2262),n=t(9112),r=t(2541);const v=["x","y"],o=["x","y"],s=["cx","cy"],h=(0,a.aZ)({setup(e){const l=(0,d.iH)(10),t=(0,d.iH)(null),h=(0,d.iH)(40),c=(0,a.Fl)((()=>(0,n.BYU)().domain([0,100]).range([0,t.value])));return(e,n)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("span",null,(0,u.zw)(0)),(0,a.wy)((0,a._)("input",{type:"range","onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),min:0,max:100},null,512),[[i.nr,l.value]]),(0,a._)("span",null,(0,u.zw)(100)),(0,a.Wm)((0,d.SU)(r.default),{width:t.value,"onUpdate:width":n[1]||(n[1]=e=>t.value=e),height:h.value,boundaries:""},{default:(0,a.w5)((()=>[(0,a._)("text",{class:"info-text",x:(0,d.SU)(c)(l.value),y:h.value/2,"text-anchor":"middle",dy:"-8"},(0,u.zw)(l.value),9,v),(0,a._)("text",{class:"info-text",x:(0,d.SU)(c)(l.value),y:h.value/2,"text-anchor":"middle",dy:"16"},(0,u.zw)((0,d.SU)(c)(l.value)),9,o),(0,a._)("circle",{r:"5",fill:"var(--c-brand)",cx:(0,d.SU)(c)(l.value),cy:h.value/2},null,8,s)])),_:1},8,["width","height"])]))}}),c=(0,t(3744).Z)(h,[["__scopeId","data-v-cce9116e"]])}}]);