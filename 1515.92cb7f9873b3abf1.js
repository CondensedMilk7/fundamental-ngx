"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1515],{86418:(Z,u,o)=>{o.d(u,{X:()=>d});const d={actionbar:["ActionBarComponent","ActionButtonGroupComponent"],button:["ButtonComponent"],checkbox:["CheckboxComponent"],formGenerator:["FormGeneratorComponent","FormGeneratorService","DynamicFormControlDirective","DynamicFormControlFieldDirective"],checkboxGroup:["CheckboxGroupComponent"],datePicker:["PlatformDatetimePickerComponent"],datetimePicker:["PlatformDatetimePickerComponent"],dynamicPage:["DynamicPageComponent","DynamicPageTitleComponent","DynamicPageKeyInfoComponent","DynamicPageHeaderComponent","DynamicPageContentComponent"],formContainer:["FormGroupComponent","FormFieldComponent","FormFieldGroupComponent"],infoLabel:["InfoLabelComponent"],input:["InputComponent"],link:["LinkComponent"],menu:["MenuComponent","MenuItemComponent","MenuTriggerDirective"],menuButton:["MenuButtonComponent"],objectStatus:["ObjectStatusComponent"],objectMarker:["PlatformObjectMarkerComponent"],radioGroup:["RadioGroupComponent"],searchField:["SearchFieldComponent"],select:["SelectComponent","BaseSelect","SelectConfig"],splitMenuButton:["SplitMenuButtonComponent"],table:["TableComponent","TableColumnComponent","TableToolbarComponent","TableToolbarActionsComponent","FdpTableCell","FdpCellDef","FdpTableHeader","FdpHeaderCellDef","TableViewSettingsDialogComponent","TableViewSettingsFilterComponent","FdpViewSettingsFilterCustomDef","TableP13DialogComponent","TableP13SortComponent","TableP13FilterComponent","TableP13GroupComponent","TableP13ColumnsComponent","TableDataSource","TableDataProvider","PlatformTableCellResponsiveDirective"],textarea:["TextAreaComponent"],timePicker:["PlatformTimePickerComponent"],panel:["PanelComponent","PanelContentComponent","PanelActionsComponent","PanelConfig"],switch:["SwitchComponent"],stepInput:["NumberStepInputComponent","StepInputComponent","StepInputConfig"],inputGroup:["InputGroupConfig","InputGroupComponent","InputGroupAddonComponent","InputGroupInputComponent"],combobox:["ComboboxComponent","BaseCombobox","ComboboxConfig"],multiCombobox:["MultiComboboxComponent","BaseMultiCombobox"],list:["ListComponent","StandardListItemComponent","ListFooter","ListGroupHeader","ListConfig"],standardlistitem:["ListComponent","StandardListItemComponent","ListFooter","ListGroupHeader","ListConfig"],thumbnail:["ThumbnailComponent"],objectAttribute:["ObjectAttributeComponent"],actionlistitem:["ActionListItemComponent","ListComponent","ListConfig"],displaylistitem:["DisplayListItemComponent","ListComponent","ListFooter","ListGroupHeader","ListConfig"],objectlistitem:["ObjectListItemComponent","ListComponent","ListFooter","ListGroupHeader","ListConfig"],multiInput:["PlatformMultiInputComponent"],valueHelpDialog:["PlatformValueHelpDialogComponent","VhdFilterComponent","VhdSearchComponent"],feedInput:["FeedInputComponent"],fileUploader:["PlatformFileUploaderComponent"],uploadCollection:["UploadCollectionComponent","UploadCollectionDataProvider","UploadCollectionDataSource"],approvalFlow:["ApprovalFlowComponent"],slider:["SliderComponent"],footer:["PlatformFooterComponent"],wizardGenerator:["WizardGeneratorService","WizardDialogGeneratorService","WizardGeneratorComponent","DialogWizardGeneratorComponent","WizardBodyComponent","WizardGeneratorStepComponent","WizardSummaryStepComponent","WizardSummarySectionComponent"],iconTabBar:["IconTabBarComponent","IconTabBarTextTypeComponent","IconTabBarIconTypeComponent","IconTabBarProcessTypeComponent","IconTabBarFilterTypeComponent","IconTabBarPopoverComponent","TextTypePopoverComponent"],smartFilterBar:["SmartFilterBarComponent","SmartFilterBarConditionFieldComponent","SmartFilterBarConditionsDialogComponent","SmartFilterBarFieldDefinitionDirective","SmartFilterBarService","SmartFilterBarSubjectDirective","SmartFilterBarOptionsDataProvider","SmartFilterBarSettingsDialogComponent"],messagePopover:["MessagePopoverComponent","MessagePopoverFormWrapperComponent","MessageViewComponent","MessagePopoverFormItemDirective"]}},1515:(Z,u,o)=>{o.r(u),o.d(u,{PlatformStandardListItemDocsModule:()=>yt});var d=o(77152),r=o(370),I=o(86418),b=o(80265),B=o(34661),f=o(9866),t=o(5e3),A=o(10728),F=o(38631),_=o(48208),h=o(82861),P=o(62448);let U=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-standard-list-item-header"]],decls:24,vars:1,consts:[["routerLink","/core/list"],["module","PlatformListModule, StandardListItemModule","subPackage","list"],[3,"hasI18n"]],template:function(e,i){1&e&&(t.TgZ(0,"fd-doc-page")(1,"header"),t._uU(2,"Standard List Item"),t.qZA(),t.TgZ(3,"description")(4,"p"),t._uU(5," Standard List Item is used for less complex datasets (for example, when the user selects an item in a dialog). It consists of an optional image, a title, description, and a single info text, which can contain semantic information. This component makes use of "),t.TgZ(6,"a",0),t._uU(7,"list-item"),t.qZA(),t._uU(8," directive present in fundamental-ngx/core and has additional enhancements on top of it. "),t.qZA(),t.TgZ(9,"h3"),t._uU(10,"Platform specific enhancements:"),t.qZA(),t.TgZ(11,"ul")(12,"li"),t._uU(13," Standard-List-item is implemented as Angular component to hide complexity of dealing with HTML in order to deliver high-order component. "),t.qZA(),t.TgZ(14,"li"),t._uU(15," Alignment of sub elements title, icons, secondary, footer, group header, counter, navigation, multi-select are abstracted. "),t.qZA(),t.TgZ(16,"li"),t._uU(17,"Selection modes '', single and multi options along with features are provided."),t.qZA(),t.TgZ(18,"li"),t._uU(19,"Byline features are introduced."),t.qZA(),t.TgZ(20,"li"),t._uU(21,"Supports both imperative and declarative way of accepting the items for all the list variants."),t.qZA()()(),t._UZ(22,"import",1)(23,"fd-header-tabs",2),t.qZA()),2&e&&(t.xp6(23),t.Q6J("hasI18n",!0))},dependencies:[d.yS,A.k,F.G,_.c,h.w,P.i],encapsulation:2}),a})();var w=o(42215),W=o(7754),M=o(5592),J=o(49505),g=o(30514),s=o(4270),S=o(46596),x=o(17991),l=o(60026);const E=function(){return{text:"First text item in Byline (Standard text item)",title:"Separate text for a description title"}};let Q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-standard-list-item-example"]],decls:16,vars:12,consts:[[3,"hasByLine","navigated"],["groupHeaderTitle","Group header 1"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature",3,"title","description","unRead"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Second text item in Byline (Standard text item)",3,"title"],["fdCompact","",3,"noBorder","hasByLine","navigated"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)",3,"title"]],template:function(e,i){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Cozy Mode"),t.qZA(),t.TgZ(2,"fdp-list",0),t._UZ(3,"fdp-list-group-header",1)(4,"fdp-standard-list-item",2)(5,"fdp-standard-list-item",3),t.TgZ(6,"fdp-list-footer"),t._uU(7,"List footer"),t.qZA()(),t.TgZ(8,"h3"),t._uU(9,"Compact Mode"),t.qZA(),t.TgZ(10,"fdp-list",4),t._UZ(11,"fdp-list-group-header",1)(12,"fdp-standard-list-item",5)(13,"fdp-standard-list-item",3),t.TgZ(14,"fdp-list-footer"),t._uU(15,"List footer"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("hasByLine",!0)("navigated",!0),t.xp6(2),t.Q6J("title","List item 1")("description",t.DdM(11,E))("unRead",!0),t.xp6(1),t.Q6J("title","List item 2"),t.xp6(5),t.Q6J("noBorder",!0)("hasByLine",!0)("navigated",!0),t.xp6(2),t.Q6J("title","List item 1"),t.xp6(1),t.Q6J("title","List item 2"))},dependencies:[g.$,s.n,S.N,x.H,l.d],encapsulation:2}),a})(),N=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-non-byline-standard-list-item-example"]],decls:5,vars:5,consts:[[3,"noBorder"],[3,"title"]],template:function(e,i){1&e&&(t.TgZ(0,"fdp-list",0),t._UZ(1,"fdp-standard-list-item",1)(2,"fdp-standard-list-item",1)(3,"fdp-standard-list-item",1)(4,"fdp-standard-list-item",1),t.qZA()),2&e&&(t.Q6J("noBorder",!0),t.xp6(1),t.Q6J("title","Title 1"),t.xp6(1),t.Q6J("title","Title 2"),t.xp6(1),t.Q6J("title","Title 3"),t.xp6(1),t.Q6J("title","Title 4"))},dependencies:[s.n,l.d],encapsulation:2}),a})(),q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-standard-list-item-with-secondary-type-example"]],decls:6,vars:6,consts:[[3,"hasByLine"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","positive","statusType","positive",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","negative","statusType","negative",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","no status",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","informative","statusType","informative",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","critical","statusType","critical",3,"title"]],template:function(e,i){1&e&&(t.TgZ(0,"fdp-list",0),t._UZ(1,"fdp-standard-list-item",1)(2,"fdp-standard-list-item",2)(3,"fdp-standard-list-item",3)(4,"fdp-standard-list-item",4)(5,"fdp-standard-list-item",5),t.qZA()),2&e&&(t.Q6J("hasByLine",!0),t.xp6(1),t.Q6J("title","Title 1"),t.xp6(1),t.Q6J("title","Title 2"),t.xp6(1),t.Q6J("title","Title 3"),t.xp6(1),t.Q6J("title","Title 4"),t.xp6(1),t.Q6J("title","Title 5"))},dependencies:[s.n,l.d],encapsulation:2}),a})(),D=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-standard-list-item-with-inverted-secondary-type-example"]],decls:6,vars:11,consts:[[3,"hasByLine"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","positive","statusType","positive",3,"title","inverted"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","negative","statusType","negative",3,"title","inverted"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","no status",3,"title","inverted"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","informative","statusType","informative",3,"title","inverted"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","secondary","critical","statusType","critical",3,"title","inverted"]],template:function(e,i){1&e&&(t.TgZ(0,"fdp-list",0),t._UZ(1,"fdp-standard-list-item",1)(2,"fdp-standard-list-item",2)(3,"fdp-standard-list-item",3)(4,"fdp-standard-list-item",4)(5,"fdp-standard-list-item",5),t.qZA()),2&e&&(t.Q6J("hasByLine",!0),t.xp6(1),t.Q6J("title","Title 1")("inverted",!0),t.xp6(1),t.Q6J("title","Title 2")("inverted",!0),t.xp6(1),t.Q6J("title","Title 3")("inverted",!0),t.xp6(1),t.Q6J("title","Title 4")("inverted",!0),t.xp6(1),t.Q6J("title","Title 5")("inverted",!0))},dependencies:[s.n,l.d],encapsulation:2}),a})(),G=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-standard-list-item-with-group-header-example"]],decls:11,vars:7,consts:[[3,"hasByLine"],["groupHeaderTitle","Group header 1"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Second text item in Byline (Standard text item)",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Third text item in Byline (Standard text item)",3,"title"],["groupHeaderTitle","Group header 2"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Four text item in Byline (Standard text item)",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Five text item in Byline (Standard text item)",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Six text item in Byline (Standard text item)",3,"title"]],template:function(e,i){1&e&&(t.TgZ(0,"h5"),t._uU(1,"Declarative Approach"),t.qZA(),t.TgZ(2,"fdp-list",0),t._UZ(3,"fdp-list-group-header",1)(4,"fdp-standard-list-item",2)(5,"fdp-standard-list-item",3)(6,"fdp-standard-list-item",4)(7,"fdp-list-group-header",5)(8,"fdp-standard-list-item",6)(9,"fdp-standard-list-item",7)(10,"fdp-standard-list-item",8),t.qZA()),2&e&&(t.xp6(2),t.Q6J("hasByLine",!0),t.xp6(2),t.Q6J("title","Title 1"),t.xp6(1),t.Q6J("title","Title 2"),t.xp6(1),t.Q6J("title","Title 3"),t.xp6(2),t.Q6J("title","Title 6"),t.xp6(1),t.Q6J("title","Title 5"),t.xp6(1),t.Q6J("title","Title 4"))},dependencies:[s.n,x.H,l.d],encapsulation:2}),a})();var H=o(69808);function O(a,n){if(1&a&&t._UZ(0,"fdp-standard-list-item",3),2&a){const e=n.$implicit;t.Q6J("title",e.title)("avatarSrc",e.avatarSrc)("description",e.description)("avatarTitle",e.avatarTitle)("secondary",e.secondary)}}function z(a,n){if(1&a&&t._UZ(0,"fdp-standard-list-item",3),2&a){const e=n.$implicit;t.Q6J("title",e.title)("avatarSrc",e.avatarSrc)("description",e.description)("avatarTitle",e.avatarTitle)("secondary",e.secondary)}}let j=(()=>{class a{constructor(){this.items=[{title:"Item1 A laptop computer, sometimes called a notebook computer by manufacturers,is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently",avatarTitle:"nature",description:"First text item in Byline (Standard text item)A laptop computer, sometimes called a notebook computer by manufacturers,is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently",secondary:"Second text item in Byline (Can be semantic (Status) or not)A laptop computer, sometimes called a notebook computer by manufacturers,is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently",avatarSrc:"https://placeimg.com/400/400/nature"},{title:"Item2",avatarSrc:"https://placeimg.com/400/400/nature",avatarTitle:"nature",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)"},{title:"Item3",avatarSrc:"https://placeimg.com/400/400/nature",avatarTitle:"nature",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)"},{title:"Item4",avatarSrc:"https://placeimg.com/400/400/nature",avatarTitle:"nature",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)"}]}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-platform-standard-list-item-border-less-example"]],decls:8,vars:6,consts:[[3,"noBorder","hasByLine"],[3,"title","avatarSrc","description","avatarTitle","secondary",4,"ngFor","ngForOf"],["fdCompact","",3,"noBorder","hasByLine"],[3,"title","avatarSrc","description","avatarTitle","secondary"]],template:function(e,i){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Cozy Mode"),t.qZA(),t.TgZ(2,"fdp-list",0),t.YNc(3,O,1,5,"fdp-standard-list-item",1),t.qZA(),t.TgZ(4,"h3"),t._uU(5,"Compact Mode"),t.qZA(),t.TgZ(6,"fdp-list",2),t.YNc(7,z,1,5,"fdp-standard-list-item",1),t.qZA()),2&e&&(t.xp6(2),t.Q6J("noBorder",!0)("hasByLine",!0),t.xp6(1),t.Q6J("ngForOf",i.items),t.xp6(3),t.Q6J("noBorder",!0)("hasByLine",!0),t.xp6(1),t.Q6J("ngForOf",i.items))},dependencies:[H.sg,g.$,s.n,l.d],encapsulation:2}),a})(),X=(()=>{class a{constructor(){this.items=[{title:"Item1",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)"},{title:"Item2",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)"},{title:"Item3",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)"}]}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-platform-standard-list-item-with-footer-example"]],decls:8,vars:4,consts:[[3,"hasByLine"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Second text item in Byline (Standard text item)",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Third text item in Byline (Standard text item)",3,"title"]],template:function(e,i){1&e&&(t.TgZ(0,"h5"),t._uU(1,"Declarative Approach"),t.qZA(),t.TgZ(2,"fdp-list",0),t._UZ(3,"fdp-standard-list-item",1)(4,"fdp-standard-list-item",2)(5,"fdp-standard-list-item",3),t.TgZ(6,"fdp-list-footer"),t._uU(7,"List footer"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("hasByLine",!0),t.xp6(1),t.Q6J("title","Title 1"),t.xp6(1),t.Q6J("title","Title 2"),t.xp6(1),t.Q6J("title","Title 3"))},dependencies:[s.n,S.N,l.d],encapsulation:2}),a})();var y=o(39646),p=o(5126),v=o(52382),T=o(69859),C=o(58284),L=o(1214);function $(a,n){if(1&a&&t._UZ(0,"fdp-standard-list-item",4),2&a){const e=n.$implicit;t.Q6J("avatarSrc",e.img)("avatarTitle",e.imgInfo)("description",e.description)("secondary",e.info)("title",e.name)}}const V=[{img:"https://placeimg.com/400/400/nature",imgInfo:"nature",name:"Green",description:"First text item in Byline (Standard text item)",info:"Second text item in Byline (Can be semantic (Status) or not)"},{img:"https://placeimg.com/400/400/nature",imgInfo:"nature",name:"Yellow",description:"First text item in Byline (Standard text item)",info:"Second text item in Byline (Can be semantic (Status) or not)"},{img:"https://placeimg.com/400/400/nature",imgInfo:"nature",name:"Purple",description:"First text item in Byline (Standard text item)",info:"Second text item in Byline (Can be semantic (Status) or not)"},{img:"https://placeimg.com/400/400/nature",imgInfo:"nature",name:"Orange",description:"First text item in Byline (Standard text item)",info:"Second text item in Byline (Can be semantic (Status) or not)"}];class Y extends p.FW{constructor(){super()}fetch(n){let e=V;const i=n.get("name");if(i){const c=i.toLowerCase();e=e.filter(m=>m.name.toLowerCase().indexOf(c)>-1)}return(0,y.of)(e)}}let k=(()=>{class a{constructor(e,i){this._render=e,this._elementRef=i,this._dataSource=new p.oh(new Y),this._selectedItems=[],this.selectionMode="multi",this.selectionModeLabel=`${this.selectionMode} selectable`,this.ariaLabel=`0 Items selected ${this.selectionModeLabel}`}ngAfterViewInit(){const e=this._elementRef.nativeElement.querySelector("fd-toolbar");this._render.setAttribute(e,"tabindex","0"),this._render.setStyle(e,"outline","none")}_showItemInfo(e){this._selectedItems=e.selectedItems;const i=this._selectedItems.length;this.ariaLabel=i>1?`${i} Items selected ${this.selectionModeLabel}`:`1 Item selected ${this.selectionModeLabel}`}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.Qsj),t.Y36(t.SBq))},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-platform-standard-list-item-with-selection-example"]],decls:5,vars:9,consts:[["fdType","info",3,"active"],["role","status","fd-toolbar-label",""],[3,"selection","dataSource","selectionMode","ngModel","hasByLine","ariaMultiselectable","ariaLabel","ngModelChange","selectedItemChange"],[3,"avatarSrc","avatarTitle","description","secondary","title",4,"fdpItemDef"],[3,"avatarSrc","avatarTitle","description","secondary","title"]],template:function(e,i){1&e&&(t.TgZ(0,"fd-toolbar",0)(1,"label",1),t._uU(2),t.qZA()(),t.TgZ(3,"fdp-list",2),t.NdJ("ngModelChange",function(m){return i._selectedItems=m})("selectedItemChange",function(m){return i._showItemInfo(m)}),t.YNc(4,$,1,5,"fdp-standard-list-item",3),t.qZA()),2&e&&(t.Q6J("active",!0),t.xp6(2),t.hij("",i._selectedItems.length," : Items selected"),t.xp6(1),t.Q6J("selection",!0)("dataSource",i._dataSource)("selectionMode",i.selectionMode)("ngModel",i._selectedItems)("hasByLine",!0)("ariaMultiselectable",!0)("ariaLabel",i.ariaLabel))},dependencies:[v.JJ,v.On,T.n,C.f,s.n,L.z_,l.d],encapsulation:2}),a})(),R=(()=>{class a{constructor(){this.items=[{title:"Item1",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)"},{title:"Item2",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)",routerLink:"#"},{title:"Item3",description:"First text item in Byline (Standard text item)",secondary:"Second text item in Byline (Can be semantic (Status) or not)",routerLink:"#"}]}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-platform-standard-list-item-with-navigation-example"]],decls:6,vars:6,consts:[["selectionMode","multi",3,"navigationIndicator","selection","hasByLine"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","First text item in Byline (Standard text item)","ariaLabel","Navigate to get more information on",3,"title"],["avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","description","Second text item in Byline (Standard text item)","ariaLabel","Navigate to get more information on",3,"title"],["description","Third text item in Byline (Standard text item)","avatarSrc","https://placeimg.com/400/400/nature","avatarTitle","nature","ariaLabel","Navigate to get more information on",3,"title"]],template:function(e,i){1&e&&(t.TgZ(0,"h5"),t._uU(1,"Declarative Approach"),t.qZA(),t.TgZ(2,"fdp-list",0),t._UZ(3,"fdp-standard-list-item",1)(4,"fdp-standard-list-item",2)(5,"fdp-standard-list-item",3),t.qZA()),2&e&&(t.xp6(2),t.Q6J("navigationIndicator",!0)("selection",!0)("hasByLine",!0),t.xp6(1),t.Q6J("title","Title 1"),t.xp6(1),t.Q6J("title","Title 2"),t.xp6(1),t.Q6J("title","Title 3"))},dependencies:[s.n,l.d],encapsulation:2}),a})();function K(a,n){if(1&a&&t._UZ(0,"fdp-standard-list-item",4),2&a){const e=n.$implicit;t.Q6J("avatarSrc",e.img)("avatarTitle",e.imgInfo)("description",e.description)("secondary",e.info)("title",e.name)("name",e.name)("value",e.name)}}const tt=[{img:"https://placeimg.com/400/400/nature",imgInfo:"nature",name:"Green",description:"First text item in Byline (Standard text item)",info:"Second text item in Byline (Can be semantic (Status) or not)"},{img:"https://placeimg.com/400/400/nature",imgInfo:"nature",name:"Yellow",description:"First text item in Byline (Standard text item)",info:"Second text item in Byline (Can be semantic (Status) or not)"},{img:"https://placeimg.com/400/400/nature",imgInfo:"nature",name:"Purple",description:"First text item in Byline (Standard text item)",info:"Second text item in Byline (Can be semantic (Status) or not)"},{img:"https://placeimg.com/400/400/nature",imgInfo:"nature",name:"Orange",description:"First text item in Byline (Standard text item)",info:"Second text item in Byline (Can be semantic (Status) or not)"}];class et extends p.FW{constructor(){super()}fetch(n){let e=tt;const i=n.get("name");if(i){const c=i.toLowerCase();e=e.filter(m=>m.name.toLowerCase().indexOf(c)>-1)}return(0,y.of)(e)}}let at=(()=>{class a{constructor(e,i){this._render=e,this._elementRef=i,this._dataSource=new p.oh(new et),this._selectedItems=[]}ngAfterViewInit(){const e=this._elementRef.nativeElement.querySelector("fd-toolbar");this._render.setAttribute(e,"tabindex","0"),this._render.setStyle(e,"outline","none")}selectionChange(e){this._selectedItems=e.selectedItems}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.Qsj),t.Y36(t.SBq))},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-platform-standard-list-item-with-single-selection-example"]],decls:5,vars:8,consts:[["fdType","info",3,"active"],["role","status","fd-toolbar-label",""],["selectionMode","single",3,"selection","dataSource","selectedItems","hasByLine","ariaMultiselectable","ariaLabel","selectedItemChange"],[3,"avatarSrc","avatarTitle","description","secondary","title","name","value",4,"fdpItemDef"],[3,"avatarSrc","avatarTitle","description","secondary","title","name","value"]],template:function(e,i){1&e&&(t.TgZ(0,"fd-toolbar",0)(1,"label",1),t._uU(2),t.qZA()(),t.TgZ(3,"fdp-list",2),t.NdJ("selectedItemChange",function(m){return i.selectionChange(m)}),t.YNc(4,K,1,7,"fdp-standard-list-item",3),t.qZA()),2&e&&(t.Q6J("active",!0),t.xp6(2),t.hij("Selected item: ",(null==i._selectedItems||null==i._selectedItems[0]?null:i._selectedItems[0].name)||"none",""),t.xp6(1),t.Q6J("selection",!0)("dataSource",i._dataSource)("selectedItems",i._selectedItems)("hasByLine",!0)("ariaMultiselectable",!1)("ariaLabel",i._selectedItems?i._selectedItems+"selected":"0 Item selected"))},dependencies:[T.n,C.f,s.n,L.z_,l.d],encapsulation:2}),a})();const xt=[{path:"",component:U,children:[{path:"",component:(()=>{class a{constructor(){this.simpleSLI=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-example.component.html"),fileName:"platform-standard-list-item-example"}],this.sli=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-non-byline-standard-list-item-example.component.html"),fileName:"platform-non-byline-standard-list-item-example"}],this.borderLessSLI=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-border-less-example.component.html"),fileName:"platform-standard-list-item-border-less-example"},{language:"typescript",component:"PlatformStandardListItemBorderLessExampleComponent",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-border-less-example.component.ts"),fileName:"platform-standard-list-item-border-less-example"}],this.sliWithSecondaryType=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-secondary-type-example.component.html"),fileName:"platform-standard-list-item-with-secondary-type-example"}],this.sliWithInvertedSecondaryType=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-inverted-secondary-type-example.component.html"),fileName:"platform-standard-list-item-with-inverted-secondary-type-example"}],this.sliWithFooter=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-footer-example.component.html"),fileName:"platform-standard-list-item-with-footer-example"},{language:"typescript",component:"PlatformStandardListItemWithFooterExampleComponent",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-footer-example.component.ts"),fileName:"platform-standard-list-item-with-footer-example"}],this.sliWithGroupHeader=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-group-header-example.component.html"),fileName:"platform-standard-list-item-with-group-header-example"}],this.sliWithSelection=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-selection-example.component.html"),fileName:"platform-standard-list-item-with-selection-example"},{language:"typescript",component:"PlatformStandardListItemWithSelectionExampleComponent",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-selection-example.component.ts"),fileName:"platform-standard-list-item-with-selection-example"}],this.sliWithSingleSelection=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-single-selection-example.component.html"),fileName:"platform-standard-list-item-with-single-selection-example"},{language:"typescript",component:"PlatformListWithSingleSelectExampleComponent",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-single-selection-example.component.ts"),fileName:"platform-standard-list-item-with-single-selection-example"}],this.sliWithNavigation=[{language:"html",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-navigation-example.component.html"),fileName:"platform-standard-list-item-with-navigation-example"},{language:"typescript",component:"PlatformStandardListItemWithNavigationExampleComponent",code:(0,r.getAssetFromModuleAssets)("platform-standard-list-item-with-navigation-example.component.ts"),fileName:"platform-standard-list-item-with-navigation-example"}]}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-standard-list-item"]],decls:141,vars:10,consts:[["id","no-border","componentName","standard-list-item"],["routerLink","/platform/list"],[3,"exampleFiles"],["id","byline-no-border","componentName","standard-list-item"],["id","byline-footer","componentName","standard-list-item"],["id","byline-group-header","componentName","standard-list-item"],["id","states","componentName","standard-list-item"],["id","byline-secondary-text","componentName","standard-list-item"],["id","byline-selection","componentName","standard-list-item"],["id","byline-multi-selection","componentName","standard-list-item"],["id","byline-navigation-multi-selection","componentName","standard-list-item"],["id","byline-inverted-secondary-text","componentName","standard-list-item"]],template:function(e,i){1&e&&(t.TgZ(0,"fd-docs-section-title",0),t._uU(1," Standard List Item - Border Less\n"),t.qZA(),t.TgZ(2,"description"),t._uU(3,"A Standard list without border, setting "),t.TgZ(4,"code"),t._uU(5,'[noBorder]="true"'),t.qZA(),t._uU(6," will help to achieve this, by default its value is false. "),t._UZ(7,"br")(8,"br"),t.TgZ(9,"i"),t._uU(10," Note:This documentation shows with Byline and more examples without Byline are covered in "),t.TgZ(11,"a",1),t._uU(12,"list"),t.qZA(),t._uU(13," ."),t.qZA()(),t.TgZ(14,"component-example"),t._UZ(15,"fdp-non-byline-standard-list-item-example"),t.qZA(),t._UZ(16,"code-example",2)(17,"separator"),t.TgZ(18,"fd-docs-section-title",3),t._uU(19," Standard List Item (ByLine)- Border Less\n"),t.qZA(),t.TgZ(20,"description"),t._uU(21,"A Standard list without border, setting "),t.TgZ(22,"code"),t._uU(23,'[noBorder]="true"'),t.qZA(),t._uU(24," will help to achieve this, by default its value is false. "),t.TgZ(25,"code"),t._uU(26,'[hasByLine]="true"'),t.qZA(),t._uU(27," provides by line features.Below examples show both imperative and declarative way to bind the list items. Where we can pass list items individually where a number of items are less, and if the items are more we can pass the items in the array as well."),t.qZA(),t.TgZ(28,"component-example"),t._UZ(29,"fdp-platform-standard-list-item-border-less-example"),t.qZA(),t._UZ(30,"code-example",2)(31,"separator"),t.TgZ(32,"fd-docs-section-title",4),t._uU(33," Standard List Item (ByLine)- Footer\n"),t.qZA(),t.TgZ(34,"description"),t._uU(35,"Footer of Standard List. "),t.TgZ(36,"code"),t._uU(37,"<fdp-list-footer>"),t.qZA(),t._uU(38,' tag will help to set the footer for the list. Below examples show declarative way to use footer.[hasByLine]="true" provides by line features\n'),t.qZA(),t.TgZ(39,"component-example"),t._UZ(40,"fdp-platform-standard-list-item-with-footer-example"),t.qZA(),t._UZ(41,"code-example",2)(42,"separator"),t.TgZ(43,"fd-docs-section-title",5),t._uU(44," Standard List Item (ByLine)- Group header\n"),t.qZA(),t.TgZ(45,"description"),t._uU(46,"Standard List with group header. "),t.TgZ(47,"code"),t._uU(48,"<fdp-list-group-header>"),t.qZA(),t._uU(49," tag will help to set the Header for the group of list items.Below examples show declarative way to bind the list items and how to bind the group header to them."),t.TgZ(50,"code"),t._uU(51,'[hasByLine]="true"'),t.qZA(),t._uU(52," provides by line features.\n"),t.qZA(),t.TgZ(53,"component-example"),t._UZ(54,"fdp-standard-list-item-with-group-header-example"),t.qZA(),t._UZ(55,"code-example",2)(56,"separator"),t.TgZ(57,"fd-docs-section-title",6),t._uU(58," Standard List Item- Interactive state\n"),t.qZA(),t.TgZ(59,"description"),t._uU(60,"A simple list. Which shows interactive states of Standard List"),t.qZA(),t.TgZ(61,"component-example"),t._UZ(62,"fdp-standard-list-item-example"),t.qZA(),t._UZ(63,"code-example",2)(64,"separator"),t.TgZ(65,"fd-docs-section-title",7),t._uU(66," Standard List Item (ByLine)- Secondary text types\n"),t.qZA(),t.TgZ(67,"description"),t._uU(68," Property on list item "),t.TgZ(69,"code"),t._uU(70,' statusType="positive | negative | informative | critical | neutral"'),t.qZA(),t._uU(71," will help to information on what type of text it is."),t.TgZ(72,"code"),t._uU(73,'[hasByLine]="true"'),t.qZA(),t._uU(74," provides by line features.\n"),t.qZA(),t.TgZ(75,"component-example"),t._UZ(76,"fdp-standard-list-item-with-secondary-type-example"),t.qZA(),t._UZ(77,"code-example",2)(78,"separator"),t.TgZ(79,"fd-docs-section-title",8),t._uU(80," Standard List Item (ByLine)- Single Selection\n"),t.qZA(),t.TgZ(81,"description"),t._uU(82,"Standard List with Multi Selection Option. "),t.TgZ(83,"code"),t._uU(84,'selectionMode="single"'),t.qZA(),t._uU(85," will help us to provide checkbox along with list item.\n"),t.qZA(),t.TgZ(86,"component-example"),t._UZ(87,"fdp-platform-standard-list-item-with-single-selection-example"),t.qZA(),t._UZ(88,"code-example",2)(89,"separator"),t.TgZ(90,"fd-docs-section-title",9),t._uU(91," Standard List Item (ByLine)- Multi Selection\n"),t.qZA(),t.TgZ(92,"description"),t._uU(93,"Standard List with Multi Selection Option. "),t.TgZ(94,"code"),t._uU(95,'selectionMode="multi"'),t.qZA(),t._uU(96," will help us to provide checkbox along with list item."),t.TgZ(97,"code"),t._uU(98,'[hasByLine]="true"'),t.qZA(),t._uU(99," provides by line features .Below examples show both imperative way to use it. Note:selection of listitem using keyboard can be performed by *space bar* or by *Enter button * (as per Fiori3 standards.)\n"),t.qZA(),t.TgZ(100,"component-example"),t._UZ(101,"fdp-platform-standard-list-item-with-selection-example"),t.qZA(),t._UZ(102,"code-example",2)(103,"separator"),t.TgZ(104,"fd-docs-section-title",10),t._uU(105," Standard List Item (ByLine)- Navigation Indicator with multiselect\n"),t.qZA(),t.TgZ(106,"description"),t._uU(107,"Standard List with Navigation Option."),t.TgZ(108,"code"),t._uU(109,'[navigated]="true"'),t.qZA(),t._uU(110," will enables navigation on click of list item, "),t.TgZ(111,"code"),t._uU(112,'[navigationIndicator]="true"'),t.qZA(),t._uU(113," will provide *>* indicator,"),t.TgZ(114,"code"),t._uU(115,'[hasByLine]="true"'),t.qZA(),t._uU(116," provides by line features "),t.TgZ(117,"code"),t._uU(118,'link="path"'),t.qZA(),t._uU(119," will help to get into the desired destination on click of navigation."),t.TgZ(120,"code"),t._uU(121,'selectionMode="multi" enables multiselect.'),t.qZA(),t._uU(122," Below examples show declarative way to use it."),t.qZA(),t.TgZ(123,"component-example"),t._UZ(124,"fdp-platform-standard-list-item-with-navigation-example"),t.qZA(),t._UZ(125,"code-example",2)(126,"separator"),t.TgZ(127,"fd-docs-section-title",11),t._uU(128," Standard List Item (ByLine)- Inverted Secondary text types\n"),t.qZA(),t.TgZ(129,"description"),t._uU(130," Property on list item "),t.TgZ(131,"code"),t._uU(132,'[inverted]="true"'),t.qZA(),t._uU(133," and "),t.TgZ(134,"code"),t._uU(135,'statusType="positive | negative | informative | critical"'),t.qZA(),t._uU(136,' will help to information on what type of text and it should be inverted.[hasByLine]="true" provides by line features.\n'),t.qZA(),t.TgZ(137,"component-example"),t._UZ(138,"fdp-standard-list-item-with-inverted-secondary-type-example"),t.qZA(),t._UZ(139,"code-example",2)(140,"separator")),2&e&&(t.xp6(16),t.Q6J("exampleFiles",i.sli),t.xp6(14),t.Q6J("exampleFiles",i.borderLessSLI),t.xp6(11),t.Q6J("exampleFiles",i.sliWithFooter),t.xp6(14),t.Q6J("exampleFiles",i.sliWithGroupHeader),t.xp6(8),t.Q6J("exampleFiles",i.simpleSLI),t.xp6(14),t.Q6J("exampleFiles",i.sliWithSecondaryType),t.xp6(11),t.Q6J("exampleFiles",i.sliWithSingleSelection),t.xp6(14),t.Q6J("exampleFiles",i.sliWithSelection),t.xp6(23),t.Q6J("exampleFiles",i.sliWithNavigation),t.xp6(14),t.Q6J("exampleFiles",i.sliWithInvertedSecondaryType))},dependencies:[d.yS,w.N,W.E,h.w,M.k,J.O,Q,j,q,X,G,k,R,at,D,N],encapsulation:2}),a})()},{path:"api",component:r.ApiComponent,data:{content:I.X.standardlistitem}},{path:"i18n",component:r.I18nDocsComponent,data:(0,r.getI18nKey)("platformStandardListItem")}]}];let yt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[(0,p.PP)("fdp-list"),(0,p.PP)("fdp-standard-list-item"),(0,r.currentComponentProvider)("standard-list-item")],imports:[d.Bz.forChild(xt),r.SharedDocumentationPageModule,b.V_,f._d,B.RO,f.Ep,d.Bz]}),a})()}}]);