let library = [
    {
        author: 'Mirantee',
        title: 'Javascript is FUN',
        pages: 50,
        read: true
    },
    {
        author: 'AYAYA',
        title: 'THE WEEB WAY',
        pages: 69,
        read: false
    },
    {
        author: 'Billy',
        title: 'Gachi rule the WORLD',
        pages: 6969,
        read: true
    },
];

function book(author, title, pages, read) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read;
}

function addBook() {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const newBook = new book(author, title, pages, read);
    library.push(newBook);
}

const shelf = document.querySelector('.bookshelf');

// display the bookshelf
function display() {
    for (const item of library) {
        const bookInfo = document.createElement('div');
        bookInfo.className = 'book';
    
        const author = document.createElement('div');
        author.className = 'author';
        const title = document.createElement('div');
        title.className = 'title';
        const pages = document.createElement('div');
        pages.className = 'pages';
        const read = document.createElement('div');
        read.className = 'read';
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn';
        const readBtn = document.createElement('button');
        readBtn.className = 'btn';
        
        bookInfo.append(author, title, pages, read, deleteBtn, readBtn);
        shelf.appendChild(bookInfo);
    
        author.textContent = `Author: ${item.author}`;
        title.textContent = `Title: ${item.title}`;
        pages.textContent = `Pages: ${item.pages}`;
        read.textContent = `Read: ${item.read}`;
        deleteBtn.textContent =  `Delete`;
        readBtn.textContent = `Read`;
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

const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', () => {
    const modal = addBookBtn.closest('.modal');
    closeModal(modal);
    addBook();
    clear();
    display();
});

display();