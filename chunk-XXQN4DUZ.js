import{Ie as b,Je as w,Ke as v,Le as D,dc as x,ec as f,ka as u,ne as g,oe as h,pe as E,qa as y,qe as C}from"./chunk-AUNCFUUT.js";import"./chunk-RTUAT6B3.js";import"./chunk-RHO4TFSB.js";import{$b as s,Ka as a,Sb as t,gb as p,hb as c,ja as m,sa as k,tb as n,ub as e,vb as l}from"./chunk-KLPBKWPE.js";var F=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=m({type:o,selectors:[["fd-skeleton-complex-example"]],standalone:!0,features:[s],decls:7,vars:0,consts:[["width","160px","height","110px"],["cx","25","cy","25","r","25"],["x","60","y","0","width","100","height","16","rx","4"],["x","60","y","30","width","60","height","12","rx","4"],["x","0","y","60","width","160","height","8","rx","4"],["x","0","y","80","width","160","height","8","rx","4"],["x","0","y","100","width","100","height","8","rx","4"]],template:function(i,d){i&1&&(n(0,"fd-skeleton",0),k(),l(1,"circle",1)(2,"rect",2)(3,"rect",3)(4,"rect",4)(5,"rect",5)(6,"rect",6),e())},dependencies:[f,x],encapsulation:2})}}return o})();var M=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=m({type:o,selectors:[["fd-skeleton-component-example"]],standalone:!0,features:[s],decls:41,vars:12,consts:[["type","rectangle","width","100px","height","50px"],["type","rectangle","width","100px","height","50px",3,"animated"],["type","circle","width","50px"],["type","circle","height","50px",3,"animated"],["type","text","width","100px"],["type","text","width","100px",3,"animated"],["type","text","width","100px","textLines","2"],["type","text","width","100px","textLines","2",3,"animated"]],template:function(i,d){i&1&&(n(0,"h3"),t(1,"Types"),e(),n(2,"p")(3,"b"),t(4,"Rectangle"),e()(),l(5,"fd-skeleton",0)(6,"fd-skeleton",1),n(7,"p")(8,"b"),t(9,"Circle"),e()(),l(10,"fd-skeleton",2)(11,"fd-skeleton",3),n(12,"p")(13,"b"),t(14,"Note:"),e(),t(15," Setting "),n(16,"code"),t(17,"height"),e(),n(18,"b"),t(19," or "),e(),n(20,"code"),t(21,"width"),e(),t(22,` can be omitted as circle is always a square.
`),e(),n(23,"p")(24,"b"),t(25,"Text"),e()(),n(26,"p"),t(27,"3 lines, default"),e(),l(28,"fd-skeleton",4)(29,"fd-skeleton",5),n(30,"p"),t(31,"2 lines"),e(),l(32,"fd-skeleton",6)(33,"fd-skeleton",7),n(34,"p")(35,"b"),t(36,"Note:"),e(),t(37," Last line is 60% of width if there is more than 1 line. Setting "),n(38,"code"),t(39,"height"),e(),t(40,` isn't necessary as it can be calculated from number of lines.
`),e()),i&2&&(a(6),c("margin","0 1rem"),p("animated",!1),a(5),c("margin","0 1rem"),p("animated",!1),a(18),c("margin","0 1rem"),p("animated",!1),a(4),c("margin","0 1rem"),p("animated",!1))},dependencies:[f,x],encapsulation:2})}}return o})();var P="component/skeleton-component-example.component.html",I="complex/skeleton-complex-example.component.html",T=(()=>{class o{constructor(){this.component=[{language:"html",code:u(P),fileName:"skeleton-component-example"}],this.complex=[{language:"html",code:u(I),fileName:"skeleton-complex-example"}]}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-skeleton"]],standalone:!0,features:[s],decls:43,vars:2,consts:[["id","component","componentName","skeleton"],[3,"exampleFiles"],["id","complex","componentName","skeleton"]],template:function(i,d){i&1&&(n(0,"fd-docs-section-title",0),t(1,"Component"),e(),n(2,"description")(3,"h4"),t(4,"Input properties"),e(),n(5,"ul")(6,"li")(7,"b"),t(8,"type"),e(),t(9," - specifies the shape of a skeleton, "),n(10,"code"),t(11,"'rectangle' | 'circle' | 'text'"),e()(),n(12,"li")(13,"b"),t(14,"textLines"),e(),t(15," - specifies the number of lines, default is 3"),e(),n(16,"li")(17,"b"),t(18,"width"),e(),t(19," - specifies the width of the skeleton, string"),e(),n(20,"li")(21,"b"),t(22,"height"),e(),t(23," - specifies the height of the skeleton, string"),e(),n(24,"li")(25,"b"),t(26,"animation"),e(),t(27," - specifies whether the skeleton is animated, boolean, default is true"),e()()(),n(28,"component-example"),l(29,"fd-skeleton-component-example"),e(),l(30,"code-example",1)(31,"separator"),n(32,"fd-docs-section-title",2),t(33,"Complex templates"),e(),n(34,"description"),t(35," It's possible to define complex loading templates by yourself. You can project any SVG elements in Skeleton component, colors and animation will be applied automatically. "),l(36,"br")(37,"br"),t(38,` Besides this, we provide predefined loading templates for components that most likely would need it, please see components docs.
`),e(),n(39,"component-example"),l(40,"fd-skeleton-complex-example"),e(),l(41,"code-example",1)(42,"separator")),i&2&&(a(30),p("exampleFiles",d.component),a(11),p("exampleFiles",d.complex))},dependencies:[C,h,g,M,y,b,F],encapsulation:2})}}return o})();var H=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=m({type:o,selectors:[["fd-skeleton-header"]],standalone:!0,features:[s],decls:10,vars:0,consts:[["module","SkeletonModule","subPackage","skeleton"]],template:function(i,d){i&1&&(n(0,"fd-doc-page")(1,"header"),t(2,"Skeleton"),e(),n(3,"description"),t(4," Skeleton is the component to show loading placeholders to give hints about a structure of the page before the actual content is loaded. "),l(5,"br")(6,"br"),t(7," Skeletons should be be used as less as possible and cover only the heavy dynamic parts, please consider that any lightweight static data should be shown immediately. "),e(),l(8,"import",0)(9,"fd-header-tabs"),e())},dependencies:[E,v,h,D,w],encapsulation:2})}}return o})();var U=[{path:"",component:H,children:[{path:"",component:T}],data:{primary:!0}}],z="skeleton",J="skeleton";export{J as API_FILE_KEY,z as LIBRARY_NAME,U as ROUTES};
