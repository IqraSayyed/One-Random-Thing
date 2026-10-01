console.log("One Random Thing is running!");

const things = [
    "Draw something without looking at the paper.",
    "Find an object near you and figure out how it works.",
    "Write down the first idea that comes into your head.",
    "Look outside and describe what you see in five sentences.",
    "Learn one completely useless fact.",
    "Take a photo of something you normally ignore.",
    "Listen to a song you've never heard before.",
    "Rearrange three things on your desk."
];

const thingElement = document.getElementById("thing");
const randomButton = document.getElementById("randomButton");

function giveMeAnotherThing() {
    const randomIndex = Math.floor(Math.random() * things.length);
    const randomThing = things[randomIndex];

    thingElement.textContent = randomThing;
}

randomButton.addEventListener("click", giveMeAnotherThing);