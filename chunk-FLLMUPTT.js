import{Z as f,da as J,ne as Q,oe as $,pe as W,qe as X,te as Z,ue as ee,ve as te,xc as A,yc as k,zc as G}from"./chunk-GD3HAKAB.js";import"./chunk-7AKGFJXI.js";import{D as R,O as H,z as U}from"./chunk-VK2A5WWN.js";import{Ba as M,Ja as B,Ka as L,La as P,ja as _,la as b,o as v,oa as N,pa as w,sa as D,ua as I,ya as V}from"./chunk-4NCGO7IN.js";import{Ab as S,Kb as a,Lb as O,Pc as z,Wb as d,Xb as q,Yb as K,eb as p,fb as F,nb as E,pb as l,qa as c,qb as t,rb as n,sb as s,tb as j,ub as Y,wb as g,ya as T,yb as C,za as h}from"./chunk-LP45MGOR.js";import"./chunk-VIJJU4QR.js";var ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["fd-token-compact-example"]],standalone:!0,features:[d],decls:8,vars:0,consts:[["fdCompact",""]],template:function(i,m){i&1&&(t(0,"fd-token",0),a(1,"Bibendum"),n(),t(2,"fd-token",0),a(3,"Lorem"),n(),t(4,"fd-token",0),a(5,"Dolor"),n(),t(6,"fd-token",0),a(7,"Filter"),n())},dependencies:[k,v],styles:["fd-token[_ngcontent-%COMP%]{padding-right:4px}"]});let o=e;return o})();var se=function(){return{deleteButtonLabel:"Deletable",ariaRoleDescription:"token"}},ce=function(o){return{coreToken:o}},oe=(()=>{let e=class e{constructor(){this.isOpen=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["fd-token-example"]],standalone:!0,features:[d],decls:9,vars:4,consts:[[3,"fdPatchLanguage"]],template:function(i,m){i&1&&(t(0,"fd-token"),a(1,"Bibendum"),n(),t(2,"fd-token"),a(3,"Lorem"),n(),j(4,0),t(5,"fd-token"),a(6,"Dolor"),n(),t(7,"fd-token"),a(8,"Filter"),n(),Y()),i&2&&(p(4),l("fdPatchLanguage",K(2,ce,q(1,se))))},dependencies:[k,U],styles:["fd-token[_ngcontent-%COMP%]{padding-right:4px}"]});let o=e;return o})();var ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["fd-token-readonly-example"]],standalone:!0,features:[d],decls:8,vars:4,consts:[[3,"readOnly"]],template:function(i,m){i&1&&(t(0,"fd-token",0),a(1,"Bibendum"),n(),t(2,"fd-token",0),a(3,"Lorem"),n(),t(4,"fd-token",0),a(5,"Dolor"),n(),t(6,"fd-token",0),a(7,"Filter"),n()),i&2&&(l("readOnly",!0),p(2),l("readOnly",!0),p(2),l("readOnly",!0),p(2),l("readOnly",!0))},dependencies:[k],styles:["fd-token[_ngcontent-%COMP%]{padding-right:4px}"]});let o=e;return o})();var re=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["fd-token-selected-example"]],standalone:!0,features:[d],decls:8,vars:4,consts:[[3,"selected"]],template:function(i,m){i&1&&(t(0,"fd-token",0),a(1,"Bibendum"),n(),t(2,"fd-token",0),a(3,"Lorem"),n(),t(4,"fd-token",0),a(5,"Dolor"),n(),t(6,"fd-token",0),a(7,"Filter"),n()),i&2&&(l("selected",!0),p(2),l("selected",!0),p(2),l("selected",!0),p(2),l("selected",!0))},dependencies:[k],styles:["fd-token[_ngcontent-%COMP%]{padding-right:4px}"]});let o=e;return o})();function fe(o,e){if(o&1){let u=g();t(0,"fd-token",5),C("onCloseClick",function(){let m=T(u).$implicit,y=S();return h(y.removeToken(m))}),a(1),n()}if(o&2){let u=e.$implicit;l("readOnly",u.readOnly),p(1),O(u.text)}}var ae=(()=>{let e=class e{constructor(r){this.fb=r,this.inputValue="New token",this.tokens=[{text:"One",readOnly:!1},{text:"Two",readOnly:!1},{text:"Three",readOnly:!1},{text:"Four",readOnly:!1},{text:"Five",readOnly:!1},{text:"Six",readOnly:!1},{text:"Seven",readOnly:!1},{text:"Eight",readOnly:!1},{text:"Nine",readOnly:!1},{text:"Ten",readOnly:!1},{text:"Eleven",readOnly:!1},{text:"Twelve",readOnly:!1},{text:"Thirteen",readOnly:!1},{text:"Fourteen",readOnly:!1},{text:"Fifteen",readOnly:!1},{text:"Sixteen",readOnly:!1}]}ngOnInit(){this.tokenizerExampleForm=this.fb.group({inputControl:new D("",b.required)})}onSubmit(){let r=this.tokenizerExampleForm.controls.inputControl.value;r=r.trim(),r&&r!==""&&(this.tokens.push({text:r,readOnly:!1}),this.tokenizerExampleForm.controls.inputControl.reset())}removeToken(r){this.tokens.splice(this.tokens.indexOf(r),1)}};e.\u0275fac=function(i){return new(i||e)(F(B))},e.\u0275cmp=c({type:e,selectors:[["fd-tokenizer-compact-example"]],standalone:!0,features:[d],decls:5,vars:2,consts:[[3,"formGroup","ngSubmit"],["fd-form-item",""],["fdCompact",""],["fdCompact","",3,"readOnly","onCloseClick",4,"ngFor","ngForOf"],["formControlName","inputControl","fd-tokenizer-input","","fd-form-control","","fdCompact","","placeholder","Field placeholder text"],["fdCompact","",3,"readOnly","onCloseClick"]],template:function(i,m){i&1&&(t(0,"form",0),C("ngSubmit",function(){return m.onSubmit()}),t(1,"div",1)(2,"fd-tokenizer",2),E(3,fe,2,2,"fd-token",3),s(4,"input",4),n()()()),i&2&&(l("formGroup",m.tokenizerExampleForm),p(3),l("ngForOf",m.tokens))},dependencies:[L,I,_,N,w,P,V,M,H,k,G,A,v,z,R],encapsulation:2});let o=e;return o})();function ke(o,e){if(o&1){let u=g();t(0,"fd-token",5),C("onCloseClick",function(){let m=T(u).$implicit,y=S();return h(y.removeToken(m))}),a(1),n()}if(o&2){let u=e.$implicit;l("readOnly",u.readOnly),p(1),O(u.text)}}var le=(()=>{let e=class e{constructor(r){this.fb=r,this.inputValue="New token",this.tokens=[{text:"One",readOnly:!1},{text:"Two",readOnly:!1},{text:"Three",readOnly:!1},{text:"Four",readOnly:!1},{text:"Five",readOnly:!1},{text:"Six",readOnly:!1},{text:"Seven",readOnly:!1},{text:"Eight",readOnly:!1},{text:"Nine",readOnly:!1},{text:"Ten",readOnly:!1},{text:"Eleven",readOnly:!1},{text:"Twelve",readOnly:!1},{text:"Thirteen",readOnly:!1},{text:"Fourteen",readOnly:!1},{text:"Fifteen",readOnly:!1},{text:"Sixteen",readOnly:!1}]}ngOnInit(){this.tokenizerExampleForm=this.fb.group({inputControl:new D("",b.required)})}onSubmit(){let r=this.tokenizerExampleForm.controls.inputControl.value;r=r.trim(),r&&r!==""&&(this.tokens.push({text:r,readOnly:!1}),this.tokenizerExampleForm.controls.inputControl.reset())}removeToken(r){this.tokens.splice(this.tokens.indexOf(r),1)}};e.\u0275fac=function(i){return new(i||e)(F(B))},e.\u0275cmp=c({type:e,selectors:[["fd-tokenizer-example"]],standalone:!0,features:[d],decls:5,vars:2,consts:[[3,"formGroup","ngSubmit"],["fd-form-item",""],["ariaRoleDescription","tokenizer"],[3,"readOnly","onCloseClick",4,"ngFor","ngForOf"],["formControlName","inputControl","fd-tokenizer-input","","fd-form-control","","placeholder","Field placeholder text"],[3,"readOnly","onCloseClick"]],template:function(i,m){i&1&&(t(0,"form",0),C("ngSubmit",function(){return m.onSubmit()}),t(1,"div",1)(2,"fd-tokenizer",2),E(3,ke,2,2,"fd-token",3),s(4,"input",4),n()()()),i&2&&(l("formGroup",m.tokenizerExampleForm),p(3),l("ngForOf",m.tokens))},dependencies:[L,I,_,N,w,P,V,M,H,k,G,A,z,R],encapsulation:2});let o=e;return o})();var ue="token-example/token-example.component.html",xe="token-example/token-example.component.ts",Ce="token-selected-example/token-selected-example.component.html",ye="token-selected-example/token-selected-example.component.ts",Te="token-readonly-example/token-readonly-example.component.html",he="token-readonly-example/token-readonly-example.component.ts",Fe="token-compact-example/token-compact-example.component.html",Ee="token-compact-example/token-compact-example.component.ts",ge="tokenizer-example/tokenizer-example.component.html",Se="tokenizer-example/tokenizer-example.component.ts",Oe="tokenizer-compact-example/tokenizer-compact-example.component.html",ze="tokenizer-compact-example/tokenizer-compact-example.component.ts",me=(()=>{let e=class e{constructor(){this.basicToken=[{language:"html",code:f(ue),fileName:"token-example",component:"TokenExampleComponent",typescriptFileCode:f(xe)}],this.selectedToken=[{language:"html",code:f(Ce),fileName:"token-selected-example",component:"TokenSelectedExampleComponent",typescriptFileCode:f(ye)}],this.readOnlyToken=[{language:"html",code:f(Te),fileName:"token-readonly-example",component:"TokenReadOnlyExampleComponent",typescriptFileCode:f(he)}],this.compactToken=[{language:"html",code:f(Fe),fileName:"token-compact-example",component:"TokenCompactExampleComponent",typescriptFileCode:f(Ee)}],this.tokenizer=[{language:"html",code:f(ge),fileName:"tokenizer-example"},{language:"typescript",component:"TokenizerExampleComponent",code:f(Se),fileName:"tokenizer-example"}],this.tokenizerCompact=[{language:"html",code:f(Oe),fileName:"tokenizer-compact-example"},{language:"typescript",component:"TokenizerCompactExampleComponent",code:f(ze),fileName:"tokenizer-compact-example"}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-token-docs"]],standalone:!0,features:[d],decls:34,vars:6,consts:[["id","default","componentName","token"],[3,"exampleFiles"],["id","selected","componentName","token"],["id","read-only","componentName","token"],["id","compact","componentName","token"],["id","tokenizer","componentName","token"],["id","tokenizer-compact","componentName","token"]],template:function(i,m){i&1&&(t(0,"fd-docs-section-title",0),a(1," Default Token "),n(),t(2,"component-example"),s(3,"fd-token-example"),n(),s(4,"code-example",1),t(5,"fd-docs-section-title",2),a(6," Selected Token "),n(),t(7,"component-example"),s(8,"fd-token-selected-example"),n(),s(9,"code-example",1),t(10,"fd-docs-section-title",3),a(11," Read Only Token "),n(),t(12,"component-example"),s(13,"fd-token-readonly-example"),n(),s(14,"code-example",1),t(15,"fd-docs-section-title",4),a(16," Compact Token "),n(),t(17,"component-example"),s(18,"fd-token-compact-example"),n(),s(19,"code-example",1),t(20,"fd-docs-section-title",5),a(21," Tokenizer "),n(),t(22,"description"),a(23,` Tokenizer is a container for tokens, often placed inside multi-input components. The Cozy tokenizer is for small and medium sized screens. The user can review the tokens by swiping them to the left or right. The tokenizer is not meant to be used as a standalone component but instead as part of the multi-input.
`),n(),t(24,"component-example"),s(25,"fd-tokenizer-example"),n(),s(26,"code-example",1),t(27,"fd-docs-section-title",6),a(28," Compact Tokenizer "),n(),t(29,"description"),a(30,` The compact tokenizer is for large screens. The user can review tokens by pressing the right or left arrows on the keyboard.
`),n(),t(31,"component-example"),s(32,"fd-tokenizer-compact-example"),n(),s(33,"code-example",1)),i&2&&(p(4),l("exampleFiles",m.basicToken),p(5),l("exampleFiles",m.selectedToken),p(5),l("exampleFiles",m.readOnlyToken),p(5),l("exampleFiles",m.compactToken),p(7),l("exampleFiles",m.tokenizer),p(7),l("exampleFiles",m.tokenizerCompact))},dependencies:[X,Q,oe,J,re,ie,ne,$,le,ae],encapsulation:2});let o=e;return o})();var pe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-token-header"]],standalone:!0,features:[d],decls:7,vars:0,consts:[["module","TokenModule","subPackage","token"]],template:function(i,m){i&1&&(t(0,"fd-doc-page")(1,"header"),a(2,"Token"),n(),t(3,"description"),a(4," A token is used to represent contextualizing information. They can be useful to show applied filters, selected values for form fields or object metadata. "),n(),s(5,"import",0)(6,"fd-header-tabs"),n())},dependencies:[W,ee,$,te,Z]});let o=e;return o})();var mt=[{path:"",component:pe,children:[{path:"",component:me}],data:{primary:!0}}],pt="token",st="token",ct=["coreToken","coreTokenizer"];export{st as API_FILE_KEY,ct as I18N_KEY,pt as LIBRARY_NAME,mt as ROUTES};
