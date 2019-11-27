let cor = "azul";
if(cor === "verde"){
    console.log("siga");
}else if(cor === "amarelo"){
    console.log("atenção");
}
else if(cor === "vermelho"){
    console.log("pare");
}


let cor = "azul";

switch(cor){
    case "verde":
        console.log("siga")
        break;
    case "amarelo":
        console.log("pare")
        break;
    case "vermelho":
        console.log("siga");
        break;
    default:
        console.log("Não sei");
}