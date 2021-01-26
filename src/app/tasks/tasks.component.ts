import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  name : string ;
  constructor( private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
