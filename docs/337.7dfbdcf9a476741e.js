"use strict";(self.webpackChunkluichewjohor=self.webpackChunkluichewjohor||[]).push([[337],{337:(w,u,l)=>{l.r(u),l.d(u,{AuthModule:()=>A});var p=l(6895),r=l(433),d=l(1779),t=l(4650);let h=(()=>{class o{constructor(){this.close=new t.vpe}onClose(){this.close.emit()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return n.onClose()}),t.qZA(),t.TgZ(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return n.onClose()}),t._uU(6,"Close"),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(n.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:white;box-shadow:0 2px 8px rbga(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),o})(),m=(()=>{class o{constructor(e){this.viewContainerRef=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.s_b))},o.\u0275dir=t.lG2({type:o,selectors:[["","appPlaceholder",""]]}),o})();var g=l(5087);function f(o,s){}function b(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",4,5),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.MAs(1),c=t.oxw();return t.KtG(c.onSubmit(i))}),t.TgZ(2,"div",6)(3,"label",7),t._uU(4,"E-Mail"),t.qZA(),t._UZ(5,"input",8),t.qZA(),t.TgZ(6,"div",6)(7,"label",9),t._uU(8,"Password"),t.qZA(),t._UZ(9,"input",10),t.qZA(),t.TgZ(10,"div")(11,"button",11),t._uU(12),t.qZA(),t.TgZ(13,"button",12),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSwitchMode())}),t._uU(14),t.qZA()()()}if(2&o){const e=t.MAs(1),n=t.oxw();t.xp6(11),t.Q6J("disabled",!e.valid),t.xp6(1),t.hij(" ",n.isLoginMode?"Login":"Sign Up"," "),t.xp6(2),t.hij(" Switch to ",n.isLoginMode?"Sign Up":"Login"," ")}}let v=(()=>{class o{constructor(e,n,i){this.authService=e,this.router=n,this.componentFactoryResolver=i,this.isLoginMode=!0,this.isLoading=!1,this.error=null}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(e){if(!e.valid)return;const n=e.value.email,i=e.value.password;let c;this.isLoading=!0,c=this.isLoginMode?this.authService.login(n,i):this.authService.signup(n,i),c.subscribe(a=>{console.log(a),this.isLoading=!1,this.router.navigate(["/home"])},a=>{console.log(a),this.error=a,this.showErrorAlert(a),this.isLoading=!1}),e.reset()}onHandleError(){this.error=null}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe()}showErrorAlert(e){const n=this.componentFactoryResolver.resolveComponentFactory(h),i=this.alertHost.viewContainerRef;i.clear();const c=i.createComponent(n);c.instance.message=e,this.closeSub=c.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),i.clear()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.e),t.Y36(d.F0),t.Y36(t._Vd))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth"]],viewQuery:function(e,n){if(1&e&&t.Gf(m,5),2&e){let i;t.iGM(i=t.CRH())&&(n.alertHost=i.first)}},decls:4,vars:1,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],[3,"ngSubmit",4,"ngIf"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-secondary",3,"disabled"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(e,n){1&e&&(t.YNc(0,f,0,0,"ng-template",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,b,15,3,"form",3),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngIf",!n.isLoading))},dependencies:[p.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.on,r.On,r.F,m],styles:["div[_ngcontent-%COMP%]{margin-bottom:10px}button[_ngcontent-%COMP%]{margin-right:5px}"]}),o})();var C=l(4466);let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,r.u5,d.Bz.forChild([{path:"",component:v}]),C.m]}),o})()}}]);