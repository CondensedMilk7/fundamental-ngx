import{a as te}from"./chunk-IHCOAUWH.js";import{V as Z,ha as ee}from"./chunk-RHO4TFSB.js";import{$b as c,Aa as w,Cb as Q,Eb as s,Fb as p,Ga as V,Gb as l,Gc as K,Ka as r,Kb as G,La as z,Mb as U,Nb as q,Rb as d,Sb as y,Tb as W,Ub as S,ba as A,bc as M,db as o,dg as j,eb as $,gb as a,ib as I,ja as m,jc as v,ka as O,kc as J,kg as X,la as B,lc as D,mg as Y,ob as u,pa as T,pc as h,qa as R,r as L,ra as N,s as x,tb as _,ub as b,vb as H,zb as P}from"./chunk-KLPBKWPE.js";var ie=["*"],ne=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["fd-feed-list-action"]],hostAttrs:[1,"fd-feed-list__actions"],standalone:!0,features:[c],ngContentSelectors:ie,decls:1,vars:0,template:function(n,f){n&1&&(p(),l(0))},encapsulation:2})}}return e})();var oe=["*"],re=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["fd-feed-list-avatar"]],hostAttrs:[1,"fd-feed-list__thumb"],standalone:!0,features:[c],ngContentSelectors:oe,decls:1,vars:0,template:function(n,f){n&1&&(p(),l(0))},encapsulation:2})}}return e})();var ae=["*"],se=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["fd-feed-list-footer"]],hostAttrs:[1,"fd-feed-list__footer"],standalone:!0,features:[c],ngContentSelectors:ae,decls:1,vars:0,template:function(n,f){n&1&&(p(),l(0))},encapsulation:2})}}return e})();var g={list:"fd-feed-list",item:"fd-feed-list__item"};var le=[[["fd-feed-list-avatar"]],[["fd-feed-list-avatar"]],[["fd-feed-list-action"]],[["fd-feed-list-footer"]]],de=["fd-feed-list-avatar","fd-feed-list-avatar","fd-feed-list-action","fd-feed-list-footer"],fe=e=>({$implicit:e}),me=e=>({count:e});function pe(e,i){}function ce(e,i){}function _e(e,i){}function be(e,i){}function xe(e,i){if(e&1&&(_(0,"div",6)(1,"div",11),o(2,pe,0,0,"ng-template",8),_(3,"div"),o(4,ce,0,0,"ng-template",8)(5,_e,0,0,"ng-template",8),b()(),o(6,be,0,0,"ng-template",8),b()),e&2){s();let t=d(9),n=d(11),f=d(13),k=d(15);r(2),a("ngTemplateOutlet",t),r(2),a("ngTemplateOutlet",k),r(),a("ngTemplateOutlet",f),r(),a("ngTemplateOutlet",n)}}function ge(e,i){e&1&&l(0)}function ue(e,i){}function he(e,i){if(e&1&&o(0,ue,0,0,"ng-template",8),e&2){s();let t=d(11);a("ngTemplateOutlet",t)}}function Ce(e,i){}function ye(e,i){if(e&1&&o(0,Ce,0,0,"ng-template",10),e&2){s();let t=d(15),n=d(19);a("ngTemplateOutlet",n)("ngTemplateOutletContext",M(2,fe,t))}}function Fe(e,i){}function ve(e,i){if(e&1&&(o(0,Fe,0,0,"ng-template",8),H(1,"fd-formatted-text",12)),e&2){let t=s(),n=d(15);a("ngTemplateOutlet",n),r(),a("htmlText",t.text)}}function ke(e,i){}function Le(e,i){if(e&1&&o(0,ke,0,0,"ng-template",8),e&2){s();let t=d(13);a("ngTemplateOutlet",t)}}function Te(e,i){e&1&&l(0,1)}function we(e,i){e&1&&l(0,2)}function ze(e,i){e&1&&l(0,3)}function Ie(e,i){}function Se(e,i){if(e&1&&(_(0,"a",14),v(1,"safe"),o(2,Ie,0,0,"ng-template",8),b()),e&2){let t=s(2),n=d(17);a("emphasized",!0),$("title",t.authorTitle)("href",D(1,4,t.authorLink,"url"),V),r(2),a("ngTemplateOutlet",n)}}function De(e,i){if(e&1&&y(0),e&2){let t=s(2);S(" ",t.authorTitle," ")}}function je(e,i){if(e&1&&(_(0,"span",13),o(1,Se,3,7,"a",14)(2,De,1,1),y(3," : "),b()),e&2){let t=s();r(),u(t.authorLink?1:2)}}function Ee(e,i){if(e&1&&y(0),e&2){let t=s();S(" ",t.authorTitle,`
`)}}function Me(e,i){}function Ae(e,i){if(e&1){let t=P();_(0,"a",16),Q("click",function(){R(t);let f=s(2);return N(f.toggleTextView())}),y(1),v(2,"fdTranslate"),v(3,"fdTranslate"),b()}if(e&2){let t=s(2);r(),W(t.isCollapsed?D(2,1,"coreFeedListItem.moreLabel",M(6,me,(t.text?t.text.length:0)-t.maxChars)):J(3,4,"coreFeedListItem.lessLabel"))}}function Oe(e,i){if(e&1&&(o(0,Me,0,0,"ng-template",8),_(1,"span"),y(2),v(3,"truncate"),b(),o(4,Ae,4,8,"a",15)),e&2){let t=i.$implicit,n=s();a("ngTemplateOutlet",t),r(2),S(" ",n.isCollapsed?D(3,3,n.text,n.maxChars):n.text," "),r(2),u(!n.isRichText&&n.hasMore?4:-1)}}var C=class e{constructor(i){this.elementRef=i,this.ariaLabel="",this.isRichText=!1,this.mobile=!1,this.isFeedListItemBody=!0,this.maxCharsAtDefault=!1,this.isCollapsed=!0,this.hasMore=!1}buildComponentCssClass(){return[g.item,this.class,this.isRichText?"":`${g.item}--collapsible`]}setHasMore(){this.text&&(this.hasMore=this.text.length>this.maxChars)}setDefaultMaxChars(){this.maxChars=this.mobile?300:500}ngOnInit(){this.buildComponentCssClass(),this.maxChars||(this.setDefaultMaxChars(),this.maxCharsAtDefault=!0),this.setHasMore()}ngOnChanges(i){("class"in i||"isRichText"in i)&&this.buildComponentCssClass(),this.maxCharsAtDefault&&this.setDefaultMaxChars(),this.setHasMore()}toggleTextView(){this.isCollapsed=!this.isCollapsed}static{this.\u0275fac=function(t){return new(t||e)(z(w))}}static{this.\u0275cmp=m({type:e,selectors:[["fd-feed-list-item"]],hostVars:2,hostBindings:function(t,n){t&2&&I("fd-feed-list__body",n.isFeedListItemBody)},inputs:{class:"class",authorTitle:"authorTitle",authorLink:"authorLink",text:"text",maxChars:"maxChars",ariaLabel:"ariaLabel",ariaLabelledby:"ariaLabelledby",isRichText:"isRichText",mobile:"mobile"},standalone:!0,features:[T,c],ngContentSelectors:de,decls:20,vars:4,consts:[["avatarContent",""],["actionContent",""],["footerContent",""],["author",""],["authorTitleTemplate",""],["feedContent",""],[1,"fd-feed-list__wrapper"],[1,"fd-feed-list__content"],[3,"ngTemplateOutlet"],[1,"fd-feed-list__text"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"fd-feed-list__wrapper","fd-feed-list__wrapper--header"],[3,"htmlText"],[1,"fd-feed-list__name"],["target","_blank","fd-link","",3,"emphasized"],["fd-link","","tabindex","0",1,"fd-feed-list__link--more"],["fd-link","","tabindex","0",1,"fd-feed-list__link--more",3,"click"]],template:function(t,n){t&1&&(p(le),o(0,xe,7,4,"div",6)(1,ge,1,0),_(2,"div",7),o(3,he,1,1,null,8),_(4,"p",9),o(5,ye,1,4,null,10)(6,ve,2,2),b(),o(7,Le,1,1,null,8),b(),o(8,Te,1,0,"ng-template",null,0,h)(10,we,1,0,"ng-template",null,1,h)(12,ze,1,0,"ng-template",null,2,h)(14,je,4,1,"ng-template",null,3,h)(16,Ee,1,1,"ng-template",null,4,h)(18,Oe,5,6,"ng-template",null,5,h)),t&2&&(u(n.mobile?0:1),r(3),u(n.mobile?-1:3),r(2),u(n.isRichText?6:5),r(2),u(n.mobile?-1:7))},dependencies:[K,te,ee,X,Y,Z],styles:[`.fd-feed-list__name a{max-width:75%;display:inline-block;overflow:hidden;text-overflow:ellipsis;vertical-align:top;white-space:nowrap}.fd-feed-list__thumb{display:flex;align-items:center;justify-content:center;max-width:3rem;flex:0 0 3rem;height:3rem;overflow:hidden}.fd-feed-list__thumb img{width:100%;height:100%;object-fit:contain}.fd-feed-list__link--more{cursor:pointer;text-transform:initial}.fd-feed-list__link--more:hover{text-decoration:underline}
`],encapsulation:2,changeDetection:0})}};L([j,x("design:type",Function),x("design:paramtypes",[]),x("design:returntype",Array)],C.prototype,"buildComponentCssClass",null);var Be=[[["fd-feed-list-item"]]],Re=["fd-feed-list-item"],E=class e{constructor(i){this.elementRef=i,this.ariaLabel="",this.mobile=!1,this.isGroup=!0,this.borderLess=!1}buildComponentCssClass(){return[g.list,this.class,this.borderLess?`${g.list}--no-border`:"",this.isGroup?`${g.list}--group`:"",this.mobile?`${g.list}--s`:""]}ngAfterContentChecked(){this._refreshItems(),this._listenOnFeedItems()}ngOnInit(){this.buildComponentCssClass()}ngOnChanges(i){("mobile"in i||"borderLess"in i)&&(this.buildComponentCssClass(),this._refreshItems())}ngOnDestroy(){this.$feedItemChanges&&this.$feedItemChanges.unsubscribe()}_listenOnFeedItems(){this.$feedItemChanges=this.feedItems.changes.subscribe(()=>this._refreshItems())}_refreshItems(){(this.feedItems||[]).forEach(i=>{i.mobile=this.mobile,i.maxCharsAtDefault&&this.mobile&&(i.setDefaultMaxChars(),i.setHasMore())})}static{this.\u0275fac=function(t){return new(t||e)(z(w))}}static{this.\u0275cmp=m({type:e,selectors:[["fd-feed-list"]],contentQueries:function(t,n,f){if(t&1&&G(f,C,4),t&2){let k;U(k=q())&&(n.feedItems=k)}},inputs:{class:"class",ariaLabel:"ariaLabel",ariaLabelledby:"ariaLabelledby",mobile:"mobile",isGroup:"isGroup",borderLess:"borderLess"},standalone:!0,features:[T,c],ngContentSelectors:Re,decls:1,vars:0,template:function(t,n){t&1&&(p(Be),l(0))},styles:[`@charset "UTF-8";.fd-feed-list{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;background-color:var(--fdFeed_List_Item_Background);-ms-flex-direction:row;flex-direction:row;max-width:40rem}.fd-feed-list:after,.fd-feed-list:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list .fd-feed-list__thumb{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;margin-inline:0 .75rem;padding-block:0;padding-inline:0}.fd-feed-list .fd-feed-list__thumb:after,.fd-feed-list .fd-feed-list__thumb:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list__body{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-block:1rem;padding-inline:0;padding-inline:1rem}.fd-feed-list__body:after,.fd-feed-list__body:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list__body+.fd-feed-list__body{border-top:var(--fdFeed_List_Item_Border_Top)}.fd-feed-list__body+.fd-feed-list__body:last-child{border-bottom:var(--fdFeed_List_Item_Border_Bottom)}.fd-feed-list--no-border .fd-feed-list__body{border-top:none;padding-block:1rem .75rem;padding-inline:1rem}.fd-feed-list--no-border .fd-feed-list__body+.fd-feed-list__body{padding-block:.75rem .75rem}.fd-feed-list--no-border .fd-feed-list__body:last-child{-webkit-padding-after:1rem;border-bottom:none;padding-block-end:1rem}.fd-feed-list__link--more{cursor:pointer;text-transform:capitalize}.fd-feed-list__actions{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);float:right;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-block:.5rem;margin-inline:0;margin-inline:.5rem;padding-block:0;padding-inline:0;position:relative;right:-1rem;top:-1rem}.fd-feed-list__actions:after,.fd-feed-list__actions:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list__actions[dir=rtl],[dir=rtl] .fd-feed-list__actions{float:left;left:-1rem;right:auto}.fd-feed-list--group{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.fd-feed-list--link{cursor:pointer}.fd-feed-list--link.is-focus,.fd-feed-list--link:focus{outline:var(--sapContent_FocusColor) var(--sapContent_FocusStyle) var(--sapContent_FocusWidth);outline-offset:-.1875rem}.fd-feed-list__name{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;font-weight:700;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0}.fd-feed-list__name:after,.fd-feed-list__name:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list__text{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0}.fd-feed-list__text:after,.fd-feed-list__text:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list__footer{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-padding-before:.375rem;font-size:var(--sapFontSmallSize);padding-block-start:.375rem}.fd-feed-list__footer:after,.fd-feed-list__footer:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list__footer--byline{color:var(--sapContent_LabelColor)}.fd-feed-list__footer--byline:not(:last-child):after{content:"\\2022";padding-block:0;padding-inline:.25rem}.fd-feed-list--s .fd-feed-list__wrapper{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.fd-feed-list--s .fd-feed-list__wrapper:after,.fd-feed-list--s .fd-feed-list__wrapper:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list--s .fd-feed-list__wrapper--header{display:-webkit-box;display:-ms-flexbox;display:flex}.fd-feed-list--s .fd-feed-list__body{display:block}.fd-feed-list--s .fd-feed-list__text{-webkit-padding-before:.625rem;padding-block-start:.625rem}.fd-feed-list--s .fd-feed-list__actions{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;right:0;top:0;-webkit-padding-after:.25rem;padding-block-end:.25rem;-webkit-padding-start:.75rem;padding-inline-start:.75rem}.fd-feed-list--s .fd-feed-list__actions:after,.fd-feed-list--s .fd-feed-list__actions:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-feed-list--s .fd-feed-list__actions[dir=rtl],[dir=rtl] .fd-feed-list--s .fd-feed-list__actions{left:0;right:auto}
/*!
 * Fundamental Library Styles v0.38.0
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0})}};L([j,x("design:type",Function),x("design:paramtypes",[]),x("design:returntype",Array)],E.prototype,"buildComponentCssClass",null);var Ne=(()=>{class e{constructor(){this.fdBylineClass=!0}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=B({type:e,selectors:[["","fd-item-footer-byline",""]],hostVars:2,hostBindings:function(n,f){n&2&&I("fd-feed-list__footer--byline",f.fdBylineClass)},standalone:!0})}}return e})();var mt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=O({type:e})}static{this.\u0275inj=A({imports:[C]})}}return e})();export{ne as a,re as b,se as c,C as d,E as e,Ne as f,mt as g};
