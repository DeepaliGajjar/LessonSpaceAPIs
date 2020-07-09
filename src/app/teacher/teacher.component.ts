import { Component, OnInit } from '@angular/core';
import {ApisService} from "../apis.service"

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {

  spaceURL;
  roomId;
  constructor(private api:ApisService) { }

  ngOnInit(): void {
  }
  GenerateSession(){
    this.api.postSpace()
    .subscribe((res) => {
      for(var item in res) {
        this.spaceURL = res["client_url"];
        this.roomId = res["room_id"];
        localStorage.setItem('roomId', this.roomId);
        localStorage.setItem('LeadRoom', this.spaceURL);
      }
    })
  }
}