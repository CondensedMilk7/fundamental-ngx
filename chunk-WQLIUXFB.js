import{E as ue,I as pe,L as me,O as x,P as fe,m as N,o as se,q as le,v as ce,y as de}from"./chunk-AAHBDT6O.js";import"./chunk-WY3MOZC3.js";import"./chunk-35EETDHS.js";import"./chunk-TI35F64P.js";import"./chunk-S2NMKNSH.js";import{$a as ee,He as ne,Ie as oe,fb as o,ka as V,kb as _,lb as te,ne as ae,oe as re,qa as X,qe as ie}from"./chunk-AUNCFUUT.js";import"./chunk-RTUAT6B3.js";import"./chunk-RHO4TFSB.js";import{$b as S,Cb as B,Eb as p,F as I,Ka as b,Lb as Y,Mb as $,Nb as j,O,Rb as H,Sb as s,Sd as K,W as q,X as M,Zc as G,_b as Q,_g as J,a as k,b as P,db as U,ea as v,gb as h,ja as y,k as E,ob as Z,qa as m,ra as f,tb as l,tc as W,ub as c,vb as C,w as A,xa as L,z as R,zb as z}from"./chunk-KLPBKWPE.js";function Ce(n,t){if(n&1){let e=z();l(0,"fdp-table",2,0),B("columnsChange",function(a){m(e);let i=p();return f(i.columnChangeCallback(a))})("filterChange",function(a){m(e);let i=p();return f(i.filtersChangeCallback(a))})("sortChange",function(a){m(e);let i=p();return f(i.sortingChangeCallback(a))})("rowToggleOpenState",function(a){m(e);let i=p();return f(i.rowToggleCallback(a))})("pageChange",function(a){m(e);let i=p();return f(i.pageChangeCallback(a))})("tableScrolled",function(a){m(e);let i=p();return f(i.setTableOffset(a))})("rowsRearrange",function(a){m(e);let i=p();return f(i.onRowsRearrange(a))})("cellFocused",function(a){m(e);let i=p();return f(i.onCellFocused(a))}),C(2,"fdp-table-toolbar",3)(3,"fdp-column",4)(4,"fdp-column",5)(5,"fdp-column",6)(6,"fdp-column",7)(7,"fdp-column",8),c(),C(8,"fdp-table-p13-dialog",9)}if(n&2){let e=H(1),r=p();h("dataSource",r.source)("initialVisibleColumns",r.columns)("initialSortBy",r.sortBy)("initialFilterBy",r.initialFilterBy)("initialPage",r.page)("pageScrolling",!0)("pageSize",4)("loadPagesBefore",!0)("isTreeTable",!0),b(3),h("sortable",!0)("groupable",!0)("filterable",!0),b(),h("sortable",!0)("filterable",!0),b(),h("sortable",!0)("filterable",!0),b(2),h("sortable",!0)("filterable",!0),b(),h("table",e)}}var he=(()=>{class n{constructor(){this.sortBy=[{field:"price.value",direction:N.ASC}],this.columns=["name","price","status"],this.items=[...T],this._dateTimeAdapter=v(ee),this._cdr=v(W),this.source=new w(new D(this.items,this._dateTimeAdapter)),this.page=1,this.initialFilterBy=[],this.displayTable=!0,this.tableOffset=0,this.applyScroll=!1,this._destroyRef=v(L),this._refresh$=new E}toggleTable(){this.applyScroll=!this.displayTable,this.displayTable=!this.displayTable,this.items=[...T],this.source=new w(new D(this.items,this._dateTimeAdapter)),this._cdr.detectChanges(),this._listenOnTableData()}_listenOnTableData(){if(this._refresh$.next(),this._refresh$.complete(),this._refresh$=new E,!this.table)return;let e=I(K(this._destroyRef),this._refresh$);this.table._dataSourceDirective.onDataReceived.pipe(q(()=>this.table.tableRowsSet),M(e)).subscribe(()=>{this.applyScroll&&(this.applyScroll=!1,this.table.tableScrollable.setScrollTop(this.tableOffset,!1),this.focusedCell&&this.table.focusCell(this.focusedCell))})}ngAfterViewInit(){this._listenOnTableData()}columnChangeCallback(e){console.log(e),this.columns=e.current}filtersChangeCallback(e){console.log(e),this.initialFilterBy=e.current}sortingChangeCallback(e){console.log(e),this.sortBy=e.current}onRowsRearrange(e){console.log(e)}rowToggleCallback(e){let r=T.findIndex(a=>a.id===e.row.id);r!==-1&&(T[r].expanded=e.expanded)}pageChangeCallback(e){console.log(e),this.page=e.current.currentPage}setTableOffset(e){this.tableOffset=e}onCellFocused(e){this.focusedCell=e}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=y({type:n,selectors:[["fdp-platform-table-preserved-state-example"]],viewQuery:function(r,a){if(r&1&&Y(x,5),r&2){let i;$(i=j())&&(a.table=i.first)}},standalone:!0,features:[Q([te()]),S],decls:5,vars:1,consts:[["table",""],["fd-button","",3,"click"],["bodyHeight","10rem","relationKey","children","expandedStateKey","expanded","dropMode","group",3,"columnsChange","filterChange","sortChange","rowToggleOpenState","pageChange","tableScrolled","rowsRearrange","cellFocused","dataSource","initialVisibleColumns","initialSortBy","initialFilterBy","initialPage","pageScrolling","pageSize","loadPagesBefore","isTreeTable"],["title","Order Items"],["name","name","key","name","label","Name",3,"sortable","groupable","filterable"],["name","description","key","description","label","Description",3,"sortable","filterable"],["name","price","key","price.value","label","Price",3,"sortable","filterable"],["name","verified","key","verified","label","Verified"],["name","status","key","status","label","Status",3,"sortable","filterable"],[3,"table"]],template:function(r,a){r&1&&(l(0,"p"),s(1,"Toggle button destroys the table completely if it exists, and restores it's state when newly created."),c(),l(2,"button",1),B("click",function(){return a.toggleTable()}),s(3,"Toggle table"),c(),U(4,Ce,9,19)),r&2&&(b(4),Z(a.displayTable?4:-1))},dependencies:[J,fe,x,ue,me,pe,de,ce,_],encapsulation:2,changeDetection:0})}}return n})(),w=class extends le{constructor(t){super(t)}},D=class extends se{constructor(t,e){super(),this.dateTimeAdapter=e,this.items=t,this.totalItems=this.items.length}fetchData(t){return this.fetch(t).pipe(R(e=>(this.searchInput&&(e=this.search(e,P(k({},t),{searchInput:this.searchInput}))),t?.filterBy&&(e=this.filter(e,t)),t?.sortBy&&(e=this.sort(t,e)),ve(e).slice((t.page.currentPage-1)*t.page.pageSize,t.page.currentPage*t.page.pageSize))),O(1e3))}fetch(t){let e=this.items;return A(e)}sort({sortBy:t},e){return e=e.slice(),t=t.filter(({field:r})=>!!r),t.length===0?e:e.sort((r,a)=>t.map(({field:i,direction:u})=>{let d=u===N.ASC?1:-1;return xe(r,a,i)*d}).find((i,u,d)=>i!==0||u===d.length-1)??0)}filter(t,{filterBy:e}){return e.filter(({field:r})=>!!r).forEach(r=>{t=t.filter(a=>{switch(r.field){case"name":case"description":return F(a,r);case"price.value":return this.filterByPrice(a,r);case"status":return this.filterByStatus(a,r);case"statusColor":return this.filterByStatusColor(a,r);case"verified":return _e(a,r);case"date":return Se(a,r,this.dateTimeAdapter);default:return!1}})}),t}filterByPrice(t,e){let r=e.value;if(r&&typeof r=="object"&&("min"in r||"max"in r)){let a=e.value,i=t.price.value,u=Number.parseFloat(a?.min),d=Number.parseFloat(a?.max);return(Number.isNaN(u)||i>=u)&&(Number.isNaN(d)||i<=d)}return ye(t,e)}filterByStatus(t,e){return Array.isArray(e.value)?be(t,e):F(t,e)}filterByStatusColor(t,e){return Array.isArray(e.value)?be(t,e):F(t,e)}},F=(n,t)=>{let e=t.value&&t.value.toLocaleLowerCase(),r=t.value2&&t.value2.toLocaleLowerCase()||"",a=g(t.field,n).toLocaleLowerCase(),i=!1;switch(t.strategy){case"equalTo":i=a===e;break;case"greaterThan":i=a>e;break;case"greaterThanOrEqualTo":i=a>=e;break;case"lessThan":i=a<e;break;case"lessThanOrEqualTo":i=a<=e;break;case"between":i=a>=e&&a<=r;break;case"beginsWith":i=a.startsWith(e);break;case"endsWith":i=a.endsWith(e);break;case"contains":default:i=a.includes(e)}return t.exclude?!i:i},ye=(n,t)=>{let e=Number.parseFloat(t.value),r=Number.parseFloat(t.value2)||0,a=Number.parseFloat(g(t.field,n)),i=!1;switch(t.strategy){case"greaterThan":i=a>e;break;case"greaterThanOrEqualTo":i=a>=e;break;case"lessThan":i=a<e;break;case"lessThanOrEqualTo":i=a<=e;break;case"between":i=a>=e&&a<=r;break;case"equalTo":default:i=a===e}return t.exclude?!i:i},Se=(n,t,e)=>{let r=t.value,a=t.value2,i=g(t.field,n),u=e.compareDate(i,r),d=!1;switch(t.strategy){case"after":d=u>0;break;case"onOrAfter":d=u>=0;break;case"before":d=u<0;break;case"beforeOrOn":d=u<=0;break;case"between":d=e.isBetween(i,r,a);break;case"equalTo":default:d=e.dateTimesEqual(i,r)}return t.exclude?!d:d},_e=(n,t)=>{let e=t.value,r=g(t.field,n),a=!1;switch(t.strategy){case"equalTo":default:a=r===e}return t.exclude?!a:a},be=(n,t)=>{let e=t.value,r=g(t.field,n),a=!1;switch(t.strategy){case"equalTo":default:a=e.includes(r)}return!e.length||t.exclude?!a:a},xe=(n,t,e)=>(e&&(n=g(e,n),t=g(e,t)),n>t?1:n===t?0:-1);function g(n,t){return n.split(".").reduce((e,r)=>e?e[r]:null,t)}function ve(n,t){return n.filter(e=>e.parentId===t).map(e=>P(k({},e),{children:ve(n,e.id)}))}var T=[{id:1,name:"10 Portable DVD player",description:"diam neque vestibulum eget vulputate",price:{value:66.04,currency:"CNY"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,1,7),verified:!0,expanded:!1},{id:2,name:"Astro Laptop 1516",description:"pede malesuada",price:{value:489.01,currency:"EUR"},status:"Out of stock",statusColor:"negative",date:new o(2020,2,5),verified:!0,parentId:1},{id:3,name:"Benda Laptop 1408",description:"suspendisse potenti cras in",price:{value:243.49,currency:"CNY"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,9,22),verified:!0,parentId:1},{id:4,name:"Astro Laptop 1516",description:"pede malesuada",price:{value:489.01,currency:"EUR"},status:"Out of stock",statusColor:"negative",date:new o(2020,2,5),verified:!0,expanded:!0,children:[]},{id:5,name:"10 Portable DVD player",description:"diam neque vestibulum eget vulputate",price:{value:66.04,currency:"CNY"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,1,7),verified:!0,expanded:!0,parentId:4},{id:6,name:"Astro Phone 6",description:"penatibus et magnis",price:{value:154.1,currency:"IDR"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,1,12),verified:!0,parentId:5},{id:7,name:"Beam Breaker B-1",description:"fermentum donec ut",price:{value:36.56,currency:"NZD"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,11,24),verified:!1,parentId:5},{id:8,name:"Beam Breaker B-2",description:"sapien in sapien iaculis congue",price:{value:332.57,currency:"NZD"},status:"No info",date:new o(2020,10,23),verified:!0,parentId:5},{id:9,name:"Astro Phone 6",description:"penatibus et magnis",price:{value:154.1,currency:"IDR"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,1,12),verified:!0},{id:10,name:"Beam Breaker B-1",description:"fermentum donec ut",price:{value:36.56,currency:"NZD"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,11,24),verified:!1},{id:11,name:"Beam Breaker B-2",description:"sapien in sapien iaculis congue",price:{value:332.57,currency:"NZD"},status:"No info",date:new o(2020,10,23),verified:!0},{id:12,name:"Benda Laptop 1408",description:"suspendisse potenti cras in",price:{value:243.49,currency:"CNY"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,9,22),verified:!0},{id:13,name:"Bending Screen 21HD",description:"nunc nisl duis bibendum",price:{value:66.46,currency:"EUR"},status:"Available",statusColor:"positive",date:new o(2020,8,14),verified:!1},{id:14,name:"Blaster Extreme",description:"quisque ut",price:{value:436.88,currency:"USD"},status:"Available",statusColor:"positive",date:new o(2020,8,15),verified:!0},{id:15,name:"Broad Screen 22HD",description:"ultrices posuere",price:{value:458.18,currency:"CNY"},status:"Available",statusColor:"positive",date:new o(2020,5,4),verified:!0},{id:16,name:"Camcorder View",description:"integer ac leo pellentesque",price:{value:300.52,currency:"USD"},status:"Available",statusColor:"positive",date:new o(2020,5,5),verified:!0},{id:17,name:"Cepat Tablet 10.5",description:"rutrum rutrum neque aenean auctor",price:{value:365.12,currency:"NZD"},status:"No info",date:new o(2020,5,6),verified:!0},{id:18,name:"Ergo Mousepad",description:"tortor duis mattis egestas",price:{value:354.46,currency:"EUR"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,5,7),verified:!0},{id:19,name:"Ergo Screen E-I",description:"massa quis augue luctus tincidunt",price:{value:387.23,currency:"NZD"},status:"Stocked on demand",statusColor:"informative",date:new o(2020,3,23),verified:!0},{id:20,name:"Ergo Screen E-II",description:"orci eget",price:{value:75.86,currency:"EUR"},status:"No info",date:new o(2020,3,20),verified:!1},{id:21,name:"Gaming Monster",description:"cubilia curae",price:{value:152.95,currency:"EGP"},status:"No info",date:new o(2020,9,20),verified:!1},{id:22,name:"Gaming Monster Pro",description:"pharetra magna vestibulum aliquet",price:{value:213.47,currency:"MZN"},status:"Out of stock",statusColor:"negative",date:new o(2020,4,17),verified:!1}];var Te="preserved-state/platform-table-preserved-state-example.component.html",we="preserved-state/platform-table-preserved-state-example.component.ts",rt=(()=>{class n{constructor(){this.childService=v(ne),this.route=v(G),this.preservedStateFiles=[{language:"html",code:V(Te),fileName:"platform-table-preserved-state-example",name:"platform-table-preserved-state-example"},{language:"typescript",code:V(we),fileName:"platform-table-preserved-state-example",component:"PlatformTablePreservedStateExampleComponent",name:"platform-table-preserved-state-example"}],this.childService.setLink(this.route.snapshot.routeConfig?.path)}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=y({type:n,selectors:[["fdp-doc-preserved-state-docs"]],standalone:!0,features:[S],decls:32,vars:1,consts:[["id","preserved-state","componentName","table"],[3,"exampleFiles"]],template:function(r,a){r&1&&(l(0,"fd-docs-section-title",0),s(1," Preserving table state"),c(),l(2,"description")(3,"p"),s(4," In some cases, application should preserve the state of the table (current page, filters, grouping, sorting, etc) while navigating over pages. "),c(),l(5,"p"),s(6," To do so, developers can take advantage of using "),l(7,"code"),s(8,"initial[Property]"),c(),s(9," input properties and "),l(10,"code"),s(11,"[property]Change"),c(),s(12," output events. "),c(),l(13,"p"),s(14," Developers can also listen to a table body scroll event with the help of "),l(15,"code"),s(16,"(tableScrolled)"),c(),s(17," output event, when "),l(18,"code"),s(19,"[pageScrolling]"),c(),s(20," input property is "),l(21,"code"),s(22,"true"),c(),s(23,". "),c(),l(24,"p"),s(25," The example below demonstrates how to pass initial state and store changed state locally, then recreate the table component and pass updated state to it. "),c(),l(26,"p"),s(27," The logic behind it is to keep loaded data source items in memory, manipulate their properties when some event from table emits, and reuse this data on new table initialization. "),c()(),l(28,"component-example"),C(29,"fdp-platform-table-preserved-state-example"),c(),C(30,"code-example",1)(31,"separator")),r&2&&(b(30),h("exampleFiles",a.preservedStateFiles))},dependencies:[ie,re,ae,he,X,oe,_],encapsulation:2,changeDetection:0})}}return n})();export{rt as PreservedStateDocsComponent};
