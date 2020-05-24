import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregaPersonaComponent } from './agrega-persona/agrega-persona.component';

const routes: Routes = [
  {path: 'persona', component: AgregaPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
