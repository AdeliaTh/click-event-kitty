var button = document.querySelector(".show-cat");
//console.log("button");

var cat = document.querySelector(".cat");
//console.log(cat.outerHTML);
//console.log(button.outerHTML);

button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
        button.classList.add("disappear");
        //console.log("Yes!");
    } else {
        cat.classList.add("show");
        button.innerText = "Shoo, cat!"
        button.classList.remove("disappear");
        //console.log("No.");
    }
});












//console.log(button.outerHTML);
