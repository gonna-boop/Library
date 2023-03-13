let myLibrary = []; // this is the array {of objects} that we will be displaying within the webpage
let i = 0;
let Book = [];
let id = 0;

function createBookCard(Book) {
  const newDiv = document.createElement('div');
  let bookTemplate = '<div class="col-md">'
+ '<div class="card bg-secondary text-light">'
  + '<div class="card-body text-center">'
    + '<div class="mb-2">'
      + '<i class="bi bi-book"></i></div>'
    + '<h3 class="card-title">'
        + `${Book.title}`
            + '</h3>'
        + '<p class="card-text">'
        + `${Book.author}`
            + '</p>'
        + '<p class="card-text">'
        + `${Book.pages}` 
        + ' pages'
        + '</p>'
        + '<button type="button" class="btn btn-outline-light" data-remove-id='
        + `${Book.id = id}`
        + ' onClick="removeBook()" id="remove-btn">Remove</button>'
        + '</div></div></div>';
  newDiv.dataset.id = id;
  id++;

  newDiv.innerHTML += bookTemplate;
  document.getElementById('bookGrid').appendChild(newDiv);
}
// the below function does a few things.  First, it constructs a book object
// based on the information a user enters into the Modal/Form.
// From here, that information is pushed to the myLibrary Array.
// The function is triggered when a user hits the "submit" button.
const createBook = () => {
  Book = {
    title: document.getElementById('Title').value,
    author: document.getElementById('Author').value,
    pages: document.getElementById('numPages').value,
    read: document.getElementById('flexCheckDefault').checked,
  };
  myLibrary.push(Book);
  document.forms[0].reset();
  while (i < myLibrary.length) {
    createBookCard(myLibrary[i]);
    i++;
  }
  return Book;
};

function removeBook(removeID) {
  // record id of the remove button that was used
  let buttonClicked = document.getElementById('remove-btn');
  removeID = buttonClicked.dataset;
  console.log(removeID);
  // match the button id with the id of the card
  // remove associated ID
}

// the code below "kicks off" the Javascript, so to speak.  When the "Add Book"
// button is clicked on the modal, the createBook() function will run
document.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('submit-btn');
  if (submit) {
    submit.addEventListener('click', createBook);
  }
});

