import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ReferralsComponent } from './admin-panel/referrals/referrals.component';
import { ProfileComponent } from './admin-panel/profile/profile.component';
import { StatsComponent } from './admin-panel/stats/stats.component';
import { SettingsComponent } from './admin-panel/settings/settings.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'signup', component: SignupComponent },
	{path: 'home', component: HomeComponent },
	{path: 'admin', component: AdminPanelComponent, children: [
		{path: '', redirectTo: 'stats', pathMatch: 'full'},
		{path: 'referrals', component: ReferralsComponent},
		{path: 'profile', component: ProfileComponent},
		{path: 'stats', component: StatsComponent},
		{path: 'settings', component: SettingsComponent}
	]}
]

@NgModule({ 
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutes {

}