import { Injectable } from '@angular/core';
import { Course } from './course';
import { Finished } from './mock-finished';
import { Required } from './mock-required';
import { Interested } from './mock-interested';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  selectedCourse : Course;

  updateSelectedCourse(course : Course){
    this.selectedCourse = course;
  }

  getSelectedCourse(){
    return this.selectedCourse;
  }

  getFinishedCourse() {
    return Finished;
  }

  getRequiredCourse() {
    return Required;
  }

  getInterestedCourse() {
    return Interested;
  }
}
