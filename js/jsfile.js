
var a,b,c;
function load(){
    document.querySelector("#forHome").className="open";

}

function home(){

    document.querySelector("#forTeams").classList.remove("open");
    document.querySelector("#forHistory").classList.remove("open");
    document.querySelector("#forHome").classList.remove("open");

    a=document.querySelector("#forHome");
    a.className="open";
}

function teams(){
    document.querySelector("#forTeams").classList.remove("open");
    document.querySelector("#forHistory").classList.remove("open");
    document.querySelector("#forHome").classList.remove("open");

    b=document.querySelector("#forTeams");
    b.className="open";
}

function history(){
    document.querySelector("#forTeams").classList.remove("open");
    document.querySelector("#forHistory").classList.remove("open");
    document.querySelector("#forHome").classList.remove("open");

    c=document.querySelector("#forHistory");
    c.className="open";
}