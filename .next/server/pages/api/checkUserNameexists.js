"use strict";(()=>{var e={};e.id=80,e.ids=[80],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,s)=>{Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,t){return t in s?s[t]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,t)):"function"==typeof s&&"default"===t?s:void 0}}})},2231:(e,s,t)=>{t.r(s),t.d(s,{config:()=>u,default:()=>l,routeModule:()=>d});var o={};t.r(o),t.d(o,{default:()=>c});var n=t(1802),r=t(7153),a=t(6249),i=t(188);let c=async(e,s)=>{if("POST"===e.method){let{userName:t}=e.body;console.log("inside check userName exist ",t);let o=0;try{o>0&&(o.length>0?(console.log("check userName exist truee"),s.status(200).json({exists:!0})):(console.log("check userName exist false"),s.status(200).json({exists:!1})));let e=`
        SELECT * FROM users WHERE userName = ?;
      `,[n]=await i.Z.query(e,[t]);o=n,n.length>0?(console.log("check userName exist truee"),s.status(200).json({exists:!0})):(console.log("check userName exist false"),s.status(200).json({exists:!1}))}catch(e){console.log("error  ",e),s.status(500).json({message:"Internal Server Error"})}}else s.status(400).json({msg:"ONLY POST req is allowed"})},l=(0,a.l)(o,"default"),u=(0,a.l)(o,"config"),d=new n.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/checkUserNameexists",pathname:"/api/checkUserNameexists",bundlePath:"",filename:""},userland:o})},188:(e,s,t)=>{t.d(s,{Z:()=>r});let o=require("mysql2/promise"),n=t.n(o)().createPool({host:process.env.DB_HOST,user:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.DB_NAME});(async function(){try{await n.getConnection(),console.log("Connected to the database")}catch(e){console.error("Failed to connect to the database ==>",e)}})();let r=n},7153:(e,s)=>{var t;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,s,t)=>{e.exports=t(145)}};var s=require("../../webpack-api-runtime.js");s.C(e);var t=s(s.s=2231);module.exports=t})();