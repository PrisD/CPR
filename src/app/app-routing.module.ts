import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes aquí
import { HomeComponent } from './home/home.component';
import { RadiotherapyComponent } from './screens/radiotherapy/radiotherapy/radiotherapy.component';
import { PsychologyComponent } from './screens/radiotherapy/psychology/psychology.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'radiotherapy', component: RadiotherapyComponent},
  { path: 'psychology', component: PsychologyComponent}
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
