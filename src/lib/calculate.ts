export function fareCalculate(kilometers: number, minutes: number) {
	let total = 35;
	if (kilometers > 1 && kilometers <= 10) {
		total += kilometers*5.50;
	}
	else if (kilometers <= 20 ) {
		total+= kilometers*6.50;
	}
	else if (kilometers <= 40) {
		total+= kilometers*7.50;
	}
	else if (kilometers <= 60) {
		total+= kilometers*8;
	}
	else if (kilometers <= 80) {
		total+= kilometers*9;
	}
	else {
		total+= kilometers*10.50
	}

total+= minutes*1.50;

	return total;
}
