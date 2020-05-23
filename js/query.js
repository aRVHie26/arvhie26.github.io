$(document).ready(()=> {
    $.get("https://jsonplaceholder.typicode.com/posts", (posts) => {
        console.log(posts);
        let ul = document.createElement('ul');
        let ulTemplate = document.importNode(ul, true);

        for(index = 0; index < posts.length; index++){
            let li = document.createElement('li');
            let text = document.createTextNode(posts[index].title);
            li.appendChild(text);
            ulTemplate.appendChild(li);
        }

        document.getElementById('template').appendChild(ulTemplate);
    })
})