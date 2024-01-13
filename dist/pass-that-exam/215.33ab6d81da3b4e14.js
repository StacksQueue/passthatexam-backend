"use strict";(self.webpackChunkpassThatExam=self.webpackChunkpassThatExam||[]).push([[215],{1215:(k,g,a)=>{a.r(g),a.d(g,{QuestionModule:()=>M});var c=a(6814),p=a(1896),e=a(5879),u=a(343);let h=(()=>{class n{constructor(t){this.document=t}createLinkForCanonicalURL(t,i){this.destroyLinkForCanonicalURL();const o=i.page?"?page="+i.page:"";let r=this.document.createElement("link");r.setAttribute("rel","canonical"),r.setAttribute("href",t+o),this.document.head.appendChild(r)}destroyLinkForCanonicalURL(){this.document.querySelectorAll("link[rel='canonical']").forEach(i=>i.remove())}static#t=this.\u0275fac=function(i){return new(i||n)(e.LFG(c.K0))};static#e=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var l=a(1408),m=a(8658),x=a(1074),f=a(5992);function C(n,s){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&n){const t=s.$implicit,i=s.index,o=e.oxw();e.ekj("q-correct",t===o.question.answer),e.xp6(1),e.AsE(" ",o.getAlphabeticalCount(i)," ",t," ")}}let y=(()=>{class n{constructor(t,i){this.dialog=t,this._snackBar=i,this.isChecked=!1,this.question_shortened="",this.panelOpenState=!1}ngOnInit(){const t=window.innerWidth>420?180:60,i=this.question.question;this.question_shortened=i.length>t?i.slice(0,t)+"...":i}openExplainDialog(){this.openDialog(m.N,this.question.explanation)}openReportQuestionDialog(){this.openDialog(l.J,this.question)}openDialog(t,i){this.dialog.open(t,{data:i,width:"400px"}).afterClosed().subscribe(r=>{t===l.J&&"close"===r&&this._snackBar.open("Success sending Report. Thank you","",{duration:3e3})})}getAlphabeticalCount(t){return String.fromCharCode(65+t)+"."}static#t=this.\u0275fac=function(i){return new(i||n)(e.Y36(x.uw),e.Y36(f.ux))};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-question-tab"]],inputs:{question:"question",isShow:"isShow",isExpand:"isExpand",watermark:"watermark",number:"number"},decls:7,vars:4,consts:[[1,"q-content"],[1,"q-choices"],[3,"q-correct",4,"ngFor","ngForOf"],[1,"q-explain"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"div",1),e.YNc(4,C,2,4,"p",2),e.qZA(),e.TgZ(5,"p",3),e._uU(6),e.qZA()()),2&i&&(e.xp6(2),e.AsE("",o.number+1,". ",o.question.question,""),e.xp6(2),e.Q6J("ngForOf",o.question.choices),e.xp6(2),e.hij("Explanation: ",o.question.explanation,""))},dependencies:[c.sg],styles:["mat-expansion-panel[_ngcontent-%COMP%]{background-color:#c9e4d9}mat-icon[_ngcontent-%COMP%]{color:var(--icon)}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:10px 24px}.chip[_ngcontent-%COMP%]{background:#7eb19c;font-size:12px;border-radius:30px;padding:4px 10px;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{background-color:#c9e4d9;padding:10px;border-radius:5px;color:#000;white-space:pre-line}  .mat-expansion-panel-body{padding:0 24px 16px;display:flex;flex-direction:column;gap:10px}.watermark[_ngcontent-%COMP%]{font-size:11px;text-align:center;padding:10px 0 0}.qtab-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:15px;padding:10px 0}.choice[_ngcontent-%COMP%]{padding:10px;background-color:#c56a1966;border-radius:5px}.correct[_ngcontent-%COMP%]{background-color:var(--header)}.report[_ngcontent-%COMP%]{cursor:pointer}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:max-content}@media screen and (max-width: 420px){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background-color:#c9e4d9}}.q-content[_ngcontent-%COMP%]{font-size:14px;padding:5px;font-family:Roboto,sans-serif}.q-choices[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;line-height:1.5}.q-correct[_ngcontent-%COMP%]{-webkit-text-decoration:underline rgba(187,53,180,.3) solid 4px;text-decoration:underline rgba(187,53,180,.3) solid 4px;text-underline-offset:2px;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.q-explain[_ngcontent-%COMP%]{margin-bottom:0}"]})}return n})();function v(n,s){if(1&n&&e._UZ(0,"app-question-tab",7),2&n){const t=s.$implicit,i=s.index,o=e.oxw(3);e.Q6J("number",i)("question",t)("isShow",o.isShow)("isExpand",o.isExpand)("watermark",o.watermark)}}function b(n,s){if(1&n&&(e.TgZ(0,"div",3)(1,"h4",4),e._uU(2),e.qZA(),e.TgZ(3,"div",5),e.YNc(4,v,1,5,"app-question-tab",6),e.qZA()()),2&n){const t=s.$implicit;e.xp6(2),e.Oqu(t.coverage),e.xp6(2),e.Q6J("ngForOf",t.question)}}function q(n,s){if(1&n&&(e.TgZ(0,"section",1),e.YNc(1,b,5,2,"div",2),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.questionsbycoverage)}}const O=[{path:"",component:(()=>{class n{constructor(t,i,o,r){this.router=t,this.examService=i,this.activatedRoute=o,this.seoService=r,this.keyword="",this.questionnaires=[],this.programs=[],this.selectedPrograms=[],this.selectedCoverage=[],this.selectedMain=[],this.isloading=!1,this.isShow=!1,this.isExpand=!1,this.pagination={length:100,page:1,limit:10,pageSizeOption:[5,10,25,100]},this.watermark=!1,this.questionsbycoverage=[]}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{this.seoService.createLinkForCanonicalURL("https://passthatboard.com/questions",t),this.queryParamsHandling(t)}),this.examService.getExamPrograms().subscribe(t=>{this.programs=t.data,this.selectedPrograms.length||(this.selectedPrograms=t.data)})}getQuestionList(){this.isloading=!0,this.examService.getQuestionList(this.keyword,this.selectedPrograms,this.pagination).subscribe(t=>{this.questionnaires=t.data,this.pagination.length=t.total,this.isloading=!1})}getQuestionListByCategory(){this.examService.getQuestionListByCategory(this.pagination,this.selectedCoverage,this.selectedMain).subscribe(t=>{this.questionsbycoverage=t.data,console.log(this.questionsbycoverage)})}paginate(t){this.router.navigate(["/questions"],{queryParams:{page:t.pageIndex+1,limit:t.pageSize},queryParamsHandling:"merge"})}queryParamsHandling(t){this.pagination.page=t.page?t.page:1,this.pagination.limit=t.limit?t.limit:25,this.keyword=t.keyword?t.keyword:"",this.selectedPrograms=t.programs?Array.isArray(t.programs)?t.programs:[t.programs]:[],this.selectedCoverage=t.coverage?Array.isArray(t.coverage)?t.coverage:[t.coverage]:[],this.selectedMain=t.main?Array.isArray(t.main)?t.main:[t.main]:[],this.watermark=!!t.watermark&&JSON.parse(t.watermark),this.getQuestionList(),this.getQuestionListByCategory()}static#t=this.\u0275fac=function(i){return new(i||n)(e.Y36(p.F0),e.Y36(u.O),e.Y36(p.gz),e.Y36(h))};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-question-list"]],decls:1,vars:1,consts:[["id","display",4,"ngIf"],["id","display"],["class","coverage-wrapper",4,"ngFor","ngForOf"],[1,"coverage-wrapper"],[1,"topic"],[1,"q-wrapper"],[3,"number","question","isShow","isExpand","watermark",4,"ngFor","ngForOf"],[3,"number","question","isShow","isExpand","watermark"]],template:function(i,o){1&i&&e.YNc(0,q,2,1,"section",0),2&i&&e.Q6J("ngIf",o.questionsbycoverage.length)},dependencies:[c.sg,c.O5,y],styles:[".q-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.loader[_ngcontent-%COMP%]{display:flex;height:50vh;justify-content:center;align-items:center}.no-display[_ngcontent-%COMP%]{text-align:center;font-size:30px;display:flex;flex-direction:column;align-items:center;height:50vh;justify-content:center}.no-display[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:40px;height:40px;width:40px}p[_ngcontent-%COMP%]{margin:0}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.action-wrapper[_ngcontent-%COMP%]{display:flex;padding:15px 0 20px 12px;gap:10px;align-items:center}mat-paginator[_ngcontent-%COMP%], mat-button-toggle-group[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]{background:#e3f7ee;font-size:14px}  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:36px}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:var(--header);color:#fff}#description[_ngcontent-%COMP%]{padding:25px 0}#pagination[_ngcontent-%COMP%]{padding-top:20px}#actions[_ngcontent-%COMP%]{padding:20px 0}@media screen and (max-width: 420px){  .sec-container{width:100%;padding:0}.action-wrapper[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:flex-start}}  .header{display:none!important}  .footer-container{display:none!important}"]})}return n})()}];let P=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(O),p.Bz]})}return n})();var w=a(3872),d=a(6223);let M=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.ez,P,w.q,d.UX,d.u5]})}return n})()}}]);