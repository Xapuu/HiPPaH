import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
	HttpClientModule,
	HTTP_INTERCEPTORS
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Scanner lib for qr codes.
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { CookieModule } from 'ngx-cookie';

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
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { IdentityService } from './services/identity.service';
import { ProfileService } from './services/profile.service';
import { TokenInterceptor } from './interceptors/token.interceptor';


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
		NavbarComponent,
		TransferMoneyComponent
	],
	imports: [
		BrowserModule,
		CookieModule.forRoot(),
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		ZXingScannerModule.forRoot(),
	],
	providers: [
		IdentityService,
		ProfileService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
