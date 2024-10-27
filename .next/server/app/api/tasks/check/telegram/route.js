"use strict";(()=>{var e={};e.id=693,e.ids=[693],e.modules={3524:e=>{e.exports=require("@prisma/client")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4770:e=>{e.exports=require("crypto")},2898:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>g,patchFetch:()=>f,requestAsyncStorage:()=>m,routeModule:()=>c,serverHooks:()=>h,staticGenerationAsyncStorage:()=>p});var a={};r.r(a),r.d(a,{POST:()=>u});var s=r(3278),i=r(5002),o=r(4877),n=r(1309),l=r(8713),d=r(3656);async function u(e){let t=process.env.BOT_TOKEN;if(!t)return n.NextResponse.json({error:"Telegram bot token is missing"},{status:500});let{initData:r,taskId:a}=await e.json();if(!r||!a)return n.NextResponse.json({error:"Invalid request: missing initData or taskId"},{status:400});let{validatedData:s,user:i}=(0,d.M)(r);if(!s)return n.NextResponse.json({error:"Invalid Telegram data"},{status:403});let o=i.id?.toString();if(!o)return n.NextResponse.json({error:"Invalid user data: missing telegramId"},{status:400});try{let e=await l.Z.$transaction(async e=>{let r=await e.user.findUnique({where:{telegramId:o}});if(!r)throw Error("User not found in database");let s=await e.task.findUnique({where:{id:a}});if(!s)throw Error("Task not found in database");if(!s.isActive)throw Error("This task is no longer active");if("TELEGRAM"!==s.type||!s.taskData)throw Error("Invalid task type or missing task data for this operation");let i=s.taskData.chatId;if(!i)throw Error("Missing Telegram channel/group username in task data");let n=!1;try{let e=i;i.startsWith("@")||i.startsWith("-100")||(e="@"+i);let r=`https://api.telegram.org/bot${t}/getChatMember?chat_id=${encodeURIComponent(e)}&user_id=${o}`;console.log("Checking membership with URL:",r);let a=await fetch(r);if(!a.ok){let e=await a.text();throw console.error("Telegram API error:",a.status,e),Error(`Telegram API error: ${a.status} ${e}`)}let s=await a.json();if(console.log("Telegram API response:",s),s.ok){let e=s.result.status;n=["creator","administrator","member"].includes(e)}else throw Error(`Telegram API returned false: ${JSON.stringify(s)}`)}catch(e){if(console.error("Error checking channel membership:",e),e instanceof Error)throw Error(`Failed to check channel membership: ${e.message}`);throw Error("Failed to check channel membership: Unknown error")}if(!n)return{success:!1,message:"You are not a member of the required Telegram channel/group."};let l=await e.userTask.findUnique({where:{userId_taskId:{userId:r.id,taskId:s.id}}});if(l?.isCompleted)return{success:!1,message:"This task has already been completed.",isCompleted:!0};let d=await e.userTask.upsert({where:{userId_taskId:{userId:r.id,taskId:s.id}},update:{isCompleted:!0},create:{userId:r.id,taskId:s.id,isCompleted:!0}});return await e.user.update({where:{id:r.id},data:{points:{increment:s.points},pointsBalance:{increment:s.points}}}),{success:!0,message:"Task completed successfully",isCompleted:d.isCompleted}});return n.NextResponse.json(e)}catch(e){return console.error("Error checking Telegram task:",e),n.NextResponse.json({error:e instanceof Error?e.message:"Failed to check Telegram task"},{status:500})}}let c=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/tasks/check/telegram/route",pathname:"/api/tasks/check/telegram",filename:"route",bundlePath:"app/api/tasks/check/telegram/route"},resolvedPagePath:"D:\\Projects\\GMSTree\\Gmstree-master for dev\\Gmstree-master\\app\\api\\tasks\\check\\telegram\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:p,serverHooks:h}=c,g="/api/tasks/check/telegram/route";function f(){return(0,o.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:p})}},8713:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(3524);let s=globalThis.prisma??new a.PrismaClient},3656:(e,t,r)=>{r.d(t,{M:()=>i});var a=r(4770),s=r.n(a);function i(e){let t=process.env.BOT_TOKEN,r="true"===process.env.BYPASS_TELEGRAM_AUTH;console.log("validateTelegramWebAppData"),console.log("telegramInitData",e);let a=null,i={},o="";if(r)a={temp:""},i={id:"undefined",username:"Unknown User"},o="Authentication bypassed for development";else{if(!t)return{message:"BOT_TOKEN is not set",validatedData:null,user:{}};let r=new URLSearchParams(e),n=r.get("hash");if(!n)return{message:"Hash is missing from initData",validatedData:null,user:{}};r.delete("hash");let l=r.get("auth_date");if(!l)return{message:"auth_date is missing from initData",validatedData:null,user:{}};let d=parseInt(l,10);if(Math.floor(Date.now()/1e3)-d>10800)return{message:"Telegram data is older than 3 hours",validatedData:null,user:{}};let u=Array.from(r.entries()).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>`${e}=${t}`).join("\n");console.log("Data Check String:",u);let c=s().createHmac("sha256","WebAppData").update(t).digest(),m=s().createHmac("sha256",c).update(u).digest("hex");if(console.log("Calculated Hash:",m),console.log("Received Hash:",n),m===n){a=Object.fromEntries(r.entries()),o="Validation successful";let e=a.user;if(e)try{i=JSON.parse(e),console.log("Parsed user data:",i)}catch(e){console.error("Error parsing user data:",e),o="Error parsing user data",a=null}else o="User data is missing",a=null}else console.log(o="Hash validation failed")}return{validatedData:a,user:i,message:o}}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[379,833],()=>r(2898));module.exports=a})();