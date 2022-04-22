import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { ParkinglotDetailsComponent } from "./parkinglot-details/parkinglot-details.component";
import { ParkinglotStatusComponent } from "./parkinglot-status/parkinglot-status.component";
import { PlacesSearchAutocompleteComponent } from "./places-search-autocomplete/places-search-autocomplete.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ParkinglotDetailsComponent,
    ParkinglotStatusComponent,
    PlacesSearchAutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
  ],
  providers: [],
  entryComponents: [ParkinglotDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
