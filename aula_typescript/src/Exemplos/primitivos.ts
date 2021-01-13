export function exemploTipos() {
    
    let numero: number   = 5;
    let nome: string     = "MAtheus";
    let eHumano: boolean = true;

    console.log("Ò numero é " + numero);
    console.log("O homem é " + nome);
    console.log("Ele é humano? " + eHumano);
}

export function exemploIfLoop() {
    
    let cont = 0;

    while (cont <= 5) {
        let nome = "Alvaro";
        if (cont === 3 || nome === "Alvaro") {
            
            console.log("Chegou");
        } else {
            console.log("Não Chegou")
        }           
        console.log("Contador " + cont);
        cont++;
    }
}