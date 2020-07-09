import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {HomeComponent} from "./home/home.component";
import {FramesComponent} from "./frames/frames.component";
import {FrameforstudentComponent} from "./frameforstudent/frameforstudent.component";


const routes: Routes = [
  {
    path:"student",
    component:StudentComponent
  },
  {
    path:"teacher",
    component:TeacherComponent
  },
  {
    path:"frame",
    component:FramesComponent
  },
  {
    path:"session",
    component:FrameforstudentComponent
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
