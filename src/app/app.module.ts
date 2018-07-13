import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
    	apiKey: "AIzaSyDQ0G4qkGpSsjEdBVgCFuF33p34wfjDuOo"
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
