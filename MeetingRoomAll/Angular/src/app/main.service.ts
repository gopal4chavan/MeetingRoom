import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Http, RequestOptions,Headers } from '@angular/http';


import { ILocation, IRoom, Duration, DurationList } from './classes';
import { of } from "rxjs/Observable/of";



@Injectable()
export class MainService {
    private headers:Headers;
    private options:RequestOptions;

    private location_url: string = "http://localhost:65091/api/location";
    private room_url: string = "http://localhost:65091/api/room?locationID=";
    private userBookings_url:string=`http://localhost:65091/api/booking/getuserbookingdetails?id=${localStorage.userid}`;

    

    constructor(private http: Http) {
        this.headers = new Headers({ 'Access-Control-Allow-Origin': '*'});
        this.options = new RequestOptions({ headers:this.headers});
     }


    public getAllLocations(): Observable<ILocation[]> {
        return this.http.get(this.location_url,this.options).map(result => result.json());
    }


    public getAllRooms(locationid:number): Observable<IRoom[]> {
        return this.http.get(this.room_url+locationid)
            .map(result => result.json());
    }
    public getDuration():Observable<Duration[]>{
        return of(DurationList);
    }

     public getUserBookings(){
        return this.http.get(this.userBookings_url).map(result => result.json());
    }

}