import { Component, OnInit } from '@angular/core';
import { PushNotificationsService } from '../push-notifications.service';

@Component({
  selector: 'app-view-a',
  templateUrl: './view-a.component.html',
  styleUrls: ['./view-a.component.css']
})
export class ViewAComponent implements OnInit {

  count = 0;

  constructor( public push:PushNotificationsService ) { }

  ngOnInit(): void {
    this.count = this.push.getNotificationsCount();
  }

}
