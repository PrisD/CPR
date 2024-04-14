import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes aquí
import { HomeComponent } from './common/home/home.component';
import { RadiotherapyComponent } from './screens/radiotherapy/radiotherapy.component';
import { PsychologyComponent } from './screens/psychology/psychology.component';
import { DiagnosticImagingComponent } from './screens/diagnostic-imaging/diagnostic-imaging.component';
import { OurCenterComponent } from './screens/our-center/our-center.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'radiotherapy', component: RadiotherapyComponent},
  { path: 'psychology', component: PsychologyComponent},
  { path: 'diagnostic-imaging', component: DiagnosticImagingComponent},
  { path: 'our-center', component: OurCenterComponent}
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
