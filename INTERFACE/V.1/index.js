window.addEventListener("load", setup);

function setup(){

    var fenetre=document.getElementById("fenetre");
    var upload=document.getElementById("upload");
    var container=document.getElementById("container");
    fenetre.style.display="none";

    upload.addEventListener("click",Ouvre);

    function Ouvre(){
        if(fenetre.style.display=="none"){
            console.log("click");
            fenetre.style.display="block";
            container.style.opacity=0.3;}
        else{
            fenetre.style.display="none";
            container.style.opacity=1;
        }
    }
}