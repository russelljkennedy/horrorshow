let bg = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
  "img/09.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg"
];

let prefix = [
  "The Beast of",
  "The Monster from",
  "The Creature from",
  "It Came from",
  "The Harrowing Tale of",
  "Bloodbath at",
  "The Rise of",
  "Zombies in",
  "The House at",
  "The Grave Next to",
  "Five Go Wild in",
  "Terror Above",
  "Mindnumbing Terror in",
  "An Exorcism in",
  "Torture at",
  "Ghouls Beneath",
  "Gremlins Behind",
  "Purest Evil in",
  "Christmas at",
  "Next Stop",
  "The Train to",
  "One Night in",
  "Stay Away from",
  "Beware of",
  "The Cats from",
  "The Curse of",
  "Blood-Thirsty Brides in",
  "Martian Mutants Invade",
  "Violent Vixens Take Over",
  "The Witch in",
  "Ghouls at Play in",
  "Agony in",
  "A Grizzly End in"
];

let suffix = [
  "Hauntsville",
  "Misty Place",
  "Slasher Bay",
  "Sciencetown",
  "Dr Bunsen's Laboratory of Terror",
  "the Swamp",
  "Nightmare Inn",
  "Fear Creek",
  "Hotel Evil",
  "Terror Lake",
  "the Control Tower",
  "the Institute",
  "Bloodsville",
  "Castle Gore",
  "Your Basement",
  "the Winchester",
  "a Town Called Despair",
  "the Hellish High Rise",
  "the Attic",
  "Dr Frightmarestein's Screamatorium",
  "the Land of the Dogs"
];

let lead = [
  "Bud Nightingale",
  "Lilly Macabre",
  "Frank Enstein",
  "Ada Darlington",
  "Edward O'Dare",
  "Howlin' Hank",
  "Debbie Harry",
  "Betsy Durant",
  "Julian Kidkill",
  "Eva Belair",
  "Jane Doe",
  "Claude Dupuis",
  "The Trashman",
  "Elvis Durant",
  "Fifi Firestone",
  "Art Vandalay",
  "Matilda Midnight",
  "Isaac Strange",
  "Betty Boggs"
];

let coStar = [
  "'Morbid' Millie Monroe",
  "Jeff Stark",
  "Harriet Huffington",
  "Wolfie Wilde",
  "Joanie Jameson",
  "Whalin' Wallie",
  "Joey Ramone",
  "Barbara 'Babs' Makepeace",
  "Dirk Rippington",
  "The Wolfman",
  "Leigh Love",
  "Esmerelda Fernandez",
  "Sandy McGill",
  "Derrick Domino",
  "Percy Jesperson",
  "Donna Chan",
  "Maria Bourdeaux",
  "The Red Rascal"
];

let tagLine = [
  "Not for the faint of heart",
  "A blood curdling adventure",
  "And to all a good fright",
  "Your bones will be chilled",
  "Don't open that door!",
  "Never sleep again",
  "A new kind of evil",
  "Guts, gore 'n' ghouls",
  "A rip-roaring good time",
  "Feed them after midnight",
  "Till death do us part",
  "You'll freeze with fear",
  "Confess!",
  "Believe in Blood",
  "They're coming!",
  "They've got a taste...for you",
  "Whatever you do, don't do that",
  "Only a fool would try",
  "Silence is Molten",
  "Where others dare not tread",
  "Feel the fear",
  "Consider yourself warned",
  "I wouldn't do that if I were you"
];

// Vars
const wrap = document.getElementById("horror-wrap");
const startBtn = document.getElementById("start-btn");
const begin = document.getElementById("begin");
const btn = document.getElementById("generate-btn");
const intro = document.getElementById("intro");
const background = document.querySelector(".background");
const cast = document.querySelector(".cast");
const title = document.querySelector(".title");
const tag = document.querySelector(".tagline");
const capture = document.getElementById("capture-btn");
const social = document.getElementById("social-links");

// Background image
function newBg() {
  let randomBg = bg[Math.floor(Math.random() * bg.length)];
  let bgString = "url('" + randomBg + "')";
  background.style.backgroundImage = bgString;
}

// Cast
function newCast() {
  let randomLead = lead[Math.floor(Math.random() * lead.length)];
  let randomCoStar = coStar[Math.floor(Math.random() * coStar.length)];
  let castInner = "<h4>" + randomLead + " & " + randomCoStar + " in...</h4>";
  cast.innerHTML = castInner;
}

// Title
function newTitle() {
  let randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
  let randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
  let titleInner = "<h2>" + randomPrefix + " " + randomSuffix + "</h2>";
  title.innerHTML = titleInner;
}

// Tagline
function newTag() {
  let randomTagline = tagLine[Math.floor(Math.random() * tagLine.length)];
  let tagInner = "<p>" + randomTagline + "</p>";
  tag.innerHTML = tagInner;
}

// Start button
startBtn.addEventListener('click', function(e){
  e.preventDefault();
  intro.parentNode.removeChild(intro);
  begin.parentNode.removeChild(begin);
  wrap.classList += " fade-in";

  newBg();
  newCast();
  newTitle();
  newTag();
  capture.style.display = "inline-block";
  btn.style.display = "inline-block";
  social.style.display = "flex";
});

// Generate button
btn.addEventListener('click', function(e){
  e.preventDefault();

  wrap.classList.remove("fade-in");

  setTimeout(() => {
    newBg();
    newCast();
    newTitle();
    newTag();
  }, 500)

  setTimeout(() => {
    wrap.classList += " fade-in";
  }, 1000);
}); 

// Capture button
capture.addEventListener('click', function(e){
  e.preventDefault();

  // Remove weird offset bug that seems to be caused by flexbox
  let offset = (background.offsetLeft) + 5;
  let width = (background.offsetWidth) -5;

  let windowRef = window.open("about:blank","_blank");

  html2canvas(document.querySelector("#horror-wrap"),
        {backgroundColor: null,
          y: background.offsetTop,
          x: offset,
          width: width
        }
    ).then(canvas => {

    let data = canvas.toDataURL("image/png");
    let image = new Image();
    image.src = data;
    image.style.width = "90vw";

    let windowBody = windowRef.document.body;
    windowBody.style.backgroundColor = "#222020";
    windowBody.style.padding = "2vw";

    let viewPortTag=document.createElement('meta');
    viewPortTag.id="viewport";
    viewPortTag.name = "viewport";
    viewPortTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";

    windowRef.document.getElementsByTagName('head')[0].appendChild(viewPortTag);
    windowRef.document.body.appendChild(image);
  });
});
