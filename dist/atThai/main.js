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
/* harmony import */ var _components_viewlog_viewlog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/viewlog/viewlog.component */ "./src/app/components/viewlog/viewlog.component.ts");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_account_management_account_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account-management/account-management.component */ "./src/app/components/account-management/account-management.component.ts");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _services_auth_guard_manager_auth_guard_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard-manager/auth-guard-manager.service */ "./src/app/services/auth-guard-manager/auth-guard-manager.service.ts");
/* harmony import */ var _components_item_management_item_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/item-management/item-management.component */ "./src/app/components/item-management/item-management.component.ts");
/* harmony import */ var _components_store_management_store_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/store-management/store-management.component */ "./src/app/components/store-management/store-management.component.ts");











var routes = [
    { path: '', component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"], pathMatch: 'full' },
    { path: 'home', component: _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"], pathMatch: 'full', canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    { path: 'view-log', component: _components_viewlog_viewlog_component__WEBPACK_IMPORTED_MODULE_3__["ViewLogComponent"], pathMatch: 'full', canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    { path: 'account-management', component: _components_account_management_account_management_component__WEBPACK_IMPORTED_MODULE_6__["AccountManagementComponent"], pathMatch: 'full', canActivate: [_services_auth_guard_manager_auth_guard_manager_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardManagerService"]] },
    { path: 'item-management', component: _components_item_management_item_management_component__WEBPACK_IMPORTED_MODULE_9__["ItemManagementComponent"], pathMatch: 'full', canActivate: [_services_auth_guard_manager_auth_guard_manager_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardManagerService"]] },
    { path: 'store-management', component: _components_store_management_store_management_component__WEBPACK_IMPORTED_MODULE_10__["StoreManagementComponent"], pathMatch: 'full', canActivate: [_services_auth_guard_manager_auth_guard_manager_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardManagerService"]] },
    { path: '**', redirectTo: '/' }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXHNoYXJlZFxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9udCAqL1xyXG4kZm9udC1wcmltYXJ5OiAjZWNmMGYxO1xyXG5cclxuLyogYmFja2dyb3VuZCAqL1xyXG4kYmFja2dyb3VuZC1wcmltYXJ5OiAjMzQ0OTVlO1xyXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6ICM1ZDcwODU7XHJcblxyXG4vKiBidXR0b24gKi9cclxuJGJ0bi1wcmltYXJ5OiAjMWFiYzljO1xyXG4kYnRuLXNlY29uZGFyeTogIzE2YTA4NTsiXX0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_viewlog_viewlog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/viewlog/viewlog.component */ "./src/app/components/viewlog/viewlog.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "./src/app/components/check-out/check-out.component.ts");
/* harmony import */ var _components_item_table_item_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/item-table/item-table.component */ "./src/app/components/item-table/item-table.component.ts");
/* harmony import */ var _components_account_management_account_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/account-management/account-management.component */ "./src/app/components/account-management/account-management.component.ts");
/* harmony import */ var _components_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user-table/user-table.component */ "./src/app/components/user-table/user-table.component.ts");
/* harmony import */ var _components_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user-register/user-register.component */ "./src/app/components/user-register/user-register.component.ts");
/* harmony import */ var _components_item_management_item_management_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/item-management/item-management.component */ "./src/app/components/item-management/item-management.component.ts");
/* harmony import */ var _components_item_register_item_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/item-register/item-register.component */ "./src/app/components/item-register/item-register.component.ts");
/* harmony import */ var _components_item_quantity_item_quantity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/item-quantity/item-quantity.component */ "./src/app/components/item-quantity/item-quantity.component.ts");
/* harmony import */ var _components_total_price_total_price_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/total-price/total-price.component */ "./src/app/components/total-price/total-price.component.ts");
/* harmony import */ var _components_store_management_store_management_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/store-management/store-management.component */ "./src/app/components/store-management/store-management.component.ts");
/* harmony import */ var _components_store_register_store_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/store-register/store-register.component */ "./src/app/components/store-register/store-register.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeComponent"],
                _components_viewlog_viewlog_component__WEBPACK_IMPORTED_MODULE_13__["ViewLogComponent"],
                _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_16__["UserInfoComponent"],
                _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__["CheckOutComponent"],
                _components_item_table_item_table_component__WEBPACK_IMPORTED_MODULE_18__["ItemTableComponent"],
                _components_account_management_account_management_component__WEBPACK_IMPORTED_MODULE_19__["AccountManagementComponent"],
                _components_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_20__["UserTableComponent"],
                _components_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_21__["UserRegisterComponent"],
                _components_item_management_item_management_component__WEBPACK_IMPORTED_MODULE_22__["ItemManagementComponent"],
                _components_item_register_item_register_component__WEBPACK_IMPORTED_MODULE_23__["ItemRegisterComponent"],
                _components_item_quantity_item_quantity_component__WEBPACK_IMPORTED_MODULE_24__["ItemQuantityComponent"],
                _components_total_price_total_price_component__WEBPACK_IMPORTED_MODULE_25__["TotalPriceComponent"],
                _components_store_management_store_management_component__WEBPACK_IMPORTED_MODULE_26__["StoreManagementComponent"],
                _components_store_register_store_register_component__WEBPACK_IMPORTED_MODULE_27__["StoreRegisterComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account-management/account-management.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/account-management/account-management.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <app-user-table class=\"col-12\"></app-user-table>\r\n    <app-user-register class=\"col-12\"></app-user-register>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/account-management/account-management.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/account-management/account-management.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1tYW5hZ2VtZW50L2FjY291bnQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/account-management/account-management.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/account-management/account-management.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AccountManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountManagementComponent", function() { return AccountManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountManagementComponent = /** @class */ (function () {
    function AccountManagementComponent() {
    }
    AccountManagementComponent.prototype.ngOnInit = function () { };
    AccountManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-management',
            template: __webpack_require__(/*! ./account-management.component.html */ "./src/app/components/account-management/account-management.component.html"),
            styles: [__webpack_require__(/*! ./account-management.component.scss */ "./src/app/components/account-management/account-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountManagementComponent);
    return AccountManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/check-out/check-out.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"check-out-section\">\r\n  <div class=\"check-out\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Item</th>\r\n          <th scope=\"col\">Price</th>\r\n          <th scope=\"col\">Size</th>\r\n          <th scope=\"col\">Amount</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"showItems$ | async as items\">\r\n        <tr *ngFor=\"let item of items; let i = index\">\r\n          <td>{{ i+1 }}</td>\r\n          <td>{{ item.name }}</td>\r\n          <td>{{ item.price }}</td>\r\n          <td><select name=\"shirt\" class=\"form-control form-selector\" #sizeSelector>\r\n              <option value=\"1\">S</option>\r\n              <option value=\"2\">M</option>\r\n              <option value=\"3\">L</option>\r\n              <option value=\"4\">XL</option>\r\n              <option value=\"5\">XXL</option>\r\n            </select></td>\r\n          <td><input type=\"number\" placeholder=\"0\" min=\"0\" class=\"form-control form-checkout\"\r\n              (change)=\"addToCheckoutList(item.key, item.name, item.price, sizeSelector.value, checkoutForm.value, item.stock)\"\r\n              #checkoutForm></td>\r\n          <td><button class=\"btn btn-danger\" (click)=\"remove(item)\">remove</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button class=\"btn btn-checkout\" (click)=\"checkout()\">Check out</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/check-out/check-out.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.check-out-section {\n  background-color: #5d7085;\n  margin-top: 1em; }\n.check-out-section .check-out {\n    padding: 1em;\n    height: 300px; }\n.check-out-section .check-out h2,\n    .check-out-section .check-out table {\n      color: #ecf0f1; }\n.check-out-section .check-out table {\n      color: #ecf0f1;\n      height: 170px; }\n.check-out-section .check-out tbody {\n      display: block;\n      width: 100%;\n      overflow: auto;\n      height: 170px; }\n.check-out-section .check-out thead tr {\n      display: block; }\n.check-out-section .check-out th,\n    .check-out-section .check-out td {\n      padding: 5px;\n      text-align: left;\n      width: 200px; }\n.check-out-section .check-out .form-checkout,\n    .check-out-section .check-out .form-selector {\n      max-width: 100px; }\n.check-out-section .check-out .btn-checkout {\n      color: #ecf0f1;\n      background-color: #1abc9c;\n      position: relative;\n      left: 25em; }\n.check-out-section .check-out .btn-checkout:hover {\n      background-color: #16a085; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVjay1vdXQvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXHNoYXJlZFxcX3RoZW1lLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2stb3V0L0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGVjay1vdXRcXGNoZWNrLW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFBO0FBR0EsZUFBQTtBQUlBLFdBQUE7QUNMQTtFQUNFLHlCREU0QjtFQ0E1QixlQUFlLEVBQUE7QUFIakI7SUFNSSxZQUFZO0lBQ1osYUFBYSxFQUFBO0FBUGpCOztNQVdNLGNEWmdCLEVBQUE7QUNDdEI7TUFlTSxjRGhCZ0I7TUNpQmhCLGFBQWEsRUFBQTtBQWhCbkI7TUFvQk0sY0FBYztNQUNkLFdBQVc7TUFDWCxjQUFjO01BQ2QsYUFBYSxFQUFBO0FBdkJuQjtNQTJCTSxjQUFjLEVBQUE7QUEzQnBCOztNQWdDTSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtBQWxDbEI7O01BdUNNLGdCQUFnQixFQUFBO0FBdkN0QjtNQTJDTSxjRDVDZ0I7TUM2Q2hCLHlCRHRDZTtNQ3dDZixrQkFBa0I7TUFDbEIsVUFBVSxFQUFBO0FBL0NoQjtNQW1ETSx5QkQ1Q2lCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrLW91dC9jaGVjay1vdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb250ICovXHJcbiRmb250LXByaW1hcnk6ICNlY2YwZjE7XHJcblxyXG4vKiBiYWNrZ3JvdW5kICovXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNDQ5NWU7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogIzVkNzA4NTtcclxuXHJcbi8qIGJ1dHRvbiAqL1xyXG4kYnRuLXByaW1hcnk6ICMxYWJjOWM7XHJcbiRidG4tc2Vjb25kYXJ5OiAjMTZhMDg1OyIsIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdGhlbWVcIjtcclxuXHJcbi5jaGVjay1vdXQtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtc2Vjb25kYXJ5O1xyXG5cclxuICBtYXJnaW4tdG9wOiAxZW07XHJcblxyXG4gIC5jaGVjay1vdXQge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICBoMixcclxuICAgIHRhYmxlIHtcclxuICAgICAgY29sb3I6ICRmb250LXByaW1hcnlcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIGNvbG9yOiAkZm9udC1wcmltYXJ5O1xyXG4gICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB0ciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jaGVja291dCxcclxuICAgIC5mb3JtLXNlbGVjdG9yIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNoZWNrb3V0IHtcclxuICAgICAgY29sb3I6ICRmb250LXByaW1hcnk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tcHJpbWFyeTtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogMjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNoZWNrb3V0OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1zZWNvbmRhcnk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/check-out/check-out.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/item/item */ "./src/app/interfaces/item/item.ts");
/* harmony import */ var _services_checkout_transfer_checkout_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/checkout-transfer/checkout-transfer.service */ "./src/app/services/checkout-transfer/checkout-transfer.service.ts");
/* harmony import */ var src_app_services_item_data_item_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/item-data/item-data.service */ "./src/app/services/item-data/item-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(itemData, checkoutTransfer) {
        this.itemData = itemData;
        this.checkoutTransfer = checkoutTransfer;
        this.subscription = [];
        this.keys = [];
        this.checkoutList = new Map();
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        this.initShowItems();
    };
    CheckOutComponent.prototype.ngOnDestroy = function () {
        this.checkoutTransfer.reset();
        this.subscription.forEach(function (subscribe) { return subscribe.unsubscribe(); });
    };
    CheckOutComponent.prototype.initShowItems = function () {
        this.showItems$ = this.checkoutTransfer.currentItemsToShow;
    };
    CheckOutComponent.prototype.remove = function (item) {
        this.checkoutTransfer.removeItem(item);
        this.checkoutTransfer.removeItemToCal(item.name);
    };
    CheckOutComponent.prototype.checkout = function () {
        var _this = this;
        this.keys.forEach(function (key) {
            _this.subscription.push(_this.itemData.getQuantityByKey(key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (i) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var items, itemToUpdate;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            items = this.checkoutList.get(key);
                            itemToUpdate = {
                                s: i[0].size.s,
                                m: i[0].size.m,
                                l: i[0].size.l,
                                xl: i[0].size.xl,
                                xxl: i[0].size.xxl
                            };
                            if (items.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_2__["Size"].s && i[0].size.s >= items.amount) {
                                itemToUpdate.s -= items.amount;
                            }
                            else if (items.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_2__["Size"].m && i[0].size.m >= items.amount) {
                                itemToUpdate.m -= items.amount;
                            }
                            else if (items.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_2__["Size"].l && i[0].size.l >= items.amount) {
                                itemToUpdate.l -= items.amount;
                            }
                            else if (items.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_2__["Size"].xl && i[0].size.xl >= items.amount) {
                                itemToUpdate.xl -= items.amount;
                            }
                            else if (items.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_2__["Size"].xxl && i[0].size.xxl >= items.amount) {
                                itemToUpdate.xxl -= items.amount;
                            }
                            else {
                                console.log('Check out failed on: ', key);
                            }
                            return [4 /*yield*/, this.itemData.updateItemInfo(key, { size: itemToUpdate })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.itemData.recordTransaction(key, items.name, items.size + '', items.amount + '', items.price * items.amount + '', items.store)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })).subscribe());
        });
        this.checkoutTransfer.reset();
    };
    CheckOutComponent.prototype.addToCheckoutList = function (key, name, price, size, amount, store) {
        // console.log('pushing..', key, name, price, size, amount);
        if (!this.keys.includes(key)) {
            this.keys.push(key);
        }
        // tslint:disable-next-line:radix
        this.checkoutList.set(key, { name: name, size: parseInt(size), amount: parseInt(amount), price: parseInt(price), store: store });
        // tslint:disable-next-line:radix
        this.checkoutTransfer.addItemToCal(key, name, size, parseInt(price), parseInt(amount));
    };
    CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/components/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.scss */ "./src/app/components/check-out/check-out.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_item_data_item_data_service__WEBPACK_IMPORTED_MODULE_4__["ItemDataService"],
            _services_checkout_transfer_checkout_transfer_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutTransferService"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/employee.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/employee/employee.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"jumbotron text-center\" style=\"margin-bottom:0\">\r\n  <h1>@Thai</h1>\r\n  <p>The best stock system in the galaxy++</p> \r\n</div> -->\r\n\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row emp-content\">\r\n    <div class=\"col-sm-4\">\r\n      <app-user-info></app-user-info>\r\n      <app-total-price></app-total-price>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <app-item-table></app-item-table>\r\n      <app-check-out></app-check-out>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/employee/employee.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/employee/employee.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.emp-content {\n  margin-top: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9EOlxcQ1NcXGF0VGhhaS9zcmNcXGFwcFxcc2hhcmVkXFxfdGhlbWUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9EOlxcQ1NcXGF0VGhhaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZW1wbG95ZWVcXGVtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQUE7QUFHQSxlQUFBO0FBSUEsV0FBQTtBQ0xBO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvbnQgKi9cclxuJGZvbnQtcHJpbWFyeTogI2VjZjBmMTtcclxuXHJcbi8qIGJhY2tncm91bmQgKi9cclxuJGJhY2tncm91bmQtcHJpbWFyeTogIzM0NDk1ZTtcclxuJGJhY2tncm91bmQtc2Vjb25kYXJ5OiAjNWQ3MDg1O1xyXG5cclxuLyogYnV0dG9uICovXHJcbiRidG4tcHJpbWFyeTogIzFhYmM5YztcclxuJGJ0bi1zZWNvbmRhcnk6ICMxNmEwODU7IiwiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC90aGVtZVwiO1xyXG5cclxuLmVtcC1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/components/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/components/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/item-management/item-management.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/item-management/item-management.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <app-item-table class=\"col-12\"></app-item-table>\r\n    <app-item-register class=\"col-12\"></app-item-register>\r\n    <app-item-quantity class=\"col-12\"></app-item-quantity>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/item-management/item-management.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/item-management/item-management.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-item-table {\n  margin-top: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtLW1hbmFnZW1lbnQvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGl0ZW0tbWFuYWdlbWVudFxcaXRlbS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtLW1hbmFnZW1lbnQvaXRlbS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWl0ZW0tdGFibGUge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/item-management/item-management.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/item-management/item-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: ItemManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemManagementComponent", function() { return ItemManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemManagementComponent = /** @class */ (function () {
    function ItemManagementComponent() {
    }
    ItemManagementComponent.prototype.ngOnInit = function () {
    };
    ItemManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-management',
            template: __webpack_require__(/*! ./item-management.component.html */ "./src/app/components/item-management/item-management.component.html"),
            styles: [__webpack_require__(/*! ./item-management.component.scss */ "./src/app/components/item-management/item-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemManagementComponent);
    return ItemManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/item-quantity/item-quantity.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/item-quantity/item-quantity.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item-quantity-section\">\r\n  <div class=\"row item-quantity\">\r\n    <div class=\"col-12\">\r\n      <h2 *ngIf=\"name$ | async as name; else header\">\r\n        {{ name }}\r\n      </h2>\r\n      <ng-template #header>\r\n        <h2>...</h2>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-12\">\r\n      <div class=\"row\" *ngIf=\"quantity$ | async as quantity; else loading\">\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"item-s\">S</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"item-s\" [value]=\"(quantity[0]) ? quantity[0].size.s : 0\"\r\n            #quantityS>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"item-m\">M</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"item-m\" [value]=\"(quantity[0]) ? quantity[0].size.m : 0\"\r\n            #quantityM>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"item-l\">L</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"item-l\" [value]=\"(quantity[0]) ? quantity[0].size.l : 0\"\r\n            #quantityL>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"item-xl\">XL</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"item-xl\" [value]=\"(quantity[0]) ? quantity[0].size.xl : 0\"\r\n            #quantityXL>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"item-xxl\">XXL</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"item-xxl\"\r\n            [value]=\"(quantity[0]) ? quantity[0].size.xxl : 0\" #quantityXXL>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <button class=\"btn btn-primary btn-submit\" (click)=\"updateQuantity(quantity[0].key, {\r\n                    s: quantityS.value, m: quantityM.value, l: quantityL.value, xl: quantityXL.value, xxl: quantityXXL.value\r\n                  })\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #loading>\r\n      <div class=\"col-12 text-center loading\">\r\n        <div class=\"spinner-grow text-light\" style=\"margin: 2em 0\" role=\"status\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/item-quantity/item-quantity.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/item-quantity/item-quantity.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.item-quantity-section {\n  margin-top: 1em;\n  background-color: #5d7085; }\n.item-quantity-section .item-quantity {\n    margin: 1em; }\n.item-quantity-section .item-quantity h2,\n    .item-quantity-section .item-quantity label {\n      color: #ecf0f1; }\n.item-quantity-section .item-quantity .btn-submit {\n      position: relative;\n      top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtLXF1YW50aXR5L0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxzaGFyZWRcXF90aGVtZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2l0ZW0tcXVhbnRpdHkvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGl0ZW0tcXVhbnRpdHlcXGl0ZW0tcXVhbnRpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBO0FDTEE7RUFDRSxlQUFlO0VBQ2YseUJEQzRCLEVBQUE7QUNIOUI7SUFLSSxXQUFXLEVBQUE7QUFMZjs7TUFTTSxjRFZnQixFQUFBO0FDQ3RCO01BYU0sa0JBQWtCO01BQ2xCLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1xdWFudGl0eS9pdGVtLXF1YW50aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9udCAqL1xyXG4kZm9udC1wcmltYXJ5OiAjZWNmMGYxO1xyXG5cclxuLyogYmFja2dyb3VuZCAqL1xyXG4kYmFja2dyb3VuZC1wcmltYXJ5OiAjMzQ0OTVlO1xyXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6ICM1ZDcwODU7XHJcblxyXG4vKiBidXR0b24gKi9cclxuJGJ0bi1wcmltYXJ5OiAjMWFiYzljO1xyXG4kYnRuLXNlY29uZGFyeTogIzE2YTA4NTsiLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvdGhlbWUnO1xyXG5cclxuLml0ZW0tcXVhbnRpdHktc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXNlY29uZGFyeTtcclxuXHJcbiAgLml0ZW0tcXVhbnRpdHkge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcblxyXG4gICAgaDIsXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAkZm9udC1wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tc3VibWl0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDJlbTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/item-quantity/item-quantity.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/item-quantity/item-quantity.component.ts ***!
  \*********************************************************************/
/*! exports provided: ItemQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemQuantityComponent", function() { return ItemQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_item_transfer_item_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/item-transfer/item-transfer.service */ "./src/app/services/item-transfer/item-transfer.service.ts");
/* harmony import */ var src_app_services_item_data_item_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/item-data/item-data.service */ "./src/app/services/item-data/item-data.service.ts");





var ItemQuantityComponent = /** @class */ (function () {
    function ItemQuantityComponent(db, itemData, itemTransfer) {
        this.db = db;
        this.itemData = itemData;
        this.itemTransfer = itemTransfer;
        this.subscription = [];
    }
    ItemQuantityComponent.prototype.ngOnInit = function () {
        this.initName();
        this.initQuantity();
    };
    ItemQuantityComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (subscribe) {
            subscribe.unsubscribe();
        });
    };
    ItemQuantityComponent.prototype.initName = function () {
        this.name$ = this.itemTransfer.currentName;
    };
    ItemQuantityComponent.prototype.initQuantity = function () {
        var _this = this;
        this.subscription.push(this.itemTransfer.currentKey.subscribe(function (key) {
            _this.key = key;
            _this.quantity$ = _this.itemData.getQuantityByKey(key);
        }));
    };
    ItemQuantityComponent.prototype.updateQuantity = function (key, quantity) {
        var q = {
            s: (quantity.s > 0) ? quantity.s : 0,
            m: (quantity.m > 0) ? quantity.m : 0,
            l: (quantity.l > 0) ? quantity.l : 0,
            xl: (quantity.xl > 0) ? quantity.xl : 0,
            xxl: (quantity.xxl > 0) ? quantity.xxl : 0
        };
        // console.log(q);
        this.itemData.updateItemInfo(key, { size: q });
    };
    ItemQuantityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-quantity',
            template: __webpack_require__(/*! ./item-quantity.component.html */ "./src/app/components/item-quantity/item-quantity.component.html"),
            styles: [__webpack_require__(/*! ./item-quantity.component.scss */ "./src/app/components/item-quantity/item-quantity.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            src_app_services_item_data_item_data_service__WEBPACK_IMPORTED_MODULE_4__["ItemDataService"],
            src_app_services_item_transfer_item_transfer_service__WEBPACK_IMPORTED_MODULE_3__["ItemTransferService"]])
    ], ItemQuantityComponent);
    return ItemQuantityComponent;
}());



/***/ }),

/***/ "./src/app/components/item-register/item-register.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/item-register/item-register.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item-register-section\">\r\n  <div class=\"row item-register\">\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"item-name\">name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"item-name\" placeholder=\"name\" #itemName>\r\n    </div>\r\n    <div class=\"form-group col-3\">\r\n      <label for=\"item-price\">price</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"item-price\" placeholder=\"price\" #itemPrice>\r\n    </div>\r\n    <div class=\"form-group col-3\">\r\n      <label for=\"item-store\">store</label>\r\n      <select *ngIf=\"store$ | async as store; else loading\" name=\"item-store\" class=\"form-control form-selector\"\r\n        id=\"item-store\" [disabled]=\"store.length == 0\" [(ngModel)]=\"selectedOption\" #itemStore>\r\n        <option *ngIf=\"store.length == 0\" value=\"\">----</option>\r\n        <option *ngFor=\"let s of store\" [value]=\"s.name\">{{ s.name }}</option>\r\n      </select>\r\n\r\n      <ng-template #loading>\r\n        <select name=\"item-store\" class=\"form-control form-selector\" id=\"item-store\" disabled>\r\n          <option value=\"\">loading..</option>\r\n        </select>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"col-1\">\r\n      <button class=\"btn btn-primary btn-submit\"\r\n        (click)=\"addItem(itemName.value, itemPrice.value, selectedOption)\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/item-register/item-register.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/item-register/item-register.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.item-register-section {\n  margin-top: 1em;\n  background-color: #5d7085; }\n.item-register-section .item-register {\n    margin: 1em; }\n.item-register-section .item-register label {\n      color: #ecf0f1; }\n.item-register-section .item-register .btn-submit {\n      position: relative;\n      top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtLXJlZ2lzdGVyL0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxzaGFyZWRcXF90aGVtZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2l0ZW0tcmVnaXN0ZXIvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGl0ZW0tcmVnaXN0ZXJcXGl0ZW0tcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBO0FDTEE7RUFDRSxlQUFlO0VBQ2YseUJEQzRCLEVBQUE7QUNIOUI7SUFLSSxXQUFXLEVBQUE7QUFMZjtNQVFNLGNEVGdCLEVBQUE7QUNDdEI7TUFZTSxrQkFBa0I7TUFDbEIsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtLXJlZ2lzdGVyL2l0ZW0tcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb250ICovXHJcbiRmb250LXByaW1hcnk6ICNlY2YwZjE7XHJcblxyXG4vKiBiYWNrZ3JvdW5kICovXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNDQ5NWU7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogIzVkNzA4NTtcclxuXHJcbi8qIGJ1dHRvbiAqL1xyXG4kYnRuLXByaW1hcnk6ICMxYWJjOWM7XHJcbiRidG4tc2Vjb25kYXJ5OiAjMTZhMDg1OyIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC90aGVtZSc7XHJcblxyXG4uaXRlbS1yZWdpc3Rlci1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtc2Vjb25kYXJ5O1xyXG5cclxuICAuaXRlbS1yZWdpc3RlciB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAkZm9udC1wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tc3VibWl0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDJlbTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/item-register/item-register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/item-register/item-register.component.ts ***!
  \*********************************************************************/
/*! exports provided: ItemRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRegisterComponent", function() { return ItemRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/item-data/item-data.service */ "./src/app/services/item-data/item-data.service.ts");
/* harmony import */ var _services_store_data_store_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store-data/store-data.service */ "./src/app/services/store-data/store-data.service.ts");




var ItemRegisterComponent = /** @class */ (function () {
    function ItemRegisterComponent(storeData, itemData) {
        this.storeData = storeData;
        this.itemData = itemData;
    }
    ItemRegisterComponent.prototype.ngOnInit = function () {
        this.initStore();
    };
    ItemRegisterComponent.prototype.initStore = function () {
        this.store$ = this.storeData.getStoreInfo();
    };
    ItemRegisterComponent.prototype.addItem = function (name, price, store) {
        this.itemData.addItemToDatabase(name, price, store);
    };
    ItemRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-register',
            template: __webpack_require__(/*! ./item-register.component.html */ "./src/app/components/item-register/item-register.component.html"),
            styles: [__webpack_require__(/*! ./item-register.component.scss */ "./src/app/components/item-register/item-register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_data_store_data_service__WEBPACK_IMPORTED_MODULE_3__["StoreDataService"],
            _services_item_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__["ItemDataService"]])
    ], ItemRegisterComponent);
    return ItemRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/item-table/item-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/item-table/item-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item-table-section\">\r\n  <div class=\"item-table\" style=\"padding-top:0px;\">\r\n    <h2>\r\n      Item\r\n    </h2>\r\n    <ul *ngIf=\"store$ | async as stores; else loading\" class=\"nav nav-tabs\" style=\"background-color: white\">\r\n      <li class=\"nav-item nav-link \"><a data-toggle=\"tab\" (click)=\"compItem('all')\">ALL</a></li>\r\n      <div *ngFor=\"let store of stores; let i = index\">\r\n        <li class=\"nav-item nav-link \"><a data-toggle=\"tab\" (click)=\"compItem(store.name)\">{{ store.name }}</a></li>\r\n      </div>\r\n    </ul>\r\n\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Item</th>\r\n          <th scope=\"col\">Price</th>\r\n          <th *ngIf=\"this.currentRoute !== '/item-management'\" scope=\"col\">S</th>\r\n          <th *ngIf=\"this.currentRoute !== '/item-management'\" scope=\"col\">M</th>\r\n          <th *ngIf=\"this.currentRoute !== '/item-management'\" scope=\"col\">L</th>\r\n          <th *ngIf=\"this.currentRoute !== '/item-management'\" scope=\"col\">XL</th>\r\n          <th *ngIf=\"this.currentRoute !== '/item-management'\" scope=\"col\">XXL</th>\r\n          <th *ngIf=\"this.currentRoute === '/item-management'\" scope=\"col\">Quantity</th>\r\n          <th *ngIf=\"this.currentRoute === '/item-management'\" scope=\"col\">Store</th>\r\n          <th scope=\"col\"></th>\r\n          <th scope=\"col\"></th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"items$ | async as items; else loading\">\r\n        <tr *ngFor=\"let item of items; let i = index\">\r\n          <td>{{ i+1 }}</td>\r\n          <td>{{ item.name }}</td>\r\n          <td>{{ item.price }}</td>\r\n          <td *ngIf=\"this.currentRoute !== '/item-management'\">{{ item.size.s }}</td>\r\n          <td *ngIf=\"this.currentRoute !== '/item-management'\">{{ item.size.m }}</td>\r\n          <td *ngIf=\"this.currentRoute !== '/item-management'\">{{ item.size.l }}</td>\r\n          <td *ngIf=\"this.currentRoute !== '/item-management'\">{{ item.size.xl }}</td>\r\n          <td *ngIf=\"this.currentRoute !== '/item-management'\">{{ item.size.xxl }}</td>\r\n          <td *ngIf=\"this.currentRoute === '/item-management'\">\r\n            {{ getQuantity(item.size) }}</td>\r\n          <td *ngIf=\"this.currentRoute === '/item-management'\">{{ item.stock }}</td>\r\n          <td><button (click)=\"removeItem(item.key)\" class=\"btn btn-danger\"\r\n              *ngIf=\"this.currentRoute === '/item-management'\">Remove</button>\r\n          </td>\r\n          <td><button (click)=\"selectItem(item)\" class=\"btn btn-info btn-select\">Select</button></td>\r\n        </tr>\r\n      </tbody>\r\n      <ng-template #loading>\r\n        <div class=\"text-center loading\">\r\n          <div class=\"spinner-grow text-light\" style=\"margin: 4em 0\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </table>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/item-table/item-table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/item-table/item-table.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.item-table-section {\n  background-color: #5d7085; }\n.item-table-section .item-table {\n    padding: 1em;\n    height: 350px; }\n.item-table-section .item-table h2,\n    .item-table-section .item-table table {\n      color: #ecf0f1; }\n.item-table-section .item-table tbody {\n      display: block;\n      width: 100%;\n      overflow: auto;\n      height: 220px; }\n.item-table-section .item-table thead tr {\n      display: block; }\n.item-table-section .item-table th,\n    .item-table-section .item-table td {\n      padding: 5px;\n      text-align: left;\n      width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtLXRhYmxlL0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxzaGFyZWRcXF90aGVtZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2l0ZW0tdGFibGUvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGl0ZW0tdGFibGVcXGl0ZW0tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBO0FDTEE7RUFDRSx5QkRFNEIsRUFBQTtBQ0g5QjtJQUlJLFlBQVk7SUFDWixhQUFhLEVBQUE7QUFMakI7O01BU00sY0RWZ0IsRUFBQTtBQ0N0QjtNQWFNLGNBQWM7TUFDZCxXQUFXO01BQ1gsY0FBYztNQUNkLGFBQWEsRUFBQTtBQWhCbkI7TUFvQk0sY0FBYyxFQUFBO0FBcEJwQjs7TUF5Qk0sWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2l0ZW0tdGFibGUvaXRlbS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvbnQgKi9cclxuJGZvbnQtcHJpbWFyeTogI2VjZjBmMTtcclxuXHJcbi8qIGJhY2tncm91bmQgKi9cclxuJGJhY2tncm91bmQtcHJpbWFyeTogIzM0NDk1ZTtcclxuJGJhY2tncm91bmQtc2Vjb25kYXJ5OiAjNWQ3MDg1O1xyXG5cclxuLyogYnV0dG9uICovXHJcbiRidG4tcHJpbWFyeTogIzFhYmM5YztcclxuJGJ0bi1zZWNvbmRhcnk6ICMxNmEwODU7IiwiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC90aGVtZVwiO1xyXG5cclxuLml0ZW0tdGFibGUtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtc2Vjb25kYXJ5O1xyXG5cclxuICAuaXRlbS10YWJsZSB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG5cclxuICAgIGgyLFxyXG4gICAgdGFibGUge1xyXG4gICAgICBjb2xvcjogJGZvbnQtcHJpbWFyeVxyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB0ciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/item-table/item-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/item-table/item-table.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTableComponent", function() { return ItemTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_item_data_item_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/item-data/item-data.service */ "./src/app/services/item-data/item-data.service.ts");
/* harmony import */ var src_app_services_item_transfer_item_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/item-transfer/item-transfer.service */ "./src/app/services/item-transfer/item-transfer.service.ts");
/* harmony import */ var _services_checkout_transfer_checkout_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/checkout-transfer/checkout-transfer.service */ "./src/app/services/checkout-transfer/checkout-transfer.service.ts");
/* harmony import */ var _services_store_data_store_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/store-data/store-data.service */ "./src/app/services/store-data/store-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var ItemTableComponent = /** @class */ (function () {
    function ItemTableComponent(route, itemData, itemTransfer, checkoutTransfer, storeData) {
        this.route = route;
        this.itemData = itemData;
        this.itemTransfer = itemTransfer;
        this.checkoutTransfer = checkoutTransfer;
        this.storeData = storeData;
    }
    ItemTableComponent.prototype.ngOnInit = function () {
        this.initItems();
        this.initStore();
    };
    ItemTableComponent.prototype.ngOnDestroy = function () {
        this.itemTransfer.reset();
        this.checkoutTransfer.reset();
    };
    ItemTableComponent.prototype.initItems = function () {
        this.items$ = this.itemData.getAllItems();
        // this.itemData.getAllItems().subscribe(a => console.log(a));
    };
    ItemTableComponent.prototype.initStore = function () {
        this.store$ = this.storeData.getStoreInfo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (store) {
            console.log('#', store);
            return store;
        }));
    };
    ItemTableComponent.prototype.removeItem = function (key) {
        this.itemTransfer.reset();
        this.itemData.deleteItem(key);
    };
    ItemTableComponent.prototype.compItem = function (key) {
        this.items$ = this.itemData.getAllItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (items) {
            console.log(items);
            var arr = [];
            if (key === 'all') {
                return items;
            }
            else {
                items.map(function (item) {
                    if (item.stock === key)
                        arr.push(item);
                });
                return arr;
            }
        }));
    };
    ItemTableComponent.prototype.selectItem = function (item) {
        if (this.currentRoute === '/item-management') {
            this.itemTransfer.setKey(item.key);
            this.itemTransfer.setItemName(item.name);
        }
        else if (this.currentRoute === '/home') {
            this.checkoutTransfer.addItem(item);
        }
    };
    Object.defineProperty(ItemTableComponent.prototype, "currentRoute", {
        get: function () {
            return this.route.url;
        },
        enumerable: true,
        configurable: true
    });
    ItemTableComponent.prototype.getQuantity = function (item) {
        // tslint:disable-next-line:radix
        return parseInt(item.s) + parseInt(item.m) + parseInt(item.l) + parseInt(item.xl) + parseInt(item.xxl);
    };
    ItemTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-table',
            template: __webpack_require__(/*! ./item-table.component.html */ "./src/app/components/item-table/item-table.component.html"),
            styles: [__webpack_require__(/*! ./item-table.component.scss */ "./src/app/components/item-table/item-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_item_data_item_data_service__WEBPACK_IMPORTED_MODULE_3__["ItemDataService"],
            src_app_services_item_transfer_item_transfer_service__WEBPACK_IMPORTED_MODULE_4__["ItemTransferService"],
            _services_checkout_transfer_checkout_transfer_service__WEBPACK_IMPORTED_MODULE_5__["CheckoutTransferService"],
            _services_store_data_store_data_service__WEBPACK_IMPORTED_MODULE_6__["StoreDataService"]])
    ], ItemTableComponent);
    return ItemTableComponent;
}());



/***/ }),

/***/ "./src/app/components/login-page/login-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"login-page col-6 ml-auto mr-auto\">\r\n      <h1 style=\"color: white\">@Thai<h6>Powered by Stockz</h6></h1>\r\n      <div class=\"form-group\">\r\n        <label for=\"email-login\">Email address</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email-login\" placeholder=\"Enter email\" #userEmail>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pass-login\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"pass-login\" placeholder=\"Password\" #userPassword>\r\n      </div>\r\n      <br>\r\n      <button class=\"btn btn-light float-right mr-3\" (click)=\"login(userEmail.value, userPassword.value)\">\r\n        <span *ngIf=\"clickedLogin\" class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n        Submit\r\n      </button>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.login-page {\n  position: relative;\n  top: 12em; }\n.login-page label {\n    color: #ecf0f1;\n    font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxzaGFyZWRcXF90aGVtZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLXBhZ2UvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luLXBhZ2VcXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBO0FDTEE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBO0FBRlg7SUFLSSxjRE5rQjtJQ09sQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvbnQgKi9cclxuJGZvbnQtcHJpbWFyeTogI2VjZjBmMTtcclxuXHJcbi8qIGJhY2tncm91bmQgKi9cclxuJGJhY2tncm91bmQtcHJpbWFyeTogIzM0NDk1ZTtcclxuJGJhY2tncm91bmQtc2Vjb25kYXJ5OiAjNWQ3MDg1O1xyXG5cclxuLyogYnV0dG9uICovXHJcbiRidG4tcHJpbWFyeTogIzFhYmM5YztcclxuJGJ0bi1zZWNvbmRhcnk6ICMxNmEwODU7IiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL3RoZW1lJztcclxuXHJcbi5sb2dpbi1wYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMmVtO1xyXG5cclxuICBsYWJlbHtcclxuICAgIGNvbG9yOiAkZm9udC1wcmltYXJ5O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.clickedLogin = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        if (this.isLoggedIn) {
            this.router.navigate(['/home']);
        }
    };
    LoginPageComponent.prototype.login = function (email, pass) {
        this.clickedLogin = true;
        if (email && pass) {
            this.auth.login(email, pass);
        }
        else {
            this.clickedLogin = false;
            alert('Email and password are required!');
        }
    };
    LoginPageComponent.prototype.logout = function () {
        this.auth.logout();
    };
    Object.defineProperty(LoginPageComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.auth.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/components/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/components/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">@Thai</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Check out</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/view-log']\">View Log</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isManager\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/account-management']\">Account Management</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isManager\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/item-management']\">Item Management</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isManager\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/store-management']\">Store Management</a>\r\n          </li>\r\n      </ul>\r\n    </div>\r\n    <button *ngIf=\"isLoggedIn\" class=\"btn btn-danger\" (click)=\"logout()\">\r\n      Logout\r\n    </button>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\nnav {\n  background-color: #2c3e50; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXHNoYXJlZFxcX3RoZW1lLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFBO0FBR0EsZUFBQTtBQUlBLFdBQUE7QUNMQTtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9udCAqL1xyXG4kZm9udC1wcmltYXJ5OiAjZWNmMGYxO1xyXG5cclxuLyogYmFja2dyb3VuZCAqL1xyXG4kYmFja2dyb3VuZC1wcmltYXJ5OiAjMzQ0OTVlO1xyXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6ICM1ZDcwODU7XHJcblxyXG4vKiBidXR0b24gKi9cclxuJGJ0bi1wcmltYXJ5OiAjMWFiYzljO1xyXG4kYnRuLXNlY29uZGFyeTogIzE2YTA4NTsiLCJAaW1wb3J0IFwiLi4vLi4vc2hhcmVkL3RoZW1lXCI7XHJcblxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NavbarComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.auth.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "isManager", {
        get: function () {
            return this.auth.isManager;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/store-management/store-management.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/store-management/store-management.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row store-management-section\">\r\n\r\n    <div class=\"store-management col-12\">\r\n      <h2>Store Management</h2>\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Location</th>\r\n            <th scope=\"col\">Contact</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"store$ | async as store; else loading\">\r\n          <tr *ngFor=\"let s of store; let i = index\">\r\n            <td>{{ i+1 }}</td>\r\n            <td>{{ s.name }}</td>\r\n            <td>{{ s.location }}</td>\r\n            <td>{{ s.contact }}</td>\r\n            <td><button class=\"btn btn-danger\" (click)=\"removeStore(s.key)\">Remove</button></td>\r\n          </tr>\r\n        </tbody>\r\n        <ng-template #loading>\r\n          <div class=\"text-center loading\">\r\n            <div class=\"spinner-grow text-light\" style=\"margin: 4em 0\" role=\"status\">\r\n              <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </table>\r\n    </div>\r\n    \r\n    <app-store-register class=\"col-12\"></app-store-register>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/store-management/store-management.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/store-management/store-management.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.store-management-section {\n  margin-top: 1em;\n  background-color: #5d7085; }\n.store-management-section .store-management {\n    padding: 1em;\n    height: 500px; }\n.store-management-section .store-management h2,\n    .store-management-section .store-management table {\n      color: #ecf0f1; }\n.store-management-section .store-management tbody {\n      display: block;\n      width: 100%;\n      overflow: auto;\n      height: 450px; }\n.store-management-section .store-management thead tr {\n      display: block; }\n.store-management-section .store-management th,\n    .store-management-section .store-management td {\n      padding: 5px;\n      text-align: left;\n      width: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1tYW5hZ2VtZW50L0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxzaGFyZWRcXF90aGVtZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0b3JlLW1hbmFnZW1lbnQvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHN0b3JlLW1hbmFnZW1lbnRcXHN0b3JlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBO0FDTEE7RUFDRSxlQUFlO0VBQ2YseUJEQzRCLEVBQUE7QUNIOUI7SUFLSSxZQUFZO0lBQ1osYUFBYSxFQUFBO0FBTmpCOztNQVVNLGNEWGdCLEVBQUE7QUNDdEI7TUFjTSxjQUFjO01BQ2QsV0FBVztNQUNYLGNBQWM7TUFDZCxhQUFhLEVBQUE7QUFqQm5CO01BcUJNLGNBQWMsRUFBQTtBQXJCcEI7O01BMEJNLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1tYW5hZ2VtZW50L3N0b3JlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb250ICovXHJcbiRmb250LXByaW1hcnk6ICNlY2YwZjE7XHJcblxyXG4vKiBiYWNrZ3JvdW5kICovXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNDQ5NWU7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogIzVkNzA4NTtcclxuXHJcbi8qIGJ1dHRvbiAqL1xyXG4kYnRuLXByaW1hcnk6ICMxYWJjOWM7XHJcbiRidG4tc2Vjb25kYXJ5OiAjMTZhMDg1OyIsIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdGhlbWVcIjtcclxuXHJcbi5zdG9yZS1tYW5hZ2VtZW50LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1zZWNvbmRhcnk7XHJcblxyXG4gIC5zdG9yZS1tYW5hZ2VtZW50IHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcblxyXG4gICAgaDIsXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIGNvbG9yOiAkZm9udC1wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB0ciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/store-management/store-management.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/store-management/store-management.component.ts ***!
  \***************************************************************************/
/*! exports provided: StoreManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreManagementComponent", function() { return StoreManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_data_store_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store-data/store-data.service */ "./src/app/services/store-data/store-data.service.ts");



var StoreManagementComponent = /** @class */ (function () {
    function StoreManagementComponent(storeData) {
        this.storeData = storeData;
    }
    StoreManagementComponent.prototype.ngOnInit = function () {
        this.initStore();
    };
    StoreManagementComponent.prototype.initStore = function () {
        this.store$ = this.storeData.getStoreInfo();
    };
    StoreManagementComponent.prototype.removeStore = function (key) {
        this.storeData.deleteItem(key);
    };
    StoreManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-management',
            template: __webpack_require__(/*! ./store-management.component.html */ "./src/app/components/store-management/store-management.component.html"),
            styles: [__webpack_require__(/*! ./store-management.component.scss */ "./src/app/components/store-management/store-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_data_store_data_service__WEBPACK_IMPORTED_MODULE_2__["StoreDataService"]])
    ], StoreManagementComponent);
    return StoreManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/store-register/store-register.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/store-register/store-register.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"store-register-section\">\r\n  <div class=\"row store-register\">\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"store-name\">name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"store-name\" placeholder=\"name\" #storeName>\r\n    </div>\r\n    <div class=\"form-group col-3\">\r\n      <label for=\"store-location\">location</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"store-location\" placeholder=\"location\" #storeLocation>\r\n    </div>\r\n    <div class=\"form-group col-3\">\r\n      <label for=\"store-contact\">contact</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"store-contact\" placeholder=\"contact\" #storeContact>\r\n    </div>\r\n\r\n    <div class=\"col-1\">\r\n      <button class=\"btn btn-primary btn-submit\"\r\n        (click)=\"addStore(storeName.value, storeLocation.value, storeContact.value)\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/store-register/store-register.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/store-register/store-register.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.store-register-section {\n  margin-top: 1em;\n  background-color: #5d7085; }\n.store-register-section .store-register {\n    margin: 1em; }\n.store-register-section .store-register label {\n      color: #ecf0f1; }\n.store-register-section .store-register .btn-submit {\n      position: relative;\n      top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1yZWdpc3Rlci9EOlxcQ1NcXGF0VGhhaS9zcmNcXGFwcFxcc2hhcmVkXFxfdGhlbWUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1yZWdpc3Rlci9EOlxcQ1NcXGF0VGhhaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc3RvcmUtcmVnaXN0ZXJcXHN0b3JlLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQUE7QUFHQSxlQUFBO0FBSUEsV0FBQTtBQ0xBO0VBQ0UsZUFBZTtFQUNmLHlCREM0QixFQUFBO0FDSDlCO0lBS0ksV0FBVyxFQUFBO0FBTGY7TUFRTSxjRFRnQixFQUFBO0FDQ3RCO01BWU0sa0JBQWtCO01BQ2xCLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUtcmVnaXN0ZXIvc3RvcmUtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb250ICovXHJcbiRmb250LXByaW1hcnk6ICNlY2YwZjE7XHJcblxyXG4vKiBiYWNrZ3JvdW5kICovXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNDQ5NWU7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogIzVkNzA4NTtcclxuXHJcbi8qIGJ1dHRvbiAqL1xyXG4kYnRuLXByaW1hcnk6ICMxYWJjOWM7XHJcbiRidG4tc2Vjb25kYXJ5OiAjMTZhMDg1OyIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC90aGVtZSc7XHJcblxyXG4uc3RvcmUtcmVnaXN0ZXItc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXNlY29uZGFyeTtcclxuXHJcbiAgLnN0b3JlLXJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgY29sb3I6ICRmb250LXByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1zdWJtaXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMmVtO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/store-register/store-register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/store-register/store-register.component.ts ***!
  \***********************************************************************/
/*! exports provided: StoreRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRegisterComponent", function() { return StoreRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_data_store_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/store-data/store-data.service */ "./src/app/services/store-data/store-data.service.ts");



var StoreRegisterComponent = /** @class */ (function () {
    function StoreRegisterComponent(storeData) {
        this.storeData = storeData;
    }
    StoreRegisterComponent.prototype.ngOnInit = function () {
    };
    StoreRegisterComponent.prototype.addStore = function (name, location, contact) {
        this.storeData.addStore(name, location, contact);
    };
    StoreRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-register',
            template: __webpack_require__(/*! ./store-register.component.html */ "./src/app/components/store-register/store-register.component.html"),
            styles: [__webpack_require__(/*! ./store-register.component.scss */ "./src/app/components/store-register/store-register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_data_store_data_service__WEBPACK_IMPORTED_MODULE_2__["StoreDataService"]])
    ], StoreRegisterComponent);
    return StoreRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/total-price/total-price.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/total-price/total-price.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"total-price-section\">\r\n  <div class=\"total-price\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Amount</th>\r\n          <th scope=\"col\">Price</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"items$ | async as items\">\r\n        <tr *ngFor=\"let item of items\">\r\n          <td>{{ item.name + \" \" + item.size }}</td>\r\n          <td>{{ item.amount }}</td>\r\n          <td>{{ item.price * item.amount }}</td>\r\n        </tr>\r\n      </tbody>\r\n      <h2>\r\n        Total Price:\r\n      </h2>\r\n      <h1>\r\n        {{ totalPrice + \" THB\" }}\r\n      </h1>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/total-price/total-price.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/total-price/total-price.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.total-price-section {\n  margin-top: 1em;\n  background-color: #5d7085; }\n.total-price-section .total-price {\n    padding: 1em;\n    height: 460px; }\n.total-price-section .total-price h2,\n    .total-price-section .total-price table {\n      color: #ecf0f1; }\n.total-price-section .total-price tbody {\n      display: block;\n      width: 100%;\n      overflow: auto;\n      height: 300px; }\n.total-price-section .total-price thead tr {\n      display: block; }\n.total-price-section .total-price th,\n    .total-price-section .total-price td {\n      padding: 5px;\n      text-align: left;\n      width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3RhbC1wcmljZS9EOlxcQ1NcXGF0VGhhaS9zcmNcXGFwcFxcc2hhcmVkXFxfdGhlbWUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90b3RhbC1wcmljZS9EOlxcQ1NcXGF0VGhhaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG90YWwtcHJpY2VcXHRvdGFsLXByaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQUE7QUFHQSxlQUFBO0FBSUEsV0FBQTtBQ0xBO0VBQ0UsZUFBZTtFQUNmLHlCREM0QixFQUFBO0FDSDlCO0lBS0ksWUFBWTtJQUNaLGFBQWEsRUFBQTtBQU5qQjs7TUFVTSxjRFhnQixFQUFBO0FDQ3RCO01BY00sY0FBYztNQUNkLFdBQVc7TUFDWCxjQUFjO01BQ2QsYUFBYSxFQUFBO0FBakJuQjtNQXFCTSxjQUFjLEVBQUE7QUFyQnBCOztNQTBCTSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG90YWwtcHJpY2UvdG90YWwtcHJpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb250ICovXHJcbiRmb250LXByaW1hcnk6ICNlY2YwZjE7XHJcblxyXG4vKiBiYWNrZ3JvdW5kICovXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNDQ5NWU7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogIzVkNzA4NTtcclxuXHJcbi8qIGJ1dHRvbiAqL1xyXG4kYnRuLXByaW1hcnk6ICMxYWJjOWM7XHJcbiRidG4tc2Vjb25kYXJ5OiAjMTZhMDg1OyIsIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdGhlbWVcIjtcclxuXHJcbi50b3RhbC1wcmljZS1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtc2Vjb25kYXJ5O1xyXG5cclxuICAudG90YWwtcHJpY2Uge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgaGVpZ2h0OiA0NjBweDtcclxuXHJcbiAgICBoMixcclxuICAgIHRhYmxlIHtcclxuICAgICAgY29sb3I6ICRmb250LXByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoZWFkIHRyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/total-price/total-price.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/total-price/total-price.component.ts ***!
  \*****************************************************************/
/*! exports provided: TotalPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalPriceComponent", function() { return TotalPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/item/item */ "./src/app/interfaces/item/item.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_checkout_transfer_checkout_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/checkout-transfer/checkout-transfer.service */ "./src/app/services/checkout-transfer/checkout-transfer.service.ts");





var TotalPriceComponent = /** @class */ (function () {
    function TotalPriceComponent(checkoutTransfer) {
        this.checkoutTransfer = checkoutTransfer;
    }
    TotalPriceComponent.prototype.ngOnInit = function () {
        this.initItems();
    };
    TotalPriceComponent.prototype.ngOnDestroy = function () {
        this.checkoutTransfer.reset();
    };
    TotalPriceComponent.prototype.initItems = function () {
        var _this = this;
        this.items$ = this.checkoutTransfer.currentItemsToCal.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            _this.totalPrice = 0;
            return items.map(function (item) {
                if (item.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].s + '') {
                    item.size = 'S';
                }
                else if (item.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].m + '') {
                    item.size = 'M';
                }
                else if (item.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].l + '') {
                    item.size = 'L';
                }
                else if (item.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].xl + '') {
                    item.size = 'XL';
                }
                else if (item.size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].xxl + '') {
                    item.size = 'XXL';
                }
                _this.totalPrice += item.amount * item.price;
                return item;
            });
        }));
    };
    TotalPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-total-price',
            template: __webpack_require__(/*! ./total-price.component.html */ "./src/app/components/total-price/total-price.component.html"),
            styles: [__webpack_require__(/*! ./total-price.component.scss */ "./src/app/components/total-price/total-price.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_checkout_transfer_checkout_transfer_service__WEBPACK_IMPORTED_MODULE_4__["CheckoutTransferService"]])
    ], TotalPriceComponent);
    return TotalPriceComponent;
}());



/***/ }),

/***/ "./src/app/components/user-info/user-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-section\">\r\n  <div class=\"user-info\" *ngIf=\"currentUser$ | async as currentUser; else loading\">\r\n    <h2 class=\"user-name\">\r\n      {{ currentUser.name }}\r\n    </h2>\r\n    <hr>\r\n    <h4>\r\n      {{ currentUser.email }}\r\n    </h4>\r\n    <p>\r\n      {{ (currentUser.authLevel == 2) ? 'Manager' : 'Employee' }}\r\n    </p>\r\n  </div>\r\n  <ng-template #loading>\r\n    <div class=\"text-center loading\">\r\n      <div class=\"spinner-grow text-light\" style=\"margin: 4em 0\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.user-info-section {\n  background-color: #5d7085; }\n.user-info-section .user-info {\n    padding: 1em;\n    height: 190px; }\n.user-info-section .user-info h2,\n    .user-info-section .user-info h4,\n    .user-info-section .user-info p {\n      color: #ecf0f1; }\n.user-info-section .user-info hr {\n      background-color: #ecf0f1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWluZm8vRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXHNoYXJlZFxcX3RoZW1lLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1pbmZvL0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWluZm9cXHVzZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFBO0FBR0EsZUFBQTtBQUlBLFdBQUE7QUNMQTtFQUNFLHlCREU0QixFQUFBO0FDSDlCO0lBSUksWUFBWTtJQUNaLGFBQWEsRUFBQTtBQUxqQjs7O01BVU0sY0RYZ0IsRUFBQTtBQ0N0QjtNQWNNLHlCRGZnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9udCAqL1xyXG4kZm9udC1wcmltYXJ5OiAjZWNmMGYxO1xyXG5cclxuLyogYmFja2dyb3VuZCAqL1xyXG4kYmFja2dyb3VuZC1wcmltYXJ5OiAjMzQ0OTVlO1xyXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6ICM1ZDcwODU7XHJcblxyXG4vKiBidXR0b24gKi9cclxuJGJ0bi1wcmltYXJ5OiAjMWFiYzljO1xyXG4kYnRuLXNlY29uZGFyeTogIzE2YTA4NTsiLCJAaW1wb3J0IFwiLi4vLi4vc2hhcmVkL3RoZW1lXCI7XHJcblxyXG4udXNlci1pbmZvLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXNlY29uZGFyeTtcclxuXHJcbiAgLnVzZXItaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG5cclxuICAgIGgyLFxyXG4gICAgaDQsXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICRmb250LXByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9udC1wcmltYXJ5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");




var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(auth, userData) {
        this.auth = auth;
        this.userData = userData;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        this.initCurrentUser();
    };
    UserInfoComponent.prototype.initCurrentUser = function () {
        var currentUserEmail = this.auth.loggingInAccount;
        this.currentUser$ = this.userData.getUserDataByEmail(currentUserEmail);
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/components/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/components/user-info/user-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user-register/user-register.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-register/user-register.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-register-section\">\r\n  <div class=\"row user-register\">\r\n    <div class=\"form-group col-3\">\r\n      <label for=\"email-login\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"email-login\" placeholder=\"Enter email\" #userEmail>\r\n    </div>\r\n    <div class=\"form-group col-3\">\r\n      <label for=\"pass-login\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"pass-login\" placeholder=\"Password\" #userPassword>\r\n    </div>\r\n    <div class=\"form-group col-2\">\r\n      <label for=\"name-login\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name-login\" placeholder=\"Name\" #userName>\r\n    </div>\r\n    <div class=\"form-group col-2\">\r\n      <label for=\"job-login\">Job</label>\r\n      <td><select name=\"shirt\" class=\"form-control form-selector\" #userJob>\r\n          <option value=\"1\">Employee</option>\r\n          <option value=\"2\">Manager</option>\r\n        </select></td>\r\n    </div>\r\n    <div class=\"col-1\">\r\n      <button class=\"btn btn-primary btn-submit\"\r\n        (click)=\"register(userEmail.value, userPassword.value, userName.value, userJob.value)\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-register/user-register.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-register/user-register.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.user-register-section {\n  margin-top: 1em;\n  background-color: #5d7085; }\n.user-register-section .user-register {\n    margin: 1em; }\n.user-register-section .user-register label {\n      color: #ecf0f1; }\n.user-register-section .user-register .btn-submit {\n      position: relative;\n      top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlZ2lzdGVyL0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxzaGFyZWRcXF90aGVtZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXItcmVnaXN0ZXIvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVzZXItcmVnaXN0ZXJcXHVzZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBO0FDTEE7RUFDRSxlQUFlO0VBQ2YseUJEQzRCLEVBQUE7QUNIOUI7SUFLSSxXQUFXLEVBQUE7QUFMZjtNQVFNLGNEVGdCLEVBQUE7QUNDdEI7TUFZTSxrQkFBa0I7TUFDbEIsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlZ2lzdGVyL3VzZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb250ICovXHJcbiRmb250LXByaW1hcnk6ICNlY2YwZjE7XHJcblxyXG4vKiBiYWNrZ3JvdW5kICovXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNDQ5NWU7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogIzVkNzA4NTtcclxuXHJcbi8qIGJ1dHRvbiAqL1xyXG4kYnRuLXByaW1hcnk6ICMxYWJjOWM7XHJcbiRidG4tc2Vjb25kYXJ5OiAjMTZhMDg1OyIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC90aGVtZSc7XHJcblxyXG4udXNlci1yZWdpc3Rlci1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtc2Vjb25kYXJ5O1xyXG5cclxuICAudXNlci1yZWdpc3RlciB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAkZm9udC1wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tc3VibWl0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDJlbTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user-register/user-register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-register/user-register.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(auth) {
        this.auth = auth;
    }
    UserRegisterComponent.prototype.ngOnInit = function () { };
    UserRegisterComponent.prototype.register = function (email, pass, name, authLevel) {
        if (email && pass && (pass.length >= 6)) {
            // tslint:disable-next-line:radix
            this.auth.createAccount(email, pass, name, parseInt(authLevel));
        }
        else if (pass.length < 6) {
            alert('Please enter a password with more than 6 characters!');
        }
        else {
            alert('Email and password are required!');
        }
    };
    UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(/*! ./user-register.component.html */ "./src/app/components/user-register/user-register.component.html"),
            styles: [__webpack_require__(/*! ./user-register.component.scss */ "./src/app/components/user-register/user-register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user-table/user-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-table/user-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"account-management-section\">\r\n  <div class=\"account-management\">\r\n    <h2>Account Management</h2>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Email</th>\r\n          <th scope=\"col\">Job</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"userData$ | async as users; else loading\">\r\n        <tr *ngFor=\"let user of users; let i = index\">\r\n          <td>{{ i+1 }}</td>\r\n          <td>{{ user.name }}</td>\r\n          <td>{{ user.email }}</td>\r\n          <td>{{ (user.authLevel == 1) ? 'Employee' : 'Manager' }}</td>\r\n          <td><button class=\"btn btn-danger\" (click)=\"removeUser(user.email)\"\r\n              [disabled]=\"isLoggingIn(user.email)\">Remove</button></td>\r\n        </tr>\r\n      </tbody>\r\n      <ng-template #loading>\r\n        <div class=\"text-center loading\">\r\n          <div class=\"spinner-grow text-light\" style=\"margin: 4em 0\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-table/user-table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-table/user-table.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.account-management-section {\n  margin-top: 1em;\n  background-color: #5d7085; }\n.account-management-section .account-management {\n    padding: 1em;\n    height: 500px; }\n.account-management-section .account-management h2,\n    .account-management-section .account-management table {\n      color: #ecf0f1; }\n.account-management-section .account-management tbody {\n      display: block;\n      width: 100%;\n      overflow: auto;\n      height: 450px; }\n.account-management-section .account-management thead tr {\n      display: block; }\n.account-management-section .account-management th,\n    .account-management-section .account-management td {\n      padding: 5px;\n      text-align: left;\n      width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXRhYmxlL0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxzaGFyZWRcXF90aGVtZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXItdGFibGUvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVzZXItdGFibGVcXHVzZXItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBO0FDTEE7RUFDRSxlQUFlO0VBQ2YseUJEQzRCLEVBQUE7QUNIOUI7SUFLSSxZQUFZO0lBQ1osYUFBYSxFQUFBO0FBTmpCOztNQVVNLGNEWGdCLEVBQUE7QUNDdEI7TUFjTSxjQUFjO01BQ2QsV0FBVztNQUNYLGNBQWM7TUFDZCxhQUFhLEVBQUE7QUFqQm5CO01BcUJNLGNBQWMsRUFBQTtBQXJCcEI7O01BMEJNLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXRhYmxlL3VzZXItdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb250ICovXHJcbiRmb250LXByaW1hcnk6ICNlY2YwZjE7XHJcblxyXG4vKiBiYWNrZ3JvdW5kICovXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNDQ5NWU7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogIzVkNzA4NTtcclxuXHJcbi8qIGJ1dHRvbiAqL1xyXG4kYnRuLXByaW1hcnk6ICMxYWJjOWM7XHJcbiRidG4tc2Vjb25kYXJ5OiAjMTZhMDg1OyIsIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdGhlbWVcIjtcclxuXHJcbi5hY2NvdW50LW1hbmFnZW1lbnQtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXNlY29uZGFyeTtcclxuXHJcbiAgLmFjY291bnQtbWFuYWdlbWVudCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG5cclxuICAgIGgyLFxyXG4gICAgdGFibGUge1xyXG4gICAgICBjb2xvcjogJGZvbnQtcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQgdHIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user-table/user-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-table/user-table.component.ts ***!
  \***************************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");




var UserTableComponent = /** @class */ (function () {
    function UserTableComponent(userData, auth) {
        this.userData = userData;
        this.auth = auth;
    }
    UserTableComponent.prototype.ngOnInit = function () {
        this.initUserData();
    };
    UserTableComponent.prototype.initUserData = function () {
        this.userData$ = this.userData.getAllUser();
    };
    UserTableComponent.prototype.removeUser = function (email) {
        this.auth.removeAccount(email);
    };
    UserTableComponent.prototype.isLoggingIn = function (email) {
        return email === this.auth.loggingInAccount;
    };
    UserTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-table',
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/components/user-table/user-table.component.html"),
            styles: [__webpack_require__(/*! ./user-table.component.scss */ "./src/app/components/user-table/user-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ }),

/***/ "./src/app/components/viewlog/viewlog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/viewlog/viewlog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"view-log-section\">\r\n  <div class=\"view-log\">\r\n    <div class=\"container\">\r\n      <h2>Total today</h2>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Store</th>\r\n            <th>Item</th>\r\n            <th>Size</th>\r\n            <th>Amount</th>\r\n            <th>Price</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"log$ | async as logs; else loading\">\r\n          <tr *ngFor=\"let log of logs\">\r\n            <td>{{ log.store }}</td>\r\n            <td>{{ log.name }}</td>\r\n            <td>{{ getSize(log.size) }}</td>\r\n            <td>{{ log.amount }}</td>\r\n            <td>{{ log.price }}</td>\r\n          </tr>\r\n        </tbody>\r\n        <h2>Today total: {{ getTotal() }}</h2>\r\n      </table>\r\n      <ng-template #loading>\r\n        <div class=\"text-center loading\">\r\n          <div class=\"spinner-grow text-light\" style=\"margin: 4em 0\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/viewlog/viewlog.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/viewlog/viewlog.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font */\n/* background */\n/* button */\n.view-log-section .view-log h2,\n.view-log-section .view-log table {\n  color: #ecf0f1; }\n.view-log-section .view-log table {\n  background-color: #5d7085; }\n.view-log-section .view-log tbody {\n  display: block;\n  width: 100%;\n  overflow: auto;\n  height: 500px; }\n.view-log-section .view-log thead tr {\n  display: block; }\n.view-log-section .view-log th,\n.view-log-section .view-log td {\n  padding: 5px;\n  text-align: left;\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3bG9nL0Q6XFxDU1xcYXRUaGFpL3NyY1xcYXBwXFxzaGFyZWRcXF90aGVtZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZXdsb2cvRDpcXENTXFxhdFRoYWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZXdsb2dcXHZpZXdsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUdBLGVBQUE7QUFJQSxXQUFBO0FDTEE7O0VBTU0sY0RQZ0IsRUFBQTtBQ0N0QjtFQVVNLHlCRFB3QixFQUFBO0FDSDlCO0VBY00sY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYSxFQUFBO0FBakJuQjtFQXFCTSxjQUFjLEVBQUE7QUFyQnBCOztFQTBCTSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld2xvZy92aWV3bG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9udCAqL1xyXG4kZm9udC1wcmltYXJ5OiAjZWNmMGYxO1xyXG5cclxuLyogYmFja2dyb3VuZCAqL1xyXG4kYmFja2dyb3VuZC1wcmltYXJ5OiAjMzQ0OTVlO1xyXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6ICM1ZDcwODU7XHJcblxyXG4vKiBidXR0b24gKi9cclxuJGJ0bi1wcmltYXJ5OiAjMWFiYzljO1xyXG4kYnRuLXNlY29uZGFyeTogIzE2YTA4NTsiLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvdGhlbWUnO1xyXG5cclxuLnZpZXctbG9nLXNlY3Rpb24ge1xyXG4gIFxyXG4gIC52aWV3LWxvZyB7XHJcblxyXG4gICAgaDIsXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIGNvbG9yOiAkZm9udC1wcmltYXJ5XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1zZWNvbmRhcnk7XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoZWFkIHRyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/viewlog/viewlog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/viewlog/viewlog.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLogComponent", function() { return ViewLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/item/item */ "./src/app/interfaces/item/item.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ViewLogComponent = /** @class */ (function () {
    function ViewLogComponent(logService) {
        this.logService = logService;
        this.todayTotal = 0;
    }
    ViewLogComponent.prototype.ngOnInit = function () {
        this.initLog();
    };
    ViewLogComponent.prototype.initLog = function () {
        var _this = this;
        this.log$ = this.logService.getTodayTransaction().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            result.forEach(function (res) {
                // tslint:disable-next-line: radix
                if (res.price) {
                    _this.todayTotal += parseInt(res.price);
                }
            });
            return result;
        }));
    };
    ViewLogComponent.prototype.getSize = function (s) {
        // tslint:disable-next-line: radix
        var size = parseInt(s);
        if (size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].s) {
            return 'S';
        }
        else if (size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].m) {
            return 'M';
        }
        else if (size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].l) {
            return 'L';
        }
        else if (size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].xl) {
            return 'XL';
        }
        else if (size === src_app_interfaces_item_item__WEBPACK_IMPORTED_MODULE_1__["Size"].xxl) {
            return 'XXL';
        }
    };
    ViewLogComponent.prototype.getTotal = function () {
        return this.todayTotal;
    };
    ViewLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-viewlog',
            template: __webpack_require__(/*! ./viewlog.component.html */ "./src/app/components/viewlog/viewlog.component.html"),
            styles: [__webpack_require__(/*! ./viewlog.component.scss */ "./src/app/components/viewlog/viewlog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_log_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]])
    ], ViewLogComponent);
    return ViewLogComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/action/action.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/interfaces/action/action.enum.ts ***!
  \**************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["Create"] = 1] = "Create";
    Action[Action["Update"] = 2] = "Update";
    Action[Action["Delete"] = 3] = "Delete";
    Action[Action["Login"] = 4] = "Login";
    Action[Action["Logout"] = 5] = "Logout";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/interfaces/auth-level/auth-level.enum.ts":
/*!**********************************************************!*\
  !*** ./src/app/interfaces/auth-level/auth-level.enum.ts ***!
  \**********************************************************/
/*! exports provided: AuthLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLevel", function() { return AuthLevel; });
var AuthLevel;
(function (AuthLevel) {
    AuthLevel[AuthLevel["Employee"] = 1] = "Employee";
    AuthLevel[AuthLevel["Manager"] = 2] = "Manager";
})(AuthLevel || (AuthLevel = {}));


/***/ }),

/***/ "./src/app/interfaces/item/item.ts":
/*!*****************************************!*\
  !*** ./src/app/interfaces/item/item.ts ***!
  \*****************************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
var Size;
(function (Size) {
    Size[Size["s"] = 1] = "s";
    Size[Size["m"] = 2] = "m";
    Size[Size["l"] = 3] = "l";
    Size[Size["xl"] = 4] = "xl";
    Size[Size["xxl"] = 5] = "xxl";
})(Size || (Size = {}));


/***/ }),

/***/ "./src/app/services/auth-guard-manager/auth-guard-manager.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/auth-guard-manager/auth-guard-manager.service.ts ***!
  \***************************************************************************/
/*! exports provided: AuthGuardManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardManagerService", function() { return AuthGuardManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/services/auth/auth.service.ts");




var AuthGuardManagerService = /** @class */ (function () {
    function AuthGuardManagerService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuardManagerService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn || !this.auth.isManager) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuardManagerService);
    return AuthGuardManagerService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard/auth-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/auth-guard/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_data_user_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var src_app_interfaces_auth_level_auth_level_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/interfaces/auth-level/auth-level.enum */ "./src/app/interfaces/auth-level/auth-level.enum.ts");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var src_app_interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/interfaces/action/action.enum */ "./src/app/interfaces/action/action.enum.ts");











var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, router, http, userData, logService) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.http = http;
        this.userData = userData;
        this.logService = logService;
        this.subscription = [];
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                localStorage.setItem('user', JSON.stringify(_this.user));
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    AuthService.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (subscribe) {
            subscribe.unsubscribe();
        });
    };
    AuthService.prototype.login = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lowerCaseEmail, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        lowerCaseEmail = email.toLowerCase();
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(lowerCaseEmail, password)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.setAuthLevel()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.logService.record(src_app_interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_10__["Action"].Login, lowerCaseEmail, '')];
                    case 3:
                        _a.sent();
                        this.router.navigate(['/home']);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.setAuthLevel = function () {
        var email = JSON.parse(localStorage.getItem('user')).email;
        this.subscription.push(this.userData.getUserAuthLevelByEmail(email).subscribe(function (result) {
            // console.log('Setting auth level to', result);
            if (result) {
                localStorage.setItem('auth-level', "" + result);
            }
            else {
                localStorage.setItem('auth-level', null);
            }
        }));
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return user !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isManager", {
        get: function () {
            // tslint:disable-next-line:radix
            var currentAuthLevel = parseInt(localStorage.getItem('auth-level'));
            return currentAuthLevel === src_app_interfaces_auth_level_auth_level_enum__WEBPACK_IMPORTED_MODULE_8__["AuthLevel"].Manager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "loggingInAccount", {
        get: function () {
            return JSON.parse(localStorage.getItem('user')).email;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logService.record(src_app_interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_10__["Action"].Logout, this.loggingInAccount)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 2:
                        _a.sent();
                        localStorage.removeItem('user');
                        localStorage.removeItem('auth-level');
                        this.router.navigate(['/']);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.createAccount = function (email, password, name, authLevel) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lowerCaseEmail, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(email && password && name && authLevel)) return [3 /*break*/, 4];
                        lowerCaseEmail = email.toLowerCase();
                        return [4 /*yield*/, this.subscription.push(this.http.post('https://us-central1-atthai-a950a.cloudfunctions.net/register', {
                                email: lowerCaseEmail,
                                pass: password,
                                key: 'Ah56iU7AvL09M2qwi1B'
                            }, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.addAccountToDatabase(lowerCaseEmail, name, authLevel)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.logService.record(src_app_interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_10__["Action"].Create, this.loggingInAccount, "Created account: " + email)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.addAccountToDatabase = function (email, name, authLevel) {
        var itemsRef = this.db.list('users');
        var userInformation = {
            email: email,
            name: name,
            authLevel: (authLevel === 1) ? src_app_interfaces_auth_level_auth_level_enum__WEBPACK_IMPORTED_MODULE_8__["AuthLevel"].Employee : src_app_interfaces_auth_level_auth_level_enum__WEBPACK_IMPORTED_MODULE_8__["AuthLevel"].Manager,
            createdDate: new Date(),
            createdBy: this.loggingInAccount
        };
        itemsRef.push(userInformation);
    };
    AuthService.prototype.removeAccount = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lowerCaseEmail, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        lowerCaseEmail = email.toLowerCase();
                        return [4 /*yield*/, this.subscription.push(this.http.post('https://us-central1-atthai-a950a.cloudfunctions.net/delete', {
                                email: lowerCaseEmail,
                                key: 'Ah56iU7AvL09M2qwi1B'
                            }, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.removeAccountFromDatabase(lowerCaseEmail)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.logService.record(src_app_interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_10__["Action"].Delete, this.loggingInAccount, "Deleted account: " + email)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.removeAccountFromDatabase = function (email) {
        var itemsRef = this.db.list('users');
        this.subscription.push(this.db.list('users', function (ref) { return ref.orderByChild('email').equalTo(email); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (items) {
            itemsRef.remove(items[0].key);
        })).subscribe());
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _user_data_user_data_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"],
            _log_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/checkout-transfer/checkout-transfer.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/checkout-transfer/checkout-transfer.service.ts ***!
  \*************************************************************************/
/*! exports provided: CheckoutTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutTransferService", function() { return CheckoutTransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var CheckoutTransferService = /** @class */ (function () {
    function CheckoutTransferService(db) {
        this.db = db;
        this.itemsToShow = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.itemsToCal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.itemsArr = [];
        this.itemsToCalArr = [];
        this.currentItemsToShow = this.itemsToShow.asObservable();
        this.currentItemsToCal = this.itemsToCal.asObservable();
    }
    CheckoutTransferService.prototype.reset = function () {
        this.itemsArr = [];
        this.itemsToShow.next([]);
        this.itemsToCalArr = [];
        this.itemsToCal.next([]);
    };
    CheckoutTransferService.prototype.addItem = function (item) {
        if (!this.itemsArr.includes(item)) {
            this.itemsArr.push(item);
            this.itemsToShow.next(this.itemsArr);
        }
    };
    CheckoutTransferService.prototype.removeItem = function (item) {
        var index = this.itemsArr.indexOf(item);
        if (index > -1) {
            this.itemsArr.splice(index, 1);
            this.itemsToShow.next(this.itemsArr);
        }
    };
    CheckoutTransferService.prototype.addItemToCal = function (key, name, size, price, amount) {
        var index = this.isItemsToCalIncludes(key);
        var item = {
            key: key,
            name: name,
            size: size,
            price: price,
            amount: amount
        };
        if (index > -1) {
            this.itemsToCalArr.splice(index, 1);
            this.itemsToCalArr.push(item);
            this.itemsToCal.next(this.itemsToCalArr);
        }
        else {
            this.itemsToCalArr.push(item);
            this.itemsToCal.next(this.itemsToCalArr);
        }
    };
    CheckoutTransferService.prototype.removeItemToCal = function (name) {
        var index = this.isItemsToCalIncludes(name);
        if (index > -1) {
            this.itemsToCalArr.splice(index, 1);
            this.itemsToCal.next(this.itemsToCalArr);
        }
    };
    CheckoutTransferService.prototype.isItemsToCalIncludes = function (key) {
        var isIncludes = -1;
        this.itemsToCalArr.forEach(function (item, index) { if (item.key === key) {
            isIncludes = index;
        } });
        return isIncludes;
    };
    CheckoutTransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], CheckoutTransferService);
    return CheckoutTransferService;
}());



/***/ }),

/***/ "./src/app/services/item-data/item-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/item-data/item-data.service.ts ***!
  \*********************************************************/
/*! exports provided: ItemDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDataService", function() { return ItemDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _keys_keys_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../keys/keys.service */ "./src/app/services/keys/keys.service.ts");
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/action/action.enum */ "./src/app/interfaces/action/action.enum.ts");








var ItemDataService = /** @class */ (function () {
    function ItemDataService(db, auth, logService, keysService) {
        this.db = db;
        this.auth = auth;
        this.logService = logService;
        this.keysService = keysService;
        this.subscription = [];
    }
    ItemDataService.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (subscribe) {
            subscribe.unsubscribe();
        });
    };
    ItemDataService.prototype.addItemToDatabase = function (name, price, stock) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var itemsRef, itemInformation, obs$;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemsRef = this.db.list('items-info');
                        itemInformation = {
                            key: null,
                            name: name,
                            price: price,
                            stock: stock,
                            createdBy: this.auth.loggingInAccount,
                            createdDate: new Date().toLocaleString(),
                            size: { s: 0, m: 0, l: 0, xl: 0, xxl: 0 }
                        };
                        // console.log('adding item to db..', itemInformation);
                        return [4 /*yield*/, itemsRef.push(itemInformation)];
                    case 1:
                        // console.log('adding item to db..', itemInformation);
                        _a.sent();
                        obs$ = this.keysService.updateLastItemKey('items-info');
                        return [4 /*yield*/, this.subscription.push(obs$.subscribe())];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemDataService.prototype.updateItemInfo = function (key, itemInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var itemsRef;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemsRef = this.db.list('items-info');
                        return [4 /*yield*/, itemsRef.update(key, itemInfo)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.logService.record(src_app_interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_7__["Action"].Update, this.auth.loggingInAccount, "Updated item: " + key)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemDataService.prototype.deleteItem = function (key) {
        this.keysService.deleteItemInfo('items-info', key);
    };
    ItemDataService.prototype.getAllItems = function () {
        return this.db.list('items-info', function (ref) { return ref.orderByChild('name'); }).valueChanges();
    };
    ItemDataService.prototype.getNameByKey = function (key) {
        return this.db.list('items-info', function (ref) { return ref.orderByChild('key').equalTo(key); }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.map(function (res) { return res.name; }); }));
    };
    ItemDataService.prototype.getQuantityByKey = function (key) {
        return this.db.list('items-info', function (ref) { return ref.orderByChild('key').equalTo(key); }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (items) {
            return items.map(function (item) {
                return {
                    key: item.key,
                    size: item.size
                };
            });
        }));
    };
    ItemDataService.prototype.checkout = function (key, amount) {
        var itemsRef = this.db.list('items-quantity');
        this.subscription.push();
    };
    ItemDataService.prototype.recordTransaction = function (key, name, size, amount, price, store) {
        this.logService.recordTransaction(key, name, size, amount, price, store);
    };
    ItemDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _log_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"],
            _keys_keys_service__WEBPACK_IMPORTED_MODULE_1__["KeysService"]])
    ], ItemDataService);
    return ItemDataService;
}());



/***/ }),

/***/ "./src/app/services/item-transfer/item-transfer.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/item-transfer/item-transfer.service.ts ***!
  \*****************************************************************/
/*! exports provided: ItemTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTransferService", function() { return ItemTransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ItemTransferService = /** @class */ (function () {
    function ItemTransferService() {
        this.key = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.name = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentKey = this.key.asObservable();
        this.currentName = this.name.asObservable();
    }
    ItemTransferService.prototype.setKey = function (key) {
        this.key.next(key);
    };
    ItemTransferService.prototype.setItemName = function (name) {
        this.name.next(name);
    };
    ItemTransferService.prototype.reset = function () {
        this.key.next(null);
        this.name.next(null);
    };
    ItemTransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ItemTransferService);
    return ItemTransferService;
}());



/***/ }),

/***/ "./src/app/services/keys/keys.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/keys/keys.service.ts ***!
  \***********************************************/
/*! exports provided: KeysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysService", function() { return KeysService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var KeysService = /** @class */ (function () {
    function KeysService(db) {
        this.db = db;
    }
    KeysService.prototype.updateLastItemKey = function (dbRef) {
        var itemsRef = this.db.list(dbRef);
        return this.db.list(dbRef, function (ref) { return ref.limitToLast(1); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            itemsRef.update(items[0].key, {
                key: items[0].key
            });
        }));
    };
    KeysService.prototype.deleteItemInfo = function (dbRef, key) {
        var itemsRef = this.db.list(dbRef + "/" + key);
        itemsRef.remove();
    };
    KeysService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], KeysService);
    return KeysService;
}());



/***/ }),

/***/ "./src/app/services/log/log.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/log/log.service.ts ***!
  \*********************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../interfaces/action/action.enum */ "./src/app/interfaces/action/action.enum.ts");





var LogService = /** @class */ (function () {
    function LogService(db) {
        this.db = db;
    }
    LogService.prototype.record = function (act, actor, msg) {
        var itemsRef = this.db.list('logs');
        itemsRef.push({
            act: act,
            actor: actor,
            time: new Date().toLocaleString(),
            msg: (msg) ? msg : null
        });
    };
    LogService.prototype.recordTransaction = function (key, name, size, amount, price, store) {
        var day = new Date();
        var itemsRef = this.db.list("transactions/" + day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate());
        // console.log({ key, size, amount, price });
        return itemsRef.push({ key: key, name: name, size: size, amount: amount, price: price, store: store });
    };
    LogService.prototype.getAllLog = function () {
        var _this = this;
        return this.db.list('logs').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.map(function (res) {
                return {
                    act: _this.convertEnum(res.act),
                    actor: res.actor,
                    time: res.time,
                    msg: (res.msg) ? res.msg : null
                };
            });
        }));
    };
    LogService.prototype.getTodayTransaction = function () {
        var day = new Date();
        return this.db.list("transactions/" + day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate())
            .valueChanges();
    };
    LogService.prototype.convertEnum = function (val) {
        if (val === _interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_4__["Action"].Create) {
            return 'Create';
        }
        else if (val === _interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_4__["Action"].Delete) {
            return 'Delete';
        }
        else if (val === _interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_4__["Action"].Update) {
            return 'Update';
        }
        else if (val === _interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_4__["Action"].Login) {
            return 'Login';
        }
        else if (val === _interfaces_action_action_enum__WEBPACK_IMPORTED_MODULE_4__["Action"].Logout) {
            return 'Logout';
        }
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/services/store-data/store-data.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/store-data/store-data.service.ts ***!
  \***********************************************************/
/*! exports provided: StoreDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDataService", function() { return StoreDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _keys_keys_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keys/keys.service */ "./src/app/services/keys/keys.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");





var StoreDataService = /** @class */ (function () {
    function StoreDataService(db, auth, keysService) {
        this.db = db;
        this.auth = auth;
        this.keysService = keysService;
        this.subscription = [];
    }
    StoreDataService.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (subscribe) { return subscribe.unsubscribe(); });
    };
    StoreDataService.prototype.getStoreInfo = function () {
        return this.db.list('store').valueChanges();
    };
    StoreDataService.prototype.addStore = function (name, location, contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var itemsRef, itemInformation, obs$;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemsRef = this.db.list('store');
                        itemInformation = {
                            key: null,
                            name: name,
                            location: location,
                            contact: contact,
                            createdBy: this.auth.loggingInAccount,
                            createdDate: new Date().toLocaleString()
                        };
                        return [4 /*yield*/, itemsRef.push(itemInformation)];
                    case 1:
                        _a.sent();
                        obs$ = this.keysService.updateLastItemKey('store');
                        return [4 /*yield*/, this.subscription.push(obs$.subscribe())];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreDataService.prototype.deleteItem = function (key) {
        this.keysService.deleteItemInfo('store', key);
    };
    StoreDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _keys_keys_service__WEBPACK_IMPORTED_MODULE_1__["KeysService"]])
    ], StoreDataService);
    return StoreDataService;
}());



/***/ }),

/***/ "./src/app/services/user-data/user-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/user-data/user-data.service.ts ***!
  \*********************************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UserDataService = /** @class */ (function () {
    function UserDataService(db) {
        this.db = db;
    }
    UserDataService.prototype.getUserDataByEmail = function (email) {
        return this.db.list('users', function (ref) { return ref.orderByChild('email').equalTo(email); })
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) { return items[0]; }));
    };
    UserDataService.prototype.getUserAuthLevelByEmail = function (email) {
        console.log('Getting auth level of', email);
        return this.getUserDataByEmail(email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.authLevel;
        }));
    };
    UserDataService.prototype.getAllUser = function () {
        return this.db.list('users', function (ref) { return ref.orderByChild('authLevel'); }).valueChanges();
    };
    UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserDataService);
    return UserDataService;
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
    firebase: {
        apiKey: 'AIzaSyBkoLHbyBJk_WazZkwrCCthv4B3AHnNk7k',
        authDomain: 'atthai-a950a.firebaseapp.com',
        databaseURL: 'https://atthai-a950a.firebaseio.com',
        projectId: 'atthai-a950a',
        storageBucket: 'atthai-a950a.appspot.com',
        messagingSenderId: '50706982926'
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

module.exports = __webpack_require__(/*! D:\CS\atThai\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map