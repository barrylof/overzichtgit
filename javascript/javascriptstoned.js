/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


var Dbutton = document.querySelector("section [type=image]");
var libButton = document.querySelector("nav a:nth-of-type(2) img");


function downloadbuttonremove() {
    Dbutton.src = "images/gifs/downloadbar.gif";
    setTimeout(
        function(){
            // volgende stap
            Dbutton.src = "images/gifs/added.gif";
        },
        2000
    );
    setTimeout(
        function(){
            // volgende stap
            libButton.src = "images/gifs/library.gif";
        },
        2900
    );
    
}

Dbutton.addEventListener('click', downloadbuttonremove);


var likebutton = document.querySelector(".like");

function likeButtonremove(){
    likebutton.src = "images/gifs/like.gif";
}

likebutton.addEventListener('click', likeButtonremove);