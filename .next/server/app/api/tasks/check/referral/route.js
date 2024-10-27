"use strict";(()=>{var e={};e.id=520,e.ids=[520],e.modules={3524:e=>{e.exports=require("@prisma/client")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4770:e=>{e.exports=require("crypto")},9436:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>h,patchFetch:()=>g,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>f,staticGenerationAsyncStorage:()=>m});var a={};t.r(a),t.d(a,{POST:()=>u});var s=t(3278),i=t(5002),o=t(4877),n=t(1309),l=t(8713),d=t(3656);async function u(e){let{initData:r,taskId:t}=await e.json();if(!r||!t)return n.NextResponse.json({error:"Invalid request"},{status:400});let{validatedData:a,user:s}=(0,d.M)(r);if(!a)return n.NextResponse.json({error:"Invalid Telegram data"},{status:403});let i=s.id?.toString();if(!i)return n.NextResponse.json({error:"Invalid user data"},{status:400});try{let e=await l.Z.$transaction(async e=>{let r=await e.user.findUnique({where:{telegramId:i},include:{referrals:!0}});if(!r)throw Error("User not found");let a=await e.task.findUnique({where:{id:t}});if(!a)throw Error("Task not found");if(!a.isActive)throw Error("This task is no longer active");if("REFERRAL"!==a.type)throw Error("Invalid task type for this operation");let s=await e.userTask.findUnique({where:{userId_taskId:{userId:r.id,taskId:a.id}}});if(s?.isCompleted)throw Error("Task already completed");if("REFERRAL"!==a.type||!a.taskData)throw Error("Invalid task type or missing task data for this operation");let o=a.taskData.friendsNumber||0,n=r.referrals.length;if(n<o)return{success:!1,message:`You need ${o-n} more referrals to complete this task.`,currentReferrals:n,requiredReferrals:o};let l=await e.userTask.upsert({where:{userId_taskId:{userId:r.id,taskId:a.id}},update:{isCompleted:!0},create:{userId:r.id,taskId:a.id,isCompleted:!0}});return await e.user.update({where:{id:r.id},data:{points:{increment:a.points},pointsBalance:{increment:a.points}}}),{success:!0,message:"Task completed successfully",isCompleted:l.isCompleted,currentReferrals:n,requiredReferrals:o}});return n.NextResponse.json(e)}catch(e){return console.error("Error checking referral task:",e),n.NextResponse.json({error:e instanceof Error?e.message:"Failed to check referral task"},{status:500})}}let c=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/tasks/check/referral/route",pathname:"/api/tasks/check/referral",filename:"route",bundlePath:"app/api/tasks/check/referral/route"},resolvedPagePath:"D:\\Projects\\GMSTree\\Gmstree-master for dev\\Gmstree-master\\app\\api\\tasks\\check\\referral\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:m,serverHooks:f}=c,h="/api/tasks/check/referral/route";function g(){return(0,o.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:m})}},8713:(e,r,t)=>{t.d(r,{Z:()=>s});var a=t(3524);let s=globalThis.prisma??new a.PrismaClient},3656:(e,r,t)=>{t.d(r,{M:()=>i});var a=t(4770),s=t.n(a);function i(e){let r=process.env.BOT_TOKEN,t="true"===process.env.BYPASS_TELEGRAM_AUTH;console.log("validateTelegramWebAppData"),console.log("telegramInitData",e);let a=null,i={},o="";if(t)a={temp:""},i={id:"undefined",username:"Unknown User"},o="Authentication bypassed for development";else{if(!r)return{message:"BOT_TOKEN is not set",validatedData:null,user:{}};let t=new URLSearchParams(e),n=t.get("hash");if(!n)return{message:"Hash is missing from initData",validatedData:null,user:{}};t.delete("hash");let l=t.get("auth_date");if(!l)return{message:"auth_date is missing from initData",validatedData:null,user:{}};let d=parseInt(l,10);if(Math.floor(Date.now()/1e3)-d>10800)return{message:"Telegram data is older than 3 hours",validatedData:null,user:{}};let u=Array.from(t.entries()).sort(([e],[r])=>e.localeCompare(r)).map(([e,r])=>`${e}=${r}`).join("\n");console.log("Data Check String:",u);let c=s().createHmac("sha256","WebAppData").update(r).digest(),p=s().createHmac("sha256",c).update(u).digest("hex");if(console.log("Calculated Hash:",p),console.log("Received Hash:",n),p===n){a=Object.fromEntries(t.entries()),o="Validation successful";let e=a.user;if(e)try{i=JSON.parse(e),console.log("Parsed user data:",i)}catch(e){console.error("Error parsing user data:",e),o="Error parsing user data",a=null}else o="User data is missing",a=null}else console.log(o="Hash validation failed")}return{validatedData:a,user:i,message:o}}}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[379,833],()=>t(9436));module.exports=a})();