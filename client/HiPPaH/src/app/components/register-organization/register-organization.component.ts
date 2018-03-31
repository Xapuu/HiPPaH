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
	selector: 'hip-register-organization',
	templateUrl: './register-organization.component.html',
	styleUrls: ['./register-organization.component.scss']
})
export class RegisterOrganizationComponent implements OnInit {

	form: FormGroup;
	name: FormControl;

	constructor() { }

	ngOnInit() {
		this.name = new FormControl(
			'',
			[Validators.required, Validators.minLength(3)]
		);

		this.form = new FormGroup({
			name: this.name
		});
	}

	register() {
		console.log(this.form.value);
		console.log('Is name valid? ', this.name.valid);
	}
}
