// Alle gifjes in de folder
const gifs = [
	"gif1.gif",
	"gif2.gif",
	"gif3.gif",
	"gif4.gif",
	"gif5.gif",
	"gif6.gif",
	"gif7.gif",
	"gif8.gif"  // voeg zoveel toe als je wil
];

// Function to pick a random GIF and set it as the background image
function setRandomGifBackground() {
    if (gifs.length === 0) {
        alert("Geen GIFs beschikbaar.");
        return;
    }

    // Pick a random GIF uit de lijst
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    // Set de random GIF als background image van de body
    document.body.style.backgroundImage = `url('./gif/${randomGif}')`;
}
