(()=>{"use strict";var e={form:".popup__form",input:".popup__inpute",submitButton:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__inpute_type_error",errorClass:"popup__error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._selector=n,this._handleOpenImage=r,this._myId=o,this._ownerId=t.owner._id,this._like=u,this._unlike=a,this._handleDeleteElement=i}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"getId",value:function(){return this._id}},{key:"likeElement",value:function(){this._likeButton.classList.add("element__like_active")}},{key:"unLikeElement",value:function(){this._likeButton.classList.remove("element__like_active")}},{key:"_checkLikes",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._myId&&e.likeElement()}))}},{key:"countLikes",value:function(e){this._counterLikes.textContent=e.likes.length}},{key:"deleteElement",value:function(){this._element.closest(".element").remove(),this._element=null}},{key:"_setEventListener",value:function(){var e=this;this._image.addEventListener("click",(function(){e._handleOpenImage(e._name,e._link)})),this._ownerId===this._myId&&this._deleteElement.addEventListener("click",(function(){e._handleDeleteElement()})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__like_active")?e._unlike():e._like()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._counterLikes=this._element.querySelector(".element__like-counter"),this._deleteElement=this._element.querySelector(".element__delete"),this._title=this._element.querySelector(".element__title"),this._image=this._element.querySelector(".element__image"),this._title.textContent=this._name,this._likeButton=this._element.querySelector(".element__like"),this._ownerId!==this._myId&&this._deleteElement.remove(),this._image.src=this._link,this._image.alt=this._name,this._setEventListener(),this.countLikes(this._item),this._checkLikes(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".popup__close");this._popup.addEventListener("mousedown",(function(n){(n.target.classList.contains("popup")||n.target===t)&&e.close()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function l(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._inputs=function(e){if(Array.isArray(e))return u(e)}(r=n._form.querySelectorAll(".popup__inpute"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._values={},n._handleFormSubmit=t,n._saveButton=n._popup.querySelector(".popup__save"),n}return t=l,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputs.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;c(p(l.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){c(p(l.prototype),"close",this).call(this),this._form.reset()}},{key:"onLoading",value:function(e,t){this._saveButton,this._saveButton.textContent=e?"Сохранение...":t}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){d(g(u.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._caption.textContent=e}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),o=function(e){e.preventDefault(),t._deleteElement()},(r="_handleDeleteElement")in(n=P(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._form=t._popup.querySelector(".popup__form_photo_del"),t}return t=u,(n=[{key:"open",value:function(e){S(C(u.prototype),"open",this).call(this),this._deleteElement=e}},{key:"setEventListeners",value:function(){S(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleDeleteElement)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._element=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;this._items=e,this._items.reverse().forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(e){this._element.prepend(e)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.userNameSelector,r=t.jobSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._job=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._job.textContent=e.about,this._userAvatar.src=e.avatar}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validSetting=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._validSetting.input)),this._buttonElement=this._form.querySelector(this._validSetting.submitButton)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.name,"-error"));e.classList.add(this._validSetting.inputErrorClass),n.textContent=t,n.classList.add(this._validSetting.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._validSetting.inputErrorClass),t.textContent="",t.classList.remove(this._validSetting.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",""),this._buttonElement.classList.add(this._validSetting.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._validSetting.inactiveButtonClass))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetFormError",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U,N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_testConnection",value:function(e){return console.log(e),e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfoApi",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._testConnection)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._testConnection)}},{key:"setUserInfoApi",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._testConnection)}},{key:"addNewElement",value:function(e,t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._testConnection)}},{key:"deleteElement",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._testConnection)}},{key:"like",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._testConnection)}},{key:"unlike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._testConnection)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatarLink})}).then(this._testConnection)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=document.querySelector(".profile__add"),J=document.querySelector(".popup_photo_add"),M=document.querySelector(".profile__edit"),G=document.querySelector(".popup_edit_info"),H=G.querySelector(".popup__form_edit_info"),$=(H.querySelector(".popup__inpute_field_name"),H.querySelector(".popup__inpute_field_job"),document.querySelector(".popup_edit_avatar")),z=document.querySelector(".profile__avatar"),K=new N({url:"https://mesto.nomoreparties.co/v1/cohort-48/",headers:{authorization:"bf0486f9-3daf-4fe5-a38c-cc62044e9a6a","Content-Type":"application/json"}}),Q=K.getUserInfoApi(),W=K.getInitialCards(),X=new k(".popup_photo_big"),Y=new h(".popup_photo_add",(function(e){var t=this;Y.onLoading(!0,"Сохранить"),K.addNewElement(e.photoTitle,e.photoLink).then((function(e){Z.addItem(ce(e)),Y.close()})).catch((function(e){console.log(e)})).finally((function(){t.onLoading(!1,"Сохранить")}))})),Z=new A({renderer:ce},".elements"),ee=new R({userNameSelector:".profile__name",jobSelector:".profile__job",userAvatarSelector:".profile__photo"}),te=new h(".popup_edit_info",(function(e){te.onLoading(!0,"Сохранить"),K.setUserInfoApi(e.name,e.job).then((function(e){ee.setUserInfo(e),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.onLoading(!1,"Сохранить")}))})),ne=new h(".popup_edit_avatar",(function(e){ne.onLoading(!0,"Сохранить"),K.changeAvatar(e).then((function(e){ee.setUserInfo(e),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.onLoading(!1,"Сохранить")}))})),re=new I(".popup_photo_del"),oe=new x(e,G);oe.enableValidation();var ie=new x(e,J);ie.enableValidation();var ue=new x(e,$);function ae(e,t){X.open(e,t)}function ce(e){var t=new n(e,".template-card",ae,U,(function(){re.open((function(){return K.deleteElement(t.getId()).then((function(){t.deleteElement(),re.close()})).catch((function(e){console.log(e)}))}))}),(function(){K.like(t.getId()).then((function(e){t.likeElement(),t.countLikes(e)})).catch((function(e){console.log(e)}))}),(function(){K.unlike(t.getId()).then((function(e){t.unLikeElement(),t.countLikes(e)})).catch((function(e){console.log(e)}))}));return t.generateCard()}ue.enableValidation(),Promise.all([Q,W]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];U=o._id,ee.setUserInfo(o),Z.renderItems(i)})).catch((function(e){console.log(e)})),F.addEventListener("click",(function(){ie.resetFormError(),Y.open()})),Y.setEventListeners(),M.addEventListener("click",(function(){var e=ee.getUserInfo();te.setInputValues(e),te.open(),oe.resetFormError()})),te.setEventListeners(),X.setEventListeners(),z.addEventListener("click",(function(){ue.resetFormError(),ne.open()})),ne.setEventListeners(),re.setEventListeners()})();