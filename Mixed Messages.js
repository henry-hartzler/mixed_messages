//This is the initial main branch

//Creating a random astrology sign
const allAstroSym = ['Ares', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const randIndex = Math.floor(Math.random() * allAstroSym.length);
console.log(randIndex);
let randAstroSym = allAstroSym[randIndex];
console.log(randAstroSym);