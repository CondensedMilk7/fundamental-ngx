import{Z as S,da as z,ne as U,oe as w,pe as K,qe as Q,se as X,te as Z,ue as $,ve as ee}from"./chunk-GD3HAKAB.js";import"./chunk-7AKGFJXI.js";import{F as J,N as F,U as f}from"./chunk-VK2A5WWN.js";import{Ba as G,Ha as H,Ka as C,L as B,La as Y,o as R,oa as k,pa as P,qa as A,sa as V,ta as g,ua as q,ya as W,za as j}from"./chunk-4NCGO7IN.js";import{$a as O,$c as _,Kb as t,Lb as N,Mb as b,Me as I,Wb as x,Xb as D,eb as l,fc as v,gc as M,oa as L,pb as s,qa as u,qb as e,rb as o,sb as c,yb as d,z as T}from"./chunk-LP45MGOR.js";import"./chunk-VIJJU4QR.js";var te=(()=>{let n=class n{constructor(){this.checkboxValue=!1}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["fd-checkbox-custom-label-example"]],standalone:!0,features:[x],decls:5,vars:2,consts:[[3,"ngModel","ngModelChange"],["href","#"]],template:function(i,a){i&1&&(e(0,"fd-checkbox",0),d("ngModelChange",function(p){return a.checkboxValue=p}),t(1," I accept\xA0"),e(2,"a",1),t(3,"Terms and conditions"),o()(),t(4)),i&2&&(s("ngModel",a.checkboxValue),l(4),b(" Value: ",a.checkboxValue," "))},dependencies:[f,C,k,g],encapsulation:2});let r=n;return r})();var pe=function(){return{trueValue:"Yes",falseValue:"No"}},de=function(){return{trueValue:"Yes",falseValue:"No",thirdStateValue:"I dont have an opinion"}},oe=(()=>{let n=class n{constructor(){this.checkboxValue1="Yes",this.checkboxValue2="Yes"}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["fd-checkbox-custom-values-example"]],standalone:!0,features:[x],decls:6,vars:10,consts:[["label","I accept the new Terms of Service",3,"values","ngModel","ngModelChange"],["label","Banana is the best fruit",3,"tristate","tristateSelectable","values","ngModel","ngModelChange"]],template:function(i,a){i&1&&(e(0,"div")(1,"fd-checkbox",0),d("ngModelChange",function(p){return a.checkboxValue1=p}),o(),t(2),o(),e(3,"div")(4,"fd-checkbox",1),d("ngModelChange",function(p){return a.checkboxValue2=p}),o(),t(5),o()),i&2&&(l(1),s("values",D(8,pe))("ngModel",a.checkboxValue1),l(1),b(" Value: ",a.checkboxValue1," "),l(2),s("tristate",!0)("tristateSelectable",!0)("values",D(9,de))("ngModel",a.checkboxValue2),l(1),b(" Value: ",a.checkboxValue2," "))},dependencies:[f,C,k,g],encapsulation:2});let r=n;return r})();var ne=(()=>{let n=class n{constructor(){this.checkboxValue=!1}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["fd-checkbox-default-example"]],standalone:!0,features:[x],decls:4,vars:3,consts:[["fd-form-label","","for","defaultCheckbox"],["label","Option 1","inputId","defaultCheckbox",3,"ngModel","required","ngModelChange"]],template:function(i,a){i&1&&(e(0,"label",0),t(1,"Default checkbox"),o(),e(2,"fd-checkbox",1),d("ngModelChange",function(p){return a.checkboxValue=p}),o(),t(3)),i&2&&(l(2),s("ngModel",a.checkboxValue)("required",!0),l(1),b(" Value: ",a.checkboxValue," "))},dependencies:[F,f,C,k,H,g],encapsulation:2});let r=n;return r})();var ae=(()=>{let n=class n{constructor(){this.checkboxValue=!1}toggleCheckboxValue(){this.checkboxValue=!this.checkboxValue}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["fd-checkbox-display-mode-example"]],standalone:!0,features:[x],decls:9,vars:4,consts:[["fd-form-label","","for","displayModeCheckbox"],["label","Option 1","inputId","displayModeCheckbox",3,"ngModel","displayOnly","ngModelChange"],["fd-button","",3,"click"]],template:function(i,a){i&1&&(e(0,"p"),t(1,"Display-only checkboxes can be controlled programmatically. They will not react on any user interaction."),o(),e(2,"label",0),t(3,"Display-only checkbox"),o(),e(4,"fd-checkbox",1),d("ngModelChange",function(p){return a.checkboxValue=p}),o(),t(5),c(6,"br"),e(7,"button",2),d("click",function(){return a.toggleCheckboxValue()}),t(8),o()),i&2&&(l(4),s("ngModel",a.checkboxValue)("displayOnly",!0),l(1),b(" Value: ",a.checkboxValue," "),l(3),b(" Change value to ",a.checkboxValue?"false":"true"," "))},dependencies:[F,f,C,k,g,B],encapsulation:2,changeDetection:0});let r=n;return r})();var ie=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["fd-checkbox-label-wrapping-example"]],standalone:!0,features:[x],decls:6,vars:2,consts:[[3,"wrapLabel"],["valignLabel","top",3,"wrapLabel"]],template:function(i,a){i&1&&(e(0,"div")(1,"fd-checkbox",0),t(2," LABEL WILL BE POSITIONED IN THE MIDDLE. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea eos in porro quae ullam. Aliquid corporis doloribus exercitationem facilis hic illo labore laudantium quam reprehenderit sapiente, tempore voluptatibus voluptatum? "),o()(),e(3,"div")(4,"fd-checkbox",1),t(5," LABEL WILL BE POSITIONED ON THE TOP. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea eos in porro quae ullam. Aliquid corporis doloribus exercitationem facilis hic illo labore laudantium quam reprehenderit sapiente, tempore voluptatibus voluptatum? "),o()()),i&2&&(l(1),s("wrapLabel",!0),l(3),s("wrapLabel",!0))},dependencies:[f],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}div[_ngcontent-%COMP%]{max-width:300px}"]});let r=n;return r})();var le=(()=>{let n=class n{constructor(){this.registrationForm=new A({acceptAll:new V(!1),agreements:new A({marketing:new V(void 0),newsletter:new V(!1),termsAndConditions:new V(!1)})}),this._destroyRef=L(O)}ngOnInit(){this.setAgreementsOnAcceptAllChange(),this.setControlOnAgreementsChange()}acceptAll(m){this.registrationForm.get("agreements")?.setValue({marketing:m,newsletter:m,termsAndConditions:m})}setAgreementsOnAcceptAllChange(){this.registrationForm.get("acceptAll")?.valueChanges.pipe(I(this._destroyRef)).subscribe(m=>this.acceptAll(m))}setControlOnAgreementsChange(){this.registrationForm.get("agreements")?.valueChanges.pipe(T(m=>this.getValuesFromObject(m)),T(m=>{let i=m.reduce((h,p)=>p&&h,!0),a=m.reduce((h,p)=>!p&&h,!0);return i?!0:a?!1:null}),I(this._destroyRef)).subscribe(m=>this.registrationForm.get("acceptAll")?.setValue(m,{emitEvent:!1}))}getValuesFromObject(m){return Object.keys(m).map(i=>m[i])}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["fd-checkbox-reactive-forms-example"]],standalone:!0,features:[x],decls:17,vars:9,consts:[[3,"formGroup"],["formControlName","acceptAll","label","Accept all",3,"tristate","tristateSelectable"],["formGroupName","agreements"],["formControlName","termsAndConditions","label","I accept Terms and Conditions"],["formControlName","marketing","label","I want to receive Marketing Materials"],["formControlName","newsletter","label","I want want to sign for a Newsletter"]],template:function(i,a){i&1&&(e(0,"form",0),c(1,"fd-checkbox",1),e(2,"fieldset",2),c(3,"fd-checkbox",3)(4,"fd-checkbox",4)(5,"fd-checkbox",5),o()(),c(6,"br"),e(7,"small"),t(8),v(9,"json"),c(10,"br"),t(11),c(12,"br"),t(13),c(14,"br"),t(15),c(16,"br"),o()),i&2&&(s("formGroup",a.registrationForm),l(1),s("tristate",!0)("tristateSelectable",!1),l(7),b(" Form value: ",M(9,7,a.registrationForm.getRawValue()),""),l(3),b(" Form Touched: ",a.registrationForm.touched,""),l(2),b(" Form Dirty: ",a.registrationForm.dirty,""),l(2),b(" Form Valid: ",a.registrationForm.valid,""))},dependencies:[C,q,k,P,Y,W,G,j,f,_],encapsulation:2});let r=n;return r})();var re=(()=>{let n=class n{constructor(){this.checkboxValue1=!1,this.checkboxValue2=!1,this.checkboxValue3=!1,this.checkboxValue4=!1,this.checkboxValue5=!1,this.checkboxValue6=!1,this.checkboxValue7=!1}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["fd-checkbox-states-example"]],standalone:!0,features:[x],decls:18,vars:8,consts:[["fd-form-header",""],["label","No state",3,"ngModel","ngModelChange"],["state","information","label","Info state",3,"ngModel","ngModelChange"],["state","success","label","Success state",3,"ngModel","ngModelChange"],["state","warning","label","Warning state",3,"ngModel","ngModelChange"],["state","error","label","Error state",3,"ngModel","ngModelChange"],["label","Disabled label",3,"ngModel","disabled","ngModelChange"],["fdCompact","","label","Compact label",3,"ngModel","ngModelChange"]],template:function(i,a){i&1&&(e(0,"h4",0),t(1,"Checkbox States Examples"),o(),e(2,"div")(3,"p"),t(4,"States:"),o(),e(5,"fd-checkbox",1),d("ngModelChange",function(p){return a.checkboxValue1=p}),o(),e(6,"fd-checkbox",2),d("ngModelChange",function(p){return a.checkboxValue2=p}),o(),e(7,"fd-checkbox",3),d("ngModelChange",function(p){return a.checkboxValue3=p}),o(),e(8,"fd-checkbox",4),d("ngModelChange",function(p){return a.checkboxValue4=p}),o(),e(9,"fd-checkbox",5),d("ngModelChange",function(p){return a.checkboxValue5=p}),o()(),e(10,"div")(11,"p"),t(12,"Disabled:"),o(),e(13,"fd-checkbox",6),d("ngModelChange",function(p){return a.checkboxValue6=p}),o()(),e(14,"div")(15,"p"),t(16,"Compact:"),o(),e(17,"fd-checkbox",7),d("ngModelChange",function(p){return a.checkboxValue7=p}),o()()),i&2&&(l(5),s("ngModel",a.checkboxValue1),l(1),s("ngModel",a.checkboxValue2),l(1),s("ngModel",a.checkboxValue3),l(1),s("ngModel",a.checkboxValue4),l(1),s("ngModel",a.checkboxValue5),l(4),s("ngModel",a.checkboxValue6)("disabled",!0),l(4),s("ngModel",a.checkboxValue7))},dependencies:[J,f,C,k,g,R],encapsulation:2});let r=n;return r})();var ce=(()=>{let n=class n{constructor(){this.checkboxValue1=!1,this.checkboxValue2=null}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["fd-checkbox-tristate-example"]],standalone:!0,features:[x],decls:11,vars:12,consts:[["label","Option 1",3,"tristate","tristateSelectable","ngModel","ngModelChange"],["label","Option 2",3,"tristate","tristateSelectable","ngModel","ngModelChange"]],template:function(i,a){i&1&&(e(0,"div"),t(1," Third state selectable: "),e(2,"fd-checkbox",0),d("ngModelChange",function(p){return a.checkboxValue1=p}),o(),t(3),v(4,"json"),o(),c(5,"br"),e(6,"div"),t(7," Third state unselectable: "),e(8,"fd-checkbox",1),d("ngModelChange",function(p){return a.checkboxValue2=p}),o(),t(9),v(10,"json"),o()),i&2&&(l(2),s("tristate",!0)("tristateSelectable",!0)("ngModel",a.checkboxValue1),l(1),b(" Value: ",M(4,8,a.checkboxValue1)," "),l(5),s("tristate",!0)("tristateSelectable",!1)("ngModel",a.checkboxValue2),l(1),b(" Value: ",M(10,10,a.checkboxValue2)," "))},dependencies:[f,C,k,g,_],encapsulation:2});let r=n;return r})();var ue="checkbox-default-example.component.ts",xe="checkbox-tristate-example.component.ts",he="checkbox-custom-values-example.component.ts",be="checkbox-reactive-forms-example.component.ts",fe="checkbox-states-example.component.ts",ke="checkbox-custom-label-example.component.ts",Ce="checkbox-label-wrapping-example.component.ts",ge="checkbox-display-mode-example.component.ts",me=(()=>{let n=class n{constructor(){this.checkboxDefault=[{language:"typescript",fileName:"checkbox-default-example",component:"CheckboxDefaultExampleComponent",code:S(ue)}],this.checkboxTristate=[{language:"typescript",fileName:"checkbox-tristate-example",component:"CheckboxTristateExampleComponent",code:S(xe)}],this.checkboxCustomValues=[{language:"typescript",fileName:"checkbox-custom-values-example",component:"CheckboxCustomValuesExampleComponent",code:S(he)}],this.checkboxReactiveForms=[{language:"typescript",fileName:"checkbox-reactive-forms-example",component:"CheckboxReactiveFormsExampleComponent",code:S(be)}],this.checkboxStates=[{language:"typescript",fileName:"checkbox-states-example",component:"CheckboxStatesExampleComponent",code:S(fe)}],this.checkboxCustomLabel=[{language:"typescript",fileName:"checkbox-custom-label-example",component:"CheckboxCustomLabelExampleComponent",code:S(ke)}],this.checkboxLabelWrapping=[{language:"typescript",fileName:"checkbox-label-wrapping-example",component:"CheckboxLabelWrappingExampleComponent",code:S(Ce)}],this.checkboxDisplayOnlyMode=[{language:"typescript",fileName:"checkbox-display-mode-example",component:"CheckboxDisplayModeExampleComponent",code:S(ge)}]}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["app-input"]],standalone:!0,features:[x],decls:124,vars:10,consts:[["id","default","componentName","checkbox"],[3,"exampleFiles"],["id","tristate","componentName","checkbox"],["id","custom-values","componentName","checkbox"],[2,"margin-bottom","0.5rem"],["id","reactive-forms","componentName","checkbox"],["id","custom-label","componentName","checkbox"],["id","label-wrapping","componentName","checkbox"],["id","states","componentName","checkbox"],["id","display-mode","componentName","checkbox"]],template:function(i,a){i&1&&(e(0,"fd-docs-section-title",0),t(1," Standard Checkbox "),o(),e(2,"description"),t(3," By default fd-checkbox component is binary, returning "),e(4,"code"),t(5,"true"),o(),t(6," and "),e(7,"code"),t(8,"false"),o(),t(9,` values.
`),o(),e(10,"component-example"),c(11,"fd-checkbox-default-example"),o(),c(12,"code-example",1)(13,"separator"),e(14,"fd-docs-section-title",2),t(15," Tristate Checkbox "),o(),e(16,"description"),t(17," Tristate mode adds third state to default checkbox behaviour. In this mode checkbox returns: "),e(18,"code"),t(19,"true"),o(),t(20,", "),e(21,"code"),t(22,"false"),o(),t(23," and "),e(24,"code"),t(25,"null"),o(),t(26," values. "),c(27,"br"),t(28," To prevent user from manually selecting third state of the checkbox use "),e(29,"code"),t(30,"[tristateSelectable]"),o(),t(31,` property.
`),o(),e(32,"component-example"),c(33,"fd-checkbox-tristate-example"),o(),c(34,"code-example",1)(35,"separator"),e(36,"fd-docs-section-title",3),t(37," Checkbox custom values "),o(),e(38,"description"),t(39," Values returned by checkbox can be customized using "),e(40,"code"),t(41,"[values]"),o(),t(42," property. "),c(43,"br"),e(44,"ul")(45,"li",4),t(46," Type: "),e(47,"code"),t(48),o()(),e(49,"li"),t(50," Default value: "),e(51,"code"),t(52),o()()()(),e(53,"component-example"),c(54,"fd-checkbox-custom-values-example"),o(),c(55,"code-example",1)(56,"separator"),e(57,"fd-docs-section-title",5),t(58,` Checkbox with Reactive Forms
`),o(),e(59,"description"),t(60," Checkbox can be used with Reactive Forms by binding it as standard form control with "),e(61,"code"),t(62,"[formControlName]"),o(),t(63,` input. Example below shows usage of checkbox component with Reactive Form. "Accept all" behaves as main control representing overall state of agreements controls.
`),o(),e(64,"component-example"),c(65,"fd-checkbox-reactive-forms-example"),o(),c(66,"code-example",1)(67,"separator"),e(68,"fd-docs-section-title",6),t(69," Checkbox with custom label "),o(),e(70,"description"),t(71," Checkbox label can by passed to component as external content using content projection mechanism. If external content is provided value passed using "),e(72,"code"),t(73,"[label]"),o(),t(74,` property is ignored.
`),o(),e(75,"component-example"),c(76,"fd-checkbox-custom-label-example"),o(),c(77,"code-example",1)(78,"separator"),e(79,"fd-docs-section-title",7),t(80,` Checkbox with label wrapping
`),o(),e(81,"description"),t(82," Checkbox labels by default do not wrap. If you want to wrap the labels, then you should use "),e(83,"code"),t(84,"fd-checkbox[wrapLabel]"),o(),t(85,` input
`),o(),e(86,"component-example"),c(87,"fd-checkbox-label-wrapping-example"),o(),c(88,"code-example",1)(89,"separator"),e(90,"fd-docs-section-title",8),t(91," Checkbox styling properties "),o(),e(92,"description"),t(93," Checkbox can be but in various states by modifying following properties: "),e(94,"ul")(95,"li",4),t(96," Modifies visual appearance of checkbox "),c(97,"br"),e(98,"code"),t(99,"[state] = 'success' | 'error' | 'information' | 'warning'"),o()(),e(100,"li",4),t(101," Disables control "),c(102,"br"),e(103,"code"),t(104,"[disable] = true | false"),o()(),e(105,"li"),t(106," Miniaturizes checkbox "),c(107,"br"),e(108,"code"),t(109,"[fdCompact] = true | false"),o()()()(),e(110,"component-example"),c(111,"fd-checkbox-states-example"),o(),c(112,"code-example",1)(113,"separator"),e(114,"fd-docs-section-title",9),t(115,` Checkbox with Display-only mode
`),o(),e(116,"description"),t(117," For cases when users should not interact with the Checkbox, developers can set it to 'Display-only' mode with "),e(118,"code"),t(119,'[displayOnly]="true"'),o(),t(120,` input property.
`),o(),e(121,"component-example"),c(122,"fd-checkbox-display-mode-example"),o(),c(123,"code-example",1)),i&2&&(l(12),s("exampleFiles",a.checkboxDefault),l(22),s("exampleFiles",a.checkboxTristate),l(14),N("{ trueValue?: any, falseValue?: any, thirdStateValue?: any }"),l(4),N("{ trueValue: true, falseValue: false, thirdStateValue: null }"),l(3),s("exampleFiles",a.checkboxCustomValues),l(11),s("exampleFiles",a.checkboxReactiveForms),l(11),s("exampleFiles",a.checkboxCustomLabel),l(11),s("exampleFiles",a.checkboxLabelWrapping),l(24),s("exampleFiles",a.checkboxStates),l(11),s("exampleFiles",a.checkboxDisplayOnlyMode))},dependencies:[Q,w,U,ne,z,X,ce,oe,le,te,ie,re,ae],encapsulation:2});let r=n;return r})();var se=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["app-checkbox-header"]],standalone:!0,features:[x],decls:10,vars:0,consts:[["module","CheckboxModule","subPackage","checkbox"]],template:function(i,a){i&1&&(e(0,"fd-doc-page")(1,"header"),t(2,"Checkbox"),o(),e(3,"description"),t(4," With checkboxes, all options are visible and the user can make one or more selections. This component can be set disabled and also displayed in a row. "),c(5,"br"),t(6,"Checkboxes are keyboard navigable via the tab key and selected with the space bar."),c(7,"br"),o(),c(8,"import",0)(9,"fd-header-tabs"),o())},dependencies:[K,$,w,ee,Z],encapsulation:2});let r=n;return r})();var ht=[{path:"",component:se,children:[{path:"",component:me}],data:{primary:!0}}],bt="checkbox",ft="checkbox";export{ft as API_FILE_KEY,bt as LIBRARY_NAME,ht as ROUTES};
