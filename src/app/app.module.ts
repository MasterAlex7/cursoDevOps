import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Curso1Component } from './components/curso1/curso1.component';
import { Cuestionario1Component } from './components/cuestionario1/cuestionario1.component';
import { FormsModule } from '@angular/forms';
import { Curso2Component } from './components/curso2/curso2.component';
import { Cuestionario2Component } from './components/cuestionario2/cuestionario2.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Curso1Component,
    Cuestionario1Component,
    Curso2Component,
    Cuestionario2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
