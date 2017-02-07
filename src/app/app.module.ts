import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { NavComponent } from './components/nav/nav.component';
import { NotificationBlockComponent } from './components/notification-block/notification-block.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { NotificationService } from './services/notification-service/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotificationBlockComponent,
    NotificationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
