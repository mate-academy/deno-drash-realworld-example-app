(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{5729:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/register",function(){return t(3685)}])},9608:function(e,r,t){"use strict";var n=t(5893);t(7294);r.Z=function(e){var r=e.errors;return(0,n.jsx)("ul",{className:"error-messages",children:Object.keys(r).map((function(e){return(0,n.jsxs)("li",{children:[e,":",(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:r[e]})})]},e)}))})}},4471:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var n=t(5893),s=t(9008),a=t(7294),i=t(7954),o=t(5666),l=t.n(o),c=t(1163),u=t(9856),f=t(9608),d=t(7161),h=t(1682);function m(e,r,t,n,s,a,i){try{var o=e[a](i),l=o.value}catch(c){return void t(c)}o.done?r(l):Promise.resolve(l).then(n,s)}function v(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,s=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(l){s=!0,a=l}finally{try{n||null==o.return||o.return()}finally{if(s)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(e){var r,t=e.register,s=void 0!==t&&t,i=v(a.useState(!1),2),o=i[0],x=i[1],p=v(a.useState([]),2),g=p[0],j=p[1],N=v(a.useState(""),2),b=N[0],w=N[1],y=v(a.useState(""),2),k=y[0],_=y[1],S=v(a.useState(""),2),C=S[0],Z=S[1],E=a.useCallback((function(e){return w(e.target.value)}),[w]),P=a.useCallback((function(e){return _(e.target.value)}),[]),T=a.useCallback((function(e){return Z(e.target.value)}),[]),O=(r=l().mark((function e(r){var t,n,a,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),x(!0),e.prev=2,!s){e.next=14;break}return e.next=8,d.Z.register(b,k,C);case 8:a=e.sent,t=a.data,n=a.status,e.next=21;break;case 14:return e.next=17,d.Z.login(k,C);case 17:i=e.sent,t=i.data,n=i.status;case 21:if(200!==n&&(null===t||void 0===t?void 0:t.errors)&&j(t.errors),!(null===t||void 0===t?void 0:t.user)){e.next=26;break}return e.next=25,(0,u.uh)(t,j);case 25:c.default.push("/");case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(2),console.error(e.t0);case 31:return e.prev=31,x(!1),e.finish(31);case 34:case"end":return e.stop()}}),e,null,[[2,28,31,34]])})),function(){var e=this,t=arguments;return new Promise((function(n,s){var a=r.apply(e,t);function i(e){m(a,n,s,i,o,"next",e)}function o(e){m(a,n,s,i,o,"throw",e)}i(void 0)}))});return(0,h.hy)(O),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{errors:g}),(0,n.jsx)("form",{onSubmit:O,children:(0,n.jsxs)("fieldset",{children:[s&&(0,n.jsx)("fieldset",{className:"form-group",children:(0,n.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Username",value:b,onChange:E})}),(0,n.jsx)("fieldset",{className:"form-group",children:(0,n.jsx)("input",{className:"form-control form-control-lg",type:"email",placeholder:"Email",value:k,onChange:P})}),(0,n.jsx)("fieldset",{className:"form-group",children:(0,n.jsx)("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password",value:C,onChange:T})}),(0,n.jsx)("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:o,children:"".concat(s?"Sign up":"Sign in")})]})})]})},p=t(9139),g=function(e){var r=e.register,t=void 0!==r&&r,o=t?"Sign up":"Sign in";return function(){var e=a.useContext(h.Il).setTitle;return a.useEffect((function(){e(o)}),[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{children:(0,n.jsx)("meta",{name:"description",content:t?"Please register before login":"Please login to use fully-featured next-realworld site. (Post articles, comments, and like, follow etc.)"})}),(0,n.jsx)("div",{className:"auth-page",children:(0,n.jsx)("div",{className:"container page",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[(0,n.jsx)("h1",{className:"text-xs-center",children:o}),(0,n.jsx)("p",{className:"text-xs-center",children:(0,n.jsxs)(i.Z,{href:t?p.Z.userLogin():p.Z.userNew(),children:["".concat(t?"Have":"Need")," an account?"]})}),(0,n.jsx)(x,{register:t})]})})})})]})}}},3685:function(e,r,t){"use strict";t.r(r);var n=t(4471);r.default=(0,n.Z)({register:!0})}},function(e){e.O(0,[774,888,179],(function(){return r=5729,e(e.s=r);var r}));var r=e.O();_N_E=r}]);