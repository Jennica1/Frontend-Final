document.getElementById("btn-recent").addEventListener("click", function () {

  const newPost = document.getElementById("new-recent").value;


  const recentsContainer = document.createElement("div");
  recentsContainer.classList.add("post"); 
  const recentElement = document.createElement("p");
  recentElement.innerText = newComment;


  recentstContainer.appendChild(commentElement);


  const messageBoardContainer = document.getElementById("recents-container");
  messageBoardContainer.appendChild(commentContainer);

 
  document.getElementById("new-comment").value = "";
});
