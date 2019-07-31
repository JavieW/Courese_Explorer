import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  selectedCourse : Course;
  all: Course[];

  constructor(
    private http: HttpClient) { 
      http.get('api/courses').subscribe(courses => this.all = courses as Course[]);
    }

  updateSelectedCourse(course : Course){
    this.selectedCourse = course;
  }

  /** GET courses from the server */
  getCourses (): Course[] {
    return this.all;
  }

  /** GET courses by flag. Will [] if flag not found */
  getCoursesByFlag(flag: String):Course[] {
    return this.all.filter(function(course) {
      return course.flag == flag;
    });
  }

  getSelectedCourse(){
    return this.selectedCourse;
  }
}
