import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {task} from './../order/task';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {taskAdaptor} from './../order/task';
const httpoptions={ headers : new HttpHeaders({'content-type':'application/json'}) };

@Injectable({
    providedIn:'root'
})
export class viewtaskservice {

    constructor( private httpclient : HttpClient , 
        private taskAdaptor : taskAdaptor){}
     
        /*
    CreatePurchaseOrder( order ): Observable<any> {
        //let body = JSON.stringify(order) ;
        return this.httpclient.post<PurchaseOrder>('http://172.28.38.15:8080/workflow/order/showing' , order  , httpoptions);
    }
    */

    listtasks(team : String):Observable<task[]>{
       return  this.httpclient.get('http://172.28.38.15:8080/workflow/task/teams/' + team).pipe(
        map( (data: any[]) => data.map((item) => this.taskAdaptor.adapt(item)) )
       );
    }

}