"use strict";(self.webpackChunkpassThatExam=self.webpackChunkpassThatExam||[]).push([[873],{2873:(j,m,a)=>{a.r(m),a.d(m,{QuestionModule:()=>R});var l=a(6814),c=a(1896),e=a(5879),_=a(343);let v=(()=>{class n{constructor(t){this.document=t}createLinkForCanonicalURL(t,o){this.destroyLinkForCanonicalURL();const r=o.page?"?page="+o.page:"";let s=this.document.createElement("link");s.setAttribute("rel","canonical"),s.setAttribute("href",t+r),this.document.head.appendChild(s)}destroyLinkForCanonicalURL(){this.document.querySelectorAll("link[rel='canonical']").forEach(o=>o.remove())}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(l.K0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=a(1933),f=a(146),u=a(4692),C=a(7937),y=a(4900),T=a(7913),x=a(1408),b=a(8658),w=a(1074),Q=a(5992),g=a(8922),p=a(6223);function q(n,i){if(1&n&&(e.TgZ(0,"div",10),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.question.major[1])}}function Z(n,i){if(1&n&&(e.TgZ(0,"div",11),e._uU(1),e.qZA()),2&n){const t=i.$implicit,o=e.oxw();e.ekj("correct",o.isShow&&t===o.question.answer),e.xp6(1),e.hij(" ",t," ")}}function O(n,i){1&n&&(e.TgZ(0,"span",12),e._uU(1,"passthatboard.com"),e.qZA())}let S=(()=>{class n{constructor(t,o){this.dialog=t,this._snackBar=o,this.isChecked=!1,this.question_shortened="",this.panelOpenState=!1}ngOnInit(){const t=window.innerWidth>420?180:60,o=this.question.question;this.question_shortened=o.length>t?o.slice(0,t)+"...":o}openExplainDialog(){this.openDialog(b.N,this.question.explanation)}openReportQuestionDialog(){this.openDialog(x.J,this.question)}openDialog(t,o){this.dialog.open(t,{data:o,width:"400px"}).afterClosed().subscribe(s=>{t===x.J&&"close"===s&&this._snackBar.open("Success sending Report. Thank you","",{duration:3e3})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(w.uw),e.Y36(Q.ux))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-question-tab"]],inputs:{question:"question",isShow:"isShow",isExpand:"isExpand",watermark:"watermark"},decls:15,vars:6,consts:[[1,"qtab-wrapper"],[1,"qtab-actions"],["class","chip",4,"ngIf"],[1,"spacer"],["color","primary",3,"ngModel","ngModelChange"],["aria-hidden","false","aria-label","report button","fontIcon","flag",1,"report",3,"click"],[3,"click"],[3,"expanded","opened","closed"],["class","choice",3,"correct",4,"ngFor","ngForOf"],["class","watermark",4,"ngIf"],[1,"chip"],[1,"choice"],[1,"watermark"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,q,2,1,"div",2),e._UZ(3,"span",3),e.TgZ(4,"mat-slide-toggle",4),e.NdJ("ngModelChange",function(s){return o.isShow=s}),e.qZA(),e.TgZ(5,"mat-icon",5),e.NdJ("click",function(){return o.openReportQuestionDialog()}),e.qZA(),e.TgZ(6,"mat-icon",6),e.NdJ("click",function(){return o.openExplainDialog()}),e._uU(7,"question_answer"),e.qZA()(),e.TgZ(8,"mat-accordion")(9,"mat-expansion-panel",7),e.NdJ("opened",function(){return o.isExpand=!0})("closed",function(){return o.isExpand=!1}),e.TgZ(10,"mat-expansion-panel-header")(11,"mat-panel-description"),e._uU(12),e.qZA()(),e.YNc(13,Z,2,3,"div",8),e.YNc(14,O,2,0,"span",9),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngIf",o.question.major[1]),e.xp6(2),e.Q6J("ngModel",o.isShow),e.xp6(5),e.Q6J("expanded",o.isExpand),e.xp6(3),e.hij(" ",o.isExpand?o.question.question:o.question_shortened," "),e.xp6(1),e.Q6J("ngForOf",o.question.choices),e.xp6(1),e.Q6J("ngIf",1==o.watermark))},dependencies:[l.sg,l.O5,h.Rr,g.pp,g.ib,g.yz,g.u4,u.Hw,p.JJ,p.On],styles:["mat-expansion-panel[_ngcontent-%COMP%]{background-color:#c9e4d9}mat-icon[_ngcontent-%COMP%]{color:var(--icon)}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:10px 24px}.chip[_ngcontent-%COMP%]{background:#7eb19c;font-size:12px;border-radius:30px;padding:4px 10px;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{background-color:#c9e4d9;padding:10px;border-radius:5px;color:#000;white-space:pre-line}  .mat-expansion-panel-body{padding:0 24px 16px;display:flex;flex-direction:column;gap:10px}.watermark[_ngcontent-%COMP%]{font-size:11px;text-align:end;font-style:italic;position:absolute;right:24px;bottom:0}.qtab-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:15px;padding:10px 0}.choice[_ngcontent-%COMP%]{padding:10px;background-color:#c56a1966;border-radius:5px}.correct[_ngcontent-%COMP%]{background-color:var(--header)}.report[_ngcontent-%COMP%]{cursor:pointer}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:max-content}@media screen and (max-width: 420px){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background-color:#c9e4d9}}"]}),n})();var d=a(6005),P=a(9548),M=a(1075);let k=(()=>{class n{constructor(t,o){this.formbuilder=t,this.router=o,this.programs=[],this.questionForm=this.formbuilder.group({search:new p.NI("")})}onEnterKey(t){"Enter"===t?.key&&this.onSubmit()}onSubmit(){this.router.navigate(["/questions"],{queryParams:{keyword:this.questionForm.value.search,programs:this.programs},queryParamsHandling:"merge"})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.qu),e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-question-search"]],inputs:{programs:"programs"},decls:10,vars:1,consts:[[3,"formGroup","ngSubmit"],[1,"search-wrapper"],[1,"full-width"],["matPrefix",""],["matInput","","placeholder","Search any keywords","formControlName","search",3,"keydown"],["type","submit","mat-flat-button","","color","primary"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),e._uU(4,"Questions"),e.qZA(),e.TgZ(5,"mat-icon",3),e._uU(6,"search"),e.qZA(),e.TgZ(7,"input",4),e.NdJ("keydown",function(s){return o.onEnterKey(s)}),e.qZA()(),e.TgZ(8,"button",5),e._uU(9,"Search"),e.qZA()()()),2&t&&e.Q6J("formGroup",o.questionForm)},dependencies:[d.KE,d.hX,d.qo,P.Nt,M.lW,u.Hw,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.search-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px}button.mat-primary[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:18px;color:#fff;border-radius:0;text-shadow:1px 1px 1px rgba(0,0,0,.45)}  .mat-mdc-form-field-subscript-wrapper{display:none}  .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:transparent!important}"]}),n})();function A(n,i){if(1&n&&(e.TgZ(0,"mat-button-toggle",16),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function E(n,i){1&n&&(e.TgZ(0,"div",17),e._UZ(1,"mat-spinner"),e.qZA())}function J(n,i){if(1&n&&e._UZ(0,"app-question-tab",21),2&n){const t=i.$implicit,o=e.oxw(3);e.Q6J("question",t)("isShow",o.isShow)("isExpand",o.isExpand)("watermark",o.watermark)}}function L(n,i){if(1&n&&(e.TgZ(0,"div",1),e.YNc(1,J,1,4,"app-question-tab",20),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.questionnaires)}}function F(n,i){1&n&&(e.TgZ(0,"div",22)(1,"span"),e._uU(2,"No Records Found"),e.qZA(),e.TgZ(3,"mat-icon"),e._uU(4,"search"),e.qZA()())}function N(n,i){if(1&n&&(e.YNc(0,L,2,1,"div",18),e.YNc(1,F,5,0,"ng-template",null,19,e.W1O)),2&n){const t=e.MAs(2),o=e.oxw();e.Q6J("ngIf",o.questionnaires.length)("ngIfElse",t)}}const U=[{path:"",component:(()=>{class n{constructor(t,o,r,s){this.router=t,this.examService=o,this.activatedRoute=r,this.seoService=s,this.keyword="",this.questionnaires=[],this.programs=[],this.selectedPrograms=[],this.isloading=!1,this.isShow=!1,this.isExpand=!1,this.pagination={length:100,page:1,limit:10,pageSizeOption:[5,10,25,100]},this.watermark=!1}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{this.seoService.createLinkForCanonicalURL("/questions",t),this.queryParamsHandling(t)}),this.examService.getExamPrograms().subscribe(t=>{this.programs=t.data,this.selectedPrograms.length||(this.selectedPrograms=t.data)})}getQuestionList(){this.isloading=!0,this.examService.getQuestionList(this.keyword,this.selectedPrograms,this.pagination).subscribe(t=>{this.questionnaires=t.data,this.pagination.length=t.total,this.isloading=!1})}paginate(t){this.router.navigate(["/questions"],{queryParams:{page:t.pageIndex+1,limit:t.pageSize},queryParamsHandling:"merge"})}queryParamsHandling(t){this.pagination.page=t.page?t.page:1,this.pagination.limit=t.limit?t.limit:25,this.keyword=t.keyword?t.keyword:"",this.selectedPrograms=t.programs?Array.isArray(t.programs)?t.programs:[t.programs]:[],this.watermark=!!t.watermark&&t.watermark,this.getQuestionList()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.F0),e.Y36(_.O),e.Y36(c.gz),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-question-list"]],decls:26,vars:10,consts:[["id","actions"],[1,"sec-container"],[3,"programs"],[1,"action-wrapper"],["color","primary",3,"change"],[1,"spacer"],["multiple","",3,"value","change"],[3,"value",4,"ngFor","ngForOf"],["id","description"],[1,"title"],["id","display"],["class","loader",4,"ngIf","ngIfElse"],["display",""],["id","pagination"],[3,"length","pageSize","pageIndex","pageSizeOptions","showFirstLastButtons","page"],["id","footer"],[3,"value"],[1,"loader"],["class","sec-container",4,"ngIf","ngIfElse"],["nodisplay",""],[3,"question","isShow","isExpand","watermark",4,"ngFor","ngForOf"],[3,"question","isShow","isExpand","watermark"],[1,"no-display"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"div",1),e._UZ(2,"app-question-search",2),e.TgZ(3,"div",3)(4,"mat-slide-toggle",4),e.NdJ("change",function(s){return o.isExpand=s.checked}),e._uU(5,"Expand All Question Tabs"),e.qZA(),e.TgZ(6,"mat-slide-toggle",4),e.NdJ("change",function(s){return o.isShow=s.checked}),e._uU(7,"Show All Answers"),e.qZA(),e._UZ(8,"div",5),e.TgZ(9,"mat-button-toggle-group",6),e.NdJ("change",function(s){return o.selectedPrograms=s.value}),e.YNc(10,A,2,2,"mat-button-toggle",7),e.qZA()()()(),e.TgZ(11,"section",8)(12,"div",1)(13,"div",9),e._uU(14,"CSE & LET Question List"),e.qZA(),e.TgZ(15,"p"),e._uU(16," Explore a wealth of knowledge with access to a comprehensive collection of 1000+ questions sourced from trusted materials, specifically tailored for the Civil Service Exam (CSE) and the Licensure Exam for Teachers (LET). These questions are meticulously categorized across various subjects, offering you a structured approach to your preparation. "),e.qZA()()(),e.TgZ(17,"section",10),e.YNc(18,E,2,0,"div",11),e.YNc(19,N,3,2,"ng-template",null,12,e.W1O),e.qZA(),e.TgZ(21,"section",13)(22,"div",1)(23,"mat-paginator",14),e.NdJ("page",function(s){return o.paginate(s)}),e.qZA()()(),e.TgZ(24,"section",15),e._UZ(25,"app-footer"),e.qZA()),2&t){const r=e.MAs(20);e.xp6(2),e.Q6J("programs",o.selectedPrograms),e.xp6(7),e.Q6J("value",o.selectedPrograms),e.xp6(1),e.Q6J("ngForOf",o.programs),e.xp6(8),e.Q6J("ngIf",o.isloading)("ngIfElse",r),e.xp6(5),e.Q6J("length",o.pagination.length)("pageSize",o.pagination.limit)("pageIndex",o.pagination.page-1)("pageSizeOptions",o.pagination.pageSizeOption)("showFirstLastButtons",!0)}},dependencies:[l.sg,l.O5,h.Rr,f.A9,f.Yi,u.Hw,C.Ou,y.NW,T.c,S,k],styles:[".sec-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.loader[_ngcontent-%COMP%]{display:flex;height:50vh;justify-content:center;align-items:center}.no-display[_ngcontent-%COMP%]{text-align:center;font-size:30px;display:flex;flex-direction:column;align-items:center;height:50vh;justify-content:center}.no-display[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:40px;height:40px;width:40px}.title[_ngcontent-%COMP%]{font-size:23px;text-align:center;font-family:Bebas Neue}p[_ngcontent-%COMP%]{margin:0}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.action-wrapper[_ngcontent-%COMP%]{display:flex;padding:0 0 20px 12px;gap:10px;align-items:center}mat-paginator[_ngcontent-%COMP%], mat-button-toggle-group[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]{background:#e3f7ee;font-size:14px}  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:36px}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:var(--header);color:#fff}#pagination[_ngcontent-%COMP%]{padding-top:20px}#actions[_ngcontent-%COMP%]{padding:20px 0}@media screen and (max-width: 420px){.action-wrapper[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:flex-start}}"]}),n})()}];let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(U),c.Bz]}),n})();var I=a(9469),Y=a(8524);let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,z,I.q,p.UX,p.u5,Y.m]}),n})()}}]);