import { AppErrorHandler } from "./common/app-error-handler";
import { HttpClientModule } from "@angular/common/http";
import { AuthorsService } from "./authors.service";
import { SummaryPipe } from "./summary.pipe";
import { CoursesService } from "./courses.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, ErrorHandler } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { AuthorsComponent } from "./authors/authors.component";
import { TitleCasePipe } from "./title-case.pipe";
import { PanelComponent } from "./panel/panel.component";
import { LikeComponent } from "./like/like.component";
import { InputFormatDirective } from "./input-format.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { NewCourseFormarrayComponent } from "./new-course-formarray/new-course-formarray.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PostsComponent } from "./posts/posts.component";
import { PostService } from "./services/post.service";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubFollowersService } from "./github-followers.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    AuthorsComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    NewCourseFormarrayComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  // using AppErrorHandler instead of ErrorHandler
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
