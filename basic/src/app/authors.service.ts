import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthorsService {
  getAuthors() {
    return new Array("author1", "author2", "author3");
  }
}
