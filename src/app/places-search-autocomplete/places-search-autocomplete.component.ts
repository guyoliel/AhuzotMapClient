import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EMPTY, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from "rxjs/operators";
import { Place } from "../interfaces/places";
import { PlacesService } from "../services/places.service";

@Component({
	selector: "app-places-search-autocomplete",
	templateUrl: "./places-search-autocomplete.component.html",
	styleUrls: ["./places-search-autocomplete.component.scss"],
})
export class PlacesSearchAutocompleteComponent implements OnInit {
	filteredOptions: Observable<Place[]>;
	placeControl = new FormControl("");
	constructor(private placesService: PlacesService) {}

	ngOnInit(): void {
		this.filteredOptions = this.placeControl.valueChanges.pipe(
			startWith(""),
			debounceTime(400),
			distinctUntilChanged(),
			map((value) => (typeof value === "string" ? value : value.display_name)),
			switchMap((value) => (value ? this.placesService.getPlaces(value) : EMPTY))
		);
	}

	getDisplayOption(value: Place): string {
		return value.displayName;
	}
}
