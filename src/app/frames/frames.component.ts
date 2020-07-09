import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent implements OnInit {

  sessionURL = localStorage.getItem("LeadRoom")
  constructor(private sanitizer : DomSanitizer) { }
  sanitizers = this.sanitizer
  ngOnInit(): void {
    
  }
  frameURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.sessionURL);
  }
}
