let books = [

];

let Id;

const booksContainer = document.getElementById('containerBooks');

function saveData() {
  localStorage.setItem('books', JSON.stringify(books));
}

function checkDelete(pass) {
  return pass.id !== books[Id].id;
}

function removeBook(index) {
  Id = index;
  books = books.filter(checkDelete);
  saveData();
}

const render = () => {
  booksContainer.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    const element = document.createElement('li');
    element.innerHTML = `<span class="title">${books[i].title}</span> <br> ${books[i].author} <br>`;
    const button = document.createElement('button');
    const divider = document.createElement('hr');
    button.textContent = 'Remove';
    element.append(button);
    element.append(divider);
    button.onclick = () => {
      removeBook(i);
      render();
    };
    booksContainer.append(element);
  }
};

window.onload = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  render();
};

const len = () => {
  const aux = books.length;
  let aux1;
  if (aux !== 0) {
    aux1 = books[aux - 1].id + 1;
  } else {
    aux1 = 1;
  }
  return aux1;
};

function addBook(title, author, id) {
  books.push({ title, author, id });
  render();
}

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  const thisForm = e.target;
  const title = thisForm[0].value;
  const author = thisForm[1].value;
  const id = len();
  addBook(title, author, id);
  saveData();
};