let dataArray = [];

fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    response.json().then((data) => {
        const postList = document.getElementById("postList");

for (let post of data) {
    const newPost = document.createElement("ul");
    newPost.innerHTML = `
    <li>Title: ${post.title}
    <li>Body: ${post.body}`;
    postList.appendChild(newPost)
}
    })
})

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", () => {
    console.log("Loading...");
    const postTitle = document.getElementById("titleInput");
    const postBody = document.getElementById("postBody");
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', // Indicate the type of content being sent
        },
        body: JSON.stringify({ // Convert the data to a JSON string for the body
        title: postTitle,
        body: postBody
     })
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
        }
)




