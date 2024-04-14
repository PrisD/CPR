import { OurCenterComponent } from './screens/our-center/our-center.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
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
import { MiniCardComponent } from './mini-card/mini-card.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TitleCardComponent } from './title-card/title-card.component';
import { PsychologyComponent } from './screens/psychology/psychology.component';
import { DiagnosticImagingComponent } from './screens/diagnostic-imaging/diagnostic-imaging.component';
import { RadiotherapyComponent } from './screens/radiotherapy/radiotherapy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MiniCardComponent,
    TitleCardComponent,
    PsychologyComponent,
    DiagnosticImagingComponent,
    RadiotherapyComponent,
    OurCenterComponent
    
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
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
