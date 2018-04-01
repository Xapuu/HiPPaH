import {
	Component,
	OnInit
} from '@angular/core';

import {
	FormGroup,
	FormControl,
	Validators
} from '@angular/forms';

@Component({
	selector: 'hip-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	email: FormControl;
	password: FormControl;

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

		this.form = new FormGroup({
			email: this.email,
			password: this.password
		});
	}

	login() {
		console.log(this.form.value);
		console.log('Is form valid? ', this.form.valid);
	}

}
