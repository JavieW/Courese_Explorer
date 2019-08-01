import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.css']
})
export class InterestedComponent implements OnInit {

  courses;

  constructor(private cs: CourseService) { }

  ngOnInit() {
    this.getCourses()
  }

  getCourses(): void {
    this.cs.getCoursesByFlag('interested')
    .subscribe(courses => this.courses = courses)
  }

}