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
var dateRange_service_1 = require("./dateRange.service");
var classes_1 = require("./classes");
var slot_service_1 = require("./slot.service");
var forms_1 = require("@angular/forms");
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var bookingFormModal_component_1 = require("./Modals/bookingFormModal.component");
var bookedFormModal_component_1 = require("./Modals/bookedFormModal.component");
var SlotsComponent = (function () {
    function SlotsComponent(dateRng, service, fb, dialogService) {
        this.dateRng = dateRng;
        this.service = service;
        this.fb = fb;
        this.dialogService = dialogService;
        this.BookedSlotsDetails = [];
        this.BookedSlots = [];
        this.bookedDetFlag = false;
        //for ngdocheck
        this.loc_id = null;
        this.room_id = null;
        this.date = null;
        this.subject = null;
        this.bookingID = null;
        // del_BookingID: number;
        // del_Date: Date;
        // del_SlotId: number;
        this.aboveFlag = false;
        this.slotcount = 1;
    }
    SlotsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBookedSlots(this.primaryDetails.loc_id, this.primaryDetails.room_id)
            .subscribe(function (res) { return _this.BookedSlotsDetails = res; }, function (error) { return console.log(error); }, function () {
            _this.BookedSlots = [];
            for (var i = 0; i < _this.BookedSlotsDetails.length; i++) {
                var temp_createdBy = _this.BookedSlotsDetails[i].createdBy;
                var temp_bookingID = _this.BookedSlotsDetails[i].bookingID;
                for (var j = 0; j < _this.BookedSlotsDetails[i].bookedSlots.length; j++) {
                    _this.BookedSlotsDetails[i].bookedSlots[j].bookingID = temp_bookingID;
                    _this.BookedSlotsDetails[i].bookedSlots[j].createdBy = temp_createdBy;
                    _this.BookedSlots.push(_this.BookedSlotsDetails[i].bookedSlots[j]);
                }
            }
        });
        this.service.getSlots().subscribe(function (result) { _this.slots = result; });
        this.daterange = this.dateRng.getDateRange(this.primaryDetails.date);
        this.dynamicWidth = 100 / this.daterange.length + "%";
    };
    SlotsComponent.prototype.ngDoCheck = function () {
        if (this.loc_id != this.primaryDetails.loc_id || this.room_id != this.primaryDetails.room_id || this.date != this.primaryDetails.date) {
            this.loc_id = this.primaryDetails.loc_id;
            this.room_id = this.primaryDetails.room_id;
            this.date = this.primaryDetails.date;
            this.ngOnInit();
        }
    };
    SlotsComponent.prototype.getBookingForm = function (slot, date) {
        var _this = this;
        var id = parseInt(localStorage.getItem("userid"), 10);
        var temp_obj = new classes_1.FormDetails(id, this.primaryDetails.loc_id, this.primaryDetails.loc_name, this.primaryDetails.room_id, this.primaryDetails.room_name, null, null, new Date(date), null, slot.slotID, null, null);
        this.dialogService
            .addDialog(bookingFormModal_component_1.BookingFormModalComponent, { title: "Booking Form", bookingFormDetails: temp_obj }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(function (result) { if (result) {
            _this.ngOnInit();
        } });
    };
    SlotsComponent.prototype.GetBookedSlotDetails = function (date, slot) {
        var _this = this;
        this.viewDets = { createdBy: null, bookingID: null, subject: null, description: null, timeStamp: null };
        var elem = this.BookedSlots.find(function (element) { return element.slotID == slot.slotID && (new Date(element.date)).toDateString() == (new Date(date)).toDateString(); });
        var res = this.BookedSlotsDetails.find(function (ele) { return ele.bookingID == elem.bookingID; });
        this.viewDets = { bookingID: res.bookingID, createdBy: res.createdBy, timeStamp: res.timeStamp, subject: res.subject, description: res.description };
        // let bookingDetails;
        // this.service.getDetails(res.bookingID).subscribe(res=>bookingDetails=res);
        this.dialogService
            .addDialog(bookedFormModal_component_1.BookedFormModalComponent, { title: "Booking Details", bookingID: res.bookingID, selectedDate: date, Slot: slot }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(function (result) { if (result) {
            _this.ngOnInit();
        } });
    };
    SlotsComponent.prototype.CheckIfBooked = function (date, slot) {
        var elem = this.BookedSlots.find(function (element) { return element.slotID == slot.slotID && (new Date(element.date)).toDateString() == (new Date(date)).toDateString(); });
        var daySlots;
        if (elem) {
            var res = this.BookedSlotsDetails.find(function (ele) { return ele.bookingID == elem.bookingID; });
            daySlots = this.BookedSlots.filter(function (el) { return new Date(el.date).toDateString() == (new Date(date)).toDateString() && el.bookingID == elem.bookingID; });
            this.subject = res.subject;
            this.bookingID = res.bookingID;
            this.slotcount = daySlots.length;
            var index = daySlots.indexOf(elem);
            this.aboveFlag = (index == 0);
            return true;
        }
        return false;
    };
    SlotsComponent.prototype.CheckIfLoginSlot = function (date, slot) {
        var elem = this.BookedSlots.find(function (element) { return element.slotID == slot.slotID && (new Date(element.date)).toDateString() == (new Date(date)).toDateString(); });
        if (elem) {
            if (localStorage.getItem("userid") == elem.createdBy.toString()) {
                return true;
            }
            else
                return false;
        }
        else
            return false;
    };
    return SlotsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SlotsComponent.prototype, "primaryDetails", void 0);
SlotsComponent = __decorate([
    core_1.Component({
        selector: "slot",
        templateUrl: 'app/slot.component.html',
        styleUrls: ['app/slot.component.css']
    }),
    __metadata("design:paramtypes", [dateRange_service_1.DateRange, slot_service_1.SlotService, forms_1.FormBuilder, ng2_bootstrap_modal_1.DialogService])
], SlotsComponent);
exports.SlotsComponent = SlotsComponent;
//# sourceMappingURL=slot.component.js.map