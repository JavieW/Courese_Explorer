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
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    FinishedComponent,
    InterestedComponent,
    RequiredComponent,
    CourseDetailComponent,
    CourseGridComponent,
    AllCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
