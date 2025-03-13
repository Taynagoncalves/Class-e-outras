



     let carro = {rodas: 4,
        portas: 4,
        cor: "vermelho",
        motor: "V8",
        volante: "couro preto tipo cobra",
        andar: function () { // andar
            console.log("O carro esta andando");
        },
          buzinar: function (){ //buzinar
            console.log("BIII BIIIIII")
          }
        };
        
    
            console.log(carro.motor);
            console.log(`A cor do carro é ${carro.cor} e o motor é ${carro.motor}`);
            carro.cor = "Amarelo" // mudando a cor 

            console.log(`A cor do carro é ${carro.cor} e o motor é ${carro.motor}`);

            carro.chassi = "21031123"; // adicionando 
            console.log(`A cor do carro é ${carro.cor} e o motor é ${carro.chassi}`);

            delete carro.volante;// Deletar item
            console.log(carro);

            console.log(carro.andar()); // ativando carro
            console.log(carro.buzinar()); // ativando buzina


            



              

          

