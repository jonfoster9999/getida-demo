import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutes } from './app.routes';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ReferralsComponent } from './admin-panel/referrals/referrals.component';
import { ProfileComponent } from './admin-panel/profile/profile.component';
import { ContactComponent } from './admin-panel/contact/contact.component';
import { SettingsComponent } from './admin-panel/settings/settings.component';
import { StatsComponent } from './admin-panel/stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    AdminPanelComponent,
    ReferralsComponent,
    ProfileComponent,
    ContactComponent,
    SettingsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    AppRoutes,
    ChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
