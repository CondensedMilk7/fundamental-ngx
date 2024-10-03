import{$b as B,Aa as a,Ab as S,Ba as E,Cb as H,Fb as P,Gb as z,Kb as h,La as d,Mb as b,Nb as g,Qa as p,ba as F,dg as A,ea as m,eb as k,h as v,ib as o,ja as I,ka as w,la as r,pa as R,r as C,s as l,tb as T,ub as D}from"./chunk-KLPBKWPE.js";var u=class t{constructor(_){this.elementRef=_}buildComponentCssClass(){return["fd-feed-input__thumb",this.placeholder?"fd-avatar--placeholder":"",this.class]}ngOnInit(){this.buildComponentCssClass()}ngOnChanges(){this.buildComponentCssClass()}static{this.\u0275fac=function(e){return new(e||t)(d(a))}}static{this.\u0275dir=r({type:t,selectors:[["","fdFeedInputAvatar",""]],inputs:{class:"class",placeholder:"placeholder"},standalone:!0,features:[R]})}};C([A,l("design:type",Function),l("design:paramtypes",[]),l("design:returntype",Array)],u.prototype,"buildComponentCssClass",null);var x=(()=>{class t{constructor(e,i){this._elementRef=e,this._renderer=i,this.disabled=!0}ngOnInit(){this.createArrowIcon()}get elementRef(){return this._elementRef}createArrowIcon(){let e=this._renderer.createElement("i");this._renderer.addClass(e,"sap-icon--feeder-arrow"),this._renderer.setAttribute(e,"role","presentation"),this._renderer.appendChild(this.elementRef.nativeElement,e)}static{this.\u0275fac=function(i){return new(i||t)(d(a),d(p))}}static{this.\u0275dir=r({type:t,selectors:[["","fdFeedInputButton",""]],hostAttrs:[1,"fd-button","fd-feed-input__submit-button","is-cozy"],hostVars:3,hostBindings:function(i,n){i&2&&(k("aria-disabled",n.disabled),o("is-disabled",n.disabled))},standalone:!0})}}return t})();var y=(()=>{class t{constructor(){this.valueChange=new E,this.elementRef=m(a),this._renderer=m(p)}onKeyup(){this.resize(),this.valueChange.emit(this.elementRef.nativeElement.value)}ngOnInit(){if(this.fdFeedInputTextareaMaxRows){let e=this._getTextareaLineHeight();this.elementRef.nativeElement.style.maxHeight=e*this.fdFeedInputTextareaMaxRows+"px"}}resize(){this._renderer.setStyle(this.elementRef.nativeElement,"height","inherit");let e=this._getTextareaTotalHeight();this._renderer.setStyle(this.elementRef.nativeElement,"height",`${e}px`)}_getTextareaLineHeight(){let e=window.getComputedStyle(this.elementRef.nativeElement).getPropertyValue("line-height");return e==="normal"?parseInt(window.getComputedStyle(this.elementRef.nativeElement).getPropertyValue("font-size"),10)*1.1:parseInt(e,10)}_getTextareaTotalHeight(){let e=window.getComputedStyle(this.elementRef.nativeElement);return parseInt(e.getPropertyValue("border-top-width"),10)+this.elementRef.nativeElement.scrollHeight+parseInt(e.getPropertyValue("border-bottom-width"),10)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=r({type:t,selectors:[["","fdFeedInputTextarea",""]],hostVars:5,hostBindings:function(i,n){i&1&&H("keyup",function(){return n.onKeyup()}),i&2&&(S("disabled",n.disabled),o("fd-feed-input__textarea",!0)("fd-textarea",!0))},inputs:{fdFeedInputTextareaMaxRows:"fdFeedInputTextareaMaxRows"},outputs:{valueChange:"valueChange"},standalone:!0})}}return t})();var j=["*"],M=(()=>{class t{constructor(){this.disabled=!1,this._subscriptions=new v}ngAfterContentInit(){this.disabled&&(this.textareaElement.disabled=!0),this._subscriptions.add(this.textareaElement.valueChange.subscribe(e=>this.buttonElement.disabled=!e))}ngOnDestroy(){this._subscriptions.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=I({type:t,selectors:[["fd-feed-input"]],contentQueries:function(i,n,c){if(i&1&&(h(c,y,5),h(c,x,5)),i&2){let s;b(s=g())&&(n.textareaElement=s.first),b(s=g())&&(n.buttonElement=s.first)}},inputs:{disabled:"disabled"},standalone:!0,features:[B],ngContentSelectors:j,decls:2,vars:2,consts:[[1,"fd-feed-input"]],template:function(i,n){i&1&&(P(),T(0,"div",0),z(1),D()),i&2&&o("is-disabled",n.disabled)},styles:[`.fd-feed-input{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;background-color:var(--sapField_Background);-ms-flex-direction:row;flex-direction:row;padding-block:1rem;padding-inline:1rem .5rem}.fd-feed-input:after,.fd-feed-input:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-input.is-disabled,.fd-feed-input:disabled,.fd-feed-input[aria-disabled=true]{cursor:not-allowed;opacity:1;pointer-events:auto}.fd-feed-input.is-disabled textarea::-webkit-input-placeholder,.fd-feed-input:disabled textarea::-webkit-input-placeholder,.fd-feed-input[aria-disabled=true] textarea::-webkit-input-placeholder{color:var(--sapTextColor, #32363a);font-style:var(--fdFeed_Input_Placeholder_Font_Style)}.fd-feed-input.is-disabled textarea::-moz-placeholder,.fd-feed-input:disabled textarea::-moz-placeholder,.fd-feed-input[aria-disabled=true] textarea::-moz-placeholder{color:var(--sapTextColor, #32363a);font-style:var(--fdFeed_Input_Placeholder_Font_Style)}.fd-feed-input.is-disabled textarea:-ms-input-placeholder,.fd-feed-input:disabled textarea:-ms-input-placeholder,.fd-feed-input[aria-disabled=true] textarea:-ms-input-placeholder{color:var(--sapTextColor, #32363a);font-style:var(--fdFeed_Input_Placeholder_Font_Style)}.fd-feed-input.is-disabled textarea::-ms-input-placeholder,.fd-feed-input:disabled textarea::-ms-input-placeholder,.fd-feed-input[aria-disabled=true] textarea::-ms-input-placeholder{color:var(--sapTextColor, #32363a);font-style:var(--fdFeed_Input_Placeholder_Font_Style)}.fd-feed-input.is-disabled textarea::placeholder,.fd-feed-input:disabled textarea::placeholder,.fd-feed-input[aria-disabled=true] textarea::placeholder{color:var(--sapTextColor, #32363a);font-style:var(--fdFeed_Input_Placeholder_Font_Style)}.fd-feed-input .fd-feed-input__thumb{display:none;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin-inline:0 .5rem}.fd-feed-input .fd-feed-input__textarea{margin-block:0;margin-inline:0;max-height:20rem;min-height:3rem;padding-block:.3125rem;padding-inline:.5rem}.fd-feed-input .fd-feed-input__submit-button{margin-block:auto .375rem;margin-inline:.5rem 0}.fd-feed-input .fd-feed-input__submit-button[dir=rtl],[dir=rtl] .fd-feed-input .fd-feed-input__submit-button{-webkit-transform:rotate(180deg);transform:rotate(180deg)}@media (width >= 25rem){.fd-feed-input{margin-top:1rem;-webkit-margin-after:1rem;margin-block-end:1rem}.fd-feed-input .fd-feed-input__thumb{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}}
/*!
 * Fundamental Library Styles v0.38.0
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0})}}return t})();var re=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=w({type:t})}static{this.\u0275inj=F({})}}return t})();export{u as a,x as b,y as c,M as d,re as e};
