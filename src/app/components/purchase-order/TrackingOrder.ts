import {Adapter} from '../home/Adapter'
import { Injectable } from "@angular/core";

export class TrackingOrder  {

  private order_ID : Number  ;
	
	private  task1_STATUS : String  ;
	
	private  task2_STATUS : String ; 
	 
  private  task3_STATUS : String ;
	
	private  task4_STATUS : String ;
	
	private  task5_STATUS : String ;

	private  task6_STATUS  : String ;
	
	private  task7_STATUS : String ;
	
	private  task8_STATUS  : String;
	
	private  task9_STATUS  : String;

	private  order_STATUS : String ;

constructor(){
}

getorder_ID() : Number 
{
  return this.order_ID ;  
}
setorder_ID( id : Number )
{
   this.order_ID = id ;  
}

gettask1_STATUS() : String 
{
  return this.task1_STATUS ;  
}
settask1_STATUS( vend : String )
{
   this.task1_STATUS = vend ;  
}

gettask2_STATUS() : String 
{
  return this.task2_STATUS ;  
}
settask2_STATUS( vend : String )
{
   this.task2_STATUS = vend ;  
}
gettask3_STATUS() : String 
{
  return this.task3_STATUS ;  
}
settask3_STATUS( vend : String )
{
   this.task3_STATUS = vend ;  
}

gettask4_STATUS() : String 
{
  return this.task4_STATUS ;  
}
settask4_STATUS( vend : String )
{
   this.task4_STATUS = vend ;  
}

gettask5_STATUS() : String 
{
  return this.task5_STATUS ;  
}
settask5_STATUS( vend : String )
{
   this.task5_STATUS = vend ;  
}

gettask6_STATUS() : String 
{
  return this.task6_STATUS ;  
}
settask6_STATUS( vend : String )
{
   this.task6_STATUS = vend ;  
}

gettask7_STATUS() : String 
{
  return this.task7_STATUS ;  
}
settask7_STATUS( vend : String )
{
   this.task7_STATUS = vend ;  
}

gettask8_STATUS() : String 
{
  return this.task8_STATUS ;  
}
settask8_STATUS( vend : String )
{
   this.task8_STATUS = vend ;  
}


gettask9_STATUS() : String 
{
  return this.task9_STATUS ;  
}
settask9_STATUS( vend : String )
{
   this.task9_STATUS = vend ;  
}

getorder_STATUS() : String
{
  return this.order_STATUS ;
}

setorder_STATUS( orderstatus : String) 
{
  this.order_STATUS = orderstatus ;
}


}

@Injectable({
  providedIn: "root",
})
export class TrackingOrderadaptor implements Adapter<TrackingOrder> {
  
   temp : TrackingOrder ;
  
  adapt(item : any){
   this.temp  = new TrackingOrder() ;
   
   this.temp.setorder_ID(item.order_ID) ; // this is newly added for getting the order id after saving it
   
   this.temp.setorder_ID(item.order_ID);
   this.temp.settask1_STATUS(item.task1_STATUS);
   this.temp.settask2_STATUS(item.task2_STATUS);
   this.temp.settask3_STATUS(item.task3_STATUS);
   this.temp.settask4_STATUS(item.task4_STATUS);
   this.temp.settask5_STATUS(item.task5_STATUS);
   this.temp.settask6_STATUS(item.task6_STATUS);
   this.temp.settask7_STATUS(item.task7_STATUS);
   this.temp.settask8_STATUS(item.task8_STATUS);
   this.temp.settask9_STATUS(item.task9_STATUS);
   this.temp.setorder_STATUS(item.order_STATUS);

   return this.temp ;
   }

}