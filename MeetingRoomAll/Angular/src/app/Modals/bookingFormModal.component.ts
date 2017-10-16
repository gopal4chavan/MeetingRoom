import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormDetails, Duration, ILocation, IRoom, ISlot } from "../classes";
import { MainService } from "../main.service";
import { SlotService } from "../slot.service";
import { ConfirmComponent } from "./confirm.component";

export interface ConfirmModel {
  title: string;
  bookingFormDetails: FormDetails;
  bookingID: number;
}

@Component({
  selector: 'confirm',
  templateUrl: 'app/Modals/bookingFormModal.component.html'
})
export class BookingFormModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
  bookingFormDetails: FormDetails;
  title: string;
  bookingID: number;
  durationList: Duration[]
  BookingForm: FormGroup;
  locations: ILocation[];
  rooms: IRoom[];
  slots: ISlot[];
  failureFlag: boolean;

  minDate: Date = new Date();
  maxDate: Date = new Date();

  constructor(dialogService: DialogService, private fb: FormBuilder, private mainService: MainService, private slotService: SlotService) {
    super(dialogService);
  }

  ngOnInit() {
    this.slotService.getDuration().subscribe(result => this.durationList = result);

    this.mainService.getAllLocations()
      .subscribe(result => this.locations = result,
      (error) => console.log(error),
      () => console.log(this.locations));
    this.maxDate.setDate(this.maxDate.getDate() + 30);
    this.slotService.getSlots().subscribe(result => this.slots = result);

    this.BookingForm = this.fb.group(this.bookingFormDetails);


    if (this.bookingFormDetails.locationID != null) {
      this.getRooms();
      this.BookingForm.value.roomID = this.bookingFormDetails.roomID;
      this.BookingForm.value.roomName = this.bookingFormDetails.roomName;
    }
  }

  // confirm() {
  //   // this.result = true;
  //   // this.close();

  // }
  cancel() {
    this.close();
  }
  getRooms() {

    const locationid: number = this.BookingForm.value.locationID;
    this.mainService.getAllRooms(locationid)
      .subscribe(result => this.rooms = result,
      (error) => console.log(error),
      () => { console.log(this.rooms) }
      );
  }
  book() {
    if (this.bookingID) {

      let result: any;
      this.slotService
        .updateBooking(this.bookingID,this.BookingForm.value)
        .finally(() => { this.bookedSuccess(result);this.result=true;this.close()})
        .subscribe(
          res => { result = res },
        (error) => { console.log(error); },
        );      
      
    }
    else {      
      let locID = this.BookingForm.value.locationID;
      let roomID = this.BookingForm.value.roomID;
      let slot_id = this.BookingForm.value.slotID;

      this.BookingForm.value.createdby = localStorage.getItem("userid");
      this.BookingForm.value.locationName = this.locations.find(elem => elem.locationID == locID).locationName;
      this.BookingForm.value.roomName = this.rooms.find(elem => elem.roomID == roomID).roomName;
      this.BookingForm.value.slot = this.slots.find(elem => elem.slotID == slot_id).slot;

      let result: any;
      this.slotService
        .bookRoom(this.BookingForm.value)
        .finally(() => { this.bookedSuccess(result); })
        .subscribe(
        res => { result = res },
        (error) => { console.log(error); },
      );
    }
  }

  bookedSuccess(res: any) {
    let title: string;

    if (res == 'success') {

      this.failureFlag = false;
      title = 'Successfully Submitted';
      let disposable = this.dialogService.addDialog(ConfirmComponent, { bookingDetails: this.BookingForm.value }, { backdropColor: 'rgba(0,0,0,0.4)' });
      this.result = true;
      this.close();
    }
    else {
      this.failureFlag = true;
      this.result = false;
    }
  }
}