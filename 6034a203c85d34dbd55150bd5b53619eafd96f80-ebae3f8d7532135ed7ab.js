(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0mN4":function(e,t,i){"use strict";i("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,i){"use strict";i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("EK0E"),i("INYr"),i("0mN4");var n=i("TqRt");t.__esModule=!0,t.default=void 0;var a,r=n(i("PJYZ")),o=n(i("VbXa")),d=n(i("8OQS")),s=n(i("pVnL")),u=n(i("q1tI")),l=n(i("17x9")),p=function(e){var t=(0,s.default)({},e),i=t.resolutions,n=t.sizes,a=t.critical;return i&&(t.fixed=i,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=_([].concat(t.fluid))),t.fixed&&(t.fixed=_([].concat(t.fixed))),t},c=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,i=e.fixed;return f(t||i).src},f=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(c);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},g=Object.create({}),h=function(e){var t=p(e),i=m(t);return g[i]||!1},x="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,w=b&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,i=e.srcSet,n=e.srcSetWebp,a=e.media,r=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:r}),u.default.createElement("source",{media:a,srcSet:i,sizes:r}))}))}function _(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function S(e){return e.map((function(e){var t=e.src,i=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:i,srcSet:n})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:i,srcSet:n})}))}function C(e,t){var i=e.srcSet,n=e.srcSetWebp,a=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:i)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var N=function(e,t){var i=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return i&&(i.observe(e),y.set(e,t)),function(){i.unobserve(e),y.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+u+o+d+i+n+t+r+a+s+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=u.default.forwardRef((function(e,t){var i=e.src,n=e.imageVariants,a=e.generateSources,r=e.spreadProps,o=e.ariaHidden,d=u.default.createElement(z,(0,s.default)({ref:t,src:i},r,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,a(n),d):d})),z=u.default.forwardRef((function(e,t){var i=e.sizes,n=e.srcSet,a=e.src,r=e.style,o=e.onLoad,l=e.onError,p=e.loading,c=e.draggable,m=e.ariaHidden,f=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:i,srcSet:n,src:a},f,{onLoad:o,onError:l,ref:t,loading:p,draggable:c,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));z.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var L=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=b&&h(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!x&&w&&!i.isCritical&&!i.seenBefore;var n=i.isCritical||b&&(x||!i.useIOSupport);return i.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=u.default.createRef(),i.placeholderRef=t.placeholderRef||u.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)(i)),i.handleRef=i.handleRef.bind((0,r.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=p(e),i=m(t),g[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=p(this.props),t=e.title,i=e.alt,n=e.className,a=e.style,r=void 0===a?{}:a,o=e.imgStyle,d=void 0===o?{}:o,l=e.placeholderStyle,c=void 0===l?{}:l,m=e.placeholderClassName,g=e.fluid,h=e.fixed,x=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,y=e.itemProp,_=e.loading,C=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,s.default)({opacity:N?1:0,transition:L?"opacity "+b+"ms":"none"},d),R="boolean"==typeof x?"lightgray":x,k={transitionDelay:b+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&k,d,c),W={title:t,alt:this.state.isVisible?"":i,style:V,className:m,itemProp:y};if(g){var j=g,H=f(g);return u.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},u.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),R&&u.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&k)}),H.base64&&u.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:W,imageVariants:j,generateSources:I}),H.tracedSVG&&u.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:W,imageVariants:j,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,v(j),u.default.createElement(z,{alt:i,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:_,draggable:C})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,s.default)({alt:i,title:t,loading:_},H,{imageVariants:j}))}}))}if(h){var q=h,P=f(h),M=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},r);return"inherit"===r.display&&delete M.display,u.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},R&&u.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:R,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},L&&k)}),P.base64&&u.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:q,generateSources:I}),P.tracedSVG&&u.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:q,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,v(q),u.default.createElement(z,{alt:i,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:_,draggable:C})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,s.default)({alt:i,title:t,loading:_},P,{imageVariants:q}))}}))}return null},t}(u.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),R=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});L.propTypes={resolutions:O,sizes:R,fixed:l.default.oneOfType([O,l.default.arrayOf(O)]),fluid:l.default.oneOfType([R,l.default.arrayOf(R)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var k=L;t.default=k},EK0E:function(e,t,i){"use strict";var n,a=i("dyZX"),r=i("CkkT")(0),o=i("KroJ"),d=i("Z6vF"),s=i("czNK"),u=i("ZD67"),l=i("0/R4"),p=i("s5qY"),c=i("s5qY"),m=!a.ActiveXObject&&"ActiveXObject"in a,f=d.getWeak,g=Object.isExtensible,h=u.ufstore,x=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(l(e)){var t=f(e);return!0===t?h(p(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return u.def(p(this,"WeakMap"),e,t)}},w=e.exports=i("4LiD")("WeakMap",x,b,u,!0,!0);c&&m&&(s((n=u.getConstructor(x,"WeakMap")).prototype,b),d.NEED=!0,r(["delete","has","get","set"],(function(e){var t=w.prototype,i=t[e];o(t,e,(function(t,a){if(l(t)&&!g(t)){this._f||(this._f=new n);var r=this._f[e](t,a);return"set"==e?this:r}return i.call(this,t,a)}))})))},INYr:function(e,t,i){"use strict";var n=i("XKFU"),a=i("CkkT")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("nGyu")(r)},ZD67:function(e,t,i){"use strict";var n=i("3Lyj"),a=i("Z6vF").getWeak,r=i("y3w9"),o=i("0/R4"),d=i("9gX7"),s=i("SlkY"),u=i("CkkT"),l=i("aagx"),p=i("s5qY"),c=u(5),m=u(6),f=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},x=function(e,t){return c(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=x(this,e);if(t)return t[1]},has:function(e){return!!x(this,e)},set:function(e,t){var i=x(this,e);i?i[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,i,r){var u=e((function(e,n){d(e,u,t,"_i"),e._t=t,e._i=f++,e._l=void 0,null!=n&&s(n,i,e[r],e)}));return n(u.prototype,{delete:function(e){if(!o(e))return!1;var i=a(e);return!0===i?g(p(this,t)).delete(e):i&&l(i,this._i)&&delete i[this._i]},has:function(e){if(!o(e))return!1;var i=a(e);return!0===i?g(p(this,t)).has(e):i&&l(i,this._i)}}),u},def:function(e,t,i){var n=a(r(t),!0);return!0===n?g(e).set(t,i):n[e._i]=i,e},ufstore:g}},oFNA:function(e,t,i){"use strict";i.d(t,"D",(function(){return d})),i.d(t,"C",(function(){return s})),i.d(t,"g",(function(){return u})),i.d(t,"k",(function(){return l})),i.d(t,"l",(function(){return p})),i.d(t,"n",(function(){return c})),i.d(t,"p",(function(){return m})),i.d(t,"o",(function(){return f})),i.d(t,"q",(function(){return g})),i.d(t,"s",(function(){return h})),i.d(t,"r",(function(){return x})),i.d(t,"h",(function(){return b})),i.d(t,"v",(function(){return w})),i.d(t,"x",(function(){return y})),i.d(t,"w",(function(){return v})),i.d(t,"y",(function(){return _})),i.d(t,"A",(function(){return S})),i.d(t,"z",(function(){return I})),i.d(t,"i",(function(){return C})),i.d(t,"t",(function(){return N})),i.d(t,"u",(function(){return E})),i.d(t,"e",(function(){return T})),i.d(t,"d",(function(){return z})),i.d(t,"j",(function(){return L})),i.d(t,"m",(function(){return O})),i.d(t,"f",(function(){return R})),i.d(t,"B",(function(){return k})),i.d(t,"c",(function(){return V})),i.d(t,"b",(function(){return W})),i.d(t,"a",(function(){return j}));var n=i("vOnD"),a=i("Wbzz"),r=i("9eSz"),o=i.n(r),d=n.b.div.withConfig({displayName:"styled-components__Wrapper",componentId:"botru1-0"})(["@media (max-width:599px){column-gap:18px;}display:grid;column-gap:31px;row-gap:0;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;overflow:hidden;}"]),s=n.b.div.withConfig({displayName:"styled-components__Welcome",componentId:"botru1-1"})(["grid-column:span 12;"]),u=n.b.div.withConfig({displayName:"styled-components__Section1",componentId:"botru1-2"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){grid-column:span 12;}display:grid;column-gap:31px;row-gap:0;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;grid-column:span 12;"]),l=n.b.h1.withConfig({displayName:"styled-components__Subtitle",componentId:"botru1-3"})(["grid-column:1 / -1;font-size:30px;line-height:36px;color:",";font-style:italic;padding:8px 0;border-top:5px solid ",";border-bottom:1px solid ",";"],(function(e){return e.theme.accent}),(function(e){return e.theme.main}),(function(e){return e.theme.main})),p=n.b.h1.withConfig({displayName:"styled-components__Subtitle2",componentId:"botru1-4"})(["@media (min-width:960px) and (max-width:1279px){grid-column:span 4;grid-template-columns:1fr;margin-bottom:0px;}grid-column:1 / -1;font-size:30px;line-height:36px;color:",";font-style:italic;padding:8px 0;border-top:5px solid ",";border-bottom:1px solid ",";"],(function(e){return e.theme.accent}),(function(e){return e.theme.main}),(function(e){return e.theme.main})),c=n.b.div.withConfig({displayName:"styled-components__Type1Container",componentId:"botru1-5"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){grid-column:span 12;}grid-area:auto/1/auto/-1;display:grid;column-gap:30px;row-gap:0;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;grid-column:span 9;"]),m=n.b.div.withConfig({displayName:"styled-components__Type1Text",componentId:"botru1-6"})(["@media (max-width:959px){grid-area:2/1/auto/-1;}grid-column:span 4;grid-row-start:1;"]),f=Object(n.b)(o.a).withConfig({displayName:"styled-components__Type1Image",componentId:"botru1-7"})(["@media (max-width:959px){grid-area:1/1/auto/-1;}grid-column:span 8;height:375px;margin-bottom:8px;"]),g=n.b.div.withConfig({displayName:"styled-components__Type2Container",componentId:"botru1-8"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){display:grid;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;grid-area:auto/1/auto/-1;grid-column:span 12;padding-top:15px;margin-top:-10px;border-top:5px solid ",";}column-gap:30px;row-gap:0;grid-column:span 3;padding-left:15px;margin-left:-15px;border-left:1px solid ",";"],(function(e){return e.theme.main}),(function(e){return e.theme.main})),h=n.b.div.withConfig({displayName:"styled-components__Type2Text",componentId:"botru1-9"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-column:span 6;grid-area:1/1/auto/-1;grid-column-start:7;}"]),x=Object(n.b)(o.a).withConfig({displayName:"styled-components__Type2Image",componentId:"botru1-10"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-column:span 6;grid-area:1/1/auto/-1;grid-column-end:7;}height:150px;margin-bottom:8px;"]),b=n.b.div.withConfig({displayName:"styled-components__Section2",componentId:"botru1-11"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){grid-column:span 12;}@media (min-width:960px){grid-column:span 8;}@media (min-width:1280px){grid-column:span 12;}display:grid;column-gap:31px;row-gap:0;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;"]),w=n.b.div.withConfig({displayName:"styled-components__Type4Container",componentId:"botru1-12"})(["@media (max-width:599px){column-gap:18px;}@media (min-width:960px) and (max-width:1279px){margin-bottom:190px;}@media (max-width:1279px){grid-column:span 12;}display:grid;column-gap:30px;row-gap:0;grid-auto-flow:row;grid-template:auto/repeat(12,1fr);grid-area:auto/1/auto/-1;grid-column:span 9;"]),y=n.b.div.withConfig({displayName:"styled-components__Type4Text",componentId:"botru1-13"})(["@media (max-width:1279px){grid-column:span 12;grid-area:2/1/auto/-1;}grid-column:span 4;"]),v=Object(n.b)(o.a).withConfig({displayName:"styled-components__Type4Image",componentId:"botru1-14"})(["@media (max-width:1279px){grid-column:span 12;grid-area:1/1/auto/-1;height:475px;}grid-column:span 8;height:375px;margin-bottom:8px;"]),_=n.b.div.withConfig({displayName:"styled-components__Type5Container",componentId:"botru1-15"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:1279px){display:grid;grid-auto-flow:row;grid-template:auto/repeat(12,1fr);grid-column:span 12;padding-top:15px;margin-top:-10px;border-top:5px solid ",";}grid-column:span 3;column-gap:30px;row-gap:0;padding-left:15px;margin-left:-15px;border-left:1px solid ",";margin-bottom:15px;"],(function(e){return e.theme.main}),(function(e){return e.theme.main})),S=n.b.div.withConfig({displayName:"styled-components__Type5Text",componentId:"botru1-16"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-column:7 / -1;grid-row-start:1;}@media (min-width:960px) and (max-width:1279px){grid-column:1 / 7;grid-row-start:1;}"]),I=Object(n.b)(o.a).withConfig({displayName:"styled-components__Type5Image",componentId:"botru1-17"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-column:1 / 7;grid-row-start:1;}@media (min-width:960px) and (max-width:1279px){grid-column:7 / -1;grid-row-start:1;}height:150px;margin-bottom:8px;"]),C=n.b.div.withConfig({displayName:"styled-components__Section3",componentId:"botru1-18"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){grid-column:span 12;}@media (min-width:960px) and (max-width:1279px){grid-column:span 4;grid-template-columns:1fr;}@media (min-width:1280px){grid-row-start:2;}display:grid;column-gap:30px;row-gap:0;grid-auto-flow:row;grid-template:auto/repeat(12,1fr);grid-column:1/-1;"]),N=n.b.div.withConfig({displayName:"styled-components__Type3aText",componentId:"botru1-19"})(["@media (max-width:599px){grid-column:span 12;border-bottom:1px solid ",";}@media (min-width:600px) and (max-width:959px){border-top:5px solid ",";}@media (min-width:960px) and (max-width:1279px){grid-column:span 4;grid-template-columns:1fr;padding:5px 5px 0;border-bottom:1px solid ",";}@media (min-width:1280px){grid-column:span 3;padding-left:15px;margin-left:-10px;border-left:1px solid ",";}grid-area:auto/1/auto/-1;grid-column:span 6;"],(function(e){return e.theme.main}),(function(e){return e.theme.main}),(function(e){return e.theme.main}),(function(e){return e.theme.main})),E=n.b.div.withConfig({displayName:"styled-components__Type3bText",componentId:"botru1-20"})(["@media (max-width:599px){grid-column:span 12;border-top:5px solid ",";}@media (min-width:600px) and (max-width:959px){grid-row-start:2;grid-column:span 6;}@media (min-width:960px) and (max-width:1279px){grid-column:span 4;grid-template-columns:1fr;padding:5px 5px 0;border-bottom:1px solid ",";margin-bottom:-1px;}@media (min-width:1280px){grid-column:span 3;padding-left:15px;margin-left:-10px;border-left:1px solid ",";}grid-area:auto/1/auto/-1;grid-column:span 6;"],(function(e){return e.theme.main}),(function(e){return e.theme.main}),(function(e){return e.theme.main})),T=n.b.h1.withConfig({displayName:"styled-components__Edition",componentId:"botru1-21"})(["@media (max-width:599px){font-size:36px;line-height:42px;}@media (min-width:600px){font-size:48px;line-height:60px;}margin:16px auto;color:",";"],(function(e){return e.theme.main})),z=n.b.h2.withConfig({displayName:"styled-components__Article",componentId:"botru1-22"})(["@media (max-width:399px){font-size:30px;line-height:36px;}font-size:36px;line-height:42px;margin:1px auto;"]),L=Object(n.b)(a.Link).withConfig({displayName:"styled-components__StyledLink",componentId:"botru1-23"})(["text-decoration:none;color:",";&:hover{text-decoration:underline;text-decoration-color:",";}"],(function(e){return e.theme.main}),(function(e){return e.theme.accent})),O=n.b.p.withConfig({displayName:"styled-components__Tag",componentId:"botru1-24"})(["font-family:Work Sans,sans serif;font-weight:500;font-size:16px;line-height:20px;color:",";margin:0px auto 4px;"],(function(e){return e.theme.tag})),R=n.b.p.withConfig({displayName:"styled-components__Excerpt",componentId:"botru1-25"})(["@media (max-width:399px){font-size:17px;line-height:24px;}margin:10px auto 15px;font-size:19px;line-height:27px;color:",";"],(function(e){return e.theme.main})),k=n.b.ul.withConfig({displayName:"styled-components__UL",componentId:"botru1-26"})(["list-style-type:none;margin:32px 0;"]),V=n.b.div.withConfig({displayName:"styled-components__ArchiveWrapper",componentId:"botru1-27"})(["display:grid;column-gap:31px;row-gap:0;grid-template:auto/repeat(2,1fr);grid-auto-flow:row;overflow:hidden;}"]),W=n.b.h1.withConfig({displayName:"styled-components__ArchiveTitle",componentId:"botru1-28"})(["@media (max-width:599px){font-size:36px;line-height:42px;}@media (min-width:600px){font-size:36px;line-height:42px;}margin:32px auto;color:",";"],(function(e){return e.theme.main})),j=n.b.h2.withConfig({displayName:"styled-components__ArchiveTag",componentId:"botru1-29"})(["@media (max-width:399px){font-size:30px;line-height:36px;}font-size:30px;line-height:36px;margin:1px auto;"])}}]);
//# sourceMappingURL=6034a203c85d34dbd55150bd5b53619eafd96f80-ebae3f8d7532135ed7ab.js.map