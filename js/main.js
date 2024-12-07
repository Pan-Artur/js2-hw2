//Task 1

const sliderEl = document.querySelector(".slider__input");
const imageEl = document.querySelector(".slider__image");

sliderEl.addEventListener("input", _.debounce((e) => {
    imageEl.style.width = `${sliderEl.value}px`;
    imageEl.style.height = `${sliderEl.value}px`;
}, 500));

//Task 2

const boxEl = document.querySelector("#box");

let isMoving = false; 
let offsetX, offsetY;

function moveBox(e) {
    if (isMoving) {
        boxEl.style.position = "absolute";
        boxEl.style.top = `${e.clientY - offsetY}px`;
        boxEl.style.left = `${e.clientX - offsetX}px`;
    }
};

const optimizedMoveBox = _.throttle(moveBox, 20);

boxEl.addEventListener("mousedown", (e) => {
    isMoving = true;

    offsetX = e.clientX - boxEl.getBoundingClientRect().left;
    offsetY = e.clientY - boxEl.getBoundingClientRect().top;

    document.addEventListener("mousemove", optimizedMoveBox);
});

document.addEventListener("mouseup", () => {
    isMoving = false;
    document.removeEventListener("mousemove", optimizedMoveBox);
});