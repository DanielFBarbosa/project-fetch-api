const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");

const postsContainer = document.querySelector("#posts-container");

//Get all post
async function getAllPosts() {
const response = await fetch(url);

console.log(response);

const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");
}

getAllPosts();