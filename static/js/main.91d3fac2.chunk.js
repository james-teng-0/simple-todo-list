(this["webpackJsonpto-do-list-4fun"]=this["webpackJsonpto-do-list-4fun"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),i=n.n(a),o=(n(12),n(6)),r=n(7),l=(n(13),n(0));var u=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];function a(e){e.currentTarget.parentNode.remove()}return Object(l.jsx)("div",{className:"main-background",children:Object(l.jsxs)("div",{className:"tasks-background",children:[Object(l.jsx)("h1",{className:"main-header",children:"My Todo List."}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"column",children:Object(l.jsx)("ul",{className:"task-list",children:n.map((function(e){return Object(l.jsxs)("li",{className:"",draggable:"true",children:[" ",Object(l.jsx)("input",{className:"taskCheckbox",type:"checkbox",onClick:a})," ",e," "]})}))})}),Object(l.jsx)("div",{className:"column"})]}),Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t,c=document.getElementById("task").value;c.length>0&&(t=c,s([].concat(Object(o.a)(n),[t]))),document.getElementById("task").value=""},children:[Object(l.jsx)("input",{id:"task",type:"text"}),Object(l.jsx)("input",{id:"submit",type:"submit"})]})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.91d3fac2.chunk.js.map