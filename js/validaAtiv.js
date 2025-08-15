function procAtividade1(){
    let i;
    let notas=[];
    for(i=1; i<4; i++){
        notas[i]=parseFloat(prompt("Digite a "+i+"° nota dos Alunos :"));
        if(notas[i] >= 7.5){
            console.log("A nota do "+i+"° Aluno foi :"+notas[i]); 
        } 
    }
    return false;
}