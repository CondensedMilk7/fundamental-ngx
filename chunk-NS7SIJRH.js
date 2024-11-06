import{ka as G}from"./chunk-2VLUARKK.js";import{$ as E,$b as N,Ba as a,Cb as l,Dg as M,Eg as q,Fb as R,Gb as j,Gd as C,Jd as I,Ka as g,La as u,Lb as k,Mb as y,Nb as S,Oh as K,_b as V,_g as Q,aa as H,ba as T,eb as f,gb as h,h as D,hb as L,ja as O,ka as W,kb as U,la as b,qa as s,ra as p,tb as _,tc as A,ub as v,zb as P}from"./chunk-ZLSDKTP7.js";var F=(()=>{class r{validateFiles(i,t,e,o){let n=I(e),d=I(t),w=null;o&&(w=o.toLocaleLowerCase().replace(/[\s.]/g,"").split(","));let x={};return x.validFiles=i.filter(c=>this._checkSize(c.size,n,d)&&this._checkExtension(c,w)),x.invalidFiles=i.filter(c=>!this._checkSize(c.size,n,d)||!this._checkExtension(c,w)),x}_checkExtension(i,t){if(!t)return!0;let e=i.name.split(".")[i.name.split(".").length-1].toLocaleLowerCase();return t.lastIndexOf(e)!==-1}_checkSize(i,t,e){return!(t&&i>t||e&&i<e)}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=H({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var z=(()=>{class r{constructor(i){this._fileUploadService=i,this.multiple=!0,this.maxFileSize="",this.minFileSize="",this.disabled=!1,this.dragndrop=!0,this.fileChanged=new a,this.dragEntered=new a,this.dragLeave=new a,this.elementStateCounter=0}onDragover(i){this.dragndrop&&this._muteEvent(i)}onDragenter(){++this.elementStateCounter,this.dragndrop&&this.elementStateCounter===1&&this.dragEntered.emit()}onDragleave(i){--this.elementStateCounter,this.dragndrop&&this.elementStateCounter===0&&(this._muteEvent(i),this.dragLeave.emit())}onDrop(i){if(this.elementStateCounter=0,!this.dragndrop||this.disabled)return;this._muteEvent(i);let t=i.dataTransfer.files,e=Array.from(t);if(!this.multiple&&e.length>1){this.fileChanged.emit({validFiles:[],invalidFiles:e});return}let o=this._fileUploadService.validateFiles(e,this.minFileSize,this.maxFileSize,this.accept);this.fileChanged.emit(o)}_muteEvent(i){i.preventDefault(),i.stopPropagation()}static{this.\u0275fac=function(t){return new(t||r)(u(F))}}static{this.\u0275dir=b({type:r,selectors:[["","fdFileDragnDrop",""],["","fd-file-drag-n-drop",""]],hostBindings:function(t,e){t&1&&l("dragover",function(n){return e.onDragover(n)})("dragenter",function(){return e.onDragenter()})("dragleave",function(n){return e.onDragleave(n)})("drop",function(n){return e.onDrop(n)})},inputs:{multiple:"multiple",accept:"accept",maxFileSize:"maxFileSize",minFileSize:"minFileSize",disabled:"disabled",dragndrop:"dragndrop"},outputs:{fileChanged:"fileChanged",dragEntered:"dragEntered",dragLeave:"dragLeave"},standalone:!0})}}return r})();var B=(()=>{class r{constructor(){this.multiple=!0,this.fileSelected=new a}get multipleBinding(){return this.multiple?!0:void 0}onChange(i){if(i.target instanceof HTMLInputElement){let e=i.target.files;if(e?.length){let o=Array.from(e);this.fileSelected.emit(o)}}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275dir=b({type:r,selectors:[["","fdFileSelect",""]],hostVars:1,hostBindings:function(t,e){t&1&&l("change",function(n){return e.onChange(n)}),t&2&&f("multiple",e.multipleBinding)},inputs:{multiple:"multiple"},outputs:{fileSelected:"fileSelected"},standalone:!0})}}return r})();var X=["fileInput"],Y=["textInput"],Z=[[["","fd-form-control",""]]],$=["[fd-form-control]"],ee=0,ie=(()=>{class r{constructor(i,t,e){this._fileUploadService=i,this._changeDetRef=t,this._contentDensityObserver=e,this.disabled=!1,this.required=!1,this.multiple=!0,this.dragndrop=!0,this.maxFileSize="",this.minFileSize="",this.id="fd-file-uploader-input"+ee++,this.state="default",this.inputHidden=!1,this.selectedFilesChanged=new a,this.selectedInvalidFiles=new a,this.onDragEnter=new a,this.onDragLeave=new a,this.validFiles=[],this.invalidFiles=[],this._subscriptions=new D,this.onChange=()=>{},this.onTouched=()=>{}}ngOnDestroy(){this._subscriptions.unsubscribe()}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.disabled=i,this._changeDetRef.detectChanges()}writeValue(i){if(this.validFiles.length>0&&i&&i.length===0)this.clear();else{if(this._isEmpty())return;this._propagateFiles(!1)}}handleDrop(i){this.validFiles=i.validFiles??[],this.invalidFiles=i.invalidFiles??[],this._propagateFiles()}selectHandler(i){this.validateFiles(i),this._propagateFiles()}validateFiles(i){if(this.fileLimit&&i.length>this.fileLimit)throw new Error("FileLimitError - Selected files count is more than specified limit ");let t=this._fileUploadService.validateFiles(i,this.minFileSize,this.maxFileSize,this.accept);this.validFiles=t.validFiles??[],this.invalidFiles=t.invalidFiles??[]}setInputValue(i,t=!1){let e="";i.forEach(o=>e=e.concat(" "+o.name)),this.inputRefText&&(this.inputRefText.nativeElement.value=e,this.inputRefText.nativeElement.title=e,e?this.inputRefText.nativeElement.placeholder=e:(this.inputRefText.nativeElement.placeholder=this.placeholder,this.inputRefText.nativeElement.title=this.placeholder),t||this.inputRefText.nativeElement.focus())}keyDownHandle(i){if(C.isKeyCode(i,[13,32]))this.open();else if(C.isKeyCode(i,[9]))return;i.preventDefault()}open(){this.inputRef.nativeElement.click()}clear(){this.validFiles=[],this.invalidFiles=[],this.inputRef.nativeElement.value="",this._propagateFiles()}_isEmpty(){return this.validFiles.length===0&&this.invalidFiles.length===0}_propagateFiles(i=!0){this.setInputValue(this.validFiles),i&&this.onChange(this.validFiles),this.selectedFilesChanged.emit(this.validFiles),this.selectedInvalidFiles.emit(this.invalidFiles)}static{this.\u0275fac=function(t){return new(t||r)(u(F),u(A),u(M))}}static{this.\u0275cmp=O({type:r,selectors:[["fd-file-uploader"]],viewQuery:function(t,e){if(t&1&&(k(X,5),k(Y,5)),t&2){let o;y(o=S())&&(e.inputRef=o.first),y(o=S())&&(e.inputRefText=o.first)}},hostAttrs:[1,"fd-file-uploader"],hostBindings:function(t,e){t&1&&l("blur",function(){return e.onTouched()})},inputs:{disabled:"disabled",required:"required",multiple:"multiple",accept:"accept",dragndrop:"dragndrop",maxFileSize:"maxFileSize",minFileSize:"minFileSize",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",placeholder:"placeholder",buttonLabel:"buttonLabel",buttonAriaLabel:"buttonAriaLabel",state:"state",fileLimit:"fileLimit",inputHidden:"inputHidden",width:"width"},outputs:{selectedFilesChanged:"selectedFilesChanged",selectedInvalidFiles:"selectedInvalidFiles",onDragEnter:"onDragEnter",onDragLeave:"onDragLeave"},standalone:!0,features:[V([{provide:K,useExisting:E(()=>r),multi:!0},G(r),q()]),N],ngContentSelectors:$,decls:7,vars:24,consts:[["textInput",""],["fileInput",""],["fdFileDragnDrop","",1,"fd-file-uploader__container",3,"fileChanged","dragEntered","dragLeave","accept","maxFileSize","minFileSize","dragndrop","disabled","multiple"],["aria-live","polite","autocomplete","off","type","text","tabindex","0",1,"fd-input","fd-file-uploader__input",3,"click","keydown","id","title","placeholder","value","hidden","disabled"],["fd-button","",1,"file-uploader__button",3,"click","label","disabled"],["fdFileSelect","","type","file",1,"fd-file-uploader__hidden",3,"fileSelected","multiple","disabled"]],template:function(t,e){if(t&1){let o=P();R(Z),_(0,"div",2),l("fileChanged",function(d){return s(o),p(e.handleDrop(d))})("dragEntered",function(){return s(o),p(e.onDragEnter.emit())})("dragLeave",function(){return s(o),p(e.onDragLeave.emit())}),_(1,"input",3,0),l("click",function(){return s(o),p(e.open())})("keydown",function(d){return s(o),p(e.keyDownHandle(d))}),v(),_(3,"button",4),l("click",function(){return s(o),p(e.open())}),v(),j(4),v(),_(5,"input",5,1),l("fileSelected",function(d){return s(o),p(e.selectHandler(d))}),v()}t&2&&(h("accept",e.accept)("maxFileSize",e.maxFileSize)("minFileSize",e.minFileSize)("dragndrop",e.dragndrop)("disabled",e.disabled)("multiple",e.multiple),g(),U(e.state?" is-"+e.state:""),L("width",e.width),h("id",e.id)("title",e.ariaLabel)("placeholder",e.placeholder)("hidden",e.inputHidden)("disabled",e.disabled),f("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required),g(2),h("label",e.buttonLabel)("disabled",e.disabled),f("aria-label",e.buttonAriaLabel),g(2),h("multiple",e.multiple)("disabled",e.disabled),f("accept",e.accept))},dependencies:[z,Q,B],styles:[`.fd-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--sapField_BackgroundStyle, var(--sapField_BackgroundStyle));background-color:var(--sapField_Background, var(--sapField_Background));border:0;border:var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_BorderColor);border-radius:var(--sapField_BorderCornerRadius);-webkit-box-shadow:var(--sapField_Shadow);box-shadow:var(--sapField_Shadow);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapField_TextColor);cursor:text;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;height:var(--fdInput_Height, var(--sapElement_Height));line-height:normal;margin-block:0;margin-block:var(--fdInput_Field_Margin_Block, .25rem);margin-inline:0;min-height:var(--fdInput_Height, var(--sapElement_Height));min-width:2.75rem;outline:none;overflow:hidden;padding-block:0;padding-inline:0;padding-inline:var(--fdInput_Field_Padding_Inline, .625rem);text-overflow:ellipsis;text-shadow:var(--fdInput_Text_Shadow);white-space:nowrap;width:100%;z-index:1}.fd-input:after,.fd-input:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-input::-webkit-input-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-input::-moz-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-input:-ms-input-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-input::-ms-input-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-input::placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--fdPlaceholder_Font_Style)}.fd-input[dir=rtl]::-webkit-input-placeholder,[dir=rtl] .fd-input::-webkit-input-placeholder{text-indent:.125rem}.fd-input[dir=rtl]::-moz-placeholder,[dir=rtl] .fd-input::-moz-placeholder{text-indent:.125rem}.fd-input[dir=rtl]:-ms-input-placeholder,[dir=rtl] .fd-input:-ms-input-placeholder{text-indent:.125rem}.fd-input[dir=rtl]::-ms-input-placeholder,[dir=rtl] .fd-input::-ms-input-placeholder{text-indent:.125rem}.fd-input[dir=rtl]::placeholder,[dir=rtl] .fd-input::placeholder{text-indent:.125rem}.fd-input::-moz-selection{background-color:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}.fd-input::selection{background-color:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}.fd-input::-ms-clear{display:none}.fd-input.is-hover,.fd-input:hover{background:var(--sapField_Hover_BackgroundStyle, var(--sapField_Hover_BackgroundStyle));background-color:var(--sapField_Hover_Background, var(--sapField_Hover_Background));border-color:var(--sapField_Hover_BorderColor);-webkit-box-shadow:var(--fdInput_Box_Shadow_Hover);box-shadow:var(--fdInput_Box_Shadow_Hover)}.fd-input.is-focus,.fd-input:focus{background:var(--sapField_Focus_Background, var(--sapField_Focus_Background));-webkit-box-shadow:none;box-shadow:none;outline:var(--fdInput_Outline_Color) var(--sapContent_FocusStyle) var(--sapContent_FocusWidth);outline-offset:var(--fdInput_Outline_Offset);z-index:5}.fd-input[type=search]::-webkit-search-cancel-button,.fd-input[type=search]::-webkit-search-decoration,.fd-input[type=search]::-webkit-search-results-button,.fd-input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;appearance:none}.fd-input[aria-expanded=false]{z-index:0}.fd-input.is-expanded,.fd-input[aria-expanded=true]{z-index:4}.fd-input[class*=-compact],.fd-input[class*=-condensed],[class*=-compact] .fd-input:not([class*=-cozy]),[class*=-condensed] .fd-input:not([class*=-cozy]){-webkit-box-sizing:border-box;box-sizing:border-box;height:var(--fdInput_Compact_Height, var(--sapElement_Compact_Height));margin-block:var(--fdInput_Field_Compact_Margin_Block, .1875rem);margin-inline:0;min-height:var(--fdInput_Compact_Height, var(--sapElement_Compact_Height));min-width:var(--fdInput_Field_Compact_Min_Width, 2rem);padding-block:0;padding-inline:var(--fdInput_Field_Compact_Padding, .5rem)}.fd-input--no-number-spinner{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.fd-input--no-number-spinner::-webkit-inner-spin-button,.fd-input--no-number-spinner::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin-block:0;margin-inline:0}.fd-input.right-align{text-align:right}.fd-input.is-success{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border:var(--sapField_SuccessColor) var(--sapField_SuccessBorderWidth) var(--sapField_SuccessBorderStyle);-webkit-box-shadow:var(--sapField_SuccessShadow);box-shadow:var(--sapField_SuccessShadow)}.fd-input.is-success.is-hover,.fd-input.is-success:hover{background-color:var(--fdInput_Success_Background_Color_Hover);border-color:var(--sapField_SuccessColor);-webkit-box-shadow:var(--fdInput_Success_Box_Shadow_Hover);box-shadow:var(--fdInput_Success_Box_Shadow_Hover)}.fd-input.is-success.is-focus,.fd-input.is-success:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Success_Outline_Color);z-index:5}.fd-input.is-success.is-focus.is-hover,.fd-input.is-success.is-focus:hover,.fd-input.is-success:focus.is-hover,.fd-input.is-success:focus:hover{-webkit-box-shadow:none;box-shadow:none}.fd-input.is-success.is-expanded,.fd-input.is-success[aria-expanded=true]{background:var(--sapField_Focus_Background);-webkit-box-shadow:none;box-shadow:none;outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--fdInput_Success_Outline_Color);outline-offset:var(--fdInput_Outline_Offset)}.fd-input.is-error{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border:var(--sapField_InvalidColor) var(--sapField_InvalidBorderWidth) var(--sapField_InvalidBorderStyle);-webkit-box-shadow:var(--sapField_InvalidShadow);box-shadow:var(--sapField_InvalidShadow)}.fd-input.is-error.is-hover,.fd-input.is-error:hover{background-color:var(--fdInput_Error_Background_Color_Hover);border-color:var(--sapField_InvalidColor);-webkit-box-shadow:var(--fdInput_Error_Box_Shadow_Hover);box-shadow:var(--fdInput_Error_Box_Shadow_Hover)}.fd-input.is-error.is-focus,.fd-input.is-error:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Error_Outline_Color);z-index:5}.fd-input.is-error.is-focus.is-hover,.fd-input.is-error.is-focus:hover,.fd-input.is-error:focus.is-hover,.fd-input.is-error:focus:hover{-webkit-box-shadow:none;box-shadow:none}.fd-input.is-error.is-expanded,.fd-input.is-error[aria-expanded=true]{background:var(--sapField_Focus_Background);-webkit-box-shadow:none;box-shadow:none;outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--fdInput_Error_Outline_Color);outline-offset:var(--fdInput_Outline_Offset)}.fd-input.is-warning{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border:var(--sapField_WarningColor) var(--sapField_WarningBorderWidth) var(--sapField_WarningBorderStyle);-webkit-box-shadow:var(--sapField_WarningShadow);box-shadow:var(--sapField_WarningShadow)}.fd-input.is-warning.is-hover,.fd-input.is-warning:hover{background-color:var(--fdInput_Warning_Background_Color_Hover);border-color:var(--sapField_WarningColor);-webkit-box-shadow:var(--fdInput_Warning_Box_Shadow_Hover);box-shadow:var(--fdInput_Warning_Box_Shadow_Hover)}.fd-input.is-warning.is-focus,.fd-input.is-warning:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Warning_Outline_Color);z-index:5}.fd-input.is-warning.is-focus.is-hover,.fd-input.is-warning.is-focus:hover,.fd-input.is-warning:focus.is-hover,.fd-input.is-warning:focus:hover{-webkit-box-shadow:none;box-shadow:none}.fd-input.is-warning.is-expanded,.fd-input.is-warning[aria-expanded=true]{background:var(--sapField_Focus_Background);-webkit-box-shadow:none;box-shadow:none;outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--fdInput_Warning_Outline_Color);outline-offset:var(--fdInput_Outline_Offset)}.fd-input.is-alert{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border:var(--sapField_WarningColor) var(--sapField_WarningBorderWidth) var(--sapField_WarningBorderStyle)}.fd-input.is-alert.is-hover,.fd-input.is-alert:hover{background-color:var(--fdInput_Warning_Background_Color_Hover);border-color:var(--sapField_WarningColor);-webkit-box-shadow:var(--fdInput_Warning_Box_Shadow_Hover);box-shadow:var(--fdInput_Warning_Box_Shadow_Hover)}.fd-input.is-alert.is-focus,.fd-input.is-alert:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Warning_Outline_Color);z-index:5}.fd-input.is-alert.is-focus.is-hover,.fd-input.is-alert.is-focus:hover,.fd-input.is-alert:focus.is-hover,.fd-input.is-alert:focus:hover{-webkit-box-shadow:none;box-shadow:none}.fd-input.is-alert.is-expanded,.fd-input.is-alert[aria-expanded=true]{background:var(--sapField_Focus_Background);-webkit-box-shadow:none;box-shadow:none;outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--fdInput_Warning_Outline_Color);outline-offset:var(--fdInput_Outline_Offset)}.fd-input.is-information{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border:var(--sapField_InformationColor) var(--sapField_InformationBorderWidth) var(--sapField_InformationBorderStyle);-webkit-box-shadow:var(--sapField_InformationShadow);box-shadow:var(--sapField_InformationShadow)}.fd-input.is-information.is-hover,.fd-input.is-information:hover{background-color:var(--fdInput_Information_Background_Color_Hover);border-color:var(--sapField_InformationColor);-webkit-box-shadow:var(--fdInput_Information_Box_Shadow_Hover);box-shadow:var(--fdInput_Information_Box_Shadow_Hover)}.fd-input.is-information.is-focus,.fd-input.is-information:focus{background:var(--sapField_Focus_Background);outline-color:var(--fdInput_Information_Outline_Color);z-index:5}.fd-input.is-information.is-focus.is-hover,.fd-input.is-information.is-focus:hover,.fd-input.is-information:focus.is-hover,.fd-input.is-information:focus:hover{-webkit-box-shadow:none;box-shadow:none}.fd-input.is-information.is-expanded,.fd-input.is-information[aria-expanded=true]{background:var(--sapField_Focus_Background);-webkit-box-shadow:none;box-shadow:none;outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--fdInput_Information_Outline_Color);outline-offset:var(--fdInput_Outline_Offset)}.fd-input.is-alert,.fd-input.is-error,.fd-input.is-warning{font-style:var(--fdInput_State_Text_Style);font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert::-webkit-input-placeholder,.fd-input.is-error::-webkit-input-placeholder,.fd-input.is-warning::-webkit-input-placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert::-moz-placeholder,.fd-input.is-error::-moz-placeholder,.fd-input.is-warning::-moz-placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert:-ms-input-placeholder,.fd-input.is-error:-ms-input-placeholder,.fd-input.is-warning:-ms-input-placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert::-ms-input-placeholder,.fd-input.is-error::-ms-input-placeholder,.fd-input.is-warning::-ms-input-placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert::placeholder,.fd-input.is-error::placeholder,.fd-input.is-warning::placeholder{font-weight:var(--fdInput_State_Font_Weight)}.fd-input.is-alert.is-focus,.fd-input.is-alert:focus,.fd-input.is-error.is-focus,.fd-input.is-error:focus,.fd-input.is-information.is-focus,.fd-input.is-information:focus,.fd-input.is-warning.is-focus,.fd-input.is-warning:focus{outline-offset:var(--fdInput_Outline_Offset_States);z-index:5}.fd-input.is-error::-webkit-input-placeholder{color:var(--sapField_TextColor)}.fd-input.is-error::-moz-placeholder{color:var(--sapField_TextColor)}.fd-input.is-error:-ms-input-placeholder{color:var(--sapField_TextColor)}.fd-input.is-error::-ms-input-placeholder{color:var(--sapField_TextColor)}.fd-input.is-error::placeholder{color:var(--sapField_TextColor)}.fd-input.is-disabled,.fd-input:disabled,.fd-input[aria-disabled=true]{opacity:var(--sapContent_DisabledOpacity);pointer-events:none}.fd-input.is-disabled::-webkit-input-placeholder,.fd-input:disabled::-webkit-input-placeholder,.fd-input[aria-disabled=true]::-webkit-input-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-disabled::-moz-placeholder,.fd-input:disabled::-moz-placeholder,.fd-input[aria-disabled=true]::-moz-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-disabled:-ms-input-placeholder,.fd-input:disabled:-ms-input-placeholder,.fd-input[aria-disabled=true]:-ms-input-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-disabled::-ms-input-placeholder,.fd-input:disabled::-ms-input-placeholder,.fd-input[aria-disabled=true]::-ms-input-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-disabled::placeholder,.fd-input:disabled::placeholder,.fd-input[aria-disabled=true]::placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-readonly,.fd-input[aria-readonly=true],.fd-input[readonly]{--fdInput_Outline_Offset:-.25rem;background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor);-webkit-box-shadow:none;box-shadow:none}.fd-input.is-readonly::-webkit-input-placeholder,.fd-input[aria-readonly=true]::-webkit-input-placeholder,.fd-input[readonly]::-webkit-input-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-readonly::-moz-placeholder,.fd-input[aria-readonly=true]::-moz-placeholder,.fd-input[readonly]::-moz-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-readonly:-ms-input-placeholder,.fd-input[aria-readonly=true]:-ms-input-placeholder,.fd-input[readonly]:-ms-input-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-readonly::-ms-input-placeholder,.fd-input[aria-readonly=true]::-ms-input-placeholder,.fd-input[readonly]::-ms-input-placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-readonly::placeholder,.fd-input[aria-readonly=true]::placeholder,.fd-input[readonly]::placeholder{color:var(--fdInput_Non_Interactive_State_Placeholder_Color);opacity:0}.fd-input.is-readonly.is-focus,.fd-input.is-readonly.is-hover,.fd-input.is-readonly:focus,.fd-input.is-readonly:hover,.fd-input[aria-readonly=true].is-focus,.fd-input[aria-readonly=true].is-hover,.fd-input[aria-readonly=true]:focus,.fd-input[aria-readonly=true]:hover,.fd-input[readonly].is-focus,.fd-input[readonly].is-hover,.fd-input[readonly]:focus,.fd-input[readonly]:hover{--fdInput_Outline_Offset:-.25rem;background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor);-webkit-box-shadow:none;box-shadow:none}.fd-input.is-readonly.is-focus,.fd-input.is-readonly:focus,.fd-input[aria-readonly=true].is-focus,.fd-input[aria-readonly=true]:focus,.fd-input[readonly].is-focus,.fd-input[readonly]:focus{z-index:5}.fd-file-uploader{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0}.fd-file-uploader:after,.fd-file-uploader:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-file-uploader__container{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:.25rem}.fd-file-uploader__container:after,.fd-file-uploader__container:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-file-uploader .fd-file-uploader__input{-webkit-box-flex:1;background-color:var(--sapField_Background);color:transparent;cursor:pointer;-ms-flex:1;flex:1;text-shadow:0 0 0 var(--sapTextColor);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fd-file-uploader .fd-file-uploader__input::-webkit-input-placeholder{color:var(--sapTextColor)}.fd-file-uploader .fd-file-uploader__input::-moz-placeholder{color:var(--sapTextColor)}.fd-file-uploader .fd-file-uploader__input:-ms-input-placeholder{color:var(--sapTextColor)}.fd-file-uploader .fd-file-uploader__input::-ms-input-placeholder{color:var(--sapTextColor)}.fd-file-uploader .fd-file-uploader__input::placeholder{color:var(--sapTextColor)}.fd-file-uploader__hidden{display:none}.fd-file-uploader__uploaded-files{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0}.fd-file-uploader__uploaded-files:after,.fd-file-uploader__uploaded-files:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-file-uploader__label{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);color:var(--sapContent_LabelColor);display:block;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;line-height:1.1875rem;margin-block:0;margin-inline:0;margin-top:1.5rem;padding-block:0;padding-inline:0}.fd-file-uploader__label:after,.fd-file-uploader__label:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-file-uploader__list{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;list-style-type:none;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0}.fd-file-uploader__list:after,.fd-file-uploader__list:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-file-uploader__list-item{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;gap:calc(1rem + var(--fdFileUploaderButtonsSpacing));justify-content:space-between;margin-top:.5rem}.fd-file-uploader__list-item:after,.fd-file-uploader__list-item:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-file-uploader__actions{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--sapTextColor);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:normal;margin-block:0;margin-inline:0;padding-block:0;padding-inline:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:var(--fdFileUploaderButtonsSpacing)}.fd-file-uploader__actions:after,.fd-file-uploader__actions:before{-webkit-box-sizing:inherit;box-sizing:inherit;font-size:inherit}.fd-file-uploader{display:flex}
/*!
 * Fundamental Library Styles v0.38.0
 * Copyright (c) 2024 SAP SE or an SAP affiliate company.
 * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)
 */
`],encapsulation:2,changeDetection:0})}}return r})();var Qe=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=W({type:r})}static{this.\u0275inj=T({})}}return r})();export{ie as a,Qe as b};
