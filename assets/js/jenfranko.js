!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).jenfranko=t()}(this,(function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}return e(function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e,t){!function(e){
/*!
	     * css-vars-ponyfill
	     * v2.4.3
	     * https://jhildenbiddle.github.io/css-vars-ponyfill/
	     * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>
	     * MIT license
	     */
function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}
/*!
	     * get-css-data
	     * v2.0.0
	     * https://github.com/jhildenbiddle/get-css-data
	     * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>
	     * MIT license
	     */function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},n=Array.isArray(e)?e:[e],o=Array.apply(null,Array(n.length)).map((function(e){return null}));function a(e){var t=e&&"<"===e.trim().charAt(0);return e&&!t}function s(e,t){r.onError(e,n[t],t)}function i(e,t){var a=r.onSuccess(e,n[t],t);e=!1===a?"":a||e,o[t]=e,-1===o.indexOf(null)&&r.onComplete(o)}var c=document.createElement("a");n.forEach((function(e,t){if(c.setAttribute("href",e),c.href=String(c.href),Boolean(document.all&&!window.atob)&&c.host.split(":")[0]!==location.host.split(":")[0])if(c.protocol===location.protocol){var n=new XDomainRequest;n.open("GET",e),n.timeout=0,n.onprogress=Function.prototype,n.ontimeout=Function.prototype,n.onload=function(){a(n.responseText)?i(n.responseText,t):s(n,t)},n.onerror=function(e){s(n,t)},setTimeout((function(){n.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),s(null,t);else{var o=new XMLHttpRequest;o.open("GET",e),r.mimeType&&o.overrideMimeType&&o.overrideMimeType(r.mimeType),r.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(o.status<400&&a(o.responseText)||0===o.status&&a(o.responseText)?i(o.responseText,t):s(o,t))},o.send()}}))}
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
	     */function n(e){var t={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},n={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,skipDisabled:!1!==e.skipDisabled,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},s=Array.apply(null,n.rootElement.querySelectorAll(n.include)).filter((function(e){return!a(e,n.exclude)})),i=Array.apply(null,Array(s.length)).map((function(e){return null}));function c(){if(-1===i.indexOf(null)){i.reduce((function(e,t,r){return""===t&&e.push(r),e}),[]).reverse().forEach((function(e){return[s,i].forEach((function(t){return t.splice(e,1)}))}));var e=i.join("");n.onComplete(e,i,s)}}function u(e,t,r,o){var a=n.onSuccess(e,r,o);d(e=void 0!==a&&!1===Boolean(a)?"":a||e,r,o,(function(e,o){null===i[t]&&(o.forEach((function(e){return n.onError(e.xhr,r,e.url)})),!n.filter||n.filter.test(e)?i[t]=e:i[t]="",c())}))}function l(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a={};return a.rules=(e.replace(t.cssComments,"").match(t.cssImports)||[]).filter((function(e){return-1===n.indexOf(e)})),a.urls=a.rules.map((function(e){return e.replace(t.cssImports,"$1")})),a.absoluteUrls=a.urls.map((function(e){return o(e,r)})),a.absoluteRules=a.rules.map((function(e,t){var n=a.urls[t],s=o(a.absoluteUrls[t],r);return e.replace(n,s)})),a}function d(e,t,o,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=l(e,o,i);c.rules.length?r(c.absoluteUrls,{onBeforeSend:function(e,r,o){n.onBeforeSend(e,t,r)},onSuccess:function(e,r,o){var a=n.onSuccess(e,t,r),s=l(e=!1===a?"":a||e,r,i);return s.rules.forEach((function(t,r){e=e.replace(t,s.absoluteRules[r])})),e},onError:function(r,n,u){s.push({xhr:r,url:n}),i.push(c.rules[u]),d(e,t,o,a,s,i)},onComplete:function(r){r.forEach((function(t,r){e=e.replace(c.rules[r],t)})),d(e,t,o,a,s,i)}}):a(e,s)}s.length?s.forEach((function(e,t){var a=e.getAttribute("href"),s=e.getAttribute("rel"),l="link"===e.nodeName.toLowerCase()&&a&&s&&-1!==s.toLowerCase().indexOf("stylesheet"),d=!1!==n.skipDisabled&&e.disabled,f="style"===e.nodeName.toLowerCase();if(l&&!d)r(a,{mimeType:"text/css",onBeforeSend:function(t,r,o){n.onBeforeSend(t,e,r)},onSuccess:function(r,n,s){var i=o(a);u(r,t,e,i)},onError:function(r,o,a){i[t]="",n.onError(r,e,o),c()}});else if(f&&!d){var p=e.textContent;n.useCSSOM&&(p=Array.apply(null,e.sheet.cssRules).map((function(e){return e.cssText})).join("")),u(p,t,e,location.href)}else i[t]="",c()})):n.onComplete("",[])}function o(e,t){var r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t||document.baseURI||(document.querySelector("base")||{}).href||location.href,o.href=e,o.href}function a(e,t){return(e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector).call(e,t)}var s=i;function i(e,t,r){e instanceof RegExp&&(e=c(e,r)),t instanceof RegExp&&(t=c(t,r));var n=u(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function c(e,t){var r=t.match(e);return r?r[0]:null}function u(e,t,r){var n,o,a,s,i,c=r.indexOf(e),u=r.indexOf(t,c+1),l=c;if(c>=0&&u>0){for(n=[],a=r.length;l>=0&&!i;)l==c?(n.push(l),c=r.indexOf(e,l+1)):1==n.length?i=[n.pop(),u]:((o=n.pop())<a&&(a=o,s=u),u=r.indexOf(t,l+1)),l=c<u&&c>=0?c:u;n.length&&(i=[a,s])}return i}function l(e){var r=t({},{preserveStatic:!0,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),n=[];function o(e){throw new Error("CSS parse error: ".concat(e))}function a(t){var r=t.exec(e);if(r)return e=e.slice(r[0].length),r}function i(){return a(/^{\s*/)}function c(){return a(/^}/)}function u(){a(/^\s*/)}function l(){if(u(),"/"===e[0]&&"*"===e[1]){for(var t=2;e[t]&&("*"!==e[t]||"/"!==e[t+1]);)t++;if(!e[t])return o("end of comment is missing");var r=e.slice(2,t);return e=e.slice(t+2),{type:"comment",comment:r}}}function d(){for(var e,t=[];e=l();)t.push(e);return r.removeComments?[]:t}function f(){for(u();"}"===e[0];)o("extra closing bracket");var t=a(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(t)return t[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(e){return e.replace(/,/g,"‌")})).split(/\s*(?![^(]*\)),\s*/).map((function(e){return e.replace(/\u200C/g,",")}))}function p(){if("@"===e[0])return k();a(/^([;\s]*)+/);var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=a(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(r){if(r=r[0].trim(),!a(/^:\s*/))return o("property missing ':'");var n=a(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),s={type:"declaration",property:r.replace(t,""),value:n?n[0].replace(t,"").trim():""};return a(/^[;\s]*/),s}}function m(){if(!i())return o("missing '{'");for(var e,t=d();e=p();)t.push(e),t=t.concat(d());return c()?t:o("missing '}'")}function v(){u();for(var e,t=[];e=a(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),a(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:m()}}function h(){var e=a(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=a(/^([-\w]+)\s*/)))return o("@keyframes missing name");var r,n=e[1];if(!i())return o("@keyframes missing '{'");for(var s=d();r=v();)s.push(r),s=s.concat(d());return c()?{type:"keyframes",name:n,vendor:t,keyframes:s}:o("@keyframes missing '}'")}}function g(){if(a(/^@page */))return{type:"page",selectors:f()||[],declarations:m()}}function y(){var e=a(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);if(e)return{type:"page-margin-box",name:"".concat(e[1],"-").concat(e[2])+(e[3]?"-".concat(e[3]):""),declarations:m()}}function b(){if(a(/^@font-face\s*/))return{type:"font-face",declarations:m()}}function S(){var e=a(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:A()}}function E(){if(a(/^@host\s*/))return{type:"host",rules:A()}}function w(){var e=a(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:A()}}function x(){var e=a(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}function C(){var e=a(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:A()}}function _(){var e=a(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}function k(){if(u(),"@"===e[0]){var t=_()||b()||w()||h()||S()||C()||x()||E()||g()||y();if(t&&!r.preserveStatic){return(t.declarations?t.declarations.some((function(e){return/var\(/.test(e.value)})):(t.keyframes||t.rules||[]).some((function(e){return(e.declarations||[]).some((function(e){return/var\(/.test(e.value)}))})))?t:{}}return t}}function O(){if(!r.preserveStatic){var t=s("{","}",e);if(t){var n=/:(?:root|host)(?![.:#(])/.test(t.pre)&&/--\S*\s*:/.test(t.body),a=/var\(/.test(t.body);if(!n&&!a)return e=e.slice(t.end+1),{}}}var i=f()||[],c=r.preserveStatic?m():m().filter((function(e){var t=i.some((function(e){return/:(?:root|host)(?![.:#(])/.test(e)}))&&/^--\S/.test(e.property),r=/var\(/.test(e.value);return t||r}));return i.length||o("selector missing"),{type:"rule",selectors:i,declarations:c}}function A(t){if(!t&&!i())return o("missing '{'");for(var r,n=d();e.length&&(t||"}"!==e[0])&&(r=k()||O());)r.type&&n.push(r),n=n.concat(d());return t||c()?n:o("missing '}'")}return{type:"stylesheet",stylesheet:{rules:A(!0),errors:n}}}function d(e){var r=t({},{parseHost:!1,store:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),n=new RegExp(":".concat(r.parseHost?"host":"root","$"));return"string"==typeof e&&(e=l(e,r)),e.stylesheet.rules.forEach((function(e){"rule"===e.type&&e.selectors.some((function(e){return n.test(e)}))&&e.declarations.forEach((function(e,t){var n=e.property,o=e.value;n&&0===n.indexOf("--")&&(r.store[n]=o)}))})),r.store}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},"page-margin-box":function(e){return"@"+e.name+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",a=0;a<e.length;a++){var s=e[a];r&&r(s);var i=n[s.type](s);i&&(o+=i,i.length&&s.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}function p(e,t){e.rules.forEach((function(r){r.rules?p(r,t):r.keyframes?r.keyframes.forEach((function(e){"keyframe"===e.type&&t(e.declarations,r)})):r.declarations&&t(r.declarations,e)}))}i.range=u;var m="--",v="var";function h(e){var r=t({},{preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return"string"==typeof e&&(e=l(e,r)),p(e.stylesheet,(function(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=o.type,s=o.property,i=o.value;if("declaration"===a)if(r.preserveVars||!s||0!==s.indexOf(m)){if(-1!==i.indexOf(v+"(")){var c=y(i,r);c!==o.value&&(c=g(c),r.preserveVars?(e.splice(n,0,{type:a,property:s,value:c}),n++):o.value=c)}}else e.splice(n,1),n--}})),f(e)}function g(e){var t=/calc\(([^)]+)\)/g;return(e.match(t)||[]).forEach((function(t){var r="calc".concat(t.split("calc").join(""));e=e.replace(t,r)})),e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var n=s("(",")",e);function o(e){var n=e.split(",")[0].replace(/[\s\n\t]/g,""),o=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],a=Object.prototype.hasOwnProperty.call(t.variables,n)?String(t.variables[n]):void 0,s=a||(o?String(o):void 0),i=r||e;return a||t.onWarning('variable "'.concat(n,'" is undefined')),s&&"undefined"!==s&&s.length>0?y(s,t,i):"var(".concat(i,")")}return n?"var"===n.pre.slice(-3)?0===n.body.trim().length?(t.onWarning("var() must contain a non-whitespace string"),e):n.pre.slice(0,-3)+o(n.body)+y(n.post,t):n.pre+"(".concat(y(n.body,t),")")+y(n.post,t):(-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e)}var b="undefined"!=typeof window,S=b&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),E={group:0,job:0},w={rootElement:b?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onError:function(){},onWarning:function(){},onSuccess:function(){},onComplete:function(){},onFinally:function(){}},x={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},C={dom:{},job:{},user:{}},_=!1,k=null,O=0,A=null,j=!1;
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
function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r="cssVars(): ",o=t({},w,e);function a(e,t,n,a){!o.silent&&window.console&&console.error("".concat(r).concat(e,"\n"),t),o.onError(e,t,n,a)}function s(e){!o.silent&&window.console&&console.warn("".concat(r).concat(e)),o.onWarning(e)}function i(e){o.onFinally(Boolean(e),S,B()-o.__benchmark)}if(b){if(o.watch)return o.watch=w.watch,V(o),void D(o);if(!1===o.watch&&k&&(k.disconnect(),k=null),!o.__benchmark){if(_===o.rootElement)return void T(e);var c=Array.apply(null,o.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])'));o.__benchmark=B(),o.exclude=[k?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',"link[disabled]:not([data-cssvars])",o.exclude].filter((function(e){return e})).join(","),o.variables=L(o.variables),c.forEach((function(e){var t="style"===e.nodeName.toLowerCase()&&e.__cssVars.text,r=t&&e.textContent!==e.__cssVars.text;t&&r&&(e.sheet&&(e.sheet.disabled=!1),e.setAttribute("data-cssvars",""))})),k||(Array.apply(null,o.rootElement.querySelectorAll('[data-cssvars="out"]')).forEach((function(e){var t=e.getAttribute("data-cssvars-group");t&&o.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]'))||e.parentNode.removeChild(e)})),O&&c.length<O&&(O=c.length,C.dom={}))}if("loading"!==document.readyState)if(S&&o.onlyLegacy){var u=!1;if(o.updateDOM){var p=o.rootElement.host||(o.rootElement===document?document.documentElement:o.rootElement);Object.keys(o.variables).forEach((function(e){var t=o.variables[e];u=u||t!==getComputedStyle(p).getPropertyValue(e),p.style.setProperty(e,t)}))}i(u)}else!j&&(o.shadowDOM||o.rootElement.shadowRoot||o.rootElement.host)?n({rootElement:w.rootElement,include:w.include,exclude:o.exclude,skipDisabled:!1,onSuccess:function(e,t,r){return!((t.sheet||{}).disabled&&!t.__cssVars)&&((e=((e=e.replace(x.cssComments,"").replace(x.cssMediaQueries,"")).match(x.cssVarDeclRules)||[]).join(""))||!1)},onComplete:function(e,t,r){d(e,{store:C.dom,onWarning:s}),j=!0,D(o)}}):(_=o.rootElement,n({rootElement:o.rootElement,include:o.include,exclude:o.exclude,skipDisabled:!1,onBeforeSend:o.onBeforeSend,onError:function(e,t,r){var n=e.responseURL||R(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");a("CSS XHR Error: ".concat(n," ").concat(e.status," ").concat(o),t,e,n)},onSuccess:function(e,t,r){if((t.sheet||{}).disabled&&!t.__cssVars)return!1;var n="link"===t.nodeName.toLowerCase(),a="style"===t.nodeName.toLowerCase()&&e!==t.textContent,s=o.onSuccess(e,t,r);return e=void 0!==s&&!1===Boolean(s)?"":s||e,o.updateURLs&&(n||a)&&(e=M(e,r)),e},onComplete:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=t({},C.dom,C.user);if(C.job={},n.forEach((function(e,t){var n=r[t];if(e.__cssVars=e.__cssVars||{},e.__cssVars.text=n,x.cssVars.test(n))try{var i=l(n,{preserveStatic:o.preserveStatic,removeComments:!0});d(i,{parseHost:Boolean(o.rootElement.host),store:C.dom,onWarning:s}),e.__cssVars.tree=i}catch(t){a(t.message,e)}})),t(C.job,C.dom),o.updateDOM?(t(C.user,o.variables),t(C.job,C.user)):(t(C.job,C.user,o.variables),t(c,o.variables)),E.job>0&&Boolean(Object.keys(C.job).length>Object.keys(c).length||Boolean(Object.keys(c).length&&Object.keys(C.job).some((function(e){return C.job[e]!==c[e]})))))F(o.rootElement),D(o);else{var u=[],p=[],m=!1;if(o.updateDOM&&E.job++,n.forEach((function(e,n){var i=!e.__cssVars.tree;if(e.__cssVars.tree)try{h(e.__cssVars.tree,t({},o,{variables:C.job,onWarning:s}));var c=f(e.__cssVars.tree);if(o.updateDOM){var l=r[n],d=x.cssVarFunc.test(l);if(e.getAttribute("data-cssvars")||e.setAttribute("data-cssvars","src"),c.length&&d){var v=e.getAttribute("data-cssvars-group")||++E.group,g=c.replace(/\s/g,""),y=o.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(v,'"]'))||document.createElement("style");m=m||x.cssKeyframes.test(c),o.preserveStatic&&e.sheet&&(e.sheet.disabled=!0),y.hasAttribute("data-cssvars")||y.setAttribute("data-cssvars","out"),g===e.textContent.replace(/\s/g,"")?(i=!0,y&&y.parentNode&&(e.removeAttribute("data-cssvars-group"),y.parentNode.removeChild(y))):g!==y.textContent.replace(/\s/g,"")&&([e,y].forEach((function(e){e.setAttribute("data-cssvars-job",E.job),e.setAttribute("data-cssvars-group",v)})),y.textContent=c,u.push(c),p.push(y),y.parentNode||e.parentNode.insertBefore(y,e.nextSibling))}}else e.textContent.replace(/\s/g,"")!==c&&u.push(c)}catch(t){a(t.message,e)}i&&e.setAttribute("data-cssvars","skip"),e.hasAttribute("data-cssvars-job")||e.setAttribute("data-cssvars-job",E.job)})),O=o.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,o.shadowDOM)for(var v,g=[].concat(o.rootElement).concat(Array.apply(null,o.rootElement.querySelectorAll("*"))),y=0;v=g[y];++y)v.shadowRoot&&v.shadowRoot.querySelector("style")&&D(t({},o,{rootElement:v.shadowRoot}));o.updateDOM&&m&&N(o.rootElement),_=!1,o.onComplete(u.join(""),p,JSON.parse(JSON.stringify(C.job)),B()-o.__benchmark),i(p.length)}}}));else document.addEventListener("DOMContentLoaded",(function t(r){D(e),document.removeEventListener("DOMContentLoaded",t)}))}}function V(e){function t(e){var t=r(e)&&e.hasAttribute("disabled"),n=(e.sheet||{}).disabled;return t||n}function r(e){return"link"===e.nodeName.toLowerCase()&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")}function n(e){return"style"===e.nodeName.toLowerCase()}function o(n){var o=!1;if("attributes"===n.type&&r(n.target)&&!t(n.target)){var a="disabled"===n.attributeName,s="href"===n.attributeName,i="skip"===n.target.getAttribute("data-cssvars"),c="src"===n.target.getAttribute("data-cssvars");a?o=!i&&!c:s&&(i?n.target.setAttribute("data-cssvars",""):c&&F(e.rootElement,!0),o=!0)}return o}function a(e){var t=!1;if("childList"===e.type){var r=n(e.target),o="out"===e.target.getAttribute("data-cssvars");t=r&&!o}return t}function s(e){var o=!1;return"childList"===e.type&&(o=Array.apply(null,e.addedNodes).some((function(e){var o=1===e.nodeType&&e.hasAttribute("data-cssvars"),a=n(e)&&x.cssVars.test(e.textContent);return!o&&(r(e)||a)&&!t(e)}))),o}function i(t){var r=!1;return"childList"===t.type&&(r=Array.apply(null,t.removedNodes).some((function(t){var r=1===t.nodeType,n=r&&"out"===t.getAttribute("data-cssvars"),o=r&&"src"===t.getAttribute("data-cssvars"),a=o;if(o||n){var s=t.getAttribute("data-cssvars-group"),i=e.rootElement.querySelector('[data-cssvars-group="'.concat(s,'"]'));o&&F(e.rootElement,!0),i&&i.parentNode.removeChild(i)}return a}))),r}window.MutationObserver&&(k&&(k.disconnect(),k=null),(k=new MutationObserver((function(t){t.some((function(e){return o(e)||a(e)||s(e)||i(e)}))&&D(e)}))).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(A),A=setTimeout((function(){e.__benchmark=null,D(e)}),t)}function N(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter((function(e){return getComputedStyle(document.body)[e]}))[0];if(t){for(var r=e.getElementsByTagName("*"),n=[],o="__CSSVARSPONYFILL-KEYFRAMES__",a=0,s=r.length;a<s;a++){var i=r[a];"none"!==getComputedStyle(i)[t]&&(i.style[t]+=o,n.push(i))}document.body.offsetHeight;for(var c=0,u=n.length;c<u;c++){var l=n[c].style;l[t]=l[t].replace(o,"")}}}function M(e,t){return(e.replace(x.cssComments,"").match(x.cssUrls)||[]).forEach((function(r){var n=r.replace(x.cssUrls,"$1"),o=R(n,t);e=e.replace(r,r.replace(n,o))})),e}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce((function(r,n){return r[t.test(n)?n:"--".concat(n.replace(/^-+/,""))]=e[n],r}),{})}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}function B(){return b&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function F(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Array.apply(null,e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach((function(e){return e.setAttribute("data-cssvars","")})),t&&(C.dom={})}D.reset=function(){for(var e in E.job=0,E.group=0,_=!1,k&&(k.disconnect(),k=null),O=0,A=null,j=!1,C)C[e]={}},D(),window.MutationObserver=window.MutationObserver||function(e){function t(e){this._watched=[],this._listener=e}function r(e){!function r(){var n=e.takeRecords();n.length&&e._listener(n,e),e._timeout=setTimeout(r,t._period)}()}function n(t){var r={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(var n in t)v(r,n)&&t[n]!==e&&(r[n]=t[n]);return r}function o(e,t){var r=u(e,t);return function(o){var a,s=o.length;t.charData&&3===e.nodeType&&e.nodeValue!==r.charData&&o.push(new n({type:"characterData",target:e,oldValue:r.charData})),t.attr&&r.attr&&i(o,e,r.attr,t.afilter),(t.kids||t.descendents)&&(a=c(o,e,r,t)),(a||o.length!==s)&&(r=u(e,t))}}function a(e,t){return t.value}function s(e,t){return"style"!==t.name?t.value:e.style.cssText}function i(e,t,r,o){for(var a,s,i={},c=t.attributes,u=c.length;u--;)s=(a=c[u]).name,o&&!v(o,s)||(y(t,a)!==r[s]&&e.push(n({type:"attributes",target:t,attributeName:s,oldValue:r[s],attributeNamespace:a.namespaceURI})),i[s]=!0);for(s in r)i[s]||e.push(n({target:t,type:"attributes",attributeName:s,oldValue:r[s]}))}function c(t,r,o,a){function s(e,r,o,s,u){for(var l,d,f,p=e.length-1,m=-~((p-u)/2);f=e.pop();)l=o[f.i],d=s[f.j],a.kids&&m&&Math.abs(f.i-f.j)>=p&&(t.push(n({type:"childList",target:r,addedNodes:[l],removedNodes:[l],nextSibling:l.nextSibling,previousSibling:l.previousSibling})),m--),a.attr&&d.attr&&i(t,l,d.attr,a.afilter),a.charData&&3===l.nodeType&&l.nodeValue!==d.charData&&t.push(n({type:"characterData",target:l,oldValue:d.charData})),a.descendents&&c(l,d)}function c(r,o){for(var f,p,v,h,g,y,b,S=r.childNodes,E=o.kids,w=S.length,x=E?E.length:0,C=0,_=0,k=0;_<w||k<x;)(y=S[_])===(b=(g=E[k])&&g.node)?(a.attr&&g.attr&&i(t,y,g.attr,a.afilter),a.charData&&g.charData!==e&&y.nodeValue!==g.charData&&t.push(n({type:"characterData",target:y,oldValue:g.charData})),p&&s(p,r,S,E,C),a.descendents&&(y.childNodes.length||g.kids&&g.kids.length)&&c(y,g),_++,k++):(u=!0,f||(f={},p=[]),y&&(f[v=d(y)]||(f[v]=!0,-1===(h=l(E,y,k))?a.kids&&(t.push(n({type:"childList",target:r,addedNodes:[y],nextSibling:y.nextSibling,previousSibling:y.previousSibling})),C++):p.push({i:_,j:h})),_++),b&&b!==S[_]&&(f[v=d(b)]||(f[v]=!0,-1===(h=m(S,b,_))?a.kids&&(t.push(n({type:"childList",target:o.node,removedNodes:[b],nextSibling:E[k+1],previousSibling:E[k-1]})),C--):p.push({i:h,j:k})),k++));p&&s(p,r,S,E,C)}var u;return c(r,o),u}function u(e,t){var r=!0;return function e(n){var o={node:n};return!t.charData||3!==n.nodeType&&8!==n.nodeType?(t.attr&&r&&1===n.nodeType&&(o.attr=p(n.attributes,(function(e,r){return t.afilter&&!t.afilter[r.name]||(e[r.name]=y(n,r)),e}),{})),r&&(t.kids||t.charData||t.attr&&t.descendents)&&(o.kids=f(n.childNodes,e)),r=t.descendents):o.charData=n.nodeValue,o}(e)}function l(e,t,r){return m(e,t,r,h("node"))}function d(e){try{return e.id||(e[S]=e[S]||b++)}catch(t){try{return e.nodeValue}catch(e){return b++}}}function f(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n,e);return r}function p(e,t,r){for(var n=0;n<e.length;n++)r=t(r,e[n],n,e);return r}function m(e,t,r,n){for(;r<e.length;r++)if((n?e[r][n]:e[r])===t)return r;return-1}function v(t,r){return t[r]!==e}function h(e){return e}t._period=30,t.prototype={observe:function(e,t){for(var n={attr:!!(t.attributes||t.attributeFilter||t.attributeOldValue),kids:!!t.childList,descendents:!!t.subtree,charData:!(!t.characterData&&!t.characterDataOldValue)},a=this._watched,s=0;s<a.length;s++)a[s].tar===e&&a.splice(s,1);t.attributeFilter&&(n.afilter=p(t.attributeFilter,(function(e,t){return e[t]=!0,e}),{})),a.push({tar:e,fn:o(e,n)}),this._timeout||r(this)},takeRecords:function(){for(var e=[],t=this._watched,r=0;r<t.length;r++)t[r].fn(e);return e},disconnect:function(){this._watched=[],clearTimeout(this._timeout),this._timeout=null}};var g=document.createElement("i");g.style.top=0;var y=(g="null"!=g.attributes.style.value)?a:s,b=1,S="mo_id";return t}(void 0);var q={};e.__moduleExports=q,Object.defineProperty(e,"__esModule",{value:!0})}(t)})))}));
