import{a as v,b as f,c as x,d as h,e as C,f as M}from"./chunk-DV57WUW2.js";import{I as B,b as w,c as F,i as _,j as A,r as k}from"./chunk-3IMOVU3K.js";import{De as ue,Ee as fe,Fe as xe,Ge as he,ga as I,ha as g,ie as pe,je as T,ke as ce,le as ge,na as de}from"./chunk-JIOGNFRM.js";import"./chunk-EWC5ZUG7.js";import"./chunk-UQUVN54K.js";import{Ab as j,Db as N,Fb as q,H as L,La as m,Ma as O,Og as Z,Rc as Q,Sb as K,Tb as e,Tc as W,Tg as ee,Xa as G,Zg as u,_g as te,ac as c,dh as ie,ea as $,eb as Y,fh as ae,hb as r,hh as se,ib as S,ka as p,kh as le,ph as oe,qc as J,ra as y,rf as X,rh as ne,sa as D,sh as re,ub as i,uh as me,vb as t,wb as o,z as U}from"./chunk-SOBFYXRE.js";function _e(l,a){if(l&1){let b=j();i(0,"fd-dialog",3)(1,"fd-dialog-header")(2,"h1",4),e(3,"Header"),t(),i(4,"button",5),N("click",function(){let s=y(b).$implicit;return D(s.dismiss("Close button"))}),t()(),i(5,"fd-dialog-body")(6,"figure",6)(7,"figcaption",7)(8,"h3",8),e(9,"Unable to load data"),t(),i(10,"p",9),e(11," Check your internet connection. If that's not it, try refreshing the page. If that still doesn't help, check with your administrator. "),t()()()(),i(12,"fd-dialog-footer"),o(13,"fd-button-bar",10),i(14,"fd-button-bar",11),N("click",function(){let s=y(b).$implicit;return D(s.dismiss("Close button"))}),t()()()}if(l&2){let b=a.$implicit,n=a.dialogConfig,s=q();r("dialogConfig",n)("dialogRef",b),m(2),r("id",s.dialogId+"-header"),m(4),r("svgConfig",s.dialogSvgConfig),m(),r("id",s.dialogId+"-description")}}var Ce=(()=>{let a=class a{constructor(n){this._dialogService=n,this.dialogSvgConfig={dialog:{url:"assets/images/sapIllus-Dialog-NoMail.svg",id:"sapIllus-Dialog-NoMail"}},this.dialogId="im-dialog-81mf46"}openDialog(n){this._dialogService.open(n,{id:this.dialogId,ariaLabelledBy:`${this.dialogId}-header`,ariaDescribedBy:`${this.dialogId}-description`})}};a.\u0275fac=function(s){return new(s||a)(O(ne))},a.\u0275cmp=p({type:a,selectors:[["fd-illustrated-message-dialog-example"]],standalone:!0,features:[c],decls:3,vars:0,consts:[["messageDialog",""],[3,"fdDialogTemplate"],["fd-button","","label","Open Dialog Illustrated Message",3,"click"],[3,"dialogConfig","dialogRef"],["fd-title","",3,"id"],["fd-dialog-close-button","",3,"click"],["fd-illustrated-message","","type","dialog",3,"svgConfig"],["fd-illustrated-message-figcaption","","role","document",3,"id"],["fd-illustrated-message-title",""],["fd-illustrated-message-text",""],["fdkInitialFocus","","fdType","emphasized","label","Reload"],["label","Close",3,"click"]],template:function(s,d){if(s&1){let we=j();Y(0,_e,15,5,"ng-template",1,0,J),i(2,"button",2),N("click",function(){y(we);let Fe=K(1);return D(d.openDialog(Fe))}),t()}},dependencies:[me,oe,Z,ae,le,ee,re,te,se,M,C,f,x,h,ie,X,u],encapsulation:2});let l=a;return l})();var Me=(()=>{let a=class a{constructor(){this.spotConfig={dot:{url:"assets/images/sapIllus-Spot-NoMail.svg",id:"sapIllus-Spot-NoEmail"}}}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=p({type:a,selectors:[["fd-illustrated-message-dot-example"]],standalone:!0,features:[c],decls:15,vars:3,consts:[["aria-labelledby","dot-label","aria-describedby","dot-description","role","group"],["fd-card-title","","id","dot-label"],["fd-illustrated-message","","type","dot",3,"svgConfig"],["fd-illustrated-message-figcaption","","id","dot-description"],["fd-illustrated-message-title",""],["fd-illustrated-message-text",""],["fd-button","","label","Compose"]],template:function(s,d){s&1&&(i(0,"div")(1,"fd-card",0)(2,"fd-card-header")(3,"fd-card-main-header")(4,"h2",1),e(5,"Inbox"),t()()(),i(6,"fd-card-content")(7,"figure",2)(8,"figcaption",3)(9,"h3",4),e(10,"No new mail"),t(),i(11,"p",5),e(12,"Check back again later."),t()(),i(13,"fd-illustrated-message-actions"),o(14,"button",6),t()()()()()),s&2&&(S("max-width",205,"px"),m(7),r("svgConfig",d.spotConfig))},dependencies:[B,w,A,k,F,_,M,C,v,f,x,h,u],encapsulation:2});let l=a;return l})();var Se=(()=>{let a=class a{constructor(){this.sceneConfig={scene:{url:"assets/images/sapIllus-Scene-NoMail.svg",id:"sapIllus-Scene-NoMail-1"},dialog:{url:"assets/images/sapIllus-Dialog-NoMail.svg",id:"sapIllus-Dialog-NoMail"}}}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=p({type:a,selectors:[["fd-illustrated-message-example"]],standalone:!0,features:[c],decls:10,vars:7,consts:[["fd-illustrated-message","","svgAriaLabel","Illustration label",3,"svgConfig"],["fd-illustrated-message-figcaption",""],["fd-illustrated-message-title",""],["fd-illustrated-message-text",""],["fd-button","","label","Action One"],["fd-button","","label","Action Two"]],template:function(s,d){s&1&&(i(0,"div")(1,"figure",0)(2,"figcaption",1)(3,"h3",2),e(4,"Headline text goes here"),t(),i(5,"p",3),e(6,"Description provides user with clarity and possible next steps."),t()(),i(7,"fd-illustrated-message-actions"),o(8,"button",4)(9,"button",5),t()()()),s&2&&(S("width",100,"%")("display","flex")("justify-content","center"),m(),r("svgConfig",d.sceneConfig))},dependencies:[M,C,v,f,x,h,u],encapsulation:2});let l=a;return l})();var ze="assets/images/sapIllus-Scene-NoMail.svg",Pe="assets/images/sapIllus-Dialog-NoMail.svg",Ie=l=>$(Q).get(l,{responseType:"text",headers:{accept:"text/html"}}).pipe(U(a=>a.trim())),ve=(()=>{let a=class a{constructor(){this.sceneConfig=G({}),this.assets=[Ie(ze),Ie(Pe)]}ngAfterViewInit(){L(...this.assets).subscribe(([n,s])=>{this.sceneConfig.set({scene:{file:n,id:"sapIllus-Scene-NoMail-1"},dialog:{file:s,id:"sapIllus-Dialog-NoMail"}})})}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=p({type:a,selectors:[["fd-illustrated-message-inline-example"]],standalone:!0,features:[c],decls:10,vars:7,consts:[["fd-illustrated-message","",3,"svgConfig"],["fd-illustrated-message-figcaption",""],["fd-illustrated-message-title",""],["fd-illustrated-message-text",""],["fd-button","","label","Action One"],["fd-button","","label","Action Two"]],template:function(s,d){s&1&&(i(0,"div")(1,"figure",0)(2,"figcaption",1)(3,"h3",2),e(4,"Headline text goes here"),t(),i(5,"p",3),e(6,"Description provides user with clarity and possible next steps."),t()(),i(7,"fd-illustrated-message-actions"),o(8,"button",4)(9,"button",5),t()()()),s&2&&(S("width",100,"%")("display","flex")("justify-content","center"),m(),r("svgConfig",d.sceneConfig()))},dependencies:[M,C,v,f,x,h,u,W],encapsulation:2,changeDetection:0});let l=a;return l})();var Ee=(()=>{let a=class a{constructor(){this.spotConfig={spot:{url:"assets/images/sapIllus-Spot-NoMail.svg",id:"sapIllus-Spot-NoEmail"}}}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=p({type:a,selectors:[["fd-illustrated-message-spot-example"]],standalone:!0,features:[c],decls:15,vars:3,consts:[["aria-labelledby","spot-label","aria-describedby","spot-description","role","group"],["fd-card-title","","id","spot-label"],["fd-illustrated-message","","type","spot",3,"svgConfig"],["fd-illustrated-message-figcaption","","id","spot-description"],["fd-illustrated-message-title",""],["fd-illustrated-message-text",""],["fd-button","","label","Compose"]],template:function(s,d){s&1&&(i(0,"div")(1,"fd-card",0)(2,"fd-card-header")(3,"fd-card-main-header")(4,"h2",1),e(5,"Inbox"),t()()(),i(6,"fd-card-content")(7,"figure",2)(8,"figcaption",3)(9,"h3",4),e(10,"No new mail"),t(),i(11,"p",5),e(12,"Check back again later."),t()(),i(13,"fd-illustrated-message-actions"),o(14,"button",6),t()()()()()),s&2&&(S("max-width",400,"px"),m(7),r("svgConfig",d.spotConfig))},dependencies:[B,w,A,k,F,_,M,C,v,f,x,h,u],encapsulation:2});let l=a;return l})();var je="illustrated-message-example.component.html",Re="illustrated-message-example.component.ts",Ue="illustrated-message-dialog-example.component.html",Le="illustrated-message-dialog-example.component.ts",$e="illustrated-message-spot-example.component.html",Oe="illustrated-message-spot-example.component.ts",Ge="illustrated-message-dot-example.component.html",Ye="illustrated-message-dot-example.component.ts",be="assets/images/sapIllus-Dialog-NoMail.svg",qe="assets/images/sapIllus-Dialog-NoMail.svg",ye="assets/images/sapIllus-Scene-NoMail.svg",De="assets/images/sapIllus-Spot-NoMail.svg",Ke="illustrated-message-inline-example.component.ts",Je="illustrated-message-inline-example.component.html",Ne=(()=>{let a=class a{constructor(){this.illustratedMessageExample=[{language:"html",code:g(je),fileName:"illustrated-message-example"},{language:"typescript",code:g(Re),fileName:"illustrated-message-example",component:"IllustratedMessageExampleComponent"},{language:"svg",code:I(be),fileName:"sapIllus-Dialog-NoMail",path:"src/assets/images"},{language:"svg",code:I(ye),fileName:"sapIllus-Scene-NoMail",path:"src/assets/images"}],this.illustratedMessageDialogExample=[{language:"html",code:g(Ue),fileName:"illustrated-message-dialog-example"},{language:"typescript",code:g(Le),fileName:"illustrated-message-dialog-example",component:"IllustratedMessageDialogExampleComponent"},{language:"svg",code:I(qe),fileName:"sapIllus-Dialog-NoMail",path:"src/assets/images"}],this.illustratedMessageSpotExample=[{language:"html",code:g($e),fileName:"illustrated-message-spot-example"},{language:"typescript",code:g(Oe),fileName:"illustrated-message-spot-example",component:"IllustratedMessageSpotExampleComponent"},{language:"svg",code:I(De),fileName:"sapIllus-Spot-NoMail",path:"src/assets/images"}],this.illustratedMessageDotExample=[{language:"html",code:g(Ge),fileName:"illustrated-message-dot-example"},{language:"typescript",code:g(Ye),fileName:"illustrated-message-dot-example",component:"IllustratedMessageDotExampleComponent"},{language:"svg",code:I(De),fileName:"sapIllus-Spot-NoMail",path:"src/assets/images"}],this.illustratedMessageInlineExample=[{language:"html",code:g(Je),fileName:"illustrated-message-inline-example"},{language:"typescript",code:g(Ke),fileName:"illustrated-message-inline-example",component:"IllustratedMessageInlineExampleComponent"},{language:"svg",code:I(be),fileName:"sapIllus-Dialog-NoMail",path:"src/assets/images"},{language:"svg",code:I(ye),fileName:"sapIllus-Scene-NoMail",path:"src/assets/images"}]}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=p({type:a,selectors:[["app-illustrated-message"]],standalone:!0,features:[c],decls:62,vars:5,consts:[["id","scene","componentName","illustrated-message"],[3,"exampleFiles"],["id","dialog","componentName","illustrated-message"],["id","spot","componentName","illustrated-message"],["id","dot","componentName","illustrated-message"],["id","inline","componentName","illustrated-message"]],template:function(s,d){s&1&&(i(0,"fd-docs-section-title",0),e(1," Scene "),t(),i(2,"description"),e(3,"The configuration object passed to "),i(4,"code"),e(5,"[svgConfig]"),t(),e(6," should contain values for both 'scene' and 'dialog'. For screens smaller than 600px the 'dialog' svg is applied."),t(),i(7,"component-example"),o(8,"fd-illustrated-message-example"),t(),o(9,"code-example",1)(10,"separator"),i(11,"fd-docs-section-title",2),e(12," Dialog "),t(),i(13,"description"),e(14,"Set the "),i(15,"code"),e(16,"type"),t(),e(17," property to "),i(18,"code"),e(19,"dialog"),t(),e(20," for Illustration Message used in a Dialog or a Message Box."),t(),i(21,"component-example"),o(22,"fd-illustrated-message-dialog-example"),t(),o(23,"code-example",1)(24,"separator"),i(25,"fd-docs-section-title",3),e(26," Spot "),t(),i(27,"description"),e(28,"Set the "),i(29,"code"),e(30,"type"),t(),e(31," property to "),i(32,"code"),e(33,"spot"),t(),e(34," for Illustration Message used in medium-sized cards or UI elements smaller than full screen."),t(),i(35,"component-example"),o(36,"fd-illustrated-message-spot-example"),t(),o(37,"code-example",1),i(38,"fd-docs-section-title",4),e(39," Dot "),t(),i(40,"description"),e(41," Set the "),i(42,"code"),e(43,"type"),t(),e(44," property to "),i(45,"code"),e(46,"dot"),t(),e(47,` for Illustration Message used in small-sized cards or UI elements smaller than full screen.
`),t(),i(48,"component-example"),o(49,"fd-illustrated-message-dot-example"),t(),o(50,"code-example",1)(51,"separator"),i(52,"fd-docs-section-title",5),e(53," Inline SVG "),t(),i(54,"description")(55,"p"),e(56,"In some cases it's not applicable to use URLs for the SVG locations."),t(),i(57,"p"),e(58,"In this case developers can load SVG directly into their js code and pass it as a string to the component."),t()(),i(59,"component-example"),o(60,"fd-illustrated-message-inline-example"),t(),o(61,"code-example",1)),s&2&&(m(9),r("exampleFiles",d.illustratedMessageExample),m(14),r("exampleFiles",d.illustratedMessageDialogExample),m(14),r("exampleFiles",d.illustratedMessageSpotExample),m(13),r("exampleFiles",d.illustratedMessageDotExample),m(11),r("exampleFiles",d.illustratedMessageInlineExample))},dependencies:[ge,T,pe,Se,de,ue,Ce,Ee,Me,ve],encapsulation:2});let l=a;return l})();var Te=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=p({type:a,selectors:[["app-illustrated-message-header"]],standalone:!0,features:[c],decls:79,vars:0,consts:[["module","IllustratedMessageModule","subPackage","illustrated-message"]],template:function(s,d){s&1&&(i(0,"fd-doc-page")(1,"header"),e(2,"Illustrated Message"),t(),i(3,"description"),e(4," Illustrated messages for SAP Fiori are a simple yet powerful way to engage users and add personality to the experience. "),t(),o(5,"import",0)(6,"br"),i(7,"div")(8,"h3"),e(9,"Structure"),t(),i(10,"ul")(11,"li")(12,"b"),e(13,"Illustration (optional)"),t(),e(14," - helps clarify the situation. Must always be paired with a message."),o(15,"br"),e(16,"To set the Illustration you need to provide a configuration object containing the "),i(17,"i"),e(18,"url"),t(),e(19," and the "),i(20,"i"),e(21,"id"),t(),e(22," of the svg. "),o(23,"br"),e(24,"For 'scene' type, both 'scene' and 'dialog' must be set in order to change the svg on small screens. Pass the configuration object to the "),i(25,"code"),e(26,"[svgConfig]"),t(),e(27," property of "),i(28,"code"),e(29,"fd-illustrated-message"),t(),e(30,". To exclude the illustration set the "),i(31,"code"),e(32,"noSvg"),t(),e(33," property to true. "),o(34,"br")(35,"br"),t(),i(36,"li")(37,"b"),e(38,"Message (required)"),t(),e(39," - "),i(40,"code"),e(41,"fd-illustrated-message-figcaption"),t(),o(42,"br"),e(43,"Consists of: "),i(44,"ul")(45,"li")(46,"b"),e(47,"title"),t(),e(48," - "),i(49,"code"),e(50,"fd-illustrated-message-title"),t(),e(51," - a single line and explains the state. "),t(),i(52,"li")(53,"b"),e(54,"text"),t(),e(55," - "),i(56,"code"),e(57,"fd-illustrated-message-text"),t(),e(58," - adds details and, where appropriate, tells the user what to do next. It's recommended to fit the text in three lines or less. "),t()(),o(59,"br")(60,"br"),t(),i(61,"li")(62,"b"),e(63,"Call to Action (optional but recommended)"),t(),e(64," - "),i(65,"code"),e(66,"fd-illustrated-message-actions"),t(),o(67,"br"),e(68,"Include a call to action (CTA) button if there is a clear next step. "),t()(),i(69,"h3"),e(70,"Types and sizing"),t(),i(71,"ul")(72,"li"),e(73," Scene (default) - The largest illustration type, mainly used in full-screen situations. For small screens (less than 600px) the max size of the illustration is 15rem (width) and 11.25rem (height). For all other screens the max size of the illustration is 20rem (width) and 15rem (height). "),t(),i(74,"li"),e(75," Dialog - medium sized illustrations used in a Dialogs or a Message Box. The illustration size is 10rem. "),t(),i(76,"li"),e(77," Spot - the smallest and most simple product illustrations. They can be used in medium-sized cards or UI elements smaller than full screen. The size of the illustration is 8rem. "),t()()(),o(78,"fd-header-tabs"),t())},dependencies:[ce,xe,T,he,fe],encapsulation:2});let l=a;return l})();var qt=[{path:"",component:Te,children:[{path:"",component:Ne}],data:{primary:!0}}],Kt="illustrated-message",Jt="illustratedMessage";export{Jt as API_FILE_KEY,Kt as LIBRARY_NAME,qt as ROUTES};
