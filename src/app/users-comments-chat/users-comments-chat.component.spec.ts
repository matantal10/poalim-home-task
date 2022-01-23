import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCommentsChatComponent } from './users-comments-chat.component';

describe('UsersCommentsChatComponent', () => {
  let component: UsersCommentsChatComponent;
  let fixture: ComponentFixture<UsersCommentsChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCommentsChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCommentsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
