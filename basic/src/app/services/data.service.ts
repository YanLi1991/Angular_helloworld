// this is based on post.service.ts, but a generic one, nothing specific on post
import { BadInput } from "./../common/bad-input";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  // createPost(post) {
  //   return this.http.post(this.url, JSON.stringify(post)).pipe(
  //     catchError((error: Response) => {
  //       if (error.status === 400) return throwError(new BadInput(error.json()));

  //       return throwError(new AppError(error));
  //     })
  //   );
  // }
  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(
      this.url + "/" + resource.id,
      JSON.stringify({ isRead: true })
    );
  }

  // deletePost(id) {
  //   return this.http.delete(this.url + "/" + id).pipe(
  //     catchError((error: Response) => {
  //       this.handleError(error);
  //       if (error.status === 404) return throwError(new NotFoundError());

  //       return throwError(new AppError(error));
  //     })
  //   );
  // }
  // using the following

  delete(id) {
    return this.http
      .delete(this.url + "/" + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(new BadInput(error.json()));
    if (error.status === 404) return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
