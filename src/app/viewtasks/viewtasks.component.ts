import { Component, OnInit } from '@angular/core';
import {viewtaskservice} from './../services/viewtaskservice';
import { task } from '../order/task';
import { ActivatedRoute } from '@angular/router';
import {UsersService} from './../services/users.service';
import {TrackingOrderService} from './../services/TrackingOrderService' ;
import {PurchaseOrderService} from './../services/PurchaseOrderService' ;
import {TrackingOrder} from './../components/purchase-order/TrackingOrder' ;

@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.component.html',
  styleUrls: ['./viewtasks.component.css']
})
export class ViewtasksComponent implements OnInit {
  /*
  output : { thename : String , thestatus : String , theassigned : String } ;
  showname:String ;
  showstatus:String;
  showassigned:String;
  rt:String;
  task1:String = "pending" ;
  task2:String = "pending" ;
  task3:String = "pending" ;
  status:String;
  */
  rt:String;
  Mytasklist : task[] ;
  loggeduser : String ;
  thecurrentorderid : Number ;
  myTrackingOrder : TrackingOrder ; 


  constructor(    private viewtaskservice : viewtaskservice  ,
                  private userservice : UsersService ,
                  private TrackingOrderService : TrackingOrderService ,
                  private purchaseorderservice : PurchaseOrderService ,
                  private route : ActivatedRoute) { }

  ngOnInit() {
    
   // localStorage.setItem('task1' , "pending");
   // localStorage.setItem('task2' , "pending");
   // localStorage.setItem('task3' , "pending");
    this.rt = this.route.snapshot.paramMap.get('loggedteam');
     this.showtasks();
     this.GetTaskStatus();
    /*
    switch(this.rt){
      case 'admin': 
      { this.show1();
        break ;
      }
      case 'billing': 
      { this.show2();
        break ;
      }
      case 'vendor': 
      { this.show3();
        break ;
      }

     } 

     */
  }

  showtasks(){
    this.viewtaskservice.listtasks(this.rt).subscribe(
      data => {
            this.Mytasklist  = data ;
            this.loggeduser = this.userservice.getCurrentUser();
      } , 
      error => {
         console.log('error exists ....' + JSON.stringify(error) ) ; 
      }

    );
  }

  GetTaskStatus()
  {
    // this.thecurrentorderid = this.purchaseorderservice.getthecurrentorderid(); // old way to get the last order ID
     this.purchaseorderservice.LastPurchaseOrder().subscribe(
      data => {
        this.thecurrentorderid = data ;
        console.log("the last purchase order is" + JSON.stringify(this.thecurrentorderid) );
        console.log("inside the get task status , where the current order ID is .." + this.thecurrentorderid);
        this.TrackingOrderService.GetLastTrackingOrder(this.thecurrentorderid).subscribe(
          dataxy => {
             this.myTrackingOrder = dataxy ;
          } , 
          err => {
             console.log('cannot get the last ttracking order tasks status');
          }
        ) ;
      },error => {
               console.log("error in getting last purchase order ID");       
      }
    ) ;


  }

  checktaskstatus( specifictask : String) : String {
   switch(specifictask)
   {
     case 'TASK1' : 
     return this.myTrackingOrder.gettask1_STATUS() ;
     case 'TASK2' : 
     return this.myTrackingOrder.gettask2_STATUS() ;
     case 'TASK3' : 
     return this.myTrackingOrder.gettask3_STATUS() ;
     case 'TASK4' : 
     return this.myTrackingOrder.gettask4_STATUS() ;
     case 'TASK5' : 
     return this.myTrackingOrder.gettask5_STATUS() ;
     case 'TASK6' : 
     return this.myTrackingOrder.gettask6_STATUS() ;
     case 'TASK7' : 
     return this.myTrackingOrder.gettask7_STATUS() ;
     case 'TASK8' : 
     return this.myTrackingOrder.gettask8_STATUS() ;
     case 'TASK9' : 
     return this.myTrackingOrder.gettask9_STATUS() ;
   }


    }

  /*
  show1(){
    this.output     =  this.order.getresult1();
    this.showname    =  this.output.thename ; 
    this.showstatus   =  this.output.thestatus ; 
    this.showassigned =  this.output.theassigned ; 
  }
  show2(){
    this.task1 = localStorage.getItem('task1') ;

    if (this.task1=="pending")
    {
      this.output     =  this.order.getresult2();
      this.showname    =  "No Taska assigned till now" ; 
      this.showstatus   =  "No pending tasks on your team" ; 
      this.showassigned =  this.output.theassigned ;
    }

    else if (this.task1=="closed"){
      this.output     =  this.order.getresult2();
      this.showname    =  this.output.thename ; 
      this.showstatus   =  this.output.thestatus ; 
      this.showassigned =  this.output.theassigned ;
    } 

  }
  show3(){
    this.task1 = localStorage.getItem('task1') ;
    if (this.task1=="pending")
    {
      this.output     =  this.order.getresult3();
      this.showname    =  "No Taska assigned till now" ; 
      this.showstatus   =  "No pending tasks on your team" ; 
      this.showassigned =  this.output.theassigned ;
    }

    else if (this.task1=="closed"){
      this.output     =  this.order.getresult3();
      this.showname    =  this.output.thename ; 
      this.showstatus   =  this.output.thestatus ; 
      this.showassigned =  this.output.theassigned ;
    } 

  }
  onkey( event :any) {
     this.status = event.target.value ;
      if(this.status == "done")
      {
        this.task1 = "closed" ;
        localStorage.setItem('task1' , "closed") ;
      }
     else {
      this.task1 = "pending" ;
      localStorage.setItem('task1' , "pending") ;
     } 
     
      console.log(this.status);
      console.log(this.task1);
  }
*/


}
