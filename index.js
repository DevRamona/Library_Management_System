let library = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        availability: true,
        holder: null
    },
    {
        title: "Adventures of Tom Sawyer",
        author: "Mark Twain",
        availability: true,
        holder: 'Alice'
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        availability: true,
        holder: 'Sam'
    }

]
const addBook = (title, author, availability = true) => {
    const newBook = {
        title: title,
        author: author,
        availability: availability,
        holder: null
    }
    library.push(newBook);
    console.log(`the book ${title} written by ${author} has been added successfully`)
}
addBook('Alice in Wonderland', 'Lewis Carol', true);
addBook('To kill a mockingbird', 'Harper Lee', true);

function displayAvailableBooks() {
    console.log("Available Books:");
    for (let book of library) {
        if (book.availability) {
            console.log(`${book.title} by ${book.author}`);
        }
    }
}
displayAvailableBooks();

function borrowBook(title, borrower) {
    for (let book of library) {
        if (book.title === title && book.availability) {
            book.availability = false;
            book.holder = borrower;
            console.log(`Sorry, ${book.title} by ${book.author} is not available. ${borrower} has borrowed ${title}.`);
            return;
        }
    }
    console.log(`Sorry, ${title} is not available.`);
}
borrowBook('The Catcher in the Rye', 'Sam');
borrowBook('Alice in Wonderland', 'Alice');


function returnBook(title,){
    for (let book of library) {
        if (book.title === title && book.availability) {
            book.availability = true;
            book.holder = null;
            console.log(`${title} has been returned successfully.`);
            return;
        }
    }
    console.log(`Sorry, ${title} is not available.`);
}




































