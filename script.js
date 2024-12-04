const mylibrary = [
    book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    pages: 281,
    isRead: true,
},]

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    };
}

function addBookToLibrary() {
    mylibrary.push(book)
  }

function displayBooks(){
    const libraryContainer = document.getElementById("library");
    libraryContainer.innerHTML = '';

    mylibrary.forEach((book,index) =>{
        //we need to create a card for each
        const bookCard= document.createElement("div");
        bookCard.classList.add('book-card');

        //add book details to the card
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>${book.read ? 'Read' : 'Not read yet'}</p>
            <button onclick="removeBook(${index})">Remove</button>
        `;

        libraryContainer.appendChild(bookCard)
    })

}


// Example Usage
addBookToLibrary(new book('Atomic Habits', 'James Clear', 320, true));
addBookToLibrary(new book('The Hobbit', 'J.R.R. Tolkien', 310, false));
displayBooks();