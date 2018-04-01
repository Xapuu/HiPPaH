import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateOrganization } from '../models/organization.model';

@Injectable()
export class OrganizationService {

	private baseUrl = environment.baseUrl;

	constructor(private http: HttpClient) { }

	register(organization: CreateOrganization) {
		return this.http.post(`${this.baseUrl}/api/organization`, organization);
	}
}
