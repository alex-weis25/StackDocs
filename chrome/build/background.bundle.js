!function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+""+e+"."+w+".hot-update.js",n.appendChild(r)}function t(e){return e=e||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=f.p+""+w+".hot-update.json";t.open("GET",o,!0),t.timeout=e,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})}function o(e){var n=M[e];if(!n)return f;var r=function(r){return n.hot.active?(M[r]?M[r].parents.indexOf(e)<0&&M[r].parents.push(e):(j=[e],y=r),n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),j=[]),f(r)};for(var t in f)Object.prototype.hasOwnProperty.call(f,t)&&"e"!==t&&Object.defineProperty(r,t,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}}(t));return r.e=function(e){function n(){P--,"prepare"===x&&(k[e]||l(e),0===P&&0===H&&p())}return"ready"===x&&d("prepare"),P++,f.e(e).then(n,function(e){throw n(),e})},r}function c(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:y!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:u,status:function(e){if(!e)return x;E.push(e)},addStatusHandler:function(e){E.push(e)},removeStatusHandler:function(e){var n=E.indexOf(e);n>=0&&E.splice(n,1)},data:O[e]};return y=void 0,n}function d(e){x=e;for(var n=0;n<E.length;n++)E[n].call(null,e)}function i(e){return+e+""===e?+e:e}function a(e){if("idle"!==x)throw new Error("check() is only allowed in idle status");return g=e,d("check"),t(_).then(function(e){if(!e)return d("idle"),null;I={},k={},A=e.c,b=e.h,d("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});v={};return l(0),"prepare"===x&&0===P&&0===H&&p(),n})}function s(e,n){if(A[e]&&I[e]){I[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0==--H&&0===P&&p()}}function l(e){A[e]?(I[e]=!0,H++,r(e)):k[e]=!0}function p(){d("ready");var e=m;if(m=null,e)if(g)Promise.resolve().then(function(){return u(g)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(i(r));e.resolve(n)}}function u(r){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==x)throw new Error("apply() is only allowed in ready status");r=r||{};var o,c,a,s,l,p={},u=[],h={},y=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var m in v)if(Object.prototype.hasOwnProperty.call(v,m)){l=i(m);var g;g=v[m]?function(e){for(var n=[e],r={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var c=o.pop(),d=c.id,i=c.chain;if((s=M[d])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:d};if(s.hot._main)return{type:"unaccepted",chain:i,moduleId:d};for(var a=0;a<s.parents.length;a++){var l=s.parents[a],p=M[l];if(p){if(p.hot._declinedDependencies[d])return{type:"declined",chain:i.concat([l]),moduleId:d,parentId:l};n.indexOf(l)>=0||(p.hot._acceptedDependencies[d]?(r[l]||(r[l]=[]),t(r[l],[d])):(delete r[l],n.push(l),o.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}(l):{type:"disposed",moduleId:m};var _=!1,D=!1,E=!1,H="";switch(g.chain&&(H="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":r.onDeclined&&r.onDeclined(g),r.ignoreDeclined||(_=new Error("Aborted because of self decline: "+g.moduleId+H));break;case"declined":r.onDeclined&&r.onDeclined(g),r.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+H));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(g),r.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+H));break;case"accepted":r.onAccepted&&r.onAccepted(g),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(g),E=!0;break;default:throw new Error("Unexception type "+g.type)}if(_)return d("abort"),Promise.reject(_);if(D){h[l]=v[l],t(u,g.outdatedModules);for(l in g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,l)&&(p[l]||(p[l]=[]),t(p[l],g.outdatedDependencies[l]))}E&&(t(u,[g.moduleId]),h[l]=y)}var P=[];for(c=0;c<u.length;c++)l=u[c],M[l]&&M[l].hot._selfAccepted&&P.push({module:l,errorHandler:M[l].hot._selfAccepted});d("dispose"),Object.keys(A).forEach(function(e){!1===A[e]&&n(e)});for(var k,I=u.slice();I.length>0;)if(l=I.pop(),s=M[l]){var U={},S=s.hot._disposeHandlers;for(a=0;a<S.length;a++)(o=S[a])(U);for(O[l]=U,s.hot.active=!1,delete M[l],delete p[l],a=0;a<s.children.length;a++){var q=M[s.children[a]];q&&((k=q.parents.indexOf(l))>=0&&q.parents.splice(k,1))}}var L,R;for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(s=M[l]))for(R=p[l],a=0;a<R.length;a++)L=R[a],(k=s.children.indexOf(L))>=0&&s.children.splice(k,1);d("apply"),w=b;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var C=null;for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(s=M[l])){R=p[l];var N=[];for(c=0;c<R.length;c++)if(L=R[c],o=s.hot._acceptedDependencies[L]){if(N.indexOf(o)>=0)continue;N.push(o)}for(c=0;c<N.length;c++){o=N[c];try{o(R)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[c],error:e}),r.ignoreErrored||C||(C=e)}}}for(c=0;c<P.length;c++){var T=P[c];l=T.module,j=[l];try{f(l)}catch(e){if("function"==typeof T.errorHandler)try{T.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,orginalError:e,originalError:e}),r.ignoreErrored||C||(C=n),C||(C=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:l,error:e}),r.ignoreErrored||C||(C=e)}}return C?(d("fail"),Promise.reject(C)):(d("idle"),new Promise(function(e){e(u)}))}function f(n){if(M[n])return M[n].exports;var r=M[n]={i:n,l:!1,exports:{},hot:c(n),parents:(D=j,j=[],D),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){s(e,n),h&&h(e,n)};var y,m,v,b,g=!0,w="369b400c24d7fca73684",_=1e4,O={},j=[],D=[],E=[],x="idle",H=0,P=0,k={},I={},A={},M={};f.m=e,f.c=M,f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.h=function(){return w},o(0)(f.s=0)}({"./chrome/src/background.js":function(e,n){chrome.tabs.onUpdated.addListener(function(e){chrome.pageAction.show(e)}),chrome.tabs.getSelected(null,function(e){chrome.pageAction.show(e.id)}),chrome.pageAction.onClicked.addListener(function(e){chrome.tabs.getSelected(null,function(e){chrome.tabs.sendMessage(e.id,{callFunction:"toggleSidebar"},function(e){})})})},"./node_modules/react-hot-loader/lib/patch.js":function(e,n,r){"use strict";e.exports=r("./node_modules/react-hot-loader/lib/patch.prod.js")},"./node_modules/react-hot-loader/lib/patch.prod.js":function(e,n,r){"use strict"},"./node_modules/react-hot-loader/patch.js":function(e,n,r){e.exports=r("./node_modules/react-hot-loader/lib/patch.js")},0:function(e,n,r){r("./node_modules/react-hot-loader/patch.js"),e.exports=r("./chrome/src/background.js")}});
//# sourceMappingURL=background.bundle.js.map