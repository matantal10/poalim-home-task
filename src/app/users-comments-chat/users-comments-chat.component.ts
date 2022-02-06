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
    this.maxId = 80;
  }

  editComment(comment: CommentIfc) {
    if(comment.isEditing === undefined){
      comment.isEditing = true
    } else {
      comment.isEditing = !comment.isEditing;
    }
  }

  deleteComment(entity: CommentIfc) {
    let isDeleted = false;

    //when the comment is a root comment - delete from array.
    if(entity.parentCommentId === null) {
      let index = this.displayedData.findIndex(comment => comment.id === entity.id);
      this.displayedData.splice(index, 1);
      return;
    }

    //if comment has parent id it needs to be erased from tree.
    for (let i = 0; isDeleted == false && i < this.displayedData.length; i++) {
      isDeleted = this.deleteFromTree(this.displayedData[i], entity.id, entity.parentCommentId);
      console.log(isDeleted);
    }

  }


  /**
   * search for every comment in array - find if equals to the selected comment (by id).
   * look for the parent in order to delete one of his child.
   * find its index by the comment key(the selected comment id) in order to delete the selected comment
   */
  private deleteFromTree(comment: CommentIfc, commentKey: number, parentCommentId: number): boolean {

    if (comment.id === parentCommentId && parentCommentId !== null && comment.comments.length > 0) {
      let index = comment.comments.findIndex(entity => entity.id === commentKey);
      comment.comments.splice(index, 1);
      return true;

    } else if (comment.comments !== null) { //has children
      let isDeleted = false;
      for (let i = 0; isDeleted == false && comment.comments && i < comment.comments.length; i++) {
        isDeleted = this.deleteFromTree(comment.comments[i], commentKey, parentCommentId);
      }
      return isDeleted;
    }
    return false;
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

      this.selectedComment.comments = [];
      this.selectedComment.comments.push(comment);

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
