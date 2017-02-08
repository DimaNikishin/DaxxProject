/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement,HTMLElement } from '@angular/core';

import { NotificationListComponent } from './notification-list.component';

describe('NotificationListComponent', () => {
  let component: NotificationListComponent;
  let fixture: ComponentFixture<NotificationListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationListComponent);
    component = fixture.componentInstance;
    component.notifications = [];
    component.displayedNotifications = [{id: 0, title: 'Title of notification', type: 'TYPE OF NOTIFICATION', active:false},{id: 1, title: 'Title of notification', type: 'TYPE OF NOTIFICATION', active:false}]
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('.notification'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change active prop on hover', () => {
    expect(component.displayedNotifications[0].active).toBe(false);
    expect(component.isHovered).toBe(false);
    component.hover(0);
    expect(component.displayedNotifications[0].active).toBe(true);
    expect(component.isHovered).toBe(true);
  });

  it('should delete notification after click on checkmark', () => {
    expect(component.displayedNotifications.length).toBe(2);
    expect(de.length).toBe(2);
    expect(component.displayedNotifications[0].id).toBe(0);
    expect(component.isHovered).toBe(false);

    component.clickCheckMark(0);
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('.notification'));

    expect(component.displayedNotifications.length).toBe(1);
    expect(de.length).toBe(1);
    expect(component.displayedNotifications[0].id).toBe(1);
    expect(component.isHovered).toBe(false);
  });

});
