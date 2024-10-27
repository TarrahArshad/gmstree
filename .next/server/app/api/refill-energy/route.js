"use strict";(()=>{var e={};e.id=302,e.ids=[302],e.modules={3524:e=>{e.exports=require("@prisma/client")},4530:e=>{e.exports=require("@prisma/client/runtime/library")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4770:e=>{e.exports=require("crypto")},6254:(e,t,n)=>{n.r(t),n.d(t,{originalPathname:()=>x,patchFetch:()=>h,requestAsyncStorage:()=>m,routeModule:()=>g,serverHooks:()=>v,staticGenerationAsyncStorage:()=>y});var r={};n.r(r),n.d(r,{POST:()=>d});var i=n(3278),s=n(5002),a=n(4877),l=n(1309),o=n(8713),u=n(3656),c=n(6176),f=n(4530),p=n(9495);async function d(e){let{initData:t}=await e.json();if(!t)return l.NextResponse.json({error:"Invalid request"},{status:400});let{validatedData:n,user:r}=(0,u.M)(t);if(!n)return l.NextResponse.json({error:"Invalid Telegram data"},{status:403});let i=r.id?.toString();if(!i)return l.NextResponse.json({error:"Invalid user data"},{status:400});let s=0;for(;s<3;)try{let e=await o.Z.$transaction(async e=>{let t=await e.user.findUnique({where:{telegramId:i}});if(!t)throw Error("User not found");let n=new Date,r=new Date(t.lastEnergyRefillsTimestamp),s=n.getTime()-r.getTime();if((n.getUTCDate()!==r.getUTCDate()||n.getUTCMonth()!==r.getUTCMonth()||n.getUTCFullYear()!==r.getUTCFullYear())&&(t.energyRefillsLeft=p.AG),t.energyRefillsLeft<p.AG){if(t.energyRefillsLeft<=0)throw Error("No refills left for today");if(s<p.kw)throw Error("Refill is still on cooldown")}let a=(0,c.Ol)(t.energyLimitLevelIndex),l=await e.user.update({where:{telegramId:i,lastEnergyRefillsTimestamp:t.lastEnergyRefillsTimestamp},data:{energy:a,energyRefillsLeft:{decrement:1},lastEnergyRefillsTimestamp:n}});return l?{energy:l.energy,energyRefillsLeft:l.energyRefillsLeft,lastEnergyRefillsTimestamp:l.lastEnergyRefillsTimestamp}:null});if(null===e){if(++s>=3)return console.error("Max retries reached for user:",i),l.NextResponse.json({error:"Failed to refill energy after multiple attempts"},{status:500});await new Promise(e=>setTimeout(e,100*Math.pow(2,s)));continue}return l.NextResponse.json({success:!0,newEnergy:e.energy,energyRefillsLeft:e.energyRefillsLeft,lastEnergyRefillsTimestamp:e.lastEnergyRefillsTimestamp})}catch(e){if(!(e instanceof f.PrismaClientKnownRequestError)||"P2034"!==e.code)return console.error("Error refilling energy:",e),l.NextResponse.json({error:e instanceof Error?e.message:"Failed to refill energy"},{status:400});if(++s>=3)return console.error("Max retries reached for user:",i),l.NextResponse.json({error:"Failed to refill energy after multiple attempts"},{status:500});await new Promise(e=>setTimeout(e,100*Math.pow(2,s)))}return l.NextResponse.json({error:"Failed to refill energy after max retries"},{status:500})}let g=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/refill-energy/route",pathname:"/api/refill-energy",filename:"route",bundlePath:"app/api/refill-energy/route"},resolvedPagePath:"D:\\Projects\\GMSTree\\Gmstree-master for dev\\Gmstree-master\\app\\api\\refill-energy\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:m,staticGenerationAsyncStorage:y,serverHooks:v}=g,x="/api/refill-energy/route";function h(){return(0,a.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:y})}},8761:(e,t,n)=>{var r=n(6269),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,a=r.useEffect,l=r.useLayoutEffect,o=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return l(function(){i.value=n,i.getSnapshot=t,u(i)&&c({inst:i})},[e,n,t]),a(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),o(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},7143:(e,t,n)=>{var r=n(6269),i=n(8230),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,l=r.useRef,o=r.useEffect,u=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var f=l(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;var d=a(e,(f=u(function(){function e(e){if(!o){if(o=!0,a=e,e=r(e),void 0!==i&&p.hasValue){var t=p.value;if(i(t,e))return l=t}return l=e}if(t=l,s(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(a=e,l=n)}var a,l,o=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,i]))[0],f[1]);return o(function(){p.hasValue=!0,p.value=d},[d]),c(d),d}},8230:(e,t,n)=>{e.exports=n(8761)},5745:(e,t,n)=>{e.exports=n(7143)},6176:(e,t,n)=>{let r,i;n.d(t,{Ol:()=>E,gw:()=>h,rV:()=>y,bj:()=>w,Ms:()=>R,hP:()=>v,Fc:()=>x,Ck:()=>L,gC:()=>T});let s=e=>{let t;let n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,s={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},a=t=e(r,i,s);return s},a=e=>e?s(e):s;var l=n(6269),o=n(5745);let{useDebugValue:u}=l,{useSyncExternalStoreWithSelector:c}=o,f=!1,p=e=>e,d=(e,t,n)=>Math.floor(t*Math.pow(n,e)),g=(e,t,n)=>{let r=0;for(let i=0;i<=e;i++)r+=Math.floor(t*Math.pow(n,i));return r};var m=n(9495);let y=e=>{for(let t=m.zq.length-1;t>=0;t--)if(e>=m.zq[t].minPoints)return t;return 0},v=e=>d(e,m.xj,m.QA),x=e=>g(e,m.J0,m.FJ),h=e=>d(e,m.pT,m.BI),E=e=>g(e,m.Fq,m.sx),w=e=>d(e,m.wA,m.nS),L=e=>Math.max(0,g(e,m.lT,m.dx)-m.lT),R=(e,t,n)=>{if(t>=n)return 0;let r=n-t;return r>m.wX&&(r=m.wX),Math.max(0,L(e)/36e5*r)},T=(e,t,n)=>Math.max(0,x(e)*Math.floor((n-t)/1e3));r={userTelegramInitData:"",userTelegramName:"",lastClickTimestamp:0,gameLevelIndex:0,points:1e4,pointsBalance:1e4,unsynchronizedPoints:0,multitapLevelIndex:0,pointsPerClick:1,energy:m.Fq,maxEnergy:m.Fq,energyRefillsLeft:1,energyLimitLevelIndex:0,lastEnergyRefillTimestamp:Date.now(),mineLevelIndex:0,profitPerHour:0,tonWalletAddress:null},(i=e=>({...r,initializeState:t=>e(e=>({...e,...t})),updateLastClickTimestamp:()=>e(e=>({lastClickTimestamp:Date.now()})),setPoints:t=>e(e=>{let n=y(t);return{points:t,gameLevelIndex:n}}),clickTriggered:()=>e(e=>{if(e.energy-e.pointsPerClick<0)return{};let t=e.points+e.pointsPerClick,n=e.pointsBalance+e.pointsPerClick,r=e.unsynchronizedPoints+e.pointsPerClick,i=e.energy-e.pointsPerClick,s=y(t);return{points:t,pointsBalance:n,unsynchronizedPoints:r,energy:i,gameLevelIndex:s,lastClickTimestamp:Date.now()}}),setPointsBalance:t=>e(e=>({pointsBalance:t})),incrementPoints:t=>e(e=>{let n=e.points+t,r=e.pointsBalance+t,i=y(n);return{points:n,pointsBalance:r,gameLevelIndex:i}}),decrementPointsBalance:t=>e(e=>({pointsBalance:Math.max(0,e.pointsBalance-t)})),resetUnsynchronizedPoints:t=>e(e=>({unsynchronizedPoints:Math.max(0,e.unsynchronizedPoints-t)})),setPointsPerClick:t=>e({pointsPerClick:t}),upgradeMultitap:()=>e(e=>{let t=v(e.multitapLevelIndex);return e.pointsBalance>=t?{pointsBalance:e.pointsBalance-t,pointsPerClick:x(e.multitapLevelIndex+1),multitapLevelIndex:e.multitapLevelIndex+1}:e}),setEnergy:t=>e({energy:t}),incrementEnergy:t=>e(e=>({energy:Math.min(e.energy+t,e.maxEnergy)})),refillEnergy:()=>e(e=>e.energyRefillsLeft>0?{energy:e.maxEnergy,energyRefillsLeft:e.energyRefillsLeft-1,lastEnergyRefillTimestamp:Date.now()}:e),upgradeEnergyLimit:()=>e(e=>{let t=h(e.energyLimitLevelIndex);return e.pointsBalance>=t?{pointsBalance:e.pointsBalance-t,maxEnergy:E(e.energyLimitLevelIndex+1),energyLimitLevelIndex:e.energyLimitLevelIndex+1}:e}),resetDailyRefills:()=>e({energyRefillsLeft:1}),setMineLevelIndex:t=>e({mineLevelIndex:t}),upgradeMineLevelIndex:()=>e(e=>{let t=w(e.mineLevelIndex);return e.pointsBalance>=t?{pointsBalance:e.pointsBalance-t,profitPerHour:L(e.mineLevelIndex+1),mineLevelIndex:e.mineLevelIndex+1}:e}),setTonWalletAddress:t=>e({tonWalletAddress:t})}))&&(e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?a(e):e,n=(e,n)=>(function(e,t=p,n){n&&!f&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),f=!0);let r=c(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return u(r),r})(t,e,n);return Object.assign(n,t)})(i)}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[379,833,563],()=>n(6254));module.exports=r})();