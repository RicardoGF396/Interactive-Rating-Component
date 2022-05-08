let ratings = document.querySelectorAll(".rate");
let ratingSelected = 0;
let congratsRating = document.getElementById("ratingSelected");
let btn = document.getElementById("btn");


const rateInput = (event) => {

    rateNode = document.getElementsByClassName("rating-value-active")[0];
    if(rateNode !== undefined){
        rateNode.classList.remove("rating-value-active");
        console.log("Se removió el último");
    }
    event.target.className += " rating-value-active";
    console.log("Se añadió el que seleccionaste");

    //Guardamos el valor del btn que fue seleccionado
    ratingSelected = Number(event.target.value)
    console.log("Valor de la variable " + ratingSelected);
}

btn.addEventListener("click", () => {
   document.getElementById("card").style.display = "none"
   document.getElementById("card-2").style.display = "block"
   congratsRating.innerHTML = ratingSelected
})

