import{$b as g,Aa as v,Eb as S,Fb as r,Gb as o,Ka as b,La as w,Pg as D,Rg as j,ba as x,bg as P,db as k,gb as M,ib as c,ja as s,ka as y,ob as F,pa as C,r as _,s as m,tb as d,ub as u,vb as z}from"./chunk-FZPMYWEN.js";var T=["*"],I=(()=>{let e=class e{constructor(){this.fdMessagePageActionsClass=!0}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["fd-message-page-actions"]],hostVars:2,hostBindings:function(t,a){t&2&&c("fd-message-page__actions",a.fdMessagePageActionsClass)},standalone:!0,features:[g],ngContentSelectors:T,decls:1,vars:0,template:function(t,a){t&1&&(r(),o(0))},encapsulation:2,changeDetection:0});let n=e;return n})();var B=["*"],E=(()=>{let e=class e{constructor(){this.fdMessagePageMoreClass=!0}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["fd-message-page-more"]],hostVars:2,hostBindings:function(t,a){t&2&&c("fd-message-page__more",a.fdMessagePageMoreClass)},standalone:!0,features:[g],ngContentSelectors:B,decls:1,vars:0,template:function(t,a){t&1&&(r(),o(0))},encapsulation:2,changeDetection:0});let n=e;return n})();var A=["*"],H=(()=>{let e=class e{constructor(){this.fdMessagePageTitleClass=!0}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["fd-message-page-subtitle"]],hostVars:2,hostBindings:function(t,a){t&2&&c("fd-message-page__subtitle",a.fdMessagePageTitleClass)},standalone:!0,features:[g],ngContentSelectors:A,decls:1,vars:0,template:function(t,a){t&1&&(r(),o(0))},encapsulation:2,changeDetection:0});let n=e;return n})();var V=["*"],L=(()=>{let e=class e{constructor(){this.fdMessagePageTitleClass=!0}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["fd-message-page-title"]],hostVars:2,hostBindings:function(t,a){t&2&&c("fd-message-page__title",a.fdMessagePageTitleClass)},standalone:!0,features:[g],ngContentSelectors:V,decls:1,vars:0,template:function(t,a){t&1&&(r(),o(0))},encapsulation:2,changeDetection:0});let n=e;return n})();var N=[[["fd-message-page-title"]],[["fd-message-page-subtitle"]],[["fd-message-page-actions"]],[["fd-message-page-more"]],"*"],O=["fd-message-page-title","fd-message-page-subtitle","fd-message-page-actions","fd-message-page-more","*"];function R(n,e){if(n&1&&(d(0,"div",1),z(1,"fd-icon",3),u()),n&2){let p=S();b(),M("glyph",p.glyph)("font",p.glyphFont)}}var l=class l{set glyph(e){e&&(this._glyph=e,this._getMessagePageIcon())}get glyph(){return this._glyph}constructor(e){this.elementRef=e,this.hasIcon=!0,this.glyphFont=D,this._glyph="documents"}buildComponentCssClass(){return["fd-message-page",this.class]}ngOnChanges(){this.buildComponentCssClass()}ngOnInit(){this.buildComponentCssClass(),this._getMessagePageIcon()}_getMessagePageIcon(){if(this.type)switch(this.type){case"filter":this._glyph="filter";break;case"search":this._glyph="search";break;case"no-items":this._glyph="product";break;case"error":this._glyph="document";break;default:this._glyph="documents"}}};l.\u0275fac=function(p){return new(p||l)(w(v))},l.\u0275cmp=s({type:l,selectors:[["fd-message-page"]],inputs:{class:"class",type:"type",hasIcon:"hasIcon",glyphFont:"glyphFont",glyph:"glyph"},standalone:!0,features:[C,g],ngContentSelectors:O,decls:8,vars:1,consts:[[1,"fd-message-page__container"],[1,"fd-message-page__icon-container"],["role","status","aria-live","polite",1,"fd-message-page__content"],["role","presentation",1,"fd-message-page__icon",3,"glyph","font"]],template:function(p,i){p&1&&(r(N),d(0,"div",0),k(1,R,2,2,"div",1),d(2,"div",2),o(3),o(4,1),o(5,2),o(6,3),o(7,4),u()()),p&2&&(b(),F(i.hasIcon?1:-1))},dependencies:[j],styles:[`.fd-message-page{-webkit-box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--sapBackgroundColor);border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;height:100%;justify-content:center;line-height:normal;margin:0;padding:0;width:100%}.fd-message-page:after,.fd-message-page:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-message-page__actions,.fd-message-page__container,.fd-message-page__content,.fd-message-page__more,.fd-message-page__subtitle,.fd-message-page__title{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin:0;max-width:30rem;padding:0}.fd-message-page__actions:after,.fd-message-page__actions:before,.fd-message-page__container:after,.fd-message-page__container:before,.fd-message-page__content:after,.fd-message-page__content:before,.fd-message-page__more:after,.fd-message-page__more:before,.fd-message-page__subtitle:after,.fd-message-page__subtitle:before,.fd-message-page__title:after,.fd-message-page__title:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-message-page__container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--fdMessage_Page_Container_Background);border-radius:var(--fdMessage_Page_Container_Corner_Radius);display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;padding:1rem}.fd-message-page__illustration-container{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin:0;max-height:15rem;max-width:20rem;padding:0}.fd-message-page__illustration-container:after,.fd-message-page__illustration-container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-message-page__icon-container{-webkit-box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;height:8rem;justify-content:center;line-height:normal;margin:0;padding:0;width:100%}.fd-message-page__icon-container:after,.fd-message-page__icon-container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-message-page__icon [class*=sap-icon],.fd-message-page__icon[class*=sap-icon]{background:inherit;border-radius:inherit;color:inherit;color:var(--sapContent_NonInteractiveIconColor);font-size:inherit;font-size:6rem;line-height:1;max-width:30rem;opacity:.5}.fd-message-page__content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;padding-bottom:2rem}.fd-message-page__title{color:var(--sapGroup_TitleTextColor);font-size:var(--sapFontHeader2Size);margin-bottom:var(--fdMessage_Page_Title_Margin_Bottom);margin-top:var(--fdMessage_Page_Title_Margin_Top);text-align:center}.fd-message-page__subtitle{color:var(--sapContent_LabelColor);font-size:var(--sapFontHeader5Size);margin-bottom:2rem}.fd-message-page__actions{-ms-flex-wrap:wrap;flex-wrap:wrap}.fd-message-page__actions,.fd-message-page__more{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;min-height:2rem}.fd-message-page__more{margin-top:.5rem}
/*!
 * Fundamental Library Styles v0.37.1
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0});var h=l;_([P,m("design:type",Function),m("design:paramtypes",[]),m("design:returntype",Array)],h.prototype,"buildComponentCssClass",null);var ne=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=x({});let n=e;return n})();export{I as a,E as b,H as c,L as d,h as e,ne as f};
