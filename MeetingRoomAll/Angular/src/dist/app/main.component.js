"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var classes_1 = require("./classes");
var main_service_1 = require("./main.service");
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var bookingFormModal_component_1 = require("./Modals/bookingFormModal.component");
var MainComponent = (function () {
    function MainComponent(service, dialogService) {
        this.service = service;
        this.dialogService = dialogService;
        this.date_inValid = true;
        this.rooms = [];
        this.options = {
            locale: { format: 'DD-MMMM-YYYY' },
            minDate: new Date,
            dateLimit: {
                days: 30
            }
        };
        this.details = { loc_id: null, loc_name: null, room_id: null, room_name: null, date: null };
        this.detailsEvent = new core_1.EventEmitter();
        this.locationChangeEvent = new core_1.EventEmitter();
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllLocations()
            .subscribe(function (result) { return _this.locations = result; });
    };
    MainComponent.prototype.getRooms = function (event) {
        var _this = this;
        this.details.room_id = undefined;
        this.details.room_name = undefined;
        this.locationChangeEvent.emit(false);
        var locationid = event.target.selectedOptions[0].id;
        this.details.loc_id = locationid;
        this.service.getAllRooms(locationid)
            .subscribe(function (result) { return _this.rooms = result; });
    };
    MainComponent.prototype.roomSelected = function (event) {
        this.details.room_id = event.target.selectedOptions[0].id;
    };
    MainComponent.prototype.getSlots = function () {
        this.detailsEvent.emit(this.details);
    };
    MainComponent.prototype.selectedDate = function (event) {
        this.date_inValid = false;
        this.details.date = event;
    };
    // To book room directly
    MainComponent.prototype.BookDirectly = function () {
        var temp_form_det = new classes_1.FormDetails(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        var disposable = this.dialogService
            .addDialog(bookingFormModal_component_1.BookingFormModalComponent, { title: "Header", bookingFormDetails: temp_form_det }, { backdropColor: 'rgba(0,0,0,0.5)' });
    };
    return MainComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MainComponent.prototype, "detailsEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MainComponent.prototype, "locationChangeEvent", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: "main",
        templateUrl: "app/main.component.html",
        styleUrls: ["app/main.component.css"]
    }),
    __metadata("design:paramtypes", [main_service_1.MainService, ng2_bootstrap_modal_1.DialogService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map