import{a as B,b as R,c as H,d as A,e as G,f as z,g as W,h as Y,i as q,j as E,k as K}from"./chunk-DQHW3I7M.js";import{a as Q,b as $}from"./chunk-ZSCS366A.js";import{a as We,b as Ye}from"./chunk-I6JBZKPD.js";import{c as te,d as oe,e as ie,f as le}from"./chunk-SRDMRS6H.js";import{Ee as He,Fe as Ae,Ge,Hb as I,He as ze,Kb as O,Ob as V,ia as _,je as $e,ke as ee,le as Be,me as Re,nc as P,oa as Pe,vb as j,wb as M}from"./chunk-6UXCNRHI.js";import"./chunk-PIZS2GRK.js";import{_ as Le,ca as je,da as Me,ga as L,xa as Qe}from"./chunk-CBJJHCQ6.js";import{$b as b,Cb as h,Eb as f,Ka as c,Kb as k,La as ne,Lb as ue,Mb as T,Nb as D,Ng as be,Rb as Ce,Rg as w,Sb as m,Th as Ie,Ub as ge,Xb as ae,Yb as pe,Yg as ye,Yh as Oe,Zb as re,Zg as Ee,_d as ve,ch as Se,db as y,eh as Ue,gb as d,gh as Fe,hb as Z,ja as v,jh as Ne,ni as Ve,ob as x,oh as Te,pc as xe,qa as u,qb as U,qh as De,ra as C,rb as F,rh as ke,sb as N,tb as a,tc as _e,th as we,ub as n,vb as r,xd as he,zb as S}from"./chunk-FZPMYWEN.js";var ct=["fileUploader"];function dt(t,i){if(t&1&&r(0,"span",17),t&2){let o=f().$implicit;d("glyph",o.marker1)}}function st(t,i){if(t&1&&r(0,"span",18),t&2){let o=f().$implicit;d("glyph",o.marker2)}}function ft(t,i){if(t&1){let o=S();a(0,"li",10),h("deleteClicked",function(e){let p=u(o).$implicit,s=f(),g=Ce(16);return C(s.openDeleteDialog(e,p,g))})("fileNameChanged",function(e){u(o);let p=f();return C(p.fileNameChanged(e))}),a(1,"fd-checkbox",11),re("ngModelChange",function(e){let p=u(o).$implicit;return pe(p.selected,e)||(p.selected=e),C(e)}),h("click",function(e){let p=u(o),s=p.$implicit,g=p.$index,J=f();return C(J.onCheckboxClick(s,g,e))}),n(),a(2,"span",12),r(3,"fd-icon",13),n(),a(4,"div",14)(5,"div",15),r(6,"a",16)(7,"fd-upload-collection-form-item"),y(8,dt,1,1,"span",17)(9,st,1,1,"span",18),n(),a(10,"div",19),m(11," This is the file description "),r(12,"span",20),m(13," This is an additional description "),n(),a(14,"div",21),r(15,"span",22)(16,"span",20)(17,"span",23),n()(),r(18,"fd-upload-collection-button-group"),n()}if(t&2){let o=i.$implicit;d("fileName",o.fileName)("extension",o.extension)("selected",o.selected),c(),ae("ngModel",o.selected),c(2),d("glyph",o.icon),c(5),x(o.marker1?8:-1),c(),x(o.marker2?9:-1)}}function ut(t,i){t&1&&(a(0,"fd-message-page",24)(1,"fd-message-page-title"),m(2,"No files found. "),n(),a(3,"fd-message-page-subtitle"),m(4,' Use the "Upload" button to upload files. '),n()()),t&2&&Z("margin-top",30,"px")}function Ct(t,i){if(t&1){let o=S();a(0,"fd-dialog",25)(1,"fd-dialog-header")(2,"h1",3),m(3,"Delete Confirmation"),n()(),a(4,"fd-dialog-body")(5,"p",26),m(6,"Are you sure you want to delete this file?"),n()(),a(7,"fd-dialog-footer",27)(8,"fd-button-bar",28),h("click",function(){let e=u(o).$implicit;return C(e.close("Yes"))}),n(),a(9,"fd-button-bar",29),h("click",function(){let e=u(o).$implicit;return C(e.dismiss())}),n()()()}if(t&2){let o=i.$implicit,l=i.dialogConfig;d("dialogConfig",l)("dialogRef",o)}}var qe=(()=>{let i=class i{constructor(l,e){this._dialogService=l,this._cdr=e,this.files=[{fileName:"File_Name_1",extension:"txt",icon:"activate",selected:!1},{fileName:"File_Name_2",extension:"jpg",icon:"calendar",selected:!1,marker1:"flag",marker2:"add-favorite"},{fileName:"File_Name_3",extension:"pdf",icon:"customer",selected:!1}],this._rangeSelector=new ve}alert(l){window.alert(l)}selectedFilesChanged(l){l&&l.length&&(l.forEach(e=>{this.files.push({fileName:e.name.split(".")[0],extension:e.name.split(".")[1],icon:"attachment",selected:!1})}),this.uploaderFiles=[],this.fileUploader.selectHandler([]))}onCheckboxClick(l,e,p){this._rangeSelector.onRangeElementToggled(e,p),this._rangeSelector.applyValueToEachInRange(s=>this.files[s].selected=l.selected)}openDeleteDialog(l,e,p){this._dialogService.open(p,{verticalPadding:!1,responsivePadding:!0}).afterClosed.subscribe(g=>{g==="Yes"&&(this.deleteClicked(l,e),this._cdr.detectChanges())})}fileNameChanged(l){window.alert("User has updated the file name to "+l.fileName)}deleteClicked(l,e){window.alert("User has deleted the file "+l.fileName+"."+l.extension),this.files.splice(this.files.indexOf(e),1)}deleteMultiple(){this.files=this.files.filter(l=>l.selected===!1)}getFilesSelected(){let l=0;return this.files.forEach(e=>{e.selected&&l++}),l}};i.\u0275fac=function(e){return new(e||i)(ne(De),ne(_e))},i.\u0275cmp=v({type:i,selectors:[["fd-upload-collection-complex-example"]],contentQueries:function(e,p,s){if(e&1&&k(s,E,5),e&2){let g;T(g=D())&&(p.uploadCollectionItems=g)}},viewQuery:function(e,p){if(e&1&&ue(ct,5),e&2){let s;T(s=D())&&(p.fileUploader=s.first)}},inputs:{uploaderFiles:"uploaderFiles"},standalone:!0,features:[b],decls:17,vars:8,consts:[["fileUploader",""],["deleteDialog",""],["fd-toolbar-label",""],["fd-title",""],["ariaLabel","Choose files","ariaLabelledBy","Choose files","placeholder","Choose Files to upload","buttonLabel","Upload","buttonAriaLabel","browse files","fdCompact","",3,"selectedFilesChanged","ngModelChange","multiple","inputHidden","ngModel"],["fd-button","","fdCompact","",3,"click","disabled"],[3,"selection"],["fd-list-item","","fd-upload-collection-item","",3,"fileName","extension","selected"],["glyph","attachment",3,"margin-top"],[3,"fdDialogTemplate"],["fd-list-item","","fd-upload-collection-item","",3,"deleteClicked","fileNameChanged","fileName","extension","selected"],[3,"ngModelChange","click","ngModel"],["fd-list-thumbnail","","fd-upload-collection-thumbnail",""],[3,"glyph"],["fd-list-content",""],["fd-upload-collection-title-container",""],["href","#","fd-link","","fd-list-title","","fd-upload-collection-title",""],["fd-object-marker","","title","Favorite","aria-label","Favorite Icon",3,"glyph"],["fd-object-marker","","title","Flag","aria-label","Favorite Flag",3,"glyph"],["fd-upload-collection-description",""],["fd-upload-collection-text-separator",""],["fd-upload-collection-status-group",""],["fd-object-status","","fd-upload-collection-status-item","","status","negative","label","Negative Object Status","title","Object status Negative","aria-label","Object status Negative"],["fd-object-status","","fd-upload-collection-status-item","","status","positive","label","Positive Object Status","title","Object status Positive","aria-label","Object status Positive"],["glyph","attachment"],[3,"dialogConfig","dialogRef"],["role","dialog"],["fdCozy",""],["fdType","emphasized","label","Yes",3,"click"],["label","Cancel",3,"click"]],template:function(e,p){if(e&1){let s=S();a(0,"fd-toolbar")(1,"label",2)(2,"span",3),m(3),n()(),r(4,"fd-toolbar-spacer"),a(5,"fd-file-uploader",4,0),h("selectedFilesChanged",function(J){return u(s),C(p.selectedFilesChanged(J))}),re("ngModelChange",function(J){return u(s),pe(p.uploaderFiles,J)||(p.uploaderFiles=J),C(J)}),n(),a(7,"button",5),h("click",function(){return u(s),C(p.alert("Download button clicked"))}),m(8," Download "),n(),a(9,"button",5),h("click",function(){return u(s),C(p.deleteMultiple())}),m(10,"Delete Multiple"),n()(),a(11,"fd-upload-collection",6),F(12,ft,19,7,"li",7,U),n(),y(14,ut,5,2,"fd-message-page",8)(15,Ct,10,2,"ng-template",9,1,xe)}e&2&&(c(3),ge("Uploads (",p.files.length,")"),c(2),d("multiple",!0)("inputHidden",!0),ae("ngModel",p.uploaderFiles),c(2),d("disabled",p.getFilesSelected()===0),c(2),d("disabled",p.getFilesSelected()<2),c(2),d("selection",!0),c(),N(p.files),c(2),x(p.files.length?-1:14))},dependencies:[Me,Le,je,Ye,We,he,Ve,Ie,Oe,ye,K,V,O,I,j,M,E,Qe,H,w,q,L,A,R,$,Q,G,z,W,P,Y,B,le,ie,oe,te,we,Te,be,Ue,Ne,ke,Ee,Fe,Se],encapsulation:2,changeDetection:0});let t=i;return t})();function gt(t,i){if(t&1&&r(0,"span",7),t&2){let o=f().$implicit;d("glyph",o.marker1)}}function xt(t,i){if(t&1&&r(0,"span",8),t&2){let o=f().$implicit;d("glyph",o.marker2)}}function _t(t,i){if(t&1){let o=S();a(0,"li",1),h("deleteClicked",function(e){let p=u(o).$implicit,s=f();return C(s.deleteClicked(e,p))})("fileNameChanged",function(e){u(o);let p=f();return C(p.fileNameChanged(e))}),a(1,"span",2),r(2,"fd-icon",3),n(),a(3,"div",4)(4,"div",5),r(5,"a",6)(6,"fd-upload-collection-form-item"),y(7,gt,1,1,"span",7)(8,xt,1,1,"span",8),n(),a(9,"div",9),m(10," This is the file description "),r(11,"span",10),m(12," This is an additional description "),n(),a(13,"div",11),r(14,"span",12)(15,"span",10)(16,"span",13),n()(),r(17,"fd-upload-collection-button-group",14),n()}if(t&2){let o=i.$implicit;d("fileName",o.fileName)("extension",o.extension),c(2),d("glyph",o.icon),c(5),x(o.marker1?7:-1),c(),x(o.marker2?8:-1),c(9),d("allowFileDeletion",!!o.allowDelete)("allowFileNameEdit",!!o.allowEdit)("disableFileDeletion",!!o.disableDeletion)("disableFileNameEdit",!!o.disableEdit)}}var Ke=(()=>{let i=class i{constructor(){this.files=[{fileName:"File_Name_1",extension:"txt",icon:"activate",allowEdit:!1,allowDelete:!1,marker1:"flag",marker2:"add-favorite"},{fileName:"File_Name_2",extension:"jpg",icon:"calendar",allowEdit:!0,allowDelete:!0,disableEdit:!0,disableDeletion:!0},{fileName:"File_Name_3",extension:"pdf",icon:"customer",allowEdit:!0,allowDelete:!1}]}fileNameChanged(l){window.alert("User has updated the file name to "+l.fileName)}deleteClicked(l,e){window.alert("User has deleted the file "+l.fileName+"."+l.extension),this.files.splice(this.files.indexOf(e),1)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v({type:i,selectors:[["fd-upload-collection-custom-example"]],contentQueries:function(e,p,s){if(e&1&&k(s,E,5),e&2){let g;T(g=D())&&(p.uploadCollectionItems=g)}},standalone:!0,features:[b],decls:3,vars:0,consts:[["fd-list-item","","fd-upload-collection-item","",3,"fileName","extension"],["fd-list-item","","fd-upload-collection-item","",3,"deleteClicked","fileNameChanged","fileName","extension"],["fd-list-thumbnail","","fd-upload-collection-thumbnail",""],[3,"glyph"],["fd-list-content",""],["fd-upload-collection-title-container",""],["href","#","fd-link","","fd-list-title","","fd-upload-collection-title",""],["fd-object-marker","","title","Favorite","aria-label","Favorite Icon",3,"glyph"],["fd-object-marker","","title","Flag","aria-label","Favorite Flag",3,"glyph"],["fd-upload-collection-description",""],["fd-upload-collection-text-separator",""],["fd-upload-collection-status-group",""],["fd-object-status","","fd-upload-collection-status-item","","status","negative","label","Negative Object Status","title","Object status Negative","aria-label","Object status Negative"],["fd-object-status","","fd-upload-collection-status-item","","status","positive","label","Positive Object Status","title","Object status Positive","aria-label","Object status Positive"],[3,"allowFileDeletion","allowFileNameEdit","disableFileDeletion","disableFileNameEdit"]],template:function(e,p){e&1&&(a(0,"fd-upload-collection"),F(1,_t,18,9,"li",0,U),n()),e&2&&(c(),N(p.files))},dependencies:[K,V,O,I,j,M,E,H,w,q,L,A,R,$,Q,G,z,W,P,Y,B],encapsulation:2});let t=i;return t})();function ht(t,i){t&1&&(a(0,"fd-message-page",0)(1,"fd-message-page-title"),m(2,"No files found. "),n(),a(3,"fd-message-page-subtitle"),m(4,' Drop files to upload, or use the "+" button. '),n()())}var Je=(()=>{let i=class i{constructor(){this.items=[]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v({type:i,selectors:[["fd-upload-collection-empty-example"]],standalone:!0,features:[b],decls:1,vars:1,consts:[["glyph","attachment"]],template:function(e,p){e&1&&y(0,ht,5,0,"fd-message-page",0),e&2&&x(p.items.length?-1:0)},dependencies:[le,ie,oe,te],encapsulation:2});let t=i;return t})();function vt(t,i){if(t&1&&r(0,"span",7),t&2){let o=f().$implicit;d("glyph",o.marker1)}}function bt(t,i){if(t&1&&r(0,"span",8),t&2){let o=f().$implicit;d("glyph",o.marker2)}}function yt(t,i){if(t&1){let o=S();a(0,"li",1),h("deleteClicked",function(e){let p=u(o).$implicit,s=f();return C(s.deleteClicked(e,p))})("fileNameChanged",function(e){u(o);let p=f();return C(p.fileNameChanged(e))}),a(1,"span",2),r(2,"fd-icon",3),n(),a(3,"div",4)(4,"div",5),r(5,"a",6)(6,"fd-upload-collection-form-item"),y(7,vt,1,1,"span",7)(8,bt,1,1,"span",8),n(),a(9,"div",9),m(10," This is the file description "),r(11,"span",10),m(12," This is an additional description "),n(),a(13,"div",11),r(14,"span",12)(15,"span",10)(16,"span",13),n()(),r(17,"fd-upload-collection-button-group"),n()}if(t&2){let o=i.$implicit;d("fileName",o.fileName)("extension",o.extension),c(2),d("glyph",o.icon),c(5),x(o.marker1?7:-1),c(),x(o.marker2?8:-1)}}function Et(t,i){if(t&1&&r(0,"span",7),t&2){let o=f().$implicit;d("glyph",o.marker1)}}function St(t,i){if(t&1&&r(0,"span",8),t&2){let o=f().$implicit;d("glyph",o.marker2)}}function Ut(t,i){if(t&1){let o=S();a(0,"li",1),h("deleteClicked",function(e){let p=u(o).$implicit,s=f();return C(s.deleteClicked(e,p))})("fileNameChanged",function(e){u(o);let p=f();return C(p.fileNameChanged(e))}),a(1,"span",2),r(2,"fd-icon",3),n(),a(3,"div",4)(4,"div",5),r(5,"a",6)(6,"fd-upload-collection-form-item"),y(7,Et,1,1,"span",7)(8,St,1,1,"span",8),n(),a(9,"div",9),m(10," This is the long long long long long long long long long long long long long long long long long long long long long long long file description "),r(11,"span",10),m(12," This is an additional long long long long long long long long long long long long long long long long long long long long long description "),n(),a(13,"div",11),r(14,"span",14)(15,"span",10)(16,"span",15),n()(),r(17,"fd-upload-collection-button-group"),n()}if(t&2){let o=i.$implicit;d("fileName","Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_"+o.fileName)("extension",o.extension),c(2),d("glyph",o.icon),c(5),x(o.marker1?7:-1),c(),x(o.marker2?8:-1)}}var Xe=(()=>{let i=class i{constructor(){this.files=[{fileName:"File_Name_1",extension:"txt",icon:"activate"},{fileName:"File_Name_2",extension:"jpg",icon:"calendar",marker1:"flag",marker2:"add-favorite"},{fileName:"File_Name_3",extension:"pdf",icon:"customer"}]}fileNameChanged(l){window.alert("User has updated the file name to "+l.fileName)}deleteClicked(l,e){window.alert("User has deleted the file "+l.fileName+"."+l.extension),this.files.splice(this.files.indexOf(e),1)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v({type:i,selectors:[["fd-upload-collection-example"]],contentQueries:function(e,p,s){if(e&1&&k(s,E,5),e&2){let g;T(g=D())&&(p.uploadCollectionItems=g)}},standalone:!0,features:[b],decls:5,vars:0,consts:[["fd-list-item","","fd-upload-collection-item","",3,"fileName","extension"],["fd-list-item","","fd-upload-collection-item","",3,"deleteClicked","fileNameChanged","fileName","extension"],["fd-list-thumbnail","","fd-upload-collection-thumbnail",""],[3,"glyph"],["fd-list-content",""],["fd-upload-collection-title-container",""],["href","#","fd-link","","fd-list-title","","fd-upload-collection-title",""],["fd-object-marker","","title","Favorite","aria-label","Favorite Icon",3,"glyph"],["fd-object-marker","","title","Flag","aria-label","Favorite Flag",3,"glyph"],["fd-upload-collection-description",""],["fd-upload-collection-text-separator",""],["fd-upload-collection-status-group",""],["fd-object-status","","fd-upload-collection-status-item","","status","negative","label","Negative Object Status","title","Object status Negative","aria-label","Object status Negative"],["fd-object-status","","fd-upload-collection-status-item","","status","positive","label","Positive Object Status","title","Object status Positive","aria-label","Object status Positive"],["fd-object-status","","fd-upload-collection-status-item","","status","negative","label","Negative Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Object Status","title","Object status Negative","aria-label","Object status Negative"],["fd-object-status","","fd-upload-collection-status-item","","status","positive","label","Positive Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Object Status","title","Object status Positive","aria-label","Object status Positive"]],template:function(e,p){e&1&&(a(0,"fd-upload-collection"),F(1,yt,18,5,"li",0,U),F(3,Ut,18,5,"li",0,U),n()),e&2&&(c(),N(p.files),c(2),N(p.files.slice(0,1)))},dependencies:[K,V,O,I,j,M,E,H,w,q,L,A,R,$,Q,G,z,W,P,Y,B],encapsulation:2});let t=i;return t})();function Ft(t,i){if(t&1&&r(0,"span",8),t&2){let o=f().$implicit;d("glyph",o.marker1)}}function Nt(t,i){if(t&1&&r(0,"span",9),t&2){let o=f().$implicit;d("glyph",o.marker2)}}function Tt(t,i){if(t&1){let o=S();a(0,"li",2),h("deleteClicked",function(e){let p=u(o).$implicit,s=f();return C(s.deleteClicked(e,p))})("fileNameChanged",function(e){u(o);let p=f();return C(p.fileNameChanged(e))}),a(1,"span",3),r(2,"fd-icon",4),n(),a(3,"div",5)(4,"div",6),r(5,"a",7)(6,"fd-upload-collection-form-item"),y(7,Ft,1,1,"span",8)(8,Nt,1,1,"span",9),n(),a(9,"div",10),m(10," This is the file description "),r(11,"span",11),m(12," This is an additional description "),n(),a(13,"div",12),r(14,"span",13)(15,"span",11)(16,"span",14),n()(),r(17,"fd-upload-collection-button-group"),n()}if(t&2){let o=i.$implicit;d("fileName",o.fileName)("extension",o.extension),c(2),d("glyph",o.icon),c(5),x(o.marker1?7:-1),c(),x(o.marker2?8:-1)}}var Ze=(()=>{let i=class i{constructor(){this.files=[{fileName:"File_Name_1",extension:"txt",icon:"activate"},{fileName:"File_Name_2",extension:"jpg",icon:"calendar"},{fileName:"File_Name_3",extension:"pdf",icon:"customer",marker1:"flag",marker2:"add-favorite"}]}fileNameChanged(l){window.alert("User has updated the file name to "+l.fileName)}deleteClicked(l,e){window.alert("User has deleted the file "+l.fileName+"."+l.extension),this.files.splice(this.files.indexOf(e),1)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v({type:i,selectors:[["fd-upload-collection-small-example"]],contentQueries:function(e,p,s){if(e&1&&k(s,E,5),e&2){let g;T(g=D())&&(p.uploadCollectionItems=g)}},standalone:!0,features:[b],decls:4,vars:3,consts:[[3,"small"],["fd-list-item","","fd-upload-collection-item","",3,"fileName","extension"],["fd-list-item","","fd-upload-collection-item","",3,"deleteClicked","fileNameChanged","fileName","extension"],["fd-list-thumbnail","","fd-upload-collection-thumbnail",""],[3,"glyph"],["fd-list-content",""],["fd-upload-collection-title-container",""],["href","#","fd-link","","fd-list-title","","fd-upload-collection-title",""],["fd-object-marker","","title","Favorite","aria-label","Favorite Icon",3,"glyph"],["fd-object-marker","","title","Flag","aria-label","Favorite Flag",3,"glyph"],["fd-upload-collection-description",""],["fd-upload-collection-text-separator",""],["fd-upload-collection-status-group",""],["fd-object-status","","fd-upload-collection-status-item","","status","negative","label","Negative Object Status","title","Object status Negative","aria-label","Object status Negative"],["fd-object-status","","fd-upload-collection-status-item","","status","positive","label","Positive Object Status","title","Object status Positive","aria-label","Object status Positive"]],template:function(e,p){e&1&&(a(0,"div")(1,"fd-upload-collection",0),F(2,Tt,18,5,"li",1,U),n()()),e&2&&(Z("width",29.5,"rem"),c(),d("small",!0),c(),N(p.files))},dependencies:[K,V,O,I,j,M,E,H,w,q,L,A,R,$,Q,G,z,W,P,Y,B],encapsulation:2});let t=i;return t})();var Dt="upload-collection-example.component.html",et="upload-collection-example.component.ts",kt="upload-collection-small-example.component.html",tt="upload-collection-small-example.component.ts",wt="upload-collection-custom-example.component.html",ot="upload-collection-custom-example.component.ts",Lt="upload-collection-complex-example.component.html",it="upload-collection-complex-example.component.ts",jt="upload-collection-empty-example.component.html",lt="upload-collection-empty-example.component.ts",nt=(()=>{let i=class i{constructor(){this.uploadCollection=[{language:"html",code:_(Dt),typescriptFileCode:_(et),fileName:"upload-collection-example",component:"UploadCollectionExampleComponent"},{language:"TypeScript",code:_(et),fileName:"upload-collection-example",component:"UploadCollectionExampleComponent"}],this.uploadCollectionSmall=[{language:"html",code:_(kt),typescriptFileCode:_(tt),fileName:"upload-collection-small-example",component:"UploadCollectionSmallExampleComponent"},{language:"TypeScript",code:_(tt),fileName:"upload-collection-small-example",component:"UploadCollectionSmallExampleComponent"}],this.uploadCollectionCustom=[{language:"html",code:_(wt),typescriptFileCode:_(ot),fileName:"upload-collection-custom-example",component:"UploadCollectionCustomExampleComponent"},{language:"TypeScript",code:_(ot),fileName:"upload-collection-custom-example",component:"UploadCollectionCustomExampleComponent"}],this.uploadCollectionComplex=[{language:"html",code:_(Lt),typescriptFileCode:_(it),fileName:"upload-collection-complex-example",component:"UploadCollectionComplexExampleComponent"},{language:"TypeScript",code:_(it),fileName:"upload-collection-complex-example",component:"UploadCollectionComplexExampleComponent"}],this.uploadCollectionEmpty=[{language:"html",code:_(jt),typescriptFileCode:_(lt),fileName:"upload-collection-empty-example",component:"UploadCollectionEmptyExampleComponent"},{language:"TypeScript",code:_(lt),fileName:"upload-collection-empty-example",component:"UploadCollectionEmptyExampleComponent"}]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v({type:i,selectors:[["app-upload-collection"]],standalone:!0,features:[b],decls:55,vars:5,consts:[["id","default","componentName","upload-collection"],[3,"exampleFiles"],["id","small-mode","componentName","upload-collection"],["id","customization","componentName","upload-collection"],["id","complex","componentName","upload-collection"],["id","no-data","componentName","upload-collection"]],template:function(e,p){e&1&&(a(0,"fd-docs-section-title",0),m(1," Upload Collection"),n(),a(2,"description"),m(3,"Use the Upload Collection component to display a list of uploads and allow the user to perform actions on the files in that list, such as file name changes or item deletion. "),r(4,"br")(5,"br"),m(6," Individual upload collection items emit events when the user performs an action such as deletion or file renaming. It is the responsibility of the application developer to handle these events properly. These examples simply throw an alert when the user performs an action. See the "),a(7,"code"),m(8,"fd-upload-collection-item"),n(),m(9," API documentation for specific information about these events. "),r(10,"br")(11,"br"),n(),a(12,"component-example"),r(13,"fd-upload-collection-example"),n(),r(14,"code-example",1)(15,"separator"),a(16,"fd-docs-section-title",2),m(17," Upload Collection - Small Mode"),n(),a(18,"description"),m(19,"Use the "),a(20,"code"),m(21,"[small]"),n(),m(22," input in addition to a narrower wrapping container for the small upload collection."),n(),a(23,"component-example"),r(24,"fd-upload-collection-small-example"),n(),r(25,"code-example",1)(26,"separator"),a(27,"fd-docs-section-title",3),m(28," Upload Collection - Customization"),n(),a(29,"description"),m(30,"Functionality of the upload collection can be customized by removing the file edit/delete buttons, or disabling them. In this example, the first item has no customization options. The second item disables the edit and delete buttons. The third item only has a edit button with no delete option. The edit/delete customization functionality can be removed from an upload collection entirely by removing the "),a(31,"code"),m(32,"fd-upload-collection-button-group"),n(),m(33," and "),a(34,"code"),m(35,"fd-upload-collection-form-item"),n(),m(36," directives."),n(),a(37,"component-example"),r(38,"fd-upload-collection-custom-example"),n(),r(39,"code-example",1),a(40,"fd-docs-section-title",4),m(41," Upload Collection - Complex Example"),n(),a(42,"description"),m(43,` The upload collection can be used along with a variety of other components such as the file uploader, toolbar, dialog, button, search input, sorting/filtering functionality etc. to facilitate a smooth user experience. Here in this example we have added selection and the ability to upload files, or delete multiple files at a time.
`),n(),a(44,"component-example"),r(45,"fd-upload-collection-complex-example"),n(),r(46,"code-example",1)(47,"separator"),a(48,"fd-docs-section-title",5),m(49," Upload Collection - No Data"),n(),a(50,"description"),m(51,"Use a message page component when the user has yet to upload any files."),n(),a(52,"component-example"),r(53,"fd-upload-collection-empty-example"),n(),r(54,"code-example",1)),e&2&&(c(14),d("exampleFiles",p.uploadCollection),c(11),d("exampleFiles",p.uploadCollectionSmall),c(14),d("exampleFiles",p.uploadCollectionCustom),c(7),d("exampleFiles",p.uploadCollectionComplex),c(8),d("exampleFiles",p.uploadCollectionEmpty))},dependencies:[Re,ee,$e,Xe,Pe,He,Ze,Ke,qe,Je],encapsulation:2});let t=i;return t})();var at=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v({type:i,selectors:[["fd-upload-collection-header"]],standalone:!0,features:[b],decls:7,vars:0,consts:[["module","UploadCollectionModule"]],template:function(e,p){e&1&&(a(0,"fd-doc-page")(1,"header"),m(2,"Upload Collection"),n(),a(3,"description"),r(4,"p"),n(),r(5,"import",0)(6,"fd-header-tabs"),n())},dependencies:[Be,Ge,ee,ze,Ae],encapsulation:2});let t=i;return t})();var Yo=[{path:"",component:at,children:[{path:"",component:nt}],data:{primary:!0}}],qo="upload-collection",Ko="uploadCollection",Jo="coreUploadCollection";export{Ko as API_FILE_KEY,Jo as I18N_KEY,qo as LIBRARY_NAME,Yo as ROUTES};
