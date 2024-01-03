function verificarNumero() {
    return new Promise((resolve, reject) => {
       let numero = Math.floor(Math.random() * 10);
       if (numero > 5) {
        resolve("Número alto!");
       } else {
        reject("Número baixo!");
       }
    });
};

console.log(verificarNumero().then().catch());





