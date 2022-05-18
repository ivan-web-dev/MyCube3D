"use strict"

let cube = document.querySelector('.cube');
let active = document.querySelectorAll('.active');
let rotateX = 0,
    rotateY = 0;
let body = document.querySelector('body');
let scrollLocked = document.querySelector('.scroll__lock'),
    scrollUnlocked = document.querySelector('.scroll__unlock');
    
function controlCube() {
    document.onkeydown = function (e) {
        if (e.keyCode === 37) rotateY -= 3;
        else if (e.keyCode === 38) rotateX += 3;
        else if (e.keyCode === 39) rotateY += 3;
        else if (e.keyCode === 40) rotateX -= 3;
        document.querySelector('.cube').style.transform = 'rotateY(' + rotateY + 'deg)' + 'rotateX(' + rotateX + 'deg)';
    };
};

function mobileControl() {
    document.querySelector('.btn__top').addEventListener('click', function () {
        rotateX += 3;
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    document.querySelector('.btn__bottom').addEventListener('click', function () {
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        rotateX -= 3;
    });
    
    document.querySelector('.btn__left').addEventListener('click', function () {
        rotateY -= 3;
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    document.querySelector('.btn__right').addEventListener('click', function () {
        rotateY += 3;
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
};

function scrollLock() {
    scrollLocked.addEventListener('click', function () {
        body.classList.add('lock');
        scrollLocked.classList.remove('active');
        scrollUnlocked.classList.add('active');
    });
};

function scrollUnlock() {
    scrollUnlocked.addEventListener('click', function () {
        body.classList.remove('lock');
        scrollLocked.classList.add('active');
        scrollUnlocked.classList.remove('active');
    });
};

function cubeRotate() {
    cube.addEventListener('mousedown', e => {
        let startX = e.clientX;
        let startY = e.clientY;
        body.addEventListener('mousemove', function handler(event) {
            let moveX = event.clientX;
            let moveY = event.clientY;
            rotateX = rotateX - ((startX - moveX) / 150);
            rotateY = rotateY + ((startY - moveY) / 150);
            cube.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
            body.addEventListener('mouseup', e => {
                this.removeEventListener(event.type, handler);
            });
        });
    });
};

function touchControl() {
    cube.addEventListener('touchstart', e => {
        let startX = e.changedTouches[0].pageX;
        let startY = e.changedTouches[0].pageY;
        body.addEventListener('touchmove', function handler(event) {
            let moveX = event.changedTouches[0].pageX;
            let moveY = event.changedTouches[0].pageY;
            rotateX = rotateX - ((startX - moveX) / 500);
            rotateY = rotateY + ((startY - moveY) / 500);
            cube.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        });
    });
}; 

function allFunc() {
    controlCube();
    mobileControl();
    scrollLock();
    scrollUnlock();
    cubeRotate();
    touchControl();
}; allFunc()