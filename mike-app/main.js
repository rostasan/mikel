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
/* harmony import */ var _content_blog_blog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/blog/blog.module */ "./src/app/content/blog/blog.module.ts");
/* harmony import */ var content_blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! content/blog/view/blog-view.component */ "./src/app/content/blog/view/blog-view.component.ts");
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/home/home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var content_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! content/photo-gallery/photo-gallery.component */ "./src/app/content/photo-gallery/photo-gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'blogView', component: content_blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_1__["BlogViewComponent"] },
    { path: 'photo_gallery', component: content_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__["PhotoGalleryComponent"] },
    { path: 'blog', loadChildren: function () { return _content_blog_blog_module__WEBPACK_IMPORTED_MODULE_0__["BlogModule"]; } },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
        this.ModuleWithProviders = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes);
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n<div class=\"background\">\n  <div class=\"topbar\">\n      <app-navbar>\n      </app-navbar>\n  </div> \n\n  <div class=\"container mt-5 pt-5 mw-100 router-outlet\">\n  <router-outlet>\n\n    \n  </router-outlet>\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mike-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _content_shared_services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/shared/services/http-error-handler.service */ "./src/app/content/shared/services/http-error-handler.service.ts");
/* harmony import */ var _content_content_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/content.module */ "./src/app/content/content.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var content_shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! content/shared/services/message.service */ "./src/app/content/shared/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _content_content_module__WEBPACK_IMPORTED_MODULE_1__["ContentModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            exports: [],
            providers: [_content_shared_services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_0__["HttpErrorHandler"], content_shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/blog/blog.module.ts":
/*!*********************************************!*\
  !*** ./src/app/content/blog/blog.module.ts ***!
  \*********************************************/
/*! exports provided: ROUTES, BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _container_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/blog/blog.component */ "./src/app/content/blog/container/blog/blog.component.ts");
/* harmony import */ var _container_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/blogs/blogs.component */ "./src/app/content/blog/container/blogs/blogs.component.ts");
/* harmony import */ var _components_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/blog-form/blog-form.component */ "./src/app/content/blog/components/blog-form/blog-form.component.ts");
/* harmony import */ var content_shared_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! content/shared/services/blog/blog.service */ "./src/app/content/shared/services/blog/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_replace_replace_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/replace/replace.component */ "./src/app/content/blog/view/replace/replace.component.ts");
/* harmony import */ var pipes_pipes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pipes/pipes.component */ "./src/app/pipes/pipes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ROUTES = [
    { path: '', component: _container_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_3__["BlogsComponent"] },
    { path: ':id', component: _container_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"] },
    { path: 'new', component: _container_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"] }
];
var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(ROUTES)
            ],
            declarations: [
                _container_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
                _container_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_3__["BlogsComponent"],
                _components_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_4__["BlogFormComponent"],
                _view_replace_replace_component__WEBPACK_IMPORTED_MODULE_7__["ReplaceComponent"],
                pipes_pipes_component__WEBPACK_IMPORTED_MODULE_8__["PipesComponent"]
            ],
            providers: [
                content_shared_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [
                _view_replace_replace_component__WEBPACK_IMPORTED_MODULE_7__["ReplaceComponent"]
            ]
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ }),

/***/ "./src/app/content/blog/components/blog-form/blog-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content/blog/components/blog-form/blog-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/content/blog/components/blog-form/blog-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/content/blog/components/blog-form/blog-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/blog/components/blog-form/blog-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/blog/components/blog-form/blog-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: BlogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogFormComponent", function() { return BlogFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogFormComponent = /** @class */ (function () {
    function BlogFormComponent() {
    }
    BlogFormComponent.prototype.ngOnInit = function () {
    };
    BlogFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-form',
            template: __webpack_require__(/*! ./blog-form.component.html */ "./src/app/content/blog/components/blog-form/blog-form.component.html"),
            styles: [__webpack_require__(/*! ./blog-form.component.scss */ "./src/app/content/blog/components/blog-form/blog-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogFormComponent);
    return BlogFormComponent;
}());



/***/ }),

/***/ "./src/app/content/blog/container/blog/blog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/content/blog/container/blog/blog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>BLOG component asdfasdf</h1>\n\n"

/***/ }),

/***/ "./src/app/content/blog/container/blog/blog.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/content/blog/container/blog/blog.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/blog/container/blog/blog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/content/blog/container/blog/blog.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/content/blog/container/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/content/blog/container/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/content/blog/container/blogs/blogs.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/content/blog/container/blogs/blogs.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n      <a data-toggle=\"modal\" data-target=\"#id\" href=\"https://3.bp.blogspot.com/-zZUBNUavXks/W23H3nY5pbI/AAAAAAAADas/hBqpr6-izPsctkzpyWrSA4lnNAFm8a85QCLcBGAs/s1600/global-warming-melting-the-earth_large.jpg\"\n        imageanchor=\"1\" style=\"margin-left: auto; margin-right: auto;\">\n        <img border=\"0\" data-original-height=\"401\" data-original-width=\"534\" height=\"300\" src=\"https://3.bp.blogspot.com/-zZUBNUavXks/W23H3nY5pbI/AAAAAAAADas/hBqpr6-izPsctkzpyWrSA4lnNAFm8a85QCLcBGAs/s400/global-warming-melting-the-earth_large.jpg\"\n          width=\"400\">\n      </a>\n  <div class=\"modal fade\" id=\"id\" role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n          <img border=\"0\" data-original-height=\"401\" data-toggle=\"modal\" data-dismiss=\"modal\"\n            data-original-width=\"534\" height=\"300\" src=\"https://3.bp.blogspot.com/-zZUBNUavXks/W23H3nY5pbI/AAAAAAAADas/hBqpr6-izPsctkzpyWrSA4lnNAFm8a85QCLcBGAs/s400/global-warming-melting-the-earth_large.jpg\"\n            width=\"400\">\n            </div>\n        </div>\n      </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/content/blog/container/blogs/blogs.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/content/blog/container/blogs/blogs.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/blog/container/blogs/blogs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/content/blog/container/blogs/blogs.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var content_shared_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! content/shared/services/blog/blog.service */ "./src/app/content/shared/services/blog/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(blogsService) {
        this.blogsService = blogsService;
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent.prototype.ngOnDestroy = function () {
    };
    BlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/app/content/blog/container/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.scss */ "./src/app/content/blog/container/blogs/blogs.component.scss")]
        }),
        __metadata("design:paramtypes", [content_shared_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/content/blog/view/blog-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/content/blog/view/blog-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col\"></div>\n  <div>\n<div>\n           <!-- <img [src]=\"blogs?.items[0]?.author?.image?.url\"> -->\n\n        </div>\n    <div *ngIf=\"blogs?.items\" else=\"loading\" class=\"col\">\n\n      <div *ngFor=\"let blog of blogs?.items\">\n        <div [@slideInUp]=\"blog.state\">\n            <h1 style=\"display: inline\">{{ blog.title }} </h1>{{blog.published | date: 'short' }}\n            <app-replace [blog]=\"blog\">\n\n            </app-replace>\n        </div>    \n      <br />\n    <hr>\n    </div>\n\n\n    \n  </div>\n  </div>\n\n    <ng-template #loading>\n      <span class=\"loading\"></span>\n    </ng-template>\n    </div>\n      <div class=\"col\"></div>\n</div>"

/***/ }),

/***/ "./src/app/content/blog/view/blog-view.component.scss":
/*!************************************************************!*\
  !*** ./src/app/content/blog/view/blog-view.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/blog/view/blog-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content/blog/view/blog-view.component.ts ***!
  \**********************************************************/
/*! exports provided: BlogViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogViewComponent", function() { return BlogViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var content_shared_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! content/shared/services/blog/blog.service */ "./src/app/content/shared/services/blog/blog.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogViewComponent = /** @class */ (function () {
    function BlogViewComponent(blogsService, zone, renderer, el) {
        this.blogsService = blogsService;
        this.zone = zone;
        this.renderer = renderer;
        this.el = el;
    }
    BlogViewComponent.prototype.ngOnInit = function () {
        this.subscription = this.viewBlog();
        console.log(this.subscription);
        this.triggerAnimation();
    };
    BlogViewComponent.prototype.ngAfterViewInit = function () {
        // this.renderer.setAttribute(
        //   this
        // )
    };
    BlogViewComponent.prototype.viewBlog = function () {
        var _this = this;
        return this.blogsService.viewBlog()
            .subscribe(function (data) { return _this.blogs = __assign({}, data); });
    };
    BlogViewComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BlogViewComponent.prototype.triggerAnimation = function () {
        this.slideInUpState = 'active';
    };
    BlogViewComponent.prototype.reset = function () {
        var _this = this;
        this.zone.run(function () {
            _this.slideInUpState = 'inactive';
        });
    };
    BlogViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-view',
            template: __webpack_require__(/*! ./blog-view.component.html */ "./src/app/content/blog/view/blog-view.component.html"),
            styles: [__webpack_require__(/*! ./blog-view.component.scss */ "./src/app/content/blog/view/blog-view.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [content_shared_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BlogViewComponent);
    return BlogViewComponent;
}());



/***/ }),

/***/ "./src/app/content/blog/view/replace/replace.component.html":
/*!******************************************************************!*\
  !*** ./src/app/content/blog/view/replace/replace.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n   <span [innerHTML]=\"ModalStart() | safe: 'html'\"></span>\n    <span [innerHTML]=\"ModalDisplay() | safe: 'html'\"></span>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/content/blog/view/replace/replace.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/content/blog/view/replace/replace.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/blog/view/replace/replace.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content/blog/view/replace/replace.component.ts ***!
  \****************************************************************/
/*! exports provided: ReplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceComponent", function() { return ReplaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { pipe } from '@angular/core/src/render3/pipe';
// import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
var ReplaceComponent = /** @class */ (function () {
    function ReplaceComponent() {
    }
    ReplaceComponent.prototype.ngOnInit = function () {
        // this.contentReplace = this.blog.content.replace(/<a/, this.modalStart + '<a #id ').replace(/a>/, 'a>' + this.moadlEnd);
        console.log();
    };
    ReplaceComponent.prototype.ModalStart = function () {
        this.id = this.blog.title.replace(/ /g, '');
        var contentReplace = this.blog.content.replace(/<a href/g, '<a data-toggle="modal" data-target="#' + this.id + '" href');
        return contentReplace;
    };
    ReplaceComponent.prototype.ModalDisplay = function () {
        this.id = this.blog.title.replace(/ /g, '');
        var modalStart = "\n<div class=\"modal fade\" id=\"" + this.id + "\" role=\"dialog\" \ntabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-body\">\n      <div class=\"container-fluid\">\n";
        var moadlEnd = "\n      </div>\n    </div>\n  </div>\n</div>\n";
        var Modal = this.blog.content
            .replace(/href="/g, '  ')
            .replace(/<img /g, modalStart + '<img width="100%"').replace(/<\/a>/g, moadlEnd + '');
        return Modal;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceComponent.prototype, "blog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:type", String)
    ], ReplaceComponent.prototype, "modalStart", void 0);
    ReplaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-replace',
            template: __webpack_require__(/*! ./replace.component.html */ "./src/app/content/blog/view/replace/replace.component.html"),
            styles: [__webpack_require__(/*! ./replace.component.scss */ "./src/app/content/blog/view/replace/replace.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReplaceComponent);
    return ReplaceComponent;
}());



/***/ }),

/***/ "./src/app/content/content.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/view/blog-view.component */ "./src/app/content/blog/view/blog-view.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ "./src/app/content/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var content_blog_blog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! content/blog/blog.module */ "./src/app/content/blog/blog.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                content_blog_blog_module__WEBPACK_IMPORTED_MODULE_5__["BlogModule"]
            ],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_4__["PhotoGalleryComponent"],
                _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_0__["BlogViewComponent"]
            ]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/content/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/content/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-5\">\n      <div class=\"col\">\n        <main class=\"\">\n          <h1 class=\"lg-heading\">\n            Michael <span class=\"text-secondary\"> Dickman</span>\n            <h3>\n              Motion Picture & Television Lighting, Electric, & Grip\n            </h3>\n          </h1>\n        </main>\n      </div>\n    </div>\n\n\n      <div class=\"row\">\n        <div class=\"col\">\n      <object type=\"image/svg+xml\" data=\"/assets/images/lightning.svg\">\n        <img src=\"/assets/images/lightning.svg\" alt=\"\">\n      </object>\n        </div>\n        <div class=\"col\">\n        <div class=\"mw-25\">\n          <img src=\"/assets/images/muybridge.gif\" width=\"200px\" alt=\"\" class=\"mx-auto d-block\" *ngIf=\"toggled\" (mouseout)=\"toggle()\">\n        \n          <img src=\"/assets/images/muybridgeStill.jpg\" width=\"200px\" alt=\"\" class=\"mx-auto d-block\" *ngIf=\"!toggled\"\n            (mouseover)=\"toggle()\">\n        </div>\n        </div>\n        <div class=\"col\">\n          <img src=\"/assets/images/lightningLoading.svg\" alt=\"\">\n        </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/content/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/content/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.toggled = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/content/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/content/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/content/photo-gallery/photo-gallery.component.html":
/*!********************************************************************!*\
  !*** ./src/app/content/photo-gallery/photo-gallery.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div *ngFor=\"let image of fileName\" class=\"col-md-4 col-sm-6 col-12\">\n    <div>\n      <div width=\"300px\">\n      \n          <button data-toggle=\"modal\" data-target=\"#id\" class=\"btn btn-link\">\n          <img src=\"{{imagePath + image}}\" alt=\"\" class=\"img-thumbnail w-100 m-3\">\n      </button>\n      </div>\n          <div class=\"modal fade\" id=\"id\" role=\"dialog\">\n            <div class=\"modal-body\">\n              <div class=\"container-fluid\">\n          \n                <img src=\"{{imagePath + image}}\" alt=\"\" width=\"100%\">\n             \n              </div>\n            </div>\n          </div>\n    </div>\n  </div>\n  <div *ngFor=\"let video of vfileName\" class=\"col-md-4 col-sm-6 col-12\">\n    <div>\n      <video [muted]=\"true\" width=\"300px\" onmouseover=\"this.play()\" onmouseout=\"this.pause()\">\n        <source src=\"{{videoPath + video}}\" alt=\"\" class=\"w-100 m-3\" />\n      </video>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/photo-gallery/photo-gallery.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/content/photo-gallery/photo-gallery.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/photo-gallery/photo-gallery.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/photo-gallery/photo-gallery.component.ts ***!
  \******************************************************************/
/*! exports provided: PhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function() { return PhotoGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoGalleryComponent = /** @class */ (function () {
    function PhotoGalleryComponent() {
        this.imagePath = '/assets/images/gallery/';
        this.fileName = [
            '20171117_162338.svg',
            '20171117_162341.svg',
            '20171117_162354.svg',
            '20171117_162549_003.svg',
            '20171117_162549_004.svg',
            '20171117_162549_005.svg',
            '20171117_162549_011.svg',
            '20171117_162549_012.svg',
            '20171117_162549_034.svg',
            '20171117_162549_035.svg',
            '20171117_162549_036.svg',
        ];
        this.videoPath = '/assets/videos/';
        this.vfileName = [
            'golf.mov',
            'strobe.mov'
        ];
    }
    PhotoGalleryComponent.prototype.ngOnInit = function () {
    };
    PhotoGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-gallery',
            template: __webpack_require__(/*! ./photo-gallery.component.html */ "./src/app/content/photo-gallery/photo-gallery.component.html"),
            styles: [__webpack_require__(/*! ./photo-gallery.component.scss */ "./src/app/content/photo-gallery/photo-gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoGalleryComponent);
    return PhotoGalleryComponent;
}());



/***/ }),

/***/ "./src/app/content/shared/services/blog/blog.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/shared/services/blog/blog.service.ts ***!
  \**************************************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/content/shared/services/http-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var BlogService = /** @class */ (function () {
    function BlogService(http, httpErrorHandler) {
        this.http = http;
        this.bloggerAPItest = 'https://www.googleapis.com/blogger/v3/blogs/7337281974763391047/posts?key=AIzaSyDrcjlSJFv_e0IN6ywJJ6nrCEcWTJhcl-c';
        this.bloggerUrl = 'https://www.googleapis.com/blogger/v3/blogs/byurl?url=http://electricgrip.blogspot.com/';
        this.bloggerAPI = 'https://www.googleapis.com/blogger/v3/blogs/1115640269623940299/posts?key=AIzaSyDlaPrWE4JALFPqeFiVuCWdBEUpH1lZ_eA';
        this.handleError = httpErrorHandler.createHandleError('BlogService');
    }
    BlogService.prototype.viewBlog = function () {
        return this.http.get(this.bloggerAPI);
    };
    BlogService.prototype.addBlog = function (blog) {
        return this.http.post(this.bloggerAPI, blog, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addBlog', blog)));
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpErrorHandler"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/content/shared/services/http-error-handler.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/content/shared/services/http-error-handler.service.ts ***!
  \***********************************************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/content/shared/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/content/shared/services/message.service.ts":
/*!************************************************************!*\
  !*** ./src/app/content/shared/services/message.service.ts ***!
  \************************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n\n<nav class=\"navbar navbar-expand-lg bg-dark navbar-dark fixed-top\">\n  \n\n    <a class=\"navbar-brand\" routerLink=\"home\"><img src=\"assets/images/lightning.svg\" width=\"100px\" alt=\"\">Mike\n\n    </a>\n\n    <button class=\"navbar-toggler\" data-toggler=\"collapse\" data-target=\"#navcollapse\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <ul class=\"navbar-nav flash_auto\">\n      <!-- <li class=\"nav-item\" routerLinkActive=\"active item\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"/blog/new\" class=\"nav-link\">Blog New</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active item\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"blog\">blog component</a>\n      </li> -->\n      <li class=\"nav-item\" routerLinkActive=\"active item\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"blogView\">Blog</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active item\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"photo_gallery\">Photo Gallery</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active item\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"login\">Login</a>\n      </li>\n    </ul>\n</nav>\n  </div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.component.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/pipes.component.ts ***!
  \******************************************/
/*! exports provided: PipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesComponent", function() { return PipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PipesComponent = /** @class */ (function () {
    function PipesComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.pipetest = 'test';
    }
    PipesComponent.prototype.transform = function (value, type) {
        if (type === void 0) { type = 'html'; }
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Unable to bypass security for invalid type: " + type);
        }
    };
    PipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], PipesComponent);
    return PipesComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! L:\Mikes Site\mike-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map