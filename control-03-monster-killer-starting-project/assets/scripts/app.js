const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

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

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("You would be dead but the bonus life saved you!");
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You won !");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost !");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("It's a draw !");
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0)
        reset();
}

function attackMonster(mode) {
    let maxDmg;
    if (mode === MODE_ATTACK) {
        maxDmg = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK){
        maxDmg = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDmg);
    currentMonsterHealth -= damage;
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
    endTurn();
}

attackBtn.addEventListener("click", onAttack);
strongAttackBtn.addEventListener("click", onStrongAttack);
healBtn.addEventListener("click", onHeal);
