import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { ISlot,Duration,DurationList,FormDetails,Details } from './classes';
import { Observable } from "rxjs/Observable";
import {of} from 'rxjs/Observable/of';

import 'rxjs/add/operator/delay';

@Injectable()
export class SlotService {

    private slot_url="http://localhost:65091/api/slot";
    private booking_url="http://localhost:65091/api/booking/add"; 
    private booked_slots_url="http://localhost:65091/api/booking/get?";
    private delete_url="http://localhost:65091/api/booking/delete?bookingID=";
    private deleteday_url="http://localhost:65091/api/booking/deleteday?bookingID=";
    private deleteslot_url="http://localhost:65091/api/booking/deleteslot?bookingID=";
    private details_url="http://localhost:65091/api/booking/getdetails?bookingID=";
    private updatebooking_url="http://localhost:65091/api/booking/update?bookingID=";

    constructor(private http:Http){}

    public getSlots():Observable<ISlot[]>{ 
        return this.http.get(this.slot_url).map(result=>result.json());        
    }


    public getDuration():Observable<Duration[]>{
        return of(DurationList).delay(500);
    }

    public bookRoom(formdet:FormDetails):Observable<string>{
        console.log(formdet);
        formdet.FromDate=new Date(formdet.FD).toDateString();
        formdet.ToDate =new Date(formdet.TD).toDateString();
        return this.http.post(this.booking_url,formdet).map(result=>result.json());
    }

    public getBookedSlots(location_id:number,room_id:number)
    {
        return this.http.get(this.booked_slots_url+`locationid=${location_id}&roomid=${room_id}`).map(result=>result.json());
    }

    public delete(bookingID:number){
        return this.http.post(this.delete_url+bookingID,null).map(res=>res.json());
    }
    public deleteDay(bookingID:number,date:Date){
        return this.http.post(this.deleteday_url+bookingID+`&date=${date}`,null).map(res=>res.json());
    }
    public deleteSlot(bookingID:number,date:Date,slotID:number)
    {
        return this.http.post(this.deleteslot_url+bookingID+`&date=${date}&slotID=${slotID}`,null).map(res=>res.json());
    }
    public getDetails(bookingID:number)
    {
        return this.http.get(this.details_url+bookingID).map(res=>res.json());
    }
    public updateBooking(bookingID:number,obj:FormDetails){
        return this.http.post(this.updatebooking_url+bookingID,obj).map(res=>res.json());
    }
}



