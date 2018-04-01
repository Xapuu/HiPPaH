import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {

	private baseUrl = environment.baseUrl;

	constructor(private http: HttpClient) { }

	getProfile() {
		return this.http.get(`${this.baseUrl}/api/profile`);
	}
}
