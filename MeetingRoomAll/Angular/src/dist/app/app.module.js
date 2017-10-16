"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login.component");
var start_component_1 = require("./start.component");
var main_component_1 = require("./main.component");
var slot_component_1 = require("./slot.component");
var dateRange_service_1 = require("./dateRange.service");
var main_service_1 = require("./main.service");
var slot_service_1 = require("./slot.service");
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var confirm_component_1 = require("./Modals/confirm.component");
var delete_confirm_component_1 = require("./Modals/delete-confirm.component");
var ng2_daterangepicker_1 = require("ng2-daterangepicker");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var calendar_1 = require("primeng/components/calendar/calendar");
var bookingFormModal_component_1 = require("./Modals/bookingFormModal.component");
var bookedFormModal_component_1 = require("./Modals/bookedFormModal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            calendar_1.CalendarModule,
            animations_1.BrowserAnimationsModule,
            ng2_bootstrap_modal_1.BootstrapModalModule,
            ng2_daterangepicker_1.Daterangepicker,
            router_1.RouterModule.forRoot([{
                    path: 'my-app',
                    component: app_component_1.AppComponent
                },
                {
                    path: 'login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                }])
        ],
        declarations: [
            app_component_1.AppComponent,
            main_component_1.MainComponent,
            slot_component_1.SlotsComponent,
            confirm_component_1.ConfirmComponent,
            delete_confirm_component_1.DeleteConfirmComponent,
            start_component_1.StartComponent,
            bookingFormModal_component_1.BookingFormModalComponent,
            login_component_1.LoginComponent,
            bookedFormModal_component_1.BookedFormModalComponent
        ],
        bootstrap: [
            start_component_1.StartComponent
        ],
        entryComponents: [
            confirm_component_1.ConfirmComponent,
            delete_confirm_component_1.DeleteConfirmComponent,
            bookingFormModal_component_1.BookingFormModalComponent,
            bookedFormModal_component_1.BookedFormModalComponent
        ],
        providers: [
            dateRange_service_1.DateRange,
            main_service_1.MainService,
            slot_service_1.SlotService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map