import { BadInput } from "./../common/bad-input";
import { AppError } from "./../common/app-error";
import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { NotFoundError } from "../common/not-found-error";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private service: PostService) {
    // using subscribe from observables, when results are ready, we will be notified
    // observables are lazy, only happens after subscribe, promises are eager
    // http.get(this.url).subscribe(response => {
    //   this.posts = response;
    // });
  }
  // life cycle hook
  ngOnInit() {
    // this.service.getPosts().subscribe(
    this.service.getAll().subscribe(
      (response: any[]) => {
        this.posts = response;
      },
      error => {
        alert("An unexpected error occurred.");
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    // optimistic, update before changes to server
    this.posts.splice(0, 0, post);
    input.value = "";

    // this.service.createPost(post).subscribe(
    this.service.create(post).subscribe(
      response => {
        post.id = response.id;
        // pessimistic update
        // this.posts.splice(0, 0, post);
        console.log(response);
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else throw error;
        // moved the below content to the global error handler
        // {
        //   alert("An unexpected error occurred.");
        //   console.log(error);
        // }
      }
    );
  }

  updatePost(post) {
    // patch only modify spefic fields, slightly improves performance
    // this.service.updatePost(post).subscribe(
    this.service.update(post).subscribe(
      response => {
        console.log(response);
      }
      // ,
      // error => {
      //   alert("An unexpected error occurred.");
      //   console.log(error);
      // }
    );
  }

  deletePost(post) {
    // optimistic update
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    // this.service.deletePost(post.id).subscribe(
    this.service.delete(post.id).subscribe(
      response => {},
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError) {
          // handle expected errors
          // this.form.setErrors(error.json());
        } else throw error;
        // {
        //   // handle unexpected erros
        //   alert("An unexpected error occurred.");
        //   console.log(error);
        // }
      }
    );
  }
}
