// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var that = this;
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function (data) {
        console.log('Parse: Message received');
        // console.log(data, that);
        that.add(data.results);
      },
      error: function (data) {
        console.error('Parse: Failed to receive message', data);
      }
    });
  },

});