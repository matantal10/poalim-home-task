import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentIfc, UserIfc} from "../interfaces/UserIfc";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

    getUsers(){
      return this.http.get<UserIfc[]>('./assets/users.json');
    }

    getComments() {
      return this.http.get<CommentIfc[]>('./assets/comments.json');
    }

}
