"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6214],{25942:(F,b,i)=>{i.d(b,{I:()=>e});var n=i(81374),c=i(65879),u=i(24412),_=i(15177);let e=(()=>{class m{constructor(v,l){this._ngZone=v,this._timelinePositionControlService=l}calculatePositions(){this._ngZone.onStable.pipe((0,n.P)()).subscribe(()=>{this._timelinePositionControlService.calculatePositions()})}}return m.\u0275fac=function(v){return new(v||m)(c.Y36(c.R0b),c.Y36(u.J))},m.\u0275cmp=c.Xpm({type:m,selectors:[["fd-timeline-node-body"]],hostAttrs:[1,"fd-timeline__post-content"],inputs:{content:"content",maxLines:"maxLines"},decls:1,vars:4,consts:[[3,"maxLines","text","isCollapsed","expandable","isCollapsedChange"]],template:function(v,l){1&v&&(c.TgZ(0,"fd-text",0),c.NdJ("isCollapsedChange",function(){return l.calculatePositions()}),c.qZA()),2&v&&c.Q6J("maxLines",l.maxLines||0)("text",l.content)("isCollapsed",!!l.maxLines)("expandable",!!l.maxLines)},dependencies:[_.T],encapsulation:2,changeDetection:0}),m})()},92988:(F,b,i)=>{i.d(b,{s:()=>u});var n=i(65879);const c=["*"];let u=(()=>{class _{}return _.\u0275fac=function(m){return new(m||_)},_.\u0275cmp=n.Xpm({type:_,selectors:[["fd-timeline-node-header"]],hostAttrs:[1,"fd-timeline__post-header-container"],ngContentSelectors:c,decls:1,vars:0,template:function(m,z){1&m&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),_})()},49384:(F,b,i)=>{i.d(b,{u:()=>v});var n=i(65879),c=i(24412),u=i(96814),_=i(12887);const e=["lineEl"];function m(l,r){if(1&l&&n._UZ(0,"fd-icon",7),2&l){const o=n.oxw();n.Q6J("glyph",o.glyph)}}const z=["*"];let v=(()=>{class l{constructor(o,f){this.el=o,this._timelinePositionControl=f,this.ariaLabel="timelineitem"}ngOnInit(){this._timelinePositionControl.registerNode(this)}ngOnDestroy(){this._timelinePositionControl.removeNode(this)}}return l.\u0275fac=function(o){return new(o||l)(n.Y36(n.SBq),n.Y36(c.J))},l.\u0275cmp=n.Xpm({type:l,selectors:[["fd-timeline-node"]],viewQuery:function(o,f){if(1&o&&n.Gf(e,5),2&o){let h;n.iGM(h=n.CRH())&&(f.lineEl=h.first)}},hostAttrs:[1,"fd-timeline__node-wrapper"],hostVars:2,hostBindings:function(o,f){2&o&&n.ekj("fd-timeline__node-wrapper--icon",!!f.glyph)},inputs:{glyph:"glyph",ariaLabel:"ariaLabel"},ngContentSelectors:z,decls:8,vars:4,consts:[[1,"fd-timeline__node-container"],[1,"fd-timeline__icon-wrapper"],[1,"fd-timeline__node"],[3,"glyph",4,"ngIf"],[1,"fd-timeline__connecting-line"],["lineEl",""],["role","timelineitem",1,"fd-timeline__post"],[3,"glyph"]],template:function(o,f){1&o&&(n.F$t(),n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n.YNc(3,m,1,1,"fd-icon",3),n.qZA()(),n._UZ(4,"div",4,5),n.qZA(),n.TgZ(6,"div",6),n.Hsn(7),n.qZA()),2&o&&(n.xp6(2),n.ekj("fd-timeline__node--icon",!!f.glyph),n.xp6(1),n.Q6J("ngIf",f.glyph),n.xp6(3),n.uIk("aria-label",f.ariaLabel))},dependencies:[u.O5,_.o],encapsulation:2,changeDetection:0}),l})()},70013:(F,b,i)=>{i.d(b,{M:()=>c,a:()=>u});var n=i(65879);class c{constructor(e){this.$implicit=e}}let u=(()=>{class _{constructor(m){this.template=m}}return _.\u0275fac=function(m){return new(m||_)(n.Y36(n.Rgc))},_.\u0275dir=n.lG2({type:_,selectors:[["","fdTimelineNodeDef",""],["","fd-timeline-node-def",""]],inputs:{fdTimelineNodeData:"fdTimelineNodeData"}}),_})()},36214:(F,b,i)=>{i.d(b,{kV:()=>z});var n=i(96814),c=i(33764),u=i(83267),_=i(22624),e=i(1013),m=i(65879);let z=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=m.oAB({type:o}),o.\u0275inj=m.cJS({imports:[n.ez,c.QX,u.Y,_.m,e.iEm]}),o})();i(74946),i(49384),i(25942)},24412:(F,b,i)=>{i.d(b,{J:()=>v});class n{constructor(){this.SMALL_OFFSET=14,this.BIG_OFFSET=30,this.VERTICAL_TOP_LIST_OFFSET=24}_getOffset(r){return r.glyph?this.BIG_OFFSET:this.SMALL_OFFSET}_getTwoListFromOne(r){const o=Math.ceil(r.length/2);return[r.slice(0,o),r.slice(o,r.length)]}_setStylesForSingleList(r,o){const[f,h]="horizontal"===o?["offsetLeft","width"]:["offsetTop","height"];r.forEach((x,S)=>{const T=r[S+1];if(T){const B=T.el.nativeElement[f]-x.el.nativeElement[f]-this._getOffset(x);x.lineEl.nativeElement.style[h]=B+"px"}else x.lineEl.nativeElement.style.opacity="0"})}_setStylesForDoubleList(r,o){const[f,h]=this._getTwoListFromOne(r),[x,S,T]="horizontal"===o?["offsetLeft","width","offsetWidth"]:["offsetTop","height","offsetHeight"];h.forEach((y,s)=>{const p=y.el.nativeElement,t=f[s].el.nativeElement;if("vertical"===o){h[s].el.nativeElement.style.marginTop=`${this.SMALL_OFFSET}px`;const d=h[s-1],g=d?t.offsetTop+this.VERTICAL_TOP_LIST_OFFSET-(d.el.nativeElement.offsetTop+d.el.nativeElement.offsetHeight):-1;g>0&&(d.el.nativeElement.style.marginBottom=`${g}px`)}const a=t[x]+t[T]-p[x]-this._getOffset(y);y.lineEl.nativeElement.style[S]=a+"px"}),f.forEach((y,s)=>{const t=h[s];if(t){const a=t.el.nativeElement[x]-y.el.nativeElement[x]-this._getOffset(y);y.lineEl.nativeElement.style[S]=a+"px"}}),(f.length===h.length?h[h.length-1]:f[f.length-1]).lineEl.nativeElement.style.opacity="0"}}class c extends n{calculateStyles(r){this._setStylesForDoubleList(r,"vertical")}}class u extends n{calculateStyles(r){this._setStylesForSingleList(r,"horizontal")}}class _ extends n{calculateStyles(r){this._setStylesForDoubleList(r,"horizontal")}}class e extends n{calculateStyles(r){this._setStylesForSingleList(r,"vertical")}}class m{static getStrategy(r){switch(r){case"vertical-right":case"vertical-left":return new e;case"vertical-double":return new c;case"horizontal-top":case"horizontal-bottom":return new u;case"horizontal-double":return new _;default:throw Error(`Unsupported strategy: ${r}`)}}}var z=i(65879);let v=(()=>{class l{constructor(){this._nodeItems=[]}calculatePositions(){this._positionStrategy.calculateStyles(this._nodeItems)}setStrategy(o){this._positionStrategy=m.getStrategy(o)}registerNode(o){this._nodeItems.push(o)}removeNode(o){this._nodeItems=this._nodeItems.filter(f=>f!==o)}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275prov=z.Yz7({token:l,factory:l.\u0275fac}),l})()},74946:(F,b,i)=>{i.d(b,{z:()=>y});var n=i(1013),c=i(78645),u=i(83620),_=i(59773),e=i(65879);let m=(()=>{class s{constructor(t){this.viewContainer=t}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.s_b))},s.\u0275dir=e.lG2({type:s,selectors:[["","fdTimelineFirstListOutlet",""],["","fd-timeline-first-list-outlet",""]]}),s})();var z=i(70013),v=i(24412);let l=(()=>{class s{constructor(t){this.viewContainer=t}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.s_b))},s.\u0275dir=e.lG2({type:s,selectors:[["","fdTimelineSecondListOutlet",""],["","fd-timeline-second-list-outlet",""]]}),s})();var r=i(26702),o=i(71424),f=i(56725),h=i(92988),x=i(49384);const S=["loadingTemplate"];function T(s,p){1&s&&(e.TgZ(0,"fd-timeline-node")(1,"fd-timeline-node-header")(2,"fd-skeleton",7),e.O4$(),e._UZ(3,"circle",8)(4,"rect",9)(5,"rect",10),e.qZA()(),e.kcU(),e._UZ(6,"fd-skeleton",11),e.qZA())}function B(s,p){1&s&&e.YNc(0,T,7,0,"fd-timeline-node",6),2&s&&e.Q6J("fdkRepeat",3)}let y=(()=>{class s{constructor(t,a,d,g,C,w){this._differs=t,this._cd=a,this._timelinePositionControlService=d,this._viewportRuler=g,this._elementRef=C,this._ngZone=w,this.axis="vertical",this.layout="right",this._canShowFirstList=!0,this._canShowSecondList=!0,this._loading=!0,this._onDestroy=new c.x}ngOnInit(){this._dataDifferForFirstList=this._differs.find([]).create(this.trackBy),this._dataDifferForSecondList=this._differs.find([]).create(this.trackBy),this._canShowFirstList="right"!==this.layout&&"bottom"!==this.layout,this._canShowSecondList="left"!==this.layout&&"top"!==this.layout}ngOnChanges(t){("axis"in t||"layout"in t)&&(this._canShowFirstList="right"!==this.layout&&"bottom"!==this.layout,this._canShowSecondList="left"!==this.layout&&"top"!==this.layout,this._setPositionStrategy(),this.switchDataSource(this.dataSource)),"dataSource"in t&&!t.dataSource.firstChange&&this.switchDataSource(t.dataSource.currentValue)}ngAfterViewInit(){(0,n.qYq)(this._elementRef.nativeElement).pipe((0,u.b)(50),(0,_.R)(this._onDestroy)).subscribe(()=>this._timelinePositionControlService.calculatePositions()),this._setPositionStrategy(),this.switchDataSource(this.dataSource)}ngOnDestroy(){this._firstListOutlet.viewContainer.clear(),this._onDestroy.next(),this._onDestroy.complete()}switchDataSource(t){if(this._loading=!0,!t)return this._firstListOutlet.viewContainer.clear(),this._firstListOutlet.viewContainer.createEmbeddedView(this._loadingTemplate),this._cd.detectChanges(),this._timelinePositionControlService.calculatePositions(),void this._cd.detectChanges();if(this._nodeDefs){const[a,d]=this._splitList(t);this._renderNodeChanges(a,this._dataDifferForFirstList,this._firstListOutlet?.viewContainer),this._renderNodeChanges(d,this._dataDifferForSecondList,this._secondListOutlet?.viewContainer),this._cd.detectChanges(),this._timelinePositionControlService.calculatePositions(),this._loading=!1,this._cd.detectChanges()}}_renderNodeChanges(t,a,d){const g=a.diff(t);g&&g.forEachOperation((C,w,L)=>{if(null!=L&&null===C.previousIndex)this._insertNode(t[L],L,d);else if(null===L&&null!=w)d.remove(w);else if(null!=w&&null!=L){const E=d.get(w);E&&d.move(E,L)}})}_setPositionStrategy(){this._timelinePositionControlService.setStrategy(`${this.axis}-${this.layout}`)}_insertNode(t,a,d){const g=this._getNodeDef(a),C=new z.M(t);d.createEmbeddedView(g.template,C,a)}_getNodeDef(t){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs[t]}_splitList(t){let a=[],d=[];return"left"===this.layout||"top"===this.layout?a=[...t]:"right"===this.layout||"bottom"===this.layout?d=[...t]:t.forEach((g,C)=>{C%2==0?a.push(g):d.push(g)}),[a,d]}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.ZZ4),e.Y36(e.sBO),e.Y36(v.J),e.Y36(r.rL),e.Y36(e.SBq),e.Y36(e.R0b))},s.\u0275cmp=e.Xpm({type:s,selectors:[["fd-timeline"]],contentQueries:function(t,a,d){if(1&t&&e.Suo(d,z.a,5),2&t){let g;e.iGM(g=e.CRH())&&(a._nodeDefs=g)}},viewQuery:function(t,a){if(1&t&&(e.Gf(m,7),e.Gf(l,7),e.Gf(S,5)),2&t){let d;e.iGM(d=e.CRH())&&(a._firstListOutlet=d.first),e.iGM(d=e.CRH())&&(a._secondListOutlet=d.first),e.iGM(d=e.CRH())&&(a._loadingTemplate=d.first)}},hostAttrs:["role","timeline","arial-label","timeline",1,"fd-timeline"],hostVars:4,hostBindings:function(t,a){2&t&&e.ekj("fd-timeline--horizontal","horizontal"===a.axis)("fd-timeline--vertical","vertical"===a.axis)},inputs:{dataSource:"dataSource",trackBy:"trackBy",axis:"axis",layout:"layout"},features:[e._Bn([v.J]),e.TTD],decls:7,vars:6,consts:[[1,"fd-timeline__list","fd-timeline__list--first"],["fdTimelineFirstListOutlet",""],[1,"fd-timeline__main-line"],[1,"fd-timeline__list","fd-timeline__list--second"],["fdTimelineSecondListOutlet",""],["loadingTemplate",""],[4,"fdkRepeat"],["width","100%","height","32px"],["cx","16","cy","16","r","16","rx","4"],["x","37","y","0","width","120","height","12","rx","4"],["x","37","y","20","width","80","height","8","rx","4"],["type","text"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.GkF(1,1),e.qZA(),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.GkF(4,4),e.qZA(),e.YNc(5,B,1,1,"ng-template",null,5,e.W1O)),2&t&&(e.ekj("fd-timeline__list--empty",!a._canShowFirstList&&!a._loading),e.xp6(3),e.ekj("fd-timeline__list--empty",!a._canShowSecondList)("fd-timeline__list--with-offset",a._canShowFirstList))},dependencies:[o._,f.G,m,h.s,x.u,l],styles:['.fd-timeline{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0}.fd-timeline:before,.fd-timeline:after{box-sizing:inherit;font-size:inherit}.fd-timeline--double-sided{max-width:57.5rem}.fd-timeline__container{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;margin-top:1rem}.fd-timeline__container:before,.fd-timeline__container:after{box-sizing:inherit;font-size:inherit}.fd-timeline__group{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;margin-bottom:1rem;list-style-type:none}.fd-timeline__group:before,.fd-timeline__group:after{box-sizing:inherit;font-size:inherit}.fd-timeline__group--collapsed{margin-bottom:2rem}.fd-timeline__group-header-container{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;display:flex;align-items:center}.fd-timeline__group-header-container:before,.fd-timeline__group-header-container:after{box-sizing:inherit;font-size:inherit}.fd-timeline__group-header-container--horizontal{width:auto;height:100%;flex-direction:column;align-items:flex-start}.fd-timeline__group-header-container--horizontal .fd-timeline__group-header-bar{margin:0;margin-left:1.25rem;margin-top:.8125rem}[dir=rtl] .fd-timeline__group-header-container--horizontal .fd-timeline__group-header-bar,.fd-timeline__group-header-container--horizontal .fd-timeline__group-header-bar[dir=rtl]{margin-right:1.25rem;margin-left:0}.fd-timeline__group-header{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;display:flex;align-items:center;margin-right:.8125rem;cursor:pointer;width:-moz-fit-content;width:fit-content;position:relative;height:1.625rem;background:var(--sapButton_Selected_Background);border-radius:var(--sapElement_BorderCornerRadius);border:.0625rem solid var(--sapButton_Selected_BorderColor)}.fd-timeline__group-header:before,.fd-timeline__group-header:after{box-sizing:inherit;font-size:inherit}.fd-timeline__group-header:focus,.fd-timeline__group-header.is-focus{outline:none}.fd-timeline__group-header:focus:before,.fd-timeline__group-header.is-focus:before{content:"";display:block;position:absolute;inset:-.1875rem;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}[dir=rtl] .fd-timeline__group-header,.fd-timeline__group-header[dir=rtl]{margin-right:0;margin-left:.8125rem}.fd-timeline__group-header:hover,.fd-timeline__group-header.is-hover{background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Selected_Hover_BorderColor)}.fd-timeline__group-header:active,.fd-timeline__group-header.is-active{background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor)}.fd-timeline__group-header--collapsed{background:var(--sapButton_Background);border-color:var(--sapButton_BorderColor)}.fd-timeline__group-header--collapsed:focus:before,.fd-timeline__group-header--collapsed.is-focus:before{left:-.1875rem;right:-.375rem}[dir=rtl] .fd-timeline__group-header--collapsed:focus:before,[dir=rtl] .fd-timeline__group-header--collapsed.is-focus:before,.fd-timeline__group-header--collapsed[dir=rtl]:focus:before,.fd-timeline__group-header--collapsed[dir=rtl].is-focus:before{right:-.1875rem;left:-.375rem}.fd-timeline__group-header--collapsed .fd-timeline__group-header-icon [class*=sap-icon]{color:var(--sapButton_TextColor)}[dir=rtl] .fd-timeline__group-header--collapsed .fd-timeline__group-header-icon,.fd-timeline__group-header--collapsed .fd-timeline__group-header-icon[dir=rtl]{transform:rotate(180deg)}.fd-timeline__group-header--collapsed .fd-timeline__group-header-text{color:var(--sapButton_Hover_TextColor)}.fd-timeline__group-header--collapsed:hover,.fd-timeline__group-header--collapsed.is-hover{background:var(--sapButton_Hover_Background);border-color:var(--sapButton_Hover_BorderColor)}.fd-timeline__group-header--collapsed:hover:after,.fd-timeline__group-header--collapsed.is-hover:after{background:var(--sapButton_Hover_Background);border-color:var(--sapButton_Hover_BorderColor)}.fd-timeline__group-header--collapsed:hover .fd-timeline__group-header-icon [class*=sap-icon],.fd-timeline__group-header--collapsed.is-hover .fd-timeline__group-header-icon [class*=sap-icon],.fd-timeline__group-header--collapsed:hover .fd-timeline__group-header-text,.fd-timeline__group-header--collapsed.is-hover .fd-timeline__group-header-text{color:var(--sapButton_Hover_TextColor)}.fd-timeline__group-header--collapsed:active,.fd-timeline__group-header--collapsed.is-active{background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor)}.fd-timeline__group-header--collapsed:active:after,.fd-timeline__group-header--collapsed.is-active:after{background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor)}.fd-timeline__group-header--collapsed:active .fd-timeline__group-header-icon [class*=sap-icon],.fd-timeline__group-header--collapsed.is-active .fd-timeline__group-header-icon [class*=sap-icon],.fd-timeline__group-header--collapsed:active .fd-timeline__group-header-text,.fd-timeline__group-header--collapsed.is-active .fd-timeline__group-header-text{color:var(--sapButton_Active_TextColor)}.fd-timeline__group-header--collapsed:after{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;transform:translate(0) translateY(0) rotate(45deg);content:"";position:absolute;width:.4375rem;height:.4375rem;right:-.25rem;background:var(--sapButton_Background);border-top:.0625rem solid var(--sapButton_BorderColor);border-right:.0625rem solid var(--sapButton_BorderColor)}.fd-timeline__group-header--collapsed:after:before,.fd-timeline__group-header--collapsed:after:after{box-sizing:inherit;font-size:inherit}[dir=rtl] .fd-timeline__group-header--collapsed:after,.fd-timeline__group-header--collapsed[dir=rtl]:after{transform:translate(0) translateY(0) rotate(225deg);right:auto;left:-.25rem}.fd-timeline__group-header--horizontal:focus:before,.fd-timeline__group-header--horizontal.is-focus:before{right:-.1875rem;bottom:-.375rem}[dir=rtl] .fd-timeline__group-header--horizontal:focus:before,[dir=rtl] .fd-timeline__group-header--horizontal.is-focus:before,.fd-timeline__group-header--horizontal[dir=rtl]:focus:before,.fd-timeline__group-header--horizontal[dir=rtl].is-focus:before{left:-.1875rem;right:-.1875rem}.fd-timeline__group-header--horizontal:after{transform:rotate(135deg);left:1rem;bottom:-.25rem}[dir=rtl] .fd-timeline__group-header--horizontal:after,.fd-timeline__group-header--horizontal[dir=rtl]:after{left:auto;transform:rotate(135deg);right:1rem}.fd-timeline__group-header-icon{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;margin-left:.5rem;margin-right:.5rem}.fd-timeline__group-header-icon:before,.fd-timeline__group-header-icon:after{box-sizing:inherit;font-size:inherit}.fd-timeline__group-header-icon [class*=sap-icon]{color:var(--sapButton_Selected_TextColor);font-size:1rem;height:1.625rem;line-height:1.625rem}.fd-timeline__group-header-text{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;margin-right:1rem;cursor:inherit;color:var(--sapButton_Selected_TextColor)}.fd-timeline__group-header-text:before,.fd-timeline__group-header-text:after{box-sizing:inherit;font-size:inherit}[dir=rtl] .fd-timeline__group-header-text,.fd-timeline__group-header-text[dir=rtl]{margin-right:0;margin-left:1rem}.fd-timeline__node-container--horizontal{flex-direction:row}.fd-timeline__node-container--horizontal .fd-timeline__node{margin-top:0;margin-bottom:0;margin-left:.25rem;margin-right:.25rem}.fd-timeline__node-container--horizontal .fd-timeline__node--grouping{margin:0}.fd-timeline__node-container--horizontal .fd-timeline__node--icon{margin-top:0;margin-bottom:0;margin-left:.5rem;margin-right:.5rem}.fd-timeline__node{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;width:.375rem;height:.375rem;border-radius:50%;background:var(--sapContent_ForegroundBorderColor)}.fd-timeline__node:before,.fd-timeline__node:after{box-sizing:inherit;font-size:inherit}.fd-timeline__node--grouping{margin-top:0;margin-bottom:0;border:.0625rem solid var(--sapContent_ForegroundBorderColor);width:.5rem;height:.5rem;border-radius:50%;background:transparent}.fd-timeline__node--icon{margin-top:.5rem;margin-bottom:.5rem;width:auto;height:auto;border-radius:50%;background:transparent}.fd-timeline__node--icon [class*=sap-icon]{line-height:1;width:1.375rem;height:1.375rem;font-size:1.375rem;color:var(--sapContent_NonInteractiveIconColor)}.fd-timeline__group-header-bar{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;margin-right:.375rem;border:.0625rem dashed var(--sapContent_ForegroundBorderColor);flex:1}.fd-timeline__group-header-bar:before,.fd-timeline__group-header-bar:after{box-sizing:inherit;font-size:inherit}[dir=rtl] .fd-timeline__group-header-bar,.fd-timeline__group-header-bar[dir=rtl]{margin-right:0;margin-left:.375rem}.fd-timeline__connecting-line{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.fd-timeline__connecting-line:before,.fd-timeline__connecting-line:after{box-sizing:inherit;font-size:inherit}.fd-timeline__posts{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;list-style-type:none}.fd-timeline__posts:before,.fd-timeline__posts:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post-container{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;display:flex;flex-direction:row}.fd-timeline__post-container:before,.fd-timeline__post-container:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;height:auto;padding:.5rem;position:relative;border-radius:.25rem;border:.0625rem solid var(--sapGroup_ContentBorderColor);background:var(--sapGroup_ContentBackground)}.fd-timeline__post:before,.fd-timeline__post:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post:after{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;content:"";position:absolute;width:.8rem;height:.8rem;border-top:.0625rem solid var(--sapGroup_ContentBorderColor);border-right:.0625rem solid var(--sapGroup_ContentBorderColor);background:var(--sapGroup_ContentBackground)}.fd-timeline__post:after:before,.fd-timeline__post:after:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post-header-container{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;display:flex;align-items:center;margin-bottom:.5rem}.fd-timeline__post-header-container:before,.fd-timeline__post-header-container:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post-header{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0}.fd-timeline__post-header:before,.fd-timeline__post-header:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post-header:not(:first-child){margin-left:.3125rem}[dir=rtl] .fd-timeline__post-header:not(:first-child),.fd-timeline__post-header:not(:first-child)[dir=rtl]{margin-right:.3125rem;margin-left:0}.fd-timeline__post-header-title{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;font-weight:700}.fd-timeline__post-header-title:before,.fd-timeline__post-header-title:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post-header-text{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0}.fd-timeline__post-header-text:before,.fd-timeline__post-header-text:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post-subheader{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;margin-top:.125rem;font-size:var(--sapFontSmallSize);color:var(--sapContent_LabelColor)}.fd-timeline__post-subheader:before,.fd-timeline__post-subheader:after{box-sizing:inherit;font-size:inherit}.fd-timeline__post-content{font-size:var(--sapFontSize);line-height:var(--sapContent_LineHeight);color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0}.fd-timeline__post-content:before,.fd-timeline__post-content:after{box-sizing:inherit;font-size:inherit}.fd-timeline .fd-timeline__post-actions{margin-top:.5rem}.fd-timeline .fd-timeline__post-actions button:not(:first-child){margin-left:.5rem}[dir=rtl] .fd-timeline .fd-timeline__post-actions button:not(:first-child),.fd-timeline .fd-timeline__post-actions button:not(:first-child)[dir=rtl]{margin-right:.5rem;margin-left:0}.fd-timeline__post{flex-grow:1}.fd-timeline__post-subheader{display:block}.fd-timeline__post-header-title{margin-right:.3rem}.fd-timeline__node--icon{font-size:1.375rem}.fd-timeline__node--icon [class*=sap-icon]{display:flex;flex-direction:row;justify-content:center}.fd-timeline__node-container{position:absolute;height:1.5rem}.fd-timeline__node-wrapper{display:flex;flex-direction:row;position:relative;box-sizing:border-box;flex-shrink:0}.fd-timeline__list{display:flex;position:relative;flex-grow:1}.fd-timeline__connecting-line{flex-shrink:0}.fd-timeline{display:flex;justify-content:center}.fd-timeline--horizontal{flex-direction:column}.fd-timeline--horizontal .fd-timeline__node-wrapper{width:20rem}.fd-timeline--horizontal .fd-timeline__node-wrapper--icon .fd-timeline__icon-wrapper{padding-left:.25rem}[dir=rtl] .fd-timeline--horizontal .fd-timeline__node-wrapper--icon .fd-timeline__icon-wrapper,.fd-timeline--horizontal .fd-timeline__node-wrapper--icon .fd-timeline__icon-wrapper[dir=rtl]{padding-right:.25rem;padding-left:0}.fd-timeline--horizontal .fd-timeline__post{margin-right:1.25rem}[dir=rtl] .fd-timeline--horizontal .fd-timeline__post,.fd-timeline--horizontal .fd-timeline__post[dir=rtl]{margin-right:0;margin-left:1.25rem}.fd-timeline--horizontal .fd-timeline__main-line{height:1.5rem;width:100%}.fd-timeline--horizontal .fd-timeline__node-container{height:1.5rem;width:100%;display:flex;align-items:center;left:.5rem}[dir=rtl] .fd-timeline--horizontal .fd-timeline__node-container,.fd-timeline--horizontal .fd-timeline__node-container[dir=rtl]{left:auto;right:.5rem}.fd-timeline--horizontal .fd-timeline__icon-wrapper{flex:0;padding-left:.75rem;padding-right:.25rem}[dir=rtl] .fd-timeline--horizontal .fd-timeline__icon-wrapper,.fd-timeline--horizontal .fd-timeline__icon-wrapper[dir=rtl]{padding-right:.75rem;padding-left:0}[dir=rtl] .fd-timeline--horizontal .fd-timeline__icon-wrapper,.fd-timeline--horizontal .fd-timeline__icon-wrapper[dir=rtl]{padding-right:0;padding-left:.25rem}[dir=rtl] .fd-timeline--horizontal .fd-timeline__icon-wrapper,.fd-timeline--horizontal .fd-timeline__icon-wrapper[dir=rtl]{padding-left:.25rem;padding-right:.75rem}.fd-timeline--horizontal .fd-timeline__list--first{align-items:flex-end}.fd-timeline--horizontal .fd-timeline__list--first .fd-timeline__node-container{bottom:-1.5rem}.fd-timeline--horizontal .fd-timeline__list--first .fd-timeline__post{margin-bottom:1rem}.fd-timeline--horizontal .fd-timeline__list--first .fd-timeline__post:after{transform:translate(0) translateY(0) rotate(135deg);left:1rem;bottom:-.4375rem}[dir=rtl] .fd-timeline--horizontal .fd-timeline__list--first .fd-timeline__post:after,.fd-timeline--horizontal .fd-timeline__list--first .fd-timeline__post[dir=rtl]:after{left:auto;right:1rem}.fd-timeline--horizontal .fd-timeline__list--second{align-items:flex-start}.fd-timeline--horizontal .fd-timeline__list--second .fd-timeline__node-container{top:-1.5rem}.fd-timeline--horizontal .fd-timeline__list--second .fd-timeline__post{margin-top:1rem}.fd-timeline--horizontal .fd-timeline__list--second .fd-timeline__post:after{transform:translate(0) translateY(0) rotate(315deg);left:1rem;top:-.4375rem}[dir=rtl] .fd-timeline--horizontal .fd-timeline__list--second .fd-timeline__post:after,.fd-timeline--horizontal .fd-timeline__list--second .fd-timeline__post[dir=rtl]:after{left:auto;right:1rem}.fd-timeline--horizontal .fd-timeline__list--with-offset{padding-left:4.688rem}[dir=rtl] .fd-timeline--horizontal .fd-timeline__list--with-offset,.fd-timeline--horizontal .fd-timeline__list--with-offset[dir=rtl]{padding-right:4.688rem;padding-left:0}.fd-timeline--vertical{max-width:50rem;align-items:stretch}.fd-timeline--vertical .fd-timeline__node-wrapper--icon .fd-timeline__icon-wrapper{padding-top:.25rem}.fd-timeline--vertical .fd-timeline__node-wrapper--icon .fd-timeline__node--icon{margin:0}.fd-timeline--vertical .fd-timeline__post{margin-bottom:1.25rem}.fd-timeline--vertical .fd-timeline__main-line{width:1.5rem;flex:0 0 1.5rem;height:100%}.fd-timeline--vertical .fd-timeline__node-container{height:100%;flex:1 0;width:1.5rem;display:flex;flex-direction:column;align-items:center;top:.5rem}.fd-timeline--vertical .fd-timeline__icon-wrapper{flex:0;padding-top:.75rem;padding-bottom:.25rem}.fd-timeline--vertical .fd-timeline__list{flex-direction:column;flex:1 0 calc(50% - .75rem)}.fd-timeline--vertical .fd-timeline__list--first .fd-timeline__node-container{right:-1.5rem}[dir=rtl] .fd-timeline--vertical .fd-timeline__list--first .fd-timeline__node-container,.fd-timeline--vertical .fd-timeline__list--first .fd-timeline__node-container[dir=rtl]{right:auto;left:-1.5rem}.fd-timeline--vertical .fd-timeline__list--first .fd-timeline__post{margin-right:1rem}[dir=rtl] .fd-timeline--vertical .fd-timeline__list--first .fd-timeline__post,.fd-timeline--vertical .fd-timeline__list--first .fd-timeline__post[dir=rtl]{margin-right:0;margin-left:1rem}.fd-timeline--vertical .fd-timeline__list--first .fd-timeline__post:after{transform:translate(0) translateY(0) rotate(45deg);top:1rem;right:-.4375rem}[dir=rtl] .fd-timeline--vertical .fd-timeline__list--first .fd-timeline__post:after,.fd-timeline--vertical .fd-timeline__list--first .fd-timeline__post[dir=rtl]:after{transform:translate(0) translateY(0) rotate(225deg);right:auto;left:-.4375rem}.fd-timeline--vertical .fd-timeline__list--second .fd-timeline__node-container{left:-1.5rem}[dir=rtl] .fd-timeline--vertical .fd-timeline__list--second .fd-timeline__node-container,.fd-timeline--vertical .fd-timeline__list--second .fd-timeline__node-container[dir=rtl]{left:auto;right:-1.5rem}.fd-timeline--vertical .fd-timeline__list--second .fd-timeline__post{margin-left:1rem}[dir=rtl] .fd-timeline--vertical .fd-timeline__list--second .fd-timeline__post,.fd-timeline--vertical .fd-timeline__list--second .fd-timeline__post[dir=rtl]{margin-right:1rem;margin-left:0}.fd-timeline--vertical .fd-timeline__list--second .fd-timeline__post:after{transform:translate(0) translateY(0) rotate(225deg);top:1rem;left:-.4375rem}[dir=rtl] .fd-timeline--vertical .fd-timeline__list--second .fd-timeline__post:after,.fd-timeline--vertical .fd-timeline__list--second .fd-timeline__post[dir=rtl]:after{transform:translate(0) translateY(0) rotate(45deg);left:auto;right:-.4375rem}.fd-timeline--vertical .fd-timeline__list--with-offset{padding-top:1.5rem}.fd-timeline--vertical .fd-timeline__list--empty{flex:0 0 0}\n'],encapsulation:2,changeDetection:0}),s})()}}]);