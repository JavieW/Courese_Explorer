import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  selectedCourse : Course;

  constructor(private http: HttpClient) {}

  updateSelectedCourse(course : Course){
    this.selectedCourse = course;
  }

  /** GET courses from the server */
  getCourses (): Observable<Course[]> {
    return this.http.get<Course[]>('api/courses');
  }

  /** GET courses by tag. Will [] if tag not found */
  getCoursesByTag(tag: String):Observable<Course[]> {
    return this.http.get<Course[]>(`api/courses?tag=${tag}`);
  }

  getSelectedCourse(){
    return this.selectedCourse;
  }
}
