import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes aquí
import { HomeComponent } from './home/home.component';
import { RadiotherapyComponent } from './radiotherapy/radiotherapy.component';
import { PsychologyComponent } from './psychology/psychology.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'radiotherapy', component: RadiotherapyComponent},
  { path: 'psychology', component: PsychologyComponent}
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
