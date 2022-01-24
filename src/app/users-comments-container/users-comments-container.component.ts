import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";
import {CommentIfc, UserIfc} from "../interfaces/UserIfc";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-users-comments-container',
  templateUrl: './users-comments-container.component.html',
  styleUrls: ['./users-comments-container.component.scss']
})
export class UsersCommentsContainerComponent implements OnInit, AfterViewInit, OnDestroy {

   usersList:UserIfc[] = [];
   commentsList:CommentIfc[] = [];

  constructor(private http: HttpService) { }

  ngAfterViewInit(): void {
    }

  ngOnInit(): void {

    forkJoin({
      resOne: this.http.getUsers(),
      resTwo: this.http.getComments()
    }).subscribe(({resOne, resTwo}) => {
        this.usersList = resOne;
        this.commentsList = resTwo

        this.usersList.forEach( user => {
          this.associateCommentsToUsers(user);
        });

      this.commentsList.forEach( comment => {
        this.addCommentsToParentComment(comment);
      });
      console.log(this.commentsList)
      });

  }

  associateCommentsToUsers(user: UserIfc) {
    this.addUserToComment(user);

  }

  addUserToComment(user:UserIfc) {
    if(this.commentsList.length > 0) {
      this.commentsList.forEach(comment => {
        if(comment.ownerId === user.id) {
          comment.user = user;
        }
      });
    }
  }

  addCommentsToParentComment(value: CommentIfc) {
    if(this.commentsList.length > 0) {
      this.commentsList.forEach((comment: CommentIfc) => {
        if (comment.id === value.parentCommentId) {
            comment.comments = [];
            comment.comments.push(value);
        }
      });
    }
  }



  ngOnDestroy(): void {

  }

}
