// Sample book data
let books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll" },
    { title: "Jane Eyre", author: "Charlotte Bronte" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Frankenstein", author: "Mary Shelley" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupery" },
    { title: "Gone with the Wind", author: "Margaret Mitchell" }
  ];
  
  // Rest of the code...
  
  // Function to display books
  function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
  
    for (let book of books) {
      const li = document.createElement("li");
      li.textContent = `${book.title} - ${book.author}`;
      bookList.appendChild(li);
    }
  }
  
  // Function to add a book
  function addBook(event) {
    event.preventDefault();
  
    const titleInput = document.getElementById("title-input");
    const authorInput = document.getElementById("author-input");
  
    const title = titleInput.value;
    const author = authorInput.value;
  
    if (title && author) {
      const newBook = { title, author };
      books.push(newBook);
      displayBooks();
  
      // Clear input fields
      titleInput.value = "";
      authorInput.value = "";
    }
  }
  
  // Add event listener to form submission
  const addBookForm = document.getElementById("add-book-form");
  addBookForm.addEventListener("submit", addBook);
  
  // Initial display of books
  displayBooks();

// Function to display a message in the chat log
function displayMessage(message, sender) {
  var chatLog = document.getElementById('chat-log');
  var messageElement = document.createElement('div');

  messageElement.textContent = message;
  messageElement.className = sender + '-message';

  chatLog.appendChild(messageElement);

  // Scroll to the bottom of the chat log
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to generate a bot greeting
function generateBotGreeting() {
  // Display a greeting in the chat log
  displayMessage('Hello! Welcome to The Digital Bookshelf. Happy reading!', 'bot');
}

// Generate the bot greeting when the page loads
generateBotGreeting();
