"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8905],{28905:(F,b,i)=>{i.d(b,{u:()=>g,yU:()=>I});var e=i(69808),w=i(14257),v=i(10826),h=i(15664),B=i(2215),c=i(6472),u=i(5e3);let I=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[e.ez,w.hJ,v.gj,v.k9,h.rt,c.jO,B.LU,c.jO]}),a})();i(92137);let g=(()=>{class a extends c.TU{constructor(){super("fd-step-input")}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275dir=u.lG2({type:a,selectors:[["fd-step-input","compact",""]],features:[u._Bn([{provide:c.SM,useExisting:(0,u.Gpc)(()=>a)}]),u.qOj]}),a})()},92137:(F,b,i)=>{i.d(b,{M:()=>G});var e=i(5e3),w=i(52382),v=i(50727),h=i(54968),B=i(49770),c=i(5963),u=i(17445),I=i(56451),x=i(39300),g=i(63900),a=i(82722),d=i(91159),l=i(6738),y=i(6472),C=i(10826),S=i(15664),k=i(69808),E=i(34531),D=i(21646),O=i(91467),T=i(27946),_=Intl.NumberFormat;const W=["incrementBtn"],z=["decrementBtn"],M=["inputElement"];function P(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"button",6,7),e.NdJ("blur",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onTouched())}),e.ALo(2,"fdTranslate"),e.ALo(3,"fdTranslate"),e.qZA()}if(2&r){const t=e.oxw();e.Q6J("disabled",!t.canDecrement)("title",t.decrementButtonTitle||e.lcZ(2,5,"coreStepInput.decrementButtonTitle"))("glyph",t.decrementButtonIcon),e.uIk("aria-label",t.decrementButtonTitle||e.lcZ(3,7,"coreStepInput.decrementButtonTitle"))("aria-controls",t.inputId)}}function R(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"button",6,8),e.NdJ("blur",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onTouched())}),e.ALo(2,"fdTranslate"),e.ALo(3,"fdTranslate"),e.qZA()}if(2&r){const t=e.oxw();e.Q6J("disabled",!t.canIncrement)("title",t.incrementButtonTitle||e.lcZ(2,5,"coreStepInput.incrementButtonTitle"))("glyph",t.incrementButtonIcon),e.uIk("aria-label",t.incrementButtonTitle||e.lcZ(3,7,"coreStepInput.incrementButtonTitle"))("aria-controls",t.inputId)}}function A(r,p){if(1&r&&e._UZ(0,"fd-form-message",9),2&r){const t=e.oxw();e.Q6J("type",t.state)("innerHTML",t.stateMessage,e.oJD)}}function H(r,p){if(1&r&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.Q6J("id",t.inputId+"__description"),e.xp6(1),e.hij(" ",t.unit||t.currencySign,"\n")}}let L=0,G=(()=>{class r{constructor(t,n,o,s,f){this._changeDetectorRef=n,this._liveAnnouncer=o,this._contentDensityObserver=s,this._elementRef=f,this.required=!1,this.incrementButtonIcon="add",this.decrementButtonIcon="less",this.inputId="fd-step-input-"+L++,this.step=1,this.inputTitle="",this.mode="decimal",this.state="default",this.useGrouping=!0,this.hasStepButtons=!0,this.placeholder="",this.onFocusIn=new e.vpe,this.onFocusOut=new e.vpe,this.valueChange=new e.vpe,this._value=null,this._subscriptions=new v.w0,this.onChange=()=>{},this.onTouched=()=>{},this.locale=t}set value(t){null==t?this._value=null:isNaN(t)||(t=Number(t),this._value=this._checkValueLimits(t)),this.lastEmittedValue=this._value,!this._firstEmittedValue&&this._value&&(this._firstEmittedValue=this._value),this._numberFormat&&this._updateViewValue()}get value(){return this._value}ngOnInit(){this._numberFormat=this._getNumberFormat(),this._buildRegExps()}ngAfterViewInit(){this._updateViewValue(),this._listenOnButtonsClick()}ngOnDestroy(){this._subscriptions.unsubscribe()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}writeValue(t){this.value=t}setDisabledState(t){this.disabled=t}get canIncrement(){return null==this.value||this.value+this.step<=this._max}get canDecrement(){return null==this.value||this.value-this.step>=this._min}get canDisplayLabel(){return!!this.unit||!!this.currencySign}increment(){this._incrementOrDecrement("increment")}decrement(){this._incrementOrDecrement("decrement")}_incrementOrDecrement(t){if("increment"===t&&this.canIncrement||"decrement"===t&&this.canDecrement){let n=!0;if(null==this.value&&this._firstEmittedValue){let o;this._value=this._firstEmittedValue,o="increment"===t?this.max:this.min,this._firstEmittedValue===o&&(this._value=o,n=!1)}n&&(this._value=this._cutFloatingNumberDistortion(this.value,"increment"===t?this.step:-this.step)),this._emitChangedValue(),this._updateViewValue()}}handleKeyDown(t){const n=o=>{o.stopPropagation(),o.preventDefault()};!this._canChangeValue||(l.yS.isKeyCode(t,d.LH)?(this.increment(),n(t)):l.yS.isKeyCode(t,d.JH)&&(this.decrement(),n(t)))}handleFocusIn(){this.focused=!0,this.onFocusIn.emit()}handleFocusOut(t){this.focused=!1,this.onFocusOut.emit(),this._elementRef.nativeElement.contains(t.relatedTarget)||this.onTouched()}handleScroll(t){this._canChangeValue&&this.focused&&(t.deltaY>0?this.decrement():this.increment(),t.preventDefault())}updateOnInputChanged(){this.value!==this.lastEmittedValue&&this._emitChangedValue(),this._updateViewValue()}trackInputValue(t){const n=this._parseValue(t.target.value);this._value=null!=n?this._checkValueLimits(n):null}get _canChangeValue(){return!(this.disabled||this.readonly)}_cutFloatingNumberDistortion(t,n){const o=`${n}`.split(".")[1],s=`${t}`.split(".")[1],f=o?o.length:0,m=s?s.length:0;return Number((t+n).toFixed(m>f?m:f))}_checkValueLimits(t){return t>this._max?this._max:t<this._min?this._min:(isNaN(this.maxFractionDigits)||(t=Number(t.toFixed(this.maxFractionDigits))),isNaN(this.minFractionDigits)||(t=Number(t.toFixed(this.minFractionDigits))),t)}_emitChangedValue(){this.lastEmittedValue=this.value,this.valueChange.emit(this.value),this.onChange(this.value)}get _max(){return isNaN(this.max)?Number.MAX_VALUE:this.max}get _min(){return isNaN(this.min)?-Number.MAX_VALUE:this.min}_updateViewValue(){const t=this._formatToViewValue(this.value);this.inputElement.nativeElement.value=t,this._liveAnnouncer.announce(t)}_listenOnButtonsClick(){this.hasStepButtons&&(this._subscriptions.add(this._setupButtonListener(this.incrementButton).subscribe(()=>{this.increment(),this._changeDetectorRef.detectChanges()})),this._subscriptions.add(this._setupButtonListener(this.decrementButton).subscribe(()=>{this.decrement(),this._changeDetectorRef.detectChanges()})))}_setupButtonListener(t){const n=(0,h.R)(t.nativeElement,"mousedown"),o=(0,h.R)(window,"mouseup"),s=(0,h.R)(t.nativeElement,"keydown").pipe((0,x.h)(m=>l.yS.isKeyCode(m,[d.L_,d.K5]))),f=(0,B.P)(()=>(0,c.H)(500).pipe((0,g.w)(()=>(0,u.F)(40)),(0,a.R)(o)));return(0,I.T)(n,n.pipe((0,g.w)(()=>f)),s)}_parseValue(t){const n=t.trim();if(""===n)return null;const o=n.replace(/\s/g,"").replace(this._currency,"").replace(this._groupSeparator,"").replace(this._minusSign,"-").replace(this._decimalSeparator,".").replace(this._numerals,this._index);if(o){const s=Number(o);return isNaN(s)?this.lastEmittedValue:s}return null}_getNumberFormat(){var t;if((0,e.X6Q)()&&this.minFractionDigits>this.maxFractionDigits)throw new Error("Range error - minFractionDigits can't be bigger than maxFractionDigits");return new _(this.locale,{localeMatcher:null!==(t=this.localeMatcher)&&void 0!==t?t:void 0,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits})}_getNumeralsExpressions(){const t=[...new _(this.locale,{useGrouping:!1}).format(9876543210).split("")].reverse(),n=new Map(t.map((o,s)=>[o,s]));return this._index=o=>n.get(o),new RegExp(`[${t.join("")}]`,"g")}_getDecimalSeparator(){const t=new _(this.locale,{useGrouping:!1});return new RegExp(`[${t.format(1.1).trim().replace(this._numerals,"")}]`,"g")}_getGroupingSeparator(){const t=new _(this.locale,{useGrouping:!0});return new RegExp(`[${t.format(1e3).trim().replace(this._numerals,"")}]`,"g")}_getMinusSignExpression(){const t=new _(this.locale,{useGrouping:!1});return new RegExp(`[${t.format(-1).trim().replace(this._numerals,"")}]`,"g")}_getCurrencyExpression(){if(this.currency){const t=new _(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay});return this.currencySign=`${t.format(1).replace(/\s/g,"").replace(this._numerals,"").replace(this._decimalSeparator,"").replace(this._groupSeparator,"")}`,new RegExp(`[${this.currencySign}]`,"g")}return new RegExp("[]","g")}_buildRegExps(){this._numerals=this._getNumeralsExpressions(),this._decimalSeparator=this._getDecimalSeparator(),this._minusSign=this._getMinusSignExpression(),this._groupSeparator=this._getGroupingSeparator(),this._currency=this._getCurrencyExpression()}_formatToViewValue(t){return null==t?"":this.currency?this._numberFormat.format(t).replace(this._currency,""):this._numberFormat.format(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(e.soG),e.Y36(e.sBO),e.Y36(S.Kd),e.Y36(y.c7),e.Y36(e.SBq))},r.\u0275cmp=e.Xpm({type:r,selectors:[["fd-step-input"]],viewQuery:function(t,n){if(1&t&&(e.Gf(W,5,e.SBq),e.Gf(z,5,e.SBq),e.Gf(M,7,e.SBq)),2&t){let o;e.iGM(o=e.CRH())&&(n.incrementButton=o.first),e.iGM(o=e.CRH())&&(n.decrementButton=o.first),e.iGM(o=e.CRH())&&(n.inputElement=o.first)}},hostAttrs:[1,"fd-step-input__container"],hostBindings:function(t,n){1&t&&e.NdJ("focusout",function(s){return n.handleFocusOut(s)})},inputs:{compact:"compact",readonly:"readonly",disabled:"disabled",required:"required",locale:"locale",localeMatcher:"localeMatcher",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",incrementButtonTitle:"incrementButtonTitle",decrementButtonTitle:"decrementButtonTitle",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",ariaRoleDescription:"ariaRoleDescription",inputId:"inputId",value:"value",min:"min",max:"max",step:"step",name:"name",inputTitle:"inputTitle",mode:"mode",state:"state",stateMessage:"stateMessage",unit:"unit",useGrouping:"useGrouping",minFractionDigits:"minFractionDigits",maxFractionDigits:"maxFractionDigits",currency:"currency",currencyDisplay:"currencyDisplay",hasStepButtons:"hasStepButtons",textAlign:"textAlign",placeholder:"placeholder"},outputs:{onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",valueChange:"valueChange"},features:[e._Bn([{provide:w.JU,useExisting:(0,e.Gpc)(()=>r),multi:!0},(0,y.EQ)(),(0,C.YO)(r)])],decls:9,vars:36,consts:[[1,"fd-step-input"],["fd-button","","fdType","transparent","class","fd-step-input__button","tabindex","-1","type","button",3,"disabled","title","glyph","blur",4,"ngIf"],["type","text","inputmode","numeric",1,"fd-input","fd-input--no-number-spinner","fd-step-input__input",3,"name","id","title","disabled","readOnly","placeholder","focusin","wheel","keydown","input","change"],["inputElement",""],[3,"type","innerHTML",4,"ngIf"],["class","fd-form-label fd-form-label--unit-description",3,"id",4,"ngIf"],["fd-button","","fdType","transparent","tabindex","-1","type","button",1,"fd-step-input__button",3,"disabled","title","glyph","blur"],["decrementBtn",""],["incrementBtn",""],[3,"type","innerHTML"],[1,"fd-form-label","fd-form-label--unit-description",3,"id"]],template:function(t,n){1&t&&(e.TgZ(0,"fd-form-input-message-group")(1,"div",0),e.YNc(2,P,4,9,"button",1),e.TgZ(3,"input",2,3),e.NdJ("focusin",function(){return n.handleFocusIn()})("wheel",function(s){return n.handleScroll(s)})("keydown",function(s){return n.handleKeyDown(s)})("input",function(s){return n.trackInputValue(s)})("change",function(){return n.updateOnInputChanged()}),e.ALo(5,"fdTranslate"),e.qZA(),e.YNc(6,R,4,9,"button",1),e.qZA(),e.YNc(7,A,1,2,"fd-form-message",4),e.qZA(),e.YNc(8,H,2,2,"span",5)),2&t&&(e.xp6(1),e.Tol(n.state?"is-"+n.state:""),e.ekj("is-focus",n.focused)("is-readonly",n.readonly)("is-disabled",n.disabled)("fd-step-input--compact",n._contentDensityObserver.isCompact)("fd-step-input--without-buttons",!n.hasStepButtons),e.xp6(1),e.Q6J("ngIf",n.hasStepButtons),e.xp6(1),e.Udp("text-align",n.textAlign),e.ekj("fd-input--compact",n._contentDensityObserver.isCompact),e.Q6J("name",n.name)("id",n.inputId)("title",n.inputTitle)("disabled",n.disabled)("readOnly",n.readonly)("placeholder",n.placeholder),e.uIk("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("aria-valuenow",n.value)("aria-valuemax",n.max)("aria-valuemin",n.min)("aria-describedby",n.canDisplayLabel?n.inputId+"__description":"")("aria-required",n.required)("aria-roledescription",n.ariaRoleDescription||e.lcZ(5,34,"coreStepInput.ariaRoleDescription")),e.xp6(3),e.Q6J("ngIf",n.hasStepButtons),e.xp6(1),e.Q6J("ngIf",!!n.stateMessage),e.xp6(1),e.Q6J("ngIf",n.canDisplayLabel))},dependencies:[k.O5,E.r,D.K,O.K,T.n],styles:[".fd-input{-webkit-box-sizing:border-box;-webkit-box-shadow:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;background:var(--sapField_BackgroundStyle);background-color:var(--sapField_Background);border:0;border:var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_BorderColor);border-radius:var(--sapField_BorderCornerRadius);box-shadow:none;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapField_TextColor);cursor:text;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;height:2.25rem;line-height:var(--sapContent_LineHeight);margin:.25rem 0;min-height:2.25rem;min-width:2.75rem;outline:none;overflow:hidden;padding:0 .625rem;text-overflow:ellipsis;text-shadow:var(--fdInput_Text_Shadow);white-space:nowrap;width:100%;z-index:1}.fd-input:after,.fd-input:before{box-sizing:inherit;font-size:inherit}.fd-input::-moz-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-input::placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-input[dir=rtl]::-moz-placeholder,[dir=rtl] .fd-input::-moz-placeholder{text-indent:.125rem}.fd-input[dir=rtl]::placeholder,[dir=rtl] .fd-input::placeholder{text-indent:.125rem}.fd-input::-moz-selection{background-color:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}.fd-input::selection{background-color:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}.fd-input::-ms-clear{display:none}.fd-input.is-hover,.fd-input:hover{-webkit-box-shadow:var(--fdInput_Box_Shadow_Hover);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background);border-color:var(--sapField_Hover_BorderColor);box-shadow:var(--fdInput_Box_Shadow_Hover)}.fd-input.is-focus,.fd-input:focus{-webkit-box-shadow:none;background:var(--sapField_Focus_Background);box-shadow:none;outline-color:var(--fdInput_Outline_Color);outline-offset:var(--fdInput_Outline_Offset);outline-style:var(--sapContent_FocusStyle);outline-width:var(--sapContent_FocusWidth);z-index:5}.fd-input[type=search]::-webkit-search-cancel-button,.fd-input[type=search]::-webkit-search-decoration,.fd-input[type=search]::-webkit-search-results-button,.fd-input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.fd-input[aria-expanded=false]{z-index:0}.fd-input.is-expanded,.fd-input[aria-expanded=true]{z-index:4}.fd-input:last-child{margin-bottom:.25rem}.fd-input--compact{box-sizing:border-box;height:1.625rem;margin:.1875rem 0;min-height:1.625rem;min-width:2rem;padding:0 .5rem}.fd-input--no-number-spinner{-moz-appearance:textfield}.fd-input--no-number-spinner::-webkit-inner-spin-button,.fd-input--no-number-spinner::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.fd-input.right-align{text-align:right}.fd-input.is-success{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border:var(--sapField_SuccessColor) var(--sapField_SuccessBorderWidth) var(--sapField_SuccessBorderStyle)}.fd-input.is-success.is-hover,.fd-input.is-success:hover{-webkit-box-shadow:var(--fdInput_Success_Box_Shadow_Hover);background-color:var(--fdInput_Success_Background_Color_Hover);border-color:var(--sapField_SuccessColor);box-shadow:var(--fdInput_Success_Box_Shadow_Hover)}.fd-input.is-success.is-focus,.fd-input.is-success:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Success_Outline_Color);z-index:5}.fd-input.is-success.is-focus.is-hover,.fd-input.is-success.is-focus:hover,.fd-input.is-success:focus.is-hover,.fd-input.is-success:focus:hover{box-shadow:none}.fd-input.is-error{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border:var(--sapField_InvalidColor) var(--sapField_InvalidBorderWidth) var(--sapField_InvalidBorderStyle)}.fd-input.is-error.is-hover,.fd-input.is-error:hover{-webkit-box-shadow:var(--fdInput_Error_Box_Shadow_Hover);background-color:var(--fdInput_Error_Background_Color_Hover);border-color:var(--sapField_InvalidColor);box-shadow:var(--fdInput_Error_Box_Shadow_Hover)}.fd-input.is-error.is-focus,.fd-input.is-error:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Error_Outline_Color);z-index:5}.fd-input.is-error.is-focus.is-hover,.fd-input.is-error.is-focus:hover,.fd-input.is-error:focus.is-hover,.fd-input.is-error:focus:hover{box-shadow:none}.fd-input.is-warning{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border:var(--sapField_WarningColor) var(--sapField_WarningBorderWidth) var(--sapField_WarningBorderStyle)}.fd-input.is-warning.is-hover,.fd-input.is-warning:hover{-webkit-box-shadow:var(--fdInput_Warning_Box_Shadow_Hover);background-color:var(--fdInput_Warning_Background_Color_Hover);border-color:var(--sapField_WarningColor);box-shadow:var(--fdInput_Warning_Box_Shadow_Hover)}.fd-input.is-warning.is-focus,.fd-input.is-warning:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Warning_Outline_Color);z-index:5}.fd-input.is-warning.is-focus.is-hover,.fd-input.is-warning.is-focus:hover,.fd-input.is-warning:focus.is-hover,.fd-input.is-warning:focus:hover{box-shadow:none}.fd-input.is-alert{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border:var(--sapField_WarningColor) var(--sapField_WarningBorderWidth) var(--sapField_WarningBorderStyle)}.fd-input.is-alert.is-hover,.fd-input.is-alert:hover{-webkit-box-shadow:var(--fdInput_Warning_Box_Shadow_Hover);background-color:var(--fdInput_Warning_Background_Color_Hover);border-color:var(--sapField_WarningColor);box-shadow:var(--fdInput_Warning_Box_Shadow_Hover)}.fd-input.is-alert.is-focus,.fd-input.is-alert:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Warning_Outline_Color);z-index:5}.fd-input.is-alert.is-focus.is-hover,.fd-input.is-alert.is-focus:hover,.fd-input.is-alert:focus.is-hover,.fd-input.is-alert:focus:hover{box-shadow:none}.fd-input.is-information{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border:var(--sapField_InformationColor) var(--sapField_InformationBorderWidth) var(--sapField_InformationBorderStyle)}.fd-input.is-information.is-hover,.fd-input.is-information:hover{-webkit-box-shadow:var(--fdInput_Information_Box_Shadow_Hover);background-color:var(--fdInput_Information_Background_Color_Hover);border-color:var(--sapField_InformationColor);box-shadow:var(--fdInput_Information_Box_Shadow_Hover)}.fd-input.is-information.is-focus,.fd-input.is-information:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Information_Outline_Color);z-index:5}.fd-input.is-information.is-focus.is-hover,.fd-input.is-information.is-focus:hover,.fd-input.is-information:focus.is-hover,.fd-input.is-information:focus:hover{box-shadow:none}.fd-input.is-alert,.fd-input.is-error,.fd-input.is-warning{font-style:var(--fdInput_State_Text_Style);font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert::-moz-placeholder,.fd-input.is-error::-moz-placeholder,.fd-input.is-warning::-moz-placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert::placeholder,.fd-input.is-error::placeholder,.fd-input.is-warning::placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert.is-focus,.fd-input.is-alert:focus,.fd-input.is-error.is-focus,.fd-input.is-error:focus,.fd-input.is-information.is-focus,.fd-input.is-information:focus,.fd-input.is-warning.is-focus,.fd-input.is-warning:focus{outline-offset:var(--fdInput_Outline_Offset_States);z-index:5}.fd-input.is-error::-moz-placeholder{color:var(--sapField_TextColor)}.fd-input.is-error::placeholder{color:var(--sapField_TextColor)}.fd-input.is-disabled,.fd-input:disabled,.fd-input[aria-disabled=true]{opacity:var(--sapContent_DisabledOpacity);pointer-events:none}.fd-input.is-disabled::-moz-placeholder,.fd-input:disabled::-moz-placeholder,.fd-input[aria-disabled=true]::-moz-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color)}.fd-input.is-disabled::placeholder,.fd-input:disabled::placeholder,.fd-input[aria-disabled=true]::placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color)}.fd-input.is-readonly,.fd-input[aria-readonly=true],.fd-input[readonly]{background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor);border-radius:var(--fdInput_ReadOnly_Border_Radius);pointer-events:none}.fd-input.is-readonly::-moz-placeholder,.fd-input[aria-readonly=true]::-moz-placeholder,.fd-input[readonly]::-moz-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color)}.fd-input.is-readonly::placeholder,.fd-input[aria-readonly=true]::placeholder,.fd-input[readonly]::placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color)}.fd-input.is-readonly.is-hover,.fd-input.is-readonly:hover,.fd-input[aria-readonly=true].is-hover,.fd-input[aria-readonly=true]:hover,.fd-input[readonly].is-hover,.fd-input[readonly]:hover{box-shadow:none}.fd-input.is-readonly.is-focus,.fd-input.is-readonly:focus,.fd-input[aria-readonly=true].is-focus,.fd-input[aria-readonly=true]:focus,.fd-input[readonly].is-focus,.fd-input[readonly]:focus{background:var(--sapField_Focus_Background);border-radius:var(--sapField_BorderCornerRadius);z-index:5}/*!\n * Fundamental Library Styles v0.26.0-rc.27\n * Copyright (c) 2022 SAP SE or an SAP affiliate company.\n * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)\n */.fd-step-input{-webkit-box-sizing:border-box;-webkit-box-shadow:none;-moz-appearance:none;-webkit-appearance:none;align-items:center;appearance:none;background:var(--sapField_BackgroundStyle);background-color:var(--sapField_Background);border:0;border:var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_BorderColor);border-radius:var(--sapField_BorderCornerRadius);box-shadow:none;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapField_TextColor);cursor:text;display:inline-flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;height:2.25rem;line-height:var(--sapContent_LineHeight);margin:.25rem 0;min-height:2.25rem;min-width:2.75rem;outline:none;overflow:hidden;padding:0;position:relative;text-overflow:ellipsis;text-shadow:var(--fdInput_Text_Shadow);white-space:nowrap;width:100%;width:auto;z-index:1}.fd-step-input:after,.fd-step-input:before{box-sizing:inherit;font-size:inherit}.fd-step-input::-moz-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-step-input::placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-step-input[dir=rtl]::-moz-placeholder,[dir=rtl] .fd-step-input::-moz-placeholder{text-indent:.125rem}.fd-step-input[dir=rtl]::placeholder,[dir=rtl] .fd-step-input::placeholder{text-indent:.125rem}.fd-step-input::-moz-selection{background-color:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}.fd-step-input::selection{background-color:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}.fd-step-input::-ms-clear{display:none}.fd-step-input.is-hover,.fd-step-input:hover{-webkit-box-shadow:var(--fdInput_Box_Shadow_Hover);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background);border-color:var(--sapField_Hover_BorderColor);box-shadow:var(--fdInput_Box_Shadow_Hover)}.fd-step-input.is-focus,.fd-step-input:focus{-webkit-box-shadow:none;background:var(--sapField_Focus_Background);box-shadow:none;outline-color:var(--fdInput_Outline_Color);outline-offset:var(--fdInput_Outline_Offset);outline-style:var(--sapContent_FocusStyle);outline-width:var(--sapContent_FocusWidth);z-index:5}.fd-step-input:focus-within{-webkit-box-shadow:none;background:var(--sapField_Focus_Background);box-shadow:none;outline-color:var(--fdInput_Outline_Color);outline-offset:var(--fdInput_Outline_Offset_Focus_Within);outline-style:var(--sapContent_FocusStyle);outline-width:var(--sapContent_FocusWidth)}.fd-step-input.is-success{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border:var(--sapField_SuccessColor) var(--sapField_SuccessBorderWidth) var(--sapField_SuccessBorderStyle)}.fd-step-input.is-success.is-hover,.fd-step-input.is-success:hover{-webkit-box-shadow:var(--fdInput_Success_Box_Shadow_Hover);background-color:var(--fdInput_Success_Background_Color_Hover);border-color:var(--sapField_SuccessColor);box-shadow:var(--fdInput_Success_Box_Shadow_Hover)}.fd-step-input.is-success.is-focus,.fd-step-input.is-success:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Success_Outline_Color);z-index:5}.fd-step-input.is-success.is-focus.is-hover,.fd-step-input.is-success.is-focus:hover,.fd-step-input.is-success:focus.is-hover,.fd-step-input.is-success:focus:hover{box-shadow:none}.fd-step-input.is-success:focus-within{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Success_Outline_Color)}.fd-step-input.is-success:focus-within.is-hover,.fd-step-input.is-success:focus-within:hover{box-shadow:none}.fd-step-input.is-error{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border:var(--sapField_InvalidColor) var(--sapField_InvalidBorderWidth) var(--sapField_InvalidBorderStyle)}.fd-step-input.is-error.is-hover,.fd-step-input.is-error:hover{-webkit-box-shadow:var(--fdInput_Error_Box_Shadow_Hover);background-color:var(--fdInput_Error_Background_Color_Hover);border-color:var(--sapField_InvalidColor);box-shadow:var(--fdInput_Error_Box_Shadow_Hover)}.fd-step-input.is-error.is-focus,.fd-step-input.is-error:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Error_Outline_Color);z-index:5}.fd-step-input.is-error.is-focus.is-hover,.fd-step-input.is-error.is-focus:hover,.fd-step-input.is-error:focus.is-hover,.fd-step-input.is-error:focus:hover{box-shadow:none}.fd-step-input.is-error:focus-within{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Error_Outline_Color)}.fd-step-input.is-error:focus-within.is-hover,.fd-step-input.is-error:focus-within:hover{box-shadow:none}.fd-step-input.is-warning{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border:var(--sapField_WarningColor) var(--sapField_WarningBorderWidth) var(--sapField_WarningBorderStyle)}.fd-step-input.is-warning.is-hover,.fd-step-input.is-warning:hover{-webkit-box-shadow:var(--fdInput_Warning_Box_Shadow_Hover);background-color:var(--fdInput_Warning_Background_Color_Hover);border-color:var(--sapField_WarningColor);box-shadow:var(--fdInput_Warning_Box_Shadow_Hover)}.fd-step-input.is-warning.is-focus,.fd-step-input.is-warning:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Warning_Outline_Color);z-index:5}.fd-step-input.is-warning.is-focus.is-hover,.fd-step-input.is-warning.is-focus:hover,.fd-step-input.is-warning:focus.is-hover,.fd-step-input.is-warning:focus:hover{box-shadow:none}.fd-step-input.is-warning:focus-within{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Warning_Outline_Color)}.fd-step-input.is-warning:focus-within.is-hover,.fd-step-input.is-warning:focus-within:hover{box-shadow:none}.fd-step-input.is-alert{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border:var(--sapField_WarningColor) var(--sapField_WarningBorderWidth) var(--sapField_WarningBorderStyle)}.fd-step-input.is-alert.is-hover,.fd-step-input.is-alert:hover{-webkit-box-shadow:var(--fdInput_Warning_Box_Shadow_Hover);background-color:var(--fdInput_Warning_Background_Color_Hover);border-color:var(--sapField_WarningColor);box-shadow:var(--fdInput_Warning_Box_Shadow_Hover)}.fd-step-input.is-alert.is-focus,.fd-step-input.is-alert:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Warning_Outline_Color);z-index:5}.fd-step-input.is-alert.is-focus.is-hover,.fd-step-input.is-alert.is-focus:hover,.fd-step-input.is-alert:focus.is-hover,.fd-step-input.is-alert:focus:hover{box-shadow:none}.fd-step-input.is-alert:focus-within{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Warning_Outline_Color)}.fd-step-input.is-alert:focus-within.is-hover,.fd-step-input.is-alert:focus-within:hover{box-shadow:none}.fd-step-input.is-information{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border:var(--sapField_InformationColor) var(--sapField_InformationBorderWidth) var(--sapField_InformationBorderStyle)}.fd-step-input.is-information.is-hover,.fd-step-input.is-information:hover{-webkit-box-shadow:var(--fdInput_Information_Box_Shadow_Hover);background-color:var(--fdInput_Information_Background_Color_Hover);border-color:var(--sapField_InformationColor);box-shadow:var(--fdInput_Information_Box_Shadow_Hover)}.fd-step-input.is-information.is-focus,.fd-step-input.is-information:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Information_Outline_Color);z-index:5}.fd-step-input.is-information.is-focus.is-hover,.fd-step-input.is-information.is-focus:hover,.fd-step-input.is-information:focus.is-hover,.fd-step-input.is-information:focus:hover{box-shadow:none}.fd-step-input.is-information:focus-within{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Information_Outline_Color)}.fd-step-input.is-information:focus-within.is-hover,.fd-step-input.is-information:focus-within:hover{box-shadow:none}.fd-step-input.is-alert,.fd-step-input.is-error,.fd-step-input.is-warning{font-style:var(--fdInput_State_Text_Style);font-weight:var(--fdInput_State_Font_Weight)}.fd-step-input.is-alert::-moz-placeholder,.fd-step-input.is-error::-moz-placeholder,.fd-step-input.is-warning::-moz-placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-step-input.is-alert::placeholder,.fd-step-input.is-error::placeholder,.fd-step-input.is-warning::placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-step-input.is-alert.is-focus,.fd-step-input.is-alert:focus,.fd-step-input.is-error.is-focus,.fd-step-input.is-error:focus,.fd-step-input.is-information.is-focus,.fd-step-input.is-information:focus,.fd-step-input.is-warning.is-focus,.fd-step-input.is-warning:focus{outline-offset:var(--fdInput_Outline_Offset_States);z-index:5}.fd-step-input.is-error::-moz-placeholder{color:var(--sapField_TextColor)}.fd-step-input.is-error::placeholder{color:var(--sapField_TextColor)}.fd-step-input.is-disabled,.fd-step-input:disabled,.fd-step-input[aria-disabled=true]{opacity:var(--sapContent_DisabledOpacity);pointer-events:none}.fd-step-input.is-disabled::-moz-placeholder,.fd-step-input:disabled::-moz-placeholder,.fd-step-input[aria-disabled=true]::-moz-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color)}.fd-step-input.is-disabled::placeholder,.fd-step-input:disabled::placeholder,.fd-step-input[aria-disabled=true]::placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color)}.fd-step-input.is-readonly,.fd-step-input[aria-readonly=true],.fd-step-input[readonly]{background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor);border-radius:var(--fdInput_ReadOnly_Border_Radius);pointer-events:none}.fd-step-input.is-readonly::-moz-placeholder,.fd-step-input[aria-readonly=true]::-moz-placeholder,.fd-step-input[readonly]::-moz-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color)}.fd-step-input.is-readonly::placeholder,.fd-step-input[aria-readonly=true]::placeholder,.fd-step-input[readonly]::placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color)}.fd-step-input.is-readonly.is-hover,.fd-step-input.is-readonly:hover,.fd-step-input[aria-readonly=true].is-hover,.fd-step-input[aria-readonly=true]:hover,.fd-step-input[readonly].is-hover,.fd-step-input[readonly]:hover{box-shadow:none}.fd-step-input.is-readonly.is-focus,.fd-step-input.is-readonly:focus,.fd-step-input[aria-readonly=true].is-focus,.fd-step-input[aria-readonly=true]:focus,.fd-step-input[readonly].is-focus,.fd-step-input[readonly]:focus{background:var(--sapField_Focus_Background);border-radius:var(--sapField_BorderCornerRadius);z-index:5}.fd-step-input .fd-step-input__button{background:var(--fdInput_Group_Button_Background);border:none;border-left:var(--sapButton_BorderWidth) solid transparent;border-radius:var(--fdInput_Group_Button_Border_Raduis);color:var(--fdInput_Group_Button_Text_Color);overflow:hidden;position:static!important;text-overflow:ellipsis;white-space:nowrap;z-index:auto!important}.fd-step-input .fd-step-input__button[dir=rtl],[dir=rtl] .fd-step-input .fd-step-input__button{border-left:none;border-right:var(--sapButton_BorderWidth) solid transparent}.fd-step-input .fd-step-input__button:before{display:none!important}.fd-step-input .fd-step-input__button.is-hover,.fd-step-input .fd-step-input__button:hover{-webkit-box-shadow:var(--fdInput_Group_Button_Box_Shadow);background:var(--fdInput_Group_Button_Hover_Background);border-left:var(--fdInputGroup_ControlButton_SideBorder);box-shadow:var(--fdInput_Group_Button_Box_Shadow);color:var(--fdInput_Group_Button_Hover_Text_Color)}.fd-step-input .fd-step-input__button.is-hover[dir=rtl],.fd-step-input .fd-step-input__button:hover[dir=rtl],[dir=rtl] .fd-step-input .fd-step-input__button.is-hover,[dir=rtl] .fd-step-input .fd-step-input__button:hover{border-left:none;border-right:var(--fdInputGroup_ControlButton_SideBorder)}.fd-step-input .fd-step-input__button.is-active,.fd-step-input .fd-step-input__button:active{-webkit-box-shadow:var(--fdInput_Group_Button_Box_Shadow);background:var(--fdInput_Group_Button_Active_Background);border-left:var(--fdInputGroup_ControlButton_SideBorder);box-shadow:var(--fdInput_Group_Button_Box_Shadow);color:var(--fdInput_Group_Button_Active_Text_Color)}.fd-step-input .fd-step-input__button.is-active[dir=rtl],.fd-step-input .fd-step-input__button:active[dir=rtl],[dir=rtl] .fd-step-input .fd-step-input__button.is-active,[dir=rtl] .fd-step-input .fd-step-input__button:active{border-left:none;border-right:var(--fdInputGroup_ControlButton_SideBorder)}.fd-step-input.is-success .fd-step-input__button.is-active,.fd-step-input.is-success .fd-step-input__button.is-hover,.fd-step-input.is-success .fd-step-input__button:active,.fd-step-input.is-success .fd-step-input__button:hover{box-shadow:var(--fdInput_Group_Button_Success_Active_Box_Shadow)}.fd-step-input.is-success .fd-step-input__button.is-active,.fd-step-input.is-success .fd-step-input__button:active{color:var(--fdInput_Group_Button_Success_Active_Text_Color)}.fd-step-input.is-error .fd-step-input__button.is-active,.fd-step-input.is-error .fd-step-input__button.is-hover,.fd-step-input.is-error .fd-step-input__button:active,.fd-step-input.is-error .fd-step-input__button:hover{box-shadow:var(--fdInput_Group_Button_Error_Active_Box_Shadow)}.fd-step-input.is-error .fd-step-input__button.is-active,.fd-step-input.is-error .fd-step-input__button:active{color:var(--fdInput_Group_Button_Error_Active_Text_Color)}.fd-step-input.is-warning .fd-step-input__button.is-active,.fd-step-input.is-warning .fd-step-input__button.is-hover,.fd-step-input.is-warning .fd-step-input__button:active,.fd-step-input.is-warning .fd-step-input__button:hover{box-shadow:var(--fdInput_Group_Button_Warning_Active_Box_Shadow)}.fd-step-input.is-warning .fd-step-input__button.is-active,.fd-step-input.is-warning .fd-step-input__button:active{color:var(--fdInput_Group_Button_Warning_Active_Text_Color)}.fd-step-input.is-alert .fd-step-input__button.is-active,.fd-step-input.is-alert .fd-step-input__button.is-hover,.fd-step-input.is-alert .fd-step-input__button:active,.fd-step-input.is-alert .fd-step-input__button:hover{box-shadow:var(--fdInput_Group_Button_Warning_Active_Box_Shadow)}.fd-step-input.is-alert .fd-step-input__button.is-active,.fd-step-input.is-alert .fd-step-input__button:active{color:var(--fdInput_Group_Button_Warning_Active_Text_Color)}.fd-step-input.is-information .fd-step-input__button.is-active,.fd-step-input.is-information .fd-step-input__button.is-hover,.fd-step-input.is-information .fd-step-input__button:active,.fd-step-input.is-information .fd-step-input__button:hover{box-shadow:var(--fdInput_Group_Button_Information_Active_Box_Shadow)}.fd-step-input.is-information .fd-step-input__button.is-active,.fd-step-input.is-information .fd-step-input__button:active{color:var(--fdInput_Group_Button_Information_Active_Text_Color)}.fd-step-input__button.fd-button{min-width:2.125rem;width:2.125rem}.fd-step-input__button.fd-button:after,.fd-step-input__button.fd-button:before{font-size:.875rem;margin:0}.fd-step-input__button.fd-button.is-focus,.fd-step-input__button.fd-button:focus{outline:none;z-index:5}.fd-step-input__button.fd-button.is-focus.is-hover,.fd-step-input__button.fd-button.is-focus:hover,.fd-step-input__button.fd-button:focus.is-hover,.fd-step-input__button.fd-button:focus:hover{z-index:auto}.fd-step-input__button.fd-button--compact{min-width:1.5rem;width:1.5rem}.fd-step-input__input.fd-input{background:none;background-color:transparent;border:none;margin:0;padding:0 .25rem;text-align:right}.fd-step-input__input.fd-input[dir=rtl],[dir=rtl] .fd-step-input__input.fd-input{text-align:left}.fd-step-input__input.fd-input.is-focus,.fd-step-input__input.fd-input.is-hover,.fd-step-input__input.fd-input:focus,.fd-step-input__input.fd-input:hover{-webkit-box-shadow:none;background:none;background-color:transparent;box-shadow:none}.fd-step-input__input.fd-input.is-focus,.fd-step-input__input.fd-input:focus{outline:none;z-index:5}.fd-step-input__input.fd-input--compact{height:100%}.fd-step-input__container{align-items:center;display:flex}.fd-step-input.is-error .fd-step-input__button.fd-button,.fd-step-input.is-information .fd-step-input__button.fd-button,.fd-step-input.is-warning .fd-step-input__button.fd-button{min-width:2rem;width:2rem}.fd-step-input--compact{height:1.625rem;min-height:1.625rem}.fd-step-input--compact.is-error .fd-step-input__button.fd-button,.fd-step-input--compact.is-information .fd-step-input__button.fd-button,.fd-step-input--compact.is-warning .fd-step-input__button.fd-button{min-width:1.375rem;width:1.375rem}.fd-step-input.is-readonly .fd-step-input__button.fd-button{display:none}.fd-step-input.is-readonly:focus-within{background:var(--sapField_Focus_Background);border-radius:var(--sapField_BorderCornerRadius)}.fd-step-input.is-readonly:focus-within .fd-step-input__input{background:transparent}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}.fd-input.fd-step-input__input.is-hover,.fd-input.fd-step-input__input:hover{z-index:auto}.fd-step-input--without-buttons>.fd-input{margin-bottom:0}.fd-step-input__container{display:flex;align-items:center}.fd-step-input__container .fd-form-label{align-self:auto}\n"],encapsulation:2,changeDetection:0}),r})()}}]);