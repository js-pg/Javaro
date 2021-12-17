

const scrollToEl = (el) => {

    var el = document.querySelector(el);
    el.scrollIntoView({ behavior: "smooth", offset: 100 });
    //wait .5 seconds then set the hash
    setTimeout(() => {
        setUrlHash(el.id);
    }, 660);
};

function setUrlHash(hash) {
    window.location.hash = hash;
}

function getUrlHash() {
    return window.location.hash;
}
