document.getElementById("btn-recent").addEventListener("click", function () {
  const newPost = document.getElementById("new-post").value;

  const recentsContainer = document.createElement("div");
  recentsContainer.classList.add("post"); 
  const recentsElement = document.createElement("p");
  recentsElement.innerText = newPost;

  recentsContainer.appendChild(recentsElement);

  const recentPostsContainer = document.getElementById("recents-container");
  recentPostsContainer.insertBefore(recentsContainer, recentPostsContainer.firstChild);

  document.getElementById("new-post").value = "";
});
