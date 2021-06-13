import { Component, OnInit } from '@angular/core';
import { PushNotificationsService } from '../push-notifications.service';

@Component({
  selector: 'app-view-c',
  templateUrl: './view-c.component.html',
  styleUrls: ['./view-c.component.css']
})
export class ViewCComponent implements OnInit {

  count = 0;

  constructor( public push:PushNotificationsService ) { }

  ngOnInit(): void {
    this.count = this.push.getNotificationsCount();
  }


}
