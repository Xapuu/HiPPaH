import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'hip-confirm-payment',
	templateUrl: './confirm-payment.component.html',
	styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.paramMap
			.subscribe(pm =>
				console.log(pm.get('organizationId'), pm.get('accountid')));
	}

}
