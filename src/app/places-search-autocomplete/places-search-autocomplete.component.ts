import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-places-search-autocomplete",
  templateUrl: "./places-search-autocomplete.component.html",
  styleUrls: ["./places-search-autocomplete.component.scss"],
})
export class PlacesSearchAutocompleteComponent implements OnInit {
  options: string[] = ["1", "2", "3"];
  filteredOptions: Observable<string[]>;
  placeControl = new FormControl("");
  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.placeControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
