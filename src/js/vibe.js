const vibes = [
    "....and your awesome!",
    "....have a wonderful day!",
    "....and you've got this!",
    "....and so is this dog! 🐶" 
];

// Choose a random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

//Display the vibe
document.querySelector(".vibe").append(vibe);