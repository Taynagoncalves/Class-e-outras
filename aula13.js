let texto = "Hello Batata"
console.log("Ele disse", texto);
console.log(`Ele disse ${texto}`);


try {
    let numeros = [20, 56, 98];
    console.log(numeros[2].toFixed(1));
} catch(error){
    console.error(`o error foi ${error}`);
}
// indentificar erro