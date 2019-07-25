import { Course } from './course';

export const Finished: Course[] = [
  { 
    code: 'CSCA08', 
    pre_request: null, 
    avalible_terms: ['F','W'], 
    discription: 'Programming in an object-oriented language such as Python.'
  },
  { 
    code: 'CSCA48', 
    pre_request: ['CSCA08'], 
    avalible_terms: ['S','W'], 
    discription: 'Abstract data types and data structures for implementing them. '
  },
  { 
    code: 'CSCA67', 
    pre_request: null, 
    avalible_terms: null, 
    discription: null
  },
  { code: 'MATA31', 
    pre_request: null, 
    avalible_terms: null, 
    discription: null
  },
  { code: 'MATA37', 
    pre_request: null, 
    avalible_terms: null, 
    discription: null
  },
  { 
    code: 'CSCB07', 
    pre_request: null, 
    avalible_terms: null, 
    discription: null
  },
  { code: 'CSCB09', 
    pre_request: null, 
    avalible_terms: null, 
    discription: null
  }
];