!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.LogTalk=e():t.LogTalk=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}var h=n(1),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,t),this.__option=s(s({},t.DEFAULT_LOGGING_METHOD),n),this.__level=e,t.LOGGING_METHODS.forEach(this.setMethod.bind(this))}return l(t,null,[{key:"LOGGING_METHODS",get:function(){return[{name:"debug",level:1,color:"default",output:console.log},{name:"info",level:2,color:"blue",output:console.log},{name:"success",level:3,color:"green",output:console.log},{name:"warn",level:4,color:"yellow",output:console.warn||console.log},{name:"error",level:5,color:"red",output:console.error||console.log}]}},{key:"DEFAULT_LOGGING_METHOD",get:function(){return{level:1,color:"default",output:console.log,timeFormat:"YYYY-MM-DD HH:mm:ss"}}},{key:"BROWSER_COLOR",get:function(){return{red:"#BD2130",yellow:"#D39E00",green:"#1E7E34",blue:"#117A8B",default:"inherit"}}},{key:"TERMINAL_COLOR",get:function(){return{red:"[91m",yellow:"[93m",green:"[92m",blue:"[94m",default:"[0m"}}}]),l(t,[{key:"highlight",value:function(e,n,r){return"undefined"==typeof window?[e,t.TERMINAL_COLOR[r]+n+t.TERMINAL_COLOR.default]:window.navigator.userAgent.match(/(T|t)rident/)?[e,n]:["".concat(e," %c").concat(n),"color: ".concat(t.BROWSER_COLOR[r])]}},{key:"setMethod",value:function(t){if("object"!==i(t))throw new Error("Invalid method");var e=t=s(s({},this.__option),t),n=e.name,o=e.level,u=e.timeFormat,a=e.output,c=e.color;if("string"!=typeof n)throw new Error("Invalid method name");switch(n){case"highlight":case"setMethod":throw new Error("Method name is reserved");case"":throw new Error("Method name is empty")}if("undefined"==typeof console)return!1;if(!this.__level||o<this.__level)return this[n]=function(){},!1;var f=h().format(u),l=this.highlight(f,n,c);this[n]=a.bind.apply(a,[console].concat(r(l)))}}]),t}();t.exports=d},function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",o="day",i="week",u="month",s="quarter",a="year",c="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,u),i=n-o<0,s=e.clone().add(r+(i?-1:1),u);return+(-(r+(n-o)/(i?o-s:s-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:u,y:a,w:i,d:o,D:c,h:r,m:n,s:e,ms:t,Q:s}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",m={};m[p]=h;var g=function(t){return t instanceof O},$=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var o=t.name;m[o]=t,r=o}return!n&&r&&(p=r),r||!n&&p},v=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},b=y;b.l=$,b.i=g,b.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function h(t){this.$L=$(t.locale,null,!0),this.parse(t)}var d=h.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return b},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return v(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<v(t)},d.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,s){var f=this,l=!!b.u(s)||s,h=b.p(t),d=function(t,e){var n=b.w(f.$u?Date.UTC(f.$y,e,t):new Date(f.$y,e,t),f);return l?n:n.endOf(o)},y=function(t,e){return b.w(f.toDate()[t].apply(f.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),f)},p=this.$W,m=this.$M,g=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case a:return l?d(1,0):d(31,11);case u:return l?d(1,m):d(0,m+1);case i:var v=this.$locale().weekStart||0,O=(p<v?p+7:p)-v;return d(l?g-O:g+(6-O),m);case o:case c:return y($+"Hours",0);case r:return y($+"Minutes",1);case n:return y($+"Seconds",2);case e:return y($+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,s){var f,l=b.p(i),h="set"+(this.$u?"UTC":""),d=(f={},f[o]=h+"Date",f[c]=h+"Date",f[u]=h+"Month",f[a]=h+"FullYear",f[r]=h+"Hours",f[n]=h+"Minutes",f[e]=h+"Seconds",f[t]=h+"Milliseconds",f)[l],y=l===o?this.$D+(s-this.$W):s;if(l===u||l===a){var p=this.clone().set(c,1);p.$d[d](y),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](y);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[b.p(t)]()},d.add=function(t,s){var c,f=this;t=Number(t);var l=b.p(s),h=function(e){var n=v(f);return b.w(n.date(n.date()+Math.round(e*t)),f)};if(l===u)return this.set(u,this.$M+t);if(l===a)return this.set(a,this.$y+t);if(l===o)return h(1);if(l===i)return h(7);var d=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[l]||1,y=this.$d.getTime()+t*d;return b.w(y,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),o=this.$locale(),i=this.$H,u=this.$m,s=this.$M,a=o.weekdays,c=o.months,f=function(t,r,o,i){return t&&(t[r]||t(e,n))||o[r].substr(0,i)},h=function(t){return b.s(i%12||12,t,"0")},d=o.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},y={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:b.s(s+1,2,"0"),MMM:f(o.monthsShort,s,c,3),MMMM:f(c,s),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:f(o.weekdaysMin,this.$W,a,2),ddd:f(o.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(i),HH:b.s(i,2,"0"),h:h(1),hh:h(2),a:d(i,u,!0),A:d(i,u,!1),m:String(u),mm:b.s(u,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||y[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,f){var l,h=b.p(c),d=v(t),y=6e4*(d.utcOffset()-this.utcOffset()),p=this-d,m=b.m(this,d);return m=(l={},l[a]=m/12,l[u]=m,l[s]=m/3,l[i]=(p-y)/6048e5,l[o]=(p-y)/864e5,l[r]=p/36e5,l[n]=p/6e4,l[e]=p/1e3,l)[h]||p,f?m:b.a(m)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return b.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},h}(),M=O.prototype;return v.prototype=M,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",o],["$M",u],["$y",a],["$D",c]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),v.extend=function(t,e){return t(e,O,v),v},v.locale=$,v.isDayjs=g,v.unix=function(t){return v(1e3*t)},v.en=m[p],v.Ls=m,v.p={},v}()}])}));