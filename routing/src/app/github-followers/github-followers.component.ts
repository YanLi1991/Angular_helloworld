import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { GithubFollowersService } from "./../services/github-followers.service";
import { Component, OnInit } from "@angular/core";
// combining multiple observables
import "rxjs/add/observable/combineLatest"; // for combining different observables
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit() {
    // combining two observables
    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .switchMap(combined => {
        let id = combined[0].get("id");
        let page = combined[1].get("page");
        // this.service.getAll({ id: id, page: page });

        return this.service.getAll();
      })
      .subscribe(followers => (this.followers = followers));

    // this.route.paramMap.subscribe(params => {});
    // this.route.queryParamMap.subscribe(params => {});

    // // observable is a stream of async data
    // this.service.getAll().subscribe(followers => (this.followers = followers));
  }
}
