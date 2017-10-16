"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var forms_1 = require("@angular/forms");
var main_service_1 = require("./main.service");
var slot_service_1 = require("./slot.service");
var confirm_component_1 = require("./confirm.component");
var BookingFormModalComponent = (function (_super) {
    __extends(BookingFormModalComponent, _super);
    function BookingFormModalComponent(dialogService, fb, mainService, slotService) {
        var _this = _super.call(this, dialogService) || this;
        _this.fb = fb;
        _this.mainService = mainService;
        _this.slotService = slotService;
        _this.minDate = new Date();
        _this.maxDate = new Date();
        return _this;
    }
    BookingFormModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slotService.getDuration().subscribe(function (result) { return _this.durationList = result; });
        this.mainService.getAllLocations()
            .subscribe(function (result) { return _this.locations = result; }, function (error) { return console.log(error); }, function () { return console.log(_this.locations); });
        this.maxDate.setDate(this.maxDate.getDate() + 30);
        this.slotService.getSlots().subscribe(function (result) { return _this.slots = result; });
        this.BookingForm = this.fb.group(this.bookingFormDetails);
        if (this.bookingFormDetails.locationID != null) {
            // console.log(new Date(this.bookingFormDetails.fromDate));
            // console.log(this.bookingFormDetails.toDate);
            this.getRooms();
            this.BookingForm.value.roomID = this.bookingFormDetails.roomID;
            this.BookingForm.value.roomName = this.bookingFormDetails.roomName;
        }
    };
    // confirm() {
    //   // this.result = true;
    //   // this.close();
    // }
    BookingFormModalComponent.prototype.cancel = function () {
        this.close();
    };
    BookingFormModalComponent.prototype.getRooms = function () {
        var _this = this;
        var locationid = this.BookingForm.value.locationID;
        this.mainService.getAllRooms(locationid)
            .subscribe(function (result) { return _this.rooms = result; }, function (error) { return console.log(error); }, function () { console.log(_this.rooms); });
    };
    BookingFormModalComponent.prototype.book = function () {
        var _this = this;
        var locID = this.BookingForm.value.locationID;
        var roomID = this.BookingForm.value.roomID;
        var slot_id = this.BookingForm.value.slotID;
        this.BookingForm.value.createdby = localStorage.getItem("userid");
        this.BookingForm.value.locationName = this.locations.find(function (elem) { return elem.locationID == locID; }).locationName;
        this.BookingForm.value.roomName = this.rooms.find(function (elem) { return elem.roomID == roomID; }).roomName;
        this.BookingForm.value.slot = this.slots.find(function (elem) { return elem.slotID == slot_id; }).slot;
        var result;
        this.slotService
            .bookRoom(this.BookingForm.value)
            .finally(function () { _this.bookedSuccess(result); })
            .subscribe(function (res) { result = res; }, function (error) { console.log(error); });
    };
    BookingFormModalComponent.prototype.bookedSuccess = function (res) {
        var title;
        if (res == 'success') {
            this.failureFlag = false;
            title = 'Successfully Submitted';
            var disposable = this.dialogService.addDialog(confirm_component_1.ConfirmComponent, { bookingDetails: this.BookingForm.value }, { backdropColor: 'rgba(0,0,0,0.4)' });
            this.result = true;
            this.close();
        }
        else {
            this.failureFlag = true;
            this.result = false;
        }
    };
    return BookingFormModalComponent;
}(ng2_bootstrap_modal_1.DialogComponent));
BookingFormModalComponent = __decorate([
    core_1.Component({
        selector: 'confirm',
        templateUrl: 'app/bookingFormModal.component.html'
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService, forms_1.FormBuilder, main_service_1.MainService, slot_service_1.SlotService])
], BookingFormModalComponent);
exports.BookingFormModalComponent = BookingFormModalComponent;
//# sourceMappingURL=bookingFormModal.component.js.map