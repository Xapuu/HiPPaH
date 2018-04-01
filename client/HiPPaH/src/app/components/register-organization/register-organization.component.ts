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
import { OrganizationService } from '../../services/organization.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'hip-register-organization',
	templateUrl: './register-organization.component.html',
	styleUrls: ['./register-organization.component.scss']
})
export class RegisterOrganizationComponent implements OnInit, OnDestroy {

	form: FormGroup;
	organizationName: FormControl;

	subs: Subscription[] = [];

	constructor(private organizationService: OrganizationService) { }

	ngOnInit() {
		this.organizationName = new FormControl(
			'',
			[Validators.required, Validators.minLength(3)]
		);

		this.form = new FormGroup({
			organizationName: this.organizationName
		});
	}

	register() {
		console.log(this.form.value);
		this.organizationService.register(this.form.value).subscribe(console.log);
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}
}
