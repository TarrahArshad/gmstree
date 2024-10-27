"use strict";(()=>{var e={};e.id=247,e.ids=[247],e.modules={3524:e=>{e.exports=require("@prisma/client")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4770:e=>{e.exports=require("crypto")},5143:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>h,patchFetch:()=>f,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>g,staticGenerationAsyncStorage:()=>m});var r={};a.r(r),a.d(r,{POST:()=>d});var s=a(3278),n=a(5002),o=a(4877),l=a(1309),i=a(8713),u=a(3656);async function d(e){let{initData:t,walletAddress:a}=await e.json();if(!t||!a)return l.NextResponse.json({error:"Invalid request"},{status:400});let{validatedData:r,user:s}=(0,u.M)(t);if(!r)return l.NextResponse.json({error:"Invalid Telegram data"},{status:403});let n=s.id?.toString();if(!n)return l.NextResponse.json({error:"Invalid user data"},{status:400});try{let e=await i.Z.user.update({where:{telegramId:n},data:{tonWalletAddress:a}});return l.NextResponse.json({success:!0,message:"Wallet connected successfully",walletAddress:e.tonWalletAddress})}catch(e){return console.error("Error connecting wallet:",e),l.NextResponse.json({error:e instanceof Error?e.message:"Failed to connect wallet"},{status:500})}}let c=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/wallet/connect/route",pathname:"/api/wallet/connect",filename:"route",bundlePath:"app/api/wallet/connect/route"},resolvedPagePath:"D:\\Projects\\GMSTree\\Gmstree-master for dev\\Gmstree-master\\app\\api\\wallet\\connect\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:m,serverHooks:g}=c,h="/api/wallet/connect/route";function f(){return(0,o.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:m})}},8713:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(3524);let s=globalThis.prisma??new r.PrismaClient},3656:(e,t,a)=>{a.d(t,{M:()=>n});var r=a(4770),s=a.n(r);function n(e){let t=process.env.BOT_TOKEN,a="true"===process.env.BYPASS_TELEGRAM_AUTH;console.log("validateTelegramWebAppData"),console.log("telegramInitData",e);let r=null,n={},o="";if(a)r={temp:""},n={id:"undefined",username:"Unknown User"},o="Authentication bypassed for development";else{if(!t)return{message:"BOT_TOKEN is not set",validatedData:null,user:{}};let a=new URLSearchParams(e),l=a.get("hash");if(!l)return{message:"Hash is missing from initData",validatedData:null,user:{}};a.delete("hash");let i=a.get("auth_date");if(!i)return{message:"auth_date is missing from initData",validatedData:null,user:{}};let u=parseInt(i,10);if(Math.floor(Date.now()/1e3)-u>10800)return{message:"Telegram data is older than 3 hours",validatedData:null,user:{}};let d=Array.from(a.entries()).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>`${e}=${t}`).join("\n");console.log("Data Check String:",d);let c=s().createHmac("sha256","WebAppData").update(t).digest(),p=s().createHmac("sha256",c).update(d).digest("hex");if(console.log("Calculated Hash:",p),console.log("Received Hash:",l),p===l){r=Object.fromEntries(a.entries()),o="Validation successful";let e=r.user;if(e)try{n=JSON.parse(e),console.log("Parsed user data:",n)}catch(e){console.error("Error parsing user data:",e),o="Error parsing user data",r=null}else o="User data is missing",r=null}else console.log(o="Hash validation failed")}return{validatedData:r,user:n,message:o}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[379,833],()=>a(5143));module.exports=r})();