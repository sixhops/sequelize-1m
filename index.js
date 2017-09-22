var db = require('./models');

// db.author.findOne().then(function(author) {
//   author.createPost({
//     title: 'Why I hate Sequelize',
//     content: 'Because its just so finnicky'
//   }).then(function(post) {
//     console.log(post.get());
//   });
// });

// db.author.findOne().then(function(author) {
//   // load posts for this author
//   author.getPosts().then(function(posts) {
//     //do something with posts here
//     console.log(posts);
//   });
// });
//
// db.author.findOne({
//   where: {
//     name: 'Pious Augustus'
//   }
// }).then(function(author) {
//   author.createPost({
//       title: 'How Sequelize saved my life',
//       content: 'I was drowning in code...'
//     }).then(function(post) {
//       console.log(post.get());
//     });
// });

db.author.findAll({
  include: [db.post]
}).then(function(authors) {
  // console.log(author.posts);
  authors.forEach(function(author) {
    console.log(author.posts);
  });
});
