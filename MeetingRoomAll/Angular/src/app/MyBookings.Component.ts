import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MainService } from "./main.service";
import {UserBookings} from "./classes";
@Component({
    selector:'login',
    templateUrl:'app/MyBookings.Component.html'
})
export class MyBookingsComponent implements OnInit{  
    userBookings:UserBookings[]; 


    constructor(private router:Router,private service: MainService){}

 ngOnInit() {
        this.service.getUserBookings()
            .subscribe(result =>
            {
                this.userBookings = result;
                console.log(this.userBookings);
            });
           
    }
  
    backToMyapp(){               
        
        this.router.navigate(['/my-app']);
    }
}