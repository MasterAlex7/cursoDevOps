import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Curso1Component } from './components/curso1/curso1.component';
import { Cuestionario1Component } from './components/cuestionario1/cuestionario1.component';
import { Curso2Component } from './components/curso2/curso2.component';
import { Cuestionario2Component } from './components/cuestionario2/cuestionario2.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'curso1', component: Curso1Component },
  { path: 'cuestionario1', component: Cuestionario1Component },
  { path: 'curso2', component: Curso2Component },
  { path: 'cuestionario2', component: Cuestionario2Component },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
