import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
  styleUrls: ['./required.component.css']
})
export class RequiredComponent implements OnInit {

  courses;

  constructor(private cs: CourseService) { }

  ngOnInit() {
    this.courses = this.cs.getRequiredCourse();
  }
}
