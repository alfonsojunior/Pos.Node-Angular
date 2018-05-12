import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorarioComponent } from './horario/horario.component';
import { DatahoraPipe } from './datahora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HorarioComponent,
    DatahoraPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
