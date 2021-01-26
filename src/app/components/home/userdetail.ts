
import {Adapter} from './Adapter'
import { Injectable } from "@angular/core";

export class userdetail {
    constructor(  
        public email     : String ,
        public username  : String ,
        public passwd    : String ,
        public team      : String 
        )
        {
    }
}

@Injectable({
    providedIn: "root",
  })
export class userdetailadaptor implements Adapter<userdetail> {
    adapt(item: any){
         return new userdetail(item.email , item.username , item.passwd , item.team );
    }

}