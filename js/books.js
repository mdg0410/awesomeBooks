// eslint-disable-next-line no-unused-vars
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  createNode() {
    const node = document.createElement('li');
    node.innerHTML = `
        <span><span class="book-title">${this.title}</span> by ${this.author}</span> <button onclick="display.removeBook(${this.id})">Remove</button>
    `;

    return node;
  }
}