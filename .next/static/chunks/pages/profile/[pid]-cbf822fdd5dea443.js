(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{2342:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[pid]",function(){return s(5212)}])},8302:function(e,n,s){"use strict";s.d(n,{n:function(){return a}});var i=s(5893),t=s(7294),r=s(1163),l=s(7161),o=s(5014),a=t.createContext(void 0);n.Z=function(e){var n=e.profile,s=(0,o.Z)(),c=t.useContext(a),u=c.following,d=c.setFollowing,f=n.username,v=s&&f===(null===s||void 0===s?void 0:s.username);if(s&&v)return null;return(0,i.jsxs)("button",{className:"btn btn-sm action-btn ".concat(u?"btn-secondary":"btn-outline-secondary"),onClick:function(e){e.preventDefault(),s?(u?l.Z.unfollow(f):l.Z.follow(f),d(!u)):r.default.push("/user/login")},children:[(0,i.jsx)("i",{className:"ion-plus-round"})," \xa0"," ",u?"Unfollow":"Follow"," ",f]})}},1343:function(e,n,s){"use strict";s.d(n,{Z:function(){return w}});var i=s(5893),t=s(1163),r=s(7294),l=s(9505),o=s(3923),a=s(7954),c=s(297),u=s(9435),d=s(6209),f=s(9139),v=function(e){var n=e.isCurrentUser;return(0,i.jsx)(d.Z,{test:n,children:(0,i.jsxs)(a.Z,{href:f.Z.userEdit(),className:"btn btn-sm btn-outline-secondary action-btn",children:[(0,i.jsx)("i",{className:"ion-gear-a"})," Edit Profile Settings"]})})},m=s(8302),h=s(8751),x=s(842),j=s(5014),p=s(1682);function N(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=[],i=!0,t=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(i=(l=o.next()).done)&&(s.push(l.value),!n||s.length!==n);i=!0);}catch(a){t=!0,r=a}finally{try{i||null==o.return||o.return()}finally{if(t)throw r}}return s}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){return function(n){var s=n.profile,d=n.articles,w=n.articlesCount,g=N(r.useState(0),2),Z=g[0],b=g[1],_=(0,t.useRouter)(),y=(0,l.ZP)("".concat(x.apiPath,"/profiles/").concat(null===s||void 0===s?void 0:s.username),(0,h.Z)(_.isFallback)).data;void 0!==y&&(s=y.profile);var C=null===s||void 0===s?void 0:s.username,k=null===s||void 0===s?void 0:s.bio,E=null===s||void 0===s?void 0:s.image,P=(0,j.Z)(),F=P&&C===(null===P||void 0===P?void 0:P.username),U=N(r.useState(!1),2),S=U[0],I=U[1];r.useEffect((function(){I(null===s||void 0===s?void 0:s.following)}),[null===s||void 0===s?void 0:s.following]);var T=r.useContext(p.Il).setTitle;return r.useEffect((function(){T(C)}),[T,C]),_.isFallback?(0,i.jsx)(u.Z,{}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"profile-page",children:[(0,i.jsx)("div",{className:"user-info",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,i.jsx)(c.Z,{src:E,alt:"User's profile image",className:"user-img"}),(0,i.jsx)("h4",{children:C}),(0,i.jsx)("p",{children:k}),(0,i.jsx)(v,{isCurrentUser:F}),(0,i.jsx)(m.n.Provider,{value:{following:S,setFollowing:I},children:(0,i.jsx)(m.Z,{profile:s})})]})})})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,i.jsx)("div",{className:"articles-toggle",children:(0,i.jsxs)("ul",{className:"nav nav-pills outline-active",children:[(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(a.Z,{href:f.Z.userView(encodeURIComponent(C)),className:"nav-link".concat("my-posts"===e?" active":""),children:"My Posts"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(a.Z,{href:f.Z.userViewLikes(encodeURIComponent(C)),className:"nav-link".concat("favorites"===e?" active":""),children:"Favorited Posts"})})]})}),(0,i.jsx)(o.Z,{articles:d,articlesCount:w,loggedInUser:P,page:Z,setPage:b,ssr:!1,what:e})]})})})]})})}}},5212:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return t}});var i=(0,s(1343).Z)("my-posts"),t=!0;n.default=i}},function(e){e.O(0,[126,774,888,179],(function(){return n=2342,e(e.s=n);var n}));var n=e.O();_N_E=n}]);