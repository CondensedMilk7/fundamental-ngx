import{$c as ie,Dd as W,Ed as B,Ee as le,Fe as ae,Ge as pe,He as de,Na as te,Sa as M,Tc as N,Uc as D,ad as oe,bb as k,hb as V,ia as w,je as re,ke as L,le as ne,me,oa as ee}from"./chunk-I4UUC3YQ.js";import"./chunk-IPQ3K2M4.js";import"./chunk-O46BWIIH.js";import{$b as S,$c as Y,Ab as A,Db as T,La as r,Rh as J,Sb as q,Tb as a,Uh as F,Vb as U,Vh as K,Wh as z,Yb as C,Yh as I,Zb as y,Zg as E,Zh as G,_b as _,ac as P,bi as Q,ci as X,eb as b,fi as Z,hb as n,ka as g,oi as x,pb as R,pi as $,qc as H,ra as f,sa as u,ub as t,vb as e,wb as d,yd as v}from"./chunk-BLDJGFEP.js";var ke=(()=>{let o=class o{constructor(){this.allowNullTimeObject=new k().setTime(12,0,0),this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1}}setNull(){this.allowNullTimeObject=null}setValid(){this.allowNullTimeObject=new k().setTime(12,0,0)}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=g({type:o,selectors:[["fdp-platform-time-picker-basic-example"]],standalone:!0,features:[S([V()]),P],decls:16,vars:7,consts:[["label","24-Hour Time Picker"],["name","24-hour",3,"displayFormat"],["label","12-Hour Time Picker"],["name","12-hour",3,"meridian"],["label","Time Picker Without Seconds"],["name","without-seconds",3,"displaySeconds"],["label","Disabled Time Picker"],["name","disabled",3,"disabled"],["label","Compact Time Picker"],["name","24-hour","fdCompact","",3,"displayFormat"],["label","Null Validity","id","sadf"],["name","null-validity",3,"ngModelChange","allowNull","ngModel"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"]],template:function(l,i){l&1&&(t(0,"fdp-form-group")(1,"fdp-form-field",0),d(2,"fdp-time-picker",1),e(),t(3,"fdp-form-field",2),d(4,"fdp-time-picker",3),e(),t(5,"fdp-form-field",4),d(6,"fdp-time-picker",5),e(),t(7,"fdp-form-field",6),d(8,"fdp-time-picker",7),e(),t(9,"fdp-form-field",8),d(10,"fdp-time-picker",9),e(),t(11,"fdp-form-field",10)(12,"fdp-time-picker",11),_("ngModelChange",function(s){return y(i.allowNullTimeObject,s)||(i.allowNullTimeObject=s),s}),e(),t(13,"fdp-form-field-extras")(14,"button",12),T("click",function(){return i.setNull()}),e(),t(15,"button",13),T("click",function(){return i.setValid()}),e()()()()),l&2&&(r(2),n("displayFormat",i.displayFormat),r(2),n("meridian",!0),r(2),n("displaySeconds",!1),r(2),n("disabled",!0),r(2),n("displayFormat",i.displayFormat),r(2),n("allowNull",!1),C("ngModel",i.allowNullTimeObject))},dependencies:[D,N,M,te,B,W,v,x,F,G,E],encapsulation:2});let m=o;return m})();function ye(m,o){m&1&&(t(0,"span"),a(1," Value is required "),e())}function _e(m,o){if(m&1&&b(0,ye,2,0,"span"),m&2){let j=o.$implicit;R(0,j.required?0:-1)}}var he=(()=>{let o=class o{constructor(){this.requiredTimeValidator=[J.required],this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1},this.timePickerForm=new z({disableExample:new I({value:"",disabled:!0}),nullValidity:new I(new k().setTime(0,0,0))})}onSubmit(){this.timePickerForm.valid?alert("Form Value: "+JSON.stringify(this.timePickerForm.value)):alert("Form invalid")}setNull(){this.timePickerForm.get("nullValidity")?.setValue(null),this.markControlAsTouched("nullValidity")}setValid(){this.timePickerForm.get("nullValidity")?.setValue(new k().setTime(0,0,0)),this.markControlAsTouched("nullValidity")}markControlAsTouched(h){let l=this.timePickerForm.get(h);l?.untouched&&l.markAsTouched()}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=g({type:o,selectors:[["fdp-platform-time-picker-reactive-example"]],standalone:!0,features:[S([V()]),P],decls:29,vars:27,consts:[["ffl1",""],["ffl2",""],["ffl3",""],["ffl4",""],["i18n",""],[3,"onSubmit","formGroup"],["id","24-hour","placeholder","hh:mm:ss","label","24-Hour Time Picker:",3,"rank","required","validators"],["name","24-hour",3,"formControl","displayFormat"],["id","12-hour","placeholder","hh:mm:ss","label","12-Hour Time Picker:",3,"rank","required","validators"],["name","12-hour",3,"meridian","formControl"],["id","without-seconds","placeholder","hh:mm","label","Time Picker Without Seconds:",3,"rank","required","validators"],["name","without-seconds",3,"displaySeconds","formControl"],["id","compact","placeholder","hh:mm:ss","label","Compact Time Picker:",3,"rank","required","validators"],["name","compact","fdCompact","",3,"formControl"],["id","nullValidity","placeholder","hh:mm:ss","label","Null Validity:",3,"rank","required","validators"],["name","nullValidity","formControlName","nullValidity",3,"allowNull"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"],["id","disableExample","placeholder","hh:mm:ss","label","Disabled Time Picker:",3,"rank"],["name","disableExample","formControlName","disableExample"],["id","submitBtn",3,"rank"],["fd-button","","name","submitBtn",3,"click"]],template:function(l,i){if(l&1){let c=A();t(0,"fdp-form-group",5),T("onSubmit",function(){return f(c),u(i.onSubmit())}),t(1,"fdp-form-field",6,0),d(3,"fdp-time-picker",7),e(),t(4,"fdp-form-field",8,1),d(6,"fdp-time-picker",9),e(),t(7,"fdp-form-field",10,2),d(9,"fdp-time-picker",11),e(),t(10,"fdp-form-field",12,3),d(12,"fdp-time-picker",13),e(),t(13,"fdp-form-field",14),d(14,"fdp-time-picker",15)(15,"br")(16,"br"),t(17,"fd-segmented-button")(18,"button",16),T("click",function(){return f(c),u(i.setNull())}),e(),t(19,"button",17),T("click",function(){return f(c),u(i.setValid())}),e()()(),t(20,"fdp-form-field",18),d(21,"fdp-time-picker",19),e(),t(22,"fdp-form-field",20)(23,"button",21),T("click",function(){return f(c),u(i.onSubmit())}),a(24,"Submit"),e()(),b(25,_e,1,1,"ng-template",null,4,H),e(),t(27,"span"),a(28),e()}if(l&2){let c=q(2),s=q(5),p=q(8),Ce=q(11);n("formGroup",i.timePickerForm),r(),n("rank",1)("required",!0)("validators",i.requiredTimeValidator),r(2),n("formControl",c.formControl)("displayFormat",i.displayFormat),r(),n("rank",1)("required",!0)("validators",i.requiredTimeValidator),r(2),n("meridian",!0)("formControl",s.formControl),r(),n("rank",1)("required",!0)("validators",i.requiredTimeValidator),r(2),n("displaySeconds",!1)("formControl",p.formControl),r(),n("rank",1)("required",!0)("validators",i.requiredTimeValidator),r(2),n("formControl",Ce.formControl),r(),n("rank",1)("required",!0)("validators",i.requiredTimeValidator),r(),n("allowNull",!1),r(6),n("rank",1),r(2),n("rank",8),r(6),U("form status: ",i.timePickerForm.valid,"")}},dependencies:[D,N,M,x,F,K,$,Q,X,Z,B,W,v,oe,ie,E],encapsulation:2,changeDetection:0});let m=o;return m})();function we(m,o){m&1&&(t(0,"span"),a(1," Value is required "),e())}function be(m,o){if(m&1&&b(0,we,2,0,"span"),m&2){let j=o.$implicit;R(0,j.required?0:-1)}}var Te=(()=>{let o=class o{constructor(){this.time24h=new k().setTime(18,0,0),this.time12h=new k().setTime(18,0,0),this.timeWithoutSeconds=new k().setTime(12,0,0),this.timeCompact=new k().setTime(12,0,0),this.timeAllowNull=new k().setTime(12,0,0),this.timeDisabled=new k().setTime(12,0,0),this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1}}setNull(){this.timeAllowNull=null}setValid(){this.timeAllowNull=new k().setTime(12,0,0)}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=g({type:o,selectors:[["fdp-platform-time-picker-template-example"]],standalone:!0,features:[S([V()]),P],decls:19,vars:17,consts:[["i18n",""],["id","24-hour","label","24-Hour Time Picker:",3,"rank"],["name","24-hour",3,"ngModelChange","ngModel","displayFormat"],["id","12-hour","label","12-Hour Time Picker:",3,"rank"],["name","12-hour",3,"ngModelChange","meridian","ngModel"],["id","without-seconds","label","Time Picker Without Seconds:",3,"rank"],["name","without-seconds",3,"ngModelChange","displaySeconds","ngModel"],["id","compact","label","Compact Time Picker:",3,"rank"],["name","compact","fdCompact","",3,"ngModelChange","ngModel"],["id","null-validity","label","Null Validity:",3,"rank"],["name","null-validity",3,"ngModelChange","allowNull","ngModel"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"],["id","disableExample","label","Disabled Time Picker:",3,"rank"],["name","disableExample",3,"ngModelChange","disabled","ngModel"]],template:function(l,i){if(l&1){let c=A();t(0,"fdp-form-group")(1,"fdp-form-field",1)(2,"fdp-time-picker",2),_("ngModelChange",function(p){return f(c),y(i.time24h,p)||(i.time24h=p),u(p)}),e()(),t(3,"fdp-form-field",3)(4,"fdp-time-picker",4),_("ngModelChange",function(p){return f(c),y(i.time12h,p)||(i.time12h=p),u(p)}),e()(),t(5,"fdp-form-field",5)(6,"fdp-time-picker",6),_("ngModelChange",function(p){return f(c),y(i.timeWithoutSeconds,p)||(i.timeWithoutSeconds=p),u(p)}),e()(),t(7,"fdp-form-field",7)(8,"fdp-time-picker",8),_("ngModelChange",function(p){return f(c),y(i.timeCompact,p)||(i.timeCompact=p),u(p)}),e()(),t(9,"fdp-form-field",9)(10,"fdp-time-picker",10),_("ngModelChange",function(p){return f(c),y(i.timeAllowNull,p)||(i.timeAllowNull=p),u(p)}),e(),d(11,"br")(12,"br"),t(13,"button",11),T("click",function(){return f(c),u(i.setNull())}),e(),t(14,"button",12),T("click",function(){return f(c),u(i.setValid())}),e()(),t(15,"fdp-form-field",13)(16,"fdp-time-picker",14),_("ngModelChange",function(p){return f(c),y(i.timeDisabled,p)||(i.timeDisabled=p),u(p)}),e()(),b(17,be,1,1,"ng-template",null,0,H),e()}l&2&&(r(),n("rank",1),r(),C("ngModel",i.time24h),n("displayFormat",i.displayFormat),r(),n("rank",1),r(),n("meridian",!0),C("ngModel",i.time12h),r(),n("rank",1),r(),n("displaySeconds",!1),C("ngModel",i.timeWithoutSeconds),r(),n("rank",1),r(),C("ngModel",i.timeCompact),r(),n("rank",1),r(),n("allowNull",!1),C("ngModel",i.timeAllowNull),r(5),n("rank",1),r(),n("disabled",!0),C("ngModel",i.timeDisabled))},dependencies:[D,N,M,B,W,x,F,G,v,E],encapsulation:2,changeDetection:0});let m=o;return m})();var Se="platform-time-picker-basic-example.component.html",ve="platform-time-picker-basic-example.component.ts",Ee="platform-time-picker-reactive-example.component.html",Fe="platform-time-picker-reactive-example.component.ts",xe="platform-time-picker-template-example.component.html",Me="platform-time-picker-template-example.component.ts",ge=(()=>{let o=class o{constructor(){this.timePickerBasic=[{language:"html",code:w(Se),fileName:"platform-time-picker-basic-example"},{language:"typescript",code:w(ve),fileName:"platform-time-picker-basic-example",component:"PlatformTimePickerBasicExampleComponent"}],this.timePickerReactive=[{language:"html",code:w(Ee),fileName:"platform-time-picker-reactive-example"},{language:"typescript",code:w(Fe),fileName:"platform-time-picker-reactive-example",component:"PlatformTimePickerReactiveExampleComponent"}],this.timePickerTemplate=[{language:"html",code:w(xe),fileName:"platform-time-picker-template-example"},{language:"typescript",code:w(Me),fileName:"platform-time-picker-template-example",component:"PlatformTimePickerTemplateExampleComponent"}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=g({type:o,selectors:[["app-time-picker"]],standalone:!0,features:[P],decls:33,vars:3,consts:[["id","basic","componentName","time-picker"],[3,"exampleFiles"],["id","reactive","componentName","time-picker"],["id","template","componentName","time-picker"]],template:function(l,i){l&1&&(t(0,"fd-docs-section-title",0),a(1," Basic Time Picker "),e(),t(2,"description"),a(3,"Basic usage of Time Picker without Forms and with options like "),t(4,"code"),a(5,"meredian"),e(),a(6,", "),t(7,"code"),a(8,"allowNull"),e(),a(9,", "),t(10,"code"),a(11,"disabled"),e(),a(12,`, pre-populating and changing dates.
`),e(),t(13,"component-example"),d(14,"fdp-platform-time-picker-basic-example"),e(),d(15,"code-example",1)(16,"separator"),t(17,"fd-docs-section-title",2),a(18,` Time Picker with Reactive Forms
`),e(),t(19,"description"),a(20,"Usage of Time Picker with Platform Forms using Reactive Forms."),e(),t(21,"component-example"),d(22,"fdp-platform-time-picker-reactive-example"),e(),d(23,"code-example",1)(24,"separator"),t(25,"fd-docs-section-title",3),a(26,` Time Picker with Template Forms
`),e(),t(27,"description"),a(28,"Usage of Time Picker with Platform Forms using Template Forms."),e(),t(29,"component-example"),d(30,"fdp-platform-time-picker-template-example"),e(),d(31,"code-example",1)(32,"separator")),l&2&&(r(15),n("exampleFiles",i.timePickerBasic),r(8),n("exampleFiles",i.timePickerReactive),r(8),n("exampleFiles",i.timePickerTemplate))},dependencies:[me,L,re,ke,ee,le,he,Te],encapsulation:2});let m=o;return m})();var Pe=(()=>{let o=class o{};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=g({type:o,selectors:[["app-time-picker-header"]],standalone:!0,features:[P],decls:15,vars:0,consts:[["routerLink","/core/time-picker"],["module","PlatformTimePickerModule","subPackage","form"]],template:function(l,i){l&1&&(t(0,"fd-doc-page")(1,"header"),a(2,"Time Picker"),e(),t(3,"description")(4,"p"),a(5," This is an extension of the TimePicker component present in "),t(6,"a",0),a(7,"fundamental-ngx/core"),e(),a(8,". "),e(),t(9,"h3"),a(10,"Platform specific enhancements:"),e(),t(11,"p"),a(12," Platform TimePicker component implements the FormFieldControl interface, and thus can be used within the FormField component. "),e()(),d(13,"import",1)(14,"fd-header-tabs"),e())},dependencies:[ne,pe,L,Y,de,ae],encapsulation:2});let m=o;return m})();var at=[{path:"",component:Pe,children:[{path:"",component:ge}],data:{primary:!0}}],pt="time-picker",dt="timePicker";export{dt as API_FILE_KEY,pt as LIBRARY_NAME,at as ROUTES};
