import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {task} from '../order/task';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {TrackingOrderadaptor} from '../components/purchase-order/TrackingOrder' ;
import {TrackingOrder} from '../components/purchase-order/TrackingOrder';
const httpoptions={ headers : new HttpHeaders({'content-type':'application/json'}) };

@Injectable({
    providedIn:'root'
})
export class TrackingOrderService {

    private CurrentTrackingOrder : Number ;

    constructor( private httpclient : HttpClient , 
                 private TrackingOrderadaptor : TrackingOrderadaptor){}
     

    postTrackOrder(trackorder):Observable<any>{
       return  this.httpclient.post<TrackingOrder>('http://172.28.38.15:8080/workflow/trackingorder/track' 
       ,  trackorder , httpoptions );
    }


    GetLastTrackingOrder(TrackingOrderId):Observable<TrackingOrder>{

        console.log("here we are inside the GetLastTrackingOrder where the tracking order ID is .." + TrackingOrderId );
        
        return this.httpclient.get('http://172.28.38.15:8080/workflow/trackingorder/tracking/' + TrackingOrderId ).pipe(
            map ( (data:any) => 
                      this.TrackingOrderadaptor.adapt(data) )
        );
    }
    OrderStatus(TrackingOrderId):Observable<any>{

        return this.httpclient.get('http://172.28.38.15:8080/workflow/trackingorder/OrderStatus/' +  TrackingOrderId );
    }

    setCurrentTrackingOrder( trackingorder : Number)
    {
        this.CurrentTrackingOrder = trackingorder ;
    }
    
    getCurrentTrackingOrder (){
        return this.CurrentTrackingOrder ;
    }
}