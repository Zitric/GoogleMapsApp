import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';

// Servicies
import { MapsService } from './provider/maps.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKfTlyg7XrQNY30g0I9Py8vN0-9FLLbCU'
    })
  ],
  providers: [
    MapsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
