let input_data = document.getElementById("input-data");
let add_data_btn = document.getElementById("add-data");
let posts = document.getElementById("posts");

function load_data() {
    let data_collection = JSON.parse(localStorage.getItem('data')) || [];
    posts.innerHTML = '';
    data_collection.forEach((data, index) => {
        create_data(data, index);
    });
};

function create_data(data, index) {
    let post = document.createElement('p');
    post.id = "data";
    post.innerHTML = `
        <span id="#span">${data}</span>
        <button id="delete" onclick="delete_data(${index})">Delete</button>
    `;
    posts.appendChild(post);
};

function add_data() {
    const data = input_data.value.trim();
    if (data) {
        let data_collection = JSON.parse(localStorage.getItem('data')) || [];
        data_collection.push(data);
        localStorage.setItem('data', JSON.stringify(data_collection));
        create_data(data, data_collection.length - 1);
        input_data.value = '';
    }
};

function delete_data(index) {
    let data_collection = JSON.parse(localStorage.getItem('data')) || [];
    data_collection.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data_collection));
    load_data();
};

add_data_btn.addEventListener('click', add_data);

window.onload = load_data;