import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      { 
        id:0,
        code: 'CSCA08', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: ['F','W'], 
        discription: 'Programming in an object-oriented language such as Python.'
      },
      { 
        id:1,
        code: 'CSCA48', 
        tag: 'finished',
        prerequisite: ['CSCA08'], 
        avalible_terms: ['S','W'], 
        discription: 'Abstract data types and data structures for implementing them. '
      },
      { 
        id:2,
        code: 'CSCA67', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:3,
        code: 'MATA31', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:4,
        code: 'MATA37', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:5,
        code: 'CSCB07', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:6,
        code: 'CSCB09', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:7,
        code: 'CSCC24', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null,
      },
      { 
        id:8,
        code: 'CSCC09', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:9,
        code: 'CSCD84', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:10,
        code: 'CSCC11', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:11,
        code: 'MATB41', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:12,
        code: 'CSCC43', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:13,
        code: 'CSCC01', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:14,
        code: 'CSCC69', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:15,
        code: 'CSCC73', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:16,
        code: 'CSCC37', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        id:17,
        code: 'CSCC63', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      }
    ];
    return {courses};
  }

  
  // Overrides the genId method to ensure that a course always has an id.
  // If the courses array is empty,
  // the method below returns the initial number (11).
  // if the courses array is not empty, the method below returns the highest
  // course id + 1.
  genId(courses: Course[]): number {
    return courses.length > 0 ? Math.max(...courses.map(course => course.id)) + 1 : 11;
  }
}