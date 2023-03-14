import {toExport as movies} from "./data.js";


// YOUR CODE COMES HERE
let globalGenre = "Drama";

function includeGenre(movie) {
  if (movie["genres"].includes(globalGenre)) {
    this.push(movie["title"]);
  }
}

// 1
function dramas(array) {
  globalGenre = "Drama";
	const result = [];
	array.forEach(includeGenre, result);
	return result;
}
console.log(dramas(movies));

// 2
function findByGenre(genre, array) {
  globalGenre = genre;
	const newArr = [];
	array.forEach(includeGenre, newArr);
	return newArr;
}

console.log(findByGenre("Sci-Fi", movies));
console.log(findByGenre("Romance", movies));
console.log(findByGenre("Comedy", movies));

// 3
function longestMovie(array) {
	let longestRt = array[0];
	array.forEach(function(movie) {
    if (movie.runtime > longestRt.runtime) {
			longestRt = movie;
		}
  });
	return longestRt;
}

console.log(longestMovie(movies));

// 4
function longestMovieByGenre(genre, array) {
	let longestM = array[0];
  const fctExpression = function(movie) {
    if (movie.genres.includes(genre) && movie["runtime"] > longestM["runtime"]) {
			longestM = movie;
		}
  };
	array.forEach(fctExpression);
	return longestM;
}

console.log(longestMovieByGenre("Romance", movies));
console.log(longestMovieByGenre("Sci-Fi", movies));
console.log(longestMovieByGenre("Mystery", movies));













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
