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

}

const shelf = document.querySelector('.bookshelf');

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
    
    bookInfo.append(author, title, pages, read);
    shelf.appendChild(bookInfo);

    author.textContent = item.author;
    title.textContent = item.title;
    pages.textContent = item.pages;
    read.textContent = item.read;
}