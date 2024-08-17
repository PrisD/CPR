import { OurCenterComponent } from './screens/the-center/our-center/our-center.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MiniCardComponent } from './common/home/mini-card/mini-card.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TitleCardComponent } from './title-card/title-card.component';
import { PsychologyComponent } from './screens/psychology-screens/psychology/psychology.component';
import { DiagnosticImagingComponent } from './screens/diagnostic-imaging/diagnostic-imaging.component';
import { RadiotherapyComponent } from './screens/radiotherapy-screens/radiotherapy/radiotherapy.component';
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
import { FormsModule } from '@angular/forms';
import { OurHistoryComponent } from './screens/the-center/our-history/our-history.component';
import { AtentionComponent } from './screens/the-center/atention/atention.component';
import { CertificationsComponent } from './screens/the-center/certifications/certifications.component';
import { TurnFootComponent } from './screens/turn-foot/turn-foot.component';
import { AddressService } from './services/address.service';
import { ContactComponent } from './screens/contact/contact.component';
import { LeafletMapComponent } from './screens/leaflet-map/leaflet-map.component';
import { NewsHomeComponent } from "./common/home/news-home/news-home.component";
import { BackgroundComponent } from "./common/home/background/background.component";
import { NewsComponent } from './screens/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LeafletMapComponent,
    FooterComponent,
    MiniCardComponent,
    ContactComponent,
    TitleCardComponent,
    PsychologyComponent,
    DiagnosticImagingComponent,
    RadiotherapyComponent,
    OurCenterComponent,
    HDRProstateBrachytherapyComponent,
    HDRSkinBrachytherapyComponent,
    InterstitialGynecologicalHDRBrachytherapyComponent,
    IntracavitaryGynecologicalHDRBrachytherapyComponent,
    R3DThreeDimensionalConformalRadiotherapyComponent,
    SBRTExactracBodyStereotaxicRadiosurgeryComponent,
    HybridarcVolumetricDynamicTherapyComponent,
    IGRTExactracBrainlabImageGuidedRadiotherapyComponent,
    IMRTIntensityModulatedRadiotherapyWithMultileafComponent,
    SRSExactracCranialStereotaxicRadiosurgeryComponent,
    MindfulnessWorkshopComponent,
    PsychoOncologyComponent,
    WhatIsMindfulnessComponent,
    ShiftsOptionsComponent,
    GynecologicalHDRBrachytherapyComponent,
    ShiftsDiagnosisByImagingComponent,
    ShiftsPsychologyComponent,
    ShiftsStartRadiotherapyComponent,
    ShiftFormComponent,
    OurHistoryComponent,
    AtentionComponent,
    CertificationsComponent,
    TurnFootComponent,
    NewsHomeComponent,
    BackgroundComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    TieredMenuModule,
    ToastModule,
    MenuModule,
    SidebarModule,
    DividerModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
