import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { MessageCustomComponent } from './message-custom/message-custom.component';

import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageCustomComponent,
  ],
  imports: [
    // Core
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,

    // Primeng
    // InputTextModule,
    // ButtonModule,
    // TableModule,
    // ToolbarModule,
    // TooltipModule,
    // PanelModule,
    // InputTextareaModule,
    // CalendarModule,
    // SelectButtonModule,
    // DropdownModule,
    // InputMaskModule,
    // MessagesModule,
    // MessageModule,

    // Owners
    PessoasModule,
    LancamentosModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
