//Factory
function createMicrofone(color){
    let isOn = true

    function toggleOnOff(){
        if(isOn){
            console.log("desligar")
        }else{
            console.log("ligar")
        }
        isOn= !isOn;   //! é sinal de nao
    }

    return{color, toggleOnOff}

}

const microfoneBlack= createMicrofone("black");
const microfoneWhite= createMicrofone("white");

console.log(microfoneBlack.color)
console.log(microfoneWhite.color)





















function createpessoa(){
return{
    nome:'gabriel',
    idade:24 
}

}