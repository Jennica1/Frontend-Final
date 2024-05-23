document.getElementById("btn-post").addEventListener("click", function () {

  const newComment = document.getElementById("new-comment").value;

  const commentContainer = document.getElementById("comment-container");
  const commentElement = document.createElement("p");
  commentElement.innerText = newComment;

  commentContainer.appendChild(commentElement);

  document.getElementById("new-comment").value = "";
});