import{$b as l,Aa as B,C as k,Eb as y,Fa as W,Fb as s,Gb as r,Ka as f,La as u,Xc as P,ba as S,db as D,dg as j,eb as h,gb as H,h as z,hb as T,ib as p,ja as o,ka as w,la as m,ob as b,pa as F,r as C,s as c,sa as I,tb as M,tc as E,ub as v,vb as _}from"./chunk-KLPBKWPE.js";var A=["fd-illustrated-message-figcaption",""],L=[[["","fd-illustrated-message-title",""]],[["","fd-illustrated-message-text",""]]],O=["[fd-illustrated-message-title]","[fd-illustrated-message-text]"],R=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=o({type:t,selectors:[["","fd-illustrated-message-figcaption",""]],hostAttrs:[1,"fd-illustrated-message__figcaption"],standalone:!0,features:[l],attrs:A,ngContentSelectors:O,decls:2,vars:0,template:function(i,d){i&1&&(s(L),r(0),r(1,1))},encapsulation:2,changeDetection:0})}}return t})();var $=(()=>{class t{constructor(){this.fdIllustratedMessageTextClass=!0}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=m({type:t,selectors:[["","fd-illustrated-message-text",""]],hostVars:2,hostBindings:function(i,d){i&2&&p("fd-illustrated-message__text",d.fdIllustratedMessageTextClass)},standalone:!0})}}return t})();var N=(()=>{class t{constructor(){this.fdIllustratedMessageTitleClass=!0}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=m({type:t,selectors:[["","fd-illustrated-message-title",""]],hostVars:2,hostBindings:function(i,d){i&2&&p("fd-illustrated-message__title",d.fdIllustratedMessageTitleClass)},standalone:!0})}}return t})();var V=["fd-illustrated-message",""],G=[[["","fd-illustrated-message-figcaption",""]],[["fd-illustrated-message-actions"]]],q=["[fd-illustrated-message-figcaption]","fd-illustrated-message-actions"];function U(t,n){if(t&1&&(I(),M(0,"svg",1),_(1,"use"),v()),t&2){let e=y();h("aria-label",e.svgAriaLabel),f(),h("href",e._href)}}function J(t,n){if(t&1&&_(0,"div",3),t&2){let e=y();T("display","none"),H("innerHTML",e._inlineSvg,W)}}var a=function(t){return t.SCENE="scene",t.DIALOG="dialog",t.SPOT="spot",t.DOT="dot",t.BASE="base",t}(a||{}),K=0,x=class t{constructor(n,e,i){this.elementRef=n,this._cdRef=e,this._sanitizer=i,this.type=a.SCENE,this.noSvg=!1,this.id="fd-illustrated-message-"+K++,this._subscriptions=new z}buildComponentCssClass(){return["fd-illustrated-message",this.type?`fd-illustrated-message--${this.type}`:"",this.class]}ngOnChanges(n){this.buildComponentCssClass(),"svgConfig"in n&&this._constructHref()}ngOnInit(){this.buildComponentCssClass(),this._constructHref()}ngAfterViewInit(){this._containerWidth=this.elementRef.nativeElement.offsetWidth,this._constructHref(),this._subscriptions.add(k(window,"resize").subscribe(()=>this._constructHref()))}ngOnDestroy(){this._subscriptions.unsubscribe()}_constructHref(){let n;if(this._inlineSvg=void 0,this._containerWidth=this.elementRef.nativeElement.offsetWidth,this._containerWidth>=682&&(this.type=a.SCENE),this._containerWidth>=361&&this._containerWidth<=681&&(this.type=a.DIALOG),this._containerWidth>=261&&this._containerWidth<=360&&(this.type=a.SPOT),this._containerWidth>=161&&this._containerWidth<=260&&(this.type=a.DOT),this._containerWidth<=160&&(this.type=a.BASE),this.svgConfig)switch(this.type){case a.SCENE:n=this.svgConfig.scene?.file,this._href=`${this.svgConfig.scene?.url||""}#${this.svgConfig.scene?.id}`;break;case a.DIALOG:n=this.svgConfig.dialog?.file,this._href=`${this.svgConfig.dialog?.url||""}#${this.svgConfig.dialog?.id}`;break;case a.SPOT:n=this.svgConfig.spot?.file,this._href=`${this.svgConfig.spot?.url||""}#${this.svgConfig.spot?.id}`;break;case a.DOT:n=this.svgConfig.dot?.file,this._href=`${this.svgConfig.dot?.url||""}#${this.svgConfig.dot?.id}`;break}n&&(this._inlineSvg=this._sanitizer.bypassSecurityTrustHtml(n)),this.buildComponentCssClass(),this._cdRef.detectChanges()}static{this.\u0275fac=function(e){return new(e||t)(u(B),u(E),u(P))}}static{this.\u0275cmp=o({type:t,selectors:[["","fd-illustrated-message",""]],hostVars:1,hostBindings:function(e,i){e&2&&h("id",i.id)},inputs:{type:"type",svgConfig:"svgConfig",svgAriaLabel:"svgAriaLabel",noSvg:"noSvg",id:"id",class:"class"},standalone:!0,features:[F,l],attrs:V,ngContentSelectors:q,decls:5,vars:2,consts:[[1,"fd-illustrated-message__container"],[1,"fd-illustrated-message__illustration"],[3,"display","innerHTML"],[3,"innerHTML"]],template:function(e,i){e&1&&(s(G),M(0,"div",0),D(1,U,2,2,":svg:svg",1)(2,J,1,3,"div",2),r(3),v(),r(4,1)),e&2&&(f(),b(!i.noSvg||i._inlineSvg?1:-1),f(),b(i._inlineSvg?2:-1))},styles:[`.fd-illustrated-message{--illustratedMessagePadding:1rem;--illustratedMessageMaxWidth:auto;--actionsMarginInline:0;--actionsMarginBlock:1rem;--actionsPaddingInlineStart:0;--actionsPaddingInlineEnd:0;--illustrationMinWidth:15rem;--illustrationMaxWidth:20rem;--illustrationMinHeight:11.25rem;--illustrationMaxHeight:15rem;--illustrationMarginBlock:2rem;--illustrationMarginInlineStart:0;--illustrationMarginInlineEnd:0;--illustrationDisplay:flex;--containerFlexDirection:column;--figcaptionMaxWidth:61.9375rem;--titleMinWidth:auto;--titleMarginBottom:1rem;--titleFontSize:var(--sapFontHeader2Size);--textMinWidth:auto;--textMarginBottom:.5rem;border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:var(--illustratedMessageMaxWidth);min-height:100%;padding-block:var(--illustratedMessagePadding);padding-inline:var(--illustratedMessagePadding);text-align:center;width:100%}.fd-illustrated-message:after,.fd-illustrated-message:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message-responsive-container{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;container-type:inline-size;height:100%;min-height:100%;width:100%}.fd-illustrated-message-responsive-container:after,.fd-illustrated-message-responsive-container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__container{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:var(--containerFlexDirection);flex-direction:var(--containerFlexDirection)}.fd-illustrated-message__container:after,.fd-illustrated-message__container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__illustration{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:var(--illustrationDisplay);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;height:auto;line-height:normal;margin-block:0;margin-block:var(--illustrationMarginBlock);margin-inline:0;margin-inline:var(--illustrationMarginInlineStart) var(--illustrationMarginInlineEnd);max-height:var(--illustrationMaxHeight);max-width:var(--illustrationMaxWidth);min-height:var(--illustrationMinHeight);min-width:var(--illustrationMinWidth);padding-block:0;padding-inline:0;width:auto}.fd-illustrated-message__illustration:after,.fd-illustrated-message__illustration:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__figcaption{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:var(--figcaptionMaxWidth);overflow:hidden}.fd-illustrated-message__figcaption:after,.fd-illustrated-message__figcaption:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__title{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapGroup_TitleTextColor);font-family:var(--sapFontFamily);font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontSize);font-size:var(--titleFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;text-align:center;width:100%;-webkit-margin-after:var(--titleMarginBottom);margin-block-end:var(--titleMarginBottom)}.fd-illustrated-message__title:after,.fd-illustrated-message__title:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__text{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;line-height:1.5;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;text-align:center;text-wrap:wrap;-webkit-margin-after:var(--textMarginBottom);margin-block-end:var(--textMarginBottom)}.fd-illustrated-message__text:after,.fd-illustrated-message__text:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message__actions{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:.5rem;margin-block:var(--actionsMarginBlock);margin-inline:var(--actionsMarginInline);padding-inline:var(--actionsPaddingInlineStart) var(--actionsPaddingInlineEnd)}.fd-illustrated-message__actions:after,.fd-illustrated-message__actions:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-illustrated-message--dialog{--illustrationMinWidth:10rem;--illustrationMinHeight:10rem;--illustrationMaxWidth:10rem;--illustrationMaxHeight:10rem;--illustrationMarginBlock:1rem;--titleMarginBottom:.5rem;--titleFontSize:var(--sapFontHeader3Size);--figcaptionMaxWidth:40.5625rem;--actionsMarginBlock:.5rem 1rem}.fd-illustrated-message--spot{--illustratedMessagePadding:.5rem;--illustrationMinWidth:8rem;--illustrationMinHeight:8rem;--illustrationMaxWidth:8rem;--illustrationMaxHeight:8rem;--illustrationMarginBlock:0 .5rem;--titleMarginBottom:.5rem;--titleFontSize:var(--sapFontHeader4Size);--figcaptionMaxWidth:21.5rem;--actionsMarginBlock:.5rem}.fd-illustrated-message--dot{--illustratedMessagePadding:.25rem;--containerFlexDirection:row;--illustrationMinWidth:2.8125rem;--illustrationMaxWidth:2.8125rem;--illustrationMinHeight:2.8125rem;--illustrationMaxHeight:2.8125rem;--illustrationMarginBlock:0;--illustrationMarginInlineEnd:.25rem;--figcaptionMaxWidth:12.6875rem;--titleMarginBottom:.25rem;--titleFontSize:var(--sapFontHeader5Size);--textMarginBottom:.313rem;--actionsMarginBlock:.25rem;--actionsMarginInline:auto;--actionsPaddingInlineStart:var(--illustrationMaxWidth)}.fd-illustrated-message--base{--illustratedMessagePadding:.25rem;--illustratedMessageMaxWidth:auto;--illustrationDisplay:none;--figcaptionMaxWidth:12.6875rem;--titleMarginBottom:.25rem;--titleFontSize:var(--sapFontHeader5Size);--textMarginBottom:.313rem;--actionsMarginBlock:.25rem;--actionsMarginInline:auto;--actionsPaddingInlineStart:0}@container (width <= 681px){.fd-illustrated-message{--illustrationMinWidth:10rem;--illustrationMinHeight:10rem;--illustrationMaxWidth:10rem;--illustrationMaxHeight:10rem;--illustrationMarginBlock:1rem;--titleMarginBottom:.5rem;--titleFontSize:var(--sapFontHeader3Size);--figcaptionMaxWidth:40.5625rem;--actionsMarginBlock:.5rem 1rem}}@container (width <= 360px){.fd-illustrated-message{--illustratedMessagePadding:.5rem;--illustrationMinWidth:8rem;--illustrationMinHeight:8rem;--illustrationMaxWidth:8rem;--illustrationMaxHeight:8rem;--illustrationMarginBlock:0 .5rem;--titleMarginBottom:.5rem;--titleFontSize:var(--sapFontHeader4Size);--figcaptionMaxWidth:21.5rem;--actionsMarginBlock:.5rem}}@container (width <= 260px){.fd-illustrated-message{--illustratedMessagePadding:.25rem;--containerFlexDirection:row;--illustrationMinWidth:2.8125rem;--illustrationMaxWidth:2.8125rem;--illustrationMinHeight:2.8125rem;--illustrationMaxHeight:2.8125rem;--illustrationMarginBlock:0;--illustrationMarginInlineEnd:.25rem;--figcaptionMaxWidth:12.6875rem;--titleMarginBottom:.25rem;--titleFontSize:var(--sapFontHeader5Size);--textMarginBottom:.313rem;--actionsMarginBlock:.25rem;--actionsMarginInline:auto;--actionsPaddingInlineStart:var(--illustrationMaxWidth)}}@container (width <= 160px){.fd-illustrated-message{--illustratedMessagePadding:.25rem;--illustratedMessageMaxWidth:auto;--illustrationDisplay:none;--figcaptionMaxWidth:12.6875rem;--titleMarginBottom:.25rem;--titleFontSize:var(--sapFontHeader5Size);--textMarginBottom:.313rem;--actionsMarginBlock:.25rem;--actionsMarginInline:auto;--actionsPaddingInlineStart:0}}.fd-illustrated-message__illustration{height:var(--illustrationMaxWidth)}
/*!
 * Fundamental Library Styles v0.38.0
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0})}};C([j,c("design:type",Function),c("design:paramtypes",[]),c("design:returntype",Array)],x.prototype,"buildComponentCssClass",null);var Q=["*"],X=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=o({type:t,selectors:[["fd-illustrated-message-actions"]],hostAttrs:[1,"fd-illustrated-message__actions"],standalone:!0,features:[l],ngContentSelectors:Q,decls:1,vars:0,template:function(i,d){i&1&&(s(),r(0))},encapsulation:2,changeDetection:0})}}return t})();var mt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=w({type:t})}static{this.\u0275inj=S({})}}return t})();export{X as a,R as b,$ as c,N as d,x as e,mt as f};
