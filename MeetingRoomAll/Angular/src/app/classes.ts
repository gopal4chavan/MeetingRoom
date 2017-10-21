// ------------------------------------------------------------------------------   simple table details
// For Location Details
export interface ILocation {
    LocationID: number;
    LocationName: string;
}

// For Room Details
export interface IRoom {
    RoomID: number;
    RoomName: string;
    LocationID: number;
}

// For Slot Details
export interface ISlot {
    SlotID: number;
    Slot: string;
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
    BookingID: number;
    CreatedBy: number;
    SlotID: number;
    Date: Date;
}
export interface IBookedSlotDetail {
    BookingID: number;
    CreatedBy: number;
    TimeStamp: Date;
    Subject: string;
    Description: string;
    BookedSlots: IBookedSlot[];
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
        public CreatedBy: number,
        public LocationID: number,
        public LocationName: string,
        public RoomID: number,
        public RoomName: string,
        public Subject: string,
        public Description: string,
        public FD: Date,
        public TD: Date,
        public FromDate:string,
        public ToDate:string,
        public Repeat:boolean,
        public MON:boolean,
        public TUE:boolean,
        public WED:boolean,
        public THU:boolean,
        public FRI:boolean,
        public SAT:boolean,
        public SUN:boolean,
        public SlotID: number,
        public Slot: string,
        public SlotCount: number,
        public TimeStamp:Date) { }
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