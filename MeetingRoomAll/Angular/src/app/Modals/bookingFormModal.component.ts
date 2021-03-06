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
  templateUrl: 'app/Modals/bookingFormModal.component.html',
  styleUrls: ['app/Modals/bookingFormModal.component.css']
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
    console.log(this.bookingFormDetails);
    this.slotService.getDuration().subscribe(result => this.durationList = result);

    this.mainService.getAllLocations()
      .subscribe(
      (result) => this.locations = result,
      (error) => console.log(error));

    this.maxDate.setDate(this.maxDate.getDate() + 30);
    this.slotService.getSlots().subscribe(result => this.slots = result);

    this.BookingForm = this.fb.group(this.bookingFormDetails);

    if (this.bookingFormDetails.LocationID != null) {
      this.getRooms();
    }
    console.log(this.BookingForm.value);
  }

  cancel() {
    this.close();
  }
  getRooms() {

    const locationid: number = this.BookingForm.value.LocationID;
    this.mainService.getAllRooms(locationid)
      .subscribe(
      (result) => this.rooms = result,
      (error) => console.log(error));
  }
  book() {
    if (this.bookingID) {

      let result: any;
      this.slotService
        .updateBooking(this.bookingID, this.BookingForm.value)
        .finally(() => { this.bookedSuccess(result, 'Successfully Updated'); this.result = true; this.close() })
        .subscribe(
        res => { result = res },
        (error) => { console.log(error); },
      );

    }
    else {
      let locID = this.BookingForm.value.LocationID;
      let roomID = this.BookingForm.value.RoomID;
      let slot_id = this.BookingForm.value.SlotID;
      this.BookingForm.value.CreatedBy = localStorage.getItem("userid");
      this.BookingForm.value.LocationName = this.locations.find(elem => elem.LocationID == locID).LocationName;
      this.BookingForm.value.RoomName = this.rooms.find(elem => elem.RoomID == roomID).RoomName;
      this.BookingForm.value.Slot = this.slots.find(elem => elem.SlotID == slot_id).Slot;

      let result: any;
      if (this.BookingForm.value.Repeat) {
        this.slotService.repeatBooking(this.BookingForm.value)
          .finally(() => { this.bookedSuccess(result, 'Successfully Submitted'); })
          .subscribe(
          (res) => { result = res },
          (error) => { console.log(error) });
      }
      else {
        this.slotService.bookRoom(this.BookingForm.value)
          .finally(() => { this.bookedSuccess(result, 'Successfully Submitted'); })
          .subscribe(
          (res) => { result = res },
          (error) => { console.log(error) });
      }
    }
  }

  bookedSuccess(res: any, title: string) {
    if (res == 'success') {

      this.failureFlag = false;
      let disposable = this.dialogService.addDialog(ConfirmComponent, { bookingDetails: this.BookingForm.value, title: title }, { backdropColor: 'rgba(0,0,0,0.4)' });
      this.result = true;
      this.close();
    }
    else {
      this.failureFlag = true;
      this.result = false;
    }
  }
}