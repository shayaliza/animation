// function breakTheText() {
//   var initial = document.querySelector("#text");
//   var text = document.querySelector("#text").textContent;

//   var splittedText = text.split("");

//   var clutter = "";

//   splittedText.forEach(function (letter) {
//     console.log(letter);
//     clutter += `<span>${letter}</span>`;
//   });

//   initial.innerHTML = clutter;
// }

// breakTheText();

// gsap.from("#text span", {
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   stagger: 0.3,
// });

function breakTheText() {
  var initial = document.querySelector("#text");
  var text = document.querySelector("#text").textContent;

  var splittedText = text.split("");
  var halfText = Math.floor(splittedText.length / 2);

  var clutter = "";

  splittedText.forEach(function (letter, index) {
    console.log(letter);
    console.log(halfText);

    if (index < halfText) {
      clutter += `<span class="a">${letter}</span>`;
    } else {
      clutter += `<span class="b">${letter}</span>`;
    }
  });

  initial.innerHTML = clutter;
}

breakTheText();

gsap.from("#text .a", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

gsap.from("#text  .b", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: -0.3,
});
