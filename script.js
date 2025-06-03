const fetchButton = document.getElementById("fetchButton");
const postList = document.getElementById("postList");

fetchButton.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((posts) => {
        postList.innerHTML = "";
        for(post of posts) {
            const newPost = document.createElement("ul");
            newPost.innerHTML = `
            <li>Title: ${post.title}
            <li>Body: ${post.body}
            `;
            postList.appendChild(newPost);
        }
    });
});