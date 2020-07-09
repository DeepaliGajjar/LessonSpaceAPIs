import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-frameforstudent',
  templateUrl: './frameforstudent.component.html',
  styleUrls: ['./frameforstudent.component.css']
})
export class FrameforstudentComponent implements OnInit {

  sessionId = localStorage.getItem("roomId")
  sessionURL = "https://www.thelessonspace.com/space/"+this.sessionId
  constructor(private sanitizer : DomSanitizer) { }
  sanitizers = this.sanitizer
  
  ngOnInit(): void {
    console.log(this.sessionId)
  }
  frameURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.sessionURL);
  }
}
