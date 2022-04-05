//This is the initial main branch

const mixedMessage = function() {
    //Prototype random index
    const randIndex = arr => {
        return Math.floor(Math.random() * arr.length);
}
    //Prototype grabs random item from an array
    const randArr = arr => {
       return arr[randIndex(arr)]; 
    }

//Creating a random astrology sign
    const allAstroSym = ['Ares', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    let randAstroSym = randArr(allAstroSym);
    //console.log(randAstroSym);

//Chooses a random planet's moon
    const allPlanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    let randMoon = randArr(allPlanets);
    //console.log(randMoon);
    const otherPlanet = (arr, moon) => {
        let other = randArr(arr);
        if (other !== moon) {
            return other;
        } else {
            return arr[i+1];
        }
    }
    
    let otherOne = otherPlanet(allPlanets, randMoon);
//Creates a random horoscope
//Extension idea: break the horoscope into multiple parts: day, prediction, advice
    const allHoroscope = [
    'Beware of those who would do you wrong', 
    'Live life to the fullest, because you never know which day will be your last',
    'The early bird gets the worm, but the late worm lives another day',
    'Entrepreneurial opportunities may present themselves when you\'re least expecting it',
    'Breathe easy and take it all in'
]
    let randHor = randArr(allHoroscope);
    //console.log(randHor);

    return `As a ${randAstroSym}, because of the position of the ${otherOne} and ${randMoon}'s moon, your horoscope is: ${randHor}.`;
}

console.log(mixedMessage());
