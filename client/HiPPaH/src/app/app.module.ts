import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterOrganizationComponent } from './components/register-organization/register-organization.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterUserComponent,
		RegisterOrganizationComponent,
		ProfileComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
