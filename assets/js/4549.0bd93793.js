"use strict";(self.webpackChunkd3vue_cookbook=self.webpackChunkd3vue_cookbook||[]).push([[4549],{2541:(e,t,l)=>{l.r(t),l.d(t,{default:()=>D});var a=l(6252),n=l(3577),u=l(2262);const i=e=>((0,a.dD)("data-v-23d05a88"),e=e(),(0,a.Cn)(),e),r=["width","height"],o=["transform"],v={key:0,class:"boundary-container"},s=["width","height"],d=i((()=>(0,a._)("circle",{r:"2",cx:"0",cy:"0",fill:"grey"},null,-1))),h=i((()=>(0,a._)("text",{class:"info-text",x:"0",y:"0","text-anchor":"middle",dy:"-4"},"0/0",-1))),c=["cx"],w=["x"],y=["cy"],g=["y"],x=["cx","cy"],f=["x","y"],m=(0,a.aZ)({props:{width:{default:null},height:{default:null},class:{default:"base-component"},margin:{default:{top:50,left:50,right:50,bottom:50}},boundaries:{default:!1}},emits:["update:width","update:height"],setup(e,{emit:t}){const l=e,i=(0,u.iH)(null),m=(0,u.iH)(null),D=(0,u.iH)(null),p=(0,u.iH)(!0),_=(0,u.iH)(!0),k=(0,u.iH)(0),H=(0,u.iH)(0),b=(0,u.iH)(0),Y=(0,u.iH)(0);(0,a.bv)((()=>{_.value=0===l.width||void 0===l.width||null===l.width,p.value=0===l.height||void 0===l.height||null===l.height,window.addEventListener("resize",$),$()}));const $=()=>{(0,a.Y3)((()=>{i.value&&(m.value=parseInt(window.getComputedStyle(i.value).width,10),D.value=parseInt(window.getComputedStyle(i.value).height,10))}))};(0,a.YP)(m,(()=>{S()})),(0,a.YP)(D,(()=>{S()})),(0,a.YP)(l,(()=>{S()}));const S=()=>{$(),i.value&&(_.value?(k.value=0,H.value=0,(0,a.Y3)((()=>{H.value=m.value,k.value=H.value-l.margin.left-l.margin.right,t("update:width",k.value)}))):(H.value=l.width+l.margin.left+l.margin.right,k.value=l.width),p.value?(b.value=0,Y.value=0,(0,a.Y3)((()=>{Y.value=D.value,b.value=Y.value-l.margin.top-l.margin.bottom,t("update:height",b.value)}))):(Y.value=l.height+l.margin.top+l.margin.bottom,b.value=l.height))};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(l.class),ref_key:"root",ref:i},[((0,a.wg)(),(0,a.iD)("svg",{width:H.value,height:Y.value,xmlns:"http://www.w3.org/2000/svg"},[(0,a.WI)(e.$slots,"defs"),(0,a.WI)(e.$slots,"right"),(0,a._)("g",{transform:`translate(${l.margin.top} ${l.margin.left})`},[l.boundaries||""===l.boundaries?((0,a.wg)(),(0,a.iD)("g",v,[(0,a._)("rect",{width:k.value,height:b.value,stroke:"lightgrey","stroke-width":"1","stroke-dasharray":"5","stroke-dashoffset":"2",fill:"none"},null,8,s),d,h,(0,a._)("circle",{r:"2",cx:k.value,cy:0,fill:"grey"},null,8,c),(0,a._)("text",{class:"info-text",x:k.value,y:0,"text-anchor":"middle",dy:"-4"},(0,n.zw)(k.value)+"/0",9,w),(0,a._)("circle",{r:"2",cx:"0",cy:b.value,fill:"grey"},null,8,y),(0,a._)("text",{class:"info-text",x:"0",y:b.value,"text-anchor":"middle",dy:"10"},"0/"+(0,n.zw)(b.value),9,g),(0,a._)("circle",{r:"2",cx:k.value,cy:b.value,fill:"grey"},null,8,x),(0,a._)("text",{class:"info-text",x:k.value,y:b.value,"text-anchor":"middle",dy:"10"},(0,n.zw)(k.value)+"/"+(0,n.zw)(b.value),9,f)])):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"default")],8,o)],8,r))],2))}}),D=(0,l(3744).Z)(m,[["__scopeId","data-v-23d05a88"]])},4549:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var a=l(6252),n=l(2262),u=l(3577),i=l(9112),r=l(2541);const o={class:"chart-component"},v=["transform"],s=["transform"],d=["stroke","d"],h={key:0},c=["cx","cy","stroke","fill"],w=["x","width","height"],y={class:"content"},g={class:"title"},x=["href"],f={setup(e){const t=(0,n.iH)(null),l=(0,n.iH)(null),f=(0,n.iH)(200),m=(0,n.iH)(null),D=(0,n.iH)(null);(0,a.m0)((()=>{m.value&&F()})),(0,a.YP)(t,(()=>{t.value&&(l.value=t.value,(0,a.Y3)((()=>{!function(){const e=(0,i.LLu)(H.value),t=(0,i.y4O)(b.value);(0,i.Ys)(p.value).call(e),(0,i.Ys)(_.value).call(t)}()})))}));const p=(0,n.iH)(null),_=(0,n.iH)(null),k=[[{x:new Date(2022,0,1),y:0},{x:new Date(2022,1,1),y:2},{x:new Date(2022,2,1),y:4},{x:new Date(2022,3,1),y:8},{x:new Date(2022,4,1),y:16},{x:new Date(2022,5,1),y:32}],[{x:new Date(2022,0,1),y:0},{x:new Date(2022,1,1),y:3},{x:new Date(2022,2,1),y:9},{x:new Date(2022,3,1),y:27},{x:new Date(2022,4,1),y:81},{x:new Date(2022,5,1),y:243}],[{x:new Date(2022,0,1),y:0},{x:new Date(2022,1,1),y:4},{x:new Date(2022,2,1),y:16},{x:new Date(2022,3,1),y:64},{x:new Date(2022,4,1),y:256},{x:new Date(2022,5,1),y:512}],[{x:new Date(2022,0,1),y:0},{x:new Date(2022,1,1),y:5},{x:new Date(2022,2,1),y:25},{x:new Date(2022,3,1),y:125},{x:new Date(2022,4,1),y:375},{x:new Date(2022,5,1),y:812}],[{x:new Date(2022,0,1),y:0},{x:new Date(2022,1,1),y:6},{x:new Date(2022,2,1),y:36},{x:new Date(2022,3,1),y:216},{x:new Date(2022,4,1),y:570},{x:new Date(2022,5,1),y:1200}]].reverse(),H=(0,a.Fl)((()=>(0,i.Xf)().domain([new Date(2022,0,1),new Date(2022,5,1)]).range([0,l.value]))),b=(0,a.Fl)((()=>(0,i.BYU)().domain([0,(0,i.Fp7)(k.flat(),(e=>e.y))]).range([f.value,0]))),Y=(0,a.Fl)((()=>(0,i.jvg)().x((e=>H.value(e.x))).y((e=>b.value(e.y??0))))),$=(0,a.Fl)((()=>{const e=k[0].map((e=>[H.value(e.x),0]));return i.oc6.from(e)})),S=(0,a.Fl)((()=>{if(D){let e=-I.value.width/2;return 0===D.value&&(e=0),D.value===k[0].length-1&&(e=-I.value.width),H.value(k[0][D.value].x)+e}})),U=(0,n.iH)(null),I=(0,n.iH)({width:100,height:150});(0,a.YP)(D,(()=>{(0,a.Y3)((()=>{if(D.value){const e=U.value.querySelector(".content"),t=86;let l=e.offsetWidth+32;const a=e.offsetHeight+32;l<t&&(l=t),I.value.width=l,I.value.height=a}}))}));const z=(0,n.iH)(null),F=()=>{const e=m.value.$el.querySelector("svg");e.addEventListener("mousemove",(e=>{const t=(0,i.cx$)(e);z.value=[t[0]-50,t[1]-50],D.value=$.value.find(t[0]-50,t[1]-50)})),e.addEventListener("mouseleave",(e=>{D.value=null}))};return(e,l)=>((0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)((0,n.SU)(r.default),{width:t.value,"onUpdate:width":l[0]||(l[0]=e=>t.value=e),height:f.value,ref_key:"wrapper",ref:m,margin:{top:50,left:50,right:50,bottom:50}},{default:(0,a.w5)((()=>{return[(0,a._)("g",{ref_key:"xAxisRef",ref:p,transform:`translate(0, ${f.value})`},null,8,v),(0,a._)("g",{ref_key:"yAxisRef",ref:_,transform:"translate(0, 0)"},null,8,s),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(k),((e,t)=>((0,a.wg)(),(0,a.iD)("g",null,[(0,a._)("path",{fill:"none",stroke:`var(--c-chart-${t})`,"stroke-width":"1",d:(0,n.SU)(Y)(e)},null,8,d),null!==D.value?((0,a.wg)(),(0,a.iD)("g",h,[(0,a._)("circle",{cx:(0,n.SU)(H)(e[D.value].x),cy:(0,n.SU)(b)(e[D.value].y),stroke:`var(--c-chart-${t})`,fill:`var(--c-chart-${t})`,r:"4"},null,8,c)])):(0,a.kq)("",!0)])))),256)),null!==D.value?((0,a.wg)(),(0,a.iD)("foreignObject",{key:0,class:"tool-box",x:(0,n.SU)(S),y:0,width:I.value.width,height:I.value.height,ref_key:"$toolBox",ref:U},[(0,a._)("div",y,[(0,a._)("p",g,(0,u.zw)((e=(0,n.SU)(k)[0][D.value].x,new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"}).format(e))),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(k),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"item",style:(0,u.j5)(`--c-dot: var(--c-chart-${t});`)},[(0,a._)("span",null,(0,u.zw)(e[D.value].y),1)],4)))),256))])],8,w)):(0,a.kq)("",!0)];var e})),_:1},8,["width","height"]),(0,a._)("a",{class:"repolink",href:`${e.componentsRepoPath}/guide/interactions/Toolbox.vue`,target:"_blank"},"see full code example on github",8,x)]))}},m=(0,l(3744).Z)(f,[["__scopeId","data-v-6e64b270"]])}}]);