"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[387],{80387:(f,m,o)=>{o.r(m),o.d(m,{FocusableListDocsModule:()=>O});var s=o(71567),c=o(3360),d=o(64723),e=o(65879),i=o(94702),l=o(3600),p=o(22225),g=o(96814),F=o(35099),x=o(59064);function C(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"div",3),e._uU(2),e.qZA(),e.BQk()),2&t){const n=a.index;e.xp6(2),e.hij("focusable #",n+1,"")}}function h(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"span",3),e._uU(2),e.qZA(),e.BQk()),2&t){const n=a.index;e.xp6(2),e.hij(" focusable #",n+1," ")}}let v=(()=>{class t{constructor(){this.focusableItems=new Array(5).fill(void 0),this.selectedItemIndex=2}itemFocused(n){console.log(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fundamental-ngx-focusable-list-default-example"]],decls:8,vars:2,consts:[["fdkFocusableList","",3,"itemFocused"],[4,"ngFor","ngForOf"],["fdkFocusableList","","navigationDirection","horizontal",3,"itemFocused"],["fdkFocusableItem",""]],template:function(n,u){1&n&&(e.TgZ(0,"h5"),e._uU(1,"Vertical focus list"),e.qZA(),e.TgZ(2,"div",0),e.NdJ("itemFocused",function(r){return u.itemFocused(r)}),e.YNc(3,C,3,1,"ng-container",1),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"Horizontal focus list"),e.qZA(),e.TgZ(6,"div",2),e.NdJ("itemFocused",function(r){return u.itemFocused(r)}),e.YNc(7,h,3,1,"ng-container",1),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngForOf",u.focusableItems),e.xp6(4),e.Q6J("ngForOf",u.focusableItems))},dependencies:[g.sg,F.J,x.f],styles:["[fdkFocusableList][_ngcontent-%COMP%]{border:1px dashed #dedede}[fdkFocusableItem][_ngcontent-%COMP%]{cursor:pointer;padding:5px 7px}span[fdkFocusableItem][_ngcontent-%COMP%]{display:inline-block}[fdkFocusableItem][_ngcontent-%COMP%]:focus, [fdkFocusableItem][_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus{outline-color:var(--sapContent_FocusColor);outline-offset:-.1875rem;outline-style:var(--sapContent_FocusStyle);outline-width:var(--sapContent_FocusWidth)}"],changeDetection:0}),t})(),D=(()=>{class t{constructor(){this.defaultExample=[{code:(0,c.H8)("default-example/default-example.component.html"),language:"html",fileName:"focusable-list-default-example",component:"FocusableListDefaultExample"},{code:(0,c.H8)("default-example/default-example.component.ts"),language:"ts",fileName:"focusable-list-default-example",component:"FocusableListDefaultExample"}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tabs"]],decls:5,vars:2,consts:[["id","simple","componentName","focusableList"],[3,"hasBackground"],[3,"exampleFiles"]],template:function(n,u){1&n&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1,"Basic example"),e.qZA(),e.TgZ(2,"component-example",1),e._UZ(3,"fundamental-ngx-focusable-list-default-example"),e.qZA(),e._UZ(4,"code-example",2)),2&n&&(e.xp6(2),e.Q6J("hasBackground",!1),e.xp6(2),e.Q6J("exampleFiles",u.defaultExample))},dependencies:[i.E,l.k,p.O,v],encapsulation:2}),t})();var T=o(96779),y=o(65271),L=o(94210),E=o(44798);let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:16,vars:0,consts:[["module","FocusableListModule","subPackage","utils"]],template:function(n,u){1&n&&(e.TgZ(0,"header"),e._uU(1,"Focusable List"),e.qZA(),e.TgZ(2,"description"),e._uU(3," You can quickly build out focusable list collection for your components. For that you will need to use a combination of "),e.TgZ(4,"code"),e._uU(5,"[fdkFocusableList]"),e.qZA(),e._uU(6," and "),e.TgZ(7,"code"),e._uU(8,"[fdkFocusableItem]"),e.qZA(),e._uU(9," directives. It has vertical and horizontal directions, and it also respects "),e.TgZ(10,"code"),e._uU(11,"[fdkDisabled]"),e.qZA(),e._uU(12," directive, so that those elements will be excluded from the selection sequence.\n"),e.qZA(),e._UZ(13,"import",0)(14,"fd-header-tabs")(15,"router-outlet"))},dependencies:[s.lC,T.k,y.G,L.c,E.w],encapsulation:2}),t})();var U=o(1013);const M=[{path:"",component:A,children:[{path:"",component:D},{path:"api",component:c.hz,data:{content:d.X.focusableList}}]}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[(0,c.tC)("focusable-list")],imports:[s.Bz.forChild(M),c.gP,U.la3,s.Bz]}),t})()},44798:(f,m,o)=>{o.d(m,{w:()=>d});var s=o(65879);const c=["*"];let d=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["description"]],ngContentSelectors:c,decls:2,vars:0,consts:[[1,"description"]],template:function(l,p){1&l&&(s.F$t(),s.TgZ(0,"p",0),s.Hsn(1),s.qZA())},styles:[".description[_ngcontent-%COMP%]{color:var(--sapTextColor);font-weight:300;font-size:1rem;margin-bottom:1.5rem}"],changeDetection:0}),e})()},65271:(f,m,o)=>{o.d(m,{G:()=>d});var s=o(65879);const c=["*"];let d=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["header"]],ngContentSelectors:c,decls:2,vars:0,consts:[[1,"header"]],template:function(l,p){1&l&&(s.F$t(),s.TgZ(0,"h1",0),s.Hsn(1),s.qZA())},styles:[".header[_ngcontent-%COMP%]{color:var(--sapPageHeader_TextColor);margin-top:2rem;font-size:2.2rem}"],changeDetection:0}),e})()}}]);