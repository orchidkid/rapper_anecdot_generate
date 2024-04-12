let anecdotParagraph = document.querySelector('.anecdotField');

let counter = 2;

setInterval(function(){
    let string = `Йде ${counter} реперів по вулиці. ${counter - 1} в кепці, а всі ${counter} пізди получать`;
    anecdotParagraph.innerHTML = string
    counter += 1
}, 3000)