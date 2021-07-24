import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AreaContactoService } from './services/areaContacto/area-contacto.service';
import { ContactoService } from './services/contacto/contacto.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ContactoService,
    AreaContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
