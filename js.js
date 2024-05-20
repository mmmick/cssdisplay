// Stores all <div>, <p> and <span> in a variable
var elems = document.querySelectorAll("div, span, p");
console.log(elems);

// Sets all elements to display: BLOCK;
function allblock() {
  for (var i = 0; i < elems.length; i++) {
    event.stopPropagation();
    if(elems[i].style.display === 'inline', 'inline-block') {
      elems[i].style.display = 'block';
    }
  }
}

// Sets all elements to display: INLINE-BLOCK;
function allinlineblock() {
  for (var i = 0; i < elems.length; i++) {
    event.stopPropagation();
    if(elems[i].style.display === 'block', 'inline') {
      elems[i].style.display = 'inline-block';
    }
  }
}

// Sets all elements to display: INLINE;
function allinline() {
  for (var i = 0; i < elems.length; i++) {
    event.stopPropagation();
    if(elems[i].style.display === 'block', 'inline-block') {
      elems[i].style.display = 'inline';
    }
  }
}

// Sets all <p> to display: BLOCK; as default on load
var block = document.querySelectorAll("p");
for (var i = 0; i < block.length; i++) {
	block[i].style.display = 'block';
}

// Sets all <span> to display: INLINE; as default on load
var inline = document.querySelectorAll("span");
for (var i = 0; i < inline.length; i++) {
	inline[i].style.display = 'inline';
}

// Loops through all 'elems' found
for (var i = 0; i < elems.length; i++) {
  var self = elems[i];
  // Adds event listener to all 'elems'
  self.addEventListener('click', function (event) { 
      console.log('clackety clakc');
      // Stops bubbling to be able to click each element individually
      event.stopPropagation();
      if(this.style.display === 'block') {
        this.style.display = 'inline-block';
      } else if (this.style.display === 'inline-block') {
        this.style.display = 'inline';
      } else if(this.style.display === 'inline') {
        this.style.display = 'block';
      } else {
        return
      }
  }, false);
}
