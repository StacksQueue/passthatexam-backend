"use strict";(self.webpackChunkpassThatExam=self.webpackChunkpassThatExam||[]).push([[866],{5866:(x,c,s)=>{s.r(c),s.d(c,{DonateModule:()=>_});var r=s(6814),d=s(1896),t=s(5879),u=s(5992),m=s(4692);class y{constructor(n,o){this._document=o;const i=this._textarea=this._document.createElement("textarea"),a=i.style;a.position="fixed",a.top=a.opacity="0",a.left="-999em",i.setAttribute("aria-hidden","true"),i.value=n,i.readOnly=!0,this._document.body.appendChild(i)}copy(){const n=this._textarea;let o=!1;try{if(n){const i=this._document.activeElement;n.select(),n.setSelectionRange(0,n.value.length),o=this._document.execCommand("copy"),i&&i.focus()}}catch{}return o}destroy(){const n=this._textarea;n&&(n.remove(),this._textarea=void 0)}}let h=(()=>{class e{constructor(o){this._document=o}copy(o){const i=this.beginCopy(o),a=i.copy();return i.destroy(),a}beginCopy(o){return new y(o,this._document)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(r.K0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const f=new t.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG");let C=(()=>{class e{constructor(o,i,a){this._clipboard=o,this._ngZone=i,this.text="",this.attempts=1,this.copied=new t.vpe,this._pending=new Set,a&&null!=a.attempts&&(this.attempts=a.attempts)}copy(o=this.attempts){if(o>1){let i=o;const a=this._clipboard.beginCopy(this.text);this._pending.add(a);const l=()=>{const p=a.copy();p||!--i||this._destroyed?(this._currentTimeout=null,this._pending.delete(a),a.destroy(),this.copied.emit(p)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(l,1))};l()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(o=>o.destroy()),this._pending.clear(),this._destroyed=!0}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(h),t.Y36(t.R0b),t.Y36(f,8))},e.\u0275dir=t.lG2({type:e,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(o,i){1&o&&t.NdJ("click",function(){return i.copy()})},inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"}}),e})(),g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({}),e})();const b=[{path:"",component:(()=>{class e{constructor(o){this._snackBar=o}clipboardClicked(){this._snackBar.open("Number copied to clipboard","",{duration:3e3,verticalPosition:"top"})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-donate"]],decls:19,vars:1,consts:[["id","donate"],[1,"title"],[1,"content"],[1,"logo"],[1,"donate-info"],[1,"clipboard",3,"cdkCopyToClipboard","click"],["aria-hidden","false","aria-label","copy icon","fontIcon","content_copy"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"div",1),t._uU(2,"SUPPORT THIS PAGE"),t.qZA(),t.TgZ(3,"div",2),t._uU(4," If you're finding "),t.TgZ(5,"span",3),t._uU(6,"Pass That Board"),t.qZA(),t._uU(7," helpful on your exam journey and it's contributed to your success, I'd like to extend an invitation to support its ongoing development. As the sole developer of this platform, I personally shoulder all the expenses - from hosting and server maintenance to other operational costs. "),t.qZA(),t.TgZ(8,"div",2),t._uU(9," Your contribution, no matter the amount, would make a significant difference in keeping this platform thriving. Your generosity would directly contribute to enhancing its features and ensuring its accessibility for everyone who benefits from it. "),t.qZA(),t.TgZ(10,"div",2),t._uU(11,"Thank youu (\u3064\u2727\u03c9\u2727)\u3064"),t.qZA(),t.TgZ(12,"div",4)(13,"span"),t._uU(14,"Gcash/Maya: 096* *** *193"),t.qZA(),t.TgZ(15,"div",5),t.NdJ("click",function(){return i.clipboardClicked()}),t._UZ(16,"mat-icon",6),t.TgZ(17,"span"),t._uU(18,"click to copy my number"),t.qZA()()()()),2&o&&(t.xp6(15),t.Q6J("cdkCopyToClipboard","09682419193"))},dependencies:[m.Hw,C],styles:["#donate[_ngcontent-%COMP%]{padding:25px 0}.donate-info[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;gap:10px;font-family:Bebas Neue}.clipboard[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px 10px;background-color:var(--header);width:max-content;gap:10px;cursor:pointer}  .mat-mdc-snack-bar-container{--mdc-snackbar-container-color: #7abe8c}"]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(b),d.Bz]}),e})();var T=s(6281);let _=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,T.q,v,g]}),e})()}}]);