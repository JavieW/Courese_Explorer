import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  courses: Course[];

  constructor(private cs: CourseService ) { }

  ngOnInit() {
    this.courses = this.cs.getCourses();
  }
}
