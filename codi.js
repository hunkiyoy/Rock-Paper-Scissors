function getHumanChoice() {
    const humanChoice = prompt('¿Qué eliges? (piedra, papel, tijeras)');
    const computerChoice = getComputerChoice();
    if (humanChoice === 'piedra' || humanChoice === 'papel' || humanChoice === 'tijeras') {
        console.log(`Tu elección: ${humanChoice}`);
        console.log(`Elección de la computadora: ${computerChoice}`);
        resultados(humanChoice, computerChoice);
    } else {
        console.log('Elección inválida, por favor elige piedra, papel o tijeras.');
    }
}

function getComputerChoice() {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function resultados(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Empate');
    } else if (
        (humanChoice === 'piedra' && computerChoice === 'tijeras') ||
        (humanChoice === 'papel' && computerChoice === 'piedra') ||
        (humanChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        console.log('¡Ganaste!');
        score('humano')
    } else {
        console.log('La PC gana');
        score('computadora')
    }
}




//Para que funcionara el score tuve que hacer 2 variables que sean igual a 0 para sumarlos
//despues hice la funcion score con valor de ganador para poder emplazarlo despues y para hacer el algoritmo
//y despues mande a llamar a la funcion score en la funcion de resultados.
let humano = 0;
let computadora = 0;


function score(ganador) {
    if (ganador === 'humano') {
        humano++;
    } else if (ganador === 'computadora') {
        computadora++;
    }
    console.log(`Humano: ${humano}, Computadora: ${computadora}`);
}

// Llamar a la función para iniciar el juego
getHumanChoice();
