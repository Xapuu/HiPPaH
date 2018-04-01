import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { OrganizationService } from '../../services/organization.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'hip-confirm-payment',
	templateUrl: './confirm-payment.component.html',
	styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {

	organization: Observable<any>;

	constructor(
		private route: ActivatedRoute,
		private organisationService: OrganizationService
	) { }

	ngOnInit() {
		this.organization = this.route.paramMap
			.pipe(
				map(paramMap => paramMap.get('organizationId')),
				switchMap(id => this.organisationService.getByid(id))
			);
	}

}
