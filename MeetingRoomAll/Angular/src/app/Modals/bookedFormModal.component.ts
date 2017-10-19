import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormDetails, Duration, ILocation, IRoom, ISlot, IViewDetails, IviewDet } from "../classes";
import { MainService } from "../main.service";
import { SlotService } from "../slot.service";
import { ConfirmComponent } from "./confirm.component";
import { DeleteConfirmComponent } from "./delete-confirm.component";
import { BookingFormModalComponent } from "./bookingFormModal.component";

export interface ConfirmModel {
    title: string;
    bookingID: number;
    selectedDate: Date;
    Slot: ISlot;
}

@Component({
    selector: 'confirm',
    templateUrl: 'app/Modals/bookedFormModal.component.html',
    styleUrls: ['app/Modals/bookedFormModal.component.css']
})
export class BookedFormModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {

    title: string;
    Slot: ISlot;
    bookingID: number;
    selectedDate: Date;

    bookingDetails: IviewDet;
    flag: boolean = false;

    constructor(dialogService: DialogService, private slotService: SlotService) {
        super(dialogService);
    }
    ngOnInit() {
        this.slotService.getDetails(this.bookingID).subscribe(
            (res) => this.bookingDetails = res,
            (error) => { },
            () => {
                if (this.bookingDetails) {
                    this.flag = true;
                    this.bookingDetails.slot = this.Slot.Slot;
                    this.bookingDetails.slot_id = this.Slot.SlotID;
                }
            });

    }
    modal_close() {
        this.close();
    }

    enableDeleteOptions() {
        // if (this.bookingDetails.createdBy == parseInt(localStorage.getItem("userid"),10)) {
        return true;
        // }
        // else return false;
    }

    delete() {
        let result: string;
        let disposable = this.dialogService
            .addDialog(DeleteConfirmComponent, { title: "Confirm Deletion for selected booking ID" }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(
            (confirm: boolean) => {
                if (confirm) {
                    this.slotService
                        .delete(this.bookingID)
                        .finally(() => { if (result) { this.close(); this.result = true; } })
                        .subscribe(
                        res => { result = res; },
                        (error) => { console.log(error) }
                        );
                }
            });
    }

    deleteSlot() {
        let result: string;
        let disposable = this.dialogService
            .addDialog(DeleteConfirmComponent, { title: "Confirm Deletion for selected day" }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(
            (confirm: boolean) => {
                if (confirm) {
                    this.slotService
                        .deleteDay(this.bookingID, this.selectedDate)
                        .finally(() => { if (result) { this.close(); this.result = true; } })
                        .subscribe(
                        res => { result = res; },
                        (error) => { console.log(error) }
                        );
                }
            });
    }
    updateBooking() {
        let temp_obj: FormDetails = new FormDetails(this.bookingDetails.createdBy, this.bookingDetails.location_id, this.bookingDetails.location_name, this.bookingDetails.room_id, this.bookingDetails.room_name, this.bookingDetails.subject, this.bookingDetails.description, new Date(this.bookingDetails.fromDate), new Date(this.bookingDetails.toDate),null,null,this.bookingDetails.slot_id, this.bookingDetails.slot, this.bookingDetails.slot_count);

        this.dialogService
            .addDialog(BookingFormModalComponent, { title: "Booking Form", bookingFormDetails: temp_obj, bookingID: this.bookingID }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(result => { if (result) { this.ngOnInit();this.result=true;this.close() } });
    }
}