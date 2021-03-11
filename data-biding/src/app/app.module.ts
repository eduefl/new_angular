import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { ClassBidenComponent } from './class-biden/class-biden.component';
import { EventBidenComponent } from './event-biden/event-biden.component';
import { TwoWayDataBaidenComponent } from './two-way-data-baiden/two-way-data-baiden.component';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from './meu-form/meu-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    ClassBidenComponent,
    EventBidenComponent,
    TwoWayDataBaidenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
