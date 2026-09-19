//obj literals
const movieInfo = {
  title: "Avengers",
  year: 2019,
};

const cinemaInfo = {
  name: "SM Cinema",
  location: "Davao",
};

//class1
class Movie {
  #title;

  //const1
  constructor(title) {
    this.#title = title;
  }

  //method1
  getTitle() {
    return this.#title;
  }

  //method2
  play() {
    return "Playing a movie...";
  }
}

//class2

class ActionMovie extends Movie {
  //method3
  play() {
    return "Playing an action movie!";
  }
}

//class3

class HorrorMovie extends Movie {
  //method4
  play() {
    return "Playing a horror movie!";
  }
}

//class4

class Cinema {
  #name;

  //cons2
  constructor(name) {
    this.#name = name;
  }
  //method5
  showCinema() {
    return "Cinema: " + this.#name;
  }
}

//objs
let movie1 = new ActionMovie("Avengers");
let movie2 = new ActionMovie("Batman");
let movie3 = new HorrorMovie("The Conjuring");
let cinema1 = new Cinema("SM Cinema");

//vars
let rating = 8;
let age = 18;
let favorite = true;

//conditions
if (rating >= 7) {
  console.log("Good movie!");
}

if (age >= 18) {
  console.log("You can watch the movie.");
} else {
  console.log("You are too young to watch this movie.");
}

if (rating >= 9) {
  console.log("Excellent movie!");
} else if (rating >= 7) {
  console.log("Good movie!");
} else {
  console.log("Average movie.");
}
console.log(" ");

//arrays
let movies = ["Avengers", "Batman", "The Conjuring"];
let genres = ["Action", "Action", "Horror"];
let ratings = [8, 9, 7];

//loops
console.log("MOVIES: ");
for (let movie of movies) {
  console.log(movie);
}

console.log(" ");
console.log("GENRES: ");
for (let genre of genres) {
  console.log(genre);
}

console.log(" ");
console.log("RATINGS: ");
for (let rating of ratings) {
  console.log(rating);
}

//poly
console.log(" ");
console.log(movie1.play());
console.log(movie3.play());
console.log(cinema1.showCinema());
