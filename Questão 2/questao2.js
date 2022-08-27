function bhaskara(a,b,c){
    const calc = [];
    const delta = ((b**2)-4*a*c);
    if(delta < 0){
        document.querySelector("#valueDelta").innerHTML = "Delta é negativo.";
    }
    else{
        calc[0] = (-b+Math.sqrt(delta)) / (2*a);
        calc[1] = (-b-Math.sqrt(delta)) / (2*a);
        document.querySelector("#valueBhaskara").innerHTML = `Valor de x1= ${calc[0].toFixed(2)} e x2= ${calc[1].toFixed(2)}`;
    }
}

const a = parseFloat(document.getElementById('valorA').value);
const b = parseFloat(document.getElementById('valorB').value);
const c = parseFloat(document.getElementById('valorC').value);

bhaskara(a,b,c);