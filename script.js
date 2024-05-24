const uglyButton = document.getElementById("button-1")
const beautifulButton = document.getElementById("button-2")
const saveButton = document.getElementById("button-3")
const thumbsDown = document.getElementById("thumbs-down")
const heart = document.getElementById("heart");
const save = document.getElementById("save")

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
    heart.style.display = "none";
}

const saveAppear = () => {
    save.style.display = "block";
}

const saveDisappear = () => {
    save.style.display = 'none';
}

document.getElementById("btn-post").addEventListener("click", function () {

  const newComment = document.getElementById("new-comment").value;


  const commentContainer = document.createElement("div");
  commentContainer.classList.add("message"); 
  const commentElement = document.createElement("p");
  commentElement.innerText = newComment;


  commentContainer.appendChild(commentElement);


  const messageBoardContainer = document.getElementById("message-board-container");
  messageBoardContainer.appendChild(commentContainer);

 
  document.getElementById("new-comment").value = "";
});