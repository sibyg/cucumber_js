'use strict';

var groceryList = {
  add: function(item) {
    this.list.push(item);
  },

  getAll: function() {
    return this.list;
  }
    ,
  getItemIndex: function(item) {
  var index = this.list.length;
  while (--index > -1) {
      if (this.list[index] == item) {
        return index;
      }
  }
  return -1;
  }
};

module.exports = {
  create: function() {
    return Object.create(groceryList, {
    'list' :   {
        value: [],
        writable: true,
        enumerable: true
    }
    });
  }


};