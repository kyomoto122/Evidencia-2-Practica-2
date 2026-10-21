const inputFig = document.getElementById("fig");
const inputCar = document.getElementById("car");
const inputAltura = document.getElementById("altura");
const inputBase = document.getElementById("base");
const btnMostrar = document.getElementById("btnMostrar");
const outputResul = document.getElementById("resul");

inputFig.addEventListener("change", e => {
    document.getElementById("agrupado").hidden = inputFig.value != 2
})

btnMostrar.addEventListener("click",e => {
    e.preventDefault();

    let fig = inputFig.value;
    let altura = parseInt(inputAltura .value);
    let base = parseInt(inputBase.value);
    let caracter = inputCar.value;
    let resul = "";
    let lineas=0;
    if(fig == 1) {
        for (let i=1 ; i <= altura ; i++) {
        resul+=caracter.repeat(i) + "\n"
        }
    }

    else if(fig == 2) {
        document.getElementById("agrupado").hidden=false
        for (let a = 1 ; a <= altura ; a++) {
        resul+=caracter.repeat(base) + "\n"
        }
        
    }
    
    outputResul.value = resul;
});
