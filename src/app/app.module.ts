import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AppRoutingModule } from './app.routing';


@NgModule({
   imports:[
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
    	apiKey: 'AIzaSyDQ0G4qkGpSsjEdBVgCFuF33p34wfjDuOo'
    }),
    AgmJsMarkerClustererModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
