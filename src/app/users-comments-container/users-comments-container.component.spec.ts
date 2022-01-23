import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCommentsContainerComponent } from './users-comments-container.component';

describe('UsersCommentsContainerComponent', () => {
  let component: UsersCommentsContainerComponent;
  let fixture: ComponentFixture<UsersCommentsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCommentsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCommentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
