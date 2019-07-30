import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;

  constructor(private cs: CourseService,
              private location: Location) { }

  ngOnInit() {
    this.course = this.cs.getSelectedCourse();
  }

  goBack(): void {
    this.location.back();
  }
}