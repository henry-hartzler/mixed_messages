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
    

//Chooses a random planet's moon
    const allPlanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
        let randMoon = randArr(allPlanets);

    const otherPlanet = (arr, moon) => {
    
       const moonInd = arr.indexOf(moon);
       let newMoonInd = arr[moonInd-1];
       if (moonInd === 0) {
           newMoonInd === arr.pop();
       }
       
       let other = randArr(arr);
       if (other !== moon) {
           return other;
       } else
            return newMoonInd;
       }
       
    let otherOne = otherPlanet(allPlanets, randMoon);
    
    //Creates a random horoscope
//Extension idea: break the horoscope into multiple parts: day, prediction, advice
    const horoscopeA = [
    'Beware of those ', 
    'Live life to the fullest, ',
    'The early bird gets the worm, ',
    'Entrepreneurial opportunities may present themselves ',
    'Breathe easy '
    ];
    const horoscopeB = [
        'who would do you wrong',
        'because you never know which day will be your last',
        'but the late worm lives another day',
        'when you\'re least expecting it',
        'and take it all in'
    ]
    let randHor = randArr(horoscopeA) + randArr(horoscopeB);
   

    return `As a ${randAstroSym}, because of the position of ${otherOne} and ${randMoon}'s moons, your horoscope is: ${randHor}.`;
}

console.log(mixedMessage());
