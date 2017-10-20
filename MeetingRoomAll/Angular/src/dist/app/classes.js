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
    function FormDetails(CreatedBy, LocationID, LocationName, RoomID, RoomName, Subject, Description, FD, TD, FromDate, ToDate, SlotID, Slot, SlotCount, TimeStamp) {
        this.CreatedBy = CreatedBy;
        this.LocationID = LocationID;
        this.LocationName = LocationName;
        this.RoomID = RoomID;
        this.RoomName = RoomName;
        this.Subject = Subject;
        this.Description = Description;
        this.FD = FD;
        this.TD = TD;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.SlotID = SlotID;
        this.Slot = Slot;
        this.SlotCount = SlotCount;
        this.TimeStamp = TimeStamp;
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