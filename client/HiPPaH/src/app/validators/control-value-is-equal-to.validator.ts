import { AbstractControl } from '@angular/forms';

export function ControlValueIsEqualTo(test: AbstractControl) {
	return (source: AbstractControl) =>
		source.value === test.value ? null : { notTheSame: true };
}
