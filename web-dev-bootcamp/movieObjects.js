let movies = [
    { title: "Aladdin",
      rating: 5,
      hasWatched: true 
    },
    { 
      title: "Mulan",
      rating: 3.5,
      hasWatched: true 
    },     
    { 
      title: "Star Wars",
      rating: 4,
      hasWatched: false }
]

movies.forEach(function(movie) {
    if(movie.hasWatched) {
        console.log(`You have seen "${movie.title}" - ${movie.rating} stars`);
    } else { 
        console.log(`You have not seen "${movie.title}" - ${movie.rating} stars`);
    }
});
