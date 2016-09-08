var counter = 0;
var outputEl = document.getElementById("outputEl");
var titleName = document.getElementById("header");
var bioImage = document.getElementById("section");
var lifespan = document.getElementById("footer");

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

var addPerson = function(object){
  for (var counter=0; counter < 5; counter++) {
    // Give each person element a unique identifier
    outputEl.innerHTML += `<div class="person_container" id="person--${counter}"><header>${person[counter].title}${person[counter].name}</header>`
    outputEl.innerHTML += `<section>${person[counter].bio}<img src='${person[counter].image}'></img></section>`
    outputEl.innerHTML += `<footer>${person[counter].lifespan.birth} - ${person[counter].lifespan.death}</footer></div>`;
  };

  // Now containerEl will have elements in it
  var containerEl = document.getElementsByClassName("person_container");

  // Event listeners are created
    for (var i = 0; i < containerEl.length; i++) {
      containerEl[i].addEventListener("click", function (event) {
  //     // Logic to execute when the element is clicked
         function toggle_visibility(id) {
         var e = document.getElementById("person--${counter}");
         if(e.style.display == 'border')
            e.style.display = 'none';
         else
            e.style.display = 'block';
      }
    });
   }
};

addPerson(person);