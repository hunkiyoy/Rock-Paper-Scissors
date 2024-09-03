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
        score('humano');
    } else {
        console.log('La PC gana');
        score('computadora');
    }
}

function getScores() {
    return {
        humano: parseInt(localStorage.getItem('humano') || '0', 10),
        computadora: parseInt(localStorage.getItem('computadora') || '0', 10)
    };
}

function score(ganador) {
    const scores = getScores();
    if (ganador === 'humano') {
        scores.humano++;
    } else if (ganador === 'computadora') {
        scores.computadora++;
    }
    localStorage.setItem('humano', scores.humano);
    localStorage.setItem('computadora', scores.computadora);
    console.log(`Humano: ${scores.humano}, Computadora: ${scores.computadora}`);
}

// Inicializa el puntaje al cargar la página
const initialScores = getScores();
console.log(`Humano: ${initialScores.humano}, Computadora: ${initialScores.computadora}`);

// Llamar a la función para iniciar el juego
getHumanChoice();
