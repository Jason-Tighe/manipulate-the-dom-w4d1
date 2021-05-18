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
  const eGirl = document.querySelector('.main')
  const div1 = document.createElement('div');
  div1.classList.add('blog-post', 'purple')
  const nh1 = document.createElement('h1')
  const p = document.createElement('p')
  nh1.textContent = "Seattle";
  p.textContent = "I don't remeber what happened here. I blacked out, or got a concussion? ";
  eGirl.append(div1)
  div1.append(nh1)
  div1.append(p)

}
blog()

  // Part 8
// const randomQuote= function() {
//     document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
//   };
//
//   randomQuote()

const qtitle = function(){
  const title = document.querySelector('#quote-title')
  title.addEventListener('click', (e) =>{
    randomQuote()
  })

}
qtitle()


  // Part 9
const bigMouse = function(){

  const blogBlock = document.querySelectorAll('.blog-post')
  for(let blog of blogBlock){
    const toggleClass = (node, className) => {
    node.classList.toggle(className)
  }
    blog.children[1].addEventListener('mouseenter', (e)=>{
      toggleClass(blog, 'red')
    } )
    blog.children[0].addEventListener('mouseout', (e)=>{
      toggleClass(blog, 'purple')
    } )
  }
}

bigMouse()

});
