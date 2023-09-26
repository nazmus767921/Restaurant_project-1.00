// --------------------------------->
// Usage: *** at the beginning of the sentence makes the whole sentence or line cursive.

// ** at the end of any word makes that word only cursive .

// **# at the end of any word makes that word only colored cursive .
// ---------------------------------->

const getCursiveStyle = (data) => {
	let content = [];

	if (data.split(" ")[0] === "***") {
		content = data.split(" ").map((word, index) => {
			if (word === "***") {
				return;
			} else {
				if (word.includes("**#")) {
					return (
						<span key={index} className="cursive colored">
							{word.replace(/\**#/g, "") + " "}
						</span>
					);
				}
				return (
					<span key={index} className="cursive">
						{word + " "}
					</span>
				);
			}
		});
	} else {
		content = data.split(" ").map((word, index) => {
			if (word.includes("**")) {
				if (word.includes("#")) {
					if (index === data.split(" ").length - 1) {
						return (
							<span key={index} className="cursive colored">
								{word.replace(/\**#/g, "")}
							</span>
						);
					}
					return (
						<span key={index} className="cursive colored">
							{word.replace(/\**#/g, "")}&nbsp;
						</span>
					);
				}
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
	}
	return content;
};

export default getCursiveStyle;
