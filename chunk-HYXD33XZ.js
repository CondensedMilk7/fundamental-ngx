import{$b as j,Aa as y,Ae as A,Ba as k,Bg as R,Cb as D,Cg as $,Eb as h,Fb as I,Gb as c,Ka as s,Kb as L,La as f,Mb as z,Nb as E,Wa as S,Yg as O,_b as F,db as _,ea as x,eb as o,gb as P,hb as B,ib as l,ja as v,kb as H,la as d,ob as b,qa as C,ra as w,tb as m,ub as p,xc as u,zb as T}from"./chunk-DO4CUQ4Q.js";var Q=0,M=(()=>{let e=class e{constructor(){this.fdPanelContentClass=!0,this.role="region",this._defaultId="fd-panel-content-"+Q++,this._id=this._defaultId}set id(a){this._id=a||this._defaultId}get id(){return this._id}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=d({type:e,selectors:[["","fd-panel-content",""]],hostVars:12,hostBindings:function(t,n){t&2&&(o("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("role",n.role)("id",n.id),B("height",n.height)("min-height",n.minHeight)("max-height",n.maxHeight),l("fd-panel__content",n.fdPanelContentClass))},inputs:{height:"height",minHeight:"minHeight",maxHeight:"maxHeight",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",role:"role",id:"id"},standalone:!0});let i=e;return i})();var U=0,Z=(()=>{let e=class e{constructor(){this.fdPanelTitleClass=!0,this.id="fd-panel-title-"+U++}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=d({type:e,selectors:[["","fd-panel-title",""]],hostVars:3,hostBindings:function(t,n){t&2&&(o("id",n.id),l("fd-panel__title",n.fdPanelTitleClass))},inputs:{id:"id"},standalone:!0});let i=e;return i})();var G=[[["","fd-panel-title",""]],"*",[["","fd-panel-content",""]]],N=["[fd-panel-title]","*","[fd-panel-content]"];function J(i,e){if(i&1){let r=T();m(0,"div",2)(1,"button",3),D("click",function(){C(r);let t=h();return w(t.toggleExpand())}),p()()}if(i&2){let r=h();s(),l("is-expanded",r.expanded),P("glyph",r._buttonIcon$())("id",r.expandId)("ariaLabel",r.expandAriaLabel)("title",r.expandAriaLabel),o("aria-expanded",r.expanded)("aria-controls",r.panelContent==null?null:r.panelContent.id)("aria-labelledby",r.expandAriaLabelledBy+" "+r.expandId)}}function K(i,e){i&1&&c(0,2)}var W=0,X=0,he=(()=>{let e=class e{set expanded(a){this._expanded$.set(a)}get expanded(){return this._expanded$()}constructor(a,t){this.elementRef=a,this._contentDensityObserver=t,this.id="fd-panel-"+W++,this.expandId="fd-panel-expand-"+X++,this.expandedChange=new k,this._buttonIcon$=u(()=>this._expanded$()?"slim-arrow-down":this._rtl$()?"slim-arrow-left":"slim-arrow-right"),this._expanded$=S(!1),this._rtlService=x(A,{optional:!0}),this._rtl$=u(()=>!!this._rtlService?.rtlSignal())}toggleExpand(){this._expanded$.update(a=>!a),this.expandedChange.emit(this.expanded)}};e.\u0275fac=function(t){return new(t||e)(f(y),f(R))},e.\u0275cmp=v({type:e,selectors:[["fd-panel"]],contentQueries:function(t,n,q){if(t&1&&L(q,M,5),t&2){let g;z(g=E())&&(n.panelContent=g.first)}},hostVars:1,hostBindings:function(t,n){t&2&&o("id",n.id)},inputs:{class:"class",fixed:"fixed",id:"id",expandId:"expandId",expandAriaLabel:"expandAriaLabel",expandAriaLabelledBy:"expandAriaLabelledBy",expanded:"expanded"},outputs:{expandedChange:"expandedChange"},standalone:!0,features:[F([$()]),j],ngContentSelectors:N,decls:6,vars:6,consts:[[1,"fd-panel"],[1,"fd-panel__header"],[1,"fd-panel__expand"],["fd-button","","fdType","transparent",1,"fd-panel__button",3,"click","glyph","id","ariaLabel","title"]],template:function(t,n){t&1&&(I(G),m(0,"div",0)(1,"div",1),_(2,J,2,9,"div",2),c(3),c(4,1),p(),_(5,K,1,0),p()),t&2&&(H(n.class),l("fd-panel--fixed",n.fixed),s(2),b(n.fixed?-1:2),s(3),b(n.expanded||n.fixed?5:-1))},dependencies:[O],styles:[`.fd-panel{--fdPanel_Header_Height:2.75rem;border-radius:var(--fdPanel_Border_Radius);overflow:hidden}.fd-panel,.fd-panel__content,.fd-panel__expand,.fd-panel__header,.fd-panel__title{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0}.fd-panel:after,.fd-panel:before,.fd-panel__content:after,.fd-panel__content:before,.fd-panel__expand:after,.fd-panel__expand:before,.fd-panel__header:after,.fd-panel__header:before,.fd-panel__title:after,.fd-panel__title:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-panel:not(:last-child){-webkit-margin-after:var(--fdPanel_Margin_Bottom);margin-block-end:var(--fdPanel_Margin_Bottom)}.fd-panel__header{-webkit-padding-end:.5rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--sapGroup_TitleBackground);border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);display:-webkit-box;display:-ms-flexbox;display:flex;height:var(--fdPanel_Header_Height);min-height:var(--fdPanel_Header_Height);overflow:hidden;padding-inline-end:.5rem}.fd-panel__title{-webkit-box-flex:1;-ms-flex:1;color:var(--sapGroup_TitleTextColor);flex:1;font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontHeader4Size);font-size:var(--fdPanel_Title_Font_Size)}.fd-panel__content{background:var(--fdPanel_Content_Background_Color);border-bottom:.0625rem solid var(--fdPanel_Content_Border_Bottom_Color);overflow:auto;padding-block:.625rem;padding-inline:1rem;scrollbar-color:var(--fdScrollbar_Thumb_Color) var(--fdScrollbar_Track_Color)}.fd-panel__content.is-focus,.fd-panel__content:focus{outline:none;z-index:5}.fd-panel__content::-webkit-scrollbar{height:var(--fdScrollbar_Dimension);width:var(--fdScrollbar_Dimension)}.fd-panel__content::-webkit-scrollbar-corner,.fd-panel__content::-webkit-scrollbar-track{background-color:var(--fdScrollbar_Track_Color)}.fd-panel__content::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Color);background-color:transparent;border:var(--fdScrollbar_Thumb_Offset) solid transparent;border-radius:calc(var(--fdScrollbar_Thumb_Border_Radius) - var(--fdScrollbar_Thumb_Offset));box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Color)}.fd-panel__content::-webkit-scrollbar-thumb:active,.fd-panel__content::-webkit-scrollbar-thumb:hover{-webkit-box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Hover_Color);box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Hover_Color)}.fd-panel__content::-webkit-scrollbar-corner,.fd-panel__content::-webkit-scrollbar-track{border-radius:0 var(--fdScrollbar_Border_Radius) var(--fdScrollbar_Border_Radius) 0}.fd-panel__content[dir=rtl]::-webkit-scrollbar-corner,.fd-panel__content[dir=rtl]::-webkit-scrollbar-track,[dir=rtl] .fd-panel__content::-webkit-scrollbar-corner,[dir=rtl] .fd-panel__content::-webkit-scrollbar-track{border-radius:var(--fdScrollbar_Border_Radius) 0 0 var(--fdScrollbar_Border_Radius)}.fd-panel__content[aria-hidden=true]{display:none}.fd-panel__expand{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:var(--fdPanel_Header_Height);justify-content:center;min-height:var(--fdPanel_Header_Height);width:2.75rem}.fd-panel__button{font-size:1rem}.fd-panel__button[dir=rtl] .sap-icon--slim-arrow-right,[dir=rtl] .fd-panel__button .sap-icon--slim-arrow-right{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fd-panel--fixed .fd-panel__header{-webkit-padding-start:1rem;padding-inline-start:1rem}.fd-panel--borderless .fd-panel__header{border-bottom:none}.fd-panel--transparent .fd-panel__content{background:transparent}.fd-panel[class*=-compact],.fd-panel[class*=-condensed],[class*=-compact] .fd-panel:not([class*=-cozy]),[class*=-condensed] .fd-panel:not([class*=-cozy]){--fdPanel_Header_Height:2.5rem}
/*!
 * Fundamental Library Styles v0.37.5
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0});let i=e;return i})();export{M as a,Z as b,he as c};
