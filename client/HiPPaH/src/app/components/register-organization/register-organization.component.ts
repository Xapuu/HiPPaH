import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'hip-register-organization',
	templateUrl: './register-organization.component.html',
	styleUrls: ['./register-organization.component.scss']
})
export class RegisterOrganizationComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	register() {
		console.log('registering organization...');
	}
}
