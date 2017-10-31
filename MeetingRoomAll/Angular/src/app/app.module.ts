import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import {StartComponent} from './start.component';
import { MainComponent } from './main.component';
import { SlotsComponent } from './slot.component';

import { DateRange } from './dateRange.service';
import { MainService } from './main.service';
import { SlotService } from './slot.service';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './Modals/confirm.component';
import { DeleteConfirmComponent } from "./Modals/delete-confirm.component";


import { Daterangepicker } from 'ng2-daterangepicker';

import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import {CheckboxModule} from 'primeng/primeng';

import { BookingFormModalComponent } from './Modals/bookingFormModal.component';
import { BookedFormModalComponent } from "./Modals/bookedFormModal.component";
import {MyBookingsComponent} from "./MyBookings.Component"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CalendarModule,
    CheckboxModule,
    BrowserAnimationsModule,
    BootstrapModalModule,
    Daterangepicker,    
    RouterModule.forRoot(
      [{
        path: 'my-app',
        component: AppComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
         path: 'myBookings',
        component: MyBookingsComponent
      }]
    )
  ],
  declarations: [
    AppComponent,
    MainComponent,
    SlotsComponent,
    ConfirmComponent,
    DeleteConfirmComponent,
    StartComponent,
    BookingFormModalComponent,
    LoginComponent,
    BookedFormModalComponent,
    MyBookingsComponent
  ],
  bootstrap: [
    StartComponent
  ],
  entryComponents: [
    ConfirmComponent,
    DeleteConfirmComponent,
    BookingFormModalComponent,
    BookedFormModalComponent
  ],
  providers: [
    DateRange,
    MainService,
    SlotService
  ]
})
export class AppModule { }
