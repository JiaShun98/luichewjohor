"use strict";(self.webpackChunkluichewjohor=self.webpackChunkluichewjohor||[]).push([[803],{3803:(L,h,F)=>{F.r(h),F.d(h,{HomeModule:()=>I});var m=F(6895),r=F(433),s=F(1779),f=F(4466),d=F(9363),v=F(5861),A=F(5843),u=F(4650),Z=F(5698),C=F(4004);class _{constructor(o,e,t,n,a,E,l){this.images=o,this.title=e,this.name=t,this.date=n,this.seq=a,this.description=E,this.key=l}}var q=F(8646),b=F(2248);let g=(()=>{class i{constructor(e,t){this.db=e,this.uploadFileService=t,this.chairmanBasePath="/chairman",this.fileUploadFirebaseLst=[],this.chairmanRef=e.list(this.chairmanBasePath)}getChairManList(){return this.chairmanRef.snapshotChanges().pipe((0,Z.q)(1),(0,C.U)(e=>e.map(t=>({key:t.payload.key,...t.payload.val()}))),(0,C.U)(e=>e.sort((t,n)=>t.seq.localeCompare(n.seq))))}getAllChairman(){return this.chairmanRef}storeChairman(e,t){this.db.list(this.chairmanBasePath).push(new _([],e.title,e.name,e.date,e.seq,e.description,null)).then(n=>{const a=this.chairmanBasePath+"/"+n.key;console.log(a),this.uploadFileService.upload(t,a,"images")})}updateChairman(e,t){this.db.list(this.chairmanBasePath).update(e,t)}deleteChairmanDatabase(e){return this.db.list(this.chairmanBasePath+"/"+e).remove()}deleteChairman(e){this.deleteChairmanDatabase(e).catch(t=>console.log(t)),this.uploadFileService.deleteFileStorage(e,this.chairmanBasePath),console.log("Deleted ID"+e)}}return i.\u0275fac=function(e){return new(e||i)(u.LFG(q.KQ),u.LFG(b.I))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function T(i,o){if(1&i){const e=u.EpF();u.TgZ(0,"div",0)(1,"div",26),u._UZ(2,"img",27),u.qZA(),u.TgZ(3,"div",28)(4,"button",29),u.NdJ("click",function(){const a=u.CHM(e).index,E=u.oxw();return u.KtG(E.onDeleteImage(a))}),u.TgZ(5,"span",30),u._uU(6," Delete"),u.qZA()()(),u.TgZ(7,"label"),u._uU(8),u.qZA()()}if(2&i){const e=o.$implicit,t=o.index;u.xp6(1),u.Q6J("formGroupName",t),u.xp6(1),u.Q6J("src",e.value.result,u.LSH)("alt",e.value.name),u.xp6(6),u.hij(" ",e.value.name,"")}}function U(i,o){if(1&i&&(u.TgZ(0,"option",31),u._uU(1),u.qZA()),2&i){const e=o.$implicit;u.Q6J("value",e.seq),u.xp6(1),u.Oqu(e.seq)}}function y(i,o){1&i&&(u.TgZ(0,"div",32)(1,"sup"),u._uU(2,"*"),u.qZA(),u._uU(3,"Please select your seq "),u.qZA())}let p=(()=>{class i{constructor(e,t,n,a){this.fb=e,this.homeService=t,this.route=n,this.router=a,this.editMode=!1,this.images=[],this.image="",this.chairman=[]}ngOnDestroy(){}ngOnInit(){this.currentSeq="0",this.image="",this.images=[],this.chairman=[],this.editMode=!1,this.route.params.subscribe(e=>{this.id=e.id,this.editMode=null!=e.id,this.initForm()})}initForm(){this.chairmanForm=this.fb.group({images:this.fb.array([]),title:new r.NI("",r.kI.required),name:new r.NI("",r.kI.required),date:new r.NI("",r.kI.required),description:new r.NI(""),seq:"0"}),this.subscription=this.homeService.getChairManList().subscribe(e=>{if(this.chairman=e,this.editMode){let t=this.chairman.find(n=>n.key==this.id);this.updateForm(t)}else this.chairman.push({key:"",date:"",description:"",images:[],name:"",seq:this.chairman.length.toString(),title:""}),this.seq.setValue((this.chairman.length-1).toString()),this.currentSeq=(this.chairman.length-1).toString();console.log(this.chairman)})}updateForm(e){if(e.title&&this.chairmanForm.get("title").patchValue(e.title),e.name&&this.chairmanForm.get("name").patchValue(e.name),e.date&&this.chairmanForm.get("date").patchValue(e.date),e.description&&this.chairmanForm.get("description").patchValue(e.description),e.images)for(let t of e.images)this.uploadExistingFile(t,"images");this.seq.setValue(e.seq),this.currentSeq=e.seq}get imagesControls(){if(this.chairmanForm&&this.chairmanForm.get("images"))return this.chairmanForm.get("images").controls}uploadPhoto(e){let t=e.target.files;if(t){for(let a of t){let E=new FileReader;this.images.push(new A.p(a,a.type,a.name)),E.onload=l=>{this.createImage(l.target.result,a.name,"images")},E.readAsDataURL(a)}this.image=this.images.map(a=>a.name).join(",")}}createImage(e,t,n){console.log(this.chairmanForm.get(n)),this.chairmanForm.get(n).push(new r.cw({result:new r.NI(e,r.kI.required),name:new r.NI(t,r.kI.required)}))}getBase64ImageFromUrl(e,t,n){var a=this;return(0,v.Z)(function*(){let l=yield(yield fetch(e)).blob();return new Promise((N,J)=>{let c=new FileReader;c.addEventListener("load",function(){N(c.result)},!1),c.onerror=()=>J(a),c.readAsDataURL(l),a.images.push(new A.p(new File([l],t),n,t,e)),a.image=a.images.map(H=>H.name).join(",")})})()}uploadExistingFile(e,t){this.getBase64ImageFromUrl(e.url,e.name,e.type).then(n=>this.createImage(n,e.name,t)).catch(n=>console.error(n))}onSubmit(){let e=this.chairmanForm.value;this.editMode&&(this.currentSeq!=e.seq&&this.exchangeSeq(e.seq),this.homeService.deleteChairman(this.id)),this.homeService.storeChairman(e,this.images),setTimeout(()=>{this.onCancel()},2e3)}onCancel(){this.image="",this.images=[],this.editMode=!1,this.router.navigate(["../../"],{relativeTo:this.route})}exchangeSeq(e){let t=this.chairman.find(a=>a.seq==e),n=t.key;t.seq=this.currentSeq,t.key=null,this.homeService.updateChairman(n,t)}changeSeq(e){this.seq.setValue(e.target.value)}get seq(){return this.chairmanForm.get("seq")}onDeleteImage(e){this.chairmanForm.get("images").removeAt(e),this.images.splice(e,1),this.image=this.images.map(t=>t.name).join(",")}onDelete(){this.homeService.deleteChairman(this.id),this.onCancel()}}return i.\u0275fac=function(e){return new(e||i)(u.Y36(r.qu),u.Y36(g),u.Y36(s.gz),u.Y36(s.F0))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-chairman-edit"]],decls:55,vars:8,consts:[[1,"row"],[1,"col-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-danger",3,"disabled","click"],["formArrayName","images",1,"container-fluid"],["class","row",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],["id","image","type","file","accept",".png, .jpeg,.jpg","name","image","hidden","true",3,"change"],["imagesUploader",""],[1,"form-group"],["for","title"],["type","text","id","title","formControlName","title",1,"form-control"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","date"],["type","text","id","date","formControlName","date",1,"form-control"],["for","description"],["type","text","id","description","formControlName","description",1,"form-control"],[1,"col-1"],["for","seq"],[1,"col-7"],["aria-label",".form-select-md example","formControlName","seq","id","seq",1,"form-select","form-select-md","mb-3",3,"change"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],[1,"col-3",3,"formGroupName"],[1,"img",3,"src","alt"],[1,"col-3","delete"],["type","button",1,"btn","btn-light",3,"click"],["id","boot-icon",1,"bi","bi-trash",2,"color","rgb(255, 0, 0)"],[3,"value"],[1,"invalid-feedback"]],template:function(e,t){if(1&e){const n=u.EpF();u.TgZ(0,"div",0)(1,"div",1)(2,"form",2),u.NdJ("ngSubmit",function(){return t.onSubmit()}),u.TgZ(3,"div",0)(4,"div",1)(5,"button",3),u._uU(6," Save "),u.qZA(),u.TgZ(7,"button",4),u.NdJ("click",function(){return t.onCancel()}),u._uU(8," Cancel "),u.qZA(),u.TgZ(9,"button",5),u.NdJ("click",function(){return t.onDelete()}),u._uU(10," Delete "),u.qZA()()(),u.TgZ(11,"div",6)(12,"div",0)(13,"label"),u._uU(14,"Image"),u.qZA(),u.YNc(15,T,9,4,"div",7),u.qZA()(),u.TgZ(16,"div")(17,"button",8),u.NdJ("click",function(){u.CHM(n);const E=u.MAs(22);return E.value="",u.KtG(E.click())}),u._uU(18," Browse "),u.qZA(),u.TgZ(19,"span"),u._uU(20),u.qZA()(),u.TgZ(21,"input",9,10),u.NdJ("change",function(E){return t.uploadPhoto(E)}),u.qZA(),u.TgZ(23,"div",0)(24,"div",1)(25,"div",11)(26,"label",12),u._uU(27,"Title"),u.qZA(),u._UZ(28,"input",13),u.qZA()()(),u.TgZ(29,"div",0)(30,"div",1)(31,"div",11)(32,"label",14),u._uU(33,"Name"),u.qZA(),u._UZ(34,"input",15),u.qZA()()(),u.TgZ(35,"div",0)(36,"div",1)(37,"div",11)(38,"label",16),u._uU(39,"Date"),u.qZA(),u._UZ(40,"input",17),u.qZA()()(),u.TgZ(41,"div",0)(42,"div",1)(43,"div",11)(44,"label",18),u._uU(45,"Description"),u.qZA(),u._UZ(46,"input",19),u.qZA()()(),u.TgZ(47,"div",0)(48,"div",20)(49,"label",21),u._uU(50,"Sequence"),u.qZA()(),u.TgZ(51,"div",22)(52,"select",23),u.NdJ("change",function(E){return t.changeSeq(E)}),u.YNc(53,U,2,2,"option",24),u.qZA()(),u.YNc(54,y,4,0,"div",25),u.qZA()()()()}2&e&&(u.xp6(2),u.Q6J("formGroup",t.chairmanForm),u.xp6(3),u.Q6J("disabled",!t.chairmanForm.valid),u.xp6(4),u.Q6J("disabled",null!=t.chairmanForm.value.key),u.xp6(6),u.Q6J("ngForOf",t.imagesControls),u.xp6(5),u.AsE(" ",t.images.length," files have been uploaded ( ",t.image," ) "),u.xp6(33),u.Q6J("ngForOf",t.chairman),u.xp6(1),u.Q6J("ngIf",null==t.seq.errors?null:t.seq.errors.required))},dependencies:[m.sg,m.O5,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE],styles:[".row[_ngcontent-%COMP%]{margin-bottom:10px}.container[_ngcontent-%COMP%]{margin-bottom:30px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:100%}.delete[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;min-height:50px}textarea[_ngcontent-%COMP%]{width:100%;height:100%}.col-12[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:20px}"]}),i})();var B=F(5087);function w(i,o){if(1&i&&(u.TgZ(0,"div"),u._UZ(1,"img",6),u.qZA()),2&i){const e=o.$implicit;u.xp6(1),u.s9C("alt",e.name),u.Q6J("src",e.url,u.LSH)}}const S=function(i){return[i]};let x=(()=>{class i{constructor(e){this.authService=e,this.user=null}ngOnInit(){this.user=null,this.user=this.authService.getCurrentUser(),console.log(this.user)}}return i.\u0275fac=function(e){return new(e||i)(u.Y36(B.e))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-chairman-detail"]],inputs:{chairman:"chairman"},decls:22,vars:8,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",3,"routerLink"],[1,"row"],[1,"col-2"],[4,"ngFor","ngForOf"],[1,"col-10"],[1,"col"],[1,"img-responsive",3,"src","alt"]],template:function(e,t){1&e&&(u.TgZ(0,"a",0)(1,"div",1)(2,"div",2),u.YNc(3,w,2,2,"div",3),u.qZA(),u.TgZ(4,"div",4)(5,"div",1)(6,"div",5)(7,"strong"),u._uU(8),u.qZA()()(),u.TgZ(9,"div",1)(10,"div",5),u._uU(11),u.qZA()(),u.TgZ(12,"div",1)(13,"div",5),u._uU(14),u.qZA()(),u._UZ(15,"br"),u.TgZ(16,"div",1)(17,"div",5),u._uU(18," \u529f\u7ee9 \uff1a "),u.qZA()(),u.TgZ(19,"div",1)(20,"div",5),u._uU(21),u.qZA()()()()()),2&e&&(u.Q6J("routerLink",u.VKq(6,S,"chairman/"+t.chairman.key)),u.xp6(3),u.Q6J("ngForOf",t.chairman.images),u.xp6(5),u.Oqu(t.chairman.title),u.xp6(3),u.hij(" ",t.chairman.name," "),u.xp6(3),u.hij(" (",t.chairman.date,") "),u.xp6(7),u.hij(" ",t.chairman.description," "))},dependencies:[m.sg,s.rH,s.Od],styles:["a[_ngcontent-%COMP%]{margin-bottom:20px;cursor:pointer}a.disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}img[_ngcontent-%COMP%]{width:150px;height:150px;object-fit:scale-down}.row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}"]}),i})();function O(i,o){if(1&i){const e=u.EpF();u.TgZ(0,"div",1)(1,"div",13)(2,"button",14),u.NdJ("click",function(){u.CHM(e);const n=u.oxw();return u.KtG(n.onAddChairman())}),u._uU(3,"New Chairman"),u.qZA()()()}}function M(i,o){1&i&&u._UZ(0,"app-chairman-detail",15),2&i&&u.Q6J("chairman",o.$implicit)}let P=(()=>{class i{constructor(e,t,n,a){this.homeService=e,this.authService=t,this.router=n,this.route=a,this.user=null,this.chairmans=[]}ngOnDestroy(){this.subscription.unsubscribe()}ngOnInit(){this.retrieveCulture()}retrieveCulture(){this.subscription=this.homeService.getAllChairman().snapshotChanges().pipe((0,C.U)(e=>e.map(t=>({key:t.payload.key,...t.payload.val()})))).subscribe(e=>{e.sort((t,n)=>t.seq.localeCompare(n.seq)),this.chairmans=e,this.user=this.authService.getCurrentUser(),console.log(this.user)})}onAddChairman(){this.router.navigate(["chairman/new"],{relativeTo:this.route})}}return i.\u0275fac=function(e){return new(e||i)(u.Y36(g),u.Y36(B.e),u.Y36(s.F0),u.Y36(s.gz))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-home-list"]],decls:47,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],["src","assets/img/HomePageHeader.png",1,"img-responsive"],[1,"figure","w-50","float-start","m-3"],["src","assets/img/HomePageImage.jpg","alt","HomePageImage.jpg",1,"figure-img","img-fluid","rounded","img-thumbnail"],[1,"figure-caption","text-center"],["class","row",4,"ngIf"],[1,"col"],[1,"header-img"],["src","assets/img/headerLogo.png","alt","ChairmanHeaderLogo",1,"img-responsive"],[1,"header-text"],[3,"chairman",4,"ngFor","ngForOf"],[1,"col-12"],[1,"btn","btn-success",3,"click"],[3,"chairman"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0)(1,"div",1)(2,"div",2),u._UZ(3,"img",3),u.qZA(),u.TgZ(4,"div",2)(5,"figure",4),u._UZ(6,"img",5),u.TgZ(7,"figcaption",6),u._uU(8,"1995\u5e748\u67087\u65e5 - \u9ebb\u5761\u96f7\u5dde\u4f1a\u9986\u540c\u4e61\u8054\u8c0a\u5927\u4f1a\u7559\u5f71"),u.qZA()(),u.TgZ(9,"div",2)(10,"div",1)(11,"div",2)(12,"h2"),u._uU(13,"\u67d4\u4f5b\u5dde\u96f7\u5dde\u4f1a\u9986\u53f2\u7565"),u.qZA()()()(),u.TgZ(14,"p"),u._uU(15,"\u516c\u51431913\u5e74\uff0c\u524d\u6e05\u4eba\u58eb\u90d1\u8302\u5170\u5148\u8d24\u5728\u9ebb\u5761\u53d1\u8d77\u7ec4\u7ec7\u96f7\u5dde\u5e2e\uff0c\u9886\u5bfc\u96f7\u5dde\u4eba\u3001\u4fdd\u62a4\u96f7\u5dde\u4eba\u4ee5\u53ca\u66ff\u540c\u4e61\u89e3\u51b3\u7ea0\u7eb7\u3002\u5728\u6c11\u56fd\u516b\u5e74\uff0c\u96f7\u5dde\u5e2e\u9886\u8896\u4eec\u5728\u5e86\u8d3a\u9ebb\u5761\u5e7f\u4e1c\u4f1a\u9986\u6210\u7acb\u65f6\uff0c\u89c1\u5404\u8272\u4eba\u90fd\u6709\u81ea\u5df1\u7684\u4f1a\u9986\uff0c\u8fde\u5546\u4f1a\u4e5f\u7ec4\u7ec7\u4ff1\u4e50\u90e8\u3002\u4fbf\u5c06\u5e2e\u6539\u4e3a\u4f1a\u9986\uff0c\u5b9a\u540d\u4e3a\u9ebb\u5761\u96f7\u5dde\u4f1a\u9986\uff0c\u96f7\u5dde\u5e2e\u5b9e\u4e43\u96f7\u5dde\u4f1a\u9986\u7684\u524d\u8eab\u3002\u5f53\u5e74\u96f7\u4fa8\u9886\u8896\u4e3a\u90d1\u8302\u5170\u3001\u9648\u5176\u7965\u3001\u9648\u5584\u5e86\u3001\u9648\u81ea\u7965\u3001\u5434\u56fd\u5e73\u3001\u6768\u4e9a\u5347\u3001\u5e84\u4e9a\u6807\u3001\u90d1\u90a6\u5723\u3001\u9648\u5176\u5f70\u7b49\uff0c\u5b83\u4eec\u9664\u4e86\u534f\u52a9\u96f7\u4fa8\uff0c\u4e5f\u4e3a\u7b79\u5efa\u4f1a\u9986\u800c\u52aa\u529b\u3002 "),u.qZA(),u.TgZ(16,"p"),u._uU(17,"\u5728\u6c11\u56fd\u5341\u4e09\u5e74\u4e03\u6708\u5341\u4e00\u65e5\uff0c\u90d1\u8302\u5170\u5148\u8d24\u7ec8\u672a\u80fd\u5b8c\u6210\u5927\u5fd7\u800c\u897f\u5f52\uff0c\u5176\u4f59\u96f7\u4fa8\u9886\u8896\u9648\u5584\u5e86\u3001\u674e\u660c\u4e94\u3001\u9648\u5176\u5f70\u7b49\u3002\u5728\u6c11\u56fd\u5341\u4e94\u5e74\u5373\u516c\u51431925\u5e74\u91cd\u65b0\u51fa\u53d1\uff0c\u5f81\u5f97\u540c\u4e61\u9648\u6c38\u795d\u732e\u51fa\u9ebb\u5761\u4e94\u9a6c\u8def\u3001\u5373\u4eca\u65e5JalanArab\u95e8\u724c76\u53f7\uff0c\u7ea6\u4e94\u5343\u591a\u65b9\u5c3a\u4e4b\u5730\u4f5c\u4e3a\u5efa\u9986\u4e4b\u7528\u3002 "),u.qZA(),u.TgZ(18,"p"),u._uU(19,"\u5728\u516c\u51431932\u5e74\uff0c\u5411\u653f\u5e9c\u63d0\u5448\u65b0\u7684\u7ec4\u7ec7\u7ae0\u7a0b\uff0c\u800c\u57281934\u5e744\u670814\u65e5\u83b7\u5f97\u67d4\u4f5b\u5dde\u534e\u6c11\u653f\u52a1\u53f8\u6279\u51c6\uff0c\u5728\u9ebb\u5761\u73b0\u5740\u4e0a\u5efa\u8d77\u4e86\u4e00\u5ea7\u4e8c\u697c\u72ec\u7acb\u5f0f\u4f1a\u9986\uff0c\u697c\u4e0b\u662f\u795e\u6bbf\uff0c\u5b89\u6709\u516b\u4ed9\u684c\uff0c\u53ef\u4f9b\u5f00\u4f1a\u7528\u3002\u697c\u4e0a\u6709\u540e\u623f\u548c\u524d\u623f\uff0c\u662f\u4f9b\u96f7\u4fa8\u501f\u5bbf\u7528\u3002\u90a3\u65f6\u50cf\u8fd9\u6837\u7684\u5efa\u7b51\u7269\uff0c\u5728\u4e94\u9a6c\u8def\uff0c\u53ef\u8bf4\u53ea\u6b64\u4e00\u5bb6\u3002 "),u.qZA(),u.TgZ(20,"p"),u._uU(21,"\u516c\u51431934\u5e749\u670811\u65e5\uff0c\u4f1a\u9986\u4e3e\u884c\u843d\u6210\u5f00\u5e55\u5178\u793c\uff0c\u8fc7\u540e\u4fbf\u4ee5\u6b64\u7eaa\u5ff5\u65e5\u5e86\u795d\u5468\u5e74\u3002\u5f53\u65f6\u4e3b\u5e2d\u4e3a\u9648\u5584\u5e86\uff0c\u9648\u5584\u5e86\u5148\u8d24\u4e4b\u540e\u63a5\u4efb\u4e3b\u5e2d\u7684\u662f\u9648\u6c38\u795d\u3002\u5230\u9648\u70b3\u7965\u4efb\u4e3b\u5e2d\u65f6\uff0c\u5f00\u59cb\u5e7f\u62db\u67d4\u4f5b\u5dde\u5185\u540c\u4e61\u6210\u4e3a\u4f1a\u5458\uff0c\u5e76\u5c06\u9ebb\u5761\u96f7\u5dde\u4f1a\u9986\u6539\u540d\u4e3a\u67d4\u5c5e\u9ebb\u5761\u96f7\u5dde\u4f1a\u9986\uff0c\u610f\u5373\u67d4\u4f5b\u5dde\u96f7\u5dde\u540c\u4e61\u5728\u9ebb\u5761\u7684\u4f1a\u9986\u3002 "),u.qZA(),u.TgZ(22,"p"),u._uU(23,"\u7531\u4e8e\u4f1a\u5458\u4eba\u6570\u65e5\u76ca\u589e\u52a0\uff0c\u539f\u6709\u4f1a\u9986\u5df2\u4e0d\u6577\u5e94\u7528\uff0cI960\u5e74\u53d1\u8d77\u8d2d\u4e70\u65b0\u4f1a\u6240\u7b79\u6b3e\u8fd0\u52a8\u3002\u83b7\u5f97\u7b26\u4e4b\u7530\u4e61\u8d24\u5728\u7cbe\u795e\u548c\u8d22\u529b\u65b9\u9762\u7684\u5168\u9762\u652f\u6301\u3002\u8d39\u65f6\u516b\u8f7d\uff0c\u5171\u8017\u8d39\u516b\u4e07\u4f59\u5143\uff0c\u65b0\u53a6\u7ec8\u4e8e\u5728\u519c\u5386\u5df3\u9149\u5e74\u56db\u6708\u4e8c\u5341\u4e03\u65e5\u843d\u6210\uff0c\u4f4d\u4e8e\u4e1d\u4e1d\u8857\u95e8\u724c46\u53f7\u3002\u8d2d\u4e70\u8fd9\u5ea7\u65b0\u4f1a\u9986\u4f5c\u4e3a\u884c\u653f\u697c\uff0c\u6bcf\u4e2a\u540c\u4e61\u90fd\u5c3d\u4e86\u6700\u5927\u7684\u80fd\u529b\uff0c\u6700\u52b3\u82e6\u529f\u9ad8\u7684\u662f\u9648\u5fb7\u901a\u548c\u738b\u4e9a\u4e09\uff0c\u5f53\u65f6\u53ea\u6709\u4ed6\u4eec\u5404\u6709\u4e00\u8f86minor\u79c1\u5bb6\u8f66\uff0c\u5230\u5916\u5730\u52df\u6350\u90fd\u7528\u4ed6\u4eec\u7684\u8f66\u3002 "),u.qZA(),u.TgZ(24,"p"),u._uU(25,"\u7b79\u6b3e\u5927\u529f\u81e3\u8ba1\u6709\uff1a\u7b26\u4e4b\u7530\u3001\u8c22\u6587\u745e\u3001\u9648\u70b3\u7965\u3001\u5e84\u5b5d\u7eaf\u3001\u5e84\u4e9a\u4e4c\u3001\u8c22\u4e91\u817e\u3001\u9648\u7ecd\u5bcc\u3001\u9648\u57f9\u8363\u3001\u8bb8\u660e\u66f0\u3001\u674e\u5d19\u820c\u3001\u8bb8\u5149\u7ef4\u3001\u5434\u65e5\u5174\u3001\u90b1\u5b50\u81e3\u3001\u9ec4\u88d5\u8058\u7b49\u4eba\u3002 "),u.qZA(),u.TgZ(26,"p"),u._uU(27,"\u516c\u51431969\u5e744\u670827\u65e5\u65b0\u53a6\u884c\u653f\u697c\u6b63\u5f0f\u542f\u7528\uff0c\u9002\u90225\u670813\u65e5\uff0c\u79cd\u65cf\u51b2\u7a81\uff0c\u6ca1\u6709\u4e3e\u884c\u4efb\u4f55\u5e86\u795d\u4eea\u5f0f\u3002\u65b0\u4efb\u4e3b\u5e2d\u8c22\u6587\u745e\u5bf9\u4f1a\u9986\u4e0d\u5408\u65f6\u5b9c\u7684\u7ae0\u7a0b\u6761\u6587\u63d0\u51fa\u4fee\u6539\uff0c\u516c\u51431974\u5e74\u8bb8\u4e9a\u6743\u5728\u8463\u4e8b\u4f1a\u63d0\u51fa\u6210\u7acb\u5956\u52b1\u91d1\u5c0f\u7ec4\u3002 "),u.qZA(),u.TgZ(28,"p"),u._uU(29,"\u516c\u51431994\u5e74\u8c22\u6587\u745e\u9000\u4f11\uff0c\u8bb8\u4e9a\u6743\u4f17\u671b\u6240\u5f52\u88ab\u9009\u4e3a\u4e3b\u5e2d\uff0c\u4fbf\u6210\u7acb\u4f1a\u5458\u5c40\uff0c\u4fee\u6539\u7ae0\u7a0b\u5c06\u67d4\u5c5e\u9ebb\u5761\u96f7\u5dde\u4f1a\u9986\u4fee\u6b63\u4e3a\u67d4\u4f5b\u5dde\u96f7\u5dde\u4f1a\u9986\u3002\u53d6\u6d88\u666e\u901a\u4f1a\u5458\u7c4d\uff0c\u6539\u4e3a\u6c38\u4e45\u4f1a\u5458\u7c4d\u3002\u53d6\u6d88\u4f1a\u5458\u5e74\u6350\u3001\u548c\u6240\u6709\u9999\u6cb9\u6350\u3002\u91cd\u65b0\u8ba2\u5236\u5956\u52b1\u91d1\u7ec6\u5219\uff0c\u9664\u5b66\u4e1a\u6210\u7ee9\u5956\u5916\uff0c\u53e6\u8bbe\u5b66\u672f\u5956\uff0c\u4f53\u80b2\u5956\u3001\u548c\u6770\u51fa\u6210\u7ee9\u5956\u3002\u4e5f\u5b9a\u4e8e\u519c\u5386\u6b63\u6708\u521d\u4e00\u4e0b\u5348\u4e00\u65f6\uff0c\u8f6e\u6d41\u5728\u5404\u533a\u4e3e\u884c\u65b0\u6625\u5927\u56e2\u62dc\u4ee5\u8054\u7edc\u5404\u5730\u540c\u4e61\u3002 "),u.qZA(),u.TgZ(30,"p"),u._uU(31,"2003 \u5e74\u8463\u4e8b\u4f1a\u5bfb\u6c42\u4f1a\u5458\u5927\u4f1a\u901a\u8fc7\u8bae\u6848\uff0c\u52a8\u7528\u4f1a\u9986\u5b58\u6b3e\u5c06\u4e94\u9a6c\u8def\u65e7\u9986\u6539\u5efa\u4e3a\u5546\u4e1a\u5927\u53a6\uff0c\u4ee5\u589e\u52a0\u6536\u5165\uff0c\u9020\u798f\u540c\u4e61\u3002\u7ed3\u679c\u83b7\u5f97\u4e00\u81f4\u901a\u8fc7\uff0c\u8463\u4e8b\u4f1a\u4fbf\u7d27\u9523\u5bc6\u9f13\u5546\u8ba8\u7b56\u5212\uff0c\u8fdb\u884c\u7533\u8bf7\u624b\u7eed\u3002\u5efa\u53a6\u56fe\u6d4b\u6279\u51c6\u540e\uff0c\u7531\u4e3b\u5e2d\u8bb8\u4e9a\u6743\u548c\u5efa\u59d4\u4f1a\u4e3b\u5e2d\u9648\u59da\u6749\u7387\u9886\u8463\u4e8b\u4f1a\u6210\u5458\u5728 2-9-2003 \u5e74\u65e9\u4e0a\u5409\u65f6\u4e3e\u884c\u52a8\u571f\u4eea\u5f0f\u3002\u65b0\u5546\u4e1a\u5927\u53a6\u5b9a\u540d\u4e3a\u96f7\u5dde\u5927\u53a6\u3002\u96f7\u5dde\u5927\u53a6\u56db\u4e2a\u5927\u5b57\u662f\u4e66\u6cd5\u5bb6\u6f58\u6c38\u660e\u540c\u4e61\u6240\u5199\u3002\u5927\u53a6\u4e8e30-6-2004 \u5e74\u7ae3\u5de5\uff0c\u4e8e28-11-2004 \u5e74\u606d\u8bf7\u536b\u751f\u90e8\u957f\u9ad8\u7ea7\u62ff\u7763\u8521\u9510\u660e\u56fd\u4f1a\u8bae\u5458\u53ca\u732e\u5730\u4eba\u540e\u88d4\u9648\u6625\u53d1\u4e61\u8d24\u8054\u5408\u4e3b\u6301\u5f00\u5e55\u4eea\u5f0f\u3002\u662f\u65e5\u65e9\u4e0a\u4e3e\u529e\u4e94\u9986\u4ea4\u6d41\u4f1a\u66a8\u96f7\u9752\u8bba\u575b\u3001\u665a\u4e0a\u5728\u5df4\u53e3\u8f14\u5357\u534e\u5c0f\u793c\u5802\u8bbe\u76db\u5927\u5bb4\u4f1a\u62db\u5f85\u8fd1 2000 \u540d\u6d77\u5185\u5916\u5609\u5bbe\u3002 "),u.qZA(),u.TgZ(32,"p"),u._uU(33,"2005 \u5e74\u7b2c\u516d\u4efb\u4e3b\u5e2d\u8bb8\u4e9a\u6743\u5378\u4efb\uff0c\u7b2c\u4e03\u4efb\u4e3b\u5e2d\u4e3a\u9648\u59da\u6749\uff082005- 2011)\uff0c\u73b0\u7b2c\u516b\u4efb\u4e3b\u5e2d\u662f\u5434\u52c7\u3002\u516c\u51432012\u5e74\u4f1a\u5458\u5927\u4f1a\u901a\u8fc7\u63d0\u6848\uff0c\u5728\u5cc7\u682a\u5df4\u8f96\u7269\u8272\u4e00\u5ea7\u4e24\u5c42\u697c\u5546\u5e97\uff0c\u697c\u4e0b\u51fa\u79df\uff0c\u697c\u4e0a\u4f5c\u4e3a\u540c\u4e61\u8054\u7edc\u6d3b\u52a8\u4e4b\u7528\u3002\u7ec8\u4e8e\u57282013\u5e74\uff0c\u4e70\u4e0b\u5728\u5cc7\u682a\u5df4\u8f96Jalan Shah Bandar \u4e00\u5ea7\u7406\u60f3\u7684\u5546\u4e1a\u5927\u53a6\uff0c\u5e76\u5b9a\u4e8e2014 \u5e74\u5e86\u795d\u4e00\u767e\u5468\u5e74\u9986\u5e86\u65f6\u4e3e\u884c\u5f00\u5e55\u5178\u793c\uff0c\u5e76\u542f\u52a8\u4e00\u4e2a\u6c38\u7eed\u7684\u767e\u4e07\u5143\u6e05\u5bd2\u5b50\u5f1f\u6559\u80b2\u57fa\u91d1\u8ba1\u5212\u3002 "),u.qZA(),u.TgZ(34,"p"),u._uU(35,"\u672c\u9986\u8463\u4e8b\u4f1a\u8ffd\u6eaf\u5386\u53f2\uff0c\u5148\u8d24\u57281913\u5e74\u521b\u7acb\u96f7\u5dde\u5e2e\uff0c\u968f\u540e\u6539\u540d\u6ce8\u518c\u4e3a\u96f7\u5dde\u4f1a\u9986\uff0c\u81f3\u4eca\u5df2\u6709\u4e00\u767e\u5468\u5c81\u77e3\u3002\u5982\u6b64\u5efa\u6811\uff0c\u58ee\u54c9\u96f7\u5dde\u540c\u4e61\uff01"),u.qZA()(),u.TgZ(36,"div",2),u._UZ(37,"hr"),u.qZA()(),u.YNc(38,O,4,0,"div",7),u.TgZ(39,"div",1)(40,"div",8)(41,"div",1)(42,"div",9),u._UZ(43,"img",10),u.TgZ(44,"p",11),u._uU(45,"\u5386\u5c4a\u4e3b\u5e2d"),u.qZA()(),u.YNc(46,M,1,1,"app-chairman-detail",12),u.qZA()()()()),2&e&&(u.xp6(38),u.Q6J("ngIf",null!=t.user),u.xp6(8),u.Q6J("ngForOf",t.chairmans))},dependencies:[m.sg,m.O5,x],styles:[".row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.header-text[_ngcontent-%COMP%]{display:inline-block;width:-moz-fit-content;width:fit-content;margin-left:5px;font-size:20px;text-align:left;font-weight:700}.header-img[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:auto;min-height:70px}"]}),i})(),D=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-home-edit"]],decls:2,vars:0,template:function(e,t){1&e&&(u.TgZ(0,"p"),u._uU(1,"home-edit works!"),u.qZA())}}),i})();const k=[{path:"new",component:D,canActivate:[d.a]},{path:":id",component:D,canActivate:[d.a]},{path:"chairman/new",component:p},{path:"chairman/:id",component:p},{path:"",component:P}];let I=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[m.ez,r.u5,s.Bz.forChild(k),f.m]}),i})()}}]);