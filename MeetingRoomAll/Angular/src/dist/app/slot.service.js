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
var http_1 = require("@angular/http");
var classes_1 = require("./classes");
var of_1 = require("rxjs/Observable/of");
require("rxjs/add/operator/delay");
var SlotService = (function () {
    function SlotService(http) {
        this.http = http;
        this.slot_url = "http://localhost:65091/api/slot";
        this.booking_url = "http://localhost:65091/api/booking/add";
        this.booked_slots_url = "http://localhost:65091/api/booking/get?";
        this.delete_url = "http://localhost:65091/api/booking/delete?bookingID=";
        this.deleteday_url = "http://localhost:65091/api/booking/deleteday?bookingID=";
        this.deleteslot_url = "http://localhost:65091/api/booking/deleteslot?bookingID=";
        this.details_url = "http://localhost:65091/api/booking/getdetails?bookingID=";
        this.updatebooking_url = "http://localhost:65091/api/booking/update?bookingID=";
    }
    SlotService.prototype.getSlots = function () {
        return this.http.get(this.slot_url).map(function (result) { return result.json(); });
    };
    SlotService.prototype.getDuration = function () {
        return of_1.of(classes_1.DurationList).delay(500);
    };
    SlotService.prototype.bookRoom = function (formdet) {
        var det = { createdby: null, description: null, subject: null, fromDate: null, toDate: null, location_id: null, room_id: null, slot_id: null, slot_count: null };
        det.createdby = formdet.createdby;
        det.description = formdet.description;
        det.subject = formdet.subject;
        det.fromDate = new Date(formdet.fromDate).toDateString();
        det.toDate = new Date(formdet.toDate).toDateString();
        det.location_id = formdet.locationID;
        det.room_id = formdet.roomID;
        det.slot_id = formdet.slotID;
        det.slot_count = formdet.slotCount;
        var re = { val: null };
        return this.http.post(this.booking_url, det).map(function (result) { return result.json(); });
    };
    SlotService.prototype.getBookedSlots = function (location_id, room_id) {
        return this.http.get(this.booked_slots_url + ("locationid=" + location_id + "&roomid=" + room_id)).map(function (result) { return result.json(); });
    };
    SlotService.prototype.delete = function (bookingID) {
        return this.http.post(this.delete_url + bookingID, null).map(function (res) { return res.json(); });
    };
    SlotService.prototype.deleteDay = function (bookingID, date) {
        return this.http.post(this.deleteday_url + bookingID + ("&date=" + date), null).map(function (res) { return res.json(); });
    };
    SlotService.prototype.deleteSlot = function (bookingID, date, slotID) {
        return this.http.post(this.deleteslot_url + bookingID + ("&date=" + date + "&slotID=" + slotID), null).map(function (res) { return res.json(); });
    };
    SlotService.prototype.getDetails = function (bookingID) {
        return this.http.post(this.details_url + bookingID, null).map(function (res) { return res.json(); });
    };
    SlotService.prototype.updateBooking = function (bookingID, obj) {
        var det = { createdby: null, description: null, subject: null, fromDate: null, toDate: null, location_id: null, room_id: null, slot_id: null, slot_count: null };
        det.createdby = obj.createdby;
        det.description = obj.description;
        det.subject = obj.subject;
        det.fromDate = new Date(obj.fromDate).toDateString();
        det.toDate = new Date(obj.toDate).toDateString();
        det.location_id = obj.locationID;
        det.room_id = obj.roomID;
        det.slot_id = obj.slotID;
        det.slot_count = obj.slotCount;
        var re = { val: null };
        return this.http.post(this.updatebooking_url + bookingID, det).map(function (res) { return res.json(); });
    };
    return SlotService;
}());
SlotService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SlotService);
exports.SlotService = SlotService;
//# sourceMappingURL=slot.service.js.map