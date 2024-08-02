import{Ee as ie,Fd as D,Fe as ae,Gd as R,Ge as se,Hd as L,He as me,Id as I,Jd as A,Kd as j,Ld as ee,Md as p,Nd as O,ia as b,je as te,ke as H,le as oe,me as ne,oa as Z}from"./chunk-BQCGASCG.js";import"./chunk-OJDNZKOE.js";import"./chunk-J6PD7XEE.js";import{$b as x,$g as X,Cb as r,Eb as V,Ef as W,Ka as l,La as f,Rb as Y,Sb as e,Tb as u,Ub as z,Yg as C,Zg as w,_b as S,_c as G,_g as K,ac as U,ah as J,bh as Q,ch as F,db as P,gb as h,gh as y,hb as B,ja as d,pc as $,qa as _,qf as q,ra as T,tb as t,tc as k,ub as o,vb as c,zb as N}from"./chunk-QJF26QUV.js";var le=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=d({type:i,selectors:[["app-message-box-docs-header"]],standalone:!0,features:[x],decls:67,vars:2,consts:[["module","MessageBoxModule","subPackage","message-box"],["fd-title","",3,"headerSize"]],template:function(n,a){n&1&&(t(0,"fd-doc-page")(1,"header"),e(2,"Message Box"),o(),c(3,"import",0),t(4,"description")(5,"p"),e(6," The message box is a special dialog that allows you to display messages to the user. You can use the message box to display messages that are not related to a field on the UI, such as technical errors. "),o(),t(7,"p"),e(8," Message box make use of a service called "),t(9,"code"),e(10,"MessageBoxService"),o(),e(11,". It provides the ability to "),t(12,"code"),e(13,"open()"),o(),e(14," message box windows. "),o(),t(15,"p"),e(16," The "),t(17,"code"),e(18,"open()"),o(),e(19," method accepts either a "),t(20,"code"),e(21,"MessageBoxContent"),o(),e(22," object, "),t(23,"code"),e(24,"TemplateRef"),o(),e(25," or "),t(26,"code"),e(27,"Component"),o(),e(28," as the message box content. In addition, you may also provide a "),t(29,"code"),e(30,"MessageBoxConfig"),o(),e(31," object to override some default message box behaviours. "),o(),t(32,"p"),e(33," Importing either "),t(34,"code"),e(35,"BrowserAnimationsModule"),o(),e(36," or "),t(37,"code"),e(38,"NoopAnimationsModule"),o(),e(39," is required. "),t(40,"code"),e(41,"BrowserAnimationsModule"),o(),e(42," is the standard Angular animation module, it animates content as expected. "),t(43,"code"),e(44,"NoopAnimationsModule"),o(),e(45," mocks the animations and does not render them, potentially increasing performance. "),o(),t(46,"h2",1),e(47,"Use the message box if:"),o(),t(48,"ul")(49,"li"),e(50,"You want to interrupt the user while he or she performs an action."),o(),t(51,"li"),e(52,"You want to display error, warning, success, confirmation, or information messages."),o(),t(53,"li"),e(54,"You need to interrupt the user for some other reason."),o(),t(55,"li"),e(56,"You need the user to acknowledge the message."),o(),t(57,"li"),e(58,"You need the user to make a decision."),o()(),t(59,"h2",1),e(60,"Don't use the message box if:"),o(),t(61,"ul")(62,"li"),e(63,"You want to display a short success message. Instead, use Message Toast."),o(),t(64,"li"),e(65,"You can show the message directly in a form field."),o()()(),c(66,"fd-header-tabs"),o()),n&2&&(l(46),h("headerSize",5),l(13),h("headerSize",5))},dependencies:[oe,se,me,H,y,ae],encapsulation:2});let m=i;return m})();function Te(m,i){m&1&&(t(0,"div",3)(1,"fd-bar-element"),c(2,"fd-message-box-semantic-icon",4),t(3,"h1",5),e(4,"Fruit facts"),o()()(),t(5,"div",6)(6,"fd-bar-element")(7,"small",7),e(8,"Fact 1 of 12"),o()()())}function ke(m,i){if(m&1){let M=N();t(0,"div",8)(1,"fd-button-bar",9),r("click",function(){_(M);let n=V();return T(n.messageBoxRef.close("Ok"))}),o()()}}var ue=(()=>{let i=class i{constructor(s){this.messageBoxRef=s}};i.\u0275fac=function(n){return new(n||i)(f(A))},i.\u0275cmp=d({type:i,selectors:[["fd-message-box-complex-example"]],standalone:!0,features:[x],decls:8,vars:0,consts:[["fdkTemplate","header"],["id","fd-message-box-complex-template-body","role","dialog"],["fdkTemplate","footer"],["fd-bar-left",""],["glyph","activate"],["fd-title","","id","fd-message-box-complex-template-header"],["fd-bar-right",""],["id","fd-message-box-complex-template-header-2"],["fd-bar-middle",""],["fd-initial-focus","","label","Ok","fdType","emphasized","ariaLabel","Ok",3,"click"]],template:function(n,a){n&1&&(t(0,"fd-message-box")(1,"fd-message-box-header"),P(2,Te,9,0,"ng-template",0),o(),t(3,"fd-message-box-body")(4,"p",1),e(5," The jackfruit has been determined to be the largest tree fruit in the world. The jackfruit can weigh as much as 100 pounds. There have been jackfruit that has grown as tall as 4 feet in height! "),o()(),t(6,"fd-message-box-footer"),P(7,ke,2,0,"ng-template",2),o()())},dependencies:[O,L,R,I,D,j,W,y,F,X,J,Q,K,w],encapsulation:2});let m=i;return m})();var ge=(()=>{let i=class i{constructor(s){this._messageBoxService=s}open(){this._messageBoxService.open(ue,{width:"400px",ariaLabel:"aria-label attr for the Message Box"})}};i.\u0275fac=function(n){return new(n||i)(f(p))},i.\u0275cmp=d({type:i,selectors:[["fd-complex-template-example"]],standalone:!0,features:[S([p]),x],decls:1,vars:0,consts:[["fd-button","","label","Open with complex template",3,"click"]],template:function(n,a){n&1&&(t(0,"button",0),r("click",function(){return a.open()}),o())},dependencies:[C],encapsulation:2});let m=i;return m})();var be=(()=>{let i=class i{constructor(s){this.messageBoxRef=s}};i.\u0275fac=function(n){return new(n||i)(f(A))},i.\u0275cmp=d({type:i,selectors:[["ng-component"]],standalone:!0,features:[x],decls:10,vars:2,consts:[["fd-title","","id","fd-message-box-component-base-header"],["id","fd-message-box-component-base-body","role","dialog"],["fd-initial-focus","","label","Ok","ariaLabel","Ok","fdType","emphasized",3,"click"],["label","Cancel","ariaLabel","Cancel",3,"click"]],template:function(n,a){n&1&&(t(0,"fd-message-box")(1,"fd-message-box-header")(2,"h1",0),e(3),o()(),t(4,"fd-message-box-body")(5,"p",1),e(6),o()(),t(7,"fd-message-box-footer")(8,"fd-button-bar",2),r("click",function(){return a.messageBoxRef.close("Ok")}),o(),t(9,"fd-button-bar",3),r("click",function(){return a.messageBoxRef.dismiss("Cancel")}),o()()()),n&2&&(l(3),u(a.messageBoxRef.data.title),l(3),z(" ",a.messageBoxRef.data.text," "))},dependencies:[O,R,I,D,j,y,F,w],encapsulation:2});let m=i;return m})();var he=(()=>{let i=class i{constructor(s,n){this._messageBoxService=s,this._cdr=n}open(){this._messageBoxService.open(be,{data:{title:"Fruit facts",text:"Coffee beans aren't beans. They are fruit pits."},showSemanticIcon:!0,customSemanticIcon:"thumb-up",width:"400px",ariaLabelledBy:"fd-message-box-component-base-header fd-message-box-component-base-body"}).afterClosed.subscribe(n=>{this.closeReason="Message box closed with result: "+n,this._cdr.detectChanges()},n=>{this.closeReason="Message box dismissed with result: "+n,this._cdr.detectChanges()})}};i.\u0275fac=function(n){return new(n||i)(f(p),f(k))},i.\u0275cmp=d({type:i,selectors:[["fd-component-based-message-box-example"]],standalone:!0,features:[S([p]),x],decls:3,vars:1,consts:[["fd-button","","label","Open from Component",3,"click"]],template:function(n,a){n&1&&(t(0,"button",0),r("click",function(){return a.open()}),o(),t(1,"p"),e(2),o()),n&2&&(l(2),u(a.closeReason))},dependencies:[C],encapsulation:2,changeDetection:0});let m=i;return m})();var Be=(()=>{let i=class i{constructor(s){this._messageBoxService=s,this.title="Fruit facts",this.content="Strawberries have more vitamin C than oranges."}open(){let s={title:this.title,content:this.content,approveButton:"Ok",cancelButton:"Cancel",approveButtonCallback:()=>n.close("Approved"),cancelButtonCallback:()=>n.close("Canceled"),closeButtonCallback:()=>n.dismiss("Dismissed")},n=this._messageBoxService.open(s,{width:"300px",position:{top:"25px"},ariaLabelledBy:"fd-message-box-custom-position-header fd-message-box-custom-position-body"})}};i.\u0275fac=function(n){return new(n||i)(f(p))},i.\u0275cmp=d({type:i,selectors:[["fd-message-box-position-example"]],standalone:!0,features:[S([p]),x],decls:5,vars:6,consts:[["fd-button","","label","Open at the top",3,"click"],["aria-hidden","true","id","fd-message-box-custom-position-header"],["aria-hidden","true","id","fd-message-box-custom-position-body"]],template:function(n,a){n&1&&(t(0,"button",0),r("click",function(){return a.open()}),o(),t(1,"span",1),e(2),o(),t(3,"span",2),e(4),o()),n&2&&(l(),B("display","none"),l(),u(a.title),l(),B("display","none"),l(),u(a.content))},dependencies:[C],encapsulation:2});let m=i;return m})();var Ce=(()=>{let i=class i{constructor(s){this._messageBoxService=s,this.title="Fruit facts",this.content="Strawberries have more vitamin C than oranges."}open(){let s={title:this.title,content:this.content,approveButton:"Ok",cancelButton:"Cancel",approveButtonCallback:()=>n.close("Approved"),cancelButtonCallback:()=>n.close("Canceled"),closeButtonCallback:()=>n.dismiss("Dismissed")},n=this._messageBoxService.open(s,{mobile:!0,ariaLabelledBy:"fd-message-box-mobile-header fd-message-box-mobile-body"})}};i.\u0275fac=function(n){return new(n||i)(f(p))},i.\u0275cmp=d({type:i,selectors:[["fd-message-box-mobile-example"]],standalone:!0,features:[S([p]),x],decls:5,vars:6,consts:[["fd-button","","label","Open in mobile mode",3,"click"],["aria-hidden","true","id","fd-message-box-mobile-header"],["aria-hidden","true","id","fd-message-box-mobile-body"]],template:function(n,a){n&1&&(t(0,"button",0),r("click",function(){return a.open()}),o(),t(1,"span",1),e(2),o(),t(3,"span",2),e(4),o()),n&2&&(l(),B("display","none"),l(),u(a.title),l(),B("display","none"),l(),u(a.content))},dependencies:[C],encapsulation:2});let m=i;return m})();var Se=(()=>{let i=class i{constructor(s,n){this._messageBoxService=s,this._cdr=n,this.title="Fruit facts",this.content="Strawberries have more vitamin C than oranges.",this.closeReason=""}open(){let s={title:this.title,content:this.content,approveButton:"Ok",cancelButton:"Cancel",approveButtonCallback:()=>n.close("Approved"),cancelButtonCallback:()=>n.close("Canceled"),closeButtonCallback:()=>n.dismiss("Dismissed")},n=this._messageBoxService.open(s,{ariaLabelledBy:"fd-message-box-object-based-header fd-message-box-object-based-body"});n.afterClosed.subscribe({next:a=>{this.closeReason="Message box closed with result: "+a,this._cdr.detectChanges()},error:a=>{this.closeReason="Message box dismissed with result: "+a,this._cdr.detectChanges()}})}};i.\u0275fac=function(n){return new(n||i)(f(p),f(k))},i.\u0275cmp=d({type:i,selectors:[["fd-object-based-message-box-example"]],standalone:!0,features:[S([p]),x],decls:7,vars:7,consts:[["fd-button","","label","Open from object",3,"click"],["aria-hidden","true","id","fd-message-box-object-based-header"],["aria-hidden","true","id","fd-message-box-object-based-body"]],template:function(n,a){n&1&&(t(0,"button",0),r("click",function(){return a.open()}),o(),t(1,"p"),e(2),o(),t(3,"span",1),e(4),o(),t(5,"span",2),e(6),o()),n&2&&(l(2),u(a.closeReason),l(),B("display","none"),l(),u(a.title),l(),B("display","none"),l(),u(a.content))},dependencies:[C],encapsulation:2,changeDetection:0});let m=i;return m})();var ve=(()=>{let i=class i{constructor(s){this._messageBoxService=s,this.title="Fruit facts",this.content="Strawberries have more vitamin C than oranges.",this.types=""}open(s,n=!0,a){this.types=`Message box uses the semantic type "${s}" ${a?"with custom icon":"with default icon"}`;let g=this._messageBoxService.open({title:this.title,content:this.content,approveButton:"Ok",cancelButton:"Cancel",approveButtonCallback:()=>g.close("Approved"),cancelButtonCallback:()=>g.close("Canceled"),closeButtonCallback:()=>g.dismiss("Dismissed")},{type:s,showSemanticIcon:n,customSemanticIcon:a,ariaLabelledBy:"fd-message-box-semantic-types-header fd-message-box-semantic-types-body",ariaDescribedBy:"fd-message-box-semantic-types-types"})}};i.\u0275fac=function(n){return new(n||i)(f(p))},i.\u0275cmp=d({type:i,selectors:[["fd-semantic-types-example"]],standalone:!0,features:[S([p]),x],decls:14,vars:13,consts:[["fd-button","","label","Confirmation type",3,"click"],["fd-button","","fdType","emphasized","label","Information type",3,"click"],["fd-button","","fdType","negative","label","Error type",3,"click"],["fd-button","","fdType","attention","label","Warning type",3,"click"],["fd-button","","fdType","positive","label","Success type",3,"click"],["fd-button","","fdType","positive","label","Success type & custom icon",3,"click"],["fd-button","","fdType","positive","label","Success type & no icon",3,"click"],["aria-hidden","true","id","fd-message-box-semantic-types-header"],["aria-hidden","true","id","fd-message-box-semantic-types-body"],["aria-hidden","true","id","fd-message-box-semantic-types-types"]],template:function(n,a){n&1&&(t(0,"div")(1,"button",0),r("click",function(){return a.open("confirmation")}),o(),t(2,"button",1),r("click",function(){return a.open("information")}),o(),t(3,"button",2),r("click",function(){return a.open("error")}),o(),t(4,"button",3),r("click",function(){return a.open("warning")}),o(),t(5,"button",4),r("click",function(){return a.open("success")}),o(),t(6,"button",5),r("click",function(){return a.open("success",!1,"thumb-up")}),o(),t(7,"button",6),r("click",function(){return a.open("success",!1)}),o()(),t(8,"span",7),e(9),o(),t(10,"span",8),e(11),o(),t(12,"span",9),e(13),o()),n&2&&(B("display","flex")("justify-content","space-between"),l(8),B("display","none"),l(),u(a.title),l(),B("display","none"),l(),u(a.content),l(),B("display","none"),l(),u(a.types))},dependencies:[C],encapsulation:2});let m=i;return m})();function we(m,i){if(m&1){let M=N();t(0,"fd-message-box",3)(1,"fd-message-box-header"),c(2,"fd-message-box-semantic-icon",4),t(3,"h1",5),e(4,"Fruit facts"),o()(),t(5,"fd-message-box-body")(6,"p",6),e(7,"The World's Most Popular Fruit is the tomato."),o()(),t(8,"fd-message-box-footer")(9,"fd-button-bar",7),r("click",function(){let n=_(M).$implicit;return T(n.close("Ok"))}),o(),t(10,"fd-button-bar",8),r("click",function(){let n=_(M).$implicit;return T(n.dismiss("Cancel"))}),o()()()}if(m&2){let M=i.$implicit,s=i.messageBoxConfig;h("messageBoxConfig",s)("messageBoxRef",M)}}var ye=(()=>{let i=class i{constructor(s,n){this._messageBoxService=s,this._cdr=n}open(s){this._messageBoxService.open(s,{ariaLabel:"aria-label attr for the Message Box",focusTrapped:!0}).afterClosed.subscribe(a=>{this.confirmationReason="Message box closed with result: "+a,this._cdr.detectChanges()},a=>{this.confirmationReason="Message box dismissed with result: "+a,this._cdr.detectChanges()})}};i.\u0275fac=function(n){return new(n||i)(f(p),f(k))},i.\u0275cmp=d({type:i,selectors:[["fd-template-based-message-box-example"]],standalone:!0,features:[x],decls:5,vars:1,consts:[["messageBoxTemplate",""],[3,"fdMessageBoxTemplate"],["fd-button","","label","Open from Template",3,"click"],[3,"messageBoxConfig","messageBoxRef"],["glyph","favorite"],["id","fd-message-box-template-base-header","fd-title",""],["id","fd-message-box-template-base-body"],["fdkInitialFocus","","label","Ok","fdType","emphasized","ariaLabel","Ok",3,"click"],["label","Cancel","ariaLabel","Cancel",3,"click"]],template:function(n,a){if(n&1){let g=N();P(0,we,11,2,"ng-template",1,0,$),t(2,"button",2),r("click",function(){_(g);let Me=Y(1);return T(a.open(Me))}),o(),t(3,"p"),e(4),o()}n&2&&(l(4),u(a.confirmationReason))},dependencies:[O,L,R,I,D,j,ee,q,y,F,w,C],encapsulation:2,changeDetection:0});let m=i;return m})();var Fe=()=>["/core/global-config"],De="template-based/template-based-message-box-example.component.ts",Re="template-based/template-based-message-box-example.component.html",Ie="component-based/component-based-message-box-example.component.ts",je="component-based/message-box-example.component.ts",Oe="object-based/object-based-message-box-example.component.ts",Pe="object-based/object-based-message-box-example.component.html",Ne="semantic-types/semantic-types-example.component.ts",Le="semantic-types/semantic-types-example.component.html",Ae="custom-position/message-box-position-example.component.html",He="custom-position/message-box-position-example.component.ts",Ve="mobile-mode/message-box-mobile-example.component.html",Ye="mobile-mode/message-box-mobile-example.component.ts",ze="complex-template/complex-template-example.component.ts",Ue="complex-template/message-box-complex-example.component.ts",Ee=(()=>{let i=class i{constructor(){this.objectBased=[{language:"html",code:b(Pe),fileName:"object-based-message-box-example"},{language:"typescript",code:b(Oe),fileName:"object-based-message-box-example",component:"ObjectBasedMessageBoxExampleComponent"}],this.templateBased=[{language:"html",code:b(Re),fileName:"template-based-message-box-example"},{language:"typescript",code:b(De),fileName:"template-based-message-box-example",component:"TemplateBasedMessageBoxExampleComponent"}],this.componentBased=[{language:"typescript",code:b(je),name:"Message box content",fileName:"message-box-example",component:"MessageBoxExampleComponent",entryComponent:!0},{language:"typescript",code:b(Ie),entryComponent:!0,main:!0,fileName:"component-based-message-box-example",component:"ComponentBasedMessageBoxExampleComponent"}],this.semanticTypes=[{language:"html",code:b(Le),fileName:"semantic-types-example"},{language:"typescript",code:b(Ne),fileName:"semantic-types-example",component:"SemanticTypesExampleComponent"}],this.mobileMode=[{language:"html",code:b(Ve),fileName:"message-box-mobile-example"},{language:"typescript",code:b(Ye),fileName:"message-box-mobile-example",component:"MessageBoxMobileExampleComponent"}],this.customPosition=[{language:"html",code:b(Ae),fileName:"message-box-position-example"},{language:"typescript",code:b(He),fileName:"message-box-position-example",component:"MessageBoxPositionExampleComponent"}],this.complexTemplate=[{language:"typescript",code:b(ze),name:"Message box complex",fileName:"complex-template-example",component:"ComplexTemplateExampleComponent",main:!0,entryComponent:!0},{language:"typescript",code:b(Ue),entryComponent:!0,fileName:"message-box-complex-example",component:"MessageBoxComplexExampleComponent"}]}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=d({type:i,selectors:[["app-message-box-docs"]],standalone:!0,features:[x],decls:153,vars:9,consts:[["id","object-based","componentName","message-box"],[3,"exampleFiles"],["id","template-based","componentName","message-box"],["id","component-based","componentName","message-box"],["id","semantic-types","componentName","message-box"],["id","custom-position","componentName","message-box"],["fragment","message-box-config",3,"routerLink"],["id","mobile-mode","componentName","message-box"],["id","complex-template","componentName","message-box"]],template:function(n,a){n&1&&(t(0,"fd-docs-section-title",0),e(1," Object based message box "),o(),t(2,"description"),e(3," The easiest and fastest way to create a simple message box is to use object based approach. Message box content can be declared as a "),t(4,"code"),e(5,"MessageBoxContent"),o(),e(6," and passed as an argument to "),t(7,"code"),e(8,"MessageBoxService"),o(),e(9,". To create a message box with more complex content use template reference as "),t(10,"code"),e(11,"MessageBoxContent.content"),o(),e(12,`.
`),o(),t(13,"component-example"),c(14,"fd-object-based-message-box-example"),o(),c(15,"code-example",1)(16,"separator"),t(17,"fd-docs-section-title",2),e(18,` Template based message box
`),o(),t(19,"description"),e(20," The message box can be declared inside the "),t(21,"code"),e(22,"ng-template"),o(),e(23," and opened with "),t(24,"code"),e(25,"MessageBoxService"),o(),e(26," using the template reference. Each template based message box can use the following context values: "),t(27,"ul")(28,"li"),e(29,"MessageBoxRef - "),t(30,"code"),e(31,"implicit"),o()(),t(32,"li"),e(33,"MessageBoxConfig - "),t(34,"code"),e(35,"messageBoxConfig"),o()()(),e(36," The MessageBoxRef and MessageBoxConfig references need to be passed to the message box component when using template based message box. To receive message box dismiss/close reasons subscribe to the "),t(37,"code"),e(38,"afterClosed"),o(),e(39," observable. "),t(40,"ul")(41,"li"),e(42,"Add "),t(43,"code"),e(44,"fd-button-bar"),o(),e(45,' to key buttons like "Save" or "Cancel" to add proper styles.'),o(),t(46,"li"),e(47," By default after opening the message box first focusable element will be focused. To focus specific element after opening the message box, use "),t(48,"code"),e(49,"fdkInitialFocus"),o(),e(50," directive. "),o()()(),t(51,"component-example"),c(52,"fd-template-based-message-box-example"),o(),c(53,"code-example",1)(54,"separator"),t(55,"fd-docs-section-title",3),e(56,` Component based message box
`),o(),t(57,"description"),e(58," To open a component based message box provide the component class to the "),t(59,"code"),e(60,"MessageBoxService"),o(),e(61," open method. Inject the "),t(62,"code"),e(63,"MessageBoxRef"),o(),e(64," dependency inside the component to access message box methods and data. Data available in "),t(65,"code"),e(66,"MessageBoxRef"),o(),e(67," can be provided in the "),t(68,"code"),e(69,"MessageBoxRef"),o(),e(70," object and passed as an argument to the "),t(71,"code"),e(72,"MessageBoxService.open()"),o(),e(73,` method.
`),o(),t(74,"component-example"),c(75,"fd-component-based-message-box-example"),o(),c(76,"code-example",1)(77,"separator"),t(78,"fd-docs-section-title",4),e(79," Semantic types "),o(),t(80,"description"),e(81," Message box supports various semantic types to visually highlight the type of the message. Use "),t(82,"code"),e(83,"MessageBoxConfig.type"),o(),e(84,` to create various types of message box.
`),o(),t(85,"component-example"),c(86,"fd-semantic-types-example"),o(),c(87,"code-example",1)(88,"separator"),t(89,"fd-docs-section-title",5),e(90,` Message box positioning
`),o(),t(91,"description"),e(92," The placement of the Message box on the screen can be customized through the "),t(93,"code"),e(94,"MessageBoxConfig.position"),o(),e(95," property. "),c(96,"br")(97,"br"),e(98," Message Box can be configured "),t(99,"strong"),e(100,"globally"),o(),e(101," by providing "),t(102,"code"),e(103,"MESSAGE_BOX_DEFAULT_CONFIG"),o(),e(104," token. Check "),t(105,"a",6),e(106,"Global Configuration page"),o(),e(107,` for more information.
`),o(),t(108,"component-example"),c(109,"fd-message-box-position-example"),o(),c(110,"code-example",1)(111,"separator"),t(112,"fd-docs-section-title",7),e(113,` Message box on mobile devices
`),o(),t(114,"description"),e(115," To display the Message box component in mobile mode, use the "),t(116,"code"),e(117,"MessageBoxConfig.mobile"),o(),e(118," property. Message box on mobile devices uses the full viewport and adjusts other elements for smaller screens. To create additional spacing around the Message box in mobile mode, use the "),t(119,"code"),e(120,"MessageBoxConfig.mobileOuterSpacing"),o(),e(121,` property.
`),o(),t(122,"component-example"),c(123,"fd-message-box-mobile-example"),o(),c(124,"code-example",1)(125,"separator"),t(126,"fd-docs-section-title",8),e(127," Complex template "),o(),t(128,"description"),e(129," To create more complex message box it is possible to provide custom header, subheader and footer templates. To provide these custom templates, create an element with one of the following directives: "),t(130,"ul")(131,"li"),e(132,"Header - "),t(133,"code"),e(134,'fdkTemplate="header"'),o()(),t(135,"li"),e(136,"Subheader - "),t(137,"code"),e(138,'fdkTemplate="subheader"'),o()(),t(139,"li"),e(140,"Footer - "),t(141,"code"),e(142,'fdkTemplate="footer"'),o()()(),e(143," Custom templates are embedded views for the Bar Component so it is possible to use Bar Component features inside them. For complex templates you may use the "),t(144,"code"),e(145,"fd-bar-element"),o(),e(146," as an equivalent of the "),t(147,"code"),e(148,"fd-message-box-footer-button"),o(),e(149,`.
`),o(),t(150,"component-example"),c(151,"fd-complex-template-example"),o(),c(152,"code-example",1)),n&2&&(l(15),h("exampleFiles",a.objectBased),l(38),h("exampleFiles",a.templateBased),l(23),h("exampleFiles",a.componentBased),l(11),h("exampleFiles",a.semanticTypes),l(18),h("routerLink",U(8,Fe)),l(5),h("exampleFiles",a.customPosition),l(14),h("exampleFiles",a.mobileMode),l(28),h("exampleFiles",a.complexTemplate))},dependencies:[ne,H,te,Se,Z,ie,ye,he,ve,G,Be,Ce,ge],encapsulation:2});let m=i;return m})();var no=[{path:"",component:le,children:[{path:"",component:Ee}],data:{primary:!0}}],io="message-box",ao="messageBox";export{ao as API_FILE_KEY,io as LIBRARY_NAME,no as ROUTES};
