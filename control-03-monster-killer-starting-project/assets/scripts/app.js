const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;

function endTurn() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You won !");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost !");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("It's a draw !");
    }
}

function attackMonster(mode) {
    let maxDmg;
    if (mode === "ATTACK") {
        maxDmg = ATTACK_VALUE;
    } else if (mode === "STRONG_ATTACK"){
        maxDmg = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDmg);
    currentMonsterHealth -= damage;
    endTurn();
}
function onAttack() {
    attackMonster("ATTACK");
}

function onStrongAttack() {
    attackMonster("STRONG_ATTACK");
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
