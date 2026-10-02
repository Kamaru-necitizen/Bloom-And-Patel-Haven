/*====================================
BLOG PAGE SCRIPT
======================================*/

function togglePost(id) {
  const post = document.getElementById(id);
  if (post.style.display === "none") {
    post.style.display = "block"; // show the full content
  } else {
    post.style.display = "none";  // hide it again
  }
}
