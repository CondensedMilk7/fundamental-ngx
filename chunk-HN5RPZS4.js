import{Je as D,Ke as F,Le as M,ka as u,ne as g,oe as s,qa as C,qe as b}from"./chunk-AUNCFUUT.js";import"./chunk-RTUAT6B3.js";import"./chunk-RHO4TFSB.js";import{$b as c,If as h,Ka as m,Sb as e,Tb as f,Tg as S,_c as v,gb as l,ja as a,jc as T,lc as y,mg as E,tb as t,ub as n,vb as r}from"./chunk-KLPBKWPE.js";var k=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=a({type:o,selectors:[["fd-truncate-header"]],standalone:!0,features:[c],decls:7,vars:0,consts:[["module","TruncateModule"]],template:function(i,d){i&1&&(t(0,"header"),e(1,"Truncate"),n(),t(2,"description"),r(3,"p"),n(),r(4,"import",0)(5,"fd-header-tabs")(6,"router-outlet"))},dependencies:[F,s,M,D,v],encapsulation:2})}}return o})();var I=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=a({type:o,selectors:[["fd-truncate-example"]],standalone:!0,features:[c],decls:24,vars:5,consts:[["fdkTruncate","",3,"fdkTruncateState","fdkTruncateWidth"],["glyph","customer"],["fdkTruncate","",3,"fdkTruncateState"]],template:function(i,d){i&1&&(t(0,"p",0),e(1," This element "),r(2,"fd-icon",1),t(3,"b"),e(4," should be"),n(),e(5," truncated by width of fdTruncateWidth "),n(),t(6,"p",0),e(7," This element "),r(8,"fd-icon",1),e(9," should "),t(10,"b"),e(11,"not"),n(),e(12," be truncated as "),t(13,"b"),e(14,"fdTruncateState"),n(),e(15," is "),t(16,"b"),e(17,"false"),n()(),t(18,"p",2),e(19," This element "),r(20,"fd-icon",1),e(21," should be truncated by default value "),t(22,"b"),e(23,"200px"),n()()),i&2&&(l("fdkTruncateState",!0)("fdkTruncateWidth",300),m(6),l("fdkTruncateState",!1)("fdkTruncateWidth",300),m(12),l("fdkTruncateState",!0))},dependencies:[h,S],encapsulation:2})}}return o})();var w=(()=>{class o{constructor(){this.text="Very very long text very very very very very Long long  very very very very very very very very very very very very very very long"}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=a({type:o,selectors:[["fd-truncate-text-example"]],standalone:!0,features:[c],decls:3,vars:4,template:function(i,d){i&1&&(t(0,"p"),e(1),T(2,"truncate"),n()),i&2&&(m(),f(y(2,1,d.text,30)))},dependencies:[E],encapsulation:2})}}return o})();var A="truncate-example.component.ts",H="truncate-text-example.component.ts",W=(()=>{class o{constructor(){this.truncate=[{language:"typescript",code:u(A),fileName:"truncate-example",component:"TruncateExampleComponent"}],this.truncateText=[{language:"typescript",code:u(H),fileName:"truncate-text-example",component:"TruncateTextExampleComponent"}]}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=a({type:o,selectors:[["app-truncate"]],standalone:!0,features:[c],decls:32,vars:2,consts:[["id","truncate-element","componentName","truncate"],[3,"exampleFiles"],["id","truncate-text","componentName","truncateText"]],template:function(i,d){i&1&&(t(0,"fd-docs-section-title",0),e(1,"Truncate Element by Width"),n(),t(2,"description"),e(3," The "),t(4,"code"),e(5,"fd-truncate"),n(),e(6," directive can be used to truncate an element by width (in pixel) provided to the "),t(7,"code"),e(8,"[fdTruncateWidth]"),n(),e(9," input."),r(10,"br"),e(11," The "),t(12,"code"),e(13,"[fdTruncateState]"),n(),e(14," input must be set to "),t(15,"code"),e(16,"true"),n(),e(17," as the default is false."),r(18,"br"),n(),t(19,"component-example"),r(20,"fd-truncate-example"),n(),r(21,"code-example",1),t(22,"fd-docs-section-title",2),e(23,"Truncate Text"),n(),t(24,"description"),e(25," Truncating long text using "),t(26,"code"),e(27,"truncate"),n(),e(28,` pipe. In this example text is truncated by 30 characters.
`),n(),t(29,"component-example"),r(30,"fd-truncate-text-example"),n(),r(31,"code-example",1)),i&2&&(m(21),l("exampleFiles",d.truncate),m(10),l("exampleFiles",d.truncateText))},dependencies:[b,s,g,I,C,w],encapsulation:2})}}return o})();var G=[{path:"",component:k,children:[{path:"",component:W}],data:{primary:!0}}],J="truncate",Q="truncate";export{Q as API_FILE_KEY,J as LIBRARY_NAME,G as ROUTES};
