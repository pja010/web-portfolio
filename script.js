import Typed from 'typed.js';

var typing1 = new Typed(".animate", {
    strings: ["whoami</br>"],
    typeSpeed: 120,
    loop: false,
    showCursor: false,
});
var typing2 = new Typed(".output", {
    strings: ["<b>Per Astrom</br>Programmer</br>Software Engineer</b>"],
    typeSpeed: 40,
    startDelay: 2000,
    showCursor: false,
});
var typing3 = new Typed(".pre-prompt", {
    strings: ["~$ ^100 ls"],
    startDelay: 5000,
    typeSpeed: 120,
    showCursor: false,
});
var typing4 = new Typed(".ls-output", {
    strings: [
        '<b><a id=home href="">./home</a>   <a id=about href="#section-about">about</a>   <a id=projects href="#section-work">work</a>   <a id=contact href="#section-contact">contact</a></b>' +
        "<br><p></p>",
    ],
    startDelay: 6000,
    typeSpeed: 1,
    showCursor: false,
});
var typing5 = new Typed(".profic", {
    strings: ["------------ Proficiency ------------\>"],
    typeSpeed: 30,
    loop: false,
    reverse: true,
    showCursor: false,
});