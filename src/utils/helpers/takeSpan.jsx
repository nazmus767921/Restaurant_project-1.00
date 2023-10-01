import React from "react";

export const takeSpan = (dataString, spanPart, spanClassName) => {
	const regex = new RegExp(`\\b${spanPart}\\b`, "i");
	const cutPart = dataString.match(regex)[0];
	const CutPartJsxElement = React.createElement(
		"span",
		{ className: spanClassName },
		cutPart
	);
	const remainingPart = dataString.replace(regex, "");
	const ResultJsxElement = React.createElement(
		"span",
		{},
		remainingPart,
		CutPartJsxElement
	);

	return ResultJsxElement;
};


