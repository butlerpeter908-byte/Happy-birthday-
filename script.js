
// =========================
// LOADING SCREEN
// =========================

window.onload = function () {

setTimeout(() => {

document.getElementById("loading-page").style.display = "none";
document.getElementById("dob-page").style.display = "block";

}, 3000);

};



// =========================
// DOB VERIFICATION
// =========================

const correctDOB = "13/03/06"; // Apni DOB yaha likhna


function checkDOB() {

let userDOB = document.getElementById("dob").value;

if (userDOB === correctDOB) {

document.getElementById("dob-page").style.display = "none";
document.getElementById("cake-page").style.display = "block";

showCake();

}

else {

alert("Wrong DOB!");

}

}




// =========================
// CAKE PAGE
// =========================

function showCake() {

setTimeout(() => {

document.getElementById("cake-page").style.display = "none";
document.getElementById("happy-page").style.display = "block";

showHappyBirthday();

}, 5000);

}




// =========================
// HAPPY BIRTHDAY PAGE
// =========================

function showHappyBirthday() {

setTimeout(() => {

document.getElementById("happy-page").style.display = "none";
document.getElementById("message-page").style.display = "block";

showMessage();

}, 6000);

}




// =========================
// MESSAGE PAGE
// =========================

function showMessage() {

setTimeout(() => {

document.getElementById("message-page").style.display = "none";
document.getElementById("letter-page").style.display = "block";

}, 8000);

}




// =========================
// OPEN SECRET LETTER
// =========================

function openLetter() {

document.getElementById("letter-box").style.display = "block";


setTimeout(() => {

document.getElementById("letter-page").style.display = "none";
document.getElementById("gallery-page").style.display = "block";

startGallery();

}, 7000);

}




// =========================
// PHOTO SLIDESHOW
// =========================

const photos = [

"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg",
"images/photo7.jpg",
"images/photo8.jpg"

];


let currentPhoto = 0;


function startGallery() {

const image = document.getElementById("gallery-image");


const slideshow = setInterval(() => {

currentPhoto++;

if (currentPhoto >= photos.length) {

clearInterval(slideshow);

document.getElementById("gallery-page").style.display = "none";
document.getElementById("final-cake-page").style.display = "block";

return;

}

image.src = photos[currentPhoto];


}, 3000);

}




// =========================
// FINAL CAKE PAGE
// =========================

function blowCandles() {

document.getElementById("final-cake-page").style.display = "none";
document.getElementById("thankyou-page").style.display = "block";


playMusic();

}




// =========================
// PLAY BIRTHDAY SONG
// =========================

function playMusic() {

const song = document.getElementById("birthdaySong");

song.play();

}




// =========================
// OPTIONAL
// =========================

// Agar tum future me confetti,
// hearts animation ya balloons
// add karna chaho to yaha functions
// likh sakte ho.
