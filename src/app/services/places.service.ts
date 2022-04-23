import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { tap, map, mergeMap, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Place } from "../interfaces/places";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  constructor(private http: HttpClient) {}

  getPlaces(value: string) {
    return this.http.get<Place[]>(
      `${environment.mapServerApiUrl}/places/search_places?query=${value}`
    );
  }
}
