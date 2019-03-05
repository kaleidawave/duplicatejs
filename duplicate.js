// by @kaleidawave
let docs = document.getElementsByClassName('duplicatejs');
for (let index = 0; index < docs.length; index++) {
    let doc = docs[index].children[0].outerHTML;
    let num = docs[index].getAttribute('data-duplicate');
    for (let iter = 0; iter < (num - 1); iter++) {
        docs[index].innerHTML += doc;
    }
    docs[index].attributes.removeNamedItem('data-duplicate');
    docs[index].classList.remove('duplicatejs');
}