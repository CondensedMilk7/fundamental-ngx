import{Ee as te,Fe as oe,Ge as ne,He as ae,ia as M,je as Z,ke as W,le as $,me as ee,oa as K}from"./chunk-AGADGNJL.js";import"./chunk-LFW7IDYP.js";import{ma as Q,qa as X,xa as k}from"./chunk-KD6XWN7Y.js";import{$b as g,Cb as D,Ka as l,Kc as F,Sb as o,Tb as N,Th as C,Ub as f,Uh as j,Vh as P,Xb as u,Xh as _,Yb as h,Yg as q,Yh as S,Zb as b,Zh as G,ac as O,bi as H,ci as Y,ea as A,ei as z,gb as d,hb as V,ja as x,jc as v,kc as w,ki as J,ni as y,oi as U,tb as e,ub as n,vb as c,xa as B,xd as R,z as L,zd as I}from"./chunk-DO4CUQ4Q.js";var ie=(()=>{let i=class i{constructor(){this.checkboxValue=!1}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["fd-checkbox-custom-label-example"]],standalone:!0,features:[g],decls:5,vars:2,consts:[[3,"ngModelChange","ngModel"],["href","#"]],template:function(r,t){r&1&&(e(0,"fd-checkbox",0),b("ngModelChange",function(a){return h(t.checkboxValue,a)||(t.checkboxValue=a),a}),o(1," I accept\xA0"),e(2,"a",1),o(3,"Terms and conditions"),n()(),o(4)),r&2&&(u("ngModel",t.checkboxValue),l(4),f(" Value: ",t.checkboxValue," "))},dependencies:[k,y,C,S],encapsulation:2});let s=i;return s})();var he=()=>({trueValue:"Yes",falseValue:"No"}),be=()=>({trueValue:"Yes",falseValue:"No",thirdStateValue:"I dont have an opinion"}),le=(()=>{let i=class i{constructor(){this.checkboxValue1="Yes",this.checkboxValue2="Yes"}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["fd-checkbox-custom-values-example"]],standalone:!0,features:[g],decls:6,vars:10,consts:[["label","I accept the new Terms of Service",3,"ngModelChange","values","ngModel"],["label","Banana is the best fruit",3,"ngModelChange","tristate","tristateSelectable","values","ngModel"]],template:function(r,t){r&1&&(e(0,"div")(1,"fd-checkbox",0),b("ngModelChange",function(a){return h(t.checkboxValue1,a)||(t.checkboxValue1=a),a}),n(),o(2),n(),e(3,"div")(4,"fd-checkbox",1),b("ngModelChange",function(a){return h(t.checkboxValue2,a)||(t.checkboxValue2=a),a}),n(),o(5),n()),r&2&&(l(),d("values",O(8,he)),u("ngModel",t.checkboxValue1),l(),f(" Value: ",t.checkboxValue1," "),l(2),d("tristate",!0)("tristateSelectable",!0)("values",O(9,be)),u("ngModel",t.checkboxValue2),l(),f(" Value: ",t.checkboxValue2," "))},dependencies:[k,y,C,S],encapsulation:2});let s=i;return s})();var re=(()=>{let i=class i{constructor(){this.checkboxValue=!1}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["fd-checkbox-default-example"]],standalone:!0,features:[g],decls:4,vars:3,consts:[["fd-form-label","","for","defaultCheckbox"],["label","Option 1","inputId","defaultCheckbox",3,"ngModelChange","ngModel","required"]],template:function(r,t){r&1&&(e(0,"label",0),o(1,"Default checkbox"),n(),e(2,"fd-checkbox",1),b("ngModelChange",function(a){return h(t.checkboxValue,a)||(t.checkboxValue=a),a}),n(),o(3)),r&2&&(l(2),u("ngModel",t.checkboxValue),d("required",!0),l(),f(" Value: ",t.checkboxValue," "))},dependencies:[X,k,y,C,J,S],encapsulation:2});let s=i;return s})();var ce=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["fd-checkbox-label-wrapping-example"]],standalone:!0,features:[g],decls:6,vars:2,consts:[[3,"wrapLabel"],["valignLabel","top",3,"wrapLabel"]],template:function(r,t){r&1&&(e(0,"div")(1,"fd-checkbox",0),o(2," LABEL WILL BE POSITIONED IN THE MIDDLE. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea eos in porro quae ullam. Aliquid corporis doloribus exercitationem facilis hic illo labore laudantium quam reprehenderit sapiente, tempore voluptatibus voluptatum? "),n()(),e(3,"div")(4,"fd-checkbox",1),o(5," LABEL WILL BE POSITIONED ON THE TOP. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea eos in porro quae ullam. Aliquid corporis doloribus exercitationem facilis hic illo labore laudantium quam reprehenderit sapiente, tempore voluptatibus voluptatum? "),n()()),r&2&&(l(),d("wrapLabel",!0),l(3),d("wrapLabel",!0))},dependencies:[k],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}div[_ngcontent-%COMP%]{max-width:300px}"]});let s=i;return s})();var se=(()=>{let i=class i{constructor(){this.registrationForm=new P({acceptAll:new _(!1),agreements:new P({marketing:new _(void 0),newsletter:new _(!1),termsAndConditions:new _(!1)})}),this._destroyRef=A(B)}ngOnInit(){this.setAgreementsOnAcceptAllChange(),this.setControlOnAgreementsChange()}acceptAll(m){this.registrationForm.get("agreements")?.setValue({marketing:m,newsletter:m,termsAndConditions:m})}setAgreementsOnAcceptAllChange(){this.registrationForm.get("acceptAll")?.valueChanges.pipe(I(this._destroyRef)).subscribe(m=>this.acceptAll(m))}setControlOnAgreementsChange(){this.registrationForm.get("agreements")?.valueChanges.pipe(L(m=>this.getValuesFromObject(m)),L(m=>{let r=m.reduce((p,a)=>a&&p,!0),t=m.reduce((p,a)=>!a&&p,!0);return r?!0:t?!1:null}),I(this._destroyRef)).subscribe(m=>this.registrationForm.get("acceptAll")?.setValue(m,{emitEvent:!1}))}getValuesFromObject(m){return Object.keys(m).map(r=>m[r])}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["fd-checkbox-reactive-forms-example"]],standalone:!0,features:[g],decls:17,vars:9,consts:[[3,"formGroup"],["formControlName","acceptAll","label","Accept all",3,"tristate","tristateSelectable"],["formGroupName","agreements"],["formControlName","termsAndConditions","label","I accept Terms and Conditions"],["formControlName","marketing","label","I want to receive Marketing Materials"],["formControlName","newsletter","label","I want want to sign for a Newsletter"]],template:function(r,t){r&1&&(e(0,"form",0),c(1,"fd-checkbox",1),e(2,"fieldset",2),c(3,"fd-checkbox",3)(4,"fd-checkbox",4)(5,"fd-checkbox",5),n()(),c(6,"br"),e(7,"small"),o(8),v(9,"json"),c(10,"br"),o(11),c(12,"br"),o(13),c(14,"br"),o(15),c(16,"br"),n()),r&2&&(d("formGroup",t.registrationForm),l(),d("tristate",!0)("tristateSelectable",!1),l(7),f(" Form value: ",w(9,7,t.registrationForm.getRawValue()),""),l(3),f(" Form Touched: ",t.registrationForm.touched,""),l(2),f(" Form Dirty: ",t.registrationForm.dirty,""),l(2),f(" Form Valid: ",t.registrationForm.valid,""))},dependencies:[y,G,C,j,U,H,z,Y,k,F],encapsulation:2});let s=i;return s})();var me=(()=>{let i=class i{constructor(){this.checkboxValue1=!1,this.checkboxValue2=!1,this.checkboxValue3=!1,this.checkboxValue4=!1,this.checkboxValue5=!1,this.checkboxValue6=!1,this.checkboxValue7=!1,this.checkboxValue8=null,this.checkboxValue9=!0,this.checkboxValue10=!1,this.displayOnlyCheckboxValue=!1,this.displayOnlyCheckboxTristateValue=!1}toggleCheckboxValue(){this.displayOnlyCheckboxValue=!this.displayOnlyCheckboxValue}toggleCheckboxTristateValue(){this.displayOnlyCheckboxTristateValue=this.displayOnlyCheckboxTristateValue==!0?!1:this.displayOnlyCheckboxTristateValue==!1?null:!0}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["fd-checkbox-states-example"]],standalone:!0,features:[g],decls:36,vars:22,consts:[["fd-form-header",""],["label","No state",3,"ngModelChange","ngModel"],["state","information","label","Info state",3,"ngModelChange","ngModel"],["state","success","label","Success state",3,"ngModelChange","ngModel"],["state","warning","label","Warning state",3,"ngModelChange","ngModel"],["state","error","label","Error state",3,"ngModelChange","ngModel"],["label","Disabled label",3,"ngModelChange","ngModel","disabled"],["label","Readonly label when false",3,"ngModelChange","ngModel","readonly"],["label","Readonly label when null (in tristate)",3,"ngModelChange","ngModel","readonly","tristate"],["label","Readonly label when true",3,"ngModelChange","ngModel","readonly"],[2,"display","flex"],["label","Display-only label",3,"ngModelChange","ngModel","displayOnly"],["fd-button","",3,"click"],["label","Display-only tristate label",3,"ngModelChange","ngModel","displayOnly","tristate"],["fdCompact","","label","Compact label",3,"ngModelChange","ngModel"]],template:function(r,t){r&1&&(e(0,"h4",0),o(1,"Checkbox States Examples"),n(),e(2,"div")(3,"p"),o(4,"States:"),n(),e(5,"fd-checkbox",1),b("ngModelChange",function(a){return h(t.checkboxValue1,a)||(t.checkboxValue1=a),a}),n(),e(6,"fd-checkbox",2),b("ngModelChange",function(a){return h(t.checkboxValue2,a)||(t.checkboxValue2=a),a}),n(),e(7,"fd-checkbox",3),b("ngModelChange",function(a){return h(t.checkboxValue3,a)||(t.checkboxValue3=a),a}),n(),e(8,"fd-checkbox",4),b("ngModelChange",function(a){return h(t.checkboxValue4,a)||(t.checkboxValue4=a),a}),n(),e(9,"fd-checkbox",5),b("ngModelChange",function(a){return h(t.checkboxValue5,a)||(t.checkboxValue5=a),a}),n()(),e(10,"div")(11,"p"),o(12,"Disabled:"),n(),e(13,"fd-checkbox",6),b("ngModelChange",function(a){return h(t.checkboxValue6,a)||(t.checkboxValue6=a),a}),n()(),e(14,"div")(15,"p"),o(16," Read only: "),e(17,"fd-checkbox",7),b("ngModelChange",function(a){return h(t.checkboxValue7,a)||(t.checkboxValue7=a),a}),n(),e(18,"fd-checkbox",8),b("ngModelChange",function(a){return h(t.checkboxValue8,a)||(t.checkboxValue8=a),a}),n(),e(19,"fd-checkbox",9),b("ngModelChange",function(a){return h(t.checkboxValue9,a)||(t.checkboxValue9=a),a}),n()()(),e(20,"div")(21,"p"),o(22,"Display-only:"),n(),e(23,"span",10)(24,"fd-checkbox",11),b("ngModelChange",function(a){return h(t.displayOnlyCheckboxValue,a)||(t.displayOnlyCheckboxValue=a),a}),n(),e(25,"button",12),D("click",function(){return t.toggleCheckboxValue()}),o(26),n()(),c(27,"br"),e(28,"span",10)(29,"fd-checkbox",13),b("ngModelChange",function(a){return h(t.displayOnlyCheckboxTristateValue,a)||(t.displayOnlyCheckboxTristateValue=a),a}),n(),e(30,"button",12),D("click",function(){return t.toggleCheckboxTristateValue()}),o(31),n()()(),e(32,"div")(33,"p"),o(34,"Compact:"),n(),e(35,"fd-checkbox",14),b("ngModelChange",function(a){return h(t.checkboxValue10,a)||(t.checkboxValue10=a),a}),n()()),r&2&&(l(5),u("ngModel",t.checkboxValue1),l(),u("ngModel",t.checkboxValue2),l(),u("ngModel",t.checkboxValue3),l(),u("ngModel",t.checkboxValue4),l(),u("ngModel",t.checkboxValue5),l(4),u("ngModel",t.checkboxValue6),d("disabled",!0),l(4),u("ngModel",t.checkboxValue7),d("readonly",!0),l(),u("ngModel",t.checkboxValue8),d("readonly",!0)("tristate",!0),l(),u("ngModel",t.checkboxValue9),d("readonly",!0),l(5),u("ngModel",t.displayOnlyCheckboxValue),d("displayOnly",!0),l(2),f(" Change value to ",t.displayOnlyCheckboxValue?"false":"true"," "),l(3),u("ngModel",t.displayOnlyCheckboxTristateValue),d("displayOnly",!0)("tristate",!0),l(2),f(" Change tristate value to ",t.displayOnlyCheckboxTristateValue?"false":t.displayOnlyCheckboxTristateValue===!1?"null":"true"," "),l(4),u("ngModel",t.checkboxValue10))},dependencies:[Q,k,y,C,S,R,q],encapsulation:2});let s=i;return s})();var de=(()=>{let i=class i{constructor(){this.checkboxValue1=!1,this.checkboxValue2=null}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["fd-checkbox-tristate-example"]],standalone:!0,features:[g],decls:11,vars:12,consts:[["label","Option 1",3,"ngModelChange","tristate","tristateSelectable","ngModel"],["label","Option 2",3,"ngModelChange","tristate","tristateSelectable","ngModel"]],template:function(r,t){r&1&&(e(0,"div"),o(1," Third state selectable: "),e(2,"fd-checkbox",0),b("ngModelChange",function(a){return h(t.checkboxValue1,a)||(t.checkboxValue1=a),a}),n(),o(3),v(4,"json"),n(),c(5,"br"),e(6,"div"),o(7," Third state unselectable: "),e(8,"fd-checkbox",1),b("ngModelChange",function(a){return h(t.checkboxValue2,a)||(t.checkboxValue2=a),a}),n(),o(9),v(10,"json"),n()),r&2&&(l(2),d("tristate",!0)("tristateSelectable",!0),u("ngModel",t.checkboxValue1),l(),f(" Value: ",w(4,8,t.checkboxValue1)," "),l(5),d("tristate",!0)("tristateSelectable",!1),u("ngModel",t.checkboxValue2),l(),f(" Value: ",w(10,10,t.checkboxValue2)," "))},dependencies:[k,y,C,S,F],encapsulation:2});let s=i;return s})();var xe="checkbox-default-example.component.ts",fe="checkbox-tristate-example.component.ts",ge="checkbox-custom-values-example.component.ts",ke="checkbox-reactive-forms-example.component.ts",Ce="checkbox-states-example.component.ts",ye="checkbox-custom-label-example.component.ts",Se="checkbox-label-wrapping-example.component.ts",pe=(()=>{let i=class i{constructor(){this.checkboxDefault=[{language:"typescript",fileName:"checkbox-default-example",component:"CheckboxDefaultExampleComponent",code:M(xe)}],this.checkboxTristate=[{language:"typescript",fileName:"checkbox-tristate-example",component:"CheckboxTristateExampleComponent",code:M(fe)}],this.checkboxCustomValues=[{language:"typescript",fileName:"checkbox-custom-values-example",component:"CheckboxCustomValuesExampleComponent",code:M(ge)}],this.checkboxReactiveForms=[{language:"typescript",fileName:"checkbox-reactive-forms-example",component:"CheckboxReactiveFormsExampleComponent",code:M(ke)}],this.checkboxStates=[{language:"typescript",fileName:"checkbox-states-example",component:"CheckboxStatesExampleComponent",code:M(Ce)}],this.checkboxCustomLabel=[{language:"typescript",fileName:"checkbox-custom-label-example",component:"CheckboxCustomLabelExampleComponent",code:M(ye)}],this.checkboxLabelWrapping=[{language:"typescript",fileName:"checkbox-label-wrapping-example",component:"CheckboxLabelWrappingExampleComponent",code:M(Se)}]}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["app-input"]],standalone:!0,features:[g],decls:123,vars:19,consts:[["id","default","componentName","checkbox"],[3,"exampleFiles"],["id","tristate","componentName","checkbox"],["id","custom-values","componentName","checkbox"],["id","reactive-forms","componentName","checkbox"],["id","custom-label","componentName","checkbox"],["id","label-wrapping","componentName","checkbox"],["id","states","componentName","checkbox"]],template:function(r,t){r&1&&(e(0,"fd-docs-section-title",0),o(1," Standard Checkbox "),n(),e(2,"description"),o(3," By default fd-checkbox component is binary, returning "),e(4,"code"),o(5,"true"),n(),o(6," and "),e(7,"code"),o(8,"false"),n(),o(9,` values.
`),n(),e(10,"component-example"),c(11,"fd-checkbox-default-example"),n(),c(12,"code-example",1)(13,"separator"),e(14,"fd-docs-section-title",2),o(15," Tristate Checkbox "),n(),e(16,"description"),o(17," Tristate mode adds third state to default checkbox behaviour. In this mode checkbox returns: "),e(18,"code"),o(19,"true"),n(),o(20,", "),e(21,"code"),o(22,"false"),n(),o(23," and "),e(24,"code"),o(25,"null"),n(),o(26," values. "),c(27,"br"),o(28," To prevent user from manually selecting third state of the checkbox use "),e(29,"code"),o(30,"[tristateSelectable]"),n(),o(31,` property.
`),n(),e(32,"component-example"),c(33,"fd-checkbox-tristate-example"),n(),c(34,"code-example",1)(35,"separator"),e(36,"fd-docs-section-title",3),o(37," Checkbox custom values "),n(),e(38,"description"),o(39," Values returned by checkbox can be customized using "),e(40,"code"),o(41,"[values]"),n(),o(42," property. "),c(43,"br"),e(44,"ul")(45,"li"),o(46," Type: "),e(47,"code"),o(48),n()(),e(49,"li"),o(50," Default value: "),e(51,"code"),o(52),n()()()(),e(53,"component-example"),c(54,"fd-checkbox-custom-values-example"),n(),c(55,"code-example",1)(56,"separator"),e(57,"fd-docs-section-title",4),o(58,` Checkbox with Reactive Forms
`),n(),e(59,"description"),o(60," Checkbox can be used with Reactive Forms by binding it as standard form control with "),e(61,"code"),o(62,"[formControlName]"),n(),o(63,` input. Example below shows usage of checkbox component with Reactive Form. "Accept all" behaves as main control representing overall state of agreements controls.
`),n(),e(64,"component-example"),c(65,"fd-checkbox-reactive-forms-example"),n(),c(66,"code-example",1)(67,"separator"),e(68,"fd-docs-section-title",5),o(69," Checkbox with custom label "),n(),e(70,"description"),o(71," Checkbox label can by passed to component as external content using content projection mechanism. If external content is provided value passed using "),e(72,"code"),o(73,"[label]"),n(),o(74,` property is ignored.
`),n(),e(75,"component-example"),c(76,"fd-checkbox-custom-label-example"),n(),c(77,"code-example",1)(78,"separator"),e(79,"fd-docs-section-title",6),o(80,` Checkbox with label wrapping
`),n(),e(81,"description"),o(82," Checkbox labels by default do not wrap. If you want to wrap the labels, then you should use "),e(83,"code"),o(84,"fd-checkbox[wrapLabel]"),n(),o(85,` input
`),n(),e(86,"component-example"),c(87,"fd-checkbox-label-wrapping-example"),n(),c(88,"code-example",1)(89,"separator"),e(90,"fd-docs-section-title",7),o(91," Checkbox styling properties "),n(),e(92,"description"),o(93," Checkbox can be but in various states by modifying following properties: "),e(94,"ul")(95,"li"),o(96," Modifies visual appearance of checkbox "),c(97,"br"),e(98,"code"),o(99,"[state] = 'success' | 'error' | 'information' | 'warning'"),n()(),e(100,"li"),o(101," Disables control "),c(102,"br"),e(103,"code"),o(104,"[disable] = true | false"),n()(),e(105,"li"),o(106," Read only control "),c(107,"br"),e(108,"code"),o(109,"[readonly] = true | false"),n()(),e(110,"li"),o(111," Control programmatically without user interaction with display-only"),c(112,"br"),e(113,"code"),o(114,"[displayOnly] = true | false"),n()(),e(115,"li"),o(116," Miniaturizes checkbox "),c(117,"br"),e(118,"code"),o(119,"[fdCompact] = true | false"),n()()()(),e(120,"component-example"),c(121,"fd-checkbox-states-example"),n(),c(122,"code-example",1)),r&2&&(l(12),d("exampleFiles",t.checkboxDefault),l(22),d("exampleFiles",t.checkboxTristate),l(11),V("margin-bottom",.5,"rem"),l(3),N("{ trueValue?: any, falseValue?: any, thirdStateValue?: any }"),l(4),N("{ trueValue: true, falseValue: false, thirdStateValue: null }"),l(3),d("exampleFiles",t.checkboxCustomValues),l(11),d("exampleFiles",t.checkboxReactiveForms),l(11),d("exampleFiles",t.checkboxCustomLabel),l(11),d("exampleFiles",t.checkboxLabelWrapping),l(7),V("margin-bottom",.5,"rem"),l(5),V("margin-bottom",.5,"rem"),l(5),V("margin-bottom",.5,"rem"),l(5),V("margin-bottom",.5,"rem"),l(12),d("exampleFiles",t.checkboxStates))},dependencies:[ee,W,Z,re,K,te,de,le,se,ie,ce,me],encapsulation:2});let s=i;return s})();var ue=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=x({type:i,selectors:[["app-checkbox-header"]],standalone:!0,features:[g],decls:10,vars:0,consts:[["module","CheckboxModule","subPackage","checkbox"]],template:function(r,t){r&1&&(e(0,"fd-doc-page")(1,"header"),o(2,"Checkbox"),n(),e(3,"description"),o(4," With checkboxes, all options are visible and the user can make one or more selections. This component can be set disabled and also displayed in a row. "),c(5,"br"),o(6,"Checkboxes are keyboard navigable via the tab key and selected with the space bar."),c(7,"br"),n(),c(8,"import",0)(9,"fd-header-tabs"),n())},dependencies:[$,ne,W,ae,oe],encapsulation:2});let s=i;return s})();var pt=[{path:"",component:ue,children:[{path:"",component:pe}],data:{primary:!0}}],ut="checkbox",ht="checkbox";export{ht as API_FILE_KEY,ut as LIBRARY_NAME,pt as ROUTES};
