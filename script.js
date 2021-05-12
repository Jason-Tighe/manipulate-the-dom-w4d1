let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener
  //Please create individual functions for each solution. Don't forget to call the function once you're finished.

  // Part 1
const main = function(){
  document.getElementById('main-title').innerHTML = "Dom's Website";
};

main();
  // Part 2
const body = function(){
  document.querySelector('body').style.backgroundColor = 'teal';
};

body();

  // Part 3
const favoriteThings = function(){
  const list = document.getElementById('favorite-things');
  list.removeChild(list.lastElementChild);
};

favoriteThings();


  // Part 4
const special = function (){
  const specialTitle = document.querySelectorAll('.special-title');
    for(let title of specialTitle){
      title.style.fontSize = '2rem';
    }
}


special()
  // Part 5

const past = function(){
  const  race = document.getElementById('past-races');
    race.removeChild(race.children[3])
};

past();

  // Part 6
const addedRace = function (){
  const newRace = document.createElement('li');
  const pastRaces = document.querySelector('#past-races');
  newRace.innerHTML = 'Seattle';
  pastRaces.append(newRace);
}

addedRace()

  // Part 7

const blog = function (){
  const div = document.createElement('div');
  div.classList.add('.blog-post')
  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  h2.append(p)
  div.append(h2)

  console.log(div)

}
blog()
  // Part 8


  // Part 9




});
