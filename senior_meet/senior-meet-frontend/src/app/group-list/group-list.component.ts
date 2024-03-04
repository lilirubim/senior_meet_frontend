import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css'
})
export class GroupListComponent implements OnInit {

  groups: Group[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    console.log('GroupListComponent');
    
    this.http.get<Group[]>("http://localhost:808/group").subscribe(g => 
    this.groups = g);
  }

}
