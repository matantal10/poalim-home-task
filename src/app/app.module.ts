import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersCommentsContainerComponent } from './users-comments-container/users-comments-container.component';
import { CommentTimePipe } from './pipes/comment-time.pipe';
import { UsersCommentsChatComponent } from './users-comments-chat/users-comments-chat.component';
import {FormsModule} from "@angular/forms";
import {LocalStorageManager} from "./util/local-storage-manager";

@NgModule({
  declarations: [
    AppComponent,
    UsersCommentsContainerComponent,
    CommentTimePipe,
    UsersCommentsChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LocalStorageManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
