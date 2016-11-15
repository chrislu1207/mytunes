// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      console.log('Enter ended functionality', this);
      this.shift();
      console.log('this post shift', this);
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove();
    });
  },

  playFirst: function() {
    this.models[0].play();
  },

});