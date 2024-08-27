import{$b as l,Aa as B,C as k,Eb as C,Fa as D,Fb as r,Gb as o,Ka as x,La as u,Vc as P,ba as z,bg as R,db as H,eb as p,gb as T,h as y,hb as I,ib as b,ja as a,ka as M,la as m,ob as v,pa as S,r as w,s as f,sa as F,tb as j,tc as A,ub as W,vb as _}from"./chunk-TFUNESOQ.js";var $=["fd-illustrated-message-figcaption",""],L=[[["","fd-illustrated-message-title",""]],[["","fd-illustrated-message-text",""]]],E=["[fd-illustrated-message-title]","[fd-illustrated-message-text]"],V=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a({type:t,selectors:[["","fd-illustrated-message-figcaption",""]],hostAttrs:[1,"fd-illustrated-message__figcaption"],standalone:!0,features:[l],attrs:$,ngContentSelectors:E,decls:2,vars:0,template:function(e,g){e&1&&(r(L),o(0),o(1,1))},encapsulation:2,changeDetection:0});let i=t;return i})();var N=(()=>{let t=class t{constructor(){this.fdIllustratedMessageTextClass=!0}};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=m({type:t,selectors:[["","fd-illustrated-message-text",""]],hostVars:2,hostBindings:function(e,g){e&2&&b("fd-illustrated-message__text",g.fdIllustratedMessageTextClass)},standalone:!0});let i=t;return i})();var O=(()=>{let t=class t{constructor(){this.fdIllustratedMessageTitleClass=!0}};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=m({type:t,selectors:[["","fd-illustrated-message-title",""]],hostVars:2,hostBindings:function(e,g){e&2&&b("fd-illustrated-message__title",g.fdIllustratedMessageTitleClass)},standalone:!0});let i=t;return i})();var G=["fd-illustrated-message",""],q=[[["","fd-illustrated-message-figcaption",""]],[["fd-illustrated-message-actions"]]],U=["[fd-illustrated-message-figcaption]","fd-illustrated-message-actions"];function J(i,t){if(i&1&&(F(),j(0,"svg",0),_(1,"use"),W()),i&2){let s=C();p("aria-label",s.svgAriaLabel),x(),p("href",s._href)}}function K(i,t){if(i&1&&_(0,"div",2),i&2){let s=C();I("display","none"),T("innerHTML",s._inlineSvg,D)}}var Q=0,d=class d{constructor(t,s,n){this.elementRef=t,this._cdRef=s,this._sanitizer=n,this.type="scene",this.noSvg=!1,this.id="fd-illustrated-message-"+Q++,this._subscriptions=new y}buildComponentCssClass(){return["fd-illustrated-message",this.type?`fd-illustrated-message--${this.type}`:"",this.class]}ngOnChanges(t){this.buildComponentCssClass(),"svgConfig"in t&&this._constructHref()}ngOnInit(){this.buildComponentCssClass(),this._constructHref()}ngAfterViewInit(){this.type==="scene"&&this._subscriptions.add(k(window,"resize").subscribe(()=>this._constructHref()))}ngOnDestroy(){this._subscriptions.unsubscribe()}_constructHref(){let t;if(this._inlineSvg=void 0,this.svgConfig)switch(this.type){case"scene":this._isSmallScreen=window.innerWidth<600,t=this._isSmallScreen?this.svgConfig.dialog?.file:this.svgConfig.scene?.file,this._href=this._isSmallScreen?`${this.svgConfig.dialog?.url||""}#${this.svgConfig.dialog?.id}`:`${this.svgConfig.scene?.url||""}#${this.svgConfig.scene?.id}`;break;case"dialog":t=this.svgConfig.dialog?.file,this._href=`${this.svgConfig.dialog?.url||""}#${this.svgConfig.dialog?.id}`;break;case"spot":t=this.svgConfig.spot?.file,this._href=`${this.svgConfig.spot?.url||""}#${this.svgConfig.spot?.id}`;break;case"dot":t=this.svgConfig.dot?.file,this._href=`${this.svgConfig.dot?.url||""}#${this.svgConfig.dot?.id}`;break}t&&(this._inlineSvg=this._sanitizer.bypassSecurityTrustHtml(t)),this._cdRef.detectChanges()}};d.\u0275fac=function(s){return new(s||d)(u(B),u(A),u(P))},d.\u0275cmp=a({type:d,selectors:[["","fd-illustrated-message",""]],hostVars:1,hostBindings:function(s,n){s&2&&p("id",n.id)},inputs:{type:"type",svgConfig:"svgConfig",svgAriaLabel:"svgAriaLabel",noSvg:"noSvg",id:"id",class:"class"},standalone:!0,features:[S,l],attrs:G,ngContentSelectors:U,decls:4,vars:2,consts:[[1,"fd-illustrated-message__illustration"],[3,"display","innerHTML"],[3,"innerHTML"]],template:function(s,n){s&1&&(r(q),H(0,J,2,2,":svg:svg",0)(1,K,1,3,"div",1),o(2),o(3,1)),s&2&&(v(!n.noSvg||n._inlineSvg?0:-1),x(),v(n._inlineSvg?1:-1))},styles:[`.fd-illustrated-message{--illustratedMessagePadding:1rem;--illustratedMessageMaxWidth:30rem;--illustrationW:20rem;--illustrationH:15rem;--illustrationMarginBlock:2rem;--illustrationMarginInline:0;--figcaptionMaxWidth:25rem;--titleMarginBottom:1rem;--titleFontSize:var(--sapFontHeader2Size);--textMarginBottom:.5rem;--actionsMarginBlock:1rem;--actionsMarginInline:0;-webkit-box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;height:auto;line-height:normal;margin-block:0;margin-inline:0;max-width:var(--illustratedMessageMaxWidth);padding-block:0;padding-block:var(--illustratedMessagePadding);padding-inline:0;padding-inline:var(--illustratedMessagePadding);text-align:center;width:auto}.fd-illustrated-message:after,.fd-illustrated-message:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message-container{-webkit-box-sizing:border-box;background:var(--sapGroup_ContentBackground);border:0;border-radius:.5rem;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-block:1rem;padding-inline:0;padding-inline:1rem;width:auto}.fd-illustrated-message-container:after,.fd-illustrated-message-container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__illustration{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;height:var(--illustrationH);line-height:normal;margin-block:0;margin-block:var(--illustrationMarginBlock);margin-inline:0;margin-inline:var(--illustrationMarginInline);padding-block:0;padding-inline:0;width:var(--illustrationW)}.fd-illustrated-message__illustration:after,.fd-illustrated-message__illustration:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__figcaption{-webkit-box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;overflow:hidden;padding-block:0;padding-inline:0;width:100%}.fd-illustrated-message__figcaption:after,.fd-illustrated-message__figcaption:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__title{-webkit-box-sizing:border-box;-webkit-margin-after:var(--titleMarginBottom);border:0;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapGroup_TitleTextColor);font-family:var(--sapFontFamily);font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontSize);font-size:var(--titleFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-block-end:var(--titleMarginBottom);margin-inline:0;max-width:var(--figcaptionMaxWidth);padding-block:0;padding-inline:0;text-align:center;width:100%}.fd-illustrated-message__title:after,.fd-illustrated-message__title:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__text{-webkit-box-sizing:border-box;-webkit-margin-after:var(--textMarginBottom);border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-block-end:var(--textMarginBottom);margin-inline:0;max-width:var(--figcaptionMaxWidth);padding-block:0;padding-inline:0;text-align:center}.fd-illustrated-message__text:after,.fd-illustrated-message__text:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__actions{-webkit-box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;gap:.5rem;justify-content:center;line-height:normal;margin-block:0;margin-block:var(--actionsMarginBlock);margin-inline:0;margin-inline:var(--actionsMarginInline);padding-block:0;padding-inline:0;width:100%}.fd-illustrated-message__actions:after,.fd-illustrated-message__actions:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}@media screen and (width <= 599px){.fd-illustrated-message{--illustratedMessageMaxWidth:20rem;--illustrationW:15rem;--illustrationH:11.25rem;--figcaptionMaxWidth:18rem}}.fd-illustrated-message--dialog{--illustrationW:10rem;--illustrationH:10rem;--illustrationMarginBlock:1rem;--titleMarginBottom:.5rem;--titleFontSize:var(--sapFontHeader3Size);--actionsMarginBlock:.5rem 1rem}.fd-illustrated-message--spot{--illustratedMessagePadding:.5rem;--illustrationW:8rem;--illustrationH:8rem;--illustrationMarginBlock:0 .5rem;--actionsMarginBlock:.5rem;--titleMarginBottom:.5rem;--titleFontSize:var(--sapFontHeader4Size)}.fd-illustrated-message--dot{--illustratedMessagePadding:.25rem;--illustrationW:2.813rem;--illustrationH:2.813rem;--illustrationMarginBlock:0;--textMarginBottom:.313rem;--titleMarginBottom:.25rem;--titleFontSize:var(--sapFontHeader5Size);--actionsMarginBlock:.25rem;--illustrationMarginRight:.25rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.fd-illustrated-message--dot .fd-illustrated-message__illustration{-webkit-margin-end:var(--illustrationMarginRight);margin-inline-end:var(--illustrationMarginRight)}.fd-illustrated-message--dot .fd-illustrated-message__illustration+.fd-illustrated-message__figcaption{width:calc(100% - var(--illustrationW) - var(--illustrationMarginRight))}
/*!
 * Fundamental Library Styles v0.37.7
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0});var h=d;w([R,f("design:type",Function),f("design:paramtypes",[]),f("design:returntype",Array)],h.prototype,"buildComponentCssClass",null);var X=["*"],Y=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a({type:t,selectors:[["fd-illustrated-message-actions"]],hostAttrs:[1,"fd-illustrated-message__actions"],standalone:!0,features:[l],ngContentSelectors:X,decls:1,vars:0,template:function(e,g){e&1&&(r(),o(0))},encapsulation:2,changeDetection:0});let i=t;return i})();var mt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=M({type:t}),t.\u0275inj=z({});let i=t;return i})();export{Y as a,V as b,N as c,O as d,h as e,mt as f};
