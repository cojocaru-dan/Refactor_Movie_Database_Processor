import {toExport as movies} from "./data.js";


// YOUR CODE COMES HERE














// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	toExport = [
		{name: "dramas", content: dramas, type: "function"},
		{name: "findByGenre", content: findByGenre, type: "function"},
		{name: "longestMovie", content: longestMovie, type: "function"},
		{name: "longestMovieByGenre", content: longestMovieByGenre, type: "function"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
