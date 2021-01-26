import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , FormControl , Validators } from '@angular/forms' ; 
import { PurchaseOrder } from './PurchaseOrder';
import {PurchaseOrderService} from './../../services/PurchaseOrderService' ;
import {TrackingOrderService} from './../../services/TrackingOrderService' ;
import {TrackingOrder} from './TrackingOrder' ;
import {UsersService} from './../../services/users.service' ;
import {FlowService} from './../../services/FlowService' ;

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  MyPurchaseOrde : PurchaseOrder = new PurchaseOrder() ;
  trackingorder  : TrackingOrder = new TrackingOrder() ;
  currentorder : PurchaseOrder ; // the current order saved in the DB
  currentorderid : Number ;
  checkoutFormGroup: FormGroup;
  res : any ; 
  created : Date =  new Date();
  updated : Date =  new Date();
  
  constructor(  private formBuilder: FormBuilder , 
                private purchaseorderservice : PurchaseOrderService ,
                private TrackingOrderService : TrackingOrderService , 
                private userservice:UsersService , 
                private flowservice:FlowService ) { }

  ngOnInit(): void {
    
    this.checkoutFormGroup = this.formBuilder.group({
      Purchase_Order: this.formBuilder.group({
        Vendor: [''],
        Volume:  [''],
        Type: [''] ,
        Graphical_reference : [''] ,
        Profile_reference  :  ['']

      })
    });

  }

  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.checkoutFormGroup.get('Purchase_Order').value.Vendor);
    console.log(this.checkoutFormGroup.get('Purchase_Order').value.Volume);
    console.log(this.checkoutFormGroup.get('Purchase_Order').value.Type);
    console.log(this.checkoutFormGroup.get('Purchase_Order').value.Graphical_reference);
    console.log(this.checkoutFormGroup.get('Purchase_Order').value.Profile_reference);



   
    this.MyPurchaseOrde.setVendor(this.checkoutFormGroup.get('Purchase_Order').value.Vendor);
    this.MyPurchaseOrde.setVolume(this.checkoutFormGroup.get('Purchase_Order').value.Volume);
    this.MyPurchaseOrde.setType(this.checkoutFormGroup.get('Purchase_Order').value.Type);
    this.MyPurchaseOrde.setGraphical_reference(this.checkoutFormGroup.get('Purchase_Order').value.Graphical_reference);
    this.MyPurchaseOrde.setProfile_reference(this.checkoutFormGroup.get('Purchase_Order').value.Profile_reference);
    this.MyPurchaseOrde.setstatus('waiting');
    /*
    this.MyPurchaseOrde.setVendor('ericsson');
    this.MyPurchaseOrde.setVolume(800000);
    this.MyPurchaseOrde.setType('family 3');
    this.MyPurchaseOrde.setGraphical_reference(7.00);
    this.MyPurchaseOrde.setProfile_reference(7.00);
    this.MyPurchaseOrde.setstatus('waiting');
    */

    //this.MyPurchaseOrde.setcreated(this.created);
    //this.MyPurchaseOrde.setupdated(this.updated);
    
    this.purchaseorderservice.CreatePurchaseOrder(this.MyPurchaseOrde).subscribe(
      data => {
        this.res = (JSON.stringify(data)); 
        console.log('the response from -- ' + this.res );
        this.currentorder = data ;  // newly added to get the saved order
        this.currentorderid = data.getorderID() ; // newly added to get the added order ID
        this.purchaseorderservice.setthecurrentorderid(this.currentorderid);
        console.log("the currently new order added ID is ." + this.currentorderid);
 
      
                // below here we create an object for tracking order.
                this.trackingorder.setorder_ID(this.currentorderid);
                this.trackingorder.settask1_STATUS("Ready");
                this.trackingorder.settask2_STATUS("Not Ready");
                this.trackingorder.settask3_STATUS("Not Ready");
                this.trackingorder.settask4_STATUS("Not Ready");
                this.trackingorder.settask5_STATUS("Not Ready");
                this.trackingorder.settask6_STATUS("Not Ready");
                this.trackingorder.settask7_STATUS("Not Ready");
                this.trackingorder.settask8_STATUS("Not Ready");
                this.trackingorder.settask9_STATUS("Not Ready");
                this.trackingorder.setorder_STATUS("Not Ready");
                this.TrackingOrderService.postTrackOrder(this.trackingorder).subscribe(
                  datay  =>  {
                      console.log('the result of the calling to the tacking order' + datay );
                      // first send sms notification and send the Email Notification
                      
                      this.userservice.sms(1).subscribe(
                        data => {
                          this.res = (JSON.stringify(data)); 
                          console.log(' response from sending the SMS service to team -- ' + this.res );
                          // second step is to change the status of task1 to closed
                              this.flowservice.updateStatus(this.currentorderid , 1 , 2).subscribe(
                                data => {
                                            // third will change the status of the task2 to be Ready
                                            this.flowservice.updateStatus(this.currentorderid , 2 , 1).subscribe(
                                                    data => {
                                                            console.log(" tasks status has been update successfully");
                                                    }, error => {
                                                      console.log('error exists in third step to update task2 status' + JSON.stringify(error) ) ;
                                                    }
                                            );
                                }, err => {
                                  console.log('error exists in second step to update task1 status' + JSON.stringify(err) ) ;
                                }
                              );
                        } ,
                        error => { console.log('error exists in sending sms and email notifcation ....' + JSON.stringify(error) ) ; } 
                      ); 
                      
                  } , err => {
                     console.log('error inside the function realted to the tracking order') ;
                  }
                );
                //above we will create an object for the tracking order.


        this.checkoutFormGroup.reset();
      } ,
      error => { console.log('error exists ....' + JSON.stringify(error) ) ; } 
    );
   


    
    
  
  }

  CheckOutPurhcaseOrder(){
    console.log("Handling the check out button");
    this.MyPurchaseOrde.setVendor(this.checkoutFormGroup.get('Purchase_Order').value.Vendor);
    this.MyPurchaseOrde.setVolume(this.checkoutFormGroup.get('Purchase_Order').value.Volume);
    this.MyPurchaseOrde.setType(this.checkoutFormGroup.get('Purchase_Order').value.Type);
    this.MyPurchaseOrde.setGraphical_reference(this.checkoutFormGroup.get('Purchase_Order').value.Graphical_reference);
    this.MyPurchaseOrde.setProfile_reference(this.checkoutFormGroup.get('Purchase_Order').value.Profile_reference);
    this.MyPurchaseOrde.setstatus("Running");
  }



}
