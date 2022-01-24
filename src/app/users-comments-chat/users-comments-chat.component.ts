import {Component, Input, OnInit} from '@angular/core';
import {CommentIfc} from "../interfaces/UserIfc";

@Component({
  selector: 'app-users-comments-chat',
  templateUrl: './users-comments-chat.component.html',
  styleUrls: ['./users-comments-chat.component.scss']
})
export class UsersCommentsChatComponent implements OnInit {

  @Input() displayedData: CommentIfc[];

  isEditMode: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  editComment() {

  }

  deleteComment(entity: CommentIfc) {

  }
}
