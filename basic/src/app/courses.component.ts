// import the decorator
import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

// 1. create component
// 2. register to a module to app.module.ts
// 3. app.component.html can use <courses>
// 4. ng g c course, generate course component
// 5. ng g s email, generate email service
// 6. npm install bootstrap --save, add bootstrap and update styles.css

// component decorator
@Component({
  selector: "courses", // <courses> | <div id="courses"> "#courses" | <div class="courses"> ".courses"
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>

    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />

    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>

    <div (click)="onDivClicked()">
      <button
        class="btn btn-primary"
        [style.backgroundColor]="isActive ? 'blue' : 'white'"
        [class.active]="isActive"
        (click)="onSave($event)"
      >
        Save
      </button>
    </div>
    <input (keyup.enter)="onKeyUp($event)" />
    <input #email (keyup.enter)="onKeyUp2(email.value)" />
    <input
      [value]="emailIn"
      (keyup.enter)="emailIn = $event.target.value; onKeyUp3()"
    />
    <input [(ngModel)]="emailIn2" (keyup.enter)="onKeyUp4()" />
    <div>
      {{ course.title | uppercase }} <br />
      {{ course.students }} <br />
      {{ course.rating | number: "1.2-2" }} <br />
      {{ course.price | currency: "AUD":ture:"3.2-2" }} <br />
      {{ course.releaseDate | date: "shortDate" }}
    </div>
    {{ text | summary: 10 }}
  `
  // {{ }} to pass variables, data binding
  // * stands for directive
  // property binding using []
  // [attr.colspan] : using colspan attribute from td html tag
  // [class.active]="isActive" class binding
  // [style.backgroundColor] style binding
  // (click) event binding
  // (keyup.enter) event filtering, triggered for enter button press
  // #email, pass the value
  // [value]="email" double binding, component -> view and view -> component
  // ngModel the same as previous, but requires formsmodule in app.module.ts
  // course.title | uppercase, uppercase pipe
  // text | summary: summary is a customized pipe from summary.pipe.ts
})
export class CoursesComponent {
  title = "List of courses";
  courses: any;
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  isActive = true;
  email = "1@1.com";
  emailIn = "12@12.com";
  emailIn2 = "123@123.com";
  course = {
    title: "the complete course",
    rating: 4.97,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  text =
    "here is what i wanna say, you know, this text message is waiting to be summaried using the customized pipe, so I'm gonna try to type as many words as possible";

  constructor(service: CoursesService) {
    // dependency registered from providers in app.module.ts
    this.courses = service.getCourses();
    // this.courses = ["course1", "course2", "course3"];
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) console.log("Enter was pressed.");
  }

  onKeyUp2(email) {
    console.log(email);
  }

  onKeyUp3() {
    console.log(this.emailIn);
  }

  onKeyUp4() {
    console.log(this.emailIn2);
  }

  onDivClicked() {
    console.log("Div was clicked");
  }

  onSave($event) {
    $event.stopPropagation(); // stop event bubbling up
    console.log("Button was clicked", $event);
  }
  // logic for calling an HTTP service
}
