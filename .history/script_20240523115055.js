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