import{Ie as B,Je as R,Ke as N,Le as H,Wb as y,Xb as v,gc as S,ka as x,ne as D,oe as b,pe as F,qa as T,qe as M,xc as g}from"./chunk-AUNCFUUT.js";import"./chunk-RTUAT6B3.js";import"./chunk-RHO4TFSB.js";import{$b as p,Cb as c,Eb as I,Ka as a,Sb as o,ad as k,gb as m,ja as s,qa as _,qb as A,ra as C,rb as L,sb as h,tb as t,ub as e,vb as u,zb as E}from"./chunk-KLPBKWPE.js";function U(i,w){if(i&1){let l=E();t(0,"fdp-action-list-item",2),c("actionClicked",function(r){_(l);let d=I();return C(d._actionedRow(r))}),e()}if(i&2){let l=w.$implicit;m("role","option")("title",l.title)}}var V=(()=>{class i{constructor(){this.items=[{title:"Action 1"},{title:"Action 2"},{title:"Action 3"},{title:"Action 4"}]}_actionedRow(l){alert("invoked :"+l.source.button.nativeElement.getAttribute("title"))}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=s({type:i,selectors:[["fdp-platform-action-list-item-border-less-example"]],standalone:!0,features:[p],decls:3,vars:2,consts:[["id","cozy-list",3,"noBorder","role"],[3,"role","title"],[3,"actionClicked","role","title"]],template:function(n,r){n&1&&(t(0,"fdp-list",0),L(1,U,1,2,"fdp-action-list-item",1,A),e()),n&2&&(m("noBorder",!0)("role","listbox"),a(),h(r.items))},dependencies:[g,S,y,v],encapsulation:2})}}return i})();function j(i,w){if(i&1){let l=E();t(0,"fdp-action-list-item",6),c("actionClicked",function(r){_(l);let d=I();return C(d._actionedRow(r))}),e()}if(i&2){let l=w.$implicit;m("role","option")("title",l.title)}}var Y=(()=>{class i{constructor(){this.items=[{title:"Action 1"},{title:"Action 2"},{title:"Action 3"},{title:"Action 4"}]}_actionedRow(l){alert("invoked :"+l.source.button.nativeElement.getAttribute("title"))}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=s({type:i,selectors:[["fdp-platform-action-list-item-example"]],standalone:!0,features:[p],decls:12,vars:6,consts:[[3,"role"],["title","Action 1",3,"actionClicked","role"],["title","Action 2",3,"actionClicked","role"],["title","Action 3",3,"actionClicked","role"],["title","Action 4",3,"actionClicked","role"],[3,"role","title"],[3,"actionClicked","role","title"]],template:function(n,r){n&1&&(t(0,"h3"),o(1,"Declarative Approach"),e(),t(2,"fdp-list",0)(3,"fdp-action-list-item",1),c("actionClicked",function(f){return r._actionedRow(f)}),e(),t(4,"fdp-action-list-item",2),c("actionClicked",function(f){return r._actionedRow(f)}),e(),t(5,"fdp-action-list-item",3),c("actionClicked",function(f){return r._actionedRow(f)}),e(),t(6,"fdp-action-list-item",4),c("actionClicked",function(f){return r._actionedRow(f)}),e()(),t(7,"h3"),o(8,"Imperative Approach"),e(),t(9,"fdp-list",0),L(10,j,1,2,"fdp-action-list-item",5,A),e()),n&2&&(a(2),m("role","listbox"),a(),m("role","option"),a(),m("role","option"),a(),m("role","option"),a(),m("role","option"),a(3),m("role","listbox"),a(),h(r.items))},dependencies:[g,S,y,v],encapsulation:2})}}return i})();var q="platform-action-list-item-example.component.html",G="platform-action-list-item-example.component.ts",J="platform-action-list-item-border-less-example.component.html",Q="platform-action-list-item-border-less-example.component.ts",$=(()=>{class i{constructor(){this.simpleALI=[{language:"html",code:x(q),fileName:"platform-action-list-item-example"},{language:"typescript",component:"PlatformActionListItemExampleComponent",code:x(G),fileName:"platform-action-list-item-example"}],this.borderLessALI=[{language:"html",code:x(J),fileName:"platform-action-list-item-border-less-example"},{language:"typescript",component:"PlatformActionListItemBorderLessExampleComponent",code:x(Q),fileName:"platform-action-list-item-border-less-example"}]}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=s({type:i,selectors:[["app-action-list-item"]],standalone:!0,features:[p],decls:25,vars:2,consts:[["id","basic","componentName","action-list-item"],[3,"exampleFiles"],["id","no-border","componentName","action-list-item"]],template:function(n,r){n&1&&(t(0,"fd-docs-section-title",0),o(1," Action List Item "),e(),t(2,"description"),o(3," By setting "),t(4,"code"),o(5,'title="action"'),e(),o(6,` will help to create the action list items. Below examples shows declarative way to bind the list items.
`),e(),t(7,"component-example"),u(8,"fdp-platform-action-list-item-example"),e(),u(9,"code-example",1)(10,"separator"),t(11,"fd-docs-section-title",2),o(12," Action List Item "),e(),t(13,"description"),o(14," This examples displays the action list items with no border when "),t(15,"code"),o(16,' [noBorder]="true"'),e(),o(17," in fdp-list. and compact mode when "),t(18,"code"),o(19,"[fdCompact]"),e(),o(20,` directive applied to fdp-list.
`),e(),t(21,"component-example"),u(22,"fdp-platform-action-list-item-border-less-example"),e(),u(23,"code-example",1)(24,"separator")),n&2&&(a(9),m("exampleFiles",r.simpleALI),a(14),m("exampleFiles",r.borderLessALI))},dependencies:[M,b,D,Y,T,B,V],encapsulation:2})}}return i})();var z=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=s({type:i,selectors:[["app-action-list-item-header"]],standalone:!0,features:[p],decls:24,vars:0,consts:[["routerLink","/core/list"],["module","ActionListItemModule, PlatformListModule","subPackage","list"]],template:function(n,r){n&1&&(t(0,"fd-doc-page")(1,"header"),o(2,"Action List Item"),e(),t(3,"description")(4,"p"),o(5," The action list item lets the user trigger actions directly from a list item This component makes use of "),t(6,"a",0),o(7,"list-item"),e(),o(8," directive present in fundamental-ngx/core and has additional enhancements on top of it. "),e(),t(9,"h3"),o(10,"Platform specific enhancements:"),e(),t(11,"ul")(12,"li"),o(13," Action-List-item is implemented as Angular component to hide complexity of dealing with HTML in order to deliver high-order component. "),e(),t(14,"li"),o(15,"Alignment of sub element title is abstracted."),e(),t(16,"li"),o(17,"Enhanced support for accessibility which covers access by keyboard, mouse and touch."),e(),t(18,"li"),o(19,"Enhanced compatibility with screen readers."),e(),t(20,"li"),o(21,"Supports both imperative and declarative way of accepting the items for all the list variants."),e()()(),u(22,"import",1)(23,"fd-header-tabs"),e())},dependencies:[F,N,b,k,H,R],encapsulation:2})}}return i})();var de=[{path:"",component:z,children:[{path:"",component:$}],data:{primary:!0}}],fe="action-list-item",ue="actionlistitem";export{ue as API_FILE_KEY,fe as LIBRARY_NAME,de as ROUTES};
