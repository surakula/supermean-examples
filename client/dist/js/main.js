/*!
 * SuperMEAN v0.1.0 (http://www.supermean.org)
 * Copyright 2014-2017 Sasa Mikodanic
 * Licensed under MIT 
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 AngularJS v1.5.10
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,c){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",e="");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+"="+encodeURIComponent(e);e=e+(g?";path="+g:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
f+" > 4096 bytes)!");k.cookie=e}}c.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,void 0,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);


},{}],2:[function(require,module,exports){
/**
 * State-based routing for AngularJS
 * @version v0.3.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return S(new(S(function(){},{prototype:a})),b)}function e(a){return R(arguments,function(b){b!==a&&R(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return R(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=d<0?Math.ceil(d):Math.floor(d),d<0&&(d+=c);d<c;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return S({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return R(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return R(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)h(c,d)==-1&&(b[d]=a[d]);return b}function n(a,b){var c=Q(a),d=c?[]:{};return R(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=Q(a)?[]:{};return R(a,function(a,d){c[d]=b(a,d)}),c}function p(a){return a.then(c,function(){})&&a}function q(a,b){var d=1,f=2,i={},j=[],k=i,l=S(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,O(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);R(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return P(a)&&a.then&&a.$$promises}if(!P(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return R(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!M(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;R(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!P(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=S({},d),u=1+q.length/3,v=!1;if(M(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),S(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;w<x;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function r(a,b,c){this.fromConfig=function(a,b,c){return M(a.template)?this.fromString(a.template,b):M(a.templateUrl)?this.fromUrl(a.templateUrl,b):M(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return N(a)?a(b):a},this.fromUrl=function(c,d){return N(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function s(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new V.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=V.type(h)||d(V.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=S({params:{}},P(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new V.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function t(a){S(this,a)}function u(){function a(a){return null!=a?a.toString().replace(/(~|\/)/g,function(a){return{"~":"~~","/":"~2F"}[a]}):a}function e(a){return null!=a?a.toString().replace(/(~~|~2F)/g,function(a){return{"~~":"~","~2F":"/"}[a]}):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return N(a)||Q(a)&&N(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name],l.invoke(a.def))}}function k(a){S(this,a||{})}V=this;var l,m=!1,p=!0,q=!1,r={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!M(a)||"string"==typeof a},pattern:/[^\/]*/},int:{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return M(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};u.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return M(a)&&(m=a),m},this.strictMode=function(a){return M(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!M(a))return q;if(a!==!0&&a!==!1&&!O(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new s(a,S(f(),b))},this.isMatcher=function(a){if(!P(a))return!1;var b=!0;return R(s.prototype,function(c,d){N(c)&&(b=b&&M(a[d])&&N(a[d]))}),b},this.type=function(a,b,c){if(!M(b))return r[a];if(r.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return r[a]=new t(S({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},R(x,function(a,b){r[b]=new t(S({name:b},a))}),r=d(r,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),R(x,function(a,b){r[b]||(r[b]=new t(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=P(a)?g(a):[],c=h(b,"value")===-1&&h(b,"type")===-1&&h(b,"squash")===-1&&h(b,"array")===-1;return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?r[c.type]:c.type instanceof t?c.type:new t(c.type):"config"===e?r.any:r.string}function m(){var b={array:"search"===f&&"auto"},c=a.match(/\[\]$/)?{array:!0}:{};return S(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!M(c)||null==c)return q;if(c===!0||O(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function s(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=Q(a.replace)?a.replace:[],O(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return h(g,a.from)===-1}).concat(f)}function u(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),M(a)?x.type.$normalize(a):u()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=s(e,y,z,A);S(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,S(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),R(b,function(b){R(g(b),function(b){h(a,b)===-1&&h(d,b)===-1&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return R(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return R(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function v(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return!M(d)||d}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return!!b&&(O(b)&&d.replace().url(b),!0)}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;e<g;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!N(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(O(a)){var b=a;a=function(){return b}}else if(!N(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=O(b);if(O(a)&&(a=d.compile(a)),!h&&!N(b)&&!Q(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),S(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:O(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),S(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function w(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=O(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;i<j;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=A[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){B[a]||(B[a]=[]),B[a].push(b)}function q(a){for(var b=B[a]||[];b.length;)r(b.shift())}function r(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!O(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(A.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=c.indexOf(".")!==-1?c.substring(0,c.lastIndexOf(".")):O(b.parent)?b.parent:P(b.parent)&&O(b.parent.name)?b.parent.name:"";if(e&&!A[e])return n(e,b.self);for(var f in D)N(D[f])&&(b[f]=D[f](b,D.$delegates[f]));return A[c]=b,!b[C]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){z.$current.navigable==b&&j(a,c)||z.transitionTo(b,a,{inherit:!0,location:!1})}]),q(c),b}function s(a){return a.indexOf("*")>-1}function t(a){for(var b=a.split("."),c=z.$current.name.split("."),d=0,e=b.length;d<e;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length==c.length&&c.join("")===b.join("")}function u(a,b){return O(a)&&!M(b)?D[a]:N(b)&&O(a)?(D[a]&&!D.$delegates[a]&&(D.$delegates[a]=D[a]),D[a]=b,this):this}function v(a,b){return P(a)?b=a:b.name=a,r(b),this}function w(a,e,f,h,l,n,q,r,u){function v(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return q.update(),F;if(!g.retry)return null;if(f.$retry)return q.update(),G;var h=z.transition=e.when(g.retry);return h.then(function(){return h!==z.transition?(a.$broadcast("$stateChangeCancel",b.to,b.toParams,c,d),D):(b.options.$retry=!0,z.transitionTo(b.to,b.toParams,b.options))},function(){return F}),q.update(),h}function w(a,c,d,g,i,j){function m(){var c=[];return R(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(N(d.controllerProvider)||Q(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var B=new Error("transition superseded"),D=p(e.reject(B)),E=p(e.reject(new Error("transition prevented"))),F=p(e.reject(new Error("transition aborted"))),G=p(e.reject(new Error("transition failed")));return y.locals={resolve:null,globals:{$stateParams:{}}},z={params:{},current:y.self,$current:y,transition:null},z.reload=function(a){return z.transitionTo(z.current,n,{reload:a||!0,inherit:!1,notify:!0})},z.go=function(a,b,c){return z.transitionTo(a,b,S({inherit:!0,relative:z.$current},c))},z.transitionTo=function(b,c,f){c=c||{},f=S({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=z.$current,l=z.params,o=j.path,p=m(b,f.relative),r=c["#"];if(!M(p)){var s={to:b,toParams:c,options:f},t=v(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,p=m(b,f.relative),!M(p)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(p[C])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},z.$current,p)),!p.params.$$validates(c))return G;c=p.params.$$values(c),b=p;var u=b.path,A=0,F=u[A],H=y.locals,I=[];if(f.reload){if(O(f.reload)||P(f.reload)){if(P(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var J=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!J)throw new Error("No such reload state '"+(O(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[A]&&F!==J;)H=I[A]=F.locals,A++,F=u[A]}}else for(;F&&F===o[A]&&F.ownParams.$$equals(c,l);)H=I[A]=F.locals,A++,F=u[A];if(x(b,c,j,l,H,f))return r&&(c["#"]=r),z.params=c,T(z.params,n),T(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(q.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),q.update(!0)),z.transition=null,e.when(z.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==z.transition&&q.update(),E;for(var K=e.when(H),L=A;L<u.length;L++,F=u[L])H=I[L]=d(H),K=w(F,c,F===b,K,H,f);var N=z.transition=K.then(function(){var d,e,g;if(z.transition!==N)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),D;for(d=o.length-1;d>=A;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=A;d<u.length;d++)e=u[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return z.transition!==N?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),D):(z.$current=b,z.current=b.self,z.params=c,T(z.params,n),z.transition=null,f.location&&b.navigable&&q.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),q.update(!0),z.current)}).then(null,function(d){return d===B?D:z.transition!==N?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),D):(z.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||q.update(),e.reject(d))});return N},z.is=function(a,b,d){d=S({relative:z.$current},d||{});var e=m(a,d.relative);return M(e)?z.$current===e&&(!b||j(e.params.$$values(b),n)):c},z.includes=function(a,b,d){if(d=S({relative:z.$current},d||{}),O(a)&&s(a)){if(!t(a))return!1;a=z.$current.name}var e=m(a,d.relative);if(!M(e))return c;if(!M(z.$current.includes[e.name]))return!1;if(!b)return!0;for(var f=g(b),h=0;h<f.length;h++){var i=f[h],j=e.params[i];if(j&&!j.type.equals(n[i],b[i]))return!1}return!0},z.href=function(a,b,d){d=S({lossy:!0,inherit:!0,absolute:!1,relative:z.$current},d||{});var e=m(a,d.relative);if(!M(e))return null;d.inherit&&(b=i(n,b||{},z.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?q.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},z.get=function(a,b){if(0===arguments.length)return o(g(A),function(a){return A[a].self});var c=m(a,b||z.$current);return c&&c.self?c.self:null},z}function x(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new V.ParamSet(f);return g.$$equals(b,c)}if(!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b)))return!0}var y,z,A={},B={},C="abstract",D={parent:function(a){if(M(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):y},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(O(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||y).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new V.ParamSet;return R(a.params||{},function(a,c){b[c]||(b[c]=new V.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?S(a.parent.params.$$new(),b):new V.ParamSet},views:function(a){var b={};return R(M(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?S({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};y=r({name:"",url:"^",views:null,abstract:!0}),y.navigable=null,this.decorator=u,this.state=v,this.$get=w,w.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function x(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=S(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function y(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function z(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(a){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=B(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function A(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return function(f,h,i){var j=d.$current,k=B(f,i,h,e),l=j&&j.locals[k];if(l){h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),N(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}}function B(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function C(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function D(a){var b=a.parent().inheritedData("$uiView");if(b&&b.state&&b.state.name)return b.state}function E(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function F(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function G(a,b){return{relative:D(a)||b.$current,inherit:!0}}function H(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=C(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=E(e),l=g[1]||g[0],m=null;j.options=S(G(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=F(e,a,c,k,function(){return j}),e[e.on?"on":"bind"]("click",h),d.$on("$destroy",function(){e[e.off?"off":"unbind"]("click",h)}))}}}function I(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=E(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=F(d,a,b,i,function(){return m}),d[d.on?"on":"bind"]("click",h),c.$on("$destroy",function(){d[d.off?"off":"unbind"]("click",h)}))}}}function J(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,D(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);a!==-1&&p.splice(a,1)}}function h(a,c){if(!O(a))throw new Error("state should be a string");return P(c)?a+U(c):(c=b.$eval(c),P(c)?a+U(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(a){}o=o||c(e.uiSrefActive||"",!1)(b),P(o)&&R(o,function(c,d){if(O(c)){var e=C(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(P(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function K(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function L(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var M=b.isDefined,N=b.isFunction,O=b.isString,P=b.isObject,Q=b.isArray,R=b.forEach,S=b.extend,T=b.copy,U=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),q.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",q),r.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",r);var V;s.prototype.concat=function(a,b){var c={caseInsensitive:V.caseInsensitive(),strict:V.strictMode(),squash:V.defaultSquashPolicy()};return new s(this.sourcePath+a+this.sourceSearch,S(c,b),this)},s.prototype.toString=function(){return this.source},s.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;e<j;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),M(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;e<i;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);M(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},s.prototype.parameters=function(a){return M(a)?this.params[a]||null:this.$$paramNames},s.prototype.validates=function(a){return this.params.$$validates(a)},s.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;f<i;f++){var k=f<h,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=!!p&&m.squash,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=Q(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else O(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(Q(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},t.prototype.is=function(a,b){return!0},t.prototype.encode=function(a,b){return a},t.prototype.decode=function(a,b){return a},t.prototype.equals=function(a,b){return a==b},t.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},t.prototype.pattern=/.*/,t.prototype.toString=function(){return"{Type:"+this.name+"}"},t.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},t.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return Q(a)?a:M(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(Q(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a);
},b.module("ui.router.util").provider("$urlMatcherFactory",u),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),v.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",v),w.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",w).run(["$injector",function(a){a.get("$state.runtime").autoinject&&a.get("$state")}]),x.$inject=[],b.module("ui.router.state").provider("$view",x),b.module("ui.router.state").provider("$uiViewScroll",y),z.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],A.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",z),b.module("ui.router.state").directive("uiView",A),H.$inject=["$state","$timeout"],I.$inject=["$state","$timeout"],J.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",H).directive("uiSrefActive",J).directive("uiSrefActiveEq",J).directive("uiState",I),K.$inject=["$state"],L.$inject=["$state"],b.module("ui.router.state").filter("isState",K).filter("includedByState",L)}(window,window.angular);
},{}],3:[function(require,module,exports){
/*global window*/

/**
 * Controller: 404Ctrl
 */
module.exports = function () {
    'use strict';
    //redirect to server side /server/views/404.ejs
    window.location.href = '/404';
};

},{}],4:[function(require,module,exports){
module.exports = {
    url: '/404',
    templateUrl: '/client/dist/html/_common/404/404.html',
    controller: '404Ctrl'
};

},{}],5:[function(require,module,exports){
var stringify = require('json-stringify-safe'); //circular JSON

module.exports = function ($timeout) {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        replace: true,
        template: function (tElement, tAttrs) {
            // console.log(stringify(tElement, null, 2));

            //$timeout is needed because append() will not work until whole HTML is not compiled
            $timeout(function () {
                tElement.append('<p>Appended by <b>tElement.append()</b></p>');
            }, 600);

            return tAttrs.myHtml;
        }
    };

    return directiveObj;
};


/*
tElement
{
  "0": {},
  "context": {},
  "length": 1
}


tAttrs
{
  "$attr": {
    "myHtml": "my-html",
    "class": "class"
  },
  "$$element": {
    "0": {},
    "context": {},
    "length": 1
  },
  "myHtml": "<p>My HTML.</p>",
  "class": "pull-right"
}

 */

},{"json-stringify-safe":75}],6:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p>Simple directive!!!</p>'
    };

    return directiveObj;
};

},{}],7:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow">',
        templateNamespace: 'svg',
        replace: true
    };

    return directiveObj;
};

/*
 NOTICE: If templateNamespace is not 'svg' circle will not be displayed! Also replace: true must be set up.
 */

},{}],8:[function(require,module,exports){
var stringify = require('json-stringify-safe'); //circular JSON

module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        templateUrl: function(tElement, tAttrs) {
            // console.log(stringify(tAttrs, null, 2));
            return tAttrs.myTpl || 'green.html';
        }
    };

    return directiveObj;
};

},{"json-stringify-safe":75}],9:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        templateUrl: '/client/dist/html/examples-spa/directives/directive_examples/02templateurl.html'
    };

    return directiveObj;
};

},{}],10:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p style="color:Green">{{sm.foo}} <br>{{bar}}</p>',
        replace: false,
        scope: {bar: '@attrValue'},
        controller: function () {
            this.foo = '-from ctrl';
        },
        controllerAs: 'sm'
    };

    return directiveObj;
};

},{}],11:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p>{{myVar}}</p>',
        controller: 'DirectivesCtrl'
    };

    return directiveObj;
};

},{}],12:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p>{{myVar}}</p>',
        controller: function ($scope) {
            $scope.myVar = 'My var from internal controller!';
        }
    };

    return directiveObj;
};

},{}],13:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p>{{myVar2}}</p>',
        controller: function ($scope, $element, $attrs, $transclude, $timeout) {
            $scope.myVar2 = $attrs.varFromAttribute;

            $timeout(function () {
                $element.append('<b>Appended by $element.append()</b>');
            }, 600);

        }
    };

    return directiveObj;
};

},{}],14:[function(require,module,exports){
var stringify = require('json-stringify-safe'); //circular JSON

module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'A',
        replace: true,
        template: function (tElem, tAttr) {
            // console.log(stringify(tAttr, null, 2));
            return tAttr.myRestrictA;
        },
        controller: function ($element, $timeout) {
            //wrap directive's element with <p style="font-size:21px;"></p>
            $timeout(function () {
                $element.wrap('<p style="font-size:21px;">$element.wrap() applied in controller!!!</p>');
            }, 600);
        }
    };

    return directiveObj;
};

},{"json-stringify-safe":75}],15:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'EAC',
        replace: true,
        template: '<p style="color:Green"><b>restrict: "EAC", replace: true</b></p>'
    };

    return directiveObj;
};

},{}],16:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<span style="color:Brown">Values: <br><b style="color:red">{{parentScopeVar}}</b> <br><b style="color:purple">{{controllerVar}}</b> <br><input ng-model="childScopeVar" placeholder="childScopeVar"> {{childScopeVar}}</span>',
        replace: true,
        scope: false,
        controller: function ($scope) {
            $scope.controllerVar = 'Scope var defined inside controller: property.';
        }
    };

    return directiveObj;
};

},{}],17:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<button ng-click="localFunc()">CLICK Me</button>',
        replace: true,
        scope: {localFunc: '&attrVal'}
    };

    return directiveObj;
};

},{}],18:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<span style="color:Navy">isoScopeVar: {{isoScopeVar}} <br><br>controllerVar3: {{controllerVar3}}</b> <br> parentScopeVar: {{$parent.parentScopeVar}}</span>',
        replace: true,
        scope: {isoScopeVar: '@attrVal'},
        controller: function ($scope) {
            $scope.controllerVar3 = 'Scope var3 defined inside controller: property.';
        }
    };

    return directiveObj;
};


/*
 NOTICE: If you put scope: {isoScopeVar: '@'} then directive must be:
 <my-scope-obj-at iso-scope-var="Val from directive attribute!"></my-scope-obj-at>
 */

},{}],19:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p style="color:Green">localModel in local scope: <input ng-model="localModel" placeholder="localModel"> {{localModel}}</p>',
        replace: true,
        scope: {localModel: '=attrVal'}
    };

    return directiveObj;
};

},{}],20:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<p style="color:Green">localModel in local scope: <input ng-model="localModel" placeholder="localModel"> {{localModel}}</p>',
        replace: true,
        scope: {localModel: '<attrVal'}
    };

    return directiveObj;
};

},{}],21:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'E',
        template: '<span style="color:Green">Value: <br><b style="color:red">{{parentScopeVar}}</b> <br><b style="color:purple">{{controllerVar2}}</b> <br><input ng-model="childScopeVar2" placeholder="childScopeVar2"> {{childScopeVar2}}</span>',
        replace: true,
        scope: true,
        controller: function ($scope) {
            $scope.controllerVar2 = 'Scope var2 defined inside controller: property.';
        }
    };

    return directiveObj;
};

},{}],22:[function(require,module,exports){
module.exports = function () {
    'use strict';

    console.log('EXAMPLE from 06compile-order.js');

    var directiveObj = {
        restrict: 'A',
        template: '<p style="color:Navy">{{bar}} <br>{{foo}}</p> Open console!!!',
        replace: false,
        scope: {bar: '@attrVal'},
        compile: function (tElem, tAttr) { //t = template
            console.log(tAttr.attrVal, ' ..compile');
            tElem.css('border', '1px solid orange');

            return {
                pre: function (scope, iElem, iAttr, controller) { //i = instance template
                    iElem.css('font-size', '21px');
                    console.log(iAttr.attrVal, ' ..pre');
                },
                post: function (scope, iElem, iAttr, controller) { //i = instance template
                    iElem.css('color', 'green');
                    console.log(iAttr.attrVal, ' ..post');
                }
            };
        },
        controller: function ($scope, $element, $attrs) {
            $element.css({'letter-spacing': '0.7em'});
            $scope.foo = 'This is from ctrl !!!';
            console.log($attrs.attrVal, ' ..controller');
        }
    };

    return directiveObj;
};

/*
Example shows execution order.


Smth from attr!  ..compile
Smth from attr!  ..controller
Smth from attr!  ..pre
Smth from attr!  ..post
 */

},{}],23:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'A',
        compile: function (tElem, tAttr) { //t = template
            tElem.css('border', '1px solid purple');

            //post-link function (instead of post: function () {...})
            return function (scope, iElem, iAttr, controller) { //i = instance template
                iElem.css({color: 'purple', font: '15px Times'});
            };

        }
    };

    return directiveObj;
};

},{}],24:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var directiveObj = {
        restrict: 'A',
        link: {
            pre: function (scope, iElem, iAttr, controller) { //i = instance template
                iElem.css({color: 'blue', font: '15px Times'});
            },

            post: function (scope, iElem, iAttr, controller) { //i = instance template
                iElem.css('border', '2px dotted blue');
            }
        }




    };

    return directiveObj;
};

},{}],25:[function(require,module,exports){
module.exports = function ($interpolate) {
    'use strict';

    console.log('\n\nEXAMPLE from 08compile-interpolate.js');

    var directiveObj = {
        restrict: 'A',
        template: '<p style="color:Navy">{{bar}} <br>{{foo}}</p> Open console!!!',
        replace: false,
        scope: false,
        // compile: function (tElem, tAttr) { //t = template
        //     console.log(tAttr.myAttrVal, ' ..compile');

        //     return {
        //         pre: function (scope, iElem, iAttr, controller) { //i = instance template
        //             console.log(iAttr.myAttrVal, ' ..pre');
        //         },
        //         post: function (scope, iElem, iAttr, controller) { //i = instance template
        //             console.log(iAttr.myAttrVal, ' ..post');
        //         }
        //     };
        // },
        controller: function ($scope, $element, $attrs) {
            //interpolation
            var v = $interpolate($attrs.myAttrVal)($scope);

            console.log(v, ' ..controller');
        }
    };

    return directiveObj;
};

/*
Without interpolate:
EXAMPLE from 08compile-interpolate.js
{{i}}  ..compile
{{i}}  ..controller
1  ..pre
1  ..post
{{i}}  ..controller
2  ..pre
2  ..post
{{i}}  ..controller
3  ..pre
3  ..post

CONCLUSION: 'i' is not interpreted in compile and controller because ng-repeat is nested directive.
 */


},{}],26:[function(require,module,exports){
/**
 * Controller: DirectivesCtrl
 */
module.exports = function ($scope) {
    'use strict';

   $scope.myVar = 'My variable from controller "DirectivesCtrl" !';


};

},{}],27:[function(require,module,exports){
/* state: 'examples-spa_q'
 * url: /examples-spa/q
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/directives',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/directives/directives.html',
        controller: 'DirectivesCtrl'
    };
};

},{}],28:[function(require,module,exports){
/**
 * Controller: ScopeParentCtrl
 *
 * Used in scope: examples as a parent scope.
 */
module.exports = function ($scope) {
    'use strict';

    $scope.parentScopeVar = 'Parent scope var from "ScopeParentCtrl" !';

    $scope.alertMe = function (msg) {
        alert(msg);
    };


};

},{}],29:[function(require,module,exports){
/**
 * Controller: Examples-spaCtrl
 */
module.exports = function ($scope) {
    'use strict';

    console.log('A list of SPA Examples.');
};

},{}],30:[function(require,module,exports){
/* state: 'examples-spa'
 * url: /examples-spa
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/examples-spa.html',
        controller: 'Examples-spaCtrl'
    };
};

},{}],31:[function(require,module,exports){
/**
 * Controller: TopmenuBasicCtrl
 */
module.exports = function ($scope, $http, APPCONF) {
    'use strict';


    //request some protected data from API by Basic Auth
    $scope.basicGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/basicstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.msg;
                console.log('basicGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error(err.data.stack);
                } else {
                    $scope.errMsg = '500 Internal API Server Error';
                }
            });
    };


};

},{}],32:[function(require,module,exports){
/* state: 'examples-spa_login_basic_form'
 * url: /examples-spa/login/basic/form
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/basic/form',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/basic/form/form.html'
            },
            'topmenu@examples-spa_login_basic_form': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/basic/_common/topmenu/topmenu.html',
                controller: 'TopmenuBasicCtrl'
            }
        }
    };
};

},{}],33:[function(require,module,exports){
/* state: 'examples-spa_login_basic_page1'
 * url: /examples-spa/login/basic/page1
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/basic/page1',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/basic/page1/page1.html'
            },
            'topmenu@examples-spa_login_basic_page1': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/basic/_common/topmenu/topmenu.html',
                controller: 'TopmenuBasicCtrl'
            }
        },

        authRequired: true

    };
};

},{}],34:[function(require,module,exports){
/* state: 'examples-spa_login_page2'
 * url: /examples-spa/login/page2
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/basic/page2',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/basic/page2/page2.html'
            },
            'topmenu@examples-spa_login_basic_page2': {
                templateUrl: '/client/dist/html/examples-spa/login/basic/_common/topmenu/topmenu.html',
                controller: 'TopmenuBasicCtrl'
            }
        },

        authRequired: true

    };
};

},{}],35:[function(require,module,exports){
/* state: 'examples-spa_login_basic_page3'
 * url: /examples-spa/login/basic/page3
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/basic/page3',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/basic/page3/page3.html'
            },
            'topmenu@examples-spa_login_basic_page3': {
                templateUrl: '/client/dist/html/examples-spa/login/basic/_common/topmenu/topmenu.html',
                controller: 'TopmenuBasicCtrl'
            }
        },

        authRequired: false

    };
};

},{}],36:[function(require,module,exports){
/**
 * Controller: TopmenuHashCtrl
 */
module.exports = function ($scope, $http, APPCONF) {
    'use strict';


    //request some protected data from API by Hash Auth
    $scope.hashGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/hashstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.msg;
                console.log('hashGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error(err.data.stack);
                } else {
                    $scope.errMsg = '500 Internal API Server Error';
                }
            });
    };


};

},{}],37:[function(require,module,exports){
/* state: 'examples-spa_login_hash_form'
 * url: /examples-spa/login/hash/form
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/hash/form',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/hash/form/form.html'
            },
            'topmenu@examples-spa_login_hash_form': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/hash/_common/topmenu/topmenu.html',
                controller: 'TopmenuHashCtrl'
            }
        }
    };
};

},{}],38:[function(require,module,exports){
/* state: 'examples-spa_login_hash_page1'
 * url: /examples-spa/login/hash/page1
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/hash/page1',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/hash/page1/page1.html'
            },
            'topmenu@examples-spa_login_hash_page1': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/hash/_common/topmenu/topmenu.html',
                controller: 'TopmenuHashCtrl'
            }
        },

        authRequired: true

    };
};

},{}],39:[function(require,module,exports){
/* state: 'examples-spa_login_hash_page2'
 * url: /examples-spa/login/hash/page2
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/hash/page2',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/hash/page2/page2.html'
            },
            'topmenu@examples-spa_login_hash_page2': {
                templateUrl: '/client/dist/html/examples-spa/login/hash/_common/topmenu/topmenu.html',
                controller: 'TopmenuHashCtrl'
            }
        },

        authRequired: true

    };
};

},{}],40:[function(require,module,exports){
/* state: 'examples-spa_login_hash_page3'
 * url: /examples-spa/login/hash/page3
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/hash/page3',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/hash/page3/page3.html'
            },
            'topmenu@examples-spa_login_hash_page3': {
                templateUrl: '/client/dist/html/examples-spa/login/hash/_common/topmenu/topmenu.html',
                controller: 'TopmenuHashCtrl'
            }
        },

        authRequired: false

    };
};

},{}],41:[function(require,module,exports){
/**
 * Controller: TopmenuJWTCtrl
 */
module.exports = function ($scope, $http, APPCONF) {
    'use strict';


    //request some protected data from API by JWT Auth
    $scope.jwtGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/jwtstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.msg;
                console.log('jwtGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error(err.data.stack);
                } else {
                    $scope.errMsg = '500 Internal API Server Error';
                }
            });
    };


};

},{}],42:[function(require,module,exports){
/* state: 'examples-spa_login_jwt_form'
 * url: /examples-spa/login/jwt/form
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/jwt/form',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/jwt/form/form.html'
            },
            'topmenu@examples-spa_login_jwt_form': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/jwt/_common/topmenu/topmenu.html',
                controller: 'TopmenuJWTCtrl'
            }
        }
    };
};

},{}],43:[function(require,module,exports){
/* state: 'examples-spa_login_jwt_page1'
 * url: /examples-spa/login/jwt/page1
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/jwt/page1',
        views: {
            '': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/jwt/page1/page1.html'
            },
            'topmenu@examples-spa_login_jwt_page1': {
                templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/jwt/_common/topmenu/topmenu.html',
                controller: 'TopmenuJWTCtrl'
            }
        },

        authRequired: true

    };
};

},{}],44:[function(require,module,exports){
/* state: 'examples-spa_login_jwt_page2'
 * url: /examples-spa/login/jwt/page2
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/jwt/page2',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/jwt/page2/page2.html'
            },
            'topmenu@examples-spa_login_jwt_page2': {
                templateUrl: '/client/dist/html/examples-spa/login/jwt/_common/topmenu/topmenu.html',
                controller: 'TopmenuJWTCtrl'
            }
        },

        authRequired: true

    };
};

},{}],45:[function(require,module,exports){
/* state: 'examples-spa_login_jwt_page3'
 * url: /examples-spa/login/jwt/page3
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login/jwt/page3',
        views: {
            '': {
                templateUrl: '/client/dist/html/examples-spa/login/jwt/page3/page3.html'
            },
            'topmenu@examples-spa_login_jwt_page3': {
                templateUrl: '/client/dist/html/examples-spa/login/jwt/_common/topmenu/topmenu.html',
                controller: 'TopmenuJWTCtrl'
            }
        },

        authRequired: false

    };
};

},{}],46:[function(require,module,exports){
/* state: 'examples-spa_login'
 * url: /examples-spa/login
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/login',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/login/login.html'
    };
};

},{}],47:[function(require,module,exports){
/**
 * Controller: ListQcreationCtrl
 */
module.exports = function ($scope, $q, $timeout) {
    'use strict';

    /*
     * Create $q promise with $q(function (resolve, reject) {...})
     */
    $scope.creationResolver = function () {
        // var x = 5; //resolved
        var x = 15; //rejected

        //promise created with resolver function
        var promis = $q(function (resolve, reject) {
            if (x < 10) {
                resolve(x);
            } else {
                var reason = new Error('x is greater then 10!');
                reject(reason);
            }
        });

        promis
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                console.error(err.stack);
            })
            .finally(function () {
                $scope.$parent.resultOut = JSON.stringify(promis, null, 2);
                // console.log(JSON.stringify(promis, null, 2));
            });


        //This will also work!!!
        // promis.then(function (data) {
        //     console.log(data);
        // }, function (err) {
        //     console.error(err.stack);
        // });

    };



    /*
     * Create $q promise with $q.defer();
     */
    $scope.creationDefer = function () {
        // var x = 5; //resolved
        var x = 15; //rejected

        var def = $q.defer();

        if (x < 10) {
            def.resolve(x);
        } else {
            var reason = new Error('x is greater then 10!');
            def.reject(reason);
        }

        var promis = def.promise;

        //used ES6 arrow functions
        promis
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err.stack);
            })
            .finally(() => {
                $scope.$parent.resultOut = JSON.stringify(promis, null, 2);
                // console.log(JSON.stringify(promis, null, 2));
            });

    };


    /* progress bar example.
     * Usage of def.notify();
     */

    $scope.creationDeferNotify = function () {

        var def = $q.defer();

        $scope.progressPerct = '0%';
        let i = 1;
        var intervalID = setInterval(function () {
            def.notify('Promise is in pending state! Not resolved nor rejected: ' + i);
            var prog = parseInt(((700 * i * 100) / 2100), 10);
            i++;
            $scope.progressPerct = prog + '%';
        }, 700);

        $timeout(function () {
            def.resolve('Promise resolved!!!');
            // def.reject(new Error('Promise rejected!!!'));
        }, 2200);

        var promis = def.promise;

        promis.then(function (data) {
            console.log(data);
        }, function (err) {
            console.error(err.stack);
        }, function (notif) {
            console.log(notif, $scope.progressPerct);
        }).finally(function () {
            console.log('Timer closed! intervalId=' + JSON.stringify(intervalID, null, 2));
            clearInterval(intervalID);
            $scope.$parent.resultOut = JSON.stringify(promis, null, 2);
        });

        // .progress() will not work !!!
        // promis
        //     .progress(function (notif) {
        //         console.log(notif);
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //     })
        //     .catch(function (err) {
        //         console.error(err.stack);
        //     })
        //     .finally(function () {
        //         $scope.resultOut = JSON.stringify(promis, null, 2);
        //         // console.log(JSON.stringify(promis, null, 2));
        //     });

    };


    /*
     * Create $q promise directly with $q.resolve() or $q.reject()
     */
    $scope.creationResolveReject = function () {
        // var promis = $q.resolve('Something resolved');
        var promis = $q.reject(new Error('Something rejected'));

        promis
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                console.error(err.stack); //err.name | err.message
            })
            .finally(function () {
                $scope.$parent.resultOut = JSON.stringify(promis, null, 2);
                // console.log(JSON.stringify(promis, null, 2));
            });
    };





























};

},{}],48:[function(require,module,exports){
/**
 * Controller: ListQmethodsCtrl
 */
module.exports = function ($scope, $q, $timeout) {
    'use strict';

    /* Method: all()
     * All promises must be fulfilled. Returned is array of resolved promises. If one promis is rejected catch() is executed instead of then().
     */
    $scope.method_all = function () {

        var promis1 = $q.resolve('PROMIS 1');
        var promis2 = $q.resolve('PROMIS 2');

        var promis = $q.all([promis1, promis2]);

        promis
            .then(function (data) {
                console.log(JSON.stringify(data, null, 2));
            })
            // .spread(function (val1, val2) { //spread will not work !!!
            //     console.log(val1 + val2);
            // })
            .catch(function (err) {
                console.log(err.stack);
            })
            .finally(function () {
                $scope.$parent.resultOut = promis;
            });

    };
/*
console:
[
  "PROMIS 1",
  "PROMIS 2"
]
 */



    /* Method: race() NOT WORKING!!!
     * Wait for the first promise to be resolved or rejected. Returned value is the vaue of that promise.
     */
    $scope.method_race = function () {

        var promisArr = [];

        promisArr[0] = $q(function (resolve, reject) {
            $timeout(function () {
                resolve('PROMIS 0 fulfilled!');
            }, 2000);
        });


        promisArr[1] = $q(function (resolve, reject) {
            $timeout(function () {
                reject(new Error('PROMIS 1 rejected!'));
            }, 4000);
        });


        $q.race(promisArr)
            .then(function (data) {
                console.log(JSON.stringify(data, null, 2));
            })
            .catch(function (err) {
                console.log(err.stack);
            })
            .finally(function () {
                $scope.$parent.resultOut = promis1;
            });

    };


    /* Method: then()
     * return value or throw error from then().
     *
     * Notice: catch() is not needed in Q as it is needed in Bluebird promises.
     */
    $scope.method_then = function () {

        var promis = $q.resolve('My PROMIS');

        promis
            .then(function (val1) {
                console.log(val1);
                return 'Something returned from then!'; //return value to next then()
            })
            .then(function (val2) {
                console.log(val2);
                var error = new Error('Something thrown from then!');
                throw error; //throws error
            });
            // .catch(function (err) {
            //     console.error(err.stack);
            // });

    };
























};

},{}],49:[function(require,module,exports){
/* state: 'examples-spa_q'
 * url: /examples-spa/q
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/q',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/q/q.html'
    };
};

},{}],50:[function(require,module,exports){
    /**************************************************************************************
     ********************************* UI-ROUTER EXAMPLES *********************************
     **************************************************************************************/

module.exports = function ($stateProvider, $urlRouterProvider) {
    'use strict';

    /******* $stateProvider examples ************
     ********************************************/

    // template: -for inline HTML template
    //// uri: /examples-spa/uirouter/statetemplate
    $stateProvider.state('examples-spa_uirouter_stateTemplate', {
        url: '/examples-spa/uirouter/statetemplate',
        template: 'The simplest example with <b style="color:green">template:</b> .'
    });

    // templateUrl: -for HTML file template
    //// uri: /examples-spa/uirouter/statetemplateurl
    $stateProvider.state('examples-spa_uirouter_stateTemplateurl', {
        url: '/examples-spa/uirouter/statetemplateurl',
        templateUrl: '/client/dist/html/examples-spa/uirouter/stateTemplateurl.html'
    });

    // templateProvider: -enables service injection for defining template
    //// uri: http://localhost:3005/examples-spa/uirouter/statetemplateprovider/15?myQuery=Nešto čćžšđ
    $stateProvider.state('examples-spa_uirouter_stateTemplateprovider', {
        url: '/examples-spa/uirouter/statetemplateprovider/:myParam?myQuery',
        templateProvider: function ($timeout, $stateParams) {
            console.log('templateProvider starting ...');
            return $timeout(function () {
                return '<h1>myParam = ' + $stateParams.myParam + '</h1>' + '<h2>myQuery = ' + $stateParams.myQuery + '</h2>';
            }, 3000);
        }
    });


    // controller: function () {...}
    //// uri: /examples-spa/uirouter/state-controllerfunction
    $stateProvider.state('examples-spa_uirouter_stateControllerfunction', {
        url: '/examples-spa/uirouter/statecontrollerfunction',
        template: 'Open console to see result!',
        controller: function ($timeout) { //inject service as argument
            $timeout(function () {
                console.log('Something after 2,1 second.');
            }, 2100);
        }
    });

    // controller: 'SomeCtrl'
    //// uri: /examples-spa/uirouter/state-controlleralias
    $stateProvider.state('examples-spa_uirouter_stateControlleralias', {
        url: '/examples-spa/uirouter/statecontrolleralias',
        templateUrl: '/client/dist/html/examples-spa/uirouter/stateControllerAlias.html',
        controller: 'StateControllerAliasCtrl'
    });

    // controllerProvider:
    //// uri: /examples-spa/uirouter/state-controlleralias
    $stateProvider.state('examples-spa_uirouter_stateControllerProvider', {
        url: '/examples-spa/uirouter/statecontrollerprovider/:ctrlString',
        template: 'myVar: {{myVar}}',
        controllerProvider: function ($stateParams) {//only service can be injected. $scope cannot be injected here!!!
            return $stateParams.ctrlString;
        }
    });

    // url: (regular expession)
    //// uri: /examples-spa/uirouter/stateurlregex
    $stateProvider.state('examples-spa_uirouter_stateUrlregex', {
        url: '/examples-spa/uirouter/stateurlregex/{bookSlug:[a-z-]+}',
        template: 'url: "/examples-spa/uirouter/stateurlregex/{bookSlug:[a-z-]+" <br> This will not work because of number: <a href="/examples-spa/uirouter/stateurlregex/book2">/examples-spa/uirouter/stateurlregex/book2</a>'
    });

    // url: (int url params)
    //// uri: /examples-spa/uirouter/stateurlint/325
    $stateProvider.state('examples-spa_uirouter_stateUrlint', {
        url: '/examples-spa/uirouter/stateurlint/{myParam: int}',
        template: 'myPar = {{myPar}} <br>(This accepts integer parameter only, so this <a href="/examples-spa/uirouter/stateurlint/325abc">/examples-spa/uirouter/stateurlint/325abc</a> will not work!',
        controller: function ($scope, $stateParams) {
            $scope.myPar = $stateParams.myParam;
        }
    });

    // url: (string url params)
    //// uri: /examples-spa/uirouter/stateurlint/someString
    $stateProvider.state('examples-spa_uirouter_stateUrlstring', {
        url: '/examples-spa/uirouter/stateurlstring/{myParam: string}',
        template: 'myPar = {{myPar}} <br>(This accepts string parameter only, but this <a href="/examples-spa/uirouter/stateurlstring/325">/examples-spa/uirouter/stateurlstring/325</a> will also work!',
        controller: function ($scope, $stateParams) {
            $scope.myPar = $stateParams.myParam;
        }
    });

    // url: (date url params)
    //// uri: /examples-spa/uirouter/stateurlint/someString
    $stateProvider.state('examples-spa_uirouter_stateUrldate', {
        url: '/examples-spa/uirouter/stateurldate/{myParam: date}',
        template: 'myPar = {{myPar}} <br>(This accepts date parameter only, so this <a href="/examples-spa/uirouter/stateurldate/325">/examples-spa/uirouter/stateurldate/325</a> will not work!',
        controller: function ($scope, $stateParams) {
            $scope.myPar = $stateParams.myParam;
        }
    });


    // resolve: (resolve injectable service)
    //// uri: /examples-spa/uirouter/stateresolve
    $stateProvider.state('examples-spa_uirouter_stateResolve', {
        url: '/examples-spa/uirouter/stateresolve',
        template: 'myResolv = {{myResolv}} <br> delay(sec): {{td}}',
        controller: function ($scope, myResolved1, timeDelay) {
            $scope.myResolv = myResolved1;
            $scope.td = timeDelay;
        },
        resolve: {
            timeDelay: function () {
                return 1300;
            },
            myResolved1: function ($timeout, timeDelay) {
                return $timeout(function () {
                    return 'Something resolved!!!';
                }, timeDelay);
            }
        }

    });


    // data:
    //// uri: /examples-spa/uirouter/statedata
    $stateProvider.state('examples-spa_uirouter_stateData', {
        url: '/examples-spa/uirouter/statedata',
        template: 'myDataProperty = {{myDataProperty}}',
        controller: function ($scope, $state) {
            $scope.myDataProperty = $state.current.data.myData;
        },
        data: {
            myData: 'Something from data: object!!!'
        }
    });

    // params:
    //// uri: /examples-spa/uirouter/stateparams
    $stateProvider.state('examples-spa_uirouter_stateParams', {
        url: '/examples-spa/uirouter/stateparams',
        template: 'myPar = {{myPar}}',
        controller: function ($scope, $stateParams) {
            $scope.myPar = $stateParams.myParam;
        },
        params: {
            myParam: {value: 'My Default Value!!!'}
            // myParam: 'My Default Value!!!' //shorted
        }
    });

    // views:
    //// uri: /examples-spa/uirouter/stateviews
    $stateProvider.state('examples-spa_uirouter_stateViews', {
        url: '/examples-spa/uirouter/stateviews',
        views: {
            '': { // the main template will be placed here (relatively named)
                template: '<div ui-view="myView1"></div>'
            },
            'myView1@examples-spa_uirouter_stateViews': { // the child views will be defined here (absolutely named)
                template: 'From <b>myView1@examples-spa_uirouter_stateViews</b>! (Will appear when state "examples-spa_uirouter_stateViews" is active)'
            }
        }
    });

    // Nested States: simple parent-child example
    //// parent uri: /examples-spa/uirouter/stateviewsparent
    //// child uri: /examples-spa/uirouter/stateviewsparent/mychild
    $stateProvider
        .state('myParent', {
            url: '/examples-spa/uirouter/stateviewsparent',
            template: '<h2>myParent state</h2> <div ui-view></div>'
        })
        .state('myParent.myChild', {
            url: '/mychild', //will be added and final result is: /examples-spa/uirouter/stateviewsparent/mychild
            // url: '^/mychild', // http://localhost:3005/mychild
            template: '<h4>myChild state</h4>'
        });

    // Nested States: complex parent-child example with named views
    //// uri: /examples-spa/uirouter/stateviewsparent2
    //// uri: /examples-spa/uirouter/stateviewsparent2/mychild
    $stateProvider
        .state('myParent2', {
            url: '/examples-spa/uirouter/stateviewsparent2',
            template: '<h2>myParent2 state</h2> <h4 ui-view="myHead"></h4> <div ui-view></div>'
        })
        .state('myParent2.myChild', {
            url: '/mychild', // /examples-spa/uirouter/stateviewsparent2/mychild
            views: {
                'myHead@myParent2': {
                    template: 'myChild2 state'
                },
                '@myParent2': {
                    template: '<p>Some paragraph text !!!</p>'
                }
            }
        });

    // parent:
    //// uri: /examples-spa/uirouter/stateviewsparentchild
    $stateProvider
        .state('myParent3', {
            url: '/examples-spa/uirouter/stateviewsparent3',
            template: '<h2>myParent3 state</h2> <div ui-view></div>'
        })
        .state('myChild3', {
            parent: 'myParent3',
            url: '/mychild3',
            template: '<h4>myChild3 state</h4> Parent state defined by <b>parent:</b> <div style="color:red" ui-view></div>'
        })
        .state('myChild3.myGrandChild', {
            url: '/mygrandchild',
            template: 'myGrandChild state'
        });





    /******* $state examples ********
     ********************************/
    // .go()
    $stateProvider
        .state('sR', {
            url: '/examples-spa/uirouter/statego-root',
            template: '<h2>state Root</h2> <div ui-view></div>'
        })
        .state('sR.s1', {
            url: '/s1',
            template: 'state: s1 <div ui-view></div>'
        })
        .state('sR.s1.s11', {
            url: '/s11',
            template: 'state s11'
        })
        .state('sR.s1.s12', {
            url: '/s12',
            template: 'state s12  <div ui-view></div>',
            controller: function ($state) {
                // $state.go('.s121'); //go to sR.s1.s12.s121
                // $state.go('sR.s1.s11'); //go to sR.s1.s11
                $state.go('^.^.s1.s11'); //go to sR.s1.s11
            }
        })
        .state('sR.s1.s12.s121', {
            url: '/s121',
            template: 'state s121'
        });

    //.get()
    $stateProvider
        .state('stateGet', {
            url: '/examples-spa/uirouter/stateget',
            template: '<h2>state.get(\'stateGet\')</h2> {{getData}}',
            controller: function ($scope, $state) {
                $scope.getData = $state.get('stateGet');
                console.log(JSON.stringify($scope.getData, null, 2));
            }
        });

    //.href()
    $stateProvider
        .state('stateHref', {
            url: '/examples-spa/uirouter/statehref/{myParam}/:broj',
            template: '<h2>state.href(\'stateHref\')</h2> <a href="{{hrefData}}">{{hrefData}}</a>',
            controller: function ($scope, $state) {
                $scope.hrefData = $state.href('stateHref', {broj: 23}); // /23 will be aded to current url
                console.log(JSON.stringify($scope.hrefData, null, 2));
            }
        });

    //properties
    //.href()
    $stateProvider
        .state('stateProps', {
            url: '/examples-spa/uirouter/stateprops/{myId: int}',
            template: '<h2>$state.params &amp; $state.current</h2> Open console!',
            controller: function ($state, $stateParams) {
                console.info('$state.params\n' + JSON.stringify($state.params, null, 2));
                console.info('$state.current\n' + JSON.stringify($state.current, null, 2));
                console.info('$stateParams\n' + JSON.stringify($stateParams, null, 2));
            }
        });





    /******* $urlRouterProvider examples ********
     ********************************************/

    // When url in browser's addres bar is '/examples-spa/uirouter/urlrouteprovider-when1' console.log() will be executed
    $urlRouterProvider.when('/examples-spa/uirouter/urlrouteprovider-when1', function () {
        document.write('Open console!!!');
        console.log('#1 --- From $urlRouterProvider.when() handler!');
    });

    // When url is '/examples-spa/uirouter/urlrouteprovider-when2' $state.go() redirects to state.
    $urlRouterProvider.when('/examples-spa/uirouter/urlrouteprovider-when2', function ($state) {
        $state.go('examples-spa_uirouter_urlrouteprovider-when2'); //redirect to state provider and load template
        console.log('#2 --- From $urlRouterProvider.when() handler!');
    });
    $stateProvider.state('examples-spa_uirouter_urlrouteprovider-when2', {
        url: '/examples-spa/uirouter/urlrouteprovider-when2',
        template: 'Template comes from stateProvider after appling $state.go() in $urlRouterProvider!'
    });

    $urlRouterProvider.rule(function ($injector, $location) { //enables case insensitive URLs (in browser address bar you can enter upper or lower case letters. no matter)
        var path = $location.path();
        var normalized = path.toLowerCase();

        if (path !== normalized) {
            console.log("Lowercasing rule is applied!");
            return normalized;
        }
        return null;
    });
    $stateProvider.state('examples-spa_uirouter_urlrouteprovider-rule', {
        url: '/examples-spa/uirouter/urlrouteprovider-rule',
        template: 'Can use uppercase or lowercase letters in URL! Click on this: <a href="/examples-spa/uirouter/urlrouteprovider-RULE">/examples-spa/uirouter/urlrouteprovider-RULE</a> will not change anything.'
    });

};

},{}],51:[function(require,module,exports){
/* Controller: 'StateControllerAliasCtrl' */
module.exports = function ($scope) {
    'use strict';
    $scope.myVar = 'Variable from $scope !'
};

},{}],52:[function(require,module,exports){
/* state: 'examples-spa_uirouter'
 * url: /examples-spa/uirouter
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/examples-spa/uirouter',
        templateUrl: APPCONF.PATH_DIST_HTML + '/examples-spa/uirouter/uirouter.html'
    };
};


},{}],53:[function(require,module,exports){
/*global angular*/

/******************* CUSTOM MODULES *******************************
Notice:
    Can be also included in /server/app/views/clientApp.ejs if we don't want to merge everything inside main.js.
    For example:
    <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="/bower/angular-cookies/angular-cookies.min.js"></script>
    <script src="/assets/js/ngPassport.js"></script>
 ******************************************************************/
require('../../bower_components/angular-ui-router/release/angular-ui-router.min.js'); //ui.router
require('../../bower_components/angular-cookies/angular-cookies.min.js'); //ngCookies
require('./ng/modules/angular-passport/ngPassportBasic'); //ngPassport.basicStrategy
require('./ng/modules/angular-passport/ngPassportJWT'); //ngPassport.JWTStrategy
// require('./ng/modules/angular-passport/ngPassportHash'); //ngPassport.HashStrategy



/******************* APP MODULE *******************
 ******************************************************************/
var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router',
    'ngCookies',
    'ngPassport.basicStrategy',
    'ngPassport.JWTStrategy'
    // 'ngPassport.hashStrategy'
]);



/**************************** CONSTANT **************************
 ****************************************************************/
clientApp.constant('APPCONF', require('./ng/constant/APPCONF'));



/******************************************* CONFIG *******************************************
Only providers ($httpProvider) and constants can be injected into configuration blocks.
This is to prevent accidental instantiation of services before they have been fully configured.
 **********************************************************************************************/
clientApp.config(require('./ng/config/html5mode'));



/*********************************** RUN  ***********************************
Run on single page app start. For example on browser's reload.
Only instances ($http, $rootScope, someService) and constants can be injected into run blocks.
This is to prevent further system configuration during application run time.
 ****************************************************************************/
clientApp.run(function () {
    'use strict';
    console.log('RUN on browser reload.');
});



/****************************** ROUTES ******************************
 ********************************************************************/
// clientApp.config(['$routeProvider', require('./ng/config/routes-ng')]); //ngRoute
clientApp.config(require('./ng/config/routes-ui')); //ui.router



/******************* CONTROLLERS *******************
 ***************************************************/
clientApp.controller('404Ctrl', require('./app/404/404Ctrl'));
clientApp.controller('Examples-spaCtrl', require('./app/examples-spa/examples-spaCtrl'));

//ui-router examples
clientApp.controller('StateControllerAliasCtrl', require('./app/examples-spa/uirouter/stateControllerAliasCtrl'));

//$q promise examples
clientApp.controller('QCtrl_creation', require('./app/examples-spa/q/qCtrl_creation'));
clientApp.controller('QCtrl_methods', require('./app/examples-spa/q/qCtrl_methods'));

//login examples
clientApp.controller('TopmenuBasicCtrl', require('./app/examples-spa/login/basic/_common/topmenu/topmenuCtrl'));
clientApp.controller('TopmenuJWTCtrl', require('./app/examples-spa/login/jwt/_common/topmenu/topmenuCtrl'));
clientApp.controller('TopmenuHashCtrl', require('./app/examples-spa/login/hash/_common/topmenu/topmenuCtrl'));

//directives
clientApp.controller('DirectivesCtrl', require('./app/examples-spa/directives/directivesCtrl'));
clientApp.controller('ScopeParentCtrl', require('./app/examples-spa/directives/scopeParentCtrl'));



/******************* DIRECTIVES *******************
 **************************************************/
clientApp.directive('myTemplateString', require('./app/examples-spa/directives/directive_examples/01template-string'));
clientApp.directive('myTemplateFunc', require('./app/examples-spa/directives/directive_examples/01template-func'));
clientApp.directive('myTemplateurl', require('./app/examples-spa/directives/directive_examples/02templateurl'));
clientApp.directive('myTemplatenamespaceSvg', require('./app/examples-spa/directives/directive_examples/02templatenamespace-svg'));

clientApp.directive('myTemplateurlFunc', require('./app/examples-spa/directives/directive_examples/02templateurl-func'));
    //define default templates
clientApp.run(function ($templateCache) {
    'use strict';
    $templateCache.put('green.html', '<p style="color:green">green template</p>');
    $templateCache.put('red.html', '<p style="color:red">red template</p>');
});

clientApp.directive('myControllerExternal', require('./app/examples-spa/directives/directive_examples/03controller-external'));
clientApp.directive('myControllerInternal', require('./app/examples-spa/directives/directive_examples/03controller-internal'));
clientApp.directive('myControllerInternal2', require('./app/examples-spa/directives/directive_examples/03controller-internal2'));
clientApp.directive('myControlleras', require('./app/examples-spa/directives/directive_examples/03controller-as'));

clientApp.directive('myRestrictE', require('./app/examples-spa/directives/directive_examples/04restrict-e'));
clientApp.directive('myRestrictA', require('./app/examples-spa/directives/directive_examples/04restrict-a'));

clientApp.directive('myScopeFalse', require('./app/examples-spa/directives/directive_examples/05scope-false'));
clientApp.directive('myScopeTrue', require('./app/examples-spa/directives/directive_examples/05scope-true'));
clientApp.directive('myScopeObjAt', require('./app/examples-spa/directives/directive_examples/05scope-object-at'));
clientApp.directive('myScopeObjEq', require('./app/examples-spa/directives/directive_examples/05scope-object-eq'));
clientApp.directive('myScopeObjLt', require('./app/examples-spa/directives/directive_examples/05scope-object-lt'));
clientApp.directive('myScopeObjAnd', require('./app/examples-spa/directives/directive_examples/05scope-object-and'));

clientApp.directive('myCompileOrder', require('./app/examples-spa/directives/directive_examples/06compile-order'));
clientApp.directive('myCompilePostfunction', require('./app/examples-spa/directives/directive_examples/06compile-postfunction'));
clientApp.directive('myLnk', require('./app/examples-spa/directives/directive_examples/07link'));
clientApp.directive('myNgrepeatInterpolate', require('./app/examples-spa/directives/directive_examples/08ngrepeat-interpolate'));

},{"../../bower_components/angular-cookies/angular-cookies.min.js":1,"../../bower_components/angular-ui-router/release/angular-ui-router.min.js":2,"./app/404/404Ctrl":3,"./app/examples-spa/directives/directive_examples/01template-func":5,"./app/examples-spa/directives/directive_examples/01template-string":6,"./app/examples-spa/directives/directive_examples/02templatenamespace-svg":7,"./app/examples-spa/directives/directive_examples/02templateurl":9,"./app/examples-spa/directives/directive_examples/02templateurl-func":8,"./app/examples-spa/directives/directive_examples/03controller-as":10,"./app/examples-spa/directives/directive_examples/03controller-external":11,"./app/examples-spa/directives/directive_examples/03controller-internal":12,"./app/examples-spa/directives/directive_examples/03controller-internal2":13,"./app/examples-spa/directives/directive_examples/04restrict-a":14,"./app/examples-spa/directives/directive_examples/04restrict-e":15,"./app/examples-spa/directives/directive_examples/05scope-false":16,"./app/examples-spa/directives/directive_examples/05scope-object-and":17,"./app/examples-spa/directives/directive_examples/05scope-object-at":18,"./app/examples-spa/directives/directive_examples/05scope-object-eq":19,"./app/examples-spa/directives/directive_examples/05scope-object-lt":20,"./app/examples-spa/directives/directive_examples/05scope-true":21,"./app/examples-spa/directives/directive_examples/06compile-order":22,"./app/examples-spa/directives/directive_examples/06compile-postfunction":23,"./app/examples-spa/directives/directive_examples/07link":24,"./app/examples-spa/directives/directive_examples/08ngrepeat-interpolate":25,"./app/examples-spa/directives/directivesCtrl":26,"./app/examples-spa/directives/scopeParentCtrl":28,"./app/examples-spa/examples-spaCtrl":29,"./app/examples-spa/login/basic/_common/topmenu/topmenuCtrl":31,"./app/examples-spa/login/hash/_common/topmenu/topmenuCtrl":36,"./app/examples-spa/login/jwt/_common/topmenu/topmenuCtrl":41,"./app/examples-spa/q/qCtrl_creation":47,"./app/examples-spa/q/qCtrl_methods":48,"./app/examples-spa/uirouter/stateControllerAliasCtrl":51,"./ng/config/html5mode":54,"./ng/config/routes-ui":55,"./ng/constant/APPCONF":56,"./ng/modules/angular-passport/ngPassportBasic":57,"./ng/modules/angular-passport/ngPassportJWT":58}],54:[function(require,module,exports){
/**
 * $location in HTML5 mode
 *
 * IMPORTANT:
 * Dont forget <base href="/"> tag in /server/app/views/clientApp.ejs file!
 *    https://docs.angularjs.org/error/$location/nobase
 */

module.exports = function ($locationProvider) {
    'use strict';
    /* three modes defined */
    $locationProvider.html5Mode(true); //http://localhost:3000/example
    // $locationProvider.html5Mode(false).hashPrefix('!'); //http://localhost:3000/something#!/example
    // $locationProvider.html5Mode(false); //http://localhost:3000/something#/example
};

},{}],55:[function(require,module,exports){
/*global window*/
/**
 * App routes defined by ui-router.
 * https://github.com/angular-ui/ui-router
 *
 * Must have
 *  <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script>
 * in /server/app/views/clientApp.ejs,
 *
 * or include it into /client/src/main.js
 *  require('../../bower_components/angular-ui-router/release/angular-ui-router.min.js');
 */


module.exports = function ($stateProvider, $urlRouterProvider, APPCONF) {
    'use strict';


    /* ROUTES
     * Fetch with <a href="">
     * https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
     * https://angular-ui.github.io/ui-router/site/#/api/ui.router.router.$urlRouterProvider
     */
    $urlRouterProvider.when("/", function () {window.location.href = '/';}); //server-side route
    $urlRouterProvider.when("/examples", function () {window.location.href = '/examples';}); //server-side route
    $urlRouterProvider.otherwise("/404");
    $stateProvider.state('404', require('../../app/404/404Rte'));


    /* STATES
     * Fetch with <a ui-sref=""> or <a href="">
     * https://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider
     */
    $stateProvider.state('examples-spa', require('../../app/examples-spa/examples-spaRte')(APPCONF)); // url: /examples-spa
    $stateProvider.state('examples-spa_uirouter', require('../../app/examples-spa/uirouter/uirouterRte')(APPCONF)); // url: /examples-spa/uirouter
    $stateProvider.state('examples-spa_q', require('../../app/examples-spa/q/qRte')(APPCONF)); // url: /examples-spa/q
    $stateProvider.state('examples-spa_login', require('../../app/examples-spa/login/loginRte')(APPCONF)); // url: /examples-spa/login
    $stateProvider.state('examples-spa_directives', require('../../app/examples-spa/directives/directivesRte')(APPCONF)); // url: /examples-spa/directives

    $stateProvider.state('examples-spa_login_basic_form', require('../../app/examples-spa/login/basic/form/formRte')(APPCONF)); // url: /examples-spa/login/basic/form
    $stateProvider.state('examples-spa_login_basic_page1', require('../../app/examples-spa/login/basic/page1/page1Rte')(APPCONF)); // url: /examples-spa/login/basic/page1
    $stateProvider.state('examples-spa_login_basic_page2', require('../../app/examples-spa/login/basic/page2/page2Rte')(APPCONF)); // url: /examples-spa/login/basic/page2
    $stateProvider.state('examples-spa_login_basic_page3', require('../../app/examples-spa/login/basic/page3/page3Rte')(APPCONF)); // url: /examples-spa/login/basic/page3

    $stateProvider.state('examples-spa_login_jwt_form', require('../../app/examples-spa/login/jwt/form/formRte')(APPCONF)); // url: /examples-spa/login/jwt/form
    $stateProvider.state('examples-spa_login_jwt_page1', require('../../app/examples-spa/login/jwt/page1/page1Rte')(APPCONF)); // url: /examples-spa/login/jwt/page1
    $stateProvider.state('examples-spa_login_jwt_page2', require('../../app/examples-spa/login/jwt/page2/page2Rte')(APPCONF)); // url: /examples-spa/login/jwt/page2
    $stateProvider.state('examples-spa_login_jwt_page3', require('../../app/examples-spa/login/jwt/page3/page3Rte')(APPCONF)); // url: /examples-spa/login/jwt/page3

    $stateProvider.state('examples-spa_login_hash_form', require('../../app/examples-spa/login/hash/form/formRte')(APPCONF)); // url: /examples-spa/login/hash/form
    $stateProvider.state('examples-spa_login_hash_page1', require('../../app/examples-spa/login/hash/page1/page1Rte')(APPCONF)); // url: /examples-spa/login/hash/page1
    $stateProvider.state('examples-spa_login_hash_page2', require('../../app/examples-spa/login/hash/page2/page2Rte')(APPCONF)); // url: /examples-spa/login/hash/page2
    $stateProvider.state('examples-spa_login_hash_page3', require('../../app/examples-spa/login/hash/page3/page3Rte')(APPCONF)); // url: /examples-spa/login/hash/page3





    /* ui.router examples */
    require('../../app/examples-spa/uirouter/examplesRte')($stateProvider, $urlRouterProvider);


};






},{"../../app/404/404Rte":4,"../../app/examples-spa/directives/directivesRte":27,"../../app/examples-spa/examples-spaRte":30,"../../app/examples-spa/login/basic/form/formRte":32,"../../app/examples-spa/login/basic/page1/page1Rte":33,"../../app/examples-spa/login/basic/page2/page2Rte":34,"../../app/examples-spa/login/basic/page3/page3Rte":35,"../../app/examples-spa/login/hash/form/formRte":37,"../../app/examples-spa/login/hash/page1/page1Rte":38,"../../app/examples-spa/login/hash/page2/page2Rte":39,"../../app/examples-spa/login/hash/page3/page3Rte":40,"../../app/examples-spa/login/jwt/form/formRte":42,"../../app/examples-spa/login/jwt/page1/page1Rte":43,"../../app/examples-spa/login/jwt/page2/page2Rte":44,"../../app/examples-spa/login/jwt/page3/page3Rte":45,"../../app/examples-spa/login/loginRte":46,"../../app/examples-spa/q/qRte":49,"../../app/examples-spa/uirouter/examplesRte":50,"../../app/examples-spa/uirouter/uirouterRte":52}],56:[function(require,module,exports){
//application constants (configuration file)
module.exports = {

    API_BASE_URL: 'http://192.168.1.101:9005',
    // API_BASE_URL: 'http://localhost:9005',
    PATH_DIST_HTML: '/client/dist/html'

};

},{}],57:[function(require,module,exports){
var ngPassportBasic = require('angular-passport').ngPassportBasic;

/* configure */
ngPassportBasic.constant('NGPASSPORT_CONF_BASIC', {
    // API_BASE_URL: 'http://192.168.1.101:9005',
    API_BASE_URL: 'http://localhost:9005',
    API_AUTH_PATHNAME: '/examples/auth/passport/basicstrategy',
    URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/basic/page1',
    URL_AFTER_LOGOUT: '/examples-spa/login/basic/form'
});

module.exports = ngPassportBasic;

},{"angular-passport":59}],58:[function(require,module,exports){
var ngPassportJWT = require('angular-passport').ngPassportJWT;

/* configure */
ngPassportJWT.constant('NGPASSPORT_CONF_JWT', {
    // API_BASE_URL: 'http://192.168.1.101:9005',
    API_BASE_URL: 'http://localhost:9005',
    API_AUTH_PATHNAME: '/examples/auth/passport/jwtstrategy-gettoken',
    URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/jwt/page1',
    URL_AFTER_LOGOUT: '/examples-spa/login/jwt/form'
});

module.exports = ngPassportJWT;

},{"angular-passport":59}],59:[function(require,module,exports){
module.exports.ngPassportBasic = require('./src/ngPassportBasic');
module.exports.ngPassportJWT = require('./src/ngPassportJWT');
module.exports.ngPassportHash = require('./src/ngPassportHash');

},{"./src/ngPassportBasic":72,"./src/ngPassportHash":73,"./src/ngPassportJWT":74}],60:[function(require,module,exports){
/**
 * Controller: 'NgPassportBasicCtrl'
 */

module.exports = function ($scope, basicAuth, $state, NGPASSPORT_CONF_BASIC) {
    'use strict';
    $scope.strategyName = 'Basic';

    //show current state object
    // console.info('Current state \n', JSON.stringify($state.get($state.current.name), null, 2));

    //when login button is clicked
    $scope.login = function () {
        $scope.errMsg = '';

        basicAuth
            .login($scope.username, $scope.password)
            .catch(function (err) {
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error('loginERR', err.data.stack);
                } else {
                    $scope.errMsg = '500 Internal API Server Error: ' + NGPASSPORT_CONF_BASIC.API_BASE_URL + NGPASSPORT_CONF_BASIC.API_AUTH_PATHNAME;
                }

            });

    };

    //when logout button is clicked
    $scope.logout = function () {
        basicAuth.logout();
    };
};

},{}],61:[function(require,module,exports){
/**
 * Controller: 'NgPassportHashCtrl'
 */

module.exports = function ($scope, hashAuth, $state, NGPASSPORT_CONF_HASH) {
    'use strict';
    $scope.strategyName = 'Hash';

    //show current state object
    // console.info('Current state \n', JSON.stringify($state.get($state.current.name), null, 2));

    //when login button is clicked
    $scope.login = function () {
        $scope.errMsg = '';

        hashAuth
            .login($scope.username, $scope.password)
            .catch(function (err) {
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error(err.data.stack);
                } else {
                    $scope.errMsg = '500 Internal API Server Error: ' + NGPASSPORT_CONF_HASH.API_BASE_URL + NGPASSPORT_CONF_HASH.API_AUTH_PATHNAME;
                }

            });

    };

    //when logout button is clicked
    $scope.logout = function () {
        hashAuth.logout();
    };
};

},{}],62:[function(require,module,exports){
/**
 * Controller: 'NgPassportJWTCtrl'
 */

module.exports = function ($scope, jwtAuth, $state, NGPASSPORT_CONF_JWT) {
    'use strict';
    $scope.strategyName = 'JWT';

    //show current state object
    // console.info('Current state \n', JSON.stringify($state.get($state.current.name), null, 2));

    //when login button is clicked
    $scope.login = function () {
        $scope.errMsg = '';

        jwtAuth
            .login($scope.username, $scope.password)
            .catch(function (err) {
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error(err.data.stack);
                } else {
                    $scope.errMsg = '500 Internal API Server Error: ' + NGPASSPORT_CONF_JWT.API_BASE_URL + NGPASSPORT_CONF_JWT.API_AUTH_PATHNAME;
                }

            });

    };

    //when logout button is clicked
    $scope.logout = function () {
        jwtAuth.logout();
    };
};

},{}],63:[function(require,module,exports){
module.exports = function (ctrl) {
    'use strict';

    return function () {

        var ngpassportForm = {
            restrict: 'E',
            replace: true,
            controller: ctrl,
            scope: {templateUrl: '='},
            templateUrl: function (tElement, tAttrs) {
                return tAttrs.templateUrl || 'formSimple.html'; //used <ngpassport-form template-url="myTemplate.html"></ngpassport-form>
            }
        };

        return ngpassportForm;
    };
};

},{}],64:[function(require,module,exports){
module.exports = function (ctrl) {
    'use strict';

    return function () {

        var ngpassportLogout = {
            restrict: 'EC',
            replace: true,
            controller: ctrl,
            scope: {templateUrl: '='},
            templateUrl: function (tElement, tAttrs) {
                return tAttrs.templateUrl || 'logoutSimple.html'; //used <ngpassport-form template-url="formSimple.html"></ngpassport-form>
            }
        };

        return ngpassportLogout;
    };
};

},{}],65:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                console.error("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

};

},{}],66:[function(require,module,exports){
/**
 * Services for Basic Authentication
 * Notice: $cookies require 'ngCookies' module to be included
 */

module.exports = function ($http, NGPASSPORT_CONF_BASIC, base64, $cookies, $location, $state, $timeout) {
    'use strict';

    var basicAuth = {};

    /**
     * Check credentials (username, password) and set cookie if credentails are correct.
     * @param  {String} u - username
     * @param  {String} p -password
     * @return {Object}   - Q promise
     */
    basicAuth.login = function (u, p) {

        //encoding
        var input = u + ':' + p;
        var input64 = base64.encode(input);

        //$http config
        var http_config = {
            headers: {
                Authorization: 'Basic ' + input64
            }
        };
        // console.log(JSON.stringify(http_config, null, 2));

        //delete cookie (on bad login old cookie will be deleted)
        basicAuth.delCookie('authAPI');

        return $http.get(NGPASSPORT_CONF_BASIC.API_BASE_URL + NGPASSPORT_CONF_BASIC.API_AUTH_PATHNAME, http_config)
            .then(function (respons) {
                if (respons.data.isLoggedIn) {
                    basicAuth.setCookie('authAPI', respons.data.putLocally);

                    //redirect to another page
                    if (NGPASSPORT_CONF_BASIC.URL_AFTER_SUCCESSFUL_LOGIN) {
                        $location.path(NGPASSPORT_CONF_BASIC.URL_AFTER_SUCCESSFUL_LOGIN);
                    }
                }
            });

    };


    /**
     * Logout and redirect to another page.
     * Use it in controller when user clicks on logout button.
     * @return {Boolean} - returns true or false
     */
    basicAuth.logout = function () {
        basicAuth.delCookie('authAPI');

        $timeout(function () {
            $location.path(NGPASSPORT_CONF_BASIC.URL_AFTER_LOGOUT);
        }, 34);
    };


    /**
     * Set 'obj' inside cookie.
     * @param {String} cookieKey - 'authAPI'
     * @param {Object} obj       - {"username": "john", "authHeader": "Basic am9objp0ZXN0"}
     */
    basicAuth.setCookie = function (cookieKey, obj) {
        $cookies.putObject(cookieKey, obj);
    };


    /**
     * Return object from cookie.
     * @param {String} cookieKey - 'authAPI'
     * @return {Object}          - {"username": "john", "authHeader": "Basic am9objp0ZXN0"} || {"username": "", "authHeader": ""}
     */
    basicAuth.getCookie = function (cookieKey) {
        var cookieObj = $cookies.getObject(cookieKey);

        if (cookieObj) {
            return cookieObj;
        } else {
            return {
                username: '',
                authHeader: ''
            };
        }
    };


    /**
     * Delete cookie, usually on logout.
     * @param {String} cookieKey - 'authAPI'
     */
    basicAuth.delCookie = function (cookieKey) {
        $cookies.remove(cookieKey);
    };


    /**
     * Protect UI-router's state from unauthorized access.
     * Implement inside main.js run() method --> $rootScope.$on('$stateChangeSuccess', basicAuth.onstateChangeSuccess);
     * @param  {String} redirectUrl -url after successful login
     * @return {Boolean} - returns true or false
     */
    basicAuth.protectUIRouterState = function (event, toState, toParams, fromState, fromParams) {
        event.preventDefault();

        // console.log('authRequired: ', JSON.stringify($state.current.authRequired, null, 2));

        //check authentication if it's defined inside state with     authRequired: true
        //see '/routes-ui/examples-spa_login.js'
        if ($state.current.authRequired) {

            //redirect if 'authAPI' cookie doesn't exists
            if (!basicAuth.isAuthenticated()) {
                basicAuth.logout(NGPASSPORT_CONF_BASIC.URL_AFTER_LOGOUT);
            }

        }
    };


    /**
     * Determine if app is authenticated or not. E.g. if user is logged in or not.
     * Authenticated is when cookie 'authAPI' exists.
     * @return {Boolean} - returns true or false
     */
    basicAuth.isAuthenticated = function () {
        if (basicAuth.getCookie('authAPI')) {
            return !!basicAuth.getCookie('authAPI').username;
        } else {
            return false;
        }
    };



    return basicAuth;

};

},{}],67:[function(require,module,exports){
/**
 * API Request interceptor
 * Notice: $injector is required to inject basicAuth, because config() accepts providers only not services.
 */

module.exports = function ($injector) {
    'use strict';

    var interceptApiRequest = {};

    /**
     * REQUEST INTERCEPTOR
     *
     * @param  {Object} config    - $http config parameter
     *     *** $http.get('/someUrl', config).then(successCallback, errorCallback);
     *     *** $http.post('/someUrl', data, config).then(successCallback, errorCallback);
     */
    interceptApiRequest.request = function (config) {
        var basicAuth = $injector.get('basicAuth'); //get basicAuth factory

        //Intercept with 'Authorization' header only when cookie is set, e.g. when user is logged in.
        //When user is not logged in don't add 'Authorization' header.
        if (basicAuth.getCookie('authAPI').authHeader) {
            config.headers['Authorization'] = basicAuth.getCookie('authAPI').authHeader; // 'Basic am9objp0ZXN0'
        }

        // console.log('$http config\n', JSON.stringify(config, null, 2));

        return config;
    };


    interceptApiRequest.requestError = function(config) {
        return config;
    },

    interceptApiRequest.response = function(res) {
        return res;
    },

    interceptApiRequest.responseError = function(res) {
        throw res;
    }





    return interceptApiRequest;

};

},{}],68:[function(require,module,exports){
/**
 * Services for Hash Authentication
 * Notice: $cookies require 'ngCookies' module to be included
 */

module.exports = function ($http, NGPASSPORT_CONF_HASH, $cookies, $location, $state, $timeout) {
    'use strict';

    var hashAuth = {};

    /**
     * Check credentials (username, password) and set cookie if credentails are correct.
     * @param  {String} u - username
     * @param  {String} p -password
     * @return {Object}   - Q promise
     */
    hashAuth.login = function (u, p) {

        //delete cookie (on bad login old cookie will be deleted)
        hashAuth.delCookie('authAPI');

        //check credentials
        var postObj = {
            username: u,
            password: p
        };
        return $http.post(NGPASSPORT_CONF_HASH.API_BASE_URL + NGPASSPORT_CONF_HASH.API_AUTH_PATHNAME, postObj)
            .then(function (respons) {
                if (respons.data.isLoggedIn) {
                    hashAuth.setCookie('authAPI', respons.data.putLocally);
                    // console.log(NGPASSPORT_CONF_HASH.URL_AFTER_SUCCESSFUL_LOGIN);
                    //redirect to another page after successful login
                    if (NGPASSPORT_CONF_HASH.URL_AFTER_SUCCESSFUL_LOGIN) {
                        $location.path(NGPASSPORT_CONF_HASH.URL_AFTER_SUCCESSFUL_LOGIN);
                    }
                }
            });

    };


    /**
     * Logout and redirect to another page.
     * Use it in controller when user clicks on logout button.
     * @return {Boolean} - returns true or false
     */
    hashAuth.logout = function () {
        hashAuth.delCookie('authAPI');

        $timeout(function () {
            $location.path(NGPASSPORT_CONF_HASH.URL_AFTER_LOGOUT);
        }, 34);
    };


    /**
     * Set 'obj' inside cookie.
     * @param {String} cookieKey - 'authAPI'
     * @param {Object} obj       - {"username": "john", "hash": "e7b1951a91718085f4382391c31ef175df72addddb"}
     */
    hashAuth.setCookie = function (cookieKey, obj) {
        $cookies.putObject(cookieKey, obj);
    };


    /**
     * Return object from cookie.
     * @param {String} cookieKey - 'authAPI'
     * @return {Object}          - {"username": "john", "hash": "e7b1951a91718085f4382391c31ef175df72addddb"} || {"username": "", "hash": ""}
     */
    hashAuth.getCookie = function (cookieKey) {
        var cookieObj = $cookies.getObject(cookieKey);

        if (cookieObj) {
            return cookieObj;
        } else {
            return {
                username: '',
                hash: ''
            };
        }
    };


    /**
     * Delete cookie, usually on logout.
     * @param {String} cookieKey - 'authAPI'
     */
    hashAuth.delCookie = function (cookieKey) {
        $cookies.remove(cookieKey);
    };


    /**
     * Protect UI-router's state from unauthorized access.
     * Implement inside main.js run() method --> $rootScope.$on('$stateChangeSuccess', hashAuth.onstateChangeSuccess);
     * @param  {String} redirectUrl -url after successful login
     * @return {Boolean} - returns true or false
     */
    hashAuth.protectUIRouterState = function (event, toState, toParams, fromState, fromParams) {
        event.preventDefault();

        // console.log('authRequired: ', JSON.stringify($state.current.authRequired, null, 2));

        //check authentication if it's defined inside state with     authRequired: true
        //see '/routes-ui/examples-spa_login.js'
        if ($state.current.authRequired) {

            //redirect if 'authAPI' cookie doesn't exists
            if (!hashAuth.isAuthenticated()) {
                hashAuth.logout(NGPASSPORT_CONF_HASH.URL_AFTER_LOGOUT);
            }

        }
    };


    /**
     * Determine if app is authenticated or not. E.g. if user is logged in or not.
     * Authenticated is when cookie 'authAPI' exists.
     * @return {Boolean} - returns true or false
     */
    hashAuth.isAuthenticated = function () {
        if (hashAuth.getCookie('authAPI')) {
            return !!hashAuth.getCookie('authAPI').username;
        } else {
            return false;
        }
    };



    return hashAuth;

};

},{}],69:[function(require,module,exports){
/**
 * API Request interceptor
 * Notice: $injector is required to inject hashAuth, because config() accepts providers only not services.
 */

module.exports = function ($injector, NGPASSPORT_CONF_HASH) {
    'use strict';

    var interceptApiRequest = {};

    /**
     * REQUEST INTERCEPTOR
     *
     * @param  {Object} config    - $http config parameter
     *     *** $http.get('/someUrl', config).then(successCallback, errorCallback);
     *     *** $http.post('/someUrl', data, config).then(successCallback, errorCallback);
     */
    interceptApiRequest.request = function (config) {
        var hashAuth = $injector.get('hashAuth'); //get hashAuth factory

        //Intercept by adding hash string at the URL's end, only when cookie is set, e.g. when user is logged in.
        //When user is not logged in don't add hash sufix at the URL's end.
        // Important: only to API endpoints will be added hash string e.g. to urls which have NGPASSPORT_CONF_HASH.API_BASE_URL
        var hashStr = hashAuth.getCookie('authAPI').hash;
        if (hashStr && config.url.indexOf(NGPASSPORT_CONF_HASH.API_BASE_URL) !== -1) {
            config.url = config.url + '/' + hashStr;
        }

        // console.log('$http config\n', JSON.stringify(config, null, 2));

        return config;
    };


    return interceptApiRequest;

};

},{}],70:[function(require,module,exports){
/**
 * Services for JWT Authentication
 * Notice: $cookies require 'ngCookies' module to be included
 */

module.exports = function ($http, NGPASSPORT_CONF_JWT, $cookies, $location, $state, $timeout) {
    'use strict';

    var jwtAuth = {};

    /**
     * Check credentials (username, password) and set cookie if credentails are correct.
     * @param  {String} u - username
     * @param  {String} p -password
     * @return {Object}   - Q promise
     */
    jwtAuth.login = function (u, p) {

        //delete cookie (on bad login old cookie will be deleted)
        jwtAuth.delCookie('authAPI');

        //check credentials
        var postObj = {
            username: u,
            password: p
        };
        return $http.post(NGPASSPORT_CONF_JWT.API_BASE_URL + NGPASSPORT_CONF_JWT.API_AUTH_PATHNAME, postObj)
            .then(function (respons) {
                if (respons.data.isLoggedIn) {
                    jwtAuth.setCookie('authAPI', respons.data.putLocally);
                    console.log(NGPASSPORT_CONF_JWT.URL_AFTER_SUCCESSFUL_LOGIN);
                    //redirect to another page after successful login
                    if (NGPASSPORT_CONF_JWT.URL_AFTER_SUCCESSFUL_LOGIN) {
                        $location.path(NGPASSPORT_CONF_JWT.URL_AFTER_SUCCESSFUL_LOGIN);
                    }
                }
            });

    };


    /**
     * Logout and redirect to another page.
     * Use it in controller when user clicks on logout button.
     * @return {Boolean} - returns true or false
     */
    jwtAuth.logout = function () {
        jwtAuth.delCookie('authAPI');

        $timeout(function () {
            $location.path(NGPASSPORT_CONF_JWT.URL_AFTER_LOGOUT);
        }, 34);
    };


    /**
     * Set 'obj' inside cookie.
     * @param {String} cookieKey - 'authAPI'
     * @param {Object} obj       - {"username": "john", "authHeader": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YTcyNjk1MzcwYmM1MDk2MmUzNDVmZSIsImlhdCI6MTQ3MDU3MjI0NH0.RsiMnjrOjUjmLVC9rcU8Vu3B2h_yfXlBUI5SyBhveek"}
     */
    jwtAuth.setCookie = function (cookieKey, obj) {
        $cookies.putObject(cookieKey, obj);
    };


    /**
     * Return object from cookie.
     * @param {String} cookieKey - 'authAPI'
     * @return {Object}          - {"username": "john", "authHeader": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YTcyNjk1MzcwYmM1MDk2MmUzNDVmZSIsImlhdCI6MTQ3MDU3MjI0NH0.RsiMnjrOjUjmLVC9rcU8Vu3B2h_yfXlBUI5SyBhveek"} || {"username": "", "authHeader": ""}
     */
    jwtAuth.getCookie = function (cookieKey) {
        var cookieObj = $cookies.getObject(cookieKey);

        if (cookieObj) {
            return cookieObj;
        } else {
            return {
                username: '',
                authHeader: ''
            };
        }
    };


    /**
     * Delete cookie, usually on logout.
     * @param {String} cookieKey - 'authAPI'
     */
    jwtAuth.delCookie = function (cookieKey) {
        $cookies.remove(cookieKey);
    };


    /**
     * Protect UI-router's state from unauthorized access.
     * Implement inside main.js run() method --> $rootScope.$on('$stateChangeSuccess', jwtAuth.onstateChangeSuccess);
     * @param  {String} redirectUrl -url after successful login
     * @return {Boolean} - returns true or false
     */
    jwtAuth.protectUIRouterState = function (event, toState, toParams, fromState, fromParams) {
        event.preventDefault();

        // console.log('authRequired: ', JSON.stringify($state.current.authRequired, null, 2));

        //check authentication if it's defined inside state with     authRequired: true
        //see '/routes-ui/examples-spa_login.js'
        if ($state.current.authRequired) {

            //redirect if 'authAPI' cookie doesn't exists
            if (!jwtAuth.isAuthenticated()) {
                jwtAuth.logout(NGPASSPORT_CONF_JWT.URL_AFTER_LOGOUT);
            }

        }
    };


    /**
     * Determine if app is authenticated or not. E.g. if user is logged in or not.
     * Authenticated is when cookie 'authAPI' exists.
     * @return {Boolean} - returns true or false
     */
    jwtAuth.isAuthenticated = function () {
        if (jwtAuth.getCookie('authAPI')) {
            return !!jwtAuth.getCookie('authAPI').username;
        } else {
            return false;
        }
    };



    return jwtAuth;

};

},{}],71:[function(require,module,exports){
/**
 * API Request interceptor
 * Notice: $injector is required to inject jwtAuth, because config() accepts providers only not services.
 */

module.exports = function ($injector) {
    'use strict';

    var interceptApiRequest = {};

    /**
     * REQUEST INTERCEPTOR
     *
     * @param  {Object} config    - $http config parameter
     *     *** $http.get('/someUrl', config).then(successCallback, errorCallback);
     *     *** $http.post('/someUrl', data, config).then(successCallback, errorCallback);
     */
    interceptApiRequest.request = function (config) {
        var jwtAuth = $injector.get('jwtAuth'); //get jwtAuth factory

        //Intercept with 'Authorization' header only when cookie is set, e.g. when user is logged in.
        //When user is not logged in don't add 'Authorization' header.
        if (jwtAuth.getCookie('authAPI').authHeader) {
            config.headers['Authorization'] = jwtAuth.getCookie('authAPI').authHeader; // 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YTcyNjk1MzcwYmM1MDk2MmUzNDVmZSIsImlhdCI6MTQ3MDU3MjI0NH0.RsiMnjrOjUjmLVC9rcU8Vu3B2h_yfXlBUI5SyBhveek'
        }

        // console.log('$http config\n', JSON.stringify(config, null, 2));

        return config;
    };


    return interceptApiRequest;

};

},{}],72:[function(require,module,exports){
/*global angular, window*/

/***************************** BASIC AUTHETICATION ****************
 http://passportjs.org/docs/basic-digest
 ******************************************************************/
var ngPassportBasic = angular.module('ngPassport.basicStrategy', []);

ngPassportBasic.controller('NgPassportBasicCtrl', require('./controller/ngPassportBasicCtrl'));

ngPassportBasic.factory('basicAuth', require('./factory/basicAuth'));
ngPassportBasic.factory('base64', require('./factory/base64'));
ngPassportBasic.factory('basicInterceptApiRequest', require('./factory/basicInterceptApiRequest'));

//protect API endpoints
ngPassportBasic.config(function ($httpProvider) {
    'use strict';
    $httpProvider.interceptors.push('basicInterceptApiRequest');
});

//protect pages e.g. ui-router's states
ngPassportBasic.run(function ($rootScope, basicAuth) {
    'use strict';
    $rootScope.$on('$stateChangeSuccess', basicAuth.protectUIRouterState);
});



/* login form and logout button directives */
ngPassportBasic.directive('ngpassportForm', require('./directive/ngpassportForm')('NgPassportBasicCtrl'));
ngPassportBasic.directive('ngpassportLogout', require('./directive/ngpassportLogout')('NgPassportBasicCtrl'));

//define default templates
ngPassportBasic.run(function ($templateCache) {
    'use strict';
    $templateCache.put('formSimple.html', '<div><form> username: <input type="text" ng-model="username"> <br>password: <input type="password" ng-model="password"> <button type="button" ng-click="login()">Login</button></form>{{errMsg}}</div>');
    $templateCache.put('logoutSimple.html', '<button ng-click="logout()">Logout</button>');
});






/*when used in browserify (require('angular-passport')) */
module.exports = ngPassportBasic;





/*when included in html file
<script src=".../dist/js/ngPassport.js"></script>
<script>
    ngPassportBasic.constant('NGPASSPORT_CONF_BASIC', {
        API_BASE_URL: 'http://localhost:9005',
        API_AUTH_PATHNAME: '/examples/auth/passport/basicstrategy',
        URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/basic/page1',
        URL_AFTER_LOGOUT: '/examples-spa/login/basic/form'
    });
</script>
*/
window.ngPassportBasic = ngPassportBasic;

},{"./controller/ngPassportBasicCtrl":60,"./directive/ngpassportForm":63,"./directive/ngpassportLogout":64,"./factory/base64":65,"./factory/basicAuth":66,"./factory/basicInterceptApiRequest":67}],73:[function(require,module,exports){
/*global angular, window*/

/***************************** HASH AUTHETICATION ****************
 https://github.com/yuri-karadzhov/passport-hash
 ******************************************************************/
var ngPassportHash = angular.module('ngPassport.hashStrategy', []);

ngPassportHash.controller('NgPassportHashCtrl', require('./controller/ngPassportHashCtrl'));

ngPassportHash.factory('hashAuth', require('./factory/hashAuth'));
ngPassportHash.factory('hashInterceptApiRequest', require('./factory/hashInterceptApiRequest'));

//protect API endpoints
ngPassportHash.config(function ($httpProvider) {
    'use strict';
    $httpProvider.interceptors.push('hashInterceptApiRequest');
});

//protect pages e.g. ui-router's states
ngPassportHash.run(function ($rootScope, hashAuth) {
    'use strict';
    $rootScope.$on('$stateChangeSuccess', hashAuth.protectUIRouterState);
});



/* login form and logout button directives */
ngPassportHash.directive('ngpassportForm', require('./directive/ngpassportForm')('NgPassportHashCtrl'));
ngPassportHash.directive('ngpassportLogout', require('./directive/ngpassportLogout')('NgPassportHashCtrl'));

//define default templates
ngPassportHash.run(function ($templateCache) {
    'use strict';
    $templateCache.put('formSimple.html', '<div><form> username: <input type="text" ng-model="username"> <br>password: <input type="password" ng-model="password"> <button type="button" ng-click="login()">Login</button></form>{{errMsg}}</div>');
    $templateCache.put('logoutSimple.html', '<button ng-click="logout()">Logout</button>');
});






/*when used in browserify (require('angular-passport')) */
module.exports = ngPassportHash;





/*when included in html file
<script src=".../dist/js/ngPassport.js"></script>
<script>
    ngPassportHash.constant('NGPASSPORT_CONF_HASH', {
        API_BASE_URL: 'http://localhost:9005',
        API_AUTH_PATHNAME: '/examples/auth/passport/hashstrategy-gethash',
        URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/hash/page1',
        URL_AFTER_LOGOUT: '/examples-spa/login/hash/form'
    });
</script>
*/
window.ngPassportHash = ngPassportHash;

},{"./controller/ngPassportHashCtrl":61,"./directive/ngpassportForm":63,"./directive/ngpassportLogout":64,"./factory/hashAuth":68,"./factory/hashInterceptApiRequest":69}],74:[function(require,module,exports){
/*global angular, window*/

/***************************** JWT (Json Web Token) AUTHETICATION ****************
 https://github.com/themikenicholson/passport-jwt
 ******************************************************************/
var ngPassportJWT = angular.module('ngPassport.JWTStrategy', []);

ngPassportJWT.controller('NgPassportJWTCtrl', require('./controller/ngPassportJWTCtrl'));

ngPassportJWT.factory('jwtAuth', require('./factory/jwtAuth'));
ngPassportJWT.factory('jwtInterceptApiRequest', require('./factory/jwtInterceptApiRequest'));

//protect API endpoints
ngPassportJWT.config(function ($httpProvider) {
    'use strict';
    $httpProvider.interceptors.push('jwtInterceptApiRequest');
});

//protect pages e.g. ui-router's states
ngPassportJWT.run(function ($rootScope, jwtAuth) {
    'use strict';
    $rootScope.$on('$stateChangeSuccess', jwtAuth.protectUIRouterState);
});



/* login form and logout button directives */
ngPassportJWT.directive('ngpassportForm', require('./directive/ngpassportForm')('NgPassportJWTCtrl'));
ngPassportJWT.directive('ngpassportLogout', require('./directive/ngpassportLogout')('NgPassportJWTCtrl'));

//define default templates
ngPassportJWT.run(function ($templateCache) {
    'use strict';
    $templateCache.put('formSimple.html', '<div><form> username: <input type="text" ng-model="username"> <br>password: <input type="password" ng-model="password"> <button type="button" ng-click="login()">Login</button></form>{{errMsg}}</div>');
    $templateCache.put('logoutSimple.html', '<button ng-click="logout()">Logout</button>');
});






/*when used in browserify (require('angular-passport')) */
module.exports = ngPassportJWT;





/*when included in html file
<script src=".../dist/js/ngPassport.js"></script>
<script>
    ngPassportJWT.constant('NGPASSPORT_CONF_JWT', {
        API_BASE_URL: 'http://localhost:9005',
        API_AUTH_PATHNAME: '/examples/auth/passport/jwtstrategy-gettoken',
        URL_AFTER_SUCCESSFUL_LOGIN: '/examples-spa/login/jwt/page1',
        URL_AFTER_LOGOUT: '/examples-spa/login/jwt/form'
    });
</script>
*/
window.ngPassportJWT = ngPassportJWT;

},{"./controller/ngPassportJWTCtrl":62,"./directive/ngpassportForm":63,"./directive/ngpassportLogout":64,"./factory/jwtAuth":70,"./factory/jwtInterceptApiRequest":71}],75:[function(require,module,exports){
exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}

},{}]},{},[53]);
