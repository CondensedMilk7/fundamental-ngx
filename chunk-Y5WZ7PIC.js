import{Ce as Y,De as K,Ee as j,Fe as U,Ie as J,Kc as f,Ke as Q,ga as p,he as G,ie as k,je as H,ke as q,ma as V}from"./chunk-RQU4D65I.js";import"./chunk-V6JPMPCW.js";import{qa as x}from"./chunk-OT5GNZKG.js";import{$h as A,Ih as S,Ja as m,Jb as n,Jh as I,Ka as N,Kh as z,Lb as u,Mh as D,Ng as P,Nh as v,Ob as C,Oh as O,Pb as b,Qb as y,Sb as w,Sh as W,Vh as L,ab as r,bb as B,ci as g,di as R,ka as h,nb as t,nd as M,ob as e,pb as a,wb as F}from"./chunk-ZNQYYUGV.js";var X=(()=>{let i=class i{constructor(){this.checked=!1}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=h({type:i,selectors:[["fd-disabled-switch-example"]],standalone:!0,features:[w],decls:3,vars:2,consts:[["fd-form-label",""],[3,"ngModelChange","ngModel","disabled"]],template:function(s,o){s&1&&(t(0,"label",0),n(1," Default disabled Switch "),e(),t(2,"fd-switch",1),y("ngModelChange",function(l){return b(o.checked,l)||(o.checked=l),l}),e()),s&2&&(m(2),C("ngModel",o.checked),r("disabled",!0))},dependencies:[x,f,g,S,v],styles:["[_nghost-%COMP%]{display:block}fd-switch[_ngcontent-%COMP%]{margin-bottom:20px}"]});let c=i;return c})();var Z=(()=>{let i=class i{constructor(){this.checked=!1}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=h({type:i,selectors:[["fd-semantic-switch-example"]],standalone:!0,features:[w],decls:6,vars:2,consts:[["fd-form-label","","id","semantic-switch-1"],["ariaLabelledBy","semantic-switch-1",3,"semantic"],["fd-form-label","","id","semantic-switch-2"],["fdCompact","","ariaLabelledBy","semantic-switch-2",3,"semantic"]],template:function(s,o){s&1&&(t(0,"label",0),n(1," Default Semantic Switch "),e(),a(2,"fd-switch",1),t(3,"label",2),n(4," Default Semantic Compact Switch "),e(),a(5,"fd-switch",3)),s&2&&(m(2),r("semantic",!0),m(3),r("semantic",!0))},dependencies:[x,f,M],styles:["[_nghost-%COMP%]{display:block}fd-switch[_ngcontent-%COMP%]{margin-bottom:20px}"]});let c=i;return c})();var $=(()=>{let i=class i{constructor(){this.firstSwitch=!1,this.secondSwitch=!1}switchBoth(){this.firstSwitch=!this.firstSwitch,this.secondSwitch=!this.secondSwitch}switchOne(){this.firstSwitch=!this.firstSwitch}switchTwo(){this.secondSwitch=!this.secondSwitch}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=h({type:i,selectors:[["fd-switch-binding-example"]],standalone:!0,features:[w],decls:14,vars:6,consts:[["fd-form-label",""],[3,"ngModelChange","ngModel"],[3,"checkedChange","checked"],["fd-button","","label","Switch Both",3,"click"],["fd-button","","label","Switch 1",3,"click"],["fd-button","","label","Switch 2",3,"click"],["aria-live","polite"]],template:function(s,o){s&1&&(t(0,"label",0),n(1," Switch 1 "),e(),t(2,"fd-switch",1),y("ngModelChange",function(l){return b(o.firstSwitch,l)||(o.firstSwitch=l),l}),e(),t(3,"label",0),n(4," Switch 2 "),e(),t(5,"fd-switch",2),y("checkedChange",function(l){return b(o.secondSwitch,l)||(o.secondSwitch=l),l}),e(),t(6,"button",3),F("click",function(){return o.switchBoth()}),e(),t(7,"button",4),F("click",function(){return o.switchOne()}),e(),t(8,"button",5),F("click",function(){return o.switchTwo()}),e(),t(9,"div",6),n(10),a(11,"br"),n(12),a(13,"br"),e()),s&2&&(m(2),C("ngModel",o.firstSwitch),m(3),C("checked",o.secondSwitch),m(4),B("margin-top",15,"px"),m(),u(" Switch 1: ",o.firstSwitch," "),m(2),u(" Switch 2: ",o.secondSwitch," "))},dependencies:[x,f,g,S,v,P],styles:["[_nghost-%COMP%]{display:block}button[_ngcontent-%COMP%]{margin-top:15px;margin-right:10px}fd-switch[_ngcontent-%COMP%]{margin-bottom:20px}"]});let c=i;return c})();var ee=(()=>{let i=class i{constructor(){this.customForm=new z({switch1:new D({value:!1,disabled:!1}),switch2:new D({value:!0,disabled:!1}),switch3:new D({value:!1,disabled:!0}),switch4:new D({value:!0,disabled:!0})})}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=h({type:i,selectors:[["fd-switch-forms-example"]],standalone:!0,features:[w],decls:29,vars:10,consts:[[3,"formGroup"],["fd-form-label","",3,"required"],["formControlName","switch1",3,"required"],["fd-form-label",""],["formControlName","switch2"],["formControlName","switch3"],["formControlName","switch4"]],template:function(s,o){s&1&&(t(0,"form",0)(1,"label",1),n(2," Form Switch 1 "),e(),a(3,"fd-switch",2),t(4,"label",3),n(5," Form Switch 2 "),e(),a(6,"fd-switch",4),t(7,"label",3),n(8," Disabled Form Switch 3 "),e(),a(9,"fd-switch",5),t(10,"label",3),n(11," Disabled Form Switch 4 "),e(),a(12,"fd-switch",6),e(),a(13,"br"),t(14,"small"),n(15),a(16,"br"),n(17),a(18,"br"),n(19),a(20,"br"),n(21),a(22,"br"),n(23),a(24,"br"),n(25),a(26,"br"),n(27),a(28,"br"),e()),s&2&&(r("formGroup",o.customForm),m(),r("required",!0),m(2),r("required",!0),m(12),u(" Switch 1: ",o.customForm.controls.switch1.value," "),m(2),u(" Switch 2: ",o.customForm.controls.switch2.value," "),m(2),u(" Switch 3: ",o.customForm.controls.switch3.value," "),m(2),u(" Switch 4: ",o.customForm.controls.switch4.value," "),m(2),u(" Form Touched: ",o.customForm.touched," "),m(2),u(" Form Dirty: ",o.customForm.dirty," "),m(2),u(" Form Valid: ",o.customForm.valid," "))},dependencies:[g,O,S,I,A,R,W,L,x,f],styles:["fd-switch[_ngcontent-%COMP%]{margin-bottom:20px}"]});let c=i;return c})();var te=(()=>{let i=class i{constructor(){this.checked=!0}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=h({type:i,selectors:[["fd-switch-sizes-example"]],standalone:!0,features:[w],decls:9,vars:1,consts:[["fd-form-label",""],["fdCompact","",3,"ngModelChange","ngModel"],["activeText","On","inactiveText","Off"]],template:function(s,o){s&1&&(t(0,"label",0),n(1," Default Switch "),e(),a(2,"fd-switch"),t(3,"label",0),n(4," Compact Switch "),e(),t(5,"fd-switch",1),y("ngModelChange",function(l){return b(o.checked,l)||(o.checked=l),l}),e(),t(6,"label",0),n(7," Switch with Text "),e(),a(8,"fd-switch",2)),s&2&&(m(5),C("ngModel",o.checked))},dependencies:[x,f,M,g,S,v],styles:["[_nghost-%COMP%]{display:block}fd-switch[_ngcontent-%COMP%]{margin-bottom:20px}"]});let c=i;return c})();var oe="switch-sizes-example/switch-sizes-example.component.scss",ae="disabled-switch-example/disabled-switch-example.component.scss",se="switch-binding-example/switch-binding-example.component.scss",me="switch-form-example/switch-forms-example.component.scss",ce="switch-sizes-example/switch-sizes-example.component.html",le="switch-sizes-example/switch-sizes-example.component.ts",re="disabled-switch-example/disabled-switch-example.component.html",de="disabled-switch-example/disabled-switch-example.component.ts",pe="switch-binding-example/switch-binding-example.component.html",he="switch-binding-example/switch-binding-example.component.ts",we="switch-form-example/switch-forms-example.component.html",fe="switch-form-example/switch-forms-example.component.ts",ue="semantic-switch-example/semantic-switch-example.component.html",Se="semantic-switch-example/semantic-switch-example.component.ts",ie=(()=>{let i=class i{constructor(d){this.schemaFactory=d,this.data={properties:{disabled:!1,checked:!1,compact:!0,semantic:!1}},this.switchSize=[{language:"html",fileName:"switch-sizes-example",code:p(ce),typescriptFileCode:p(le),component:"SwitchSizesExampleComponent",scssFileCode:p(oe)}],this.switchDisable=[{language:"html",fileName:"disabled-switch-example",code:p(re),typescriptFileCode:p(de),component:"DisabledSwitchExampleComponent",scssFileCode:p(ae)}],this.switchBinding=[{language:"html",fileName:"switch-binding-example",code:p(pe),typescriptFileCode:p(he),component:"SwitchBindingExampleComponent",scssFileCode:p(se)}],this.switchSemantic=[{language:"html",fileName:"semantic-switch-example",code:p(ue),typescriptFileCode:p(Se),component:"SemanticSwitchExampleComponent"}],this.switchFormExample=[{language:"html",fileName:"switch-forms-example",code:p(we),scssFileCode:p(me)},{language:"typescript",fileName:"switch-forms-example",code:p(fe),component:"SwitchFormsExampleComponent"}],this.schema=this.schemaFactory.getComponent("switch")}onSchemaValues(d){this.data=d}};i.\u0275fac=function(s){return new(s||i)(N(J))},i.\u0275cmp=h({type:i,selectors:[["app-switch"]],standalone:!0,features:[w],decls:50,vars:11,consts:[["id","sizes","componentName","switch"],[3,"exampleFiles"],["id","disabled","componentName","switch"],["id","two-way-binding","componentName","switch"],["id","semantic-compact","componentName","switch"],["id","reactive-form","componentName","switch"],["id","playground-switch","componentName","switch"],[3,"onFormChanges","schema","schemaInitialValues"],[3,"ngModelChange","disabled","ngModel","fdCompact","semantic"]],template:function(s,o){s&1&&(t(0,"fd-docs-section-title",0),n(1," Default switch with variations "),e(),t(2,"description"),n(3,` Set the [fdCompact] directive to true to render switch in compact mode. An optional text for the active and inactive states of the switch can be set by providing values for the [inactiveText] and [activeText] input properties.
`),e(),t(4,"component-example"),a(5,"fd-switch-sizes-example"),e(),a(6,"code-example",1)(7,"separator"),t(8,"fd-docs-section-title",2),n(9," Disabled State "),e(),t(10,"description"),n(11,"Switch can be in the disabled state, which prevents the user from interacting with it."),e(),t(12,"component-example"),a(13,"fd-disabled-switch-example"),e(),a(14,"code-example",1)(15,"separator"),t(16,"fd-docs-section-title",3),n(17," Two-Way Binding "),e(),t(18,"description"),n(19,"It is possible to two-way bind to the checked property of the fd-switch."),e(),t(20,"component-example"),a(21,"fd-switch-binding-example"),e(),a(22,"code-example",1)(23,"separator"),t(24,"fd-docs-section-title",4),n(25," Semantic and Compact Mode "),e(),t(26,"description"),n(27,"It is possible to add semantic mode by passing "),t(28,"code"),n(29,'[semantic]="true"'),e(),n(30," and compact mode by passing "),t(31,"code"),n(32,"fdCompact"),e(),n(33," to switch component."),e(),t(34,"component-example"),a(35,"fd-semantic-switch-example"),e(),a(36,"code-example",1)(37,"separator"),t(38,"fd-docs-section-title",5),n(39,` Switch used within Reactive Form
`),e(),t(40,"description"),n(41,"It is possible to use the fd-switch component within Angular Reactive Forms"),e(),t(42,"component-example"),a(43,"fd-switch-forms-example"),e(),a(44,"code-example",1),t(45,"fd-docs-section-title",6),n(46," Playground Area "),e(),t(47,"playground",7),F("onFormChanges",function(l){return o.onSchemaValues(l)}),t(48,"fd-switch",8),y("ngModelChange",function(l){return b(o.data.properties.checked,l)||(o.data.properties.checked=l),l}),n(49," Example Switch"),e()()),s&2&&(m(6),r("exampleFiles",o.switchSize),m(8),r("exampleFiles",o.switchDisable),m(8),r("exampleFiles",o.switchBinding),m(14),r("exampleFiles",o.switchSemantic),m(8),r("exampleFiles",o.switchFormExample),m(3),r("schema",o.schema)("schemaInitialValues",o.data),m(),r("disabled",o.data.properties.disabled),C("ngModel",o.data.properties.checked),r("fdCompact",o.data.properties.compact)("semantic",o.data.properties.semantic))},dependencies:[q,k,G,te,V,Y,X,$,Z,ee,Q,f,g,S,v,M],encapsulation:2});let c=i;return c})();var ne=(()=>{let i=class i{};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=h({type:i,selectors:[["app-switch-header"]],standalone:!0,features:[w],decls:10,vars:0,consts:[["module","SwitchComponent","subPackage","switch"]],template:function(s,o){s&1&&(t(0,"fd-doc-page")(1,"header"),n(2,"Switch"),e(),t(3,"description"),n(4," The Switch component is used to activate or deactivate an element. It uses a visual metaphor to inform the user of the state of the switch. "),a(5,"br")(6,"br"),n(7," Once focused, it can be switchd using the spacebar or the enter key. "),e(),a(8,"import",0)(9,"fd-header-tabs"),e())},dependencies:[H,j,k,U,K],styles:["fd-switch[_ngcontent-%COMP%]{margin-bottom:20px}"]});let c=i;return c})();var nt=[{path:"",component:ne,children:[{path:"",component:ie}],data:{primary:!0}}],ot="switch",at="switch",st="coreSwitch";export{at as API_FILE_KEY,st as I18N_KEY,ot as LIBRARY_NAME,nt as ROUTES};
