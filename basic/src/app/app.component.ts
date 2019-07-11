import { FavoriteChangedEventArgs } from "./favorite/favorite.component";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "hello-world";
  post = {
    title: "Title",
    isFavorite: false
  };

  tweet = {
    body: "...",
    likesCount: 10,
    isLiked: true
  };

  // courses = [1, 2];
  viewMode = "somethingElse";
  courses = [
    // { id: 1, name: "course1" },
    // { id: 2, name: "course2" },
    // { id: 3, name: "course3" }
  ];

  loadCourses() {
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" },
      { id: 4, name: "course4" },
      { id: 5, name: "course5" },
      { id: 6, name: "course6" }
    ];
  }

  task = {
    title: "Review applications",
    assignee: {
      name: "John Smith"
    }
  };

  // angular will stop rerendering
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onAdd() {
    this.courses.push({ id: 4, name: "course4" });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }
}
