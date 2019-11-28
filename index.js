//Basico2 - Arrow function
let calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultados = calc(1, 2, "+");
console.log(resultados);