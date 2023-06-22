const wiggletime = 100;

function rotateElement(el) {
    el.classList.add('rotateable');
    el.style.transform = 'rotate(20deg)';

    setTimeout(function() {
        el.style.transform = 'rotate(-20deg)';
        setTimeout(function() {
            el.style.transform = 'rotate(0deg)';
        }, wiggletime);
    }, wiggletime);
    return true;
}

function squishElement(el) {
    el.classList.add('rotateable');
    el.style.transform = 'scaleX(1.5)';

    setTimeout(function() {
        el.style.transform = 'scaleX(0.5)';
        setTimeout(function() {
            el.style.transform = 'scaleX(1)';
        }, wiggletime);
    }, wiggletime);

    return true;
}

function shakeElement(el) {
    el.classList.add('rotateable');
    el.style.marginLeft = '20px';

    setTimeout(function() {
        el.style.marginLeft = '-20px';
        setTimeout(function() {
            el.style.marginLeft = '0px';
        }, wiggletime);
    }, wiggletime);

    return true;
}

function skewElement(el) {
    el.classList.add('rotateable');
    el.style.transform = 'skewX(20deg)';

    setTimeout(function() {
        el.style.transform = 'skewX(-20deg)';
        setTimeout(function() {
            el.style.transform = 'skewX(0deg)';
        }, wiggletime);
    }, wiggletime);

    return true;
}

function zoomElement(el) {
    el.classList.add('rotateable');
    el.style.transform = 'rotate(5deg) scale(1.1)';
    setTimeout(function() {
        el.style.transform = 'rotate(5deg) scale(1.2)';
        setTimeout(function() {
            el.style.transform = 'rotate(5deg) scale(1)';
        }, wiggletime);
    }, wiggletime);
    return true
}

document.querySelector('.square').addEventListener('mouseover', function(ev) {
    rotateElement(this);
});

document.querySelector('.name').addEventListener('mouseover', function(ev) {
    rotateElement(this);
});

document.querySelector('.circle__orange').addEventListener('mouseover', function(ev) {
    shakeElement(this);
});
document.querySelector('.circle').addEventListener('mouseover', function(ev) {
    shakeElement(this);
});
document.querySelector('.circle').addEventListener('mouseover', function(ev) {
    squishElement(this);
});
document.querySelector('.circle2').addEventListener('mouseover', function(ev) {
    squishElement(this);
});

document.querySelector('.coffee-bag').addEventListener('mouseover', function(ev) {
    skewElement(this);
});
document.querySelector('.bottle').addEventListener('mouseover', function(ev) {
    skewElement(this);
});
