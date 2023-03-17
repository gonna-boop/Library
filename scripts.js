// myLibrary is the array {of objects} that we will be displaying within the webpage
const myLibrary = [];
let i = 0; // for creating new book cards
let Book = []; // myLibrary contains Books
let id = 0; // for assigning each card a unique data ID
let rowNum = 0;
let colorNum = 0;


// The below function is called by the createBook() function
// it takes the information from the modal and uses it to create a book card
// the cards are aligned, at max, 4 to a row, and can continue indefinitely
// the cards are also assigned unique data IDs for the removeBook() and
// createBook() functions to operate using
function createBookCard(Book) {
  if (rowNum >= 0) {
    const newDiv = document.createElement('div');
    newDiv.className = 'grid col-sm mb-4';
    const bookTemplate = '<div class="card h-100 bg-primary text-light align-items-center"'
    + 'data-color-id='
    + `${Book.id = id}`
    + '>'
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
        + '<div class="flex form-check mb-3">'
        + '<input class="form-check-input" data-check-id="'
        + `${Book.id = id}`
        + '" type="checkbox" onClick="readBook('
        + `${id}`
        + ')" id="defaultCheck1">'
        + '<p class="text" for="defaultCheck1">Read?'
        + '</p>'
      + '</div>'
        + '<button type="button" class="btn btn-outline-light" data-remove-id='
        + `${Book.id = id}`
        + ' onClick="removeBook('
        + `${id}`
        + ')" id="remove-btn">Remove</button>'
        + '</div></div></div>';
    newDiv.dataset.id = id;
    id++;
    newDiv.dataset.rowNum = rowNum;
    rowNum++;
    newDiv.innerHTML += bookTemplate;
    document.getElementById('bookGrid').appendChild(newDiv);
  }
  return Book;
}
// the below function does a few things.  First, it constructs a book object
// based on the information a user enters into the Modal/Form.
// From here, that information is pushed to the myLibrary Array.
// The function is triggered when a user hits the "submit" button.
// This function will then call the createBookCard() function
// passing it a Book
const createBook = () => {
  Book = {
    title: document.getElementById('Title').value,
    author: document.getElementById('Author').value,
    pages: document.getElementById('numPages').value,
  };
  if (Book.title === '') {
    alert('Book title is empty.');
    return false;
  } if (Book.author === '') {
    alert('Author is empty.');
    return false;
  } if (Book.pages === '') {
    alert('Pages field is empty.');
    return false;
  }
  myLibrary.push(Book);
  document.forms[0].reset();
  while (i < myLibrary.length) {
    createBookCard(myLibrary[i]);
    i++;
  }
  return Book;
};

// the below function removes a single book card by using the
// data-remove-id number unique to a specific card
function removeBook(id) {
  const selected = document.querySelector(`[data-remove-id="${id}"]`);
  const selectedId = selected.dataset.removeId;
  const newDiv = document.querySelector(`[data-id="${selectedId}"]`);
  newDiv.remove();
}

// the below function changes the color of a single book card by using the
// data-color-id number unique to each card
// it uses a variable to read whether or not the card has been changed in color
// and allows the function to run over and over, resetting colorNum each time
function readBook(id) {
  if (colorNum === 0) {
    const selected = document.querySelector(`[data-color-id="${id}"]`);
    selected.classList.remove('bg-primary');
    selected.classList.add('bg-secondary');
    colorNum = 1;
    return colorNum;
  } if (colorNum === 1) {
    const selected = document.querySelector(`[data-color-id="${id}"]`);
    selected.classList.remove('bg-secondary');
    selected.classList.add('bg-primary');
    colorNum = 0;
    return colorNum;
  }
}
// the code below "kicks off" the Javascript, so to speak.  When the "Add Book"
// button is clicked on the modal, the createBook() function will run
document.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('submit-btn');
  if (submit) {
    submit.addEventListener('click', createBook);
  }
});
