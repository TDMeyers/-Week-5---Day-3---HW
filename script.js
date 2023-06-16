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

  // Part 1
document.querySelector('#main-title').textContent = 'DOMs Garage'

  // Part 2
document.querySelector('body').style.backgroundColor = 'darkred'

  // Part 3
let ul = document.querySelector('#favorite-things');
let li = ul.lastElementChild
ul.removeChild(li)

  // Part 4
  let specialTitle = document.querySelectorAll('.special-title')
  specialTitle.forEach((specialTitle) => {
    specialTitle.style.fontSize = '2rem'
  })

  // Part 5
  let racesList = document.querySelector('#past-races');
  racesList.getElementsByTagName('li')[3].remove();

  // Part 6
  let newRace = document.createElement('li')
  newRace.textContent = 'Yokohama';
  // console.log(newRace)
  racesList.appendChild(newRace)

  // Part 7
  let newBlogDiv = document.createElement('div');
  newBlogDiv.classList.add('blog-post', 'purple');

  let newCityTitle = document.createElement('h2');
  newCityTitle.textContent = 'Yokohama';

  let newBlogPost = document.createElement('p');
  newBlogPost.textContent = 'I HAVE NO MEMORIES OF BEING HERE';

  newBlogDiv.appendChild(newCityTitle);
  newBlogDiv.appendChild(newBlogPost);
  document.querySelector('.main').appendChild(newBlogDiv);

  // Part 8
  document.querySelector('#quote-title').addEventListener('click', (event) => {
    randomQuote()
  })

  // Part 9
  let blogPosts = document.querySelectorAll('.blog-post');

  blogPosts.forEach((blogPosts) => {
    blogPosts.addEventListener('mouseout', (event) => {
      blogPosts.classList.toggle('red')
    })
    blogPosts.addEventListener('mouseenter', (event) => {
      blogPosts.classList.toggle('purple')
    })
  })

});
