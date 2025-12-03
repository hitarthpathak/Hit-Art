let new_post = document.getElementById("new-post");
let posts_list = document.getElementById("posts-list");

// --------------------------------------------------------------------------------------------------

let blog_posts = JSON.parse(localStorage.getItem("blog-posts")) || [];

// --------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {
    if (blog_posts.length == 0) {
        posts_list.textContent = "No Posts!";
    }
    else {
        load_posts();
    }
});

// --------------------------------------------------------------------------------------------------

function load_posts() {
    posts_list.innerHTML = "";
    if (blog_posts.length == 0) {
        posts_list.textContent = "No Posts!";
        return;
    }
    blog_posts.forEach((post, index) => {
        let p = document.createElement('p');
        p.className = "post";
        p.innerHTML = `
            <span class="span">${post}</span>
            <div class="button-box">
                <button class="edit" onclick="edit_post(${index})">Edit</button>
                <button class="delete" onclick="delete_post(${index})">Delete</button>
            </div>
        `;
        posts_list.appendChild(p);
    });
};

// --------------------------------------------------------------------------------------------------

function add_post() {
    if (new_post.value != "") {
        blog_posts.push(new_post.value);
        localStorage.setItem("blog-posts", JSON.stringify(blog_posts));
        new_post.value = "";
        load_posts();
    }
    else {
        alert("Please Enter A Post!");
    }
};

// --------------------------------------------------------------------------------------------------

function edit_post(index) {
    new_post.value = blog_posts[index];
    blog_posts.splice(index, 1);
    localStorage.setItem("blog-posts", JSON.stringify(blog_posts));
    load_posts();
};

// --------------------------------------------------------------------------------------------------

function delete_post(index) {
    blog_posts.splice(index, 1);
    localStorage.setItem("blog-posts", JSON.stringify(blog_posts));
    load_posts();
};