if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),a={module:{uri:o},exports:c,require:d};i[o]=Promise.all(r.map((e=>a[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"ac17b6d7c9de4eafda4c0b78518c02a2"},{url:"android-chrome-512x512.png",revision:"f332dd6b868b062f37239ab0bee5788b"},{url:"apple-touch-icon.png",revision:"2e57ea94de6a0760568f297f11275295"},{url:"assets/cheque.70400e7f.gif",revision:null},{url:"assets/desert.ad16b03d.gif",revision:null},{url:"assets/index.1d829dce.css",revision:null},{url:"assets/index.778032b9.js",revision:null},{url:"assets/logo.ccb9c5c2.png",revision:null},{url:"assets/love.96fc6e78.gif",revision:null},{url:"favicon-16x16.png",revision:"6ab378c4da3a2cd77a2d12650373b117"},{url:"favicon-32x32.png",revision:"4077b907c465faf1f57df0e3ac393351"},{url:"favicon.ico",revision:"424621a16ee623223898cf92cf77f212"},{url:"index.html",revision:"58d09fe52a8eb4ad1e2d2487ef62cba5"},{url:"manifest.webmanifest",revision:"19bbe8da7b7410fc49bce2135f3b7f06"},{url:"registerSW.js",revision:"07da6bdd4dcbbc63c885593ee5b6ba34"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"android-chrome-192x192.png",revision:"ac17b6d7c9de4eafda4c0b78518c02a2"},{url:"android-chrome-512x512.png",revision:"f332dd6b868b062f37239ab0bee5788b"},{url:"manifest.webmanifest",revision:"19bbe8da7b7410fc49bce2135f3b7f06"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
