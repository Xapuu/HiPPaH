import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
	selector: 'hip-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	constructor(private profileService: ProfileService) { }

	ngOnInit() {
		this.profileService.getProfile().subscribe(console.log);
	}

}
