const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const LOG_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_GAME_OVER = "GAME_OVER";
let battleLog = [];

const enteredValue = prompt("Choose MaxLife: ", "100");
let chosenMaxLife = parseInt(enteredValue);
console.log(chosenMaxLife);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, playerHP, monsterHP) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHP,
        finalPlayerHealth: playerHP,
    };
    if (event === LOG_PLAYER_ATTACK || event === LOG_PLAYER_STRONG_ATTACK) {
        logEntry.target = "MONSTER";
    } else if (event === LOG_MONSTER_ATTACK || event === LOG_PLAYER_HEAL) {
        logEntry.target = "PLAYER";
    }
    battleLog.push(logEntry);
}

function reset() {
    currentPlayerHealth = chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    hasBonusLife = true;
    resetGame(chosenMaxLife);
    restoreBonusLife();
}

function endTurn() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_MONSTER_ATTACK,
        playerDamage,
        currentPlayerHealth,
        currentMonsterHealth
    );

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("You would be dead but the bonus life saved you!");
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You won !");
        writeToLog(
            LOG_GAME_OVER,
            "YOU WON",
            currentPlayerHealth,
            currentMonsterHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost !");
        writeToLog(
            LOG_GAME_OVER,
            "YOU LOST",
            currentPlayerHealth,
            currentMonsterHealth
        );
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("It's a draw !");
        writeToLog(
            LOG_GAME_OVER,
            "DRAW",
            currentPlayerHealth,
            currentMonsterHealth
        );
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) reset();
}

function attackMonster(mode) {
    let maxDmg;
    let logEvent;
    if (mode === MODE_ATTACK) {
        maxDmg = ATTACK_VALUE;
        logEvent = LOG_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDmg = STRONG_ATTACK_VALUE;
        logEvent = LOG_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDmg);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentPlayerHealth,
        currentMonsterHealth
    );
    endTurn();
}
function onAttack() {
    attackMonster(MODE_ATTACK);
}

function onStrongAttack() {
    attackMonster(MODE_STRONG_ATTACK);
}

function onHeal() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        healValue = chosenMaxLife - currentPlayerHealth;
        alert("You can't heal more than your maximum life ! ");
    } else {
        healValue = HEAL_VALUE;
    }
    currentPlayerHealth += healValue;
    increasePlayerHealth(healValue);
    writeToLog(
        LOG_PLAYER_HEAL,
        healValue,
        currentPlayerHealth,
        currentMonsterHealth
    );
    endTurn();
}

function onLog() {
    console.log(battleLog);
}

attackBtn.addEventListener("click", onAttack);
strongAttackBtn.addEventListener("click", onStrongAttack);
healBtn.addEventListener("click", onHeal);
logBtn.addEventListener("click", onLog);
