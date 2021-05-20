function myFunction() { /* Change the background in dark color */
    let body = document.body;
    body.classList.toggle("dark-mode");
 }

let changeCopyright = document.getElementById("copyrightDate");
changeCopyright.addEventListener("click", changing)


function changing(){ /* Change the text at the click */
    if(changeCopyright.innerHTML == "Nous sommes une équipe dévouée et presque bonne en tout et parfois en rien mais qui fait toujours sa lessive avec du AJAX."){
        changeCopyright.innerHTML = "© Copyright 2021 DropshippingCo & ClickHere Studios - Tous droits réservés."
   }else{
       changeCopyright.innerHTML = "Nous sommes une équipe dévouée et presque bonne en tout et parfois en rien mais qui fait toujours sa lessive avec du AJAX."
    }
}
