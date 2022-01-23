import { Component, OnInit } from '@angular/core';
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-users-comments-container',
  templateUrl: './users-comments-container.component.html',
  styleUrls: ['./users-comments-container.component.scss']
})
export class UsersCommentsContainerComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe(users => {
      console.log(users);
    });

    this.http.getComments().subscribe(comments => {
      console.log(comments);
    });

  }

}
