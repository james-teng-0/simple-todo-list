(this["webpackJsonpto-do-list-4fun"]=this["webpackJsonpto-do-list-4fun"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(13),r=n.n(s),i=(n(59),n(2)),d=n(54),o=n(7),l=(n(60),n(14)),b=n(52),j=n.n(b),u=n(1);var p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(o.a)(s,2),b=r[0],p=r[1];function f(e){console.log(e.currentTarget.parentElement.tabindex),e.currentTarget.parentElement.remove()}return Object(u.jsxs)("div",{className:"main-background",children:[Object(u.jsx)(j.a,{isHydrating:!0,type:"text/javascript",src:"https://kit.fontawesome.com/ec413d8557.js"}),Object(u.jsx)("div",{className:"tasks-background",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)(l.a,{onDragEnd:function(e){if(console.log(e),null!=e.destination)if("tasks"===e.source.droppableId){if("done"===e.destination.droppableId){var t=Array.from(n),a=Array.from(b),s=t.splice(e.source.index,1),r=Object(o.a)(s,1)[0];a.splice(e.destination.index,0,r),p(a),c(t)}else if("tasks"===e.destination.droppableId){var i=Array.from(n),d=i.splice(e.source.index,1),l=Object(o.a)(d,1)[0];i.splice(e.destination.index,0,l),c(i)}}else if("done"===e.source.droppableId)if("done"===e.destination.droppableId){var j=Array.from(b),u=j.splice(e.source.index,1),f=Object(o.a)(u,1)[0];j.splice(e.destination.index,0,f),p(j)}else if("tasks"===e.destination.droppableId){var O=Array.from(n),m=Array.from(b),x=m.splice(e.source.index,1),h=Object(o.a)(x,1)[0];O.splice(e.destination.index,0,h),p(m),c(O)}},children:[Object(u.jsxs)("div",{className:"column",id:"column-1",children:[Object(u.jsx)("h1",{className:"c1-title",children:" Todo. "}),Object(u.jsx)(l.c,{droppableId:"tasks",children:function(e){return Object(u.jsxs)("ul",Object(i.a)(Object(i.a)({className:"tasks"},e.droppableProps),{},{ref:e.innerRef,children:[n.map((function(e){var t=n.indexOf(e);return Object(u.jsx)(l.b,{draggableId:(t+50).toString(),index:t,children:function(t){return Object(u.jsx)("li",Object(i.a)(Object(i.a)(Object(i.a)({className:"tasksRow",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:e}))}},toString(t+50))})),e.placeholder]}))}}),Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t,a=document.getElementById("task").value;n.includes(a)?alert("This task already exists! :("):(a.length>0&&(t=a,c([].concat(Object(d.a)(n),[t]))),document.getElementById("task").value="")},children:[Object(u.jsx)("input",{id:"task",placeholder:"Add a task.",type:"text"}),Object(u.jsx)("input",{id:"submit",type:"submit"})]})]}),Object(u.jsxs)("div",{className:"column",id:"column-2",children:[Object(u.jsx)("h1",{className:"c2-title",children:" Done. "}),Object(u.jsx)(l.c,{droppableId:"done",children:function(e){return Object(u.jsxs)("ul",Object(i.a)(Object(i.a)({className:"done"},e.droppableProps),{},{ref:e.innerRef,children:[b.map((function(e){var t=b.indexOf(e);return Object(u.jsx)(l.b,{draggableId:(t+100).toString(),index:t,children:function(t){return Object(u.jsxs)("li",Object(i.a)(Object(i.a)(Object(i.a)({className:"doneRow",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:[e,Object(u.jsx)("button",{type:"button",onClick:f,className:"delete",children:Object(u.jsx)("i",{class:"fas fa-trash-alt"})})]}))}},toString(t+100))})),e.placeholder]}))}})]})]})})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),f()},59:function(e,t,n){},60:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.16d4947b.chunk.js.map