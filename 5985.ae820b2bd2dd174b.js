"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5985],{11758:(x,s,n)=>{n.d(s,{V:()=>D});var d=n(68675),u=n(5e3);let D=(()=>{class m{constructor(i){this._elementRef=i}set popover(i){i&&(i.trigger=this._elementRef,this._listenOnExpanded(i)),this._setAriaAttributes(i)}ngOnDestroy(){this._unsubscribeExpandedListener()}_listenOnExpanded(i){this._unsubscribeExpandedListener(),i&&(this._isExpandedSubscription=i.isOpenChange.pipe((0,d.O)(i.isOpen)).subscribe(p=>this.ariaExpanded=p))}_setAriaAttributes(i){this.ariaHasPopup=!!i,this.ariaControls=i?i.id:null}_unsubscribeExpandedListener(){this._isExpandedSubscription&&this._isExpandedSubscription.unsubscribe()}}return m.\u0275fac=function(i){return new(i||m)(u.Y36(u.SBq))},m.\u0275dir=u.lG2({type:m,selectors:[["","fdPopoverTrigger",""],["","fd-popover-trigger",""]],hostVars:3,hostBindings:function(i,p){2&i&&u.uIk("aria-haspopup",p.ariaHasPopup)("aria-controls",p.ariaControls)("aria-expanded",p.ariaExpanded)},inputs:{popover:["fdPopoverTrigger","popover"]}}),m})()},86946:(x,s,n)=>{n.r(s),n.d(s,{FacetDocsModule:()=>ne});var d=n(77152),u=n(13246),D=n(3723),m=n(80686),C=n(83537),i=n(69109),p=n(69037),A=n(83980),U=n(23023),r=n(370),I=n(50592),e=n(5e3),L=n(7754),y=n(82861),S=n(5592),P=n(49505),b=n(82551),F=n(37447),g=n(44368),T=n(62878),Z=n(5982),l=n(12021),f=n(15554),v=n(22221),h=n(74537),M=n(79754),N=n(94311);let E=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-facet-group-example"]],decls:31,vars:11,consts:[["ariaLabel","Facet Group"],["type","form","facetTitle","Technical Data","id","facet1"],["fd-form-label","","for","form-value-10",3,"colon"],["text","Each","id","form-value-10"],["fd-form-label","","for","form-value-11",3,"colon"],["text","23.24 Centimeter","id","form-value-11"],["fd-form-label","","for","form-value-12",3,"colon"],["text","86.1 Centimeter","id","form-value-12"],["fd-form-label","","for","form-value-13",3,"colon"],["text","20.8 Centimeter","id","form-value-13"],["type","rating-indicator","facetTitle","Rating Indicator","subtitle","6 reviews","id","facet2"],["size","md","dynamicTextIndicator","of",3,"value"],["type","image","id","facet3"],["title","Nature","image","http://picsum.photos/id/1018/400","size","l"],["type","key-value","facetTitle","Status","id","facet4"],["fd-object-status","","status","positive","label","Delivery","title","Delivery","aria-label","Delivery",3,"large"],["type","key-value","facetTitle","Delivery Time","id","facet5"],["fd-object-status","","status","critical","label","12 days","glyph","shipping-status","title","12 days","aria-label","12 days",3,"large"],["type","key-value","facetTitle","Assembly Option","id","facet6"],["fd-object-status","","status","negative","label","To be selected","title","To be selected","aria-label","To be selected",3,"large"],["type","key-value","facetTitle","Pricing","id","facet7"],["unit","EUR","status","informative",3,"number","large","decimal"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-facet-group",0)(1,"fd-facet",1)(2,"fd-facet-content")(3,"label",2),e._uU(4,"Base unit"),e.qZA(),e._UZ(5,"fd-text",3),e.qZA(),e.TgZ(6,"fd-facet-content")(7,"label",4),e._uU(8,"Length"),e.qZA(),e._UZ(9,"fd-text",5),e.qZA(),e.TgZ(10,"fd-facet-content")(11,"label",6),e._uU(12,"Width"),e.qZA(),e._UZ(13,"fd-text",7),e.qZA(),e.TgZ(14,"fd-facet-content")(15,"label",8),e._uU(16,"Height"),e.qZA(),e._UZ(17,"fd-text",9),e.qZA()(),e.TgZ(18,"fd-facet",10)(19,"fd-facet-content"),e._UZ(20,"fd-rating-indicator",11),e.qZA()(),e.TgZ(21,"fd-facet",12),e._UZ(22,"fd-avatar",13),e.qZA(),e.TgZ(23,"fd-facet",14),e._UZ(24,"span",15),e.qZA(),e.TgZ(25,"fd-facet",16),e._UZ(26,"span",17),e.qZA(),e.TgZ(27,"fd-facet",18),e._UZ(28,"span",19),e.qZA(),e.TgZ(29,"fd-facet",20),e._UZ(30,"fd-object-number",21),e.qZA()()),2&o&&(e.xp6(3),e.Q6J("colon",!0),e.xp6(4),e.Q6J("colon",!0),e.xp6(4),e.Q6J("colon",!0),e.xp6(4),e.Q6J("colon",!0),e.xp6(5),e.Q6J("value",2.51),e.xp6(4),e.Q6J("large",!0),e.xp6(2),e.Q6J("large",!0),e.xp6(2),e.Q6J("large",!0),e.xp6(2),e.Q6J("number",100.88)("large",!0)("decimal",2))},dependencies:[b.h,F.x,g.k,T.T,Z.A,l.h,f.Q,v.M,h.T],encapsulation:2,changeDetection:0}),t})(),B=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-form-facet-example"]],decls:17,vars:4,consts:[["type","form","facetTitle","Technical Data","id","formFacetExample"],["fd-form-label","","for","form-value-1",3,"colon"],["text","Each","id","form-value-1"],["fd-form-label","","for","form-value-2",3,"colon"],["text","23.24 Centimeter","id","form-value-2"],["fd-form-label","","for","form-value-3",3,"colon"],["text","86.1 Centimeter","id","form-value-3"],["fd-form-label","","for","form-value-4",3,"colon"],["text","20.8 Centimeter","id","form-value-4"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-facet",0)(1,"fd-facet-content")(2,"label",1),e._uU(3,"Base unit"),e.qZA(),e._UZ(4,"fd-text",2),e.qZA(),e.TgZ(5,"fd-facet-content")(6,"label",3),e._uU(7,"Length"),e.qZA(),e._UZ(8,"fd-text",4),e.qZA(),e.TgZ(9,"fd-facet-content")(10,"label",5),e._uU(11,"Width"),e.qZA(),e._UZ(12,"fd-text",6),e.qZA(),e.TgZ(13,"fd-facet-content")(14,"label",7),e._uU(15,"Height"),e.qZA(),e._UZ(16,"fd-text",8),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("colon",!0),e.xp6(4),e.Q6J("colon",!0),e.xp6(4),e.Q6J("colon",!0),e.xp6(4),e.Q6J("colon",!0))},dependencies:[b.h,l.h,v.M,h.T],encapsulation:2,changeDetection:0}),t})(),k=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-form-link-facet-example"]],decls:13,vars:0,consts:[["type","form","facetTitle","Contact Information","id","formFacetLinkExample"],["id","fd-facet-icon-1","ariaLabel","Primary number","title","Primary number","glyph","call"],["fd-link","","aria-labelledby","fd-facet-icon-1 fd-facet-text-1","id","fd-facet-text-1","href","tel:+91 98765 43210"],["id","fd-facet-icon-2","ariaLabel","Secondary number","title","Secondary number","glyph","outgoing-call"],["fd-link","","aria-labelledby","fd-facet-icon-2 fd-facet-text-2","id","fd-facet-text-2","href","tel:+1 234 5678"],["id","fd-facet-icon-3","ariaLabel","Email","title","Email","glyph","email"],["fd-link","","aria-labelledby","fd-facet-icon-3 fd-facet-text-3","id","fd-facet-text-3","href","mailto:john.miller@company.com"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-facet",0)(1,"fd-facet-content"),e._UZ(2,"fd-icon",1),e.TgZ(3,"a",2),e._uU(4," +91 98765 43210 "),e.qZA()(),e.TgZ(5,"fd-facet-content"),e._UZ(6,"fd-icon",3),e.TgZ(7,"a",4),e._uU(8," +1 234 5678 "),e.qZA()(),e.TgZ(9,"fd-facet-content"),e._UZ(10,"fd-icon",5),e.TgZ(11,"a",6),e._uU(12,"john.miller@company.com "),e.qZA()()())},dependencies:[M.o,N.N,l.h,v.M],encapsulation:2,changeDetection:0}),t})(),G=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-image-facet-example"]],decls:5,vars:0,consts:[["ariaLabel","Image Facets"],["type","image"],["title","Nature","image","http://picsum.photos/id/1018/400","size","l"],["title","Money","size","l","glyph","money-bills"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-facet-group",0)(1,"fd-facet",1),e._UZ(2,"fd-avatar",2),e.qZA(),e.TgZ(3,"fd-facet",1),e._UZ(4,"fd-avatar",3),e.qZA()())},dependencies:[Z.A,l.h,f.Q],encapsulation:2,changeDetection:0}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-key-value-facet-example"]],decls:9,vars:6,consts:[["ariaLabel","Key-Value Facets"],["type","key-value","facetTitle","Status","id","kvFacet10"],["fd-object-status","","status","positive","label","Delivery","title","Delivery","aria-label","Delivery",3,"large"],["type","key-value","facetTitle","Delivery Time","id","kvFacet12"],["fd-object-status","","status","critical","label","12 days","glyph","shipping-status","title","12 days","aria-label","12 days",3,"large"],["type","key-value","facetTitle","Assembly Option","id","kvFacet13"],["fd-object-status","","status","negative","label","To be selected","title","To be selected","aria-label","To be selected",3,"large"],["type","key-value","facetTitle","Pricing","id","kvFacet14"],["unit","EUR","status","informative",3,"number","large","decimal"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-facet-group",0)(1,"fd-facet",1),e._UZ(2,"span",2),e.qZA(),e.TgZ(3,"fd-facet",3),e._UZ(4,"span",4),e.qZA(),e.TgZ(5,"fd-facet",5),e._UZ(6,"span",6),e.qZA(),e.TgZ(7,"fd-facet",7),e._UZ(8,"fd-object-number",8),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("large",!0),e.xp6(2),e.Q6J("large",!0),e.xp6(2),e.Q6J("large",!0),e.xp6(2),e.Q6J("number",100.88)("large",!0)("decimal",2))},dependencies:[g.k,T.T,l.h,f.Q],encapsulation:2,changeDetection:0}),t})(),w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-key-value-facet-alignment-example"]],decls:9,vars:7,consts:[["ariaLabel","Key-Value Facets Alignment"],["type","key-value","facetTitle","Status","id","kvFacet20"],["fd-object-status","","status","positive","label","Delivery","title","Delivery","aria-label","Delivery",3,"large"],["type","key-value","facetTitle","Delivery Time","id","kvFacet22"],["fd-object-status","","status","critical","label","12 days","glyph","shipping-status","title","12 days","aria-label","12 days",3,"large"],["type","key-value","facetTitle","Assembly Option","id","kvFacet23"],["fd-object-status","","status","negative","label","To be selected","title","To be selected","aria-label","To be selected",3,"large"],["type","key-value","facetTitle","Pricing","id","kvFacet24",3,"alignEnd"],["unit","EUR","status","informative",3,"number","large","decimal"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-facet-group",0)(1,"fd-facet",1),e._UZ(2,"span",2),e.qZA(),e.TgZ(3,"fd-facet",3),e._UZ(4,"span",4),e.qZA(),e.TgZ(5,"fd-facet",5),e._UZ(6,"span",6),e.qZA(),e.TgZ(7,"fd-facet",7),e._UZ(8,"fd-object-number",8),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("large",!0),e.xp6(2),e.Q6J("large",!0),e.xp6(2),e.Q6J("large",!0),e.xp6(1),e.Q6J("alignEnd",!0),e.xp6(1),e.Q6J("number",100.88)("large",!0)("decimal",2))},dependencies:[g.k,T.T,l.h,f.Q],encapsulation:2,changeDetection:0}),t})(),V=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-rating-indicator-facet-example"]],decls:3,vars:1,consts:[["type","rating-indicator","facetTitle","Rating Indicator","subtitle","6 reviews","id","facet12"],["size","md","dynamicTextIndicator","of",3,"value"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-facet",0)(1,"fd-facet-content"),e._UZ(2,"fd-rating-indicator",1),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("value",2.51))},dependencies:[F.x,l.h,v.M],encapsulation:2,changeDetection:0}),t})(),H=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-custom-facet-example"]],decls:12,vars:1,consts:[["ariaLabel","Custom Facets"],["type","custom","facetTitle","Product Description",1,"fd-docs-custom-facet-paragraph"],[1,"fd-docs-custom-facet-paragraph-alignment"],["fd-object-status","","status","positive","glyph","message-success","label","In Stock","aria-label","In stock",3,"large"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-facet-group",0)(1,"fd-facet",1)(2,"div",2),e._uU(3," - Top-design high-quality coffee mug - ideal for a comforting moment; Pack: 6; "),e._UZ(4,"br"),e._uU(5," - Material: Porcelain - durable dishwasher and microwave-safe porcelain that cleans easily and is ideal for everyday service. "),e._UZ(6,"br"),e._uU(7," - Comes in two bright colors. "),e._UZ(8,"br")(9,"br")(10,"br")(11,"span",3),e.qZA()()()),2&o&&(e.xp6(11),e.Q6J("large",!0))},dependencies:[g.k,l.h,f.Q],styles:[".fd-docs-custom-facet-paragraph[_ngcontent-%COMP%]{width:50%}.fd-docs-custom-facet-paragraph-alignment[_ngcontent-%COMP%]{display:flex;flex-direction:column}"],changeDetection:0}),t})(),W=(()=>{class t{constructor(){this.facetGroup=[{language:"html",code:(0,r.getAssetFromModuleAssets)("facet-group-example.component.html"),fileName:"facet-group-example"}],this.formFacet=[{language:"html",code:(0,r.getAssetFromModuleAssets)("form-facet-example.component.html"),fileName:"form-facet-example"}],this.formLinkFacet=[{language:"html",code:(0,r.getAssetFromModuleAssets)("form-link-facet-example.component.html"),fileName:"form-link-facet-example"}],this.keyValueFacet=[{language:"html",code:(0,r.getAssetFromModuleAssets)("key-value-facet-example.component.html"),fileName:"key-value-facet-example"}],this.keyValueFacetAlignment=[{language:"html",code:(0,r.getAssetFromModuleAssets)("key-value-facet-alignment-example.component.html"),fileName:"key-value-facet-alignment-example"}],this.imageFacet=[{language:"html",code:(0,r.getAssetFromModuleAssets)("image-facet-example.component.html"),fileName:"image-facet-example"}],this.ratingIndicatorFacet=[{language:"html",code:(0,r.getAssetFromModuleAssets)("rating-indicator-facet-example.component.html"),fileName:"rating-indicator-facet-example"}],this.customFacet=[{language:"html",code:(0,r.getAssetFromModuleAssets)("custom-facet-example.component.html"),fileName:"custom-facet-example"},{language:"typescript",code:(0,r.getAssetFromModuleAssets)("custom-facet-example.component.ts"),fileName:"custom-facet-example",component:"CustomFacetExampleComponent"}]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-facet"]],decls:62,vars:8,consts:[["id","group","componentName","facets"],[3,"exampleFiles"],["id","form","componentName","facets"],["id","form-link","componentName","facets"],["id","key-value","componentName","facets"],["id","key-value-alignment","componentName","facets"],["id","image","componentName","facets"],["id","rating-indicator","componentName","facets"],["id","custom","componentName","facets"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Facets as a Group "),e.qZA(),e._UZ(2,"description"),e.TgZ(3,"component-example"),e._UZ(4,"fd-facet-group-example"),e.qZA(),e._UZ(5,"code-example",1),e.TgZ(6,"fd-docs-section-title",2),e._uU(7," Form Facet "),e.qZA(),e._UZ(8,"description"),e.TgZ(9,"component-example"),e._UZ(10,"fd-form-facet-example"),e.qZA(),e._UZ(11,"code-example",1),e.TgZ(12,"fd-docs-section-title",3),e._uU(13," Form Facets with Link "),e.qZA(),e._UZ(14,"description"),e.TgZ(15,"component-example"),e._UZ(16,"fd-form-link-facet-example"),e.qZA(),e._UZ(17,"code-example",1),e.TgZ(18,"fd-docs-section-title",4),e._uU(19," Key-Value Facet "),e.qZA(),e._UZ(20,"description"),e.TgZ(21,"component-example"),e._UZ(22,"fd-key-value-facet-example"),e.qZA(),e._UZ(23,"code-example",1),e.TgZ(24,"fd-docs-section-title",5),e._uU(25," Key-Value facet with different alignment\n"),e.qZA(),e.TgZ(26,"description"),e._uU(27," Any facet can be rearranged to have itself aligned to the end by use of "),e.TgZ(28,"code"),e._uU(29,'[alignEnd]="true"'),e.qZA(),e._uU(30," property. The example shows how the facet displaying `Pricing` can be made to appear to the other end using "),e.TgZ(31,"code"),e._uU(32,'[alignEnd]="true"'),e.qZA(),e._uU(33,":\n"),e.qZA(),e.TgZ(34,"component-example"),e._UZ(35,"fd-key-value-facet-alignment-example"),e.qZA(),e._UZ(36,"code-example",1),e.TgZ(37,"fd-docs-section-title",6),e._uU(38," Image Facet "),e.qZA(),e._UZ(39,"description"),e.TgZ(40,"component-example"),e._UZ(41,"fd-image-facet-example"),e.qZA(),e._UZ(42,"code-example",1),e.TgZ(43,"fd-docs-section-title",7),e._uU(44," Rating Indicator Facet "),e.qZA(),e._UZ(45,"description"),e.TgZ(46,"component-example"),e._UZ(47,"fd-rating-indicator-facet-example"),e.qZA(),e._UZ(48,"code-example",1),e.TgZ(49,"fd-docs-section-title",8),e._uU(50," Custom Facet "),e.qZA(),e.TgZ(51,"description"),e._uU(52," Use "),e.TgZ(53,"code"),e._uU(54,'type="custom"'),e.qZA(),e._uU(55," and add custom content within "),e.TgZ(56,"code"),e._uU(57,"fd-facet"),e.qZA(),e._uU(58,". "),e.qZA(),e.TgZ(59,"component-example"),e._UZ(60,"fd-custom-facet-example"),e.qZA(),e._UZ(61,"code-example",1)),2&o&&(e.xp6(5),e.Q6J("exampleFiles",c.facetGroup),e.xp6(6),e.Q6J("exampleFiles",c.formFacet),e.xp6(6),e.Q6J("exampleFiles",c.formLinkFacet),e.xp6(6),e.Q6J("exampleFiles",c.keyValueFacet),e.xp6(13),e.Q6J("exampleFiles",c.keyValueFacetAlignment),e.xp6(6),e.Q6J("exampleFiles",c.imageFacet),e.xp6(6),e.Q6J("exampleFiles",c.ratingIndicatorFacet),e.xp6(13),e.Q6J("exampleFiles",c.customFacet))},dependencies:[L.E,y.w,S.k,P.O,E,B,k,Q,w,G,V,H],encapsulation:2}),t})();var Y=n(10728),$=n(38631),ee=n(48208),te=n(62448);const oe=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-facet-header"]],decls:14,vars:0,consts:[["module","FacetModule","subPackage","facets"]],template:function(o,c){1&o&&(e.TgZ(0,"fd-doc-page")(1,"header"),e._uU(2,"Facets"),e.qZA(),e.TgZ(3,"description"),e._uU(4," Facets can be used as a standalone component or linked to another component. Facets are usually a part of the "),e.TgZ(5,"b"),e._uU(6,"Object Page"),e.qZA(),e._uU(7," or "),e.TgZ(8,"b"),e._uU(9,"Dynamic Page"),e.qZA(),e._uU(10," header content. Each facet adapts its size to the content and makes optimal use of the space without truncating the texts. If the facets do not all fit on one line, those on the right wrap to the line below. "),e.qZA(),e._UZ(11,"br")(12,"import",0)(13,"fd-header-tabs"),e.qZA())},dependencies:[Y.k,$.G,ee.c,y.w,te.i],encapsulation:2}),t})(),children:[{path:"",component:W},{path:"api",component:r.ApiComponent,data:{content:I.X.facets}}]}];let ne=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[(0,r.currentComponentProvider)("facets")],imports:[d.Bz.forChild(oe),r.SharedDocumentationPageModule,A.eR,p.px,i.t,u.F,D.eV,m.Q,C.LO,U.Y,d.Bz]}),t})()},50592:(x,s,n)=>{n.d(s,{X:()=>d});const d={actionBar:["ActionBarComponent","ActionBarTitleComponent","ActionBarActionsDirective","ActionBarBackDirective","ActionBarDescriptionDirective","ActionBarHeaderDirective","ActionBarMobileDirective"],actionSheet:["ActionSheetComponent","ActionSheetControlComponent","ActionSheetItemComponent","ActionSheetBodyComponent"],alert:["AlertComponent","AlertConfig","AlertService","AlertRef"],avatar:["AvatarComponent"],avatarGroup:["AvatarGroupComponent","AvatarGroupItemDirective","AvatarGroupFocusableAvatarDirective","AvatarGroupPopoverControlDirective","AvatarGroupOverflowBodyDirective","AvatarGroupOverflowItemDirective","AvatarGroupOverflowButtonDirective","AvatarGroupOverflowButtonTextDirective"],initialFocus:["InitialFocusDirective"],bar:["BarComponent","BarElementDirective","BarLeftDirective","BarMiddleDirective","BarRightDirective"],card:["CardComponent","CardHeaderComponent","CardTitleDirective","CardSubtitleDirective","CardSecondSubtitleDirective","CardContentComponent","CardLoaderComponent","CardKpiHeaderComponent","CardKpiValueDirective","CardKpiScaleIconDirective","CardKpiScaleTextDirective","CardKpiAnalyticsDirective","CardKpiAnalyticsLabelDirective","CardKpiAnalyticsContentDirective"],dynamicSideContent:["DynamicSideContentComponent","DynamicSideContentSideComponent","DynamicSideContentMainComponent"],breadcrumb:["BreadcrumbComponent","BreadcrumbItemDirective"],busyIndicator:["BusyIndicatorComponent","BusyIndicatorExtendedDirective"],button:["ButtonComponent"],segmentedButton:["SegmentedButtonComponent"],calendar:["CalendarComponent","CalendarDayViewComponent","CalendarMonthViewComponent","CalendarYearViewComponent","CalendarHeaderViewComponent","CalendarI18nLabels","FdDate","FdDatetimeAdapter"],carousel:["CarouselComponent","CarouselItemComponent","CarouselService"],combobox:["ComboboxComponent"],checkbox:["CheckboxComponent"],oldContentDensity:[],contentDensity:["ContentDensityDirective","GlobalContentDensityService","ContentDensityStorage"],datePicker:["DatePickerComponent","FdDate","FdDatetimeAdapter"],datetimePicker:["DatetimePickerComponent","FdDate","FdDatetimeAdapter"],dynamicPage:["DynamicPageComponent","DynamicPageSubheaderComponent","DynamicPageHeaderComponent","DynamicPageTitleContentComponent","DynamicPageLayoutActionsComponent","DynamicPageGlobalActionsComponent","DynamicPageFooterComponent","DynamicPageContentComponent"],facets:["FacetComponent","FacetGroupComponent"],feedInput:["FeedInputComponent","FeedInputTextareaDirective","FeedInputButtonDirective","FeedInputAvatarDirective"],feedListItem:["FeedListComponent","FeedListItemComponent"],fileUploader:["FileUploaderComponent","FileUploaderSelectDirective","FileUploaderDragndropDirective","FileUploaderService"],fixedCardLayout:["FixedCardLayoutComponent","CardDefinitionDirective","FixedCardLayoutItemComponent"],flexibleColumnLayout:["FlexibleColumnLayoutComponent"],form:["FormControlComponent","FormGroupComponent","FormItemComponent","FormLabelComponent","FormHeaderComponent","FormLegendDirective","FormMessageComponent","FormSetDirective","FormInputMessageGroupComponent"],formattedText:["FormattedTextComponent"],formMessage:["FormInputMessageGroupComponent"],globalConfig:[],icon:["IconComponent"],illustratedMessage:["IllustratedMessageComponent"],infoLabel:["InfoLabelComponent"],infiniteScroll:["InfiniteScrollDirective"],inlineHelp:["InlineHelpDirective"],inputGroup:["InputGroupComponent"],layoutGrid:["LayoutGridComponent","LayoutGridColDirective","LayoutGridRowDirective"],layoutPanel:["LayoutPanelComponent","LayoutPanelActionsComponent","LayoutPanelBodyComponent","LayoutPanelDescriptionComponent","LayoutPanelFiltersComponent","LayoutPanelFooterComponent","LayoutPanelHeaderComponent","LayoutPanelHeadComponent","LayoutPanelTitleDirective"],link:["LinkComponent"],list:["ListComponent","ListItemDirective","ListLabelDirective","ListTitleDirective","ListSecondaryDirective","ListGroupHeaderDirective","ListIconDirective","ListFooterDirective","ListMessageDirective","ListNavigationItemArrowDirective","ListNavigationItemTextDirective","ListNavigationItemComponent"],menu:["MenuAddonDirective","MenuComponent","MenuGroupComponent","MenuItemDirective","MenuItemAddonDirective","MenuListDirective","MenuTitleDirective","MenuKeyboardService"],messageStrip:["MessageStripComponent"],messageToast:["MessageToastComponent","MessageToastConfig","MessageToastService","MessageToastRef"],microProcessFlow:["MicroProcessFlowComponent","MicroProcessFlowItemComponent","MicroProcessFlowIconComponent"],momentDatetimeAdapter:["MomentDatetimeAdapter"],dayjsDatetimeAdapter:["DayjsDatetimeAdapter"],dialog:["DialogService","DialogContainerComponent","DialogTitleDirective","DialogCloseButtonDirective","DialogDecisiveButtonDirective","DialogConfig","DialogPosition","DialogBodyComponent","DialogHeaderComponent","DialogFooterComponent","DialogRef"],multiInput:["MultiInputComponent"],messageBox:["MessageBoxRef","MessageBoxConfig","MessageBoxContent","MessageBoxService","MessageBoxComponent","MessageBoxBodyComponent","MessageBoxDecisiveButton","MessageBoxHeaderComponent","MessageBoxFooterComponent","MessageBoxDefaultComponent","MessageBoxSemanticIconComponent","MessageBoxContainerComponent","MessageBoxFooterButtonComponent"],notification:["NotificationTitleDirective","NotificationIndicatorDirective","NotificationParagraphDirective","NotificationFooterContentDirective","NotificationSeparatorDirective","NotificationLimitTitleDirective","NotificationLimitDescriptionDirective","NotificationActionsComponent","NotificationContentComponent","NotificationLimitComponent","NotificationGroupHeaderComponent","NotificationGroupComponent","NotificationGroupListComponent","NotificationComponent","NotificationHeaderComponent","NotificationBodyComponent","NotificationFooterComponent","NotificationContainer","NotificationConfig","NotificationRef"],objectIdentifier:["ObjectIdentifierComponent"],objectMarker:["ObjectMarkerComponent"],objectStatus:["ObjectStatusModule","ObjectStatusComponent"],pagination:["PaginationComponent","PaginationModel","PaginationService"],panel:["PanelComponent","PanelTitleDirective"],popover:["PopoverComponent","PopoverBodyComponent","PopoverControlComponent","PopoverDropdownComponent","PopoverBodyHeaderDirective","PopoverBodySubheaderDirective","PopoverBodyFooterDirective"],objectNumber:["ObjectNumberComponent"],productSwitch:["ProductSwitchComponent","ProductSwitchItem"],progressIndicator:["ProgressIndicatorComponent"],quickView:["QuickViewComponent","QuickViewTitleComponent","QuickViewSubheaderComponent","QuickViewSubheaderTitleComponent","QuickViewSubheaderSubtitleComponent","QuickViewGroupComponent","QuickViewGroupTitleComponent","QuickViewGroupItemComponent","QuickViewGroupItemLabelComponent","QuickViewGroupItemContentComponent","QuickViewGroupItemContentElementDirective"],scrollSpy:["ScrollSpyDirective"],select:["SelectComponent","OptionComponent"],shellbar:["ProductMenuComponent","ShellbarComponent","ShellbarActionComponent","ShellbarActionsComponent","ShellbarLogoComponent","ShellbarSubtitleComponent","ShellbarTitleComponent"],sideNavigation:["SideNavigationComponent","SideNavigationModel","SideNavigationUtilityDirective","SideNavigationMainDirective","NestedListDirective","NestedListPopoverComponent","NestedListHeaderDirective","NestedListIconDirective","NestedListItem","NestedListModel","NestedListLink","NestedItemService"],splitButton:["SplitButtonComponent","SplitButtonMenuDirective","SplitButtonActionTitle"],table:["TableBodyDirective","TableCellDirective","TableHeaderDirective","TableRowDirective","TableComponent","TableResponsiveWrapperDirective","TableWrapperComponent","ColumnSortableDirective"],tabs:["TabListComponent","TabPanelComponent","TabTitleDirective","TabNavComponent","TabLinkDirective","TabItemDirective","TabTagDirective","TabIconComponent","TabCountDirective","TabLabelDirective","TabProcessDirective","TabHeaderDirective","TabCounterHeaderDirective","TabProcessIconDirective","TabItemExpandComponent","TabSeparator","TabInfo"],text:["TextComponent"],tile:["TileComponent","TileHeaderDirective","TileContentDirective","TileFooterDirective","TileTitleDirective","TileSubtitleDirective","TileSectionDirective","TileRefreshDirective","TileFooterTextDirective","TileHeaderContentDirective","TileProfileImgDirective","TileLogoDirective","TileContentBylineDirective","TileContentTextDirective","TileBackgroundImgDirective","TileToggleDirective","TileContainerDirective","TilePageIndicatorDirective","TileDotDirective","TileActionCloseDirective","TileActionIndicatorDirective","TileTitleContainerDirective","TileActionContainerDirective","TileSlideContainerDirective","NumericContentDirective","NumericContentKpiContainerDirective","NumericContentKpiDirective","NumericContentLaunchIconContainerDirective","NumericContentLaunchIconDirective","NumericContentScaleArrowDirective","NumericContentScaleContainerDirective","NumericContentScaleDirective","NumericContentScaleTextDirective"],time:["TimeComponent","TimeI18n","TimeColumnComponent"],timePicker:["TimePickerComponent","FdDate","FdDatetimeAdapter"],title:["TitleComponent"],truncate:["TruncateDirective"],switch:["SwitchComponent"],stepInput:["StepInputComponent"],slider:["SliderComponent"],splitter:["SplitterComponent","SplitterPaneContainerComponent","SplitterSplitPaneComponent"],token:["TokenComponent","TokenizerComponent"],toolbar:["ToolbarComponent","ToolbarContentComponent","ToolbarOverflowContentComponent","ToolbarSpacerComponent","ThemesService"],tree:["TreeComponent","TreeChildComponent","TreeRowObjectModel"],ratingIndicator:["RatingIndicatorComponent"],wizard:["WizardComponent"],gridList:["GridListComponent","GridListItemComponent","GridListTitleBarComponent","GridListFilterBarComponent","GridListMoreBtnComponent","GridListFooterComponent","GridListItemFooterBarComponent","GridListItemToolbarComponent","GridListGroupHeaderComponent"],statusIndicator:["StatusIndicatorComponent"],messagePage:["MessagePageComponent","MessagePageActionsComponent","MessagePageMoreComponent","MessagePageTitleComponent","MessagePageSubtitleComponent"],resizableCardLayout:["ResizableCardLayoutComponent","ResizableCardItemComponent"],verticalNavigation:["VerticalNavigationComponent","VerticalNavigationMainNavigationComponent","VerticalNavigationGroupHeaderDirective"],uploadCollection:["UploadCollectionComponent","UploadCollectionButtonGroupComponent","UploadCollectionFormItemComponent","UploadCollectionItemDirective","UploadCollectionThumbnailDirective","UploadCollectionTitleDirective","UploadCollectionDescriptionDirective","UploadCollectionTextSeparatorDirective","UploadCollectionStatusGroupDirective","UploadCollectionTitleContainerDirective"],timeline:["TimelineComponent","TimelineNodeDefDirective","TimelineNodeOutletDirective","TimelineNodeBodyComponent","TimelineNodeComponent","TimelineNodeHeaderInfoTitleDirective","TimelineNodeHeaderInfoTextDirective","TimelineNodeActionDirective","TimelineHeaderInfoSubTitleDirective"],scrollbar:["ScrollbarComponent"],theming:["ThemingService","BaseThemingConfig"],overflowLayout:["OverflowLayoutComponent","OverflowItemRefDirective","OverflowExpandDirective","OverflowLayoutItemDirective","OverflowItemContainerRefDirective","OverflowLayoutPopoverContentDirective"]}}}]);