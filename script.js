
var elements = [];

var button = document.querySelector("#btn");

var input = document.querySelector('input');


window.onload = function () {
    if (JSON.parse(localStorage.getItem("elements")) != null)
        elements = JSON.parse(localStorage.getItem("elements"));
    console.log(elements);
    display();
};

function del(index) {
    elements.splice(index, 1);
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = 0; i < elements.length; i++)
        document.querySelector(".list").innerHTML +=
            "<center><div class='element'>" +
            elements[i] +
        "<i class='fas fa-trash' id='delete'  onclick='del(" +
            i +
            ")'></i></div></center><br>";
}

function addElement(){

    if (input.value.trim() != "") {
        elements.push(input.value.trim());
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
        document.getElementById('inp').value = '';
        display();



    }
}


input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

button.addEventListener('click',addElement);