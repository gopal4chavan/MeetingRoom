import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Http, RequestOptions,Headers } from '@angular/http';


import { ILocation, IRoom, Duration, DurationList } from './classes';
import { of } from "rxjs/Observable/of";


let headers = new Headers({ 'Access-Control-Allow-Origin': '*'});
let options = new RequestOptions({ headers:headers});

@Injectable()
export class MainService {

    private location_url: string = "http://localhost:65091/api/location";
    private room_url: string = "http://localhost:65091/api/room?locationID=";

    

    constructor(private http: Http) { }


    public getAllLocations(): Observable<ILocation[]> {
        return this.http.get(this.location_url,options).map(result => result.json());
    }


    public getAllRooms(locationid:number): Observable<IRoom[]> {
        return this.http.post(this.room_url+locationid,"")
            .map(result => result.json());
    }
    public getDuration():Observable<Duration[]>{
        return of(DurationList);
    }

}