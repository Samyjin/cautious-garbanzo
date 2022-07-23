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


let chosenMaxLife;

try {
    chosenMaxLife = getMaxLifeValue();
} catch (error) {
    console.error(error.message);
    chosenMaxLife = 100;
    alert(error.message);
}

let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function getMaxLifeValue() {
    const enteredValue = prompt("Choose MaxLife: ", "100");
    let parseValue = parseInt(enteredValue);
    if (isNaN(parseValue) || parseValue <= 0) {
        throw { message: "Error: The entered number is not a number !" };
    }
    return parseValue;
}

function writeToLog(event, value, playerHP, monsterHP) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHP,
        finalPlayerHealth: playerHP,
    };
    // if (event === LOG_PLAYER_ATTACK || event === LOG_PLAYER_STRONG_ATTACK) {
    //     logEntry.target = "MONSTER";
    // } else if (event === LOG_MONSTER_ATTACK || event === LOG_PLAYER_HEAL) {
    //     logEntry.target = "PLAYER";
    // }

    /* 
    *
    If one case is valid, if there is no break keyword, cases are apply falling through 
    *
    */
    switch (event) {
        case LOG_PLAYER_ATTACK:
        case LOG_PLAYER_STRONG_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case LOG_MONSTER_ATTACK:
        case LOG_PLAYER_HEAL:
            logEntry.target = "PLAYER";
            break;
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
    const maxDmg = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent =
        mode === MODE_ATTACK ? LOG_PLAYER_ATTACK : LOG_PLAYER_STRONG_ATTACK;
    const damage = dealMonsterDamage(maxDmg);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentPlayerHealth, currentMonsterHealth);
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
    /* Interresting feature: label
     *
     * Rarely use but present in the language.
     *
     */

    outerWhile: do {
        // This is a label.
        let j = 0;
        innerLoop: for (let k = 0; k < 5; k++) {
            console.log(`j: ${j} k: ${k} `);
            if (k === 3) {
                break outerWhile;
            }
        }
    } while (i < 3);

    // for (let i = 0; i < battleLog.length; i++) {
    //     console.log(battleLog[i]);
    // }

    // for-of is used for array ( strings are array of character ).
    let i = 0;
    for (const logEntry of battleLog) {
        console.log(`#${i}`);
        for (const property in logEntry) {
            console.log(`${property} => ${logEntry[property]}`);
        }
        i++;
    }
}

attackBtn.addEventListener("click", onAttack);
strongAttackBtn.addEventListener("click", onStrongAttack);
healBtn.addEventListener("click", onHeal);
logBtn.addEventListener("click", onLog);
