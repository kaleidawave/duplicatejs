// by @kaleidawave
Array.from(document.querySelectorAll('[data-duplicate]')).forEach(elem => {
    elem.innerHTML = elem.children[0].innerHTML.repeat(elem.dataset.duplicate);
});