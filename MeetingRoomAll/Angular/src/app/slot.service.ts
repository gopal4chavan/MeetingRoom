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
        let det:Details={createdby:null,description:null,subject:null,fromDate:null,toDate:null,location_id:null,room_id:null,slot_id:null,slot_count:null};
        det.createdby=formdet.createdby;
        det.description=formdet.description;
        det.subject=formdet.subject;
        det.fromDate=new Date(formdet.fromDate).toDateString();
        det.toDate=new Date(formdet.toDate).toDateString();
        det.location_id=formdet.locationID;
        det.room_id=formdet.roomID;
        det.slot_id=formdet.slotID;
        det.slot_count=formdet.slotCount;
        let re:{val:any}={val:null};
        return this.http.post(this.booking_url,det).map(result=>result.json());
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
        return this.http.post(this.details_url+bookingID,null).map(res=>res.json());
    }
    public updateBooking(bookingID:number,obj:FormDetails){
        let det:Details={createdby:null,description:null,subject:null,fromDate:null,toDate:null,location_id:null,room_id:null,slot_id:null,slot_count:null};
        det.createdby=obj.createdby;
        det.description=obj.description;
        det.subject=obj.subject;
        det.fromDate=new Date(obj.fromDate).toDateString();
        det.toDate=new Date(obj.toDate).toDateString();
        det.location_id=obj.locationID;
        det.room_id=obj.roomID;
        det.slot_id=obj.slotID;
        det.slot_count=obj.slotCount;
        let re:{val:any}={val:null};
        return this.http.post(this.updatebooking_url+bookingID,det).map(res=>res.json());
    }
}



