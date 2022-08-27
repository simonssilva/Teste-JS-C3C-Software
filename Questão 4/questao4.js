function luidyMoura(num){
    vetor = [];
    if(Number.isInteger(num) == true){
        for(i=0; i <= num; i++){
            if(i % 5 == 0 && i % 9 == 0 && i > 0){
                vetor[i] = "LuidyMoura";
            }
            else if(i % 9 == 0 && i > 0){
                vetor[i] = "Moura"
            }
            else if(i % 5 == 0 && i > 0){
                vetor[i] = "Luidy";
            }
            else{
                vetor[i] = i;
            }
        }
        vetor.shift();
        document.querySelector("#valueResult").innerHTML = vetor;
    }
    else{
        document.querySelector("#valueResult").innerHTML = "Não é um número inteiro.";
    }
}

const num = parseInt(document.getElementById('num').value);

luidyMoura(num);