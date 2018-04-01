import {
	Component,
	OnInit
} from '@angular/core';

import {
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';
import { ControlValueIsEqualTo } from '../../validators/control-value-is-equal-to.validator';

@Component({
	selector: 'hip-register',
	templateUrl: './register-user.component.html',
	styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

	form: FormGroup;
	username: FormControl;
	password: FormControl;
	confirmPassword: FormControl;

	constructor(private identityService: IdentityService) { }

	ngOnInit() {
		this.username = new FormControl(
			'',
			[
				Validators.required,
			]
		);

		this.password = new FormControl(
			'',
			[
				Validators.required,
				Validators.minLength(8)
			]
		);

		this.confirmPassword = new FormControl(
			'',
			[
				Validators.required,
				Validators.minLength(8),
				ControlValueIsEqualTo(this.password)
			]
		);

		this.form = new FormGroup({
			username: this.username,
			password: this.password,
			confirmPassword: this.confirmPassword
		});
	}

	register() {
		console.log(this.form.value);
		console.log('Is form valid? ', this.form.valid);
	}
}
