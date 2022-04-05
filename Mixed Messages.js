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
