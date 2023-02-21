let books = [

];

const booksContainer = document.getElementById('containerBooks');

function saveData() {
  localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(index) {
  books.splice(index, 1);
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

function addBook(title, author) {
  books.push({ title, author });
  render();
}

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  const thisForm = e.target;
  const title = thisForm[0].value;
  const author = thisForm[1].value;
  addBook(title, author);
  saveData();
};