import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { ClassBidenComponent } from './class-biden/class-biden.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    ClassBidenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }