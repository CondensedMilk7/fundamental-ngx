import{a as fe,b as ye,c as he}from"./chunk-GJMVIK7J.js";import{a as L,b as ne,c as A,d as T}from"./chunk-JCE6HOK4.js";import{$c as $,Nb as P,X as U,Z as x,_c as K,da as q,ed as M,ne as G,oe as C,pe as X,qe as Z,se as ee,te,ue as ae,vb as y,ve as ie,wb as _}from"./chunk-GD3HAKAB.js";import"./chunk-7AKGFJXI.js";import{N as W}from"./chunk-VK2A5WWN.js";import{Ka as b,L as z,oa as j,ta as E}from"./chunk-4NCGO7IN.js";import{Kb as e,Pc as Q,Tb as g,Wb as u,eb as c,fb as k,nb as R,nc as J,oc as V,pb as p,qa as l,qb as i,qc as B,rb as a,sb as r,uc as Y,yb as S}from"./chunk-LP45MGOR.js";import{d as H,e as D}from"./chunk-VIJJU4QR.js";var oe=H((w,I)=>{"use strict";(function(n,t){typeof w=="object"&&typeof I<"u"?I.exports=t(L()):typeof define=="function"&&define.amd?define(["dayjs"],t):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_locale_ar=t(n.dayjs)})(w,function(n){"use strict";function t(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var h=t(n),d="\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A\u0648_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648_\u0623\u063A\u0633\u0637\u0633_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"),o={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},m={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"},f={name:"ar",weekdays:"\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),weekdaysShort:"\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),weekdaysMin:"\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),months:d,monthsShort:d,weekStart:6,relativeTime:{future:"\u0628\u0639\u062F %s",past:"\u0645\u0646\u0630 %s",s:"\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",m:"\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",mm:"%d \u062F\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062A",d:"\u064A\u0648\u0645 \u0648\u0627\u062D\u062F",dd:"%d \u0623\u064A\u0627\u0645",M:"\u0634\u0647\u0631 \u0648\u0627\u062D\u062F",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0639\u0627\u0645 \u0648\u0627\u062D\u062F",yy:"%d \u0623\u0639\u0648\u0627\u0645"},preparse:function(s){return s.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(F){return m[F]}).replace(/،/g,",")},postformat:function(s){return s.replace(/\d/g,function(F){return o[F]}).replace(/,/g,"\u060C")},ordinal:function(s){return s},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200FM/\u200FYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};return h.default.locale(f,null,!0),f})});var re=H((O,N)=>{"use strict";(function(n,t){typeof O=="object"&&typeof N<"u"?N.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_locale_en=t()})(O,function(){"use strict";return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var t=["th","st","nd","rd"],h=n%100;return"["+n+(t[(h-20)%10]||t[h]||t[0])+"]"}}})});var me=D(L());var He=D(oe()),Re=D(fe()),Je=D(ye()),Ve=D(re()),Be=D(he());function xe(n,t){if(n&1&&r(0,"button",4),n&2){let h=t.$implicit;p("label",h.label)("value",h.value)}}var de=(()=>{let t=class t{constructor(d,o){this.datetimeAdapter=o,this.date=(0,me.default)(),this.localeOptions=[{value:"en",label:"English"},{value:"fr",label:"French"},{value:"de",label:"Deutsch"},{value:"bg",label:"Bulgarian"},{value:"ar",label:"Arabic"}],this.setLocale(d)}setLocale(d){this.actualLocale=d,this.datetimeAdapter.setLocale(d)}};t.\u0275fac=function(o){return new(o||t)(k(Y),k(y))},t.\u0275cmp=l({type:t,selectors:[["fd-date-picker-dayjs-adapter-example"]],viewQuery:function(o,m){if(o&1&&V(P,5),o&2){let f;J(f=B())&&(m.datePicker=f.first)}},standalone:!0,features:[g([{provide:Y,useValue:"fr"},{provide:_,useValue:T},{provide:y,useClass:A}]),u],decls:6,vars:3,consts:[["fd-form-label",""],["id","language",2,"margin-bottom","20px",3,"ngModel","ngModelChange"],["fd-button","",3,"label","value",4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"],["fd-button","",3,"label","value"]],template:function(o,m){o&1&&(i(0,"label",0),e(1,"Languages"),a(),i(2,"fd-segmented-button",1),S("ngModelChange",function(s){return m.setLocale(s)}),R(3,xe,1,2,"button",2),a(),r(4,"br"),i(5,"fd-date-picker",3),S("ngModelChange",function(s){return m.date=s}),a()),o&2&&(c(2),p("ngModel",m.actualLocale),c(1),p("ngForOf",m.localeOptions),c(2),p("ngModel",m.date))},dependencies:[W,$,K,b,j,E,Q,z,P],encapsulation:2});let n=t;return n})();var se=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["fd-dayjs-adapter-options-example"]],standalone:!0,features:[g([{provide:_,useValue:T},{provide:y,useClass:A},{provide:ne,useValue:{useUtc:!0,strict:!0}}]),u],decls:1,vars:0,consts:[["placeholder","M/D/YYYY h:mm a"]],template:function(o,m){o&1&&r(0,"fd-datetime-picker",0)},dependencies:[M],encapsulation:2});let n=t;return n})();var pe=D(L());var le=(()=>{let t=class t{constructor(){this.date=(0,pe.default)()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["fd-dayjs-datetime-formats-example"]],standalone:!0,features:[g([{provide:_,useValue:{parse:{dateInput:"l",timeInput:"h:mm A",dateTimeInput:"l h:mm A"},display:{dateInput:"l",timeInput:"h:mm A",dateTimeInput:"l h:mm A",dateA11yLabel:"YYYY MMMM DD",monthA11yLabel:"MMMM",yearA11yLabel:"YYYY"},rangeDelimiter:" - "}},{provide:y,useClass:A}]),u],decls:1,vars:1,consts:[[3,"ngModel","ngModelChange"]],template:function(o,m){o&1&&(i(0,"fd-datetime-picker",0),S("ngModelChange",function(s){return m.date=s}),a()),o&2&&p("ngModel",m.date)},dependencies:[M,b,j,E],encapsulation:2});let n=t;return n})();var ge="date-picker-dayjs-adapter-example.component.ts",_e="date-picker-dayjs-adapter-example.component.html",Ae="dayjs-adapter-options-example.component.ts",Se="dayjs-adapter-options-example.component.html",je="dayjs-datetime-formats-example.component.ts",Ee="dayjs-datetime-formats-example.component.html",ce=(()=>{let t=class t{constructor(){this.datePickerDayjsAdapter=[{language:"html",code:x(_e),fileName:"date-picker-dayjs-adapter-example"},{language:"typescript",component:"DatePickerDayjsAdapterExampleComponent",code:x(ge),fileName:"date-picker-dayjs-adapter-example"}],this.dayjsAdapterOptions=[{language:"html",code:x(Se),fileName:"dayjs-adapter-options-example"},{language:"typescript",component:"DayjsAdapterOptionsExampleComponent",code:x(Ae),fileName:"dayjs-adapter-options-example"}],this.dayjsDatetimeFormats=[{language:"html",code:x(Ee),fileName:"dayjs-datetime-formats-example"},{language:"typescript",component:"DayjsDatetimeFormatsExampleComponent",code:x(je),fileName:"dayjs-datetime-formats-example"}]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-dayjs-datetime-adapter"]],standalone:!0,features:[u],decls:63,vars:3,consts:[["id","simple","componentName","datetime-adapter"],[3,"exampleFiles"],["id","datetime-options","componentName","datetime-adapter"],["href","https://day.js.org/docs/en/parse/string-format"],["id","datetime-formats","componentName","datetime-adapter"],["href","https://day.js.org/docs/en/display/format"]],template:function(o,m){o&1&&(i(0,"fd-docs-section-title",0),e(1,` Date Picker example with DayjsDatetimeAdapter
`),a(),i(2,"description"),e(3," DateAdapter is a generic class, components such as Datepicker also need to be made generic. When working with these classes (for example as a ViewChild) you should include the appropriate generic type that corresponds to the DateAdapter implementation you are using. For example: "),r(4,"br")(5,"br"),i(6,"code"),e(7,"@ViewChild(DatePickerComponent) datePicker: DatePickerComponent<"),i(8,"strong"),e(9,"Dayjs"),a(),e(10,">"),a(),e(11,`;
`),a(),i(12,"component-example"),r(13,"fd-date-picker-dayjs-adapter-example"),a(),r(14,"code-example",1)(15,"separator"),i(16,"fd-docs-section-title",2),e(17,` Locale time zone and strict mode
`),a(),i(18,"description"),e(19," By default the DayjsDatetimeAdapter creates dates in your time zone specific locale and in "),i(20,"a",3),e(21,"without strict parsing"),a(),e(22,". You can change the default behaviour by setting "),i(23,"code"),e(24,"useUtc: true"),a(),e(25," and "),i(26,"code"),e(27,"strict: true"),a(),e(28,`.
`),a(),i(29,"component-example"),r(30,"fd-dayjs-adapter-options-example"),a(),r(31,"code-example",1)(32,"separator"),i(33,"fd-docs-section-title",4),e(34,` DayjsDatetimeAdapter formats
`),a(),i(35,"description"),e(36," The "),i(37,"code"),e(38,"DATE_TIME_FORMATS"),a(),e(39," object is a collection of formats that components such as datepicker, timepicker, etc. uses when parsing and displaying dates. These formats are passed through to the "),i(40,"code"),e(41,"DatetimeAdapter"),a(),e(42,". The "),i(43,"code"),e(44,"DayjsDatetimeAdapter"),a(),e(45," has "),i(46,"code"),e(47,"DAYJS_DATETIME_FORMATS"),a(),e(48,", provided in the code of the example. "),r(49,"br")(50,"br"),e(51," These formats could be customized, but be sure they are compatible with the DatetimeAdapter. "),r(52,"br"),e(53," You can read more about Dayjs "),i(54,"a",3),e(55,"parsing formats"),a(),e(56,", and "),i(57,"a",5),e(58,"display formats"),a(),e(59,`.
`),a(),i(60,"component-example"),r(61,"fd-dayjs-datetime-formats-example"),a(),r(62,"code-example",1)),o&2&&(c(14),p("exampleFiles",m.datePickerDayjsAdapter),c(17),p("exampleFiles",m.dayjsAdapterOptions),c(31),p("exampleFiles",m.dayjsDatetimeFormats))},dependencies:[Z,C,G,de,q,ee,se,le],encapsulation:2});let n=t;return n})();var ue=(()=>{let t=class t{constructor(){this.installSnippet={code:`npm i @fundamental-ngx/datetime-adapter

# using yarn?
# yarn add @fundamental-ngx/datetime-adapter`,language:"bash"}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-datetime-datetime-adapter-header"]],standalone:!0,features:[u],decls:41,vars:1,consts:[[3,"file"],["module","DayjsDatetimeAdapterModule"]],template:function(o,m){o&1&&(i(0,"fd-doc-page")(1,"header"),e(2,"Dayjs Datetime Adapter"),a(),i(3,"description"),e(4," The Date Picker, Time Picker, DateTime Picker and similar components "),i(5,"strong"),e(6,"rely on provided datetime implementation"),a(),e(7," ("),i(8,"code"),e(9,"DatetimeAdapter"),a(),e(10,") and "),i(11,"strong"),e(12,"datetime formats"),a(),e(13," ("),i(14,"code"),e(15,"DateTimeFormats"),a(),e(16,"). "),r(17,"br")(18,"br"),e(19," These components could be used with "),i(20,"code"),e(21,"FdDatetimeAdapter"),a(),e(22,", based on the JavaScript's native "),i(23,"code"),e(24,"Date"),a(),e(25," object, but one of the biggest shortcomings of the native "),i(26,"code"),e(27,"Date"),a(),e(28," object is the inability to set the parse format. As an alternative could be the "),i(29,"code"),e(30,"DayjsDatetimeAdapter"),a(),e(31," or a custom "),i(32,"code"),e(33,"DateAdapter"),a(),e(34," that works with the formatting/parsing library of your choice. "),r(35,"br")(36,"br"),e(37," Please consider that you need to install this package separately. "),r(38,"fd-code-snippet",0),a(),r(39,"import",1)(40,"fd-header-tabs"),a()),o&2&&(c(38),p("file",m.installSnippet))},dependencies:[X,ae,C,U,ie,te],encapsulation:2});let n=t;return n})();var st=[{path:"",component:ue,children:[{path:"",component:ce}],data:{primary:!0}}],pt="dayjs-datetime-adapter",lt="dayjsDatetimeAdapter";export{lt as API_FILE_KEY,pt as LIBRARY_NAME,st as ROUTES};
