import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector:'login',
    templateUrl:'app/login.component.html'
})
export class LoginComponent{  
    constructor(private router:Router){}
    meth(event:any){
        console.log(event.target.value);        
        localStorage.setItem("userid",event.target.value);
        localStorage.setItem("password",event.target.value);
        this.router.navigate(['/my-app']);
    }
}