(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var i,r=n(a("PJYZ")),o=n(a("VbXa")),d=n(a("8OQS")),l=n(a("pVnL")),s=n(a("q1tI")),u=n(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(w&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return f(t||a).src},f=function(e){if(w&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=m(t);return g[a]||!1},x="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,w="undefined"!=typeof window,y=w&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},n&&s.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:r}),s.default.createElement("source",{media:i,srcSet:a,sizes:r}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:n})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:n})}))}function _(e,t){var a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+s+o+d+a+n+t+r+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=s.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,i=e.generateSources,r=e.spreadProps,o=e.ariaHidden,d=s.default.createElement(L,(0,l.default)({ref:t,src:a},r,{ariaHidden:o}));return n.length>1?s.default.createElement("picture",null,i(n),d):d})),L=s.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,o=e.onLoad,u=e.onError,c=e.loading,p=e.draggable,m=e.ariaHidden,f=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:n,src:i},f,{onLoad:o,onError:u,ref:t,loading:c,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=w&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!x&&y&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||w&&(x||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=s.default.createRef(),a.placeholderRef=t.placeholderRef||s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,d=void 0===o?{}:o,u=e.placeholderStyle,p=void 0===u?{}:u,m=e.placeholderClassName,g=e.fluid,h=e.fixed,x=e.backgroundColor,w=e.durationFadeIn,y=e.Tag,b=e.itemProp,v=e.loading,_=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:C?1:0,transition:T?"opacity "+w+"ms":"none"},d),k="boolean"==typeof x?"lightgray":x,z={transitionDelay:w+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},T&&z,d,p),W={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:b};if(g){var j=g,H=f(g);return s.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},s.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),k&&s.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&z)}),H.base64&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:W,imageVariants:j,generateSources:I}),H.tracedSVG&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:W,imageVariants:j,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,E(j),s.default.createElement(L,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:v,draggable:_})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:v},H,{imageVariants:j}))}}))}if(h){var q=h,M=f(h),P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},r);return"inherit"===r.display&&delete P.display,s.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},k&&s.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},T&&z)}),M.base64&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:W,imageVariants:q,generateSources:I}),M.tracedSVG&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:W,imageVariants:q,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,E(q),s.default.createElement(L,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:v,draggable:_})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:v},M,{imageVariants:q}))}}))}return null},t}(s.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});T.propTypes={resolutions:R,sizes:k,fixed:u.default.oneOfType([R,u.default.arrayOf(R)]),fluid:u.default.oneOfType([k,u.default.arrayOf(k)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=T;t.default=z},EK0E:function(e,t,a){"use strict";var n,i=a("dyZX"),r=a("CkkT")(0),o=a("KroJ"),d=a("Z6vF"),l=a("czNK"),s=a("ZD67"),u=a("0/R4"),c=a("s5qY"),p=a("s5qY"),m=!i.ActiveXObject&&"ActiveXObject"in i,f=d.getWeak,g=Object.isExtensible,h=s.ufstore,x=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},w={get:function(e){if(u(e)){var t=f(e);return!0===t?h(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return s.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",x,w,s,!0,!0);p&&m&&(l((n=s.getConstructor(x,"WeakMap")).prototype,w),d.NEED=!0,r(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];o(t,e,(function(t,i){if(u(t)&&!g(t)){this._f||(this._f=new n);var r=this._f[e](t,i);return"set"==e?this:r}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var n=a("XKFU"),i=a("CkkT")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(r)},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return j}));var n=a("q1tI"),i=a.n(n),r=a("Bl7J"),o=a("vOnD"),d=a("Wbzz"),l=a("9eSz"),s=a.n(l),u=o.b.div.withConfig({displayName:"styled-components__Wrapper",componentId:"botru1-0"})(["@media (max-width:599px){column-gap:18px;}display:grid;column-gap:30px;row-gap:0;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;overflow:hidden;}"]),c=o.b.div.withConfig({displayName:"styled-components__Welcome",componentId:"botru1-1"})(["grid-column:span 12;"]),p=o.b.div.withConfig({displayName:"styled-components__Section1",componentId:"botru1-2"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){grid-column:span 12;}display:grid;column-gap:30px;row-gap:0;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;grid-column:span 12;"]),m=o.b.h1.withConfig({displayName:"styled-components__Subtitle",componentId:"botru1-3"})(["grid-column:1 / -1;font-size:20px;color:palevioletred;font-style:italic;padding-top:8px;border-top:1px solid #cec6b9;"]),f=o.b.h1.withConfig({displayName:"styled-components__Subtitle2",componentId:"botru1-4"})(["@media (min-width:960px) and (max-width:1279px){grid-column:span 4;grid-template-columns:1fr;}grid-column:1 / -1;font-size:20px;color:palevioletred;font-style:italic;padding-top:8px;border-top:1px solid #cec6b9;"]),g=o.b.div.withConfig({displayName:"styled-components__Type1Container",componentId:"botru1-5"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){grid-column:span 12;}grid-area:auto/1/auto/-1;display:grid;column-gap:30px;row-gap:0;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;grid-column:span 9;"]),h=o.b.div.withConfig({displayName:"styled-components__Type1Text",componentId:"botru1-6"})(["@media (max-width:959px){grid-area:2/1/auto/-1;}grid-column:span 4;grid-row-start:1;"]),x=Object(o.b)(s.a).withConfig({displayName:"styled-components__Type1Image",componentId:"botru1-7"})(["@media (max-width:959px){grid-area:1/1/auto/-1;}grid-column:span 8;height:375px;"]),w=o.b.div.withConfig({displayName:"styled-components__Type2Container",componentId:"botru1-8"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){display:grid;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;grid-area:auto/1/auto/-1;grid-column:span 12;}column-gap:30px;row-gap:0;grid-column:span 3;"]),y=o.b.div.withConfig({displayName:"styled-components__Type2Text",componentId:"botru1-9"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-column:span 6;grid-area:1/1/auto/-1;grid-column-start:7;}"]),b=Object(o.b)(s.a).withConfig({displayName:"styled-components__Type2Image",componentId:"botru1-10"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-column:span 6;grid-area:1/1/auto/-1;grid-column-end:7;}height:150px;"]),E=o.b.div.withConfig({displayName:"styled-components__Section2",componentId:"botru1-11"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){grid-column:span 12;}@media (min-width:960px){grid-column:span 8;}@media (min-width:1280px){grid-column:span 12;}display:grid;column-gap:30px;row-gap:0;grid-template:auto/repeat(12,1fr);grid-auto-flow:row;"]),v=o.b.div.withConfig({displayName:"styled-components__Type4Container",componentId:"botru1-12"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:1279px){grid-column:span 12;}display:grid;column-gap:30px;row-gap:0;grid-auto-flow:row;grid-template:auto/repeat(12,1fr);grid-area:auto/1/auto/-1;grid-column:span 9;"]),S=o.b.div.withConfig({displayName:"styled-components__Type4Text",componentId:"botru1-13"})(["@media (max-width:1279px){grid-column:span 12;grid-area:2/1/auto/-1;}grid-column:span 4;"]),I=Object(o.b)(s.a).withConfig({displayName:"styled-components__Type4Image",componentId:"botru1-14"})(["@media (max-width:1279px){grid-column:span 12;grid-area:1/1/auto/-1;height:475px;}grid-column:span 8;height:375px;"]),_=o.b.div.withConfig({displayName:"styled-components__Type5Container",componentId:"botru1-15"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:1279px){display:grid;grid-auto-flow:row;grid-template:auto/repeat(12,1fr);grid-column:span 12;}grid-column:span 3;column-gap:30px;row-gap:0;"]),C=o.b.div.withConfig({displayName:"styled-components__Type5Text",componentId:"botru1-16"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-column:7 / -1;grid-row-start:1;}@media (min-width:960px) and (max-width:1279px){grid-column:1 / 7;grid-row-start:1;}"]),N=Object(o.b)(s.a).withConfig({displayName:"styled-components__Type5Image",componentId:"botru1-17"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-column:1 / 7;grid-row-start:1;}@media (min-width:960px) and (max-width:1279px){grid-column:7 / -1;grid-row-start:1;}height:150px;"]),O=o.b.div.withConfig({displayName:"styled-components__Section3",componentId:"botru1-18"})(["@media (max-width:599px){column-gap:18px;}@media (max-width:959px){grid-column:span 12;}@media (min-width:960px) and (max-width:1279px){grid-column:span 4;grid-template-columns:1fr;}@media (min-width:1280px){grid-row-start:2;}display:grid;column-gap:30px;row-gap:0;grid-auto-flow:row;grid-template:auto/repeat(12,1fr);grid-column:1/-1;"]),L=o.b.div.withConfig({displayName:"styled-components__Type3aText",componentId:"botru1-19"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:960px) and (max-width:1279px){grid-column:span 4;grid-template-columns:1fr;}@media (min-width:1280px){grid-column:span 3;}grid-area:auto/1/auto/-1;grid-column:span 6;"]),T=o.b.div.withConfig({displayName:"styled-components__Type3bText",componentId:"botru1-20"})(["@media (max-width:599px){grid-column:span 12;}@media (min-width:600px) and (max-width:959px){grid-row-start:2;grid-column:span 6;}@media (min-width:960px) and (max-width:1279px){grid-column:span 4;grid-template-columns:1fr;}@media (min-width:1280px){grid-column:span 3;}grid-area:auto/1/auto/-1;grid-column:span 6;"]),R=o.b.h1.withConfig({displayName:"styled-components__Edition",componentId:"botru1-21"})(["@media (max-width:599px){font-size:32px;}@media (min-width:600px){font-size:42px;}color:darkOliveGreen;"]),k=o.b.h2.withConfig({displayName:"styled-components__Article",componentId:"botru1-22"})(["font-size:30px;margin-top:12px;color:darkOliveGreen;"]),z=Object(o.b)(d.Link).withConfig({displayName:"styled-components__StyledLink",componentId:"botru1-23"})(["text-decoration:none;color:darkOliveGreen;&:hover{text-decoration:underline;}"]),V=o.b.p.withConfig({displayName:"styled-components__tag",componentId:"botru1-24"})(["font-family:Work Sans,sans serif;font-weight:500;font-size:16px;color:indianred;"]),W=a("vrFN"),j="3640241022";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return i.a.createElement(r.a,null,i.a.createElement(W.a,{title:"Home"}),i.a.createElement(u,null,i.a.createElement(c,null,i.a.createElement("div",null,i.a.createElement(R,null,t[0].node.frontmatter.title),i.a.createElement("p",null,t[0].node.htmlAst.children[0].children[0].value)))),i.a.createElement(u,null,i.a.createElement(p,null,i.a.createElement(m,null,"Highlights"),i.a.createElement(g,null,i.a.createElement(h,null,i.a.createElement(z,{to:t[1].node.fields.slug},i.a.createElement(k,null,t[1].node.frontmatter.title)),i.a.createElement("p",null,t[1].node.excerpt),i.a.createElement(V,null,t[1].node.frontmatter.tag.toUpperCase())),i.a.createElement(x,{fluid:t[1].node.frontmatter.featuredImage.childImageSharp.fluid})),i.a.createElement(w,null,i.a.createElement(b,{fluid:t[3].node.frontmatter.featuredImage.childImageSharp.fluid}),i.a.createElement(y,null,i.a.createElement(z,{to:t[3].node.fields.slug},i.a.createElement(k,null,t[3].node.frontmatter.title)),i.a.createElement("p",null,t[3].node.excerpt),i.a.createElement(V,null,t[3].node.frontmatter.tag.toUpperCase())))),i.a.createElement(E,null,i.a.createElement(m,null,"Contemplations"),i.a.createElement(v,null,i.a.createElement(S,null,i.a.createElement(z,{to:t[2].node.fields.slug},i.a.createElement(k,null,t[2].node.frontmatter.title)),i.a.createElement("p",null,t[2].node.excerpt),i.a.createElement(V,null,t[2].node.frontmatter.tag.toUpperCase())),i.a.createElement(I,{fluid:t[2].node.frontmatter.featuredImage.childImageSharp.fluid})),i.a.createElement(_,null,i.a.createElement(N,{fluid:t[4].node.frontmatter.featuredImage.childImageSharp.fluid}),i.a.createElement(C,null,i.a.createElement(z,{to:t[4].node.fields.slug},i.a.createElement(k,null,t[4].node.frontmatter.title)),i.a.createElement("p",null,t[4].node.excerpt),i.a.createElement(V,null,t[4].node.frontmatter.tag.toUpperCase())))),i.a.createElement(O,null,i.a.createElement(f,null,"Miscellaneous"),i.a.createElement(L,null,i.a.createElement(z,{to:t[5].node.fields.slug},i.a.createElement(k,null,t[5].node.frontmatter.title)),i.a.createElement("p",null,t[5].node.excerpt),i.a.createElement(V,null,t[5].node.frontmatter.tag.toUpperCase())),i.a.createElement(L,null,i.a.createElement(z,{to:t[6].node.fields.slug},i.a.createElement(k,null,t[6].node.frontmatter.title)),i.a.createElement("p",null,t[6].node.excerpt),i.a.createElement(V,null,t[6].node.frontmatter.tag.toUpperCase())),i.a.createElement(T,null,i.a.createElement(z,{to:t[7].node.fields.slug},i.a.createElement(k,null,t[7].node.frontmatter.title)),i.a.createElement("p",null,t[7].node.excerpt),i.a.createElement(V,null,t[7].node.frontmatter.tag.toUpperCase())),i.a.createElement(T,null,i.a.createElement(z,{to:t[8].node.fields.slug},i.a.createElement(k,null,t[8].node.frontmatter.title)),i.a.createElement("p",null,t[8].node.excerpt),i.a.createElement(V,null,t[8].node.frontmatter.tag.toUpperCase())))))}},ZD67:function(e,t,a){"use strict";var n=a("3Lyj"),i=a("Z6vF").getWeak,r=a("y3w9"),o=a("0/R4"),d=a("9gX7"),l=a("SlkY"),s=a("CkkT"),u=a("aagx"),c=a("s5qY"),p=s(5),m=s(6),f=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},x=function(e,t){return p(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=x(this,e);if(t)return t[1]},has:function(e){return!!x(this,e)},set:function(e,t){var a=x(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,r){var s=e((function(e,n){d(e,s,t,"_i"),e._t=t,e._i=f++,e._l=void 0,null!=n&&l(n,a,e[r],e)}));return n(s.prototype,{delete:function(e){if(!o(e))return!1;var a=i(e);return!0===a?g(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!o(e))return!1;var a=i(e);return!0===a?g(c(this,t)).has(e):a&&u(a,this._i)}}),s},def:function(e,t,a){var n=i(r(t),!0);return!0===n?g(e).set(t,a):n[e._i]=a,e},ufstore:g}}}]);
//# sourceMappingURL=component---src-pages-index-js-cf27e0546fe9ad194120.js.map