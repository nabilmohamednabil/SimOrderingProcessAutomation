import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service' ;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loggedteam : String ;
  constructor(private userservice:UsersService) { }

  ngOnInit() {
    this.loggedteam  = this.userservice.getCurrentTeam() ;
  }

}
