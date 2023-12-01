import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Curso1Component } from './components/curso1/curso1.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'curso1', component: Curso1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
