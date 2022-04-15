import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { ParkinglotDetailsComponent } from "./parkinglot-details/parkinglot-details.component";

@NgModule({
  declarations: [AppComponent, MapComponent, ParkinglotDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [ParkinglotDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
