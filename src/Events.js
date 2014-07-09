var Events = {

  on: function(eventName, callback) {
    if (!this.events) {
      this.events = {};
    }
    if(!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
}