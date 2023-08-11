"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5242],{89048:(A,C,c)=>{c.d(C,{l:()=>I,r:()=>Z});var a=c(65879),D=c(4300),_=c(34423),y=c(47394),b=c(78645),v=c(59773),s=c(83620),m=c(32181),F=c(836),p=c(1013);const T=["*"];let M=(()=>{class e{constructor(d){this._elementRef=d}focus(){const d=this._elementRef.nativeElement.querySelector(".fd-card__header");d&&d.focus()}}return e.\u0275fac=function(d){return new(d||e)(a.Y36(a.SBq))},e.\u0275cmp=a.Xpm({type:e,selectors:[["fd-fixed-card-layout-item"]],hostAttrs:[2,"display","block"],ngContentSelectors:T,decls:1,vars:0,template:function(d,t){1&d&&(a.F$t(),a.Hsn(0))},encapsulation:2,changeDetection:0}),e})();var k=c(42495),w=c(96814),W=c(33776),O=c(33775);const R=["layout"];function E(e,i){1&e&&a.GkF(0)}function H(e,i){1&e&&a.GkF(0)}function G(e,i){if(1&e&&(a.TgZ(0,"div",8),a.YNc(1,H,1,0,"ng-container",6),a.qZA()),2&e){const d=a.oxw().$implicit,t=a.oxw();a.Udp("margin-bottom",+t._placeholderMargin,"rem"),a.xp6(1),a.Q6J("ngTemplateOutlet",(null==d?null:d.template)||null)}}function N(e,i){if(1&e){const d=a.EpF();a.TgZ(0,"div",4),a.NdJ("cdkDropListEntered",function(r){a.CHM(d);const o=a.oxw();return a.KtG(o._onDropListEntered(r))}),a.TgZ(1,"div",5),a.NdJ("cdkDragStarted",function(r){a.CHM(d);const o=a.oxw();return a.KtG(o._onDragStarted(r))})("cdkDragDropped",function(r){a.CHM(d);const o=a.oxw();return a.KtG(o._onDragDropped(r))}),a.TgZ(2,"fd-fixed-card-layout-item"),a.YNc(3,E,1,0,"ng-container",6),a.qZA(),a.YNc(4,G,2,3,"div",7),a.qZA()()}if(2&e){const d=i.$implicit,t=i.index,r=a.oxw();a.Udp("min-width",r._columnsWidth.get(d.fdCardDef),"px")("max-width",r._columnsWidth.get(d.fdCardDef),"px")("display",r._hiddenCard===d?"none":"block"),a.ekj("fd-fixed-card-layout__card--single",r._singleItemColumns.has(d.fdCardDef)),a.Q6J("cdkDropListData",t)("cdkDropListSortPredicate",r._sortPredicateFn),a.xp6(1),a.Q6J("cdkDragData",d)("cdkDragStartDelay",r.dragStartDelay)("itemIndex",r._itemIndexes.get(d.fdCardDef))("groupIndex",r._groupIndexes.get(d.fdCardDef)),a.xp6(2),a.Q6J("ngTemplateOutlet",(null==d?null:d.template)||null)}}function P(e,i){if(1&e&&a._UZ(0,"div",10),2&e){const d=a.oxw().index;a.Udp("order",d+1)}}function Y(e,i){if(1&e&&(a.ynx(0),a.YNc(1,P,1,2,"div",9),a.BQk()),2&e){const d=i.last;a.xp6(1),a.Q6J("ngIf",!d)}}const g=(0,p.mJU)(),z=20*g,j=g;let Q=1,I=(()=>{class e{set fdCardDef(d){d&&(this._fdCardDef=(0,k.su)(d))}get fdCardDef(){return this._fdCardDef}constructor(d){this.template=d,this._fdCardDef=Q++}}return e.\u0275fac=function(d){return new(d||e)(a.Y36(a.Rgc))},e.\u0275dir=a.lG2({type:e,selectors:[["","fdCardDef",""]],inputs:{fdCardDef:"fdCardDef"}}),e})(),Z=(()=>{class e{set cardMinimumWidth(d){const t=(0,k.su)(d);t<z||(this._cardMinimumWidth=t)}get cardMinimumWidth(){return this._cardMinimumWidth}get _availableWidth(){return this._layout.nativeElement.getBoundingClientRect().width}constructor(d,t){this._changeDetector=d,this._rtlService=t,this.dragStartDelay=200,this.maxColumns=10,this.layoutChange=new a.vpe,this.cardDraggedDropped=new a.vpe,this._containerHeight=0,this._dir="ltr",this._groupIndexes=new Map,this._itemIndexes=new Map,this._singleItemColumns=new Set,this._columnsWidth=new Map,this._listenResize=!0,this._cardMinimumWidth=z,this._cardsSizeChangeSubscription=new y.w0,this._onDestroy$=new b.x,this._sortPredicateFn=r=>0===r,this._customMoveFn=(r,o,l)=>{const f=r[o],n=r[l],u=this._cardsArray.findIndex(x=>x.fdCardDef===f.fdCardDef),h=this._cardsArray.findIndex(x=>x.fdCardDef===n.fdCardDef);this._processDragDrop(u,h,f,n)},this._customTransferFn=(r,o,l,f)=>{const n=r[l],u=o[f],h=this._cardsArray.findIndex(S=>S.fdCardDef===n.fdCardDef),x=this._cardsArray.findIndex(S=>S.fdCardDef===u.fdCardDef);this._processDragDrop(h,x,n,u)}}ngOnInit(){this._subscribeToRtl()}ngAfterViewInit(){this._processCards(),this._listenOnResize(),this._listenOnCardsChange(),this._accessibilitySetup()}ngOnChanges(d){this._cardsArray&&("maxColumns"in d||"cardMinimumWidth"in d?this.updateLayout():"columnsWidthConfig"in d&&this._setCardColumnsWidth())}ngOnDestroy(){this._cardsSizeChangeSubscription.unsubscribe(),this._keyboardEventsManager?.destroy(),this._onDestroy$.next(),this._onDestroy$.complete()}handleKeydown(d){d.stopImmediatePropagation(),this._keyboardEventsManager&&this._keyboardEventsManager.onKeydown(d)}updateLayout(){if(this._listenResize=!1,this._cards.length){const d=function K(e,i){e=e||1,i=i||1;const d=Math.max(Math.floor(e/i),1);return Math.max(d*i+(d-1)*j>e?d-1:d,1)}(this._availableWidth,this.cardMinimumWidth);this._numberOfColumns=Math.min(d,this._cards.length,this.maxColumns||10,10)}else this._numberOfColumns=1;this.layoutChange.emit({numberOfColumns:this._numberOfColumns,screenSize:this._availableWidth}),this._setCardColumns(),this._setCardColumnsWidth(),this._setContainerHeight(),this._listenResize=!0}_onDragStarted(d){this._listenResize=!1,this._hiddenCard=d.source.data}_onDropListEntered(d){const t=d.container.getSortedItems()[0].data.fdCardDef;this._placeholderMargin=t!==d.item.data.fdCardDef;const o=this._cardColumns.findIndex(f=>f.find(n=>d.container.getSortedItems()[0].data===n)),l=d.item.element.nativeElement.getBoundingClientRect().height+(d.container.getSortedItems().length?g:0);this._setContainerHeight(o,l)}_onDragDropped(d){if(this._hiddenCard=null,d.container.data===d.previousContainer.data)return;this._placeholderMargin=!1;const t=d.previousContainer.getSortedItems()[0].data,r=d.container.getSortedItems()[0].data,o=this._cardColumns.find(f=>f.find(n=>n.fdCardDef===t.fdCardDef));o===this._cardColumns.find(f=>f.find(n=>n.fdCardDef===r.fdCardDef))&&2===o?.length&&(t.fdCardDef<r.fdCardDef&&d.previousContainer.data<d.container.data||t.fdCardDef>r.fdCardDef&&d.previousContainer.data>d.container.data)||this._processDragDrop(d.previousContainer.data,d.container.data,t,r)}_processDragDrop(d,t,r,o){const l=this._cardsArray[t];this._cardsArray[t]=this._cardsArray[d],this._cardsArray[d]=l,function U(e,i){const d=e.fdCardDef;e.fdCardDef=i.fdCardDef,i.fdCardDef=d}(r,o),this.cardDraggedDropped.emit({previousIndex:d,currentIndex:t,layoutColumns:this._numberOfColumns,items:this._cards.toArray()}),this.updateLayout()}_accessibilitySetup(){this._keyboardEventsManager?.destroy(),this._keyboardEventsManager=new D.Em(this._cardContainers).withWrap()}_subscribeToRtl(){this._rtlService?.rtl.pipe((0,v.R)(this._onDestroy$)).subscribe(d=>{this._dir=d?"rtl":"ltr",this._changeDetector.markForCheck()})}_listenOnResize(){(0,p.qYq)(this._layout.nativeElement).pipe((0,s.b)(20),(0,m.h)(d=>this._listenResize&&!(!d[0].contentRect.height&&!d[0].contentRect.width)),(0,v.R)(this._onDestroy$)).subscribe(()=>this.updateLayout())}_listenOnCardsChange(){this._cards.changes.subscribe(()=>{this._processCards(),this.updateLayout()})}_processCards(){this._cardsArray=this._cards.toArray().sort((d,t)=>d.fdCardDef-t.fdCardDef)}_setCardColumns(){this._groupIndexes=new Map,this._itemIndexes=new Map,this._singleItemColumns=new Set;const d=new Array(this._numberOfColumns).fill(0).map(()=>new Array(0));this._cardsArray.forEach((t,r)=>{const o=r%this._numberOfColumns,l=d[o].length;d[o].push(t),this._groupIndexes.set(t.fdCardDef,o),this._itemIndexes.set(t.fdCardDef,l)}),this._cardColumns=d,this._cardColumns.forEach(t=>{1===t.length&&this._singleItemColumns.add(t[0].fdCardDef)}),this._listenOnCardsHeightChange()}_setCardColumnsWidth(){if(this._columnsWidth=new Map,!this.columnsWidthConfig||"object"!=typeof this.columnsWidthConfig||!Object.keys(this.columnsWidthConfig).length||1===this._numberOfColumns)return;const t=function B(e,i){return new Array(i).fill(0).map((t,r)=>{const o=e[r+1];return!o||o<0?0:o})}(this.columnsWidthConfig,this._numberOfColumns),r=t.reduce((l,f)=>l+f,0),o=this._availableWidth-this.cardMinimumWidth*this._numberOfColumns;this._cardColumns.forEach((l,f)=>{const n=Math.round(this.cardMinimumWidth+o/r*t[f]);l.forEach(u=>this._columnsWidth.set(u.fdCardDef,n))})}_setContainerHeight(d=-1,t=0){this._changeDetector.detectChanges();const o=this._cardColumns.map(f=>f.map(n=>this._dragList.find(u=>u.data===n)).filter(n=>!n?._dragRef.isDragging()&&!!n?.element?.nativeElement).map(n=>n?.element)).map(f=>f.map(n=>n?.nativeElement.getBoundingClientRect().height||0)).map((f,n)=>f.reduce((u,h)=>u+(h+g),0)+(n===d?t:0)),l=this._containerHeight;this._containerHeight=Math.ceil(Math.max(...o)+4),this._containerHeight!==l&&this._changeDetector.detectChanges()}_listenOnCardsHeightChange(){this._cardsSizeChangeSubscription.unsubscribe(),this._cardsSizeChangeSubscription=new y.w0,this._changeDetector.detectChanges(),this._cardColumns.forEach(d=>d.map(t=>this._dragList.find(r=>r.data===t)?.element).filter(t=>!!t).forEach(t=>{this._cardsSizeChangeSubscription.add((0,p.qYq)(t.nativeElement).pipe((0,F.T)(1),(0,s.b)(20),(0,m.h)(()=>this._listenResize&&!!this._layout.nativeElement.clientHeight)).subscribe(()=>this._setContainerHeight()))}))}}return e.\u0275fac=function(d){return new(d||e)(a.Y36(a.sBO),a.Y36(p.qFd,8))},e.\u0275cmp=a.Xpm({type:e,selectors:[["fd-fixed-card-layout"]],contentQueries:function(d,t,r){if(1&d&&a.Suo(r,I,4),2&d){let o;a.iGM(o=a.CRH())&&(t._cards=o)}},viewQuery:function(d,t){if(1&d&&(a.Gf(R,5),a.Gf(M,5),a.Gf(_.Zt,5)),2&d){let r;a.iGM(r=a.CRH())&&(t._layout=r.first),a.iGM(r=a.CRH())&&(t._cardContainers=r),a.iGM(r=a.CRH())&&(t._dragList=r)}},hostAttrs:[1,"fd-fixed-card-layout"],hostBindings:function(d,t){1&d&&a.NdJ("keydown",function(o){return t.handleKeydown(o)})},inputs:{disableDragDrop:"disableDragDrop",dragStartDelay:"dragStartDelay",cardMinimumWidth:"cardMinimumWidth",columnsWidthConfig:"columnsWidthConfig",maxColumns:"maxColumns"},outputs:{layoutChange:"layoutChange",cardDraggedDropped:"cardDraggedDropped"},features:[a.TTD],decls:4,vars:13,consts:[["cdkDropListGroup","","fdDndKeyboardGroup","","orientation","horizontal",3,"groups","customMoveFn","customTransferFn","disableKeyboardDragDrop","cdkDropListGroupDisabled"],["layout",""],["cdkDropList","","class","fd-fixed-card-layout__card",3,"fd-fixed-card-layout__card--single","min-width","max-width","display","cdkDropListData","cdkDropListSortPredicate","cdkDropListEntered",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["cdkDropList","",1,"fd-fixed-card-layout__card",3,"cdkDropListData","cdkDropListSortPredicate","cdkDropListEntered"],["cdkDrag","","fdDndKeyboardItem","","tabindex","0","cdkDragPreviewClass","fd-fixed-card-layout__card-preview",3,"cdkDragData","cdkDragStartDelay","itemIndex","groupIndex","cdkDragStarted","cdkDragDropped"],[4,"ngTemplateOutlet"],["class","fd-fixed-card-layout__card-placeholder",3,"margin-bottom",4,"cdkDragPlaceholder"],[1,"fd-fixed-card-layout__card-placeholder"],["class","fd-fixed-card-layout__clearfix",3,"order",4,"ngIf"],[1,"fd-fixed-card-layout__clearfix"]],template:function(d,t){1&d&&(a.TgZ(0,"div",0,1),a.YNc(2,N,5,15,"div",2),a.YNc(3,Y,2,1,"ng-container",3),a.qZA()),2&d&&(a.Gre("fd-fixed-card-layout__card-layout fd-fixed-card-layout__card-layout--columns-",t._numberOfColumns,""),a.Udp("height",t._containerHeight+"px"),a.Q6J("groups",t._cardColumns)("customMoveFn",t._customMoveFn)("customTransferFn",t._customTransferFn)("disableKeyboardDragDrop",t.disableDragDrop)("cdkDropListGroupDisabled",t.disableDragDrop),a.uIk("dir",t._dir),a.xp6(2),a.Q6J("ngForOf",t._cardsArray),a.xp6(1),a.Q6J("ngForOf",t._cardColumns))},dependencies:[w.sg,w.O5,w.tP,_.Wj,_.Fd,_.Zt,_.Hk,W.Y,O.F,M],styles:["/*!\n * Fundamental Library Styles v0.28.3\n * Copyright (c) 2023 SAP SE or an SAP affiliate company.\n * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)\n */.fd-fixed-card-layout{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:var(--sapContent_LineHeight);margin:0;padding:0}.fd-fixed-card-layout:after,.fd-fixed-card-layout:before{box-sizing:inherit;font-size:inherit}.fd-fixed-card-layout__card-layout{-webkit-box-sizing:border-box;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:flex;flex-direction:column;flex-wrap:wrap;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;justify-content:flex-start;line-height:var(--sapContent_LineHeight);margin:-1rem 0 0 -1rem;padding:0}.fd-fixed-card-layout__card-layout:after,.fd-fixed-card-layout__card-layout:before{box-sizing:inherit;font-size:inherit}.fd-fixed-card-layout__card-layout[dir=rtl],[dir=rtl] .fd-fixed-card-layout__card-layout{margin-left:0;margin-right:-1rem}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-2 .fd-fixed-card-layout__card{width:50%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-2 .fd-fixed-card-layout__card:nth-of-type(2n){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-2 .fd-fixed-card-layout__card:nth-of-type(odd){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-3 .fd-fixed-card-layout__card{width:33.3333333333%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-3 .fd-fixed-card-layout__card:nth-of-type(3n){order:3}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-3 .fd-fixed-card-layout__card:nth-of-type(3n+1){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-3 .fd-fixed-card-layout__card:nth-of-type(3n+2){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-4 .fd-fixed-card-layout__card{width:25%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-4 .fd-fixed-card-layout__card:nth-of-type(4n){order:4}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-4 .fd-fixed-card-layout__card:nth-of-type(4n+1){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-4 .fd-fixed-card-layout__card:nth-of-type(4n+2){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-4 .fd-fixed-card-layout__card:nth-of-type(4n+3){order:3}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-5 .fd-fixed-card-layout__card{width:20%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-5 .fd-fixed-card-layout__card:nth-of-type(5n){order:5}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-5 .fd-fixed-card-layout__card:nth-of-type(5n+1){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-5 .fd-fixed-card-layout__card:nth-of-type(5n+2){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-5 .fd-fixed-card-layout__card:nth-of-type(5n+3){order:3}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-5 .fd-fixed-card-layout__card:nth-of-type(5n+4){order:4}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-6 .fd-fixed-card-layout__card{width:16.6666666667%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-6 .fd-fixed-card-layout__card:nth-of-type(6n){order:6}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-6 .fd-fixed-card-layout__card:nth-of-type(6n+1){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-6 .fd-fixed-card-layout__card:nth-of-type(6n+2){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-6 .fd-fixed-card-layout__card:nth-of-type(6n+3){order:3}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-6 .fd-fixed-card-layout__card:nth-of-type(6n+4){order:4}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-6 .fd-fixed-card-layout__card:nth-of-type(6n+5){order:5}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-7 .fd-fixed-card-layout__card{width:14.2857142857%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-7 .fd-fixed-card-layout__card:nth-of-type(7n){order:7}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-7 .fd-fixed-card-layout__card:nth-of-type(7n+1){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-7 .fd-fixed-card-layout__card:nth-of-type(7n+2){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-7 .fd-fixed-card-layout__card:nth-of-type(7n+3){order:3}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-7 .fd-fixed-card-layout__card:nth-of-type(7n+4){order:4}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-7 .fd-fixed-card-layout__card:nth-of-type(7n+5){order:5}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-7 .fd-fixed-card-layout__card:nth-of-type(7n+6){order:6}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card{width:12.5%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card:nth-of-type(8n){order:8}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card:nth-of-type(8n+1){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card:nth-of-type(8n+2){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card:nth-of-type(8n+3){order:3}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card:nth-of-type(8n+4){order:4}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card:nth-of-type(8n+5){order:5}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card:nth-of-type(8n+6){order:6}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-8 .fd-fixed-card-layout__card:nth-of-type(8n+7){order:7}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card{width:11.1111111111%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n){order:9}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n+1){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n+2){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n+3){order:3}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n+4){order:4}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n+5){order:5}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n+6){order:6}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n+7){order:7}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-9 .fd-fixed-card-layout__card:nth-of-type(9n+8){order:8}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card{width:10%}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n){order:10}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+1){order:1}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+2){order:2}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+3){order:3}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+4){order:4}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+5){order:5}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+6){order:6}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+7){order:7}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+8){order:8}.fd-fixed-card-layout__card-layout.fd-fixed-card-layout__card-layout--columns-10 .fd-fixed-card-layout__card:nth-of-type(10n+9){order:9}.fd-fixed-card-layout__card,.fd-fixed-card-layout__card-placeholder{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:var(--sapContent_LineHeight);margin:0;min-height:.0625rem;min-width:20rem;padding:0}.fd-fixed-card-layout__card-placeholder:after,.fd-fixed-card-layout__card-placeholder:before,.fd-fixed-card-layout__card:after,.fd-fixed-card-layout__card:before{box-sizing:inherit;font-size:inherit}.fd-fixed-card-layout__card{order:1;padding-left:1rem;padding-top:1rem}.fd-fixed-card-layout__card[dir=rtl],[dir=rtl] .fd-fixed-card-layout__card{padding-left:0;padding-right:1rem}.fd-fixed-card-layout__card--single{flex-basis:100%}.fd-fixed-card-layout__card:empty{padding-top:0}.fd-fixed-card-layout__card-placeholder{border:.125rem dashed var(--sapContent_DragAndDropActiveColor);cursor:grabbing;opacity:.3}.fd-fixed-card-layout__card-preview{-webkit-box-sizing:border-box;-webkit-box-shadow:var(--sapContent_Shadow2);border:0;border-radius:var(--sapElement_BorderCornerRadius);box-shadow:var(--sapContent_Shadow2);box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:var(--sapContent_LineHeight);margin:0;padding:0}.fd-fixed-card-layout__card-preview:after,.fd-fixed-card-layout__card-preview:before{box-sizing:inherit;font-size:inherit}.fd-fixed-card-layout__clearfix{-webkit-box-sizing:border-box;-ms-flex-preferred-size:100%;border:0;box-sizing:border-box;color:var(--sapTextColor);flex-basis:100%;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:var(--sapContent_LineHeight);margin:0;padding:0;width:0}.fd-fixed-card-layout__clearfix:after,.fd-fixed-card-layout__clearfix:before{box-sizing:inherit;font-size:inherit}.fd-fixed-card-layout__card{width:100%}.fd-fixed-card-layout__card-layout{align-items:flex-start}.fd-fixed-card-layout__card-placeholder{width:100%;min-width:100%;max-width:100%}\n"],encapsulation:2,changeDetection:0}),e})()},35242:(A,C,c)=>{c.d(C,{bk:()=>b});var a=c(34423),D=c(96814),_=c(1013),y=c(65879);let b=(()=>{class s{}return s.\u0275fac=function(F){return new(F||s)},s.\u0275mod=y.oAB({type:s}),s.\u0275inj=y.cJS({imports:[D.ez,a._t,_.Vk4]}),s})();c(89048)}}]);