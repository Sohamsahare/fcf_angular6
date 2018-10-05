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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play/play.component */ "./src/app/play/play.component.ts");
/* harmony import */ var _scores_scores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scores/scores.component */ "./src/app/scores/scores.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'play', component: _play_play_component__WEBPACK_IMPORTED_MODULE_4__["PlayComponent"] },
    { path: 'scores', component: _scores_scores_component__WEBPACK_IMPORTED_MODULE_5__["ScoresComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/button/button.component */ "./src/app/landing/button/button.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./play/play.component */ "./src/app/play/play.component.ts");
/* harmony import */ var _scores_scores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scores/scores.component */ "./src/app/scores/scores.component.ts");
/* harmony import */ var _play_timer_timer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./play/timer/timer.component */ "./src/app/play/timer/timer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_scorecard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/scorecard.service */ "./src/services/scorecard.service.ts");
/* harmony import */ var _play_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./play/card/card.component */ "./src/app/play/card/card.component.ts");
/* harmony import */ var _play_text_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./play/text/text.component */ "./src/app/play/text/text.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _landing_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _play_play_component__WEBPACK_IMPORTED_MODULE_7__["PlayComponent"],
                _scores_scores_component__WEBPACK_IMPORTED_MODULE_8__["ScoresComponent"],
                _play_timer_timer_component__WEBPACK_IMPORTED_MODULE_9__["TimerComponent"],
                _play_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"],
                _play_text_text_component__WEBPACK_IMPORTED_MODULE_13__["TextComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [_services_scorecard_service__WEBPACK_IMPORTED_MODULE_11__["ScoreCardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/landing/button/button.component.css":
/*!*****************************************************!*\
  !*** ./src/app/landing/button/button.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    width: 10rem;\r\n    height: 5rem;\r\n    margin: .5rem;\r\n}"

/***/ }),

/***/ "./src/app/landing/button/button.component.html":
/*!******************************************************!*\
  !*** ./src/app/landing/button/button.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-info btn-lg\">{{name}}</button>"

/***/ }),

/***/ "./src/app/landing/button/button.component.ts":
/*!****************************************************!*\
  !*** ./src/app/landing/button/button.component.ts ***!
  \****************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
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

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('name'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('url'),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "url", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/landing/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.css */ "./src/app/landing/button/button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    color: aliceblue;\r\n}\r\np{\r\n    color: antiquewhite;\r\n}\r\n.body{\r\n    padding-top: 12rem;\r\n}"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <div class=\"text-center\">\r\n    <h1>Fastest Clicker First</h1>\r\n    <p class=\"lead\">How much can one click, before he runs out of clock ticks?</p>\r\n  </div>\r\n  \r\n  <div class=\"buttons d-flex flex-column text-center\">\r\n    <app-button *ngFor = \"let route of routes\" [name] = \"route.text\" [routerLink] = \"route.url\" ></app-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.routes = [
            { text: 'PLAY', url: '/play' },
            { text: 'SCORES', url: '/scores' }
        ];
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Path entered is invalid. The page was not found.\n</p>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/play/card/card.component.css":
/*!**********************************************!*\
  !*** ./src/app/play/card/card.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    height: 14rem;\r\n    width: 14rem;\r\n    background-color: white;\r\n    display: inline-block;\r\n}\r\n\r\nbutton{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\nbutton:hover{\r\n    cursor: pointer;\r\n    background-color: rgba(0, 0, 0, .1);\r\n}"

/***/ }),

/***/ "./src/app/play/card/card.component.html":
/*!***********************************************!*\
  !*** ./src/app/play/card/card.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card \" id = \"card_{{card.id}}\" >\r\n    <button (click)=\"onClick()\" id = \"button_{{card.id}}\"></button>\r\n</div>"

/***/ }),

/***/ "./src/app/play/card/card.component.ts":
/*!*********************************************!*\
  !*** ./src/app/play/card/card.component.ts ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.model */ "./src/app/play/card/card.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        // let parent know it was clicked
        this.clickEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CardComponent.prototype.ngAfterViewInit = function () {
        // console.log(this.card.id);
    };
    CardComponent.prototype.onClick = function () {
        if (this.card.isGreen) {
            this.clickEventEmitter.emit(true);
        }
        else {
            this.clickEventEmitter.emit(false);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _card_model__WEBPACK_IMPORTED_MODULE_1__["Card"])
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "clickEventEmitter", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/play/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/play/card/card.component.css")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/play/card/card.model.ts":
/*!*****************************************!*\
  !*** ./src/app/play/card/card.model.ts ***!
  \*****************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/play/play.component.css":
/*!*****************************************!*\
  !*** ./src/app/play/play.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-columns{\r\n    -webkit-column-count: 2;\r\n            column-count: 2;\r\n}\r\n.buttonContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 2rem;\r\n}\r\nbutton{\r\n    font-size: 2rem;\r\n}\r\n.lead{\r\n    color: white;\r\n    padding: .5rem;\r\n}\r\ninput{\r\n    margin: .5rem;\r\n}"

/***/ }),

/***/ "./src/app/play/play.component.html":
/*!******************************************!*\
  !*** ./src/app/play/play.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n    <app-text [score] = \"score\"></app-text>\r\n    <div class = \"card-deck d-flex justify-content-center\" id  = \"play\" >\r\n        <app-card *ngFor = \"let card of cards\" [card]=\"card\" (clickEventEmitter)='getCardClick($event)'></app-card>\r\n    </div>\r\n    <div class=\"buttonContainer\">\r\n        <div  *ngIf=\"!hasGameStarted\">\r\n            <span class=\"lead\">Game Time:</span>\r\n            <input [(ngModel)]=\"gameTime\" type=\"number\" placeholder=\"In Minutes\" >\r\n            <!-- <span class=\"lead\">Number of Cards:</span>\r\n            <input [(ngModel)]=\"cardCount\" type=\"number\" placeholder=\"Atleast 4 cards\"> -->\r\n            <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"play()\" >PLAY!</button>\r\n        </div>\r\n        <app-timer *ngIf=\"hasGameStarted\" [gameTime]=\"gameTime * 60 * 1000\" (time)=\"setTimerTime($event)\"></app-timer>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/play/play.component.ts":
/*!****************************************!*\
  !*** ./src/app/play/play.component.ts ***!
  \****************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scorecard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/scorecard.service */ "./src/services/scorecard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayComponent = /** @class */ (function () {
    function PlayComponent(scoreService, router, gameService) {
        this.scoreService = scoreService;
        this.router = router;
        this.gameService = gameService;
        // variables used for binding data
        this.score = 0;
        this.hasGameStarted = false;
        this.cards = this.gameService.initialiseCards();
    }
    // called after all views are initialised
    PlayComponent.prototype.ngAfterViewInit = function () {
    };
    PlayComponent.prototype.play = function () {
        var _this = this;
        var time = this.gameTime * 60 * 1000;
        this.gameService.timerInMs = time;
        // this.gameService.cardcount = (this.cardCount > 3) ? this.cardCount : 4;
        this.gameService.startGame();
        setTimeout(function () { _this.onEndGame(); }, time);
        this.hasGameStarted = true;
    };
    // stops the interval for random cards
    PlayComponent.prototype.onEndGame = function () {
        var _this = this;
        var scores = this.gameService.endGame();
        this.scoreService.postScores(scores).subscribe(function () {
            _this.router.navigate(['scores']);
        });
    };
    // used to fetch time from timer component
    // and set it here
    PlayComponent.prototype.setTimerTime = function (time) {
        this.gameService.timerInMs = time;
    };
    PlayComponent.prototype.getCardClick = function (isClickedGreen) {
        this.score = this.gameService.getCardClick(isClickedGreen);
    };
    PlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-play',
            template: __webpack_require__(/*! ./play.component.html */ "./src/app/play/play.component.html"),
            styles: [__webpack_require__(/*! ./play.component.css */ "./src/app/play/play.component.css")]
        }),
        __metadata("design:paramtypes", [_services_scorecard_service__WEBPACK_IMPORTED_MODULE_1__["ScoreCardService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], PlayComponent);
    return PlayComponent;
}());



/***/ }),

/***/ "./src/app/play/text/text.component.css":
/*!**********************************************!*\
  !*** ./src/app/play/text/text.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\n    margin: 2rem;\r\n    text-align: center;\r\n    color: whitesmoke;\r\n}"

/***/ }),

/***/ "./src/app/play/text/text.component.html":
/*!***********************************************!*\
  !*** ./src/app/play/text/text.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\nScore: {{score}}\n</h4>\n"

/***/ }),

/***/ "./src/app/play/text/text.component.ts":
/*!*********************************************!*\
  !*** ./src/app/play/text/text.component.ts ***!
  \*********************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
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

var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TextComponent.prototype, "score", void 0);
    TextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text',
            template: __webpack_require__(/*! ./text.component.html */ "./src/app/play/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.css */ "./src/app/play/text/text.component.css")]
        })
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/app/play/timer/timer.component.css":
/*!************************************************!*\
  !*** ./src/app/play/timer/timer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timer-container{\r\n    padding : 1rem;\r\n    border: 1px solid black;\r\n    width : 10rem;\r\n    background-color: #5FFF4F;\r\n    margin: 2rem;\r\n    /* position: relative;\r\n    left: 42.5%; */\r\n}"

/***/ }),

/***/ "./src/app/play/timer/timer.component.html":
/*!*************************************************!*\
  !*** ./src/app/play/timer/timer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timer-container d-flex \" id = \"timer-box\" >\r\n    <h3>\r\n      {{getMinutes()}} : {{getSeconds()}} : {{getMiniSeconds()}}\r\n    </h3>\r\n</div>"

/***/ }),

/***/ "./src/app/play/timer/timer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/play/timer/timer.component.ts ***!
  \***********************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
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

var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        // used to pass time remaining from timer to
        // parent class
        this.time = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameTime = 1000 * 10;
        // how fast to update the time in the timer in ms
        this.timeInterval = 10;
        // timer colour changes from green to these colours every 1/3rd initialTime
        this.colours = ['#FFFF00', '#DC3545'];
    }
    TimerComponent.prototype.ngOnInit = function () {
        //this.initialTime.emit(this.gameTime);
        this.startTimer();
    };
    TimerComponent.prototype.getMinutes = function () {
        return Math.floor(this.timeInMilliseconds / (1000 * 60));
    };
    TimerComponent.prototype.getSeconds = function () {
        return Math.floor(((this.timeInMilliseconds % 100000) / 1000));
    };
    TimerComponent.prototype.getMiniSeconds = function () {
        return Math.round(((this.timeInMilliseconds % 1000) / (10)) * 100) / 100;
    };
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        this.timeInMilliseconds = this.gameTime;
        this.timerIntervalId = setInterval(function () {
            _this.timeInMilliseconds -= _this.timeInterval;
            _this.emitTimer();
            if (_this.timeInMilliseconds <= 0) {
                _this.stopTimer();
            }
        }, this.timeInterval);
        var colourId = 0;
        this.colourIntervalId = setInterval(function () {
            var bgColour = document.getElementById('timer-box');
            bgColour.style.backgroundColor = _this.colours[colourId];
            colourId++;
        }, (this.gameTime / 3));
    };
    TimerComponent.prototype.emitTimer = function () {
        this.time.emit(this.timeInMilliseconds);
    };
    TimerComponent.prototype.stopTimer = function () {
        clearInterval(this.timerIntervalId);
        clearInterval(this.colourIntervalId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "time", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "gameTime", void 0);
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/play/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/play/timer/timer.component.css")]
        })
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/scores/scores.component.css":
/*!*********************************************!*\
  !*** ./src/app/scores/scores.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    width: 80%;\r\n    position: relative;\r\n    left:10%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/scores/scores.component.html":
/*!**********************************************!*\
  !*** ./src/app/scores/scores.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body d-flex justify-content-center flex-column \">\n  <button type=\"button\" class=\"btn btn-info btn-lg\" [routerLink]=\"['/home']\">HOME</button>\n  <table class=\"table table-hover table-light table-striped table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">GameId</th>\n        <th scope=\"col\">PlayedAt</th>\n        <th scope=\"col\">MaxMultiplier</th>\n        <th scope=\"col\">Score</th>\n      </tr>\n    </thead>\n    <tbody >\n      <tr *ngFor=\" let score of scores; index as i;\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td>{{score.playedAt}}</td>\n        <td>{{score.maxMultiplier}}</td>\n        <td>{{score.score}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/scores/scores.component.ts":
/*!********************************************!*\
  !*** ./src/app/scores/scores.component.ts ***!
  \********************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scorecard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/scorecard.service */ "./src/services/scorecard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScoresComponent = /** @class */ (function () {
    function ScoresComponent(ScoreCardService) {
        this.ScoreCardService = ScoreCardService;
    }
    ScoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ScoreCardService.getScores().subscribe(function (scoresDb) {
            _this.scores = scoresDb;
        });
    };
    ScoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scores',
            template: __webpack_require__(/*! ./scores.component.html */ "./src/app/scores/scores.component.html"),
            styles: [__webpack_require__(/*! ./scores.component.css */ "./src/app/scores/scores.component.css")]
        }),
        __metadata("design:paramtypes", [_services_scorecard_service__WEBPACK_IMPORTED_MODULE_1__["ScoreCardService"]])
    ], ScoresComponent);
    return ScoresComponent;
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
    production: false
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

/***/ "./src/services/game.service.ts":
/*!**************************************!*\
  !*** ./src/services/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameService = /** @class */ (function () {
    function GameService(router) {
        this.router = router;
        // subtract 1 from this number as array indices start from 0
        this.lastRandomNumber = 1;
        // after how many ms does a card change
        this.initialTimeToRandom = 2000;
        // maximum gameSpeed -> 3 changes per second
        this.minTimeToRandom = 333;
        // timestep to increase the game speed by in ms
        this.timeStep = 250;
        // score works like = baseScore * scoreMultiplier
        // score multiplier increases with game speed
        this.scoreMultiplier = 1;
        this.baseScore = 10;
        // on incorrect click, points are deducted from the score
        this.penaltyScore = 20;
        // maxMultiplier achieved in a game session
        this.maxMultiplier = this.scoreMultiplier;
        // count after which gameSpeed increases
        this.gameSpeedIncrementClicks = 3;
        // variables used for binding data
        this.score = 0;
        this._timerInMs = 1000;
        // determines number of cards in game
        this.cardcount = 4;
        this.cards = new Array(this.cardcount).fill({ id: 0, isGreen: false });
        // time after which card colour changes when player
        // doesn't click on it
        this.timeToRandomInMs = this.initialTimeToRandom;
        // to handle scores and gameSpeed
        this.countSuccessClicks = 0;
        var date = new Date();
        this.timePlayedAt = date.toLocaleTimeString() + " " + date.toLocaleDateString();
    }
    Object.defineProperty(GameService.prototype, "timerInMs", {
        get: function () {
            return this._timerInMs;
        },
        set: function (value) {
            this._timerInMs = value;
        },
        enumerable: true,
        configurable: true
    });
    //  sets initial values to all cards
    GameService.prototype.initialiseCards = function () {
        this.randomCard();
        for (var card = 0; card < this.cards.length; card++) {
            this.cards[card] = { id: card + 1, isGreen: (card == this.lastRandomNumber - 1) ? true : false };
        }
        return this.cards;
    };
    //randomly selects a card from the pool
    GameService.prototype.randomCard = function () {
        var randomNumber = Math.floor(Math.random() * (this.cardcount) + 1);
        while (randomNumber == this.lastRandomNumber) {
            randomNumber = Math.floor(Math.random() * (this.cardcount) + 1);
        }
        this.lastRandomNumber = randomNumber;
        return randomNumber;
    };
    // called after all views are initialised
    GameService.prototype.startGame = function () {
        this.isGameRunning = true;
        this.randomWithNewTime();
    };
    GameService.prototype.randomWithNewTime = function () {
        var _this = this;
        // randomly selects a card
        this.randomiseCards();
        // every timeToRandomInMs milliseconds cards are randomised
        this.randomCardIntervalId = setInterval(function () { _this.randomiseCards(); }, this.timeToRandomInMs);
    };
    // randomly selects a card and
    // changes old card to white and new card to green
    GameService.prototype.randomiseCards = function () {
        this.cards[this.lastRandomNumber - 1].isGreen = false;
        var elem = document.getElementById("card_" + this.cards[this.lastRandomNumber - 1].id);
        elem.style.backgroundColor = 'white';
        var randomId = this.randomCard();
        this.cards[randomId - 1].isGreen = true;
        elem = document.getElementById("card_" + this.cards[randomId - 1].id);
        elem.style.backgroundColor = 'green';
    };
    // stops the interval for random cards
    GameService.prototype.endGame = function () {
        var scores = {
            playedAt: this.timePlayedAt,
            maxMultiplier: this.maxMultiplier,
            score: this.score
        };
        this.isGameRunning = false;
        // clear all setInterval calls  
        clearInterval(this.randomCardIntervalId);
        for (var i = 0; i < this.cards.length; i++) {
            var id = i + 1;
            var btn = document.getElementById("button_" + id);
            btn.disabled = true;
        }
        return scores;
    };
    GameService.prototype.getCardClick = function (isClickedGreen) {
        console.log("GameSpeed: " + this.timeToRandomInMs / 1000 + " Multiplier: " + this.scoreMultiplier + "x the base score " + this.baseScore);
        if (this.isGameRunning) {
            if (isClickedGreen) {
                this.countSuccessClicks++;
                if (this.countSuccessClicks >= this.gameSpeedIncrementClicks) {
                    this.timeToRandomInMs -= this.timeStep;
                    if (this.timeToRandomInMs <= this.minTimeToRandom) {
                        this.timeToRandomInMs = this.minTimeToRandom;
                    }
                    this.handleMultiplier();
                }
                clearInterval(this.randomCardIntervalId);
                this.randomWithNewTime();
                this.score += this.baseScore * this.scoreMultiplier;
            }
            else {
                this.resetMultiplier();
                clearInterval(this.randomCardIntervalId);
                this.timeToRandomInMs = this.initialTimeToRandom;
                this.randomWithNewTime();
                this.score -= this.penaltyScore;
                if (this.score <= 0) {
                    this.score = 0;
                }
            }
        }
        else {
            console.log(this.timerInMs / 1000);
        }
        return this.score;
    };
    GameService.prototype.resetMultiplier = function () {
        this.countSuccessClicks = 0;
        this.scoreMultiplier = 1;
    };
    GameService.prototype.handleMultiplier = function () {
        // increases multiplier
        this.scoreMultiplier++;
        // replaces maxMultiplier 
        if (this.scoreMultiplier > this.maxMultiplier) {
            this.maxMultiplier = this.scoreMultiplier;
        }
        // reset click count
        this.countSuccessClicks = 0;
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/services/scorecard.service.ts":
/*!*******************************************!*\
  !*** ./src/services/scorecard.service.ts ***!
  \*******************************************/
/*! exports provided: ScoreCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCardService", function() { return ScoreCardService; });
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


var ScoreCardService = /** @class */ (function () {
    function ScoreCardService(http) {
        this.http = http;
        this.url = 'https://peaceful-basin-27707.herokuapp.com';
    }
    ScoreCardService.prototype.getScores = function () {
        return this.http.get(this.url + '/scores');
    };
    ScoreCardService.prototype.postScores = function (score) {
        return this.http.post(this.url + '/scores', score);
    };
    ScoreCardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScoreCardService);
    return ScoreCardService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\CGI\Desktop\Angular6\fcf_angular6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map