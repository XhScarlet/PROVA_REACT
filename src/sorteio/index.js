const readLine=require('prompt-sync')();

function aleatorio(){
    try {
        const numero=parseInt(Math.random()*1000);
        let tent=10;

        console.log("Jogo do numero aleatorio");
        console.log('Digite um número');

        let esc=Number(readLine());


        while(esc!=numero){

            if(tent>1){

                if(esc>numero){
                    console.log(O número sorteado é menor que ${esc});
                }
                else if(esc<numero){
                    console.log(O número sorteado é maior que ${esc});
                }
                tent--;
                console.log("Você errou o número, tente de novo")
                console.log(Você ainda tem ${tent} tentativas);
                esc=Number(readLine());
            }

            else {
                console.log(O número sorteado era: ${numero})
                throw new Error("Acabaram as suas tentativas!");
            }

        }

        if(esc==numero){
            console.log("Você ganhou! Parabêns ")
        }

    } catch (err) {
        console.log(err.message)
    }
}

aleatorio();