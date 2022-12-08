"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55],{30055:(re,w,o)=>{o.r(w),o.d(w,{SliderDocsModule:()=>ie});var x=o(77152),p=o(52382),m=o(370),T=o(47876),e=o(5e3),A=o(7754),k=o(5592),L=o(49505),d=o(91159),h=o(63191),M=o(77579),Z=o(54968),P=o(78372),S=o(82722),b=(()=>{return(a=b||(b={}))[a.SINGLE_SLIDER=0]="SINGLE_SLIDER",a[a.RANGE_SLIDER1=1]="RANGE_SLIDER1",a[a.RANGE_SLIDER2=2]="RANGE_SLIDER2",b;var a})(),c=(()=>{return(a=c||(c={}))[a.First=0]="First",a[a.Second=1]="Second",c;var a})(),u=o(6738),D=o(15664),y=o(69808);let R=(()=>{class a{constructor(){this.ariaLabel=null,this.ariaLabelledBy=null,this.ariaValueNow=null,this.ariaValueText=null,this.ariaValueMax=null,this.ariaValueMin=null}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fn-slider-handle"]],hostAttrs:["role","slider","tabindex","0",1,"fn-slider__handle"],hostVars:6,hostBindings:function(n,i){2&n&&e.uIk("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-valuenow",i.ariaValueNow)("aria-valuetext",i.ariaValueText)("aria-valuemax",i.ariaValueMax)("aria-valuemin",i.ariaValueMin)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",ariaValueNow:"ariaValueNow",ariaValueText:"ariaValueText",ariaValueMax:"ariaValueMax",ariaValueMin:"ariaValueMin"},decls:2,vars:0,consts:[[1,"sap-icon","sap-icon--megamenu"]],template:function(n,i){1&n&&e._UZ(0,"span",0)(1,"span",0)},styles:[".fn-slider__handle .sap-icon{pointer-events:none}\n"],encapsulation:2,changeDetection:0}),a})();var H=o(27946);const B=["rangeHandle1"],E=["rangeHandle2"],v=function(a,t){return{min:a,max:t}},f=function(a){return{value:a}};function z(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"div",4),e._UZ(1,"div",5),e.TgZ(2,"fn-slider-handle",6),e.NdJ("mousedown",function(r){e.CHM(n);const l=e.oxw();return e.KtG(l.onHandleClick(r))})("keydown",function(r){e.CHM(n);const l=e.oxw();return e.KtG(l.onKeyDown(r))}),e.ALo(3,"fdTranslate"),e.ALo(4,"fdTranslate"),e.ALo(5,"fdTranslate"),e.ALo(6,"fdTranslate"),e.ALo(7,"fdTranslate"),e.qZA()()}if(2&a){const n=e.oxw();e.Udp("width",n._progress,"%"),e.xp6(2),e.Q6J("ariaLabel",e.xi3(3,8,n.ariaLabel||"fnSlider.minMaxDetails",e.WLB(23,v,n.minValue,n.maxValue)))("ariaValueMax",e.xi3(4,11,"fnSlider.valuemaxDetails",e.VKq(26,f,n.maxValue)))("ariaValueMin",e.xi3(5,14,"fnSlider.valueminDetails",e.VKq(28,f,n.minValue)))("ariaLabelledBy",n.ariaLabelledBy)("ariaValueNow",n._useSliderValuePrefix?e.xi3(6,17,"fnSlider.valueNowDetails",e.VKq(30,f,n.getValuenow(n._position,n._sliderValueTargets.SINGLE_SLIDER))):n.getValuenow(n._position,n._sliderValueTargets.SINGLE_SLIDER))("ariaValueText",n._useSliderValuePrefix?e.xi3(7,20,"fnSlider.valueNowDetails",e.VKq(32,f,n.getValuenow(n._position,n._sliderValueTargets.SINGLE_SLIDER))):n.getValuenow(n._position,n._sliderValueTargets.SINGLE_SLIDER))}}function N(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"div",4)(1,"fn-slider-handle",6,7),e.NdJ("mousedown",function(r){e.CHM(n);const l=e.oxw();return e.KtG(l.onHandleClick(r))})("keydown",function(r){e.CHM(n);const l=e.oxw();return e.KtG(l.onKeyDown(r))}),e.ALo(3,"fdTranslate"),e.ALo(4,"fdTranslate"),e.ALo(5,"fdTranslate"),e.ALo(6,"fdTranslate"),e.ALo(7,"fdTranslate"),e.qZA(),e._UZ(8,"div",5),e.TgZ(9,"fn-slider-handle",6,8),e.NdJ("mousedown",function(r){e.CHM(n);const l=e.oxw();return e.KtG(l.onHandleClick(r))})("keydown",function(r){e.CHM(n);const l=e.oxw();return e.KtG(l.onKeyDown(r))}),e.ALo(11,"fdTranslate"),e.ALo(12,"fdTranslate"),e.ALo(13,"fdTranslate"),e.ALo(14,"fdTranslate"),e.ALo(15,"fdTranslate"),e.qZA()()}if(2&a){const n=e.oxw();e.Udp("width",n._rangeProgress,"%")("left",n._isRtl?null:n._handle1Position,"%")("right",n._isRtl?n._handle1Position:null,"%"),e.xp6(1),e.Q6J("ariaLabel",e.xi3(3,18,n.ariaLabel||"fnSlider.minMaxDetails",e.WLB(48,v,n.minValue,n.maxValue)))("ariaValueMax",e.xi3(4,21,"fnSlider.valuemaxDetails",e.VKq(51,f,n.maxValue)))("ariaValueMin",e.xi3(5,24,"fnSlider.valueminDetails",e.VKq(53,f,n.minValue)))("ariaLabelledBy",n.ariaLabelledBy)("ariaValueNow",n._useSliderValuePrefix?e.xi3(6,27,"fnSlider.valueNowDetails",e.VKq(55,f,n.getValuenow(n._handle1Value,n._sliderValueTargets.RANGE_SLIDER1))):n.getValuenow(n._position,n._sliderValueTargets.SINGLE_SLIDER))("ariaValueText",n._useSliderValuePrefix?e.xi3(7,30,"fnSlider.valueNowDetails",e.VKq(57,f,n.getValuenow(n._handle1Value,n._sliderValueTargets.RANGE_SLIDER1))):n.getValuenow(n._position,n._sliderValueTargets.SINGLE_SLIDER)),e.xp6(8),e.Q6J("ariaLabel",e.xi3(11,33,n.ariaLabel||"fnSlider.minMaxDetails",e.WLB(59,v,n.minValue,n.maxValue)))("ariaValueMax",e.xi3(12,36,"fnSlider.valuemaxDetails",e.VKq(62,f,n.maxValue)))("ariaValueMin",e.xi3(13,39,"fnSlider.valueminDetails",e.VKq(64,f,n.minValue)))("ariaLabelledBy",n.ariaLabelledBy)("ariaValueNow",n._useSliderValuePrefix?e.xi3(14,42,"fnSlider.valueNowDetails",e.VKq(66,f,n.getValuenow(n._handle2Value,n._sliderValueTargets.RANGE_SLIDER2))):n.getValuenow(n._handle2Value,n._sliderValueTargets.RANGE_SLIDER2))("ariaValueText",n._useSliderValuePrefix?e.xi3(15,45,"fnSlider.valueNowDetails",e.VKq(68,f,n.getValuenow(n._handle2Value,n._sliderValueTargets.RANGE_SLIDER2))):n.getValuenow(n._handle2Value,n._sliderValueTargets.RANGE_SLIDER2))}}const U={provide:p.JU,useExisting:(0,e.Gpc)(()=>C),multi:!0};let I=0,C=(()=>{class a{constructor(n,i,r,l,s){this._elementRef=n,this._cdr=i,this._renderer=r,this._liveAnnouncer=l,this._rtlService=s,this.id="fn-slider-id-"+I++,this.range=!1,this.disabled=!1,this.customValues=[],this.ariaValuePrefix="value is ",this.singleSliderCurrentValuePrefix="Current value is ",this.rangeSliderHandle1CurrentValuePrefix="handle 1 value is ",this.rangeSliderHandle2CurrentValuePrefix="handle 2 value is ",this._position=0,this._value=0,this._progress=0,this._tickMarks=[],this._sliderValueTargets=b,this._isRtl=!1,this._useSliderValuePrefix=!0,this._handle1Position=0,this._handle2Position=0,this._handle1Value=0,this._handle2Value=0,this._rangeProgress=0,this._min=0,this._max=100,this._step=1,this._jump=10,this._tickmarksBetweenLabels=1,this._valuesBySteps=[],this._onDestroy$=new M.x,this.onChange=()=>{},this.onTouched=()=>{}}get min(){return this._min}set min(n){const i=(0,h.su)(n,this._min);(this.max-i)/this.step%1==0&&(this._min=n)}get max(){return this._max}set max(n){((0,h.su)(n,this._max)-this.min)/this.step%1==0&&(this._max=n)}get step(){return this._step}set step(n){const i=(0,h.su)(n,this._step);(this.max-this.min)/i%1==0&&(this._step=n)}get jump(){return this._jump}set jump(n){this._jump=(0,h.su)(n,this._jump)}get tickmarksBetweenLabels(){return this._tickmarksBetweenLabels}set tickmarksBetweenLabels(n){this._tickmarksBetweenLabels=(0,h.su)(n,this._tickmarksBetweenLabels)}get value(){return this._value}set value(n){!this._isValidControlValue(n,this.value)||(this.range?this._initRangeMode(null!=n?n:[0]):this._initSingeMode(null!=n?n:0),this._initSingeMode(n),this._value=n,this.onChange(n),this.onTouched())}get _popoverValueRef(){return[this._position,this._handle1Value,this._handle2Value]}onSliderClick(n){this.onTrackClick(n)}ngOnInit(){this._subscribeToRtl(),this._attachResizeListener(),this._onResize(),0===this._valuesBySteps.length&&this._constructValuesBySteps()}ngOnChanges(){this._constructValuesBySteps(),this._recalcHandlePositions()}ngOnDestroy(){this._onDestroy$.next(),this._onDestroy$.complete()}isRtl(){var n;return null===(n=this._rtlService)||void 0===n?void 0:n.rtl.getValue()}getValuenow(n,i){return this.customValues.length>0?this.customValues[n].label:this._popoverValueRef[i]}get minValue(){return this.customValues.length>0?this.customValues[this.min].label:this.min}get maxValue(){return this.customValues.length>0?this.customValues[this.max].label:this.max}elementRef(){return this._elementRef}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}writeValue(n){this.value=n}onTrackClick(n){this.disabled||this.range||this.writeValue(this._calculateValueFromPointerPosition(n))}onHandleClick(n){n.stopPropagation();const i=this._renderer.listen("document","mousemove",l=>{if(!this.range)return void this.writeValue(this._calculateValueFromPointerPosition(l));let s=c.First;n.target===this.rangeHandle2.nativeElement&&(s=c.Second);const g=this._calculateValueFromPointerPosition(l,!1);this._setRangeHandleValueAndPosition(s,g),this.writeValue(this._constructRangeModelValue())}),r=this._renderer.listen("document","mouseup",()=>{i(),r()})}onKeyDown(n){if(!u.yS.isKeyCode(n,[d.oh,d.SV,d.LH,d.JH,d.K5,d.L_]))return;n.preventDefault();const r=n.shiftKey?this.jump:this.step;let l=null,s=this._position,g=c.First;this.range&&n.target===this.rangeHandle2.nativeElement&&(s=this._handle2Value,g=c.Second),this.isRtl()?((u.yS.isKeyCode(n,d.oh)||u.yS.isKeyCode(n,d.LH))&&(l=s+r),(u.yS.isKeyCode(n,d.SV)||u.yS.isKeyCode(n,d.JH))&&(l=s-r)):((u.yS.isKeyCode(n,d.oh)||u.yS.isKeyCode(n,d.JH))&&(l=s-r),(u.yS.isKeyCode(n,d.SV)||u.yS.isKeyCode(n,d.LH))&&(l=s+r)),null!==l&&(l=this._processNewValue(l,!this.range),this.range?(this._setRangeHandleValueAndPosition(g,l),this.writeValue(this._constructRangeModelValue())):this.writeValue(l))}onBlur(){this._useSliderValuePrefix=!0,this._cdr.markForCheck()}_calculateValueFromPointerPosition(n,i=!0){const{left:r,width:l}=this._elementRef.nativeElement.getBoundingClientRect();let V=(n.clientX-r)/l;return this._isRtl&&(V=1-V),this._processNewValue(this.min+V*(this.max-this.min),i)}_processNewValue(n,i=!0){n>this.max&&(n=this.max),n<this.min&&(n=this.min),this._useSliderValuePrefix=!1,this._cdr.markForCheck();let l=this._valuesBySteps.map(s=>({diff:Math.abs(s-n),value:s})).sort((s,g)=>s.diff-g.diff)[0].value;return i&&this.customValues.length>0&&(l=this.customValues[l]),l}_attachResizeListener(){(0,Z.R)(window,"resize").pipe((0,P.b)(500),(0,S.R)(this._onDestroy$)).subscribe(()=>this._onResize())}_onResize(){this._cdr.markForCheck()}_constructValuesBySteps(){try{this._valuesBySteps=Array.from({length:(this.max-this.min)/this.step+1},(n,i)=>Number((this.min+i*this.step).toFixed(2)))}catch(n){}}_calcProgress(n,i=!1){let r=(n-this.min)/(this.max-this.min)*100;return!i&&this._isRtl&&(r=100-r),r>100?100:r<0?0:r}_recalcHandlePositions(){this.range&&(this._handle1Position=this._calcProgress(this._handle1Value),this._handle2Position=this._calcProgress(this._handle2Value),this._rangeProgress=Math.abs(this._handle2Position-this._handle1Position)),this._progress=this._calcProgress(this._position,!0)}_subscribeToRtl(){!this._rtlService||this._rtlService.rtl.pipe((0,S.R)(this._onDestroy$)).subscribe(n=>{this._isRtl=n,this._cdr.markForCheck()})}_isValidControlValue(n,i){return!(!n&&0!==n)&&((0,h.t6)(n)&&(n=(0,h.su)(n)),i!==n)}_initSingeMode(n){this.customValues.length>0?this._initSingeModeWithCustomValue(n):this._initSingeModeDefault((0,h.su)(n,this.min))}_initSingeModeDefault(n){this._position=n,this._progress=this._calcProgress(n,!0)}_initSingeModeWithCustomValue(n){const i=this._getCustomValuesPosition(n)||this.min;this._initSingeModeDefault(i)}_getCustomValuesPosition(n){return this.min=0,this.max=this.customValues.length-1,this.step=1,this._getCustomValuesPositions(n)}_getCustomValuesPositions(n){if(!n||0===n.length)return 0;if(Array.isArray(n)){let[i,r]=n;this._instanceOfCustomValue(i)||(i=this.customValues[0]),this._instanceOfCustomValue(r)||(r=this.customValues[this.customValues.length-1]);const l=this.customValues.findIndex(_=>_.value===i.value),s=this.customValues.findIndex(_=>_.value===r.value);return[l>=0?l:0,s>=0?s:this.customValues.length-1]}{let i=n;return this._instanceOfCustomValue(i)||(i=this.customValues[0]),this.customValues.findIndex(r=>r.value===i.value)||0}}_instanceOfCustomValue(n){return!!n&&"value"in n&&"label"in n}_setRangeHandleValueAndPosition(n,i){const r=this._calcProgress(i,!0);n===c.First&&(this._handle1Value=i,this._handle1Position=r),n===c.Second&&(this._handle2Value=i,this._handle2Position=r),this._rangeProgress=Math.abs(this._handle2Position-this._handle1Position)}_constructRangeModelValue(){let n,i,r=[Math.min(this._handle1Value,this._handle2Value),Math.max(this._handle1Value,this._handle2Value)];return n=r[0],i=r[1],this.customValues.length>0&&(r=[this.customValues[r[0]]||this.customValues[0],this.customValues[r[1]]||this.customValues[this.customValues.length-1]],n=r[0].label,i=r[1].label),this._liveAnnouncer.announce("range value between "+n+" and "+i,"polite"),r}_initRangeMode(n){const i=(0,h.su)(n[0],this.min),r=(0,h.su)(n[1],this.max);this._initRangeModeDefault([i,r])}_initRangeModeDefault([n,i]){this._position=[n,i],this._setRangeHandleValueAndPosition(c.First,n),this._setRangeHandleValueAndPosition(c.Second,i)}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36(D.Kd),e.Y36(u.qF,8))},a.\u0275cmp=e.Xpm({type:a,selectors:[["fn-slider"]],viewQuery:function(n,i){if(1&n&&(e.Gf(B,5,e.SBq),e.Gf(E,5,e.SBq)),2&n){let r;e.iGM(r=e.CRH())&&(i.rangeHandle1=r.first),e.iGM(r=e.CRH())&&(i.rangeHandle2=r.first)}},hostAttrs:[1,"fn-slider"],hostVars:5,hostBindings:function(n,i){1&n&&e.NdJ("click",function(l){return i.onSliderClick(l)}),2&n&&(e.uIk("id",i.id),e.ekj("fn-slider--range",i.range)("is-disabled",i.disabled))},inputs:{id:"id",range:"range",disabled:"disabled",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",min:"min",max:"max",step:"step",jump:"jump",tickmarksBetweenLabels:"tickmarksBetweenLabels",customValues:"customValues",ariaValuePrefix:"ariaValuePrefix",singleSliderCurrentValuePrefix:"singleSliderCurrentValuePrefix",rangeSliderHandle1CurrentValuePrefix:"rangeSliderHandle1CurrentValuePrefix",rangeSliderHandle2CurrentValuePrefix:"rangeSliderHandle2CurrentValuePrefix",value:"value"},features:[e._Bn([U]),e.TTD],decls:6,vars:1,consts:[[1,"fn-slider__wrapper"],[3,"ngTemplateOutlet"],["singleMode",""],["rangeMode",""],[1,"fn-slider__track"],[1,"fn-slider__track-range"],[3,"ariaLabel","ariaValueMax","ariaValueMin","ariaLabelledBy","ariaValueNow","ariaValueText","mousedown","keydown"],["rangeHandle1",""],["rangeHandle2",""]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.GkF(1,1),e.qZA(),e.YNc(2,z,8,34,"ng-template",null,2,e.W1O),e.YNc(4,N,16,70,"ng-template",null,3,e.W1O)),2&n){const r=e.MAs(3),l=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",i.range?l:r)}},dependencies:[y.tP,R,H.n],styles:['/*!\n * Fundamental Library Styles v0.25.1-rc.16\n * Copyright (c) 2022 SAP SE or an SAP affiliate company.\n * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)\n */:root{--fn-border-radius-2:.125rem;--fn-border-radius-4:.25rem;--fn-border-radius-6:.375rem;--fn-border-radius-8:.5rem;--fn-border-radius-10:.625rem;--fn-border-radius-12:.75rem;--fn-border-radius-14:.875rem;--fn-border-radius-16:1rem;--fn-border-radius-24:1.5rem;--fn-border-radius-100:100%;--fn-control-height:2rem;--fn-color-white:#fff;--fn-color-black:#000;--fn-disabled-opacity:.4;--fn-element-font-size:.875rem;--fn-element-line-height:1.375rem;--fn-input-placeholder-color:var(--fn-color-grey-7);--fn-input-placeholder-font-size:--fn-element-font-size;--fn-input-placeholder-line-height:--fn-element-line-height;--fn-color-grey-1:#f5f6f7;--fn-color-grey-2:#eaecee;--fn-color-grey-3:#d5dadd;--fn-color-grey-4:#a9b4be;--fn-color-grey-5:#8396a8;--fn-color-grey-6:#5b738b;--fn-color-grey-7:#475e75;--fn-color-grey-8:#354a5f;--fn-color-grey-9:#223548;--fn-color-grey-10:#1a2733;--fn-color-grey-11:#12171c;--fn-color-blue-1:#ebf8ff;--fn-color-blue-2:#d1efff;--fn-color-blue-3:#a6e0ff;--fn-color-blue-4:#89d1ff;--fn-color-blue-5:#4db1ff;--fn-color-blue-6:#1b90ff;--fn-color-blue-7:#0070f2;--fn-color-blue-8:#0057d2;--fn-color-blue-9:#0040b0;--fn-color-blue-10:#002a86;--fn-color-blue-11:#00144a;--fn-color-green-1:#f5fae5;--fn-color-green-2:#e5f2bd;--fn-color-green-3:#bae881;--fn-color-green-4:#97dd40;--fn-color-green-5:#5dc122;--fn-color-green-6:#36a41d;--fn-color-green-7:#188918;--fn-color-green-8:#256f3a;--fn-color-green-9:#1e592f;--fn-color-green-10:#164323;--fn-color-green-11:#0e2b16;--fn-color-mango-1:#fff8d6;--fn-color-mango-2:#fff3b8;--fn-color-mango-3:#ffdf72;--fn-color-mango-4:#ffc933;--fn-color-mango-5:#ffb300;--fn-color-mango-6:#f58b00;--fn-color-mango-7:#c35500;--fn-color-mango-8:#a93e00;--fn-color-mango-9:#8d2a00;--fn-color-mango-10:#6d1900;--fn-color-mango-11:#450b00;--fn-color-red-1:#ffeaf4;--fn-color-red-2:#ffd5ea;--fn-color-red-3:#ffb2d2;--fn-color-red-4:#ff8cb2;--fn-color-red-5:#ff5c77;--fn-color-red-6:#ee3939;--fn-color-red-7:#d20a0a;--fn-color-red-8:#aa0808;--fn-color-red-9:#840606;--fn-color-red-10:#5a0404;--fn-color-red-11:#350000;--fn-color-teal-1:#dafdf5;--fn-color-teal-2:#c2fcee;--fn-color-teal-3:#85f1dc;--fn-color-teal-4:#2ce0bf;--fn-color-teal-5:#00ceac;--fn-color-teal-6:#04a6a1;--fn-color-teal-7:#07838f;--fn-color-teal-8:#046c7a;--fn-color-teal-9:#035663;--fn-color-teal-10:#02414c;--fn-color-teal-11:#012931;--fn-color-indigo-1:#f1ecff;--fn-color-indigo-2:#e2d8ff;--fn-color-indigo-3:#d3b6ff;--fn-color-indigo-4:#b894ff;--fn-color-indigo-5:#9b76ff;--fn-color-indigo-6:#7858ff;--fn-color-indigo-7:#5d36ff;--fn-color-indigo-8:#470ced;--fn-color-indigo-9:#2c13ad;--fn-color-indigo-10:#1c0c6e;--fn-color-indigo-11:#0e0637;--fn-color-pink-1:#fff0fa;--fn-color-pink-2:#ffdcf3;--fn-color-pink-3:#ffafed;--fn-color-pink-4:#ff8af0;--fn-color-pink-5:#f65af2;--fn-color-pink-6:#f31ded;--fn-color-pink-7:#cc00dc;--fn-color-pink-8:#a100c2;--fn-color-pink-9:#7800a4;--fn-color-pink-10:#510080;--fn-color-pink-11:#28004a;--fn-color-cyan-1:#dbf9ff;--fn-color-cyan-2:#b8f3ff;--fn-color-cyan-3:#7aeaf8;--fn-color-cyan-4:#2dd6ef;--fn-color-cyan-5:#0fb9dc;--fn-color-cyan-6:#09a0bf;--fn-color-cyan-7:#007fa9;--fn-color-cyan-8:#00709f;--fn-color-cyan-9:#025484;--fn-color-cyan-10:#013b64;--fn-color-cyan-11:#00274e;--fn-color-raspberry-1:#fff0f5;--fn-color-raspberry-2:#ffdce8;--fn-color-raspberry-3:#fecbda;--fn-color-raspberry-4:#feadc8;--fn-color-raspberry-5:#fe83ae;--fn-color-raspberry-6:#fa4f96;--fn-color-raspberry-7:#df1278;--fn-color-raspberry-8:#ba066c;--fn-color-raspberry-9:#9b015d;--fn-color-raspberry-10:#71014b;--fn-color-raspberry-11:#510136;--fn-color-yellow-1:#fdf5c9;--fn-color-yellow-2:#fce8a9;--fn-color-yellow-3:#ffc654;--fn-color-yellow-4:#ffb727;--fn-color-yellow-5:#e79a00;--fn-color-yellow-6:#c88500;--fn-color-yellow-7:#a16b00;--fn-color-yellow-8:#915e00;--fn-color-yellow-9:#714700;--fn-color-yellow-10:#523100;--fn-color-yellow-11:#3d1f00;--fn-base-color-black:#000;--fn-base-color-white:#fff;--fn-base-color-transparent:transparent;--fn-base-color-overlay:rgba(169,180,190,.6);--fn-base-color-content:#fff;--fn-shadow-grey-level-0:0 0 2px rgba(91,115,139,.16),0 4px 8px rgba(91,115,139,.16);--fn-shadow-grey-level-1:0 0 2px rgba(91,115,139,.16),0 8px 16px rgba(91,115,139,.16);--fn-shadow-grey-level-2:0 0 2px rgba(91,115,139,.16),0 16px 32px rgba(91,115,139,.16);--fn-shadow-grey-level-3:0 0 2px rgba(91,115,139,.16),0 32px 64px rgba(91,115,139,.16);--fn-shadow-blue-level-0:0 0 2px rgba(27,144,255,.16),0 4px 8px rgba(27,144,255,.16);--fn-shadow-blue-level-1:0 0 2px rgba(36,149,255,.16),0 8px 16px rgba(36,149,255,.16);--fn-shadow-green-level-0:0 0 2px rgba(54,164,29,.16),0 4px 8px rgba(54,164,29,.16);--fn-shadow-green-level-1:0 0 2px rgba(56,169,30,.16),0 8px 16px rgba(56,169,30,.16);--fn-shadow-mango-level-0:0 0 2px rgba(245,139,0,.16),0 4px 8px rgba(245,139,0,.16);--fn-shadow-mango-level-1:0 0 2px rgba(245,139,0,.16),0 8px 16px rgba(245,139,0,.16);--fn-shadow-red-level-0:0 0 2px rgba(238,57,57,.16),0 4px 8px rgba(238,57,57,.16);--fn-shadow-red-level-1:0 0 2px rgba(238,57,57,.16),0 8px 16px rgba(238,57,57,.16);--fn-shadow-black-level-0:0 0 2px rgba(0,0,0,.25),0 4px 8px rgba(0,0,0,.25);--fn-shadow-black-level-1:0 0 2px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.25);--fn-shadow-black-level-3:0 32px 64px 0 rgba(0,0,0,.25),0 0 2px 0 rgba(0,0,0,.25);--fn-focus-outline-shadow-blue:0 0 0 .125rem #0070f2;--fn-focus-outline-shadow-grey:0 0 0 .125rem #475e75;--fn-focus-outline-shadow-green:0 0 0 .125rem #188918;--fn-focus-outline-shadow-mango:0 0 0 .125rem #f58b00;--fn-focus-outline-shadow-red:0 0 0 .125rem #d20a0a;--fn-focus-outline-shadow-teal:0 0 0 .125rem #07838f;--fn-focus-outline-shadow-indigo:0 0 0 .125rem #5d36ff;--fn-focus-outline-shadow-pink:0 0 0 .125rem #cc00dc;--fn-focus-outline-shadow-cyan:0 0 0 .125rem #007fa9;--fn-focus-outline-shadow-hazelnut:0 0 0 .125rem #a16b00;--fn-focus-outline-shadow-raspberry:0 0 0 .125rem #df1278;--fn-focus-outline-shadow-inverted:0 0 0 .125rem #fff;--fn-focus-outline-inner-shadow:inset 0 0 0 .125rem #fff;--fn-page-box-shadow:var(--fn-shadow-grey-level-0)}.fn-slider{-webkit-box-sizing:border-box;background:#d5dadd;border:0;border-radius:.25rem;box-sizing:border-box;color:#1a2733;font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;font-weight:400;height:.5rem;line-height:1.375rem;margin:0;padding:0;position:relative;width:100%}.fn-slider:after,.fn-slider:before{box-sizing:inherit;font-size:inherit}.fn-slider:after{-webkit-box-sizing:border-box;background:#475e75;border:0;border-radius:50%;box-sizing:border-box;color:#1a2733;content:"";font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;font-weight:400;height:.25rem;left:.125rem;line-height:1.375rem;margin:0;padding:0;position:absolute;top:.125rem;width:.25rem;z-index:1}.fn-slider:after:after,.fn-slider:after:before{box-sizing:inherit;font-size:inherit}.fn-slider:before{-webkit-box-sizing:border-box;background:#475e75;border:0;border-radius:50%;box-sizing:border-box;color:#1a2733;content:"";font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;font-weight:400;height:.25rem;left:.125rem;left:auto;line-height:1.375rem;margin:0;padding:0;position:absolute;right:.125rem;top:.125rem;width:.25rem;z-index:1}.fn-slider:before:after,.fn-slider:before:before{box-sizing:inherit;font-size:inherit}.fn-slider.is-hover,.fn-slider:hover{background:#d5dadd}.fn-slider.is-hover .fn-slider__track-range,.fn-slider:hover .fn-slider__track-range{background:#0057d2}.fn-slider.is-active .fn-slider__track-range,.fn-slider.is-hover.is-active .fn-slider__track-range,.fn-slider.is-hover:active .fn-slider__track-range,.fn-slider:active .fn-slider__track-range,.fn-slider:hover.is-active .fn-slider__track-range,.fn-slider:hover:active .fn-slider__track-range{background:#0070f2}.fn-slider.is-disabled,.fn-slider:disabled,.fn-slider[aria-disabled=true]{opacity:.4;pointer-events:none}.fn-slider__wrapper{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:#1a2733;font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:1.375rem;margin:0 .75rem;padding:0;position:relative}.fn-slider__wrapper:after,.fn-slider__wrapper:before{box-sizing:inherit;font-size:inherit}.fn-slider__track{-webkit-box-sizing:border-box;border:0;border-radius:.375rem;box-sizing:border-box;color:#1a2733;font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;font-weight:400;height:1.5rem;line-height:1.375rem;margin:0;padding:0;position:absolute;top:-.5625rem}.fn-slider__track:after,.fn-slider__track:before{box-sizing:inherit;font-size:inherit}.fn-slider__track-range{-webkit-box-sizing:border-box;background:#0070f2;border:0;border-radius:.375rem;box-sizing:border-box;color:#1a2733;font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;font-weight:400;height:.75rem;left:-.75rem;line-height:1.375rem;margin:0;padding:0;position:absolute;right:-.75rem;top:.4375rem;z-index:2}.fn-slider__track-range:after,.fn-slider__track-range:before{box-sizing:inherit;font-size:inherit}.fn-slider__handle{-webkit-box-sizing:border-box;-webkit-transition:box-shadow .15s ease-in;-webkit-transition:-webkit-box-shadow .15s ease-in;-webkit-box-align:center;-ms-flex-align:center;-webkit-transform:translateX(-50%);-webkit-box-shadow:0 0 0 .0625rem #8396a8,0 0 2px rgba(0,0,0,.25),0 4px 8px rgba(0,0,0,.25);align-items:center;background:#fff;border:0;border-radius:50%;box-shadow:0 0 0 .0625rem #8396a8,0 0 2px #00000040,0 4px 8px #00000040;box-sizing:border-box;color:#1a2733;cursor:pointer;display:flex;font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;font-weight:400;height:1.5rem;left:100%;line-height:1.375rem;margin:0;padding:.5rem;position:absolute;transform:translate(-50%);transition:box-shadow .15s ease-in;width:1.5rem;z-index:3}.fn-slider__handle:after,.fn-slider__handle:before{box-sizing:inherit;font-size:inherit}.fn-slider__handle[dir=rtl],[dir=rtl] .fn-slider__handle{left:auto;right:100%}.fn-slider__handle [class*=sap-icon]{color:#475e75;font-size:.75rem}.fn-slider__handle [class*=sap-icon]:first-child{-webkit-transform:rotate(90deg);margin-left:-.1875rem;transform:rotate(90deg)}.fn-slider__handle [class*=sap-icon]:first-child[dir=rtl],[dir=rtl] .fn-slider__handle [class*=sap-icon]:first-child{-webkit-transform:rotate(-90deg);margin-left:auto;margin-right:-.1875rem;transform:rotate(-90deg)}.fn-slider__handle [class*=sap-icon]:last-child{-webkit-transform:rotate(-90deg);margin-left:.125rem;transform:rotate(-90deg)}.fn-slider__handle [class*=sap-icon]:last-child[dir=rtl],[dir=rtl] .fn-slider__handle [class*=sap-icon]:last-child{-webkit-transform:rotate(90deg);margin-left:auto;margin-right:.125rem;transform:rotate(90deg)}.fn-slider__handle.is-hover,.fn-slider__handle:hover{box-shadow:0 0 0 .0625rem #8396a8,0 0 2px #00000040,0 8px 1pc #00000040}.fn-slider__handle.is-hover.is-active,.fn-slider__handle.is-hover:active,.fn-slider__handle:hover.is-active,.fn-slider__handle:hover:active{box-shadow:0 0 0 .125rem #0070f2}.fn-slider__handle.is-hover.is-active [class*=sap-icon],.fn-slider__handle.is-hover:active [class*=sap-icon],.fn-slider__handle:hover.is-active [class*=sap-icon],.fn-slider__handle:hover:active [class*=sap-icon]{color:#0070f2}.fn-slider__handle.is-active,.fn-slider__handle:active{box-shadow:0 0 0 .125rem #0070f2}.fn-slider__handle.is-active [class*=sap-icon],.fn-slider__handle:active [class*=sap-icon]{color:#0070f2}.fn-slider__handle.is-focus,.fn-slider__handle:focus{outline:none}.fn-slider__handle:focus:not(.focus-visible){box-shadow:0 0 0 .0625rem #8396a8,0 0 2px #00000040,0 4px 8px #00000040}.fn-slider__handle:focus:not(.focus-visible).is-hover,.fn-slider__handle:focus:not(.focus-visible):hover{box-shadow:0 0 0 .0625rem #8396a8,0 0 2px #00000040,0 8px 1pc #00000040}.fn-slider__handle:focus:not(.focus-visible).is-hover.is-active,.fn-slider__handle:focus:not(.focus-visible).is-hover:active,.fn-slider__handle:focus:not(.focus-visible):hover.is-active,.fn-slider__handle:focus:not(.focus-visible):hover:active{box-shadow:0 0 0 .125rem #0070f2}.fn-slider__handle:focus:not(.focus-visible).is-hover.is-active [class*=sap-icon],.fn-slider__handle:focus:not(.focus-visible).is-hover:active [class*=sap-icon],.fn-slider__handle:focus:not(.focus-visible):hover.is-active [class*=sap-icon],.fn-slider__handle:focus:not(.focus-visible):hover:active [class*=sap-icon]{color:#0070f2}.fn-slider__handle.focus-visible,.fn-slider__handle.is-focus{box-shadow:0 0 0 .125rem #0070f2}.fn-slider__handle.focus-visible [class*=sap-icon],.fn-slider__handle.is-focus [class*=sap-icon]{color:#0070f2}.fn-slider__handle[dir=rtl],[dir=rtl] .fn-slider__handle{transform:translate(50%)}.fn-slider--range .fn-slider__handle:first-child{left:0}.fn-slider--range .fn-slider__handle:first-child[dir=rtl],[dir=rtl] .fn-slider--range .fn-slider__handle:first-child{left:auto;right:0}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}.fn-slider{display:block}\n'],encapsulation:2,changeDetection:0}),a})(),F=(()=>{class a{constructor(){this.value=50,this.value1=0,this.value2=0,this.value3=0,this.value4=0,this.rangeValue=[25,75]}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fd-slider-basic-example"]],decls:73,vars:21,consts:[[1,"base-row"],[3,"ngModel","ngModelChange"],[3,"ngModel","min","ngModelChange"],[3,"ngModel","min","max","step","ngModelChange"],[3,"ngModel","disabled","ngModelChange"],[3,"ngModel","range","ngModelChange"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h4"),e._uU(2,"Default Slider: "),e.TgZ(3,"code"),e._uU(4,'[min]="0" [max]="100" [step]="1"'),e.qZA()(),e.TgZ(5,"fn-slider",1),e.NdJ("ngModelChange",function(l){return i.value=l}),e.qZA(),e.TgZ(6,"p")(7,"i"),e._uU(8),e.qZA()()(),e._UZ(9,"br")(10,"br")(11,"br"),e.TgZ(12,"div",0)(13,"h4"),e._uU(14,"Slider with negative min value "),e.TgZ(15,"code"),e._uU(16,'[min]="-100"'),e.qZA()(),e.TgZ(17,"fn-slider",2),e.NdJ("ngModelChange",function(l){return i.value1=l}),e.qZA(),e.TgZ(18,"p")(19,"i"),e._uU(20),e.qZA()()(),e._UZ(21,"br")(22,"br")(23,"br"),e.TgZ(24,"div",0)(25,"h4"),e._uU(26,"Slider with "),e.TgZ(27,"code"),e._uU(28,'[min]="-50" [max]="50" [step]="5"'),e.qZA(),e._uU(29," values."),e.qZA(),e.TgZ(30,"fn-slider",3),e.NdJ("ngModelChange",function(l){return i.value2=l}),e.qZA(),e.TgZ(31,"p")(32,"i"),e._uU(33),e.qZA()()(),e._UZ(34,"br")(35,"br")(36,"br"),e.TgZ(37,"div",0)(38,"h4"),e._uU(39,"Slider with "),e.TgZ(40,"code"),e._uU(41,'[min]="-1" [max]="1" [step]="0.2"'),e.qZA(),e._uU(42," values."),e.qZA(),e.TgZ(43,"fn-slider",3),e.NdJ("ngModelChange",function(l){return i.value4=l}),e.qZA(),e.TgZ(44,"p")(45,"i"),e._uU(46),e.qZA()()(),e._UZ(47,"br")(48,"br")(49,"br"),e.TgZ(50,"div",0)(51,"h4"),e._uU(52,"Slider with "),e.TgZ(53,"code"),e._uU(54,'[disabled]="true"'),e.qZA(),e._uU(55,"."),e.qZA(),e.TgZ(56,"fn-slider",4),e.NdJ("ngModelChange",function(l){return i.value=l}),e.qZA(),e.TgZ(57,"p")(58,"i"),e._uU(59),e.qZA()()(),e._UZ(60,"br")(61,"br")(62,"br"),e.TgZ(63,"div",0)(64,"h4"),e._uU(65,"Range slider with "),e.TgZ(66,"code"),e._uU(67,'[value]="[25, 75]"'),e.qZA()(),e.TgZ(68,"div")(69,"fn-slider",5),e.NdJ("ngModelChange",function(l){return i.rangeValue=l}),e.qZA()(),e.TgZ(70,"p")(71,"i"),e._uU(72),e.qZA()()()),2&n&&(e.xp6(5),e.Q6J("ngModel",i.value),e.xp6(3),e.hij("Value: ",i.value,""),e.xp6(9),e.Q6J("ngModel",i.value1)("min",-100),e.xp6(3),e.hij("Value: ",i.value1,""),e.xp6(10),e.Q6J("ngModel",i.value2)("min",-50)("max",50)("step",5),e.xp6(3),e.hij("Value: ",i.value2,""),e.xp6(10),e.Q6J("ngModel",i.value4)("min",-1)("max",1)("step",.2),e.xp6(3),e.hij("Value: ",i.value4,""),e.xp6(10),e.Q6J("ngModel",i.value)("disabled",!0),e.xp6(3),e.hij("Value: ",i.value4,""),e.xp6(10),e.Q6J("ngModel",i.rangeValue)("range",!0),e.xp6(3),e.hij("Value: ",i.rangeValue,""))},dependencies:[p.JJ,p.On,C],encapsulation:2,changeDetection:0}),a})(),J=(()=>{class a{constructor(){this.basic=[{language:"typescript",code:(0,m.getAssetFromModuleAssets)("base/slider-basic-example.component.ts"),fileName:"slider-basic-example",component:"SliderBasicExampleComponent"},{language:"html",code:(0,m.getAssetFromModuleAssets)("base/slider-basic-example.component.html"),fileName:"slider-basic-example"}]}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-slider"]],decls:5,vars:2,consts:[["id","basic","componentName","slider"],[3,"hasBackground"],[3,"exampleFiles"]],template:function(n,i){1&n&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1,"Basic"),e.qZA(),e.TgZ(2,"component-example",1),e._UZ(3,"fd-slider-basic-example"),e.qZA(),e._UZ(4,"code-example",2)),2&n&&(e.xp6(2),e.Q6J("hasBackground",!1),e.xp6(2),e.Q6J("exampleFiles",i.basic))},dependencies:[A.E,k.k,L.O,F],encapsulation:2}),a})();var q=o(10728),j=o(38631),O=o(48208),Q=o(82861);let W=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fd-slider-header"]],decls:26,vars:1,consts:[["module","SliderModule","subPackage","slider"],[3,"hasI18n"]],template:function(n,i){1&n&&(e.TgZ(0,"header"),e._uU(1,"Slider"),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4,"A slider is a control that enables the user to adjust single values within a specified numerical range."),e.qZA(),e.TgZ(5,"p"),e._uU(6,"If the slider is editable, the hand cursor appears when the user hovers over the grip."),e.qZA(),e.TgZ(7,"p"),e._uU(8,"The user can change the slider setting in two ways:"),e.qZA(),e.TgZ(9,"ul")(10,"li"),e._uU(11,"By using drag and drop to adjust the grip"),e.qZA(),e.TgZ(12,"li"),e._uU(13,"By clicking the bar. The grip then moves to this new position."),e.qZA(),e.TgZ(14,"li"),e._uU(15,"Keyboard Arrows: UP, DOWN, LEFT, RIGHT or SHIFT + UP, DOWN, LEFT, RIGHT"),e.qZA()(),e.TgZ(16,"p"),e._uU(17,"The grip can be moved with or without increments based on the predefined steps."),e.qZA(),e.TgZ(18,"p"),e._uU(19,"For range slider set the "),e.TgZ(20,"code"),e._uU(21,"[range]"),e.qZA(),e._uU(22," property to true."),e.qZA()(),e._UZ(23,"import",0)(24,"fd-header-tabs",1)(25,"router-outlet")),2&n&&(e.xp6(24),e.Q6J("hasI18n",!0))},dependencies:[x.lC,q.k,j.G,O.c,Q.w],encapsulation:2}),a})();o(29572);var X=o(72232),Y=o(2215);let $=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[y.ez,X.UU,p.u5,u.lc,Y.LU]}),a})();var ee=o(29466);const ne=[{path:"",component:W,children:[{path:"",component:J},{path:"api",component:m.ApiComponent,data:{content:T.X.slider}},{path:"i18n",component:m.I18nDocsComponent,data:(0,m.getI18nKey)("fnSlider")}]}];let ie=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[(0,m.currentComponentProvider)("slider")],imports:[x.Bz.forChild(ne),m.SharedDocumentationModule,m.SharedDocumentationPageModule,ee.h,$,p.u5,x.Bz]}),a})()}}]);