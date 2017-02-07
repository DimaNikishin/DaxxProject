import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Notification } from '../../classes/Notification';

@Injectable()
export class NotificationService {

    constructor() { }

    getNotifications() : Observable<Notification>{
        return Observable
            .interval(15000)
            .switchMap(id => { return Observable.of<Notification>({id: id, title: 'Title of notification', type: 'TYPE OF NOTIFICATION', active:false}); });
    }

}