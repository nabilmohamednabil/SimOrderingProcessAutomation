import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent ,HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PurchaseOrderadaptor}  from './../components/purchase-order/PurchaseOrder'
import {PurchaseOrder} from './../components/purchase-order/PurchaseOrder';
import { map } from 'rxjs/operators';

@Injectable()
export class FlowService {
    constructor( private httpclient : HttpClient  , private PurchaseOrderadaptor : PurchaseOrderadaptor){
    }
    updateStatus(  orderId : Number , task : number , flag : number ): Observable<PurchaseOrder>{ 
      return this.httpclient.get<PurchaseOrder>('http://172.28.38.15:8080/workflow/trackingorder/changeStatus/' + orderId + '/' + task + '/' + flag ).pipe(
         map( item => this.PurchaseOrderadaptor.adapt(item) )
     );
   }
   OrderStatus(orderId : Number):Observable<any>{
      return this.httpclient.get<Boolean>('http://172.28.38.15:8080/workflow/trackingorder/OrderStatus/' + orderId  );
   } 
   TriggeringTask( orderId : Number , taskID : number):Observable<any>{
      return this.httpclient.get<Boolean>('http://172.28.38.15:8080/workflow/trackingorder/Triggering/' + orderId + '/' + taskID  );
   }
}