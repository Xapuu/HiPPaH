import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie';
import { tap } from 'rxjs/operators';


@Injectable()
export class IdentityService {

	baseUrl = environment.baseUrl;

	constructor(
		private http: HttpClient,
		private cookieService: CookieService
	) { }

	register(user) {
		return this.http.post(`${this.baseUrl}/api/auth/register`, user)
			.pipe(
				tap((token: {token: string}) => this.saveCookies(token))
			);
	}

	private saveCookies(token: { token: string }) {
		this.cookieService.put('token', token.token);
	}
}
