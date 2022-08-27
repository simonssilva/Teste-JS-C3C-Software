function resultadoAluno(nota){
    const mult = [];
    for(i=40; i <= 100; i++){
        if(i % 5 == 0){
          mult[i] = i;
        }
    }
    const multiplos = mult.filter(function (el) {
        return el != null;
    })
    if(nota >= 0 && nota <= 100){
        if(nota < 38){
            document.querySelector("#valorNota").innerHTML = "Aluno Reprovado.";
        }
        else{
            for(i=0; i < multiplos.length; i++){
                if(multiplos[i] > nota && (multiplos[i]-nota) < 3){
                    nota = multiplos[i];
                    break;
                }
            }
            document.querySelector("#valorNota").innerHTML = `Aluno aprovado, nota arredondada para ${nota} pontos.`;
        }
    }
    else{
        document.querySelector("#valorNota").innerHTML = "Nota inserida fora do intervalo de 0 a 100.";
    }
}

const notaAluno = parseFloat(document.getElementById('notaAluno').value);

resultadoAluno(notaAluno);