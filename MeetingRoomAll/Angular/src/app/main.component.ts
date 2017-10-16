import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ILocation, IRoom, IPrimaryDetails, Duration, FormDetails } from './classes';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { MainService } from './main.service';
import { FormGroup } from "@angular/forms";
import { DialogService } from "ng2-bootstrap-modal";
import { BookingFormModalComponent } from './Modals/bookingFormModal.component';

@Component({
    selector: "main",
    templateUrl: "app/main.component.html",
    styleUrls: ["app/main.component.css"]
})

export class MainComponent implements OnInit {

   
    date_inValid: boolean = true;

    BookingForm: FormGroup;
    locations: ILocation[];
    rooms: IRoom[] = [];


    public options: any = {
        locale: { format: 'DD-MMMM-YYYY' },
        minDate: new Date,

        dateLimit: {
            days: 30
        }
    };
    details: IPrimaryDetails = { loc_id: null, loc_name: null, room_id: null, room_name: null, date: null };
    @Output() detailsEvent = new EventEmitter<IPrimaryDetails>();
    @Output() locationChangeEvent = new EventEmitter<boolean>();

    constructor(private service: MainService, private dialogService: DialogService) {

    }

    ngOnInit() {
        this.service.getAllLocations()
            .subscribe(result => this.locations = result);
    }

    getRooms(event: any) {
        this.details.room_id = undefined;
        this.details.room_name = undefined;
        this.locationChangeEvent.emit(false);
        const locationid: number = event.target.selectedOptions[0].id;
        this.details.loc_id = locationid;

        this.service.getAllRooms(locationid)
            .subscribe(result => this.rooms = result);
    }
    roomSelected(event: any) {
        this.details.room_id = event.target.selectedOptions[0].id;
    }
    getSlots() {
        this.detailsEvent.emit(this.details);
    }
    selectedDate(event: any) {
        this.date_inValid = false;
        this.details.date = event;
    }

    // To book room directly
    BookDirectly() {
        let temp_form_det = new FormDetails(
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
            null);
        let disposable = this.dialogService
            .addDialog(BookingFormModalComponent, { title: "Header", bookingFormDetails: temp_form_det }, { backdropColor: 'rgba(0,0,0,0.5)' })
    }
}