export const objJoiner = (dataObject) => {
	const arrayOfKeys = Object.keys(dataObject);
	const arrayLength = Object.keys(dataObject).length;

	const result = arrayOfKeys.map((key, index) =>
		index === arrayLength - 1 ? `${dataObject[key]}` : `${dataObject[key]}, `
	);

	return result;
};
