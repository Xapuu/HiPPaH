import {
	Component,
	OnInit
} from '@angular/core';

import {
	FormGroup,
	FormControl,
	Validators
} from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { IdentityService } from '../../services/identity.service';

@Component({
	selector: 'hip-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	username: FormControl;
	password: FormControl;

	subs: Subscription[] = [];

	constructor(private identityService: IdentityService) { }

	ngOnInit() {
		this.username = new FormControl(
			'',
			[Validators.required]
		);

		this.password = new FormControl(
			'',
			[Validators.required, Validators.minLength(8)]
		);

		this.form = new FormGroup({
			username: this.username,
			password: this.password
		});
	}

	login() {
		console.log(this.form.value);
		console.log('Is form valid? ', this.form.valid);
		this.subs.push(
			this.identityService.login(this.form.value)
				.subscribe(console.log)
		);
	}

}
