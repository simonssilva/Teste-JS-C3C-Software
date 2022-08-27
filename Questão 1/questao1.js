function triangulo(lado1, lado2, lado3){
    if(lado1 < (lado2+lado3) && lado2 < (lado1+lado3) && lado3 < (lado1+lado2)){
        if(lado1 == lado2 && lado2 == lado3){
            document.querySelector("#valueInput").innerHTML = "Valores formam um Triângulo Equilátero.";
        }
        else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
            document.querySelector("#valueInput").innerHTML = "Valores formam um Triângulo Isósceles.";
        }
        else{
            document.querySelector("#valueInput").innerHTML = "Valores formam um Triângulo Escaleno.";
        }
    }
    else{
        document.querySelector("#valueInput").innerHTML = "Valores não formam um triângulo.";
    }
}

const ladoA = parseFloat(document.getElementById('ladoA').value);
const ladoB = parseFloat(document.getElementById('ladoB').value);
const ladoC = parseFloat(document.getElementById('ladoC').value);

triangulo(ladoA, ladoB, ladoC);