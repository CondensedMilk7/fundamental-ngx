import{Ce as te,De as oe,Ee as ne,Fe as ae,ga as M,he as Z,ie as W,je as $,ke as ee,ma as Q}from"./chunk-RQU4D65I.js";import"./chunk-V6JPMPCW.js";import{ma as X,qa as T,xa as k}from"./chunk-OT5GNZKG.js";import{$h as U,Bc as D,Ih as C,Ja as r,Jb as t,Jh as G,Kb as L,Kh as O,Lb as g,Mh as _,Ng as j,Nh as S,Ob as u,Oh as H,Pb as h,Qb as x,Sb as b,Sh as Y,Tb as I,Th as z,Vh as J,ab as p,ac as V,bb as F,bc as w,ci as y,di as K,ea as P,ka as d,nb as e,nd as q,ob as o,pb as m,pd as A,wb as R,ya as B,z as N}from"./chunk-ZNQYYUGV.js";var ie=(()=>{let a=class a{constructor(){this.checkboxValue=!1}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["fd-checkbox-custom-label-example"]],standalone:!0,features:[b],decls:5,vars:2,consts:[[3,"ngModelChange","ngModel"],["href","#"]],template:function(l,n){l&1&&(e(0,"fd-checkbox",0),x("ngModelChange",function(i){return h(n.checkboxValue,i)||(n.checkboxValue=i),i}),t(1," I accept\xA0"),e(2,"a",1),t(3,"Terms and conditions"),o()(),t(4)),l&2&&(u("ngModel",n.checkboxValue),r(4),g(" Value: ",n.checkboxValue," "))},dependencies:[k,y,C,S],encapsulation:2});let c=a;return c})();var xe=()=>({trueValue:"Yes",falseValue:"No"}),be=()=>({trueValue:"Yes",falseValue:"No",thirdStateValue:"I dont have an opinion"}),le=(()=>{let a=class a{constructor(){this.checkboxValue1="Yes",this.checkboxValue2="Yes"}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["fd-checkbox-custom-values-example"]],standalone:!0,features:[b],decls:6,vars:10,consts:[["label","I accept the new Terms of Service",3,"ngModelChange","values","ngModel"],["label","Banana is the best fruit",3,"ngModelChange","tristate","tristateSelectable","values","ngModel"]],template:function(l,n){l&1&&(e(0,"div")(1,"fd-checkbox",0),x("ngModelChange",function(i){return h(n.checkboxValue1,i)||(n.checkboxValue1=i),i}),o(),t(2),o(),e(3,"div")(4,"fd-checkbox",1),x("ngModelChange",function(i){return h(n.checkboxValue2,i)||(n.checkboxValue2=i),i}),o(),t(5),o()),l&2&&(r(),p("values",I(8,xe)),u("ngModel",n.checkboxValue1),r(),g(" Value: ",n.checkboxValue1," "),r(2),p("tristate",!0)("tristateSelectable",!0)("values",I(9,be)),u("ngModel",n.checkboxValue2),r(),g(" Value: ",n.checkboxValue2," "))},dependencies:[k,y,C,S],encapsulation:2});let c=a;return c})();var re=(()=>{let a=class a{constructor(){this.checkboxValue=!1}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["fd-checkbox-default-example"]],standalone:!0,features:[b],decls:4,vars:3,consts:[["fd-form-label","","for","defaultCheckbox"],["label","Option 1","inputId","defaultCheckbox",3,"ngModelChange","ngModel","required"]],template:function(l,n){l&1&&(e(0,"label",0),t(1,"Default checkbox"),o(),e(2,"fd-checkbox",1),x("ngModelChange",function(i){return h(n.checkboxValue,i)||(n.checkboxValue=i),i}),o(),t(3)),l&2&&(r(2),u("ngModel",n.checkboxValue),p("required",!0),r(),g(" Value: ",n.checkboxValue," "))},dependencies:[T,k,y,C,U,S],encapsulation:2});let c=a;return c})();var ce=(()=>{let a=class a{constructor(){this.checkboxValue=!1}toggleCheckboxValue(){this.checkboxValue=!this.checkboxValue}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["fd-checkbox-display-mode-example"]],standalone:!0,features:[b],decls:9,vars:4,consts:[["fd-form-label","","for","displayModeCheckbox"],["label","Option 1","inputId","displayModeCheckbox",3,"ngModelChange","ngModel","displayOnly"],["fd-button","",3,"click"]],template:function(l,n){l&1&&(e(0,"p"),t(1,"Display-only checkboxes can be controlled programmatically. They will not react on any user interaction."),o(),e(2,"label",0),t(3,"Display-only checkbox"),o(),e(4,"fd-checkbox",1),x("ngModelChange",function(i){return h(n.checkboxValue,i)||(n.checkboxValue=i),i}),o(),t(5),m(6,"br"),e(7,"button",2),R("click",function(){return n.toggleCheckboxValue()}),t(8),o()),l&2&&(r(4),u("ngModel",n.checkboxValue),p("displayOnly",!0),r(),g(" Value: ",n.checkboxValue," "),r(3),g(" Change value to ",n.checkboxValue?"false":"true"," "))},dependencies:[T,k,y,C,S,j],encapsulation:2,changeDetection:0});let c=a;return c})();var me=(()=>{let a=class a{};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["fd-checkbox-label-wrapping-example"]],standalone:!0,features:[b],decls:6,vars:2,consts:[[3,"wrapLabel"],["valignLabel","top",3,"wrapLabel"]],template:function(l,n){l&1&&(e(0,"div")(1,"fd-checkbox",0),t(2," LABEL WILL BE POSITIONED IN THE MIDDLE. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea eos in porro quae ullam. Aliquid corporis doloribus exercitationem facilis hic illo labore laudantium quam reprehenderit sapiente, tempore voluptatibus voluptatum? "),o()(),e(3,"div")(4,"fd-checkbox",1),t(5," LABEL WILL BE POSITIONED ON THE TOP. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea eos in porro quae ullam. Aliquid corporis doloribus exercitationem facilis hic illo labore laudantium quam reprehenderit sapiente, tempore voluptatibus voluptatum? "),o()()),l&2&&(r(),p("wrapLabel",!0),r(3),p("wrapLabel",!0))},dependencies:[k],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}div[_ngcontent-%COMP%]{max-width:300px}"]});let c=a;return c})();var se=(()=>{let a=class a{constructor(){this.registrationForm=new O({acceptAll:new _(!1),agreements:new O({marketing:new _(void 0),newsletter:new _(!1),termsAndConditions:new _(!1)})}),this._destroyRef=P(B)}ngOnInit(){this.setAgreementsOnAcceptAllChange(),this.setControlOnAgreementsChange()}acceptAll(s){this.registrationForm.get("agreements")?.setValue({marketing:s,newsletter:s,termsAndConditions:s})}setAgreementsOnAcceptAllChange(){this.registrationForm.get("acceptAll")?.valueChanges.pipe(A(this._destroyRef)).subscribe(s=>this.acceptAll(s))}setControlOnAgreementsChange(){this.registrationForm.get("agreements")?.valueChanges.pipe(N(s=>this.getValuesFromObject(s)),N(s=>{let l=s.reduce((f,i)=>i&&f,!0),n=s.reduce((f,i)=>!i&&f,!0);return l?!0:n?!1:null}),A(this._destroyRef)).subscribe(s=>this.registrationForm.get("acceptAll")?.setValue(s,{emitEvent:!1}))}getValuesFromObject(s){return Object.keys(s).map(l=>s[l])}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["fd-checkbox-reactive-forms-example"]],standalone:!0,features:[b],decls:17,vars:9,consts:[[3,"formGroup"],["formControlName","acceptAll","label","Accept all",3,"tristate","tristateSelectable"],["formGroupName","agreements"],["formControlName","termsAndConditions","label","I accept Terms and Conditions"],["formControlName","marketing","label","I want to receive Marketing Materials"],["formControlName","newsletter","label","I want want to sign for a Newsletter"]],template:function(l,n){l&1&&(e(0,"form",0),m(1,"fd-checkbox",1),e(2,"fieldset",2),m(3,"fd-checkbox",3)(4,"fd-checkbox",4)(5,"fd-checkbox",5),o()(),m(6,"br"),e(7,"small"),t(8),V(9,"json"),m(10,"br"),t(11),m(12,"br"),t(13),m(14,"br"),t(15),m(16,"br"),o()),l&2&&(p("formGroup",n.registrationForm),r(),p("tristate",!0)("tristateSelectable",!1),r(7),g(" Form value: ",w(9,7,n.registrationForm.getRawValue()),""),r(3),g(" Form Touched: ",n.registrationForm.touched,""),r(2),g(" Form Dirty: ",n.registrationForm.dirty,""),r(2),g(" Form Valid: ",n.registrationForm.valid,""))},dependencies:[y,H,C,G,K,Y,J,z,k,D],encapsulation:2});let c=a;return c})();var pe=(()=>{let a=class a{constructor(){this.checkboxValue1=!1,this.checkboxValue2=!1,this.checkboxValue3=!1,this.checkboxValue4=!1,this.checkboxValue5=!1,this.checkboxValue6=!1,this.checkboxValue7=!1}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["fd-checkbox-states-example"]],standalone:!0,features:[b],decls:18,vars:8,consts:[["fd-form-header",""],["label","No state",3,"ngModelChange","ngModel"],["state","information","label","Info state",3,"ngModelChange","ngModel"],["state","success","label","Success state",3,"ngModelChange","ngModel"],["state","warning","label","Warning state",3,"ngModelChange","ngModel"],["state","error","label","Error state",3,"ngModelChange","ngModel"],["label","Disabled label",3,"ngModelChange","ngModel","disabled"],["fdCompact","","label","Compact label",3,"ngModelChange","ngModel"]],template:function(l,n){l&1&&(e(0,"h4",0),t(1,"Checkbox States Examples"),o(),e(2,"div")(3,"p"),t(4,"States:"),o(),e(5,"fd-checkbox",1),x("ngModelChange",function(i){return h(n.checkboxValue1,i)||(n.checkboxValue1=i),i}),o(),e(6,"fd-checkbox",2),x("ngModelChange",function(i){return h(n.checkboxValue2,i)||(n.checkboxValue2=i),i}),o(),e(7,"fd-checkbox",3),x("ngModelChange",function(i){return h(n.checkboxValue3,i)||(n.checkboxValue3=i),i}),o(),e(8,"fd-checkbox",4),x("ngModelChange",function(i){return h(n.checkboxValue4,i)||(n.checkboxValue4=i),i}),o(),e(9,"fd-checkbox",5),x("ngModelChange",function(i){return h(n.checkboxValue5,i)||(n.checkboxValue5=i),i}),o()(),e(10,"div")(11,"p"),t(12,"Disabled:"),o(),e(13,"fd-checkbox",6),x("ngModelChange",function(i){return h(n.checkboxValue6,i)||(n.checkboxValue6=i),i}),o()(),e(14,"div")(15,"p"),t(16,"Compact:"),o(),e(17,"fd-checkbox",7),x("ngModelChange",function(i){return h(n.checkboxValue7,i)||(n.checkboxValue7=i),i}),o()()),l&2&&(r(5),u("ngModel",n.checkboxValue1),r(),u("ngModel",n.checkboxValue2),r(),u("ngModel",n.checkboxValue3),r(),u("ngModel",n.checkboxValue4),r(),u("ngModel",n.checkboxValue5),r(4),u("ngModel",n.checkboxValue6),p("disabled",!0),r(4),u("ngModel",n.checkboxValue7))},dependencies:[X,k,y,C,S,q],encapsulation:2});let c=a;return c})();var de=(()=>{let a=class a{constructor(){this.checkboxValue1=!1,this.checkboxValue2=null}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["fd-checkbox-tristate-example"]],standalone:!0,features:[b],decls:11,vars:12,consts:[["label","Option 1",3,"ngModelChange","tristate","tristateSelectable","ngModel"],["label","Option 2",3,"ngModelChange","tristate","tristateSelectable","ngModel"]],template:function(l,n){l&1&&(e(0,"div"),t(1," Third state selectable: "),e(2,"fd-checkbox",0),x("ngModelChange",function(i){return h(n.checkboxValue1,i)||(n.checkboxValue1=i),i}),o(),t(3),V(4,"json"),o(),m(5,"br"),e(6,"div"),t(7," Third state unselectable: "),e(8,"fd-checkbox",1),x("ngModelChange",function(i){return h(n.checkboxValue2,i)||(n.checkboxValue2=i),i}),o(),t(9),V(10,"json"),o()),l&2&&(r(2),p("tristate",!0)("tristateSelectable",!0),u("ngModel",n.checkboxValue1),r(),g(" Value: ",w(4,8,n.checkboxValue1)," "),r(5),p("tristate",!0)("tristateSelectable",!1),u("ngModel",n.checkboxValue2),r(),g(" Value: ",w(10,10,n.checkboxValue2)," "))},dependencies:[k,y,C,S,D],encapsulation:2});let c=a;return c})();var fe="checkbox-default-example.component.ts",ge="checkbox-tristate-example.component.ts",ke="checkbox-custom-values-example.component.ts",Ce="checkbox-reactive-forms-example.component.ts",ye="checkbox-states-example.component.ts",Se="checkbox-custom-label-example.component.ts",Me="checkbox-label-wrapping-example.component.ts",Ee="checkbox-display-mode-example.component.ts",ue=(()=>{let a=class a{constructor(){this.checkboxDefault=[{language:"typescript",fileName:"checkbox-default-example",component:"CheckboxDefaultExampleComponent",code:M(fe)}],this.checkboxTristate=[{language:"typescript",fileName:"checkbox-tristate-example",component:"CheckboxTristateExampleComponent",code:M(ge)}],this.checkboxCustomValues=[{language:"typescript",fileName:"checkbox-custom-values-example",component:"CheckboxCustomValuesExampleComponent",code:M(ke)}],this.checkboxReactiveForms=[{language:"typescript",fileName:"checkbox-reactive-forms-example",component:"CheckboxReactiveFormsExampleComponent",code:M(Ce)}],this.checkboxStates=[{language:"typescript",fileName:"checkbox-states-example",component:"CheckboxStatesExampleComponent",code:M(ye)}],this.checkboxCustomLabel=[{language:"typescript",fileName:"checkbox-custom-label-example",component:"CheckboxCustomLabelExampleComponent",code:M(Se)}],this.checkboxLabelWrapping=[{language:"typescript",fileName:"checkbox-label-wrapping-example",component:"CheckboxLabelWrappingExampleComponent",code:M(Me)}],this.checkboxDisplayOnlyMode=[{language:"typescript",fileName:"checkbox-display-mode-example",component:"CheckboxDisplayModeExampleComponent",code:M(Ee)}]}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["app-input"]],standalone:!0,features:[b],decls:124,vars:16,consts:[["id","default","componentName","checkbox"],[3,"exampleFiles"],["id","tristate","componentName","checkbox"],["id","custom-values","componentName","checkbox"],["id","reactive-forms","componentName","checkbox"],["id","custom-label","componentName","checkbox"],["id","label-wrapping","componentName","checkbox"],["id","states","componentName","checkbox"],["id","display-mode","componentName","checkbox"]],template:function(l,n){l&1&&(e(0,"fd-docs-section-title",0),t(1," Standard Checkbox "),o(),e(2,"description"),t(3," By default fd-checkbox component is binary, returning "),e(4,"code"),t(5,"true"),o(),t(6," and "),e(7,"code"),t(8,"false"),o(),t(9,` values.
`),o(),e(10,"component-example"),m(11,"fd-checkbox-default-example"),o(),m(12,"code-example",1)(13,"separator"),e(14,"fd-docs-section-title",2),t(15," Tristate Checkbox "),o(),e(16,"description"),t(17," Tristate mode adds third state to default checkbox behaviour. In this mode checkbox returns: "),e(18,"code"),t(19,"true"),o(),t(20,", "),e(21,"code"),t(22,"false"),o(),t(23," and "),e(24,"code"),t(25,"null"),o(),t(26," values. "),m(27,"br"),t(28," To prevent user from manually selecting third state of the checkbox use "),e(29,"code"),t(30,"[tristateSelectable]"),o(),t(31,` property.
`),o(),e(32,"component-example"),m(33,"fd-checkbox-tristate-example"),o(),m(34,"code-example",1)(35,"separator"),e(36,"fd-docs-section-title",3),t(37," Checkbox custom values "),o(),e(38,"description"),t(39," Values returned by checkbox can be customized using "),e(40,"code"),t(41,"[values]"),o(),t(42," property. "),m(43,"br"),e(44,"ul")(45,"li"),t(46," Type: "),e(47,"code"),t(48),o()(),e(49,"li"),t(50," Default value: "),e(51,"code"),t(52),o()()()(),e(53,"component-example"),m(54,"fd-checkbox-custom-values-example"),o(),m(55,"code-example",1)(56,"separator"),e(57,"fd-docs-section-title",4),t(58,` Checkbox with Reactive Forms
`),o(),e(59,"description"),t(60," Checkbox can be used with Reactive Forms by binding it as standard form control with "),e(61,"code"),t(62,"[formControlName]"),o(),t(63,` input. Example below shows usage of checkbox component with Reactive Form. "Accept all" behaves as main control representing overall state of agreements controls.
`),o(),e(64,"component-example"),m(65,"fd-checkbox-reactive-forms-example"),o(),m(66,"code-example",1)(67,"separator"),e(68,"fd-docs-section-title",5),t(69," Checkbox with custom label "),o(),e(70,"description"),t(71," Checkbox label can by passed to component as external content using content projection mechanism. If external content is provided value passed using "),e(72,"code"),t(73,"[label]"),o(),t(74,` property is ignored.
`),o(),e(75,"component-example"),m(76,"fd-checkbox-custom-label-example"),o(),m(77,"code-example",1)(78,"separator"),e(79,"fd-docs-section-title",6),t(80,` Checkbox with label wrapping
`),o(),e(81,"description"),t(82," Checkbox labels by default do not wrap. If you want to wrap the labels, then you should use "),e(83,"code"),t(84,"fd-checkbox[wrapLabel]"),o(),t(85,` input
`),o(),e(86,"component-example"),m(87,"fd-checkbox-label-wrapping-example"),o(),m(88,"code-example",1)(89,"separator"),e(90,"fd-docs-section-title",7),t(91," Checkbox styling properties "),o(),e(92,"description"),t(93," Checkbox can be but in various states by modifying following properties: "),e(94,"ul")(95,"li"),t(96," Modifies visual appearance of checkbox "),m(97,"br"),e(98,"code"),t(99,"[state] = 'success' | 'error' | 'information' | 'warning'"),o()(),e(100,"li"),t(101," Disables control "),m(102,"br"),e(103,"code"),t(104,"[disable] = true | false"),o()(),e(105,"li"),t(106," Miniaturizes checkbox "),m(107,"br"),e(108,"code"),t(109,"[fdCompact] = true | false"),o()()()(),e(110,"component-example"),m(111,"fd-checkbox-states-example"),o(),m(112,"code-example",1)(113,"separator"),e(114,"fd-docs-section-title",8),t(115,` Checkbox with Display-only mode
`),o(),e(116,"description"),t(117," For cases when users should not interact with the Checkbox, developers can set it to 'Display-only' mode with "),e(118,"code"),t(119,'[displayOnly]="true"'),o(),t(120,` input property.
`),o(),e(121,"component-example"),m(122,"fd-checkbox-display-mode-example"),o(),m(123,"code-example",1)),l&2&&(r(12),p("exampleFiles",n.checkboxDefault),r(22),p("exampleFiles",n.checkboxTristate),r(11),F("margin-bottom",.5,"rem"),r(3),L("{ trueValue?: any, falseValue?: any, thirdStateValue?: any }"),r(4),L("{ trueValue: true, falseValue: false, thirdStateValue: null }"),r(3),p("exampleFiles",n.checkboxCustomValues),r(11),p("exampleFiles",n.checkboxReactiveForms),r(11),p("exampleFiles",n.checkboxCustomLabel),r(11),p("exampleFiles",n.checkboxLabelWrapping),r(7),F("margin-bottom",.5,"rem"),r(5),F("margin-bottom",.5,"rem"),r(12),p("exampleFiles",n.checkboxStates),r(11),p("exampleFiles",n.checkboxDisplayOnlyMode))},dependencies:[ee,W,Z,re,Q,te,de,le,se,ie,me,pe,ce],encapsulation:2});let c=a;return c})();var he=(()=>{let a=class a{};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=d({type:a,selectors:[["app-checkbox-header"]],standalone:!0,features:[b],decls:10,vars:0,consts:[["module","CheckboxModule","subPackage","checkbox"]],template:function(l,n){l&1&&(e(0,"fd-doc-page")(1,"header"),t(2,"Checkbox"),o(),e(3,"description"),t(4," With checkboxes, all options are visible and the user can make one or more selections. This component can be set disabled and also displayed in a row. "),m(5,"br"),t(6,"Checkboxes are keyboard navigable via the tab key and selected with the space bar."),m(7,"br"),o(),m(8,"import",0)(9,"fd-header-tabs"),o())},dependencies:[$,ne,W,ae,oe],encapsulation:2});let c=a;return c})();var kt=[{path:"",component:he,children:[{path:"",component:ue}],data:{primary:!0}}],Ct="checkbox",yt="checkbox";export{yt as API_FILE_KEY,Ct as LIBRARY_NAME,kt as ROUTES};
