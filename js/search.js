let myInput = document.querySelector('#my-input');
myInput.addEventListener('keyup', mySearchFunction);
let item = document.querySelectorAll("h4");

function mySearchFunction() {
  // Filter, makes search not case sensitive
  let filter = myInput.value.toLowerCase();

  // Treats lists items like an array, where each item can be accessed through it's index
  for (let i = 0; i < item.length; i++) {
    // Iterate over each list item to see if the value of the input, ignoring case, matches the inner text or inner html of the item.
    let title = item[i];
    let newTitle = title.innerHTML.toLowerCase();
    
    // Allows you to reset the display of the training offered.
    if (!filter){
      let parent = $(title).parent().parent();
      $(parent).css("display", "flex")
    }
    // hides training that does not meet the search criteria.
    if (!newTitle.includes(filter)){
      let parent = $(title).parent().parent();
      $(parent).css("display", "none")
      
    // Acts the same as the first "if" but serves as security.  
    } else {
      let parent = $(title).parent().parent();
      $(parent).css("display", "flex")
    }
  }
}