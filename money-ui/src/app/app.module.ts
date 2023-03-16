import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Core Angular
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // Owner Core
    CoreModule,

    // Owners
    PessoasModule,
    LancamentosModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
