import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {

  courses: Course[];

  constructor(private cs: CourseService ) { }

  ngOnInit() {
    this.courses = this.cs.getCoursesByFlag('finished');
  }
}
