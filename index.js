var db = require('./models');

// This finds one author in the table and then creates
//  a post by that author
db.author.findOne().then(function(author) {
  author.createPost({
    title: 'Why I hate Sequelize',
    content: 'Because its just so finnicky'
  }).then(function(post) {
    console.log(post.get());
  });
});

// This finds one author and then gets all
//  the posts of that author
db.author.findOne().then(function(author) {
  // load posts for this author
  author.getPosts().then(function(posts) {
    //do something with posts here
    console.log(posts);
  });
});

// This finds one author with the matching name
//  and then creates a post by that author
db.author.findOne({
  where: {
    name: 'Pious Augustus'
  }
}).then(function(author) {
  author.createPost({
      title: 'How Sequelize saved my life',
      content: 'I was drowning in code...'
    }).then(function(post) {
      console.log(post.get());
    });
});

// This finds all authors and then "includes" the post
//  model so that all the author's posts are linked to it
//  as an object (e.g. "author.posts")
db.author.findAll({
  include: [db.post]
}).then(function(authors) {
  // console.log(author.posts);
  authors.forEach(function(author) {
    console.log(author.posts);
  });
});
