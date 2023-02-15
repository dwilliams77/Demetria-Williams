/* Declare variables below to save the different sections (divs) of your story*/

let pinkBag = document.querySelector(" .option-one");

let whiteBag = document.querySelector(" .option-two");

let pinkDiv = document.querySelector(".option-one-screen");

let whiteDiv = document.querySelector(".option-two-screen");
let uber=document.querySelector(".uber");

    let wrap=document.querySelector(".handwrap");

let handwrapDiv = document.querySelector(" .option-two-end");

let uberDiv = document.querySelector(" .option-one-end");


let body = document.querySelector("body");

pinkBag .onclick=function(){
    pinkDiv.style.display="block";
    body.style="background-color: #e64004";
    };

whiteBag.onclick=function(){
    whiteDiv.style.display="block";
        body.style="background-color: lightpink";

};

uber.onclick=function(){
    uberDiv.style.display="block";
};

wrap.oneclick=function(){
    handwrapDiv.style.display="block";
};


