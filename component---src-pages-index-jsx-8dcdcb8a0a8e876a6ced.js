(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});var r=n(20),a=n.n(r),i=n(0),o=n.n(i),l=n(237),c=n(240),u=n.n(c),s=n(256),d=n.n(s),p=n(255),m=n(254),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.site.siteMetadata.description"),n=u()(this,"props.data.allMarkdownRemark.edges");return o.a.createElement(p.a,{location:this.props.location},o.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),n.map(function(e){var t=e.node,n=u()(t,"frontmatter.title")||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",null,o.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}),o.a.createElement(m.a,null))},t}(o.a.Component);t.default=f;var h="3352422197"},237:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(10),o=n.n(i),l=n(234),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(238),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(51);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),m=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},238:function(e,t,n){var r;e.exports=(r=n(246))&&r.default||r},246:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),o=n.n(i),l=n(69),c=n(1),u=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return a.a.createElement(l.a,{location:t,pageResources:n})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},252:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/me/"},frontmatter:{date:"26 August, 2018",title:"Me"}}},{node:{fields:{slug:"/Default-implementation-of-shouldComponentUnpdate/"},frontmatter:{date:"13 December, 2017",title:"Default implementation of shouldComponentUnpdate"}}},{node:{fields:{slug:"/Why-call-super-or-super-props/"},frontmatter:{date:"13 December, 2017",title:"Why call super or super(props)"}}},{node:{fields:{slug:"/React-16-fragment-vs-container-divs/"},frontmatter:{date:"13 December, 2017",title:"React 16 fragment vs container divs"}}}]}}}},253:function(e,t,n){e.exports=n.p+"static/avatar2-3251d00057b8e62214d85ce5a80a090c.jpg"},254:function(e,t,n){"use strict";var r=n(20),a=n.n(r),i=n(235),o=n.n(i),l=n(0),c=n.n(l),u=n(236);function s(){var e=o()(["\n  width: 100%;\n  text-align: center;\n  padding: 16px 0;\n"]);return s=function(){return e},e}var d=Object(u.b)("div")(s()),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement(d,null,c.a.createElement("small",null,"©Yichao 2018."))},t}(c.a.Component);t.a=p},255:function(e,t,n){"use strict";var r=n(20),a=n.n(r),i=n(235),o=n.n(i),l=n(0),c=n.n(l),u=n(10),s=n.n(u),d=n(236),p=n(244),m=(n(265),n(234)),f=n.n(m);function h(){var e=o()(["\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  \n"]);return h=function(){return e},e}function b(){var e=o()(["\n  position: relative;\n  display: flex;\n  width: 120px;\n  justify-content: space-between;\n"]);return b=function(){return e},e}function g(){var e=o()(["\n  margin-bottom: 0;\n"]);return g=function(){return e},e}function v(){var e=o()(["\n  width: 24px;\n  height: 24px;\n  box-shadow: none;\n  text-decoration: none;\n  color: inherit;\n  &:hover, active {\n    background-image: none;\n    text-shadow: none;\n  }\n"]);return v=function(){return e},e}function y(){var e=o()(["\n  width: 24px;\n  height: 24px;\n  color: black;\n  display: inline-block;\n  opacity: 0.6;\n  &:hover, active {\n    background-image: none;\n    text-shadow: none;\n  }\n"]);return y=function(){return e},e}function x(){var e=o()(["\n  margin: 0 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid #e2e2e2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 991px) {\n    padding: 8px;\n  }\n"]);return x=function(){return e},e}function E(){var e=o()(["\n  width: 100%;\n  position: relative;\n  background-color: #fff;\n  opacity: 0.9;\n  z-index: 1;\n"]);return E=function(){return e},e}var w=Object(d.a)(E()),k=Object(d.b)("div")(x()),q=Object(d.b)("a")(y()),j=Object(d.b)(f.a)(v()),z=Object(d.b)("svg")(g()),M=Object(d.b)("div")(b()),S=Object(d.b)("svg")(h()),C=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:w},c.a.createElement(k,null,c.a.createElement(f.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},c.a.createElement(S,{className:"icon","aria-hidden":"true"},c.a.createElement("use",{xlinkHref:"#icon-home"})),c.a.createElement("span",{style:{verticalAlign:"top"}},"Home")),c.a.createElement(M,null,c.a.createElement(j,{to:"/me"},c.a.createElement(z,{className:"icon","aria-hidden":"true"},c.a.createElement("use",{xlinkHref:"#icon-me"}))),c.a.createElement(q,{href:"https://stackoverflow.com/users/247869/yichaoz",target:"_BLANK"},c.a.createElement(z,{className:"icon","aria-hidden":"true"},c.a.createElement("use",{xlinkHref:"#icon-github"}))),c.a.createElement(q,{href:"https://github.com/kossel",target:"_BLANK"},c.a.createElement(z,{className:"icon","aria-hidden":"true"},c.a.createElement("use",{xlinkHref:"#icon-stack-overflow"}))))))},t}(c.a.Component),L=n(73),O=n.n(L),T=n(252),_=n(237),P=n(240),R=n.n(P),N=n(268),H=(n(266),n(267),n(253)),B=n.n(H);function D(){var e=o()(["\n  padding: 8px 0;\n"]);return D=function(){return e},e}function A(){var e=o()(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n"]);return A=function(){return e},e}function Q(){var e=o()(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 100%;\n  background: rgb(255,255,255); /* Old browsers */\n  background: -moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%);\n  background: -webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);\n  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);\n"]);return Q=function(){return e},e}function Y(){var e=o()(["\n  margin-bottom: 0;\n  border-radius: 100%;\n  width: 80%;\n  height: 80%;\n  z-index: 1;\n"]);return Y=function(){return e},e}function G(){var e=o()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: white;\n  border-bottom: 1px solid #e2e2e2;\n  margin: 0 24px 16px 24px;\n  position: relative;\n"]);return G=function(){return e},e}var U=Object(d.b)(N.c.div)(G()),V=Object(d.a)(Y()),I=Object(d.b)("div")(Q()),J=Object(d.b)("div")(A()),K=Object(d.b)("div")(D()),W=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.shouldPin;return c.a.createElement(U,null,c.a.createElement(N.a,{to:{width:e?"64px":"100px",height:e?"64px":"100px",transform:e?"translate(-120px, 24px)":"translate(0px, 0px)"}},function(e){return c.a.createElement(J,{style:e},c.a.createElement("img",{className:V,src:B.a,alt:"Yichao"}),c.a.createElement(I,null))}),c.a.createElement(N.a,{to:{fontSize:e?"16px":"24px",transform:e?"translate(-36px, -36px)":"translate(0px, 0px)"}},function(e){return c.a.createElement(K,{style:e},c.a.createElement("strong",null,"Yichaoz"))}),c.a.createElement(N.b,{native:!0,to:{y:e?20:64,opacity:e?1:0}},function(e){var t=e.y,n=e.opacity;return c.a.createElement(N.c.span,{style:{opacity:n,position:"absolute",transform:t.interpolate(function(e){return"translateY("+e+"px)"})}},c.a.createElement("small",null,"Software Engineer"))}))},t}(c.a.PureComponent);W.defaultProps={shouldPin:!1},W.propTypes={shouldPin:s.a.bool};var F=W;function X(){var e=o()(["\n  padding: 8px 16px;\n"]);return X=function(){return e},e}function Z(){var e=o()(["\n  padding: 0 16px;\n"]);return Z=function(){return e},e}function $(){var e=o()(["\n  width: 350px;\n  height: 100vh;\n  border-right: 1px solid #e2e2e2;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  @media (max-width: 991px) {\n    display: none;\n  }\n"]);return $=function(){return e},e}var ee=Object(d.a)($()),te=Object(d.b)("div")(Z()),ne=Object(d.b)("div")(X()),re=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={bioPin:!1},n.scrollbar=null,n.handleScroll=n.handleScroll.bind(O()(O()(n))),n.handleClick=n.handleClick.bind(O()(O()(n))),n}a()(t,e);var n=t.prototype;return n.handleScroll=function(){var e=this.scrollbar.getValues().scrollTop;0===e&&this.state.bioPin?this.setState({bioPin:!1}):e>0&&!this.state.bioPin&&this.setState({bioPin:!0})},n.handleClick=function(){this.setState(function(e){return{bioPin:!e.bioPin}})},n.render=function(){var e=this;return c.a.createElement(_.StaticQuery,{query:"2202010404",render:function(t){var n=R()(t,"allMarkdownRemark.edges");return n?c.a.createElement("aside",{className:ee},c.a.createElement(F,{shouldPin:e.state.bioPin}),c.a.createElement(p.Scrollbars,{autoHide:!0,onScroll:e.handleScroll,ref:function(t){e.scrollbar=t}},c.a.createElement(te,{innerRef:function(t){e.postListRef=t}},n.map(function(e){var t=e.node,n=R()(t,"frontmatter.title")||t.fields.slug;return c.a.createElement(ne,{key:t.fields.slug},c.a.createElement(_.Link,{style:{boxShadow:"none"},to:t.fields.slug},n))})))):c.a.createElement("div",null,"loading...")},data:T})},t}(c.a.Component);function ae(){var e=o()(["\n  padding:  0 16px;\n  margin: 0 auto;\n  max-width: 800px;\n  position: relative;\n"]);return ae=function(){return e},e}function ie(){var e=o()(["\n  flex: 1;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return ie=function(){return e},e}var oe=Object(d.b)("div")(ie()),le=Object(d.b)("div")(ae()),ce=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){!function(e){var t,n='<svg><symbol id="icon-me" viewBox="0 0 1024 1024"><path d="M887.623983 958.261787l-55.851029 0c0-164.008354-132.684952-297.829176-300.272831-308.232107l0 0c-6.919597 0.48914-13.82282 1.052982-20.868283 1.052982-7.045463 0-13.948687-0.563842-20.868283-1.052982l0 0c-167.588903 10.401908-300.272831 144.223752-300.272831 308.232107l-55.851029 0c0-155.36858 101.601003-287.454898 244.122997-339.245448-95.088682-48.484248-160.346965-147.094126-160.346965-261.149788 0-161.939229 131.276882-293.216111 293.216111-293.216111s293.216111 131.276882 293.216111 293.216111c0 114.055662-65.258283 212.665541-160.346965 261.149788C786.02298 670.806889 887.623983 802.89423 887.623983 958.261787zM750.535745 357.86655c0-132.494617-107.409289-239.903905-239.903905-239.903905s-239.903905 107.409289-239.903905 239.903905 107.409289 239.903905 239.903905 239.903905S750.535745 490.361167 750.535745 357.86655z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M950.061011 562.508347l0.091074 0.044002L557.499263 124.402311c-12.186554-13.605879-28.640294-21.103644-46.342468-21.103644-17.656125 0-34.109866 7.497765-46.340421 21.103644L72.167646 562.55235c-8.231475 9.205663-7.515161 23.394826 1.555425 31.701003 4.26821 3.90596 9.606799 5.791913 14.898315 5.791913 6.046716 0 12.097526-2.469238 16.499789-7.408737l94.682429-105.653295 0 360.022657c0 37.134759 29.92966 67.352991 66.708308 67.352991l489.202785 0c36.778648 0 66.712401-30.218232 66.712401-67.352991L822.427098 486.98221l94.682429 105.653295c8.225335 9.207709 22.279423 9.925047 31.396057 1.571798C957.61915 585.856102 958.331371 571.711963 950.061011 562.508347zM600.101547 869.456205 422.211021 869.456205 422.211021 667.399279c0-12.394285 9.962909-22.451338 22.23849-22.451338l133.418662 0c12.273535 0 22.234397 10.057053 22.234397 22.451338L600.10257 869.456205zM777.998213 847.004867c0 12.392238-9.964956 22.451338-22.23849 22.451338L644.575458 869.456205 644.575458 667.399279c0-37.136805-29.92966-67.354014-66.708308-67.354014l-133.418662 0c-36.778648 0-66.710354 30.218232-66.710354 67.354014l0 202.057949-111.182218 0c-12.275581 0-22.23849-10.0591-22.23849-22.451338L244.317425 437.367209l253.495458-282.879696c3.647063-4.088108 8.40646-6.331195 13.34289-6.331195 4.937452 0 9.697873 2.243087 13.34289 6.331195l253.497505 282.879696L777.996167 847.004867z"  ></path></symbol><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M512 73.142857q119.428571 0 220.285714 58.857143T892 291.714286 950.857143 512q0 143.428571-83.714286 258T650.857143 928.571429q-15.428571 2.857143-22.857143-4t-7.428571-17.142858q0-1.714286 0.285714-43.714285t0.285714-76.857143q0-55.428571-29.714286-81.142857 32.571429-3.428571 58.571429-10.285715t53.714286-22.285714 46.285714-38 30.285714-60T792 489.142857q0-68-45.142857-117.714286 21.142857-52-4.571429-116.571428-16-5.142857-46.285714 6.285714t-52.571429 25.142857l-21.714285 13.714286q-53.142857-14.857143-109.714286-14.857143t-109.714286 14.857143q-9.142857-6.285714-24.285714-15.428571T330.285714 262.571429 281.714286 254.857143q-25.714286 64.571429-4.571429 116.571428-45.142857 49.714286-45.142857 117.714286 0 48.571429 11.714286 85.714286t30 60 46 38.285714 53.714285 22.285714 58.571429 10.285715q-22.285714 20.571429-28 58.857143-12 5.714286-25.714286 8.571428t-32.571428 2.857143-37.428572-12.285714T276.571429 728q-10.857143-18.285714-27.714286-29.714286t-28.285714-13.714285l-11.428572-1.714286q-12 0-16.571428 2.571428t-2.857143 6.571429 5.142857 8 7.428571 6.857143l4 2.857143q12.571429 5.714286 24.857143 21.714285t18 29.142858l5.714286 13.142857q7.428571 21.714286 25.142857 35.142857t38.285714 17.142857 39.714286 4 31.714286-2l13.142857-2.285714q0 21.714286 0.285714 50.571428t0.285714 31.142857q0 10.285714-7.428571 17.142858t-22.857143 4q-132.571429-44-216.285714-158.571429T73.142857 512q0-119.428571 58.857143-220.285714T291.714286 132 512 73.142857zM239.428571 703.428571q1.714286-4-4-6.857142-5.714286-1.714286-7.428571 1.142857-1.714286 4 4 6.857143 5.142857 3.428571 7.428571-1.142858z m17.714286 19.428572q4-2.857143-1.142857-9.142857-5.714286-5.142857-9.142857-1.714286-4 2.857143 1.142857 9.142857 5.714286 5.714286 9.142857 1.714286z m17.142857 25.714286q5.142857-4 0-10.857143-4.571429-7.428571-9.714285-3.428572-5.142857 2.857143 0 10.285715t9.714285 4z m24 24q4.571429-4.571429-2.285714-10.857143-6.857143-6.857143-11.428571-1.714286-5.142857 4.571429 2.285714 10.857143 6.857143 6.857143 11.428571 1.714286z m32.571429 14.285714q1.714286-6.285714-7.428572-9.142857-8.571429-2.285714-10.857142 4t7.428571 8.571428q8.571429 3.428571 10.857143-3.428571z m36 2.857143q0-7.428571-9.714286-6.285715-9.142857 0-9.142857 6.285715 0 7.428571 9.714286 6.285714 9.142857 0 9.142857-6.285714z m33.142857-5.714286q-1.142857-6.285714-10.285714-5.142857-9.142857 1.714286-8 8.571428t10.285714 4.571429 8-8z"  ></path></symbol><symbol id="icon-stack-overflow" viewBox="0 0 1024 1024"><path d="M291.146 718.288h398.715v81.788H291.146zM301.452 620.776l16.26-80.152 390.74 79.265-16.259 80.152zM351.533 433.292l35.488-73.69 359.243 173.003-35.487 73.69zM449.942 253.895l51.747-63.336 308.764 252.267-51.746 63.336zM589.167 111.406l65.88-48.467 236.278 321.165-65.88 48.467z"  ></path><path d="M774.205 884.419H209.358V641.612h-76.676v319.483h718.199V641.612h-76.676z"  ></path></symbol></svg>',r=(t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss");if(r&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(t){document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()},!1):document.attachEvent&&function(e,t){var n=e.document,r=!1,a=function(){r||(r=!0,t())};(function e(){try{n.documentElement.doScroll("left")}catch(t){return void setTimeout(e,50)}a()})(),n.onreadystatechange=function(){"complete"==n.readyState&&(n.onreadystatechange=null,a())}}(e,t)}(function(){var e,t;(e=document.createElement("div")).innerHTML=n,n=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",function(e,t){t.firstChild?function(e,t){t.parentNode.insertBefore(e,t)}(e,t.firstChild):t.appendChild(e)}(t,document.body))})}(window)},n.render=function(){var e=this.props.children;return c.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",display:"flex",position:"relative",overflowY:"hidden"}},c.a.createElement(re,null),c.a.createElement(oe,null,c.a.createElement(C,null),c.a.createElement(p.Scrollbars,{autoHide:!0},c.a.createElement(le,null,e))))},t}(c.a.Component);ce.propTypes={children:s.a.node.isRequired},t.a=ce}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8dcdcb8a0a8e876a6ced.js.map