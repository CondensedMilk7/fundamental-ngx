"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2343],{72343:(ua,_,n)=>{n.r(_),n.d(_,{AvatarGroupDocsModule:()=>da});var m=n(71567),c=n(3360),W=n(40713),e=n(65879),X=n(1187),ee=n(94702),f=n(44798),ae=n(3600),te=n(22225),p=n(36028),oe=n(33957),d=n(1013);const g=["John","Sarah","Jason","Christian","Jessica","Jonathan","Gordon","Simon","Jason","Whitney","Chris","David"],x=["Doe","Parker","Goldwell","Bow","Bale","Smith","Jason","Swan","Carter","Copper"],y=["Marketing Manager","Visual Designer","Software Developer"],h=["accidental-leave","account","activity-individual","action-settings","add-contact","addresses","attachment-photo","batch-payments","calendar"];let T=(()=>{class t{generate(a=25){const o=[];for(let r=0;r<a;r++){const l=g[Math.floor(Math.random()*g.length)],s=x[Math.floor(Math.random()*x.length)],v=y[Math.floor(Math.random()*y.length)];o.push({id:this._generateId(),firstName:l,lastName:s,position:v,phone:this._generatePhone(),mobile:this._generatePhone(),email:this._generateEmail(l,s),...this._generateImage()})}return o}_generateImage(){switch(Math.floor(3*Math.random())){case 1:return{imageUrl:`https://i.pravatar.cc/400?u=${this._generateId()}`};case 2:return{glyph:h[Math.floor(Math.random()*h.length)]};default:return null}}_generateId(){return Math.random().toString(36).substring(6)}_generateEmail(a,o){return`${a}_${o}_${Math.random().toString(36).substring(6)}@example.com`}_generatePhone(){return"+01"+Math.random().toString().slice(2,11)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n(96814),w=n(49670),b=n(66972),A=n(76801),G=n(54727),C=n(80310),N=n(17427);let re=(()=>{class t{constructor(){this.tabindex=0,this.role="button"}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","fd-avatar-group-popover-control",""]],hostAttrs:[1,"fd-avatar-group__popover-control"],hostVars:2,hostBindings:function(a,o){2&a&&e.uIk("tabindex",o.tabindex)("role",o.role)},inputs:{tabindex:"tabindex",role:"role"}}),t})();var Z=n(6138),k=n(47348),D=n(27905);let I=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","fd-avatar-group-overflow-button-text",""]],hostAttrs:[1,"fd-button__text","fd-avatar-group__button-text"]}),t})();var E=n(62105),J=n(32786),U=n(42837),Q=n(68153),q=n(36728),O=n(53380),M=n(96343),L=n(80378),S=n(31103),z=n(94863),H=n(75112),K=n(31678),F=n(97839),Y=n(88450),P=n(39813),B=n(80401),$=n(51683),R=n(93688);const ie=["overflowPopoverBody"];function ne(t,i){if(1&t&&e._UZ(0,"fd-avatar",21),2&t){const a=e.oxw().$implicit,o=e.oxw();e.Q6J("label",a.firstName+" "+a.lastName)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")("circle",!0)("border",!0)("size",o.size)}}function le(t,i){if(1&t&&e._UZ(0,"fd-avatar",22),2&t){const a=e.oxw().$implicit,o=e.oxw();e.Q6J("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")("circle",!0)("border",!0)("size",o.size)("image",a.imageUrl)}}function pe(t,i){if(1&t&&e._UZ(0,"fd-avatar",23),2&t){const a=e.oxw().$implicit,o=e.oxw();e.Q6J("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")("circle",!0)("border",!0)("size",o.size)("glyph",a.glyph)}}function se(t,i){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,ne,1,6,"fd-avatar",18),e.YNc(2,le,1,6,"fd-avatar",19),e.YNc(3,pe,1,6,"fd-avatar",20),e.qZA()),2&t){const a=i.$implicit;e.xp6(1),e.Q6J("ngIf",!a.imageUrl&&!a.glyph),e.xp6(1),e.Q6J("ngIf",a.imageUrl),e.xp6(1),e.Q6J("ngIf",a.glyph)}}function ce(t,i){if(1&t&&(e.TgZ(0,"button",24)(1,"bdi",25),e._uU(2),e.qZA()()),2&t){const a=e.oxw(),o=e.MAs(1);e.Q6J("size",a.size),e.xp6(2),e.hij(" +",o.overflowItemsCount," ")}}function de(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-button-bar",26),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.openOverflowMain())}),e.qZA()}if(2&t){const a=e.oxw();e.Q6J("glyph",a.isRtl?"navigation-right-arrow":"navigation-left-arrow")}}function ue(t,i){1&t&&(e.TgZ(0,"fd-bar-element"),e._uU(1,"\xa0"),e.qZA())}function ve(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-avatar",32),e.NdJ("click",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))})("keydown.enter",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))})("keydown.space",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))}),e.qZA()}if(2&t){const a=e.oxw().$implicit;e.Q6J("circle",!0)("label",a.firstName+" "+a.lastName)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function _e(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-avatar",33),e.NdJ("click",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))})("keydown.enter",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))})("keydown.space",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))}),e.qZA()}if(2&t){const a=e.oxw().$implicit;e.Q6J("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")("circle",!0)("image",a.imageUrl)}}function me(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-avatar",34),e.NdJ("click",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))})("keydown.enter",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))})("keydown.space",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(2);return e.KtG(l.openOverflowDetails(r))}),e.qZA()}if(2&t){const a=e.oxw().$implicit;e.Q6J("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")("circle",!0)("glyph",a.glyph)}}function fe(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",28),e.YNc(2,ve,1,4,"fd-avatar",29),e.YNc(3,_e,1,4,"fd-avatar",30),e.YNc(4,me,1,4,"fd-avatar",31),e.qZA(),e.BQk()),2&t){const a=i.$implicit;e.xp6(2),e.Q6J("ngIf",!a.imageUrl&&!a.glyph),e.xp6(1),e.Q6J("ngIf",a.imageUrl),e.xp6(1),e.Q6J("ngIf",a.glyph)}}function ge(t,i){if(1&t&&(e.ynx(0),e.YNc(1,fe,5,3,"ng-container",27),e.BQk()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngForOf",a.people)}}function xe(t,i){if(1&t&&e._UZ(0,"fd-avatar",40),2&t){const a=e.oxw(2);e.Q6J("circle",!0)("label",a.personDetails.firstName+" "+a.personDetails.lastName)("title",a.personDetails.firstName+" "+a.personDetails.lastName)("ariaLabel",a.personDetails.firstName+" "+a.personDetails.lastName+" avatar")}}function ye(t,i){if(1&t&&e._UZ(0,"fd-avatar",41),2&t){const a=e.oxw(2);e.Q6J("circle",!0)("title",a.personDetails.firstName+" "+a.personDetails.lastName)("ariaLabel",a.personDetails.firstName+" "+a.personDetails.lastName+" avatar")("image",a.personDetails.imageUrl)}}function he(t,i){if(1&t&&e._UZ(0,"fd-avatar",42),2&t){const a=e.oxw(2);e.Q6J("circle",!0)("title",a.personDetails.firstName+" "+a.personDetails.lastName)("ariaLabel",a.personDetails.firstName+" "+a.personDetails.lastName+" avatar")("glyph",a.personDetails.glyph)}}function Te(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"fd-quick-view",35)(2,"fd-quick-view-subheader"),e.YNc(3,xe,1,4,"fd-avatar",36),e.YNc(4,ye,1,4,"fd-avatar",37),e.YNc(5,he,1,4,"fd-avatar",38),e.TgZ(6,"fd-quick-view-subheader-title"),e._uU(7),e.qZA(),e.TgZ(8,"fd-quick-view-subheader-subtitle"),e._uU(9),e.qZA()(),e.TgZ(10,"fd-quick-view-group")(11,"fd-quick-view-group-title"),e._uU(12,"Contact Details"),e.qZA(),e.TgZ(13,"fd-quick-view-group-item")(14,"fd-quick-view-group-item-label"),e._uU(15,"Phone"),e.qZA(),e.TgZ(16,"fd-quick-view-group-item-content")(17,"a",39),e._uU(18),e.qZA()()(),e.TgZ(19,"fd-quick-view-group-item")(20,"fd-quick-view-group-item-label"),e._uU(21,"Mobile"),e.qZA(),e.TgZ(22,"fd-quick-view-group-item-content")(23,"a",39),e._uU(24),e.qZA()()(),e.TgZ(25,"fd-quick-view-group-item")(26,"fd-quick-view-group-item-label"),e._uU(27,"Email"),e.qZA(),e.TgZ(28,"fd-quick-view-group-item-content")(29,"a",39),e._uU(30),e.qZA()()()()(),e.BQk()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("id",a.personDetails.id),e.xp6(2),e.Q6J("ngIf",!a.personDetails.imageUrl&&!a.personDetails.glyph),e.xp6(1),e.Q6J("ngIf",a.personDetails.imageUrl),e.xp6(1),e.Q6J("ngIf",a.personDetails.glyph),e.xp6(2),e.AsE("",a.personDetails.firstName," ",a.personDetails.lastName,""),e.xp6(2),e.Oqu(a.personDetails.position),e.xp6(8),e.Q6J("href","tel:"+a.personDetails.phone,e.LSH),e.xp6(1),e.Oqu(a.personDetails.phone),e.xp6(5),e.Q6J("href","tel:"+a.personDetails.mobile,e.LSH),e.xp6(1),e.Oqu(a.personDetails.mobile),e.xp6(5),e.Q6J("href","mailto:"+a.personDetails.email,e.LSH),e.xp6(1),e.Oqu(a.personDetails.email)}}const we=function(){return[]};let be=(()=>{class t{get isDetailStage(){return"detail"===this.overflowPopoverStage}getPopoverCtrlAriaLabel(a=0){return"Has popup type dialog Conjoined avatars, "+((this.people?.length||0)-a)+" avatars displayed, "+a+" avatars hidden, activate for complete list"}constructor(a,o){this.avatarGroupDataExampleService=a,this._rtlService=o,this.size="l",this.people=this.avatarGroupDataExampleService.generate(),this.personDetails=null,this.overflowPopoverStage="main"}get isRtl(){return this._rtlService.rtl.getValue()}isOpenChanged(a){a&&this.openOverflowMain()}openOverflowDetails(a){this.personDetails=this.people[a],this.overflowPopoverStage="detail",setTimeout(()=>this.popoverBodyComponent?._focusFirstTabbableElement(),0)}openOverflowMain(){this.personDetails=null,this.overflowPopoverStage="main",setTimeout(()=>this.popoverBodyComponent?._focusFirstTabbableElement(),0)}handleControlClick(a,o){o.open()}handleControlKeydown(a,o){d.yS$.isKeyCode(a,[p.hY,p.Mf,p.L_,p.K5])&&(d.yS$.isKeyCode(a,[p.hY,p.Mf])&&o.close(),d.yS$.isKeyCode(a,[p.L_,p.K5])&&o.open())}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(T),e.Y36(d.qFd))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-avatar-group-group-type-example"]],viewQuery:function(a,o){if(1&a&&e.Gf(ie,5),2&a){let r;e.iGM(r=e.CRH())&&(o.popoverBodyComponent=r.first)}},decls:20,vars:20,consts:[["type","group",3,"size"],["avatarGroup_GroupType",""],["placement","bottom",3,"noArrow","focusTrapped","focusAutoCapture","triggers","closeOnOutsideClick","closeOnEscapeKey","maxWidth","isOpenChange"],["overflowPopover",""],["fd-avatar-group-popover-control","",3,"click","keydown"],["fd-avatar-group-item","",4,"ngFor","ngForOf"],["fd-button","","fd-avatar-group-overflow-button","","tabindex","-1","fdCozy","",3,"size",4,"ngIf"],["aria-labelledby","avatar-group-1-popover-header","role","tooltip"],["overflowPopoverBody",""],[1,"fd-popover__wrapper"],["fd-popover-body-header",""],["fd-bar","","barDesign","header"],["fd-bar-left",""],["fdType","transparent","aria-label","Back","title","Back",3,"glyph","click",4,"ngIf"],["id","avatar-group-1-popover-header"],[4,"ngIf"],["fd-avatar-group-overflow-body","",3,"noPadding","noHorizontalScroll","noVerticalScroll"],["fd-avatar-group-item",""],["role","img",3,"label","title","ariaLabel","circle","border","size",4,"ngIf"],["role","img",3,"title","ariaLabel","circle","border","size","image",4,"ngIf"],["role","img",3,"title","ariaLabel","circle","border","size","glyph",4,"ngIf"],["role","img",3,"label","title","ariaLabel","circle","border","size"],["role","img",3,"title","ariaLabel","circle","border","size","image"],["role","img",3,"title","ariaLabel","circle","border","size","glyph"],["fd-button","","fd-avatar-group-overflow-button","","tabindex","-1","fdCozy","",3,"size"],["fd-avatar-group-overflow-button-text",""],["fdType","transparent","aria-label","Back","title","Back",3,"glyph","click"],[4,"ngFor","ngForOf"],["fd-avatar-group-overflow-item",""],["fd-avatar-group-focusable-avatar","","size","s","role","img",3,"circle","label","title","ariaLabel","click","keydown.enter","keydown.space",4,"ngIf"],["fd-avatar-group-focusable-avatar","","role","img","size","s",3,"title","ariaLabel","circle","image","click","keydown.enter","keydown.space",4,"ngIf"],["fd-avatar-group-focusable-avatar","","role","img","size","s",3,"title","ariaLabel","circle","glyph","click","keydown.enter","keydown.space",4,"ngIf"],["fd-avatar-group-focusable-avatar","","size","s","role","img",3,"circle","label","title","ariaLabel","click","keydown.enter","keydown.space"],["fd-avatar-group-focusable-avatar","","role","img","size","s",3,"title","ariaLabel","circle","image","click","keydown.enter","keydown.space"],["fd-avatar-group-focusable-avatar","","role","img","size","s",3,"title","ariaLabel","circle","glyph","click","keydown.enter","keydown.space"],[3,"id"],["size","s","role","img",3,"circle","label","title","ariaLabel",4,"ngIf"],["size","s","role","img",3,"circle","title","ariaLabel","image",4,"ngIf"],["size","s","role","img",3,"circle","title","ariaLabel","glyph",4,"ngIf"],["fd-link","",3,"href"],["size","s","role","img",3,"circle","label","title","ariaLabel"],["size","s","role","img",3,"circle","title","ariaLabel","image"],["size","s","role","img",3,"circle","title","ariaLabel","glyph"]],template:function(a,o){if(1&a){const r=e.EpF();e.TgZ(0,"fd-avatar-group",0,1)(2,"fd-popover",2,3),e.NdJ("isOpenChange",function(s){return o.isOpenChanged(s)}),e.TgZ(4,"fd-popover-control",4),e.NdJ("click",function(s){e.CHM(r);const v=e.MAs(3);return e.KtG(o.handleControlClick(s,v))})("keydown",function(s){e.CHM(r);const v=e.MAs(3);return e.KtG(o.handleControlKeydown(s,v))}),e.YNc(5,se,4,3,"div",5),e.YNc(6,ce,3,2,"button",6),e.qZA(),e.TgZ(7,"fd-popover-body",7,8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12),e.YNc(13,de,1,1,"fd-button-bar",13),e.TgZ(14,"fd-bar-element",14),e._uU(15),e.qZA(),e.YNc(16,ue,2,0,"fd-bar-element",15),e.qZA()()(),e.TgZ(17,"div",16),e.YNc(18,ge,2,1,"ng-container",15),e.YNc(19,Te,31,13,"ng-container",15),e.qZA()()()()()}if(2&a){const r=e.MAs(1);e.Q6J("size",o.size),e.xp6(2),e.Q6J("noArrow",!1)("focusTrapped",!0)("focusAutoCapture",!0)("triggers",e.DdM(19,we))("closeOnOutsideClick",!0)("closeOnEscapeKey",!0)("maxWidth",312),e.xp6(2),e.uIk("aria-label",o.getPopoverCtrlAriaLabel(null==r?null:r.overflowItemsCount)),e.xp6(1),e.Q6J("ngForOf",o.people),e.xp6(1),e.Q6J("ngIf",r.overflowItemsCount>0),e.xp6(7),e.Q6J("ngIf",o.isDetailStage),e.xp6(2),e.hij(" ",o.isDetailStage?"Business Card":"Team Members ("+o.people.length+")"," "),e.xp6(1),e.Q6J("ngIf",o.isDetailStage),e.xp6(1),e.Q6J("noPadding",o.isDetailStage)("noHorizontalScroll",o.isDetailStage)("noVerticalScroll",!1),e.xp6(1),e.Q6J("ngIf","main"===o.overflowPopoverStage),e.xp6(1),e.Q6J("ngIf","detail"===o.overflowPopoverStage)}},dependencies:[u.sg,u.O5,w.$,b.r,A.N,G.m,C.D,N.E,re,Z.R,k.f,D.Z,I,E.A,J.f,U.x,Q.d,q.U,O.a,M.d,L.a,S.J,z.S,H.$,K.H,F.G,Y.v,P.R,B.b,$.J,R.N],encapsulation:2}),t})();var Ae=n(95006),Ge=n(82461);const Ce=["avatarGroup_IndividualType"],Ne=["overflowPopoverBody"];function Ze(t,i){if(1&t&&e._UZ(0,"fd-avatar",17),2&t){const a=e.oxw().$implicit,o=e.oxw();e.Q6J("circle",!0)("border",!0)("size",o.size)("title",a.firstName+" "+a.lastName)("label",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function ke(t,i){if(1&t&&e._UZ(0,"fd-avatar",18),2&t){const a=e.oxw().$implicit,o=e.oxw();e.Q6J("circle",!0)("border",!0)("size",o.size)("image",a.imageUrl)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function De(t,i){if(1&t&&e._UZ(0,"fd-avatar",19),2&t){const a=e.oxw().$implicit,o=e.oxw();e.Q6J("circle",!0)("border",!0)("size",o.size)("glyph",a.glyph)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function Ie(t,i){if(1&t&&e._UZ(0,"fd-avatar",20),2&t){const a=e.oxw().$implicit;e.Q6J("circle",!0)("label",a.firstName+" "+a.lastName)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function Ee(t,i){if(1&t&&e._UZ(0,"fd-avatar",21),2&t){const a=e.oxw().$implicit;e.Q6J("circle",!0)("image",a.imageUrl)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function Je(t,i){if(1&t&&e._UZ(0,"fd-avatar",22),2&t){const a=e.oxw().$implicit;e.Q6J("circle",!0)("glyph",a.glyph)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}const V=function(){return[]};function Ue(t,i){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"fd-popover",4,5)(3,"fd-popover-control")(4,"div",6),e.NdJ("click",function(r){e.CHM(a);const l=e.MAs(2),s=e.oxw();return e.KtG(s.handleControlClick(r,l))})("keydown",function(r){e.CHM(a);const l=e.MAs(2),s=e.oxw();return e.KtG(s.handleControlKeydown(r,l))}),e.YNc(5,Ze,1,6,"fd-avatar",7),e.YNc(6,ke,1,6,"fd-avatar",8),e.YNc(7,De,1,6,"fd-avatar",9),e.qZA()(),e.TgZ(8,"fd-popover-body",10)(9,"fd-quick-view",11)(10,"fd-quick-view-title",12),e._uU(11,"Business card"),e.qZA(),e.TgZ(12,"fd-quick-view-subheader",11),e.YNc(13,Ie,1,4,"fd-avatar",13),e.YNc(14,Ee,1,4,"fd-avatar",14),e.YNc(15,Je,1,4,"fd-avatar",15),e.TgZ(16,"fd-quick-view-subheader-title"),e._uU(17),e.qZA(),e.TgZ(18,"fd-quick-view-subheader-subtitle"),e._uU(19),e.qZA()(),e.TgZ(20,"fd-quick-view-group")(21,"fd-quick-view-group-title",11),e._uU(22,"Contact Details"),e.qZA(),e.TgZ(23,"fd-quick-view-group-item")(24,"fd-quick-view-group-item-label"),e._uU(25,"Phone"),e.qZA(),e.TgZ(26,"fd-quick-view-group-item-content")(27,"a",16),e._uU(28),e.qZA()()(),e.TgZ(29,"fd-quick-view-group-item")(30,"fd-quick-view-group-item-label"),e._uU(31,"Mobile"),e.qZA(),e.TgZ(32,"fd-quick-view-group-item-content")(33,"a",16),e._uU(34),e.qZA()()(),e.TgZ(35,"fd-quick-view-group-item")(36,"fd-quick-view-group-item-label"),e._uU(37,"Email"),e.qZA(),e.TgZ(38,"fd-quick-view-group-item-content")(39,"a",16),e._uU(40),e.qZA()()()()()()(),e.BQk()}if(2&t){const a=i.$implicit;e.xp6(1),e.Q6J("noArrow",!1)("triggers",e.DdM(28,V))("closeOnOutsideClick",!0)("closeOnEscapeKey",!0)("focusAutoCapture",!0)("focusTrapped",!0),e.xp6(4),e.Q6J("ngIf",!a.imageUrl&&!a.glyph),e.xp6(1),e.Q6J("ngIf",a.imageUrl),e.xp6(1),e.Q6J("ngIf",a.glyph),e.xp6(1),e.uIk("aria-labelledby",a.id+"-popover-header")("aria-describedby",a.id+"-popover-subheader"),e.xp6(1),e.Q6J("id",a.id),e.xp6(1),e.Q6J("id",a.id+"-popover-header"),e.xp6(2),e.Q6J("id",a.id+"-popover-subheader"),e.xp6(1),e.Q6J("ngIf",!a.imageUrl&&!a.glyph),e.xp6(1),e.Q6J("ngIf",a.imageUrl),e.xp6(1),e.Q6J("ngIf",a.glyph),e.xp6(2),e.AsE("",a.firstName," ",a.lastName,""),e.xp6(2),e.Oqu(a.position),e.xp6(1),e.uIk("aria-labelledby",a.id+"-group-title"),e.xp6(1),e.Q6J("id",a.id+"-group-title"),e.xp6(6),e.Q6J("href","tel:"+a.phone,e.LSH),e.xp6(1),e.Oqu(a.phone),e.xp6(5),e.Q6J("href","tel:"+a.mobile,e.LSH),e.xp6(1),e.Oqu(a.mobile),e.xp6(5),e.Q6J("href","mailto:"+a.email,e.LSH),e.xp6(1),e.Oqu(a.email)}}function Qe(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-button-bar",37),e.NdJ("click",function(){e.CHM(a);const r=e.oxw(2);return e.KtG(r.openOverflowMain())}),e.qZA()}if(2&t){const a=e.oxw(2);e.Q6J("glyph",a.isRtl?"navigation-right-arrow":"navigation-left-arrow")}}function qe(t,i){1&t&&(e.TgZ(0,"fd-bar-element"),e._uU(1,"\xa0"),e.qZA())}function Oe(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-avatar",43),e.NdJ("click",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))})("keydown.enter",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))})("keydown.space",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))}),e.qZA()}if(2&t){const a=e.oxw().$implicit;e.Q6J("circle",!0)("label",a.firstName+" "+a.lastName)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function Me(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-avatar",44),e.NdJ("click",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))})("keydown.enter",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))})("keydown.space",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))}),e.qZA()}if(2&t){const a=e.oxw().$implicit;e.Q6J("circle",!0)("image",a.imageUrl)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function Le(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-avatar",45),e.NdJ("click",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))})("keydown.enter",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))})("keydown.space",function(){e.CHM(a);const r=e.oxw().index,l=e.oxw(3);return e.KtG(l.openOverflowDetails(r))}),e.qZA()}if(2&t){const a=e.oxw().$implicit;e.Q6J("circle",!0)("glyph",a.glyph)("title",a.firstName+" "+a.lastName)("ariaLabel",a.firstName+" "+a.lastName+" avatar")}}function Se(t,i){if(1&t&&(e.TgZ(0,"div",39),e.YNc(1,Oe,1,4,"fd-avatar",40),e.YNc(2,Me,1,4,"fd-avatar",41),e.YNc(3,Le,1,4,"fd-avatar",42),e.qZA()),2&t){const a=i.$implicit;e.xp6(1),e.Q6J("ngIf",!a.imageUrl&&!a.glyph),e.xp6(1),e.Q6J("ngIf",a.imageUrl),e.xp6(1),e.Q6J("ngIf",a.glyph)}}function ze(t,i){if(1&t&&(e.ynx(0),e.YNc(1,Se,4,3,"div",38),e.ALo(2,"slice"),e.BQk()),2&t){const a=e.oxw(2),o=e.MAs(1);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,a.people,-1*o.overflowItemsCount))}}function He(t,i){if(1&t&&e._UZ(0,"fd-avatar",20),2&t){const a=e.oxw(3);e.Q6J("circle",!0)("label",a.personDetails.firstName+" "+a.personDetails.lastName)("title",a.personDetails.firstName+" "+a.personDetails.lastName)("ariaLabel",a.personDetails.firstName+" "+a.personDetails.lastName+" avatar")}}function Ke(t,i){if(1&t&&e._UZ(0,"fd-avatar",21),2&t){const a=e.oxw(3);e.Q6J("circle",!0)("image",a.personDetails.imageUrl)("title",a.personDetails.firstName+" "+a.personDetails.lastName)("ariaLabel",a.personDetails.firstName+" "+a.personDetails.lastName+" avatar")}}function Fe(t,i){if(1&t&&e._UZ(0,"fd-avatar",22),2&t){const a=e.oxw(3);e.Q6J("circle",!0)("glyph",a.personDetails.glyph)("title",a.personDetails.firstName+" "+a.personDetails.lastName)("ariaLabel",a.personDetails.firstName+" "+a.personDetails.lastName+" avatar")}}function Ye(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"fd-quick-view",11)(2,"fd-quick-view-subheader"),e.YNc(3,He,1,4,"fd-avatar",13),e.YNc(4,Ke,1,4,"fd-avatar",14),e.YNc(5,Fe,1,4,"fd-avatar",15),e.TgZ(6,"fd-quick-view-subheader-title"),e._uU(7),e.qZA(),e.TgZ(8,"fd-quick-view-subheader-subtitle"),e._uU(9),e.qZA()(),e.TgZ(10,"fd-quick-view-group")(11,"fd-quick-view-group-title"),e._uU(12,"Contact Details"),e.qZA(),e.TgZ(13,"fd-quick-view-group-item")(14,"fd-quick-view-group-item-label"),e._uU(15,"Phone"),e.qZA(),e.TgZ(16,"fd-quick-view-group-item-content")(17,"a",16),e._uU(18),e.qZA()()(),e.TgZ(19,"fd-quick-view-group-item")(20,"fd-quick-view-group-item-label"),e._uU(21,"Mobile"),e.qZA(),e.TgZ(22,"fd-quick-view-group-item-content")(23,"a",16),e._uU(24),e.qZA()()(),e.TgZ(25,"fd-quick-view-group-item")(26,"fd-quick-view-group-item-label"),e._uU(27,"Email"),e.qZA(),e.TgZ(28,"fd-quick-view-group-item-content")(29,"a",16),e._uU(30),e.qZA()()()()(),e.BQk()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("id",a.personDetails.id),e.xp6(2),e.Q6J("ngIf",!a.personDetails.imageUrl&&!a.personDetails.glyph),e.xp6(1),e.Q6J("ngIf",a.personDetails.imageUrl),e.xp6(1),e.Q6J("ngIf",a.personDetails.glyph),e.xp6(2),e.AsE("",a.personDetails.firstName," ",a.personDetails.lastName,""),e.xp6(2),e.Oqu(a.personDetails.position),e.xp6(8),e.Q6J("href","tel:"+a.personDetails.phone,e.LSH),e.xp6(1),e.Oqu(a.personDetails.phone),e.xp6(5),e.Q6J("href","tel:"+a.personDetails.mobile,e.LSH),e.xp6(1),e.Oqu(a.personDetails.mobile),e.xp6(5),e.Q6J("href","mailto:"+a.personDetails.email,e.LSH),e.xp6(1),e.Oqu(a.personDetails.email)}}function Pe(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"fd-popover",23,24),e.NdJ("isOpenChange",function(r){e.CHM(a);const l=e.oxw();return e.KtG(l.handleOverflowPopoverOpen(r))}),e.TgZ(2,"fd-popover-control")(3,"button",25),e.NdJ("click",function(r){e.CHM(a);const l=e.MAs(1),s=e.oxw();return e.KtG(s.handleControlClick(r,l))})("keydown",function(r){e.CHM(a);const l=e.MAs(1),s=e.oxw();return e.KtG(s.handleControlKeydown(r,l))}),e.TgZ(4,"bdi",26),e._uU(5),e.qZA()()(),e.TgZ(6,"fd-popover-body",27,28)(8,"div",29)(9,"div",30)(10,"div",31)(11,"div",32),e.YNc(12,Qe,1,1,"fd-button-bar",33),e.TgZ(13,"fd-bar-element",34),e._uU(14),e.qZA(),e.YNc(15,qe,2,0,"fd-bar-element",35),e.qZA()()(),e.TgZ(16,"div",36),e.YNc(17,ze,3,4,"ng-container",35),e.YNc(18,Ye,31,13,"ng-container",35),e.qZA()()()()}if(2&t){const a=e.oxw(),o=e.MAs(1);e.Q6J("noArrow",!1)("focusTrapped",!0)("focusAutoCapture",!0)("triggers",e.DdM(17,V))("closeOnOutsideClick",!0)("closeOnEscapeKey",!0)("maxWidth",312),e.xp6(3),e.Q6J("size",a.size),e.xp6(2),e.hij(" +",o.overflowItemsCount," "),e.xp6(7),e.Q6J("ngIf",a.isDetailStage),e.xp6(2),e.hij(" ",a.isDetailStage?"Business Card":"Team Members ("+o.overflowItemsCount+")"," "),e.xp6(1),e.Q6J("ngIf",a.isDetailStage),e.xp6(1),e.Q6J("noPadding",a.isDetailStage)("noHorizontalScroll",a.isDetailStage)("noVerticalScroll",!1),e.xp6(1),e.Q6J("ngIf","main"===a.overflowPopoverStage),e.xp6(1),e.Q6J("ngIf","detail"===a.overflowPopoverStage)}}let Be=(()=>{class t{get isDetailStage(){return"detail"===this.overflowPopoverStage}constructor(a,o){this.avatarGroupDataExampleService=a,this._rtlService=o,this.size="s",this.people=this.avatarGroupDataExampleService.generate(),this.personDetails=null,this.overflowPopoverStage="main"}get isRtl(){return this._rtlService.rtl.getValue()}openOverflowDetails(a){this.personDetails=this.people[a+(this.avatarGroup.allItemsCount-this.avatarGroup.overflowItemsCount)],this.overflowPopoverStage="detail",setTimeout(()=>this.popoverBodyComponent?._focusFirstTabbableElement(),0)}openOverflowMain(){this.personDetails=null,this.overflowPopoverStage="main",setTimeout(()=>this.popoverBodyComponent?._focusFirstTabbableElement(),0)}handleControlClick(a,o){o.open()}handleControlKeydown(a,o){d.yS$.isKeyCode(a,[p.hY,p.Mf,p.L_,p.K5])&&(d.yS$.isKeyCode(a,[p.hY,p.Mf])&&o.close(),d.yS$.isKeyCode(a,[p.L_,p.K5])&&o.open())}handleOverflowPopoverOpen(a){a&&this.openOverflowMain()}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(T),e.Y36(d.qFd))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-avatar-group-individual-type-example"]],viewQuery:function(a,o){if(1&a&&(e.Gf(Ce,5),e.Gf(Ne,5)),2&a){let r;e.iGM(r=e.CRH())&&(o.avatarGroup=r.first),e.iGM(r=e.CRH())&&(o.popoverBodyComponent=r.first)}},decls:4,vars:3,consts:[["type","individual",3,"size"],["avatarGroup_IndividualType",""],[4,"ngFor","ngForOf"],["placement","bottom",3,"noArrow","focusTrapped","focusAutoCapture","triggers","closeOnOutsideClick","closeOnEscapeKey","maxWidth","isOpenChange",4,"ngIf"],["placement","bottom",3,"noArrow","triggers","closeOnOutsideClick","closeOnEscapeKey","focusAutoCapture","focusTrapped"],["individualPopover",""],["fd-avatar-group-item","","tabindex","0",3,"click","keydown"],["role","img",3,"circle","border","size","title","label","ariaLabel",4,"ngIf"],["role","img",3,"circle","border","size","image","title","ariaLabel",4,"ngIf"],["role","img",3,"circle","border","size","glyph","title","ariaLabel",4,"ngIf"],["role","tooltip"],[3,"id"],["align","left",3,"id"],["size","s","role","img",3,"circle","label","title","ariaLabel",4,"ngIf"],["size","s","role","img",3,"circle","image","title","ariaLabel",4,"ngIf"],["size","s","role","img",3,"circle","glyph","title","ariaLabel",4,"ngIf"],["fd-link","",3,"href"],["role","img",3,"circle","border","size","title","label","ariaLabel"],["role","img",3,"circle","border","size","image","title","ariaLabel"],["role","img",3,"circle","border","size","glyph","title","ariaLabel"],["size","s","role","img",3,"circle","label","title","ariaLabel"],["size","s","role","img",3,"circle","image","title","ariaLabel"],["size","s","role","img",3,"circle","glyph","title","ariaLabel"],["placement","bottom",3,"noArrow","focusTrapped","focusAutoCapture","triggers","closeOnOutsideClick","closeOnEscapeKey","maxWidth","isOpenChange"],["overflowPopover",""],["fd-button","","fd-avatar-group-overflow-button","","fdCozy","",3,"size","click","keydown"],["fd-avatar-group-overflow-button-text",""],["aria-labelledby","avatar-group-0-popover-header","role","tooltip"],["overflowPopoverBody",""],[1,"fd-popover__wrapper"],["fd-popover-body-header",""],["fd-bar","","barDesign","header"],["fd-bar-left",""],["fdType","transparent","aria-label","Back","title","Back",3,"glyph","click",4,"ngIf"],["id","avatar-group-0-popover-header"],[4,"ngIf"],["fd-avatar-group-overflow-body","",3,"noPadding","noHorizontalScroll","noVerticalScroll"],["fdType","transparent","aria-label","Back","title","Back",3,"glyph","click"],["fd-avatar-group-overflow-item","",4,"ngFor","ngForOf"],["fd-avatar-group-overflow-item",""],["fd-avatar-group-focusable-avatar","","size","s","role","img",3,"circle","label","title","ariaLabel","click","keydown.enter","keydown.space",4,"ngIf"],["fd-avatar-group-focusable-avatar","","size","s","role","img",3,"circle","image","title","ariaLabel","click","keydown.enter","keydown.space",4,"ngIf"],["fd-avatar-group-focusable-avatar","","size","s","role","img",3,"circle","glyph","title","ariaLabel","click","keydown.enter","keydown.space",4,"ngIf"],["fd-avatar-group-focusable-avatar","","size","s","role","img",3,"circle","label","title","ariaLabel","click","keydown.enter","keydown.space"],["fd-avatar-group-focusable-avatar","","size","s","role","img",3,"circle","image","title","ariaLabel","click","keydown.enter","keydown.space"],["fd-avatar-group-focusable-avatar","","size","s","role","img",3,"circle","glyph","title","ariaLabel","click","keydown.enter","keydown.space"]],template:function(a,o){if(1&a&&(e.TgZ(0,"fd-avatar-group",0,1),e.YNc(2,Ue,41,29,"ng-container",2),e.YNc(3,Pe,19,18,"fd-popover",3),e.qZA()),2&a){const r=e.MAs(1);e.Q6J("size",o.size),e.xp6(2),e.Q6J("ngForOf",o.people),e.xp6(1),e.Q6J("ngIf",r.overflowItemsCount>0)}},dependencies:[u.sg,u.O5,w.$,b.r,A.N,G.m,C.D,N.E,Z.R,k.f,D.Z,I,E.A,J.f,U.x,Q.d,q.U,O.a,Ge.y,M.d,L.a,S.J,z.S,H.$,K.H,F.G,Y.v,P.R,B.b,$.J,R.N,u.OU],encapsulation:2}),t})();const j="avatar-group-data-example.service.ts";let We=(()=>{class t{constructor(){this.individualType=[{language:"html",fileName:"avatar-group-individual-type-example",code:(0,c.H8)("avatar-group-individual-type-example.component.html")},{language:"typescript",code:(0,c.H8)("avatar-group-individual-type-example.component.ts"),fileName:"avatar-group-individual-type-example",component:"AvatarGroupIndividualTypeExampleComponent"},{language:"typescript",name:"avatar-group-data-example.service.ts",code:(0,c.H8)(j),fileName:"avatar-group-data-example",component:"AvatarGroupDataExampleService",service:!0}],this.groupType=[{language:"html",fileName:"avatar-group-group-type-example",code:(0,c.H8)("avatar-group-group-type-example.component.html")},{language:"typescript",code:(0,c.H8)("avatar-group-group-type-example.component.ts"),fileName:"avatar-group-group-type-example",component:"AvatarGroupGroupTypeExampleComponent"},{language:"typescript",name:"avatar-group-data-example.service.ts",code:(0,c.H8)(j),fileName:"avatar-group-data-example",component:"AvatarGroupDataExampleService",service:!0}]}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-avatar-group"]],decls:25,vars:2,consts:[["id","individual-type","componentName","avatar-group"],[3,"exampleFiles"],["id","group-type","componentName","avatar-group"]],template:function(a,o){1&a&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Individual Type "),e.qZA(),e.TgZ(2,"description"),e._uU(3," Focus on Each Person ("),e.TgZ(4,"code"),e._uU(5,'type="individual"'),e.qZA(),e._uU(6,"). "),e._UZ(7,"br"),e._uU(8," The avatars are displayed next to each other and don\u2019t overlap. Use this type if each person is as important as the group as a whole, and the user\u2019s main focus is to get more information about some individuals in the group.\n"),e.qZA(),e.TgZ(9,"component-example"),e._UZ(10,"fd-avatar-group-individual-type-example"),e.qZA(),e._UZ(11,"code-example",1)(12,"separator"),e.TgZ(13,"fd-docs-section-title",2),e._uU(14," Group Type "),e.qZA(),e.TgZ(15,"description"),e._uU(16," Focus on the Sum of People ("),e.TgZ(17,"code"),e._uU(18,'type="group"'),e.qZA(),e._uU(19,"). "),e._UZ(20,"br"),e._uU(21," The group type displays overlapping avatars. Use this type if it\u2019s important to display the sum of people at first sight, rather than the individuals.\n"),e.qZA(),e.TgZ(22,"component-example"),e._UZ(23,"fd-avatar-group-group-type-example"),e.qZA(),e._UZ(24,"code-example",1)),2&a&&(e.xp6(11),e.Q6J("exampleFiles",o.individualType),e.xp6(13),e.Q6J("exampleFiles",o.groupType))},dependencies:[X.N,ee.E,f.w,ae.k,te.O,be,Be],encapsulation:2}),t})();var Xe=n(96779),ea=n(65271),aa=n(94210),ta=n(53649);let oa=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-avatar-group-header"]],decls:26,vars:0,consts:[["module","AvatarGroupModule","subPackage","avatar-group"]],template:function(a,o){1&a&&(e.TgZ(0,"fd-doc-page")(1,"header"),e._uU(2,"Avatar Group"),e.qZA(),e.TgZ(3,"description")(4,"p"),e._uU(5," The Avatar Group displays a number of avatars which act as a digital representation of the user. It is useful for visually showcasing a team, project team members, or employees for example. "),e.qZA(),e._uU(6," Types options: "),e.TgZ(7,"ul")(8,"li"),e._uU(9,"Group type"),e.qZA(),e.TgZ(10,"li"),e._uU(11,"Individual type"),e.qZA()(),e._uU(12," Size variations: "),e.TgZ(13,"ul")(14,"li"),e._uU(15,"Extra Small (xs)"),e.qZA(),e.TgZ(16,"li"),e._uU(17,"Small (s)"),e.qZA(),e.TgZ(18,"li"),e._uU(19,"Medium (m)"),e.qZA(),e.TgZ(20,"li"),e._uU(21,"Large (l)"),e.qZA(),e.TgZ(22,"li"),e._uU(23,"Extra Large (xl)"),e.qZA()()(),e._UZ(24,"import",0)(25,"fd-header-tabs"),e.qZA())},dependencies:[Xe.k,ea.G,aa.c,f.w,ta.i],encapsulation:2}),t})();var ra=n(65570),ia=n(43535),na=n(2622),la=n(93793),pa=n(10345),sa=n(58567);const ca=[{path:"",component:oa,children:[{path:"",component:We},{path:"api",component:c.hz,data:{content:W.X.avatarGroup}}]}];let da=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[(0,c.tC)("avatar-group")],imports:[m.Bz.forChild(ca),c.gP,Ae.Qn,ra.Fx,ia.hJ,oe.UU,na._A,la.Fh,sa.LO,pa.i,m.Bz]}),t})()}}]);