(function(t){function o(o){for(var n,r,a=o[0],d=o[1],c=o[2],u=0,f=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(o);while(f.length)f.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,o=0;o<s.length;o++){for(var e=s[o],n=!0,a=1;a<e.length;a++){var d=e[a];0!==i[d]&&(n=!1)}n&&(s.splice(o--,1),t=r(r.s=e[0]))}return t}var n={},i={app:0},s=[];function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)r.d(e,n,function(o){return t[o]}.bind(null,n));return e},r.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="/C4_11/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=o,a=a.slice();for(var c=0;c<a.length;c++)o(a[c]);var l=d;s.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var n=e("85ec"),i=e.n(n);i.a},"335c":function(t,o,e){},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],r=(e("034f"),e("2877")),a={},d=Object(r["a"])(a,i,s,!1,null,null,null),c=d.exports,l=e("8c4f"),u=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{staticClass:"col-sm-10"},[e("h1",[t._v("Задачи")]),e("b-alert",{attrs:{variant:t.confirmationSetting.variant,dismissible:"",fade:""},on:{dismissed:function(o){t.confirmationSetting.dismissCountDown=0}},model:{value:t.confirmationSetting.dismissCountDown,callback:function(o){t.$set(t.confirmationSetting,"dismissCountDown",o)},expression:"confirmationSetting.dismissCountDown"}},[t._v(" "+t._s(t.confirmationSetting.message)+" ")]),e("table",{staticClass:"table"},[e("tr",{staticClass:"table-success"},[e("td",[t._v("Выполнено задач")]),e("td",[t._v(t._s(t.countTasks.completed))])]),e("tr",{staticClass:"table-danger"},[e("td",[t._v("Не выполнено задач")]),e("td",[t._v(t._s(t.countTasks.un_completed))])])]),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-modal",modifiers:{"todo-modal":!0}}],staticClass:"btn btn-success btn-sm align-left d-block",attrs:{type:"button",id:"task-add"},on:{click:function(o){return t.setAddForm()}}},[t._v(" Добавить задачу ")]),e("table",{staticClass:"table table-dark table-stripped table-hover"},[t._m(0),e("tbody",t._l(t.todos,(function(o,n){return e("tr",{key:n},[e("td",{staticClass:"todo-uid"},[t._v(t._s(o.uid))]),e("td",[t._v(t._s(o.description))]),e("td",[o.is_completed?e("span",[t._v("Выполнено")]):e("span",[t._v("Не выполнено")])]),e("td",[e("div",{staticClass:"btn-group",attrs:{role:"group"}},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-modal",modifiers:{"todo-modal":!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.updateTodo(o)}}},[t._v(" Обновить ")]),t._v(" "),e("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteTodo(o)}}},[t._v(" X ")])])])])})),0)]),e("b-modal",{ref:"addTodoModal",attrs:{id:"todo-modal",title:t.formSetting.title,"hide-footer":""}},[e("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{attrs:{id:"form-description-group",label:"Описание:","label-for":"form-description-input"}},[e("b-form-input",{attrs:{id:"form-description-input",type:"text",required:"",placeholder:"Завести задачу"},model:{value:t.addTodoForm.description,callback:function(o){t.$set(t.addTodoForm,"description",o)},expression:"addTodoForm.description"}})],1),e("b-form-group",{attrs:{id:"form-complete-group"}},[e("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.addTodoForm.is_completed,callback:function(o){t.$set(t.addTodoForm,"is_completed",o)},expression:"addTodoForm.is_completed"}},[e("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.formSetting.btnSubmit))]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1)],1)])},f=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",[t._v("Uid")]),e("th",[t._v("Описание")]),e("th",[t._v("Выполнена?")]),e("th")])])}],m=(e("a4d3"),e("e01a"),e("4de4"),e("4160"),e("d81d"),e("159b"),{name:"Todo",data:function(){return{todos:[],addTodoForm:{uid:0,description:"",is_completed:[]},formSetting:{title:"Добавить задачу",btnSubmit:"Добавить"},countTasks:{completed:0,un_completed:0},confirmationSetting:{variant:"",message:"",dismissCountDown:0}}},methods:{getTodos:function(){var t=localStorage.getItem("tasks");null===t&&(t='[\n              {\n                "description": "прочитать книгу",\n                "is_completed": false,\n                "uid": 1\n              },\n              {\n                "description": "учиться жонглировать 30 минут",\n                "is_completed": false,\n                "uid": 2\n              },\n              {\n                "description": "помыть посуду",\n                "is_completed": false,\n                "uid": 3\n              },\n              {\n                "description": "поесть",\n                "is_completed": false,\n                "uid": 4\n              }\n            ]',localStorage.setItem("tasks",t)),this.todos=JSON.parse(t),this.calcCounts()},calcCounts:function(){localStorage.setItem("tasksCount",this.todos.length),this.countTasks.completed=this.todos.filter((function(t){return t.is_completed})).length,this.countTasks.un_completed=this.todos.filter((function(t){return!t.is_completed})).length},resetForm:function(){this.addTodoForm.description="",this.addTodoForm.is_completed=[]},onSubmit:function(t){if(t.preventDefault(),this.$refs.addTodoModal.hide(),"Добавить задачу"==this.formSetting.title){var o=Math.max.apply(Math,this.todos.map((function(t){return t.uid})));isFinite(o)||(o=0);var e=this.addTodoForm.description;this.todos.push({description:e,is_completed:this.addTodoForm.is_completed[0]||!1,uid:o+1}),localStorage.setItem("tasks",JSON.stringify(this.todos)),this.addConfirmation("info",'Задача "'.concat(e,'" добавлена')),this.calcCounts()}else this.todos.forEach((function(t){0==t.is_completed.length&&(t.is_completed=!1)})),localStorage.setItem("tasks",JSON.stringify(this.todos)),this.addConfirmation("success","Задача обновлена"),this.getTodos();this.resetForm()},addConfirmation:function(t,o){this.confirmationSetting.variant=t,this.confirmationSetting.message=o,this.confirmationSetting.dismissCountDown=3},onReset:function(t){t.preventDefault(),this.$refs.addTodoModal.hide(),this.resetForm()},deleteTodo:function(t){this.todos.uid,this.todos.filter((function(o){return o.uid==t.uid})).length>0?(this.todos=this.todos.filter((function(o){return o!==t})),localStorage.setItem("tasks",JSON.stringify(this.todos)),this.addConfirmation("danger","Задача удалена из списка"),this.calcCounts()):this.addConfirmation("danger","Данные некорректны! Повторите Попытку позже!")},setAddForm:function(){this.formSetting={title:"Добавить задачу",btnSubmit:"Добавить"}},updateTodo:function(t){this.addTodoForm=t,this.formSetting={title:"Обновить задачу",btnSubmit:"Обновить"}}},created:function(){this.getTodos()}}),p=m,b=(e("db04"),Object(r["a"])(p,u,f,!1,null,"7bdb0e87",null)),h=b.exports;n["default"].use(l["a"]);var v=new l["a"]({mode:"history",base:"/C4_11/",routes:[{path:"/",name:"todos",component:h}]}),g=(e("f9e3"),e("5f5b"));n["default"].use(g["a"]),n["default"].config.productionTip=!1,new n["default"]({router:v,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,o,e){},db04:function(t,o,e){"use strict";var n=e("335c"),i=e.n(n);i.a}});
//# sourceMappingURL=app.1a60863d.js.map