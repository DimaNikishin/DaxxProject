/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotificationBlockComponent } from './notification-block.component';
import { NotificationListComponent } from '../notification-list/notification-list.component';
import { NotificationService } from '../../services/notification-service/notification.service';

describe('NotificationBlockComponent', () => {
  let component: NotificationBlockComponent;
  let fixture: ComponentFixture<NotificationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBlockComponent, NotificationListComponent ],
      providers: [NotificationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
