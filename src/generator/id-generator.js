// ver0.0.1
export const uniqueID = () => {
	function chr4() {
		return Math.random().toString(16).slice(-4);
	}
	return chr4() + chr4() +
		"-" + chr4() +
		"-" + chr4() +
		"-" + chr4() +
		"-" + chr4() + chr4() + chr4();
};

// author https://gist.github.com/gordonbrander/2230317#gistcomment-1618310



// ver0.0.2
/* export const uniqueID = () => {
	return "_" + (
		Number(String(Math.random()).slice(2)) +
		Date.now() +
		Math.round(performance.now())
	).toString(36);
}; */