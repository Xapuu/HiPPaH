import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie';
import { tap } from 'rxjs/operators';
import {
	User,
	RegisteringUser
} from '../models/user.model';
import { AuthorizationItem } from '../models/authorization-item.model';


@Injectable()
export class IdentityService {

	private baseUrl = environment.baseUrl;

	constructor(
		private http: HttpClient,
		private cookieService: CookieService
	) { }

	register(user: RegisteringUser) {
		return this.http.post<AuthorizationItem>(`${this.baseUrl}/api/auth/register`, user)
			.pipe(
				tap((token: AuthorizationItem) => this.saveCookies(token))
			);
	}

	login(user: User) {
		return this.http.post<AuthorizationItem>(`${this.baseUrl}/api/auth/login`, user)
			.pipe(
				tap((token: AuthorizationItem) => this.saveCookies(token))
			);
	}

	getToken(): string {
		return this.cookieService.get('token');
	}

	isLoggedIn(): boolean {
		return !!this.cookieService.get('token');
	}

	private saveCookies(token: AuthorizationItem) {
		this.cookieService.put('token', token.token);
	}
}
