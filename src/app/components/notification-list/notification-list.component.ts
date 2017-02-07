import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

import { Notification } from '../../classes/Notification';

@Component({
    selector: 'app-notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnChanges{
    @Input() notifications: Notification[];
    @Output() onHover = new EventEmitter<boolean>();
    @Output() onClickCheckMark = new EventEmitter<number>();

    displayedNotifications: Notification[] = [];
    isHovered: boolean = false;

    constructor() { }

    ngOnChanges(changes) {
        if(this.displayedNotifications.length < 3 && changes.notifications.currentValue[this.displayedNotifications.length]){
            this.displayedNotifications.push(changes.notifications.currentValue[this.displayedNotifications.length])
        }
    }

    hover(index:number){
        this.displayedNotifications[index].active = true;
        this.isHovered = true;
        this.onHover.emit(true);
    }

    blur(index:number){
        this.displayedNotifications[index].active = false;
        this.isHovered = false;
        this.onHover.emit(false);
    }

    clickCheckMark(index:number){
        let notificationId = this.displayedNotifications[index].id;
        this.displayedNotifications.splice(index,1);
        this.isHovered = false;
        this.onHover.emit(false);
        this.onClickCheckMark.emit(notificationId);
    }

}
