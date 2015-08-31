App.Models.Comment = Backbone.Model.extend({
  // defaults:{pizza: "new pizza"},
    initialize: function(){
      console.log("new comment")
    },
    urlRoot: "http://localhost:3000/comments"
});
