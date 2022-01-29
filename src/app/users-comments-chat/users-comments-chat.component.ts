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


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
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
    this.cdr.detectChanges();
  }

  selectComment(comment: CommentIfc) {
    if(comment) {
      this.selectedComment = comment;
    }

  }

}
