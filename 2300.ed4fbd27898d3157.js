"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2300],{92300:(g,l,t)=>{t.r(l),t.d(l,{FormMessageDocsModule:()=>W});var i=t(71567),s=t(3360),c=t(40713),e=t(65879),p=t(96779),m=t(65271),C=t(94210),f=t(44798),Z=t(53649);let x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-form-message-header"]],decls:7,vars:0,consts:[["module","FormModule","subPackage","form"]],template:function(n,a){1&n&&(e.TgZ(0,"fd-doc-page")(1,"header"),e._uU(2,"Form Message"),e.qZA(),e.TgZ(3,"description"),e._uU(4," The form message is a feature that is used as an information bar. It contains information about an object or a status and can be embedded within the detail area of an object or page. The form message cannot act as a stand alone component. "),e.qZA(),e._UZ(5,"import",0)(6,"fd-header-tabs"),e.qZA())},dependencies:[p.k,m.G,C.c,f.w,Z.i],encapsulation:2}),o})();var S=t(94702),F=t(3600),I=t(22225),v=t(60095),D=t(25911),T=t(1658),b=t(23402),U=t(29581),h=t(91212),M=t(91401),y=t(76094),L=t(16937),P=t(42700);const A=function(){return[]},B=function(){return["mouseenter","mouseleave","focusin","focusout"]},N=function(){return["focusin","focusout"]},O=function(){return["mouseover","mouseout"]},_=function(){return["Apple","Banana","Pineapple","Tomato","Kiwi","Strawberry","Blueberry","Orange"]};let w=(()=>{class o{constructor(){this.open=!1,this.openCustom=!1,this.options=["Apple","Pineapple","Tomato","Strawberry"],this.selected=["Apple","Banana"]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["fd-form-message-example"]],decls:55,vars:26,consts:[["fd-form-item","",1,"fd-custom-form-item-message"],["fd-form-label","","for","input-message","id","label-input"],["fd-form-control","","type","text","id","input-message","placeholder","Field placeholder text","state","information","aria-labelledby","label-input input-message message-input"],["type","information","id","message-input"],["fd-form-label","","for","group-message-2"],["placement","bottom",3,"isOpen","triggers","closeOnOutsideClick","closeOnEscapeKey","isOpenChange"],["id","group-message-2","state","information","addOnText","Toggle Message",3,"button","addOnButtonClicked"],["type","information"],["fd-form-label","","for","group-message","id","label-group"],["placement","bottom","aria-labelledby","label-group message-group",3,"triggers","closeOnOutsideClick","closeOnEscapeKey"],["id","group-message","glyph","world","iconTitle","Icon title world","state","information",3,"button"],["type","information","id","message-group"],["fd-form-label","","for","textarea-message","id","label-textarea"],["placement","bottom",3,"triggers","closeOnOutsideClick","closeOnEscapeKey"],["fd-form-control","","id","textarea-message","state","information","aria-labelledby","label-textarea message-textarea"],["type","information","id","message-textarea"],["fd-form-label","","for","multi-input-message","id","label-multi-input"],[3,"triggers"],["id","multi-input-message","placeholder","Search here...","state","information","aria-labelledby","label-multi-input message-multi-input",3,"dropdownValues","ngModel","ngModelChange"],["type","information","id","message-multi-input"],["fd-form-label","","for","group-message-custom-placement"],["placement","bottom","placementContainer","self",3,"isOpen","triggers","closeOnOutsideClick","closeOnEscapeKey","isOpenChange"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2," Message With Input "),e.qZA(),e.TgZ(3,"fd-form-input-message-group"),e._UZ(4,"input",2),e.TgZ(5,"fd-form-message",3),e._uU(6," This message is triggered by a click event. "),e.qZA()()(),e.TgZ(7,"div",0)(8,"label",4),e._uU(9," Message With InputGroup - Changed Programmatically "),e.qZA(),e.TgZ(10,"fd-form-input-message-group",5),e.NdJ("isOpenChange",function(u){return a.open=u}),e.TgZ(11,"fd-input-group",6),e.NdJ("addOnButtonClicked",function(){return a.open=!a.open}),e.qZA(),e.TgZ(12,"fd-form-message",7),e._uU(13," This message is controlled by\xa0"),e.TgZ(14,"code"),e._uU(15,"open"),e.qZA(),e._uU(16,"\xa0variable. "),e.qZA()()(),e.TgZ(17,"div",0)(18,"label",8),e._uU(19," Message With InputGroup - Hover "),e.qZA(),e.TgZ(20,"fd-form-input-message-group",9),e._UZ(21,"fd-input-group",10),e.TgZ(22,"fd-form-message",11),e._uU(23," This message is only triggered by hovering or focusing on the InputGroup. "),e.qZA()()(),e.TgZ(24,"div",0)(25,"label",12),e._uU(26," Message With Textarea - Try to focus "),e.qZA(),e.TgZ(27,"fd-form-input-message-group",13)(28,"textarea",14),e._uU(29,"        "),e.qZA(),e.TgZ(30,"fd-form-message",15),e._uU(31," This message is only triggered by focusing inside the textarea. The message box placement is also changed. "),e.qZA()()(),e.TgZ(32,"div",0)(33,"label",16),e._uU(34," Message with Multi Input - Hover "),e.qZA(),e.TgZ(35,"fd-form-input-message-group",17)(36,"fd-multi-input",18),e.NdJ("ngModelChange",function(u){return a.selected=u}),e.qZA(),e.TgZ(37,"fd-form-message",19),e._uU(38," Pellentesque metus lacus commodo eget justo ut rutrum varius nunc "),e.qZA()()(),e.TgZ(39,"div",0)(40,"label",20),e._uU(41," Message with custom placement - Changed Programmatically "),e.qZA(),e.TgZ(42,"fd-form-input-message-group",21),e.NdJ("isOpenChange",function(u){return a.openCustom=u}),e.TgZ(43,"fd-input-group",6),e.NdJ("addOnButtonClicked",function(){return a.openCustom=!a.openCustom}),e.qZA(),e.TgZ(44,"fd-form-message",7)(45,"div"),e._uU(46," This message is controlled by\xa0"),e.TgZ(47,"code"),e._uU(48,"openCustom"),e.qZA(),e._uU(49,"\xa0variable."),e._UZ(50,"br"),e._uU(51," The popover itself is rendered inside "),e.TgZ(52,"code"),e._uU(53,"fd-form-input-message-group"),e.qZA(),e._uU(54," element. "),e.qZA()()()()),2&n&&(e.xp6(10),e.Q6J("isOpen",a.open)("triggers",e.DdM(20,A))("closeOnOutsideClick",!1)("closeOnEscapeKey",!1),e.xp6(1),e.Q6J("button",!0),e.xp6(9),e.Q6J("triggers",e.DdM(21,B))("closeOnOutsideClick",!1)("closeOnEscapeKey",!1),e.xp6(1),e.Q6J("button",!0),e.xp6(6),e.Q6J("triggers",e.DdM(22,N))("closeOnOutsideClick",!1)("closeOnEscapeKey",!1),e.xp6(8),e.Q6J("triggers",e.DdM(23,O)),e.xp6(1),e.Q6J("dropdownValues",e.DdM(24,_))("ngModel",a.selected),e.xp6(6),e.Q6J("isOpen",a.openCustom)("triggers",e.DdM(25,A))("closeOnOutsideClick",!1)("closeOnEscapeKey",!1),e.xp6(1),e.Q6J("button",!0))},dependencies:[v.JJ,v.On,D.h,T.A,b.T,U.z,h.J,M.K,y.K,L.g,P.L],styles:[".fd-custom-form-item-message[_ngcontent-%COMP%]{margin-bottom:40px!important}"]}),o})(),G=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["fd-form-messaging-state-example"]],decls:34,vars:0,consts:[["fd-form-item","",1,"fd-custom-form-item-message"],["fd-form-label","","for","input-message","id","label-input-1"],["fd-form-control","","type","text","id","input-message-1","placeholder","Field placeholder text","state","information","aria-labelledby","label-input input-message message-input"],["type","information","id","message-input-1"],["fd-form-label","","for","input-message","id","label-input-2"],["fd-form-control","","type","text","id","input-message-2","placeholder","Field placeholder text","state","warning","aria-labelledby","label-input input-message message-input"],["type","warning","id","message-input-2"],["href","/"],["fd-form-label","","for","input-message","id","label-input-3"],["fd-form-control","","type","text","id","input-message-3","placeholder","Field placeholder text","state","error","aria-labelledby","label-input input-message message-input"],["type","error","id","message-input-3"],["fd-form-label","","for","input-message","id","label-input-4"],["fd-form-control","","type","text","id","input-message-4","placeholder","Field placeholder text","state","success","aria-labelledby","label-input input-message message-input"],["type","success","id","message-input-4"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2," Informative Message With Input "),e.qZA(),e.TgZ(3,"fd-form-input-message-group"),e._UZ(4,"input",2),e.TgZ(5,"fd-form-message",3),e._uU(6," This is an informative message. "),e.qZA()()(),e.TgZ(7,"div",0)(8,"label",4),e._uU(9," Warning Message With Input "),e.qZA(),e.TgZ(10,"fd-form-input-message-group"),e._UZ(11,"input",5),e.TgZ(12,"fd-form-message",6),e._uU(13," This is a warning message with\xa0"),e.TgZ(14,"a",7),e._uU(15,"formatted text"),e.qZA(),e._uU(16,". "),e.qZA()()(),e.TgZ(17,"div",0)(18,"label",8),e._uU(19," Error Message With Input "),e.qZA(),e.TgZ(20,"fd-form-input-message-group"),e._UZ(21,"input",9),e.TgZ(22,"fd-form-message",10),e._uU(23," This is an error message with\xa0"),e.TgZ(24,"code"),e._uU(25,"formatted text"),e.qZA(),e._uU(26,". "),e.qZA()()(),e.TgZ(27,"div",0)(28,"label",11),e._uU(29," Success Message With Input "),e.qZA(),e.TgZ(30,"fd-form-input-message-group"),e._UZ(31,"input",12),e.TgZ(32,"fd-form-message",13),e._uU(33," This is a success message with a plain text. "),e.qZA()()())},dependencies:[D.h,T.A,b.T,h.J,M.K,y.K],styles:[".fd-custom-form-item-message[_ngcontent-%COMP%]{margin-bottom:40px!important}"]}),o})(),K=(()=>{class o{constructor(){this.formMessageExample=[{language:"html",code:(0,s.H8)("form-message-example.component.html"),fileName:"form-message-example"},{language:"typescript",code:(0,s.H8)("form-message-example.component.ts"),fileName:"form-message-example",component:"FormMessageExampleComponent"}],this.formMessagingStateExample=[{language:"html",code:(0,s.H8)("state-message/form-messaging-state-example.component.html"),fileName:"form-messaging-state-example"},{language:"typescript",component:"FormMessagingStateExampleComponent",code:(0,s.H8)("state-message/form-messaging-state-example.component.ts"),fileName:"form-messaging-state-example"}]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-input"]],decls:49,vars:2,consts:[["id","default","componentName","form-message"],[3,"exampleFiles"],["id","input","componentName","form-message"]],template:function(n,a){1&n&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Form Message Input Group "),e.qZA(),e.TgZ(2,"description"),e._uU(3," The Form Input Message Group has a built-in popover component which uses most of the "),e.TgZ(4,"code"),e._uU(5,"popover"),e.qZA(),e._uU(6," properties. "),e._UZ(7,"br"),e._uU(8," At a minimum, it should contain a control element and a "),e.TgZ(9,"code"),e._uU(10,"FormMessage"),e.qZA(),e._uU(11,". The Form Message can be paired with one of the components listed below: "),e.TgZ(12,"ul")(13,"li"),e._uU(14,"Input"),e.qZA(),e.TgZ(15,"li"),e._uU(16,"Textarea"),e.qZA(),e.TgZ(17,"li"),e._uU(18,"Input Group"),e.qZA(),e.TgZ(19,"li"),e._uU(20,"Multi Input"),e.qZA()()(),e.TgZ(21,"component-example"),e._UZ(22,"fd-form-message-example"),e.qZA(),e._UZ(23,"code-example",1),e.TgZ(24,"fd-docs-section-title",2),e._uU(25,"Form Message State in Input Type "),e.qZA(),e.TgZ(26,"description"),e._uU(27," The Form Message offers four value states listed below: "),e.TgZ(28,"ul")(29,"li")(30,"b"),e._uU(31,"Information"),e.qZA(),e._uU(32,": The message is informative guiding the user on how to fill out the input."),e.qZA(),e.TgZ(33,"li")(34,"b"),e._uU(35,"Warning"),e.qZA(),e._uU(36,": The message is giving the user warnings on the data input format although it doesn't stop the user with moving forward. "),e.qZA(),e.TgZ(37,"li")(38,"b"),e._uU(39,"Error"),e.qZA(),e._uU(40,": The message tells the user that the data entered is invalid and the user cannot move forward. "),e.qZA(),e.TgZ(41,"li")(42,"b"),e._uU(43,"Success"),e.qZA(),e._uU(44,": The message shows that the user has entered the data correctly."),e.qZA()(),e._uU(45," The value state message can be either a plain text or a formatted text.\n"),e.qZA(),e.TgZ(46,"component-example"),e._UZ(47,"fd-form-messaging-state-example"),e.qZA(),e._UZ(48,"code-example",1)),2&n&&(e.xp6(23),e.Q6J("exampleFiles",a.formMessageExample),e.xp6(25),e.Q6J("exampleFiles",a.formMessagingStateExample))},dependencies:[S.E,f.w,F.k,I.O,w,G],encapsulation:2}),o})();var Q=t(61535),V=t(33957),J=t(27017),R=t(90736);const j=[{path:"",component:x,children:[{path:"",component:K},{path:"api",component:s.hz,data:{content:c.X.form}}]}];let W=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[(0,s.tC)("form-message")],imports:[i.Bz.forChild(j),s.gP,Q.ej,V.UU,J.ne,R.Qj,i.Bz]}),o})()},40713:(g,l,t)=>{t.d(l,{X:()=>i});const i={actionBar:["ActionBarComponent","ActionBarTitleComponent","ActionBarActionsDirective","ActionBarBackDirective","ActionBarDescriptionDirective","ActionBarHeaderDirective","ActionBarMobileDirective"],actionSheet:["ActionSheetComponent","ActionSheetControlComponent","ActionSheetItemComponent","ActionSheetBodyComponent"],alert:["AlertComponent","AlertConfig","AlertService","AlertRef"],avatar:["AvatarComponent"],avatarGroup:["AvatarGroupComponent","AvatarGroupItemDirective","AvatarGroupFocusableAvatarDirective","AvatarGroupPopoverControlDirective","AvatarGroupOverflowBodyDirective","AvatarGroupOverflowItemDirective","AvatarGroupOverflowButtonDirective","AvatarGroupOverflowButtonTextDirective"],initialFocus:["InitialFocusDirective"],bar:["BarComponent","BarElementDirective","BarLeftDirective","BarMiddleDirective","BarRightDirective"],card:["CardComponent","CardHeaderComponent","CardTitleDirective","CardSubtitleDirective","CardSecondSubtitleDirective","CardContentComponent","CardLoaderComponent","CardKpiHeaderComponent","CardKpiValueDirective","CardKpiScaleIconDirective","CardKpiScaleTextDirective","CardKpiAnalyticsDirective","CardKpiAnalyticsLabelDirective","CardKpiAnalyticsContentDirective"],dynamicSideContent:["DynamicSideContentComponent","DynamicSideContentSideComponent","DynamicSideContentMainComponent"],breadcrumb:["BreadcrumbComponent","BreadcrumbItemDirective"],busyIndicator:["BusyIndicatorComponent","BusyIndicatorExtendedDirective"],button:["ButtonComponent"],segmentedButton:["SegmentedButtonComponent"],calendar:["CalendarComponent","CalendarDayViewComponent","CalendarMonthViewComponent","CalendarYearViewComponent","CalendarHeaderViewComponent","CalendarI18nLabels","FdDate","FdDatetimeAdapter"],carousel:["CarouselComponent","CarouselItemComponent","CarouselService"],combobox:["ComboboxComponent"],checkbox:["CheckboxComponent"],oldContentDensity:[],contentDensity:["ContentDensityDirective","GlobalContentDensityService","ContentDensityStorage"],datePicker:["DatePickerComponent","FdDate","FdDatetimeAdapter"],datetimePicker:["DatetimePickerComponent","FdDate","FdDatetimeAdapter"],dynamicPage:["DynamicPageComponent","DynamicPageSubheaderComponent","DynamicPageHeaderComponent","DynamicPageTitleContentComponent","DynamicPageLayoutActionsComponent","DynamicPageGlobalActionsComponent","DynamicPageFooterComponent","DynamicPageContentComponent"],facets:["FacetComponent","FacetGroupComponent"],feedInput:["FeedInputComponent","FeedInputTextareaDirective","FeedInputButtonDirective","FeedInputAvatarDirective"],feedListItem:["FeedListComponent","FeedListItemComponent"],fileUploader:["FileUploaderComponent","FileUploaderSelectDirective","FileUploaderDragndropDirective","FileUploaderService"],fixedCardLayout:["FixedCardLayoutComponent","CardDefinitionDirective","FixedCardLayoutItemComponent"],flexibleColumnLayout:["FlexibleColumnLayoutComponent"],form:["FormControlComponent","FormGroupComponent","FormItemComponent","FormLabelComponent","FormHeaderComponent","FormLegendDirective","FormMessageComponent","FormSetDirective","FormInputMessageGroupComponent"],formattedText:["FormattedTextComponent"],formMessage:["FormInputMessageGroupComponent"],globalConfig:[],icon:["IconComponent"],illustratedMessage:["IllustratedMessageComponent"],infoLabel:["InfoLabelComponent"],infiniteScroll:["InfiniteScrollDirective"],inlineHelp:["InlineHelpDirective"],inputGroup:["InputGroupComponent"],layoutGrid:["LayoutGridComponent","LayoutGridColDirective","LayoutGridRowDirective"],layoutPanel:["LayoutPanelComponent","LayoutPanelActionsComponent","LayoutPanelBodyComponent","LayoutPanelDescriptionComponent","LayoutPanelFiltersComponent","LayoutPanelFooterComponent","LayoutPanelHeaderComponent","LayoutPanelHeadComponent","LayoutPanelTitleDirective"],link:["LinkComponent"],list:["ListComponent","ListItemDirective","ListLabelDirective","ListTitleDirective","ListSecondaryDirective","ListGroupHeaderDirective","ListIconDirective","ListFooterDirective","ListMessageDirective","ListNavigationItemArrowDirective","ListNavigationItemTextDirective","ListNavigationItemComponent"],menu:["MenuAddonDirective","MenuComponent","MenuGroupComponent","MenuItemDirective","MenuItemAddonDirective","MenuListDirective","MenuTitleDirective","MenuKeyboardService"],messageStrip:["MessageStripComponent","AutoDismissMessageStripDirective","MessageStripAlertService","MessageStripAlertRef"],messageToast:["MessageToastComponent","MessageToastConfig","MessageToastService","MessageToastRef"],microProcessFlow:["MicroProcessFlowComponent","MicroProcessFlowItemComponent","MicroProcessFlowIconComponent"],momentDatetimeAdapter:["MomentDatetimeAdapter"],dayjsDatetimeAdapter:["DayjsDatetimeAdapter"],dialog:["DialogService","DialogContainerComponent","DialogTitleDirective","DialogCloseButtonDirective","DialogDecisiveButtonDirective","DialogConfig","DialogPosition","DialogBodyComponent","DialogHeaderComponent","DialogFooterComponent","DialogRef"],multiInput:["MultiInputComponent"],messageBox:["MessageBoxRef","MessageBoxConfig","MessageBoxContent","MessageBoxService","MessageBoxComponent","MessageBoxBodyComponent","MessageBoxHeaderComponent","MessageBoxFooterComponent","MessageBoxDefaultComponent","MessageBoxSemanticIconComponent","MessageBoxContainerComponent"],notification:["NotificationTitleDirective","NotificationIndicatorDirective","NotificationParagraphDirective","NotificationFooterContentDirective","NotificationSeparatorDirective","NotificationLimitTitleDirective","NotificationLimitDescriptionDirective","NotificationActionsComponent","NotificationContentComponent","NotificationLimitComponent","NotificationGroupHeaderComponent","NotificationGroupComponent","NotificationGroupListComponent","NotificationComponent","NotificationHeaderComponent","NotificationBodyComponent","NotificationFooterComponent","NotificationContainer","NotificationConfig","NotificationRef"],objectIdentifier:["ObjectIdentifierComponent"],objectMarker:["ObjectMarkerComponent"],objectStatus:["ObjectStatusModule","ObjectStatusComponent"],pagination:["PaginationComponent","PaginationModel","PaginationService"],panel:["PanelComponent","PanelTitleDirective"],popover:["PopoverComponent","PopoverBodyComponent","PopoverControlComponent","PopoverDropdownComponent","PopoverBodyHeaderDirective","PopoverBodySubheaderDirective","PopoverBodyFooterDirective"],objectNumber:["ObjectNumberComponent"],productSwitch:["ProductSwitchComponent","ProductSwitchItem"],progressIndicator:["ProgressIndicatorComponent"],quickView:["QuickViewComponent","QuickViewTitleComponent","QuickViewSubheaderComponent","QuickViewSubheaderTitleComponent","QuickViewSubheaderSubtitleComponent","QuickViewGroupComponent","QuickViewGroupTitleComponent","QuickViewGroupItemComponent","QuickViewGroupItemLabelComponent","QuickViewGroupItemContentComponent","QuickViewGroupItemContentElementDirective"],scrollSpy:["ScrollSpyDirective"],select:["SelectComponent","OptionComponent"],shellbar:["ProductMenuComponent","ShellbarComponent","ShellbarActionComponent","ShellbarActionsComponent","ShellbarLogoComponent","ShellbarSubtitleComponent","ShellbarTitleComponent"],sideNavigation:["SideNavigationComponent","SideNavigationModel","SideNavigationUtilityDirective","SideNavigationMainComponent","NestedListDirective","NestedListPopoverComponent","NestedListHeaderDirective","NestedListIconComponent","NestedListItem","NestedListModel","NestedListLink","NestedItemService"],splitButton:["SplitButtonComponent","SplitButtonMenuDirective","SplitButtonActionTitle"],table:["TableBodyDirective","TableCellDirective","TableHeaderDirective","TableRowDirective","TableComponent","TableResponsiveWrapperDirective","TableWrapperComponent","TableFixedDirective","ColumnSortableDirective"],tabs:["TabListComponent","TabPanelComponent","TabTitleDirective","TabNavComponent","TabLinkDirective","TabItemDirective","TabTagDirective","TabIconComponent","TabCountDirective","TabLabelDirective","TabProcessDirective","TabHeaderDirective","TabCounterHeaderDirective","TabProcessIconDirective","TabItemExpandComponent","TabSeparator","TabInfo"],text:["TextComponent"],tile:["TileComponent","TileHeaderDirective","TileContentDirective","TileFooterDirective","TileTitleDirective","TileSubtitleDirective","TileSectionDirective","TileRefreshDirective","TileFooterTextDirective","TileHeaderContentDirective","TileProfileImgDirective","TileLogoDirective","TileContentBylineDirective","TileContentTextDirective","TileBackgroundImgDirective","TileToggleDirective","TileContainerDirective","TilePageIndicatorDirective","TileDotDirective","TileActionCloseDirective","TileActionIndicatorDirective","TileTitleContainerDirective","TileActionContainerDirective","TileSlideContainerDirective","NumericContentDirective","NumericContentKpiContainerDirective","NumericContentKpiDirective","NumericContentLaunchIconContainerDirective","NumericContentLaunchIconDirective","NumericContentScaleArrowDirective","NumericContentScaleContainerDirective","NumericContentScaleDirective","NumericContentScaleTextDirective"],time:["TimeComponent","TimeI18n","TimeColumnComponent"],timePicker:["TimePickerComponent","FdDate","FdDatetimeAdapter"],title:["TitleComponent"],truncate:["TruncateDirective"],switch:["SwitchComponent"],stepInput:["StepInputComponent"],slider:["SliderComponent"],splitter:["SplitterComponent","SplitterPaneContainerComponent","SplitterSplitPaneComponent"],token:["TokenComponent","TokenizerComponent"],toolbar:["ToolbarComponent","ToolbarContentComponent","ToolbarOverflowContentComponent","ToolbarSpacerComponent","ThemesService"],tree:["TreeComponent","TreeItemComponent","TreeItemDefDirective"],ratingIndicator:["RatingIndicatorComponent"],wizard:["WizardComponent"],gridList:["GridListComponent","GridListItemComponent","GridListTitleBarComponent","GridListFilterBarComponent","GridListMoreBtnComponent","GridListFooterComponent","GridListItemFooterBarComponent","GridListItemToolbarComponent","GridListGroupHeaderComponent"],statusIndicator:["StatusIndicatorComponent"],messagePage:["MessagePageComponent","MessagePageActionsComponent","MessagePageMoreComponent","MessagePageTitleComponent","MessagePageSubtitleComponent"],resizableCardLayout:["ResizableCardLayoutComponent","ResizableCardItemComponent"],verticalNavigation:["VerticalNavigationComponent","VerticalNavigationMainNavigationComponent","VerticalNavigationGroupHeaderDirective"],uploadCollection:["UploadCollectionComponent","UploadCollectionButtonGroupComponent","UploadCollectionFormItemComponent","UploadCollectionItemDirective","UploadCollectionThumbnailDirective","UploadCollectionTitleDirective","UploadCollectionDescriptionDirective","UploadCollectionTextSeparatorDirective","UploadCollectionStatusGroupDirective","UploadCollectionTitleContainerDirective"],timeline:["TimelineComponent","TimelineNodeDefDirective","TimelineNodeOutletDirective","TimelineNodeBodyComponent","TimelineNodeComponent","TimelineNodeHeaderInfoTitleDirective","TimelineNodeHeaderInfoTextDirective","TimelineNodeActionDirective","TimelineHeaderInfoSubTitleDirective"],scrollbar:["ScrollbarComponent"],theming:["ThemingService","BaseThemingConfig"],overflowLayout:["OverflowLayoutComponent","OverflowItemRefDirective","OverflowExpandDirective","OverflowLayoutItemDirective","OverflowItemContainerRefDirective","OverflowLayoutPopoverContentDirective"],skeleton:["SkeletonComponent"],multiCombobox:["MultiComboboxComponent","MobileMultiComboboxComponent","MultiComboboxSelectionChangeEvent","MultiComboboxDataSourceParser","FdMultiComboBoxDataSource"]}},44798:(g,l,t)=>{t.d(l,{w:()=>c});var i=t(65879);const s=["*"];let c=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["description"]],ngContentSelectors:s,decls:2,vars:0,consts:[[1,"description"]],template:function(m,C){1&m&&(i.F$t(),i.TgZ(0,"p",0),i.Hsn(1),i.qZA())},styles:[".description[_ngcontent-%COMP%]{color:var(--sapTextColor);font-weight:300;font-size:1rem;margin-bottom:1.5rem}"],changeDetection:0}),e})()},65271:(g,l,t)=>{t.d(l,{G:()=>c});var i=t(65879);const s=["*"];let c=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["header"]],ngContentSelectors:s,decls:2,vars:0,consts:[[1,"header"]],template:function(m,C){1&m&&(i.F$t(),i.TgZ(0,"h1",0),i.Hsn(1),i.qZA())},styles:[".header[_ngcontent-%COMP%]{color:var(--sapPageHeader_TextColor);margin-top:2rem;font-size:2.2rem}"],changeDetection:0}),e})()}}]);