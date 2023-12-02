"use strict";(self.webpackChunkpassThatExam=self.webpackChunkpassThatExam||[]).push([[546],{5546:(K,C,a)=>{a.r(C),a.d(C,{ExamModule:()=>$});var p=a(6814),l=a(1896),e=a(5879),g=a(343),h=a(8707),v=a(6005),M=a(9548),b=a(538),d=a(1075),y=a(146),m=a(6223);let O=(()=>{class n{transform(t,o){return t.filter(r=>r.major==o)[0].coverage.sort()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"coveragefilter",type:n,pure:!0}),n})(),T=(()=>{class n{transform(t,o){return t.filter(r=>r.program==o).map(r=>r.major).sort()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"majorfilter",type:n,pure:!0}),n})();function Z(n,i){if(1&n&&(e.TgZ(0,"mat-button-toggle",14),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function E(n,i){if(1&n&&(e.TgZ(0,"mat-button-toggle",14),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function A(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"mat-button-toggle-group",4),e.NdJ("change",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.selectedMajor=r.value)}),e.YNc(1,E,2,2,"mat-button-toggle",5),e.ALo(2,"majorfilter"),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("multiple",!1)("value",t.selectedMajor),e.xp6(1),e.Q6J("ngForOf",e.xi3(2,3,t.filters,t.selectedProgram))}}function S(n,i){if(1&n&&(e.TgZ(0,"mat-button-toggle",14),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function k(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"mat-button-toggle-group",4),e.NdJ("change",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.selectedCoverage=r.value)}),e.YNc(1,S,2,2,"mat-button-toggle",5),e.ALo(2,"coveragefilter"),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("multiple",!0)("value",t.selectedCoverage),e.xp6(1),e.Q6J("ngForOf",e.xi3(2,3,t.filters,t.selectedMajor))}}let w=(()=>{class n{constructor(t,o,r){this.examService=t,this.router=o,this._bottomSheetRef=r,this.item=80,this.programs=[],this.selectedProgram="Education",this.selectedMajor="General Education",this.selectedCoverage=[],this.filters=[],this.defaults=[{program:"Education",major:"General Education"},{program:"Civil Service",major:"Civil Service"}]}ngOnInit(){this.examService.getExamCoverage().subscribe(t=>{this.filters=t.data,this.programs=[...new Set(this.filters.map(o=>o.program))]})}onProgramChanged(t){this.selectedProgram=t.value,this.selectedMajor=this.defaults.filter(o=>o.program==this.selectedProgram)[0].major}navigate(){this.router.navigate(["/"],{queryParams:{coverage:this.selectedCoverage,items:this.item,program:this.selectedProgram,major:this.selectedMajor},queryParamsHandling:"merge"}),this._bottomSheetRef.dismiss()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.O),e.Y36(l.F0),e.Y36(h.oL))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-exam-filter"]],decls:28,vars:7,consts:[["id","exam-filter"],[1,"filter-container"],[1,"label"],[1,"wrapper"],[3,"multiple","value","change"],[3,"value",4,"ngFor","ngForOf"],[3,"multiple","value","change",4,"ngIf"],[1,"timer-item-wrapper"],[1,"item-wrapper"],["matInput","","type","number",3,"ngModel","ngModelChange"],["min","10","max","200"],["matSliderThumb","",3,"ngModel","ngModelChange"],[1,"action-wrapper"],["mat-flat-button","","color","primary","type","button",3,"click"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"mat-label",2),e._uU(3,"Click the filters you want to choose"),e.qZA(),e.TgZ(4,"div",3)(5,"mat-label"),e._uU(6,"Exam Type"),e.qZA(),e.TgZ(7,"mat-button-toggle-group",4),e.NdJ("change",function(s){return o.onProgramChanged(s)}),e.YNc(8,Z,2,2,"mat-button-toggle",5),e.qZA()(),e.TgZ(9,"div",3)(10,"mat-label"),e._uU(11,"Major"),e.qZA(),e.YNc(12,A,3,6,"mat-button-toggle-group",6),e.qZA(),e.TgZ(13,"div",3)(14,"mat-label"),e._uU(15,"Coverage"),e.qZA(),e.YNc(16,k,3,6,"mat-button-toggle-group",6),e.qZA()(),e.TgZ(17,"div",7)(18,"div",8)(19,"mat-form-field")(20,"mat-label"),e._uU(21,"Number of Items"),e.qZA(),e.TgZ(22,"input",9),e.NdJ("ngModelChange",function(s){return o.item=s}),e.qZA()(),e.TgZ(23,"mat-slider",10)(24,"input",11),e.NdJ("ngModelChange",function(s){return o.item=s}),e.qZA()()()(),e.TgZ(25,"div",12)(26,"button",13),e.NdJ("click",function(){return o.navigate()}),e._uU(27," START "),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("multiple",!1)("value",o.selectedProgram),e.xp6(1),e.Q6J("ngForOf",o.programs),e.xp6(4),e.Q6J("ngIf",o.filters.length),e.xp6(4),e.Q6J("ngIf",o.filters.length),e.xp6(6),e.Q6J("ngModel",o.item),e.xp6(2),e.Q6J("ngModel",o.item))},dependencies:[p.sg,p.O5,v.KE,v.hX,M.Nt,b.pH,b.$5,d.lW,y.A9,y.Yi,m.Fj,m.wV,m.JJ,m.On,O,T],styles:[".filter-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.program-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px 0 50px}.program-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:x-large}.program-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--header);width:70px;height:70px;font-size:70px}.wrapper[_ngcontent-%COMP%]{padding:0 10px;display:inline-grid}.wrapper[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{font-size:12px;color:#0009;margin-bottom:5px}.label[_ngcontent-%COMP%]{padding:0 10px;font-size:12px;color:#0009;margin-bottom:5px}.major-filter[_ngcontent-%COMP%]{width:-webkit-fill-available;padding:20px 0}.timer-item-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 0}.timer-item-wrapper[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]{width:100%;display:grid}.timer-item-wrapper[_ngcontent-%COMP%]   .timer-wrapper[_ngcontent-%COMP%]{width:45%;padding:15px 50px 15px 15px;display:grid;place-self:baseline}.action-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px 10px}button.mat-primary[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:18px;color:#fff;border-radius:0;text-shadow:1px 1px 1px rgba(0,0,0,.45)}mat-hint[_ngcontent-%COMP%]{font-size:12px;color:#0009}.mat-mdc-standard-chip[_ngcontent-%COMP%]{height:var(--mdc-chip-container-height, 28px);font-size:14px}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:var(--header);color:#fff}  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:30px}mat-button-toggle-group[_ngcontent-%COMP%]{flex-wrap:wrap;gap:1px}.mat-button-toggle[_ngcontent-%COMP%]{flex:1}#exam-filter[_ngcontent-%COMP%]{padding:50px 0}@media screen and (max-width: 420px){.program-title[_ngcontent-%COMP%]{padding:0 0 20px}.major-filter[_ngcontent-%COMP%]{width:-webkit-fill-available;padding:15px 10px}.timer-item-wrapper[_ngcontent-%COMP%]{flex-direction:column}.timer-item-wrapper[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%], .timer-item-wrapper[_ngcontent-%COMP%]   .timer-wrapper[_ngcontent-%COMP%]{width:-webkit-fill-available;padding:10px}.mat-button-toggle[_ngcontent-%COMP%]{font-size:13px}#exam-filter[_ngcontent-%COMP%]{padding:10px 0}}[_nghost-%COMP%]     .mdc-fab{width:100px;height:100px}[_nghost-%COMP%]     .mdc-text-field--filled{background-color:transparent}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}"]}),n})();var f=a(1074),x=a(4692);let q=(()=>{class n{constructor(t,o,r,s,c){this.router=t,this.examService=o,this._bottomSheet=r,this.dialogRef=s,this.histories=c,this.score=0,this.total=0}ngOnInit(){this.score=this.histories.filter(t=>1==t.isCorrect).length,this.total=this.histories.length}openBottomSheet(){this._bottomSheet.open(w),this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(g.O),e.Y36(h.ch),e.Y36(f.so),e.Y36(f.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-score"]],decls:17,vars:2,consts:[["id","score"],[1,"score-container"],[1,"score-label"],[1,"circle"],[1,"frac"],[1,"symbol"],[1,"bottom"],[1,"action-container"],["mat-flat-button","","color","primary",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._uU(3,"YOUR SCORE"),e.qZA(),e.TgZ(4,"mat-icon"),e._uU(5,"emoji_events"),e.qZA(),e.TgZ(6,"div",3)(7,"div",4)(8,"span"),e._uU(9),e.qZA(),e.TgZ(10,"span",5),e._uU(11,"/"),e.qZA(),e.TgZ(12,"span",6),e._uU(13),e.qZA()()(),e.TgZ(14,"div",7)(15,"button",8),e.NdJ("click",function(){return o.openBottomSheet()}),e._uU(16," Start Over "),e.qZA()()()()),2&t&&(e.xp6(9),e.Oqu(o.score),e.xp6(4),e.Oqu(o.total))},dependencies:[d.lW,x.Hw],styles:[".score-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px}button.mat-primary[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:18px;color:#fff;border-radius:0;text-shadow:1px 1px 1px rgba(0,0,0,.45)}.frac[_ngcontent-%COMP%]{display:inline-block;position:relative;vertical-align:middle;letter-spacing:.001em;text-align:center}.frac[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;padding:.1em;font-size:30px;font-weight:500;font-family:Bebas Neue}.frac[_ngcontent-%COMP%]   span.bottom[_ngcontent-%COMP%]{border-top:thin solid black}.frac[_ngcontent-%COMP%]   span.symbol[_ngcontent-%COMP%]{display:none}.circle[_ngcontent-%COMP%]{width:100px;height:100px;border:5px solid #387a5c;border-radius:50%;position:relative;display:flex;justify-content:center;align-items:center}.score-label[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px 0;font-size:24px;font-weight:500;font-family:Bebas Neue}.action-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:20px 0}.mat-icon[_ngcontent-%COMP%]{height:50px;width:50px;font-size:50px}#score[_ngcontent-%COMP%]{padding:20px 0}"]}),n})();var P=a(1408),F=a(8658),j=a(5992),u=a(8922),U=a(7937),N=a(7452);function J(n,i){if(1&n&&(e.TgZ(0,"mat-icon"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.isAnswer?"check":"close")}}let Q=(()=>{class n{constructor(t){this.examService=t,this.isAnswer=!1,this.isChoosen=!1,this.isFirstAnswer=!1}ngOnInit(){this.examService.onFirstChoosenAnswer().subscribe(t=>{this.isFirstAnswer=!0,this.isAnswer=this.answer===this.choice}),this.hasAnsweredHistory()&&this.history.choosenAnswer===this.choice||this.hasAnsweredHistory()&&this.answer===this.choice?(this.isFirstAnswer=!0,this.isChoosen=!0,this.isAnswer=this.answer===this.choice):this.hasAnsweredHistory()&&(this.isFirstAnswer=!0)}chooseAnswer(){this.canChoose()&&(this.isChoosen=!0,this.examService.firstChoiceSubject.next({isCorrect:this.answer===this.choice,itemNo:this.itemNo,choosenAnswer:this.choice}))}hasAnsweredHistory(){return this.history&&null!=this.history.isCorrect}canChoose(){return!this.isFirstAnswer}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-choice"]],inputs:{choice:"choice",answer:"answer",ishome:"ishome",itemNo:"itemNo",history:"history"},decls:7,vars:6,consts:[[1,"card-container",3,"click"],[1,"home"],[1,"choice-container"],[1,"letter"],[4,"ngIf"],[1,"choice"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.chooseAnswer()}),e.TgZ(1,"mat-card",1)(2,"div",2)(3,"div",3),e.YNc(4,J,2,1,"mat-icon",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6),e.qZA()()()()),2&t&&(e.xp6(1),e.ekj("correct",o.isAnswer)("wrong",o.isChoosen&&o.isFirstAnswer&&!o.isAnswer),e.xp6(3),e.Q6J("ngIf",o.isChoosen||o.isAnswer),e.xp6(2),e.Oqu(o.choice))},dependencies:[p.O5,N.a8,x.Hw],styles:["mat-card[_ngcontent-%COMP%]{cursor:pointer;padding:25px 16px;background-color:#dbd0e4}mat-icon[_ngcontent-%COMP%]{margin-right:10px}.choice-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.choice-container[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%]{font-size:18px;font-weight:500;white-space:pre-line;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.choice-container[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]{display:flex;align-items:center}mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;background-color:#c56a1980}.correct[_ngcontent-%COMP%]{background-color:var(--header)!important}.wrong[_ngcontent-%COMP%]{background-color:var(--warn)!important}.home[_ngcontent-%COMP%]{padding:12px}.home[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%]{font-size:16px}"]}),n})();const Y=function(){return["/copyright-policy"]};let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-desc-welcome"]],decls:10,vars:2,consts:[["id","description"],[1,"logo-wrapper"],[1,"content"],["aria-label","Copyright Policy",3,"routerLink"],[1,"logo"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0),e._UZ(1,"div",1),e.TgZ(2,"div",2),e._uU(3," We are your ultimate destination for a comprehensive and free board exam reviewer. Whether you're preparing for Licensure Examination for Teachers (LET) or Civil Service Exam (CSE), our website offers a vast collection of high-quality questions sourced from various reliable resources (see our "),e.TgZ(4,"a",3),e._uU(5,"copyright policy"),e.qZA(),e._uU(6,"). Our mission is to empower aspiring professionals with the knowledge and confidence they need to excel in their exams and achieve their career goals. Get ready to ace your exams with "),e.TgZ(7,"span",4),e._uU(8,"Pass That Board"),e.qZA(),e._uU(9," - your trusted study companion! "),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("routerLink",e.DdM(1,Y)))},dependencies:[l.rH],styles:["#description[_ngcontent-%COMP%]{padding:25px 0}.title-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.logo-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.logo-subtitle[_ngcontent-%COMP%]{position:absolute;font-family:Satisfy,sans-serif;font-size:20px;bottom:0}"]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-desc-drills"]],decls:9,vars:0,consts:[["id","drill-desc"],[1,"content-card"],[1,"topic"],[1,"logo"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h4",2),e._uU(3,"FREE LET and CSE EXAM DRILLS"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Prepare confidently for your upcoming exams with our expertly crafted practice tests, designed to sharpen your knowledge and test-taking skills. Whether you're a prospective teacher or government employee, our extensive collection of exam drills will help you excel and achieve your career goals. Get ready to conquer your exams with "),e.TgZ(6,"span",3),e._uU(7,"Pass That Board"),e.qZA(),e._uU(8,"\xa0free exam drills. "),e.qZA()()())},styles:["#drill-desc[_ngcontent-%COMP%]{padding:25px 0}"]}),n})(),I=(()=>{class n{constructor(t){this.examService=t,this.coverages=[]}ngOnInit(){this.examService.getExamCoverage().subscribe(t=>this.coverages=t.data)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-desc-coverage"]],decls:12,vars:0,consts:[["id","cse-coverage"],[1,"content-card"],[1,"topic"],["id","let-coverage"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h4",2),e._uU(3,"Civil Service Exam"),e.qZA(),e.TgZ(4,"p"),e._uU(5," The Civil Service Exam (CSE) in the Philippines is a comprehensive examination administered by the Civil Service Commission (CSC) to assess the qualifications of individuals aspiring to work in the civil service or government positions. The CSE consists of two levels: the Career Service Professional Examination (CSE-PPT) and the Career Service Subprofessional Examination (CSE-SPE) "),e.qZA()()(),e.TgZ(6,"section",3)(7,"div",1)(8,"h4",2),e._uU(9,"Licensure Exam for Teachers"),e.qZA(),e.TgZ(10,"p"),e._uU(11," The Licensure Exam for Teachers (LET) in the Philippines is a comprehensive examination that assesses the knowledge and competencies of individuals aspiring to become professional teachers. The LET is administered by the Professional Regulation Commission (PRC) in the Philippines and consists of two parts: the General Education (GenEd) and the Professional Education (ProfEd) components. "),e.qZA()()())},styles:["#cse-coverage[_ngcontent-%COMP%], #let-coverage[_ngcontent-%COMP%]{padding:25px 0}"]}),n})();function R(n,i){if(1&n&&(e.TgZ(0,"div",14),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.current.major[1])}}function B(n,i){1&n&&(e.TgZ(0,"div",15),e._UZ(1,"mat-spinner"),e.qZA())}function H(n,i){if(1&n&&e._UZ(0,"app-choice",18),2&n){const t=i.$implicit,o=e.oxw(2);e.Q6J("choice",t)("answer",o.current.answer)("ishome",o.ishome)("itemNo",o.current_item)("history",o.history)}}function L(n,i){if(1&n&&(e.TgZ(0,"mat-accordion")(1,"mat-expansion-panel",16)(2,"mat-expansion-panel-header")(3,"mat-panel-description"),e._uU(4),e.qZA()(),e.YNc(5,H,1,5,"app-choice",17),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("expanded",!0)("disabled",!0)("hideToggle",!0),e.xp6(3),e.hij(" ",t.current.question," "),e.xp6(1),e.Q6J("ngForOf",t.current.choices)}}const W=[{path:"",component:(()=>{class n{constructor(t,o,r,s,c,_){this.examService=t,this.activatedRoute=o,this.router=r,this._bottomSheet=s,this._snackBar=c,this.dialog=_,this.questionnaires=[],this.filter={major:"",coverage:[],items:50,timer:0,program:""},this.isloading=!1,this.isEnd=!1,this.ishome=!1,this.isPrompted=!1,this.isShowExplanation=!1,this.histories=[],this.current_item=1,this.nextskipped=1}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{this.resetValues(),this.queryParamsHandling(t)}),this.examService.onFirstChoosenAnswer().subscribe(t=>{this.histories.push({isCorrect:t.isCorrect,itemNo:t.itemNo,choosenAnswer:t.choosenAnswer}),this.isShowExplanation=!0,this.questionnaires.length===this.histories.length&&this.openDialog(q,this.histories)}),this.ishome="/"===this.router.url}next(){this.questionnaires.length==this.histories.length&&(this.isEnd=!0),this.current_item>this.histories.length&&!this.isPrompted&&(this.isPrompted=!0),this.getQuestion(this.current_item+1)}back(){this.getQuestion(this.current_item-1)}gotoSkippedQuestion(){const t=this.questionnaires.length,o=this.histories.map(c=>c.itemNo);let r=[];for(let c=this.nextskipped;c<=t;c++)o.includes(c)||r.push(c);r.sort((c,_)=>_-c);let s=r.pop();this.nextskipped=r.length?r.pop():1,s&&this.getQuestion(s)}getQuestion(t){this.current_item=t,this.current=this.questionnaires[this.current_item-1],this.history=this.getHistory(),this.isShowExplanation=!!this.history}getExamQuestionnaires(){this.isloading=!0,this.examService.getExams(this.filter).subscribe({next:t=>{this.questionnaires=t.data,this.current=this.questionnaires[this.current_item-1]},error:t=>console.log(t),complete:()=>this.isloading=!1})}getHistory(){return this.histories.filter(t=>t.itemNo==this.current_item)[0]}openBottomSheet(){this._bottomSheet.open(w,{ariaLabel:"Exam Filter",panelClass:"custom-bottom-sheet"})}openExplainDialog(){this.openDialog(F.N,this.current.explanation)}openReportQuestionDialog(){this.openDialog(P.J,this.current)}openDialog(t,o){this.dialog.open(t,{data:o,width:"400px"}).afterClosed().subscribe(s=>{t===P.J&&"close"===s&&this._snackBar.open("Success sending Report. Thank you","",{duration:3e3})})}resetValues(){this.histories=[],this.current_item=1,this.isShowExplanation=!1}queryParamsHandling(t){this.filter.coverage=t.coverage?Array.isArray(t.coverage)?t.coverage:[t.coverage]:[],this.filter.items=t.items&&parseInt(t.items)>0?t.items:50,this.filter.timer=t.timer?t.timer:0,this.filter.major=t.major?t.major:"",this.filter.program=t.program?t.program:"Education",this.getExamQuestionnaires()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.O),e.Y36(l.gz),e.Y36(l.F0),e.Y36(h.ch),e.Y36(j.ux),e.Y36(f.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-exam"]],decls:31,vars:9,consts:[[1,"logo-title"],["id","drills"],[1,"score-container"],["mat-flat-button","","color","primary",3,"click"],["class","chip",4,"ngIf"],[1,"spacer"],["class","loader",4,"ngIf","ngIfElse"],["display",""],[1,"actions"],["mat-icon-button","","aria-label","Show Explanation",3,"disabled","click"],["aria-hidden","false","aria-label","report button","fontIcon","flag","color","warn",1,"report",3,"click"],["mat-icon-button","","aria-label","Back",3,"disabled","click"],["mat-icon-button","","aria-label","Go to skipped question",3,"disabled","click"],["mat-icon-button","","aria-label","Next",3,"disabled","click"],[1,"chip"],[1,"loader"],[3,"expanded","disabled","hideToggle"],[3,"choice","answer","ishome","itemNo","history",4,"ngFor","ngForOf"],[3,"choice","answer","ishome","itemNo","history"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e._uU(1,"Pass That Board"),e.qZA(),e.TgZ(2,"section",1)(3,"div",2)(4,"button",3),e.NdJ("click",function(){return o.openBottomSheet()}),e._uU(5,"SELECT CATEGORIES"),e.qZA(),e.YNc(6,R,2,1,"div",4),e._UZ(7,"span",5),e.TgZ(8,"span"),e._uU(9),e.qZA()(),e.YNc(10,B,2,0,"div",6),e.YNc(11,L,6,5,"ng-template",null,7,e.W1O),e.TgZ(13,"div",8)(14,"button",9),e.NdJ("click",function(){return o.openExplainDialog()}),e.TgZ(15,"mat-icon"),e._uU(16,"question_answer"),e.qZA()(),e.TgZ(17,"mat-icon",10),e.NdJ("click",function(){return o.openReportQuestionDialog()}),e.qZA(),e._UZ(18,"div",5),e.TgZ(19,"button",11),e.NdJ("click",function(){return o.back()}),e.TgZ(20,"mat-icon"),e._uU(21,"arrow_back"),e.qZA()(),e.TgZ(22,"button",12),e.NdJ("click",function(){return o.gotoSkippedQuestion()}),e.TgZ(23,"mat-icon"),e._uU(24,"move_up"),e.qZA()(),e.TgZ(25,"button",13),e.NdJ("click",function(){return o.next()}),e.TgZ(26,"mat-icon"),e._uU(27,"arrow_forward"),e.qZA()()()(),e._UZ(28,"app-desc-welcome")(29,"app-desc-drills")(30,"app-desc-coverage")),2&t){const r=e.MAs(12);e.xp6(6),e.Q6J("ngIf",o.current),e.xp6(3),e.AsE("",o.current_item,"/",o.questionnaires.length,""),e.xp6(1),e.Q6J("ngIf",o.isloading)("ngIfElse",r),e.xp6(4),e.Q6J("disabled",!o.isShowExplanation),e.xp6(5),e.Q6J("disabled",o.current_item<=1),e.xp6(3),e.Q6J("disabled",!o.isPrompted),e.xp6(3),e.Q6J("disabled",o.current_item+1>o.questionnaires.length)}},dependencies:[p.sg,p.O5,u.pp,u.ib,u.yz,u.u4,d.lW,d.RK,x.Hw,U.Ou,Q,z,D,I],styles:["#drills[_ngcontent-%COMP%]{padding:25px 0}.score-container[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:25px 0}.score-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:500}button.mat-primary[_ngcontent-%COMP%], button.mat-warn[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:18px;color:#fff;border-radius:0;text-shadow:1px 1px 1px rgba(0,0,0,.45)}.loader[_ngcontent-%COMP%]{display:flex;height:300px;justify-content:center;align-items:center}  .mat-mdc-dialog-container{--mdc-dialog-container-color: #c9e4d9}  .mat-mdc-snack-bar-container{--mdc-snackbar-container-color: var(--header)}mat-expansion-panel[_ngcontent-%COMP%]{background-color:#ebefec}.chip[_ngcontent-%COMP%]{background:#7eb19c;font-size:12px;border-radius:30px;padding:4px 10px;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:20px 24px;height:max-content}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{white-space:pre-line}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:#000;padding:0 12px}  .mat-expansion-panel-body{display:flex;flex-direction:column;gap:10px}.report[_ngcontent-%COMP%]{cursor:pointer}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.logo-title[_ngcontent-%COMP%]{font-family:Permanent Marker,sans-serif;font-size:50px;color:var(--header);text-align:center;padding:20px 0 10px}@media screen and (max-width: 420px){button.mat-primary[_ngcontent-%COMP%], button.mat-warn[_ngcontent-%COMP%]{font-size:14px}.logo-title[_ngcontent-%COMP%]{font-size:40px;padding:20px 0 0}}"]}),n})()}];let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(W),l.Bz]}),n})();var X=a(6281);let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,X.q,G,m.UX,m.u5]}),n})()}}]);