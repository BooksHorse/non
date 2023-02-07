export function fareCalculate(kilometers: number, minutes: number, isBigTaxi: boolean) {
	let total = isBigTaxi ? 40 : 35;
	if (kilometers <= 1) {
		// do nothing
	} else if (kilometers <= 10) {
		//2-10
		total += (kilometers - 1) * 6.5;
	} else if (kilometers <= 20) {
		//11-20
		total += (kilometers - 1) * 7;
	} else if (kilometers <= 40) {
		//21-40
		total += (kilometers - 1) * 8;
	} else if (kilometers <= 60) {
		//41-60
		total += (kilometers - 1) * 8.5;
	} else if (kilometers <= 80) {
		//61-80
		total += (kilometers - 1) * 9;
	} else {
		//80++
		total += (kilometers - 1) * 10.5;
	}
	total += minutes * 3;

	return total;
}
