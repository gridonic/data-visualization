"use strict";(self.webpackChunkd3vue_cookbook=self.webpackChunkd3vue_cookbook||[]).push([[900],{2541:(e,t,l)=>{l.r(t),l.d(t,{default:()=>p});var a=l(6252),i=l(3577),u=l(2262);const n=e=>((0,a.dD)("data-v-23d05a88"),e=e(),(0,a.Cn)(),e),r=["width","height"],o=["transform"],d={key:0,class:"boundary-container"},s=["width","height"],v=n((()=>(0,a._)("circle",{r:"2",cx:"0",cy:"0",fill:"grey"},null,-1))),h=n((()=>(0,a._)("text",{class:"info-text",x:"0",y:"0","text-anchor":"middle",dy:"-4"},"0/0",-1))),c=["cx"],g=["x"],f=["cy"],x=["y"],y=["cx","cy"],w=["x","y"],m=(0,a.aZ)({props:{width:{default:null},height:{default:null},class:{default:"base-component"},margin:{default:{top:50,left:50,right:50,bottom:50}},boundaries:{default:!1}},emits:["update:width","update:height"],setup(e,{emit:t}){const l=e,n=(0,u.iH)(null),m=(0,u.iH)(null),p=(0,u.iH)(null),k=(0,u.iH)(!0),_=(0,u.iH)(!0),b=(0,u.iH)(0),H=(0,u.iH)(0),Y=(0,u.iH)(0),$=(0,u.iH)(0);(0,a.bv)((()=>{_.value=0===l.width||void 0===l.width||null===l.width,k.value=0===l.height||void 0===l.height||null===l.height,window.addEventListener("resize",F),F()}));const F=()=>{(0,a.Y3)((()=>{n.value&&(m.value=parseInt(window.getComputedStyle(n.value).width,10),p.value=parseInt(window.getComputedStyle(n.value).height,10))}))};(0,a.YP)(m,(()=>{S()})),(0,a.YP)(p,(()=>{S()})),(0,a.YP)(l,(()=>{S()}));const S=()=>{F(),n.value&&(_.value?(b.value=0,H.value=0,(0,a.Y3)((()=>{H.value=m.value,b.value=H.value-l.margin.left-l.margin.right,t("update:width",b.value)}))):(H.value=l.width+l.margin.left+l.margin.right,b.value=l.width),k.value?(Y.value=0,$.value=0,(0,a.Y3)((()=>{$.value=p.value,Y.value=$.value-l.margin.top-l.margin.bottom,t("update:height",Y.value)}))):($.value=l.height+l.margin.top+l.margin.bottom,Y.value=l.height))};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(l.class),ref_key:"root",ref:n},[((0,a.wg)(),(0,a.iD)("svg",{width:H.value,height:$.value,xmlns:"http://www.w3.org/2000/svg"},[(0,a.WI)(e.$slots,"defs"),(0,a.WI)(e.$slots,"right"),(0,a._)("g",{transform:`translate(${l.margin.top} ${l.margin.left})`},[l.boundaries||""===l.boundaries?((0,a.wg)(),(0,a.iD)("g",d,[(0,a._)("rect",{width:b.value,height:Y.value,stroke:"lightgrey","stroke-width":"1","stroke-dasharray":"5","stroke-dashoffset":"2",fill:"none"},null,8,s),v,h,(0,a._)("circle",{r:"2",cx:b.value,cy:0,fill:"grey"},null,8,c),(0,a._)("text",{class:"info-text",x:b.value,y:0,"text-anchor":"middle",dy:"-4"},(0,i.zw)(b.value)+"/0",9,g),(0,a._)("circle",{r:"2",cx:"0",cy:Y.value,fill:"grey"},null,8,f),(0,a._)("text",{class:"info-text",x:"0",y:Y.value,"text-anchor":"middle",dy:"10"},"0/"+(0,i.zw)(Y.value),9,x),(0,a._)("circle",{r:"2",cx:b.value,cy:Y.value,fill:"grey"},null,8,y),(0,a._)("text",{class:"info-text",x:b.value,y:Y.value,"text-anchor":"middle",dy:"10"},(0,i.zw)(b.value)+"/"+(0,i.zw)(Y.value),9,w)])):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"default")],8,o)],8,r))],2))}}),p=(0,l(3744).Z)(m,[["__scopeId","data-v-23d05a88"]])},900:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var a=l(6252),i=l(2262),u=l(9112),n=l(2541);const r=["d"],o=["transform"],d=["transform"],s=["cx","cy"],v={setup(e){const t=(0,i.iH)(null),l=(0,i.iH)(200),v=[{x:0,y:0},{x:20,y:2e3},{x:40,y:6e3},{x:60,y:0},{x:80,y:8e3},{x:100,y:1e4}],h=(0,a.Fl)((()=>(0,u.BYU)().domain([(0,u.VV$)(v,(e=>e.x)),(0,u.Fp7)(v,(e=>e.x))]).range([0,t.value]))),c=(0,a.Fl)((()=>(0,u.BYU)().domain([0,(0,u.Fp7)(v,(e=>e.y))]).range([l.value,0]))),g=(0,a.Fl)((()=>(0,u.jvg)().x((e=>h.value(e.x))).y((e=>c.value(e.y??0)))));(0,a.YP)(t,(()=>{t.value&&(0,a.Y3)((()=>{!function(){const e=(0,u.LLu)(h.value),t=(0,u.y4O)(c.value).tickFormat((function(e){const t=(e/1e3).toFixed(1);return this.parentNode.nextSibling?` ${t}k`:`${t}k`}));(0,u.Ys)(f.value).call(e),(0,u.Ys)(x.value).call(t)}()}))}));const f=(0,i.iH)(null),x=(0,i.iH)(null);return(e,u)=>((0,a.wg)(),(0,a.j4)((0,i.SU)(n.default),{width:t.value,"onUpdate:width":u[0]||(u[0]=e=>t.value=e),height:l.value,margin:{top:50,left:50,right:50,bottom:50}},{default:(0,a.w5)((()=>[(0,a._)("path",{fill:"none",stroke:"var(--c-brand)","stroke-width":"1",d:(0,i.SU)(g)(v)},null,8,r),(0,a._)("g",{ref_key:"xAxisRef",ref:f,transform:`translate(0, ${l.value})`},null,8,o),(0,a._)("g",{ref_key:"yAxisRef",ref:x,transform:"translate(0, 0)"},null,8,d),((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(v,((e,t)=>(0,a._)("circle",{key:"`serie-point-${index}`",r:"3",fill:"var(--c-brand)",cx:(0,i.SU)(h)(e.x),cy:(0,i.SU)(c)(e.y)},null,8,s))),64))])),_:1},8,["width","height"]))}}}}]);