import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from './../purchase-order/PurchaseOrder';
import {PurchaseOrderService} from './../../services/PurchaseOrderService' ;
import {UsersService} from './../../services/users.service' ;

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css']
})
export class PurchaseOrderListComponent implements OnInit {

  MyPurchaselist : PurchaseOrder[] ;
  loggeduser : String ;
  constructor( private purchaseorderservice : PurchaseOrderService ,
               private userservice:UsersService  ) { }

  ngOnInit() {
    this.getorderlist();
  }

  getorderlist(){
    this.purchaseorderservice.listPurchaseOrder().subscribe(

      data => {
        this.MyPurchaselist = data ; 
        console.log( 'response is the ...' + JSON.stringify(data)) ; 
        console.log('the response from -- ' + data );
        this.loggeduser = this.userservice.getCurrentUser();
      } ,
      error => { console.log('error exists ....' + JSON.stringify(error) ) ; } 

    );
  }


}
