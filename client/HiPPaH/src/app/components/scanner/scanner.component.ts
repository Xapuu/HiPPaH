import {
	Component,
	OnInit,
	OnDestroy,
	ViewChild,
} from '@angular/core';


import {
	ZXingScannerComponent
} from '@zxing/ngx-scanner';
import { Router } from '@angular/router';
import { Result } from '@zxing/library';

@Component({
	selector: 'hip-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit, OnDestroy {

	@ViewChild('scanner') scanner: ZXingScannerComponent;

	selectedDevice: MediaDeviceInfo;

	constructor(private router: Router) {
	}

	ngOnInit() {
	}

	onCamerasFound(cameras: MediaDeviceInfo[]) {
		this.selectedDevice = this.scanner.getDeviceById(cameras[0].deviceId);
	}

	onScanSuccess(result: string) {
		console.log('Scan success: ', result);
		this.scanner.resetScan();
		this.router.navigate([this.getURI(result)]);
	}

	ngOnDestroy() {
		console.log('destroying...');
	}

	// https://stackoverflow.com/a/736970
	private getURI(url: string) {
		const tempEl: HTMLAnchorElement = document.createElement('a');
		tempEl.href = url;
		return tempEl.pathname;
	}
}
