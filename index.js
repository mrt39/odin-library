//array of book objects
let myLibrary = [];


//class constructor for new books
class Book{
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }
  toggleRead() {
    this.read = !this.read;
    }
  }
  




//NEW BOOK button displays the form when clicked
var btn = document.querySelector("#newBookBtn");
btn.addEventListener("click",
    function (event) {
      document.getElementById('newBookForm').style.display = 'block';

    }
);

//submit button doesn't post data to server, by blocking default function
//submit button also activates addBooktoLibrary function
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click", submitBtnClick);

function submitBtnClick(event) {
  event.preventDefault();
  addBookToLibrary3()
}


//submit button appends the form input to the array and activates updateTable function
function addBookToLibrary3(){

  let inputTitle = document.getElementById('title').value
  let inputAuthor = document.getElementById('author').value
  let inputPages = document.getElementById('page').value
  let inputRead = false

  if (document.getElementById('read').checked) {
    inputRead = true
  }
  else {
    inputRead = false
  }

  myLibrary.push(new Book(inputTitle, inputAuthor, inputPages, inputRead))

  updateTable2()
}


//loop through the array and display each item on the table
function updateTable2(){
  document.querySelector("table").innerHTML = ""
  document.querySelector("table").innerHTML +=  "<tr>" + "<th>" + "Title" + "</th>" + "<th>" + "Author" + "</th>" + "<th>" + "Pages" + "</th>" + "<th>" + "Read" + "</th>" + "</tr>" 
  for (let i = 0; i < myLibrary.length; i++) {
    const node = document.createElement("tr");

    let nodeTitle = document.createElement("td");
    nodeTitle.innerText = myLibrary[i].title
    node.appendChild(nodeTitle)
  
    let nodeAuthor = document.createElement("td");
    nodeAuthor.innerText = myLibrary[i].author
    node.appendChild(nodeAuthor)
  
    let nodePages = document.createElement("td");
    nodePages.innerText = myLibrary[i].pages
    node.appendChild(nodePages)
  
    let nodeRead = document.createElement("td");
    nodeRead.innerText = myLibrary[i].read
    node.appendChild(nodeRead)

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove"
    //add functionality to remove button
    removeBtn.addEventListener("click", function(){
      myLibrary.splice(i, 1)
      updateTable2()
    })

    node.appendChild(removeBtn)


    let readBtn = document.createElement("button");
    readBtn.innerText = "Toggle Read"
    //add functionality to toggle read button
    readBtn.addEventListener("click", function(){
      myLibrary[i].toggleRead()
      updateTable2()
    })

    node.appendChild(readBtn)
  
    document.querySelector("table").appendChild(node)
  }
}
