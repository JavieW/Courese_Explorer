import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  @Input() courses: Course[];

  constructor(private cs: CourseService) { }

  ngOnInit() {
  }

  update(course : Course) {
    this.cs.updateSelectedCourse(course);
  }
}