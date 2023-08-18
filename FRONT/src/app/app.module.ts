import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ClaseComponent } from './pages/clase/clase.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { EditClassComponent } from './pages/edit-class/edit-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClasesComponent,
    UsuariosComponent,
    ClaseComponent,
    NavbarComponent,
    AddClassComponent,
    EditClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
