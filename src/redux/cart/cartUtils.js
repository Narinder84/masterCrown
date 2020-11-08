/** @format */

export const addItems = (stateItems, item) => {
	const isItemExist = stateItems.find((im) => im.id === item.id);

	if (isItemExist) {
		return stateItems.map((im) =>
			im.id === item.id ? { ...im, quantity: im.quantity + 1 } : { ...im },
		);
	} else {
		return [...stateItems, { ...item, quantity: 1 }];
	}
};

export const deleteItem = (stateItems, item) => {
	return stateItems.filter((im) => im.id !== item.id);
};

export const reduceItems = (stateItems, item) => {
	return stateItems.map((im) =>
		im.id === item.id && im.quantity > 1
			? { ...im, quantity: im.quantity - 1 }
			: { ...im },
	);
};
