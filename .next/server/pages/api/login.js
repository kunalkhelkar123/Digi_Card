"use strict";(()=>{var e={};e.id=994,e.ids=[994],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,o)=>{Object.defineProperty(o,"l",{enumerable:!0,get:function(){return function e(o,t){return t in o?o[t]:"then"in o&&"function"==typeof o.then?o.then(o=>e(o,t)):"function"==typeof o&&"default"===t?o:void 0}}})},9332:(e,o,t)=>{t.r(o),t.d(o,{config:()=>p,default:()=>u,routeModule:()=>P});var n={};t.r(n),t.d(n,{default:()=>c});var s=t(1802),r=t(7153),a=t(6249);let l=require("jsonwebtoken");var i=t.n(l);t(188);let d=process.env.JWT_SECRET||"2$&hg*ok#ty%imindlazss$of#tw&ar#e@2@0#2$4";async function c(e,o){if(console.log("Request received"),"POST"===e.method)try{let{username:t,userpassword:n}=e.body;if(console.log("Username and password received: ",t,n),"admin@gmail.com"===t&&"Mindlabzsoftware@2024"===n){console.log("Credentials matched");let e=i().sign({username:t},d,{expiresIn:"1h"});o.status(200).json({success:!0,token:e})}else console.log("Invalid credentials"),o.status(200).json({success:!1})}catch(e){console.log("Server error: ",e),o.status(500).json({error:"Failed to process request"})}else console.log("Invalid request method"),o.setHeader("Allow",["POST"]),o.status(405).end(`Method ${e.method} Not Allowed`)}let u=(0,a.l)(n,"default"),p=(0,a.l)(n,"config"),P=new s.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/login",pathname:"/api/login",bundlePath:"",filename:""},userland:n})},188:(e,o,t)=>{t.d(o,{Z:()=>r});let n=require("mysql2/promise"),s=t.n(n)().createPool({host:process.env.DB_HOST,user:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.DB_NAME});(async function(){try{await s.getConnection(),console.log("Connected to the database")}catch(e){console.error("Failed to connect to the database ==>",e)}})();let r=s},7153:(e,o)=>{var t;Object.defineProperty(o,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,o,t)=>{e.exports=t(145)}};var o=require("../../webpack-api-runtime.js");o.C(e);var t=o(o.s=9332);module.exports=t})();