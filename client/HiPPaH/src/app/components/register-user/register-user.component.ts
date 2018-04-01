import {
	Component,
	OnInit,
	OnDestroy
} from '@angular/core';

import {
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';

import { tap } from 'rxjs/operators';

import { ControlValueIsEqualTo } from '../../validators/control-value-is-equal-to.validator';
import { IdentityService } from '../../services/identity.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'hip-register',
	templateUrl: './register-user.component.html',
	styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit, OnDestroy {

	form: FormGroup;
	username: FormControl;
	password: FormControl;
	confirmPassword: FormControl;

	subs: Subscription[] = [];

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
		this.subs.push(
			this.identityService.register(this.form.value)
				.subscribe(console.log)
		);
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}
}
