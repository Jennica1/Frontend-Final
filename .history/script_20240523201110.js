const uglyButton = document.getElementById("button-1")
const beautifulButton = document.getElementById("button-2")
const saveButton = document.getElementById("button-3")
const thumbsDown = document.getElementById("thumbs-down")
const heart = document.getElementById("heart");

const uglyAppear = () => {
    thumbsDown.style.display = "block";
}

const uglyDisappear = () => {
    thumbsDown.style.display = "none";
}

const beautifulAppear = () => {
    heart.style.display = "block";
}

const beautifulDisappear = () => {
    heart.style.display = "none"
}