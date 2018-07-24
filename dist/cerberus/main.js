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

module.exports = "agm-map {\r\n\theight: 100%; \r\n}\r\n\r\n.erro-backdrop {\r\n\tbackground-color: rgba(0,0,0,0.6);\r\n\theight: 100%;\r\n\tpadding-top: 150px;\r\n\tz-index: 9999999999;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n\r\n.erro-modal {\r\n\tposition: fixed;\r\n    width: 500px;\r\n    height: 300px;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -250px;\r\n    margin-top: -150px;\r\n    background-color: #333;\r\n    text-align: center;\r\n    border-radius: 15px;\r\n}\r\n\r\n.erro-modal img {\r\n\twidth: 100px;\r\n\theight: auto;\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n.erro-modal p {\r\n\tfont-size: 25px;\r\n\tfont-weight: bold;\r\n\tcolor: #FCFF4D;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.btn-map-erro {\r\n\twidth: 65%;\r\n\theight: 40px;\r\n\tbackground: #FCFF4D;\r\n\tborder: none;\r\n\tborder-radius: 10px;\r\n\tfont-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map \r\n  [latitude]=\"resources.lat\"\r\n  [longitude]=\"resources.lng\"\r\n  [zoom]=\"resources.zoom\">\r\n\r\n  <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\r\n    <agm-marker *ngFor=\"let marker of resources.markers; let i = index\"\r\n                [latitude]=\"marker.lat\"\r\n                [longitude]=\"marker.lng\"\r\n                [title]=\"marker.date\"\r\n                [iconUrl]=\"marker.icon\">\r\n\r\n                <agm-info-window>\r\n                  <strong>\r\n                      <span>\r\n                        User: {{marker.user}}<br/>\r\n                        Accessed in: {{marker.date}}<br/>\r\n                        Local: {{marker.lat}} | {{marker.lng}}\r\n                      </span>\r\n                  </strong>                  \r\n                </agm-info-window>\r\n    </agm-marker>\r\n  </agm-marker-cluster>\r\n</agm-map>\r\n\r\n<div class=\"erro-backdrop\" *ngIf=\"resources.markers[0].date === null\">\r\n  <div class=\"erro-modal\">\r\n    <img src=\"../assets/img/danger.svg\">\r\n    <p>User not have logins! </p>\r\n    <a  href=\"/home\">\r\n      <button type=\"button\" class=\"btn-map-erro\">\r\n        Ok\r\n      </button>\r\n    </a>\r\n  </div>\r\n</div>"

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
        this.resources = {
            zoom: 20,
            lat: this.getLocalCenter()[0],
            lng: this.getLocalCenter()[1],
            markers: this.getMarkers()
        };
    }
    AppComponent.prototype.getMarkers = function () {
        var userLogins;
        userLogins = [
            { "lat": "-8.0624086", "lng": "-34.8982486", "name": "Eudes Roger", "id": "2", "date": "2012/12/13" },
            { "lat": "-8.0623086", "lng": "-34.8982486", "name": "Eudes Roger", "id": "2", "date": "2010/03/13" },
            { "lat": "-8.0621086", "lng": "-34.8982486", "name": "Eudes Roger", "id": "2", "date": "2020/05/23" },
            { "lat": "-8.0624086", "lng": "-34.8982186", "name": "Eudes Roger", "id": "2", "date": "2011/12/05" },
            { "lat": "-8.0624086", "lng": "-34.8962486", "name": "Eudes Roger", "id": "2", "date": "2019/10/03" },
            { "lat": "-8.0623086", "lng": "-34.8962486", "name": "Eudes Roger", "id": "2", "date": "1920/05/53" },
            { "lat": "-8.0621086", "lng": "-34.8962486", "name": "Eudes Roger", "id": "2", "date": "1998/10/21" },
            { "lat": "-8.0624086", "lng": "-34.8962186", "name": "Eudes Roger", "id": "2", "date": "2014/11/13" },
            { "lat": "-8.0624086", "lng": "-34.8942486", "name": "Eudes Roger", "id": "2", "date": "2013/01/43" },
            { "lat": "-8.0623086", "lng": "-34.8942486", "name": "Eudes Roger", "id": "2", "date": "2011/10/30" },
            { "lat": "-8.0621086", "lng": "-34.8942486", "name": "Eudes Roger", "id": "2", "date": "2017/07/27" },
            { "lat": "-8.0624086", "lng": "-34.8942186", "name": "Eudes Roger", "id": "2", "date": "2011/10/03" }
        ];
        //userLogins = [];
        if (userLogins.length == 0) {
            var erro = [{
                    lat: 0,
                    lng: 0,
                    date: null,
                    user: null,
                    icon: null
                }];
            return (erro);
        }
        else {
            return this.sortArray(userLogins);
        }
    };
    AppComponent.prototype.sortArray = function (array) {
        var arraySorted = array.sort(function (current, next) {
            if (current.date < next.date)
                return -1;
            if (current.date > next.date)
                return 1;
            return 0;
        });
        return this.formatArray(arraySorted);
    };
    AppComponent.prototype.formatArray = function (array) {
        var arrayFormatted = [];
        array.map(function (login, index) {
            arrayFormatted[index] = {
                lat: login.lat * 1,
                lng: login.lng * 1,
                date: login.date,
                user: login.name,
                icon: './assets/img/marker-gray.png'
            };
        });
        arrayFormatted[arrayFormatted.length - 1].icon = './assets/img/marker-blue.png';
        return arrayFormatted;
    };
    AppComponent.prototype.getLocalCenter = function () {
        var centerLocal = this.getMarkers();
        return [
            centerLocal[centerLocal.length - 1].lat * 1,
            centerLocal[centerLocal.length - 1].lng * 1
        ];
    };
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/js-marker-clusterer */ "./node_modules/@agm/js-marker-clusterer/index.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDQ0G4qkGpSsjEdBVgCFuF33p34wfjDuOo'
                }),
                _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_5__["AgmJsMarkerClustererModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\xampp\htdocs\cerberus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map