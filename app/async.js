asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    promise = new Promise(
      (resolve, reject) => {
        if(value) {
          resolve(value);
        }
        else {
          reject (value);
        }
      }
    );
    return promise;
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    promise = new Promise(
      (resolve, reject) => {
        $.ajax({
          url: url,
          success: function (data) {
            //all this is missing in the statement
            var result = [];
            for(i in data.people){ 
              result.push( data.people[i].name);
            }
            result.sort();
            resolve(result);
          },
          error: function(request, status, error) {
            alert("Error: "+error+"\n"+"Status: "+status);
            reject(url);
          }
        });
      }
    );
    return promise;
  }
};
