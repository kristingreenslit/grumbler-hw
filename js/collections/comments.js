App.Collections.Comments = Backbone.Collection.extend({
  initialize: function(){
    console.log("new comments collection")
  },
  model: App.Models.Comment, //any object we pass in will now be a Grumble model
  url: 'http://localhost:3000/comments'
});
