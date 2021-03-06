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

    bookingDetails: FormDetails;
    flag: boolean = false;
    buttonClicked: boolean = false;
    constructor(dialogService: DialogService, private slotService: SlotService) {
        super(dialogService);
    }
    ngOnInit() {
        this.slotService.getDetails(this.bookingID).subscribe(
            (res) => this.bookingDetails = res,
            (error) => { console.log(error) },
            () => {
                if (this.bookingDetails) {
                    this.flag = true;
                }
            });

    }
    modal_close() {
        this.close();
    }

    enableDeleteOptions() {
        if (this.bookingDetails.CreatedBy == parseInt(localStorage.getItem("userid"), 10)) {
            return true;
        }
        else return false;
    }

    delete() {
        let result: string;
        this.buttonClicked = true;

        let disposable = this.dialogService
            .addDialog(DeleteConfirmComponent, { title: "Are you sure, you want to delete entire booking" }, { backdropColor: 'rgba(0,0,0,0.5)' })
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
                else
                    this.buttonClicked = false;
            });
    }

    deleteSlot() {
        let result: string;
        this.buttonClicked = true;

        let disposable = this.dialogService
            .addDialog(DeleteConfirmComponent, { title: "Are you sure, you want to delete selected date booking" }, { backdropColor: 'rgba(0,0,0,0.5)' })
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
                else
                    this.buttonClicked = false;

            });
    }
    updateBooking() {
        this.bookingDetails.FD=new Date(this.bookingDetails.FromDate);
        this.bookingDetails.TD=new Date(this.bookingDetails.ToDate);
        this.dialogService
            .addDialog(BookingFormModalComponent, { title: "Edit Booking", bookingFormDetails: this.bookingDetails, bookingID: this.bookingID }, { backdropColor: 'rgba(0,0,0,0.5)' })
            .subscribe(result => { if (result) { this.ngOnInit();this.result=true;this.close() } });
    }
}