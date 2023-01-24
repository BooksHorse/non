export function fareCalculate(kilometers: number, minutes: number) {
	let total = 35;
	if (kilometers <= 1) {
		// do nothing
	} else if (kilometers <= 10) {
		total += kilometers * 5.5;
	} else if (kilometers <= 20) {
		total += kilometers * 6.5;
	} else if (kilometers <= 40) {
		total += kilometers * 7.5;
	} else if (kilometers <= 60) {
		total += kilometers * 8;
	} else if (kilometers <= 80) {
		total += kilometers * 9;
	} else {
		total += kilometers * 10.5;
	}

	total += minutes * 1.5;

	return total;
}
