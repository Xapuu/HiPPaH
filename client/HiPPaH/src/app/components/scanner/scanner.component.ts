import {
	Component,
	OnInit,
	ViewChild,
} from '@angular/core';


import {
	ZXingScannerComponent
} from '@zxing/ngx-scanner';

@Component({
	selector: 'hip-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

	@ViewChild('scanner') scanner: ZXingScannerComponent;

	selectedDevice: MediaDeviceInfo;

	ngOnInit() {
	}

	handleFoundCameras(cameras: MediaDeviceInfo[]) {
		// this.selectedDevice = this.scanner.getDeviceById(cameras[0].deviceId);
		this.selectedDevice = cameras[0];
		console.log(this.selectedDevice);
	}

	handleQrCodeResult(resultString: string) {
		console.log('Result: ', resultString);
	}
}
