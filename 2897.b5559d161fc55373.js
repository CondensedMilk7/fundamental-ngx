"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2897],{91071:(M,v,n)=>{n.d(v,{U:()=>h});var e=n(47429),g=n(83537),s=n(5e3);const C=["*"];let h=(()=>{class f{constructor(a){this.elementRef=a,this._attached=!1}get _needsClickProxy(){var a;return!(null===(a=this.breadcrumbLink)||void 0===a||!a.elementRef().nativeElement.getAttribute("href"))||!!this.breadcrumbLink.routerLink}ngAfterViewInit(){this._attach()}setPortal(){this.portal||(this.portal=new e.Xp(this.elementRef))}_detach(){var a,u,l,m;!this._attached||(!(null===(a=this.linkContentPortal)||void 0===a)&&a.isAttached&&(null===(u=this.linkContentPortal)||void 0===u||u.detach()),!(null===(l=this.breadcrumbItemPortal)||void 0===l)&&l.isAttached&&(null===(m=this.breadcrumbItemPortal)||void 0===m||m.detach()),this._attached=!1)}_attach(){this._attached||(this.breadcrumbLink&&this.breadcrumbLink.contentSpan&&(this.linkContentPortal=new e.Xp(this.breadcrumbLink.contentSpan.nativeElement)),this.breadcrumbItemPortal=new e.Xp(this.elementRef.nativeElement.firstElementChild),this._attached=!0)}}return f.\u0275fac=function(a){return new(a||f)(s.Y36(s.SBq))},f.\u0275cmp=s.Xpm({type:f,selectors:[["fd-breadcrumb-item"]],contentQueries:function(a,u,l){if(1&a&&s.Suo(l,g.N0,5),2&a){let m;s.iGM(m=s.CRH())&&(u.breadcrumbLink=m.first)}},hostAttrs:[1,"fd-breadcrumb__item"],ngContentSelectors:C,decls:1,vars:0,template:function(a,u){1&a&&(s.F$t(),s.Hsn(0))},encapsulation:2,changeDetection:0}),f})()},9045:(M,v,n)=>{n.d(v,{L:()=>N});var e=n(5e3),g=n(56180),s=n(6738),C=n(61135),h=n(82722),f=n(44604),b=n(91071),a=n(69808),u=n(79754),l=n(49034),m=n(8451),y=n(92899),P=n(66583),O=n(14598),B=n(11545),d=n(94311),E=n(47429),I=n(20145),D=n(59107),L=n(43727),T=n(25757);function w(r,c){}function A(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"div",4),e.NdJ("hiddenChange",function(i){e.CHM(t);const _=e.oxw().$implicit,p=e.oxw();return e.KtG(p._onHiddenChange(i,_))}),e.YNc(1,w,0,0,"ng-template",5),e.qZA()}if(2&r){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("cdkPortalOutlet",t.portal)}}function R(r,c){if(1&r&&(e.ynx(0),e.YNc(1,A,2,1,"div",3),e.BQk()),2&r){const t=c.$implicit;e.xp6(1),e.Q6J("fdOverflowItemRef",t)}}function k(r,c){if(1&r&&(e.ynx(0),e._UZ(1,"fd-menu-addon",15),e.BQk()),2&r){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("glyph",t.item.breadcrumbLink._prefixIconName)}}function K(r,c){if(1&r&&(e.ynx(0),e._UZ(1,"fd-menu-addon",16),e.BQk()),2&r){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("glyph",t.item.breadcrumbLink._postfixIconName)}}function U(r,c){if(1&r&&(e.ynx(0),e.YNc(1,k,2,1,"ng-container",13),e.TgZ(2,"span",14),e.GkF(3,5),e.qZA(),e.YNc(4,K,2,1,"ng-container",13),e.BQk()),2&r){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",t.item.breadcrumbLink._prefixIconName),e.xp6(2),e.Q6J("cdkPortalOutlet",t.item.linkContentPortal),e.xp6(1),e.Q6J("ngIf",t.item.breadcrumbLink._postfixIconName)}}function Q(r,c){if(1&r&&(e.TgZ(0,"span",14),e.GkF(1,5),e.qZA()),2&r){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("cdkPortalOutlet",t.item.breadcrumbItemPortal)}}function H(r,c){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",9)(2,"a",10),e.NdJ("click",function(i){const p=e.CHM(t).$implicit,x=e.oxw(2);return e.KtG(x.itemClicked(p.item,i))})("keydown.enter",function(i){const p=e.CHM(t).$implicit,x=e.oxw(2);return e.KtG(x.itemClicked(p.item,i))})("keydown.space",function(i){const p=e.CHM(t).$implicit,x=e.oxw(2);return e.KtG(x.itemClicked(p.item,i))}),e.YNc(3,U,5,3,"ng-container",11),e.YNc(4,Q,2,1,"ng-template",null,12,e.W1O),e.qZA()(),e.BQk()}if(2&r){const t=c.$implicit,o=e.MAs(5);e.xp6(1),e.Q6J("disabled",!!t.item.breadcrumbLink&&t.item.breadcrumbLink.disabled),e.xp6(2),e.Q6J("ngIf",null==t?null:t.item.breadcrumbLink)("ngIfElse",o)}}function W(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"span",17)(1,"a",18),e.NdJ("keydown.enter",function(i){e.CHM(t);const _=e.oxw(2);return e.KtG(_._keyDownHandle(i))})("keydown.space",function(i){e.CHM(t);const _=e.oxw(2);return e.KtG(_._keyDownHandle(i))}),e._uU(2," \u2026 "),e._UZ(3,"fd-icon",19),e.qZA()()}if(2&r){e.oxw();const t=e.MAs(2);e.Q6J("fdMenuTrigger",t)}}function F(r,c){if(1&r&&(e.ynx(0),e.TgZ(1,"fd-menu",6,7),e.ALo(3,"async"),e.YNc(4,H,6,3,"ng-container",1),e.qZA(),e.YNc(5,W,4,1,"span",8),e.BQk()),2&r){const t=c.$implicit,o=e.oxw();e.xp6(1),e.Q6J("closeOnEscapeKey",!0)("focusAutoCapture",!0)("placement",e.lcZ(3,5,o._placement$)),e.xp6(3),e.Q6J("ngForOf",t),e.xp6(1),e.Q6J("ngIf",t.length>0)}}const J=["*"];let N=(()=>{class r{constructor(t,o,i,_){this.elementRef=t,this._onDestroy$=o,this._rtlService=i,this._cdr=_,this.reverse=!1,this.tabIndex="0",this.visibleItemsCount=new e.vpe,this.hiddenItemsCount=new e.vpe,this._items=[],this._placement$=new C.X("bottom-start")}set containerElement(t){(0,e.X6Q)()&&console.warn("Breadcrumbs component now uses more advanced calculation mechanism without the need of specifying the container element.")}ngOnInit(){var t;null===(t=this._rtlService)||void 0===t||t.rtl.pipe((0,h.R)(this._onDestroy$)).subscribe(o=>this._placement$.next(o?"bottom-end":"bottom-start"))}onResize(){this._overflowLayout.triggerRecalculation()}itemClicked(t,o){t._needsClickProxy&&(o.preventDefault(),t.breadcrumbLink.elementRef().nativeElement.click())}ngAfterViewInit(){this._setItems(),this._contentItems.changes.subscribe(()=>this._setItems())}_keyDownHandle(t){this._menuComponent.toggle(),t.preventDefault()}_onHiddenChange(t,o){t?o._attach():o._detach()}_onVisibleItemsCountChange(t){this.visibleItemsCount.emit(t)}_onHiddenItemsCountChange(t){this.hiddenItemsCount.emit(t)}_setItems(){this._contentItems.forEach(t=>t.setPortal()),this._items=this._contentItems.toArray(),this._cdr.detectChanges()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(e.SBq),e.Y36(s._Z),e.Y36(s.qF,8),e.Y36(e.sBO))},r.\u0275cmp=e.Xpm({type:r,selectors:[["fd-breadcrumb"]],contentQueries:function(t,o,i){if(1&t&&(e.Suo(i,b.U,4),e.Suo(i,b.U,4)),2&t){let _;e.iGM(_=e.CRH())&&(o._contentItems=_),e.iGM(_=e.CRH())&&(o.breadcrumbItems=_)}},viewQuery:function(t,o){if(1&t&&(e.Gf(f.Mn,5),e.Gf(g.qV,5)),2&t){let i;e.iGM(i=e.CRH())&&(o._menuComponent=i.first),e.iGM(i=e.CRH())&&(o._overflowLayout=i.first)}},hostAttrs:["role","tree",1,"fd-breadcrumb"],inputs:{containerElement:"containerElement",reverse:"reverse",tabIndex:"tabIndex"},outputs:{visibleItemsCount:"visibleItemsCount",hiddenItemsCount:"hiddenItemsCount"},features:[e._Bn([s._Z])],ngContentSelectors:J,decls:4,vars:4,consts:[["showMorePosition","left",3,"reverseHiddenItems","enableKeyboardNavigation","visibleItemsCount","hiddenItemsCount"],[4,"ngFor","ngForOf"],[4,"fdOverflowExpand","fdOverflowExpandItems"],["fdOverflowLayoutItem","",3,"hiddenChange",4,"fdOverflowItemRef"],["fdOverflowLayoutItem","",3,"hiddenChange"],[3,"cdkPortalOutlet"],[3,"closeOnEscapeKey","focusAutoCapture","placement"],["menu",""],["class","fd-breadcrumb__item",3,"fdMenuTrigger",4,"ngIf"],["fd-menu-item","",3,"disabled"],["fd-menu-interactive","",3,"click","keydown.enter","keydown.space"],[4,"ngIf","ngIfElse"],["portalContent",""],[4,"ngIf"],["fd-menu-title",""],["position","before",3,"glyph"],[3,"glyph"],[1,"fd-breadcrumb__item",3,"fdMenuTrigger"],["fd-link","","tabindex","0",1,"fd-breadcrumb__collapsed",3,"keydown.enter","keydown.space"],["glyph","slim-arrow-down"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"fd-overflow-layout",0),e.NdJ("visibleItemsCount",function(_){return o._onVisibleItemsCountChange(_)})("hiddenItemsCount",function(_){return o._onHiddenItemsCountChange(_)}),e.YNc(1,R,2,1,"ng-container",1),e.YNc(2,F,6,7,"ng-container",2),e.qZA(),e.Hsn(3)),2&t&&(e.Q6J("reverseHiddenItems",!o.reverse)("enableKeyboardNavigation",!1),e.xp6(1),e.Q6J("ngForOf",o._items),e.xp6(1),e.Q6J("fdOverflowExpandItems",o._items))},dependencies:[a.sg,a.O5,u.o,l.M,m.qv,y.K,P.h,O.T,B.k,d.N,E.Pl,I.q,D.t,L._,T.A,a.Ov],styles:['/*!\n * Fundamental Library Styles v0.26.0-rc.27\n * Copyright (c) 2022 SAP SE or an SAP affiliate company.\n * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)\n *//*!\n.fd-breadcrumb\n    .fd-breadcrumb__item\n    .fd-breadcrump__link\n*/.fd-breadcrumb{-webkit-box-sizing:border-box;-ms-flex-wrap:wrap;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:flex;flex-wrap:wrap;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;line-height:var(--sapContent_LineHeight);list-style:none;margin:0;padding:0}.fd-breadcrumb:after,.fd-breadcrumb:before{box-sizing:inherit;font-size:inherit}.fd-breadcrumb__item{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;line-height:var(--sapContent_LineHeight);margin:0;padding:0}.fd-breadcrumb__item:after,.fd-breadcrumb__item:before{box-sizing:inherit;font-size:inherit}.fd-breadcrumb__item:after{color:var(--sapContent_LabelColor);content:"/";margin-left:.25rem;margin-right:.25rem}.fd-breadcrumb__item:last-child:after{content:none}.fd-breadcrumb__item .fd-breadcrumb__popover-body{border:none;border-top-left-radius:.125rem;border-top-right-radius:.125rem}.fd-breadcrumb{display:flex;white-space:nowrap}.fd-breadcrumb .fd-breadcrumb__collapsed{cursor:pointer}.fd-breadcrumb .fd-overflow-layout{justify-content:start}.fd-breadcrumb .fd-breadcrumb__item:last-child:after{content:"/"}.fd-breadcrumb .fd-overflow-layout__item--last .fd-breadcrumb__item:after{content:none}\n'],encapsulation:2,changeDetection:0}),r})()},72897:(M,v,n)=>{n.d(v,{LI:()=>O.L,wH:()=>y,nv:()=>B});var e=n(69808),g=n(14257),s=n(56180),C=n(80686),h=n(72232),f=n(44604),b=n(83537),a=n(47429),u=n(6738),l=n(6472),m=n(5e3);let y=(()=>{class d{}return d.\u0275fac=function(I){return new(I||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[e.ez,C.Q,h.UU,f.$9,b.LO,a.eL,u.dr,l.jO,s.D6,g.hJ,b.LO,l.jO]}),d})();n(91071);var O=n(9045);let B=(()=>{class d extends l.TU{constructor(){super("fd-breadcrumb")}}return d.\u0275fac=function(I){return new(I||d)},d.\u0275dir=m.lG2({type:d,selectors:[["fd-breadcrumb","compact",""]],features:[m._Bn([{provide:l.SM,useExisting:(0,m.Gpc)(()=>d)}]),m.qOj]}),d})()}}]);