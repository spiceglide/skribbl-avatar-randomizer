// ==UserScript==
// @name         Skribbl.io Avatar Randomizer
// @match        *://skribbl.io/*
// @grant        none
// ==/UserScript==

function random(min, max) {
    return (Math.floor(Math.random() * (30 - (-1) + 1)) + (-1));
}

let skin = random(-1, 17);
let eyes = random(-1, 30);
let mouth = random(-1, 23);
const misc = -1;

let avatar = [skin, eyes, mouth, misc];
localStorage.setItem("avatar", JSON.stringify(avatar));
