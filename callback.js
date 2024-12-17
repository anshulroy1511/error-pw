function doubleArray(arr, callback) {
    const doubled = arr.map(num => num * 2);
    callback(doubled);
}

doubleArray([1, 2, 3, 4], result => console.log(result)); // [2, 4, 6, 8]


// String manipulation
function manipulateString(str) {
    const upperStr = str.toUpperCase();
    return function logString() {
        console.log(`The manipulated string is: ${upperStr}`);
    };
}

const stringLogger = manipulateString("hello world");
stringLogger();




// age in days 
function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;
    return function logDetails() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
}

const person = { firstName: "John", lastName: "Doe", age: 30 };
const logger = ageInDays(person);
logger(); // The person's full name is John Doe and their age in days is 10950.



// arrange alphabet
function arrangeBooks(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles.sort());
}

const books = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

arrangeBooks(books, sortedTitles => console.log(sortedTitles));
// ["1984", "The Alchemist", "To Kill a Mockingbird"]


// greeting promis 
function greet(name) {
    return new Promise(resolve => {
        resolve(`Hello, ${name}!`);
    });
}

greet("Mithun").then(message => console.log(message)); // Hello, Mithun!


//  Fetch Results Asynchronously
async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}

fetchTodo();


// mutliple req
async function fetchMultiple() {
    const todoResponse = fetch("https://jsonplaceholder.typicode.com/todos/1");
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts/1");

    const [todo, post] = await Promise.all([todoResponse, postResponse]);
    const todoData = await todo.json();
    const postData = await post.json();

    console.log({ todo: todoData, post: postData });
}

fetchMultiple();


// get data from api
async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}

fetchPosts();


// error handling
async function fetchWithErrorHandling() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

fetchWithErrorHandling();

