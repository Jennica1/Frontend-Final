const uglyButton = document.getElementById("button-1")
const beautifulButton = document.getElementById("button-2")
const saveButton = document.getElementById("button-3")
const thumbsDown = document.getElementById("thumbs-down")

const ugly = () => {
    if(thumbsDown.style.display === "none") {
        thumbsDown.style.display === "block" 
    } else {
        thumbsDown.style.display === "none"
    }
}