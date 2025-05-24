// Returns the first element that matches the specified CSS selectors.
Document.prototype.querySelectornew = function(selectors) {
    var idSelector = selectors.split('#')[1];
    var classSelector = selectors.split('.')[1];
    var tagSelector = selectors.split(' ')[0];

    if (idSelector) {
      return document.getElementById(idSelector);
    } else if (classSelector) {
      var elements = document.getElementsByTagName('*');
      for (var i = 0; i < elements.length; i++) {
        var classNames = elements[i].className.split(' ');
        if (classNames.indexOf(classSelector) !== -1) {
          return elements[i];
        }
      }
    } else if (tagSelector) {
      return document.getElementsByTagName(tagSelector)[0];
    } else {
      return null;
    }
  };

  window.addEventListener("DOMContentLoaded",(e)=>{
    var highlightedElement = document.querySelectornew('.height');
    console.log("highlight",highlightedElement)
    highlightedElement.style.color = 'red';
  })