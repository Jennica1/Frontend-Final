document.getElementById("btn-recent").addEventListener("click", function () {
  const newPostText = document.getElementById("new-post").value;
  const timeStamp = new Date().toLocaleDateString(); // Get the current date as the time stamp

  // Create a new post container
  const recentsContainer = document.createElement("div");
  recentsContainer.classList.add("post");

  // Create a paragraph element for the time stamp
  const timeStampElement = document.createElement("p");
  timeStampElement.classList.add("time-stamp");
  timeStampElement.innerText = timeStamp;

  // Create a paragraph element for the post text
  const recentsElement = document.createElement("p");
  recentsElement.classList.add("post-text");
  recentsElement.innerText = newPostText;

  // Append the time stamp and post text to the post container
  recentsContainer.appendChild(timeStampElement);
  recentsContainer.appendChild(recentsElement);

  // Get the container for recent posts
  const recentPostsContainer = document.getElementById("recents-container");

  // Insert the new post container before the first child of the recent posts container
  recentPostsContainer.insertBefore(recentsContainer, recentPostsContainer.firstChild);

  // Clear the input field
  document.getElementById("new-post").value = "";
});
