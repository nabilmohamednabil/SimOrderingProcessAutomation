import { Adapter } from '../components/home/Adapter';
import { Injectable } from "@angular/core";

export class task {

private name : String ;
private description : String ;
private team : String ;

constructor(){}

setname( name : string){
    this.name = name ;
}

getname(){
    return this.name ;
}

setdescription( description : string){
    this.description = description ;
}

getdescription(){
    return this.description ;
}

setteam( team : string ){
    this.team = team ;
}

getteam(){
    return this.team ;
}

}

@Injectable({
    providedIn : "root"
})
export class taskAdaptor implements Adapter<task> {
    
    temp : task ;


    adapt(item: any): task {
    this.temp = new task();
    this.temp.setname(item.name);
    this.temp.setdescription(item.description);
    this.temp.setteam(item.team);

    return this.temp ;
    }

    
}