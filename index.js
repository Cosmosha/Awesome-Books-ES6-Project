import getTime from './modules/getTime.js';
import Books from './modules/book.js';
import { listLink, addBookLink, contactLink } from './modules/navigation.js';

const links = listLink;
links.init();
const addBook = addBookLink;
addBook.init();
const contact = contactLink;
contact.init();
const book = Books;
book.init();
const time = getTime;
time.init();