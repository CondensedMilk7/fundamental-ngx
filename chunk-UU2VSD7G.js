import{K as I,y as F}from"./chunk-VK2A5WWN.js";import{Ab as f,Bc as V,Gb as y,Hb as T,Kb as k,Mb as v,Qc as E,Wb as S,ab as g,eb as o,fb as b,fc as C,gc as u,if as z,jf as D,nb as w,ob as L,pb as p,qa as _,qb as d,rb as c,wb as x,ya as s,yb as m,za as l}from"./chunk-LP45MGOR.js";function B(a,i){if(a&1){let r=x();d(0,"a",5),m("keydown.enter",function(){s(r);let e=f();return l(e.toggleTextView())})("click",function(){s(r);let e=f();return l(e.toggleTextView())}),k(1),C(2,"fdTranslate"),C(3,"fdTranslate"),c()}if(a&2){let r=f();o(1),v(" ",r.isCollapsed?u(2,1,"coreText.moreLabel"):u(3,3,"coreText.lessLabel")," ")}}var N=(()=>{let i=class i{get _isCollapsed(){return this.isCollapsed&&!!this.maxLines&&this.maxLines>0}get _expandable(){return this.expandable&&!!this.maxLines&&this.maxLines>0}constructor(n){this._changeDetectorRef=n,this.maxLines=null,this.whitespaces=!1,this.hyphenation=null,this.expandable=!1,this.isCollapsed=!0,this.isCollapsedChange=new g,this._hasMore=!1}toggleTextView(){this.isCollapsed=!this.isCollapsed,this.isCollapsedChange.emit(this.isCollapsed)}checkLineCount(n){this._hasMore=!!this.maxLines&&n>this.maxLines,this._changeDetectorRef.detectChanges()}};i.\u0275fac=function(e){return new(e||i)(b(V))},i.\u0275cmp=_({type:i,selectors:[["fd-text"]],inputs:{text:"text",maxLines:"maxLines",whitespaces:"whitespaces",hyphenation:"hyphenation",expandable:"expandable",isCollapsed:"isCollapsed"},outputs:{isCollapsedChange:"isCollapsedChange"},standalone:!0,features:[S],decls:5,vars:8,consts:[[1,"fd-text"],["fdkLineClamp","",1,"fd-text__lineclamp",3,"fdLineclampState","fdLineClampLines","lineCountUpdate"],["lineClamp","fdLineClamp"],["fdkLineClampTarget","",3,"fdLineClampTargetText","update"],["fd-link","","tabindex","0","class","fd-text__link--more",3,"keydown.enter","click",4,"ngIf"],["fd-link","","tabindex","0",1,"fd-text__link--more",3,"keydown.enter","click"]],template:function(e,t){if(e&1){let P=x();d(0,"p",0)(1,"span",1,2),m("lineCountUpdate",function(h){return t.checkLineCount(h)}),d(3,"span",3),m("update",function(h){s(P);let A=L(2);return l(A.refreshTarget(h))}),c()(),w(4,B,4,5,"a",4),c()}e&2&&(y("hyphens",t.hyphenation),T("fd-text--pre-wrap",t.whitespaces),o(1),p("fdLineclampState",t._isCollapsed)("fdLineClampLines",t.maxLines),o(2),p("fdLineClampTargetText",t.text),o(1),p("ngIf",t._expandable&&t._hasMore))},dependencies:[D,z,I,F,E],styles:[`.fd-text{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:var(--sapContent_LineHeight);margin:0;padding:0}.fd-text:after,.fd-text:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-text::-moz-selection{background-color:var(--fdText_Selected_Background_Color);color:var(--sapContent_ContrastTextColor)}.fd-text::selection{background-color:var(--fdText_Selected_Background_Color);color:var(--sapContent_ContrastTextColor)}.fd-text--max-lines{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.fd-text--pre-wrap{white-space:pre-wrap}.fd-text--hyphenation{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.fd-text__link--more{cursor:pointer;text-transform:uppercase}.fd-text__lineclamp{display:block}.fd-text__link--more{text-transform:uppercase;cursor:pointer}
/*!
 * Fundamental Library Styles v0.32.0-rc.7
 * Copyright (c) 2023 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0});let a=i;return a})();export{N as a};
