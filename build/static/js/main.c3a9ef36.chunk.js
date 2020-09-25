(this["webpackJsonpgx-frontend"]=this["webpackJsonpgx-frontend"]||[]).push([[0],{62:function(e,t,r){e.exports=r(94)},92:function(e,t,r){},94:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(25),l=r.n(c),u=r(8),o=r(5),i=r(9),s=r.n(i),d=function(){return s.a.get("/products")},m=function(e){return s.a.get("/products/group/"+e)},p=function(){return s.a.get("/groups")},f=r(6),E=r.n(f),b=r(10),h=null,v={setToken:function(e){h="bearer ".concat(e)},pushToWatchlist:function(){var e=Object(b.a)(E.a.mark((function e(t,r){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,s.a.put("/lists/watchlist/"+r.productId,r.productId,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),pushToCollection:function(){var e=Object(b.a)(E.a.mark((function e(t,r){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,s.a.put("/lists/collection/"+r.productId,r.productId,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteFromWatchlist:function(){var e=Object(b.a)(E.a.mark((function e(t,r){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,s.a.put("/lists/watchlist/delete/"+r.productId,r.productId,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteFromCollection:function(){var e=Object(b.a)(E.a.mark((function e(t,r){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},console.log(r.productId),e.next=4,s.a.put("/lists/collection/delete/"+r.productId,r.productId,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),increment:function(){var e=Object(b.a)(E.a.mark((function e(t,r){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},console.log(r.productId),e.next=4,s.a.put("/lists/collection/increment/"+r.productId,r.productId,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),decrement:function(){var e=Object(b.a)(E.a.mark((function e(t,r){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,s.a.put("/lists/collection/decrement/"+r.productId,r.productId,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},g=function(){return s.a.get("/meta")},k=r(28),y=r(97),w=r(96),P=function(e){var t=e.show,r=e.product,n=e.handleClose;return a.a.createElement(a.a.Fragment,null,a.a.createElement(y.a,{show:t,onHide:n},a.a.createElement(y.a.Header,{closeButton:!0},a.a.createElement(y.a.Title,null,"Card Information")),a.a.createElement(y.a.Body,null,a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{rowSpan:"3"},a.a.createElement("div",{className:"product-image"},a.a.createElement("img",{src:r.imageUrl,alt:r.name}))),a.a.createElement("td",null,a.a.createElement("div",{className:"product-name"},r.name),a.a.createElement("div",{className:"product-info"},r.group?r.group.groupName:"Set Name Not Found"),a.a.createElement("div",{className:"product-info"},r.cardNumber),a.a.createElement("div",{className:"product-info"},r.cardRarity))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("div",{className:"product-info"},"Market Price: ",r.currentMarketPrice))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("a",{href:r.storeUrl},"TCGPlayer prices"))))))),a.a.createElement(y.a.Footer,null,a.a.createElement(w.a,{variant:"primary",onClick:n},"Close"))))},O=function(e){var t=e.user,r=e.products,c=e.isWatchlist,l=Object(n.useState)({key:"cardNumber",direction:"ascending"}),u=Object(o.a)(l,2),i=u[0],s=u[1],d=Object(n.useState)(!1),m=Object(o.a)(d,2),p=m[0],f=m[1],E=Object(n.useState)({}),b=Object(o.a)(E,2),h=b[0],g=b[1];if(!r)return null;var y=function(e){var t="ascending";i.key===e&&"ascending"===i.direction&&(t="descending"),s({key:e,direction:t})},w=function(e){return c||!t?null:a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return v.pushToWatchlist(t.id,e)}},"Add to Watchlist"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return v.pushToCollection(t.id,e)}},"Add to Collection"))},O=function(e){return c&&t?a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return v.deleteFromWatchlist(t.id,e)}},"Delete")):null},j=function(e){var t=e.product,r=(t.currentMarketPrice-t.previousMarketPrice).toFixed(2),n="black";return r<0?n="red":r>0&&(n="green",r="+"+r),a.a.createElement("font",{color:n},r)},C=function(e){var t=e.product,r=((t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice*100).toFixed(2),n="black";return r<0?n="red":r>0&&(n="green",r="+"+r),a.a.createElement("font",{color:n},r,"%")},M=Object(k.a)(r);if(null!==i){var x=null,N=null;M.sort((function(e,t){if("set"===i.key?(x=e.group.groupName,N=t.group.groupName):"difference"===i.key?(x=e.currentMarketPrice-e.previousMarketPrice,N=t.currentMarketPrice-t.previousMarketPrice):"percentDifference"===i.key?(x=(e.currentMarketPrice-e.previousMarketPrice)/e.previousMarketPrice,N=(t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice):(x=e[i.key],N=t[i.key]),null===x)return 1;if(null===N)return-1;var r=function(e,t){return"string"===typeof e&&"string"===typeof t?e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}):e>t?1:e<t?-1:0}(x,N);return r<0?"ascending"===i.direction?-1:1:r>0?"ascending"===i.direction?1:-1:0}))}return a.a.createElement("div",null,a.a.createElement(P,{show:p,product:h,handleClose:function(){f(!1)}}),a.a.createElement("table",{className:"price-list-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return y("name")}},"Name")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return y("set")}},"Set")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return y("cardNumber")}},"Number")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return y("currentMarketPrice")}},"Price")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return y("difference")}},"Week Change")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return y("percentDifference")}},"Week Change (%)")))),a.a.createElement("tbody",null,M.map((function(e){return a.a.createElement("tr",{key:e.productId},a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){g(e),f(!0)}},e.name)),a.a.createElement("td",null,e.group?e.group.groupName:"No set found"),a.a.createElement("td",null,e.cardNumber),a.a.createElement("td",null,e.currentMarketPrice),a.a.createElement("td",null,a.a.createElement(j,{product:e})),a.a.createElement("td",null,a.a.createElement(C,{product:e})),a.a.createElement(w,{productId:e._id}),a.a.createElement(O,{productId:e._id}))})))))},j=function(e,t){return e.groupName<t.groupName?-1:e.groupName>t.groupName?1:0},C=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),r=t[0],c=t[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),i=u[0],s=u[1],f=Object(n.useState)(2594),E=Object(o.a)(f,2),b=E[0],h=E[1],k=Object(n.useState)(null),y=Object(o.a)(k,2),w=y[0],P=y[1],C=Object(n.useState)(null),M=Object(o.a)(C,2),x=M[0],N=M[1],S=function(e){0==e?(console.log("getting all"),d().then((function(e){c(e.data)}))):m(e).then((function(e){c(e.data)}))};Object(n.useEffect)((function(){var e=window.localStorage.getItem("LoggedInGxPricesUser");if(e){var t=JSON.parse(e);P(t),v.setToken(t.token)}}),[]),Object(n.useEffect)((function(){S(2594),p().then((function(e){s(e.data.sort(j))})),g().then((function(e){return N(e.data.lastUpdated)}))}),[]);for(var I=0;I<r.length;I++)r[I].currentMarketPrice;return a.a.createElement("div",{align:"center"},a.a.createElement("h1",null,"Current Market Prices"),a.a.createElement("div",null,w?"Logged in as: "+w.username:a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),"Last updated: ",x),a.a.createElement("select",{id:"set-selector",name:"sets",value:b,onChange:function(e){return t=e.target.value,S(t),void h(t);var t}},a.a.createElement("option",{value:0,key:0},"All cards (slow!)"),i.map((function(e){return a.a.createElement("option",{value:e.groupId,key:e.groupId},e.groupName)}))),a.a.createElement(O,{user:w,products:r,isWatchlist:!1}))},M=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"FAQ"),a.a.createElement("h3",null,"What does this site have?"),a.a.createElement("p",null,"This site collates the TCGPlayer market price data for English Pok\xe9mon cards to allow for easier visibility of multiple prices at once. It also allows for users to see the general market value of their collection, or of cards that they are looking to buy in the future, and view the short-term changes of price data.",a.a.createElement("br",null),a.a.createElement("br",null),"Market price data is updated weekly, and the value for the previous week is kept to show the price/percentage difference."),a.a.createElement("h3",null,"What does this site not have?"),a.a.createElement("p",null,"This site does not contain data for",a.a.createElement("ul",null,a.a.createElement("li",null,"graded cards"),a.a.createElement("li",null,"Japanese cards"),a.a.createElement("li",null,"sealed products"),a.a.createElement("li",null,"any non-Pok\xe9mon products")),"Also, due to technical reasons we do not differentiate between reverse-holo and normal prices. For the very small handful of cards this makes a difference for, you should probably be doing your own external research anyway. This may or may not change in the future."),a.a.createElement("h3",null,"What are market prices?"),a.a.createElement("p",null,"Market prices are calculated by TCGPlayer based on the sales that take place through their platform. They serve as a good indicator as to what people are willing to pay for a card.",a.a.createElement("br",null),a.a.createElement("br",null),"Market prices do not seem to take condition into account. Generally, even more expensive modern cards will be much more available as near-mint copies, so the market price will hover around there. But for older cards, the near-mint copies will be rarer and more people will settle for lightly played or similar, having to pay a premium for near mint. So if you only want near-mint cards, market prices are more accurate for modern cards than they are for older cards."))},x={getUser:function(e){return s.a.get("/users/"+e)},registerUser:function(){var e=Object(b.a)(E.a.mark((function e(t,r){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t,password:r},e.next=3,s.a.post("/users",n);case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},N=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),r=t[0],c=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),i=u[0],s=u[1],d=Object(n.useState)(""),m=Object(o.a)(d,2),p=m[0],f=m[1],h=Object(n.useState)(!1),g=Object(o.a)(h,2),k=g[0],y=g[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("LoggedInGxPricesUser");if(e){var t=JSON.parse(e);v.setToken(t.token)}}),[]);var w=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.registerUser(r,i);case 4:e.sent,y(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f("Username already in use!");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",null,k?a.a.createElement("div",null,"Success! Log in with your new credentials."):a.a.createElement("div",null,a.a.createElement("h2",null,"New user? Register here:"),a.a.createElement("form",{onSubmit:w},a.a.createElement("div",null,"Username \xa0 ",a.a.createElement("input",{type:"text",value:r,onChange:function(e){var t=e.target;return c(t.value)}})),a.a.createElement("div",null,"Password \xa0 ",a.a.createElement("input",{type:"text",value:i,name:"Password",onChange:function(e){var t=e.target;return s(t.value)}})),a.a.createElement("div",null,a.a.createElement("p",null,p)),a.a.createElement("button",{type:"submit"},"Register"))))},S=function(e){var t=e.user,r=e.watchlistEntries,c=Object(n.useState)({key:"cardNumber",direction:"ascending"}),l=Object(o.a)(c,2),u=l[0],i=l[1],s=Object(n.useState)(!1),d=Object(o.a)(s,2),m=d[0],p=d[1],f=Object(n.useState)({}),E=Object(o.a)(f,2),b=E[0],h=E[1];if(!r)return null;if(0==r.length)return a.a.createElement("div",null,'You have nothing in your watchlist! Add items from the "Prices" page.');var g=function(e){var t="ascending";u.key===e&&"ascending"===u.direction&&(t="descending"),i({key:e,direction:t})},y=function(e){return t?a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return v.deleteFromWatchlist(t.id,e)}},"Delete")):null},w=function(e){var t=e.product,r=(t.currentMarketPrice-t.previousMarketPrice).toFixed(2),n="black";return r<0?n="red":r>0&&(n="green",r="+"+r),a.a.createElement("font",{color:n},r)},O=function(e){var t=e.product,r=((t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice*100).toFixed(2),n="black";return r<0?n="red":r>0&&(n="green",r="+"+r),a.a.createElement("font",{color:n},r,"%")},j=Object(k.a)(r);if(null!==u){var C=null,M=null;j.sort((function(e,t){var r=e.product,n=t.product;if("set"===u.key?(C=e.product.group.groupName,M=t.product.group.groupName):"difference"===u.key?(C=r.currentMarketPrice-r.previousMarketPrice,M=n.currentMarketPrice-n.previousMarketPrice):"percentDifference"===u.key?(C=(r.currentMarketPrice-r.previousMarketPrice)/r.previousMarketPrice,M=(n.currentMarketPrice-n.previousMarketPrice)/n.previousMarketPrice):(C=r[u.key],M=n[u.key]),null===C)return 1;if(null===M)return-1;var a=function(e,t){return"string"===typeof e&&"string"===typeof t?e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}):e>t?1:e<t?-1:0}(C,M);return a<0?"ascending"===u.direction?-1:1:a>0?"ascending"===u.direction?1:-1:0}))}return a.a.createElement("div",null,a.a.createElement(P,{product:b,show:m,handleClose:function(){p(!1)}}),a.a.createElement("table",{class:"price-list-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("name")}},"Name")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("set")}},"Set")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("cardNumber")}},"Number")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("currentMarketPrice")}},"Price")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("difference")}},"Week Change")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return g("percentDifference")}},"Week Change (%)")),a.a.createElement("th",null,"Quantity"),a.a.createElement("th",null))),a.a.createElement("tbody",null,j.map((function(e){return a.a.createElement("tr",{key:e.product.productId},a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){h(e.product),p(!0)}},e.product.name)),a.a.createElement("td",null,e.product.group.groupName),a.a.createElement("td",null,e.product.cardNumber),a.a.createElement("td",null,e.product.currentMarketPrice),a.a.createElement("td",null,a.a.createElement(w,{product:e.product})),a.a.createElement("td",null,a.a.createElement(O,{product:e.product})),a.a.createElement("td",null,e.quantity),a.a.createElement(y,{productId:e.product._id}))})))))},I=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),r=t[0],c=t[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),i=u[0],s=u[1];Object(n.useEffect)((function(){var e,t=window.localStorage.getItem("LoggedInGxPricesUser");if(t){var r=JSON.parse(t);c(r),e=r.id,x.getUser(e).then((function(e){s(e.data.watchlist)})),v.setToken(r.token)}}),[]);return a.a.createElement("div",{align:"center"},a.a.createElement("h1",null,"Watchlist"),r?a.a.createElement(S,{user:r,watchlistEntries:i}):a.a.createElement("div",null,"Log in first to see your watchlist! If you just logged in, reload the page."))},T=function(e){var t=e.user,r=Object(n.useState)({key:"cardNumber",direction:"ascending"}),c=Object(o.a)(r,2),l=c[0],u=c[1],i=Object(n.useState)(!1),s=Object(o.a)(i,2),d=s[0],m=s[1],p=Object(n.useState)({}),f=Object(o.a)(p,2),h=f[0],g=f[1],y=Object(n.useState)([]),w=Object(o.a)(y,2),O=w[0],j=w[1],C=function(e){x.getUser(e).then((function(e){j(e.data.ownedProducts)}))};if(Object(n.useEffect)((function(){C(t.id)}),[]),!O)return null;if(0==O.length)return a.a.createElement("div",null,'You have nothing in your collection! Add items from the "Prices" page.');var M=function(e){var t="ascending";l.key===e&&"ascending"===l.direction&&(t="descending"),u({key:e,direction:t})},N=function(e){return t?a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return F(e)}},"Delete")):null},S=function(e){return t?a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return I(e)}},"^"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return T(e)}},"v")):null},I=function(){var e=Object(b.a)(E.a.mark((function e(r){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,v.increment(t.id,r);case 4:C(t.id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(E.a.mark((function e(r){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,v.decrement(t.id,r);case 4:C(t.id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(E.a.mark((function e(r){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,v.deleteFromCollection(t.id,r);case 4:C(t.id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=e.product;if(!t)return null;var r=(t.currentMarketPrice-t.previousMarketPrice).toFixed(2),n="black";return r<0?n="red":r>0&&(n="green",r="+"+r),a.a.createElement("font",{color:n},r)},U=function(e){var t=e.product;if(!t)return null;var r=((t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice*100).toFixed(2),n="black";return r<0?n="red":r>0&&(n="green",r="+"+r),a.a.createElement("font",{color:n},r,"%")},W=function(e){var t=e.value.toFixed(2),r="black";return t<0?r="red":t>0&&(r="green",t="+"+t),a.a.createElement("font",{color:r},t)},A=function(e){var t=e.value.toFixed(2),r="black";return t<0?r="red":t>0&&(r="green",t="+"+t),a.a.createElement("font",{color:r},t,"%")},G=Object(k.a)(O);if(null!==l){var D=null,J=null;G.sort((function(e,t){var r=e.product,n=t.product;if("set"===l.key?(D=e.product.group.groupName,J=t.product.group.groupName):"difference"===l.key?(D=r.currentMarketPrice-r.previousMarketPrice,J=n.currentMarketPrice-n.previousMarketPrice):"percentDifference"===l.key?(D=(r.currentMarketPrice-r.previousMarketPrice)/r.previousMarketPrice,J=(n.currentMarketPrice-n.previousMarketPrice)/n.previousMarketPrice):(D=r[l.key],J=n[l.key]),null===D)return 1;if(null===J)return-1;var a=function(e,t){return"string"===typeof e&&"string"===typeof t?e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}):e>t?1:e<t?-1:0}(D,J);return a<0?"ascending"===l.direction?-1:1:a>0?"ascending"===l.direction?1:-1:0}))}var z=function(e){for(var t,r=0,n=0,a=0;a<e.length;a++){var c=e[a].product,l=e[a].quantity;r+=c.currentMarketPrice*l,n+=c.previousMarketPrice*l}return{totalPrice:r,netChange:t=r-n,percentageChange:t/n*100}}(G);return a.a.createElement("div",null,a.a.createElement(P,{product:h,show:d,handleClose:function(){m(!1)}}),a.a.createElement("table",{class:"price-list-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return M("name")}},"Name")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return M("set")}},"Set")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return M("cardNumber")}},"Number")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return M("currentMarketPrice")}},"Unit Price")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return M("difference")}},"Week Change")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return M("percentDifference")}},"Week Change (%)")),a.a.createElement("th",{colspan:"2"},"Quantity"),a.a.createElement("th",null))),a.a.createElement("tbody",null,G.map((function(e){return a.a.createElement("tr",{key:e.product.productId},a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){g(e.product),m(!0)}},e.product.name)),a.a.createElement("td",null,e.product.group.groupName),a.a.createElement("td",null,e.product.cardNumber),a.a.createElement("td",null,e.product.currentMarketPrice),a.a.createElement("td",null,a.a.createElement(L,{product:e.product})),a.a.createElement("td",null,a.a.createElement(U,{product:e.product})),a.a.createElement("td",null,e.quantity),a.a.createElement(S,{productId:e.product._id}),a.a.createElement(N,{productId:e.product._id}))})),a.a.createElement("tr",{key:0},a.a.createElement("td",{colspan:"3"},"Totals"),a.a.createElement("td",null,z.totalPrice.toFixed(2)),a.a.createElement("td",null,a.a.createElement(W,{value:z.netChange})),a.a.createElement("td",null,a.a.createElement(A,{value:z.percentageChange}))))))},F=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),r=t[0],c=t[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),i=u[0],s=u[1];Object(n.useEffect)((function(){var e,t=window.localStorage.getItem("LoggedInGxPricesUser");if(t){var r=JSON.parse(t);c(r),e=r.id,x.getUser(e).then((function(e){s(e.data.ownedProducts)})),v.setToken(r.token)}}),[]);return a.a.createElement("div",{align:"center"},a.a.createElement("h1",null,"Collection"),r?a.a.createElement(T,{user:r,collectionEntries:i}):a.a.createElement("div",null,"Log in first to see your collection! If you just logged in, reload the page."))},L=r(18),U=r(99),W=r(98),A=function(){var e=window.localStorage.getItem("LoggedInGxPricesUser");return e?JSON.parse(e):null},G=function(){window.localStorage.clear()},D={login:function(){var e=Object(b.a)(E.a.mark((function e(t){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/login",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),r=(t[0],t[1]),c=Object(n.useState)(""),l=Object(o.a)(c,2),u=l[0],i=l[1],s=Object(n.useState)(""),d=Object(o.a)(s,2),m=d[0],p=d[1],f=function(){var e=Object(b.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,D.login({username:u,password:m});case 4:n=e.sent,window.localStorage.setItem("LoggedInGxPricesUser",JSON.stringify(n)),v.setToken(n.token),r(n),i(""),p(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),h=A();console.log(h);var g="",k=a.a.createElement("button",{onClick:function(){return G(),void r(null)}},"Log Out");return h&&(g="Logged in as "+h.username+" "),a.a.createElement(U.a,{bg:"light",expand:"lg"},a.a.createElement(U.a.Brand,{href:"#home"},"GXPrices"),a.a.createElement(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(U.a.Collapse,{id:"basic-navbar-nav"},a.a.createElement(W.a,{className:"mr-auto"},a.a.createElement(W.a.Link,{as:L.b,to:"/"},"Prices"),a.a.createElement(W.a.Link,{as:L.b,to:"/watchlist"},"Watchlist"),a.a.createElement(W.a.Link,{as:L.b,to:"/collection"},"Collection"),h?null:a.a.createElement(W.a.Link,{as:L.b,to:"/register"},"Register"),a.a.createElement(W.a.Link,{as:L.b,to:"/faq"},"FAQ")),a.a.createElement(W.a,null,h?a.a.createElement("div",null,g,k):a.a.createElement("form",{onSubmit:f},a.a.createElement("input",{id:"username",type:"text",value:u,placeholder:"Username",name:"Username",onChange:function(e){var t=e.target;return i(t.value)}}),"\xa0",a.a.createElement("input",{id:"password",type:"text",value:m,placeholder:"Password",name:"Password",onChange:function(e){var t=e.target;return p(t.value)}}),"\xa0",a.a.createElement("button",{type:"submit"},"Log In")))))},z=function(){return a.a.createElement(U.a,{fixed:"bottom",bg:"light",expand:"lg"},a.a.createElement(U.a.Text,null,"\xa9 2020 GXPrices. Pok\xe9mon is \xa9 Nintendo 1996-2020."),a.a.createElement(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(W.a,{className:"mr-auto align-right"}),a.a.createElement(W.a,null,a.a.createElement(W.a.Link,{as:L.b,to:"/privacy"},"Privacy Policy")))},q=function(){return a.a.createElement("div",{className:"wrapper"},a.a.createElement("h1",null,"Privacy Policy"),a.a.createElement("p",null,"This site in itself does not store any data about you or your computer."),a.a.createElement("p",null,"This site will store the items you add to your collection and watchlist in its database. This data is not sold or given out to any third parties. If you delete your account this data will be automatically removed from the database."))},B=(r(92),r(93),function(){return a.a.createElement("main",null,a.a.createElement(J,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",component:C,exact:!0}),a.a.createElement(u.a,{path:"/faq",component:M}),a.a.createElement(u.a,{path:"/register",component:N}),a.a.createElement(u.a,{path:"/watchlist",component:I}),a.a.createElement(u.a,{path:"/collection",component:F}),a.a.createElement(u.a,{path:"/privacy",component:q})),a.a.createElement(z,null))});l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L.a,null,a.a.createElement(B,null))),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c3a9ef36.chunk.js.map