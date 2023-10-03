function formatPrice(price, currencyCode = "USD", locale = "en-US") {
	// Check if price is a number
	if (typeof price !== "number") {
		throw new Error("Price must be a number");
	}

	const formatter = new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currencyCode,
		minimumFractionDigits: 2, // Ensure two decimal places
	});

	return formatter.format(price / 100);
}

export default formatPrice;
