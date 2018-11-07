!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMarkdown=e():t.VueMarkdown=e()}(global,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e,n){var r=n(18);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n(21).default;t.exports.__inject__=function(t){o("44daa41e",r,!1,t)}},function(t,e){t.exports=require("markdown-it")},function(t,e){t.exports=require("markdown-it-emoji")},function(t,e){t.exports=require("markdown-it-sub")},function(t,e){t.exports=require("markdown-it-sup")},function(t,e){t.exports=require("markdown-it-footnote")},function(t,e){t.exports=require("markdown-it-deflist")},function(t,e){t.exports=require("markdown-it-figuresite")},function(t,e){t.exports=require("markdown-it-abbr")},function(t,e){t.exports=require("markdown-it-ins")},function(t,e){t.exports=require("markdown-it-mark")},function(t,e){t.exports=require("markdown-it-toc-and-anchor")},function(t,e){t.exports=require("markdown-it-katex")},function(t,e){t.exports=require("markdown-it-task-lists")},function(t,e){t.exports=require("markdown-it-center-text")},function(t,e){t.exports=require("twemoji")},function(t,e){t.exports=require("markdown-it-container")},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(2),s=n.n(i),a=n(3),u=n.n(a),c=n(4),l=n.n(c),d=n(5),f=n.n(d),p=n(6),h=n.n(p),m=n(7),y=n.n(m),v=n(8),_=n.n(v),b=n(9),k=n.n(b),x=n(10),g=n.n(x),w=n(11),L=n.n(w),S=n(12),C=n.n(S),j=n(13),O=n.n(j),q=n(14),$=n.n(q),A=n(15),B=n.n(A),T=n(16),E=n.n(T);var M=function(t,e,n,r,o,i,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}({md:new o.a,name:"vue-markdown",data:function(){return{sourceData:this.source}},props:{watches:{type:Array,default:function(){return["source","show","toc"]}},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:function(){return{}}},prerender:{type:Function,default:function(t){return t}},postrender:{type:Function,default:function(t){return t}}},computed:{tocLastLevelComputed:function(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render:function(t){var e=this;this.md=(new o.a).use(u.a).use(l.a).use(f.a).use(h.a).use(_.a).use(k.a).use(g.a).use(C.a,{throwOnError:!1,errorColor:" #cc0000"}).use(O.a,{enabled:this.taskLists}).use(y.a,{youtube:{width:640,height:390}}).use($.a).use(E.a,"spoiler",{render:function(t,e){var n=t[e].info.trim().match(/^spoiler\s+(.*)$/);return 1===t[e].nesting?'<span class="spoiler">'+md.utils.escapeHtml(n[1])+"\n":"</span>\n"}}),this.emoji&&this.md.use(s.a),this.md.renderer.rules.emoji=function(t,e){return B.a.parse(t[e].content,{folder:"svg",ext:".svg"})},this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=function(){return'<table class="'.concat(e.tableClass,'">\n')};var n=this.md.renderer.rules.link_open||function(t,e,n,r,o){return o.renderToken(t,e,n)};this.md.renderer.rules.link_open=function(t,r,o,i,s){return Object.keys(e.anchorAttributes).map(function(n){var o=t[r].attrIndex(n),i=e.anchorAttributes[n];o<0?t[r].attrPush([n,i]):t[r].attrs[o][1]=i}),n(t,r,o,i,s)},this.toc&&this.md.use(L.a,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:function(t,n,r){r&&(e.tocId&&document.getElementById(e.tocId)&&(document.getElementById(e.tocId).innerHTML=r),e.$emit("toc-rendered",r))}});var r=this.show?this.md.render(this.prerender(this.sourceData)):"";return r=this.postrender(r),this.$emit("rendered",r),t("div",{domProps:{innerHTML:r}})},beforeMount:function(){var t=this;if(this.$slots.default){this.sourceData="";var e=!0,n=!1,r=void 0;try{for(var o,i=this.$slots.default[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var s=o.value;this.sourceData+=s.text}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}this.$watch("source",function(){t.sourceData=t.prerender(t.source),t.$forceUpdate()}),this.watches.forEach(function(e){t.$watch(e,function(){t.$forceUpdate()})})}},void 0,void 0,!1,function(t){var e=n(17);e.__inject__&&e.__inject__(t)},null,"3892a7b9");M.options.__file="src/VueMarkdown.vue";var P=M.exports,N={install:function(t){t.component("vue-markdown",P)},VueMarkdownComponent:P};e.default=N},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var i=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,o=0;o<r.length;o++){var i=r[o],s=i.media||"default",a=t[s];a?a.ids.indexOf(i.id)<0&&(a.ids.push(i.id),a.css+="\n"+i.css):t[s]={ids:[i.id],css:i.css,media:i.media}}}(i,e):function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,o=0;o<r.length;o++){var i=r[o];t[i.id]={ids:[i.id],css:i.css,media:i.media}}}(i,e)}}function o(t){var e="";for(var n in t){var r=t[n];e+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return r})}])});