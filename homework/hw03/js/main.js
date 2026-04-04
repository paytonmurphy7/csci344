// requires utilities.js to be loaded first:
// included in index.html


const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "mmurphy7";   // change to your username :)
let password = "password";

async function initializeScreen() {
    token = await getToken();
    showNav();
    // invoke all of the Part 1 functions here
    showPosts();
}

//fetch and display the posts
async function showPosts() {
    // fetch the posts from /api/posts
    const endpoint = `${rootURL}/api/posts/`;
    // fetching server response headers
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    //fetching the reponse body 'payload'
    const posts = await response.json();
    console.log(posts);
    // select the posts container
    const postsContainerEl = document.querySelector('#postsContainer');
    // loop through the first 10 posts
    posts.forEach(post => {
        const htmlSnippet = postsToHTML(post);
    // build each post's HTML (or call a helper function)
    // insert the rendered posts into the DOM
        postsContainerEl.insertAdjacentHTML('beforeend', htmlSnippet);
    });
    
}

function postsToHTML(post){
    return `
        <!-- Post 1 -->
        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${post.user.username}</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${post.image_url}" alt="Post photos" width="300" height="300"
                class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${getLikeButton(post)}
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${ getBookmarkButton(post)}
                    </div>
                </div>
                <p class="font-bold mb-3">${post.likes.length} likes</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${post.user.username}</strong>
                        ${post.caption}<button class="button">more</button>
                    </p>
                </div>
                ${getComments(post)}
                <p class="uppercase text-gray-500 text-xs">${post.display_time}</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>
    `
}

function getComments(post) {
    const comments = post.comments;
    if (comments.length === 0) {
        return ``;
    }
    if (comments.length === 1) {
        const comment = comments[0];
        return `
            <p class="text-sm mb-3">
                <strong>${comment.user.username}</strong>
                ${comment.text}
            </p>
        `;
    }
    const lastComment = comments[comments.length - 1];
    return `
        <button class="text-sm text-gray-500 mb-2">
            View all ${comments.length} comments
        </button>
        <p class="text-sm mb-3">
            <strong>${lastComment.user.username}</strong>
            ${lastComment.text}
        </p>
    `;
}

function getBookmarkButton(post) {
    if (post.current_user_bookmark_id !== undefined) {
        return `<button data-post-id="${post.id}" onclick="unBookmark(${post.current_user_bookmark_id}, this)">
                    <i class="fas fa-bookmark"></i>
                </button>`;
    } else {
        return `<button data-post-id="${post.id}" onclick="bookmark(${post.id}, this)">
                    <i class="far fa-bookmark"></i>
                </button>`;
    }
}

function getLikeButton(post){
    if (post.current_user_like_id !== undefined) {
        return `
            <button data-post-id="${post.id}" onclick="unLike(${post.current_user_like_id}, this)">
                <i class="fas fa-heart" style="color: red;"></i>
            </button>
        `;
    } else {
        return `
            <button data-post-id="${post.id}" onclick="like(${post.id}, this)">
                <i class="far fa-heart"></i>
            </button>
        `;
    }
}

async function like(postID, buttonEl){
    const response = await fetch(`${rootURL}/api/likes/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ post_id: postID })
    });

    const data = await response.json();
    console.log(data);

    // update UI
    buttonEl.innerHTML = '<i class="fas fa-heart" style="color: red;"></i>';
    buttonEl.setAttribute("onclick", `unLike(${data.id}, this)`);
}

async function unLike(likeID, buttonEl){
    const response = await fetch(`${rootURL}/api/likes/${likeID}`, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    console.log(data);

    // update UI
    buttonEl.innerHTML = '<i class="far fa-heart"></i>';
    buttonEl.setAttribute("onclick", `like(${buttonEl.dataset.postId}, this)`);
}

async function bookmark(postID, buttonEl){
    const response = await fetch(`${rootURL}/api/bookmarks/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ post_id: postID })
    });
    const data = await response.json();
    console.log(data);
    // change the button to solid bookmark
    buttonEl.innerHTML = '<i class="fas fa-bookmark"></i>';
    buttonEl.setAttribute("onclick", `unBookmark(${data.id}, this)`);
}

async function unBookmark(bookmarkId, buttonEl) {
    const endpoint = `${rootURL}/api/bookmarks/${bookmarkId}`;
    const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

    // update button to hollow bookmark
    buttonEl.innerHTML = '<i class="far fa-bookmark"></i>';
    buttonEl.setAttribute("onclick", `bookmark(${buttonEl.dataset.postId}, this)`);
}




async function getToken() {
    return await getAccessToken(rootURL, username, password);
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

initializeScreen();
