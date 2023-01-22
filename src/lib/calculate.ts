export function fareCalculate(kilometers: number, minutes: number) {
	if (minutes % 2 == 0) {
		minutes += 1;
	}
	let price = 0;
	const price2 = minutes * 2;
	if (kilometers > 80) {
		const x_kilo = kilometers - 80;
		price += x_kilo * 10.5;
		kilometers -= x_kilo;
	}
	if (kilometers > 60) {
		const x_kilo = kilometers - 60;
		price += x_kilo * 9;
		kilometers -= x_kilo;
	}
	if (kilometers > 40) {
		const x_kilo = kilometers - 40;
		price += x_kilo * 8;
		kilometers -= x_kilo;
	}
	if (kilometers > 20) {
		const x_kilo = kilometers - 20;
		price += x_kilo * 7.5;
		kilometers -= x_kilo;
	}
	if (kilometers > 10) {
		const x_kilo = kilometers - 10;
		price += x_kilo * 6.5;
		kilometers -= x_kilo;
	}
	if (kilometers > 1) {
		const x_kilo = kilometers - 1;
		price += x_kilo * 5.5;
		kilometers -= x_kilo;
	}
	if (kilometers >= 1) {
		price += 35;
	}
	if (kilometers < 1) {
		price += 35;
	}

	if (price % 2 == 0) {
		price += 1;
	}

	const total = price + price2;
	return total;
}
