"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8802],{23:(p,s,o)=>{o.r(s),o.d(s,{MaterialsPageModule:()=>O});var l=o(6895),d=o(433),c=o(9928),a=o(3250),t=o(4650),g=o(3985),f=o(5970),v=o(2043),M=o(1923),h=o(8471);function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"th",16),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"slice"),t.qZA(),t.TgZ(8,"td")(9,"a",17),t._uU(10),t.ALo(11,"slice"),t.qZA()(),t.TgZ(12,"td",18)(13,"div",19)(14,"button",20),t._UZ(15,"ion-icon",21),t._uU(16,"Modifica"),t.qZA()(),t.TgZ(17,"div",19)(18,"button",22),t.NdJ("click",function(){const m=t.CHM(e).$implicit,C=t.oxw();return t.KtG(C.delete(m.id,m))}),t._UZ(19,"ion-icon",23),t._uU(20,"Elimina"),t.qZA()()()()}if(2&n){const e=i.$implicit,r=i.index;t.xp6(2),t.Oqu(r.toString()),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description.length>6?t.Dn7(7,6,e.description,0,20)+"..":e.description),t.xp6(3),t.s9C("href",e.link,t.LSH),t.xp6(1),t.Oqu(e.link.length>6?t.Dn7(11,10,e.link,0,20)+"..":e.link),t.xp6(4),t.MGl("routerLink","/add-material/",e.id,"")}}const P=[{path:"",component:(()=>{class n{constructor(e,r){this.ms=e,this.al=r,this.materials=this.ms.getMaterials()}ngOnInit(){}delete(e,r){this.al.confirmAlert("Sicuro di voler eleminare l'elemento selezionato").then(u=>{if(u.isConfirmed)this.ms.deleteMaterial(e,r);else if(u.isDenied)return;this.al.closeAlert()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.U),t.Y36(f.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-materials"]],decls:37,vars:3,consts:[[1,"wrapper"],[1,"main"],[1,"content"],[1,"container-fluid","p-0"],[1,"h3","mb-3"],[1,"row"],[1,"col-12"],["type","button","routerLink","/add-material/new",1,"btn","btn-add","float-end","m-3"],[1,"card"],[1,"card-body","p-0"],["data-mdb-perfect-scrollbar","true",1,"table-responsive","table-scroll",2,"position","relative","height","700px"],[1,"table","table-striped","mb-0"],[2,"background-color","#242D3B"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["scope","row",1,"align-middle"],["rel","nofollow","target","_blank",3,"href"],[1,"text-center"],[1,"m-1"],[1,"btn",3,"routerLink"],["name","create-outline"],[1,"btn",3,"click"],["name","trash-outline"]],template:function(e,r){1&e&&(t.TgZ(0,"ion-content")(1,"div",0),t._UZ(2,"app-sidenav"),t.TgZ(3,"div",1),t._UZ(4,"app-nav-backoffice"),t.TgZ(5,"main",2)(6,"div",3)(7,"h1",4)(8,"strong"),t._uU(9,"Pannello gestione"),t.qZA(),t._uU(10," Materiale"),t.qZA(),t.TgZ(11,"div",5)(12,"div",6)(13,"button",7),t._uU(14,"Nuovo materiale"),t.qZA()()(),t.TgZ(15,"div",5)(16,"div",6)(17,"div",8)(18,"div",9)(19,"div",10)(20,"table",11)(21,"thead",12)(22,"tr")(23,"th",13),t._uU(24,"#"),t.qZA(),t.TgZ(25,"th",13),t._uU(26,"Titolo"),t.qZA(),t.TgZ(27,"th",13),t._uU(28,"Descrizone"),t.qZA(),t.TgZ(29,"th",13),t._uU(30,"Link"),t.qZA(),t.TgZ(31,"th",14),t._uU(32,"Azioni"),t.qZA()()(),t.TgZ(33,"tbody"),t.YNc(34,Z,21,14,"tr",15),t.ALo(35,"async"),t.qZA()()()()()()()()(),t._UZ(36,"app-footer-backoffice"),t.qZA()()()),2&e&&(t.xp6(34),t.Q6J("ngForOf",t.lcZ(35,1,r.materials)))},dependencies:[l.sg,c.W2,c.gu,c.YI,v._,M.Q,h.s,a.rH,l.Ov,l.OU],styles:["table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff}.card[_ngcontent-%COMP%], .table-scroll[_ngcontent-%COMP%]{border-radius:.5rem}.table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:1rem}thead[_ngcontent-%COMP%]{top:0;position:sticky}.btn-add[_ngcontent-%COMP%]{background-color:#242d3b;color:#fff;width:150px;margin-right:0!important}"]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(P),a.Bz]}),n})();var A=o(5642);let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,d.u5,c.Pc,A.K,b]}),n})()},4371:(p,s,o)=>{o.d(s,{O:()=>c});var l=o(5525),d=o(4650);let c=(()=>{class a{constructor(){}getServerTimestamp(){return l.EK.now().seconds}}return a.\u0275fac=function(g){return new(g||a)},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);