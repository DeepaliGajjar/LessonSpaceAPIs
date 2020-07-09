import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  API_KEY = "Organisation ef7979f7-96a6-4695-88da-6f29c86bb0c9"
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.API_KEY,
    
  });
  options = { headers: this.headers };
  
  userdata = {
    "id":"English Session",
    "user":{"name":"Rachel"},
    "timeouts": {
      "not_after": "2020-07-09T06:20:27.615Z",
      "not_before": "2020-07-09T06:20:27.615Z"
    }
  }
  constructor(private http:HttpClient) { }
  postSpace(){
    return this.http.post("https://api.thelessonspace.com/v2/spaces/launch/",this.userdata,this.options);
  }
}
