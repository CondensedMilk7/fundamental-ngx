import{a as P,b as h}from"./chunk-JZAYWTDX.js";import{$c as ee,Ee as oe,Fe as re,Ge as pe,He as me,Ie as le,Ke as se,ad as te,ia as y,je as ne,ke as V,le as ie,me as ae,oa as $}from"./chunk-6UXCNRHI.js";import"./chunk-PIZS2GRK.js";import{Z as D}from"./chunk-CBJJHCQ6.js";import{$b as f,Cb as c,Eb as w,Ka as g,La as A,Lb as j,Mb as q,Nb as G,O as k,Rb as I,Sb as e,Tb as K,Th as W,Wb as z,Y as B,Yg as F,Yh as X,ac as v,db as _,ea as L,eb as R,gb as l,ja as u,ni as Z,ob as H,pc as M,qa as S,qb as Q,ra as b,rb as U,sb as Y,tb as n,tc as J,ub as t,vb as m,w as O,zb as E}from"./chunk-FZPMYWEN.js";function he(o,i){if(o&1&&(n(0,"div"),e(1),t()),o&2){let d=w();g(),K(d.notification)}}var ge=(()=>{let i=class i{constructor(){this.totalItems=50,this.itemsPerPage=10,this.currentPage=5,this.notification="",this._cdr=L(J)}newPageClicked(p){O(1).pipe(B(()=>{this.notification="loading..."}),k(1e3)).subscribe(()=>{this.currentPage=p,this.notification="page change success!",this._cdr.detectChanges()},()=>{this.notification="page change error!",this._cdr.detectChanges()},()=>{this.notification="New page selected: "+this.currentPage,this._cdr.detectChanges()})}goToPage(p){this.paginationComponent.goToPage(p)}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=u({type:i,selectors:[["fd-pagination-example"]],viewQuery:function(r,a){if(r&1&&j(P,5),r&2){let s;q(s=G())&&(a.paginationComponent=s.first)}},standalone:!0,features:[f],decls:3,vars:4,consts:[["ariaLabel","Basic pagination example",3,"pageChangeStart","displayTotalItems","totalItems","currentPage"],["fd-button","","label","Go to page 1",3,"click"]],template:function(r,a){r&1&&(n(0,"fd-pagination",0),c("pageChangeStart",function(x){return a.newPageClicked(x)}),t(),n(1,"button",1),c("click",function(){return a.goToPage(1)}),t(),_(2,he,2,1,"div")),r&2&&(l("displayTotalItems",!1)("totalItems",a.totalItems)("currentPage",a.currentPage),g(2),H(a.notification?2:-1))},dependencies:[h,P,F],encapsulation:2,changeDetection:0});let o=i;return o})();var xe=()=>[4,8,16],ce=(()=>{let i=class i{constructor(){this.totalItems=50,this.currentPage=2}onPageChange(p){this.currentPage=p}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=u({type:i,selectors:[["fd-pagination-mobile-example"]],standalone:!0,features:[f],decls:1,vars:6,consts:[["fd-toolbar-item","",3,"pageChangeStart","mobile","totalItems","itemsPerPage","currentPage","itemsPerPageOptions"]],template:function(r,a){r&1&&(n(0,"fd-pagination",0),c("pageChangeStart",function(x){return a.onPageChange(x)}),t()),r&2&&l("mobile",!0)("totalItems",a.totalItems)("itemsPerPage",4)("currentPage",a.currentPage)("itemsPerPageOptions",v(5,xe))},dependencies:[h,P,D],encapsulation:2});let o=i;return o})();var Ce=()=>[4,8,16],Se=()=>[2,5,100];function be(o,i){if(o&1&&m(0,"button",6),o&2){let d=i.$implicit;l("label",d+""),R("aria-label","Show "+d+" items per page")("value",d)}}function ye(o,i){if(o&1){let d=E();n(0,"fd-segmented-button",5),c("ngModelChange",function(r){let a=S(d).onSelect,s=w();return a(r),b(s.customItemsPerPage=r)}),U(1,be,1,3,"button",6,Q),t()}if(o&2){let d=i.pageOptions,p=w();l("ngModel",p.customItemsPerPage),g(),Y(d)}}var de=(()=>{let i=class i{constructor(){this.totalItems=150,this.currentPage1=2,this.currentPage2=2,this.currentPage3=2,this.customItemsPerPage=5}pageChanged1(p){this.currentPage1=p}pageChanged2(p){this.currentPage2=p}pageChanged3(p){this.currentPage3=p}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=u({type:i,selectors:[["fd-pagination-per-page-example"]],standalone:!0,features:[f],decls:29,vars:14,consts:[["pagination",""],["itemsPerPageCustom",""],["fd-toolbar-item","","ariaLabel","Pagination with itemsPerPage property",3,"pageChangeStart","totalItems","itemsPerPage","currentPage"],["fd-toolbar-item","","ariaLabel","Pagination with itemsPerPageOptions property",3,"pageChangeStart","totalItems","itemsPerPage","itemsPerPageOptions","currentPage"],["fd-toolbar-item","","ariaLabel","Pagination with custom items",3,"pageChangeStart","totalItems","currentPage","itemsPerPage","itemsPerPageOptions","itemsPerPageTemplate"],[3,"ngModelChange","ngModel"],["fd-button","",3,"label"]],template:function(r,a){if(r&1){let s=E();n(0,"div")(1,"h3")(2,"code"),e(3,"[itemsPerPage]=15"),t(),e(4," Default property for items per page"),t(),n(5,"fd-pagination",2),c("pageChangeStart",function(C){return S(s),b(a.pageChanged1(C))}),t()(),n(6,"div")(7,"h3")(8,"code"),e(9,'[itemsPerPageOptions]="[4,8,16]"'),t(),e(10," - Default select template for items per page options"),t(),n(11,"fd-pagination",3),c("pageChangeStart",function(C){return S(s),b(a.pageChanged2(C))}),t()(),n(12,"div")(13,"h3"),e(14,"Custom items per page - list of buttons"),t(),n(15,"p"),e(16,"Use "),n(17,"code"),e(18,'let-pageOptions="pageOptions"'),t(),e(19," on the template to get the list of options from component"),t(),n(20,"p"),e(21,"Use "),n(22,"code"),e(23,'let-onSelect="onSelect"'),t(),e(24," to pass the selection callback to the pagination component"),t(),n(25,"fd-pagination",4,0),c("pageChangeStart",function(C){return S(s),b(a.pageChanged3(C))}),t(),_(27,ye,3,1,"ng-template",null,1,M),t()}if(r&2){let s=I(28);g(5),l("totalItems",a.totalItems)("itemsPerPage",15)("currentPage",a.currentPage1),g(6),l("totalItems",a.totalItems)("itemsPerPage",4)("itemsPerPageOptions",v(12,Ce))("currentPage",a.currentPage2),g(14),l("totalItems",a.totalItems)("currentPage",a.currentPage3)("itemsPerPage",5)("itemsPerPageOptions",v(13,Se))("itemsPerPageTemplate",s)}},dependencies:[h,P,D,te,ee,Z,W,X,F],encapsulation:2});let o=i;return o})();function _e(o,i){if(o&1&&e(0),o&2){let d=i.showing;z(" From ",d.from," to ",d.to,". Total items ",d.totalCount," ")}}var ue=(()=>{let i=class i{constructor(){this.totalItems=50,this.itemsPerPage=10,this.currentPage=1}pageChanged(p){this.currentPage=p}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=u({type:i,selectors:[["fd-pagination-showing-example"]],standalone:!0,features:[f],decls:3,vars:4,consts:[["customDisplayTextTemplate",""],["ariaLabel","Pagination with displayTextTemplate property",3,"pageChangeStart","totalItems","displayTextTemplate","itemsPerPage","currentPage"]],template:function(r,a){if(r&1){let s=E();n(0,"fd-pagination",1),c("pageChangeStart",function(C){return S(s),b(a.pageChanged(C))}),t(),_(1,_e,1,3,"ng-template",null,0,M)}if(r&2){let s=I(2);l("totalItems",a.totalItems)("displayTextTemplate",s)("itemsPerPage",a.itemsPerPage)("currentPage",a.currentPage)}},dependencies:[h,P],encapsulation:2});let o=i;return o})();var Ee="pagination-example.component.ts",we="pagination-showing-example.component.ts",ve="pagination-per-page/pagination-per-page-example.component.html",Te="pagination-per-page/pagination-per-page-example.component.ts",Ie="pagination-mobile/pagination-mobile-example.component.html",Me="pagination-mobile/pagination-mobile-example.component.ts",fe=(()=>{let i=class i{constructor(p){this.schemaFactory=p,this.data={properties:{totalItems:70,itemsPerPage:2,currentPage:5,mobile:!1}},this.paginationBasic=[{language:"typescript",code:y(Ee),fileName:"pagination-example",component:"PaginationExampleComponent"}],this.paginationShowing=[{language:"typescript",code:y(we),fileName:"pagination-showing-example",component:"PaginationShowingExampleComponent"}],this.paginationPerPageSrc=[{language:"html",code:y(ve),fileName:"pagination-per-page-example"},{language:"typescript",code:y(Te),fileName:"pagination-per-page-example",component:"PaginationPerPageExampleComponent"}],this.paginationMobile=[{language:"html",code:y(Ie),fileName:"pagination-mobile-example"},{language:"typescript",code:y(Me),fileName:"pagination-mobile-example",component:"PaginationMobileExampleComponent"}],this.schema=this.schemaFactory.getComponent("pagination")}onSchemaValues(p){this.data=p}};i.\u0275fac=function(r){return new(r||i)(A(le))},i.\u0275cmp=u({type:i,selectors:[["app-pagination"]],standalone:!0,features:[f],decls:80,vars:10,consts:[["id","basic","componentName","pagination"],[3,"exampleFiles"],["id","items","componentName","pagination"],["id","per-page","componentName","pagination"],["id","mobile","componentName","pagination"],["id","playground-pagination","componentName","pagination"],[3,"onFormChanges","schema","schemaInitialValues"],[3,"totalItems","itemsPerPage","currentPage","mobile"]],template:function(r,a){r&1&&(n(0,"fd-docs-section-title",0),e(1," Basic Pagination "),t(),n(2,"component-example"),m(3,"fd-pagination-example"),t(),m(4,"code-example",1)(5,"separator"),n(6,"fd-docs-section-title",2),e(7," Pagination showing items "),t(),n(8,"description"),e(9," Pagination with custom showing template "),n(10,"ul")(11,"li"),e(12,"Set "),n(13,"code"),e(14,"[displayTextTemplate]"),t(),e(15," property to specify the display template for showing items."),t()()(),n(16,"component-example"),m(17,"fd-pagination-showing-example"),t(),m(18,"code-example",1)(19,"separator"),n(20,"fd-docs-section-title",3),e(21,` Pagination with per page select.
`),t(),n(22,"description"),e(23," Pagination with custom showing template "),n(24,"ul")(25,"li"),e(26,"Set "),n(27,"code"),e(28,"[itemsPerPage]"),t(),e(29," property to number of items per page. It's equal 10 by default."),t(),n(30,"li"),e(31,"Set "),n(32,"code"),e(33,"[itemsPerPageOptions]"),t(),e(34," property to array of numbers for items per page select."),t(),n(35,"li"),e(36," Set "),n(37,"code"),e(38,"[itemsPerPageTemplate]"),t(),e(39," property to custom template. You will have "),n(40,"code"),e(41,"onSelect"),t(),e(42," property to interact with component. This property has higher priority than "),n(43,"code"),e(44,"[itemsPerPageOptions]"),t(),e(45,". "),t()()(),n(46,"component-example"),m(47,"fd-pagination-per-page-example"),t(),m(48,"code-example",1)(49,"separator"),n(50,"fd-docs-section-title",4),e(51," Mobile "),t(),n(52,"description"),e(53," Pagination component switches to mobile mode automatically when screen's size is smaller than 1024px in width but can set "),n(54,"code"),e(55,"mobile"),t(),e(56," or "),n(57,"code"),e(58,'[mobile]="true"'),t(),e(59," to show it always in mobile mode. "),m(60,"br")(61,"br"),e(62," Labels shown before and after current page input and can be changed using next input values: "),n(63,"ul")(64,"li")(65,"code"),e(66,"pageLabelBeforeInputMobile"),t(),e(67," (string) - label shown before input."),t(),n(68,"li")(69,"code"),e(70,"pageLabelAfterInputMobile"),t(),e(71," (function) - label with total pages count, shown after input, total pages count passed as a parameter. "),t()()(),n(72,"component-example"),m(73,"fd-pagination-mobile-example"),t(),m(74,"code-example",1)(75,"separator"),n(76,"fd-docs-section-title",5),e(77," Playground Area "),t(),n(78,"playground",6),c("onFormChanges",function(x){return a.onSchemaValues(x)}),m(79,"fd-pagination",7),t()),r&2&&(g(4),l("exampleFiles",a.paginationBasic),g(14),l("exampleFiles",a.paginationShowing),g(30),l("exampleFiles",a.paginationPerPageSrc),g(26),l("exampleFiles",a.paginationMobile),g(4),l("schema",a.schema)("schemaInitialValues",a.data),g(),l("totalItems",a.data.properties.totalItems)("itemsPerPage",a.data.properties.itemsPerPage)("currentPage",a.data.properties.currentPage)("mobile",a.data.properties.mobile))},dependencies:[ae,ne,ge,$,oe,V,ue,de,ce,se,h,P],encapsulation:2});let o=i;return o})();var Pe=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=u({type:i,selectors:[["app-pagination-header"]],standalone:!0,features:[f],decls:28,vars:0,consts:[["module","PaginationModule","subPackage","pagination"]],template:function(r,a){r&1&&(n(0,"fd-doc-page")(1,"header"),e(2,"Pagination"),t(),n(3,"description"),e(4," Use pagination components in conjunction with Lists, Tables, and Trees to allow for more efficient performance and quick access to specific records in the overall data set."),m(5,"br")(6,"br"),e(7," Pagination links are navigable via the tab key and selected with the space bar or enter key."),m(8,"br")(9,"br"),e(10,' If <= 9 pages present - all pages shown, button in active state shown for the current page, otherwise "..." (more) elements shown, input with the current page value shown, can be used to navigate to certain page.'),m(11,"br")(12,"br"),e(13," Pres Enter or Space after filling the input with page number to navigate to the certain page."),m(14,"br")(15,"br"),e(16," The pagination component's "),n(17,"code"),e(18,"currentPage"),t(),e(19," value must be updated from your component for the component to work properly."),m(20,"br")(21,"br"),e(22," Pages can be selected programmatically by calling the "),n(23,"code"),e(24,"goToPage(pageNumber)"),t(),e(25," method of the pagination component. "),t(),m(26,"import",0)(27,"fd-header-tabs"),t())},dependencies:[ie,pe,V,me,re]});let o=i;return o})();var ct=[{path:"",component:Pe,children:[{path:"",component:fe}],data:{primary:!0}}],dt="pagination",ut="pagination",ft="corePagination";export{ut as API_FILE_KEY,ft as I18N_KEY,dt as LIBRARY_NAME,ct as ROUTES};
