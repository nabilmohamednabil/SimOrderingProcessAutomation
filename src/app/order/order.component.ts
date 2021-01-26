import { Component, OnInit, Injectable } from '@angular/core';
import {FormBuilder , FormGroup , FormControl , Validators , FormArray } from '@angular/forms';
import {order} from './order' ;
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
 

  constructor( ) { }
  ngOnInit() {
  }

}
