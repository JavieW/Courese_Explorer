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

  constructor(private cs: CourseService ) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.cs.getCourses()
    .subscribe(courses => this.courses = courses)
  }

  add(): void {
    var code =  prompt("Please enter a course code");
    if (code != null && code != '') {
      this.cs.addCourse({ code } as Course)
      .subscribe(course => {
        this.courses.push(course);
      });
      console.log(this.courses)
    }
  }
}
