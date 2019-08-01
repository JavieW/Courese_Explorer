import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishedComponent } from './finished/finished.component';
import { InterestedComponent } from './interested/interested.component';
import { RequiredComponent } from './required/required.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';

const routes: Routes = [
  { path: 'all', component: AllCoursesComponent},
  { path: 'finished', component: FinishedComponent},
  { path: 'interested', component: InterestedComponent},
  { path: 'required', component: RequiredComponent},
  { path: 'detail/:code', component: CourseDetailComponent},
  { path: '',   redirectTo: '/all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
