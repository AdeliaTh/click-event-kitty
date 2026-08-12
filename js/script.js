var button = document.querySelector(".show-cat");
//console.log("button");

var cat = document.querySelector(".cat");
//console.log(cat.outerHTML);
//console.log(button.outerHTML);

button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        //console.log("Yes!");
    } else {
        cat.classList.add("show");
        //console.log("No.");
    }
});












//console.log(button.outerHTML);
