import{a as re}from"./chunk-RL6NJZWD.js";import{Rb as oe,Sb as ne,qc as le}from"./chunk-AUNCFUUT.js";import{V as B,fa as K,la as ie}from"./chunk-RHO4TFSB.js";import{$b as k,Aa as S,Ba as c,Cb as m,Eb as d,Fb as Q,Gb as P,Ia as j,Ka as p,Kb as w,La as A,Lb as O,Mb as u,Nb as h,Qh as X,Sb as F,Ub as T,Vh as Z,Xb as H,Yb as q,Zb as Y,_g as J,_h as $,db as z,ea as U,eb as G,gb as f,h as V,hb as I,ib as N,ja as v,jc as _,kc as b,la as r,mi as ee,ob as x,pi as te,qa as g,ra as C,tb as a,ub as s,zb as y}from"./chunk-KLPBKWPE.js";var se=["okButton"];function de(t,D){if(t&1){let e=y();a(0,"button",5),_(1,"fdTranslate"),m("click",function(o){g(e);let n=d();return C(n._editButtonClicked(o))}),s()}if(t&2){let e=d();f("disabled",e.disableFileNameEdit)("ariaLabel",b(1,2,"coreUploadCollection.menuEditAriaLabel"))}}function ce(t,D){if(t&1){let e=y();a(0,"button",6),_(1,"fdTranslate"),m("click",function(o){g(e);let n=d();return C(n._deleteButtonClicked(o))}),s()}if(t&2){let e=d();f("disabled",e.disableFileDeletion)("ariaLabel",b(1,2,"coreUploadCollection.menuDeleteAriaLabel"))}}function pe(t,D){if(t&1){let e=y();a(0,"button",3),_(1,"fdTranslate"),m("click",function(o){g(e);let n=d();return C(n._cancelButtonClicked(o))}),F(2),_(3,"fdTranslate"),s()}t&2&&(f("ariaLabel",b(1,2,"coreUploadCollection.menuCancelAriaLabel")),p(2),T(" ",b(3,4,"coreUploadCollection.menuCancelText")," "))}var M=(()=>{class t{constructor(){this.editClicked=new c,this.okClicked=new c,this.deleteClicked=new c,this.allowFileNameEdit=!0,this.allowFileDeletion=!0,this.disableFileNameEdit=!1,this.disableFileDeletion=!1,this._editMode=!1}_editButtonClicked(e){e&&e.stopPropagation(),this.editClicked.emit(!0),this._editMode=!0}_deleteButtonClicked(e){e&&e.stopPropagation(),this.deleteClicked.emit()}_okButtonClicked(e){e&&e.stopPropagation(),this.okClicked.emit()}_cancelButtonClicked(e){e&&e.stopPropagation(),this.editClicked.emit(!1),this._editMode=!1}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=v({type:t,selectors:[["fd-upload-collection-button-group"]],viewQuery:function(i,o){if(i&1&&O(se,5),i&2){let n;u(n=h())&&(o._okButton=n.first)}},hostAttrs:[1,"fd-upload-collection__button-group"],inputs:{allowFileNameEdit:"allowFileNameEdit",allowFileDeletion:"allowFileDeletion",disableFileNameEdit:"disableFileNameEdit",disableFileDeletion:"disableFileDeletion"},outputs:{editClicked:"editClicked",okClicked:"okClicked",deleteClicked:"deleteClicked"},standalone:!0,features:[k],decls:8,vars:11,consts:[["okButton",""],["fd-button","","fdType","transparent","glyph","edit",3,"disabled","ariaLabel"],["fd-button","","fdType","transparent","glyph","decline",3,"disabled","ariaLabel"],["fd-button","","fdType","transparent",3,"click","ariaLabel"],["fd-button","","fdType","transparent",3,"ariaLabel"],["fd-button","","fdType","transparent","glyph","edit",3,"click","disabled","ariaLabel"],["fd-button","","fdType","transparent","glyph","decline",3,"click","disabled","ariaLabel"]],template:function(i,o){if(i&1){let n=y();z(0,de,2,4,"button",1)(1,ce,2,4,"button",2),a(2,"button",3,0),_(4,"fdTranslate"),m("click",function(ae){return g(n),C(o._okButtonClicked(ae))}),F(5),_(6,"fdTranslate"),s(),z(7,pe,4,6,"button",4)}i&2&&(x(!o._editMode&&o.allowFileNameEdit?0:-1),p(),x(!o._editMode&&o.allowFileDeletion?1:-1),p(),I("display",o._editMode?"inline-flex":"none"),f("ariaLabel",b(4,7,"coreUploadCollection.menuOkAriaLabel")),p(3),T(" ",b(6,9,"coreUploadCollection.menuOkText"),`
`),p(2),x(o._editMode?7:-1))},dependencies:[J,B],encapsulation:2,changeDetection:0})}}return t})();function fe(t,D){if(t&1){let e=y();a(0,"input",2),_(1,"fdTranslate"),Y("ngModelChange",function(o){g(e);let n=d();return q(n.fileName,o)||(n.fileName=o),C(o)}),m("click",function(o){return g(e),C(o.stopPropagation())}),s()}if(t&2){let e=d();I("pointer-events","all"),H("ngModel",e.fileName),f("state",e.fileName?null:"error"),G("placeholder",b(1,5,"coreUploadCollection.formItemPlaceholder"))}}function me(t,D){if(t&1&&(a(0,"span",1),F(1),s()),t&2){let e=d();p(),T(".",e._extension,"")}}var L=(()=>{class t{constructor(){this._editMode=!1,this.fileNameChanged=new c,this.onChange=()=>{},this.onTouched=()=>{}}set fileName(e){this._fileNameValue=e,this.onChange(e),this.onTouched(),this.fileNameChanged.emit(e)}get fileName(){return this._fileNameValue}writeValue(e){this.fileName=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=v({type:t,selectors:[["fd-upload-collection-form-item"]],hostAttrs:[1,"fd-upload-collection__form-item"],inputs:{_editMode:"_editMode"},outputs:{fileNameChanged:"fileNameChanged"},standalone:!0,features:[k],decls:2,vars:2,consts:[["fd-form-control","","required","","type","text",1,"fd-input",3,"pointer-events","ngModel","state"],[1,"fd-upload-collection__extension"],["fd-form-control","","required","","type","text",1,"fd-input",3,"ngModelChange","click","ngModel","state"]],template:function(i,o){i&1&&z(0,fe,2,7,"input",0)(1,me,2,1,"span",1),i&2&&(x(o._editMode?0:-1),p(),x(o._editMode?1:-1))},dependencies:[ie,te,X,Z,ee,$,B],encapsulation:2})}}return t})();var ue=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=r({type:t,selectors:[["","fd-upload-collection-thumbnail",""]],hostAttrs:[1,"fd-upload-collection__thumbnail"],standalone:!0})}}return t})(),W=(()=>{class t{constructor(){this.elRef=U(S)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=r({type:t,selectors:[["","fd-upload-collection-title",""]],hostAttrs:[1,"fd-upload-collection__title"],standalone:!0})}}return t})(),he=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=r({type:t,selectors:[["","fd-upload-collection-description",""]],hostAttrs:[1,"fd-upload-collection__description"],standalone:!0})}}return t})(),_e=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=r({type:t,selectors:[["","fd-upload-collection-text-separator",""],["fd-upload-collection-text-separator"]],hostAttrs:[1,"fd-upload-collection__text-separator"],standalone:!0})}}return t})(),be=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=r({type:t,selectors:[["","fd-upload-collection-status-group",""]],hostAttrs:[1,"fd-upload-collection__status-group"],standalone:!0})}}return t})(),ge=(()=>{class t{constructor(e){this._objectStatus=e}ngOnInit(){this._objectStatus&&(this._objectStatus._textClass+=" fd-upload-collection__status-group-item-text")}static{this.\u0275fac=function(i){return new(i||t)(A(le,8))}}static{this.\u0275dir=r({type:t,selectors:[["","fd-upload-collection-status-item",""]],hostAttrs:[1,"fd-upload-collection__status-group-item"],standalone:!0})}}return t})(),R=(()=>{class t{constructor(){this.applyContainerClass=!0}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=r({type:t,selectors:[["","fd-upload-collection-title-container",""]],contentQueries:function(i,o,n){if(i&1&&w(n,re,4),i&2){let l;u(l=h())&&(o._objectMarkerComponents=l)}},hostVars:2,hostBindings:function(i,o){i&2&&N("fd-upload-collection__title-container",o.applyContainerClass)},standalone:!0})}}return t})();var Ce=(()=>{class t{constructor(){this.fileNameChanged=new c,this.deleteClicked=new c,this.elementRef=U(S),this._subscriptions=new V}onResize(){this.elementRef.nativeElement.parentElement&&(this.titleWidth=this.getTitleWidth(),this.containerWidth=this.getContainerWidth(),!this.previousContainerWidth||this.containerWidth<this.previousContainerWidth?this.titleWidth*1.05>=this.containerWidth&&this.resizeFileTitle(this._titleDirective.elRef.nativeElement.innerHTML):this.previousContainerWidth&&this.containerWidth>this.previousContainerWidth&&(this._titleDirective.elRef.nativeElement.innerHTML=this.fileNameFull,this.resizeFileTitle(this.fileNameFull)),this.previousContainerWidth=this.containerWidth)}ngAfterContentInit(){this.fileNameFull=this.fileName+"."+this.extension,this._titleDirective.elRef.nativeElement.tabIndex="0",this._titleDirective.elRef.nativeElement.innerHTML='<span class="'+K.linkContent+'">'+this.fileNameFull+"</span>",this._handleDeleteClickedSubscription(),this._handleOkClickedSubscription(),this._handleEditClickedSubscription(),this._handleFormItemInputChangedSubscription()}ngAfterViewInit(){setTimeout(()=>this.onResize())}ngOnDestroy(){this._subscriptions.unsubscribe()}_handleOkClickedSubscription(){this._subscriptions.add(this._buttonGroupComponent.okClicked.subscribe(()=>{this._formItemComponent.fileName&&this._formItemComponent.fileName!==""&&(this.fileName=this._formItemComponent.fileName,this._titleDirective.elRef.nativeElement.style.display="inline-block",this.fileNameFull=this.fileName+"."+this.extension,this._titleDirective.elRef.nativeElement.innerHTML=this.fileNameFull,this.resizeFileTitle(this.fileNameFull),this._formItemComponent._editMode=!1,this._buttonGroupComponent._editMode=!1,this.fileNameChanged.emit(this))}))}_handleEditClickedSubscription(){this._subscriptions.add(this._buttonGroupComponent.editClicked.subscribe(e=>{this._formItemComponent._editMode=e,this._titleContainerDirective&&(this._titleContainerDirective.applyContainerClass=!e);let i=[];i.push(this._titleDirective.elRef.nativeElement.style),this._titleContainerDirective?._objectMarkerComponents?.forEach(o=>{i.push(o.elementRef.nativeElement.style)}),e?i.forEach(o=>o.display="none"):i.forEach(o=>o.display="inline-block"),e&&(this._formItemComponent._extension=this.extension,this._formItemComponent.fileName=this.fileName)}))}_handleDeleteClickedSubscription(){this._subscriptions.add(this._buttonGroupComponent.deleteClicked.subscribe(()=>{this.deleteClicked.emit(this)}))}_handleFormItemInputChangedSubscription(){this._subscriptions.add(this._formItemComponent.fileNameChanged.subscribe(e=>{this._buttonGroupComponent._okButton.disabled=e==="",this._buttonGroupComponent._okButton.buildComponentCssClass()}))}getTitleWidth(){return this._titleDirective.elRef.nativeElement.getBoundingClientRect().width}getContainerWidth(){return this._titleDirective.elRef.nativeElement.parentElement.getBoundingClientRect().width}truncateTitle(e){let i=Math.floor(e.length*.8);if(e.length>i){let o=Math.floor(i/2),n=e.length-o+3;return e.substring(0,o)+"..."+e.substring(n,e.length)}return e}resizeFileTitle(e){let i=e;for(this.containerWidth=this.getContainerWidth(),this.titleWidth=this.getTitleWidth();this.titleWidth*1.05>=this.containerWidth;){let o=this.truncateTitle(i);this._titleDirective.elRef.nativeElement.innerHTML=o,i=o,this.titleWidth=this.getTitleWidth(),this.containerWidth=this.getContainerWidth()}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=r({type:t,selectors:[["","fd-upload-collection-item",""]],contentQueries:function(i,o,n){if(i&1&&(w(n,L,5),w(n,W,5),w(n,M,5),w(n,R,5)),i&2){let l;u(l=h())&&(o._formItemComponent=l.first),u(l=h())&&(o._titleDirective=l.first),u(l=h())&&(o._buttonGroupComponent=l.first),u(l=h())&&(o._titleContainerDirective=l.first)}},hostAttrs:[1,"fd-upload-collection__item"],hostBindings:function(i,o){i&1&&m("resize",function(){return o.onResize()},!1,j)},inputs:{fileName:"fileName",extension:"extension"},outputs:{fileNameChanged:"fileNameChanged",deleteClicked:"deleteClicked"},standalone:!0})}}return t})();var xe=["*"],ye=(()=>{class t{constructor(){this.small=!1,this.selection=!1}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=v({type:t,selectors:[["fd-upload-collection"]],hostAttrs:[1,"fd-upload-collection"],hostVars:2,hostBindings:function(i,o){i&2&&N("fd-upload-collection--sm",o.small)},inputs:{small:"small",selection:"selection"},standalone:!0,features:[k],ngContentSelectors:xe,decls:2,vars:2,consts:[["fd-list","",3,"byline","selection"]],template:function(i,o){i&1&&(Q(),a(0,"ul",0),P(1),s()),i&2&&f("byline",!0)("selection",o.selection)},dependencies:[ne,oe],styles:[`@charset "UTF-8";:root{--fdList_Item_Background_Color:var(--sapList_Background);--fdList_Item_Text_Color:var(--sapList_TextColor);--fdList_Item_Border_Color:var(--sapList_BorderColor);--fdList_Item_Text_Font_Size:var(--sapFontLargeSize);--fdList_Item_Icon_Font_Size:1.125rem;--fdList_Item_Height:var(--sapElement_LineHeight);--fdList_Status_Text_Color:var(--sapNeutralTextColor);--fdList_Message_Background_Color:var(--sapNeutralBackground)}.fd-list--byline .fd-list__item{height:auto;min-height:5rem;padding-block:.9375rem;padding-inline:1rem;width:100%;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.fd-list--byline .fd-list__item.is-focus,.fd-list--byline .fd-list__item:focus{pointer-events:all;z-index:5}.fd-list--byline .fd-list__item .fd-list__item-counter{-ms-flex-align:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:end;-ms-flex-pack:end;height:100%;justify-content:flex-end;min-width:2rem}.fd-list--byline .fd-list__item .fd-list__item-counter,.fd-list--byline .fd-list__thumbnail{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center}.fd-list--byline .fd-list__thumbnail{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;pointer-events:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;-webkit-margin-end:.75rem;border-radius:.25rem;color:var(--sapContent_NonInteractiveIconColor);font-size:2rem;height:3rem;margin-inline-end:.75rem;max-height:3rem;max-width:3rem;min-height:3rem;min-width:3rem;width:3rem}.fd-list--byline .fd-list__thumbnail:after,.fd-list--byline .fd-list__thumbnail:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-list--byline .fd-list__thumbnail [class*=sap-icon],.fd-list--byline .fd-list__thumbnail[class*=sap-icon]{background:inherit;border-radius:inherit;color:inherit;font-size:inherit;line-height:1}.fd-list--byline .fd-list__thumbnail>svg{height:100%}.fd-list--byline .fd-list__notification{color:var(--sapAccentColor6);font-size:.375rem;left:1rem;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.fd-list--byline .fd-list__notification[dir=rtl],[dir=rtl] .fd-list--byline .fd-list__notification{left:auto;right:1rem}.fd-list--byline .fd-list__notification+.fd-list__link .fd-list__content .fd-list__title,.fd-list--byline .fd-list__notification~.fd-list__content .fd-list__title{font-weight:700}.fd-list--byline .fd-list__content{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;pointer-events:none;-ms-flex-line-pack:justify;align-content:space-between;height:100%;min-height:3rem;min-width:3rem;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding-block:.125rem;padding-inline:0}.fd-list--byline .fd-list__content:after,.fd-list--byline .fd-list__content:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-list--byline .fd-list__title{font-size:var(--sapFontLargeSize);min-height:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fd-list--byline .fd-list__byline{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;line-height:1rem;margin-block:0;margin-inline:0;overflow:hidden;padding-block:0;padding-inline:0;text-overflow:ellipsis;white-space:nowrap;-webkit-padding-before:.5rem;padding-block-start:.5rem}.fd-list--byline .fd-list__byline:after,.fd-list--byline .fd-list__byline:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-list--byline .fd-list__byline--2-col{display:-webkit-box;display:-ms-flexbox;display:flex;pointer-events:all}.fd-list--byline .fd-list__byline--wrap .fd-list__byline-left,.fd-list--byline .fd-list__byline--wrap .fd-list__byline-right{display:inline;padding-block:0;padding-inline:0;white-space:normal;width:100%}.fd-list--byline .fd-list__byline--wrap .fd-list__byline-right{float:right;width:auto}.fd-list--byline .fd-list__link--more{pointer-events:all;text-transform:capitalize}.fd-list--byline .fd-list__byline--wrap,.fd-list--byline .fd-list__title--wrap{white-space:normal}.fd-list--byline .fd-list__byline-left{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;line-height:1rem;margin-block:0;margin-inline:0;overflow:hidden;padding-block:0;padding-inline:0;text-overflow:ellipsis;white-space:nowrap;width:60%;-ms-flex-item-align:end;align-self:flex-end;-webkit-padding-end:.5rem;padding-inline-end:.5rem}.fd-list--byline .fd-list__byline-left:after,.fd-list--byline .fd-list__byline-left:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-list--byline .fd-list__byline-right{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;line-height:1rem;margin-block:0;margin-inline:0;overflow:hidden;padding-block:0;padding-inline:0;text-align:right;text-overflow:ellipsis;white-space:nowrap;width:40%;-ms-flex-item-align:end;align-self:flex-end;-webkit-padding-start:.5rem;padding-inline-start:.5rem}.fd-list--byline .fd-list__byline-right:after,.fd-list--byline .fd-list__byline-right:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-list--byline .fd-list__byline-right[dir=rtl],[dir=rtl] .fd-list--byline .fd-list__byline-right{text-align:left}.fd-list--byline .fd-list__byline-right--neutral{color:var(--sapNeutralTextColor)}.fd-list--byline .fd-list__byline-right--positive{color:var(--sapPositiveTextColor)}.fd-list--byline .fd-list__byline-right--critical{color:var(--sapCriticalTextColor)}.fd-list--byline .fd-list__byline-right--negative{color:var(--sapNegativeTextColor)}.fd-list--byline .fd-list__byline-right--informative{color:var(--sapInformativeTextColor)}.fd-list--byline.fd-list--unread-indicator .fd-list__item{padding-inline:2.125rem 1rem}.fd-list--byline[class*=-compact] .fd-list__title,.fd-list--byline[class*=-condensed] .fd-list__title,[class*=-compact] .fd-list--byline:not([class*=-cozy]) .fd-list__title,[class*=-condensed] .fd-list--byline:not([class*=-cozy]) .fd-list__title{font-size:var(--sapFontSize)}.fd-list--byline.fd-list--no-border .fd-list__item{height:100%;max-height:5rem;padding-block:.5rem}.fd-list--byline.fd-list--no-border .fd-list__item:first-child{-webkit-padding-before:.9375rem;padding-block-start:.9375rem}.fd-list--byline.fd-list--no-border .fd-list__item:last-child{-webkit-padding-after:.9375rem;padding-block-end:.9375rem}.fd-upload-collection .fd-upload-collection__item{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.fd-upload-collection .fd-upload-collection__item--interactive .fd-upload-collection__thumbnail{color:var(--sapContent_IconColor)}.fd-upload-collection__thumbnail{-ms-flex-item-align:start;align-self:flex-start}.fd-upload-collection__button-group{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-margin-start:1rem;margin-inline-start:1rem}.fd-upload-collection__button-group:after,.fd-upload-collection__button-group:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-upload-collection__button-group button{-webkit-margin-start:.125rem;margin-inline-start:.125rem}.fd-upload-collection__title-container{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.fd-upload-collection__title-container:after,.fd-upload-collection__title-container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-upload-collection__title-container .fd-upload-collection__title{-webkit-box-flex:0;-ms-flex:none;flex:none;-ms-flex-negative:1;flex-shrink:1}.fd-upload-collection .fd-upload-collection__title-container .fd-upload-collection__title{-webkit-margin-end:.5rem;margin-inline-end:.5rem}.fd-upload-collection__description,.fd-upload-collection__extension,.fd-upload-collection__status-group{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;line-height:1rem;margin-block:0;margin-inline:0;overflow:hidden;padding-block:0;padding-inline:0;text-overflow:ellipsis;white-space:nowrap}.fd-upload-collection__description:after,.fd-upload-collection__description:before,.fd-upload-collection__extension:after,.fd-upload-collection__extension:before,.fd-upload-collection__status-group:after,.fd-upload-collection__status-group:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-upload-collection__description{-webkit-padding-before:.625rem;padding-block-start:.625rem}.fd-upload-collection .fd-upload-collection__status-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-top:.375rem}.fd-upload-collection .fd-upload-collection__status-group-item{margin-inline:.25rem;-ms-flex-negative:1;flex-shrink:1;min-width:0}.fd-upload-collection .fd-upload-collection__status-group-item:first-child{margin-inline:0 .25rem}.fd-upload-collection .fd-upload-collection__status-group-item-text{line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fd-upload-collection__extension{-webkit-margin-start:.375rem;display:inline-block;margin-inline-start:.375rem}.fd-upload-collection__text-separator:before{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapContent_LabelColor);content:"\\2022";font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;line-height:1;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0}.fd-upload-collection__text-separator:before:after,.fd-upload-collection__text-separator:before:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-upload-collection__form-item{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0}.fd-upload-collection__form-item:after,.fd-upload-collection__form-item:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-upload-collection__form-item input{width:60%}.fd-upload-collection--sm .fd-upload-collection__item{-ms-flex-wrap:wrap;flex-wrap:wrap}.fd-upload-collection--sm .fd-upload-collection__button-group{margin-inline:0;-ms-flex-preferred-size:100%;flex-basis:100%;margin-top:.75rem}.fd-upload-collection--sm .fd-upload-collection__button-group button:not(:first-child){-webkit-margin-start:.5rem;margin-inline-start:.5rem}.fd-upload-collection--sm .fd-upload-collection__form-item input{width:75%}
/*!
 * Fundamental Library Styles v0.38.0
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0})}}return t})();export{M as a,L as b,ue as c,W as d,he as e,_e as f,be as g,ge as h,R as i,Ce as j,ye as k};
