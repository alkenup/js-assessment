arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.
    /* // Other implementation
    for (i in arr) {
      if (arr[i] == item) {
        return parseInt(i);
      }
    }
    return -1;
    */
    var index = -1;
    var acum = 0;
    arr.forEach(function (itemAux) {
      if (itemAux == item) {
        index = acum;
      }
      acum++;
    });
    return index;
  },

  /**
   * Determine the sum of the items of arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
    var acum = 0;
    /* // Other implementation
    for(i in arr) { // Other implementation
      if(typeof arr[i] == "number") {
        acum += arr[i];
      }
      else {
        throw "UserException: The array must be numeric";
      }
    }
    */
    arr.forEach(function (item) {
      acum += item;
    });
    return acum;
  },

  /**
   * Create a new array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {
    return arr.filter(x => x != item);
  },

  /**
   * Removes the item from the array, arr (added by Manuel Barona: this funtion definition was not on the master branch)
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} The array, arr, containing all numbers from arr except item.
   */
  removeWithoutCopy: function removeWithoutCopy(arr, item) {
    var index = arraysAnswers.indexOf(arr, item);
    if(index != -1) {
      arr.splice(index, 1);
      return removeWithoutCopy(arr, item)
    }
    else
    {
      return arr;
    }
  },

  /**
   * Adds a number, item, to the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
    var newArray = arr.splice(0);
    newArray.push(item);
    return newArray;
  },

  /**
   * Removes a number, item, from the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {
    arr.pop();
    return  arr;
  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {
    arr.unshift(item);
    return  arr;
  },


  /**
   * Removes the first element from an array
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
    arr.shift();
    return  arr;
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   * 
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
    var newArray = arr1.slice(0);
    for(i in arr2) {
      newArray.push(arr2[i]);
    }
    return newArray;
  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
    var acum = 0;
    /* // Other implementation
    for (i in arr){
      if (arr[i] == item){
        acum++;
      }
    }
    */    
    arr.forEach(function (itemAux) {
      if (itemAux == item) {
        acum++;
      }
    });
    return acum;
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {
    var arrAux = [];
    arr.forEach(function (item) {
      if(arraysAnswers.indexOf(arrAux, item) == -1 && arraysAnswers.count(arr, item) > 1) {
        arrAux.push(item);
      }
    });
    
    return arrAux;
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {
    return arr.map(function (item) {
      return item*item;
    });
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {
    var index = arraysAnswers.indexOf(arr, target);
    var arrAux = arr.slice(0);
    arrAux.splice(index, 1);
    if(index == -1) {
      return [];
    }
    else {
      return arraysAnswers.concat(
        [index], 
        arraysAnswers.findAllOccurrences(
          arrAux, 
          target
        )
      );
    }
  },
};
