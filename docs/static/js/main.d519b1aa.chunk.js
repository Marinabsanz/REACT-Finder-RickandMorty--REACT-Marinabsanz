(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(16),a=n.n(r),i=(n(22),n(14)),o=n(2),l=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,gender:e.gender,image:e.image,origin:e.origin.name,origin2:e.origin.url,episode:e.episode.length}}))}))},j={get:function(e,t){var n=localStorage.getItem(e);return null===n?t:JSON.parse(n)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},u=n.p+"static/media/rickandmorty-logo.de13d484.png",d=n(0),m=function(){return Object(d.jsx)("header",{className:"",children:Object(d.jsx)("img",{src:u,alt:"Rick and Morty logo",className:"logoheader"})})},h=function(){return Object(d.jsx)("fieldset",{className:"claim",children:"\xa1Aqu\xed encontrar\xe1s m\xe1s info de tus personajes favoritos!"})},b=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("form",{className:"",onSubmit:function(e){e.preventDefault()},children:Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{name:"nombre",id:"name",className:"",type:"text",placeholder:"Busca a tu personaje",value:e.filterName,onChange:function(t){e.handleFilter({value:t.target.value,key:"name"}),console.log(t.target.value)}})})})}),Object(d.jsx)("div",{children:Object(d.jsx)("h4",{children:" Tus resultados"})})]})},O=n(8),f=function(e){var t=e.personajes,n=t.name,c=t.species,s=t.gender,r=(t.status,t.image),a=(t.origin,t.id);return Object(d.jsx)(O.b,{className:"linkclass",to:"/CardPerson/".concat(a),children:Object(d.jsxs)("article",{children:[Object(d.jsx)("img",{className:"img",src:r,alt:"foto de ".concat(r)}),Object(d.jsxs)("h4",{children:[" ",n," "]}),Object(d.jsxs)("p",{children:[" ",c]}),Object(d.jsxs)("p",{children:[" ",s]})]})})},x=function(e){var t=e.personajes.map((function(e){return Object(d.jsx)("li",{className:"",children:Object(d.jsx)(f,{personajes:e})},e.id)}));return Object(d.jsx)("section",{className:"listPersons",children:t})},p=(n(29),function(){return Object(d.jsx)("div",{className:"classBtn-Container",children:Object(d.jsx)("input",{type:"submit",className:"classBtn",value:"Borrar b\xfasqueda"})})}),g=function(){var e=Object(c.useState)(j.get("pj",[])),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(j.get("filterNamePerson","")),a=Object(i.a)(r,2),u=a[0],O=a[1];Object(c.useEffect)((function(){l().then((function(e){s(e)}))}),[]),Object(c.useEffect)((function(){j.set("personajes",n)}),[n]);var f=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{children:" "}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsxs)("main",{children:[Object(d.jsx)(b,{filterName:u,handleFilter:function(e){"name"===e.key&&O(e.value)},children:" "}),Object(d.jsx)(p,{children:" "}),Object(d.jsx)(x,{personajes:f})]})}),Object(d.jsx)(o.a,{path:"./CDetailBis/ "})]}),Object(d.jsx)(o.c,{children:Object(d.jsx)("nav",{children:Object(d.jsx)(h,{children:" "})})}),Object(d.jsx)("footer",{className:"footer",Marina:!0,"Ben\xedtez":!0,"S\xe1nchez":!0})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsxs)(s.a.StrictMode,{children:[Object(d.jsx)(O.a,{children:Object(d.jsx)(g,{})}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d519b1aa.chunk.js.map