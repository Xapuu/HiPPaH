import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterOrganizationComponent } from './components/register-organization/register-organization.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';
import { HomeComponent } from './components/home/home.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register-user',
		component: RegisterUserComponent
	},
	{
		path: 'register-organization',
		component: RegisterOrganizationComponent
	},
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'scan',
		component: ScannerComponent
	},
	{
		path: 'transfer/:organizationId/:accountId',
		component: TransferMoneyComponent
	},
	{
		path: 'confirm/:userId',
		component: ConfirmPaymentComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
