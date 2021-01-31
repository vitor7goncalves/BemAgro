import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatoService } from './contato.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';
import { ClienteListaComponent } from './contatos-listagem/cliente-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    ClienteListaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ContatoService,ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
