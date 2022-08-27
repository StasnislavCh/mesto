(()=>{"use strict";var e={form:".popup__form",input:".popup__inpute",submitButton:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__inpute_type_error",errorClass:"popup__error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n=function(){function e(t,n,o,r,i,u,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._selector=n,this._handleOpenImage=o,this._myId=r,this._ownerId=t.owner._id,this._like=u,this._unlike=c,this._handleDeleteElement=i}var n,o;return n=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"getId",value:function(){return this._id}},{key:"handleLikeElement",value:function(){this._element.querySelector(".element__like").classList.add("element__like_active")}},{key:"handleUnLikeElement",value:function(){this._element.querySelector(".element__like").classList.remove("element__like_active")}},{key:"_checkLikes",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._myId&&e._element.querySelector(".element__like").classList.add("element__like_active")}))}},{key:"countLikes",value:function(e){this._element.querySelector(".element__like-counter").textContent=e.likes.length}},{key:"handleDeleteElement",value:function(){this._element.closest(".element").remove(),this._element=null}},{key:"_setEventListener",value:function(){var e=this;this._image.addEventListener("click",(function(){e._handleOpenImage(e._name,e._link)})),this._ownerId===this._myId&&this._element.querySelector(".element__delete").addEventListener("click",(function(){e._handleDeleteElement()})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__like_active")?e._unlike():e._like()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._element.querySelector(".element__title").textContent=this._name,this._likeButton=this._element.querySelector(".element__like"),this._ownerId!==this._myId&&this._element.querySelector(".element__delete").remove(),this._element.querySelector(".element__image").src=this._link,this._element.querySelector(".element__image").alt=this._name,this._setEventListener(),this.countLikes(this._item),this._checkLikes(),this._element}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".popup__close");this._popup.addEventListener("mousedown",(function(n){(n.target.classList.contains("popup")||n.target===t)&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=l(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},a.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(l,e);var t,n,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(r){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function l(e,t){var n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._inputs=function(e){if(Array.isArray(e))return u(e)}(o=n._form.querySelectorAll(".popup__inpute"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._values={},n._handleFormSubmit=t,n}return t=l,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputs.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;a(p(l.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){a(p(l.prototype),"close",this).call(this),this._form.reset()}},{key:"onLoading",value:function(e,t){this._popup.querySelector(".popup__save").textContent=e?"Сохранение...":t}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(r);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=m(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},d.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(r){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){d(g(u.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._caption.textContent=t}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=O(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},S.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(o);if(r){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t,n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),r=function(e){e.preventDefault(),t._deleteElement()},(o="_handleDeleteElement")in(n=P(t=i.call(this,e)))?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,t._form=t._popup.querySelector(".popup__form_photo_del"),t}return t=u,(n=[{key:"open",value:function(e){S(C(u.prototype),"open",this).call(this),this._deleteElement=e}},{key:"setEventListeners",value:function(){S(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleDeleteElement)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r);function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var R=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._element=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;this._items=e,this._items.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(e){this._element.prepend(e)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var A=function(){function e(t){var n=t.userNameSelector,o=t.jobSelector,r=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._job=document.querySelector(o),this._userAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._job.textContent=e.about,this._userAvatar.src=e.avatar}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validSetting=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._validSetting.input)),this._buttonElement=this._form.querySelector(this._validSetting.submitButton)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.name,"-error"));e.classList.add(this._validSetting.inputErrorClass),n.textContent=t,n.classList.add(this._validSetting.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._validSetting.inputErrorClass),t.textContent="",t.classList.remove(this._validSetting.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",""),this._buttonElement.classList.add(this._validSetting.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._validSetting.inactiveButtonClass))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetFormError",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var U,N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_testConnection",value:function(e){return console.log(e),e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfoApi",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._testConnection)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._testConnection)}},{key:"setUserInfoApi",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._testConnection)}},{key:"addNewElement",value:function(e,t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._testConnection)}},{key:"deleteElement",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._testConnection)}},{key:"like",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._testConnection)}},{key:"unlike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._testConnection)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.url})}).then(this._testConnection)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V=document.querySelector(".profile__add"),F=document.querySelector(".popup_photo_add"),J=document.querySelector(".profile__edit"),G=document.querySelector(".popup_edit_info"),H=G.querySelector(".popup__form_edit_info"),M=H.querySelector(".popup__inpute_field_name"),z=H.querySelector(".popup__inpute_field_job"),$=document.querySelector(".popup_edit_avatar"),K=document.querySelector(".profile__avatar"),Q=new N({url:"https://mesto.nomoreparties.co/v1/cohort-48/",headers:{authorization:"bf0486f9-3daf-4fe5-a38c-cc62044e9a6a","Content-Type":"application/json"}}),W=Q.getUserInfoApi(),X=Q.getInitialCards(),Y=new k(".popup_photo_big"),Z=new h(".popup_photo_add",(function(e){var t=this;Z.onLoading(!0,"Сохранить"),Q.addNewElement(e.title,e.url).then((function(e){ee.addItem(le(e)),Z.close()})).catch((function(e){console.log(e)})).finally((function(){t.onLoading(!1,"Сохранить")}))})),ee=new R({renderer:le},".elements"),te=new A({userNameSelector:".profile__name",jobSelector:".profile__job",userAvatarSelector:".profile__photo"}),ne=new h(".popup_edit_info",(function(e){ne.onLoading(!0,"Сохранить"),Q.setUserInfoApi(e.name,e.job).then((function(e){te.setUserInfo(e),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.onLoading(!1,"Сохранить")}))})),oe=new h(".popup_edit_avatar",(function(e){oe.onLoading(!0,"Сохранить"),Q.changeAvatar(e).then((function(e){te.setUserInfo(e),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.onLoading(!1,"Сохранить")}))})),re=new I(".popup_photo_del"),ie=new x(e,G);ie.enableValidation();var ue=new x(e,F);ue.enableValidation();var ce=new x(e,$);function ae(e,t){Y.open(e,t)}function le(e){var t=new n(e,".template-card",ae,U,(function(){re.open((function(){return Q.deleteElement(t.getId()).then((function(){t.deleteElement(),re.close()})).catch((function(e){console.log(e)}))}))}),(function(){Q.like(t.getId()).then((function(e){t.likeElement(),t.countLikes(e)})).catch((function(e){console.log(e)}))}),(function(){Q.unlike(t.getId()).then((function(e){t.unLikeElement(),t.countLikes(e)})).catch((function(e){console.log(e)}))}));return t.generateCard()}ce.enableValidation(),W.then((function(e){U=e._id,te.setUserInfo(e)})).catch((function(e){console.log(e)})),X.then((function(e){ee.renderItems(e)})).catch((function(e){console.log(e)})),Promise.all([W,X]).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),V.addEventListener("click",(function(){ue.resetFormError(),Z.open()})),Z.setEventListeners(),J.addEventListener("click",(function(){var e=te.getUserInfo(),t=e.name,n=e.job;M.value=t,z.value=n,ne.open(),ie.resetFormError()})),ne.setEventListeners(),Y.setEventListeners(),K.addEventListener("click",(function(){ce.resetFormError(),oe.open()})),oe.setEventListeners(),re.setEventListeners()})();