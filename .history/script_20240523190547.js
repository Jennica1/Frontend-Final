const uglyButton = document.getElementById("button-1")
const beautifulButton = document.getElementById("button-2")
const saveButton = document.getElementById("button-3")

function ugly() {
    const Ugly = document.getElementById("thumbs-down");
    if(Ugly.style.display === "none") {
        Ugly.style.display === "block";
    } else {
        Ugly.style.display === "none";
    }
}