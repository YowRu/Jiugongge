(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,r){e.exports=r(11)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(3),l=r.n(a),c=(r(9),r(1));var i=function(e){var t=e.isRadomPage;return Object(o.useEffect)((function(){!function(){var e="";function t(){var t=function(){return Math.floor(256*Math.random())};return e="rgb("+t()+","+t()+","+t()+")"}for(var r=(.8*window.screen.height-110)/8,o=.9*window.screen.width,n=.9*o/8,a=1;a<9;a++){var l=document.createElement("ul");document.querySelector(".RadomColor").appendChild(l).style.width=o+"px"}for(var c=0;c<8;c++)for(var i=document.querySelector(".RadomColor").querySelectorAll("ul"),d=0;d<i.length;d++){var u=document.createElement("li");t(),document.querySelector(".RadomColor").querySelectorAll("ul")[d].appendChild(u).style.height=r+"px",document.querySelector(".RadomColor").querySelectorAll("ul")[d].appendChild(u).style.width=n+"px",document.querySelector(".RadomColor").querySelectorAll("ul")[d].appendChild(u).style.backgroundColor=e}document.querySelector(".RadomColor").addEventListener("click",(function(r){"li"===r.srcElement.localName&&(t(),r.srcElement.style.backgroundColor=e)}))}()}),[]),n.a.createElement("div",{className:"RadomColor",style:{display:t?"block":"none"}})};var d=function(e){var t=e.isSamePage;return Object(o.useEffect)((function(){!function(){var e="";function t(){var t=function(){return Math.floor(256*Math.random())};return e="rgb("+t()+","+t()+","+t()+")"}for(var r=(.8*window.screen.height-110)/8,o=.9*(.9*window.screen.width)/8,n=1;n<65;n++){var a=document.createElement("div");document.querySelector(".SameColor").appendChild(a).setAttribute("id",n),document.querySelector(".SameColor").appendChild(a).style.height=r+"px",document.querySelector(".SameColor").appendChild(a).style.width=o+"px"}for(var l=[],c=document.querySelectorAll("div").length,i=0;i<c/2;i++)t(),l.push(e);for(var d=[],u=0;u<64;u++)d[u]=u;var m=[];!function(){for(var e=0;e<64;e++){var t=Math.floor(Math.random()*d.length);m.push(d.splice(t,1)[0])}}();for(var s=0;s<=31;s++){var y=String(s+1);document.getElementById(y).style.backgroundColor=l[s]}for(var p=32;p<=63;p++){var f=p-32,v=String(p+1);document.getElementById(v).style.backgroundColor=l[f]}var h,E,C,S,g,b,k=0,q=0;document.querySelector(".SameColor").addEventListener("click",(function(e){++k%2===1?(h=e.srcElement.style.backgroundColor,C=e.srcElement,g=e.srcElement.id):(E=e.srcElement.style.backgroundColor,S=e.srcElement,b=e.srcElement.id),g===b?k=0:h===E&&(k=0,q++,alert("Good Job! Score: "+q),C.style.WebkitTransition="opacity 1s",S.style.WebkitTransition="opacity 1s",C.style.opacity=0,S.style.opacity=0)}))}()}),[]),n.a.createElement("div",{className:"SameColor",style:{display:t?"flex":"none"}})};r(10);var u=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),r=t[0],a=t[1],l=Object(o.useState)(!0),u=Object(c.a)(l,2),m=u[0],s=u[1];return n.a.createElement("div",{id:"main"},n.a.createElement("div",{id:"title"},n.a.createElement("h1",null,"\u529f\u80fd\u9078\u55ae"),n.a.createElement("p",null,n.a.createElement("span",{onClick:function(){s(!0),a(!1)}},"\u9ede\u64ca\u5340\u584a\u8b8a\u8272"),n.a.createElement("span",{onClick:function(){a(!0),s(!1)}},"\u9ede\u64ca\u76f8\u540c\u5340\u584a"))),n.a.createElement("div",{id:"contain"},n.a.createElement(d,{isSamePage:r}),n.a.createElement(i,{isRadomPage:m})))};l.a.render(n.a.createElement(u,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.86ba8f1c.chunk.js.map