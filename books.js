document.addEventListener('DOMContentLoaded', () => {
    const booksList = document.getElementById('booksList');

    const books = [
        {
            title: 'تعلم JavaScript',
            image: 'https://m.media-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg',
            downloadUrl: '#'
        },
        {
            title: 'Python للمبتدئين',
            image: 'https://m.media-amazon.com/images/I/51aqYc1QyrL._SX379_BO1,204,203,200_.jpg',
            downloadUrl: '#'
        },
        {
            title: 'أساسيات ++C',
            image: 'https://m.media-amazon.com/images/I/51j7sdPtjBL._SX379_BO1,204,203,200_.jpg',
            downloadUrl: '#'
        }
    ];

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card';
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <button class="download-btn" onclick="window.open('${book.downloadUrl}', '_blank')">تحميل الكتاب</button>
        `;
        booksList.appendChild(bookElement);
    });
});