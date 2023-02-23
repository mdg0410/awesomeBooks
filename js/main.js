let display;

window.onload = () => {
  // eslint-disable-next-line no-undef
  display = new BookDisplay();
  display.render();
};

const len = () => {
  const aux = display.books.length;
  let aux1;
  if (aux !== 0) {
    aux1 = display.books[aux - 1].id + 1;
  } else {
    aux1 = 1;
  }
  return aux1;
};

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  const thisForm = e.target;
  const title = thisForm[0].value;
  const author = thisForm[1].value;
  const id = len();
  // eslint-disable-next-line no-undef
  const newBook = new Book(title, author, id);
  display.addBook(newBook);
  thisForm.reset();
};