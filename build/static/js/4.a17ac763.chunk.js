(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{752:function(e,t,a){},757:function(e,t){},759:function(e,t){},794:function(e,t,a){"use strict";a.r(t);var n=a(68),l=a.n(n),r=a(131),c=a(24),i=a(17),s=a(0),o=a.n(s),m=a(54);a(645);var u=a(786),d=a(650),f=a(787),p=a(647),E=a(654),g=a(602),h=a(673),b=Object(u.a)(function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}});function v(e){var t=b();return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,null),o.a.createElement(d.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},o.a.createElement(p.a,{className:"columnlist"},o.a.createElement(g.a,{ref:e.ref,style:{fontSize:"22px"}},"Select Columns"),o.a.createElement(E.a,null),null!=e.columns?e.columns.map(function(t){return"email"!=t.Header.toLowerCase()&&""!=t.accessor?o.a.createElement(g.a,null,o.a.createElement(h.a,{name:t.Header,onChange:e.handleUpdate}),o.a.createElement("label",null,t.Header)):null}):null)))}a(771);var y=a(772),w=a(664),j=a(658),N=a(668),x=a(599),O=a(604),k=a(788),S=a(98),C=a(594);function I(e){return o.a.createElement(k.a,null,o.a.createElement("div",{className:"p-16 sm:p-24"},o.a.createElement("div",{className:"flex items-center justify-between overflow-hidden"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement(m.a,{delay:100},o.a.createElement(S.a,{variant:"h3",className:"flex"},"Subject: ",e.subject)))),o.a.createElement(E.a,{className:"my-16"}),o.a.createElement(m.a,{animation:"transition.slideUpIn",delay:200},o.a.createElement("div",null,o.a.createElement("div",{className:"flex items-start justify-between"},o.a.createElement("div",{className:"flex items-center justify-start"},o.a.createElement(C.a,{style:{color:"purple"}},"N"),o.a.createElement(S.a,{variant:"h5"},"Your Name"))),o.a.createElement(E.a,{className:"my-16"}),o.a.createElement("div",{class:"content-center"},o.a.createElement(S.a,{variant:"h5"},e.body),e.columns.map(function(e){return o.a.createElement(S.a,{variant:"h5"},e,":  value in sheet")}))))))}var T=a(686),B=a.n(T),L=Object(u.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}),P=o.a.forwardRef(function(e,t){return o.a.createElement(O.a,Object.assign({direction:"up",ref:t},e))});function R(e){var t=L(),a=o.a.useState(!0),n=Object(i.a)(a,2),l=n[0],r=(n[1],function(){e.setPreviewOpen(!1)});return o.a.createElement("div",null,console.log(e),o.a.createElement(w.a,{fullScreen:!0,open:l,onClose:r,TransitionComponent:P},o.a.createElement(j.a,{className:t.appBar},o.a.createElement(N.a,null,o.a.createElement(x.a,{edge:"start",color:"inherit",onClick:r,"aria-label":"close"},o.a.createElement(B.a,null)))),o.a.createElement(I,{columns:e.columns,body:e.body,subject:e.subject})))}var A=a(670),U=a(789),H=Object(A.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}),_=o.a.forwardRef(function(e,t){return o.a.createElement(O.a,Object.assign({direction:"up",ref:t},e))});function D(e){var t=H(),a=o.a.useState(!0),n=Object(i.a)(a,2),l=n[0],r=(n[1],function(){e.setOpenTutorial(!1)});return o.a.createElement("div",null,o.a.createElement(w.a,{fullScreen:!0,open:l,onClose:r,TransitionComponent:_},o.a.createElement(j.a,{className:t.appBar},o.a.createElement(N.a,null,o.a.createElement(x.a,{edge:"start",color:"inherit",onClick:r,"aria-label":"close"},o.a.createElement(B.a,null)))),o.a.createElement(U.a,null,o.a.createElement(S.a,{variant:"h5",gutterBottom:!0,style:{paddingLeft:200}},"You can click on the take tour button for taking a tour of the website and understand the working."),o.a.createElement(k.a,{style:{paddingLeft:200}},o.a.createElement(S.a,{variant:"h5",gutterBottom:!0,style:{paddingLeft:150}},"Step-1: Login using your ",o.a.createElement("strong",null,"college email ID"),".",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("img",{src:"static/images/1.png",alt:"",style:{width:750,height:525}}),o.a.createElement(S.a,{variant:"h5",gutterBottom:!0,style:{paddingLeft:75}},o.a.createElement("br",null),o.a.createElement("br",null),"Step-2: Click on the upload file button to view the sheet.",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("img",{src:"static/images/3.jpeg",alt:"",style:{width:750,height:525}}),o.a.createElement(S.a,{variant:"h5",gutterBottom:!0,style:{paddingLeft:70}},o.a.createElement("br",null),o.a.createElement("br",null),"Step-3: Set the Email subject and body of the email.",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("img",{src:"static/images/4.png",alt:"",style:{width:750,height:525,paddingRight:10}}),o.a.createElement("img",{src:"static/images/5.png",alt:"",style:{width:750,height:525}}),o.a.createElement(S.a,{variant:"h5",gutterBottom:!0},o.a.createElement("br",null),o.a.createElement("br",null),"Step-4: Check all the boxes which you want to send in the email.",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("img",{src:"static/images/6.png",alt:"",style:{width:750,height:525}}),o.a.createElement(S.a,{variant:"h5",gutterBottom:!0,style:{paddingLeft:150}},o.a.createElement("br",null),o.a.createElement("br",null),"Step-5: Click to preview the email.",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("img",{src:"static/images/7.png",alt:"",style:{width:750,height:525}}),o.a.createElement(S.a,{variant:"h5",gutterBottom:!0},o.a.createElement("br",null),o.a.createElement("br",null),"Step-6: Press Send email button and boom mails are send. "),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("img",{src:"static/images/8.png",alt:"",style:{width:750,height:525}}),o.a.createElement(S.a,{variant:"h5",gutterBottom:!0,style:{paddingLeft:70}},o.a.createElement("br",null),o.a.createElement("br",null),"Step-7: Press reset to get back to the original page."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("img",{src:"static/images/9.png",alt:"",style:{width:750,height:525}}),o.a.createElement(S.a,{variant:"h3",style:{color:"orange",justify:"center",paddingLeft:220},gutterBottom:!0},o.a.createElement("br",null),o.a.createElement("br",null),"Happy Mailing !!")))))}var F=a(791),M=a(662),Y=a(667),W=a(792),q=a(684),G=a.n(q),z=a(657),J=a(790),K=a(3),V=Object(A.a)(function(e){return{header:{height:600,background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)",color:e.palette.primary.contrastText},cardHeader:{backgroundColor:e.palette.primary[800],color:"white"}}});function X(){var e=V();return o.a.createElement("div",null,o.a.createElement("div",{className:Object(K.a)(e.header,"flex")},o.a.createElement("div",{className:"p-24 w-full max-w-2xl mx-auto"},o.a.createElement("div",{className:"text-center my-900 mx-24"},o.a.createElement(m.a,{animation:"transition.slideUpIn",duration:400,delay:200},o.a.createElement(S.a,{variant:"h3",style:{color:"orange"}},"About Us")),o.a.createElement(m.a,{duration:400,delay:600},o.a.createElement(S.a,{variant:"h6",color:"inherit",className:"opacity-75 mt-16 mx-auto max-w-1000"},"This simple and sleek tool has been developed at IIT Ropar as one of the deliverables in the course of  Development Engineering, under our very inspiring faculty ",o.a.createElement("b",null,"Dr. Puneet Goyal, Assistant Prof,CSE IIT Ropar"),".",o.a.createElement("br",null),o.a.createElement("br",null),"The tool is just an attempt to make the life of academic community easy, a lot of things are done by academic community in excel sheets, like putting the remarks of an assignment, sending the marks to students and what not, as this data is different for each recipient, it takes a lot of work, to send these data to specific recipients, This is where we can use this simple application."))))),o.a.createElement("div",{className:"-mt-192"},o.a.createElement("div",{className:"w-full max-w-2xl mx-auto"},o.a.createElement(m.b,{enter:{animation:"transition.slideUpBigIn"},className:"flex items-center justify-center flex-wrap"},o.a.createElement("div",{className:"w-full max-w-320 sm:w-1/3 p-12"},o.a.createElement(z.a,{raised:!0,square:!0},o.a.createElement(J.a,{className:"p-32"},o.a.createElement("div",{className:"flex justify-center"},o.a.createElement("div",{className:"flex items-end"},o.a.createElement(C.a,{src:"/static/images/python.jpeg",style:{width:100,height:100}}))),o.a.createElement(E.a,{className:"my-32"}),o.a.createElement("div",{className:"flex flex-col text-center "},o.a.createElement(S.a,{variant:"subtitle1",className:""},o.a.createElement("span",{className:"font-bold mr-10"},"Abhishek Kumar Gupta")),o.a.createElement("br",null),o.a.createElement(S.a,{variant:"subtitle1",className:""},"Pre Final Year"),o.a.createElement(S.a,{variant:"subtitle1",className:""},"CSE, IIT Ropar"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"flex justify-center pb-32"},o.a.createElement(Y.a,{target:"_blank",href:"https://www.linkedin.com/in/abhishek-kumar-gupta-9b7381176/",variant:"contained",color:"secondary",className:"w-128"},"LinkedIn")))))),o.a.createElement("div",{className:"w-full max-w-320 sm:w-1/3 p-12"},o.a.createElement(z.a,{raised:!0,square:!0},o.a.createElement(J.a,{className:"p-32"},o.a.createElement("div",{className:"flex justify-center"},o.a.createElement("div",{className:"flex items-end"},o.a.createElement(C.a,{src:"/static/images/divyanshu.jpeg",style:{width:100,height:100}}))),o.a.createElement(E.a,{className:"my-32"}),o.a.createElement("div",{className:"flex flex-col text-center "},o.a.createElement(S.a,{variant:"subtitle1",className:""},o.a.createElement("span",{className:"font-bold mr-10"},"Divyanshu Mathpal")),o.a.createElement("br",null),o.a.createElement(S.a,{variant:"subtitle1",className:""},"Pre Final Year"),o.a.createElement(S.a,{variant:"subtitle1",className:""},"CSE, IIT Ropar"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"flex justify-center pb-32"},o.a.createElement(Y.a,{target:"_blank",href:"https://www.linkedin.com/in/divyanshu-mathpal-5a029b17b/",variant:"contained",color:"secondary",className:"w-128"},"LinkedIn")))))),o.a.createElement("div",{className:"w-full max-w-320 sm:w-1/3 p-12"},o.a.createElement(z.a,{raised:!0,square:!0},o.a.createElement(J.a,{className:"p-32"},o.a.createElement("div",{className:"flex justify-center"},o.a.createElement("div",{className:"flex items-end"},o.a.createElement(C.a,{src:"/static/images/taneesh.jpeg",style:{width:100,height:100}}))),o.a.createElement(E.a,{className:"my-32"}),o.a.createElement("div",{className:"flex flex-col text-center "},o.a.createElement(S.a,{variant:"subtitle1",className:""},o.a.createElement("span",{className:"font-bold mr-10"},"Taneesh Kaushik")),o.a.createElement("br",null),o.a.createElement(S.a,{variant:"subtitle1",className:""},"Pre Final Year"),o.a.createElement(S.a,{variant:"subtitle1",className:""},"CSE, IIT Ropar"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"flex justify-center pb-32"},o.a.createElement(Y.a,{target:"_blank",href:"https://www.linkedin.com/in/taneesh-kaushik-345766144/",variant:"contained",color:"secondary",className:"w-128"},"LinkedIn"))))))),o.a.createElement("div",{className:"flex flex-col items-center py-96 text-center sm:text-left max-w-xl mx-auto"},o.a.createElement(S.a,{variant:"h4",className:"pb-40 font-light"},"Worried About Your Privacy? No worries,  It's all end to end."),o.a.createElement("div",{className:"flex flex-wrap w-full"},o.a.createElement(S.a,{className:"text-20 text-center mb-8"},"None of your activities or your data is known by us."),o.a.createElement(S.a,{className:"text-16",color:"textSecondary"},"This application is end to end service, there is no role of any database or backend which is storing your activities, neither any of your data is stored or kept anywhere, it all works in your browser, nothing is sent out of it. Google services are used to authenticate you, and then gmail is handling your data once this application makes request to it. So feel free to use our application, there is nothing to worry at all, it's all end to end between google and you."))))))}a(16);var Q=a(152),Z=a.n(Q).a.create({baseURL:"http://172.26.1.59:8081"}),$=a(728),ee=Object(A.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},form:{spacing:e.spacing(2)}}}),te=o.a.forwardRef(function(e,t){return o.a.createElement(O.a,Object.assign({direction:"up",ref:t},e))});function ae(e){var t=ee(),a=o.a.useState(!0),n=Object(i.a)(a,2),l=n[0],r=(n[1],Object(s.useState)("")),c=Object(i.a)(r,2),m=c[0],u=c[1],d=Object(s.useState)(""),f=Object(i.a)(d,2),p=f[0],E=f[1],g=Object(s.useState)(null),h=Object(i.a)(g,2),b=h[0],v=h[1],y=Object(s.useState)(""),O=Object(i.a)(y,2);O[0],O[1];var k=Object(s.useState)(!1),S=Object(i.a)(k,2),C=S[0],I=S[1];var T=function(){e.setOpenLoginModal(!1),u(""),E(""),v(null)};return o.a.createElement("div",null,o.a.createElement(w.a,{fullWidth:!0,open:l,onClose:T,TransitionComponent:te},o.a.createElement(j.a,{className:t.appBar},o.a.createElement(N.a,null,o.a.createElement(x.a,{edge:"start",color:"inherit",onClick:T,"aria-label":"close"},o.a.createElement(G.a,null)))),o.a.createElement(F.a,{container:!0,lg:12,spacing:1},o.a.createElement(F.a,{item:!0,lg:9},o.a.createElement(M.a,{value:m,fullWidth:!0,variant:"outlined",label:"Enter Your Email",className:"email",style:{marginLeft:20,marginTop:30,marginBottom:30,marginRight:20},onChange:function(e){u(e.target.value)}})),o.a.createElement(F.a,{item:!0,lg:3},o.a.createElement(Y.a,{onClick:function(){I(!0),Z.post("/api/get-otp",{email:m}).then(function(e){v(e.data.otp)}).catch(function(e){console.log(e)})},full:!0,style:{marginLeft:20,marginTop:30,marginBottom:30},variant:"outlined",color:"inherit"},"Generate OTP"))),null!=b?o.a.createElement("div",null,o.a.createElement(M.a,{value:p,variant:"outlined",label:"Enter OTP",className:"otp",type:"password",style:{marginLeft:20,marginTop:30,marginBottom:30,marginRight:20},onChange:function(e){E(e.target.value)}}),o.a.createElement(Y.a,{onClick:function(){p.slice(0,6)===function(e,t){var a=$.AES.decrypt(e,t);return JSON.parse(a.toString($.enc.Utf8))}(b,p.slice(6))?(e.setAuthentication(!0),e.setEmailID(m),alert("OTP IS CORRECT")):alert("Incorrect OTP"),T()},style:{marginLeft:20,marginTop:30,marginBottom:30,marginRight:20}},"Verify")):1==C?o.a.createElement(W.a,{style:{marginLeft:100}}):null))}var ne=Object(A.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}),le=o.a.forwardRef(function(e,t){return o.a.createElement(O.a,Object.assign({direction:"up",ref:t},e))});function re(e){var t=ne(),a=o.a.useState(!0),n=Object(i.a)(a,2),l=n[0],r=(n[1],function(){e.setOpenAbout(!1)});return o.a.createElement("div",null,o.a.createElement(w.a,{fullScreen:!0,open:l,onClose:r,TransitionComponent:le},o.a.createElement(j.a,{className:t.appBar},o.a.createElement(N.a,null,o.a.createElement(x.a,{edge:"start",color:"inherit",onClick:r,"aria-label":"close"},o.a.createElement(B.a,null)))),o.a.createElement(X,null)))}a(5);var ce=a(299),ie=(a(65),a(752),Object(u.a)(function(e){return{table:{backgroundColor:"green"}}}));function se(e){console.log(e.data);ie();return o.a.createElement("div",null,o.a.createElement(Y.a,{onClick:function(){var t="";e.columns.forEach(function(e){var a=e.Header;t+=a+","}),t+="\n";for(var a=0;a<e.data.length;a++){var n=e.data[a];e.columns.forEach(function(e){var a=n[e.accessor.toString()];t+=a+","}),t+="\n"}var l=document.createElement("a");l.href="data:text/csv;charset=utf-8,"+encodeURI(t),l.target="_blank",l.download="data.csv",l.click()}},"Export"),o.a.createElement(m.a,{animation:"transition.slideUpIn",delay:300},o.a.createElement(ce.b,{id:"dataTable",className:"-striped -highlight h-full sm:rounded-16 overflow-hidden finaltable",data:e.data,columns:e.columns,defaultPageSize:5,noDataText:"Nothing found"})))}var oe=a(753),me=a(768),ue=a(769),de=a(665),fe=a(793);function pe(e){return o.a.createElement(fe.a,{display:"flex",alignItems:"center"},o.a.createElement(fe.a,{width:"100%",mr:1},o.a.createElement(de.a,Object.assign({variant:"determinate",color:"secondary"},e))),o.a.createElement(fe.a,{minWidth:35},o.a.createElement(S.a,{variant:"body2",color:"textSecondary"},"".concat(Math.round(e.value),"%"))))}var Ee=Object(u.a)({root:{width:200}});function ge(e){var t=Ee();return o.a.createElement("div",{className:t.root},o.a.createElement(pe,{value:e.progress}))}var he=a(770),be=a.n(he);a.d(t,"default",function(){return ye});var ve=Object(A.a)(function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}});function ye(e){var t=Object(s.useState)(""),a=Object(i.a)(t,2),n=a[0],u=a[1],d=Object(s.useState)(!1),f=Object(i.a)(d,2),p=f[0],E=f[1],h=ve(),b=o.a.useState({}),w=Object(i.a)(b,2),j=(w[0],w[1]),N=Object(s.useState)(null),x=Object(i.a)(N,2),O=x[0],k=x[1],S=Object(s.useState)(!1),I=Object(i.a)(S,2),T=(I[0],I[1]),B=Object(s.useState)(!1),L=Object(i.a)(B,2),P=L[0],A=L[1],U=o.a.useState(!1),H=Object(i.a)(U,2),_=(H[0],H[1]),W=Object(s.useState)(0),q=Object(i.a)(W,2),G=q[0],z=q[1],J=o.a.useState(!1),K=Object(i.a)(J,2),V=K[0],X=K[1],Q=o.a.useState(null),$=Object(i.a)(Q,2),ee=$[0],te=$[1],ne=o.a.useState(null),le=Object(i.a)(ne,2),ce=le[0],ie=le[1],de=o.a.useState(""),fe=Object(i.a)(de,2),pe=fe[0],Ee=fe[1],he=o.a.useState(""),ye=Object(i.a)(he,2),we=ye[0],je=ye[1],Ne=o.a.useState([]),xe=Object(i.a)(Ne,2),Oe=xe[0],ke=xe[1],Se=o.a.useState(null),Ce=Object(i.a)(Se,2);Ce[0],Ce[1];var Ie=o.a.useState(!1),Te=Object(i.a)(Ie,2),Be=Te[0],Le=Te[1],Pe=o.a.useState(""),Re=Object(i.a)(Pe,2),Ae=(Re[0],Re[1],o.a.useState(!1)),Ue=Object(i.a)(Ae,2),He=Ue[0],_e=Ue[1],De=o.a.useState(!1),Fe=Object(i.a)(De,2),Me=Fe[0],Ye=Fe[1],We=o.a.useState(!1),qe=Object(i.a)(We,2),Ge=qe[0],ze=qe[1],Je=["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],Ke=Object(s.useState)(),Ve=Object(i.a)(Ke,2),Xe=(Ve[0],Ve[1],function(){T(!0),me.a.client.init({apiKey:"AIzaSyBV24FXBh_gW7rHUkDwT6f_I7SicqtaBTM",clientId:"1067508074985-pgsioeadhbkpv79l18dvodcunr5cgkp9.apps.googleusercontent.com",discoveryDocs:Je,scope:"https://mail.google.com/"}).then(function(){A(!0),me.a.auth2.getAuthInstance().isSignedIn.listen(Qe),Qe(me.a.auth2.getAuthInstance().isSignedIn.get())},function(e){})}),Qe=function(e){e&&(k(me.a.auth2.getAuthInstance().currentUser.le.wt),T(!1))};function Ze(){document.getElementById("fileInput").value="",ie(null),te(null),ke([])}Object(s.useEffect)(function(){1==P&&me.a.auth2.getAuthInstance().signIn()},[P]);var $e=o.a.useRef();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"demo-wrapper"},o.a.createElement(y.a,{callback:function(e){var t=e.status;e.type;["finished","skipped"].includes(t)&&Le(!1)},steps:[{target:".aboutus",content:"Click here to know about us and the product.",disableBeacon:!0},{target:".tutorial",content:"Refer here for a more detailed tutorial",disableBeacon:!0},{target:".login",content:"You can login from here using your gmail account.If the Send Email button is not visible after sheet upload then press here.",disableBeacon:!0},{target:".takeinput",content:"Choose a  CSV file to tour more in Website from which you want to send emails it should have a column email in it for sure.",disableBeacon:!0},{target:".finaltable",content:"This is the csv file you uploaded, you can sort by clicking on the table, you can also filter by clicking filter",disableBeacon:!0},{target:".subject",content:"Here you can add the subject for the mail.",disableBeacon:!0},{target:".body",content:"Here you can add the body of the email.",disableBeacon:!0},{target:".columnlist",content:"Here you can select which columns from the sheet to send to recipeints. ",disableBeacon:!0},{target:".preview",content:"Here you can have the preview of the email",disableBeacon:!0},{target:".send",content:"Send Email from here",disableBeacon:!0},{target:".reset",content:"Reset the page from here",disableBeacon:!0}],continuous:!0,scrollToFirstStep:!0,showProgress:!0,spotlightClicks:!0,showSkipButton:!0,run:Be})),o.a.createElement(m.k,{classes:{header:"min-h-300 h-300 justify-center"},header:o.a.createElement("div",null,o.a.createElement("div",{className:"justify-center items-center"},o.a.createElement("div",{className:"flex flex-col justify-center flex-1 "},o.a.createElement(m.b,null,o.a.createElement("div",{style:{backgroundColor:"#0e1e25"},className:"min-h-300 h-300 justify-center"},o.a.createElement(Y.a,{style:{color:"white"},component:"span",color:"primary",className:"aboutus",onClick:function(){X(!0)}},"About Us"),o.a.createElement(Y.a,{className:"tutorial",variant:"outlined",color:"primary",component:"span",onClick:function(){Ye(!0)},style:{color:"white",justify:"center"}},"Tutorial"),o.a.createElement(Y.a,{variant:"outlined",color:"primary",component:"span",onClick:function(){Le(!0)},style:{color:"white",justify:"center"}},"Take Tour "),null!=O?o.a.createElement(Y.a,{variant:"outlined",style:{color:"white"},component:"span",className:"login",onClick:function(e){me.a.auth2.getAuthInstance().currentUser&&me.a.auth2.getAuthInstance().signOut().then(function(){alert("Signed Out Successfully"),k(null),A(!1),_(!0)})}},"Logout"):o.a.createElement(Y.a,{variant:"outlined",style:{color:"white"},component:"span",className:"login",onClick:function(){me.a.load("client:auth2",Xe)}},"Use Personal for sending mail"),o.a.createElement(Y.a,{variant:"outlined",style:{color:"white"},onClick:function(){ze(!0)},component:"span"},"Use ESMP for sending mail")),o.a.createElement("div",{className:"flex justify-center items-center",style:{paddingTop:50}},o.a.createElement(C.a,{src:"/static/images/logo.jpeg",style:{width:150,height:150}})),o.a.createElement("div",{className:"flex justify-center items-center"},o.a.createElement("p",{className:"py-0 sm:py-24 text-20 ",variant:"h4"}," Easy and Secure Mailing Portal ")))))),content:o.a.createElement(m.b,{enter:{animation:"transition.slideUpBigIn"},className:"flex justify-center flex-wrap py-24"},o.a.createElement("div",{className:"flex justify-center p-30"},o.a.createElement("input",{id:"fileInput",className:"takeinput",color:"inherit",type:"file",accept:".csv",onChange:function(e){if(void 0!=e.target.files[0]){j({selectedFile:e.target.files[0]});var t=new FileReader;t.onload=function(){var e=Object(r.a)(l.a.mark(function e(t){var a,n,r,c,i,s,o,m;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(a=t.target.result,n=Object(oe.a)(a).data,r=[],c=[],i=!1,s=0;s<n[0].length;s++)r.push({Header:n[0][s],accessor:n[0][s].replace(/[^\w\s]|_/g,"").replace(/\s+/g," ").toLowerCase(),sortable:!0,filterable:!0,className:"font-bold justify-center"}),"email"==n[0][s].toLowerCase()&&(i=!0);for(s=1;s<n.length&&n[s].length>1;s++){for(o={},m=0;m<n[s].length;m++)o[n[0][m].replace(/[^\w\s]|_/g,"").replace(/\s+/g," ").toLowerCase()]=n[s][m];c.push(o)}i?(te(r),ie(c)):alert("Email field not found");case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.readAsText(e.target.files[0]),z(0)}},onClick:function(){Ze()}}),o.a.createElement("label",{htmlFor:"outlined-button-file"})),o.a.createElement("div",null,null!=O&&1==P&&null!=ce&&null!=ee?o.a.createElement(Y.a,{variant:"outlined",color:"inherit",component:"span",className:h.button+" send",onClick:function(){!function(){for(var e="Subject: "+pe+"\n\n",t=Object(c.a)(Oe),a=0;a<t.length;a++)t[a]=t[a].replace(/[^\w\s]|_/g,"").replace(/\s+/g," ").toLowerCase();ce.map(function(a,n){var l="To: <"+a.email+">\r\n"+e+we+"\n";for(var r in a)if("email"!=r.toLowerCase()&&-1!=t.indexOf(r)){var c=t.indexOf(r);l+=Oe[c],l+=" :- ",l+=a[r],l+="\n"}var i=Object(ue.a)(l);me.a.client.gmail.users.messages.send({userId:"me",raw:i}).then(function(e){z(function(e){return e+100/ce.length>100?100:e+100/ce.length})}).catch(function(e){})})}()}},"Send Email"):null,1==p?o.a.createElement(Y.a,{onClick:function(){for(var e=Object(c.a)(Oe),t=0;t<e.length;t++)e[t]=e[t].replace(/[^\w\s]|_/g,"").replace(/\s+/g," ").toLowerCase();ce.map(function(t,a){var l=[];for(var r in t){var c=" ";if("email"!=r.toLowerCase()&&-1!=e.indexOf(r)){var i=e.indexOf(r);c+=Oe[i],c+=" :- ",c+=t[r],l.push(c)}}Z.post("/api/sendMail",{from:n,to:t.email,subject:"".concat(pe),text:we,table:l}).then(function(e){}).catch(function(e){})})}},"Send Email"):null,o.a.createElement(g.a,null,o.a.createElement(ge,{color:"secondary",progress:G}),o.a.createElement("div",{className:"p-5"},G>=100?o.a.createElement(be.a,{color:"secondary"}):null)),null!=ce&&null!=ee?o.a.createElement(Y.a,{className:"preview",variant:"outlined",color:"primary",component:"span",style:{color:"Purple",justify:"center"},onClick:function(){_e(!0)}},"Preview"):null,null!=ce&&null!=ee?o.a.createElement(Y.a,{className:"reset",color:"primary",variant:"outlined",style:{color:"Purple",justify:"center"},onClick:Ze},"Reset"):null,1==He?o.a.createElement(R,{columns:Oe,body:we,subject:pe,setPreviewOpen:_e}):null,1==V?o.a.createElement(re,{setOpenAbout:X}):null,1==Me?o.a.createElement(D,{setOpenTutorial:Ye}):null,1==Ge?o.a.createElement(ae,{setEmailID:u,setAuthentication:E,setOpenLoginModal:ze}):null),null!=ce&&null!=ee?o.a.createElement(F.a,{container:!0,lg:12},o.a.createElement(F.a,{container:!0,lg:3},o.a.createElement(v,{columns:ee,handleUpdate:function(e){if(1==e.target.checked)ke(function(){return[].concat(Object(c.a)(Oe),[e.target.name])});else{var t=[];for(var a in Oe)Oe[a]!=e.target.name&&t.push(Oe[a]);ke(t)}},ref:$e})),o.a.createElement(F.a,{container:!0,style:{marginTop:30},lg:9},o.a.createElement(F.a,{container:!0,lg:4},o.a.createElement(M.a,{value:pe,variant:"outlined",label:"Subject",className:"subject",helperText:"Please select Subject of Email",onChange:function(e){Ee(e.target.value)}})),o.a.createElement(F.a,{container:!0,lg:7},o.a.createElement(M.a,{label:"body",className:"body",helperText:"Please Enter Opening Remarks of Email",multiline:!0,fullWidth:!0,value:we,variant:"outlined",minRows:6,onChange:function(e){je(e.target.value)}})),o.a.createElement(F.a,{item:!0,lg:11},o.a.createElement(se,{columns:ee,data:ce})))):null)}))}}}]);