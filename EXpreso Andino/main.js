(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _salida_salida_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salida/salida.component */ "./src/app/salida/salida.component.ts");
/* harmony import */ var _entrada_entrada_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entrada/entrada.component */ "./src/app/entrada/entrada.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/consulta/consulta.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _login_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/navbar/navbar.component */ "./src/app/login/navbar/navbar.component.ts");









var routes = [
    { path: 'entrada', component: _entrada_entrada_component__WEBPACK_IMPORTED_MODULE_4__["EntradaComponent"] /*,canActivate:[LoginGuard ] */ },
    { path: 'salida', component: _salida_salida_component__WEBPACK_IMPORTED_MODULE_3__["SalidaComponent"] /*,canActivate:[LoginGuard] */ },
    { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"] /*,canActivate:[LoginGuard] */ },
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"] /*,canActivate:[LoginGuard]*/ },
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'navbar', component: _login_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons.md-18 { font-size: 18px; }\r\n.material-icons.md-24 { font-size: 24px; }\r\n.material-icons.md-36 { font-size: 36px; }\r\n.material-icons.md-48 { font-size: 48px; }\r\n.material-icons.md-52 { font-size: 54px; }\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCLGdCQUFnQixFQUFFO0FBQzFDLHdCQUF3QixnQkFBZ0IsRUFBRTtBQUMxQyx3QkFBd0IsZ0JBQWdCLEVBQUU7QUFDMUMsd0JBQXdCLGdCQUFnQixFQUFFO0FBQzFDLHdCQUF3QixnQkFBZ0IsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyaWFsLWljb25zLm1kLTE4IHsgZm9udC1zaXplOiAxOHB4OyB9XHJcbi5tYXRlcmlhbC1pY29ucy5tZC0yNCB7IGZvbnQtc2l6ZTogMjRweDsgfVxyXG4ubWF0ZXJpYWwtaWNvbnMubWQtMzYgeyBmb250LXNpemU6IDM2cHg7IH1cclxuLm1hdGVyaWFsLWljb25zLm1kLTQ4IHsgZm9udC1zaXplOiA0OHB4OyB9XHJcbi5tYXRlcmlhbC1pY29ucy5tZC01MiB7IGZvbnQtc2l6ZTogNTRweDsgfVxyXG5cclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <header style=\"align-items: stretch;\" >\n   <app-navbar></app-navbar>\n </header>\n <br>\n <br>\n <br>\n <br>\n<div style=\"text-align:center\">\n  <h1>\n   Bienvenido a SGLAM\n  </h1>\n  \n  <img width=\"150\" alt=\"expreso-andino Logo\" src=\"https://ustvstaticcdn2-a.akamaihd.net/i/channel/picture/1/3/5/4/13549243/13549243_logo_expreso-01_1371046967,192x192,r:1.jpg\">\n</div>\n<h2> Aquí están sus tareas: </h2>\n<div class=\"container\"> \n<div class=\"row\">\n    <div class=\"card-deck\">\n        <div class=\"card bg-primary\">\n          <div class=\"card-body text-center\">  <!--primera card-->\n            <button type=\"button\" class=\"btn\" routerlink=\"entrada\" routerLinkActive=\"active\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"registrar\"(click)=\"entrada()\">\n              <i class=\"material-icons md-52\" style=\"font-size:38px; color:white;\">add_box</i>\n            </button>\n            <p class=\"card-text text-white\"align=\"justify\">Registrar ingreso de mercancia a la bodega de \n                Expreso Andina sede Cartagena.</p>\n          </div>\n        </div>\n        <div class=\"card bg-danger\">\n          <div class=\"card-body text-center\">\n            <button type=\"button\" class=\"btn\" routerlink=\"salida\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"eliminar\"  (click)=\"salida()\">\n              <i class=\"material-icons md-52\" style=\"font-size:38px; color:white;\">local_shipping</i>\n            </button>\n            <p class=\"card-text text-white\"align=\"justify\">Registrar salida de mercancia de la bodega de \n              Expreso Andina sede Cartagena.\n            </p>\n          </div>\n        </div> \n        <div class=\"card bg-success\">\n          <div class=\"card-body text-center\">\n            <button type=\"button\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"consultar\" routerlink=\"consulta\"  (click)=\"consulta()\">\n                <i class=\"material-icons md-52\" style=\"font-size:38px; color:white;\">search</i>\n            </button>\n            <p class=\"card-text text-white\" align=\"justify\">Busqueda detallada de mercancia por cliente.\n            </p>\n          </div>\n        </div> \n        <div class=\"card bg-primary\">\n          <div class=\"card-body text-center\">\n            <button type=\"button\" class=\"btn\" routerlink=\"info\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"generar\"  (click)=\"info()\">\n              <i class=\"material-icons md-52\" style=\"font-size:38px; color:white;\">archive</i>\n            </button>\n            <p class=\"card-text text-white\"align=\"justify\">Generar informe detallado sobre almacenamiento de mercancias.</p>\n          </div>\n        </div>\n      </div>\n  </div>\n \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicios/log.service */ "./src/app/servicios/log.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(//public af: AngularFireAuth,
    r, l) {
        this.r = r;
        this.l = l;
        this.title = 'SGLAM';
    }
    /*
        login() {
        this.af.auth.signInWithPopup(new auth.GoogleAuthProvider());
      }*/
    AppComponent.prototype.salida = function () {
        this.r.navigate(['/salida']);
    };
    AppComponent.prototype.entrada = function () {
        this.r.navigate(['/entrada']);
    };
    AppComponent.prototype.info = function () {
        this.r.navigate(['/info']);
    };
    AppComponent.prototype.consulta = function () {
        this.r.navigate(['/consulta']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _entrada_entrada_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entrada/entrada.component */ "./src/app/entrada/entrada.component.ts");
/* harmony import */ var _salida_salida_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./salida/salida.component */ "./src/app/salida/salida.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/consulta/consulta.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _guard_login_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guard/login.guard */ "./src/app/guard/login.guard.ts");
/* harmony import */ var _guard_general_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guard/general.guard */ "./src/app/guard/general.guard.ts");
/* harmony import */ var _login_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/navbar/navbar.component */ "./src/app/login/navbar/navbar.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _entrada_entrada_component__WEBPACK_IMPORTED_MODULE_9__["EntradaComponent"],
                _salida_salida_component__WEBPACK_IMPORTED_MODULE_10__["SalidaComponent"],
                _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_11__["ConsultaComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"],
                _login_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _login_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"], _guard_general_guard__WEBPACK_IMPORTED_MODULE_17__["GeneralGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clases/cliente.ts":
/*!***********************************!*\
  !*** ./src/app/clases/cliente.ts ***!
  \***********************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente(id_cliente, nombre, telefono, mail) {
        if (id_cliente === void 0) { id_cliente = ''; }
        if (nombre === void 0) { nombre = ''; }
        if (telefono === void 0) { telefono = ''; }
        if (mail === void 0) { mail = ''; }
        this.id_cliente = id_cliente;
        this.nombre = nombre;
        this.telefono = telefono;
        this.mail = mail;
    }
    Cliente.prototype.setId = function (id) {
        this.id_cliente = id;
    };
    Cliente.prototype.setNombre = function (name) {
        this.nombre = name;
    };
    Cliente.prototype.setTelefono = function (tel) {
        this.telefono = tel;
    };
    Cliente.prototype.setMail = function (mail) {
        this.mail = mail;
    };
    Cliente.prototype.getId = function () {
        return this.id_cliente;
    };
    Cliente.prototype.getName = function () { return this.nombre; };
    Cliente.prototype.getTel = function () { return this.telefono; };
    Cliente.prototype.getMail = function () { return this.mail; };
    return Cliente;
}());



/***/ }),

/***/ "./src/app/clases/mercancia.ts":
/*!*************************************!*\
  !*** ./src/app/clases/mercancia.ts ***!
  \*************************************/
/*! exports provided: Mercancia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mercancia", function() { return Mercancia; });
/* harmony import */ var _cliente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente */ "./src/app/clases/cliente.ts");

var Mercancia = /** @class */ (function () {
    function Mercancia(id, nombre, tipo_mercancia, cantidad_mal_estado, cantidad_buen_estado, f_entrada, fecha_caducidad, responsable, serial_container, f_salida) {
        if (id === void 0) { id = ''; }
        if (nombre === void 0) { nombre = ''; }
        if (tipo_mercancia === void 0) { tipo_mercancia = ''; }
        if (cantidad_mal_estado === void 0) { cantidad_mal_estado = ''; }
        if (cantidad_buen_estado === void 0) { cantidad_buen_estado = ''; }
        if (f_entrada === void 0) { f_entrada = ''; }
        if (fecha_caducidad === void 0) { fecha_caducidad = ''; }
        if (responsable === void 0) { responsable = new _cliente__WEBPACK_IMPORTED_MODULE_0__["Cliente"](); }
        if (serial_container === void 0) { serial_container = ''; }
        if (f_salida === void 0) { f_salida = ''; }
        this._id = id;
        this.nombre = nombre;
        this.tipo_mercancia = tipo_mercancia;
        this.cantidad_mal_estado = cantidad_mal_estado;
        this.cantidad_buen_estado = cantidad_buen_estado;
        this.f_entrada = f_entrada;
        this.fecha_caducidad = fecha_caducidad;
        this.responsable = responsable;
        this.serial_container = serial_container;
        this.f_salida = f_salida;
    }
    return Mercancia;
}());



/***/ }),

/***/ "./src/app/consulta/consulta.component.css":
/*!*************************************************!*\
  !*** ./src/app/consulta/consulta.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n  [class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  *, *:after, *:before {\r\n    box-sizing: border-box;\r\n  }\r\n  .grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n  .grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .col-1-4 {\r\n    width: 20%;\r\n  }\r\n  .module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eeeeee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #1a6be6;\r\n    border-radius: 2px;\r\n  }\r\n  @media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n  @media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }\r\n  @media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n  @media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }\r\n  /*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0dBQ3RCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLHNCQUFzQjtHQUN2QjtFQUNEO0lBR0UsdUJBQXVCO0dBQ3hCO0VBQ0g7SUFDSSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsVUFBVTtHQUNYO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0U7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUU7R0FDdEI7RUFDRDtJQUNFO01BQ0UsVUFBVTtLQUNYO0lBQ0Q7TUFDRSxnQkFBZ0I7S0FDakI7R0FDRjtFQUVEO0lBQ0U7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUU7R0FDdEI7RUFDRDtJQUNFO01BQ0UsVUFBVTtLQUNYO0lBQ0Q7TUFDRSxnQkFBZ0I7S0FDakI7R0FDRjtFQUNIOzs7O0VBSUUiLCJmaWxlIjoic3JjL2FwcC9jb25zdWx0YS9jb25zdWx0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj0nY29sLSddIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAqLCAqOmFmdGVyLCAqOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuLmdyaWQtcGFkIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgLmdyaWQtcGFkID4gW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuZ3JpZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5jb2wtMS00IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5tb2R1bGUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZWVlZWVlO1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNmJlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubW9kdWxlIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLm1vZHVsZSB7XHJcbiAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1vZHVsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgbWF4LWhlaWdodDogNzVweDsgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZ3JpZCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5tb2R1bGUge1xyXG4gICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiovIl19 */"

/***/ }),

/***/ "./src/app/consulta/consulta.component.html":
/*!**************************************************!*\
  !*** ./src/app/consulta/consulta.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container-fluid\">\n          <div class=\"table-responsive-xl\">\n              <div class=\"row d-flex justify-content-center\">\n         <table class=\"table table-hover table-bordered\"  >\n            <div class=\"shadow-xl p-3 mb-10 bg-light rounded\">\n  <thead>\n    <tr  class=\"table-active\">\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">Mercancia</th>\n      <th scope=\"col\">Tipo</th>\n      <th scope=\"col\">Cantidad averiada</th>\n      <th scope=\"col\">Cantidad Intacta</th>\n      <th scope=\"col\">Fecha Entrada</th>\n      <th scope=\"col\">Fecha Salida</th>\n      <th scope=\"col\">Fecha Caducidad</th>\n      <th scope=\"col\">Cliente</th>\n      <th scope=\"col\">ID Cliente</th>\n      <th scope=\"col\">Telefono</th>\n      <th scope=\"col\"> E-mail</th>\n      <th scope=\"col\">Serial</th>\n      <th scope=\"col\">Cliente salida</th>\n\n\n\n    </tr>\n  </thead>\n  <tbody>\n    <tr  *ngFor=\"let a of b.lista_mercancia\">\n      <th scope=\"row-md-3\">{{a._id}} </th>\n      <td>{{a.nombre}}</td>\n      <td>{{a.tipo_mercancia}}</td>\n      <td>{{a.cantidad_mal_estado}}</td>\n      <td>{{a.cantidad_buen_estado}}</td>  \n      <td>{{a.f_entrada}}</td>\n      <td>{{a.f_salida}}</td>\n      <td>{{a.fecha_caducidad}}</td>\n      <td>{{a.responsable}}</td>\n      <td>{{a.id_cliente}}</td> \n      <td>{{a.telefono}}</td>\n      <td>{{a.mail}}</td>\n      <td>{{a.serial_container}}</td>\n      <td>{{a.responsable}}</td>    \n\n       </tr>\n    </tbody>\n  </div>\n    </table>\n</div>\n</div>\n </div>\n<footer>\n  <div class=\"container\">\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#colapse\" aria-expanded=\"false\" aria-controls=\"colapse\" > ver Bodega\n          \n        </button>  \n        <div class=\"collapse\" id=\"colapse\">\n          <div class=\"card card-body\">\n              <div class=\"grid grid-pad\">       \n                  <a  *ngFor=\"let position of  b.lista_posicion\" class=\"col-1-4\" role=\"button\" >                     \n                    <div *ngIf=\"position.disponibilidad\" [class.selected]=\"position===posi\"\n                     (click)=\"abrir(position)\"  class=\"module\">\n                        <h5>{{position.id_posicion}}</h5>                         \n                    </div>\n                  </a>                 \n                </div>\n          </div>\n        </div>\n    \n    <div *ngIf=\"posi\">\n    <ul>\n        <li>aqui va la Mercancia # {{posi.id_mercancia}}</li> \n      </ul>\n    </div> \n  \n  </div>\n\n  </footer>"

/***/ }),

/***/ "./src/app/consulta/consulta.component.ts":
/*!************************************************!*\
  !*** ./src/app/consulta/consulta.component.ts ***!
  \************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_operaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/operaciones.service */ "./src/app/servicios/operaciones.service.ts");
/* harmony import */ var _servicios_bodega_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/bodega.service */ "./src/app/servicios/bodega.service.ts");




var ConsultaComponent = /** @class */ (function () {
    function ConsultaComponent(o, b) {
        this.o = o;
        this.b = b;
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    ConsultaComponent.prototype.listar = function () {
        var _this = this;
        this.o.getMerca()
            .subscribe(function (res) {
            //this.o.l = res as Mercancia[];
            _this.b.lista_mercancia = res;
            console.log(res);
        });
    };
    ConsultaComponent.prototype.abrir = function (a) {
        this.posi = a;
    };
    ConsultaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.css */ "./src/app/consulta/consulta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_operaciones_service__WEBPACK_IMPORTED_MODULE_2__["OperacionesService"],
            _servicios_bodega_service__WEBPACK_IMPORTED_MODULE_3__["BodegaService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/entrada/entrada.component.css":
/*!***********************************************!*\
  !*** ./src/app/entrada/entrada.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJhZGEvZW50cmFkYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/entrada/entrada.component.html":
/*!************************************************!*\
  !*** ./src/app/entrada/entrada.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <br>\n\n <div class=\"container-fluid\" >\n      <div class=\"shadow-lg p-3 mb-5 bg-light rounded\">\n   <form #formulario=ngForm (ngSubmit)=\"crearMerca(formulario)\">\n     <div class=\"form-row\"> <!--MERCANCIA-->\n        <div class=\"form-group col-md-6\">\n          <label>Id Mercancia</label>\n          <input type=\"text\" class=\"form-control\" name=\"_id\"\n           #_id=\"ngModel\"  [(ngModel)]=o.m._id placeholder=\"ID\" required>\n        </div>\n        <div class=\"form-group col-md-6\">\n            <label>Nombre</label>\n            <input type=\"text\" class=\"form-control\" name=\"nombre\" \n            #nombre=\"ngModel\" [(ngModel)]=o.m.nombre placeholder=\"Nombre\" required>          \n        </div>\n      </div>\n      <div class=\"form-group col-md-5\">\n        <label>Tipo Mercancia</label>\n        <input type=\"text\" class=\"form-control\" name=\"tipo_mercancia\" \n        #tipo_mercancia=\"ngModel\" [(ngModel)]=o.m.tipo_mercancia placeholder=\"Tipo de mercancia\" required>\n      </div>\n        <div class=\"form-group\"> <!--MERCANCIA-->\n            <div class=\"form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\" data-toggle=\"collapse\" data-target=\"#cantidad_averiada\">\n          <label class=\"form-check-label\">Carga Averiada</label>\n          </div>       <!--TRUCO COLAPSE-->\n          <div class=\"collapse\" id=\"cantidad_averiada\">\n              <label>cantidad(KG-L)</label>\n            <input class=\"form-group\" type=\"number\" min=\"1\" name=\"cantidad_mal_estado\" #cantidad_mal_estado=\"ngModel\"\n            [(ngModel)]=o.m.cantidad_mal_estado placeholder=\"averiada\">\n             </div>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n             <label>Cantidad de Carga (KG-L)</label>\n             <input type=\"number\" class=\"form-control\" min=\"1\" name=\"cantidad_buen_estado\" #cantidad_buen_estado=\"ngModel\" \n             [(ngModel)]=o.m.cantidad_buen_estado placeholder=\"Cantidad buen estado\" required> \n         </div>\n         <div class=\"form-group col-md-6\">\n            <label>Fecha Entrada</label>\n            <input type=\"date\" class=\"form-control\" name=\"f_entrada\" #f_entrada=\"ngModel\"\n            [(ngModel)]=o.m.f_entrada placeholder=\"fecha_entrada\" required> \n          </div>\n         </div>\n         <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" data-toggle=\"collapse\" data-target=\"#caducidad\">\n            <label class=\"form-check-label\">Fecha Caducidad</label>\n          </div>  <!--TRUCO COLAPSE-->\n          <div class=\"collapse\" id=\"caducidad\">\n              <label>Fecha de Caducidad</label>\n            <input class=\"form-group\" type=\"date\" name=\"fecha_caducidad\" #fecha_caducidad=\"ngModel\"\n            [(ngModel)]=o.m.fecha_caducidad placeholder=\"caducidad\">\n             </div>\n          </div>\n      <div class=\"form-row\"> <!--CLIENTE-->\n        <div class=\"form-group col-md-6\">\n          <label>Nombre Cliente</label>\n          <input class=\"form-control\" type=\"text\" name=\"responsable\" #responsable=\"ngModel\"\n          [(ngModel)]=o.m.responsable.nombre placeholder=\"Cliente\" required>         \n        </div>\n       <div class=\"form-group col-md-6\">\n            <label>ID Cliente</label>\n            <input class=\"form-control\" type=\"text\" name=\"id_cliente\"\n            #id_cliente=\"ngModel\" [(ngModel)]=o.m.id_cliente placeholder=\"id_cliente\" required>\n          </div>\n          <div class=\"form-group col-md-6\">\n              <label>Telefono Cliente</label>\n              <input class=\"form-control\" type=\"text\" name=\"telefono\" #telefono=\"ngModel\"\n              [(ngModel)]=o.m.telefono placeholder=\"Telefono\" required>\n          </div>\n          <div class=\"form-group col-md-6\">\n              <label>E-mail Cliente</label>\n              <input class=\"form-control\" type=\"mail\" name=\"mail\" #mail=\"ngModel\"\n              [(ngModel)]=o.m.mail placeholder=\"E-mail\" required>\n          </div>\n          <div class=\"form-group col-md-5\">\n            <label>Serial Contenedor</label>\n            <input class=\"form-control\" type=\"number\" name=\"serial_container\" #serial_container=\"ngModel\"\n            [(ngModel)]=o.m.serial_container placeholder=\"Serial\" required>\n        </div>\n     \n        </div>\n        <div class=\"form-action-row\" >\n          <button type=\"submit\" class=\"btn btn-success\">enter</button>\n          <button type=\"reset\" class=\"btn btn-danger\"> cancelar</button> \n         </div>\n          \n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/entrada/entrada.component.ts":
/*!**********************************************!*\
  !*** ./src/app/entrada/entrada.component.ts ***!
  \**********************************************/
/*! exports provided: EntradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradaComponent", function() { return EntradaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_operaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/operaciones.service */ "./src/app/servicios/operaciones.service.ts");
/* harmony import */ var _clases_mercancia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/mercancia */ "./src/app/clases/mercancia.ts");
/* harmony import */ var _servicios_bodega_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/bodega.service */ "./src/app/servicios/bodega.service.ts");





var EntradaComponent = /** @class */ (function () {
    function EntradaComponent(o, b) {
        this.o = o;
        this.b = b;
        this.alerta1 = false;
        this.alerta2 = false;
    }
    EntradaComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    EntradaComponent.prototype.listar = function () {
        var _this = this;
        this.o.getMerca()
            .subscribe(function (res) {
            _this.b.lista_mercancia = res;
            console.log(res);
        });
    };
    EntradaComponent.prototype.crearMerca = function (formulario) {
        var _this = this;
        this.o.crear(formulario.value)
            .subscribe(function (res) {
            console.log(res);
            _this.listar();
            /*if(res==='ok'){
               this.alerta1=true;
             }else if(res){
               this.alerta2=true;
             }*/
        });
        console.log(formulario.value);
        formulario.reset();
        this.o.m = new _clases_mercancia__WEBPACK_IMPORTED_MODULE_3__["Mercancia"]();
    };
    EntradaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrada',
            template: __webpack_require__(/*! ./entrada.component.html */ "./src/app/entrada/entrada.component.html"),
            styles: [__webpack_require__(/*! ./entrada.component.css */ "./src/app/entrada/entrada.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_operaciones_service__WEBPACK_IMPORTED_MODULE_2__["OperacionesService"],
            _servicios_bodega_service__WEBPACK_IMPORTED_MODULE_4__["BodegaService"]])
    ], EntradaComponent);
    return EntradaComponent;
}());



/***/ }),

/***/ "./src/app/guard/general.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guard/general.guard.ts ***!
  \****************************************/
/*! exports provided: GeneralGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralGuard", function() { return GeneralGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/log.service */ "./src/app/servicios/log.service.ts");




var GeneralGuard = /** @class */ (function () {
    function GeneralGuard(r, l) {
        this.r = r;
        this.l = l;
    }
    GeneralGuard.prototype.canActivate = function (next, state) {
        if (!(this.l.flag)) {
            return false;
        }
        else {
            this.r.navigate(['']);
            return true;
        }
    };
    GeneralGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]])
    ], GeneralGuard);
    return GeneralGuard;
}());



/***/ }),

/***/ "./src/app/guard/login.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guard/login.guard.ts ***!
  \**************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/log.service */ "./src/app/servicios/log.service.ts");





var LoginGuard = /** @class */ (function () {
    function LoginGuard(a, r, l) {
        this.a = a;
        this.r = r;
        this.l = l;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        /* return this.a.authState
         .pipe(take(1))
         .pipe(map(authState=> !!authState))
         .pipe(tap(auth=>{ console.log(auth);
           if(!auth ){
            this.r.navigate(['/login']);
           }
         }));
       }*/
        if (this.l.flag) {
            return true;
        }
        else {
            this.r.navigate(['/login']);
            return false;
        }
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n \r\n  \r\n<div class=\"container-fluid\"> \r\n    <div class=\"shadow-lg p-3 mb-5 bg-light rounded\">\r\n    <form #formulario=ngForm (ngSubmit)=\"getMercancia(formulario)\">\r\n    <div class=\"form-row\">\r\n    <div class=\"form-group col-md-4\">\r\n        <input type=\"text\" class=\"form-control\" name=\"_id\"\r\n        #_id=\"ngModel\"  [(ngModel)]=o.m._id placeholder=\"buscar por ID\" required>\r\n    </div>\r\n    </div>\r\n    <div class=\"form-action-row\" >\r\n        <button type=\"submit\"  class=\"btn btn-success\">enter</button>\r\n        <button type=\"reset\" class=\"btn btn-danger\"> cancelar</button> \r\n       </div>\r\n    </form>\r\n      \r\n     <div *ngIf=\"mercancia\"> \r\n        <table class=\"table table-hover table-responsive-sm table-bordered\" >\r\n            <thead>\r\n              <tr>\r\n                  <th scope=\"col\">ID</th>\r\n                  <th scope=\"col\">Mercancia</th>\r\n                  <th scope=\"col\">Cantidad Almacenada</th>\r\n                  <th scope=\"col\">Cliente</th>\r\n                  <th scope=\"col\">ID Cliente</th>\r\n                  <th scope=\"col\">Fecha salida</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr >\r\n                <th scope=\"row-md-3\">{{mercancia._id}} </th>\r\n                <td>{{mercancia.nombre}}</td>\r\n                <td> {{mercancia.cantidad_buen_estado}} </td>\r\n                <td>{{mercancia.salida.responsable}}</td>\r\n                <td>{{mercancia.salida.id_cliente}}</td>\r\n                <td>{{mercancia.salida.f_salida}}</td>\r\n                 \r\n                <td>\r\n                  <a id=\"boton\" role=\"button\" class=\"btn btn-sm\"  (click)=\"SaveDemo()\"  >\r\n                    <i class=\"material-icons\" style=\"color: rgba(16, 148, 16, 0.521);\">save</i>\r\n                    </a>\r\n                    <a id=\"boton\" role=\"button\" class=\"btn btn-sm\"  (click)=\"cancel(mercancia)\"  >\r\n                      <i class=\"material-icons\" style=\"color: red;\">clear</i>\r\n                      </a>\r\n                </td>\r\n                \r\n              </tr>\r\n                       \r\n            </tbody>\r\n            \r\n          </table>\r\n          \r\n     </div>\r\n    \r\n    </div>\r\n    \r\n    </div>\r\n     \r\n   \r\n<!--\r\n <footer>\r\n      <div >\r\n        <table class=\"table table-hover table-responsive-sm table-bordered\" >\r\n          <thead>\r\n            <tr>\r\n                <th scope=\"col\">f_salida</th>\r\n                <th scope=\"col\">_id</th>\r\n                <th scope=\"col\">cantidad_buen_estado</th>\r\n                <th scope=\"col\">telefono</th>\r\n                <th scope=\"col\">mail</th>\r\n                <th scope=\"col\">id_cliente</th>\r\n                <th scope=\"col\">responsable</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let a of b.arreglo\" > \r\n              <tr *ngIf=\"mercancia._id==a._id\">\r\n              \r\n              <td>{{a.f_salida}}</td>\r\n              <td>{{a._id}}</td>\r\n              <td>{{a.cantidad_buen_estado }}</td>\r\n              <td>{{a.telefono}}</td>\r\n              <td>{{a.mail}}</td>\r\n              <td>{{a.id_cliente}}</td>\r\n              <td>{{a.responsable}}</td>\r\n              \r\n            </tr>\r\n                     \r\n          </tbody>\r\n          \r\n        </table>\r\n        \r\n    \r\n      </div>\r\n    </footer>\r\n-->\r\n   "

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_bodega_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/bodega.service */ "./src/app/servicios/bodega.service.ts");
/* harmony import */ var _servicios_operaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/operaciones.service */ "./src/app/servicios/operaciones.service.ts");
/* harmony import */ var _clases_mercancia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clases/mercancia */ "./src/app/clases/mercancia.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






var InfoComponent = /** @class */ (function () {
    function InfoComponent(o, b) {
        this.o = o;
        this.b = b;
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    InfoComponent.prototype.listar = function () {
        var _this = this;
        this.o.getMerca()
            .subscribe(function (res) {
            _this.b.lista_mercancia = res;
            console.log(res);
        });
    };
    InfoComponent.prototype.getMercancia = function (formulario) {
        var _this = this;
        console.log(formulario.value._id);
        this.o.buscarMerca(formulario.value._id).subscribe(function (res) {
            _this.mercancia = res;
            console.log(res);
            formulario.reset();
        });
    };
    InfoComponent.prototype.SaveDemo = function () {
        var a = document.getElementsByTagName("table");
        var file = new File([('' + a[0].innerText)], "test.xls", { type: 'text/plain;charset=utf-8' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(file);
    };
    InfoComponent.prototype.cancel = function (m) {
        m = new _clases_mercancia__WEBPACK_IMPORTED_MODULE_4__["Mercancia"]();
        this.mercancia = m;
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_operaciones_service__WEBPACK_IMPORTED_MODULE_3__["OperacionesService"],
            _servicios_bodega_service__WEBPACK_IMPORTED_MODULE_2__["BodegaService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container fluid\">\n  <div class=\"shadow-lg p-3 mb-5 bg-light rounded\">\n    <div class=\"row\"> \n          <div class=\"col d-flex justify-content-center\">\n            <form class=\"form-group\"   #formulario=ngForm (ngSubmit)=\"inicio(formulario)\">\n                <h3 class=\"text-primary\">Inicia sesión</h3>\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <label for=\"Usuario\"><h5 class=\"d-flex text-justify-center\">Usuario</h5></label>\n                  <input type=\"mail\"  ngModel name=\"mail\"class=\"form-control\" placeholder=\"@mail usuario\">\n                </div>\n                <div class=\"col-sm-6\">\n                    <label for=\"clave\"><h5 class=\"d-flex text-justify-center\"clave>Clave</h5></label>\n                  <input type=\"password\"  ngModel name=\"password\"class=\"form-control\" placeholder=\"password\">\n                </div>\n               <div class=\"col-sm-3\">\n                  <label for=\"Entrar\"><h5 class=\"d-flex text-justify-center\"clave>Entrar</h5></label>\n                  <button  type=\"submit\" class=\"btn btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Entrar\"> \n                      <i class=\"material-icons  md-52\" \n                      style=\"font-size:38px; color:rgb(3, 3, 3);\">done</i>\n                   </button>\n               </div>\n               <div class=\"col-sm-3\">\n                  <label for=\"Cancelar\"><h5 class=\"d-flex text-justify-center\"clave>Cancelar</h5></label>\n                  <button  type=\"reset\" class=\"btn btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Cancelar\">  \n                      <i class=\"material-icons  md-52\" \n                      style=\"font-size:38px; color:rgb(3, 3, 3);\">clear</i>\n                   </button>\n               </div>\n                 <!-- \n                \n                     <div class=\"col-sm-6\">                    \n                  <button  type=\"submit\" class=\"btn\" (click)=\"login()\"> \n                      <i class=\"material-icons  md-52\" \n                      style=\"font-size:38px; color:rgb(3, 3, 3);\">account_circle</i>\n                  </button>\n                  <label for=\"clave\"><h5 class=\"d-flex text-justify-center\"clave>entra con google</h5></label>\n                </div>\n\n              -->\n               \n                \n              </div>\n            </form>   \n           \n        </div>\n     </div>\n    </div>\n  </div>\n "

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/log.service */ "./src/app/servicios/log.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(logo, r, l) {
        this.logo = logo;
        this.r = r;
        this.l = l;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.logo.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
        this.l.flag = true;
    };
    LoginComponent.prototype.inicio = function (formulario) {
        this.l.a = formulario.value.mail;
        if (formulario.value.mail === 'oleocali@correo.com' && formulario.value.password === '123456') {
            console.log(formulario.value);
            this.l.flag = true;
            this.r.navigate(['']);
            this.l.nav2 = true;
            formulario.reset();
        }
        else {
            this.l.flag = false;
            formulario.reset();
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_servicios_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/navbar/navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/login/navbar/navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login/navbar/navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/login/navbar/navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n    <div class=\"navbar fixed-top navbar-light  p-1 mb-2 bg-primary\" *ngIf=\"!l.nav\">\n        \n        <button class=\"btn btn-small col-sm-11\"  style=\"text-align: right\"  (click)=\"log()\">\n           \n        <i class=\"material-icons  md-52 \" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Login\" style=\" font-size:38px; color:rgb(255, 255, 255);\">account_circle </i>\n        \n        </button> \n       </div>\n \n       <div class=\"navbar fixed-top navbar-light  p-1 mb-2 bg-secondary\" *ngIf=\"l.nav2\">\n        \n        <button class=\"btn btn-small col-sm-11\"  style=\"text-align: right\"  (click)=\"close()\">\n           \n        <i class=\"material-icons  md-52 \" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Cerrar\" style=\" font-size:38px; color:rgb(255, 255, 255);\">clear </i>\n        \n        </button> \n       </div>\n \n"

/***/ }),

/***/ "./src/app/login/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/log.service */ "./src/app/servicios/log.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(r, l) {
        this.r = r;
        this.l = l;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.log = function () {
        this.l.nav = true;
        this.r.navigate(['/login']);
    };
    NavbarComponent.prototype.close = function () {
        this.l.nav2 = false;
        this.l.nav = false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/login/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/login/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/salida/salida.component.css":
/*!*********************************************!*\
  !*** ./src/app/salida/salida.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGlkYS9zYWxpZGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/salida/salida.component.html":
/*!**********************************************!*\
  !*** ./src/app/salida/salida.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<div class=\"container-fluid\"> \n    <div class=\"shadow-lg p-3 mb-5 bg-light rounded\"> \n<form #formulario=ngForm (ngSubmit)=\"getMercancia(formulario)\">\n<div class=\"form-row\">\n<div class=\"form-group col-md-4\">\n    <input type=\"text\" class=\"form-control\" name=\"_id\"\n    #_id=\"ngModel\"  [(ngModel)]=o.m._id placeholder=\"buscar por ID\" required>\n</div>\n</div>\n<div class=\"form-action-row\" >\n    <button type=\"submit\"  class=\"btn btn-success\">enter</button>\n    <button type=\"reset\" class=\"btn btn-danger\"> cancelar</button> \n   </div>\n</form>\n  \n\n \n\n <div *ngIf=\"mercancia\"> \n    <table class=\"table table-hover table-responsive-sm table-bordered\" >\n        <thead>\n          <tr>\n              <th scope=\"col\">ID</th>\n              <th scope=\"col\">Mercancia</th>\n              <th scope=\"col\">Cantidad Intacta</th>\n              <th scope=\"col\">Cliente</th>\n              <th scope=\"col\">ID Cliente</th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr >\n            <th scope=\"row-md-3\">{{mercancia._id}} </th>\n            <td>{{mercancia.nombre}}</td>\n            <td> {{mercancia.cantidad_buen_estado}} </td>\n            <td>{{mercancia.responsable}}</td>\n            <td>{{mercancia.id_cliente}}</td>\n            <td>\n              <a role=\"button\" class=\"btn btn-sm\" (click)=\"edit(mercancia)\" >\n                <i class=\"material-icons\" style=\"color: blue;\">edit</i>\n                </a>\n              <a role=\"button\" class=\"btn  btn-sm\" >\n                  <i class=\"material-icons\" style=\"color: rgba(255, 30, 0, 0.829);\">delete</i>\n              </a>\n              \n            </td>\n            \n          </tr>\n                   \n        </tbody>\n        \n      </table>\n      <form #formulario=ngForm (ngSubmit)=\"editarMercancia(formulario)\"  (ngSubmit)=\"methodo(formulario)\">\n        <div class=\"form-row\">\n           \n            <div class=\"form-group col-md-4\">\n              \n              <input type=\"text\" class=\"form-control\" name=\"responsable\"\n              #responsable=\"ngModel\"  [(ngModel)]=o.m.responsable placeholder=\"Solicitante\"  required> \n              <!--esto es lo que hace que funcione-->\n          </div>\n          <div class=\"form-group col-md-4\">\n             \n            <input type=\"text\" class=\"form-control\" name=\"id_cliente\"\n            #id_cliente=\"ngModel\"  [(ngModel)]=o.m.id_cliente placeholder=\"ID de cliente\" required> <!--esto es lo que hace que funcione-->\n        </div>\n        <div class=\"form-group col-md-4\">\n           \n          <input type=\"text\" class=\"form-control\" name=\"telefono\"\n          #telefono=\"ngModel\"  [(ngModel)]=o.m.telefono placeholder=\"Telefono Cliente\"  required>  <!--esto es lo que hace que funcione-->\n      </div>\n      <div class=\"form-group col-md-4\">\n         \n        <input type=\"email\" class=\"form-control\" name=\"mail\" placeholder=\"E-mail Cliente\"\n        #mail=\"ngModel\"  [(ngModel)]=o.m.mail  required> <!--esto es lo que hace que funcione-->\n      </div>\n      <div class=\"form-group col-md-4\">\n        <input type=\"hidden\" class=\"form-control\" name=\"_id\"\n        #_id=\"ngModel\" [(ngModel)]=o.m._id  required> <!--esto es lo que hace que funcione-->\n    </div>\n       \n    \n            </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n         <label>Cantidad de Carga (KG-L)</label>\n         \n                 <input type=\"number\" class=\"form-control\" min=\"1\" max=\"mercancia.cantidad_buen_estado\"  name=\"cantidad_buen_estado\" #cantidad_buen_estado=\"ngModel\" \n                [(ngModel)]= o.m.cantidad_buen_estado\n                 placeholder=\"Cantidad buen estado\" required> \n         </div>\n         <div class=\"form-group col-md-4\">\n          <label>Fecha de salida</label>\n          \n          <input type=\"date\" class=\"form-control\" id=\"f_salida\" name=\"f_salida\" #f_salida=\"ngModel\"\n           [(ngModel)]= o.m.f_salida   \n          placeholder=\"Salida\" required> \n          </div>\n        </div>\n     <div class=\"form-action-row\" >\n      <button type=\"submit\" class=\"btn btn-success\">enter</button>\n      <button type=\"reset\" class=\"btn btn-danger\"> cancelar</button> \n     </div>\n    </form>\n\n    </div>\n     </div>\n</div>\n<footer>\n  <div>\n    <table class=\"table table-hover table-responsive-sm table-bordered\" >\n      <thead>\n        <tr>\n            <th scope=\"col\">f_salida</th>\n            <th scope=\"col\">_id</th>\n            <th scope=\"col\">cantidad_buen_estado</th>\n            <th scope=\"col\">telefono</th>\n            <th scope=\"col\">mail</th>\n            <th scope=\"col\">id_cliente</th>\n            <th scope=\"col\">responsable</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let a of b.arreglo  \">\n          \n          <td>{{a.f_salida}}</td>\n          <td>{{a._id}}</td>\n          <td>{{a.cantidad_buen_estado }}</td>\n          <td>{{a.telefono}}</td>\n          <td>{{a.mail}}</td>\n          <td>{{a.id_cliente}}</td>\n          <td>{{a.responsable}}</td>\n          \n        </tr>\n                 \n      </tbody>\n      \n    </table>\n    \n\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/salida/salida.component.ts":
/*!********************************************!*\
  !*** ./src/app/salida/salida.component.ts ***!
  \********************************************/
/*! exports provided: SalidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaComponent", function() { return SalidaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_operaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/operaciones.service */ "./src/app/servicios/operaciones.service.ts");
/* harmony import */ var _servicios_bodega_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/bodega.service */ "./src/app/servicios/bodega.service.ts");




var SalidaComponent = /** @class */ (function () {
    function SalidaComponent(o, b) {
        this.o = o;
        this.b = b;
    }
    SalidaComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    SalidaComponent.prototype.getMercancia = function (formulario) {
        var _this = this;
        console.log(formulario.value._id);
        this.o.buscarMerca(formulario.value._id).subscribe(function (res) {
            _this.mercancia = res;
            //this.mercancia=this.o.m;
            console.log(res);
            formulario.reset();
        });
    };
    SalidaComponent.prototype.edit = function (mercancia) {
        this.o.m = mercancia;
        //this.b.model.f_salida=this.o.m.f_salida; 
        console.log(this.o.m);
    };
    SalidaComponent.prototype.editarMercancia = function (formulario) {
        var _this = this;
        if (formulario.value._id) {
            this.o.editarMerca(formulario.value).subscribe(function (res) {
                console.log(formulario.value);
                console.log(res);
                formulario.reset();
                _this.listar();
            });
        }
    };
    SalidaComponent.prototype.listar = function () {
        var _this = this;
        this.o.getMerca()
            .subscribe(function (res) {
            _this.b.lista_mercancia = res;
            console.log(res);
        });
    };
    SalidaComponent.prototype.methodo = function (formulario) {
        this.b.model = formulario.value;
        this.b.arreglo.push(this.b.model);
        this.b.model = {};
    };
    SalidaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salida',
            template: __webpack_require__(/*! ./salida.component.html */ "./src/app/salida/salida.component.html"),
            styles: [__webpack_require__(/*! ./salida.component.css */ "./src/app/salida/salida.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_operaciones_service__WEBPACK_IMPORTED_MODULE_2__["OperacionesService"],
            _servicios_bodega_service__WEBPACK_IMPORTED_MODULE_3__["BodegaService"]])
    ], SalidaComponent);
    return SalidaComponent;
}());



/***/ }),

/***/ "./src/app/servicios/bodega.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/bodega.service.ts ***!
  \*********************************************/
/*! exports provided: BodegaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodegaService", function() { return BodegaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BodegaService = /** @class */ (function () {
    function BodegaService() {
        this.arreglo = [];
        this.model = {};
        this.lista_posicion = [
            { id_mercancia: '1', id_posicion: '#1', disponibilidad: false },
            { id_mercancia: '2', id_posicion: '#2', disponibilidad: true },
            { id_mercancia: '3', id_posicion: '#3', disponibilidad: true },
            { id_mercancia: '4', id_posicion: '#4', disponibilidad: true },
            { id_mercancia: '5', id_posicion: '#5', disponibilidad: true },
            { id_mercancia: '6', id_posicion: '#6', disponibilidad: true },
            { id_mercancia: '7', id_posicion: '#7', disponibilidad: true },
            { id_mercancia: '8', id_posicion: '#8', disponibilidad: true },
            { id_mercancia: '9', id_posicion: '#9', disponibilidad: false },
            { id_mercancia: '10', id_posicion: '#10', disponibilidad: false }
        ];
    }
    BodegaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BodegaService);
    return BodegaService;
}());



/***/ }),

/***/ "./src/app/servicios/log.service.ts":
/*!******************************************!*\
  !*** ./src/app/servicios/log.service.ts ***!
  \******************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogService = /** @class */ (function () {
    function LogService() {
        this.nav = false;
        this.nav2 = false;
        this.a = null;
        this.flag = false;
    }
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/servicios/operaciones.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/operaciones.service.ts ***!
  \**************************************************/
/*! exports provided: OperacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesService", function() { return OperacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _clases_mercancia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/mercancia */ "./src/app/clases/mercancia.ts");




var OperacionesService = /** @class */ (function () {
    function OperacionesService(http) {
        this.http = http;
        this.ruta = "http://localhost:3000/index";
        this.m = new _clases_mercancia__WEBPACK_IMPORTED_MODULE_3__["Mercancia"]();
    }
    OperacionesService.prototype.getMerca = function () {
        return this.http.get(this.ruta);
    };
    OperacionesService.prototype.crear = function (mercancia) {
        return this.http.post(this.ruta, mercancia);
    };
    OperacionesService.prototype.eliminar = function (_id) {
        return this.http.delete(this.ruta);
    };
    OperacionesService.prototype.buscarMerca = function (id) {
        return this.http.get(this.ruta + ("/" + id));
    };
    OperacionesService.prototype.editarMerca = function (mercancia) {
        return this.http.put(this.ruta + ("/" + mercancia._id), mercancia); //solo para probar
    };
    OperacionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OperacionesService);
    return OperacionesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyApEpWH3UJSbVKgFp-soap0_7OPOKrbMDk",
        authDomain: "pro-fritos.firebaseapp.com",
        databaseURL: "https://pro-fritos.firebaseio.com",
        projectId: "pro-fritos",
        storageBucket: "pro-fritos.appspot.com",
        messagingSenderId: "564092297108"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AppServ\www\Expreso Andino\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map