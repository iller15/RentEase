import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SesionRegistroComponent } from './sesion-registro/sesion-registro.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { LandingComponent } from './landing/landing.component';
import { CalificacionPropietarioComponent } from './calificacion-propietario/calificacion-propietario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SesionRegistroComponent,
    MensajesComponent,
    LandingComponent,
    CalificacionPropietarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

