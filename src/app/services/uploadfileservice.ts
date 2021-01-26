import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent ,HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';


export class uploadfileservice {


    constructor( private httpclient : HttpClient ){
    }

   upload( file : File): Observable<any>{
      const formdata :FormData = new FormData() ;
      formdata.append( 'file' ,  file );
      
      const req = 
      new HttpRequest('POST', 'http://172.28.38.15:8080/workflow/file/upload' , 
         formdata , {
        reportProgress: true
             });
  
      return this.httpclient.request(req);
      
    /*
   return   this.httpclient.post( 'http://172.28.38.15:8080/workflow/file/upload' , 
   FormData );
    */

   } 
}