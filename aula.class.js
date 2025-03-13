
 



      class Carro{
        constructor(rodas, portas, volante, cor, motor){
            this.rodas = rodas;
            this.portas = portas;
            this.cor = cor;
            this.volante = volante;
            this.motor = motor;
        }

          buzinar(){
            console.log("BIIIIIIIII BIIIIIIIII");  
        }

      }

         let carroJoao = new Carro(4, 4, "preto", "vermelho", "V8");
         let carroTayna = new Carro(4, 2, "Rosa", "Branco", "V6");
         console.log(`O carro do joão tem ${carroJoao.rodas} rodas, ${carroJoao.portas} portas, cor ${carroJoao.cor}, ${carroJoao.volante} volante com um motor ${carroJoao.motor}.`);
         console.log(`O carro do joão tem ${carroTayna.rodas} rodas, ${carroTayna.portas} portas, cor ${carroTayna.cor}, ${carroTayna.volante} volante com um motor ${carroTayna.motor}.`);


         carroTayna.buzinar();
