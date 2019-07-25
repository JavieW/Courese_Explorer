import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {

  courses;

  constructor(private cs: CourseService ) { }

  ngOnInit() {
    this.courses = this.cs.getFinishedCourse();
  }
}
