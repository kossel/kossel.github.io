(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(e,t,n){"use strict";n.r(t),n(61);var a=n(16),r=n.n(a),o=n(0),i=n.n(o),l=n(220),c=n.n(l),d=n(202),s=n(205),u=n.n(s),m=n(219),p=n(317),f=n.n(p),h=n(318),g=n.n(h);g.a.overrideThemeStyles=function(){return{html:{overflowY:"hidden"},"gatsby-resp-image-link":{boxShadow:"none",backgroundImage:"none"},"a.gatsby-resp-image-link:hover":{backgroundImage:"none"},a:{backgroundImage:"none",textShadow:"none"},"a:hover, a:active":{backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0) 1px,\n    #1ca086 1px, #1ca086 2px,\n    rgba(0, 0, 0, 0) 2px)",textShadow:"0.03em 0 #fff, -0.03em 0 #fff,\n    0 0.03em #fff, 0 -0.03em #fff,\n    0.06em 0 #fff, -0.06em 0 #fff,\n    0.09em 0 #fff, -0.09em 0 #fff,\n    0.12em 0 #fff, -0.12em 0 #fff,\n    0.15em 0 #fff, -0.15em 0 #fff"},".icon":{width:"1em",height:"1em",verticalAlign:"-0.15em",fill:"currentColor",overflow:"hidden"}}};var b=new f.a(g.a),y=b.rhythm,v=b.scale,x=n(218);n.d(t,"pageQuery",function(){return E});var w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=u()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,a=this.props.pageContext,r=a.previous,o=a.next;return i.a.createElement(m.a,{location:this.props.location},i.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},v(-.2),{display:"block",marginBottom:y(1),marginTop:y(-.5)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:y(1)}}),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r&&i.a.createElement("li",null,i.a.createElement(d.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o&&i.a.createElement("li",null,i.a.createElement(d.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))),i.a.createElement(x.a,null))},t}(i.a.Component),E=(t.default=w,"3804820323")},202:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(7),i=n.n(o),l=n(200),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(203),s=n.n(d);n.d(t,"PageRenderer",function(){return s.a});var u=n(40);n.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},203:function(e,t,n){var a;e.exports=(a=n(212))&&a.default||a},212:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),l=n(53),c=n(1),d=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},217:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/me/"},frontmatter:{date:"26 August, 2018",title:"Me"}}},{node:{fields:{slug:"/default-implementation-of-shouldcomponentunpdate/"},frontmatter:{date:"13 December, 2017",title:"Default implementation of shouldComponentUnpdate"}}},{node:{fields:{slug:"/why-call-super-or-super-props/"},frontmatter:{date:"13 December, 2017",title:"Why call super or super(props)"}}},{node:{fields:{slug:"/react-16-fragment-vs-container-divs/"},frontmatter:{date:"13 December, 2017",title:"React 16 fragment vs container divs"}}}]}}}},218:function(e,t,n){"use strict";var a=n(16),r=n.n(a),o=n(0),i=n.n(o),l=n(201),c=Object(l.b)("div",{target:"e160f0u00"})("width:100%;text-align:center;padding:16px 0;"),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c,null,i.a.createElement("small",null,"©Yichao 2018."))},t}(i.a.Component);t.a=d},219:function(e,t,n){"use strict";var a=n(16),r=n.n(a),o=n(0),i=n.n(o),l=n(7),c=n.n(l),d=n(201),s=n(209),u=(n(229),n(200)),m=n.n(u),p=Object(d.a)("width:100%;background-color:#fff;opacity:0.9;z-index:1;"),f=Object(d.b)("div",{target:"e1jn62rn0"})("margin:0 16px;padding:16px 0;border-bottom:1px solid #e2e2e2;display:flex;align-items:center;justify-content:space-between;@media (max-width:991px){padding:8px;}"),h=Object(d.b)("a",{target:"e1jn62rn1"})("width:24px;height:24px;color:black;display:inline-block;opacity:0.6;&:hover,active{background-image:none;text-shadow:none;}"),g=Object(d.b)(m.a,{target:"e1jn62rn2"})("width:24px;height:24px;box-shadow:none;text-decoration:none;color:inherit;&:hover,active{background-image:none;text-shadow:none;}"),b=Object(d.b)("svg",{target:"e1jn62rn3"})("margin-bottom:0;"),y=Object(d.b)("div",{target:"e1jn62rn4"})("position:relative;display:flex;width:120px;justify-content:space-between;"),v=Object(d.b)("svg",{target:"e1jn62rn5"})("margin-right:8px;width:24px;height:24px;"),x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:p},i.a.createElement(f,null,i.a.createElement(m.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i.a.createElement(v,{className:"icon","aria-hidden":"true"},i.a.createElement("use",{xlinkHref:"#icon-home"})),i.a.createElement("span",{style:{verticalAlign:"top"}},"Home")),i.a.createElement(y,null,i.a.createElement(g,{to:"/me"},i.a.createElement(b,{className:"icon","aria-hidden":"true"},i.a.createElement("use",{xlinkHref:"#icon-me"}))),i.a.createElement(h,{href:"https://stackoverflow.com/users/247869/yichaoz",target:"_BLANK"},i.a.createElement(b,{className:"icon","aria-hidden":"true"},i.a.createElement("use",{xlinkHref:"#icon-github"}))),i.a.createElement(h,{href:"https://github.com/kossel",target:"_BLANK"},i.a.createElement(b,{className:"icon","aria-hidden":"true"},i.a.createElement("use",{xlinkHref:"#icon-stack-overflow"}))))))},t}(i.a.Component),w=n(217),E=n(202),q=n(205),k=n.n(q),j=Object(d.b)("aside",{target:"e8p7zu0"})("width:350px;height:100vh;border-right:1px solid #e2e2e2;float:left;@media (max-width:991px){display:none;}"),z=Object(d.b)("div",{target:"e8p7zu1"})("padding:32px 16px;"),M=Object(d.b)("div",{target:"e8p7zu2"})("padding:8px 16px;"),L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(E.StaticQuery,{query:"2202010404",render:function(e){var t=k()(e,"allMarkdownRemark.edges");return t?i.a.createElement(j,null,i.a.createElement(s.Scrollbars,{autoHide:!0},i.a.createElement(z,null,t.map(function(e){var t=e.node,n=k()(t,"frontmatter.title")||t.fields.slug;return i.a.createElement(M,{key:t.fields.slug},i.a.createElement(E.Link,{style:{boxShadow:"none"},to:t.fields.slug},n))})))):i.a.createElement("div",null,"loading...")},data:w})},t}(i.a.Component),C=Object(d.b)("div",{target:"e1t7e6j30"})("height:100vh;display:flex;flex-direction:column;"),T=Object(d.b)("div",{target:"e1t7e6j31"})("padding:0 16px;margin:0 auto;max-width:800px;width:100%;flex:1;"),_=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){!function(e){var t,n='<svg><symbol id="icon-me" viewBox="0 0 1024 1024"><path d="M887.623983 958.261787l-55.851029 0c0-164.008354-132.684952-297.829176-300.272831-308.232107l0 0c-6.919597 0.48914-13.82282 1.052982-20.868283 1.052982-7.045463 0-13.948687-0.563842-20.868283-1.052982l0 0c-167.588903 10.401908-300.272831 144.223752-300.272831 308.232107l-55.851029 0c0-155.36858 101.601003-287.454898 244.122997-339.245448-95.088682-48.484248-160.346965-147.094126-160.346965-261.149788 0-161.939229 131.276882-293.216111 293.216111-293.216111s293.216111 131.276882 293.216111 293.216111c0 114.055662-65.258283 212.665541-160.346965 261.149788C786.02298 670.806889 887.623983 802.89423 887.623983 958.261787zM750.535745 357.86655c0-132.494617-107.409289-239.903905-239.903905-239.903905s-239.903905 107.409289-239.903905 239.903905 107.409289 239.903905 239.903905 239.903905S750.535745 490.361167 750.535745 357.86655z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M950.061011 562.508347l0.091074 0.044002L557.499263 124.402311c-12.186554-13.605879-28.640294-21.103644-46.342468-21.103644-17.656125 0-34.109866 7.497765-46.340421 21.103644L72.167646 562.55235c-8.231475 9.205663-7.515161 23.394826 1.555425 31.701003 4.26821 3.90596 9.606799 5.791913 14.898315 5.791913 6.046716 0 12.097526-2.469238 16.499789-7.408737l94.682429-105.653295 0 360.022657c0 37.134759 29.92966 67.352991 66.708308 67.352991l489.202785 0c36.778648 0 66.712401-30.218232 66.712401-67.352991L822.427098 486.98221l94.682429 105.653295c8.225335 9.207709 22.279423 9.925047 31.396057 1.571798C957.61915 585.856102 958.331371 571.711963 950.061011 562.508347zM600.101547 869.456205 422.211021 869.456205 422.211021 667.399279c0-12.394285 9.962909-22.451338 22.23849-22.451338l133.418662 0c12.273535 0 22.234397 10.057053 22.234397 22.451338L600.10257 869.456205zM777.998213 847.004867c0 12.392238-9.964956 22.451338-22.23849 22.451338L644.575458 869.456205 644.575458 667.399279c0-37.136805-29.92966-67.354014-66.708308-67.354014l-133.418662 0c-36.778648 0-66.710354 30.218232-66.710354 67.354014l0 202.057949-111.182218 0c-12.275581 0-22.23849-10.0591-22.23849-22.451338L244.317425 437.367209l253.495458-282.879696c3.647063-4.088108 8.40646-6.331195 13.34289-6.331195 4.937452 0 9.697873 2.243087 13.34289 6.331195l253.497505 282.879696L777.996167 847.004867z"  ></path></symbol><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M512 73.142857q119.428571 0 220.285714 58.857143T892 291.714286 950.857143 512q0 143.428571-83.714286 258T650.857143 928.571429q-15.428571 2.857143-22.857143-4t-7.428571-17.142858q0-1.714286 0.285714-43.714285t0.285714-76.857143q0-55.428571-29.714286-81.142857 32.571429-3.428571 58.571429-10.285715t53.714286-22.285714 46.285714-38 30.285714-60T792 489.142857q0-68-45.142857-117.714286 21.142857-52-4.571429-116.571428-16-5.142857-46.285714 6.285714t-52.571429 25.142857l-21.714285 13.714286q-53.142857-14.857143-109.714286-14.857143t-109.714286 14.857143q-9.142857-6.285714-24.285714-15.428571T330.285714 262.571429 281.714286 254.857143q-25.714286 64.571429-4.571429 116.571428-45.142857 49.714286-45.142857 117.714286 0 48.571429 11.714286 85.714286t30 60 46 38.285714 53.714285 22.285714 58.571429 10.285715q-22.285714 20.571429-28 58.857143-12 5.714286-25.714286 8.571428t-32.571428 2.857143-37.428572-12.285714T276.571429 728q-10.857143-18.285714-27.714286-29.714286t-28.285714-13.714285l-11.428572-1.714286q-12 0-16.571428 2.571428t-2.857143 6.571429 5.142857 8 7.428571 6.857143l4 2.857143q12.571429 5.714286 24.857143 21.714285t18 29.142858l5.714286 13.142857q7.428571 21.714286 25.142857 35.142857t38.285714 17.142857 39.714286 4 31.714286-2l13.142857-2.285714q0 21.714286 0.285714 50.571428t0.285714 31.142857q0 10.285714-7.428571 17.142858t-22.857143 4q-132.571429-44-216.285714-158.571429T73.142857 512q0-119.428571 58.857143-220.285714T291.714286 132 512 73.142857zM239.428571 703.428571q1.714286-4-4-6.857142-5.714286-1.714286-7.428571 1.142857-1.714286 4 4 6.857143 5.142857 3.428571 7.428571-1.142858z m17.714286 19.428572q4-2.857143-1.142857-9.142857-5.714286-5.142857-9.142857-1.714286-4 2.857143 1.142857 9.142857 5.714286 5.714286 9.142857 1.714286z m17.142857 25.714286q5.142857-4 0-10.857143-4.571429-7.428571-9.714285-3.428572-5.142857 2.857143 0 10.285715t9.714285 4z m24 24q4.571429-4.571429-2.285714-10.857143-6.857143-6.857143-11.428571-1.714286-5.142857 4.571429 2.285714 10.857143 6.857143 6.857143 11.428571 1.714286z m32.571429 14.285714q1.714286-6.285714-7.428572-9.142857-8.571429-2.285714-10.857142 4t7.428571 8.571428q8.571429 3.428571 10.857143-3.428571z m36 2.857143q0-7.428571-9.714286-6.285715-9.142857 0-9.142857 6.285715 0 7.428571 9.714286 6.285714 9.142857 0 9.142857-6.285714z m33.142857-5.714286q-1.142857-6.285714-10.285714-5.142857-9.142857 1.714286-8 8.571428t10.285714 4.571429 8-8z"  ></path></symbol><symbol id="icon-stack-overflow" viewBox="0 0 1024 1024"><path d="M291.146 718.288h398.715v81.788H291.146zM301.452 620.776l16.26-80.152 390.74 79.265-16.259 80.152zM351.533 433.292l35.488-73.69 359.243 173.003-35.487 73.69zM449.942 253.895l51.747-63.336 308.764 252.267-51.746 63.336zM589.167 111.406l65.88-48.467 236.278 321.165-65.88 48.467z"  ></path><path d="M774.205 884.419H209.358V641.612h-76.676v319.483h718.199V641.612h-76.676z"  ></path></symbol></svg>',a=(t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss");if(a&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(t){document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()},!1):document.attachEvent&&function(e,t){var n=e.document,a=!1,r=function(){a||(a=!0,t())};(function e(){try{n.documentElement.doScroll("left")}catch(t){return void setTimeout(e,50)}r()})(),n.onreadystatechange=function(){"complete"==n.readyState&&(n.onreadystatechange=null,r())}}(e,t)}(function(){var e,t;(e=document.createElement("div")).innerHTML=n,n=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",function(e,t){t.firstChild?function(e,t){t.parentNode.insertBefore(e,t)}(e,t.firstChild):t.appendChild(e)}(t,document.body))})}(window)},n.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(L,null),i.a.createElement(C,null,i.a.createElement(x,null),i.a.createElement(s.Scrollbars,{autoHide:!0},i.a.createElement(T,null,e))))},t}(i.a.Component);_.propTypes={children:c.a.node.isRequired},t.a=_}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-0b1da60b8b53bacfd1bd.js.map