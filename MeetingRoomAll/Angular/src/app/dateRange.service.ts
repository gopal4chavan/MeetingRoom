import { Injectable } from '@angular/core';
@Injectable()
export class DateRange {
    range:string[]=[];
    startDate:Date;
    endDate:Date;
    index:number;
    getDateRange(date: any):string[] {

        this.startDate=new Date(date.start._d.toString().slice(0,15));
        this.endDate=new Date(date.end._d.toString().slice(0,15));
        let temp_date:Date=new Date(this.startDate);

        this.index=0;
        this.range=[];


        while(temp_date<=this.endDate)
        {
            this.range[this.index]=new Date(temp_date).toString().slice(0,15);
            temp_date.setDate(temp_date.getDate() + 1);
            this.index=this.index+1;
        }

        return  this.range;
    }

}