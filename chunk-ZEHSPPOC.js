import{Ce as ve,Db as Ce,De as Fe,Ee as Me,Fb as k,Fe as _e,Jb as Se,Mb as B,bf as De,cf as f,ga as x,h as se,he as we,ie as $,je as Ee,ke as Te,ma as be,sb as fe,tb as he,ub as ge,xb as ye}from"./chunk-RQU4D65I.js";import"./chunk-V6JPMPCW.js";import{ia as ue,qa as F,ra as D,ta as xe}from"./chunk-OT5GNZKG.js";import{$f as re,$h as ce,Bc as H,Ea as ee,Fh as de,Hc as me,Hg as pe,Ib as K,Ih as C,Ja as m,Jb as t,Jh as q,Ka as oe,Kb as A,Kh as z,Lb as u,Mh as G,Nh as E,Ob as h,Oh as Y,Pb as g,Qb as y,Qc as J,Sb as b,Sh as Q,Tb as j,Vh as X,Za as W,ab as r,ac as V,bb as v,bc as I,cc as ie,ci as S,di as Z,gc as U,ka as c,nb as o,nd as le,ob as e,pb as d,qb as te,ra as P,rb as ne,sa as L,tb as R,wb as O,wc as ae}from"./chunk-ZNQYYUGV.js";var Ye=()=>[],Ve=(()=>{let i=class i{constructor(s){this.http=s,this.searchTerm=""}ngOnInit(){this.dropdownValues=this.http.get("./assets/search-input-values.json")}};i.\u0275fac=function(a){return new(a||i)(oe(me))},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-async-example"]],standalone:!0,features:[b],decls:2,vars:5,consts:[["placeholder","Type some text...",3,"ngModelChange","dropdownValues","ngModel"]],template:function(a,n){a&1&&(o(0,"fd-combobox",0),V(1,"async"),y("ngModelChange",function(p){return g(n.searchTerm,p)||(n.searchTerm=p),p}),e()),a&2&&(r("dropdownValues",I(1,2,n.dropdownValues)||j(4,Ye)),h("ngModel",n.searchTerm))},dependencies:[f,S,C,E,ae],encapsulation:2});let l=i;return l})();function Qe(l,i){if(l&1&&(o(0,"span",6),d(1,"fd-icon",7),e(),o(2,"div",8)(3,"div",9),t(4),e(),o(5,"div",10),t(6),e()()),l&2){let N=i.$implicit;m(),r("glyph",N.icon),m(3),A(N.name),m(2),u("Byline Text for ",N.name,"")}}var Ie=(()=>{let i=class i{constructor(){this.values=[{name:"Photo Voltaic",icon:"photo-voltaic"},{name:"Settings",icon:"settings"},{name:"Heating Cooling",icon:"heating-cooling"},{name:"Competitor",icon:"competitor"},{name:"Chalkboard",icon:"chalkboard"},{name:"Database",icon:"database"},{name:"Passenger Train",icon:"passenger-train"},{name:"World",icon:"world"},{name:"Shield",icon:"shield"},{name:"Journey Change",icon:"journey-change"}],this.mobileConfig={title:"Title",approveButtonText:"Approve",cancelButtonText:"Cancel",hasCloseButton:!0,dialogConfig:{ariaLabel:"Title"}}}displayFunction(s){return s?s.name:""}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-byline-example"]],standalone:!0,features:[b],decls:18,vars:24,consts:[["template",""],[1,"examples-column"],["fd-form-item",""],["fd-form-label",""],["placeholder","Type some text...",3,"itemClicked","ngModelChange","dropdownValues","itemTemplate","displayFn","ngModel","isSearch","byline"],["placeholder","Search here...",3,"ngModelChange","dropdownValues","itemTemplate","displayFn","ngModel","byline","mobile","mobileConfig"],["fd-list-thumbnail",""],[3,"glyph"],["fd-list-content",""],["fd-list-title",""],["fd-list-byline",""]],template:function(a,n){if(a&1){let w=R();o(0,"div",1)(1,"div",2)(2,"label",3),t(3,"Byline combobox"),e(),o(4,"fd-combobox",4),O("itemClicked",function(M){return P(w),L(n.selected=M)}),y("ngModelChange",function(M){return P(w),g(n.searchTerm,M)||(n.searchTerm=M),L(M)}),e(),o(5,"small"),t(6),e(),o(7,"small"),t(8),V(9,"json"),e()(),o(10,"div",2)(11,"label",3),t(12,"Byline mobile combobox"),e(),o(13,"fd-combobox",5),y("ngModelChange",function(M){return P(w),g(n.searchTerm2,M)||(n.searchTerm2=M),L(M)}),e(),o(14,"small"),t(15),e()(),W(16,Qe,7,3,"ng-template",null,0,U),e()}if(a&2){let w=K(17);m(4),r("dropdownValues",n.values)("itemTemplate",w)("displayFn",n.displayFunction),h("ngModel",n.searchTerm),r("isSearch",!0)("byline",!0),m(),v("display","block"),m(),u("Search Term: ",n.searchTerm,""),m(),v("display","block"),m(),u("Returned from itemClicked Event: ",I(9,22,n.selected),""),m(5),r("dropdownValues",n.values)("itemTemplate",w)("displayFn",n.displayFunction),h("ngModel",n.searchTerm2),r("byline",!0)("mobile",!0)("mobileConfig",n.mobileConfig),m(),v("display","block"),m(),u("Search Term: ",n.searchTerm2,"")}},dependencies:[D,F,f,S,C,E,B,k,fe,he,ge,pe,H],styles:[".examples-column[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-top:1rem}"]});let l=i;return l})();function Xe(l,i){if(l&1&&(o(0,"span",2),t(1),e(),o(2,"span",3),t(3),e()),l&2){let N=i.$implicit;m(),A(N.name),m(2),A(N.price)}}var Be=(()=>{let i=class i{constructor(){this.searchTerm="",this.dropdownValues=[{name:"Apple",price:"1.00 USD"},{name:"Banana",price:"0.50 USD"},{name:"Kiwi",price:"1.00 USD"},{name:"Pineapple",price:"3.00 USD"},{name:"Strawberries",price:"4.00 USD"}]}displayFunc(s){return s?s.name+" - "+s.price:""}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-columns-example"]],standalone:!0,features:[b],decls:5,vars:7,consts:[["columnTemplate",""],["maxHeight","250px","placeholder","Type some text...",3,"ngModelChange","displayFn","itemTemplate","dropdownValues","ngModel"],["fd-list-title",""],["fd-list-secondary",""]],template:function(a,n){if(a&1){let w=R();o(0,"fd-combobox",1),y("ngModelChange",function(M){return P(w),g(n.searchTerm,M)||(n.searchTerm=M),L(M)}),e(),o(1,"small"),t(2),e(),W(3,Xe,4,2,"ng-template",null,0,U)}if(a&2){let w=K(4);r("displayFn",n.displayFunc)("itemTemplate",w)("dropdownValues",n.dropdownValues),h("ngModel",n.searchTerm),m(),v("display","block"),m(),u("Search Term: ",n.searchTerm,"")}},dependencies:[f,S,C,E,B,k,Ce],encapsulation:2});let l=i;return l})();var Pe=(()=>{let i=class i{constructor(){this.dropdownValues=["Apple","Pineapple","Banana","Kiwi","Strawberry"],this.customForm=new z({disabledComboControl:new G({value:"Kiwi",disabled:!0},de.required)})}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-disabled-example"]],standalone:!0,features:[b],decls:11,vars:3,consts:[[3,"formGroup"],["fd-fieldset",""],["fd-form-item",""],["fd-form-label","","for","form-combo-2"],["formControlName","disabledComboControl","id","form-combo-2"]],template:function(a,n){a&1&&(o(0,"form",0)(1,"fieldset",1)(2,"div",2)(3,"label",3),t(4,"Select Fruit:"),e(),d(5,"fd-combobox",4),e(),o(6,"small"),t(7),e(),d(8,"br"),o(9,"small"),t(10),e()()()),a&2&&(r("formGroup",n.customForm),m(7),u("Disabled: ",n.customForm.controls.disabledComboControl.disabled,""),m(3),u("Selected Value: ",n.customForm.controls.disabledComboControl.value,""))},dependencies:[S,Y,C,q,Z,Q,X,ue,D,F,f],encapsulation:2});let l=i;return l})();var Le=(()=>{let i=class i{constructor(){this.values=[{name:"Apple"},{name:"Tomato"},{name:"Banana"},{name:"Grapes"},{name:"Pumpkin"},{name:"Kiwi"},{name:"Mango"},{name:"Cucumber"},{name:"Garlic"},{name:"Pear"}],this.searchTerm=null}displayFunc(s){return s?.name.toLocaleUpperCase()??""}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-displaywith-example"]],standalone:!0,features:[b],decls:3,vars:6,consts:[["placeholder","Search here...",3,"ngModelChange","dropdownValues","displayFn","ngModel"]],template:function(a,n){a&1&&(o(0,"fd-combobox",0),y("ngModelChange",function(p){return g(n.searchTerm,p)||(n.searchTerm=p),p}),e(),o(1,"small"),t(2),e()),a&2&&(r("dropdownValues",n.values)("displayFn",n.displayFunc),h("ngModel",n.searchTerm),m(),v("display","block"),m(),u("Search Term: ",n.searchTerm,""))},dependencies:[f,S,C,E],encapsulation:2});let l=i;return l})();var We=(()=>{let i=class i{constructor(){this.dropdownValues=["Apple","Banana","Kiwi","Strawberry","Tomato","Pineapple"]}customFilter(s,a){return a?s.filter(n=>n.startsWith(a)):s}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-dynamic-example"]],standalone:!0,features:[b],decls:1,vars:2,consts:[["placeholder","Type to filter the list...",3,"filterFn","dropdownValues"]],template:function(a,n){a&1&&d(0,"fd-combobox",0),a&2&&r("filterFn",n.customFilter)("dropdownValues",n.dropdownValues)},dependencies:[f],encapsulation:2});let l=i;return l})();var Oe=(()=>{let i=class i{constructor(){this.searchTermOne="",this.searchTermTwo="",this.searchTermThree="",this.searchTermFour="",this.searchTermFive="Kiwi",this.searchTermSix="",this.fruits=["Apple","Pineapple","Banana","Kiwi","Strawberry"]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-example"]],standalone:!0,features:[b],decls:37,vars:22,consts:[[1,"examples-column"],["fd-form-item",""],["fd-form-label","","for","comboboxID1"],["inputId","comboboxID1","ariaLabel","Standard","maxHeight","250px","placeholder","Type some text...",3,"ngModelChange","dropdownValues","ngModel"],["fd-form-label","","for","comboboxID2"],["inputId","comboboxID2","ariaLabel","Disable Highlighting","maxHeight","250px","placeholder","Type some text...",3,"ngModelChange","highlighting","dropdownValues","ngModel"],["fd-form-label","","for","comboboxID3"],["inputId","comboboxID3","ariaLabel","Disable Auto Complete","maxHeight","250px","placeholder","Type some text...",3,"ngModelChange","autoComplete","dropdownValues","ngModel"],["fd-form-label","","for","comboboxID4"],["inputId","comboboxID4","ariaLabel","Compact","maxHeight","250px","placeholder","Type some text...","fdCompact","",3,"ngModelChange","dropdownValues","ngModel"],["fd-form-label","","for","comboboxID5"],["inputId","comboboxID5","ariaLabel","Readonly","maxHeight","250px","placeholder","Type some text...",3,"ngModelChange","readOnly","dropdownValues","ngModel"],["fd-form-label","","for","comboboxID6"],["inputId","comboboxID6","ariaLabel","Hide Addon Button","maxHeight","250px","placeholder","Type some text...",3,"ngModelChange","dropdownValues","showDropdownButton","ngModel"]],template:function(a,n){a&1&&(o(0,"div",0)(1,"div",1)(2,"label",2),t(3,"Standard"),e(),o(4,"fd-combobox",3),y("ngModelChange",function(p){return g(n.searchTermOne,p)||(n.searchTermOne=p),p}),e()(),o(5,"small"),t(6),e(),o(7,"div",1)(8,"label",4),t(9,"Disable Highlighting"),e(),o(10,"fd-combobox",5),y("ngModelChange",function(p){return g(n.searchTermTwo,p)||(n.searchTermTwo=p),p}),e()(),o(11,"small"),t(12),e(),o(13,"div",1)(14,"label",6),t(15,"Disable Auto Complete"),e(),o(16,"fd-combobox",7),y("ngModelChange",function(p){return g(n.searchTermThree,p)||(n.searchTermThree=p),p}),e()(),o(17,"small"),t(18),e(),o(19,"div",1)(20,"label",8),t(21,"Compact"),e(),o(22,"fd-combobox",9),y("ngModelChange",function(p){return g(n.searchTermFour,p)||(n.searchTermFour=p),p}),e()(),o(23,"small"),t(24),e(),o(25,"div",1)(26,"label",10),t(27,"Readonly"),e(),o(28,"fd-combobox",11),y("ngModelChange",function(p){return g(n.searchTermFive,p)||(n.searchTermFive=p),p}),e()(),o(29,"small"),t(30),e(),o(31,"div",1)(32,"label",12),t(33,"Hide Addon Button"),e(),o(34,"fd-combobox",13),y("ngModelChange",function(p){return g(n.searchTermSix,p)||(n.searchTermSix=p),p}),e()(),o(35,"small"),t(36),e()()),a&2&&(m(4),r("dropdownValues",n.fruits),h("ngModel",n.searchTermOne),m(2),u("Search Term: ",n.searchTermOne,""),m(4),r("highlighting",!1)("dropdownValues",n.fruits),h("ngModel",n.searchTermTwo),m(2),u("Search Term: ",n.searchTermTwo,""),m(4),r("autoComplete",!1)("dropdownValues",n.fruits),h("ngModel",n.searchTermThree),m(2),u("Search Term: ",n.searchTermThree,""),m(4),r("dropdownValues",n.fruits),h("ngModel",n.searchTermFour),m(2),u("Search Term: ",n.searchTermFour,""),m(4),r("readOnly",!0)("dropdownValues",n.fruits),h("ngModel",n.searchTermFive),m(2),u("Search Term: ",n.searchTermFive,""),m(4),r("dropdownValues",n.fruits)("showDropdownButton",!1),h("ngModel",n.searchTermSix),m(2),u("Search Term: ",n.searchTermSix,""))},dependencies:[D,F,f,S,C,E,le],styles:[".examples-column[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-top:1rem}"]});let l=i;return l})();var He=(()=>{let i=class i{constructor(){this.customForm=new z({item:new G(null),itemOnDropdownMode:new G(null)}),this.dropdownValues=[{displayedValue:"Apple",value:"AppleValue"},{displayedValue:"Apple",value:"AppleValue2"},{displayedValue:"Banana",value:"BananaValue"},{displayedValue:"Kiwi",value:"KiwiValue"},{displayedValue:"Strawberry",value:"StrawberryValue"},{displayedValue:"Tomato",value:"TomatoValue"}],this.myDisplayFunction=s=>s?.displayedValue??""}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-forms-example"]],standalone:!0,features:[b],decls:35,vars:19,consts:[[1,"examples-column"],[3,"formGroup"],["fd-form-item",""],["fd-form-label","",3,"required"],["state","information","placeholder","Type some text...","formControlName","itemOnDropdownMode",3,"communicateByObject","required","displayFn","dropdownValues"],["fd-list-message","","type","information"],["type","information"],["fd-form-label",""],["state","information","formControlName","item","placeholder","Type some text...",3,"displayFn","dropdownValues"]],template:function(a,n){a&1&&(o(0,"div",0)(1,"form",1)(2,"div",2)(3,"label",3),t(4,"Combobox with communication via Objects"),e(),o(5,"fd-combobox",4)(6,"li",5),t(7,"More information"),e()(),o(8,"fd-form-message",6),t(9,"More information"),e()()(),o(10,"div")(11,"small"),t(12),d(13,"br"),t(14),d(15,"br"),t(16),V(17,"json"),e()(),o(18,"form",1)(19,"div",2)(20,"label",7),t(21,"Combobox with communication via displayed value"),e(),o(22,"fd-combobox",8)(23,"li",5),t(24,"More information"),e()(),o(25,"fd-form-message",6),t(26,"More information"),e()()(),o(27,"div")(28,"small"),t(29),d(30,"br"),t(31),d(32,"br"),t(33),V(34,"json"),e()()()),a&2&&(m(),r("formGroup",n.customForm),m(2),r("required",!0),m(2),r("communicateByObject",!0)("required",!0)("displayFn",n.myDisplayFunction)("dropdownValues",n.dropdownValues),m(7),u(" Touched: ",n.customForm.controls.itemOnDropdownMode.touched,""),m(2),u(" Dirty: ",n.customForm.controls.itemOnDropdownMode.dirty,""),m(2),u(" Json Value: ",I(17,15,n.customForm.controls.itemOnDropdownMode.value)," "),m(2),r("formGroup",n.customForm),m(4),r("displayFn",n.myDisplayFunction)("dropdownValues",n.dropdownValues),m(7),u(" Touched: ",n.customForm.controls.item.touched,""),m(2),u(" Dirty: ",n.customForm.controls.item.dirty,""),m(2),u(" Json Value: ",I(34,17,n.customForm.controls.item.value)," "))},dependencies:[S,Y,C,q,ce,Z,Q,X,D,F,f,B,Se,xe,H],styles:[".examples-column[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-top:1rem}"]});let l=i;return l})();var ke=(()=>{let i=class i{constructor(){this.searchTerm="",this.dropdownValues=[{name:"Apple",type:"Fruits"},{name:"Banana",type:"Fruits"},{name:"Pineapple",type:"Fruits"},{name:"Strawberry",type:"Fruits"},{name:"Broccoli",type:"Vegetables"},{name:"Carrot",type:"Vegetables"},{name:"Jalape\xF1o",type:"Vegetables"},{name:"Spinach",type:"Vegetables"}],this.groupFunc=s=>({Fruits:s.filter(a=>a.type==="Fruits"),Vegetables:s.filter(a=>a.type==="Vegetables")})}displayFunc(s){return s?.name??""}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-group-example"]],standalone:!0,features:[b],decls:3,vars:7,consts:[["maxHeight","250px","placeholder","Type some text...",3,"ngModelChange","groupFn","displayFn","dropdownValues","ngModel"]],template:function(a,n){a&1&&(o(0,"fd-combobox",0),y("ngModelChange",function(p){return g(n.searchTerm,p)||(n.searchTerm=p),p}),e(),o(1,"small"),t(2),e()),a&2&&(r("groupFn",n.groupFunc)("displayFn",n.displayFunc)("dropdownValues",n.dropdownValues),h("ngModel",n.searchTerm),m(),v("display","block"),m(),u("Search Term: ",n.searchTerm,""))},dependencies:[f,S,C,E],encapsulation:2});let l=i;return l})();var Ae=(()=>{let i=class i{constructor(){this.searchTermOne="",this.dropdownValues=["Apple","Pineapple","Banana","Kiwi","Strawberry","Raspberries","Watermelons","Nectarines","Oranges","Pear","Grape","Cherry","Blueberry","Avocado","Fig","Pomegranate"]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-height-example"]],standalone:!0,features:[b],decls:1,vars:2,consts:[["maxHeight","400px","placeholder","Type some text...",3,"ngModelChange","dropdownValues","ngModel"]],template:function(a,n){a&1&&(o(0,"fd-combobox",0),y("ngModelChange",function(p){return g(n.searchTermOne,p)||(n.searchTermOne=p),p}),e()),a&2&&(r("dropdownValues",n.dropdownValues),h("ngModel",n.searchTermOne))},dependencies:[f,S,C,E],encapsulation:2});let l=i;return l})();var Ge=(()=>{let i=class i{constructor(){this.searchTermOne="",this.dropdownValues=["Apple","Pineapple","Banana","Kiwi","Strawberry","Raspberries","Watermelons","Nectarines","Oranges","Pear","Grape","Cherry","Blueberry","Avocado","Fig","Pomegranate"]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-includes-example"]],standalone:!0,features:[b],decls:1,vars:3,consts:[["placeholder","Type some text...",3,"ngModelChange","includes","dropdownValues","ngModel"]],template:function(a,n){a&1&&(o(0,"fd-combobox",0),y("ngModelChange",function(p){return g(n.searchTermOne,p)||(n.searchTermOne=p),p}),e()),a&2&&(r("includes",!0)("dropdownValues",n.dropdownValues),h("ngModel",n.searchTermOne))},dependencies:[f,S,C,E],encapsulation:2});let l=i;return l})();var Re=(()=>{let i=class i{constructor(){this.selectedValue="",this.mobileConfig={title:"Title",approveButtonText:"Approve",cancelButtonText:"Cancel",hasCloseButton:!0,dialogConfig:{ariaLabel:"Title"}},this.values=["Apple","Banana","Pineapple","Tomato","Kiwi","Strawberry","Blueberry","Orange"]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-mobile-example"]],standalone:!0,features:[b],decls:4,vars:4,consts:[["fd-form-label",""],["placeholder","Search here...",3,"ngModelChange","mobile","dropdownValues","mobileConfig","ngModel"]],template:function(a,n){a&1&&(o(0,"label",0),t(1,"Mobile Mode Combobox"),e(),d(2,"br"),o(3,"fd-combobox",1),y("ngModelChange",function(p){return g(n.selectedValue,p)||(n.selectedValue=p),p}),e()),a&2&&(m(3),r("mobile",!0)("dropdownValues",n.values)("mobileConfig",n.mobileConfig),h("ngModel",n.selectedValue))},dependencies:[F,f,S,C,E],encapsulation:2});let l=i;return l})();var Ke=(()=>{let i=class i{constructor(){this.dropdownValues=["Apple","Pineapple","Banana","Kiwi","Strawberry"]}handleIsOpenChange(s){alert(s?"Combobox Opened":"Combobox Closed")}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-open-control-example"]],standalone:!0,features:[b],decls:4,vars:1,consts:[["fd-form-item",""],["fd-form-label",""],["maxHeight","250px","placeholder","Combobox with open state subscription",3,"openChange","dropdownValues"]],template:function(a,n){a&1&&(o(0,"div",0)(1,"label",1),t(2,"Combobox with open state subscription"),e(),o(3,"fd-combobox",2),O("openChange",function(p){return n.handleIsOpenChange(p)}),e()()),a&2&&(m(3),r("dropdownValues",n.dropdownValues))},dependencies:[D,F,f],encapsulation:2});let l=i;return l})();var je=(()=>{let i=class i{constructor(){this.searchTerm="",this.fruits=["Apple","Pineapple","Banana","Kiwi","Strawberry","Blueberry","Orange","Lemon","Raspberry","Grapefruit","Apricot","Avocado","Cherry"]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-search-field-example"]],standalone:!0,features:[b],decls:6,vars:4,consts:[["fd-form-item",""],["fd-form-label",""],["maxHeight","250px","placeholder","Type some text...",3,"ngModelChange","isSearch","dropdownValues","ngModel"]],template:function(a,n){a&1&&(o(0,"div",0)(1,"label",1),t(2,"Search Field"),e(),o(3,"fd-combobox",2),y("ngModelChange",function(p){return g(n.searchTerm,p)||(n.searchTerm=p),p}),e()(),o(4,"small"),t(5),e()),a&2&&(m(3),r("isSearch",!0)("dropdownValues",n.fruits),h("ngModel",n.searchTerm),m(2),u("Search Term: ",n.searchTerm,""))},dependencies:[D,F,f,S,C,E],encapsulation:2});let l=i;return l})();var Ue=(()=>{let i=class i{constructor(){this.searchTerm="",this.dropdownValues=["Apple","Pineapple","Banana","Kiwi","Strawberry","Raspberries","Watermelons","Nectarines","Oranges"],this.customSearchFunction=()=>{alert("Custom Function Called")}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-search-function-example"]],standalone:!0,features:[b],decls:3,vars:6,consts:[["placeholder","Type to filter the list...",3,"ngModelChange","dropdownValues","searchFn","ngModel"]],template:function(a,n){a&1&&(o(0,"fd-combobox",0),y("ngModelChange",function(p){return g(n.searchTerm,p)||(n.searchTerm=p),p}),e(),o(1,"small"),t(2),e()),a&2&&(r("dropdownValues",n.dropdownValues)("searchFn",n.customSearchFunction),h("ngModel",n.searchTerm),m(),v("display","block"),m(),u("Search Term: ",n.searchTerm,""))},dependencies:[f,S,C,E],encapsulation:2});let l=i;return l})();function Ze(l,i){if(l&1&&(te(0),d(1,"i",2)(2,"span",3),V(3,"highlight"),ne()),l&2){let N=i.$implicit,s=i.inputText;m(),r("glyph",N.icon),m(),r("innerHTML",ie(3,2,N.name,s),ee)}}var Je=(()=>{let i=class i{constructor(){this.values=[{name:"Photo Voltaic",icon:"photo-voltaic"},{name:"Settings",icon:"settings"},{name:"Heating Cooling",icon:"heating-cooling"},{name:"Competitor",icon:"competitor"},{name:"Chalkboard",icon:"chalkboard"},{name:"Database",icon:"database"},{name:"Passenger Train",icon:"passenger-train"},{name:"World",icon:"world"},{name:"Shield",icon:"shield"},{name:"Journey Change",icon:"journey-change"}]}displayFunction(s){return s?s.name:""}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-template-example"]],standalone:!0,features:[b],decls:7,vars:12,consts:[["placeholder","Select an icon...",3,"itemClicked","ngModelChange","dropdownValues","displayFn","ngModel"],[4,"fdComboboxItem","fdComboboxItemUse"],["fd-list-icon","",3,"glyph"],["fd-list-title","",3,"innerHTML"]],template:function(a,n){a&1&&(o(0,"fd-combobox",0),O("itemClicked",function(p){return n.selected=p}),y("ngModelChange",function(p){return g(n.searchTerm,p)||(n.searchTerm=p),p}),W(1,Ze,4,5,"ng-container",1),e(),o(2,"small"),t(3),e(),o(4,"small"),t(5),V(6,"json"),e()),a&2&&(r("dropdownValues",n.values)("displayFn",n.displayFunction),h("ngModel",n.searchTerm),m(),r("fdComboboxItemUse",n.model),m(),v("display","block"),m(),u("Search Term: ",n.searchTerm,""),m(),v("display","block"),m(),u("Returned from itemClicked Event: ",I(6,10,n.selected),""))},dependencies:[f,De,S,C,E,B,k,ye,H,re],encapsulation:2});let l=i;return l})();var $e=()=>["/core/global-config"],eo="combobox-example.component.scss",oo="combobox-example.component.html",to="combobox-example.component.ts",no="combobox-dynamic-example.component.html",io="combobox-dynamic-example.component.ts",ao="combobox-async-example.component.html",mo="combobox-async-example.component.ts",lo="combobox-displaywith-example.component.html",ro="combobox-displaywith-example.component.ts",po="combobox-template-example.component.html",so="combobox-template-example.component.ts",co="combobox-mobile/combobox-mobile-example.component.html",bo="combobox-mobile/combobox-mobile-example.component.ts",uo="combobox-disabled-example.component.html",xo="combobox-disabled-example.component.ts",fo="combobox-columns-example.component.html",ho="combobox-columns-example.component.ts",go="combobox-group-example.component.html",yo="combobox-group-example.component.ts",Co="combobox-forms-example.component.ts",So="combobox-forms-example.component.html",wo="combobox-includes-example.component.ts",Eo="combobox-includes-example.component.html",To="combobox-height-example.component.html",vo="combobox-height-example.component.ts",Fo="combobox-search-function-example.component.ts",Mo="combobox-search-function-example.component.html",_o="combobox-open-control-example.component.html",Do="combobox-open-control-example.component.ts",Vo="combobox-search-field-example.component.html",No="combobox-search-field-example.component.ts",Io="combobox-byline-example.component.html",Bo="combobox-byline-example.component.ts",qe=(()=>{let i=class i{constructor(){this.comboboxBasicExample=[{language:"html",code:x(oo),fileName:"combobox-example",scssFileCode:x(eo)},{language:"typescript",component:"ComboboxExampleComponent",code:x(to),fileName:"combobox-example"}],this.comboboxDynamicExample=[{language:"html",code:x(no),fileName:"combobox-dynamic-example"},{language:"typescript",component:"ComboboxDynamicExampleComponent",code:x(io),fileName:"combobox-dynamic-example"}],this.comboboxSearchFunctionExample=[{language:"html",code:x(Mo),fileName:"combobox-search-function-example"},{language:"typescript",component:"ComboboxSearchFunctionExampleComponent",code:x(Fo),fileName:"combobox-search-function-example"}],this.comboboxAsyncExample=[{language:"html",code:x(ao),fileName:"combobox-async-example"},{language:"typescript",component:"ComboboxAsyncExampleComponent",code:x(mo),fileName:"combobox-async-example"}],this.comboboxDisplayExample=[{language:"html",code:x(lo),fileName:"combobox-displaywith-example"},{language:"typescript",component:"ComboboxDisplaywithExampleComponent",code:x(ro),fileName:"combobox-displaywith-example"}],this.comboboxOpenChangeExample=[{language:"html",code:x(_o),fileName:"combobox-open-control-example"},{language:"typescript",code:x(Do),component:"ComboboxOpenControlExampleComponent",fileName:"combobox-open-control-example"}],this.comboboxDisabledExample=[{language:"html",code:x(uo),fileName:"combobox-disabled-example"},{language:"typescript",component:"ComboboxDisabledExampleComponent",code:x(xo),fileName:"combobox-disabled-example"}],this.comboboxColumnsExample=[{language:"html",code:x(fo),fileName:"combobox-columns-example"},{language:"typescript",component:"ComboboxColumnsExampleComponent",code:x(ho),fileName:"combobox-columns-example"}],this.comboboxGroupExample=[{language:"html",code:x(go),fileName:"combobox-group-example"},{language:"typescript",component:"ComboboxGroupExampleComponent",code:x(yo),fileName:"combobox-group-example"}],this.comboboxTemplateExample=[{language:"html",code:x(po),fileName:"combobox-template-example"},{language:"typescript",component:"ComboboxTemplateExampleComponent",code:x(so),fileName:"combobox-template-example"}],this.comboboxHeightExample=[{language:"html",code:x(To),fileName:"combobox-height-example"},{language:"typescript",component:"ComboboxHeightExampleComponent",code:x(vo),fileName:"combobox-height-example"}],this.comboboxMobileExample=[{language:"html",code:x(co),fileName:"combobox-mobile-example"},{language:"typescript",component:"ComboboxMobileExampleComponent",code:x(bo),fileName:"combobox-mobile-example"}],this.comboboxFormExample=[{language:"html",code:x(So),fileName:"combobox-forms-example"},{language:"typescript",component:"ComboboxFormsExampleComponent",code:x(Co),fileName:"combobox-forms-example"}],this.comboboxIncludesExample=[{language:"html",code:x(Eo),fileName:"combobox-includes-example"},{language:"typescript",component:"ComboboxIncludesExampleComponent",code:x(wo),fileName:"combobox-includes-example"}],this.comboboxSearchFieldExample=[{language:"html",code:x(Vo),fileName:"combobox-search-field-example"},{language:"typescript",component:"ComboboxSearchFieldExampleComponent",code:x(No),fileName:"combobox-search-field-example"}],this.comboboxBylineExample=[{language:"html",code:x(Io),fileName:"combobox-byline-example"},{language:"typescript",component:"ComboboxBylineExampleComponent",code:x(Bo),fileName:"combobox-byline-example"}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-docs"]],standalone:!0,features:[b],decls:228,vars:18,consts:[["id","standard","componentName","combobox"],[3,"exampleFiles"],["id","search","componentName","combobox"],["id","custom-filter","componentName","combobox"],["id","custom-search","componentName","combobox"],["id","mobile","componentName","combobox"],["fragment","mobile-mode-config",3,"routerLink"],["id","display-object","componentName","combobox"],["id","open-control","componentName","combobox"],["id","observable-async","componentName","combobox"],["id","custom-item","componentName","combobox"],["routerLink","/core/list"],["id","columns","componentName","combobox"],["id","group","componentName","combobox"],["id","custom-height","componentName","combobox"],["id","includes","componentName","combobox"],["id","reactive-form","componentName","combobox"],["id","disabled","componentName","combobox"],["id","byline","componentName","combobox"]],template:function(a,n){a&1&&(o(0,"fd-docs-section-title",0),t(1," Standard Combobox "),e(),o(2,"description")(3,"p"),t(4,"The standard version of the component that most people will likely use regularly."),e(),o(5,"p"),t(6," To open suggestions dropdown with keyboard, use combination of "),o(7,"code"),t(8,"alt key + arrow down key"),e(),t(9," when focusing input field. "),e()(),o(10,"component-example"),d(11,"fd-combobox-example"),e(),d(12,"code-example",1)(13,"separator"),o(14,"fd-docs-section-title",2),t(15,"Combobox as Search Field"),e(),o(16,"description"),t(17,"Set the "),o(18,"code"),t(19,"isSearch"),e(),t(20," property to true to use Combobox as a Search Field. The input-group addon is changed to 'search' and additional Clear button will appear when the user enters a value in the input field. The Clear button can be hidden by setting the "),o(21,"code"),t(22,"showClearButton"),e(),t(23," to false. By default it's set to true."),e(),o(24,"component-example"),d(25,"fd-combobox-search-field-example"),e(),d(26,"code-example",1)(27,"separator"),o(28,"fd-docs-section-title",3),t(29," Custom Filter "),e(),o(30,"description"),t(31," The input supports custom filters through the "),o(32,"code"),t(33,"filterFn"),e(),t(34,` input function. Simply pass a function which accepts an array and a search term, handle filtering logic within this function, and then return the desired filtered array. In this example, the list will only display if the search term case matches the result (the combobox will still auto-select a match regardless of case, however).
`),e(),o(35,"component-example"),d(36,"fd-combobox-dynamic-example"),e(),d(37,"code-example",1)(38,"separator"),o(39,"fd-docs-section-title",4),t(40," Custom Search Function "),e(),o(41,"description"),t(42," A custom search function can be provided with the "),o(43,"code"),t(44,"[searchFn]"),e(),t(45,` input. This function will be called when the primary combobox button is clicked, or when the user presses the 'enter' key while focused in the combobox input.
`),e(),o(46,"component-example"),d(47,"fd-combobox-search-function-example"),e(),d(48,"code-example",1)(49,"separator"),o(50,"fd-docs-section-title",5),t(51," Combobox Mobile Mode "),e(),o(52,"description"),t(53," To use Combobox in mobile mode: "),o(54,"ul")(55,"li"),t(56,"Set "),o(57,"code"),t(58,"[mobile]"),e(),t(59," property to true"),e(),o(60,"li"),t(61," Set "),o(62,"code"),t(63,"[mobileConfig]"),e(),t(64," with "),o(65,"code"),t(66,"MobileModeConfig"),e(),t(67," configuration object to customize the look of the control "),e()(),t(68," Combobox Mobile Mode can be configured "),o(69,"strong"),t(70,"globally"),e(),t(71," by providing "),o(72,"code"),t(73,"MOBILE_MODE_CONFIG"),e(),t(74," token. Check "),o(75,"a",6),t(76,"Global Configuration page"),e(),t(77,` for more information.
`),e(),o(78,"component-example"),d(79,"fd-combobox-mobile-example"),e(),d(80,"code-example",1)(81,"separator"),o(82,"fd-docs-section-title",7),t(83," Display Object Property "),e(),o(84,"description"),t(85," The "),o(86,"code"),t(87,"displayFn"),e(),t(88,` input can be used to modify how the results are presented within the combobox. In this example we are making the results all upper-cased.
`),e(),o(89,"component-example"),d(90,"fd-combobox-displaywith-example"),e(),d(91,"code-example",1)(92,"separator"),o(93,"fd-docs-section-title",8),t(94," Open State Control "),e(),o(95,"description"),t(96," By subscribing to event "),o(97,"code"),t(98,"(openChange)"),e(),t(99,` it is possible to detect the changes of open state in combobox.
`),e(),o(100,"description"),t(101," By passing "),o(102,"code"),t(103,'[closeOnOutsideClick]="false"'),e(),t(104,", "),o(105,"code"),t(106,'[openOnKeyboardEvent]="false"'),e(),t(107," and "),o(108,"code"),t(109,'[triggers]="[]"'),e(),t(110,`, it is possible to fully control how the user will open and close the results list.
`),e(),o(111,"component-example"),d(112,"fd-combobox-open-control-example"),e(),d(113,"code-example",1)(114,"separator"),o(115,"fd-docs-section-title",9),t(116," Observable Async Example "),e(),o(117,"description"),t(118," The "),o(119,"code"),t(120,"dropdownValues"),e(),t(121,` input can accept an Observable with an async pipe, which could be useful for autocomplete.
`),e(),o(122,"description"),t(123,` This example also demonstrates how to create a callback function from data returned by the observable.
`),e(),o(124,"component-example"),d(125,"fd-combobox-async-example"),e(),d(126,"code-example",1)(127,"separator"),o(128,"fd-docs-section-title",10),t(129," Custom Item Template "),e(),o(130,"description")(131,"p"),t(132," Developers can have custom item renderer for the combobox list items by providing custom template wrapped with "),o(133,"code"),t(134,"*fdComboboxItem"),e(),t(135," structural directive. "),e(),o(136,"p"),t(137," The "),o(138,"code"),t(139,"*fdComboboxItem"),e(),t(140," inner contents should align with the contents of a "),o(141,"a",11),t(142,"fd-list-item"),e(),t(143," directive. "),e()(),o(144,"component-example"),d(145,"fd-combobox-template-example"),e(),d(146,"code-example",1)(147,"separator"),o(148,"fd-docs-section-title",12),t(149," Combobox with Two Columns "),e(),o(150,"description"),t(151," The "),o(152,"code"),t(153,"[itemTemplate]"),e(),t(154," input can be used to create a combobox with two columns of information. Note that a "),o(155,"code"),t(156,"displayFn"),e(),t(157,` is required for this example so the combobox knows how to display the selected item.
`),e(),o(158,"component-example"),d(159,"fd-combobox-columns-example"),e(),d(160,"code-example",1),o(161,"fd-docs-section-title",13),t(162," Combobox with Groups "),e(),o(163,"description"),t(164," Grouping data within a set of values can be achieved by passing a function to the "),o(165,"code"),t(166,"[groupFn]"),e(),t(167," input. This function should accept an object of key/value pairs as the parameter. Each key will be a group name and the corresponding value for that key will be an array of any type. A "),o(168,"code"),t(169,"[displayFn]"),e(),t(170,` can be used to specify what to display from that array.
`),e(),o(171,"component-example"),d(172,"fd-combobox-group-example"),e(),d(173,"code-example",1)(174,"separator"),o(175,"fd-docs-section-title",14),t(176," Custom Height Example "),e(),o(177,"description"),t(178," Use the "),o(179,"code"),t(180,"[maxHeight]"),e(),t(181," input to set a maximum height for the results list. "),e(),o(182,"component-example"),d(183,"fd-combobox-height-example"),e(),d(184,"code-example",1)(185,"separator"),o(186,"fd-docs-section-title",15),t(187,` Return results including search term
`),e(),o(188,"description"),t(189," By default, the combobox will only return results where the result starts with the search term. By setting "),o(190,"code"),t(191,'[includes]="true"'),e(),t(192,", the combobox will return results where the result includes the search term at any place in the string."),e(),o(193,"component-example"),d(194,"fd-combobox-includes-example"),e(),d(195,"code-example",1)(196,"separator"),o(197,"fd-docs-section-title",16),t(198," Reactive Form "),e(),o(199,"description"),t(200," The Combobox component may also be used within Angular Reactive Forms. "),e(),o(201,"description"),t(202," Use the "),o(203,"code"),t(204,"[communicateByObject]"),e(),t(205," boolean input if you are using custom objects for the "),o(206,"code"),t(207,"dropdownValues"),e(),t(208,` or if you want the combobox to only trigger onChange when a value is selected, rather than every time the input changes.
`),e(),o(209,"component-example"),d(210,"fd-combobox-forms-example"),e(),d(211,"code-example",1)(212,"separator"),o(213,"fd-docs-section-title",17),t(214," Disabled Combobox "),e(),o(215,"description"),t(216," This example shows how to use a disabled combobox in a reactive form. "),e(),o(217,"component-example"),d(218,"fd-combobox-disabled-example"),e(),d(219,"code-example",1)(220,"separator"),o(221,"fd-docs-section-title",18),t(222,"Combobox with byline list"),e(),o(223,"description"),t(224,"This example shows how to use byline list template"),e(),o(225,"component-example"),d(226,"fd-combobox-byline-example"),e(),d(227,"code-example",1)),a&2&&(m(12),r("exampleFiles",n.comboboxBasicExample),m(14),r("exampleFiles",n.comboboxSearchFieldExample),m(11),r("exampleFiles",n.comboboxDynamicExample),m(11),r("exampleFiles",n.comboboxSearchFunctionExample),m(27),r("routerLink",j(17,$e)),m(5),r("exampleFiles",n.comboboxMobileExample),m(11),r("exampleFiles",n.comboboxDisplayExample),m(22),r("exampleFiles",n.comboboxOpenChangeExample),m(13),r("exampleFiles",n.comboboxAsyncExample),m(20),r("exampleFiles",n.comboboxTemplateExample),m(14),r("exampleFiles",n.comboboxColumnsExample),m(13),r("exampleFiles",n.comboboxGroupExample),m(11),r("exampleFiles",n.comboboxHeightExample),m(11),r("exampleFiles",n.comboboxIncludesExample),m(16),r("exampleFiles",n.comboboxFormExample),m(8),r("exampleFiles",n.comboboxDisabledExample),m(8),r("exampleFiles",n.comboboxBylineExample))},dependencies:[Te,$,we,Oe,be,ve,je,We,Ue,J,Re,Le,Ke,Ve,Je,Be,ke,Ae,Ge,He,Pe,Ie],encapsulation:2});let l=i;return l})();var ze=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["fd-combobox-input-header"]],standalone:!0,features:[b],decls:21,vars:1,consts:[["type","information",3,"dismissible"],["routerLink","/core/popover","target","_blank"],["module","ComboboxModule","subPackage","combobox"]],template:function(a,n){a&1&&(o(0,"fd-doc-page")(1,"header"),t(2,"Combobox"),e(),o(3,"description")(4,"p"),t(5," The combobox component is an opinionated composition of the input-group and popover components to accomplish the UI pattern of an autocomplete-like experience, also known as combobox input. "),e(),o(6,"fd-message-strip",0)(7,"b"),t(8,"IMPORTANT"),e(),t(9," Combobox uses "),o(10,"a",1),t(11,"Popover"),e(),t(12,". Therefore, if you place Combobox inside scrollable container - you need to add "),o(13,"code"),t(14,"cdkScrollable"),e(),t(15," directive into container and import "),o(16,"code"),t(17,"ScrollingModule"),e(),t(18," into module. "),e()(),d(19,"import",2)(20,"fd-header-tabs"),e()),a&2&&(m(6),r("dismissible",!1))},dependencies:[Ee,Me,$,se,J,_e,Fe]});let l=i;return l})();var Tn=[{path:"",component:ze,children:[{path:"",component:qe}],data:{primary:!0}}],vn="combobox",Fn="combobox";export{Fn as API_FILE_KEY,vn as LIBRARY_NAME,Tn as ROUTES};
