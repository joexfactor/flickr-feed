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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/feed.service */ "./src/app/services/feed.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientJsonpModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [_services_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg\" color-on-scroll=\"100\" id=\"sectionsNav\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\n        <img src=\"../../../assets/img/flickr.png\">\n        <h3 class=\"title ml-3\">Flickr Feed</h3>\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"navbar-toggler-icon\"></span>\n        <span class=\"navbar-toggler-icon\"></span>\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://twitter.com/flickr\" target=\"_blank\" data-original-title=\"Follow us on Twitter\">\n            <i class=\"fa fa-twitter\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://www.facebook.com/flickr\" target=\"_blank\"\n            data-original-title=\"Like us on Facebook\">\n            <i class=\"fa fa-facebook-square\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://flickr.tumblr.com/\" target=\"_blank\" data-original-title=\"Follow us on Tumblr\">\n            <i class=\"fa fa-tumblr\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"page-header header-filter\" data-parallax=\"true\" style=\"background-image: url('../assets/img/profile_city.jpg')\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6\">\n        <h1 class=\"title\">Find your inspiration.</h1>\n        <br>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"card card-login\">\n          <form class=\"form\" method=\"\" action=\"\">\n            <div class=\"card-header card-header-danger text-center\">\n              <h3 class=\"card-title\">Search By</h3>\n\n              <div class=\"nav-tabs-navigation mt-4\">\n                <div class=\"nav-tabs-wrapper\">\n                  <div class=\"d-flex flex-row justify-content-center my-flex-container\">\n                    <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\" (click)=\"clickImage($event)\">\n                          <i class=\"material-icons\">insert_photo</i>\n                          Image\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\" (click)=\"clickAuthor($event)\">\n                          <i class=\"material-icons\">face</i>\n                          Author\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\" (click)=\"clickTags($event)\">\n                          <i class=\"material-icons\">local_activity</i>\n                          Tags\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"card-body mt-5\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"material-icons\">search</i>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchContent\" name=\"content\" (change)=\"contentChange()\">\n              </div>\n              <br>\n            </div>\n            <div class=\"footer text-center mt-5\">\n              <button type=\"button\" class=\"btn btn-danger btn-wd btn-lg\" (click)=\"searchFeeds($event)\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"main main-raised\" *ngIf=\"isResultPanelAvailable\">\n  <div class=\"container\">\n    <div class=\"section text-center\" id=\"result\">\n      <h2 class=\"title\">{{prompt}}</h2>\n      <div class=\"team\">\n        <div class=\"row\" *ngIf=\"isResultAvailable\">\n\n          <div class=\"col-md-6\" *ngFor=\"let item of items | paginate: { itemsPerPage: 6, currentPage: p }\">\n            <div class=\"team-player\">\n              <div class=\"card card-plain\">\n                <div class=\"col-md-6 ml-auto mr-auto\">\n                  <a href={{item.link}} target=\"_blank\">\n                    <img src={{item.media.m}} alt=\"Thumbnail Image\" class=\"img-raised rounded-raised img-fluid\">\n                  </a>\n                </div>\n                <h4 class=\"card-title\">{{item.title}}\n                  <br>\n                  <small class=\"card-description text-muted\">{{item.author_id}}</small>\n                </h4>\n                <div class=\"card-body\">\n                  <p class=\"card-description\">{{item.author}}\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div *ngIf=\"isResultAvailable\">\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/feed.service */ "./src/app/services/feed.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(feedService) {
        this.feedService = feedService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.isImageClicked = true;
        this.isAuthorClicked = false;
        this.isTagsClicked = false;
        this.prompt = '';
        this.isResultAvailable = false;
        this.isResultPanelAvailable = false;
    };
    MainComponent.prototype.searchFeeds = function (event) {
        var _this = this;
        this.isResultPanelAvailable = true;
        window.location.href = '#result';
        if (this.isImageClicked) {
            this.feedService.getAllFeeds().subscribe(function (res) {
                _this.prompt = 'Search results for latest images';
                _this.allFeeds = res;
                _this.items = _this.allFeeds.items;
                console.log(_this.allFeeds);
                _this.isResultAvailable = true;
            }, function (err) {
                console.log('No data');
                _this.prompt = 'There were no results found.';
                _this.isResultAvailable = false;
            });
        }
        if (this.isAuthorClicked) {
            this.feedService.getFeedsByUserId(this.searchContent).subscribe(function (res) {
                _this.prompt = 'Search results for author \"' + _this.searchContent + '\"';
                _this.allFeeds = res;
                _this.items = _this.allFeeds.items;
                console.log(_this.allFeeds);
                _this.isResultAvailable = true;
            }, function (err) {
                console.log('No data');
                _this.prompt = 'There were no results found.';
                _this.isResultAvailable = false;
            });
        }
        if (this.isTagsClicked) {
            this.feedService.getFeedsByTags(this.searchContent).subscribe(function (res) {
                _this.prompt = 'Search results for tag \"' + _this.searchContent + '\"';
                _this.allFeeds = res;
                _this.items = _this.allFeeds.items;
                console.log(_this.allFeeds);
                _this.isResultAvailable = true;
            }, function (err) {
                console.log('No data');
                _this.prompt = 'There were no results found.';
                _this.isResultAvailable = false;
            });
        }
    };
    MainComponent.prototype.clickImage = function (event) {
        this.isImageClicked = true;
        this.isAuthorClicked = false;
        this.isTagsClicked = false;
    };
    MainComponent.prototype.clickAuthor = function (event) {
        this.isImageClicked = false;
        this.isAuthorClicked = true;
        this.isTagsClicked = false;
    };
    MainComponent.prototype.clickTags = function (event) {
        this.isImageClicked = false;
        this.isAuthorClicked = false;
        this.isTagsClicked = true;
    };
    MainComponent.prototype.contentChange = function () {
        console.log(this.searchContent);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_feed_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/services/feed.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/feed.service.ts ***!
  \******************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
        this.apiRoot = 'https://api.flickr.com/services/feeds/photos_public.gne';
    }
    FeedService.prototype.getAllFeeds = function () {
        var apiURL = this.apiRoot + "?format=json&jsoncallback=JSONP_CALLBACK";
        return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
    };
    FeedService.prototype.getFeedsByUserId = function (id) {
        var apiURL = this.apiRoot + "?format=json&jsoncallback=JSONP_CALLBACK&id=" + id;
        console.log(apiURL);
        return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
    };
    FeedService.prototype.getFeedsByTags = function (tags) {
        var apiURL = this.apiRoot + "?format=json&jsoncallback=JSONP_CALLBACK&tags=" + tags;
        return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
    };
    FeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FeedService);
    return FeedService;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/joe/Dev/MEAN/flickr-feed-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map