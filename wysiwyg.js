// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.


var counter = 0;
var outputEl = document.getElementById("outputEl");
var titleName = document.getElementById("header");
var bioImage = document.getElementById("section");
var lifespan = document.getElementById("footer");
var input = document.getElementById("userinput");
var person = [
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai2",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai3",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai4",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai5",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}
];

// var addPerson = function(object){
  for (var counter=0; counter < 5; counter++) {
    // Give each person element a unique identifier
    var peopleObjects = `<header>${person[counter].title}: `;
    peopleObjects += `${person[counter].name}</header>`;
    peopleObjects += `<section>${person[counter].bio}</section>`;
    peopleObjects += `<img src='${person[counter].image}'></img>`;
    peopleObjects += `<footer>${person[counter].lifespan.birth} - ${person[counter].lifespan.death}</footer></div>`;

    outputEl.innerHTML += `<div class="person-container" id="person--${counter}">${peopleObjects}</div>`;
  };
// };
  // Now containerEl will have elements in it
  var containerEl = document.getElementsByClassName("person-container");

  // Event listeners are created
    console.log(containerEl);
    for (var i = 0; i < containerEl.length; i++) {
      containerEl[i].addEventListener("click", function(event)  {
  //     // Logic to execute when the element is clicked
          console.log(event.target);
          bioSection = this.childNodes[1];
          bioSection.parentElement.classList.toggle("border");

          input.style.background = "lightgreen";
          if(input.value === "type here"){
            input.value = "";
          }
          else if(input.value === ""){
            input.style.background = "white";
            input.value = "type here";
          };
          input.focus();
          input.addEventListener("keyup", function(event){
            event.preventDefault();
            bioSection.innerHTML = input.value;
          });
      });
   }
      //    if(e.style.display == 'border'){
      //       e.style.display = 'none';
      //    }
        
      //    else
      //       e.style.display = 'block';
      // }

function enterKeyPressed(keypress){
  if (keypress.which === 13) {
    input.value = "";
  }
}
document.addEventListener("keypress", enterKeyPressed);

//addPerson(person);