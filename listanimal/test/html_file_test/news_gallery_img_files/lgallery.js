webpackJsonp([11],Array(21).concat([function(t,e,i){"use strict";function n(t){return"[object Array]"===C.call(t)}function r(t){return"[object ArrayBuffer]"===C.call(t)}function o(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return void 0===t}function l(t){return null!==t&&"object"==typeof t}function d(t){return"[object Date]"===C.call(t)}function f(t){return"[object File]"===C.call(t)}function p(t){return"[object Blob]"===C.call(t)}function m(t){return"[object Function]"===C.call(t)}function h(t){return l(t)&&m(t.pipe)}function g(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function _(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function w(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function x(){function t(t,i){"object"==typeof e[i]&&"object"==typeof t?e[i]=x(e[i],t):e[i]=t}for(var e={},i=0,n=arguments.length;i<n;i++)w(arguments[i],t);return e}function b(t,e,i){return w(e,function(e,n){t[n]=i&&"function"==typeof e?y(e,i):e}),t}var y=i(29),C=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:r,isFormData:o,isArrayBufferView:s,isString:a,isNumber:c,isObject:l,isUndefined:u,isDate:d,isFile:f,isBlob:p,isFunction:m,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:w,merge:x,extend:b,trim:_}},function(t,e,i){"use strict";function n(t,e,i,n,r,o,s,a){t=t||{};var c=typeof t.default;"object"!==c&&"function"!==c||(t=t.default);var u="function"==typeof t?t.options:t;e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var l;if(s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(t,e){return l.call(e),d(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:u}}e.a=n},function(t,e,i){"use strict";(function(e){function n(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var r=i(21),o=i(47),s=/^\)\]\}',?\n/,a={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=i(25):void 0!==e&&(t=i(25)),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(s,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){c.headers[t]={}}),r.forEach(["post","put","patch"],function(t){c.headers[t]=r.merge(a)}),t.exports=c}).call(e,i(30))},,function(t,e,i){"use strict";var n=i(21),r=i(39),o=i(42),s=i(48),a=i(46),c=i(28),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||i(41);t.exports=function(t){return new Promise(function(e,l){var d=t.data,f=t.headers;n.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(t.url)||(p=new window.XDomainRequest,m="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var g=t.auth.username||"",_=t.auth.password||"";f.Authorization="Basic "+u(g+":"+_)}if(p.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[m]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var i="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?p.response:p.responseText,o={data:n,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:i,config:t,request:p};r(e,l,o),p=null}},p.onerror=function(){l(c("Network Error",t)),p=null},p.ontimeout=function(){l(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),p=null},n.isStandardBrowserEnv()){var v=i(44),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?v.read(t.xsrfCookieName):void 0;w&&(f[t.xsrfHeaderName]=w)}if("setRequestHeader"in p&&n.forEach(f,function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete f[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(t){if("json"!==p.responseType)throw t}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),l(t),p=null)}),void 0===d&&(d=null),p.send(d)})}},function(t,e,i){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,i){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,i){"use strict";var n=i(38);t.exports=function(t,e,i,r){var o=new Error(t);return n(o,e,i,r)}},function(t,e,i){"use strict";t.exports=function(t,e){return function(){for(var i=new Array(arguments.length),n=0;n<i.length;n++)i[n]=arguments[n];return t.apply(e,i)}}},,function(t,e,i){t.exports=i(33)},,function(t,e,i){"use strict";function n(t){var e=new s(t),i=o(s.prototype.request,e);return r.extend(i,s.prototype,e),r.extend(i,e),i}var r=i(21),o=i(29),s=i(35),a=i(23),c=n(a);c.Axios=s,c.create=function(t){return n(r.merge(a,t))},c.Cancel=i(26),c.CancelToken=i(34),c.isCancel=i(27),c.all=function(t){return Promise.all(t)},c.spread=i(49),t.exports=c,t.exports.default=c},function(t,e,i){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var i=this;t(function(t){i.reason||(i.reason=new r(t),e(i.reason))})}var r=i(26);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},function(t,e,i){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var r=i(23),o=i(21),s=i(36),a=i(37),c=i(45),u=i(43);n.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(r,this.defaults,{method:"get"},t),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url));var e=[a,void 0],i=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)i=i.then(e.shift(),e.shift());return i},o.forEach(["delete","get","head"],function(t){n.prototype[t]=function(e,i){return this.request(o.merge(i||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,i,n){return this.request(o.merge(n||{},{method:t,url:e,data:i}))}}),t.exports=n},function(t,e,i){"use strict";function n(){this.handlers=[]}var r=i(21);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},function(t,e,i){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var r=i(21),o=i(40),s=i(27),a=i(23);t.exports=function(t){return n(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return n(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,i){"use strict";t.exports=function(t,e,i,n){return t.config=e,i&&(t.code=i),t.response=n,t}},function(t,e,i){"use strict";var n=i(28);t.exports=function(t,e,i){var r=i.config.validateStatus;i.status&&r&&!r(i.status)?e(n("Request failed with status code "+i.status,i.config,null,i)):t(i)}},function(t,e,i){"use strict";var n=i(21);t.exports=function(t,e,i){return n.forEach(i,function(i){t=i(t,e)}),t}},function(t,e,i){"use strict";function n(){this.message="String contains an invalid character"}function r(t){for(var e,i,r=String(t),s="",a=0,c=o;r.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if((i=r.charCodeAt(a+=.75))>255)throw new n;e=e<<8|i}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=r},function(t,e,i){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=i(21);t.exports=function(t,e,i){if(!e)return t;var o;if(i)o=i(e);else if(r.isURLSearchParams(e))o=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)&&(e+="[]"),r.isArray(t)||(t=[t]),r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),o=s.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},function(t,e,i){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,i){"use strict";var n=i(21);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,i,r,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),n.isString(r)&&a.push("path="+r),n.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,i){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,i){"use strict";var n=i(21);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return i&&(r.setAttribute("href",e),e=r.href),r.setAttribute("href",e),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var e,i=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return e=t(window.location.href),function(i){var r=n.isString(i)?t(i):i;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},function(t,e,i){"use strict";var n=i(21);t.exports=function(t,e){n.forEach(t,function(i,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=i,delete t[n])})}},function(t,e,i){"use strict";var n=i(21);t.exports=function(t){var e,i,r,o={};return t?(n.forEach(t.split("\n"),function(t){r=t.indexOf(":"),e=n.trim(t.substr(0,r)).toLowerCase(),i=n.trim(t.substr(r+1)),e&&(o[e]=o[e]?o[e]+", "+i:i)}),o):o}},function(t,e,i){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},,,function(t,e,i){"use strict";function n(t,e,n,o){h=n,_=o||{};var s=i.i(u.a)(t,e);return r(s),function(e){for(var n=[],o=0;o<s.length;o++){var a=s[o],c=d[a.id];c.refs--,n.push(c)}e?(s=i.i(u.a)(t,e),r(s)):s=[];for(var o=0;o<n.length;o++){var c=n[o];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}}function r(t){for(var e=0;e<t.length;e++){var i=t[e],n=d[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(s(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var o=[],r=0;r<i.parts.length;r++)o.push(s(i.parts[r]));d[i.id]={id:i.id,refs:1,parts:o}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function s(t){var e,i,n=document.querySelector("style["+v+'~="'+t.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n)}if(w){var r=m++;n=p||(p=o()),e=a.bind(null,n,r,!1),i=a.bind(null,n,r,!0)}else n=o(),e=c.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function a(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function c(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),_.ssrId&&t.setAttribute(v,e.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var u=i(55),l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},f=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,m=0,h=!1,g=function(){},_=null,v="data-vue-ssr-id",w="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),x=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},,function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},r=0;r<e.length;r++){var o=e[r],s=o[0],a=o[1],c=o[2],u=o[3],l={id:t+":"+r,css:a,media:c,sourceMap:u};n[s]?n[s].parts.push(l):i.push(n[s]={id:s,parts:[l]})}return i}e.a=n},function(t,e){t.exports=function(t,e){var i=new Date(1e3*+t),n=i.getFullYear(),r=i.getMonth(),o=i.getDate(),s=(i.getDay(),i.getHours()),a=i.getMinutes(),c=i.getSeconds();return a<10&&(a="0"+a),c<10&&(c="0"+c),o+" "+e[r]+" "+n+", "+s+":"+a}},function(t,e,i){"use strict";e.a={data:function(){return{equalCategory:settings.category}},props:{loop:["loop"],d:{type:Array},settings:{type:Object}}}},function(t,e,i){"use strict";var n=i(84);e.a={components:{"app-counter":n.a},props:{loop:["loop"],d:{type:Array},settings:{type:Object},image:["image"]}}},function(t,e,i){"use strict";e.a={props:{settings:{type:Object},loop:["loop"],date:["date"]}}},function(t,e,i){"use strict";e.a={props:{d:{type:Array},settings:{type:Object}}}},function(t,e,i){"use strict";e.a={filters:{stringsize:i(73)},props:{d:{type:Array},settings:{type:Object},href:{type:Boolean},loop:["loop"]}}},function(t,e,i){"use strict";e.a={props:{loop:["loop"],d:{type:Array},settings:{type:Object}}}},function(t,e,i){"use strict";var n=i(79),r=i(78),o=i(83),s=i(80),a=i(82),c=i(81);e.a={components:{"app-cover":n.a,"app-category":r.a,"app-title":o.a,"app-date":s.a,"app-summary":a.a,"app-spot-im-count":c.a},props:{loop:["loop"],image:["image"],d:{type:Array},settings:{type:Object},date:["date"]}}},function(t,e,i){"use strict";var n=i(85),r=i(86);e.a={components:{"app-counter":n.a,"app-image":r.a},props:function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}({d:{type:Array},image:["image"]},"d",{type:Array})}},function(t,e,i){"use strict";e.a={props:{d:{type:Array}}}},function(t,e,i){"use strict";var n=i(87);e.a={components:{"app-label":n.a},props:{d:{type:Array},image:["image"]}}},function(t,e,i){"use strict";e.a={props:{d:{type:Array}}}},function(t,e,i){"use strict";var n=i(31),r=i.n(n),o=i(72);e.a={components:{"app-foto-section":o.a},data:function(){return{settings:{modifiers:"_photo-section",category:{href:"/foto"},summary:{size:250}},nextPageText:settings.textButton,months:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],docs:[],startCount:settings.startCount,stepCount:settings.stepCount,url:settings.url+"/json/",pagesCounter:0,loadingEnd:!1,showButton:!0,collection:{},queue:[],countPage:settings.startCount+settings.stepCount}},filters:{showdate:i(56)},computed:{resourse:function(){return r.a.get(this.url+this.countPage+"/"+this.pagesCounter)}},methods:{loadPages:function(t,e){var i=this;t&&(this.startCount=t),this.resourse.then(function(n){var r=n.data.docs;r.forEach(function(t){t.publishTime.$date&&t.publishTime.$date.$numberLong&&(t.publishTime.sec=Math.ceil(parseInt(t.publishTime.$date.$numberLong,10)/1e3)),i.collection[t.publicId]||(t.tags&&t.tags.length&&t.tags.forEach(function(e){"olimpiiskie-igry-2018-v-phyonchhane"===e._id&&(t.labelOlimpic2018=!0),"chempionat-mira-po-futbolu-2018-v-rossii"===e._id&&(t.labelFifa2018=!0),"itogi-2018"===e._id&&(t.labelItogi2018=!0),"blic-intervyu"===e._id&&(t.labelBlic2018=!0),"chempionat-mira-po-hokkeyu"===e._id&&(t.labelHockey2019=!0),"nezabitie-istorii"===e._id&&(t.labelNezabitite=!0),"itogi-2019"===e._id&&(t.labelItogi2019=!0),"blic-intervyu-2019"===e._id&&(t.labelBlic2019=!0),"oi-1980"===e._id&&(t.labelOlympic1980=!0)}),i.queue.push(t),i.collection[t.publicId]=!0)}),i.pagesCounter=i.pagesCounter+1,e&&e(),r.length<t&&(i.loadingEnd=!0)})},showPage:function(t){var e=this.queue.splice(0,t||this.stepCount);this.docs=this.docs.concat(e),this.queue.length<this.stepCount&&this.loadPages(this.stepCount+this.startCount),this.loadingEnd&&0===this.queue.length&&(this.showButton=!1)},nextPage:function(){this.showPage()}},created:function(){var t=this;this.loadPages(this.startCount,function(){t.showPage(t.startCount)})}}},function(t,e,i){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=i(31),o=i.n(r),s=i(72);e.a={components:{"app-foto-section":s.a},data:function(){return{settings:{modifiers:"_photo-view",category:{href:"/foto"},summary:{size:250}},nextPageText:settings.textButton,months:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],docs:[],startCount:settings.startCount,stepCount:settings.stepCount,url:settings.url+"/json/",pagesCounter:0,loadingEnd:!0}},filters:{showdate:i(56)},computed:{resourse:function(){return o.a.get(this.url+this.startCount+"/"+this.pagesCounter)}},methods:{loadPages:function(t){var e=this;this.loadingEnd&&(t&&(this.startCount=t),this.resourse.then(function(t){var i=t.data.docs;i.forEach(function(t){t.publishTime.$date&&t.publishTime.$date.$numberLong&&(t.publishTime.sec=Math.ceil(parseInt(t.publishTime.$date.$numberLong,10)/1e3))}),e.pagesCounter=e.pagesCounter+1,e.docs=e.docs.concat(i),("object"!==n(t.data.docs)||t.data.docs.length<e.startCount)&&(e.loadingEnd=!1)}))}},created:function(){this.loadPages()}}},,,function(t,e,i){"use strict";var n=i(63),r=i(101),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e){t.exports=function(t,e){if(!1===e)return t;var i=t.slice(0,e),n=i.split(" ");return n.splice(n.length-1,1),(i=n.join(" "))+"..."}},function(t,e,i){e=t.exports=i(50)(),e.push([t.i,".card a{color:inherit;text-decoration:none}.card a:hover{color:#c80000}.card__wrapper_photo-view{padding-bottom:33px}.card__cover_photo-view:hover img{opacity:.9;color:#000;background-color:#fff}.card__cover_photo-view{margin:-1px;margin-bottom:7px}.card__category_photo-view{font-size:1.4em;line-height:1.57143em;color:#093}@media (max-width:684px){.card__category_photo-view{font-size:1.4em;line-height:1.85714em}}.card__heading_photo-view{font-size:1.8em;line-height:1.33333em;font-weight:700;font-family:DIN Pro;color:#000}@media (max-width:684px){.card__heading_photo-view{font-size:1.6em;line-height:1.375em}}.card__date{font-size:1.2em;line-height:2.5em;color:#757575}@media (max-width:684px){.card__date{font-size:1.4em;line-height:1.85714em}}.card__summary_photo-view{font-size:1.4em;line-height:1.42857em;color:#666}@media (max-width:684px){.card__summary_photo-view{font-size:1.6em;line-height:1.25em}}.card__summary_photo-view a:hover{color:inherit}.card__spot-im-count_photo-view{position:absolute;right:10px;bottom:12px}.card__category_photo-view,.card__date_photo-view,.card__heading_photo-view,.card__summary_photo-view{padding:0 10px}",""])},,function(t,e,i){e=t.exports=i(50)(),e.push([t.i,".listing__rows_photo-view{display:-moz-flex;display:-ms-flexbox;display:flex}.listing__column_photo-view{box-shadow:0 0 1px 0 #666;-moz-box-shadow:0 0 1px 0 #666}.listing__rows_photo-view{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-moz-align-items:stretch;align-items:stretch}.listing__column_photo-view{width:24.19355%;-ms-flex:0 0 24.19355%;flex:0 0 24.19355%;margin-left:.40323%;margin-right:.40323%}@media (max-width:1024px){.listing__column_photo-view{width:24.02344%;-ms-flex:0 0 24.02344%;flex:0 0 24.02344%;margin-right:.48828%;margin-left:.48828%}}@media (max-width:864px){.listing__column_photo-view{width:32.17593%;-ms-flex:0 0 32.17593%;flex:0 0 32.17593%;margin-right:.5787%;margin-left:.5787%}}@media (max-width:684px){.listing__column_photo-view{width:98.53801%;-ms-flex:0 0 98.53801%;flex:0 0 98.53801%;margin-right:.73099%;margin-left:.73099%}}@media (max-width:479px){.listing__column_photo-view{width:97.91232%;-ms-flex:0 0 97.91232%;flex:0 0 97.91232%;margin-right:1.04384%;margin-left:1.04384%}}.listing__column_photo-view_1{width:99.19355%;-ms-flex:0 0 99.19355%;flex:0 0 99.19355%;margin-left:.40323%;margin-right:.40323%}@media (max-width:1024px){.listing__column_photo-view_1{width:99.02344%;-ms-flex:0 0 99.02344%;flex:0 0 99.02344%;margin-right:.48828%;margin-left:.48828%}}@media (max-width:864px){.listing__column_photo-view_1{width:98.84259%;-ms-flex:0 0 98.84259%;flex:0 0 98.84259%;margin-right:.5787%;margin-left:.5787%}}@media (max-width:684px){.listing__column_photo-view_1{width:98.53801%;-ms-flex:0 0 98.53801%;flex:0 0 98.53801%;margin-right:.73099%;margin-left:.73099%}}@media (max-width:479px){.listing__column_photo-view_1{width:97.91232%;-ms-flex:0 0 97.91232%;flex:0 0 97.91232%;margin-right:1.04384%;margin-left:1.04384%}}.grid-listing{margin:0 -1.2098%}@media (max-width:1024px){.grid-listing{margin:0 -1.46499%}}@media (max-width:864px){.grid-listing{margin:0 -1.15741%}}@media (max-width:684px){.grid-listing{margin:0 -1.46199%}}@media (max-width:479px){.grid-listing{margin:0 -2.08768%}}.static-one{margin:0 1.2098%;width:97.5804%}@media (max-width:1024px){.static-one{margin:0 1.46499%;width:97.07002%}}@media (max-width:864px){.static-one{margin:0 1.15741%;width:97.68519%}}@media (max-width:684px){.static-one{margin:0 1.46199%;width:97.07602%}}@media (max-width:479px){.static-one{margin:0 2.08768%;width:95.82463%}}.right-one_high-two_med-one{width:100%}@media (max-width:864px){.right-one_high-two_med-one{margin:0 1.15741%;width:47.68519%}}@media (max-width:684px){.right-one_high-two_med-one{margin:0 1.46199%;width:97.07602%}}@media (max-width:479px){.right-one_high-two_med-one{margin:0;width:100%}}.start-four_to_low-one{width:23.06432%;margin:0 .96784%}@media (max-width:1024px){.start-four_to_low-one{width:22.65602%;margin:0 .96784%}}@media (max-width:864px){.start-four_to_low-one{width:31.48148%;margin:0 .92593%}}@media (max-width:684px){.start-four_to_low-one{width:47.66082%;margin:0 1.16959%}}@media (max-width:479px){.start-four_to_low-one{width:96.65971%;margin:0 1.67015%}}.static-three_med-two_low-one{margin:0 1.2098%;width:30.91374%}@media (max-width:1024px){.static-three_med-two_low-one{margin:0 1.46499%;width:30.40335%}}@media (max-width:864px){.static-three_med-two_low-one{margin:0 1.15741%;width:31.01852%}}@media (max-width:684px){.static-three_med-two_low-one{margin:0 1.46199%;width:47.07602%}}@media (max-width:479px){.static-three_med-two_low-one{margin:0 2.08768%;width:95.82463%}}.static-three_med-one{margin:0 1.2098%;width:30.91374%}@media (max-width:1024px){.static-three_med-one{margin:0 1.46499%;width:30.40335%}}@media (max-width:864px){.static-three_med-one{margin:0 1.15741%;width:31.01852%}}@media (max-width:684px){.static-three_med-one{margin:0 1.46199%;width:97.07602%}}@media (max-width:479px){.static-three_med-one{margin:0 2.08768%;width:95.82463%}}.static-four_to_low-one{margin:0 .80645%;width:23.3871%}@media (max-width:1024px){.static-four_to_low-one{margin:0 .97656%;width:23.04688%}}@media (max-width:864px){.static-four_to_low-one{margin:0 1.15741%;width:31.01852%}}@media (max-width:684px){.static-four_to_low-one{margin:0 1.46199%;width:47.07602%}}@media (max-width:479px){.static-four_to_low-one{margin:0 2.08768%;width:95.82463%}}.listing__content_photo-view{margin-left:-.40323%;margin-right:-.40323%;margin-bottom:40px}@media (max-width:1024px){.listing__content_photo-view{margin-left:-.48828%;margin-right:-.48828%}}@media (max-width:864px){.listing__content_photo-view{margin-left:-.5787%;margin-right:-.5787%}}@media (max-width:684px){.listing__content_photo-view{margin-left:-.73099%;margin-right:-.73099%}}@media (max-width:479px){.listing__content_photo-view{margin-left:-1.04384%;margin-right:-1.04384%}}.listing__heading_photo-view,.listing__link_photo-view{vertical-align:middle;display:inline-block}.listing__heading_photo-view{font-size:2.2em;line-height:1.18182em;font-weight:700;font-family:DIN Pro;color:#000;margin-bottom:12px;margin-right:30px}@media (max-width:479px){.listing__heading_photo-view{display:block}}.listing__link_photo-view{font-size:1.4em;line-height:1.42857em;font-weight:400;font-family:Segoe UI;background-color:#3b99fc;color:#fff;padding:0 10px;border-radius:10px;margin-bottom:4px;text-decoration:none}@media (max-width:479px){.listing__link_photo-view{margin-bottom:14px}}.listing__link_photo-view:hover{background:#1485fb}.listing__rows_photo-view{margin-bottom:10px}.listing__column_photo-view{background-color:#fff;margin-bottom:20px;-ms-flex-item-align:stretch;align-self:stretch;position:relative}.listing__card{margin:0!important}",""])},,function(t,e,i){"use strict";var n=i(57),r=i(93),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(58),r=i(94),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(59),r=i(102),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(60),r=i(95),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(61),r=i(105),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(62),r=i(98),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(64),r=i(97),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(65),r=i(100),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(66),r=i(92),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";var n=i(67),r=i(99),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.a=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(68),r=i(96),o=i(22),s=i.i(o.a)(n.a,r.a,r.b,!1,null,null,null);e.default=s.exports},function(t,e,i){"use strict";function n(t){i(109),i(107)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(69),o=i(104),s=i(22),a=n,c=i.i(s.a)(r.a,o.a,o.b,!1,a,null,null);e.default=c.exports},,,function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"cover__media_link",attrs:{href:t.d.href}},[i("img",{staticClass:"cover__image",attrs:{src:t.image}}),t._v(" "),i("app-label",{attrs:{d:t.d}})],1)},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.d.category._id!=t.equalCategory?i("div",{staticClass:"card__category",class:"card__category"+t.settings.modifiers+" card__category"+t.settings.modifiers+"_"+t.loop},[i("a",{attrs:{href:t.d.category.href+t.settings.category.href}},[t._v("\n        "+t._s(t.d.category.name)+"\n    ")])]):t._e()},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card__cover",class:"card__cover"+t.settings.modifiers+" card__cover"+t.settings.modifiers+"_"+t.loop},[i("app-counter",{attrs:{d:t.d,image:t.image}})],1)},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card__spot-im-count",class:"card__spot-im-count"+t.settings.modifiers},[i("a",{staticClass:"spot-im-replies-href",attrs:{href:t.d.href+"#href_spot-im"}},[i("span",{staticClass:"spot-im-replies-count",attrs:{"data-post-id":"article___"+t.d.publicId}})])])},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"listing",class:"listing"+t.settings.modifiers},[i("div",{staticClass:"listing__content",class:"listing__content"+t.settings.modifiers},[i("ul",{staticClass:"listing__rows",class:"listing__rows"+t.settings.modifiers},t._l(t.docs,function(e,n){return i("li",{staticClass:"listing__column",class:"listing__column"+t.settings.modifiers+" listing__column"+t.settings.modifiers+"_"+(n+=1)},[i("div",{staticClass:"listing__card",class:"listing__card"+t.settings.modifiers+" listing__card"+t.settings.modifiers+"_"+n},[i("app-foto-section",{attrs:{loop:n,image:1==n?e.cover.article:e.cover.thumbnail,d:e,date:t._f("showdate")(e.publishTime.sec,t.months),settings:t.settings}})],1)])}),0),t._v(" "),t.showButton&&t.nextPageText?i("div",{staticClass:"listing__button listing__button_sections"},[i("div",{staticClass:"button"},[i("a",{staticClass:"button__item button__item_listing",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.nextPage(e)}}},[t._v("\n                    "+t._s(t.nextPageText)+"\n                ")])])]):t._e()])])},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover"},[i("div",{staticClass:"cover__media cover__media_ratio"},[i("app-counter",{attrs:{d:t.d}}),t._v(" "),i("app-image",{attrs:{d:t.d,image:t.image}})],1)])},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.d.title?i("div",{staticClass:"card__heading",class:"card__heading"+t.settings.modifiers+" card__heading"+t.settings.modifiers+"_"+t.loop},[i("a",{attrs:{href:t.d.href}},[t._v("\n       "+t._s(t.d.title)+"\n    ")])]):t._e()},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.d.labelOlimpic2018?i("div",{staticClass:"cover__label cover__label_olympic2018"},[i("img",{attrs:{src:"/static/img/labels/oi-2018.png",alt:"Олимпийские игры 2018"}})]):t.d.labelItogi2018?i("div",{staticClass:"cover__label cover__label_itogi2018"},[i("img",{attrs:{src:"/static/img/labels/itogi-2018.png",alt:"Итоги 2018"}})]):t.d.labelBlic2018?i("div",{staticClass:"cover__label cover__label_blic-2018"},[i("img",{attrs:{src:"/static/img/labels/blic-2018.png",alt:"Блиц-интервью"}})]):t.d.labelHockey2019?i("div",{staticClass:"cover__label cover__label-hockey"},[i("img",{staticClass:"cover__label-img",attrs:{src:"/static/img/labels/hockey-2019.png",alt:"Чемпионат мира по хоккею — 2019"}})]):t.d.labelNezabitite?i("div",{staticClass:"cover__label nezabitie-istorii"},[i("img",{staticClass:"cover__label-img",attrs:{src:"/static/img/labels/nezabitie_istorii.png",alt:"Незабытые истории"}})]):t.d.labelItogi2019?i("div",{staticClass:"cover__label itogi-2019"},[i("img",{staticClass:"cover__label-img",attrs:{src:"/static/img/labels/ITOGI2019.svg",alt:"Итоги 2019"}})]):t.d.labelBlic2019?i("div",{staticClass:"cover__label blic-2019"},[i("img",{staticClass:"cover__label-img",attrs:{src:"/static/img/labels/blic-2019.svg",alt:"Блиц 2019"}})]):t.d.labelOlympic1980?i("div",{staticClass:"cover__label oi-1980"},[i("img",{staticClass:"cover__label-img",attrs:{src:"/static/img/labels/olympics-1980-blue.png",alt:"Олимпиада 1980"}})]):t._e()},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.d.imageCount?i("a",{staticClass:"cover__count-images",attrs:{href:t.d.href}},[t._v("\n    "+t._s(t.d.imageCount)+"\n")]):t._e()},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__wrapper",class:"card__wrapper"+t.settings.modifiers+" card__wrapper"+t.settings.modifiers+"_"+t.loop},[i("app-cover",{attrs:{settings:t.settings,loop:t.loop,d:t.d,image:t.image}}),t._v(" "),i("app-category",{attrs:{settings:t.settings,loop:t.loop,d:t.d}}),t._v(" "),i("app-title",{attrs:{loop:t.loop,d:t.d,settings:t.settings}}),t._v(" "),i("app-date",{attrs:{settings:t.settings,loop:t.loop,date:t.date}}),t._v(" "),i("app-summary",{attrs:{settings:t.settings,loop:t.loop,d:t.d}}),t._v(" "),i("app-spot-im-count",{attrs:{settings:t.settings,loop:t.loop,d:t.d}})],1)])},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__date",class:"card__date"+t.settings.modifiers+" card__date"+t.settings.modifiers+"_"+t.loop},[t._v("\n    "+t._s(t.date)+"\n")])},r=[]},,function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"listing",class:"listing"+t.settings.modifiers},[i("div",{staticClass:"listing__content",class:"listing__content"+t.settings.modifiers},[i("div",{staticClass:"listing__heading",class:"listing__heading"+t.settings.modifiers},[t._v("\n            Последние фотогалереи\n        ")]),t._v(" "),i("a",{staticClass:"listing__link",class:"listing__link"+t.settings.modifiers,attrs:{href:"/foto"}},[t._v("\n            Смотреть все\n        ")]),t._v(" "),i("ul",{staticClass:"listing__rows",class:"listing__rows"+t.settings.modifiers},t._l(t.docs,function(e){return i("li",{staticClass:"listing__column",class:"listing__column"+t.settings.modifiers},[i("div",{staticClass:"listing__card",class:"listing__card"+t.settings.modifiers},[i("app-foto-section",{attrs:{image:e.cover.thumbnail,d:e,date:t._f("showdate")(e.publishTime.sec,t.months),settings:t.settings}})],1)])}),0)])])},r=[]},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.d.summary?i("div",{staticClass:"card__summary",class:"card__summary"+t.settings.modifiers+" card__summary"+t.settings.modifiers+"_"+t.loop},[t.d.href&&t.href?i("a",{attrs:{href:t.d.href}},[t._v("\n        "+t._s(t._f("stringsize")(t.d.summary,t.settings.summary.size))+"\n    ")]):i("div",[t._v("\n        "+t._s(t._f("stringsize")(t.d.summary,t.settings.summary.size))+"\n    ")])]):t._e()},r=[]},,function(t,e,i){var n=i(74);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i(53).default;r("220224aa",n,!0,{})},,function(t,e,i){var n=i(76);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i(53).default;r("c1228db4",n,!0,{})}]));