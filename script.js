"use strict";

function redBlockMaker() {
    const redDynamicDiv = document.createElement('div');
    redDynamicDiv.style.backgroundColor = 'red';
    redDynamicDiv.style.width = '100px'
    redDynamicDiv.style.height = '100px'
    document.body.prepend(redDynamicDiv);
}

function blueBlockMaker() {
    const blueDynamicDiv = document.createElement('div');
    blueDynamicDiv.style.backgroundColor = 'blue';
    blueDynamicDiv.style.width = '100px'
    blueDynamicDiv.style.height = '100px'
    document.body.prepend(blueDynamicDiv);
}

function greenBlockMaker() {
    const greenDynamicDiv = document.createElement('div');
    greenDynamicDiv.style.backgroundColor = 'green';
    greenDynamicDiv.style.width = '100px'
    greenDynamicDiv.style.height = '100px'
    document.body.prepend(greenDynamicDiv);
}

function yellowBlockMaker() {
    const yellowDynamicDiv = document.createElement('div');
    yellowDynamicDiv.style.backgroundColor = 'yellow';
    yellowDynamicDiv.style.width = '100px'
    yellowDynamicDiv.style.height = '100px'
    document.body.prepend(yellowDynamicDiv);
}
