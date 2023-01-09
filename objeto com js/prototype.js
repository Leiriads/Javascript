//por padrao a cor vai ser black
function Microfone(color = 'black'){
    this.color = color;
    this.isOn = true;
}  


//adicionando a funcao na cadeia de prototipos do objeto.

Microfone.prototype.toggleOnOff = function(){
    if(this.isOn){
        console.log("desligar")
    }else{
        console.log("ligar")
    }
    this.isOn= !this.isOn;   //! é sinal de nao
}

const microfone = new Microfone(); //objeto  microfone minusculo

const microfone2 = new Microfone('white');

console.log(microfone)
console.log(microfone2)