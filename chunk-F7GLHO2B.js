import{_ as y,ea as z,oe as A,pe as N,qe as k,re as $,te as H,ue as R,ve as q,wd as S,we as K,xd as M}from"./chunk-J243O57H.js";import"./chunk-MDCO26HI.js";import"./chunk-WVE7ILGJ.js";import{Ha as I,Ka as E,o as P,oa as _,ta as b}from"./chunk-PQI5IDMC.js";import{Kb as o,Mb as F,Pc as C,Wb as u,eb as m,nb as g,ob as B,pb as d,qa as f,qb as i,rb as t,sb as n,wb as L,ya as O,yb as h,za as w}from"./chunk-52WO5KQ3.js";import"./chunk-VIJJU4QR.js";function ee(l,e){if(l&1&&(i(0,"span")(1,"span",2),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}var j=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-compact-example"]],standalone:!0,features:[u],decls:6,vars:3,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose File to upload","buttonLabel","Browse...","buttonAriaLabel","browse file","accept",".png,.jpg","fdCompact","",3,"ngModel","multiple","ngModelChange"],[4,"ngFor","ngForOf"],[1,"green"]],template:function(r,a){r&1&&(i(0,"fd-file-uploader",0),h("ngModelChange",function(s){return a.files=s}),t(),n(1,"br")(2,"br"),o(3,`
Files Selected:
`),n(4,"br"),g(5,ee,4,1,"span",1)),r&2&&(d("ngModel",a.files)("multiple",!0),m(5),d("ngForOf",a.files))},dependencies:[M,S,P,E,_,b,C],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0});let l=e;return l})();function te(l,e){if(l&1&&(i(0,"span")(1,"span",2),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}var V=(()=>{let e=class e{handleFileSelection(p){alert(p.length+" Files selected successfully!!!")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-disabled-example"]],standalone:!0,features:[u],decls:6,vars:5,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Select the file ","buttonLabel","Browse","buttonAriaLabel","browse file","accept",".png,.jpg",3,"required","ngModel","multiple","disabled","ngModelChange","selectedFilesChanged"],[4,"ngFor","ngForOf"],[1,"green"]],template:function(r,a){r&1&&(i(0,"fd-file-uploader",0),h("ngModelChange",function(s){return a.filesDisabled=s})("selectedFilesChanged",function(s){return a.handleFileSelection(s)}),t(),n(1,"br")(2,"br"),o(3,`
Files Selected:
`),n(4,"br"),g(5,te,4,1,"span",1)),r&2&&(d("required",!0)("ngModel",a.filesDisabled)("multiple",!0)("disabled",!0),m(5),d("ngForOf",a.filesDisabled))},dependencies:[M,S,E,_,I,b,C],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0});let l=e;return l})();function le(l,e){if(l&1&&(i(0,"span")(1,"span",2),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}function ie(l,e){if(l&1&&(i(0,"span")(1,"span",3),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}var G=(()=>{let e=class e{handleFileSelection(p){alert(p.length+" Files selected successfully!!!")}handleInvalidFiles(p){alert(p.length+" Invalid files selected "),this.invalidFiles=p}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-drag-disabled-example"]],standalone:!0,features:[u],decls:10,vars:3,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose File to upload","buttonLabel","Drag a .png file Over me!","buttonAriaLabel","Drag a .png file Over me!","accept",".png",3,"ngModel","ngModelChange","selectedFilesChanged","selectedInvalidFiles"],[4,"ngFor","ngForOf"],[1,"green"],[1,"red"]],template:function(r,a){r&1&&(i(0,"fd-file-uploader",0),h("ngModelChange",function(s){return a.files=s})("selectedFilesChanged",function(s){return a.handleFileSelection(s)})("selectedInvalidFiles",function(s){return a.handleInvalidFiles(s)}),t(),n(1,"br")(2,"br"),o(3,` Files Selected:
`),n(4,"br"),g(5,le,4,1,"span",1),n(6,"br"),o(7,` Invalid Files:
`),n(8,"br"),g(9,ie,4,1,"span",1)),r&2&&(d("ngModel",a.files),m(5),d("ngForOf",a.files),m(4),d("ngForOf",a.invalidFiles))},dependencies:[M,S,E,_,b,C],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0});let l=e;return l})();function ne(l,e){if(l&1&&(i(0,"span")(1,"span",5),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}var Y=(()=>{let e=class e{handleFileSelection(p){alert(p.length+" Files selected successfully!!!")}resetFiles(){this.files=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-example"]],standalone:!0,features:[u],decls:10,vars:4,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Select the file ","buttonLabel","Browse","buttonAriaLabel","browse file","accept",".png,.jpg",3,"required","ngModel","multiple","ngModelChange","selectedFilesChanged"],["fileUploaderComponentRef",""],[4,"ngFor","ngForOf"],["fd-button","","label","Reset File Selection via clear() function",2,"margin-top","0.5rem",3,"click"],["fd-button","","label","Reset File Selection via ngModel",2,"margin-top","0.5rem",3,"click"],[1,"green"]],template:function(r,a){if(r&1){let x=L();i(0,"fd-file-uploader",0,1),h("ngModelChange",function(D){return a.files=D})("selectedFilesChanged",function(D){return a.handleFileSelection(D)}),t(),n(2,"br")(3,"br"),o(4,`
Files Selected:
`),n(5,"br"),g(6,ne,4,1,"span",2),i(7,"button",3),h("click",function(){O(x);let D=B(1);return w(D.clear())}),t(),n(8,"br"),i(9,"button",4),h("click",function(){return a.resetFiles()}),t()}r&2&&(d("required",!0)("ngModel",a.files)("multiple",!0),m(6),d("ngForOf",a.files))},dependencies:[M,S,E,_,I,b,C],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0});let l=e;return l})();function oe(l,e){if(l&1&&(i(0,"span")(1,"span",2),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}function ae(l,e){if(l&1&&(i(0,"span")(1,"span",3),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}var J=(()=>{let e=class e{handleFileSelection(p){alert(p.length+" Files selected successfully!!!")}handleInvalidFiles(p){alert(p.length+" Invalid files selected "),this.invalidFiles=p}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-max-example"]],standalone:!0,features:[u],decls:10,vars:4,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose File to upload","buttonLabel","Browse...","buttonAriaLabel","browse file","maxFileSize","1MB",3,"multiple","ngModel","ngModelChange","selectedFilesChanged","selectedInvalidFiles"],[4,"ngFor","ngForOf"],[1,"green"],[1,"red"]],template:function(r,a){r&1&&(i(0,"fd-file-uploader",0),h("ngModelChange",function(s){return a.files=s})("selectedFilesChanged",function(s){return a.handleFileSelection(s)})("selectedInvalidFiles",function(s){return a.handleInvalidFiles(s)}),t(),n(1,"br")(2,"br"),o(3,`
Files Selected:
`),n(4,"br"),g(5,oe,4,1,"span",1),n(6,"br"),o(7,` Invalid Files:
`),n(8,"br"),g(9,ae,4,1,"span",1)),r&2&&(d("multiple",!0)("ngModel",a.files),m(5),d("ngForOf",a.files),m(4),d("ngForOf",a.invalidFiles))},dependencies:[M,S,E,_,b,C],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0});let l=e;return l})();function re(l,e){if(l&1&&(i(0,"span")(1,"span",2),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}function pe(l,e){if(l&1&&(i(0,"span")(1,"span",3),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}var Q=(()=>{let e=class e{handleFileSelection(p){alert(p.length+" Files selected successfully!!!")}handleInvalidFiles(p){alert(p.length+" Invalid files selected "),this.invalidFiles=p}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-min-example"]],standalone:!0,features:[u],decls:10,vars:4,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose File to upload","buttonLabel","Browse...","buttonAriaLabel","browse file","minFileSize","3KB",3,"multiple","ngModel","ngModelChange","selectedFilesChanged","selectedInvalidFiles"],[4,"ngFor","ngForOf"],[1,"green"],[1,"red"]],template:function(r,a){r&1&&(i(0,"fd-file-uploader",0),h("ngModelChange",function(s){return a.files=s})("selectedFilesChanged",function(s){return a.handleFileSelection(s)})("selectedInvalidFiles",function(s){return a.handleInvalidFiles(s)}),t(),n(1,"br")(2,"br"),o(3,` Files Selected:
`),n(4,"br"),g(5,re,4,1,"span",1),n(6,"br"),o(7,` Invalid Files:
`),n(8,"br"),g(9,pe,4,1,"span",1)),r&2&&(d("multiple",!0)("ngModel",a.files),m(5),d("ngForOf",a.files),m(4),d("ngForOf",a.invalidFiles))},dependencies:[M,S,E,_,b,C],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0});let l=e;return l})();function me(l,e){if(l&1&&(i(0,"span")(1,"span",2),o(2),t(),n(3,"br"),t()),l&2){let c=e.$implicit;m(2),F("",c.name," ")}}var W=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-truncation-example"]],standalone:!0,features:[u],decls:6,vars:3,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose file to upload to the server ","buttonLabel","Browse","buttonAriaLabel","browse file","accept",".png,.jpg",3,"multiple","ngModel","ngModelChange","selectedFilesChanged"],[4,"ngFor","ngForOf"],[1,"green"]],template:function(r,a){r&1&&(i(0,"fd-file-uploader",0),h("ngModelChange",function(s){return a.files=s})("selectedFilesChanged",function(s){return a.files=s}),t(),n(1,"br")(2,"br"),o(3,`
Files Selected:
`),n(4,"br"),g(5,me,4,1,"span",1)),r&2&&(d("multiple",!0)("ngModel",a.files),m(5),d("ngForOf",a.files))},dependencies:[M,S,E,_,b,C],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0});let l=e;return l})();var de="file-uploader-compact-example/file-uploader-compact-example.component.html",se="file-uploader-compact-example/file-uploader-compact-example.component.ts",ce="file-uploader-truncation-example/file-uploader-truncation-example.component.html",fe="file-uploader-truncation-example/file-uploader-truncation-example.component.ts",ue="file-uploader-example/file-uploader-example.component.html",ge="file-uploader-example/file-uploader-example.component.ts",Fe="file-uploader-drag-disabled-example/file-uploader-drag-disabled-example.component.html",he="file-uploader-drag-disabled-example/file-uploader-drag-disabled-example.component.ts",xe="file-uploader-max-example/file-uploader-max-example.component.ts",Ce="file-uploader-max-example/file-uploader-max-example.component.html",_e="file-uploader-min-example/file-uploader-min-example.component.ts",be="file-uploader-min-example/file-uploader-min-example.component.html",X=(()=>{let e=class e{constructor(){this.fileUpladerCompactExample=[{language:"html",code:y(de),fileName:"file-uploader-compact-example"},{language:"typescript",component:"FileUploaderCompactExampleComponent",code:y(se),fileName:"file-uploader-compact-example"}],this.fileUpladerExample=[{language:"html",code:y(ue),fileName:"file-uploader-example"},{language:"typescript",component:"FileUploaderExampleComponent",code:y(ge),fileName:"file-uploader-example"}],this.fileInvalidCustom=[{language:"html",code:y(Fe),fileName:"file-uploader-drag-disabled-example"},{language:"typescript",component:"FileUploaderDragDisabledExampleComponent",code:y(he),fileName:"file-uploader-drag-disabled-example"}],this.fileMaxSize=[{language:"html",code:y(Ce),fileName:"file-uploader-max-example"},{language:"typescript",component:"FileUploaderMaxExampleComponent",code:y(xe),fileName:"file-uploader-max-example"}],this.fileMinSize=[{language:"html",code:y(be),fileName:"file-uploader-min-example"},{language:"typescript",component:"FileUploaderMinExampleComponent",code:y(_e),fileName:"file-uploader-min-example"}],this.fileTruncation=[{language:"html",code:y(ce),fileName:"file-uploader-truncation-example"},{language:"typescript",component:"FileUploaderTruncationExampleComponent",code:y(fe),fileName:"file-uploader-truncation-example"}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-file-uploader"]],standalone:!0,features:[u],decls:79,vars:7,consts:[["id","simple","componentName","file-uploader"],[3,"exampleFiles"],["id","disabled","componentName","file-uploader"],["id","truncation","componentName","file-uploader"],["id","compact","componentName","file-uploader"],["id","invalid","componentName","file-uploader"],["id","min-size","componentName","file-uploader"],["id","max-size","componentName","file-uploader"]],template:function(r,a){r&1&&(i(0,"fd-docs-section-title",0),o(1," Simple File Upload "),t(),i(2,"description"),o(3,"Used in this context, it will only allow a set of extensions to be added."),t(),i(4,"component-example"),n(5,"fd-file-uploader-example"),t(),n(6,"code-example",1)(7,"separator"),i(8,"fd-docs-section-title",2),o(9," Disabled File Upload "),t(),i(10,"description"),o(11,"Use "),i(12,"code"),o(13,"disabled"),t(),o(14," input property to disable file uploader. Also, disabling is possible using Forms API."),t(),i(15,"component-example"),n(16,"fd-file-uploader-disabled-example"),t(),n(17,"code-example",1)(18,"separator"),i(19,"fd-docs-section-title",3),o(20,` File Uploader Truncation example
`),t(),i(21,"description"),o(22,"Long placeholder for the input element will be truncated."),t(),i(23,"component-example"),n(24,"fd-file-uploader-truncation-example"),t(),n(25,"code-example",1)(26,"separator"),i(27,"fd-docs-section-title",4),o(28," Compact File Upload "),t(),i(29,"description"),o(30,"Example to demonstrate the compact file uploader. Set boolean "),i(31,"code"),o(32,"compact"),t(),o(33," flag to "),i(34,"code"),o(35,"true"),t(),o(36," to achieve the compact file uploader."),t(),i(37,"component-example"),n(38,"fd-file-uploader-compact-example"),t(),n(39,"code-example",1)(40,"separator"),i(41,"fd-docs-section-title",5),o(42," Invalid File Upload "),t(),i(43,"description"),o(44,` An event is fired when invalid files are added through the drag and drop feature. These files can be retrieved and displayed to the user at will.
`),t(),i(45,"component-example"),n(46,"fd-file-uploader-drag-disabled-example"),t(),n(47,"code-example",1)(48,"separator"),i(49,"fd-docs-section-title",6),o(50," Min File Size "),t(),i(51,"description"),o(52," It is possible to control the size of the file through the input "),i(53,"code"),o(54,"minFileSize"),t(),o(55,". The size you can specify in Byte, KB, MB, GB, TB. eg 20Byte, 2KB, 1MB etc... This feature will keep casual users from entering smaller files to reduce network traffic, but someone knowledgeable enough could potentially bypass this. "),n(56,"br")(57,"br"),i(58,"strong"),o(59,"NOTE: It is possible to bypass this client-side limit so a server-side check is still necessary."),t()(),i(60,"component-example"),n(61,"fd-file-uploader-min-example"),t(),n(62,"code-example",1)(63,"separator"),i(64,"fd-docs-section-title",7),o(65," Max File Size "),t(),i(66,"description"),o(67," It is possible to control the size of the file through the input "),i(68,"code"),o(69,"maxFileSize"),t(),o(70,". he size you can specify in Byte, KB, MB, GB, TB. eg 20Byte, 2KB, 1MB etc... This feature will keep casual users from entering larger files, but someone knowledgeable enough could potentially bypass this. "),n(71,"br")(72,"br"),i(73,"strong"),o(74,"NOTE: It is possible to bypass this client-side limit so a server-side check is still necessary."),t()(),i(75,"component-example"),n(76,"fd-file-uploader-max-example"),t(),n(77,"code-example",1)(78,"separator")),r&2&&(m(6),d("exampleFiles",a.fileUpladerExample),m(11),d("exampleFiles",a.fileUpladerExample),m(8),d("exampleFiles",a.fileTruncation),m(14),d("exampleFiles",a.fileUpladerCompactExample),m(8),d("exampleFiles",a.fileInvalidCustom),m(15),d("exampleFiles",a.fileMinSize),m(15),d("exampleFiles",a.fileMaxSize))},dependencies:[$,N,A,Y,z,H,V,W,j,G,Q,J]});let l=e;return l})();var Z=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-file-uploader-header"]],standalone:!0,features:[u],decls:7,vars:0,consts:[["module","FileUploaderModule","subPackage","file-uploader"]],template:function(r,a){r&1&&(i(0,"fd-doc-page")(1,"header"),o(2,"File Uploader"),t(),i(3,"description"),o(4," A very flexible component that prompts the user for a file. Supports multiple selection, accept only certain extensions, and more. The aim is to facilitate the use and styling of the native file input. The projected content can have a file dragged and dropped over. "),t(),n(5,"import",0)(6,"fd-header-tabs"),t())},dependencies:[k,q,N,K,R]});let l=e;return l})();var dt=[{path:"",component:Z,children:[{path:"",component:X}],data:{primary:!0}}],st="file-uploader",ct="fileUploader";export{ct as API_FILE_KEY,st as LIBRARY_NAME,dt as ROUTES};
