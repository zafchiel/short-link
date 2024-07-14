const letters = "abcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomAlias = (): string => {
	let alias = "";
	while (alias.length < 6) {
		alias += letters[Math.floor(Math.random() * letters.length)];
	}
	return alias;
};
