"use strict";(self.webpackChunkd3vue_cookbook=self.webpackChunkd3vue_cookbook||[]).push([[7898],{2541:(e,t,l)=>{l.r(t),l.d(t,{default:()=>p});var a=l(6252),i=l(3577),u=l(2262);const d=e=>((0,a.dD)("data-v-23d05a88"),e=e(),(0,a.Cn)(),e),n=["width","height"],r=["transform"],h={key:0,class:"boundary-container"},o=["width","height"],v=d((()=>(0,a._)("circle",{r:"2",cx:"0",cy:"0",fill:"grey"},null,-1))),s=d((()=>(0,a._)("text",{class:"info-text",x:"0",y:"0","text-anchor":"middle",dy:"-4"},"0/0",-1))),g=["cx"],c=["x"],w=["cy"],y=["y"],f=["cx","cy"],x=["x","y"],m=(0,a.aZ)({props:{width:{default:null},height:{default:null},class:{default:"base-component"},margin:{default:{top:50,left:50,right:50,bottom:50}},boundaries:{default:!1}},emits:["update:width","update:height"],setup(e,{emit:t}){const l=e,d=(0,u.iH)(null),m=(0,u.iH)(null),p=(0,u.iH)(null),_=(0,u.iH)(!0),k=(0,u.iH)(!0),b=(0,u.iH)(0),H=(0,u.iH)(0),Y=(0,u.iH)(0),S=(0,u.iH)(0);(0,a.bv)((()=>{k.value=0===l.width||void 0===l.width||null===l.width,_.value=0===l.height||void 0===l.height||null===l.height,window.addEventListener("resize",U),U()}));const U=()=>{(0,a.Y3)((()=>{d.value&&(m.value=parseInt(window.getComputedStyle(d.value).width,10),p.value=parseInt(window.getComputedStyle(d.value).height,10))}))};(0,a.YP)(m,(()=>{$()})),(0,a.YP)(p,(()=>{$()})),(0,a.YP)(l,(()=>{$()}));const $=()=>{U(),d.value&&(k.value?(b.value=0,H.value=0,(0,a.Y3)((()=>{H.value=m.value,b.value=H.value-l.margin.left-l.margin.right,t("update:width",b.value)}))):(H.value=l.width+l.margin.left+l.margin.right,b.value=l.width),_.value?(Y.value=0,S.value=0,(0,a.Y3)((()=>{S.value=p.value,Y.value=S.value-l.margin.top-l.margin.bottom,t("update:height",Y.value)}))):(S.value=l.height+l.margin.top+l.margin.bottom,Y.value=l.height))};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(l.class),ref_key:"root",ref:d},[((0,a.wg)(),(0,a.iD)("svg",{width:H.value,height:S.value,xmlns:"http://www.w3.org/2000/svg"},[(0,a.WI)(e.$slots,"defs"),(0,a.WI)(e.$slots,"right"),(0,a._)("g",{transform:`translate(${l.margin.top} ${l.margin.left})`},[l.boundaries||""===l.boundaries?((0,a.wg)(),(0,a.iD)("g",h,[(0,a._)("rect",{width:b.value,height:Y.value,stroke:"lightgrey","stroke-width":"1","stroke-dasharray":"5","stroke-dashoffset":"2",fill:"none"},null,8,o),v,s,(0,a._)("circle",{r:"2",cx:b.value,cy:0,fill:"grey"},null,8,g),(0,a._)("text",{class:"info-text",x:b.value,y:0,"text-anchor":"middle",dy:"-4"},(0,i.zw)(b.value)+"/0",9,c),(0,a._)("circle",{r:"2",cx:"0",cy:Y.value,fill:"grey"},null,8,w),(0,a._)("text",{class:"info-text",x:"0",y:Y.value,"text-anchor":"middle",dy:"10"},"0/"+(0,i.zw)(Y.value),9,y),(0,a._)("circle",{r:"2",cx:b.value,cy:Y.value,fill:"grey"},null,8,f),(0,a._)("text",{class:"info-text",x:b.value,y:Y.value,"text-anchor":"middle",dy:"10"},(0,i.zw)(b.value)+"/"+(0,i.zw)(Y.value),9,x)])):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"default")],8,r)],8,n))],2))}}),p=(0,l(3744).Z)(m,[["__scopeId","data-v-23d05a88"]])},7898:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(6252),i=l(2262),u=l(9112),d=l(2541);const n=["fill","x","y","width","height"],r=(0,a.aZ)({setup(e){const t=(0,i.iH)(null),l=(0,i.iH)(200),r=[{x:0,y:9},{x:1,y:7},{x:2,y:5},{x:3,y:4},{x:4,y:8}],h=(0,a.Fl)((()=>(0,u.tiA)().domain(r.map((({x:e})=>e))).range([0,t.value]).padding(.3))),o=(0,a.Fl)((()=>(0,u.BYU)().domain([0,(0,u.Fp7)(r,(e=>e.y))]).range([l.value,0])));return(e,u)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)((0,i.SU)(d.default),{width:t.value,"onUpdate:width":u[0]||(u[0]=e=>t.value=e),height:l.value},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(r,((e,t)=>(0,a._)("rect",{fill:`var(--c-chart-${t})`,"stroke-width":"1",key:`bar-${t}`,x:(0,i.SU)(h)(e.x),y:(0,i.SU)(o)(e.y),width:(0,i.SU)(h).bandwidth(),height:l.value-(0,i.SU)(o)(e.y)},null,8,n))),64))])),_:1},8,["width","height"])]))}})}}]);