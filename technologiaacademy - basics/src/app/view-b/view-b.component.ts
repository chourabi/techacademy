import { Component, OnInit } from '@angular/core';
import { PushNotificationsService } from '../push-notifications.service';

@Component({
  selector: 'app-view-b',
  templateUrl: './view-b.component.html',
  styleUrls: ['./view-b.component.css']
})
export class ViewBComponent implements OnInit {

  count = 0;

  constructor( private push:PushNotificationsService ) { }

  ngOnInit(): void {
    this.count = this.push.getNotificationsCount();
  }


  sendPush(){
    this.push.pushNotification();
  }
}
