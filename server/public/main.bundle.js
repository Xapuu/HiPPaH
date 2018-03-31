webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_user_register_user_component__ = __webpack_require__("./src/app/components/register-user/register-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_organization_register_organization_component__ = __webpack_require__("./src/app/components/register-organization/register-organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_scanner_scanner_component__ = __webpack_require__("./src/app/components/scanner/scanner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_confirm_payment_confirm_payment_component__ = __webpack_require__("./src/app/components/confirm-payment/confirm-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register-user',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_user_register_user_component__["a" /* RegisterUserComponent */]
    },
    {
        path: 'register-organization',
        component: __WEBPACK_IMPORTED_MODULE_4__components_register_organization_register_organization_component__["a" /* RegisterOrganizationComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'scan',
        component: __WEBPACK_IMPORTED_MODULE_6__components_scanner_scanner_component__["a" /* ScannerComponent */]
    },
    {
        path: 'confirm',
        component: __WEBPACK_IMPORTED_MODULE_7__components_confirm_payment_confirm_payment_component__["a" /* ConfirmPaymentComponent */]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<hip-navbar></hip-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hip';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zxing_ngx_scanner__ = __webpack_require__("./node_modules/@zxing/ngx-scanner/esm5/zxing-ngx-scanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_user_register_user_component__ = __webpack_require__("./src/app/components/register-user/register-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_organization_register_organization_component__ = __webpack_require__("./src/app/components/register-organization/register-organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_scanner_scanner_component__ = __webpack_require__("./src/app/components/scanner/scanner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_confirm_payment_confirm_payment_component__ = __webpack_require__("./src/app/components/confirm-payment/confirm-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Scanner lib for qr codes.











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_register_user_register_user_component__["a" /* RegisterUserComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_organization_register_organization_component__["a" /* RegisterOrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_scanner_scanner_component__["a" /* ScannerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_confirm_payment_confirm_payment_component__["a" /* ConfirmPaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__zxing_ngx_scanner__["a" /* ZXingScannerModule */].forRoot(),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/confirm-payment/confirm-payment.component.html":
/***/ (function(module, exports) {

module.exports = "Pay <span ngNonBindable>{{ money }}</span> to <span ngNonBindable>{{ person }}</span>?\r\n\r\n<button>Yes</button>\r\n<button>No</button>\r\n"

/***/ }),

/***/ "./src/app/components/confirm-payment/confirm-payment.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/confirm-payment/confirm-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmPaymentComponent = /** @class */ (function () {
    function ConfirmPaymentComponent() {
    }
    ConfirmPaymentComponent.prototype.ngOnInit = function () {
    };
    ConfirmPaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-confirm-payment',
            template: __webpack_require__("./src/app/components/confirm-payment/confirm-payment.component.html"),
            styles: [__webpack_require__("./src/app/components/confirm-payment/confirm-payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmPaymentComponent);
    return ConfirmPaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Fast, secure and taxfree mobile payments</h1>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n\t<h2 class=\"text-center pb-2\"></h2>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12 col-12 pb-3\">\r\n\t\t\t<div class=\"card h-100\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h2 class=\"text-center mb-4\">Login</h2>\r\n\t\t\t\t\t<form class=\"py-2\"\r\n\t\t\t\t\t    role=\"form\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"inputEmailForm\"\r\n\t\t\t\t\t\t\t    class=\"sr-only form-control-label\">Email</label>\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t    class=\"form-control\"\r\n\t\t\t\t\t\t\t\t    id=\"inputEmailForm\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"email\"\r\n\t\t\t\t\t\t\t\t    required=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"inputPasswordForm\"\r\n\t\t\t\t\t\t\t    class=\"sr-only form-control-label\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t    class=\"form-control\"\r\n\t\t\t\t\t\t\t\t    id=\"inputPasswordForm\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"password\"\r\n\t\t\t\t\t\t\t\t    required=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10 pb-3 pt-2\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\"\r\n\t\t\t\t\t\t\t\t    class=\"btn btn-outline-secondary btn-lg btn-block\">Sign-in</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\t<a class=\"navbar-brand\"\r\n\t    href=\"#\">HiPPaH</a>\r\n\t<button class=\"navbar-toggler\"\r\n\t    type=\"button\"\r\n\t    data-toggle=\"collapse\"\r\n\t    data-target=\"#navbarSupportedContent\"\r\n\t    aria-controls=\"navbarSupportedContent\"\r\n\t    aria-expanded=\"false\"\r\n\t    aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n\t<div class=\"collapse navbar-collapse\"\r\n\t    id=\"navbarSupportedContent\">\r\n\t\t<ul class=\"navbar-nav mr-auto\">\r\n\t\t\t<li class=\"nav-item\"\r\n\t\t\t    [routerLinkActiveOptions]=\"{exact: true}\"\r\n\t\t\t    routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"nav-link\"\r\n\t\t\t\t    [routerLink]=\"'/'\">Home <span class=\"sr-only\">(current)</span></a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\"\r\n\t\t\t    [routerLinkActiveOptions]=\"{exact: true}\"\r\n\t\t\t    routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"nav-link\"\r\n\t\t\t\t    [routerLink]=\"'/login'\">Login</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\"\r\n\t\t\t    [routerLinkActiveOptions]=\"{exact: true}\"\r\n\t\t\t    routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"nav-link\"\r\n\t\t\t\t    [routerLink]=\"'/register-user'\">Register user</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\"\r\n\t\t\t    [routerLinkActiveOptions]=\"{exact: true}\"\r\n\t\t\t    routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"nav-link\"\r\n\t\t\t\t    [routerLink]=\"'/register-organization'\">Register organization</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\"\r\n\t\t\t    [routerLinkActiveOptions]=\"{exact: true}\"\r\n\t\t\t    routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"nav-link\"\r\n\t\t\t\t    [routerLink]=\"'/profile'\">Profile</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\"\r\n\t\t\t    [routerLinkActiveOptions]=\"{exact: true}\"\r\n\t\t\t    routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"nav-link\"\r\n\t\t\t\t    [routerLink]=\"'/scan'\">Scan</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\"\r\n\t\t\t    [routerLinkActiveOptions]=\"{exact: true}\"\r\n\t\t\t    routerLinkActive=\"active\">\r\n\t\t\t\t<a class=\"nav-link\"\r\n\t\t\t\t    [routerLink]=\"'/confirm'\">Confirm</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register-organization/register-organization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n\t<h2 class=\"text-center pb-2\"></h2>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12 col-12 pb-3\">\r\n\t\t\t<div class=\"card h-100\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h2 class=\"text-center mb-4\">ORGANIZATION Sign-up</h2>\r\n\t\t\t\t\t<form role=\"form\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"input2EmailForm\"\r\n\t\t\t\t\t\t\t    class=\"sr-only form-control-label\">email</label>\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t    class=\"form-control\"\r\n\t\t\t\t\t\t\t\t    id=\"input2EmailForm\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"email\"\r\n\t\t\t\t\t\t\t\t    required=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"input2PasswordForm\"\r\n\t\t\t\t\t\t\t    class=\"sr-only form-control-label\">password</label>\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t    class=\"form-control\"\r\n\t\t\t\t\t\t\t\t    id=\"input2PasswordForm\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"password\"\r\n\t\t\t\t\t\t\t\t    required=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"input2Password2Form\"\r\n\t\t\t\t\t\t\t    class=\"sr-only form-control-label\">verify</label>\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t    class=\"form-control\"\r\n\t\t\t\t\t\t\t\t    id=\"input2Password2Form\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"verify password\"\r\n\t\t\t\t\t\t\t\t    required=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10 pb-3 pt-2\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\"\r\n\t\t\t\t\t\t\t\t    class=\"btn btn-outline-secondary btn-lg btn-block\">Register</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register-organization/register-organization.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register-organization/register-organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterOrganizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterOrganizationComponent = /** @class */ (function () {
    function RegisterOrganizationComponent() {
    }
    RegisterOrganizationComponent.prototype.ngOnInit = function () {
    };
    RegisterOrganizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-register-organization',
            template: __webpack_require__("./src/app/components/register-organization/register-organization.component.html"),
            styles: [__webpack_require__("./src/app/components/register-organization/register-organization.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterOrganizationComponent);
    return RegisterOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/components/register-user/register-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n\t<h2 class=\"text-center pb-2\"></h2>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12 col-12 pb-3\">\r\n\t\t\t<div class=\"card h-100\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h2 class=\"text-center mb-4\">USER: Sign-up</h2>\r\n\t\t\t\t\t<form role=\"form\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"input2EmailForm\"\r\n\t\t\t\t\t\t\t    class=\"sr-only form-control-label\">email</label>\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t    class=\"form-control\"\r\n\t\t\t\t\t\t\t\t    id=\"input2EmailForm\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"email\"\r\n\t\t\t\t\t\t\t\t    required=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"input2PasswordForm\"\r\n\t\t\t\t\t\t\t    class=\"sr-only form-control-label\">password</label>\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t    class=\"form-control\"\r\n\t\t\t\t\t\t\t\t    id=\"input2PasswordForm\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"password\"\r\n\t\t\t\t\t\t\t\t    required=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"input2Password2Form\"\r\n\t\t\t\t\t\t\t    class=\"sr-only form-control-label\">verify</label>\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t    class=\"form-control\"\r\n\t\t\t\t\t\t\t\t    id=\"input2Password2Form\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"verify password\"\r\n\t\t\t\t\t\t\t\t    required=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"mx-auto col-sm-10 pb-3 pt-2\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\"\r\n\t\t\t\t\t\t\t\t    class=\"btn btn-outline-secondary btn-lg btn-block\">Register</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register-user/register-user.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register-user/register-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent() {
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-register',
            template: __webpack_require__("./src/app/components/register-user/register-user.component.html"),
            styles: [__webpack_require__("./src/app/components/register-user/register-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/components/scanner/scanner.component.html":
/***/ (function(module, exports) {

module.exports = "<zxing-scanner #scanner\r\n    class=\"test-class\"\r\n    [autofocusEnabled]=\"false\"\r\n    [device]=\"selectedDevice\"\r\n    (camerasFound)=\"handleFoundCameras($event)\"\r\n    (scanSuccess)=\"handleQrCodeResult($event)\"></zxing-scanner>\r\n"

/***/ }),

/***/ "./src/app/components/scanner/scanner.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/scanner/scanner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScannerComponent = /** @class */ (function () {
    function ScannerComponent() {
    }
    ScannerComponent.prototype.ngOnInit = function () {
    };
    ScannerComponent.prototype.handleFoundCameras = function (cameras) {
        // this.selectedDevice = this.scanner.getDeviceById(cameras[0].deviceId);
        this.selectedDevice = cameras[0];
        console.log(this.selectedDevice);
    };
    ScannerComponent.prototype.handleQrCodeResult = function (resultString) {
        console.log('Result: ', resultString);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('scanner'),
        __metadata("design:type", Object)
    ], ScannerComponent.prototype, "scanner", void 0);
    ScannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hip-scanner',
            template: __webpack_require__("./src/app/components/scanner/scanner.component.html"),
            styles: [__webpack_require__("./src/app/components/scanner/scanner.component.scss")]
        })
    ], ScannerComponent);
    return ScannerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map