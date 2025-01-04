"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5874],{5874:(R,b,o)=>{o.r(b),o.d(b,{OtpResetPasswordPageModule:()=>U});var p=o(177),P=o(4341),h=o(4742),f=o(8026),d=o(8359);class y extends d.yU{constructor(e,s){super()}schedule(e,s=0){return this}}const m={setInterval(i,e,...s){const{delegate:r}=m;return null!=r&&r.setInterval?r.setInterval(i,e,...s):setInterval(i,e,...s)},clearInterval(i){const{delegate:e}=m;return((null==e?void 0:e.clearInterval)||clearInterval)(i)},delegate:void 0};var a=o(7908);const c={now:()=>(c.delegate||Date).now(),delegate:void 0};class u{constructor(e,s=u.now){this.schedulerActionCtor=e,this.now=s}schedule(e,s=0,r){return new this.schedulerActionCtor(this,e).schedule(r,s)}}u.now=c.now;const C=new class O extends u{constructor(e,s=u.now){super(e,s),this.actions=[],this._active=!1}flush(e){const{actions:s}=this;if(this._active)return void s.push(e);let r;this._active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=s.shift());if(this._active=!1,r){for(;e=s.shift();)e.unsubscribe();throw r}}}(class g extends y{constructor(e,s){super(e,s),this.scheduler=e,this.work=s,this.pending=!1}schedule(e,s=0){var r;if(this.closed)return this;this.state=e;const n=this.id,l=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(l,n,s)),this.pending=!0,this.delay=s,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(l,this.id,s),this}requestAsyncId(e,s,r=0){return m.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,s,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return s;null!=s&&m.clearInterval(s)}execute(e,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,s);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,s){let n,r=!1;try{this.work(e)}catch(l){r=!0,n=l||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),n}unsubscribe(){if(!this.closed){const{id:e,scheduler:s}=this,{actions:r}=s;this.work=this.state=this.scheduler=null,this.pending=!1,(0,a.o)(r,this),null!=e&&(this.id=this.recycleAsyncId(s,e,null)),this.delay=null,super.unsubscribe()}}}),_=C;var A=o(1985),x=o(9470);var t=o(6276),S=o(8657),w=o(1626),k=o(225);function D(i,e){if(1&i&&(t.j41(0,"p",4),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&i){const s=t.XpG();t.R7$(1),t.SpI("Puedes solicitar un nuevo c\xf3digo en ",t.i5U(2,1,s.timer,"mm:ss"),"")}}function M(i,e){if(1&i&&(t.j41(0,"div",15),t.EFF(1),t.k0s()),2&i){const s=e.index,r=t.XpG();t.R7$(1),t.SpI(" ",r.otpArray[s]||""," ")}}function j(i,e){if(1&i){const s=t.RV6();t.j41(0,"button",11),t.bIt("click",function(){const l=t.eBV(s).$implicit,v=t.XpG();return t.Njj(v.addDigit(l))}),t.EFF(1),t.k0s()}if(2&i){const s=e.$implicit;t.R7$(1),t.JRh(s)}}const T=[{path:"",component:(()=>{var i;class e{constructor(r,n,l,v,G){this.router=r,this.alertService=n,this.menuCtrl=l,this.http=v,this.userDataService=G,this.otp="",this.otpArray=new Array(6).fill(""),this.numbers=[1,2,3,4,5,6,7,8,9,0],this.timer=0,this.timerSubscription=new d.yU,this.buttonText="Solicitar C\xf3digo",this.correctOtp="123456",this.isRequestingCode=!1,this.email=""}ngOnInit(){this.menuCtrl.enable(!1),this.email=this.userDataService.getEmail(),console.log("Email obtenido:",this.email)}ngOnDestroy(){this.timerSubscription&&this.timerSubscription.unsubscribe()}startTimer(r){this.timer=1e3*r,this.timerSubscription&&this.timerSubscription.unsubscribe(),this.timerSubscription=function F(i=0,e=C){return i<0&&(i=0),function E(i=0,e,s=_){let r=-1;return null!=e&&((0,x.m)(e)?s=e:r=e),new A.c(n=>{let l=function I(i){return i instanceof Date&&!isNaN(i)}(i)?+i-s.now():i;l<0&&(l=0);let v=0;return s.schedule(function(){n.closed||(n.next(v++),0<=r?this.schedule(void 0,r):n.complete())},l)})}(i,i,e)}(1e3).subscribe(()=>{this.timer>0?this.timer-=1e3:(this.timerSubscription&&this.timerSubscription.unsubscribe(),this.buttonText="Solicitar Nuevo C\xf3digo",this.isRequestingCode=!1)})}addDigit(r){this.otp.length<6&&(this.otp+=r.toString(),this.updateOtpArray())}removeDigit(){this.otp.length>0&&(this.otp=this.otp.slice(0,-1),this.updateOtpArray())}updateOtpArray(){for(this.otpArray=this.otp.split("");this.otpArray.length<6;)this.otpArray.push("")}clearOtpFields(){this.otp="",this.otpArray=new Array(6).fill("")}requestNewCode(){this.isRequestingCode=!0,this.buttonText="C\xf3digo Solicitado",this.clearOtpFields(),this.http.post("https://jsonplaceholder.typicode.com/posts",{email:this.email}).subscribe(()=>{this.startTimer(300),console.log("Nuevo c\xf3digo solicitado")},n=>{this.isRequestingCode=!1,this.buttonText="Solicitar C\xf3digo",console.error("Error al solicitar el c\xf3digo",n),this.alertService.presentErrorAlert("Error","No se pudo solicitar el c\xf3digo. Por favor, intenta nuevamente."),this.clearOtpFields()})}continue(){6===this.otp.length?this.otp===this.correctOtp?this.router.navigate(["/new-password"]):(this.alertService.presentErrorAlert("Error","El c\xf3digo ingresado es incorrecto."),this.clearOtpFields()):(this.alertService.presentErrorAlert("Advertencia","Por favor, ingresa un c\xf3digo de 6 d\xedgitos."),this.clearOtpFields())}}return(i=e).\u0275fac=function(r){return new(r||i)(t.rXU(f.Ix),t.rXU(S.u),t.rXU(h._t),t.rXU(w.Qq),t.rXU(k.w))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-otp-reset-password"]],decls:20,vars:6,consts:[[1,"background-general-interior","ion-padding",3,"fullscreen"],["routerLink","/reset-password",1,"custom-back-container"],["src","assets/images/left-chevron.png","alt","Back",1,"custom-back-icon"],["src","/assets/images/Logo.png",1,"logoHot"],[1,"labelOtp"],["class","labelOtp",4,"ngIf"],[1,"otp-container"],[1,"otp-inputs"],["class","otp-input",4,"ngFor","ngForOf"],[1,"number-pad"],["class","number-btn",3,"click",4,"ngFor","ngForOf"],[1,"number-btn",3,"click"],[1,"ion-padding"],["shape","round","expand","full","color","medium",3,"disabled","click"],["shape","round","expand","full","color","danger",1,"ion-margin-top",3,"click"],[1,"otp-input"]],template:function(r,n){1&r&&(t.j41(0,"ion-content",0)(1,"div",1),t.nrm(2,"img",2),t.k0s(),t.j41(3,"div"),t.nrm(4,"img",3),t.j41(5,"p",4),t.EFF(6,"Ingresa el codigo enviado a tu correo electronico"),t.k0s(),t.DNE(7,D,3,4,"p",5),t.k0s(),t.j41(8,"div",6)(9,"div",7),t.DNE(10,M,2,1,"div",8),t.k0s(),t.j41(11,"div",9),t.DNE(12,j,2,1,"button",10),t.j41(13,"button",11),t.bIt("click",function(){return n.removeDigit()}),t.EFF(14,"\u232b"),t.k0s()()(),t.j41(15,"div",12)(16,"ion-button",13),t.bIt("click",function(){return n.requestNewCode()}),t.EFF(17),t.k0s(),t.j41(18,"ion-button",14),t.bIt("click",function(){return n.continue()}),t.EFF(19,"Continuar"),t.k0s()()()),2&r&&(t.Y8G("fullscreen",!0),t.R7$(7),t.Y8G("ngIf",n.timer>0),t.R7$(3),t.Y8G("ngForOf",n.otpArray),t.R7$(2),t.Y8G("ngForOf",n.numbers),t.R7$(4),t.Y8G("disabled",n.timer>0||n.isRequestingCode),t.R7$(1),t.SpI(" ",n.buttonText," "))},dependencies:[p.Sq,p.bT,h.Jm,h.W9,h.N7,f.Wk,p.vh],styles:[".logoHot[_ngcontent-%COMP%]{margin-top:0vh}.otp-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px;border-radius:10px}.otp-inputs[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.otp-input[_ngcontent-%COMP%]{width:40px;height:40px;margin:0 5px;border:1px solid #ccc;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;background-color:#fff}.number-pad[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center;margin-bottom:20px}.number-btn[_ngcontent-%COMP%]{width:60px;height:60px;background-color:#593131;border:1px solid #555;color:#fff;font-size:24px;border-radius:10px;box-shadow:0 2px 4px #00000080}.number-btn[_ngcontent-%COMP%]:active{background-color:#555}.labelOtp[_ngcontent-%COMP%]{color:#fff;font-size:1.2rem;text-align:center}"]}),e})()}];let N=(()=>{var i;class e{}return(i=e).\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[f.iI.forChild(T),f.iI]}),e})(),U=(()=>{var i;class e{}return(i=e).\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[p.MD,P.YN,h.bv,w.q1,N]}),e})()},8657:(R,b,o)=>{o.d(b,{u:()=>f});var p=o(467),P=o(6276),h=o(4742);let f=(()=>{var d;class y{constructor(a){this.alertController=a}presentSuccessAlert(a,g,c){var u=this;return(0,p.A)(function*(){yield(yield u.alertController.create({header:a,message:g,cssClass:"successAlert",buttons:[{text:"Cerrar",cssClass:"btn-Cerrar",handler:()=>{c&&c()}}]})).present()})()}presentErrorAlert(a,g,c){var u=this;return(0,p.A)(function*(){yield(yield u.alertController.create({header:a,message:g,cssClass:"errorAlert",buttons:[{text:"Cerrar",cssClass:"btn-Cerrar",handler:()=>{c&&c()}}]})).present()})()}presentWarningAlert(a,g,c){var u=this;return(0,p.A)(function*(){yield(yield u.alertController.create({header:a,message:g,cssClass:"warningAlert",buttons:[{text:"Cerrar",cssClass:"btn-Cerrar",handler:()=>{c&&c()}}]})).present()})()}}return(d=y).\u0275fac=function(a){return new(a||d)(P.KVO(h.hG))},d.\u0275prov=P.jDH({token:d,factory:d.\u0275fac,providedIn:"root"}),y})()}}]);