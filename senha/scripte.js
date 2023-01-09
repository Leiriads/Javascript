var frutas = ['abacate','abacaxi','limao','laranja'];


var campo=[]

var campo_p=[]

var nome_temp = ''; //nome temporario
var nome_temp_p='';// nome temporario prioridade


//=============================================================
function func_adicionar(){
    nome_temp = document.getElementById('nome').value;
    campo.push(nome_temp);
}

function func_adicionar_p(){
    nome_temp_p = document.getElementById('nome_p').value;
    campo_p.push(nome_temp_p);
    
} 

function console_normal(){
        console.log("Array normal");
        console.log(campo);
}

function console_p(){
        console.log("Array preferencia");
        console.log(campo_p,campo);
}

function ordenar(){ //acho que nao precisa do ordenar
    
    campo_g = campo_p.concat(campo); //juntando o array normal com o prioridade gerando o Mesclado
    
    for (i = 0; i <=campo_g.length; i++) {
        campo_ok[i] = campo_g[i];
      }

    campo_ok = campo_ok.filter(function (i) { //limpa o null e o indefinido        
        return i;
      });

      resetar_array();
   
}

function array_n(){
    if(campo.length === 0){
        console.log("vazio")
        
    }else{
        console.log("G cheio")
        resetar_array();
  }
}

function g_cheiovazio(){
    if(campo_g.length ===0){  //só pra ver se o array g está vazio
        console.log("vazio");
   }else {
        console.log("cheio");
   }
}

function func_remover(){
    //frutas.pop() 
    //remove do final

if(campo.length === 0 && campo_p.length === 0){
    console.log("A lista está vazia");
}else{
    if(campo_p.length === 0 ){
        campo.shift();
    }else{
        campo_p.shift();
    }    
}

    //frutas.shift()
    //removedo começo
}

function listar(){
    document.getElementById('teste').innerHTML = campo; //mostrando na tela o adicionado
}

