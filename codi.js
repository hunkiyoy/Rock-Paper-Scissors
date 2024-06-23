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
    } else {
        console.log('La PC gana');
    }
}

// Llamar a la función para iniciar el juego
getHumanChoice();
