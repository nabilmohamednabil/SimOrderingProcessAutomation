import { Component, OnInit } from '@angular/core';
import {TrackingOrderService} from './../../services/TrackingOrderService' ;
import {PurchaseOrderService} from './../../services/PurchaseOrderService' ;

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  percent : number ;
  thecurrentorderid : Number ;
  constructor( private TrackingOrderService : TrackingOrderService ,
               private purchaseorderservice : PurchaseOrderService ) { }
  ngOnInit() {
    this.purchaseorderservice.LastPurchaseOrder().subscribe(
      data => {
        this.thecurrentorderid = data ;
        this.TrackingOrderService.OrderStatus(this.thecurrentorderid).subscribe(
          dataxy => {
             this.percent = dataxy ;
             console.log("percent value is .." + this.percent);
          } , 
          err => {
             console.log('there is an issue with the percentage');
          }
        ) ;
      },error => {
               console.log("there is an issue with getting the percentage");       
      }
    ) ;

  }
}
