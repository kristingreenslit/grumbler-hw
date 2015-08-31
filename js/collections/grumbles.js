App.Collections.Grumbles = Backbone.Collection.extend({
  // initialize: function(){
  //   console.log("new grumbles collection")
  // },
  model: App.Models.Grumble, //any object we pass in will now be a Grumble model
  url: 'http://localhost:3000/grumbles'
})
