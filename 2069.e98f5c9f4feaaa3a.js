"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2069],{2069:(b,c,r)=>{r.r(c),r.d(c,{HomePageModule:()=>k});var l=r(177),d=r(4341),a=r(4742),g=r(8026),e=r(6276),u=r(6161),m=r(7581);function p(o,i){if(1&o&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&o){const n=e.XpG();e.R7$(1),e.JRh(n.location)}}function f(o,i){1&o&&(e.j41(0,"span"),e.EFF(1,"Ubicaci\xf3n no disponible"),e.k0s())}function h(o,i){if(1&o){const n=e.RV6();e.j41(0,"ion-button",10),e.bIt("click",function(){e.eBV(n);const s=e.XpG();return e.Njj(s.toggleAddressForm())}),e.EFF(1,"Actualizar Direcci\xf3n"),e.k0s()}}function v(o,i){if(1&o){const n=e.RV6();e.j41(0,"div",11)(1,"ion-item",12)(2,"ion-label",13),e.EFF(3,"Direcci\xf3n"),e.k0s(),e.j41(4,"ion-input",14),e.bIt("ngModelChange",function(s){e.eBV(n);const M=e.XpG();return e.Njj(M.address=s)}),e.k0s()(),e.j41(5,"ion-button",10),e.bIt("click",function(){e.eBV(n);const s=e.XpG();return e.Njj(s.saveAddress())}),e.EFF(6),e.k0s()()}if(2&o){const n=e.XpG();e.R7$(4),e.Y8G("ngModel",n.address),e.R7$(2),e.JRh(n.addressSaved?"Actualizar Direcci\xf3n":"Guardar Direcci\xf3n")}}function F(o,i){1&o&&(e.j41(0,"div")(1,"video",15),e.nrm(2,"source",16),e.k0s()())}function P(o,i){1&o&&(e.j41(0,"div")(1,"video",15),e.nrm(2,"source",17),e.k0s()())}const _=[{path:"",component:(()=>{var o;class i{constructor(t){this.buttonDataService=t,this.address="",this.location=null,this.addressSaved=!1,this.showAddressForm=!1}ngOnInit(){this.loadAddress()}toggleAddressForm(){this.showAddressForm=!this.showAddressForm}saveAddress(){localStorage.setItem("address",this.address),this.location=this.address,this.address="",this.addressSaved=!0,this.showAddressForm=!1}loadAddress(){const t=localStorage.getItem("address");t&&(this.address="",this.location=t,this.addressSaved=!0)}getClickedButton(){return this.buttonDataService.getClickedButton()}}return(o=i).\u0275fac=function(t){return new(t||o)(e.rXU(u.g))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-home"]],decls:25,vars:7,consts:[[1,"background-general-interior",3,"fullscreen"],[1,"welcome-styles","ion-text-center","ion-margin-top"],["size","12"],[1,"location-container"],["name","location-outline"],[4,"ngIf"],[1,"address-section"],["expand","block","color","danger",3,"click",4,"ngIf"],["class","address-form ion-padding",4,"ngIf"],[1,"video-banner"],["expand","block","color","danger",3,"click"],[1,"address-form","ion-padding"],[1,"whiteLabel"],["position","floating"],["placeholder","Ingresa tu direcci\xf3n",3,"ngModel","ngModelChange"],["width","100%","height","auto","autoplay","","loop",""],["src","../../../assets/video/AppWorkers.mp4","type","video/mp4"],["src","../../../assets/video/AppHotel.mp4","type","video/mp4"]],template:function(t,s){1&t&&(e.j41(0,"ion-content",0),e.nrm(1,"app-button-menu-toggle"),e.j41(2,"ion-grid",1)(3,"ion-row")(4,"ion-col",2)(5,"h1"),e.EFF(6,"Bienvenid@"),e.k0s(),e.j41(7,"p"),e.EFF(8,"Direcci\xf3n donde prestar\xe1s tu servicio"),e.k0s()()(),e.j41(9,"ion-row")(10,"ion-col",2)(11,"div",3),e.nrm(12,"ion-icon",4),e.DNE(13,p,2,1,"span",5),e.DNE(14,f,2,0,"span",5),e.k0s()()(),e.j41(15,"ion-row")(16,"ion-col",2)(17,"div",6),e.DNE(18,h,2,0,"ion-button",7),e.DNE(19,v,7,2,"div",8),e.k0s()()(),e.j41(20,"ion-row")(21,"ion-col",2)(22,"div",9),e.DNE(23,F,3,0,"div",5),e.DNE(24,P,3,0,"div",5),e.k0s()()()()()),2&t&&(e.Y8G("fullscreen",!0),e.R7$(13),e.Y8G("ngIf",s.location),e.R7$(1),e.Y8G("ngIf",!s.location),e.R7$(4),e.Y8G("ngIf",!s.showAddressForm),e.R7$(1),e.Y8G("ngIf",s.showAddressForm),e.R7$(4),e.Y8G("ngIf","Worker"==s.getClickedButton()),e.R7$(1),e.Y8G("ngIf","Hotel"==s.getClickedButton()))},dependencies:[l.bT,d.BC,d.vS,a.Jm,a.hU,a.W9,a.lO,a.iq,a.$w,a.uz,a.he,a.ln,a.Gw,m.p],styles:[".location-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:20px;font-size:1.2em;color:#fff}ion-icon[_ngcontent-%COMP%]{margin-right:10px;font-size:1.5em;color:#fff}.video-banner[_ngcontent-%COMP%]{width:100%;overflow:hidden}video[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:10px}.address-section[_ngcontent-%COMP%]{margin-top:20px;text-align:center}.address-form[_ngcontent-%COMP%]{margin-top:20px}.welcome-styles[_ngcontent-%COMP%]{color:#fff}"]}),i})()}];let H=(()=>{var o;class i{}return(o=i).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[g.iI.forChild(_),g.iI]}),i})();var j=r(5553);let k=(()=>{var o;class i{}return(o=i).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[l.MD,d.YN,a.bv,H,j.h]}),i})()}}]);