//This is the initial main branch

//Creating a random astrology sign
const allAstroSym = ['Ares', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const randIndexSym = Math.floor(Math.random() * allAstroSym.length);
//console.log(randIndexSym);
let randAstroSym = allAstroSym[randIndexSym];
console.log(randAstroSym);

//Chooses a random planet's moon
const allPlanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const randIndexPlanet = Math.floor(Math.random() * allPlanets.length);
let randMoon = allPlanets[randIndexPlanet];
console.log(randMoon);

//Creates a random horoscope
//Extension idea: break the horoscope into multiple parts: day, prediction, advice
const horoscope = [
    'Beware of those who would do you wrong', 
    'Live life to the fullest, because you never know which day will be your last',
    'The early bird gets the worm, but the late worm lives another day',
    'Entrepreneurial opportunities may present themselves when you\'re least expecting it',
    'Breathe easy, take it all in'
]
const randIndexHor = Math.floor(Math.random() * horoscope.length)
let randHor = horoscope[randIndexHor];
console.log(randHor);