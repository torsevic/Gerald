window.addEventListener("load", setup);

function setup(){

    var fenetre=document.getElementById("fenetre");
    var upload=document.getElementById("upload");
    var ecole=document.getElementById("ecole");
    var ecoles=document.getElementById("ecoles");
    var school=document.getElementsByClassName("school");
    var container=document.getElementById("container");
    var valider=document.getElementById("valider");
    var description=document.getElementsByClassName("description");
    var contenu=document.getElementsByClassName("images");
    var imgs=document.getElementsByTagName("img");
    
    fenetre.style.display="none";

    upload.addEventListener("click",OuvreForm);
    ecole.addEventListener("click",OuvreEcoles);
    valider.addEventListener("click",OuvreForm);
    
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
    
    function OuvreEcoles(){
        if(ecoles.style.display=="none"){
            console.log("click");
            ecoles.style.display="block";
            container.style.opacity=0.3;}
        else{
            ecoles.style.display="none";
            container.style.opacity=1;
        }
    }
    
    for(var i=0; i<=school.length; i++){
    school[i].addEventListener("click",function ChangeEcole(){
        console.log(this.innerHTML);
        ecole.innerHTML=this.innerHTML;
        ecoles.style.display="none";
        container.style.opacity=1;
    });}
    
    for(var i=0; i<=imgs.length; i++){
    imgs[i].addEventListener("click",Next);
    }
    
    function Next(){
        var source=this.src;
        var sourceLength=source.length;
        var numero=Number(source.charAt(sourceLength-5));
        numero+=1;
        console.log(numero);
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