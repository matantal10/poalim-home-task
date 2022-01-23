import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersCommentsContainerComponent } from './users-comments-container/users-comments-container.component';
import { CommentTimePipe } from './pipes/comment-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersCommentsContainerComponent,
    CommentTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
