const getCursiveStyle = (data) => {
	const content = data.split(" ").map((word, index) => {
		if (word.includes("**")) {
			if (index === data.split(" ").length - 1) {
				return (
					<span key={index} className="cursive">
						{word.replace(/\*\*/g, "")}
					</span>
				);
			}
			return (
				<span key={index} className="cursive">
					{word.replace(/\*\*/g, "")}&nbsp;
				</span>
			);
		}
		return word + " ";
	});

	return content;
};

export default getCursiveStyle;
