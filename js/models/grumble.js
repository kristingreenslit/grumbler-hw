App.Models.Grumble = Backbone.Model.extend({
  // defaults:{pizza: "new pizza"},
    // initialize: function(){
    //   console.log("new grumble")
    // },
  urlRoot: "http://localhost:3000/grumbles", //whatever api endpoint you're hitting
  initialize: function(){
      this.comments = new Comments();
      this.comments.url = this.url() + "/comments";
  }
});
