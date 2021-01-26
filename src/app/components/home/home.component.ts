import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {FormGroup , FormControl , Validators  }  from '@angular/forms';
import {Observable} from 'rxjs' ;
import { Router } from '@angular/router';
import { userdetail } from './userdetail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userForm:FormGroup ;
  public NotAuthenticated : boolean ; 
  public loggeduser : userdetail ;
  public x : String ;


  constructor(private userservice:UsersService  ,  private router: Router ) { }

  ngOnInit() {
    this.userForm = new FormGroup ({
      username :  new FormControl('' , Validators.required ) ,
      email : new FormControl ( '' , Validators.required ) ,
      password : new FormControl( '' , Validators.required )
    });
  }
  submitregister(){
   console.log("user form value is " + (this.userForm.get('username').value + '')  )  ;
   this.userservice.getuserdetails(this.userForm.value.username).subscribe(
    datax => {
      this.loggeduser = (datax) ;
      console.log("received data from backend is " + datax + ".......and " + this.loggeduser);
      console.log("recieved user details are ..." + this.loggeduser.username  );

      if( (  this.loggeduser.username  == (this.userForm.get('username').value + '') ) && 
          (this.loggeduser.email === (this.userForm.get('email').value + '' ) ) && 
          (this.loggeduser.passwd ===  this.userForm.get('password').value ) ){
        this.router.navigate(['admin']) ;
        this.NotAuthenticated = false   ;
        this.userservice.setCurrentUser(this.userForm.get('username').value + '' ) ;
        this.userservice.setCurrentTeam(this.loggeduser.team);  // we added this line for the team information
      }
      else{
        console.log('hworld');
        this.NotAuthenticated = true ;
      }
      this.userForm.reset(); 
      return true ;
    } 
     ,
     error => {
       this.NotAuthenticated = true ;
       this.userForm.reset(); 
       console.log("error during receiving the data of user details ... " + JSON.stringify(error));
     }
     
    )    
   /*
   if ( JSON.stringify(this.userForm.value.username ) == JSON.stringify("nabil")  )
    {
      console.log('halolaaa');
      this.router.navigate(['admin']);
      this.NotAuthenticated = false ;
    }
    else 
    {
      console.log('hworld');
      this.NotAuthenticated = true ; 
    }
    */

   
  }
}
