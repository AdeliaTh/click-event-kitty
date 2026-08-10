var button = document.querySelector(".show-cat");
//console.log("button");

var cat = document.querySelector(".cat");
//console.log(cat.outerHTML);
//console.log(button.outerHTML);

button.addEventListener("click", function () {
    button.innerText = "It's working";
});
//console.log(button.outerHTML);
console.log(button.innerText);