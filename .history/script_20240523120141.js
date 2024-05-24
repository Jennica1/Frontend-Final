document.getElementById("btn-post").addEventListener("click", function () {
  // Get the new comment text
  const newComment = document.getElementById("new-comment").value;

  // Create a new container for the comment
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("message"); // Add the 'message' class
  const commentElement = document.createElement("p");
  commentElement.innerText = newComment;

  // Append the comment text to the new container
  commentContainer.appendChild(commentElement);

  // Append the new container to the message board container
  const messageBoardContainer = document.getElementById("message-board-container");
  messageBoardContainer.appendChild(commentContainer);

  // Clear the input field
  document.getElementById("new-comment").value = "";
});
