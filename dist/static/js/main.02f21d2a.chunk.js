(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(23),i=n.n(s),o=(n(30),n(21)),r=n(3),l=n.p+"static/media/header-logo.03b78ada.svg",u=n(7),d=n(2),p=n(0);var j=Object(d.g)((function(e){function t(){localStorage.removeItem("token"),e.history.push("/sign-in")}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"hamburger-menu",children:[Object(p.jsx)("input",{id:"menu__toggle",type:"checkbox"}),Object(p.jsx)("ul",{className:"menu__box",children:Object(p.jsxs)("div",{className:"menu__wrapper",children:[Object(p.jsx)("div",{className:"header__email",children:e.userData}),Object(p.jsx)(u.b,{className:" header__exit header__exit_position",onClick:t,to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]})})]}),Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435"}),Object(p.jsx)("label",{className:"menu__btn",htmlFor:"menu__toggle",children:Object(p.jsx)("span",{})}),Object(p.jsxs)("div",{className:"header__wrapper",children:[Object(p.jsx)("div",{className:"header__email",children:e.userData}),Object(p.jsx)(u.b,{className:"header__exit",onClick:t,to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})})),h=n.p+"static/media/add-vector.d86bb2ed.svg",m=n.p+"static/media/Edit-Button.a1892ea7.svg",b=n.p+"static/media/backet.a274c87c.svg",_=c.a.createContext();var f=function(e){var t=c.a.useContext(_),n=e.dataCards.owner._id===t._id,a="element__backet ".concat(n?"element__backet_active":" element__backet_hidden"),s=e.dataCards.likes.some((function(e){return e._id===t._id})),i="element__like ".concat(s?"element__like_active":" ");return Object(p.jsxs)("div",{className:"directors__item",children:[Object(p.jsxs)("div",{className:"element__header",children:[Object(p.jsx)("img",{className:"element__image",alt:e.name,src:e.dataCards.link,onClick:function(){e.onCardClick(e.dataCards)}}),Object(p.jsx)("img",{className:"".concat(a),src:b,alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e-\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",onClick:function(){e.onCardDelete(e.dataCards)}})]}),Object(p.jsxs)("div",{className:"element__footer",children:[Object(p.jsx)("div",{className:"element__place-travel",children:e.dataCards.name}),Object(p.jsxs)("div",{className:"element__likes-group",children:[Object(p.jsx)("button",{className:"".concat(i),type:"button","aria-label":"Like",onClick:function(){e.onCardLike(e.dataCards)}}),Object(p.jsx)("div",{className:"element__likes-click",children:e.dataCards.likes.length})]})]})]})};var O=function(e){var t=c.a.useContext(_);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("main",{className:"page",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("div",{className:"profile__top-avatar",children:Object(p.jsx)("button",{className:"profile__avatar-edit",type:"button",onClick:e.onEditAvatar,children:Object(p.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0442\u0430\u0440\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0430"})})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__header-info",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{className:"profile__edit-btn",type:"button",children:Object(p.jsx)("img",{className:"profile__icon",onClick:e.onEditProfile,src:m,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0430"})})]}),Object(p.jsx)("p",{className:"profile__work",children:t.about})]}),Object(p.jsx)("button",{className:"profile__add-btn",type:"button",onClick:e.onAddPlace,children:Object(p.jsx)("img",{src:h,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e"})})]}),Object(p.jsx)("section",{className:"elements",children:Object(p.jsx)("div",{className:"element",children:Array.from(e.cards).map((function(t){return Object(p.jsx)(f,{dataCards:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})})};var v=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__copywriter",children:" \xa9 2021 Mesto Russia"})})})};var g=function(e){return Object(p.jsx)("div",{className:"popup popup_preview ".concat(e.card.link?"popup_active":""),children:Object(p.jsxs)("div",{className:"popup__container-preview",method:"POST",name:"popup-container",children:[Object(p.jsx)("button",{className:"popup__close popup__close_preview",type:"button",onClick:e.onClose}),Object(p.jsxs)("figure",{className:"preview",children:[Object(p.jsx)("img",{className:"preview__img",alt:e.card.name,src:e.card.link}),Object(p.jsx)("figcaption",{className:"preview__signature",children:e.card.name})]})]})})},x=n(15),k=n(16),C=new(function(){function e(t){var n=t.address,a=t.token;Object(x.a)(this,e),this.address=n,this.token=a}return Object(k.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.address,"/users/me"),{method:"GET",headers:{authorization:this.token}}).then((function(t){return e._checkStatus(t)}))}},{key:"updateUser",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this.address,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:n,about:a})}).then((function(e){return t._checkStatus(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this.address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkStatus(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.address,"/cards"),{method:"GET",headers:{authorization:this.token}}).then((function(t){return e._checkStatus(t)}))}},{key:"addCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this.address,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:a})}).then((function(e){return t._checkStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return t._checkStatus(e)}))}},{key:"changeCardStatus",value:function(e,t){return t?this.deleteCard(e):this.addCard(e)}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this.address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return t._checkStatus(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this.address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return t._checkStatus(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.removeLike(e):this.addLike(e)}}]),e}())({address:"https://mesto.nomoreparties.co/v1/cohort-24",token:"43b98874-8a2f-4742-91c1-202875e69e98"}),N=c.a.createContext();var y=function(e){return Object(p.jsx)("div",{className:"popup popup".concat(e.name," ").concat(e.isOpen?"popup_active":""),children:Object(p.jsxs)("form",{onSubmit:e.onSubmit,className:"popup__container  ",method:"POST",name:e.name,children:[Object(p.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose}),Object(p.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(p.jsx)("button",{type:"submit",onClick:e.onClose,className:"popup__save-btn",children:e.text})]})})};var S=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1],d=c.a.useContext(_);return c.a.useEffect((function(){s(d.name),u(d.about)}),[d]),Object(p.jsxs)(y,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:l})},name:"popup_profile ",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,children:[Object(p.jsx)("input",{onChange:function(e){s(e.target.value)},value:a||"",id:"name-input",className:"popup__input",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:2,maxLength:40}),Object(p.jsx)("span",{id:"name-input--error",className:"popup__input-error"}),Object(p.jsx)("input",{onChange:function(e){u(e.target.value)},value:l||"",id:"work-input",className:"popup__input ",type:"text",name:"work",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:2,maxLength:200}),Object(p.jsx)("span",{id:"work-input--error",className:"popup__input-error"})]})};var w=function(e){var t=c.a.useRef();return Object(p.jsxs)(y,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},name:"popup_profile ",isOpen:e.isOpen,onClose:e.onClose,text:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:[Object(p.jsx)("input",{className:"popup__input popup__input-avatar",ref:t,id:"url-avatar",name:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(p.jsx)("span",{id:"url-avatar--error",className:"popup__input-error "})]})};var E=function(e){var t=c.a.useRef(),n=c.a.useRef();return Object(p.jsxs)(y,{text:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e",onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value})},name:"popup_add-cards ",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,children:[Object(p.jsx)("input",{ref:t,id:"description-card",className:"popup__input popup__input-description ",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(p.jsx)("span",{id:"description-card--error",className:"popup__input-error"}),Object(p.jsx)("input",{ref:n,className:"popup__input popup__input-images",id:"url-card",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(p.jsx)("span",{id:"url-card--error",className:"popup__input-error"})]})};var T=function(e){return Object(p.jsx)(y,{name:"popup_delet",isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onCardDelete(e.card)},onClose:e.onClose,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",text:"\u0414\u0430"})},L="https://auth.nomoreparties.co",P=new(function(){function e(t){var n=t.password,a=t.email;Object(x.a)(this,e),this.password=n,this.email=a,console.log(this.email)}return Object(k.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"register",value:function(e){var t=this,n=e.email,a=e.password;return fetch("".concat(L,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:a})}).then((function(e){return t._checkStatus(e)}))}},{key:"login",value:function(e){var t=this,n=e.email,a=e.password;return fetch("".concat(L,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:a})}).then((function(e){return t._checkStatus(e)}))}},{key:"getToken",value:function(e){var t=this;return fetch("".concat(L,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkStatus(e)}))}}]),e}())({password:"",email:""}),D=n(11),A=n(9);var I=Object(d.g)((function(e){var t=c.a.useState({email:"",password:""}),n=Object(r.a)(t,2),a=n[0],s=n[1];function i(e){s(Object(A.a)(Object(A.a)({},a),{},Object(D.a)({},e.target.name,e.target.value)))}return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsxs)("header",{className:"login__header",children:[Object(p.jsx)("img",{className:"login__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435"}),Object(p.jsx)(u.b,{to:"/sign-up",className:"login__registration",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(p.jsxs)("form",{className:"login__in",onSubmit:function(t){t.preventDefault(),e.onLoginSumbit(a)},children:[Object(p.jsx)("h3",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsx)("input",{placeholder:"Email",className:"login__email",name:"email",type:"email",value:a.email,onChange:i}),Object(p.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"login__password",value:a.password,name:"password",type:"password",onChange:i}),Object(p.jsx)("button",{className:"login__btn-in",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}));var U=Object(d.g)((function(e){var t=c.a.useState({email:"",password:""}),n=Object(r.a)(t,2),a=n[0],s=n[1];function i(e){s(Object(A.a)(Object(A.a)({},a),{},Object(D.a)({},e.target.name,e.target.value)))}return Object(p.jsxs)("div",{className:"singup singup_active",children:[Object(p.jsxs)("header",{className:"singup__header",children:[Object(p.jsx)("img",{className:"singup__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435"}),Object(p.jsx)(u.b,{to:"/sign-in",className:"singup__registration",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(p.jsxs)("form",{className:"singup__in",onSubmit:function(t){t.preventDefault(),e.onRegister(a)},children:[Object(p.jsx)("h3",{className:"singup__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsx)("input",{placeholder:"Email",name:"email",type:"email",value:a.email,className:"singup__email",onChange:i}),Object(p.jsx)("input",{placeholder:"Password",value:a.password,name:"password",type:"password",className:"singup__password",onChange:i}),Object(p.jsx)("button",{className:"singup__btn-in",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(p.jsx)(u.b,{to:"/sign-in",className:"singup__question",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})})),z=n(25),F=["component"];var J=function(e){var t=e.component,n=Object(z.a)(e,F);return Object(p.jsxs)(d.b,{children:[" ",n.loggedIn?Object(p.jsx)(t,Object(A.a)({},n)):Object(p.jsx)(d.a,{to:"./sign-up"})]})},q=n.p+"static/media/img-success.1b6082f8.svg",R=n.p+"static/media/img-fail.df8eddf6.svg";var B=function(e){return Object(p.jsxs)("div",{className:"infotooltip ".concat(e.stateOpenPopup?"infotooltip_active":""),children:[Object(p.jsx)("button",{className:"infotooltip__close",onClick:e.onClose}),Object(p.jsxs)("div",{className:"infotooltip__popup",children:[Object(p.jsx)("img",{className:"infotooltip__images",src:e.isSuccess?q:R,alt:"\u041e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u043d\u0438\u0435"}),Object(p.jsx)("p",{className:"infotooltip__text",children:e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})};var G=Object(d.g)((function(e){var t=c.a.useState(!1),n=Object(r.a)(t,2),a=n[0],s=n[1];function i(){s(!0)}var l=c.a.useState(!1),u=Object(r.a)(l,2),h=u[0],m=u[1];function b(){m(!0)}var f=c.a.useState(!1),x=Object(r.a)(f,2),k=x[0],y=x[1];function L(){y(!0)}var D=c.a.useState(!1),A=Object(r.a)(D,2),z=A[0],F=A[1],q=c.a.useState({}),R=Object(r.a)(q,2),G=R[0],H=R[1];function M(e){H(e),F(!0)}var K=c.a.useState({}),Q=Object(r.a)(K,2),V=Q[0],W=Q[1],X=function(e){W(e)};function Y(){s(!1),m(!1),y(!1),F(!1),W({}),Oe(!1)}c.a.useEffect((function(){var e=function(e){27===e.keyCode&&Y()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]);var Z=c.a.useState({}),$=Object(r.a)(Z,2),ee=$[0],te=$[1];c.a.useEffect((function(){C.getUserInfo().then((function(e){te(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e))}))}),[]);var ne=c.a.useState([]),ae=Object(r.a)(ne,2),ce=ae[0],se=ae[1];function ie(e){var t=e.likes.some((function(e){return e._id===ee._id}));C.changeLikeCardStatus(e._id,t).then((function(t){se((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("Error:".concat(e))}))}c.a.useEffect((function(){C.getInitialCards().then((function(e){se(e)})).catch((function(e){console.log("Error:".concat(e))}))}),[]);var oe=c.a.useState(!1),re=Object(r.a)(oe,2),le=re[0],ue=re[1];function de(){ue(!0)}var pe=c.a.useState(),je=Object(r.a)(pe,2),he=je[0],me=je[1],be=c.a.useState(!1),_e=Object(r.a)(be,2),fe=_e[0],Oe=_e[1];function ve(t){var n=t.email,a=t.password;P.register({email:n,password:a}).then((function(t){201===t.status?(me(!0),Oe(!0),setTimeout((function(){e.history.push("/sign-in")}),3e3)):(me(!1),Oe(!0),console.log("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"))})).catch((function(e){return console.log(e)}))}var ge=c.a.useState({}),xe=Object(r.a)(ge,2),ke=xe[0],Ce=xe[1];function Ne(t){var n=t.email,a=t.password;P.login({email:n,password:a}).then((function(t){localStorage.setItem("token",t.token),de(),e.history.push("/main")})).catch((function(e){return console.log(e)}))}return c.a.useEffect((function(){!function(){var t=localStorage.getItem("token");t&&P.getToken(t).then((function(t){var n=t.data.email;t&&(Ce({userData:n}),ue(!0),e.history.push("/main"))})).catch((function(e){return console.log(e)}))}()}),[le]),Object(p.jsx)("div",{className:"App body-background",children:Object(p.jsx)(N.Provider,{value:ce,children:Object(p.jsxs)(_.Provider,{value:ee,children:[Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{exact:!0,path:"/",children:le?Object(p.jsx)(d.a,{to:"/main"}):Object(p.jsx)(d.a,{to:"/sign-in"})}),Object(p.jsx)(J,{path:"/main",loggedIn:le,component:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{userData:ke.userData}),Object(p.jsx)(O,{loggedIn:le,component:O,onEditAvatar:i,onEditProfile:b,onAddPlace:L,onCardClick:X,cards:ce,onCardLike:ie,onCardDelete:M}),Object(p.jsx)(v,{loggedIn:le})]})}}),Object(p.jsx)(d.b,{path:"/sign-in",component:function(){return Object(p.jsx)(I,{onLogin:de,onLoginSumbit:Ne})}}),Object(p.jsx)(d.b,{path:"/sign-up",loggedIn:le,component:function(){return Object(p.jsx)(U,{onLogin:de,onRegister:ve})}})]}),Object(p.jsx)(S,{onUpdateUser:function(e){C.updateUser(e).then((function(e){te(e),Y()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e))}))},isOpen:h,onClose:Y}),Object(p.jsx)(w,{onUpdateAvatar:function(e){C.updateAvatar(e).then((function(e){te(e),Y()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e))}))},isOpen:a,onClose:Y}),Object(p.jsx)(E,{onAddPlace:function(e){C.addCard(e).then((function(e){se([e].concat(Object(o.a)(ce))),Y()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e))}))},isOpen:k,onClose:Y}),Object(p.jsx)(T,{card:G,isOpen:z,onClose:Y,onCardDelete:function(e){var t=e.owner._id===ee._id;C.changeCardStatus(e._id,t).then((function(t){se((function(n){return Object(o.a)(n).filter((function(n){return n._id===e._id?console.log(t):n}))}))})).catch((function(e){console.log("Error:".concat(e))}))}}),Object(p.jsx)(g,{card:V,onClose:Y}),Object(p.jsx)(B,{isSuccess:he,stateOpenPopup:fe,onClose:Y})]})})})})),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{children:Object(p.jsx)(G,{})})}),document.getElementById("root")),H()}},[[37,1,2]]]);
//# sourceMappingURL=main.02f21d2a.chunk.js.map