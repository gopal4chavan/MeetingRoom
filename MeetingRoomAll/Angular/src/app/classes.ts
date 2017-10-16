// ------------------------------------------------------------------------------   simple table details
// For Location Details
export interface ILocation {
    locationID: number;
    locationName: string;
}

// For Room Details
export interface IRoom {
    roomID: number;
    roomName: string;
    location_id: number;
}

// For Slot Details
export interface ISlot {
    slotID: number;
    slot: string;
}

export interface IPrimaryDetails {
    loc_id: number;
    loc_name: string;
    room_id: number;
    room_name: string;
    date: any;
}
// ------------------------------------------------------------------------------   Booked Slot Details

export interface IViewDetails {
    bookingID: number;
    createdBy: number;
    timeStamp: Date;
    subject: string;
    description: string;
}

export interface IBookedSlot {
    bookingID: number;
    createdBy: number;
    slotID: number;
    date: Date;
}
export interface IBookedSlotDetail {
    bookingID: number;
    createdBy: number;
    timeStamp: Date;
    subject: string;
    description: string;
    bookedSlots: IBookedSlot[];
}

// ------------------------------------------------------------------------------   Form Details
export class Details {
    constructor(
        public createdby: number,
        public location_id: number,
        public room_id: number,
        public subject: string,
        public description: string,
        public fromDate: string,
        public toDate: string,
        public slot_id: number,
        public slot_count: number) { }
}
export class IviewDet {
    public bookingID:number;
    public createdBy: number;
    public location_id: number;
    public room_id: number;
    public subject: string;
    public description: string;
    public fromDate: string;
    public toDate: string;
    public slot_id: number;
    public slot:string;
    public slot_count: number;
    public location_name:string;
    public room_name:string;
}
export class FormDetails {
    constructor(
        public createdby: number,
        public locationID: number,
        public locationName: string,
        public roomID: number,
        public roomName: string,
        public subject: string,
        public description: string,
        public fromDate: Date,
        public toDate: Date,
        public slotID: number,
        public slot: string,
        public slotCount: number) { }
}
// ------------------------------------------------------------------------------   Duration Details
export class Duration {
    constructor(
        public id: number,
        public value: string) { }
}

export const DurationList: Duration[] = [
    new Duration(1, "30 min"),
    new Duration(2, "60 min"),
    new Duration(3, "90 min"),
    new Duration(4, "120 min")
]