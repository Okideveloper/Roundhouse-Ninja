(function(t){function e(e){for(var s,n,u=e[0],l=e[1],o=e[2],d=0,v=[];d<u.length;d++)n=u[d],r[n]&&v.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(v.length)v.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,u=1;u<a.length;u++){var l=a[u];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],u={name:"App"},l=u,o=a("2877"),c=Object(o["a"])(l,i,n,!1,null,null,null),d=c.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("Homepage")],1)},k=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-container"},[a("nav",{staticClass:"uk-navbar-container uk-margin",attrs:{"uk-navbar":""}},[a("div",{staticClass:"uk-navbar-center"},[a("ul",{staticClass:"uk-navbar-nav"},[a("li",{},[a("a",{staticClass:"uk-navbar-item uk-logo",attrs:{href:"/"}},[t._v("Home")])])])]),a("div",{staticClass:"uk-navbar-right"},[a("ul",{staticClass:"uk-navbar-nav"},[a("li",[a("a",{attrs:{href:"/jokes"}},[t._v("We got Jokes")])])])])])])}],m={data:function(){return{}}},f=m,b=Object(o["a"])(f,p,h,!1,null,null,null),_=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-section uk-container"},[t._m(0),a("h2",{staticClass:"uk-text-center"},[t._v("We got you!")]),a("h4",{staticClass:"uk-text-center",staticStyle:{"font-style":"italic"}},[t._v("Enter your word below")]),a("nav",{staticClass:"uk-navbar-container",attrs:{"uk-navbar":""}},[a("div",{staticClass:"uk-navbar-left"},[a("div",{staticClass:"uk-navbar-item"},[a("form",{staticClass:"uk-search uk-search-navbar",on:{submit:t.queryData}},[a("span",{attrs:{"uk-search-icon":""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"uk-search-input",attrs:{type:"search",placeholder:"Start typing..."},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})])])])]),a("div",{staticClass:"uk-container"},[a("div",{attrs:{"uk-scrollspy":"cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"}},[a("div",{staticClass:"uk-card uk-card-default",staticStyle:{"min-height":"200px"}},[t.result?a("div",{staticClass:"uk-card-body"},[a("h3",{staticClass:"uk-card-title"},[t._v(t._s(t.keyword))]),a("ul",{staticClass:"uk-list uk-list-bullet uk-list-divider"},t._l(t.result.shortdef,function(e,s){return a("li",{key:s},[t._v(t._s(e))])}),0),a("dl",{staticClass:"uk-description-list"},[t._m(1),a("dd",t._l(t.result.meta.syns,function(e,s){return a("p",{key:s,attrs:{"uk-margin":""}},t._l(e,function(e,s){return a("button",{key:s,staticClass:"uk-button uk-button-default uk-button-small uk-margin-small-left uk-margin-small-top",on:{click:function(a){return t.updateKeyword(e)}}},[t._v(t._s(e))])}),0)}),0)])]):t._e()])])]),t._m(2)])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-padding"},[a("div",{staticClass:"uk-container"},[a("h2",{staticClass:"uk-text-center"},[t._v("\n        Welcome to the site that brings you\n        "),a("br"),t._v("Knowledge and Laughter?\n      ")]),a("div",{staticStyle:{width:"50%",height:"0","padding-bottom":"89%",position:"relative"}},[a("iframe",{staticClass:"giphy-embed",staticStyle:{position:"absolute"},attrs:{src:"https://giphy.com/embed/11ahZZugJHrdLO",width:"100%",height:"100%",frameborder:"0",allowfullscreen:""}})]),a("p",[a("a",{attrs:{href:"https://giphy.com/gifs/what-the-fuck-11ahZZugJHrdLO"}},[t._v("via GIPHY")])]),a("p",[t._v("Simply enter the word you need help with and we will deliver you a list of similar words with it's meanings")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dt",[a("strong",{staticClass:"uk-margin"},[t._v("Related words")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-section uk-section-muted uk-dark uk-padding uk-margin"},[a("div",{staticClass:"uk-container"},[a("h2",{staticClass:"uk-text-center"},[t._v("Before you go...Do you know who Chuck Norris is!?"),a("br")]),t._v("\n      You do...? \n\n      "),a("div",{staticClass:"uk-offcanvas",attrs:{id:"my-id"}})]),a("div",{staticClass:"uk-text-center"},[a("div",[a("h1",[t._v("😂")]),a("div",{staticClass:"uk-animation-toggle",attrs:{tabindex:"0"}},[a("div",{staticClass:"uk-card uk-card-default uk-card-body uk-animation-shake uk-animation-reverse"},[a("button",{staticClass:"uk-button uk-button-secondary uk-button-large"},[t._v("Click here")])])])])])])}],C=a("bc3a"),w=a.n(C),x={data:function(){return{keyword:"",result:null}},methods:{queryData:function(t){t&&t.preventDefault();var e=this;if(console.log(this.keyword,"keyword"),!this.keyword)return!1;var a="https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+this.keyword+"?key=54dfb352-a9db-4150-885c-c21f3cea99ad";w.a.get(a).then(function(t){console.log(t.data[0]),e.result=t.data[0]}).catch(function(t){console.log(t,"error")})},updateKeyword:function(t){this.keyword=t,this.queryData(null)}}},j=x,O=Object(o["a"])(j,g,y,!1,null,null,null),E=O.exports,$={name:"app",components:{Navbar:_,Homepage:E}},S=$,J=Object(o["a"])(S,v,k,!1,null,null,null),T=J.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),t._m(0),a("Jokespage")],1)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"uk-navbar-container uk-navbar-transparent uk-padding-small",attrs:{"uk-navbar":""}},[a("div",{staticClass:"uk-navbar-left"},[a("ul",{staticClass:"uk-navbar-nav"},[a("li",{},[a("a",{staticClass:"uk-navbar-item uk-logo",attrs:{href:"/"}},[t._v("< Back to Result")])])])])])}],N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"uk-container"},[a("div",{staticClass:"uk-section uk-section-muted uk-dark uk-padding"},[a("div",{staticClass:"uk-container"},[a("h1",{staticClass:"uk-text-center"},[t._v("Chuck Norris Jokes")]),a("div",[a("div",[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")])])])])]),a("h3",{staticClass:"uk-text-center"},[t._v("Categories")]),a("div",{staticClass:"uk-card uk-margin"},[a("ul",{staticClass:"uk-tab",attrs:{"data-uk-tab":"{connect:'#my-id'}"}},[a("li",[a("a",{attrs:{href:""}},[t._v("Tab 1")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Tab 2")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Tab 3")])])]),a("ul",{staticClass:"uk-switcher uk-margin",attrs:{id:"my-id"}},[a("li",[a("a",{attrs:{href:"#",id:"autoplayer","data-uk-switcher-item":"next"}}),t._v("\n                  This slide contains a hidden link, that selects the next slide when clicked. The click is simulated\n                  by jacascript to mimic autoplay.\n              ")]),a("li",[t._v("Content 2")]),a("li",[t._v("Content 3")])])]),a("h3",{staticClass:"uk-text-center"},[t._v("Results")]),a("div",{staticClass:"uk-container uk-margin"},[a("div",{staticClass:"uk-card uk-card-default"},[a("div",{staticClass:"uk-card-header"},[a("div",{staticClass:"uk-grid-small uk-flex-middle",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-width-auto"},[a("img",{staticClass:"uk-border-circle",attrs:{width:"40",height:"40",src:"images/avatar.jpg"}})]),a("div",{staticClass:"uk-width-expand"},[a("h3",{staticClass:"uk-card-title uk-margin-remove-bottom"},[t._v("Title")]),a("p",{staticClass:"uk-text-meta uk-margin-remove-top"},[a("time",{attrs:{datetime:"2016-04-01T19:00"}},[t._v("April 01,\n                                  2016")])])])])]),a("div",{staticClass:"uk-card-body"},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.")])]),a("div",{staticClass:"uk-card-footer"},[a("a",{staticClass:"uk-button uk-button-text",attrs:{href:"#"}},[t._v("Read more")])])])])])])}],L={},M=Object(o["a"])(L,N,D,!1,null,null,null),R=M.exports,Z={name:"Jokes",components:{Navbar:_,Jokespage:R}},q=Z,K=Object(o["a"])(q,P,H,!1,null,null,null),W=K.exports;s["a"].config.productionTip=!1,s["a"].use(r["a"]);var A=[{path:"/",name:"Home",component:T},{path:"/jokes",name:"Jokes",component:W}];new s["a"]({el:"#app",render:function(t){return t(d)},router:new r["a"]({routes:A,mode:"history",hash:!1})})}});
//# sourceMappingURL=app.5f4eb502.js.map