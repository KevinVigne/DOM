let button = document.querySelector("button");
function getquote(){
    let quote = document.getElementById("quote-text");
    let author = document.getElementById("author-name");
    console.log(quote.value);
    console.log(author.value);
}
button.addEventListener("click", function(event){
    event.preventDefault();
    getquote();

});
