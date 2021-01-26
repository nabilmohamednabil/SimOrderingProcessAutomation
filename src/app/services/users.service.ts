import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http' ;
import {Observable} from 'rxjs' ;
import { simota } from '../components/admin/simota';
import { map } from 'rxjs/operators';
import { userdetail } from '../components/home/userdetail';
import { userdetailadaptor } from '../components/home/userdetail' ;

const httpoptions = {headers:new HttpHeaders({'content-type':'application/json'})};
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  products : simota ;
  private  currentuser : String ; 
  private  team        : String ;
  
  constructor( private http:HttpClient  , private adaptor : userdetailadaptor ) { }

  getUsers(): Observable<string>{
   // return this.http.get('/server/api/users');
   return this.http.get<string>('http://172.28.38.15:8080/workflow/api/show');
  }
  getUser(id:number) : Observable<any>{
    return this.http.get<any>('http://172.28.38.15:8080/workflow/api/inputs/'+id);
   //  .pipe(map(response => response._embedded.products)) 
  }
  createUser(user){
    let body = JSON.stringify(user);
    return this.http.post('http://172.28.38.15:8080/workflow/api/users' , body , httpoptions );
  }
  sms(option : number):Observable<any>{
    console.log("sms service message was called ");
    return  this.http.get<any>('http://172.28.38.15:8080/workflow/notifications/sms/' + option) ;
  }
  getuserdetails (name : String) : Observable<userdetail>{
    console.log("Login user name is ..." + name );
    return this.http.get('http://172.28.38.15:8080/workflow/api/gettingusers/' + name ).pipe(
      map(  (da:any) =>   this.adaptor.adapt(da)  )
    );
  }

  setCurrentUser( naming : String ){
    this.currentuser = naming ;
  }
  getCurrentUser(){
   return this.currentuser ; 
  }

  setCurrentTeam(team : String){
    this.team = team ; 
  }

  getCurrentTeam(){
    return this.team ;
  }


}

interface GetResponseProducts {
  _embedded: {
    products: simota;
  }
}