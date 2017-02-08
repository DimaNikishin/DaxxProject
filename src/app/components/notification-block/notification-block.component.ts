import { Component, OnInit, HostListener } from '@angular/core';

import { NotificationService } from '../../services/notification-service/notification.service';
import { Notification } from '../../classes/Notification';

@Component({
  selector: 'app-notification-block',
  templateUrl: './notification-block.component.html',
  styleUrls: ['./notification-block.component.scss'],
  host: {'(document:click)': 'onDocumentClick($event)'}
})
export class NotificationBlockComponent implements OnInit{

  totalNotifications: number = 0;
  notifications: Notification[] = [];
  errorsAreDisplayed:boolean = false;
  isHovered: boolean = false;
  imgSource: string = '/assets/report-problem-triangle.svg';
  fadeIAnimationState:string = 'none';

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(notification =>{
      this.notifications = [...this.notifications,notification];
      this.totalNotifications = this.notifications.length;
    });
  }

  onDocumentClick(event){
    if(event.target.localName === 'html'){
      this.errorsAreDisplayed = false;
    }

  }

  toggleErrors(){
    this.errorsAreDisplayed = !this.errorsAreDisplayed;
    this.fadeIAnimationState = this.errorsAreDisplayed ? 'in' : 'none';
  }

  stopPropagationEvent(event){
    event.stopPropagation()
  }

  onHover(isHover:boolean){
    if(isHover){
      this.imgSource = '/assets/report-problem-triangle-green.svg';
    }else{
      this.imgSource = '/assets/report-problem-triangle.svg';
    }
  }

  onClickCheckMark(id:number){

    this.notifications = this.notifications.filter((notification)=>{
      return notification.id !=id;
    });
    this.notifications = [...this.notifications];
    this.totalNotifications = this.notifications.length;
  }

}
