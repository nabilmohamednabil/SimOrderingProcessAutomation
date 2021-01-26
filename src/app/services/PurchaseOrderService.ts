import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PurchaseOrder} from './../components/purchase-order/PurchaseOrder';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {PurchaseOrderadaptor}  from './../components/purchase-order/PurchaseOrder'
const httpoptions={ headers : new HttpHeaders({'content-type':'application/json'}) };

@Injectable({
    providedIn:'root'
})
export class PurchaseOrderService {

    thecurrentorderid : Number ;

    constructor( private httpclient : HttpClient , 
        private PurchaseOrderadaptor : PurchaseOrderadaptor){}
     
    // old version was Observable<any>    
    CreatePurchaseOrder( order ): Observable<PurchaseOrder> {
        //let body = JSON.stringify(order) ;
        return this.httpclient.post<PurchaseOrder>('http://172.28.38.15:8080/workflow/order/showing' , order  , httpoptions).pipe(
            map( item => this.PurchaseOrderadaptor.adapt(item) )
        );
    }
    listPurchaseOrder():Observable<PurchaseOrder[]>{
       return  this.httpclient.get('http://172.28.38.15:8080/workflow/order/showall').pipe(
        map( (data: any[]) => data.map((item) => this.PurchaseOrderadaptor.adapt(item)) )
       );
    }
    LastPurchaseOrder():Observable<Number>{
        return this.httpclient.get<Number>('http://172.28.38.15:8080/workflow/order/showfirstOrderId');
    }
    getthecurrentorderid () : Number {
        return this.thecurrentorderid ;
    }
    setthecurrentorderid ( thecurrentorderid : Number)
    {
        this.thecurrentorderid = thecurrentorderid ;
    }

}