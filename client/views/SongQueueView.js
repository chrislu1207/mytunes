// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.collection.forEach(this.renderSongQueueEntryView, this);
  },

  renderSongQueueEntryView: function() {
    var songQueueEntryView = new SongQueueEntryView();
    this.$el.append(songQueueEntryView.render());
  }

});
