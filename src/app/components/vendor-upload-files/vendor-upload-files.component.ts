import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { uploadfileservice } from './../../services/uploadfileservice' ;
import {UsersService} from './../../services/users.service' ;
import {FlowService} from './../../services/FlowService' ;
import {PurchaseOrderService} from './../../services/PurchaseOrderService' ;

@Component({
  selector: 'app-vendor-upload-files',
  templateUrl: './vendor-upload-files.component.html',
  styleUrls: ['./vendor-upload-files.component.css']
})
export class VendorUploadFilesComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  thecurrentorderid: Number ;

   
  constructor(  private  http : HttpClient  , 
                private userservice : UsersService , 
                private flowservice : FlowService  ,
                private purchaseorderservice : PurchaseOrderService  ) { }

  ngOnInit() {
    this.GetLastOrderId();
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


  selectfiles(event){
    console.log("success");
    this.selectedFiles = event.target.files ; 
  }
  
  upload() {
    
    this.progress = 0 ; 
    this.currentFile = <File>this.selectedFiles.item(0);
/*
    this.uploadfileservice.upload(this.currentFile).subscribe(
      event => {
        if( event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if ( event instanceof HttpResponse){
          this.message = event.body.message;
        }
      } , 
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      }
    );
  */


  /*    
   this.uploadfileservice.upload(this.currentFile).subscribe(

     data => { console.log("it is el7 success"); } 
     , 
     err => {console.log("errrrrooorrrs");}
   );
   */
    const uploadData = new FormData();
    uploadData.append('file', this.currentFile );
    this.http.post('http://172.28.38.15:8080/workflow/file/upload' , uploadData ,
    {
      reportProgress: true,
      observe: 'events'
    }).subscribe(
      event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if ( event  instanceof  HttpResponse){
          this.message = 'completed' ;
          // below is added new part to be executed after the upload was done successful
          // second step is to change the status of task2 to closed
                  this.flowservice.updateStatus( this.thecurrentorderid , 2 , 2).subscribe(
                    data => {
                            this.flowservice.updateStatus(this.thecurrentorderid , 3 , 1).subscribe(
                                  data => {
                                              console.log(" tasks status has been update successfully");
                                              this.flowservice.TriggeringTask(this.thecurrentorderid , 3 ).subscribe(
                                                        data => {
                                                                     console.log("result from the triggering task3 is" + JSON.stringify(data));
                                                                 },err => {
                                                                          console.log("error exists in triggering task3");
                                                                     }
                                                               );
                                                }, error => {
                                                                 console.log('error exists in third step to update task3 status' + JSON.stringify(error) ) ;
                                                              }
                                                      );
                                    }, err => {
                                         console.log('error exists in second step to update task2 status' + JSON.stringify(err) ) ;
                          }
                        );
        }
      },
      error => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      }
    );
    this.selectedFiles = undefined ; 
    this.currentFile = undefined;
  }

}
