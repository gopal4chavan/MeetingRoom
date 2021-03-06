import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { DateRange } from "./dateRange.service";
import { IPrimaryDetails, ISlot, DurationList, Duration, FormDetails, IBookedSlotDetail, IBookedSlot, IViewDetails } from './classes';
import { SlotService } from './slot.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from "./Modals/confirm.component";
import { DeleteConfirmComponent } from "./Modals/delete-confirm.component";
import { BookingFormModalComponent } from "./Modals/bookingFormModal.component";
import { BookedFormModalComponent } from "./Modals/bookedFormModal.component";

@Component({
    selector: "slot",
    templateUrl: 'app/slot.component.html',
    styleUrls: ['app/slot.component.css']
})

export class SlotsComponent implements OnInit, DoCheck {

    @Input() primaryDetails: IPrimaryDetails;

    dynamicWidth: string;
    daterange: string[];
    slots: ISlot[];
    BookedSlotsDetails: IBookedSlotDetail[] = [];
    BookedSlots: IBookedSlot[] = [];
    bookedDetFlag: boolean = false;

    loc_id: number = null;
    room_id: number = null;
    date: string = null;

    subject: string = null;
    bookingID: number = null;
    viewDets: IViewDetails;

    aboveFlag:boolean=false;
    slotcount:any=1;


    constructor(private dateRng: DateRange, private service: SlotService, private fb: FormBuilder, private dialogService: DialogService) { }

    ngOnInit(): void {
        this.service.getBookedSlots(this.primaryDetails.loc_id, this.primaryDetails.room_id)
            .finally(()=>{})
            .subscribe
            (
                res => this.BookedSlotsDetails = res,
                (error) => console.log(error),
            () => {
                this.BookedSlots = [];
                for (let i = 0; i < this.BookedSlotsDetails.length; i++) {                    
                    for (let j = 0; j < this.BookedSlotsDetails[i].BookedSlots.length; j++) {
                            this.BookedSlots.push(this.BookedSlotsDetails[i].BookedSlots[j]);
                    }
                }

            });
        this.service.getSlots().subscribe(
            (result) => { this.slots = result }
        );
        this.daterange = this.dateRng.getDateRange(this.primaryDetails.date);

        this.dynamicWidth = 100 / this.daterange.length + "%";

    }

    ngDoCheck(): void {
        if (this.loc_id != this.primaryDetails.loc_id || this.room_id != this.primaryDetails.room_id || this.date != this.primaryDetails.date) {
            this.loc_id = this.primaryDetails.loc_id;
            this.room_id = this.primaryDetails.room_id;
            this.date = this.primaryDetails.date;
            this.ngOnInit();
        }
    }

    getBookingForm(slot: any, date: any) {

        let id = parseInt(localStorage.getItem("userid"), 10);

        let temp_obj = new FormDetails(
            id,
            this.primaryDetails.loc_id,
            this.primaryDetails.loc_name,
            this.primaryDetails.room_id,
            this.primaryDetails.room_name,
            null,
            null,
            new Date(date),
            null,
            null,
            null,            
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            slot.SlotID,
            null,
            null,
            null);
        console.log(temp_obj);
        this.dialogService
            .addDialog(BookingFormModalComponent, { title: "Booking Form", bookingFormDetails: temp_obj }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(result => { if (result) { this.ngOnInit() } });

    }

    GetBookedSlotDetails(date: Date, slot: ISlot) {

        this.viewDets = { createdBy: null, bookingID: null, subject: null, description: null, timeStamp: null };

        let elem = this.BookedSlots.find(element => element.SlotID == slot.SlotID && (new Date(element.Date)).toDateString() == (new Date(date)).toDateString());
        let res = this.BookedSlotsDetails.find(ele => ele.BookingID == elem.BookingID);
        this.viewDets = { bookingID: res.BookingID, createdBy: res.CreatedBy, timeStamp: res.TimeStamp, subject: res.Subject, description: res.Description }
        // let bookingDetails;
        // this.service.getDetails(res.bookingID).subscribe(res=>bookingDetails=res);
        this.dialogService
            .addDialog(BookedFormModalComponent, { title: "Booking Details", bookingID:res.BookingID,selectedDate:date,Slot:slot }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(result => { if (result) { this.ngOnInit() } });
    }

    CheckIfBooked(date: Date, slot: ISlot) {        
        let elem = this.BookedSlots.find(element => element.SlotID == slot.SlotID && (new Date(element.Date)).toDateString() == (new Date(date)).toDateString());
        let daySlots;

        if (elem) {
            let res = this.BookedSlotsDetails.find(ele => ele.BookingID == elem.BookingID);
            daySlots = this.BookedSlots.filter(el => new Date(el.Date).toDateString() == (new Date(date)).toDateString() && el.BookingID == elem.BookingID);
            this.subject = res.Subject;
            this.bookingID = res.BookingID;
            this.slotcount = daySlots.length;
            let index = daySlots.indexOf(elem);

            this.aboveFlag=(index==0);
            
            return true;
        }
        return false;
    }
    CheckIfLoginSlot(date: Date, slot: ISlot) {
        let elem = this.BookedSlots.find(element => element.SlotID == slot.SlotID && (new Date(element.Date)).toDateString() == (new Date(date)).toDateString());
        if (elem) {
            if (localStorage.getItem("userid") == elem.CreatedBy.toString()) {
                return true;
            }
            else return false;
        }
        else return false;
    }
    


    // deleteDay() {
    //     let result: string;
    //     let disposable = this.dialogService
    //         .addDialog(DeleteConfirmComponent, { title: "Confirm Deletion for selected day" }, { backdropColor: 'rgba(0,0,0,0.5)' })
    //         .subscribe(
    //         (confirm: boolean) => {
    //             if (confirm) {
    //                 this.service
    //                     .deleteDay(this.del_BookingID, this.del_Date)
    //                     .finally(() => this.ngOnInit())
    //                     .subscribe(
    //                     res => { result = res; },
    //                     (error) => { console.log(error) }
    //                     );
    //             }
    //         });
    // }
    // deleteSlot() {

    //     let result: string;
    //     let disposable = this.dialogService
    //         .addDialog(DeleteConfirmComponent, { title: "Confirm Deletion for the selected slot" }, { backdropColor: 'rgba(0,0,0,0.5)' })
    //         .subscribe(
    //         (confirm: boolean) => {
    //             if (confirm) {
    //                 this.service
    //                     .deleteSlot(this.del_BookingID, this.del_Date, this.del_SlotId)
    //                     .finally(() => this.ngOnInit())
    //                     .subscribe(
    //                     (res) => { result = res; },
    //                     (error) => { console.log(error) }
    //                     );
    //             }
    //         });
    // }
}