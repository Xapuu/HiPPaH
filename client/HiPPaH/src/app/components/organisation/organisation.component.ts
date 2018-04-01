import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../services/organization.service';
import { ActivatedRoute } from '@angular/router';
import {
	map,
	switchMap,
	share
} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'hip-organisation',
	templateUrl: './organisation.component.html',
	styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {

	organisation: Observable<any>;

	constructor(
		private organizationService: OrganizationService,
		private router: ActivatedRoute
	) { }

	ngOnInit() {
		this.organisation = this.router.paramMap
			.pipe(
				map((paramsMap) => paramsMap.get('id')),
				switchMap((id) => this.organizationService.getByid(id)),
				share()
			);
	}

}
