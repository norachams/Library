const mylibarary = [{Atomichabits}]

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(this.title,this.author,this.pages,this.read)
    };
}

function addBookToLibrary() {
    // do stuff here
  }