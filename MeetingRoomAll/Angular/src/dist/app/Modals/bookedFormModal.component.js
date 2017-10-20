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
var slot_service_1 = require("../slot.service");
var delete_confirm_component_1 = require("./delete-confirm.component");
var bookingFormModal_component_1 = require("./bookingFormModal.component");
var BookedFormModalComponent = (function (_super) {
    __extends(BookedFormModalComponent, _super);
    function BookedFormModalComponent(dialogService, slotService) {
        var _this = _super.call(this, dialogService) || this;
        _this.slotService = slotService;
        _this.flag = false;
        return _this;
    }
    BookedFormModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slotService.getDetails(this.bookingID).subscribe(function (res) { return _this.bookingDetails = res; }, function (error) { console.log(error); }, function () {
            console.log(_this.bookingDetails);
            if (_this.bookingDetails) {
                _this.flag = true;
            }
        });
    };
    BookedFormModalComponent.prototype.modal_close = function () {
        this.close();
    };
    BookedFormModalComponent.prototype.enableDeleteOptions = function () {
        if (this.bookingDetails.CreatedBy == parseInt(localStorage.getItem("userid"), 10)) {
            return true;
        }
        else
            return false;
    };
    BookedFormModalComponent.prototype.delete = function () {
        var _this = this;
        var result;
        var disposable = this.dialogService
            .addDialog(delete_confirm_component_1.DeleteConfirmComponent, { title: "Are you sure, you want to delete entire booking" }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(function (confirm) {
            if (confirm) {
                _this.slotService
                    .delete(_this.bookingID)
                    .finally(function () { if (result) {
                    _this.close();
                    _this.result = true;
                } })
                    .subscribe(function (res) { result = res; }, function (error) { console.log(error); });
            }
        });
    };
    BookedFormModalComponent.prototype.deleteSlot = function () {
        var _this = this;
        var result;
        var disposable = this.dialogService
            .addDialog(delete_confirm_component_1.DeleteConfirmComponent, { title: "Are you sure, you want to delete selected date booking" }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(function (confirm) {
            if (confirm) {
                _this.slotService
                    .deleteDay(_this.bookingID, _this.selectedDate)
                    .finally(function () { if (result) {
                    _this.close();
                    _this.result = true;
                } })
                    .subscribe(function (res) { result = res; }, function (error) { console.log(error); });
            }
        });
    };
    BookedFormModalComponent.prototype.updateBooking = function () {
        var _this = this;
        // let temp_obj: FormDetails = new FormDetails(this.bookingDetails.CreatedBy, this.bookingDetails.LocationID, this.bookingDetails.LocationName, this.bookingDetails.RoomID, this.bookingDetails.RoomName, this.bookingDetails.Subject, this.bookingDetails.Description, new Date(this.bookingDetails.FromDate), new Date(this.bookingDetails.ToDate),null,null,this.bookingDetails.SlotID, this.bookingDetails.Slot, this.bookingDetails.SlotCount,null);
        this.bookingDetails.FD = new Date(this.bookingDetails.FromDate);
        this.bookingDetails.TD = new Date(this.bookingDetails.ToDate);
        console.log(this.bookingDetails);
        this.dialogService
            .addDialog(bookingFormModal_component_1.BookingFormModalComponent, { title: "Booking Form", bookingFormDetails: this.bookingDetails, bookingID: this.bookingID }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(function (result) { if (result) {
            _this.ngOnInit();
            _this.result = true;
            _this.close();
        } });
    };
    return BookedFormModalComponent;
}(ng2_bootstrap_modal_1.DialogComponent));
BookedFormModalComponent = __decorate([
    core_1.Component({
        selector: 'confirm',
        templateUrl: 'app/Modals/bookedFormModal.component.html',
        styleUrls: ['app/Modals/bookedFormModal.component.css']
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService, slot_service_1.SlotService])
], BookedFormModalComponent);
exports.BookedFormModalComponent = BookedFormModalComponent;
//# sourceMappingURL=bookedFormModal.component.js.map