import {
	Component,
	OnInit
} from '@angular/core';

import {
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';

@Component({
	selector: 'hip-register',
	templateUrl: './register-user.component.html',
	styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

	form: FormGroup;
	email: FormControl;
	password: FormControl;
	verifyPassword: FormControl;

	constructor() { }

	ngOnInit() {
		this.email = new FormControl(
			'',
			[Validators.required, Validators.email]
		);

		this.password = new FormControl(
			'',
			[Validators.required, Validators.minLength(8)]
		);

		this.verifyPassword = new FormControl(
			'',
			[Validators.required]
		);

		this.form = new FormGroup({
			email: this.email,
			password: this.password,
			verifyPassword: this.verifyPassword
		});
	}

	register() {
		console.log(this.form.value);
	}
}
