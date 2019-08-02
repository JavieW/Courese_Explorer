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
  coursesUrl = "api/courses";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  updateSelectedCourse(course : Course){
    this.selectedCourse = course;
  }

  getSelectedCourse(){
    return this.selectedCourse;
  }

  /** GET courses from the server */
  getCourses (): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  /** GET courses by tag. Will [] if tag not found */
  getCoursesByTag(tag: String):Observable<Course[]> {
    return this.http.get<Course[]>(`${this.coursesUrl}?tag=${tag}`);
  }

  /** PUT: update the hero on the server */
  updateCourse(course: Course): Observable<any> {
    return this.http.put(this.coursesUrl, course, this.httpOptions)
  }
}
