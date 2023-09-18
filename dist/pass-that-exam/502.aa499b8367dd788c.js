"use strict";(self.webpackChunkpassThatExam=self.webpackChunkpassThatExam||[]).push([[502],{8502:(X,x,s)=>{s.r(x),s.d(x,{ExamModule:()=>W});var l=s(6814),p=s(1896),C=s(1173),g=s(1074),e=s(5879),h=s(343),v=s(8707),m=s(1075),u=s(4692);let w=(()=>{class n{constructor(t,o,a,c,r){this.router=t,this.examService=o,this._bottomSheet=a,this.dialogRef=c,this.histories=r,this.score=0,this.total=0}ngOnInit(){this.score=this.histories.filter(t=>1==t.isCorrect).length,this.total=this.histories.length}openBottomSheet(){this._bottomSheet.open(C.y),this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.F0),e.Y36(h.O),e.Y36(v.ch),e.Y36(g.so),e.Y36(g.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-score"]],decls:17,vars:2,consts:[["id","score"],[1,"score-container"],[1,"score-label"],[1,"circle"],[1,"frac"],[1,"symbol"],[1,"bottom"],[1,"action-container"],["mat-flat-button","","color","primary",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._uU(3,"YOUR SCORE"),e.qZA(),e.TgZ(4,"mat-icon"),e._uU(5,"emoji_events"),e.qZA(),e.TgZ(6,"div",3)(7,"div",4)(8,"span"),e._uU(9),e.qZA(),e.TgZ(10,"span",5),e._uU(11,"/"),e.qZA(),e.TgZ(12,"span",6),e._uU(13),e.qZA()()(),e.TgZ(14,"div",7)(15,"button",8),e.NdJ("click",function(){return o.openBottomSheet()}),e._uU(16," Start Over "),e.qZA()()()()),2&t&&(e.xp6(9),e.Oqu(o.score),e.xp6(4),e.Oqu(o.total))},dependencies:[m.lW,u.Hw],styles:[".score-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px}button.mat-primary[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:18px;color:#fff;border-radius:0;text-shadow:1px 1px 1px rgba(0,0,0,.45)}.frac[_ngcontent-%COMP%]{display:inline-block;position:relative;vertical-align:middle;letter-spacing:.001em;text-align:center}.frac[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;padding:.1em;font-size:30px;font-weight:500;font-family:Bebas Neue}.frac[_ngcontent-%COMP%]   span.bottom[_ngcontent-%COMP%]{border-top:thin solid black}.frac[_ngcontent-%COMP%]   span.symbol[_ngcontent-%COMP%]{display:none}.circle[_ngcontent-%COMP%]{width:100px;height:100px;border:5px solid #387a5c;border-radius:50%;position:relative;display:flex;justify-content:center;align-items:center}.score-label[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px 0;font-size:24px;font-weight:500;font-family:Bebas Neue}.action-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:20px 0}.mat-icon[_ngcontent-%COMP%]{height:50px;width:50px;font-size:50px}#score[_ngcontent-%COMP%]{padding:20px 0}"]}),n})();var _=s(1408),P=s(8658),b=s(5992),d=s(8922),M=s(7937),T=s(7913),Z=s(7452);function E(n,i){if(1&n&&(e.TgZ(0,"mat-icon"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.isAnswer?"check":"close")}}let A=(()=>{class n{constructor(t){this.examService=t,this.isAnswer=!1,this.isChoosen=!1,this.isFirstAnswer=!1}ngOnInit(){this.examService.onFirstChoosenAnswer().subscribe(t=>{this.isFirstAnswer=!0,this.isAnswer=this.answer===this.choice}),this.hasAnsweredHistory()&&this.history.choosenAnswer===this.choice||this.hasAnsweredHistory()&&this.answer===this.choice?(this.isFirstAnswer=!0,this.isChoosen=!0,this.isAnswer=this.answer===this.choice):this.hasAnsweredHistory()&&(this.isFirstAnswer=!0)}chooseAnswer(){this.canChoose()&&(this.isChoosen=!0,this.examService.firstChoiceSubject.next({isCorrect:this.answer===this.choice,itemNo:this.itemNo,choosenAnswer:this.choice}))}hasAnsweredHistory(){return this.history&&null!=this.history.isCorrect}canChoose(){return!this.isFirstAnswer}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-choice"]],inputs:{choice:"choice",answer:"answer",ishome:"ishome",itemNo:"itemNo",history:"history"},decls:7,vars:6,consts:[[1,"card-container",3,"click"],[1,"home"],[1,"choice-container"],[1,"letter"],[4,"ngIf"],[1,"choice"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.chooseAnswer()}),e.TgZ(1,"mat-card",1)(2,"div",2)(3,"div",3),e.YNc(4,E,2,1,"mat-icon",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6),e.qZA()()()()),2&t&&(e.xp6(1),e.ekj("correct",o.isAnswer)("wrong",o.isChoosen&&o.isFirstAnswer&&!o.isAnswer),e.xp6(3),e.Q6J("ngIf",o.isChoosen||o.isAnswer),e.xp6(2),e.Oqu(o.choice))},dependencies:[l.O5,Z.a8,u.Hw],styles:["mat-card[_ngcontent-%COMP%]{cursor:pointer;padding:25px 16px;background-color:#c9e4d9}mat-icon[_ngcontent-%COMP%]{margin-right:10px}.choice-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.choice-container[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%]{font-size:18px;font-weight:500;white-space:pre-line}.choice-container[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]{display:flex;align-items:center}mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;background-color:#c56a1980}.correct[_ngcontent-%COMP%]{background-color:var(--header)!important}.wrong[_ngcontent-%COMP%]{background-color:var(--warn)!important}.home[_ngcontent-%COMP%]{padding:12px}.home[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%]{font-size:16px}"]}),n})();const S=function(){return["/copyright-policy"]};let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-desc-welcome"]],decls:14,vars:2,consts:[["id","description"],[1,"divider"],[1,"logo-title"],[1,"sec-container"],[1,"content"],["aria-label","Copyright Policy",3,"routerLink"],[1,"logo-desc"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1),e._uU(2," WELCOME TO "),e.TgZ(3,"div",2),e._uU(4,"Pass That Board"),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4),e._uU(7," We are your ultimate destination for a comprehensive and free board exam reviewer. Whether you're preparing for Licensure Examination for Teachers (LET) or Civil Service Exam (CSE), our website offers a vast collection of high-quality questions sourced from various reliable resources (see our "),e.TgZ(8,"a",5),e._uU(9,"copyright policy"),e.qZA(),e._uU(10,"). Our mission is to empower aspiring professionals with the knowledge and confidence they need to excel in their exams and achieve their career goals. Get ready to ace your exams with "),e.TgZ(11,"span",6),e._uU(12,"Pass That Board"),e.qZA(),e._uU(13," - your trusted study companion! "),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("routerLink",e.DdM(1,S)))},dependencies:[p.rH],styles:["#description[_ngcontent-%COMP%]{padding:10px 0 50px}.sec-container[_ngcontent-%COMP%]{max-width:800px;width:90%;padding:0 5%;margin:auto;text-align:center}.divider[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:24px;font-weight:500;display:flex;justify-content:center;align-items:center;text-align:center}.content[_ngcontent-%COMP%]{padding:25px 0;font-size:16px;line-height:2}.logo-title[_ngcontent-%COMP%], .logo-desc[_ngcontent-%COMP%]{font-family:Caveat,sans-serif;font-size:28px;font-weight:500;color:var(--header);text-shadow:1px 1px 1px rgba(0,0,0,.45)}.logo-desc[_ngcontent-%COMP%]{font-size:20px}"]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-desc-drills"]],decls:9,vars:0,consts:[["id","drill-desc"],[1,"divider"],[1,"sec-container"],[1,"content"],[1,"logo-desc"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1),e._uU(2,"FREE LET and CSE EXAM DRILLS"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3),e._uU(5," Prepare confidently for your upcoming exams with our expertly crafted practice tests, designed to sharpen your knowledge and test-taking skills. Whether you're a prospective teacher or government employee, our extensive collection of exam drills will help you excel and achieve your career goals. Get ready to conquer your exams with "),e.TgZ(6,"span",4),e._uU(7,"Pass That Board"),e.qZA(),e._uU(8,"\xa0free exam drills. "),e.qZA()()())},styles:["#drill-desc[_ngcontent-%COMP%]{padding:10px 0}.sec-container[_ngcontent-%COMP%]{max-width:800px;width:90%;padding:0 5%;margin:auto;text-align:center}.divider[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:24px;font-weight:500;display:flex;justify-content:center;align-items:center;text-align:center}.content[_ngcontent-%COMP%]{padding:25px 0;font-size:16px;line-height:2}.logo-title[_ngcontent-%COMP%], .logo-desc[_ngcontent-%COMP%]{font-family:Caveat,sans-serif;font-size:28px;font-weight:500;color:var(--header);text-shadow:1px 1px 1px rgba(0,0,0,.45)}.logo-desc[_ngcontent-%COMP%]{font-size:20px}"]}),n})();var y=s(4002);let q=(()=>{class n{transform(t,o){return t.filter(a=>a.major==o)[0].coverage.sort()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"coveragefilter",type:n,pure:!0}),n})();function N(n,i){if(1&n&&(e.TgZ(0,"mat-chip-option",4),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.hij(" ",t," ")}}let D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-desc-coverage-list"]],inputs:{coverages:"coverages",major:"major"},decls:6,vars:5,consts:[[1,"wrapper"],[1,"subtitle"],["aria-label","civil service coverage"],["highlighted","",4,"ngFor","ngForOf"],["highlighted",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"mat-chip-listbox",2),e.YNc(4,N,2,1,"mat-chip-option",3),e.ALo(5,"coveragefilter"),e.qZA()()),2&t&&(e.xp6(2),e.hij("",o.major," Coverage"),e.xp6(2),e.Q6J("ngForOf",e.xi3(5,2,o.coverages,o.major)))},dependencies:[l.sg,y.z2,y.iO,q],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px 0}.mat-mdc-standard-chip[_ngcontent-%COMP%]{height:var(--mdc-chip-container-height, 24px);font-size:12px}.subtitle[_ngcontent-%COMP%]{display:flex;padding-bottom:10px;font-style:italic}"]}),n})();function z(n,i){if(1&n&&e._UZ(0,"app-desc-coverage-list",6),2&n){const t=e.oxw();e.Q6J("coverages",t.coverages)("major","Civil Service")}}function F(n,i){if(1&n&&e._UZ(0,"app-desc-coverage-list",6),2&n){const t=e.oxw();e.Q6J("coverages",t.coverages)("major","General Education")}}function J(n,i){if(1&n&&e._UZ(0,"app-desc-coverage-list",6),2&n){const t=e.oxw();e.Q6J("coverages",t.coverages)("major","Professional Education")}}let j=(()=>{class n{constructor(t){this.examService=t,this.coverages=[]}ngOnInit(){this.examService.getExamCoverage().subscribe(t=>this.coverages=t.data)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-desc-coverage"]],decls:15,vars:3,consts:[["id","cse-coverage"],[1,"sec-container"],[1,"title"],[1,"content"],[3,"coverages","major",4,"ngIf"],["id","let-coverage"],[3,"coverages","major"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._uU(3,"CIVIL SERVICE EXAM"),e.qZA(),e.TgZ(4,"div",3),e._uU(5," The Civil Service Exam (CSE) in the Philippines is a comprehensive examination administered by the Civil Service Commission (CSC) to assess the qualifications of individuals aspiring to work in the civil service or government positions. The CSE consists of two levels: the Career Service Professional Examination (CSE-PPT) and the Career Service Subprofessional Examination (CSE-SPE) "),e.qZA(),e.YNc(6,z,1,2,"app-desc-coverage-list",4),e.qZA()(),e.TgZ(7,"section",5)(8,"div",1)(9,"div",2),e._uU(10,"LICENSURE EXAM FOR TEACHERS"),e.qZA(),e.TgZ(11,"div",3),e._uU(12," The Licensure Exam for Teachers (LET) in the Philippines is a comprehensive examination that assesses the knowledge and competencies of individuals aspiring to become professional teachers. The LET is administered by the Professional Regulation Commission (PRC) in the Philippines and consists of two parts: the General Education (GenEd) and the Professional Education (ProfEd) components. "),e.qZA(),e.YNc(13,F,1,2,"app-desc-coverage-list",4),e.YNc(14,J,1,2,"app-desc-coverage-list",4),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.coverages.length),e.xp6(7),e.Q6J("ngIf",o.coverages.length),e.xp6(1),e.Q6J("ngIf",o.coverages.length))},dependencies:[l.O5,D],styles:["#cse-coverage[_ngcontent-%COMP%], #let-coverage[_ngcontent-%COMP%]{padding:20px 0}.sec-container[_ngcontent-%COMP%]{max-width:800px;width:90%;padding:0 5%;margin:auto;text-align:center}.title[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:24px;font-weight:500;display:flex;text-align:start}.content[_ngcontent-%COMP%]{padding:15px 0;font-size:16px;line-height:2;text-align:start}.logo-title[_ngcontent-%COMP%], .logo-desc[_ngcontent-%COMP%]{font-family:Caveat,sans-serif;font-size:28px;font-weight:500;color:var(--header);text-shadow:1px 1px 1px rgba(0,0,0,.45)}.logo-desc[_ngcontent-%COMP%]{font-size:20px}"]}),n})();function Q(n,i){1&n&&(e.TgZ(0,"div",14),e._UZ(1,"mat-spinner"),e.qZA())}function I(n,i){if(1&n&&e._UZ(0,"app-choice",17),2&n){const t=i.$implicit,o=e.oxw(2);e.Q6J("choice",t)("answer",o.current.answer)("ishome",o.ishome)("itemNo",o.current_item)("history",o.history)}}function Y(n,i){if(1&n&&(e.TgZ(0,"mat-accordion")(1,"mat-expansion-panel",15)(2,"mat-expansion-panel-header")(3,"mat-panel-description"),e._uU(4),e.qZA()(),e.YNc(5,I,1,5,"app-choice",16),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("expanded",!0)("disabled",!0)("hideToggle",!0),e.xp6(3),e.hij(" ",t.current.question," "),e.xp6(1),e.Q6J("ngForOf",t.current.choices)}}const R=[{path:"",component:(()=>{class n{constructor(t,o,a,c,r,f){this.examService=t,this.activatedRoute=o,this.router=a,this._bottomSheet=c,this._snackBar=r,this.dialog=f,this.questionnaires=[],this.filter={category:[],items:50,timer:0,program:""},this.isloading=!1,this.isEnd=!1,this.ishome=!1,this.isPrompted=!1,this.isShowExplanation=!1,this.histories=[],this.current_item=1,this.nextskipped=1}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{this.resetValues(),this.queryParamsHandling(t)}),this.examService.onFirstChoosenAnswer().subscribe(t=>{this.histories.push({isCorrect:t.isCorrect,itemNo:t.itemNo,choosenAnswer:t.choosenAnswer}),this.isShowExplanation=!0,this.questionnaires.length===this.histories.length&&this.openDialog(w,this.histories)}),this.ishome="/"===this.router.url}next(){this.questionnaires.length==this.histories.length&&(this.isEnd=!0),this.current_item>this.histories.length&&!this.isPrompted&&(this.isPrompted=!0),this.getQuestion(this.current_item+1)}back(){this.getQuestion(this.current_item-1)}gotoSkippedQuestion(){const t=this.questionnaires.length,o=this.histories.map(r=>r.itemNo);let a=[];for(let r=this.nextskipped;r<=t;r++)o.includes(r)||a.push(r);a.sort((r,f)=>f-r);let c=a.pop();this.nextskipped=a.length?a.pop():1,c&&this.getQuestion(c)}getQuestion(t){this.current_item=t,this.current=this.questionnaires[this.current_item-1],this.history=this.getHistory(),this.isShowExplanation=!!this.history}getExamQuestionnaires(){this.isloading=!0,this.examService.getExams(this.filter).subscribe({next:t=>{this.questionnaires=t.data,this.current=this.questionnaires[this.current_item-1]},error:t=>console.log(t),complete:()=>this.isloading=!1})}getHistory(){return this.histories.filter(t=>t.itemNo==this.current_item)[0]}openBottomSheet(){this._bottomSheet.open(C.y,{ariaLabel:"Exam Filter",panelClass:"custom-bottom-sheet"})}openExplainDialog(){this.openDialog(P.N,this.current.explanation)}openReportQuestionDialog(){this.openDialog(_.J,this.current)}openDialog(t,o){this.dialog.open(t,{data:o,width:"400px"}).afterClosed().subscribe(c=>{t===_.J&&"close"===c&&this._snackBar.open("Success sending Report. Thank you","",{duration:3e3})})}resetValues(){this.histories=[],this.current_item=1,this.isShowExplanation=!1}queryParamsHandling(t){this.filter.category=t.category?Array.isArray(t.category)?t.category:[t.category]:[],this.filter.items=t.items&&parseInt(t.items)>0?t.items:50,this.filter.timer=t.timer?t.timer:0,this.filter.program=t.program?t.program:"Education",this.getExamQuestionnaires()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.O),e.Y36(p.gz),e.Y36(p.F0),e.Y36(v.ch),e.Y36(b.ux),e.Y36(g.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-exam"]],decls:31,vars:8,consts:[["id","drills"],[1,"sec-container"],[1,"score-container"],["mat-flat-button","","color","primary",3,"click"],["aria-hidden","false","aria-label","report button","fontIcon","flag","color","warn",1,"report",3,"click"],[1,"spacer"],["class","loader",4,"ngIf","ngIfElse"],["display",""],[1,"actions"],["mat-icon-button","","aria-label","Show Explanation",3,"disabled","click"],["mat-icon-button","","aria-label","Back",3,"disabled","click"],["mat-icon-button","","aria-label","Go to skipped question",3,"disabled","click"],["mat-icon-button","","aria-label","Next",3,"disabled","click"],["id","footer"],[1,"loader"],[3,"expanded","disabled","hideToggle"],[3,"choice","answer","ishome","itemNo","history",4,"ngFor","ngForOf"],[3,"choice","answer","ishome","itemNo","history"]],template:function(t,o){if(1&t&&(e._UZ(0,"app-desc-welcome")(1,"app-desc-drills"),e.TgZ(2,"section",0)(3,"div",1)(4,"div",2)(5,"button",3),e.NdJ("click",function(){return o.openBottomSheet()}),e._uU(6," SELECT CATEGORIES "),e.qZA(),e.TgZ(7,"mat-icon",4),e.NdJ("click",function(){return o.openReportQuestionDialog()}),e.qZA(),e._UZ(8,"span",5),e.TgZ(9,"span"),e._uU(10),e.qZA()(),e.YNc(11,Q,2,0,"div",6),e.YNc(12,Y,6,5,"ng-template",null,7,e.W1O),e.TgZ(14,"div",8)(15,"button",9),e.NdJ("click",function(){return o.openExplainDialog()}),e.TgZ(16,"mat-icon"),e._uU(17,"question_answer"),e.qZA()(),e._UZ(18,"div",5),e.TgZ(19,"button",10),e.NdJ("click",function(){return o.back()}),e.TgZ(20,"mat-icon"),e._uU(21,"arrow_back"),e.qZA()(),e.TgZ(22,"button",11),e.NdJ("click",function(){return o.gotoSkippedQuestion()}),e.TgZ(23,"mat-icon"),e._uU(24,"move_up"),e.qZA()(),e.TgZ(25,"button",12),e.NdJ("click",function(){return o.next()}),e.TgZ(26,"mat-icon"),e._uU(27,"arrow_forward"),e.qZA()()()()(),e._UZ(28,"app-desc-coverage"),e.TgZ(29,"section",13),e._UZ(30,"app-footer"),e.qZA()),2&t){const a=e.MAs(13);e.xp6(10),e.AsE("",o.current_item,"/",o.questionnaires.length,""),e.xp6(1),e.Q6J("ngIf",o.isloading)("ngIfElse",a),e.xp6(4),e.Q6J("disabled",!o.isShowExplanation),e.xp6(4),e.Q6J("disabled",o.current_item<=1),e.xp6(3),e.Q6J("disabled",!o.isPrompted),e.xp6(3),e.Q6J("disabled",o.current_item+1>o.questionnaires.length)}},dependencies:[l.sg,l.O5,d.pp,d.ib,d.yz,d.u4,m.lW,m.RK,u.Hw,M.Ou,T.c,A,U,k,j],styles:[".sec-container[_ngcontent-%COMP%]{max-width:800px;width:90%;padding:0 5%;margin:auto;text-align:start}.program-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px 0 50px}.program-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:x-large}.program-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--header);width:70px;height:70px;font-size:70px}.score-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:15px 10px}.score-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;padding:20px 10px;gap:12px}button.mat-primary[_ngcontent-%COMP%], button.mat-warn[_ngcontent-%COMP%]{font-family:Bebas Neue;font-size:18px;color:#fff;border-radius:0;text-shadow:1px 1px 1px rgba(0,0,0,.45)}.loader[_ngcontent-%COMP%]{display:flex;height:300px;justify-content:center;align-items:center}  .mat-mdc-dialog-container{--mdc-dialog-container-color: #c9e4d9}  .mat-mdc-snack-bar-container{--mdc-snackbar-container-color: var(--header)}mat-expansion-panel[_ngcontent-%COMP%]{background-color:#e3f7ee}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:20px 24px;height:max-content}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{white-space:pre-line}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:#000;padding:0 12px}  .mat-expansion-panel-body{display:flex;flex-direction:column;gap:10px}.report[_ngcontent-%COMP%]{cursor:pointer}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.q-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:15px;padding:10px 0}@media screen and (max-width: 420px){button.mat-primary[_ngcontent-%COMP%], button.mat-warn[_ngcontent-%COMP%]{font-size:14px}.score-container[_ngcontent-%COMP%]{padding:15px 0}}"]}),n})()}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(R),p.Bz]}),n})();var L=s(9469),O=s(6223),H=s(8524);let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,L.q,B,O.UX,O.u5,H.m]}),n})()}}]);