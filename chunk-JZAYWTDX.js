import{Hc as Le,Ic as ze}from"./chunk-6UXCNRHI.js";import{K as he,N as Ce,V as ye,ka as Ee,qa as Oe}from"./chunk-CBJJHCQ6.js";import{$b as le,Aa as q,Ae as ue,Ba as G,Bg as Pe,Cb as b,Cg as be,Eb as s,Ec as de,Fd as j,Gd as ce,Ka as l,La as y,Lb as V,Mb as F,Nb as I,Oh as ve,Rb as w,Sb as a,Tb as re,Th as we,Ub as C,Yg as xe,Yh as ke,_b as se,_h as Te,aa as Z,ba as ee,bc as k,cb as ae,cc as D,db as P,df as W,eb as h,ef as U,g as H,gb as u,h as J,ib as oe,ii as Ve,ja as te,jc as d,ji as Fe,ka as ie,kc as m,ki as Ie,lc as x,ne as fe,ni as Se,ob as v,pa as ne,pc as A,qa as p,qb as L,ra as _,rb as z,sb as M,sc as pe,tb as c,tc as _e,ub as f,vb as B,vf as me,wc as ge,y as X,zb as T}from"./chunk-FZPMYWEN.js";var S=1,Y=2,R=(()=>{let r=class r{constructor(){this.moreElementValue=-1}getPages(e){e.currentPage||(e.currentPage=1),this.validate(e);let t=this.getTotalPages(e),o=new Array(t).fill(void 0).map((Q,Ae)=>Ae+1),g=S*2+Y*2+1+2;if(o.length<=g)return o;let K=e.currentPage-1,$=t-e.currentPage,O=Math.round(g/2);return K<O?[...o.slice(0,g-2),this.moreElementValue,...o.slice(t-S)]:$<O?[...o.slice(0,S),this.moreElementValue,...o.slice(t-g+2)]:[...o.slice(0,S),this.moreElementValue,...o.slice(e.currentPage-Y-1,e.currentPage+Y),this.moreElementValue,...o.slice(t-S)]}getTotalPages(e){return e.itemsPerPage?Math.ceil(e.totalItems/e.itemsPerPage):0}validate(e){pe()&&((isNaN(e.totalItems)||e.totalItems<=0)&&console.warn(`"totalItems" must be a number greater than zero but got "${e.totalItems}". This warning only appears in development mode.`),(isNaN(e.itemsPerPage)||e.itemsPerPage<=0)&&console.warn(`"itemsPerPage" must be a number greater than zero but got "${e.itemsPerPage}". This warning only appears in development mode.`))}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=Z({token:r,factory:r.\u0275fac});let n=r;return n})();var Re=["pageInputElement"],Ne=["currentPageElement"],Ke=(n,r)=>({onSelect:n,pageOptions:r}),E=n=>({pageNumber:n}),Be=(n,r)=>({pageNumber:n,totalCount:r}),$e=n=>({showing:n});function Qe(n,r){}function qe(n,r){if(n&1&&(a(0,`
        `),c(1,"div",5),a(2,`
            `),a(3,`
            `),a(4,`
            `),P(5,Qe,0,0,"ng-template",6),a(6,`
        `),f(),a(7,`
    `)),n&2){let i=s(2),e=w(8);l(5),u("ngTemplateOutlet",i.itemsPerPageTemplate||e)("ngTemplateOutletContext",D(2,Ke,i._onChangePerPage,i._displayedPageSizeOptions))}}function Ge(n,r){if(n&1){let i=T();a(0,`
                    `),c(1,"button",15),d(2,"fdTranslate"),d(3,"fdTranslate"),b("click",function(){p(i);let t=s().$implicit,o=s(3);return _(o.goToPage(t))})("keyup.enter",function(t){p(i);let o=s().$implicit,g=s(3);return _(g.goToPage(o,t))})("keydown.space",function(t){return p(i),_(t.preventDefault())})("keyup.space",function(t){p(i);let o=s().$implicit,g=s(3);return _(g.goToPage(o,t))}),a(4),f(),a(5,`
                `)}if(n&2){let i=s().$implicit;l(),u("ariaLabel",x(2,3,"corePagination.pageLabel",k(9,E,i)))("title",x(3,6,"corePagination.pageLabel",k(11,E,i))),l(3),C(`
                        `,i,`
                    `)}}function We(n,r){n&1&&(a(0,`
                    `),B(1,"span",16),a(2,`
                `))}function Ue(n,r){if(n&1&&(a(0,`
                `),P(1,Ge,6,13)(2,We,3,0)),n&2){let i=r.$implicit,e=s(3);l(),v(i!==e._moreElementValue?1:2)}}function Ye(n,r){if(n&1){let i=T();a(0,`
                    `),c(1,"button",15),d(2,"fdTranslate"),d(3,"fdTranslate"),b("click",function(){p(i);let t=s().$implicit,o=s(3);return _(o.goToPage(t))})("keyup.enter",function(t){p(i);let o=s().$implicit,g=s(3);return _(g.goToPage(o,t))})("keydown.space",function(t){return p(i),_(t.preventDefault())})("keyup.space",function(t){p(i);let o=s().$implicit,g=s(3);return _(g.goToPage(o,t))}),a(4),f(),a(5,`
                `)}if(n&2){let i=s().$implicit;l(),u("ariaLabel",x(2,3,"corePagination.pageLabel",k(9,E,i)))("title",x(3,6,"corePagination.pageLabel",k(11,E,i))),l(3),C(`
                        `,i,`
                    `)}}function He(n,r){n&1&&(a(0,`
                    `),B(1,"span",16),a(2,`
                `))}function Je(n,r){if(n&1&&(a(0,`
                `),P(1,Ye,6,13)(2,He,3,0)),n&2){let i=r.$implicit,e=s(3);l(),v(i!==e._moreElementValue?1:2)}}function Xe(n,r){if(n&1){let i=T();a(0,`
        `),c(1,"nav",7),d(2,"fdTranslate"),a(3,`
            `),c(4,"button",8),d(5,"fdTranslate"),d(6,"fdTranslate"),b("click",function(){p(i);let t=s(2);return _(t.goToFirstPage())})("keyup.enter",function(){p(i);let t=s(2);return _(t.goToFirstPage())})("keydown.space",function(t){return p(i),_(t.preventDefault())})("keyup.space",function(){p(i);let t=s(2);return _(t.goToFirstPage())}),f(),a(7,`
            `),c(8,"button",9),d(9,"fdTranslate"),d(10,"fdTranslate"),b("click",function(){p(i);let t=s(2);return _(t.previousPage())})("keyup.enter",function(){p(i);let t=s(2);return _(t.previousPage())})("keydown.space",function(t){return p(i),_(t.preventDefault())})("keyup.space",function(){p(i);let t=s(2);return _(t.previousPage())}),f(),a(11,`
            `),a(12,`
            `),z(13,Ue,3,1,null,null,L),c(15,"button",10,3),d(17,"fdTranslate"),a(18),f(),a(19,`
            `),c(20,"label",11),a(21),d(22,"fdTranslate"),f(),a(23,`
            `),c(24,"input",12,4),d(27,"fdTranslate"),b("keydown.enter",function(){p(i);let t=w(26),o=s(2);return _(o.goToPage(t.value))})("keydown.space",function(){p(i);let t=w(26),o=s(2);return _(o.goToPage(t.value))})("blur",function(){p(i);let t=w(26),o=s(2);return _(o._restoreInputValue(t))}),f(),a(28,`
            `),c(29,"label",11),a(30),d(31,"fdTranslate"),f(),a(32,`
            `),a(33,`
            `),z(34,Je,3,1,null,null,L),c(36,"button",13),d(37,"fdTranslate"),d(38,"fdTranslate"),b("click",function(){p(i);let t=s(2);return _(t.nextPage())})("keyup.enter",function(){p(i);let t=s(2);return _(t.nextPage())})("keydown.space",function(t){return p(i),_(t.preventDefault())})("keyup.space",function(){p(i);let t=s(2);return _(t.nextPage())}),f(),a(39,`
            `),c(40,"button",14),d(41,"fdTranslate"),d(42,"fdTranslate"),b("click",function(){p(i);let t=s(2);return _(t.goToLastPage())})("keyup.enter",function(){p(i);let t=s(2);return _(t.goToLastPage())})("keydown.space",function(t){return p(i),_(t.preventDefault())})("keyup.space",function(){p(i);let t=s(2);return _(t.goToLastPage())}),f(),a(43,`
        `),f(),a(44,`
    `)}if(n&2){let i=w(26),e=s(2);l(),u("skipPredicate",e.skipItemPredicate),h("aria-label",m(2,28,"corePagination.ariaLabel"))("aria-labelledby",e.displayTotalItems?e._totalPagesElementId:null),l(3),u("disabled",e.isFirstPage)("ariaLabel",m(5,30,"corePagination.firstLabel"))("title",m(6,32,"corePagination.firstLabel")),h("aria-disabled",e.isFirstPage),l(4),u("disabled",e.isFirstPage)("ariaLabel",m(9,34,"corePagination.previousLabel"))("title",m(10,36,"corePagination.previousLabel")),h("aria-disabled",e.isFirstPage),l(5),M(e._pagesBeforeCurrent),l(2),u("ariaLabel",x(17,38,"corePagination.pageLabel",k(57,E,e.currentPage))),h("aria-current",!0),l(3),C(`
                `,e.currentPage,`
            `),l(3),C(`
                `,m(22,41,"corePagination.labelBeforeInputMobile"),`
            `),l(3),u("max",e._lastPage)("state",i.invalid?"error":null)("ngModel",e.currentPage)("ariaLabel",x(27,43,"corePagination.inputAriaLabel",D(59,Be,e.currentPage,e._totalPages))),l(6),C(`
                `,x(31,46,"corePagination.labelAfterInputMobile",D(62,Be,e.currentPage,e._totalPages)),`
            `),l(4),M(e._pagesAfterCurrent),l(2),u("disabled",e.isLastPage)("ariaLabel",m(37,49,"corePagination.nextLabel"))("title",m(38,51,"corePagination.nextLabel")),h("aria-disabled",e.isLastPage),l(4),u("disabled",e.isLastPage)("ariaLabel",m(41,53,"corePagination.lastLabel"))("title",m(42,55,"corePagination.lastLabel")),h("aria-disabled",e.isLastPage)}}function Ze(n,r){}function et(n,r){if(n&1&&(a(0,`
        `),c(1,"span",17),a(2,`
            `),P(3,Ze,0,0,"ng-template",6),a(4,`
        `),f(),a(5,`
    `)),n&2){let i=s(2),e=w(5);l(),h("id",i._totalPagesElementId),l(2),u("ngTemplateOutlet",i.displayTextTemplate||e)("ngTemplateOutletContext",k(3,$e,i._currentShowing))}}function tt(n,r){if(n&1&&(a(0,`
    `),P(1,qe,8,5)(2,Xe,45,65)(3,et,6,5)),n&2){let i=s();l(),v(i.itemsPerPageTemplate||i.itemsPerPageOptions.length?1:-1),l(),v(i.totalItems>=i.itemsPerPage?2:-1),l(),v(i.displayTotalItems?3:-1)}}function it(n,r){n&1&&(a(0,`
    `),B(1,"span",16),a(2,`
`))}function nt(n,r){if(n&1&&(a(0,`
    `),c(1,"span",18),a(2),d(3,"fdTranslate"),f(),a(4,`
`)),n&2){let i=s();l(2),C(`
        `,x(3,1,"corePagination.totalResultsLabel",i._currentShowing),`
    `)}}function at(n,r){if(n&1&&(a(0,`
            `),c(1,"li",21),a(2),f(),a(3,`
        `)),n&2){let i=r.$implicit;l(),u("value",i),l(),re(i)}}function ot(n,r){if(n&1){let i=T();a(0,`
    `),c(1,"label",19),a(2),d(3,"fdTranslate"),f(),a(4,`
    `),c(5,"fd-select",20),b("valueChange",function(t){p(i);let o=s();return _(o._onChangePerPage(t))}),a(6,`
        `),z(7,at,4,2,null,null,L),f(),a(9,`
`)}if(n&2){let i=r.pageOptions,e=s();l(2),C(`
        `,m(3,2,"corePagination.itemsPerPageLabel"),`
    `),l(3),u("value",e.itemsPerPage),l(2),M(i)}}var N=10,rt=0,De=(()=>{let r=class r{set currentPage(e){this._currentPage=Math.floor(j(e,1))}get currentPage(){return this._currentPage}set itemsPerPage(e){e=Math.floor(j(e,N)),this._itemsPerPage=Math.max(e,1),this._updateDisplayedPageSizeOptions()}get itemsPerPage(){return this._itemsPerPage}set itemsPerPageOptions(e){this._itemsPerPageOptions=ce(e).map(t=>j(t,0)).map(t=>Math.floor(t)).filter(t=>t>0).sort((t,o)=>t-o),this._updateDisplayedPageSizeOptions()}get itemsPerPageOptions(){return this._itemsPerPageOptions}get paginationObject(){return{totalItems:this.totalItems,currentPage:this.currentPage,itemsPerPage:this.itemsPerPage}}get _lastPage(){return this.paginationService.getTotalPages(this.paginationObject)}get isFirstPage(){return this.currentPage===1}get isLastPage(){return this.currentPage===this.paginationService.getTotalPages(this.paginationObject)}get _totalPages(){return this.paginationService.getTotalPages(this.paginationObject)}get _totalPagesElementId(){return this.id+"__total"}get _moreElementValue(){return this.paginationService.moreElementValue}constructor(e,t,o,g,K,$){this.paginationService=e,this._cdr=t,this._liveAnnouncer=o,this._language=g,this._rtlService=K,this._contentDensityObserver=$,this.id="fd-pagination-"+rt++,this.mobile=!1,this.displayTotalItems=!0,this.pageChangeStart=new G,this.itemsPerPageChange=new G,this._pages=[],this._currentShowing={from:0,to:0,totalCount:0},this._displayedPageSizeOptions=[],this._itemsPerPage=N,this._itemsPerPageOptions=[],this._currentPage=1,this._subscriptions=new J,this._translationResolver=new Ce,this._onChangePerPage=O=>{this.itemsPerPage=O,this.itemsPerPageChange.emit(this.itemsPerPage),this._refreshPages();let Q=this._pages[this._pages.length-1];this.currentPage>Q&&this.pageChangeStart.emit(Q)}}ngOnChanges(e){if(e?.currentPage&&(this.currentPage=e.currentPage.currentValue),!this.currentPage||this.currentPage<1)this.currentPage=1;else{let t=this.paginationService.getTotalPages(this.paginationObject);this.currentPage>t&&(this.currentPage=t)}this._refreshPages()}ngOnInit(){this._subscriptions.add(this._rtlService?.rtl.subscribe(()=>this._refreshPages()))}ngAfterViewInit(){this._focusKeyManagerList?.focusKeyManager?.withVerticalOrientation(!1)}ngOnDestroy(){this._subscriptions.unsubscribe()}skipItemPredicate(e){return getComputedStyle(e.nativeElement).display==="none"||e.nativeElement.getAttribute("disabled")==="true"}goToPage(e,t){e>this._lastPage||e<1||(this._refreshPages(),t&&this._focusCurrentPage(),this.pageChangeStart.emit(e),this._announcePage(e))}goToFirstPage(){this.goToPage(1)}previousPage(){this.goToPage(this.currentPage-1)}nextPage(){this.goToPage(this.currentPage+1)}goToLastPage(){this.goToPage(this._lastPage)}_restoreInputValue(e){e.reset(this.currentPage),this._cdr.markForCheck()}_refreshPages(){let e=this.paginationObject;this._pages=this.paginationService.getPages(e);let t=this._pages.findIndex(g=>g===this.currentPage);this._pagesBeforeCurrent=this._pages.slice(0,t),this._pagesAfterCurrent=this._pages.slice(t+1);let o=e.itemsPerPage??N;this._currentShowing={from:this.currentPage-1===0?1:(this.currentPage-1)*o+1,to:Math.min((this.currentPage-1)*o+o,this.totalItems),totalCount:this.totalItems},this._cdr.markForCheck()}_focusCurrentPage(){let e=getComputedStyle(this._currentPageElement.nativeElement).display==="none"?this._pageInputElement.nativeElement:this._currentPageElement.nativeElement,t=this._focusKeyManagerItems.toArray().findIndex(o=>o.nativeElement===e);this._focusKeyManagerList.focusItem(t)}_updateDisplayedPageSizeOptions(){this.itemsPerPage||(this._itemsPerPage=this.itemsPerPageOptions.length?this.itemsPerPageOptions[0]:N),this._displayedPageSizeOptions=this.itemsPerPageOptions?.slice()??[],this._displayedPageSizeOptions.includes(this.itemsPerPage)||this._displayedPageSizeOptions.push(this.itemsPerPage),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._cdr.markForCheck()}_announcePage(e){return H(this,null,function*(){yield this._liveAnnouncer.announce(this._translationResolver.resolve(yield X(this._language),"corePagination.currentPageAriaLabel",{pageNumber:e,totalCount:this.totalItems}))})}};r.\u0275fac=function(t){return new(t||r)(y(R),y(_e),y(fe),y(he),y(ue,8),y(Pe))},r.\u0275cmp=te({type:r,selectors:[["fd-pagination"]],viewQuery:function(t,o){if(t&1&&(V(W,5),V(Re,5,q),V(Ne,5,q),V(U,5)),t&2){let g;F(g=I())&&(o._focusKeyManagerList=g.first),F(g=I())&&(o._pageInputElement=g.first),F(g=I())&&(o._currentPageElement=g.first),F(g=I())&&(o._focusKeyManagerItems=g)}},hostAttrs:[1,"fd-pagination"],hostVars:4,hostBindings:function(t,o){t&2&&oe("fd-pagination--mobile",o.mobile)("fd-pagination--short",o._lastPage<=9)},inputs:{id:"id",mobile:[2,"mobile","mobile",ge],totalItems:"totalItems",currentPage:"currentPage",itemsPerPage:"itemsPerPage",itemsPerPageTemplate:"itemsPerPageTemplate",itemsPerPageOptions:"itemsPerPageOptions",displayTotalItems:"displayTotalItems",displayTextTemplate:"displayTextTemplate"},outputs:{pageChangeStart:"pageChangeStart",itemsPerPageChange:"itemsPerPageChange"},standalone:!0,features:[se([R,be()]),ae,ne,le],decls:10,vars:1,consts:[["more",""],["total",""],["perPage",""],["currentPageElement",""],["pageInputElement","","currentPageModel","ngModel"],[1,"fd-pagination__per-page"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["fdkFocusKeyManagerList","","orientation","horizontal",1,"fd-pagination__nav",3,"skipPredicate"],["fdkFocusKeyManagerItem","","fd-button","","fdType","transparent","glyph","media-rewind",1,"fd-pagination__button","fd-pagination__button--mobile",3,"click","keyup.enter","keydown.space","keyup.space","disabled","ariaLabel","title"],["fdkFocusKeyManagerItem","","fd-button","","fdType","transparent","glyph","navigation-left-arrow",1,"fd-pagination__button",3,"click","keyup.enter","keydown.space","keyup.space","disabled","ariaLabel","title"],["fdkFocusKeyManagerItem","","fd-button","","fdType","transparent",1,"fd-pagination__link","is-active",3,"ariaLabel"],["fd-form-label","",1,"fd-pagination__label"],["fdkFocusKeyManagerItem","","fd-form-control","","fdkOnlyDigits","","required","","size","1","min","1","type","number",1,"fd-pagination__input",3,"keydown.enter","keydown.space","blur","max","state","ngModel","ariaLabel"],["fdkFocusKeyManagerItem","","fd-button","","fdType","transparent","glyph","navigation-right-arrow",1,"fd-pagination__button",3,"click","keyup.enter","keydown.space","keyup.space","disabled","ariaLabel","title"],["fdkFocusKeyManagerItem","","fd-button","","fdType","transparent","glyph","media-forward",1,"fd-pagination__button","fd-pagination__button--mobile",3,"click","keyup.enter","keydown.space","keyup.space","disabled","ariaLabel","title"],["fdkFocusKeyManagerItem","","fd-button","","fdType","transparent",1,"fd-pagination__link",3,"click","keyup.enter","keydown.space","keyup.space","ariaLabel","title"],["aria-hidden","true","aria-label","...","role","presentation",1,"fd-pagination__more"],[1,"fd-pagination__total"],["fd-form-label","",1,"fd-pagination__total-label"],["fd-form-label","",1,"fd-pagination__per-page-label"],[1,"fd-pagination__per-page-select",3,"valueChange","value"],["fd-option","",3,"value"]],template:function(t,o){t&1&&(P(0,tt,4,3)(1,it,3,0,"ng-template",null,0,A),a(3,`
`),P(4,nt,5,4,"ng-template",null,1,A),a(6,`
`),P(7,ot,10,4,"ng-template",null,2,A),a(9,`
`)),t&2&&v(o.totalItems?0:-1)},dependencies:[de,W,xe,U,Oe,Se,ve,Te,we,Ie,Fe,Ve,ke,Ee,me,ze,Le,ye],styles:[`.fd-pagination{--fdPaginationMoreWidth:var(--fdPagination_Placeholder_Dots_Width);-webkit-box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;height:2.75rem;justify-content:space-between;line-height:normal;margin:0;padding:0 1rem;width:100%}.fd-pagination:after,.fd-pagination:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-pagination__per-page{-webkit-box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;justify-content:center;line-height:normal;margin:0;padding:0}.fd-pagination__per-page:after,.fd-pagination__per-page:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-pagination__nav{-webkit-box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;gap:var(--fdPagination_Elements_Spacing);justify-content:center;line-height:normal;margin:0 auto;padding:0}.fd-pagination__nav:after,.fd-pagination__nav:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-pagination__more{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin:0;padding:0}.fd-pagination__more:after,.fd-pagination__more:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-pagination__more:before{content:"...";display:block;text-align:center;width:var(--fdPaginationMoreWidth)}.fd-pagination__more[class*=-compact],.fd-pagination__more[class*=-condensed],[class*=-compact] .fd-pagination__more:not([class*=-cozy]),[class*=-condensed] .fd-pagination__more:not([class*=-cozy]){--fdPaginationMoreWidth:var(--fdPagination_Placeholder_Dots_Width_Compact)}.fd-pagination .fd-pagination__input{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;min-width:2.5rem;text-align:center;width:auto}.fd-pagination .fd-pagination__input::-webkit-inner-spin-button,.fd-pagination .fd-pagination__input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.fd-pagination .fd-pagination__label,.fd-pagination .fd-pagination__per-page-label{-ms-flex-negative:0;-ms-flex-item-align:center;align-self:center;flex-shrink:0}.fd-pagination .fd-pagination__label{display:none}.fd-pagination .fd-pagination__total-label{margin:0}.fd-pagination .fd-pagination__link.is-focus,.fd-pagination .fd-pagination__link:focus{outline:none;z-index:5}.fd-pagination .fd-pagination__link.is-focus:after,.fd-pagination .fd-pagination__link:focus:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--fdButton_Focus_Border_Radius);content:"";display:block;inset:var(--fdButton_Outline_Offset) var(--fdButton_Outline_Offset) var(--fdButton_Outline_Offset) var(--fdButton_Outline_Offset);position:absolute}.fd-pagination .fd-pagination__link.is-focus.fd-button--toggled:after,.fd-pagination .fd-pagination__link.is-focus.is-selected:after,.fd-pagination .fd-pagination__link:focus.fd-button--toggled:after,.fd-pagination .fd-pagination__link:focus.is-selected:after{border-color:var(--fdButton_Outline_Contrast)}.fd-pagination .fd-pagination__link.is-active{display:none}.fd-pagination .fd-pagination__button [class*=sap-icon][dir=rtl],[dir=rtl] .fd-pagination .fd-pagination__button [class*=sap-icon]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fd-pagination .fd-pagination__button--mobile{display:none}.fd-pagination .fd-pagination__button.is-disabled,.fd-pagination .fd-pagination__button:disabled,.fd-pagination .fd-pagination__button[aria-disabled=true]{pointer-events:none}.fd-pagination--short .fd-pagination__link.is-active,.fd-pagination--short .fd-pagination__link:active{display:-webkit-box;display:-ms-flexbox;display:flex}.fd-pagination--short .fd-pagination__input{display:none}.fd-pagination--mobile .fd-pagination__per-page+.fd-pagination__nav{margin-left:auto;margin-right:0}.fd-pagination--mobile .fd-pagination__per-page+.fd-pagination__nav[dir=rtl],[dir=rtl] .fd-pagination--mobile .fd-pagination__per-page+.fd-pagination__nav{margin-left:0;margin-right:auto}.fd-pagination--mobile .fd-pagination__link,.fd-pagination--mobile .fd-pagination__more,.fd-pagination--mobile .fd-pagination__per-page-label,.fd-pagination--mobile .fd-pagination__total{display:none}.fd-pagination--mobile .fd-pagination__button--mobile,.fd-pagination--mobile .fd-pagination__input,.fd-pagination--mobile .fd-pagination__label{display:-webkit-box;display:-ms-flexbox;display:flex}.fd-pagination--mobile .fd-pagination__link.is-active,.fd-pagination--mobile .fd-pagination__link:active{display:none}@media (width <= 599px){.fd-pagination .fd-pagination__per-page+.fd-pagination__nav{margin-left:auto;margin-right:0}.fd-pagination .fd-pagination__per-page+.fd-pagination__nav[dir=rtl],[dir=rtl] .fd-pagination .fd-pagination__per-page+.fd-pagination__nav{margin-left:0;margin-right:auto}.fd-pagination .fd-pagination__link,.fd-pagination .fd-pagination__more,.fd-pagination .fd-pagination__per-page-label,.fd-pagination .fd-pagination__total{display:none}.fd-pagination .fd-pagination__button--mobile,.fd-pagination .fd-pagination__input,.fd-pagination .fd-pagination__label{display:-webkit-box;display:-ms-flexbox;display:flex}.fd-pagination .fd-pagination__link.is-active,.fd-pagination .fd-pagination__link:active{display:none}}@media (width >= 600px) and (width <= 1023px){.fd-pagination .fd-pagination__per-page+.fd-pagination__nav{margin-left:auto;margin-right:0}.fd-pagination .fd-pagination__per-page+.fd-pagination__nav[dir=rtl],[dir=rtl] .fd-pagination .fd-pagination__per-page+.fd-pagination__nav{margin-left:0;margin-right:auto}.fd-pagination .fd-pagination__link,.fd-pagination .fd-pagination__more,.fd-pagination .fd-pagination__per-page-label,.fd-pagination .fd-pagination__total{display:none}.fd-pagination .fd-pagination__button--mobile,.fd-pagination .fd-pagination__input,.fd-pagination .fd-pagination__label{display:-webkit-box;display:-ms-flexbox;display:flex}.fd-pagination .fd-pagination__link.is-active,.fd-pagination .fd-pagination__link:active{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}.fd-pagination__label .fd-form-label,.fd-pagination__total-label .fd-form-label{margin:0}
/*!
 * Fundamental Library Styles v0.37.1
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0});let n=r;return n})();var Qt=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=ie({type:r}),r.\u0275inj=ee({imports:[De]});let n=r;return n})();export{De as a,Qt as b};
