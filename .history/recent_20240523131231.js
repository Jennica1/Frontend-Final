document.getElementById("btn-recent").addEventListener("click", function () {
  const newPostText = document.getElementById("new-post").value;
  const timeStamp = new Date().toLocaleDateString(); // Get the current date as the time stamp

  const recentsContainer = document.createElement("div");
  recentsContainer.classList.add("post");

  const timeStampElement = document.createElement("p");
  timeStampElement.classList.add("time-stamp");
  timeStampElement.innerText = timeStamp;

  const recentsElement = document.createElement("p");
  recentsElement.classList.add("post-text");
  recentsElement.innerText = newPostText;

  // Append the time stamp and post text to the post container
  recentsContainer.appendChild(timeStampElement);
  recentsContainer.appendChild(recentsElement);

  // Get the container for recent posts
  const recentPostsContainer = document.getElementById("recents-container");




  document.getElementById("new-post").value = "";
});
