import{$b as h,Aa as M,Ae as Y,Bg as Z,Cb as u,Cd as S,Cg as ee,Eb as a,Fb as B,Gb as F,K as N,Ka as m,Kb as I,La as l,Lb as z,Mb as f,Nb as d,Rg as oe,Sb as A,Ub as T,V as L,_b as J,ba as O,ca as Q,db as g,ea as K,gb as G,h as j,hb as U,ib as x,ja as w,k as V,ka as q,kb as X,la as P,ob as C,qa as b,ra as v,tb as p,tc as E,ub as _,vb as $,zb as R}from"./chunk-DO4CUQ4Q.js";var ie=(()=>{let i=class i{constructor(){this.font="SAP-icons"}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=w({type:i,selectors:[["fd-micro-process-flow-icon"]],hostAttrs:[1,"fd-micro-process-flow__icon-container"],inputs:{glyph:"glyph",font:"font",class:"class",ariaLabel:"ariaLabel"},standalone:!0,features:[h],decls:1,vars:5,consts:[[1,"fd-micro-process-flow__icon",3,"ariaLabel","glyph","font"]],template:function(e,t){e&1&&$(0,"fd-icon",0),e&2&&(X(t.class),G("ariaLabel",t.ariaLabel)("glyph",t.glyph)("font",t.font))},dependencies:[oe],encapsulation:2,changeDetection:0});let r=i;return r})();var W=new Q("Micro process flow component dependency");var y=(()=>{let i=class i{constructor(o,e){this.elRef=o,this._microProcessFlow=e}onFocus(){this._microProcessFlow?.setFocusedElementIndex(this.elRef.nativeElement),this._microProcessFlow?.canItemsReceiveFocus.next(!1)}onBlur(){this._microProcessFlow?.canItemsReceiveFocus.next(!0)}ngOnInit(){this.setFocusable()}setFocusable(o=!1){this.elRef.nativeElement.setAttribute("tabindex",o?"0":"-1")}focus(o){this.elRef.nativeElement.focus(o)}};i.\u0275fac=function(e){return new(e||i)(l(M),l(W,8))},i.\u0275dir=P({type:i,selectors:[["","fdMicroProcessFlowFocusableItem",""],["","fd-micro-process-flow-focusable-item",""]],hostAttrs:[1,"fd-micro-process-flow__focusable-item"],hostBindings:function(e,t){e&1&&u("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()})},standalone:!0});let r=i;return r})();var re=["*",[["","fd-micro-process-flow-intermediary-item",""]]],se=["*","[fd-micro-process-flow-intermediary-item]"];function ne(r,i){if(r&1&&(p(0,"div",3),F(1,1),_()),r&2){let c=a();x("fd-micro-process-flow__connector--intermediate",c.intermediate)}}var D=(()=>{let i=class i{constructor(o,e){this._cd=o,this.elRef=e,this.state="none",this.intermediate=!1,this._lastItem=!1}setLastItem(o){o!==this._lastItem&&(this._lastItem=o,this._cd.detectChanges())}};i.\u0275fac=function(e){return new(e||i)(l(E),l(M))},i.\u0275cmp=w({type:i,selectors:[["fd-micro-process-flow-item"]],contentQueries:function(e,t,s){if(e&1&&I(s,y,5),e&2){let n;f(n=d())&&(t.focusableElement=n.first)}},hostAttrs:[1,"fd-micro-process-flow__item"],hostVars:8,hostBindings:function(e,t){e&2&&x("fd-micro-process-flow__item--positive",t.state==="positive")("fd-micro-process-flow__item--critical",t.state==="critical")("fd-micro-process-flow__item--negative",t.state==="negative")("fd-micro-process-flow__item--information",t.state==="information")},inputs:{state:"state",intermediate:"intermediate"},standalone:!0,features:[h],ngContentSelectors:se,decls:4,vars:1,consts:[[1,"fd-micro-process-flow__content"],[1,"fd-micro-process-flow__content-wrapper"],[1,"fd-micro-process-flow__connector",3,"fd-micro-process-flow__connector--intermediate"],[1,"fd-micro-process-flow__connector"]],template:function(e,t){e&1&&(B(re),p(0,"div",0)(1,"div",1),F(2),_(),g(3,ne,2,2,"div",2),_()),e&2&&(m(3),C(t._lastItem?-1:3))},styles:[`fd-micro-process-flow-item .fd-info-label__text{white-space:nowrap}
`],encapsulation:2,changeDetection:0});let r=i;return r})();var le=["wrapperContainer"],ae=["container"],_e=["goNextButton"],fe=[[["fd-micro-process-flow-item"]]],de=["fd-micro-process-flow-item"];function me(r,i){if(r&1){let c=R();p(0,"a",7),u("click",function(){b(c);let e=a();return v(e.goBack())})("keypress",function(e){b(c);let t=a();return v(t.onKeypressHandler(-1,e))}),A(1),_()}if(r&2){let c=a();m(),T(" ",c.previousItemsCount," ")}}function pe(r,i){if(r&1){let c=R();p(0,"a",8,2),u("click",function(){b(c);let e=a();return v(e.goNext())})("keypress",function(e){b(c);let t=a();return v(t.onKeypressHandler(1,e))}),A(2),_()}if(r&2){let c=a();m(2),T(" ",c.nextItemsCount," ")}}var we=(()=>{let i=class i{get showNextButton(){return this.nextItemsCount>0}get showPreviousButton(){return this.previousItemsCount>0}get _paginationDirection(){return this._isRtl?1:-1}constructor(o,e){this._cd=o,this._rtl=e,this.independentSteps=!1,this.transitionSpeed=300,this.transitionTimingFunction="ease",this.previousItemsCount=0,this.nextItemsCount=0,this.canItemsReceiveFocus=new V,this._isRtl=!1,this._subscriptions=new j,this._navigationKeys=[37,39],this._actionKeys=[32,13],this._focusedElementIndex=-1,K(Z).subscribe()}handleKeyboardEvent(o){if(S.isKeyCode(o,this._navigationKeys)){let t=S.isKeyCode(o,39)?1:-1;o.stopImmediatePropagation();let s=this._getPreviousItemsCount()+t;if(!this.items.get(s))return;this.previousItemsCount=0,this._paginate(s),this.items.get(this._getPreviousItemsCount())?.focusableElement?.focus({preventScroll:!0})}}ngOnInit(){this._subscriptions.add(this.canItemsReceiveFocus.pipe(N(10)).subscribe(o=>{o?this._setFocusableVisibleItems():this._disableFocusableItems()})),this._rtl&&this._subscriptions.add(this._rtl.rtl.subscribe(o=>{this._isRtl=o,this.showPreviousButton&&this._paginate(0)}))}ngAfterViewInit(){this.listenOnItemsChange()}ngOnDestroy(){this._subscriptions.unsubscribe()}listenOnItemsChange(){this._subscriptions.add(this.items.changes.pipe(L(0)).subscribe(()=>{this.items.forEach(o=>{o.setLastItem(!1)}),this.items.last?.setLastItem(!0),this._setNavigationButtons(),this._paginate(0)}))}goNext(){this._paginate()}goBack(){this._paginate(-1)}setFocusedElementIndex(o){this._focusedElementIndex=this.focusableItems.toArray().findIndex(e=>e.elRef.nativeElement===o)}onKeypressHandler(o,e){S.isKeyCode(e,this._actionKeys)&&(e.preventDefault(),this._paginate(o))}_setNavigationButtons(){if(this._container===void 0)return;let o=this._container.nativeElement.offsetWidth,e=this._wrapperContainer.nativeElement.offsetWidth,t=this._goNextButton?.nativeElement.offsetWidth||0;if(e<o)return;let s=this.items.toArray().slice(this.previousItemsCount).map(n=>n.elRef);if(this.previousItemsCount>0&&s.reduce((H,te)=>te.nativeElement.offsetWidth+H,0)<=t+o){this.nextItemsCount=0,this._cd.detectChanges();return}this._setNextItemsCount(s,o),this._cd.detectChanges()}_setNextItemsCount(o,e){let t=0,s=0;for(let[n,H]of o.entries())if(s=t+H.nativeElement.offsetWidth,s<=e)t=s;else{this.nextItemsCount=o.length-n;break}}_paginate(o=1){if(this.items===void 0||this.items.length===0)return;this.previousItemsCount=this._focusedElementIndex=this.previousItemsCount+o,this._setNavigationButtons(),this._setFocusableVisibleItems();let e=this.items.get(this.previousItemsCount),t=this._container.nativeElement.offsetWidth,s=this._wrapperContainer.nativeElement.offsetWidth;(!e||t>=s)&&(this.previousItemsCount=this.previousItemsCount-o);let n=this._getPreviousItemsWidth();this._wrapperContainer.nativeElement.style.transform=`translateX(${n*this._paginationDirection}px)`,this._setNavigationButtons(),this._setFocusableVisibleItems()}_getPreviousItemsWidth(){return this.items.toArray().slice(0,this.previousItemsCount).reduce((o,e)=>e.elRef.nativeElement.offsetWidth+o,0)}_disableFocusableItems(){this.items.forEach(o=>o.focusableElement?.setFocusable(!1))}_setFocusableVisibleItems(){this._disableFocusableItems();let o=this._container.nativeElement.offsetWidth,e=this.items.toArray().slice(this.previousItemsCount),t=0,s=0;for(let n of e)if(s=t+n.elRef.nativeElement.offsetWidth,s<=o)t=s,n.focusableElement?.setFocusable(!0);else break}_getPreviousItemsCount(){return this._focusedElementIndex===-1?this.previousItemsCount:this._focusedElementIndex}};i.\u0275fac=function(e){return new(e||i)(l(E),l(Y,8))},i.\u0275cmp=w({type:i,selectors:[["fd-micro-process-flow"]],contentQueries:function(e,t,s){if(e&1&&(I(s,D,4),I(s,y,5)),e&2){let n;f(n=d())&&(t.items=n),f(n=d())&&(t.focusableItems=n)}},viewQuery:function(e,t){if(e&1&&(z(le,5),z(ae,5),z(_e,5)),e&2){let s;f(s=d())&&(t._wrapperContainer=s.first),f(s=d())&&(t._container=s.first),f(s=d())&&(t._goNextButton=s.first)}},hostAttrs:[1,"fd-micro-process-flow"],hostVars:2,hostBindings:function(e,t){e&1&&u("keydown",function(n){return t.handleKeyboardEvent(n)}),e&2&&x("fd-micro-process-flow--independent-steps",t.independentSteps)},inputs:{independentSteps:"independentSteps",transitionSpeed:"transitionSpeed",transitionTimingFunction:"transitionTimingFunction"},standalone:!0,features:[J([{provide:W,useExisting:i},ee()]),h],ngContentSelectors:de,decls:7,vars:6,consts:[["container",""],["wrapperContainer",""],["goNextButton",""],["tabindex","0","role","button","type","button",1,"fd-micro-process-flow__link-previous"],[1,"fd-micro-process-flow__overflow-container"],[1,"fd-micro-process-flow__wrapper"],["tabindex","0","role","button","type","button",1,"fd-micro-process-flow__link-next"],["tabindex","0","role","button","type","button",1,"fd-micro-process-flow__link-previous",3,"click","keypress"],["tabindex","0","role","button","type","button",1,"fd-micro-process-flow__link-next",3,"click","keypress"]],template:function(e,t){e&1&&(B(fe),g(0,me,2,1,"a",3),p(1,"div",4,0)(3,"div",5,1),F(5),_()(),g(6,pe,3,1,"a",6)),e&2&&(C(t.showPreviousButton?0:-1),m(3),U("transition-duration",t.transitionSpeed+"ms")("transition-timing-function",t.transitionTimingFunction),m(3),C(t.showNextButton?6:-1))},styles:[`:root{--fdMicro_Process_Flow_Item_Background:var(--sapNeutralBackground);--fdMicro_Process_Flow_Item_Border_Color:var(--sapNeutralBorderColor);--fdMicro_Process_Flow_Item_Hover_Background:var(--fdMicro_Process_Flow_Item_Background);--fdMicro_Process_Flow_Item_Hover_Border_Color:var(--fdMicro_Process_Flow_Item_Border_Color);--fdMicro_Process_Flow_Item_Active_Background:var(--sapHighlightColor);--fdMicro_Process_Flow_Item_Active_Border_Color:var(--sapHighlightColor);--fdMicro_Process_Flow_Item_Width:2.75rem;--fdMicro_Process_Flow_Item_Min_Width:1.875rem;--fdMicro_Process_Flow_Compact_Item_Width:2rem;--fdMicro_Process_Flow_Compact_Item_Min_Width:1.375rem;--fdMicro_Process_Flow_Connector_Width:1.125rem;--fdMicro_Process_Flow_Compact_Connector_Width:.625rem;--fdMicro_Process_Flow_Icon_Font_Size:var(--sapFontLargeSize);--fdMicro_Process_Flow_Visible_items:8;--fdMicro_Process_Flow_Max_Container_Width:calc(var(--fdMicro_Process_Flow_Item_Width)*(var(--fdMicro_Process_Flow_Visible_items) + 1) + .0625rem);--fdMicro_Process_Flow_Compact_Max_Container_Width:calc(var(--fdMicro_Process_Flow_Compact_Item_Width)*(var(--fdMicro_Process_Flow_Visible_items) + 1) + .0625rem)}.fd-micro-process-flow{-webkit-box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:row;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;max-width:var(--fdMicro_Process_Flow_Max_Container_Width);padding-block:0;padding-inline:0}.fd-micro-process-flow:after,.fd-micro-process-flow:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-micro-process-flow--independent-steps .fd-micro-process-flow__connector:before{border-color:transparent}.fd-micro-process-flow__wrapper{-webkit-box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-transition-property:-webkit-transform;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:row;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.fd-micro-process-flow__wrapper:after,.fd-micro-process-flow__wrapper:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-micro-process-flow__overflow-container{-webkit-box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:row;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;overflow:hidden;padding-block:0;padding-inline:0;width:100%}.fd-micro-process-flow__overflow-container:after,.fd-micro-process-flow__overflow-container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-micro-process-flow__link-next,.fd-micro-process-flow__link-previous{-webkit-box-sizing:border-box;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapGroup_TitleTextColor);cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;justify-content:flex-start;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;padding-inline:.313rem;text-shadow:var(--sapContent_TextShadow)}.fd-micro-process-flow__link-next:after,.fd-micro-process-flow__link-next:before,.fd-micro-process-flow__link-previous:after,.fd-micro-process-flow__link-previous:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-micro-process-flow__link-next.is-focus,.fd-micro-process-flow__link-next:focus,.fd-micro-process-flow__link-previous.is-focus,.fd-micro-process-flow__link-previous:focus{outline:var(--sapContent_FocusColor) var(--sapContent_FocusStyle) var(--sapContent_FocusWidth);outline-offset:-.1875rem}.fd-micro-process-flow__link-next:after,.fd-micro-process-flow__link-next:before,.fd-micro-process-flow__link-previous:after,.fd-micro-process-flow__link-previous:before{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--sapButton_TextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:SAP-icons;justify-content:center;text-align:center;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none}.fd-micro-process-flow__link-next.is-hover:after,.fd-micro-process-flow__link-next.is-hover:before,.fd-micro-process-flow__link-next:hover:after,.fd-micro-process-flow__link-next:hover:before,.fd-micro-process-flow__link-previous.is-hover:after,.fd-micro-process-flow__link-previous.is-hover:before,.fd-micro-process-flow__link-previous:hover:after,.fd-micro-process-flow__link-previous:hover:before{color:var(--sapButton_Hover_TextColor)}.fd-micro-process-flow__link-previous:before{-webkit-padding-end:.313rem;content:"\\e067";padding-inline-end:.313rem}.fd-micro-process-flow__link-previous[dir=rtl]:before,[dir=rtl] .fd-micro-process-flow__link-previous:before{content:"\\e066"}.fd-micro-process-flow__link-next{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.fd-micro-process-flow__link-next:after{-webkit-padding-start:.313rem;content:"\\e066";padding-inline-start:.313rem}.fd-micro-process-flow__link-next[dir=rtl]:after,[dir=rtl] .fd-micro-process-flow__link-next:after{content:"\\e067"}.fd-micro-process-flow .fd-micro-process-flow__item{-webkit-box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-padding-start:.1875rem;-webkit-box-pack:start;-ms-flex-pack:start;align-items:stretch;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;justify-content:center;justify-content:flex-start;line-height:normal;margin:calc(var(--sapContent_FocusWidth) + var(--sapContent_FocusWidth)) 0;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;padding-inline-start:.1875rem;position:relative}.fd-micro-process-flow .fd-micro-process-flow__item:after,.fd-micro-process-flow .fd-micro-process-flow__item:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-micro-process-flow .fd-micro-process-flow__item--positive{--fdMicro_Process_Flow_Item_Background:var(--sapPositiveElementColor);--fdMicro_Process_Flow_Item_Border_Color:var(--sapPositiveElementColor);--fdMicro_Process_Flow_Item_Hover_Background:var(--sapButton_Success_Hover_Background);--fdMicro_Process_Flow_Item_Hover_Border_Color:var(--sapButton_Success_Hover_Background);--fdMicro_Process_Flow_Item_Active_Background:var(--sapHighlightColor);--fdMicro_Process_Flow_Item_Active_Border_Color:var(--sapHighlightColor);--fdMicro_Process_Flow_Icon_Color:var(--fdMicro_Process_Flow_Active_Icon_Color)}.fd-micro-process-flow .fd-micro-process-flow__item--information{--fdMicro_Process_Flow_Item_Background:var(--sapInformativeElementColor);--fdMicro_Process_Flow_Item_Border_Color:var(--sapInformativeElementColor);--fdMicro_Process_Flow_Item_Hover_Background:var(--sapButton_Information_Hover_Background);--fdMicro_Process_Flow_Item_Hover_Border_Color:var(--sapButton_Information_Hover_Background);--fdMicro_Process_Flow_Item_Active_Background:var(--sapHighlightColor);--fdMicro_Process_Flow_Item_Active_Border_Color:var(--sapHighlightColor);--fdMicro_Process_Flow_Icon_Color:var(--fdMicro_Process_Flow_Active_Icon_Color)}.fd-micro-process-flow .fd-micro-process-flow__item--negative{--fdMicro_Process_Flow_Item_Background:var(--sapNegativeElementColor);--fdMicro_Process_Flow_Item_Border_Color:var(--sapNegativeElementColor);--fdMicro_Process_Flow_Item_Hover_Background:var(--sapButton_Negative_Hover_Background);--fdMicro_Process_Flow_Item_Hover_Border_Color:var(--sapButton_Negative_Hover_Background);--fdMicro_Process_Flow_Item_Active_Background:var(--sapHighlightColor);--fdMicro_Process_Flow_Item_Active_Border_Color:var(--sapHighlightColor);--fdMicro_Process_Flow_Icon_Color:var(--fdMicro_Process_Flow_Active_Icon_Color)}.fd-micro-process-flow .fd-micro-process-flow__item--critical{--fdMicro_Process_Flow_Item_Background:var(--sapCriticalElementColor);--fdMicro_Process_Flow_Item_Border_Color:var(--sapCriticalElementColor);--fdMicro_Process_Flow_Item_Hover_Background:var(--sapButton_Critical_Hover_Background);--fdMicro_Process_Flow_Item_Hover_Border_Color:var(--sapButton_Critical_Hover_Background);--fdMicro_Process_Flow_Item_Active_Background:var(--sapHighlightColor);--fdMicro_Process_Flow_Item_Active_Border_Color:var(--sapHighlightColor);--fdMicro_Process_Flow_Icon_Color:var(--fdMicro_Process_Flow_Active_Icon_Color)}.fd-micro-process-flow .fd-micro-process-flow__item--information .fd-micro-process-flow__icon-container.is-hover,.fd-micro-process-flow .fd-micro-process-flow__item--information .fd-micro-process-flow__icon-container:hover{--fdMicro_Process_Flow_Icon_Color:var(--sapButton_Information_Hover_TextColor);--fdMicro_Process_Flow_Item_Border_Color:var(--sapInformationBorderColor)}.fd-micro-process-flow .fd-micro-process-flow__item--information .fd-micro-process-flow__icon-container.is-active,.fd-micro-process-flow .fd-micro-process-flow__item--information .fd-micro-process-flow__icon-container:active{--fdMicro_Process_Flow_Icon_Color:var(--sapContent_ContrastIconColor);--fdMicro_Process_Flow_Item_Border_Color:var(--sapContent_Selected_ForegroundColor)}.fd-micro-process-flow .fd-micro-process-flow__item .fd-status-indicator .fdstatus-indicator__svg{width:auto}.fd-micro-process-flow__focusable-item.is-focus,.fd-micro-process-flow__focusable-item:focus{outline:var(--sapContent_FocusColor) var(--sapContent_FocusStyle) var(--sapContent_FocusWidth);outline-offset:.0625rem}.fd-micro-process-flow .fd-micro-process-flow__icon-container{-webkit-box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--fdMicro_Process_Flow_Item_Background);border:0;border:.0625rem solid var(--fdMicro_Process_Flow_Item_Border_Color);border-radius:50%;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;justify-content:center;line-height:normal;margin-block:0;margin-inline:0;min-height:var(--fdMicro_Process_Flow_Item_Min_Width);min-width:var(--fdMicro_Process_Flow_Item_Min_Width);padding-block:0;padding-inline:0}.fd-micro-process-flow .fd-micro-process-flow__icon-container:after,.fd-micro-process-flow .fd-micro-process-flow__icon-container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-micro-process-flow .fd-micro-process-flow__icon-container .fd-micro-process-flow__icon{color:var(--fdMicro_Process_Flow_Icon_Color);font-size:var(--fdMicro_Process_Flow_Icon_Font_Size)}.fd-micro-process-flow .fd-micro-process-flow__icon-container.is-hover,.fd-micro-process-flow .fd-micro-process-flow__icon-container:hover{--fdMicro_Process_Flow_Item_Background:var(--fdMicro_Process_Flow_Item_Hover_Background);--fdMicro_Process_Flow_Item_Border_Color:var(--fdMicro_Process_Flow_Item_Hover_Border_Color)}.fd-micro-process-flow .fd-micro-process-flow__icon-container.is-active,.fd-micro-process-flow .fd-micro-process-flow__icon-container:active{--fdMicro_Process_Flow_Item_Background:var(--fdMicro_Process_Flow_Item_Active_Background);--fdMicro_Process_Flow_Item_Border_Color:var(--fdMicro_Process_Flow_Item_Active_Border_Color);--fdMicro_Process_Flow_Icon_Color:var(--fdMicro_Process_Flow_Active_Icon_Color)}.fd-micro-process-flow__content{-webkit-box-sizing:border-box;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;justify-content:flex-start;line-height:normal;margin-block:0;margin-inline:0;min-height:var(--fdMicro_Process_Flow_Item_Min_Width);min-width:var(--fdMicro_Process_Flow_Item_Min_Width);padding-block:0;padding-inline:0;width:100%}.fd-micro-process-flow__content:after,.fd-micro-process-flow__content:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-micro-process-flow__connector{-webkit-box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-margin-start:.1875rem;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;flex-grow:1;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;height:100%;justify-content:center;line-height:normal;margin-block:0;margin-inline:0;margin-inline-start:.1875rem;min-width:var(--fdMicro_Process_Flow_Connector_Width);padding-block:0;padding-inline:0;position:relative}.fd-micro-process-flow__connector:after,.fd-micro-process-flow__connector:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-micro-process-flow__connector:before{border-bottom:.0625rem solid var(--sapContent_ForegroundBorderColor);content:"";display:block;position:absolute;width:100%;z-index:1}.fd-micro-process-flow__connector--intermediate:after{-webkit-margin-start:-.125rem;background:var(--sapNegativeElementColor);bottom:0;content:"";display:block;left:50%;margin-inline-start:-.125rem;position:absolute;top:0;width:.25rem;z-index:2}.fd-micro-process-flow__connector--intermediate[dir=rtl]:after,[dir=rtl] .fd-micro-process-flow__connector--intermediate:after{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}.fd-micro-process-flow__connector .fd-micro-process-flow__intermediary-item{line-height:1;position:relative;z-index:3}.fd-micro-process-flow[class*=-compact],.fd-micro-process-flow[class*=-condensed],[class*=-compact] .fd-micro-process-flow:not([class*=-cozy]),[class*=-condensed] .fd-micro-process-flow:not([class*=-cozy]){--fdMicro_Process_Flow_Item_Min_Width:var(--fdMicro_Process_Flow_Compact_Item_Min_Width);--fdMicro_Process_Flow_Connector_Width:var(--fdMicro_Process_Flow_Compact_Connector_Width);--fdMicro_Process_Flow_Icon_Font_Size:var(--sapFontSmallSize);--fdMicro_Process_Flow_Item_Width:var(--fdMicro_Process_Flow_Compact_Item_Width);--fdMicro_Process_Flow_Max_Container_Width:var(--fdMicro_Process_Flow_Compact_Max_Container_Width)}
/*!
 * Fundamental Library Styles v0.37.5
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0});let r=i;return r})();var ue=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=P({type:i,selectors:[["","fdMicroProcessFlowIntermediaryItem",""],["","fd-micro-process-flow-intermediary-item",""]],hostAttrs:[1,"fd-micro-process-flow__intermediary-item"],standalone:!0});let r=i;return r})();var to=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=q({type:i}),i.\u0275inj=O({});let r=i;return r})();export{ie as a,y as b,D as c,we as d,ue as e,to as f};
