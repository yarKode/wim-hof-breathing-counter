(this["webpackJsonpwim-hof-breathing-counter"]=this["webpackJsonpwim-hof-breathing-counter"]||[]).push([[1],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return o}));var a=5,c=4,r=3,s=["\ud83e\uddd8 Breathe In and Breathe Out. Tap on '+' each cycle. When ready to finish - make last one deep Breathe In, Stop on Exhale and tap Next","\u23f3 Hold for 1 minute at leat and until you feel the urge to breathe. When you are ready - Fully In, Hold and tap Next","\u23f1 Hold 10-15 seconds. No more needed. When finish - Exhale and tap Next","\ud83c\udf89Well Done! Round finished \ud83c\udfc1. To start new one - tap on Start Round below \ud83d\udcaa"],i={title:"Wim Hof's Breathing Assistant",subtitle:"Count Your Breath Cycles, Time while Holding Breath and Rounds at one place."},o={count:0,timer1:0,timer2:0,enabledUI:{counter:!0,counterNext:!0,timer1Display:!1,timer1NextBtn:!1,timer2Display:!1,timer2NextBtn:!1},resetBtn:"Reset",hideButtons:!1,phase:0,prompt:"",round:1}},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return u}));var a=n(11),c=n(3),r=n(0),s=n.n(r),i=n(10);function o(e){var t=Object(r.useState)(e),n=Object(a.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!1),o=Object(a.a)(i,2),l=o[0],j=o[1];return Object(r.useLayoutEffect)((function(){if(l){var e=setInterval((function(){s((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}}),[l,c]),{time:c,toggleTimer:function(){j(!l)},timerStarted:l,setTime:s}}var l=n(1),j=s.a.createContext();function d(e,t){switch(t.type){case"Count":return Object(c.a)(Object(c.a)({},e),{},{count:e.count+t.payload});case"StartTimer1":return Object(c.a)(Object(c.a)({},e),{},{timer1:t.payload});case"StartTimer2":return Object(c.a)(Object(c.a)({},e),{},{timer2:t.payload});case"ChangeUI":return Object(c.a)(Object(c.a)({},e),{},{enabledUI:Object(c.a)(Object(c.a)({},e.enabledUI),t.payload)});case"NextRound":return Object(c.a)(Object(c.a)({},e),{},{round:e.round+t.payload});case"Reset":return Object(c.a)(Object(c.a)({},e),t.payload);case"ChangeResetBtn":return Object(c.a)(Object(c.a)({},e),{},{resetBtn:t.payload});case"HideBtns":return Object(c.a)(Object(c.a)({},e),{},{hideButtons:t.payload});case"NextPhase":return Object(c.a)(Object(c.a)({},e),{},{phase:e.phase+t.payload});default:throw Error("Impossible case")}}function u(e){var t=e.children,n=o(0),c=n.time,s=n.toggleTimer,u=n.timerStarted,b=n.setTime,h=o(0),m=h.time,O=h.toggleTimer,x=h.timerStarted,f=h.setTime,p=Object(r.useReducer)(d,i.a),v=Object(a.a)(p,2),N={time1:c,time2:m,timerStarted1:u,timerStarted2:x,toggleTimer1:s,toggleTimer2:O,setTime1:b,setTime2:f,state:v[0],dispatch:v[1]};return Object(l.jsx)(j.Provider,{value:N,children:t})}},26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),s=n.n(r),i=n(17),o=n(7),l=(n(26),n(27),n(2)),j=n(1);function d(e){var t=e.title,n=e.subtitle;return Object(j.jsxs)("div",{className:"hero-titles",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("h2",{children:n})]})}function u(){return Object(j.jsxs)("div",{className:"hero-cta-block",children:[Object(j.jsxs)("div",{className:"hero-cta",children:[Object(j.jsx)("h3",{children:"Try Free Breathing Assistant"}),Object(j.jsx)(o.c,{to:"/assistant",className:"link-btn",children:"Use Assistant"})]}),Object(j.jsxs)("div",{className:"hero-cta",children:[Object(j.jsx)("h3",{children:"Watch a Quick Guide"}),Object(j.jsx)(o.c,{to:"/video",className:"link-btn",children:"Watch Video"})]})]})}var b=n(10);function h(){return Object(j.jsx)("div",{className:"hero-bg",children:Object(j.jsxs)("div",{className:"page-container",children:[Object(j.jsx)(d,{title:b.f.title,subtitle:b.f.subtitle}),Object(j.jsx)(u,{})]})})}function m(){return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("p",{children:"WH Breathing Assist"})})}),Object(j.jsxs)("nav",{children:[Object(j.jsxs)("div",{className:"hamburger",children:[Object(j.jsx)("div",{className:"hamb-line"}),Object(j.jsx)("div",{className:"hamb-line"}),Object(j.jsx)("div",{className:"hamb-line"})]}),Object(j.jsxs)("ul",{className:"nav-list",children:[Object(j.jsx)("li",{className:"menu_item",children:Object(j.jsx)(o.c,{exact:!0,to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"menu_item",children:Object(j.jsx)(o.c,{to:"/video",children:"Video"})}),Object(j.jsx)("li",{className:"menu_item",children:Object(j.jsx)(o.c,{to:"/assistant",children:"Assistant"})}),Object(j.jsx)("li",{className:"menu_item",children:Object(j.jsx)(o.c,{to:"/contact",children:"Contact"})})]})]})]})})}function O(){return Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:"\xa9\ufe0fYarkode Copyright 2021"})})}var x=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,47))})),f=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,48))})),p=c.a.lazy((function(){return n.e(4).then(n.bind(null,46))}));var v=function(){return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(c.a.Suspense,{fallback:Object(j.jsx)("h1",{children:"Lazy Loading..."}),children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:h}),Object(j.jsx)(l.a,{path:"/assistant",component:x}),Object(j.jsx)(l.a,{path:"/video",component:f}),Object(j.jsx)(l.a,{path:"/contact",component:p})]}),Object(j.jsx)(O,{})]})};s.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(v,{})})}),document.getElementById("root"))}},[[35,2,3]]]);
//# sourceMappingURL=main.6f226aee.chunk.js.map