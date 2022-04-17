import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { ParkinglotDetailsComponent } from "./parkinglot-details/parkinglot-details.component";
import { ParkinglotStatusComponent } from "./parkinglot-status/parkinglot-status.component";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ParkinglotDetailsComponent,
    ParkinglotStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  entryComponents: [ParkinglotDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
