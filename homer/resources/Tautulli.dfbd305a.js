import{s as o}from"./service.75442091.js";import{_ as n,G as l,r as _,o as s,c as m,w as u,a as d,b as a,t as f,e as r}from"./index.9814e65e.js";const h={name:"Tautulli",mixins:[o],props:{item:Object},components:{Generic:l},data:()=>({stats:null,error:!1}),computed:{streams:function(){return this.stats?this.stats.stream_count:""}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){try{const t=await this.fetch(`/api/v2?apikey=${this.item.apikey}&cmd=get_activity`);this.error=!1,this.stats=t.response.data}catch(t){this.error=!0,console.error(t)}}}},p={class:"notifs"},y=["title"],v={key:1,class:"notif error fa-solid fa-triangle-exclamation",title:"Unable to fetch current status"};function k(t,g,c,x,b,e){const i=_("Generic");return s(),m(i,{item:c.item},{indicator:u(()=>[d("div",p,[e.streams>0?(s(),a("strong",{key:0,class:"notif playing",title:`${e.streams} active stream${e.streams>1?"s":""}`},f(e.streams),9,y)):r("",!0),t.error?(s(),a("i",v)):r("",!0)])]),_:1},8,["item"])}const w=n(h,[["render",k],["__scopeId","data-v-558c82eb"]]);export{w as default};
