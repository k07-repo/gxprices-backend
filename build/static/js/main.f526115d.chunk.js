(this["webpackJsonpgx-frontend"]=this["webpackJsonpgx-frontend"]||[]).push([[0],{32:function(e,t,n){e.exports=n(61)},55:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(30),l=n.n(c),u=n(11),o=n(3),i=n(1),s=n(4),d=n.n(s),m=function(){return d.a.get("/products")},p=function(e){return d.a.get("/products/group/"+e)},f=function(){return d.a.get("/groups")},E=n(2),b=n.n(E),h=n(6),k=null,v={setToken:function(e){k="bearer ".concat(e)},pushToWatchlist:function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:k}},e.next=3,d.a.put("/lists/watchlist/"+n.productId,n.productId,r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),pushToCollection:function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:k}},e.next=3,d.a.put("/lists/collection/"+n.productId,n.productId,r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteFromWatchlist:function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:k}},e.next=3,d.a.put("/lists/watchlist/delete/"+n.productId,n.productId,r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteFromCollection:function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:k}},console.log(n.productId),e.next=4,d.a.put("/lists/collection/delete/"+n.productId,n.productId,r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),increment:function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:k}},console.log(n.productId),e.next=4,d.a.put("/lists/collection/increment/"+n.productId,n.productId,r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),decrement:function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:k}},e.next=3,d.a.put("/lists/collection/decrement/"+n.productId,n.productId,r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},g=function(){return d.a.get("/meta")},y=n(13),w=function(e){var t=e.product,n=e.handleClose,r=e.show?"modal display-block":"modal display-none";return a.a.createElement("div",{className:r},a.a.createElement("section",{className:"modal-main"},a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{rowSpan:"3"},a.a.createElement("div",{className:"product-image"},a.a.createElement("img",{src:t.imageUrl,alt:t.name}))),a.a.createElement("td",null,a.a.createElement("div",{className:"product-name"},t.name),a.a.createElement("div",{className:"product-info"},t.group?t.group.groupName:"Set Name Not Found"),a.a.createElement("div",{className:"product-info"},t.cardNumber),a.a.createElement("div",{className:"product-info"},t.cardRarity))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("div",{className:"product-info"},"Market Price: ",t.currentMarketPrice))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("a",{href:t.storeUrl},"TCGPlayer prices")))))),a.a.createElement("button",{onClick:n},"close")))},P=function(e){var t=e.user,n=e.products,c=e.isWatchlist,l=Object(r.useState)({key:"cardNumber",direction:"ascending"}),u=Object(i.a)(l,2),o=u[0],s=u[1],d=Object(r.useState)(!1),m=Object(i.a)(d,2),p=m[0],f=m[1],E=Object(r.useState)({}),b=Object(i.a)(E,2),h=b[0],k=b[1];if(!n)return null;var g=function(e){var t="ascending";o.key===e&&"ascending"===o.direction&&(t="descending"),s({key:e,direction:t})},P=function(e){return c||!t?null:a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return v.pushToWatchlist(t.id,e)}},"Add to Watchlist"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return v.pushToCollection(t.id,e)}},"Add to Collection"))},O=function(e){return c&&t?a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return v.deleteFromWatchlist(t.id,e)}},"Delete")):null},j=function(e){var t=e.product,n=(t.currentMarketPrice-t.previousMarketPrice).toFixed(2),r="black";return n<0?r="red":n>0&&(r="green",n="+"+n),a.a.createElement("font",{color:r},n)},M=function(e){var t=e.product,n=((t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice*100).toFixed(2),r="black";return n<0?r="red":n>0&&(r="green",n="+"+n),a.a.createElement("font",{color:r},n,"%")},C=Object(y.a)(n);if(null!==o){var x=null,N=null;C.sort((function(e,t){if("difference"===o.key?(x=e.currentMarketPrice-e.previousMarketPrice,N=t.currentMarketPrice-t.previousMarketPrice):"percentDifference"===o.key?(x=(e.currentMarketPrice-e.previousMarketPrice)/e.previousMarketPrice,N=(t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice):(x=e[o.key],N=t[o.key]),null===x)return 1;if(null===N)return-1;var n=function(e,t){return"string"===typeof e&&"string"===typeof t?e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}):e>t?1:e<t?-1:0}(x,N);return n<0?"ascending"===o.direction?-1:1:n>0?"ascending"===o.direction?1:-1:0}))}return a.a.createElement("div",null,a.a.createElement(w,{product:h,show:p,handleClose:function(){f(!1)}}),a.a.createElement("table",{className:"price-list-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("name")}},"Name")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("cardNumber")}},"Number")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("currentMarketPrice")}},"Price")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("difference")}},"Week Change")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("percentDifference")}},"Week Change (%)")))),a.a.createElement("tbody",null,C.map((function(e){return a.a.createElement("tr",{key:e.productId},a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){k(e),f(!0)}},e.name)),a.a.createElement("td",null,e.cardNumber),a.a.createElement("td",null,e.currentMarketPrice),a.a.createElement("td",null,a.a.createElement(j,{product:e})),a.a.createElement("td",null,a.a.createElement(M,{product:e})),a.a.createElement(P,{productId:e._id}),a.a.createElement(O,{productId:e._id}))})))))},O=function(e,t){return e.groupName<t.groupName?-1:e.groupName>t.groupName?1:0},j=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)([]),u=Object(i.a)(l,2),o=u[0],s=u[1],d=Object(r.useState)(null),E=Object(i.a)(d,2),b=E[0],h=E[1],k=Object(r.useState)(null),y=Object(i.a)(k,2),w=y[0],j=y[1],M=function(e){0==e?(console.log("getting all"),m().then((function(e){c(e.data)}))):p(e).then((function(e){c(e.data)}))};Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedInGxUser");if(e){var t=JSON.parse(e);h(t),v.setToken(t.token)}}),[]),Object(r.useEffect)((function(){M(2594),f().then((function(e){s(e.data.sort(O))})),g().then((function(e){return j(e.data.lastUpdated)}))}),[]);for(var C=0;C<n.length;C++)n[C].currentMarketPrice;return a.a.createElement("div",{align:"center"},a.a.createElement("h1",null,"Current Market Prices"),a.a.createElement("div",null,b?"Logged in as: "+b.username:a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),"Last updated: ",w),a.a.createElement("select",{id:"set-selector",name:"sets",onChange:function(e){return t=e.target.value,M(t),void(document.getElementById("set-selector").value=t);var t}},o.map((function(e){return a.a.createElement("option",{value:e.groupId,key:e.groupId},e.groupName)})),a.a.createElement("option",{value:0,key:0},"All cards (slow!)")),a.a.createElement(P,{user:b,products:n,isWatchlist:!1}))},M=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"FAQ"),a.a.createElement("h3",null,"What does this site have?"),a.a.createElement("p",null,"This site collates the TCGPlayer market price data for English Pok\xe9mon cards to allow for easier visibility of multiple prices at once. It also allows for users to see the general market value of their collection, or of cards that they are looking to buy in the future, and view the short-term changes of price data.",a.a.createElement("br",null),a.a.createElement("br",null),"Market price data is updated weekly, and the value for the previous week is kept to show the price/percentage difference."),a.a.createElement("h3",null,"What does this site not have?"),a.a.createElement("p",null,"This site does not contain data for",a.a.createElement("ul",null,a.a.createElement("li",null,"graded cards"),a.a.createElement("li",null,"Japanese cards"),a.a.createElement("li",null,"sealed products"),a.a.createElement("li",null,"any non-Pok\xe9mon products")),"Also, due to technical reasons we do not differentiate between reverse-holo and normal prices. For the very small handful of cards this makes a difference for, you should probably be doing your own external research anyway. This may or may not change in the future."),a.a.createElement("h3",null,"What are market prices?"),a.a.createElement("p",null,"Market prices are calculated by TCGPlayer based on the sales that take place through their platform. They serve as a good indicator as to what people are willing to pay for a card.",a.a.createElement("br",null),a.a.createElement("br",null),"Market prices do not seem to take condition into account. Generally, even more expensive modern cards will be much more available as near-mint copies, so the market price will hover around there. But for older cards, the near-mint copies will be rarer and more people will settle for lightly played or similar, having to pay a premium for near mint. So if you only want near-mint cards, market prices are more accurate for modern cards than they are for older cards."))},C={login:function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(""),u=Object(i.a)(l,2),o=u[0],s=u[1],d=Object(r.useState)(null),m=Object(i.a)(d,2),p=m[0],f=m[1];Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedInGxUser");if(e){var t=JSON.parse(e);f(t),v.setToken(t.token)}}),[]);var E=function(){var e=Object(h.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C.login({username:n,password:o});case 4:r=e.sent,window.localStorage.setItem("loggedInGxUser",JSON.stringify(r)),v.setToken(r.token),f(r),c(""),s(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",null,p?a.a.createElement("div",null,"Logged in as ",p.username,a.a.createElement("button",{onClick:function(){return f(null),void window.localStorage.clear()}},"Logout")):a.a.createElement("form",{onSubmit:E},a.a.createElement("div",null,"username",a.a.createElement("input",{type:"text",value:n,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})),a.a.createElement("div",null,"password",a.a.createElement("input",{type:"text",value:o,name:"Password",onChange:function(e){var t=e.target;return s(t.value)}})),a.a.createElement("button",{type:"submit"},"login")))},N=function(e){return d.a.get("/users/"+e)},I=function(e){var t=e.user,n=e.watchlistEntries,c=Object(r.useState)({key:"cardNumber",direction:"ascending"}),l=Object(i.a)(c,2),u=l[0],o=l[1],s=Object(r.useState)(!1),d=Object(i.a)(s,2),m=d[0],p=d[1],f=Object(r.useState)({}),E=Object(i.a)(f,2),b=E[0],h=E[1];if(!n)return null;var k=function(e){var t="ascending";u.key===e&&"ascending"===u.direction&&(t="descending"),o({key:e,direction:t})},g=function(e){return t?a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return v.deleteFromWatchlist(t.id,e)}},"Delete")):null},P=function(e){var t=e.product,n=(t.currentMarketPrice-t.previousMarketPrice).toFixed(2),r="black";return n<0?r="red":n>0&&(r="green",n="+"+n),a.a.createElement("font",{color:r},n)},O=function(e){var t=e.product,n=((t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice*100).toFixed(2),r="black";return n<0?r="red":n>0&&(r="green",n="+"+n),a.a.createElement("font",{color:r},n,"%")},j=Object(y.a)(n);if(null!==u){var M=null,C=null;j.sort((function(e,t){if("difference"===u.key?(M=e.currentMarketPrice-e.previousMarketPrice,C=t.currentMarketPrice-t.previousMarketPrice):"percentDifference"===u.key?(M=(e.currentMarketPrice-e.previousMarketPrice)/e.previousMarketPrice,C=(t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice):(M=e[u.key],C=t[u.key]),null===M)return 1;if(null===C)return-1;var n=function(e,t){return"string"===typeof e&&"string"===typeof t?e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}):e>t?1:e<t?-1:0}(M,C);return n<0?"ascending"===u.direction?-1:1:n>0?"ascending"===u.direction?1:-1:0}))}return a.a.createElement("div",null,a.a.createElement(w,{product:b,show:m,handleClose:function(){p(!1)}}),a.a.createElement("table",{class:"price-list-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return k("name")}},"Name")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return k("cardNumber")}},"Number")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return k("currentMarketPrice")}},"Price")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return k("difference")}},"Week Change")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return k("percentDifference")}},"Week Change (%)")),a.a.createElement("th",null,"Quantity"))),a.a.createElement("tbody",null,j.map((function(e){return a.a.createElement("tr",{key:e.product.productId},a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){h(e.product),p(!0)}},e.product.name)),a.a.createElement("td",null,e.product.cardNumber),a.a.createElement("td",null,e.product.currentMarketPrice),a.a.createElement("td",null,a.a.createElement(P,{product:e.product})),a.a.createElement("td",null,a.a.createElement(O,{product:e.product})),a.a.createElement("td",null,e.quantity),a.a.createElement(g,{productId:e.product._id}))})))))},S=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)([]),u=Object(i.a)(l,2),o=u[0],s=u[1];Object(r.useEffect)((function(){var e,t=window.localStorage.getItem("loggedInGxUser");if(t){var n=JSON.parse(t);c(n),e=n.id,N(e).then((function(e){s(e.data.watchlist)})),v.setToken(n.token)}}),[]);return a.a.createElement("div",{align:"center"},a.a.createElement("h1",null,"Watchlist"),n?a.a.createElement(I,{user:n,watchlistEntries:o}):a.a.createElement("br",null))},W=function(e){var t=e.user,n=Object(r.useState)({key:"cardNumber",direction:"ascending"}),c=Object(i.a)(n,2),l=c[0],u=c[1],o=Object(r.useState)(!1),s=Object(i.a)(o,2),d=s[0],m=s[1],p=Object(r.useState)({}),f=Object(i.a)(p,2),E=f[0],k=f[1],g=Object(r.useState)([]),P=Object(i.a)(g,2),O=P[0],j=P[1];if(Object(r.useEffect)((function(){M(t.id)}),[]),!O)return null;var M=function(e){N(e).then((function(e){j(e.data.ownedProducts)}))},C=function(e){var t="ascending";l.key===e&&"ascending"===l.direction&&(t="descending"),u({key:e,direction:t})},x=function(e){return t?a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return F(e)}},"Delete")):null},I=function(e){return t?a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return S(e)}},"^"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return W(e)}},"v")):null},S=function(){var e=Object(h.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,v.increment(t.id,n);case 4:M(t.id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(h.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,v.decrement(t.id,n);case 4:M(t.id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,v.deleteFromCollection(t.id,n);case 4:M(t.id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.product;if(!t)return null;var n=(t.currentMarketPrice-t.previousMarketPrice).toFixed(2),r="black";return n<0?r="red":n>0&&(r="green",n="+"+n),a.a.createElement("font",{color:r},n)},A=function(e){var t=e.product;if(!t)return null;var n=((t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice*100).toFixed(2),r="black";return n<0?r="red":n>0&&(r="green",n="+"+n),a.a.createElement("font",{color:r},n,"%")},D=function(e){var t=e.value.toFixed(2),n="black";return t<0?n="red":t>0&&(n="green",t="+"+t),a.a.createElement("font",{color:n},t)},U=function(e){var t=e.value.toFixed(2),n="black";return t<0?n="red":t>0&&(n="green",t="+"+t),a.a.createElement("font",{color:n},t,"%")},G=Object(y.a)(O);if(null!==l){var J=null,z=null;G.sort((function(e,t){var n=e.product,r=t.product;if("difference"===l.key?(J=n.currentMarketPrice-n.previousMarketPrice,z=r.currentMarketPrice-r.previousMarketPrice):"percentDifference"===l.key?(J=(n.currentMarketPrice-n.previousMarketPrice)/n.previousMarketPrice,z=(r.currentMarketPrice-r.previousMarketPrice)/r.previousMarketPrice):(J=n[l.key],z=r[l.key]),null===J)return 1;if(null===z)return-1;var a=function(e,t){return"string"===typeof e&&"string"===typeof t?e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}):e>t?1:e<t?-1:0}(J,z);return a<0?"ascending"===l.direction?-1:1:a>0?"ascending"===l.direction?1:-1:0}))}var q=function(e){for(var t,n=0,r=0,a=0;a<e.length;a++){var c=e[a].product,l=e[a].quantity;n+=c.currentMarketPrice*l,r+=c.previousMarketPrice*l}return{totalPrice:n,netChange:t=n-r,percentageChange:t/r*100}}(G);return a.a.createElement("div",null,a.a.createElement(w,{product:E,show:d,handleClose:function(){m(!1)}}),a.a.createElement("table",{class:"price-list-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return C("name")}},"Name")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return C("cardNumber")}},"Number")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return C("currentMarketPrice")}},"Unit Price")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return C("difference")}},"Week Change")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return C("percentDifference")}},"Week Change (%)")),a.a.createElement("th",{colspan:"2"},"Quantity"))),a.a.createElement("tbody",null,G.map((function(e){return a.a.createElement("tr",{key:e.product.productId},a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){k(e.product),m(!0)}},e.product.name)),a.a.createElement("td",null,e.product.cardNumber),a.a.createElement("td",null,e.product.currentMarketPrice),a.a.createElement("td",null,a.a.createElement(T,{product:e.product})),a.a.createElement("td",null,a.a.createElement(A,{product:e.product})),a.a.createElement("td",null,e.quantity),a.a.createElement(I,{productId:e.product._id}),a.a.createElement(x,{productId:e.product._id}))})),a.a.createElement("tr",{key:0},a.a.createElement("td",{colspan:"2"},"Totals"),a.a.createElement("td",null,q.totalPrice.toFixed(2)),a.a.createElement("td",null,a.a.createElement(D,{value:q.netChange})),a.a.createElement("td",null,a.a.createElement(U,{value:q.percentageChange}))))))},F=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)([]),u=Object(i.a)(l,2),o=u[0],s=u[1];Object(r.useEffect)((function(){var e,t=window.localStorage.getItem("loggedInGxUser");if(t){var n=JSON.parse(t);c(n),e=n.id,N(e).then((function(e){s(e.data.ownedProducts)})),v.setToken(n.token)}}),[]);return a.a.createElement("div",{align:"center"},a.a.createElement("h1",null,"Collection"),n?a.a.createElement(W,{user:n,collectionEntries:o}):a.a.createElement("br",null))};n(55);var T=function(){return a.a.createElement("main",null,a.a.createElement("div",null,a.a.createElement(u.b,{to:"/"},"Prices")," \xa0",a.a.createElement(u.b,{to:"/faq"},"FAQ")," \xa0",a.a.createElement(u.b,{to:"/login"},"Login")," \xa0",a.a.createElement(u.b,{to:"/watchlist"},"Watchlist")," \xa0",a.a.createElement(u.b,{to:"/collection"},"Collection")),a.a.createElement(o.c,null,a.a.createElement(o.a,{path:"/",component:j,exact:!0}),a.a.createElement(o.a,{path:"/faq",component:M}),a.a.createElement(o.a,{path:"/login",component:x}),a.a.createElement(o.a,{path:"/watchlist",component:S}),a.a.createElement(o.a,{path:"/collection",component:F})))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,null,a.a.createElement(T,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f526115d.chunk.js.map