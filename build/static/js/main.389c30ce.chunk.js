(this["webpackJsonpgx-frontend"]=this["webpackJsonpgx-frontend"]||[]).push([[0],{151:function(e,t,r){},154:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(23),o=r.n(c),u=r(13),l=r(5),i=r.n(l),s=r(8),m=r(7),d=r(14),p=r.n(d),f=function(){return p.a.get("/products")},v=function(e){return p.a.get("/products/group/"+e)},h=function(){return p.a.get("/groups")},b=null,E={setToken:function(e){b="bearer ".concat(e)},pushToWatchlist:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:b}},e.next=3,p.a.put("/lists/"+t+"/watchlist/"+r,null,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),pushToCollection:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:b}},e.next=3,p.a.put("/lists/"+t+"/collection/"+r,null,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteFromWatchlist:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:b}},e.next=3,p.a.put("/lists/"+t+"/watchlist/delete/"+r,r,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteFromCollection:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:b}},e.next=3,p.a.put("/lists/"+t+"/collection/delete/"+r,r,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),increment:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:b}},e.next=3,p.a.put("/lists/"+t+"/collection/increment/"+r,r,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),decrement:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:b}},e.next=3,p.a.put("/lists/"+t+"/collection/decrement/"+r,r,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},g=function(){return p.a.get("/meta")},k=r(157),w=r(156),y=function(e){return e.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"})},O=function(e){var t=e.show,r=e.product,a=e.handleClose;return r?n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{show:t,onHide:a},n.a.createElement(k.a.Header,{closeButton:!0},n.a.createElement(k.a.Title,null,"Card Information")),n.a.createElement(k.a.Body,null,n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"3"},n.a.createElement("div",{className:"product-image"},n.a.createElement("img",{src:r.imageUrl,alt:r.name}))),n.a.createElement("td",null,n.a.createElement("div",{className:"product-name"},r.name),n.a.createElement("div",{className:"product-info"},r.group?r.group.groupName:"Set Name Not Found"),n.a.createElement("div",{className:"product-info"},r.cardNumber),n.a.createElement("div",{className:"product-info"},r.cardRarity))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("div",{className:"product-info"},"Market Price: ",r.currentMarketPrice),n.a.createElement("div",{className:"product-info"},"Last Updated: ",r.currentDate?y(new Date(r.currentDate)):"Unknown"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("a",{href:r.storeUrl},"TCGPlayer prices"))))))),n.a.createElement(k.a.Footer,null,n.a.createElement(w.a,{variant:"primary",onClick:a},"Close")))):null},x=function(e,t,r,a,n,c){var o=n.product.currentMarketPrice-n.product.previousMarketPrice,u=c.product.currentMarketPrice-c.product.previousMarketPrice;return"asc"===r?u-o:o-u},j=function(e,t){var r=(t.product.currentMarketPrice-t.product.previousMarketPrice).toFixed(2),a="black";return r<0?a="red":r>0&&(a="green",r="+"+r),n.a.createElement("font",{color:a},r)},P=function(e,t,r,a,n,c){var o=(n.product.currentMarketPrice-n.product.previousMarketPrice)/n.product.previousMarketPrice,u=(c.product.currentMarketPrice-c.product.previousMarketPrice)/c.product.previousMarketPrice;return"asc"===r?u-o:o-u},F=function(e,t){var r=(100*(t.product.currentMarketPrice-t.product.previousMarketPrice)/t.product.previousMarketPrice).toFixed(2),a="black";return r<0?a="red":r>0&&(a="green",r="+"+r),r+="%",n.a.createElement("font",{color:a},r)},S=function(e,t){return t.product.currentMarketPrice?t.product.currentMarketPrice.toFixed(2):"No price"},C=function(e,t,r,a,n,c){var o=n.currentMarketPrice-n.previousMarketPrice,u=c.currentMarketPrice-c.previousMarketPrice;return"asc"===r?u-o:o-u},M=function(e,t){var r=(t.currentMarketPrice-t.previousMarketPrice).toFixed(2),a="black";return r<0?a="red":r>0&&(a="green",r="+"+r),n.a.createElement("font",{color:a},r)},N=function(e,t,r,a,n,c){var o=(n.currentMarketPrice-n.previousMarketPrice)/n.previousMarketPrice,u=(c.currentMarketPrice-c.previousMarketPrice)/c.previousMarketPrice;return"asc"===r?u-o:o-u},T=function(e,t){var r=(100*(t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice).toFixed(2),a="black";return r<0?a="red":r>0&&(a="green",r="+"+r),r+="%",n.a.createElement("font",{color:a},r)},D=function(e,t){return t.currentMarketPrice?t.currentMarketPrice.toFixed(2):"No price"},U=function(e,t,r,a,n,c){var o=0;return o="string"===typeof e&&"string"===typeof t?e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}):e>t?1:e<t?-1:0,"desc"===r&&(o*=-1),o},L=r(32),I=r.n(L),A=r(79),J=r(80),R="LoggedInGxPricesUser",B=function(e,t){return e.groupName<t.groupName?-1:e.groupName>t.groupName?1:0},W=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)([]),u=Object(m.a)(o,2),l=u[0],d=u[1],p=Object(a.useState)(2594),b=Object(m.a)(p,2),k=b[0],w=b[1],x=Object(a.useState)(null),j=Object(m.a)(x,2),P=j[0],F=j[1],S=Object(a.useState)(null),L=Object(m.a)(S,2),W=L[0],_=L[1],z=Object(a.useState)(!1),G=Object(m.a)(z,2),H=G[0],q=G[1],Q=Object(a.useState)(null),X=Object(m.a)(Q,2),Y=X[0],K=X[1],V=function(e){K(e),q(!0)},Z=function(e){0==e?(console.log("getting all"),f().then((function(e){c(e.data)}))):v(e).then((function(e){c(e.data)}))};Object(a.useEffect)((function(){var e=window.localStorage.getItem(R);if(e){var t=JSON.parse(e);F(t),E.setToken(t.token)}}),[]),Object(a.useEffect)((function(){Z(2594),h().then((function(e){d(e.data.sort(B))})),g().then((function(e){var t=new Date(e.data.lastUpdated);_(y(t))}))}),[]);var $=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.pushToCollection(P.id,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.pushToWatchlist(P.id,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=[{dataField:"name",text:"Name",sort:!0,formatter:function(e,t){return n.a.createElement("button",{onClick:function(){return V(t)}},t.name)}},{dataField:"group.groupName",text:"Set",sort:!0},{dataField:"cardNumber",text:"Number",sort:!0,sortFunc:U},{dataField:"cardRarity",text:"Rarity",sort:!0},{dataField:"currentMarketPrice",text:"Unit Price",sort:!0,formatter:D},{dataField:"difference",text:"Change",isDummyField:!0,sort:!0,sortFunc:C,formatter:M},{dataField:"percentDifference",text:"Change (%)",isDummyField:!0,sort:!0,sortFunc:N,formatter:T},{dataField:"button",isDummyField:!0,hidden:!P,formatter:function(e,t){return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return ee(t._id)}},n.a.createElement(A.a,null)),n.a.createElement("button",{onClick:function(){return $(t._id)}},n.a.createElement(J.a,null)))}}];return n.a.createElement("div",{align:"center"},n.a.createElement("h1",null,"Current Market Prices"),n.a.createElement("div",null,P?"Logged in as: "+P.username:null,n.a.createElement("br",null),"Last updated: ",W),n.a.createElement("select",{id:"set-selector",name:"sets",value:k,onChange:function(e){return t=e.target.value,Z(t),void w(t);var t}},n.a.createElement("option",{value:0,key:0},"All cards (slow!)"),l.map((function(e){return n.a.createElement("option",{value:e.groupId,key:e.groupId},e.groupName)}))),n.a.createElement(O,{product:Y,show:H,handleClose:function(){return q(!1)}}),n.a.createElement(I.a,{bootstrap4:!0,keyField:"_id",data:r,columns:te}))},_=function(){return n.a.createElement("div",{className:"w-100 p-3"},n.a.createElement("h1",null,"FAQ"),n.a.createElement("br",null),n.a.createElement("h3",null,"What does this site have?"),n.a.createElement("p",null,"This site collates the TCGPlayer market price data for English Pok\xe9mon cards to allow for easier visibility of multiple prices at once. It also allows for users to see the general market value of their collection, or of cards that they are looking to buy in the future, and view the short-term changes of price data.",n.a.createElement("br",null),n.a.createElement("br",null),"Market price data is updated regularly, the price/percentage difference since the last update is also shown.",n.a.createElement("br",null),n.a.createElement("br",null),"You must register a free account to use the collection/watchlist features."),n.a.createElement("h3",null,"What does this site not have?"),n.a.createElement("p",null,"This site does not contain data for",n.a.createElement("ul",null,n.a.createElement("li",null,"graded cards"),n.a.createElement("li",null,"Japanese cards"),n.a.createElement("li",null,"sealed products"),n.a.createElement("li",null,"any non-Pok\xe9mon products")),"Also, due to technical reasons it does not differentiate between reverse-holo and normal prices."),n.a.createElement("h3",null,"What are market prices?"),n.a.createElement("p",null,"Market prices are calculated by TCGPlayer based on the sales that take place through their platform. They serve as a good indicator as to what the card itself is worth.",n.a.createElement("br",null),n.a.createElement("br",null),"Market prices do not seem to take condition into account. Generally, even more expensive modern cards will be much more available as near-mint copies, so the market price will hover around there. But for older cards, the near-mint copies will be rarer and more people will settle for lightly played or similar, having to pay extra for near mint. So if you only want near-mint cards, market prices are more accurate for modern cards than they are for older cards."))},z=null,G={getUser:function(e){return p.a.get("/users/"+e)},registerUser:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t,password:r},e.next=3,p.a.post("/users",a);case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteUser:function(){var e=Object(s.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:z}},e.next=3,p.a.delete("/users/"+t,r);case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){z="bearer ".concat(e)}},H=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)(""),u=Object(m.a)(o,2),l=u[0],d=u[1],p=Object(a.useState)(""),f=Object(m.a)(p,2),v=f[0],h=f[1],b=Object(a.useState)(""),g=Object(m.a)(b,2),k=g[0],w=g[1],y=Object(a.useState)(!1),O=Object(m.a)(y,2),x=O[0],j=O[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem(R);if(e){var t=JSON.parse(e);E.setToken(t.token)}}),[]);var P=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r&&0!==r.length){e.next=4;break}return w("Username required!"),e.abrupt("return");case 4:if(l&&0!==l.length){e.next=7;break}return w("Password required!"),e.abrupt("return");case 7:if(l===v){e.next=10;break}return w("Password and confirm password are different!"),e.abrupt("return");case 10:return e.prev=10,e.next=13,G.registerUser(r,l);case 13:j(!0),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),w("Username already in use!");case 19:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",null,x?n.a.createElement("div",null,"Success! Log in with your new credentials."):n.a.createElement("div",{align:"center",className:"w-100 p-3"},n.a.createElement("h2",null,"New user? Register here:"),n.a.createElement("form",{class:"form",onSubmit:P},n.a.createElement("p",{class:"form"},n.a.createElement("label",{class:"form"},"Username"),n.a.createElement("input",{class:"form",type:"text",value:r,onChange:function(e){var t=e.target;return c(t.value)}})),n.a.createElement("p",{class:"form"},n.a.createElement("label",{class:"form"},"Password"),n.a.createElement("input",{class:"form",type:"password",value:l,onChange:function(e){var t=e.target;return d(t.value)}})),n.a.createElement("p",{class:"form"},n.a.createElement("label",{class:"form"},"Confirm Password"),n.a.createElement("input",{class:"form",type:"password",value:v,onChange:function(e){var t=e.target;return h(t.value)}})),n.a.createElement("p",{class:"form"},k),n.a.createElement("button",{align:"center",type:"submit"},"Register"))))},q=r(42),Q=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)([]),u=Object(m.a)(o,2),l=u[0],d=u[1],p=Object(a.useState)(!1),f=Object(m.a)(p,2),v=f[0],h=f[1],b=Object(a.useState)(null),g=Object(m.a)(b,2),k=g[0],w=g[1],y=function(e){w(e),h(!0)},x=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteFromWatchlist(r.id,t);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=[{dataField:"name",text:"Name",sort:!0,formatter:function(e,t){return n.a.createElement("button",{onClick:function(){return y(t)}},t.name)}},{dataField:"group.groupName",text:"Set",sort:!0},{dataField:"cardNumber",text:"Number",sort:!0,sortFunc:U},{dataField:"cardRarity",text:"Rarity",sort:!0},{dataField:"currentMarketPrice",text:"Unit Price",sort:!0,formatter:D},{dataField:"difference",text:"Change",isDummyField:!0,sort:!0,sortFunc:C,formatter:M},{dataField:"percentDifference",text:"Change (%)",isDummyField:!0,sort:!0,sortFunc:N,formatter:T},{dataField:"button",isDummyField:!0,formatter:function(e,t){return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return x(t._id)}},n.a.createElement(q.a,null)))}}];Object(a.useEffect)((function(){var e,t=window.localStorage.getItem(R);if(t){var r=JSON.parse(t);c(r),e=r.id,G.getUser(e).then((function(e){d(e.data.watchlist)})),E.setToken(r.token)}}),[]);return n.a.createElement("div",{align:"center"},n.a.createElement("h1",null,"Watchlist"),r?n.a.createElement("div",null,n.a.createElement(O,{product:k,show:v,handleClose:function(){return h(!1)}}),n.a.createElement(I.a,{bootstrap4:!0,keyField:"_id",data:l,columns:j})):n.a.createElement("div",null,"Log in first to see your watchlist!"))},X=r(54),Y=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)([]),u=Object(m.a)(o,2),l=u[0],d=u[1],p=Object(a.useState)(null),f=Object(m.a)(p,2),v=f[0],h=f[1],b=Object(a.useState)(!1),g=Object(m.a)(b,2),k=g[0],w=g[1],y=function(e){h(e),w(!0)},C=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteFromCollection(r.id,t);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.increment(r.id,t);case 2:a=e.sent,d(a.ownedProducts);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.decrement(r.id,t);case 2:a=e.sent,d(a.ownedProducts);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=[{dataField:"product.name",text:"Name",sort:!0,formatter:function(e,t){return n.a.createElement("button",{onClick:function(){return y(t.product)}},t.product.name)}},{dataField:"product.group.groupName",text:"Set",sort:!0},{dataField:"product.cardNumber",text:"Number",sort:!0,sortFunc:U},{dataField:"product.cardRarity",text:"Rarity",sort:!0},{dataField:"product.currentMarketPrice",text:"Unit Price",sort:!0,formatter:S},{dataField:"difference",text:"Change",isDummyField:!0,sort:!0,sortFunc:x,formatter:j},{dataField:"percentDifference",text:"Change (%)",isDummyField:!0,sort:!0,sortFunc:P,formatter:F},{dataField:"quantity",text:"Quantity",sort:!0},{dataField:"button",isDummyField:!0,formatter:function(e,t){return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return M(t.product._id)}},n.a.createElement(X.b,null)),n.a.createElement("button",{onClick:function(){return N(t.product._id)}},n.a.createElement(X.a,null)),n.a.createElement("button",{onClick:function(){return C(t.product._id)}},n.a.createElement(q.a,null)))}}];Object(a.useEffect)((function(){var e,t=window.localStorage.getItem(R);if(t){var r=JSON.parse(t);c(r),e=r.id,G.getUser(e).then((function(e){d(e.data.ownedProducts)})),E.setToken(r.token)}}),[]);return n.a.createElement("div",{align:"center"},n.a.createElement("h1",null,"Collection"),r?n.a.createElement("div",null,n.a.createElement(O,{product:v,show:k,handleClose:function(){return w(!1)}}),n.a.createElement(I.a,{bootstrap4:!0,keyField:"_id",data:l,columns:T})):n.a.createElement("div",null,"Log in first to see your collection!"))},K=r(19),V=r(159),Z=r(158),$=function(){var e=window.localStorage.getItem(R);return e?JSON.parse(e):null},ee=function(){window.localStorage.clear()},te={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/login",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},re=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),r=(t[0],t[1]),c=Object(a.useState)(""),o=Object(m.a)(c,2),u=o[0],l=o[1],d=Object(a.useState)(""),p=Object(m.a)(d,2),f=p[0],v=p[1],h=Object(a.useState)(!1),b=Object(m.a)(h,2),g=b[0],y=b[1],O=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),ee(),r(null),window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,te.login({username:u,password:f});case 4:a=e.sent,window.localStorage.setItem(R,JSON.stringify(a)),E.setToken(a.token),r(a),l(""),v(""),window.location.reload(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),y(!0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),j=$();return n.a.createElement(V.a,{bg:"light",expand:"lg"},n.a.createElement(V.a.Brand,{href:"#home"},"GXPrices"),n.a.createElement(V.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(V.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(Z.a,{className:"mr-auto"},n.a.createElement(Z.a.Link,{as:K.b,to:"/"},"Prices"),n.a.createElement(Z.a.Link,{as:K.b,to:"/watchlist"},"Watchlist"),n.a.createElement(Z.a.Link,{as:K.b,to:"/collection"},"Collection"),j?null:n.a.createElement(Z.a.Link,{as:K.b,to:"/register"},"Register"),j?n.a.createElement(Z.a.Link,{as:K.b,to:"/userpage"},"Account"):null,n.a.createElement(Z.a.Link,{as:K.b,to:"/faq"},"FAQ")),n.a.createElement(Z.a,null,j?function(){var e="";return j&&(e="Logged in as "+j.username+" "),n.a.createElement("form",{onSubmit:O},e,n.a.createElement("button",{type:"submit"},"Logout"))}():n.a.createElement("form",{onSubmit:x},function(){var e=function(){return y(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{show:g,onHide:e},n.a.createElement(k.a.Header,{closeButton:!0},n.a.createElement(k.a.Title,null,"Error")),n.a.createElement(k.a.Body,null,n.a.createElement("div",null,"Invalid credentials!")),n.a.createElement(k.a.Footer,null,n.a.createElement(w.a,{variant:"primary",onClick:e},"Close"))))}(),n.a.createElement("input",{id:"username",type:"text",value:u,placeholder:"Username",name:"Username",onChange:function(e){var t=e.target;return l(t.value)}}),"\xa0",n.a.createElement("input",{id:"password",type:"password",value:f,placeholder:"Password",name:"Password",onChange:function(e){var t=e.target;return v(t.value)}}),"\xa0",n.a.createElement("button",{type:"submit"},"Log In")))))},ae=function(){return n.a.createElement(V.a,{sticky:"bottom",bg:"light",expand:"lg"},n.a.createElement(V.a.Text,null,"\xa9 2020 GXPrices. Pok\xe9mon is \xa9 Nintendo 1996-2020."),n.a.createElement(V.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(Z.a,{className:"mr-auto align-right"}),n.a.createElement(Z.a,null,n.a.createElement(Z.a.Link,{as:K.b,to:"/privacy"},"Privacy Policy")))},ne=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(m.a)(o,2),l=u[0],d=u[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem(R);if(e){var t=JSON.parse(e);c(t),G.setToken(t.token)}}),[]);var p=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,G.deleteUser(r.id);case 3:console.log("reached"),ee(),c(null),window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?n.a.createElement("div",{className:"w-100 p-3"},function(){var e=function(){return d(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{show:l,onHide:e},n.a.createElement(k.a.Header,{closeButton:!0},n.a.createElement(k.a.Title,null,"Confirm Deletion")),n.a.createElement(k.a.Body,null,n.a.createElement("div",null,"Are you sure you want to delete your account? This cannot be undone!")),n.a.createElement(k.a.Footer,null,n.a.createElement(w.a,{variant:"primary",onClick:function(){return p()}},"Confirm"),n.a.createElement(w.a,{variant:"secondary",onClick:e},"Cancel"))))}(),n.a.createElement("div",null,n.a.createElement("h1",null,"My Account"),n.a.createElement("br",null),"Logged in as ",r.username,n.a.createElement("br",null),n.a.createElement("button",{onClick:function(){return d(!0)}},"Delete Account"))):n.a.createElement("br",null)},ce=function(){return n.a.createElement("div",{className:"w-100 p-3"},n.a.createElement("h1",null,"Privacy Policy"),n.a.createElement("br",null),n.a.createElement("p",null,"This site in itself does not store any data about you or your computer."),n.a.createElement("p",null,"This site will store the items you add to your collection and watchlist in its database. This data is not sold or given out to any third parties.",n.a.createElement("br",null),"You may delete your account at any time from your user page. If you delete your account this data will be automatically removed from the database."))},oe=(r(151),r(152),r(153),function(){return n.a.createElement("main",null,n.a.createElement(re,null),n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/",component:W,exact:!0}),n.a.createElement(u.a,{path:"/faq",component:_}),n.a.createElement(u.a,{path:"/register",component:H}),n.a.createElement(u.a,{path:"/userpage",component:ne}),n.a.createElement(u.a,{path:"/watchlist",component:Q}),n.a.createElement(u.a,{path:"/collection",component:Y}),n.a.createElement(u.a,{path:"/privacy",component:ce})),n.a.createElement(ae,null))});o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K.a,null,n.a.createElement(oe,null))),document.getElementById("root"))},85:function(e,t,r){e.exports=r(154)}},[[85,1,2]]]);
//# sourceMappingURL=main.389c30ce.chunk.js.map