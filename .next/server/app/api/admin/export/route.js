"use strict";(()=>{var e={};e.id=204,e.ids=[204],e.modules={3524:e=>{e.exports=require("@prisma/client")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7657:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>x,patchFetch:()=>h,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l});var a={};t.r(a),t.d(a,{POST:()=>u});var o=t(3278),s=t(5002),n=t(4877),i=t(1309),p=t(8713);async function u(e){let r=e.headers.get("host")?.includes("localhost"),t="true"===process.env.ACCESS_ADMIN;if(!r||!t)return i.NextResponse.json({error:"Unauthorized"},{status:403});try{let{fields:r,page:t=0}=await e.json(),a=await p.Z.user.findMany({select:r.reduce((e,r)=>(e[r]=!0,e),{}),skip:1e5*t,take:1e5}),o=await p.Z.user.count(),s=Math.ceil(o/1e5);return i.NextResponse.json({users:a,page:t,totalPages:s,hasMore:t<s-1})}catch(e){return console.error("Export error:",e),i.NextResponse.json({error:"Export failed"},{status:500})}}let d=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/admin/export/route",pathname:"/api/admin/export",filename:"route",bundlePath:"app/api/admin/export/route"},resolvedPagePath:"D:\\Projects\\GMSTree\\Gmstree-master for dev\\Gmstree-master\\app\\api\\admin\\export\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:m}=d,x="/api/admin/export/route";function h(){return(0,n.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},8713:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(3524);let o=globalThis.prisma??new a.PrismaClient}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[379,833],()=>t(7657));module.exports=a})();