import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapasComponent } from './components/mapas/mapas.component';


import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapas/mapa-editar.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapasComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
