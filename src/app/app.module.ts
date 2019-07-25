import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinishedComponent } from './finished/finished.component';
import { InterestedComponent } from './interested/interested.component';
import { RequiredComponent } from './required/required.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    FinishedComponent,
    InterestedComponent,
    RequiredComponent,
    CourseDetailComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
