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
        code: 'CSCA08', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: ['F','W'], 
        discription: 'Programming in an object-oriented language such as Python.'
      },
      { 
        code: 'CSCA48', 
        tag: 'finished',
        prerequisite: ['CSCA08'], 
        avalible_terms: ['S','W'], 
        discription: 'Abstract data types and data structures for implementing them. '
      },
      { 
        code: 'CSCA67', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { code: 'MATA31', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { code: 'MATA37', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCB07', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { code: 'CSCB09', 
        tag: 'finished',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCC24', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null,
      },
      { 
        code: 'CSCC09', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCD84', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCC11', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'MATB41', 
        tag: 'interested',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCC43', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCC01', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCC69', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCC73', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCC37', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      },
      { 
        code: 'CSCC63', 
        tag: 'required',
        prerequisite: null, 
        avalible_terms: null, 
        discription: null
      }
    ];
    return {courses};
  }

  /*
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  */
}