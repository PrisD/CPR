import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { RadiotherapyComponent } from './screens/radiotherapy-screens/radiotherapy/radiotherapy.component';
import { PsychologyComponent } from './screens/psychology-screens/psychology/psychology.component';
import { DiagnosticImagingComponent } from './screens/diagnostic-imaging/diagnostic-imaging.component';
import { OurCenterComponent } from './screens/the-center/our-center/our-center.component';
import { HDRProstateBrachytherapyComponent } from './screens/radiotherapy-screens/brachytherapy/hdr-prostate-brachytherapy/hdr-prostate-brachytherapy.component';
import { HDRSkinBrachytherapyComponent } from './screens/radiotherapy-screens/brachytherapy/hdr-skin-brachytherapy/hdr-skin-brachytherapy.component';
import { HybridarcVolumetricDynamicTherapyComponent } from './screens/radiotherapy-screens/hybridarc-volumetric-dynamic-therapy/hybridarc-volumetric-dynamic-therapy.component';
import { IGRTExactracBrainlabImageGuidedRadiotherapyComponent } from './screens/radiotherapy-screens/igrt-exactrac-brainlab-image-guided-radiotherapy/igrt-exactrac-brainlab-image-guided-radiotherapy.component';
import { IMRTIntensityModulatedRadiotherapyWithMultileafComponent } from './screens/radiotherapy-screens/imrt-intensity-modulated-radiotherapy-with-multileaf/imrt-intensity-modulated-radiotherapy-with-multileaf.component';
import { InterstitialGynecologicalHDRBrachytherapyComponent } from './screens/radiotherapy-screens/brachytherapy/interstitial-gynecological-hdr-brachytherapy/interstitial-gynecological-hdr-brachytherapy.component';
import { IntracavitaryGynecologicalHDRBrachytherapyComponent } from './screens/radiotherapy-screens/brachytherapy/intracavitary-gynecological-hdr-brachytherapy/intracavitary-gynecological-hdr-brachytherapy.component';
import { R3DThreeDimensionalConformalRadiotherapyComponent } from './screens/radiotherapy-screens/r3-d-three-dimensional-conformal-radiotherapy/r3-d-three-dimensional-conformal-radiotherapy.component';
import { SBRTExactracBodyStereotaxicRadiosurgeryComponent } from './screens/radiotherapy-screens/sbrt-exactrac-body-stereotaxic-radiosurgery/sbrt-exactrac-body-stereotaxic-radiosurgery.component';
import { SRSExactracCranialStereotaxicRadiosurgeryComponent } from './screens/radiotherapy-screens/srs-exactrac-cranial-stereotaxic-radiosurgery/srs-exactrac-cranial-stereotaxic-radiosurgery.component';
import { MindfulnessWorkshopComponent } from './screens/psychology-screens/mindfulness-workshop/mindfulness-workshop.component';
import { PsychoOncologyComponent } from './screens/psychology-screens/psycho-oncology/psycho-oncology.component';
import { WhatIsMindfulnessComponent } from './screens/psychology-screens/what-is-mindfulness/what-is-mindfulness.component';
import { ShiftsOptionsComponent } from './screens/shifts/shifts-options/shifts-options.component';
import { GynecologicalHDRBrachytherapyComponent } from './screens/radiotherapy-screens/brachytherapy/gynecological-hdr-brachytherapy/gynecological-hdr-brachytherapy.component';
import { ShiftsDiagnosisByImagingComponent } from './screens/shifts/shifts-diagnosis-by-imaging/shifts-diagnosis-by-imaging.component';
import { ShiftsPsychologyComponent } from './screens/shifts/shifts-psychology/shifts-psychology.component';
import { ShiftsStartRadiotherapyComponent } from './screens/shifts/shifts-start-radiotherapy/shifts-start-radiotherapy.component';
import { ShiftFormComponent } from './screens/shifts/shift-form/shift-form.component';
import { OurHistoryComponent } from './screens/the-center/our-history/our-history.component';
import { AtentionComponent } from './screens/the-center/atention/atention.component';
import { CertificationsComponent } from './screens/the-center/certifications/certifications.component';
import { TurnFootComponent } from './screens/turn-foot/turn-foot.component';
import { ContactComponent } from './screens/contact/contact.component';
import { NewsComponent } from './screens/news/news.component';
import { EquipmentComponent } from './screens/all-equipment/equipment/equipment.component';
import { SoftwareComponent } from './screens/all-equipment/software/software.component';
import { StaffComponent } from './screens/staff/staff.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'radiotherapy', component: RadiotherapyComponent },
  { path: 'psychology', component: PsychologyComponent },
  { path: 'diagnostic-imaging', component: DiagnosticImagingComponent },
  { path: 'our-center', component: OurCenterComponent },
  { path: 'hdr-prostate-brachytherapy', component: HDRProstateBrachytherapyComponent },
  { path: 'hdr-skin-brachytherapy', component: HDRSkinBrachytherapyComponent },
  { path: 'hybridarc-volumetric-dynamic-therapy', component: HybridarcVolumetricDynamicTherapyComponent },
  { path: 'igrt-exactrac-brainlab-image-guided-radiotherapy', component: IGRTExactracBrainlabImageGuidedRadiotherapyComponent },
  { path: 'imrt-intensity-modulated-radiotherapy-with-multileaf', component: IMRTIntensityModulatedRadiotherapyWithMultileafComponent },
  { path: 'interstitial-gynecological-hdr-brachytherapy', component: InterstitialGynecologicalHDRBrachytherapyComponent },
  { path: 'intracavitary-gynecological-hdr-brachytherapy', component: IntracavitaryGynecologicalHDRBrachytherapyComponent },
  { path: 'r3-d-three-dimensional-conformal-radiotherapy', component: R3DThreeDimensionalConformalRadiotherapyComponent },
  { path: 'sbrt-exactrac-body-stereotaxic-radiosurgery', component: SBRTExactracBodyStereotaxicRadiosurgeryComponent },
  { path: 'srs-exactrac-cranial-stereotaxic-radiosurgery', component: SRSExactracCranialStereotaxicRadiosurgeryComponent },
  { path: 'mindfulness-workshop', component: MindfulnessWorkshopComponent },
  { path: 'psycho-oncology', component: PsychoOncologyComponent },
  { path: 'what-is-mindfulness', component: WhatIsMindfulnessComponent },
  { path: 'shifts-options', component: ShiftsOptionsComponent },
  { path: 'gynecological-hdr-brachytherapy', component: GynecologicalHDRBrachytherapyComponent },
  { path: 'shifts-diagnosis-by-imaging', component: ShiftsDiagnosisByImagingComponent },
  { path: 'shifts-start-radiotherapy', component: ShiftsStartRadiotherapyComponent },
  { path: 'shifts-psychology', component: ShiftsPsychologyComponent },
  { path: 'shift-form', component: ShiftFormComponent },
  { path: 'our-history', component: OurHistoryComponent },
  { path: 'atention', component: AtentionComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'turn-foot', component: TurnFootComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'staff', component: StaffComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
