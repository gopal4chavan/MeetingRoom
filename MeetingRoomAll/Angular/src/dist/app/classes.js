"use strict";
// ------------------------------------------------------------------------------   Form Details
var Details = (function () {
    function Details(createdby, location_id, room_id, subject, description, fromDate, toDate, slot_id, slot_count) {
        this.createdby = createdby;
        this.location_id = location_id;
        this.room_id = room_id;
        this.subject = subject;
        this.description = description;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.slot_id = slot_id;
        this.slot_count = slot_count;
    }
    return Details;
}());
exports.Details = Details;
var IviewDet = (function () {
    function IviewDet() {
    }
    return IviewDet;
}());
exports.IviewDet = IviewDet;
var FormDetails = (function () {
    function FormDetails(createdby, locationID, locationName, roomID, roomName, subject, description, fromDate, toDate, slotID, slot, slotCount) {
        this.createdby = createdby;
        this.locationID = locationID;
        this.locationName = locationName;
        this.roomID = roomID;
        this.roomName = roomName;
        this.subject = subject;
        this.description = description;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.slotID = slotID;
        this.slot = slot;
        this.slotCount = slotCount;
    }
    return FormDetails;
}());
exports.FormDetails = FormDetails;
// ------------------------------------------------------------------------------   Duration Details
var Duration = (function () {
    function Duration(id, value) {
        this.id = id;
        this.value = value;
    }
    return Duration;
}());
exports.Duration = Duration;
exports.DurationList = [
    new Duration(1, "30 min"),
    new Duration(2, "60 min"),
    new Duration(3, "90 min"),
    new Duration(4, "120 min")
];
//# sourceMappingURL=classes.js.map