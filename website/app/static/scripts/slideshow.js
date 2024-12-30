slides = document.getElementsByClassName("slide");
const dots_container = document.getElementById("dots-container");
let index = 0;

for(let i=0; i<slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = function() {showSlide(i)};
    dots_container.appendChild(dot);
}

slideshow();

console.log(slides.length);

function next(n) {
    showSlide(index += n);
}

function showSlide(n) {
    if(n >= slides.length) {
        index = 0;
    } else if(n < 0) {
        index = slides.length -1;
    } else {
        index = n;
    }
    for(let i=0; i < slides.length; i++) {
        if(i==index) {
            slides[i].style.display = "block";
            dots_container.children[i].classList.add("active");

        } else {
            slides[i].style.display = "none";
            dots_container.children[i].classList.remove("active");
        }
    }
}

function slideshow() {
    showSlide(index+1);
    setTimeout(slideshow, 5000)
}