document.getElementById("btn-recent").addEventListener("click", function () {

  const newComment = document.getElementById("new-recent").value;


  const commentContainer = document.createElement("div");
  commentContainer.classList.add("post"); 
  const commentElement = document.createElement("p");
  commentElement.innerText = newComment;


  commentContainer.appendChild(commentElement);


  const messageBoardContainer = document.getElementById("recents-container");
  messageBoardContainer.appendChild(commentContainer);

 
  document.getElementById("new-comment").value = "";
});
