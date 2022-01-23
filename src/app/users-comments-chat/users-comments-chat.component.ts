import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-users-comments-chat',
  templateUrl: './users-comments-chat.component.html',
  styleUrls: ['./users-comments-chat.component.scss']
})
export class UsersCommentsChatComponent implements OnInit {

  @Input() displayedData;

  constructor() { }

  ngOnInit(): void {
  }

}
