import { Component, OnInit } from '@angular/core';
// import { TeacherComponent } from "../teacher/teacher.component"

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  roomid = localStorage.getItem("roomId");
  RoomURL = "https://www.thelessonspace.com/space/"+this.roomid

  ngOnInit(): void {
    console.log(localStorage.getItem("roomId"))
  }
}