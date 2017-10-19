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
var main_service_1 = require("../main.service");
var slot_service_1 = require("../slot.service");
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
            .subscribe(function (result) { return _this.locations = result; }, function (error) { return console.log(error); });
        this.maxDate.setDate(this.maxDate.getDate() + 30);
        this.slotService.getSlots().subscribe(function (result) { return _this.slots = result; });
        this.BookingForm = this.fb.group(this.bookingFormDetails);
        if (this.bookingFormDetails.LocationID != null) {
            this.getRooms();
        }
    };
    BookingFormModalComponent.prototype.cancel = function () {
        this.close();
    };
    BookingFormModalComponent.prototype.getRooms = function () {
        var _this = this;
        var locationid = this.BookingForm.value.LocationID;
        this.mainService.getAllRooms(locationid)
            .subscribe(function (result) { return _this.rooms = result; }, function (error) { return console.log(error); });
    };
    BookingFormModalComponent.prototype.book = function () {
        var _this = this;
        if (this.bookingID) {
            var result_1;
            this.slotService
                .updateBooking(this.bookingID, this.BookingForm.value)
                .finally(function () { _this.bookedSuccess(result_1); _this.result = true; _this.close(); })
                .subscribe(function (res) { result_1 = res; }, function (error) { console.log(error); });
        }
        else {
            var locID_1 = this.BookingForm.value.LocationID;
            var roomID_1 = this.BookingForm.value.RoomID;
            var slot_id_1 = this.BookingForm.value.SlotID;
            console.log(this.BookingForm.value);
            this.BookingForm.value.Createdby = localStorage.getItem("userid");
            this.BookingForm.value.LocationName = this.locations.find(function (elem) { return elem.LocationID == locID_1; }).LocationName;
            this.BookingForm.value.RoomName = this.rooms.find(function (elem) { return elem.RoomID == roomID_1; }).RoomName;
            this.BookingForm.value.Slot = this.slots.find(function (elem) { return elem.SlotID == slot_id_1; }).Slot;
            var result_2;
            this.slotService.bookRoom(this.BookingForm.value)
                .finally(function () { _this.bookedSuccess(result_2); })
                .subscribe(function (res) { result_2 = res; }, function (error) { console.log(error); });
        }
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
        templateUrl: 'app/Modals/bookingFormModal.component.html'
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService, forms_1.FormBuilder, main_service_1.MainService, slot_service_1.SlotService])
], BookingFormModalComponent);
exports.BookingFormModalComponent = BookingFormModalComponent;
//# sourceMappingURL=bookingFormModal.component.js.map