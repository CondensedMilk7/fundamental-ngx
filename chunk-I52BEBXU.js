import{a as v,b as U}from"./chunk-VEX73Q36.js";import{Ie as K,Je as j,Ke as G,Le as Y,ka as T,ne as H,oe as k,pe as R,qa as V,qe as q}from"./chunk-AUNCFUUT.js";import"./chunk-RTUAT6B3.js";import"./chunk-RHO4TFSB.js";import{$b as u,Cb as x,Ka as d,Rb as z,Sb as a,Ub as h,Vh as M,Xb as _,Yb as b,Zb as y,_g as A,_h as E,gb as m,hb as W,ja as f,mi as P,pi as S,qa as I,qb as g,ra as B,rb as F,sb as C,tb as o,ub as t,vb as i,zb as O}from"./chunk-KLPBKWPE.js";function ie(e,s){if(e&1&&(o(0,"span")(1,"span",1),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}var J=(()=>{class e{handleFileSelection(l){alert(l.length+" Files selected successfully!!!")}static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-disabled-example"]],standalone:!0,features:[u],decls:7,vars:4,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Select the file ","buttonLabel","Browse","buttonAriaLabel","browse file","accept",".png,.jpg",3,"ngModelChange","selectedFilesChanged","required","ngModel","multiple","disabled"],[1,"green"]],template:function(p,n){p&1&&(o(0,"fd-file-uploader",0),y("ngModelChange",function(r){return b(n.filesDisabled,r)||(n.filesDisabled=r),r}),x("selectedFilesChanged",function(r){return n.handleFileSelection(r)}),t(),i(1,"br")(2,"br"),a(3,`
Files Selected:
`),i(4,"br"),F(5,ie,4,1,"span",null,g)),p&2&&(m("required",!0),_("ngModel",n.filesDisabled),m("multiple",!0)("disabled",!0),d(5),C(n.filesDisabled))},dependencies:[U,v,S,M,P,E],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0})}}return e})();function ne(e,s){if(e&1&&(o(0,"span")(1,"span",1),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}function oe(e,s){if(e&1&&(o(0,"span")(1,"span",2),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}var Q=(()=>{class e{handleFileSelection(l){alert(l.length+" Files selected successfully!!!")}handleInvalidFiles(l){alert(l.length+" Invalid files selected "),this.invalidFiles=l}static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-drag-disabled-example"]],standalone:!0,features:[u],decls:12,vars:1,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose File to upload","buttonLabel","Drag a .png file Over me!","buttonAriaLabel","Drag a .png file Over me!","accept",".png",3,"ngModelChange","selectedFilesChanged","selectedInvalidFiles","ngModel"],[1,"green"],[1,"red"]],template:function(p,n){p&1&&(o(0,"fd-file-uploader",0),y("ngModelChange",function(r){return b(n.files,r)||(n.files=r),r}),x("selectedFilesChanged",function(r){return n.handleFileSelection(r)})("selectedInvalidFiles",function(r){return n.handleInvalidFiles(r)}),t(),i(1,"br")(2,"br"),a(3,`
Files Selected:
`),i(4,"br"),F(5,ne,4,1,"span",null,g),i(7,"br"),a(8,`
Invalid Files:
`),i(9,"br"),F(10,oe,4,1,"span",null,g)),p&2&&(_("ngModel",n.files),d(5),C(n.files),d(5),C(n.invalidFiles))},dependencies:[U,v,S,M,E],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0})}}return e})();function ae(e,s){if(e&1&&(o(0,"span")(1,"span",4),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}var X=(()=>{class e{handleFileSelection(l){alert(l.length+" Files selected successfully!!!")}resetFiles(){this.files=[]}static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-example"]],standalone:!0,features:[u],decls:11,vars:7,consts:[["fileUploaderComponentRef",""],["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Select the file ","buttonLabel","Browse","buttonAriaLabel","browse file","accept",".png,.jpg",3,"ngModelChange","selectedFilesChanged","required","ngModel","multiple"],["fd-button","","label","Reset File Selection via clear() function",3,"click"],["fd-button","","label","Reset File Selection via ngModel",3,"click"],[1,"green"]],template:function(p,n){if(p&1){let c=O();o(0,"fd-file-uploader",1,0),y("ngModelChange",function(D){return I(c),b(n.files,D)||(n.files=D),B(D)}),x("selectedFilesChanged",function(D){return I(c),B(n.handleFileSelection(D))}),t(),i(2,"br")(3,"br"),a(4,`
Files Selected:
`),i(5,"br"),F(6,ae,4,1,"span",null,g),o(8,"button",2),x("click",function(){I(c);let D=z(1);return B(D.clear())}),t(),i(9,"br"),o(10,"button",3),x("click",function(){return I(c),B(n.resetFiles())}),t()}p&2&&(m("required",!0),_("ngModel",n.files),m("multiple",!0),d(6),C(n.files),d(2),W("margin-top",.5,"rem"),d(2),W("margin-top",.5,"rem"))},dependencies:[U,v,S,M,P,E,A],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0})}}return e})();function re(e,s){if(e&1&&(o(0,"span")(1,"span",1),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}function pe(e,s){if(e&1&&(o(0,"span")(1,"span",2),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}var Z=(()=>{class e{handleFileSelection(l){alert(l.length+" Files selected successfully!!!")}handleInvalidFiles(l){alert(l.length+" Invalid files selected "),this.invalidFiles=l}static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-max-example"]],standalone:!0,features:[u],decls:12,vars:2,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose File to upload","buttonLabel","Browse...","buttonAriaLabel","browse file","maxFileSize","1MB",3,"ngModelChange","selectedFilesChanged","selectedInvalidFiles","multiple","ngModel"],[1,"green"],[1,"red"]],template:function(p,n){p&1&&(o(0,"fd-file-uploader",0),y("ngModelChange",function(r){return b(n.files,r)||(n.files=r),r}),x("selectedFilesChanged",function(r){return n.handleFileSelection(r)})("selectedInvalidFiles",function(r){return n.handleInvalidFiles(r)}),t(),i(1,"br")(2,"br"),a(3,`
Files Selected:
`),i(4,"br"),F(5,re,4,1,"span",null,g),i(7,"br"),a(8,`
Invalid Files:
`),i(9,"br"),F(10,pe,4,1,"span",null,g)),p&2&&(m("multiple",!0),_("ngModel",n.files),d(5),C(n.files),d(5),C(n.invalidFiles))},dependencies:[U,v,S,M,E],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0})}}return e})();function de(e,s){if(e&1&&(o(0,"span")(1,"span",1),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}function me(e,s){if(e&1&&(o(0,"span")(1,"span",2),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}var $=(()=>{class e{handleFileSelection(l){alert(l.length+" Files selected successfully!!!")}handleInvalidFiles(l){alert(l.length+" Invalid files selected "),this.invalidFiles=l}static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-min-example"]],standalone:!0,features:[u],decls:12,vars:2,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose File to upload","buttonLabel","Browse...","buttonAriaLabel","browse file","minFileSize","3KB",3,"ngModelChange","selectedFilesChanged","selectedInvalidFiles","multiple","ngModel"],[1,"green"],[1,"red"]],template:function(p,n){p&1&&(o(0,"fd-file-uploader",0),y("ngModelChange",function(r){return b(n.files,r)||(n.files=r),r}),x("selectedFilesChanged",function(r){return n.handleFileSelection(r)})("selectedInvalidFiles",function(r){return n.handleInvalidFiles(r)}),t(),i(1,"br")(2,"br"),a(3,`
Files Selected:
`),i(4,"br"),F(5,de,4,1,"span",null,g),i(7,"br"),a(8,`
Invalid Files:
`),i(9,"br"),F(10,me,4,1,"span",null,g)),p&2&&(m("multiple",!0),_("ngModel",n.files),d(5),C(n.files),d(5),C(n.invalidFiles))},dependencies:[U,v,S,M,E],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0})}}return e})();function se(e,s){if(e&1&&(o(0,"span")(1,"span",1),a(2),t(),i(3,"br"),t()),e&2){let l=s.$implicit;d(2),h("",l.name," ")}}var ee=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=f({type:e,selectors:[["fd-file-uploader-truncation-example"]],standalone:!0,features:[u],decls:7,vars:2,consts:[["ariaLabel","Choose file","ariaLabelledBy","Choose file","placeholder","Choose file to upload to the server ","buttonLabel","Browse","buttonAriaLabel","browse file","accept",".png,.jpg",3,"ngModelChange","selectedFilesChanged","multiple","ngModel"],[1,"green"]],template:function(p,n){p&1&&(o(0,"fd-file-uploader",0),y("ngModelChange",function(r){return b(n.files,r)||(n.files=r),r}),x("selectedFilesChanged",function(r){return n.files=r}),t(),i(1,"br")(2,"br"),a(3,`
Files Selected:
`),i(4,"br"),F(5,se,4,1,"span",null,g)),p&2&&(m("multiple",!0),_("ngModel",n.files),d(5),C(n.files))},dependencies:[U,v,S,M,E],styles:[".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:#2e8b57}"],changeDetection:0})}}return e})();var ce="file-uploader-truncation-example/file-uploader-truncation-example.component.html",fe="file-uploader-truncation-example/file-uploader-truncation-example.component.ts",ue="file-uploader-example/file-uploader-example.component.html",ge="file-uploader-example/file-uploader-example.component.ts",Fe="file-uploader-drag-disabled-example/file-uploader-drag-disabled-example.component.html",Ce="file-uploader-drag-disabled-example/file-uploader-drag-disabled-example.component.ts",he="file-uploader-max-example/file-uploader-max-example.component.ts",xe="file-uploader-max-example/file-uploader-max-example.component.html",_e="file-uploader-min-example/file-uploader-min-example.component.ts",be="file-uploader-min-example/file-uploader-min-example.component.html",te=(()=>{class e{constructor(){this.fileUpladerExample=[{language:"html",code:T(ue),fileName:"file-uploader-example"},{language:"typescript",component:"FileUploaderExampleComponent",code:T(ge),fileName:"file-uploader-example"}],this.fileInvalidCustom=[{language:"html",code:T(Fe),fileName:"file-uploader-drag-disabled-example"},{language:"typescript",component:"FileUploaderDragDisabledExampleComponent",code:T(Ce),fileName:"file-uploader-drag-disabled-example"}],this.fileMaxSize=[{language:"html",code:T(xe),fileName:"file-uploader-max-example"},{language:"typescript",component:"FileUploaderMaxExampleComponent",code:T(he),fileName:"file-uploader-max-example"}],this.fileMinSize=[{language:"html",code:T(be),fileName:"file-uploader-min-example"},{language:"typescript",component:"FileUploaderMinExampleComponent",code:T(_e),fileName:"file-uploader-min-example"}],this.fileTruncation=[{language:"html",code:T(ce),fileName:"file-uploader-truncation-example"},{language:"typescript",component:"FileUploaderTruncationExampleComponent",code:T(fe),fileName:"file-uploader-truncation-example"}]}static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-file-uploader"]],standalone:!0,features:[u],decls:65,vars:6,consts:[["id","simple","componentName","file-uploader"],[3,"exampleFiles"],["id","disabled","componentName","file-uploader"],["id","truncation","componentName","file-uploader"],["id","invalid","componentName","file-uploader"],["id","min-size","componentName","file-uploader"],["id","max-size","componentName","file-uploader"]],template:function(p,n){p&1&&(o(0,"fd-docs-section-title",0),a(1," Simple File Upload "),t(),o(2,"description"),a(3,"Used in this context, it will only allow a set of extensions to be added."),t(),o(4,"component-example"),i(5,"fd-file-uploader-example"),t(),i(6,"code-example",1)(7,"separator"),o(8,"fd-docs-section-title",2),a(9," Disabled File Upload "),t(),o(10,"description"),a(11,"Use "),o(12,"code"),a(13,"disabled"),t(),a(14," input property to disable file uploader. Also, disabling is possible using Forms API."),t(),o(15,"component-example"),i(16,"fd-file-uploader-disabled-example"),t(),i(17,"code-example",1)(18,"separator"),o(19,"fd-docs-section-title",3),a(20,` File Uploader Truncation example
`),t(),o(21,"description"),a(22,"Long placeholder for the input element will be truncated."),t(),o(23,"component-example"),i(24,"fd-file-uploader-truncation-example"),t(),i(25,"code-example",1)(26,"separator"),o(27,"fd-docs-section-title",4),a(28," Invalid File Upload "),t(),o(29,"description"),a(30,` An event is fired when invalid files are added through the drag and drop feature. These files can be retrieved and displayed to the user at will.
`),t(),o(31,"component-example"),i(32,"fd-file-uploader-drag-disabled-example"),t(),i(33,"code-example",1)(34,"separator"),o(35,"fd-docs-section-title",5),a(36," Min File Size "),t(),o(37,"description"),a(38," It is possible to control the size of the file through the input "),o(39,"code"),a(40,"minFileSize"),t(),a(41,". The size you can specify in Byte, KB, MB, GB, TB. eg 20Byte, 2KB, 1MB etc... This feature will keep casual users from entering smaller files to reduce network traffic, but someone knowledgeable enough could potentially bypass this. "),i(42,"br")(43,"br"),o(44,"strong"),a(45,"NOTE: It is possible to bypass this client-side limit so a server-side check is still necessary."),t()(),o(46,"component-example"),i(47,"fd-file-uploader-min-example"),t(),i(48,"code-example",1)(49,"separator"),o(50,"fd-docs-section-title",6),a(51," Max File Size "),t(),o(52,"description"),a(53," It is possible to control the size of the file through the input "),o(54,"code"),a(55,"maxFileSize"),t(),a(56,". he size you can specify in Byte, KB, MB, GB, TB. eg 20Byte, 2KB, 1MB etc... This feature will keep casual users from entering larger files, but someone knowledgeable enough could potentially bypass this. "),i(57,"br")(58,"br"),o(59,"strong"),a(60,"NOTE: It is possible to bypass this client-side limit so a server-side check is still necessary."),t()(),o(61,"component-example"),i(62,"fd-file-uploader-max-example"),t(),i(63,"code-example",1)(64,"separator")),p&2&&(d(6),m("exampleFiles",n.fileUpladerExample),d(11),m("exampleFiles",n.fileUpladerExample),d(8),m("exampleFiles",n.fileTruncation),d(8),m("exampleFiles",n.fileInvalidCustom),d(15),m("exampleFiles",n.fileMinSize),d(15),m("exampleFiles",n.fileMaxSize))},dependencies:[q,k,H,X,V,K,J,ee,Q,$,Z]})}}return e})();var le=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-file-uploader-header"]],standalone:!0,features:[u],decls:7,vars:0,consts:[["module","FileUploaderModule","subPackage","file-uploader"]],template:function(p,n){p&1&&(o(0,"fd-doc-page")(1,"header"),a(2,"File Uploader"),t(),o(3,"description"),a(4," A very flexible component that prompts the user for a file. Supports multiple selection, accept only certain extensions, and more. The aim is to facilitate the use and styling of the native file input. The projected content can have a file dragged and dropped over. "),t(),i(5,"import",0)(6,"fd-header-tabs"),t())},dependencies:[R,G,k,Y,j]})}}return e})();var $e=[{path:"",component:le,children:[{path:"",component:te}],data:{primary:!0}}],et="file-uploader",tt="fileUploader";export{tt as API_FILE_KEY,et as LIBRARY_NAME,$e as ROUTES};
