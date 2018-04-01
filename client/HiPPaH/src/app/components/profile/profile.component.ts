import {
	Component,
	OnInit,
	OnDestroy
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../models/profile.model';
import { share } from 'rxjs/operators';

@Component({
	selector: 'hip-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

	subs: Subscription[] = [];

	profile: Observable<Profile>;

	constructor(private profileService: ProfileService) { }

	ngOnInit() {
		this.profile = this.profileService.getProfile()
			.pipe(
				// Do not make separate call for each async pipe.
				share()
			);
		// this.subs.push(
		// 	this.profileService.getProfile().subscribe(console.log)
		// );
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}

}
