import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CommentIfc, UserIfc} from "../interfaces/UserIfc";

@Component({
  selector: 'app-users-comments-chat',
  templateUrl: './users-comments-chat.component.html',
  styleUrls: ['./users-comments-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersCommentsChatComponent implements OnInit {

  @Input() displayedData: CommentIfc[];
  @Input() registeredUser: UserIfc;
  selectedComment: CommentIfc;
  newComment = '';
  maxId: number;


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.findMaxId();
  }

  findMaxId(): void {

  }

  editComment(comment: CommentIfc) {
    if(comment.isEditing === undefined){
      comment.isEditing = true
    } else {
      comment.isEditing = !comment.isEditing;
    }
  }

  deleteComment(entity: CommentIfc) {
    const index = this.displayedData.findIndex(comment => comment.id === entity.id);

    this.displayedData.splice(index, 1);
  }

  selectComment(comment: CommentIfc) {
    if(this.selectedComment !== comment) {
      this.selectedComment = comment;
    } else {
      this.selectedComment = null;
    }
  }

  submit() {
    let comment: CommentIfc;

    if(this.selectedComment) {
      comment = {
        createdAt: Date().toString(),
        parentCommentId: this.selectedComment.id,
        id: this.maxId,
        ownerId: this.registeredUser.id,
        txt: this.newComment,
        user: this.registeredUser
      };

      this.displayedData.forEach(comment => {
        //TODO: find the selected comment and push new comment to its comments.
      })

    } else {
      comment = {
        createdAt: Date().toString(),
        parentCommentId: null,
        id: this.maxId,
        ownerId: this.registeredUser.id,
        txt: this.newComment,
        user: this.registeredUser
      };

      this.displayedData.push(comment);
    }

    this.newComment = '';
    this.maxId = this.maxId + 1;
  }
}
