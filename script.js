class book {
    constructor(author, title, pages, read) {
        this.author = author,
        this.title = title,
        this.pages = pages,
        this.read = read;
    }
}

let library = [];
library.push(new book('Mirantee', 'Javascript is FUN', 50, true));
library.push(new book('AYAYA', 'AYAYA', 69, false));
library.push(new book('Billy', 'Gachi rule the WORLD', 123, true));

// function book(author, title, pages, read) {
//     this.author = author,
//     this.title = title,
//     this.pages = pages,
//     this.read = read;
// }

book.prototype.readStatus = function() {
    this.read = !this.read;
}

function addBook() {
    const author = document.getElementById('author');
    const title = document.getElementById('title');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');
    const newBook = new book(author.value, title.value, pages.value, read.checked);
    if (author.checkValidity() && 
        title.checkValidity() &&
        pages.checkValidity()) {
        library.push(newBook);
        author.value = '';
        title.value = '';
        pages.value = '';
        read.checked = false;    
        
        return true;
    }
    return false;
}

const shelf = document.querySelector('.bookshelf');

// display the bookshelf
function display() {
    let index = 0;
    for (const item of library) {
        const bookInfo = document.createElement('div');
        bookInfo.className = 'book';
        const bookInfoUpper = document.createElement('div');
        bookInfoUpper.className = 'book-upper';
        const bookInfoLower = document.createElement('div');
        bookInfoLower.className = 'book-lower';
    
        const author = document.createElement('div');
        author.className = 'author';
        const title = document.createElement('div');
        title.className = 'title';
        const pages = document.createElement('div');
        pages.className = 'pages';
        const read = document.createElement('div');
        read.className = 'read';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.setAttribute('data-index', index++);
        const readBtn = document.createElement('button');
        readBtn.classList.add('read-btn');
        
        bookInfo.append(bookInfoUpper, bookInfoLower);
        bookInfoUpper.append(author, title, pages, read);
        bookInfoLower.append(deleteBtn, readBtn);
        shelf.appendChild(bookInfo);
    
        author.textContent = `Author: ${item.author}`;
        title.textContent = `Title: ${item.title}`;
        pages.textContent = `Pages: ${item.pages}`;
        read.textContent = `Read: ${item.read}`;
        deleteBtn.textContent =  `Delete`;
        readBtn.textContent = `Read`;

        // delete book
        deleteBtn.addEventListener('click', () => {
            library.splice(deleteBtn.dataset.index, 1);
            clear();
            display();
        })

        // change read status
        readBtn.addEventListener('click', () => {
            library[deleteBtn.dataset.index].readStatus();
            clear();
            display();
        })
    }
}

// clear the bookshelf
function clear() {
    const books = document.querySelectorAll('.book');
    for (const item of books) {
        shelf.removeChild(item);
    }
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// add book
const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', () => {
    const modal = addBookBtn.closest('.modal');
    if (addBook())
        closeModal(modal);
    clear();
    display();
});

// display all book at beginning
display();