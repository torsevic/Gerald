window.addEventListener("load", setup);

function setup(){

    var fenetre=document.getElementById("fenetre");
    var upload=document.getElementById("upload");
    var container=document.getElementById("container");
    var description=document.getElementsByClassName("description");
    var images=document.getElementsByClassName("images");
    
    fenetre.style.display="none";

    upload.addEventListener("click",OuvreForm);

    function OuvreForm(){
        if(fenetre.style.display=="none"){
            console.log("click");
            fenetre.style.display="block";
            container.style.opacity=0.3;}
        else{
            fenetre.style.display="none";
            container.style.opacity=1;
        }
    }
//    
//    for (var i=0; i<=description.length; i++){
//        description[i].onclick=function OuvreImg(){
//        console.log("click");
//            if(images[i].style.display=="none"){
//            
//            images[i].style.display="block";
//        }
//        else{
//            images[i].style.display="none";
//        }}
//    }
}