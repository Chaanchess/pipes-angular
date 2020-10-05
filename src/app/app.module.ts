import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import localEn from '@angular/common/locales/en';

registerLocaleData(localEs);
registerLocaleData(localFr);
registerLocaleData(localEn);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenadorPipe } from './pipes/contrasenador.pipe';

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, ContrasenadorPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
