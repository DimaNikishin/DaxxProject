/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component';
import { NotificationBlockComponent } from '../notification-block/notification-block.component';
import { NotificationListComponent } from '../notification-list/notification-list.component';
import { NotificationService } from '../../services/notification-service/notification.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavComponent, NotificationBlockComponent, NotificationListComponent
      ],
      providers: [NotificationService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
