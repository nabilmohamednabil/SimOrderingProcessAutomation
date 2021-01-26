import {Adapter} from './../home/Adapter'
import { Injectable } from "@angular/core";

export class PurchaseOrder {

 orderID : Number ;  // this is newly added to the properties. 
 vendor  : String ; 
 volume  : Number ;
 type    : String ; 
 graphical_reference : Number ; 
 profile_reference : Number ;
 status : String ;  	
 DATE_CREATED : Date ;
 LAST_UPDATED : Date ;

constructor(){
}

getVendor() : String 
{
  return this.vendor ;  
}
setVendor( vend : String )
{
   this.vendor = vend ;  
}

getVolume() : Number 
{
  return this.volume ;  
}
setVolume( vend : Number )
{
   this.volume = vend ;  
}
getType() : String 
{
  return this.type ;  
}
setType( vend : String )
{
   this.type = vend ;  
}
getGraphical_reference() : Number 
{
  return this.graphical_reference ;  
}
setGraphical_reference( vend : Number )
{
   this.graphical_reference = vend ;  
}
getProfile_reference() : Number 
{
  return this.profile_reference ;  
}
setProfile_reference( vend : Number )
{
   this.profile_reference = vend ;  
}
getstatus() : String 
{
  return this.status ;  
}
setstatus( vend : String )
{
   this.status = vend ;  
 }
 
getcreated() : Date 
{
  return this.DATE_CREATED ;  
}
setcreated( vend : Date )
{
   this.DATE_CREATED = vend ;  
}
getupdated() : Date 
{
  return this.LAST_UPDATED ;  
}
setupdated( vend : Date )
{
   this.LAST_UPDATED = vend ;  
}

getorderID()   // this is added newly as a getter
{
  return this.orderID ;
}

setorderID( orderid : Number)   // this is newly added as a setter
{
   this.orderID = orderid ;
}


}

@Injectable({
  providedIn: "root",
})
export class PurchaseOrderadaptor implements Adapter<PurchaseOrder> {
  
   temp : PurchaseOrder ;
  
  adapt(item : any){
   this.temp  = new PurchaseOrder() ;
   
   this.temp.setorderID(item.orderid) ; // this is newly added for getting the order id after saving it
   this.temp.setVendor(item.vendor);  // vendor
   this.temp.setVolume(item.volume);  //volume
   this.temp.setType(item.type);
   this.temp.setGraphical_reference(item.graphical_reference);
   this.temp.setProfile_reference(item.profile_reference);
   this.temp.setstatus(item.status);
   this.temp.setcreated(item.DATE_CREATED);
   this.temp.setupdated(item.LAST_UPDATED);
   return this.temp ;
   }

}