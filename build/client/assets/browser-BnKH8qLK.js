import{aw as R,ax as M,ay as p,az as v,aA as h,X as C,w as b,aB as y,aC as g,p as E,aD as F,aE as $,a as i,aF as S,x as k,y as P,aG as H}from"./components-ALsnrb9_.js";/**
 * @remix-run/react v2.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(u){if(!u)return null;let m=Object.entries(u),s={};for(let[a,e]of m)if(e&&e.__type==="RouteErrorResponse")s[a]=new R(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let o=window[e.__subType];if(typeof o=="function")try{let r=new o(e.message);r.stack=e.stack,s[a]=r}catch{}}if(s[a]==null){let o=new Error(e.message);o.stack=e.stack,s[a]=o}}else s[a]=e;return s}/**
 * @remix-run/react v2.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let n,t,f=!1;let c,D=new Promise(u=>{c=u}).catch(()=>{});function z(u){if(!t){if(window.__remixContext.future.unstable_singleFetch){if(!n){let d=window.__remixContext.stream;p(d,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,n=v(d,window).then(l=>{window.__remixContext.state=l.value,n.value=!0}).catch(l=>{n.error=l})}if(n.error)throw n.error;if(!n.value)throw n}let o=h(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),r;if(!window.__remixContext.isSpaMode){r={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let d=C(o,window.location,window.__remixContext.basename);if(d)for(let l of d){let _=l.route.id,x=window.__remixRouteModules[_],w=window.__remixManifest.routes[_];x&&b(w,x,window.__remixContext.isSpaMode)&&(x.HydrateFallback||!w.hasLoader)?r.loaderData[_]=void 0:w&&!w.hasLoader&&(r.loaderData[_]=null)}r&&r.errors&&(r.errors=O(r.errors))}t=y({routes:o,history:g(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.unstable_singleFetch===!0},hydrationData:r,mapRouteProperties:E,unstable_dataStrategy:window.__remixContext.future.unstable_singleFetch?F(window.__remixManifest,window.__remixRouteModules,()=>t):void 0,unstable_patchRoutesOnNavigation:$(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),t.state.initialized&&(f=!0,t.initialize()),t.createRoutesForHMR=M,window.__remixRouter=t,c&&c(t)}let[m,s]=i.useState(void 0),[a,e]=i.useState(t.state.location);return i.useLayoutEffect(()=>{f||(f=!0,t.initialize())},[]),i.useLayoutEffect(()=>t.subscribe(o=>{o.location!==a&&e(o.location)}),[a]),S(t,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),i.createElement(i.Fragment,null,i.createElement(k.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:m,isSpaMode:window.__remixContext.isSpaMode}},i.createElement(P,{location:a},i.createElement(H,{router:t,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.unstable_singleFetch?i.createElement(i.Fragment,null):null)}export{z as R};
