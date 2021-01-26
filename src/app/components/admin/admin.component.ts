import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {simota } from './simota';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public users ;
  simotas : any ;
  imsi2 : number = 602022133670350 ;
  
  constructor(private userservice:UsersService) { }

  ngOnInit() {

   // this.getusers();
    
  }
  getusers(){
  this.userservice.getUser(this.imsi2).subscribe(
    data => {
      // let jsonData: string = data.getJsonString();
      this.simotas = (JSON.stringify(data)); 
    } ,
    error => { console.log('error exists')} ,
  );
}


}
