// JavaScript för att implementera kraven A-D.



// Testar denna ideen? Får inte rätt på detta!!!

$(function () {
    $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
        data.forEach(function(post){

            $('#postsList').append('<h2>'+post.title+'</h2>')
            $('#postsList').append('<div>'+post.body+'</div>')

            $('#postsList').append('<button onclick="console.log(`Samma kommentar i consolen`)">Lode comments</button>')
        })
    })


// listComments ska bara skick till knappen ist och mycket mer 


    $(function listComments() {
        $.get('https://jsonplaceholder.typicode.com/comments', function (data) {
            data.forEach(function(post){
                $('#postsList').append('<h6>'+post.postId+'</h6>')
                $('#postsList').append('<h6>'+post.name+'</h6>')
                $('#postsList').append('<h6>'+post.email+'</h6>')
                $('#postsList').append('<h6>'+post.body+'</h6>')
            })
        })
    })

})




    // Testar denna ideen! Får inte rätt på det!
/*
let postList = $("#post-list");

function getPost(url) {
    $.get(url, (data) => {
        for(let product of data) {
        showPost(product)
    }
});
}

function showPost(product) {
    let postId = $("<article></article>");
    let title =$("<h2></h2>");
    let body =$("<h3></h3>");
    let button = $("<button></button>");

    title.text(product.title);
    body.text(product.body);

    postId().append(title);
    postId().append(body);

    postList.append(postId);
})


getPost("https://jsonplaceholder.typicode.com/posts");



*/







