var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
         window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

         // pick new enemy to fight based on the index of the enemyNames array
         var pickedEnemyName = enemyNames[i];

         // reset enemyHealth before starting new fight
         enemyHealth = 50;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle!! GAME OVER!");
            break;
        }

    alert("Welcome to Robot Glaridators!")
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //If player chooses to fight, then fight
        if (promptFight === "Skip" || promptFight === "SKIP" || promptFight === "skip") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight! Goodbye!.");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", + playerMoney);
                break;
            }    
            //uf bi =m ask question again by re-running fight()
            else{
                fight();
            }
        }
        //subtract enemy player attack from enemy health
         enemyHealth = enemyHealth - playerAttack;
         //log a message to the console to fonfirm the operation
         console.log(
         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died");
         break;
         }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
         }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
         // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
             break;
         }
        else {
         window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
  
 for (var i = 0; i < enemyNames.length; i++) {
 var pickedEnemyName = enemyNames[i];
enemyHealth = 50;
 fight(pickedEnemyName);  }