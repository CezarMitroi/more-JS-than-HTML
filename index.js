let postsDiv = document.getElementById('posts');
let posts = [
  {
    name : 'HTML',
    author : 'Wiki',
    content : ' Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.[4]'
  },
  {
    name : 'CSS',
    author : 'Wiki',
    content : 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2] '
  },
  {
    name : 'JavaScript',
    author : 'Wiki',
    content : 'JavaScript often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. '
  }
];
posts.forEach(function(post){
  //create DOM
  let postDiv = document.createElement('div');
  let postNameDiv = document.createElement('div');
  let postAuthorDiv = document.createElement('div');
  let postContentDiv = document.createElement('div');
  //set content
postNameDiv.innerHTML = post.name;
postAuthorDiv.innerHTML = post.author;
postContentDiv.innerHTML = post.content;
  //set CSS
postDiv.setAttribute('class', 'post');
postNameDiv.setAttribute('class', 'post-name');
postAuthorDiv.setAttribute('class', 'post-author');
postContentDiv.setAttribute('class', 'post-content');
  //unite
postDiv.appendChild(postNameDiv);
postDiv.appendChild(postAuthorDiv); postDiv.appendChild(postContentDiv);
  //unite with original
postsDiv.appendChild(postDiv);
  

})

 
 
