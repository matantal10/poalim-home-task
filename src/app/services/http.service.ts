import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

    getUsers(){
      return this.http.get('./assets/users.json');
    }

    getComments() {
      return this.http.get('./assets/comments.json');
    }

}
