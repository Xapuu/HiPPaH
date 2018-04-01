import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { IdentityService } from '../services/identity.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor(private identityService: IdentityService) { }

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	) {
		if (this.identityService.isLoggedIn()) {
			request = request.clone({
				setHeaders: {
					Authorization: `jwt ${this.identityService.getToken()}`
				}
			});
		}

		return next.handle(request);
	}

}
