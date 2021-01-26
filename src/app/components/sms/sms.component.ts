import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  res : any ;
  constructor(private userservice:UsersService) { }

  ngOnInit() {
  }

  sendsms()
  {
    console.log("sms send function was called ");
    this.userservice.sms(1).subscribe(
      data => {
        this.res = (JSON.stringify(data)); 
        console.log('the response from -- ' + this.res );
      } ,
      error => { console.log('error exists ....' + JSON.stringify(error) ) ; } 
    ); 
  }


}
