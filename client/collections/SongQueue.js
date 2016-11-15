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
      console.log(this.at(0).attributes.title, 'has ended');
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('clickRemove', this.remove);
  },

  playFirst: function() {
    console.log('Playing', this.at(0).attributes.title);
    this.at(0).play();
  },

  removeFromQueue: function() {
    // if song clicked on is the first song
      // trigger dequeue
    // else
      // remove this
  }

});