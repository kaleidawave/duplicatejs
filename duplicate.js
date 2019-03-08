// by @kaleidawave
Array.from(document.querySelectorAll('[data-duplicate]')).forEach(elem => {
    elem.innerHTML = elem.children[0].outerHTML.repeat(elem.dataset.duplicate);
});