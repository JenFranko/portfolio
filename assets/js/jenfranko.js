!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e;e=function(){
/*!
       * css-vars-ponyfill
       * v2.4.3
       * https://jhildenbiddle.github.io/css-vars-ponyfill/
       * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>
       * MIT license
       */
function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}
/*!
       * get-css-data
       * v2.0.0
       * https://github.com/jhildenbiddle/get-css-data
       * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>
       * MIT license
       */function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},n=Array.isArray(e)?e:[e],o=Array.apply(null,Array(n.length)).map((function(e){return null}));function a(e){var t=e&&"<"===e.trim().charAt(0);return e&&!t}function s(e,t){r.onError(e,n[t],t)}function i(e,t){var a=r.onSuccess(e,n[t],t);e=!1===a?"":a||e,o[t]=e,-1===o.indexOf(null)&&r.onComplete(o)}var c=document.createElement("a");n.forEach((function(e,t){if(c.setAttribute("href",e),c.href=String(c.href),Boolean(document.all&&!window.atob)&&c.host.split(":")[0]!==location.host.split(":")[0])if(c.protocol===location.protocol){var n=new XDomainRequest;n.open("GET",e),n.timeout=0,n.onprogress=Function.prototype,n.ontimeout=Function.prototype,n.onload=function(){a(n.responseText)?i(n.responseText,t):s(n,t)},n.onerror=function(e){s(n,t)},setTimeout((function(){n.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),s(null,t);else{var o=new XMLHttpRequest;o.open("GET",e),r.mimeType&&o.overrideMimeType&&o.overrideMimeType(r.mimeType),r.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(o.status<400&&a(o.responseText)||0===o.status&&a(o.responseText)?i(o.responseText,t):s(o,t))},o.send()}}))}
/**
       * Gets CSS data from <style> and <link> nodes (including @imports), then
       * returns data in order processed by DOM. Allows specifying nodes to
       * include/exclude and filtering CSS data using RegEx.
       *
       * @preserve
       * @param {object}   [options] The options object
       * @param {object}   [options.rootElement=document] Root element to traverse for
       *                   <link> and <style> nodes.
       * @param {string}   [options.include] CSS selector matching <link> and <style>
       *                   nodes to include
       * @param {string}   [options.exclude] CSS selector matching <link> and <style>
       *                   nodes to exclude
       * @param {object}   [options.filter] Regular expression used to filter node CSS
       *                   data. Each block of CSS data is tested against the filter,
       *                   and only matching data is included.
       * @param {boolean}  [options.skipDisabled=true] Determines if disabled
       *                   stylesheets will be skipped while collecting CSS data.
       * @param {boolean}  [options.useCSSOM=false] Determines if CSS data will be
       *                   collected from a stylesheet's runtime values instead of its
       *                   text content. This is required to get accurate CSS data
       *                   when a stylesheet has been modified using the deleteRule()
       *                   or insertRule() methods because these modifications will
       *                   not be reflected in the stylesheet's text content.
       * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
       *                   1) the XHR object, 2) source node reference, and 3) the
       *                   source URL as arguments.
       * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
       *                   1) CSS text, 2) source node reference, and 3) the source
       *                   URL as arguments.
       * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
       *                   object for inspection, 2) soure node reference, and 3) the
       *                   source URL that failed (either a <link> href or an @import)
       *                   as arguments
       * @param {function} [options.onComplete] Callback after all nodes have been
       *                   processed. Passes 1) concatenated CSS text, 2) an array of
       *                   CSS text in DOM order, and 3) an array of nodes in DOM
       *                   order as arguments.
       *
       * @example
       *
       *   getCssData({
       *     rootElement : document,
       *     include     : 'style,link[rel="stylesheet"]',
       *     exclude     : '[href="skip.css"]',
       *     filter      : /red/,
       *     skipDisabled: true,
       *     useCSSOM    : false,
       *     onBeforeSend(xhr, node, url) {
       *       // ...
       *     }
       *     onSuccess(cssText, node, url) {
       *       // ...
       *     }
       *     onError(xhr, node, url) {
       *       // ...
       *     },
       *     onComplete(cssText, cssArray, nodeArray) {
       *       // ...
       *     }
       *   });
       */function r(e){var r=/\/\*[\s\S]+?\*\//g,o=/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,a={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,skipDisabled:!1!==e.skipDisabled,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},s=Array.apply(null,a.rootElement.querySelectorAll(a.include)).filter((function(e){return t=e,r=a.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,r);var t,r})),i=Array.apply(null,Array(s.length)).map((function(e){return null}));function c(){if(-1===i.indexOf(null)){i.reduce((function(e,t,r){return""===t&&e.push(r),e}),[]).reverse().forEach((function(e){return[s,i].forEach((function(t){return t.splice(e,1)}))}));var e=i.join("");a.onComplete(e,i,s)}}function u(e,t,r,n){var o=a.onSuccess(e,r,n);d(e=void 0!==o&&!1===Boolean(o)?"":o||e,r,n,(function(e,n){null===i[t]&&(n.forEach((function(e){return a.onError(e.xhr,r,e.url)})),!a.filter||a.filter.test(e)?i[t]=e:i[t]="",c())}))}function l(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s={};return s.rules=(e.replace(r,"").match(o)||[]).filter((function(e){return-1===a.indexOf(e)})),s.urls=s.rules.map((function(e){return e.replace(o,"$1")})),s.absoluteUrls=s.urls.map((function(e){return n(e,t)})),s.absoluteRules=s.rules.map((function(e,r){var o=s.urls[r],a=n(s.absoluteUrls[r],t);return e.replace(o,a)})),s}function d(e,r,n,o){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=l(e,n,i);c.rules.length?t(c.absoluteUrls,{onBeforeSend:function(e,t,n){a.onBeforeSend(e,r,t)},onSuccess:function(e,t,n){var o=a.onSuccess(e,r,t),s=l(e=!1===o?"":o||e,t,i);return s.rules.forEach((function(t,r){e=e.replace(t,s.absoluteRules[r])})),e},onError:function(t,a,u){s.push({xhr:t,url:a}),i.push(c.rules[u]),d(e,r,n,o,s,i)},onComplete:function(t){t.forEach((function(t,r){e=e.replace(c.rules[r],t)})),d(e,r,n,o,s,i)}}):o(e,s)}s.length?s.forEach((function(e,r){var o=e.getAttribute("href"),s=e.getAttribute("rel"),l="link"===e.nodeName.toLowerCase()&&o&&s&&-1!==s.toLowerCase().indexOf("stylesheet"),d=!1!==a.skipDisabled&&e.disabled,f="style"===e.nodeName.toLowerCase();if(l&&!d)t(o,{mimeType:"text/css",onBeforeSend:function(t,r,n){a.onBeforeSend(t,e,r)},onSuccess:function(t,a,s){var i=n(o);u(t,r,e,i)},onError:function(t,n,o){i[r]="",a.onError(t,e,n),c()}});else if(f&&!d){var p=e.textContent;a.useCSSOM&&(p=Array.apply(null,e.sheet.cssRules).map((function(e){return e.cssText})).join("")),u(p,r,e,location.href)}else i[r]="",c()})):a.onComplete("",[])}function n(e,t){var r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t||document.baseURI||(document.querySelector("base")||{}).href||location.href,o.href=e,o.href}var o=a;function a(e,t,r){e instanceof RegExp&&(e=s(e,r)),t instanceof RegExp&&(t=s(t,r));var n=i(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function s(e,t){var r=t.match(e);return r?r[0]:null}function i(e,t,r){var n,o,a,s,i,c=r.indexOf(e),u=r.indexOf(t,c+1),l=c;if(c>=0&&u>0){for(n=[],a=r.length;l>=0&&!i;)l==c?(n.push(l),c=r.indexOf(e,l+1)):1==n.length?i=[n.pop(),u]:((o=n.pop())<a&&(a=o,s=u),u=r.indexOf(t,l+1)),l=c<u&&c>=0?c:u;n.length&&(i=[a,s])}return i}function c(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={preserveStatic:!0,removeComments:!1},a=e({},n,r),s=[];function i(e){throw new Error("CSS parse error: ".concat(e))}function c(e){var r=e.exec(t);if(r)return t=t.slice(r[0].length),r}function u(){return c(/^{\s*/)}function l(){return c(/^}/)}function d(){c(/^\s*/)}function f(){if(d(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return i("end of comment is missing");var r=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:r}}}function p(){for(var e,t=[];e=f();)t.push(e);return a.removeComments?[]:t}function m(){for(d();"}"===t[0];)i("extra closing bracket");var e=c(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(e){return e.replace(/,/g,"‌")})).split(/\s*(?![^(]*\)),\s*/).map((function(e){return e.replace(/\u200C/g,",")}))}function v(){if("@"===t[0])return A();c(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=c(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(r){if(r=r[0].trim(),!c(/^:\s*/))return i("property missing ':'");var n=c(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),o={type:"declaration",property:r.replace(e,""),value:n?n[0].replace(e,"").trim():""};return c(/^[;\s]*/),o}}function h(){if(!u())return i("missing '{'");for(var e,t=p();e=v();)t.push(e),t=t.concat(p());return l()?t:i("missing '}'")}function g(){d();for(var e,t=[];e=c(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),c(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:h()}}function y(){var e=c(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=c(/^([-\w]+)\s*/)))return i("@keyframes missing name");var r,n=e[1];if(!u())return i("@keyframes missing '{'");for(var o=p();r=g();)o.push(r),o=o.concat(p());return l()?{type:"keyframes",name:n,vendor:t,keyframes:o}:i("@keyframes missing '}'")}}function b(){if(c(/^@page */))return{type:"page",selectors:m()||[],declarations:h()}}function S(){var e=c(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);if(e)return{type:"page-margin-box",name:"".concat(e[1],"-").concat(e[2])+(e[3]?"-".concat(e[3]):""),declarations:h()}}function E(){if(c(/^@font-face\s*/))return{type:"font-face",declarations:h()}}function w(){var e=c(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:j()}}function x(){if(c(/^@host\s*/))return{type:"host",rules:j()}}function C(){var e=c(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:j()}}function k(){var e=c(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}function _(){var e=c(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:j()}}function O(){var e=c(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}function A(){if(d(),"@"===t[0]){var e=O()||E()||C()||y()||w()||_()||k()||x()||b()||S();if(e&&!a.preserveStatic){return(e.declarations?e.declarations.some((function(e){return/var\(/.test(e.value)})):(e.keyframes||e.rules||[]).some((function(e){return(e.declarations||[]).some((function(e){return/var\(/.test(e.value)}))})))?e:{}}return e}}function D(){if(!a.preserveStatic){var e=o("{","}",t);if(e){var r=/:(?:root|host)(?![.:#(])/.test(e.pre)&&/--\S*\s*:/.test(e.body),n=/var\(/.test(e.body);if(!r&&!n)return t=t.slice(e.end+1),{}}}var s=m()||[],c=a.preserveStatic?h():h().filter((function(e){var t=s.some((function(e){return/:(?:root|host)(?![.:#(])/.test(e)}))&&/^--\S/.test(e.property),r=/var\(/.test(e.value);return t||r}));return s.length||i("selector missing"),{type:"rule",selectors:s,declarations:c}}function j(e){if(!e&&!u())return i("missing '{'");for(var r,n=p();t.length&&(e||"}"!==t[0])&&(r=A()||D());)r.type&&n.push(r),n=n.concat(p());return e||l()?n:i("missing '}'")}return{type:"stylesheet",stylesheet:{rules:j(!0),errors:s}}}function u(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={parseHost:!1,store:{},onWarning:function(){}},o=e({},n,r),a=new RegExp(":".concat(o.parseHost?"host":"root","$"));return"string"==typeof t&&(t=c(t,o)),t.stylesheet.rules.forEach((function(e){"rule"===e.type&&e.selectors.some((function(e){return a.test(e)}))&&e.declarations.forEach((function(e,t){var r=e.property,n=e.value;r&&0===r.indexOf("--")&&(o.store[r]=n)}))})),o.store}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},"page-margin-box":function(e){return"@"+e.name+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",a=0;a<e.length;a++){var s=e[a];r&&r(s);var i=n[s.type](s);i&&(o+=i,i.length&&s.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}function d(e,t){e.rules.forEach((function(r){r.rules?d(r,t):r.keyframes?r.keyframes.forEach((function(e){"keyframe"===e.type&&t(e.declarations,r)})):r.declarations&&t(r.declarations,e)}))}function f(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},o=e({},n,r);return"string"==typeof t&&(t=c(t,o)),d(t.stylesheet,(function(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=n.type,s=n.property,i=n.value;if("declaration"===a)if(o.preserveVars||!s||0!==s.indexOf("--")){if(-1!==i.indexOf("var(")){var c=m(i,o);c!==n.value&&(c=p(c),o.preserveVars?(e.splice(r,0,{type:a,property:s,value:c}),r++):n.value=c)}}else e.splice(r,1),r--}})),l(t)}function p(e){return(e.match(/calc\(([^)]+)\)/g)||[]).forEach((function(t){var r="calc".concat(t.split("calc").join(""));e=e.replace(t,r)})),e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var n=o("(",")",e);function a(e){var n=e.split(",")[0].replace(/[\s\n\t]/g,""),o=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],a=Object.prototype.hasOwnProperty.call(t.variables,n)?String(t.variables[n]):void 0,s=a||(o?String(o):void 0),i=r||e;return a||t.onWarning('variable "'.concat(n,'" is undefined')),s&&"undefined"!==s&&s.length>0?m(s,t,i):"var(".concat(i,")")}if(n){if("var"===n.pre.slice(-3)){var s=0===n.body.trim().length;return s?(t.onWarning("var() must contain a non-whitespace string"),e):n.pre.slice(0,-3)+a(n.body)+m(n.post,t)}return n.pre+"(".concat(m(n.body,t),")")+m(n.post,t)}return-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e}a.range=i;var v="undefined"!=typeof window,h=v&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),g={group:0,job:0},y={rootElement:v?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onError:function(){},onWarning:function(){},onSuccess:function(){},onComplete:function(){},onFinally:function(){}},b={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},S={dom:{},job:{},user:{}},E=!1,w=null,x=0,C=null,k=!1;
/**
       * Fetches, parses, and transforms CSS custom properties from specified
       * <style> and <link> elements into static values, then appends a new <style>
       * element with static values to the DOM to provide CSS custom property
       * compatibility for legacy browsers. Also provides a single interface for
       * live updates of runtime values in both modern and legacy browsers.
       *
       * @preserve
       * @param {object}   [options] Options object
       * @param {object}   [options.rootElement=document] Root element to traverse for
       *                   <link> and <style> nodes
       * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
       *                   and <style> nodes will be processed.
       * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
       *                   matching <link re="stylesheet"> and <style> nodes to
       *                   process
       * @param {string}   [options.exclude] CSS selector matching <link
       *                   rel="stylehseet"> and <style> nodes to exclude from those
       *                   matches by options.include
       * @param {object}   [options.variables] A map of custom property name/value
       *                   pairs. Property names can omit or include the leading
       *                   double-hyphen (—), and values specified will override
       *                   previous values
       * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
       *                   only generate legacy-compatible CSS in browsers that lack
       *                   native support (i.e., legacy browsers)
       * @param {boolean}  [options.preserveStatic=true] Determines if CSS
       *                   declarations that do not reference a custom property will
       *                   be preserved in the transformed CSS
       * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
       *                   property declarations will be preserved in the transformed
       *                   CSS
       * @param {boolean}  [options.silent=false] Determines if warning and error
       *                   messages will be displayed on the console
       * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
       *                   update the DOM after processing CSS custom properties
       * @param {boolean}  [options.updateURLs=true] Determines if relative url()
       *                   paths will be converted to absolute urls in external CSS
       * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
       *                   be created that will execute the ponyfill when a <link> or
       *                   <style> DOM mutation is observed
       * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
       *                   1) the XHR object, 2) source node reference, and 3) the
       *                   source URL as arguments
       * @param {function} [options.onError] Callback after a CSS parsing error has
       *                   occurred or an XHR request has failed. Passes 1) an error
       *                   message, and 2) source node reference, 3) xhr, and 4 url as
       *                   arguments.
       * @param {function} [options.onWarning] Callback after each CSS parsing warning
       *                   has occurred. Passes 1) a warning message as an argument.
       * @param {function} [options.onSuccess] Callback after CSS data has been
       *                   collected from each node and before CSS custom properties
       *                   have been transformed. Allows modifying the CSS data before
       *                   it is transformed by returning any string value (or false
       *                   to skip). Passes 1) CSS text, 2) source node reference, and
       *                   3) the source URL as arguments.
       * @param {function} [options.onComplete] Callback after all CSS has been
       *                   processed, legacy-compatible CSS has been generated, and
       *                   (optionally) the DOM has been updated. Passes 1) a CSS
       *                   string with CSS variable values resolved, 2) an array of
       *                   output <style> node references that have been appended to
       *                   the DOM, 3) an object containing all custom properies names
       *                   and values, and 4) the ponyfill execution time in
       *                   milliseconds.
       * @param {function} [options.onFinally] Callback in modern and legacy browsers
       *                   after the ponyfill has finished all tasks. Passes 1) a
       *                   boolean indicating if the last ponyfill call resulted in a
       *                   style change, 2) a boolean indicating if the current
       *                   browser provides native support for CSS custom properties,
       *                   and 3) the ponyfill execution time in milliseconds.
       * @example
       *
       *   cssVars({
       *     rootElement   : document,
       *     shadowDOM     : false,
       *     include       : 'style,link[rel="stylesheet"]',
       *     exclude       : '',
       *     variables     : {},
       *     onlyLegacy    : true,
       *     preserveStatic: true,
       *     preserveVars  : false,
       *     silent        : false,
       *     updateDOM     : true,
       *     updateURLs    : true,
       *     watch         : false,
       *     onBeforeSend(xhr, node, url) {},
       *     onError(message, node, xhr, url) {},
       *     onWarning(message) {},
       *     onSuccess(cssText, node, url) {},
       *     onComplete(cssText, styleNode, cssVariables, benchmark) {},
       *     onFinally(hasChanged, hasNativeSupport, benchmark)
       *   });
       */
function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n="cssVars(): ",o=e({},y,t);function a(e,t,r,a){!o.silent&&window.console&&console.error("".concat(n).concat(e,"\n"),t),o.onError(e,t,r,a)}function s(e){!o.silent&&window.console&&console.warn("".concat(n).concat(e)),o.onWarning(e)}function i(e){o.onFinally(Boolean(e),h,T()-o.__benchmark)}if(v){if(o.watch)return o.watch=y.watch,O(o),void _(o);if(!1===o.watch&&w&&(w.disconnect(),w=null),!o.__benchmark){if(E===o.rootElement)return void A(t);var d=Array.apply(null,o.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])'));if(o.__benchmark=T(),o.exclude=[w?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',"link[disabled]:not([data-cssvars])",o.exclude].filter((function(e){return e})).join(","),o.variables=V(o.variables),d.forEach((function(e){var t="style"===e.nodeName.toLowerCase()&&e.__cssVars.text,r=t&&e.textContent!==e.__cssVars.text;t&&r&&(e.sheet&&(e.sheet.disabled=!1),e.setAttribute("data-cssvars",""))})),!w){var p=Array.apply(null,o.rootElement.querySelectorAll('[data-cssvars="out"]'));p.forEach((function(e){var t=e.getAttribute("data-cssvars-group");t&&o.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]'))||e.parentNode.removeChild(e)})),x&&d.length<x&&(x=d.length,S.dom={})}}if("loading"!==document.readyState)if(h&&o.onlyLegacy){var m=!1;if(o.updateDOM){var C=o.rootElement.host||(o.rootElement===document?document.documentElement:o.rootElement);Object.keys(o.variables).forEach((function(e){var t=o.variables[e];m=m||t!==getComputedStyle(C).getPropertyValue(e),C.style.setProperty(e,t)}))}i(m)}else!k&&(o.shadowDOM||o.rootElement.shadowRoot||o.rootElement.host)?r({rootElement:y.rootElement,include:y.include,exclude:o.exclude,skipDisabled:!1,onSuccess:function(e,t,r){return!((t.sheet||{}).disabled&&!t.__cssVars)&&((e=((e=e.replace(b.cssComments,"").replace(b.cssMediaQueries,"")).match(b.cssVarDeclRules)||[]).join(""))||!1)},onComplete:function(e,t,r){u(e,{store:S.dom,onWarning:s}),k=!0,_(o)}}):(E=o.rootElement,r({rootElement:o.rootElement,include:o.include,exclude:o.exclude,skipDisabled:!1,onBeforeSend:o.onBeforeSend,onError:function(e,t,r){var n=e.responseURL||N(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");a("CSS XHR Error: ".concat(n," ").concat(e.status," ").concat(o),t,e,n)},onSuccess:function(e,t,r){if((t.sheet||{}).disabled&&!t.__cssVars)return!1;var n="link"===t.nodeName.toLowerCase(),a="style"===t.nodeName.toLowerCase()&&e!==t.textContent,s=o.onSuccess(e,t,r);return e=void 0!==s&&!1===Boolean(s)?"":s||e,o.updateURLs&&(n||a)&&(e=j(e,r)),e},onComplete:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],d=e({},S.dom,S.user);if(S.job={},n.forEach((function(e,t){var n=r[t];if(e.__cssVars=e.__cssVars||{},e.__cssVars.text=n,b.cssVars.test(n))try{var i=c(n,{preserveStatic:o.preserveStatic,removeComments:!0});u(i,{parseHost:Boolean(o.rootElement.host),store:S.dom,onWarning:s}),e.__cssVars.tree=i}catch(t){a(t.message,e)}})),e(S.job,S.dom),o.updateDOM?(e(S.user,o.variables),e(S.job,S.user)):(e(S.job,S.user,o.variables),e(d,o.variables)),g.job>0&&Boolean(Object.keys(S.job).length>Object.keys(d).length||Boolean(Object.keys(d).length&&Object.keys(S.job).some((function(e){return S.job[e]!==d[e]})))))L(o.rootElement),_(o);else{var p=[],m=[],v=!1;if(o.updateDOM&&g.job++,n.forEach((function(t,n){var i=!t.__cssVars.tree;if(t.__cssVars.tree)try{f(t.__cssVars.tree,e({},o,{variables:S.job,onWarning:s}));var c=l(t.__cssVars.tree);if(o.updateDOM){var u=r[n],d=b.cssVarFunc.test(u);if(t.getAttribute("data-cssvars")||t.setAttribute("data-cssvars","src"),c.length&&d){var h=t.getAttribute("data-cssvars-group")||++g.group,y=c.replace(/\s/g,""),E=o.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(h,'"]'))||document.createElement("style");v=v||b.cssKeyframes.test(c),o.preserveStatic&&t.sheet&&(t.sheet.disabled=!0),E.hasAttribute("data-cssvars")||E.setAttribute("data-cssvars","out"),y===t.textContent.replace(/\s/g,"")?(i=!0,E&&E.parentNode&&(t.removeAttribute("data-cssvars-group"),E.parentNode.removeChild(E))):y!==E.textContent.replace(/\s/g,"")&&([t,E].forEach((function(e){e.setAttribute("data-cssvars-job",g.job),e.setAttribute("data-cssvars-group",h)})),E.textContent=c,p.push(c),m.push(E),E.parentNode||t.parentNode.insertBefore(E,t.nextSibling))}}else t.textContent.replace(/\s/g,"")!==c&&p.push(c)}catch(e){a(e.message,t)}i&&t.setAttribute("data-cssvars","skip"),t.hasAttribute("data-cssvars-job")||t.setAttribute("data-cssvars-job",g.job)})),x=o.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,o.shadowDOM)for(var h,y=[].concat(o.rootElement).concat(Array.apply(null,o.rootElement.querySelectorAll("*"))),w=0;h=y[w];++w)if(h.shadowRoot&&h.shadowRoot.querySelector("style")){var C=e({},o,{rootElement:h.shadowRoot});_(C)}o.updateDOM&&v&&D(o.rootElement),E=!1,o.onComplete(p.join(""),m,JSON.parse(JSON.stringify(S.job)),T()-o.__benchmark),i(m.length)}}}));else document.addEventListener("DOMContentLoaded",(function e(r){_(t),document.removeEventListener("DOMContentLoaded",e)}))}}function O(e){function t(e){var t=r(e)&&e.hasAttribute("disabled"),n=(e.sheet||{}).disabled;return t||n}function r(e){return"link"===e.nodeName.toLowerCase()&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")}function n(e){return"style"===e.nodeName.toLowerCase()}window.MutationObserver&&(w&&(w.disconnect(),w=null),(w=new MutationObserver((function(o){o.some((function(o){return function(n){var o=!1;if("attributes"===n.type&&r(n.target)&&!t(n.target)){var a="disabled"===n.attributeName,s="href"===n.attributeName,i="skip"===n.target.getAttribute("data-cssvars"),c="src"===n.target.getAttribute("data-cssvars");a?o=!i&&!c:s&&(i?n.target.setAttribute("data-cssvars",""):c&&L(e.rootElement,!0),o=!0)}return o}(o)||function(e){var t=!1;if("childList"===e.type){var r=n(e.target),o="out"===e.target.getAttribute("data-cssvars");t=r&&!o}return t}(o)||function(e){var o=!1;return"childList"===e.type&&(o=Array.apply(null,e.addedNodes).some((function(e){var o=1===e.nodeType&&e.hasAttribute("data-cssvars"),a=n(e)&&b.cssVars.test(e.textContent);return!o&&(r(e)||a)&&!t(e)}))),o}(o)||function(t){var r=!1;return"childList"===t.type&&(r=Array.apply(null,t.removedNodes).some((function(t){var r=1===t.nodeType,n=r&&"out"===t.getAttribute("data-cssvars"),o=r&&"src"===t.getAttribute("data-cssvars"),a=o;if(o||n){var s=t.getAttribute("data-cssvars-group"),i=e.rootElement.querySelector('[data-cssvars-group="'.concat(s,'"]'));o&&L(e.rootElement,!0),i&&i.parentNode.removeChild(i)}return a}))),r}(o)}))&&_(e)}))).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(C),C=setTimeout((function(){e.__benchmark=null,_(e)}),t)}function D(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter((function(e){return getComputedStyle(document.body)[e]}))[0];if(t){for(var r=e.getElementsByTagName("*"),n=[],o="__CSSVARSPONYFILL-KEYFRAMES__",a=0,s=r.length;a<s;a++){var i=r[a];"none"!==getComputedStyle(i)[t]&&(i.style[t]+=o,n.push(i))}document.body.offsetHeight;for(var c=0,u=n.length;c<u;c++){var l=n[c].style;l[t]=l[t].replace(o,"")}}}function j(e,t){return(e.replace(b.cssComments,"").match(b.cssUrls)||[]).forEach((function(r){var n=r.replace(b.cssUrls,"$1"),o=N(n,t);e=e.replace(r,r.replace(n,o))})),e}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce((function(r,n){return r[t.test(n)?n:"--".concat(n.replace(/^-+/,""))]=e[n],r}),{})}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}function T(){return v&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function L(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Array.apply(null,e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));r.forEach((function(e){return e.setAttribute("data-cssvars","")})),t&&(S.dom={})}_.reset=function(){for(var e in g.job=0,g.group=0,E=!1,w&&(w.disconnect(),w=null),x=0,C=null,k=!1,S)S[e]={}},_(),window.MutationObserver=window.MutationObserver||function(e){function t(e){this._watched=[],this._listener=e}function r(e){!function r(){var n=e.takeRecords();n.length&&e._listener(n,e),e._timeout=setTimeout(r,t._period)}()}function n(t){var r={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(var n in t)f(r,n)&&t[n]!==e&&(r[n]=t[n]);return r}function o(e,t){var r=i(e,t);return function(o){var c,u=o.length;t.charData&&3===e.nodeType&&e.nodeValue!==r.charData&&o.push(new n({type:"characterData",target:e,oldValue:r.charData})),t.attr&&r.attr&&a(o,e,r.attr,t.afilter),(t.kids||t.descendents)&&(c=s(o,e,r,t)),(c||o.length!==u)&&(r=i(e,t))}}function a(e,t,r,o){for(var a,s,i={},c=t.attributes,u=c.length;u--;)s=(a=c[u]).name,o&&!f(o,s)||(m(t,a)!==r[s]&&e.push(n({type:"attributes",target:t,attributeName:s,oldValue:r[s],attributeNamespace:a.namespaceURI})),i[s]=!0);for(s in r)i[s]||e.push(n({target:t,type:"attributes",attributeName:s,oldValue:r[s]}))}function s(t,r,o,s){function i(e,r,o,i,c){for(var u,d,f,p=e.length-1,m=-~((p-c)/2);f=e.pop();)u=o[f.i],d=i[f.j],s.kids&&m&&Math.abs(f.i-f.j)>=p&&(t.push(n({type:"childList",target:r,addedNodes:[u],removedNodes:[u],nextSibling:u.nextSibling,previousSibling:u.previousSibling})),m--),s.attr&&d.attr&&a(t,u,d.attr,s.afilter),s.charData&&3===u.nodeType&&u.nodeValue!==d.charData&&t.push(n({type:"characterData",target:u,oldValue:d.charData})),s.descendents&&l(u,d)}function l(r,o){for(var p,m,v,h,g,y,b,S=r.childNodes,E=o.kids,w=S.length,x=E?E.length:0,C=0,k=0,_=0;k<w||_<x;)(y=S[k])===(b=(g=E[_])&&g.node)?(s.attr&&g.attr&&a(t,y,g.attr,s.afilter),s.charData&&g.charData!==e&&y.nodeValue!==g.charData&&t.push(n({type:"characterData",target:y,oldValue:g.charData})),m&&i(m,r,S,E,C),s.descendents&&(y.childNodes.length||g.kids&&g.kids.length)&&l(y,g),k++,_++):(f=!0,p||(p={},m=[]),y&&(p[v=u(y)]||(p[v]=!0,-1===(h=c(E,y,_))?s.kids&&(t.push(n({type:"childList",target:r,addedNodes:[y],nextSibling:y.nextSibling,previousSibling:y.previousSibling})),C++):m.push({i:k,j:h})),k++),b&&b!==S[k]&&(p[v=u(b)]||(p[v]=!0,-1===(h=d(S,b,k))?s.kids&&(t.push(n({type:"childList",target:o.node,removedNodes:[b],nextSibling:E[_+1],previousSibling:E[_-1]})),C--):m.push({i:h,j:_})),_++));m&&i(m,r,S,E,C)}var f;return l(r,o),f}function i(e,t){var r=!0;return function e(n){var o={node:n};return!t.charData||3!==n.nodeType&&8!==n.nodeType?(t.attr&&r&&1===n.nodeType&&(o.attr=l(n.attributes,(function(e,r){return t.afilter&&!t.afilter[r.name]||(e[r.name]=m(n,r)),e}),{})),r&&(t.kids||t.charData||t.attr&&t.descendents)&&(o.kids=function(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n,e);return r}(n.childNodes,e)),r=t.descendents):o.charData=n.nodeValue,o}(e)}function c(e,t,r){return d(e,t,r,"node")}function u(e){try{return e.id||(e[h]=e[h]||v++)}catch(t){try{return e.nodeValue}catch(e){return v++}}}function l(e,t,r){for(var n=0;n<e.length;n++)r=t(r,e[n],n,e);return r}function d(e,t,r,n){for(;r<e.length;r++)if((n?e[r][n]:e[r])===t)return r;return-1}function f(t,r){return t[r]!==e}t._period=30,t.prototype={observe:function(e,t){for(var n={attr:!!(t.attributes||t.attributeFilter||t.attributeOldValue),kids:!!t.childList,descendents:!!t.subtree,charData:!(!t.characterData&&!t.characterDataOldValue)},a=this._watched,s=0;s<a.length;s++)a[s].tar===e&&a.splice(s,1);t.attributeFilter&&(n.afilter=l(t.attributeFilter,(function(e,t){return e[t]=!0,e}),{})),a.push({tar:e,fn:o(e,n)}),this._timeout||r(this)},takeRecords:function(){for(var e=[],t=this._watched,r=0;r<t.length;r++)t[r].fn(e);return e},disconnect:function(){this._watched=[],clearTimeout(this._timeout),this._timeout=null}};var p=document.createElement("i");p.style.top=0;var m=(p="null"!=p.attributes.style.value)?function(e,t){return t.value}:function(e,t){return"style"!==t.name?t.value:e.style.cssText},v=1,h="mo_id";return t}(void 0)},"function"==typeof define&&define.amd?define(e):e()}));