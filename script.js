

window.addEventListener('load', function() {
    const timeout = setTimeout(function() {
        document.body.classList.remove('not-loaded');
        clearTimeout(timeout);
    }, 1000);
});


function restartAnimations() {
    document.body.classList.add('not-loaded');
    setTimeout(function() {
        document.body.classList.remove('not-loaded');
    }, 100);
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        restartAnimations();
    }
});

