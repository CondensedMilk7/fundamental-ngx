"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5677],{45677:(v,p,i)=>{i.r(p),i.d(p,{MessageToastDocsModule:()=>E});var s=i(71567),r=i(3360),d=i(40713),e=i(65879),l=i(1187),m=i(94702),g=i(44798),f=i(3600),b=i(22225),C=i(74286);let M=(()=>{class t{constructor(o){this.ref=o,console.log(this.ref)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(C.B2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-message-toast-content-example"]],decls:2,vars:1,template:function(o,n){1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",n.ref.data.content," "))},encapsulation:2}),t})();var D=i(66972);function h(t,a){1&t&&e._uU(0),2&t&&e.hij(" ",a.$implicit.data.content,"\n")}let y=(()=>{class t{constructor(o){this.messageToastService=o}openFromComponent(){this.messageToastService.open(M,{mousePersist:!0,duration:5e3,maxWidth:"25rem",data:{content:"Message Toast created from component.\n                It will stay open if the cursor is above it.\n                Has a customized width and will disappear after 7500ms"}})}openFromString(){this.messageToastService.open("Message Toast created from string. Will disappear after 5000ms",{duration:5e3})}openFromTemplate(o){this.messageToastService.open(o,{data:{content:"Message Toast created from template."}})}openAnimatedToast(){this.messageToastService.open("Message Toast created from string. Will disappear after 5000ms",{duration:5e3,animated:!0})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(C.H2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-message-toast-example"]],decls:7,vars:0,consts:[["fd-button","","label","Open from Component",3,"click"],["fd-button","","label","Open from Template",3,"click"],["fd-button","","label","Open from String",3,"click"],["fd-button","","label","Open animated Toast",3,"click"],["fd-button","","label","Hide All","fdType","emphasized",3,"click"],["template",""]],template:function(o,n){if(1&o){const c=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){return n.openFromComponent()}),e.qZA(),e.TgZ(1,"button",1),e.NdJ("click",function(){e.CHM(c);const H=e.MAs(6);return e.KtG(n.openFromTemplate(H))}),e.qZA(),e.TgZ(2,"button",2),e.NdJ("click",function(){return n.openFromString()}),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){return n.openAnimatedToast()}),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){return n.messageToastService.hideAll()}),e.qZA(),e.YNc(5,h,1,1,"ng-template",null,5,e.W1O)}},dependencies:[D.r],styles:[".fd-button[_ngcontent-%COMP%]{margin-right:12px}"],changeDetection:0}),t})();var u=i(1013);const A=["boundedButton"];let S=(()=>{class t{constructor(){this.topLeftPosition=u.gXN,this.bottomLeftPosition=u.KC8,this.topRightPosition=u.xyP,this.bottomRightPosition=u.H4T,this.topCenterPosition=u.UHi,this.bottomCenterPosition=u.QPX,this.customPosition=P,this.messageToastService=(0,e.f3M)(C.H2)}ngAfterViewInit(){this.boundPosition={global:{boundTo:this.boundButton.nativeElement,originX:"center",originY:"top",overlayX:"center",overlayY:"bottom",offsetY:-16},connected:{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom",offsetY:-16}}}open(o){this.messageToastService.openFromString("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",{positionStrategy:o})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-message-toast-position-example"]],viewQuery:function(o,n){if(1&o&&e.Gf(A,5,e.SBq),2&o){let c;e.iGM(c=e.CRH())&&(n.boundButton=c.first)}},decls:27,vars:0,consts:[["fd-button","",3,"click"],["boundedButton",""]],template:function(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"Message toasts with left position:"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return n.open(n.topLeftPosition)}),e._uU(3,"Open on top left corner"),e.qZA(),e.TgZ(4,"button",0),e.NdJ("click",function(){return n.open(n.bottomLeftPosition)}),e._uU(5,"Open on bottom left corner"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Message toasts with center position:"),e.qZA(),e.TgZ(8,"button",0),e.NdJ("click",function(){return n.open(n.topCenterPosition)}),e._uU(9,"Open on top center"),e.qZA(),e.TgZ(10,"button",0),e.NdJ("click",function(){return n.open(n.bottomCenterPosition)}),e._uU(11,"Open on bottom center"),e.qZA(),e.TgZ(12,"p"),e._uU(13,"Message toasts with right position:"),e.qZA(),e.TgZ(14,"button",0),e.NdJ("click",function(){return n.open(n.topRightPosition)}),e._uU(15,"Open on top right corner"),e.qZA(),e.TgZ(16,"button",0),e.NdJ("click",function(){return n.open(n.bottomRightPosition)}),e._uU(17,"Open on bottom right corner"),e.qZA(),e.TgZ(18,"p"),e._uU(19,"Message toast with custom position:"),e.qZA(),e.TgZ(20,"button",0),e.NdJ("click",function(){return n.open(n.customPosition)}),e._uU(21,"Open custom position"),e.qZA(),e.TgZ(22,"p"),e._uU(23,"Message toast bounded to the trigger button:"),e.qZA(),e.TgZ(24,"button",0,1),e.NdJ("click",function(){return n.open(n.boundPosition)}),e._uU(26,"Open bounded toast"),e.qZA())},dependencies:[D.r],styles:[".fd-button[_ngcontent-%COMP%]{margin-right:12px}"],changeDetection:0}),t})(),P=(()=>{class t extends u.tyT{}return t.global={centerVertically:!0,center:!1,left:"1rem"},t.connected={originX:"end",originY:"center",overlayX:"start",overlayY:"center",offsetY:16},t})(),N=(()=>{class t{constructor(){this.messageToastComponentExample=[{language:"html",fileName:"message-toast-example",code:(0,r.H8)("message-toast-example.component.html")},{language:"typescript",fileName:"message-toast-example",code:(0,r.H8)("message-toast-example.component.ts"),component:"MessageToastExampleComponent",entryComponent:!0,name:"Main Component",main:!0},{language:"typescript",code:(0,r.H8)("message-toast-content-example.component.ts"),fileName:"message-toast-content-example",component:"MessageToastContentExampleComponent",name:"Content Component",entryComponent:!0}],this.messageToastPositionComponentExample=[{language:"html",fileName:"message-toast-position-example",code:(0,r.H8)("message-toast-position-example.component.html")},{language:"typescript",fileName:"message-toast-position-example",code:(0,r.H8)("message-toast-position-example.component.ts"),component:"MessageToastPositionExampleComponent",entryComponent:!0,name:"Main Component",main:!0}]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-message-toast"]],decls:42,vars:2,consts:[["id","message-toast","componentName","message-toast"],[3,"exampleFiles"],["id","message-toast-positions","componentName","message-toast"]],template:function(o,n){1&o&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Message Toast "),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4," The "),e.TgZ(5,"code"),e._uU(6,"MessageToastService"),e.qZA(),e._uU(7," is available for injection and accepts a component type, a template ref or a string as the alert content. "),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Message Toast appearance can also be animated."),e.qZA()(),e.TgZ(10,"component-example"),e._UZ(11,"fd-message-toast-example"),e.qZA(),e._UZ(12,"code-example",1)(13,"separator"),e.TgZ(14,"fd-docs-section-title",2),e._uU(15," Message Toast Position"),e.qZA(),e.TgZ(16,"description")(17,"p"),e._uU(18,"By default, Message Toast component appears at the bottom center of the window,"),e.qZA(),e.TgZ(19,"p"),e._uU(20," This behaviour can be changed by calling "),e.TgZ(21,"code"),e._uU(22,"setNewPositionStrategy"),e.qZA(),e._uU(23," of the "),e.TgZ(24,"code"),e._uU(25,"MessageToastService"),e.qZA(),e._uU(26,". "),e.qZA(),e.TgZ(27,"p"),e._uU(28," Additionally, developers can pass "),e.TgZ(29,"code"),e._uU(30,"positionStrategy"),e.qZA(),e._uU(31," property while opening individual Message Toast. "),e.qZA(),e.TgZ(32,"p"),e._uU(33," Default Message Toast positions include: Top left corner, Top center, Top right corner, Bottom left corner, Bottom center, Bottom right corner. "),e.qZA(),e.TgZ(34,"p"),e._uU(35,"Developers can also pass custom position class extended from "),e.TgZ(36,"code"),e._uU(37,"BaseToastPosition"),e.qZA(),e._uU(38,"."),e.qZA()(),e.TgZ(39,"component-example"),e._UZ(40,"fd-message-toast-position-example"),e.qZA(),e._UZ(41,"code-example",1)),2&o&&(e.xp6(12),e.Q6J("exampleFiles",n.messageToastComponentExample),e.xp6(29),e.Q6J("exampleFiles",n.messageToastPositionComponentExample))},dependencies:[l.N,m.E,g.w,f.k,b.O,y,S],encapsulation:2}),t})();var U=i(96779),B=i(65271),F=i(94210),w=i(53649);const k=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-message-toast-header"]],decls:46,vars:0,consts:[["module","MessageToastModule","subPackage","message-toast"]],template:function(o,n){1&o&&(e.TgZ(0,"fd-doc-page")(1,"header"),e._uU(2,"Message Toast"),e.qZA(),e.TgZ(3,"description")(4,"p"),e._uU(5," The message toast is a small, non-disruptive popup for success messages that disappears automatically after a few seconds. When message toast is displayed, it is always centered horizontally at the bottom of the screen and fades in and out automatically. "),e.qZA(),e._UZ(6,"p"),e.TgZ(7,"p")(8,"b"),e._uU(9,"Note:"),e.qZA(),e._uU(10," By default, Message Toast uses default "),e.TgZ(11,"code"),e._uU(12,"MessageToastConfig"),e.qZA(),e._uU(13," configuration."),e._UZ(14,"br"),e._uU(15," Users can override this configuration with "),e.TgZ(16,"code"),e._uU(17,"MessageToastModule.withConfig(config)"),e.qZA(),e._uU(18," method when importing "),e.TgZ(19,"code"),e._uU(20,"MessageToastModule"),e.qZA(),e._uU(21," module."),e._UZ(22,"br"),e._uU(23," Default timing and duration of the message toast is 3000 ms. The duration can be above 3000 ms, but it's not recommended to be less than 3000 ms. "),e.qZA(),e.TgZ(24,"h2"),e._uU(25,"Usage"),e.qZA(),e.TgZ(26,"b"),e._uU(27,"Use message toast if:"),e.qZA(),e.TgZ(28,"ul")(29,"li"),e._uU(30,"To display a short success message."),e.qZA(),e.TgZ(31,"li"),e._uU(32,"To avoid interrupting the user while they are performing an action."),e.qZA(),e.TgZ(33,"li"),e._uU(34,"To confirm a successful action."),e.qZA()(),e.TgZ(35,"b"),e._uU(36,"Do not use the message toast if:"),e.qZA(),e.TgZ(37,"ul")(38,"li"),e._uU(39,"You want to display an error or warning message."),e.qZA(),e.TgZ(40,"li"),e._uU(41,"You want to interrupt users while they are performing an action."),e.qZA(),e.TgZ(42,"li"),e._uU(43,"You want to make sure that users read the message before they leave the page."),e.qZA()()(),e._UZ(44,"import",0)(45,"fd-header-tabs"),e.qZA())},dependencies:[U.k,B.G,F.c,g.w,w.i],encapsulation:2}),t})(),children:[{path:"",component:N},{path:"api",component:r.hz,data:{content:d.X.messageToast}}]}];let E=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[C.H2,(0,r.tC)("message-toast")],imports:[s.Bz.forChild(k),r.gP,C.GC,s.Bz]}),t})()},40713:(v,p,i)=>{i.d(p,{X:()=>s});const s={actionBar:["ActionBarComponent","ActionBarTitleComponent","ActionBarActionsDirective","ActionBarBackDirective","ActionBarDescriptionDirective","ActionBarHeaderDirective","ActionBarMobileDirective"],actionSheet:["ActionSheetComponent","ActionSheetControlComponent","ActionSheetItemComponent","ActionSheetBodyComponent"],alert:["AlertComponent","AlertConfig","AlertService","AlertRef"],avatar:["AvatarComponent"],avatarGroup:["AvatarGroupComponent","AvatarGroupItemDirective","AvatarGroupFocusableAvatarDirective","AvatarGroupPopoverControlDirective","AvatarGroupOverflowBodyDirective","AvatarGroupOverflowItemDirective","AvatarGroupOverflowButtonDirective","AvatarGroupOverflowButtonTextDirective"],initialFocus:["InitialFocusDirective"],bar:["BarComponent","BarElementDirective","BarLeftDirective","BarMiddleDirective","BarRightDirective"],card:["CardComponent","CardHeaderComponent","CardTitleDirective","CardSubtitleDirective","CardSecondSubtitleDirective","CardContentComponent","CardLoaderComponent","CardKpiHeaderComponent","CardKpiValueDirective","CardKpiScaleIconDirective","CardKpiScaleTextDirective","CardKpiAnalyticsDirective","CardKpiAnalyticsLabelDirective","CardKpiAnalyticsContentDirective"],dynamicSideContent:["DynamicSideContentComponent","DynamicSideContentSideComponent","DynamicSideContentMainComponent"],breadcrumb:["BreadcrumbComponent","BreadcrumbItemDirective"],busyIndicator:["BusyIndicatorComponent","BusyIndicatorExtendedDirective"],button:["ButtonComponent"],segmentedButton:["SegmentedButtonComponent"],calendar:["CalendarComponent","CalendarDayViewComponent","CalendarMonthViewComponent","CalendarYearViewComponent","CalendarHeaderViewComponent","CalendarI18nLabels","FdDate","FdDatetimeAdapter"],carousel:["CarouselComponent","CarouselItemComponent","CarouselService"],combobox:["ComboboxComponent"],checkbox:["CheckboxComponent"],oldContentDensity:[],contentDensity:["ContentDensityDirective","GlobalContentDensityService","ContentDensityStorage"],datePicker:["DatePickerComponent","FdDate","FdDatetimeAdapter"],datetimePicker:["DatetimePickerComponent","FdDate","FdDatetimeAdapter"],dynamicPage:["DynamicPageComponent","DynamicPageSubheaderComponent","DynamicPageHeaderComponent","DynamicPageTitleContentComponent","DynamicPageLayoutActionsComponent","DynamicPageGlobalActionsComponent","DynamicPageFooterComponent","DynamicPageContentComponent"],facets:["FacetComponent","FacetGroupComponent"],feedInput:["FeedInputComponent","FeedInputTextareaDirective","FeedInputButtonDirective","FeedInputAvatarDirective"],feedListItem:["FeedListComponent","FeedListItemComponent"],fileUploader:["FileUploaderComponent","FileUploaderSelectDirective","FileUploaderDragndropDirective","FileUploaderService"],fixedCardLayout:["FixedCardLayoutComponent","CardDefinitionDirective","FixedCardLayoutItemComponent"],flexibleColumnLayout:["FlexibleColumnLayoutComponent"],form:["FormControlComponent","FormGroupComponent","FormItemComponent","FormLabelComponent","FormHeaderComponent","FormLegendDirective","FormMessageComponent","FormSetDirective","FormInputMessageGroupComponent"],formattedText:["FormattedTextComponent"],formMessage:["FormInputMessageGroupComponent"],globalConfig:[],icon:["IconComponent"],illustratedMessage:["IllustratedMessageComponent"],infoLabel:["InfoLabelComponent"],infiniteScroll:["InfiniteScrollDirective"],inlineHelp:["InlineHelpDirective"],inputGroup:["InputGroupComponent"],layoutGrid:["LayoutGridComponent","LayoutGridColDirective","LayoutGridRowDirective"],layoutPanel:["LayoutPanelComponent","LayoutPanelActionsComponent","LayoutPanelBodyComponent","LayoutPanelDescriptionComponent","LayoutPanelFiltersComponent","LayoutPanelFooterComponent","LayoutPanelHeaderComponent","LayoutPanelHeadComponent","LayoutPanelTitleDirective"],link:["LinkComponent"],list:["ListComponent","ListItemDirective","ListLabelDirective","ListTitleDirective","ListSecondaryDirective","ListGroupHeaderDirective","ListIconDirective","ListFooterDirective","ListMessageDirective","ListNavigationItemArrowDirective","ListNavigationItemTextDirective","ListNavigationItemComponent"],menu:["MenuAddonDirective","MenuComponent","MenuGroupComponent","MenuItemDirective","MenuItemAddonDirective","MenuListDirective","MenuTitleDirective","MenuKeyboardService"],messageStrip:["MessageStripComponent","AutoDismissMessageStripDirective","MessageStripAlertService","MessageStripAlertRef"],messageToast:["MessageToastComponent","MessageToastConfig","MessageToastService","MessageToastRef"],microProcessFlow:["MicroProcessFlowComponent","MicroProcessFlowItemComponent","MicroProcessFlowIconComponent"],momentDatetimeAdapter:["MomentDatetimeAdapter"],dayjsDatetimeAdapter:["DayjsDatetimeAdapter"],dialog:["DialogService","DialogContainerComponent","DialogTitleDirective","DialogCloseButtonDirective","DialogDecisiveButtonDirective","DialogConfig","DialogPosition","DialogBodyComponent","DialogHeaderComponent","DialogFooterComponent","DialogRef"],multiInput:["MultiInputComponent"],messageBox:["MessageBoxRef","MessageBoxConfig","MessageBoxContent","MessageBoxService","MessageBoxComponent","MessageBoxBodyComponent","MessageBoxHeaderComponent","MessageBoxFooterComponent","MessageBoxDefaultComponent","MessageBoxSemanticIconComponent","MessageBoxContainerComponent"],notification:["NotificationTitleDirective","NotificationIndicatorDirective","NotificationParagraphDirective","NotificationFooterContentDirective","NotificationSeparatorDirective","NotificationLimitTitleDirective","NotificationLimitDescriptionDirective","NotificationActionsComponent","NotificationContentComponent","NotificationLimitComponent","NotificationGroupHeaderComponent","NotificationGroupComponent","NotificationGroupListComponent","NotificationComponent","NotificationHeaderComponent","NotificationBodyComponent","NotificationFooterComponent","NotificationContainer","NotificationConfig","NotificationRef"],objectIdentifier:["ObjectIdentifierComponent"],objectMarker:["ObjectMarkerComponent"],objectStatus:["ObjectStatusModule","ObjectStatusComponent"],pagination:["PaginationComponent","PaginationModel","PaginationService"],panel:["PanelComponent","PanelTitleDirective"],popover:["PopoverComponent","PopoverBodyComponent","PopoverControlComponent","PopoverDropdownComponent","PopoverBodyHeaderDirective","PopoverBodySubheaderDirective","PopoverBodyFooterDirective"],objectNumber:["ObjectNumberComponent"],productSwitch:["ProductSwitchComponent","ProductSwitchItem"],progressIndicator:["ProgressIndicatorComponent"],quickView:["QuickViewComponent","QuickViewTitleComponent","QuickViewSubheaderComponent","QuickViewSubheaderTitleComponent","QuickViewSubheaderSubtitleComponent","QuickViewGroupComponent","QuickViewGroupTitleComponent","QuickViewGroupItemComponent","QuickViewGroupItemLabelComponent","QuickViewGroupItemContentComponent","QuickViewGroupItemContentElementDirective"],scrollSpy:["ScrollSpyDirective"],select:["SelectComponent","OptionComponent"],shellbar:["ProductMenuComponent","ShellbarComponent","ShellbarActionComponent","ShellbarActionsComponent","ShellbarLogoComponent","ShellbarSubtitleComponent","ShellbarTitleComponent"],sideNavigation:["SideNavigationComponent","SideNavigationModel","SideNavigationUtilityDirective","SideNavigationMainComponent","NestedListDirective","NestedListPopoverComponent","NestedListHeaderDirective","NestedListIconComponent","NestedListItem","NestedListModel","NestedListLink","NestedItemService"],splitButton:["SplitButtonComponent","SplitButtonMenuDirective","SplitButtonActionTitle"],table:["TableBodyDirective","TableCellDirective","TableHeaderDirective","TableRowDirective","TableComponent","TableResponsiveWrapperDirective","TableWrapperComponent","TableFixedDirective","ColumnSortableDirective"],tabs:["TabListComponent","TabPanelComponent","TabTitleDirective","TabNavComponent","TabLinkDirective","TabItemDirective","TabTagDirective","TabIconComponent","TabCountDirective","TabLabelDirective","TabProcessDirective","TabHeaderDirective","TabCounterHeaderDirective","TabProcessIconDirective","TabItemExpandComponent","TabSeparator","TabInfo"],text:["TextComponent"],tile:["TileComponent","TileHeaderDirective","TileContentDirective","TileFooterDirective","TileTitleDirective","TileSubtitleDirective","TileSectionDirective","TileRefreshDirective","TileFooterTextDirective","TileHeaderContentDirective","TileProfileImgDirective","TileLogoDirective","TileContentBylineDirective","TileContentTextDirective","TileBackgroundImgDirective","TileToggleDirective","TileContainerDirective","TilePageIndicatorDirective","TileDotDirective","TileActionCloseDirective","TileActionIndicatorDirective","TileTitleContainerDirective","TileActionContainerDirective","TileSlideContainerDirective","NumericContentDirective","NumericContentKpiContainerDirective","NumericContentKpiDirective","NumericContentLaunchIconContainerDirective","NumericContentLaunchIconDirective","NumericContentScaleArrowDirective","NumericContentScaleContainerDirective","NumericContentScaleDirective","NumericContentScaleTextDirective"],time:["TimeComponent","TimeI18n","TimeColumnComponent"],timePicker:["TimePickerComponent","FdDate","FdDatetimeAdapter"],title:["TitleComponent"],truncate:["TruncateDirective"],switch:["SwitchComponent"],stepInput:["StepInputComponent"],slider:["SliderComponent"],splitter:["SplitterComponent","SplitterPaneContainerComponent","SplitterSplitPaneComponent"],token:["TokenComponent","TokenizerComponent"],toolbar:["ToolbarComponent","ToolbarContentComponent","ToolbarOverflowContentComponent","ToolbarSpacerComponent","ThemesService"],tree:["TreeComponent","TreeItemComponent","TreeItemDefDirective"],ratingIndicator:["RatingIndicatorComponent"],wizard:["WizardComponent"],gridList:["GridListComponent","GridListItemComponent","GridListTitleBarComponent","GridListFilterBarComponent","GridListMoreBtnComponent","GridListFooterComponent","GridListItemFooterBarComponent","GridListItemToolbarComponent","GridListGroupHeaderComponent"],statusIndicator:["StatusIndicatorComponent"],messagePage:["MessagePageComponent","MessagePageActionsComponent","MessagePageMoreComponent","MessagePageTitleComponent","MessagePageSubtitleComponent"],resizableCardLayout:["ResizableCardLayoutComponent","ResizableCardItemComponent"],verticalNavigation:["VerticalNavigationComponent","VerticalNavigationMainNavigationComponent","VerticalNavigationGroupHeaderDirective"],uploadCollection:["UploadCollectionComponent","UploadCollectionButtonGroupComponent","UploadCollectionFormItemComponent","UploadCollectionItemDirective","UploadCollectionThumbnailDirective","UploadCollectionTitleDirective","UploadCollectionDescriptionDirective","UploadCollectionTextSeparatorDirective","UploadCollectionStatusGroupDirective","UploadCollectionTitleContainerDirective"],timeline:["TimelineComponent","TimelineNodeDefDirective","TimelineNodeOutletDirective","TimelineNodeBodyComponent","TimelineNodeComponent","TimelineNodeHeaderInfoTitleDirective","TimelineNodeHeaderInfoTextDirective","TimelineNodeActionDirective","TimelineHeaderInfoSubTitleDirective"],scrollbar:["ScrollbarComponent"],theming:["ThemingService","BaseThemingConfig"],overflowLayout:["OverflowLayoutComponent","OverflowItemRefDirective","OverflowExpandDirective","OverflowLayoutItemDirective","OverflowItemContainerRefDirective","OverflowLayoutPopoverContentDirective"],skeleton:["SkeletonComponent"],multiCombobox:["MultiComboboxComponent","MobileMultiComboboxComponent","MultiComboboxSelectionChangeEvent","MultiComboboxDataSourceParser","FdMultiComboBoxDataSource"]}},44798:(v,p,i)=>{i.d(p,{w:()=>d});var s=i(65879);const r=["*"];let d=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["description"]],ngContentSelectors:r,decls:2,vars:0,consts:[[1,"description"]],template:function(m,g){1&m&&(s.F$t(),s.TgZ(0,"p",0),s.Hsn(1),s.qZA())},styles:[".description[_ngcontent-%COMP%]{color:var(--sapTextColor);font-weight:300;font-size:1rem;margin-bottom:1.5rem}"],changeDetection:0}),e})()},65271:(v,p,i)=>{i.d(p,{G:()=>d});var s=i(65879);const r=["*"];let d=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["header"]],ngContentSelectors:r,decls:2,vars:0,consts:[[1,"header"]],template:function(m,g){1&m&&(s.F$t(),s.TgZ(0,"h1",0),s.Hsn(1),s.qZA())},styles:[".header[_ngcontent-%COMP%]{color:var(--sapPageHeader_TextColor);margin-top:2rem;font-size:2.2rem}"],changeDetection:0}),e})()}}]);