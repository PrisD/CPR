import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes aquí
import { HomeComponent } from './home/home.component';
import { RadiotherapyComponent } from './radiotherapy/radiotherapy.component';
import { PsychologyComponent } from './psychology/psychology.component';
import { DiagnosticImagingComponent } from './diagnostic-imaging/diagnostic-imaging.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'radiotherapy', component: RadiotherapyComponent},
  { path: 'psychology', component: PsychologyComponent},
  { path: 'diagnostic-imaging', component: DiagnosticImagingComponent}
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
