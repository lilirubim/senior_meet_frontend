import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  user: User | undefined;
 
  constructor (private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('UserProfileComponent');

    this.activatedRoute.params.subscribe(params=> {
      console.log(params['id']);
      this.http.get<User>("http://localhost:8080/user/"+params['id']).subscribe(u=>{
        this.user=u;
        console.log(this.user);
    });
        
    });
  }
}
