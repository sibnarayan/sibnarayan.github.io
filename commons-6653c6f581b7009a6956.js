(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3OIo":function(e,t,r){e.exports=r.p+"static/headshot-18effd26acc56f05735bedf5688df8a5.jpg"},"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},"83Zx":function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("ma3e"),c=r("iNdW"),l=r("agxc"),u=r.n(l),s=function(e){var t=e.children,r=e.className;return a.a.createElement(o.Link,{to:"/",className:r+" "+u.a.logo},a.a.createElement("span",{className:u.a.glyph},a.a.createElement(i.a,null)),a.a.createElement("span",{className:u.a.logoText},t))},f=r("Wmhb"),p=r.n(f),d=function(e){var t=e.siteTitle,r=e.linkedin,n=e.github,o=e.twitter,l=e.email;return a.a.createElement("header",{className:p.a.siteHeader},a.a.createElement(s,{className:p.a.logo},t),a.a.createElement("ul",{className:p.a.socialBlock},a.a.createElement("li",null,a.a.createElement("a",{"aria-label":"LinkedIn Profile",className:p.a.socialLink,target:"_blank",rel:"noreferrer",href:r},a.a.createElement(c.a,null))),a.a.createElement("li",null,a.a.createElement("a",{"aria-label":"Github Profile",className:p.a.socialLink,target:"_blank",rel:"noreferrer",href:n},a.a.createElement(i.c,null))),a.a.createElement("li",null,a.a.createElement("a",{"aria-label":"Twitter Profile",className:p.a.socialLink,target:"_blank",rel:"noreferrer",href:o},a.a.createElement(i.d,null))),a.a.createElement("li",null,a.a.createElement("a",{"aria-label":"Email address",className:p.a.socialLink,target:"_blank",rel:"noreferrer",href:"mailto:"+l},a.a.createElement(c.b,null))),a.a.createElement("li",null,a.a.createElement("a",{"aria-label":"Download latest CV",className:p.a.socialLink,download:!0,href:"resume.pdf"},a.a.createElement(i.b,null)))))};d.defaultProps={siteTitle:""};var m=d,h=r("HLhY"),y=r.n(h),b=function(e){e.slug;var t=e.children,r=Object(o.useStaticQuery)("436878334");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:y.a.container},a.a.createElement(m,Object.assign({siteTitle:r.site.siteMetadata.title},r.site.siteMetadata.social)),a.a.createElement("main",{className:y.a.mainContent},t)))}},HLhY:function(e,t,r){e.exports={container:"base-module--container--itlZ1",mainContent:"base-module--main-content--1D8Dn"}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function l(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var o=e.attr,l=e.title,u=c(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},Wmhb:function(e,t,r){e.exports={siteHeader:"header-module--site-header--3iOby",socialBlock:"header-module--social-block--12vIj",socialLink:"header-module--social-link--2wr1C",logo:"header-module--logo--U17LV"}},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},agxc:function(e,t,r){e.exports={glyph:"logo-module--glyph--1pK4J",logoText:"logo-module--logo-text--29-X3",logo:"logo-module--logo--3SmJE"}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));var n,a,o,i,c=r("17x9"),l=r.n(c),u=r("8+s/"),s=r.n(u),f=r("ZhWT"),p=r.n(f),d=r("q1tI"),m=r.n(d),h=r("6qGY"),y=r.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",O="href",C="http-equiv",A="innerHTML",S="itemprop",k="name",j="property",x="rel",P="src",L="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",q="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",H=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),D=[T.NOSCRIPT,T.SCRIPT,T.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=$(e,T.TITLE),r=$(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,I);return t||n||void 0},J=function(e){return $(e,R)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===x&&"canonical"===e[r].toLowerCase()||l===x&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==A&&c!==E&&c!==S||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(T.BODY,n),le(T.HTML,a),ce(f,p);var d={baseTag:ue(T.BASE,r),linkTags:ue(T.LINK,o),metaTags:ue(T.META,i),noscriptTags:ue(T.NOSCRIPT,c),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(T.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===A||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(g,a,n),link:pe(T.LINK,o,n),meta:pe(T.META,i,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,l,n),style:pe(T.STYLE,u,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=s()((function(e){return{baseTag:G([O,L],e),bodyAttributes:Z(b,e),defer:$(e,M),encode:$(e,q),htmlAttributes:Z(g,e),linkTags:Q(T.LINK,[x,O],e),metaTags:Q(T.META,[k,w,C,j,S],e),noscriptTags:Q(T.NOSCRIPT,[A],e),onChangeClientState:J(e),scriptTags:Q(T.SCRIPT,[P,A],e),styleTags:Q(T.STYLE,[E],e),title:V(e),titleAttributes:Z(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return Y(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return F({},a,((t={})[n.type]=i,t.titleAttributes=F({},o),t));case T.BODY:return F({},a,{bodyAttributes:F({},o)});case T.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((r={})[n.type]=F({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("Wbzz"),c=r("3OIo"),l=r.n(c);function u(e){var t=e.description,r=e.lang,n=e.meta,c=e.title,u=e.image,s=e.excerpt,f=Object(i.useStaticQuery)("676376647").site,p=t||f.siteMetadata.author.minibio,d=""+f.siteMetadata.siteUrl+(u&&u.src||l.a),m=s||f.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+f.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:c},{property:"og:image",content:d},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:m},{name:"twitter:creator",content:f.siteMetadata.social.twitterHandle},{name:"twitter:title",content:c},{name:"twitter:description",content:p}].concat(n)})}u.defaultProps={lang:"en",meta:[],description:""},t.a=u}}]);
//# sourceMappingURL=commons-6653c6f581b7009a6956.js.map