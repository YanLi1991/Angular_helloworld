import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"],
  encapsulation: ViewEncapsulation.Emulated // shadow DOM
  // inputs: ["isFavorite"]
})
// inputs: components metadata
export class FavoriteComponent implements OnInit {
  // set input properties
  @Input("is-favorite") isSelected: boolean; // is-favorite is an alias
  @Output("change") change = new EventEmitter(); // 'change' is an alias

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
