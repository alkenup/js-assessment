stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    if(typeof str != "string" || str == "") {
      return str;
    }
    if(amount == 0)
    {
      return "";
    }
    
    var actualChar = "";
    var amountCount = 1;
    var reducedString = "";

    for(var i = 0; i< str.length; i++) {
      if(actualChar != str.charAt(i)) {
        actualChar = str.charAt(i);
        reducedString += actualChar;
        amountCount = 1;
      }
      else if(amountCount < amount) {
        reducedString += actualChar;
        amountCount++;
      }
    }
    return(reducedString);
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    if(str == "") {
      return "";
    }
    else {
      return stringsAnswers.reverseString(str.substr(1)) + str.charAt(0);
    }
  },
};
