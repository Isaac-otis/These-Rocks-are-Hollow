const imageArea = document.querySelector(".column-wrapper");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  imageArea.classList.toggle("h1");

  if (imageArea.classList.contains("h1")) {
    button.innerHTML = "DO SOMETHING";
  } else {
    button.innerHTML = "DO NOTHING";
  }
});

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

style1.onclick = function () { swapStyleSheet("style.css") };
style2.onclick = function () { swapStyleSheet("alternate.css"); };
}

window.onload = initate;
