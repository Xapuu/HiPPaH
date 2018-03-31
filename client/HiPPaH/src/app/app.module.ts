import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Scanner lib for qr codes.
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterOrganizationComponent } from './components/register-organization/register-organization.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterUserComponent,
		RegisterOrganizationComponent,
		ProfileComponent,
		ScannerComponent,
		ConfirmPaymentComponent,
		HomeComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ZXingScannerModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
