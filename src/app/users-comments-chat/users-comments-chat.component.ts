import {Component, Input, OnInit} from '@angular/core';
import {CommentIfc, UserIfc} from "../interfaces/UserIfc";

@Component({
  selector: 'app-users-comments-chat',
  templateUrl: './users-comments-chat.component.html',
  styleUrls: ['./users-comments-chat.component.scss']
})
export class UsersCommentsChatComponent implements OnInit {

  @Input() displayedData: CommentIfc[];
  @Input() registeredUser: UserIfc;
  isEditMode: boolean;
  selectedComment: CommentIfc;


  constructor() { }

  ngOnInit(): void {
  }

  editComment(comment: CommentIfc) {

  }

  deleteComment(entity: CommentIfc) {
    // const index = this.displayedData.findIndex(comment => comment === entity);
    this.displayedData.splice(0, 1)
  }

  selectComment(comment: CommentIfc) {
    if(comment) {
      this.selectedComment = comment;
    }

  }

}
