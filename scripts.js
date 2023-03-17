// myLibrary is the array {of objects} that we will be displaying within the webpage
const myLibrary = [];
let i = 0; // for creating new book cards
let Book = []; // myLibrary contains Books
let id = 0; // for assigning each card a unique data ID
let rowNum = 0;

function createBookCard(Book) {
  if (rowNum === 100) {
    console.log('create row AND first card');
    rowNum++;
  } else if (rowNum >= 0) {
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
        + '" type="checkbox" value="" onClick="readBook('
        + `${id}`
        + ')" id="defaultCheck1">'
        + '<label class="form-check-label" for="defaultCheck1">Read?'
        + '</label>'
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
  } else if (rowNum <= 2) {
    console.log('rowNum reset after card added');
    rowNum = 0;
  }

  return Book;
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

function removeBook(id) {
  // record id of the remove button that was used
  const selected = document.querySelector(`[data-remove-id="${id}"]`);
  // let selected = document.querySelector(`[data-remove-id="${id}"]`);
  const selectedId = selected.dataset.removeId;
  const newDiv = document.querySelector(`[data-id="${selectedId}"]`);
  newDiv.remove();
  // match the button id with the id of the card
  // remove associated ID

  // add remove confirmation
  // add progress field
}

function readBook(id) {
  const selected = document.querySelector(`[data-color-id="${id}"]`);
  selected.classList.remove('bg-primary');
  selected.classList.add('bg-secondary');
  console.log(selected);
  // const selectedId = selected.dataset.checkId;
  // console.log(selectedId);
  // const newDiv = document.querySelector(`[data-id="${selectedId}"]`);
  // console.log(newDiv);
  // document.getElementById('bookGrid').appendChild(newDiv);
}
// the code below "kicks off" the Javascript, so to speak.  When the "Add Book"
// button is clicked on the modal, the createBook() function will run
document.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('submit-btn');
  if (submit) {
    submit.addEventListener('click', createBook);
  }
});
