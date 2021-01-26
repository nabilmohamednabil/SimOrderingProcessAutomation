import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators, FormBuilder  }  from '@angular/forms';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { uploadfileservice } from './../../services/uploadfileservice' ;
import {UsersService} from './../../services/users.service' ;
import {FlowService} from './../../services/FlowService' ;
import {PurchaseOrderService} from './../../services/PurchaseOrderService' ;

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {
  
  public inputValidation :FormGroup ;
  public answer ;
  thecurrentorderid: Number ;

  constructor(  private formbuilder : FormBuilder , 
                private  http : HttpClient  , 
                private userservice : UsersService , 
                private flowservice : FlowService  ,
                private purchaseorderservice : PurchaseOrderService) { }

  ngOnInit(): void {
    this.GetLastOrderId();
    this.inputValidation = this.formbuilder.group(
      {answer:['']}
    );
  }
  GetLastOrderId()
  {
     this.purchaseorderservice.LastPurchaseOrder().subscribe(
      data => {
        this.thecurrentorderid = data ;
      },error => {
               console.log("error in getting last purchase order ID");       
      }
    ) ;
  }

  onSubmit() {

    console.log("Handling the submit button");
    console.log(this.inputValidation.get('answer').value);
    console.log(this.inputValidation.get('answer').value);
    if(this.inputValidation.get('answer').value == "yes"){
    this.flowservice.updateStatus( this.thecurrentorderid , 5 , 2).subscribe(
      data => { this.flowservice.updateStatus(this.thecurrentorderid , 6 , 1).subscribe(
                  data => { console.log("done"); }, err => {console.log("error");} );
        }, error => {console.log("error");});
      }             
}

}
